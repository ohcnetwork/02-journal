import { useEffect, useRef, useState } from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useClickAway } from "ahooks";

function Wrapper({ children, column }) {
  const { filterValue, setFilter, filterable } = column;
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
