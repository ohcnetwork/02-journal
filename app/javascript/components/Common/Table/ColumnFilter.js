import { useEffect, useRef, useState } from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useClickAway } from "ahooks";

function ColumnFilter({ column }) {
  const { filterValue, preFilteredRows, setFilter, filterable } = column;
  const [isOpen, setIsOpen] = useState(!!filterValue);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useClickAway(() => {
    if (!filterValue) {
      setIsOpen(false);
    }
  }, containerRef);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!filterable) {
    return null;
  }
  const count = preFilteredRows.length;

  const handleToggle = (event) => {
    event.stopPropagation();
    setIsOpen((o) => !o);
    setFilter(undefined);
  };

  return (
    <>
      <button title="Filter" onClick={handleToggle}>
        <Icon icon={filterValue ? IconNames.FILTER_KEEP : IconNames.FILTER} />
      </button>
      <div className="absolute" ref={containerRef}>
        {isOpen && (
          <div className="w-40">
            <input
              ref={inputRef}
              name="search"
              value={filterValue || ""}
              onChange={(e) => {
                const value = e.target.value;
                setFilter(value || undefined);
              }}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 mt-2"
              placeholder={`Search ${count} records`}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ColumnFilter;
