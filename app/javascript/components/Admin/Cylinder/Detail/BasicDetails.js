import { useMemo } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
  entryOptions,
} from "../cylinderParams";

const DetailListItem = ({ label, children = "-" }) => {
  return (
    <div className="sm:col-span-1 my-3">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{children}</dd>
    </div>
  );
};

function BasicDetails({ cylinder }) {
  const supplierParam = useMemo(() => {
    const params = new URLSearchParams();
    if (!cylinder.vendor?.id) {
      return params;
    }
    const { vendor } = cylinder;
    params.set("supplier_id", vendor.id);
    params.set("supplier_name", vendor.name);
    return params;
  }, []);
  return (
    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      <DetailListItem label="Serial Number">
        {cylinder.serial_number}
      </DetailListItem>
      <DetailListItem label="Capacity">
        {findLabel(capacityOptions, cylinder.capacity)}
      </DetailListItem>
      <DetailListItem label="Last Known Status">
        {findLabel(statusOptions, cylinder.status)}
      </DetailListItem>
      <DetailListItem label="Original Type">
        {findLabel(typeOptions, cylinder.category)}
      </DetailListItem>
      <DetailListItem label="Last Known Location">
        {cylinder.station?.id && (
          <>
            <Link to={`/admin/stations/${cylinder.station.id}`}>
              <span className="text-gray-900 font-medium">
                {cylinder.station.name}
              </span>
            </Link>
            <div className="mt-1">
              <span>
                {findLabel(entryOptions, cylinder.station.entry_exit)}
              </span>
              <span> - </span>
              <time
                dateTime={cylinder.station.updated_at}
                title={cylinder.station.updated_at}
              >
                {dayjs(cylinder.station.updated_at).fromNow()}
              </time>
            </div>
          </>
        )}
      </DetailListItem>
      {cylinder.vendor?.id && (
        <DetailListItem label="Supplier">
          <Link
            to={{
              search: supplierParam.toString(),
              pathname: "/admin/cylinders",
            }}
          >
            {cylinder.vendor.name}
          </Link>
        </DetailListItem>
      )}
    </dl>
  );
}

export default BasicDetails;
