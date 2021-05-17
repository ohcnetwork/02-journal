import { useMemo } from "react";

import Table from "Common/Table/ReactTable";
import { SelectFilter } from "Common/Table/ColumnFilter";

import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
} from "./cylinderParams";

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
      accessor: "supplier_name",
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
      accessor: "station_name",
      Cell: () => {
        return "-";
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
