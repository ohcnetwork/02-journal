import Table from "Common/Table/ReactTable";

function CylinderList({ loading, data, error }) {
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
      Header: "Supplier Name",
      accessor: "supplier_name",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
    },
    {
      Header: "Capacity",
      accessor: "capacity",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Last Location",
      accessor: "station_name",
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve station list. Please try again.</p>;
  }

  return <Table columns={columns} data={data} />;
}

export default CylinderList;
