import { useEffect, useMemo, useRef } from "react";
import Select from "react-select";

import Wrapper from "./Wrapper";

function SelectFilter({ column }) {
  const {
    filterValue,
    setFilter,
    preFilteredRows,
    id,
    options: allOptions,
  } = column;
  const ref = useRef();

  const selectOptions = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    const uniqueRows = [...options.values()];
    return uniqueRows.map((rowValue) =>
      allOptions.find(({ value }) => rowValue === value)
    );
  }, [id, preFilteredRows]);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <Wrapper column={column}>
      <div className="w-40">
        <Select
          ref={ref}
          placeholder="Select option"
          value={allOptions.find(({ value }) => value === filterValue)}
          options={selectOptions}
          onChange={(option) => {
            setFilter(option.value);
          }}
        />
      </div>
    </Wrapper>
  );
}

export default SelectFilter;
