import { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import Table from "Common/Table";
import { getSupplier } from "Apis/Admin/supplier";

function SupplierList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const match = useRouteMatch();

  const renderLink = (id) => (
    <Link to={`${match.url}/${id}/cylinderList`}>View Cylinders</Link>
  );

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

  const columns = [
    {
      title: "Supplier Name",
      dataIndex: "name",
      className: "text-gray-900",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: " ",
      dataIndex: "id",
      render: renderLink,
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve supplier list. Please try again.</p>;
  }

  return <Table dataKey="id" columns={columns} data={data} />;
}

export default SupplierList;
