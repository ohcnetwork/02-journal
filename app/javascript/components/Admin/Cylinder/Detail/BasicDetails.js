import dayjs from "dayjs";

import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
  entryOptions,
} from "../cylinderParams";

const DetailListItem = ({ label, children }) => {
  return (
    <div className="sm:col-span-1 my-3">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{children}</dd>
    </div>
  );
};

function BasicDetails({ cylinder }) {
  return (
    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      <DetailListItem label="Serial Number">
        {cylinder.serial_number}
      </DetailListItem>
      <DetailListItem label="Capacity">
        {findLabel(capacityOptions, cylinder.capacity)}
      </DetailListItem>
      <DetailListItem label="Status">
        {findLabel(statusOptions, cylinder.status)}
      </DetailListItem>
      <DetailListItem label="Original Type">
        {findLabel(typeOptions, cylinder.category)}
      </DetailListItem>
      {cylinder.station?.id && (
        <DetailListItem label="Last Known Location">
          <span className="text-gray-900 font-medium">
            {cylinder.station.name}
          </span>
          <div className="mt-1">
            <span>{findLabel(entryOptions, cylinder.station.entry_exit)}</span>
            <span> - </span>
            <time
              dateTime={cylinder.station.updated_at}
              title={cylinder.station.updated_at}
            >
              {dayjs(cylinder.station.updated_at).fromNow()}
            </time>
          </div>
        </DetailListItem>
      )}
      {cylinder.vendor?.id && (
        <DetailListItem label="Supplier">{cylinder.vendor.name}</DetailListItem>
      )}
    </dl>
  );
}

export default BasicDetails;
