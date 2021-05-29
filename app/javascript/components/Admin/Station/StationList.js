import Table from "Common/Table/ReactTable";
import { Link } from "react-router-dom";
import OptionsDropdown from "./OptionsDropdown";

function StationList({ loading, data, error, refresh }) {
  const columns = [
    {
      Header: "Station Name",
      accessor: "name",
      className: "text-gray-900",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
      Cell: function StationName({ value, row: { original } }) {
        return <Link to={`/admin/stations/${original.id}`}>{value}</Link>;
      },
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
    {
      Header: "Operators",
      accessor: "operators",
    },
    {
      id: "options",
      Header: "",
      width: 0,
      Cell: function Options({ row: { original } }) {
        return <OptionsDropdown id={original.id} refresh={refresh} />;
      },
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
