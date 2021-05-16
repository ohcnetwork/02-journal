import { useEffect, useMemo, useState } from "react";

import Table from "Common/Table/ReactTable";
import { getSupplier } from "Apis/Admin/supplier";

function SupplierList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await getSupplier();
        setData(response || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const columns = useMemo(
    [
      {
        Header: "Supplier Name",
        accessor: "name",
        className: "text-gray-900",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Phone",
        accessor: "phone",
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

  return <Table dataKey="id" columns={columns} data={data} />;
}

export default SupplierList;
