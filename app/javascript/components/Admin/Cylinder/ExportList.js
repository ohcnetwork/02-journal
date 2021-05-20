import { useMemo } from "react";
import { CSVLink } from "react-csv";
import dayjs from "dayjs";

import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
} from "./cylinderParams";

const headers = [
  { label: "Serial Number", key: "serial_number" },
  { label: "Supplier Name", key: "supplier_name" },
  { label: "Capacity", key: "capacity" },
  { label: "Status", key: "status" },
  { label: "Type", key: "type" },
];

const formatData = (data) => {
  return data?.map((cylinder) => ({
    ...cylinder,
    supplier_name: cylinder.vendor.name,
    capacity: findLabel(capacityOptions, cylinder.capacity),
    type: findLabel(typeOptions, cylinder.category),
    status: findLabel(statusOptions, cylinder.status),
  }));
};

function ExportList({ data }) {
  const formattedData = useMemo(() => {
    return formatData(data);
  }, [data]);

  if (!formattedData) {
    return null;
  }

  return (
    <CSVLink
      filename={`O₂ Trail-Cylinders-List ${dayjs().format("DD/MM/YYYY")}`}
      data={formattedData}
      headers={headers}
      className="p-2 inline-flex rounded-lg border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50"
    >
      Export Data
    </CSVLink>
  );
}

export default ExportList;
