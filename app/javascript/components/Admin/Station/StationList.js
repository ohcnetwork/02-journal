import React from "react";

import Table from "Common/Table";

function StationList({ loading, data, error }) {
  const columns = [
    {
      title: "Station Name",
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

export default StationList;
