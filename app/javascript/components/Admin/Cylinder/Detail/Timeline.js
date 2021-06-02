import { NonIdealState } from "@blueprintjs/core";
import TimelineCard from "./TimelineCard";

function Timeline({ history }) {
  const renderTimeline = () => {
    return (
      <div className="mt-4 grid grid-cols-2 gap-12 relative">
        {history.map((entry, index) => {
          return <TimelineCard entry={entry} key={index} index={index} />;
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
    );
  };
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-700 ml-1">History</h2>
      {history.length ? (
        renderTimeline()
      ) : (
        <div className="py-10">
          <NonIdealState
            title={<span className="text-gray-500">No history available</span>}
            description={
              <span className="text-gray-500">
                Entire timeline of a cylinder will appear here when checked into
                a station.
              </span>
            }
          />
        </div>
      )}
    </div>
  );
}

export default Timeline;
