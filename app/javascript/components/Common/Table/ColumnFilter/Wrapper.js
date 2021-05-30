import { useRef, useState } from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useClickAway } from "ahooks";
import classNames from "classnames";

function Wrapper({ children, column }) {
  const { filterValue, setFilter, filterable } = column;
  const [isOpen, setIsOpen] = useState(!!filterValue);
  const containerRef = useRef(null);

  useClickAway(() => {
    if (!filterValue) {
      setIsOpen(false);
    }
  }, containerRef);

  if (!filterable) {
    return null;
  }

  const handleToggle = (event) => {
    event.stopPropagation();
    setIsOpen((o) => !o);
    setFilter(undefined);
  };

  return (
    <>
      <button title="Filter" onClick={handleToggle}>
        <Icon
          className={classNames({
            "text-gray-400": !filterValue,
            "text-gray-600": filterValue,
          })}
          icon={filterValue ? IconNames.FILTER_KEEP : IconNames.FILTER}
        />
      </button>
      <div
        className="absolute"
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {isOpen && children}
      </div>
    </>
  );
}

export default Wrapper;
