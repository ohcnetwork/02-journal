import Input from "Common/Form/Input";

function ColumnFilter({ column }) {
  const { filterValue, preFilteredRows, setFilter, filterable } = column;
  if (!filterable) {
    return null;
  }
  const count = preFilteredRows.length;

  return (
    <Input
      label={""}
      name="search"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

export default ColumnFilter;
