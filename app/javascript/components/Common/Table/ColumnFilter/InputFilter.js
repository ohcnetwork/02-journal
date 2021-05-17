import { useRef } from "react";

import Wrapper from "./Wrapper";

function InputFilter({ column }) {
  const { filterValue, setFilter, preFilteredRows } = column;
  const ref = useRef();
  const count = preFilteredRows.length;

  return (
    <Wrapper column={column}>
      <div className="w-40">
        <input
          ref={ref}
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
    </Wrapper>
  );
}

export default InputFilter;
