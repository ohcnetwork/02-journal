import { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import classnames from "classnames";
import { matchSorter } from "match-sorter";
import { IconNames } from "@blueprintjs/icons";

import { InputFilter } from "./ColumnFilter";
import { NonIdealState } from "@blueprintjs/core";

/* react-table provides key */
/* eslint-disable react/jsx-key */

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}
fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({
  columns,
  data,
  emptyProps = {
    title: "No data available",
  },
  ...rest
}) {
  const defaultColumn = useMemo(
    () => ({
      Filter: InputFilter,
    }),
    []
  );
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      ...rest,
    },
    useFilters,
    useSortBy
  );

  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 text-gray-500">
        <table className="min-w-full min-h-full" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps([
                      {
                        className: classnames(
                          "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        ),
                      },
                      column.sortable ? column.getSortByToggleProps() : {},
                    ])}
                  >
                    <div
                      className={classnames(
                        "flex items-center space-x-2",
                        column.headerClassName
                      )}
                    >
                      <span>{column.render("Header")}</span>
                      <div className="relative">
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: classnames(
                            cell.column.className,
                            "px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium"
                          ),
                        })}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="py-32">
            <NonIdealState
              icon={IconNames.BUILD}
              {...emptyProps}
              title={
                <span className="text-gray-600 text-center">
                  {emptyProps.title}
                </span>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Table;
