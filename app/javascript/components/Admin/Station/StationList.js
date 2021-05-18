import Table from "Common/Table/ReactTable";

function StationList({ loading, data, error }) {
  const columns = [
    {
      Header: "Station Name",
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
    },
    {
      Header: "Phone",
      accessor: "phone",
      filterable: true,
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

export default StationList;
