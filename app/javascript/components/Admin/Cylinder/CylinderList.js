import Table from "Common/Table";

function CylinderList({ loading, data, error }) {
  const columns = [
    {
      title: "Serial Number",
      dataIndex: "serial_number",
      className: "text-gray-900",
    },
    {
      title: "Supplier Name",
      dataIndex: "supplier_name",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Last Location",
      dataIndex: "station_name",
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve station list. Please try again.</p>;
  }

  return <Table dataKey="id" columns={columns} data={data} />;
}

export default CylinderList;
