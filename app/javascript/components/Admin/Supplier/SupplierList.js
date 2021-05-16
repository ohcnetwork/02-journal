import Table from "Common/Table";

function SupplierList({ loading = false, data = [], error }) {
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
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve merchant list. Please try again.</p>;
  }

  return <Table dataKey="id" columns={columns} data={data} />;
}

export default SupplierList;
