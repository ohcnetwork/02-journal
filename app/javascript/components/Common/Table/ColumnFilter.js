import { useEffect, useRef, useState } from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

function ColumnFilter({ column }) {
  const { filterValue, preFilteredRows, setFilter, filterable } = column;
  const [isOpen, setIsOpen] = useState(!!filterValue);
  const inputRef = useRef(null);

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
  };

  return (
    <>
      <button title="Filter" onClick={handleToggle}>
        <Icon icon={IconNames.FILTER} />
      </button>
      {isOpen && (
        <div className="absolute w-40">
          <input
            name="search"
            ref={inputRef}
            value={filterValue || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (!value) {
                setIsOpen(false);
              }
              setFilter(e.target.value || undefined);
            }}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 mt-2"
            placeholder={`Search ${count} records...`}
          />
        </div>
      )}
    </>
  );
}

export default ColumnFilter;
