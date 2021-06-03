import { NonIdealState, Spinner, SpinnerSize } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { IconNames } from "@blueprintjs/icons";

import Table from "Common/Table/ReactTable";
import { TableAddress } from "Common/DisplayFormats";
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
    return <Spinner size={SpinnerSize.SMALL} />;
  }
  if (error) {
    return (
      <div className="py-24">
        <NonIdealState
          icon={IconNames.WARNING_SIGN}
          title="Something went Wrong!"
          description="Please retry."
        />
      </div>
    );
  }

  return <Table dataKey="id" columns={columns} data={data} />;
}

export default StationList;
