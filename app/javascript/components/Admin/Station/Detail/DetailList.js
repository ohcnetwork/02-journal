import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { PhoneNumber } from "Common/DisplayFormats";

function DetailList({ station }) {
  const addressLink = `${station.name} ${station.address}`;
  return (
    <ul className="flex space-x-8 text-gray-600">
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            addressLink
          )}`}
          title="Click to open on Google Maps"
        >
          <div className="flex items-center max-w-md">
            <Icon
              icon={IconNames.HOME}
              className="w-5 h-5 mr-1 text-gray-400"
              aria-hidden="true"
            />
            <p>{station.address}</p>
          </div>
        </a>
      </li>
      <li>
        <PhoneNumber showIcon>{station.phone}</PhoneNumber>
      </li>
    </ul>
  );
}

export default DetailList;
