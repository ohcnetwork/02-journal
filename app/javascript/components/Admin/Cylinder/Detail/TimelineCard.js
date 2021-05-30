import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Classes, Tooltip2 } from "@blueprintjs/popover2";

import { DateTime, CylinderDetail } from "Common/DisplayFormats";

function TimelineCard({ entry, index }) {
  const isEntry = entry.entry_exit === "entry";
  return (
    <article
      style={{
        gridColumnStart: isEntry ? 1 : 2,
        gridRowStart: index + 1,
      }}
      className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 flex items-center"
    >
      <Tooltip2
        className={Classes.TOOLTIP2_INDICATOR}
        placement="bottom"
        content={
          <CylinderDetail.EntryExitText>
            {entry.entry_exit}
          </CylinderDetail.EntryExitText>
        }
      >
        <div className="h-8 w-8 bg-indigo-500 rounded-md p-3 flex items-center justify-center">
          <Icon
            icon={isEntry ? IconNames.IMPORT : IconNames.EXPORT}
            className="text-white"
            aria-hidden="true"
          />
        </div>
      </Tooltip2>
      <div className="ml-2">
        <h3 className="font-medium text-gray-800">
          <Link to={`/admin/stations/${entry.station.id}`}>
            {entry.station.name}
          </Link>
        </h3>
        <div className="font-normal text-sm mt-1 text-gray-600 flex">
          <p className="font-bold">
            <CylinderDetail.StatusText>
              {entry.status}
            </CylinderDetail.StatusText>
          </p>
          <span>&nbsp;at&nbsp;</span>
          <DateTime>{entry.updated_at}</DateTime>
        </div>
      </div>
    </article>
  );
}

export default TimelineCard;
