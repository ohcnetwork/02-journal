import { useMemo } from "react";

import Table from "Common/Table/ReactTable";
import { SelectFilter } from "Common/Table/ColumnFilter";

import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
  entryOptions,
} from "./cylinderParams";
import dayjs from "dayjs";

function CylinderList({ loading, data, error, supplierId }) {
  const columns = [
    {
      Header: "Serial Number",
      accessor: "serial_number",
      className: "text-gray-900",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
    },
    {
      id: "supplier_id",
      Header: "id",
      accessor: "vendor_id",
      filterable: true,
    },
    {
      Header: "Supplier Name",
      accessor: "vendor.name",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
    },
    {
      Header: "Capacity",
      accessor: "capacity",
      options: capacityOptions,
      Filter: SelectFilter,
      filterable: true,
      Cell: ({ value }) => {
        return findLabel(capacityOptions, value);
      },
    },
    {
      Header: "Status",
      accessor: "status",
      options: statusOptions,
      Filter: SelectFilter,
      filterable: true,
      Cell: ({ value }) => {
        return findLabel(statusOptions, value);
      },
    },
    {
      Header: "Last Location",
      accessor: "station.name",
      Cell: function LastLocation({ value, row }) {
        if (!value) {
          return "-";
        }
        const {
          original: { entry_exit, updated_at },
        } = row;
        return (
          <div>
            <p className="text-gray-900 font-semibold">{value}</p>
            <div className="mt-1">
              <span>{findLabel(entryOptions, entry_exit)}</span>
              <span> - </span>
              <time dateTime={updated_at} title={updated_at}>
                {dayjs(updated_at).fromNow()}
              </time>
            </div>
          </div>
        );
      },
    },
    {
      Header: "Original Type",
      accessor: "category",
      options: typeOptions,
      Filter: SelectFilter,
      filterable: true,
      Cell: ({ value }) => {
        return findLabel(typeOptions, value);
      },
    },
  ];

  const initialState = useMemo(
    () => ({
      hiddenColumns: ["supplier_id"],
      filters: supplierId
        ? [
            {
              id: "supplier_id",
              value: supplierId,
            },
          ]
        : [],
    }),
    []
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve station list. Please try again.</p>;
  }

  return <Table initialState={initialState} columns={columns} data={data} />;
}

export default CylinderList;
