import React from "react";

export interface TableColumn<T> {
  header: string;
  key: keyof T;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

function Table<T extends Record<keyof T, React.ReactNode>>({ data, columns }: TableProps<T>) {
  return (
    <table className="w-full text-left pt-4 border-collapse">
      <thead className="bg-[#F7F7F7] shadow-none border-none">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="px-4 py-2 font-bold text-xs">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-6 mt-8 text-xs">
                {column.render ? column.render(item) : item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
