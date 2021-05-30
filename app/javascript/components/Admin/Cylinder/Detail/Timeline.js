import { Link } from "react-router-dom";

import { DateTime, CylinderDetail } from "Common/DisplayFormats";

function Timeline({ history }) {
  console.log({ history });
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-500 ml-1">History</h2>
      <div className="mt-4 grid grid-cols-2 gap-12 relative">
        {history.map((entry, index) => {
          return (
            <article
              key={index}
              style={{
                gridColumnStart: entry.entry_exit === "entry" ? 1 : 2,
                gridRowStart: index + 1,
              }}
              className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6"
            >
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
            </article>
          );
        })}
        <svg
          viewBox="0 0 40 100"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "100%",
          }}
        >
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="100"
            strokeLinecap="round"
            style={{
              stroke: "#9CA3AF",
              strokeWidth: 0.6,
            }}
          />
          {history.map((entry, index) => {
            return (
              <circle
                cx="20"
                cy={index * 28 + 8}
                r="1.4"
                fill={entry.entry_exit === "entry" ? "#10B981" : "#EF4444"}
                key={index}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default Timeline;
