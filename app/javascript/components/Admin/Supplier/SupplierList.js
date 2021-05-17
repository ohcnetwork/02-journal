import { useMemo } from "react";
import { Link } from "react-router-dom";

import Table from "Common/Table/ReactTable";
import { getSupplier } from "Apis/Admin/supplier";
import OptionsDropdown from "./OptionsDropdown";
import useRequest from "@ahooksjs/use-request";

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
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Cylinders",
        accessor: "cylinder_count",
        headerClassName: "text-center justify-center",
        className: "text-center text-indigo-600",
        sortable: true,
        Cell: function CylinderLink({ value, row }) {
          const {
            original: { id, name },
          } = row;
          const param = new URLSearchParams();
          param.set("supplier_id", id);
          param.set("supplier_name", name);
          return (
            <Link
              to={`/admin/cylinders?${param.toString()}`}
              title="Click to view all Cylinders from this supplier"
            >
              {value}
            </Link>
          );
        },
      },
      {
        id: "options",
        Header: "",
        width: 0,
        Cell: function Options({ row: { original } }) {
          return <OptionsDropdown id={original.id} refresh={refresh} />;
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
