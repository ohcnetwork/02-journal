import { useMemo } from "react";
import { Link } from "react-router-dom";
import useRequest from "@ahooksjs/use-request";

import { getSupplier } from "Apis/Admin/supplier";
import Table from "Common/Table/ReactTable";
import { TableAddress } from "Common/DisplayFormats";
import OptionsDropdown from "./OptionsDropdown";

function SupplierList() {
  const { loading, data, error, refresh } = useRequest(getSupplier, {
    cacheKey: "admin_supplier_list",
  });

  const columns = useMemo(
    () => [
      {
        id: "name",
        Header: "Supplier Name",
        accessor: "name",
        className: "text-gray-900",
        sortable: true,
        filter: "fuzzyText",
        filterable: true,
      },
      {
        Header: "Address",
        accessor: "address",
        filter: "fuzzyText",
        filterable: true,
        Cell: function Address({ value }) {
          return <TableAddress>{value}</TableAddress>;
        },
      },
      {
        Header: "Phone",
        accessor: "phone",
        filterable: true,
      },
      {
        Header: "Cylinders",
        accessor: "cylinders.length",
        headerClassName: "text-center justify-center",
        className: "text-center text-indigo-600",
        sortable: true,
        Cell: function CylinderLink({ row }) {
          const {
            original: { id, name, cylinders },
          } = row;
          const param = new URLSearchParams();
          param.set("supplier_id", id);
          param.set("supplier_name", name);
          return (
            <Link
              to={`/admin/cylinders?${param.toString()}`}
              title="Click to view all Cylinders from this supplier"
            >
              {cylinders?.length ?? 0}
            </Link>
          );
        },
      },
      {
        id: "options",
        Header: "",
        width: 0,
        Cell: function Options({ row: { original } }) {
          const { cylinders } = original;
          const cylinderIds = cylinders.map(({ id }) => id);
          return (
            <OptionsDropdown
              id={original.id}
              cylinderIds={cylinderIds}
              refresh={refresh}
            />
          );
        },
      },
    ],
    []
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve supplier list. Please try again.</p>;
  }

  return <Table columns={columns} data={data} />;
}

export default SupplierList;
