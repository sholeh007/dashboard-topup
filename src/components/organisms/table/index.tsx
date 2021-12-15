import { useMemo } from "react";
import { useTable } from "react-table";
import Button from "../../atoms/button";

export default function Table() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
    ],
    []
  );

  const columns: any = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1",
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Action",
        id: "edit",
        Cell: ({ row }: any) => (
          <>
            <Button
              btncolor="danger"
              size="sm"
              onClick={() => console.log(row.id)}
            >
              <i className="fas fa-trash"></i>
            </Button>
            <span className="ml-3">
              <Button
                btncolor="primary"
                size="sm"
                onClick={() => console.log(row.id)}
              >
                <i className="fas fa-edit"></i>
              </Button>
            </span>
          </>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table className="table table-hover" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
