import { useEffect, useRef } from "react";

import Wrapper from "./Wrapper";

const Input = ({ column }) => {
  const { filterValue, setFilter, preFilteredRows } = column;
  const ref = useRef();
  const count = preFilteredRows.length;

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
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
  );
};

function InputFilter({ column }) {
  return (
    <Wrapper column={column}>
      <Input column={column} />
    </Wrapper>
  );
}

export default InputFilter;
