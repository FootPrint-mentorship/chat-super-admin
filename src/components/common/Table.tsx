import React, { useState, useEffect } from "react";
import { PaginationTwo } from "@/components/pagination";
import ArrowDownIcon from "@/components/icon/ArrowDownIcon";
import ArrowUpIcon from "@/components/icon/ArrowUpIcon";

interface TableColumn {
    header: string;
    accessor: string;
}

interface TableRow {
    [key: string]: string | number;
}

interface TableProps {
    columns: TableColumn[];
    data: TableRow[];
    showCheckbox?: boolean;
    showActionColumn?: boolean;
    showExpandColumn?: boolean;
    onRowSelect?: (selectedRows: TableRow[]) => void;
    actionRenderer?: (row: TableRow) => React.ReactNode;
    customCss?: string;
    filter?: boolean;
    renderExpandedRow?: (row: TableRow) => React.ReactNode;
}

const Table = ({
                   columns,
                   data,
                   showCheckbox = false,
                   showActionColumn = false,
                   showExpandColumn = false,
                   filter = false,
                   onRowSelect,
                   actionRenderer,
                   customCss = "",
                   renderExpandedRow,
               }: TableProps) => {
    const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState<string[]>([]); // Track expanded rows

    useEffect(() => {
        // Notify parent when the selected rows change
        if (onRowSelect) {
            onRowSelect(selectedRows);
        }
    }, [selectedRows, onRowSelect]); // Trigger whenever selectedRows change

    useEffect(() => {
        // Sync select-all checkbox with selected rows
        setSelectAll(selectedRows.length === data.length);
    }, [selectedRows, data.length]);

    const handleCheckboxChange = (row: TableRow) => {
        const isSelected = selectedRows.includes(row);
        const updatedSelectedRows = isSelected
            ? selectedRows.filter((r) => r !== row)
            : [...selectedRows, row];

        setSelectedRows(updatedSelectedRows);
    };

    const handleSelectAll = () => {
        setSelectedRows(selectAll ? [] : data);
    };

    const toggleRowExpansion = (rowId: string) => {
        setExpandedRows((prevExpandedRows) =>
            prevExpandedRows.includes(rowId)
                ? prevExpandedRows.filter((id) => id !== rowId)
                : [...prevExpandedRows, rowId]
        );
    };

    return (
        <div className={`bg-white rounded-lg shadow-md border-primary ${customCss}`}>
            <table className="w-full text-left pt-4 border-collapse ">
                <thead className="bg-[#F7F7F7]">
                <tr>
                    {showCheckbox && (
                        <th className="px-4 py-2">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className="form-checkbox text-[#17CE89] focus:ring-[#17CE89]"
                            />
                        </th>
                    )}
                    {columns.map((column) => (
                        <th key={column.accessor} className="px-4 py-2 font-bold text-xs">
                            {column.header}
                        </th>
                    ))}
                    {showActionColumn && <th className="px-4 py-2"></th>}
                    {showExpandColumn && <th className="px-4 py-2"></th>}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            {showCheckbox && (
                                <td className="px-4 py-6">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(row)}
                                        onChange={() => handleCheckboxChange(row)}
                                        className="form-checkbox text-[#17CE89] focus:ring-[#17CE89]"
                                    />
                                </td>
                            )}
                            {columns.map((column) => (
                                <td key={column.accessor} className="px-4 py-6 text-xs">
                                    {row[column.accessor]}
                                </td>
                            ))}
                            {showActionColumn && (
                                <td className="px-4 py-6 text-xs">
                                    <div className="flex items-center gap-2">
                                        {actionRenderer ? actionRenderer(row) : null}
                                    </div>
                                </td>
                            )}
                            {showExpandColumn && (
                                <td>
                                    <button
                                        className="text-blue-600 text-xs"
                                        onClick={() => toggleRowExpansion(row["id"] as string)}
                                    >
                                        {expandedRows.includes(row["id"] as string) ? (
                                            <ArrowUpIcon fill={'#8689AA'} height={'15px'} width={'15px'} />
                                        ) : (
                                            <ArrowDownIcon fill={'#8689AA'} width={'15px'} height={'15px'} />
                                        )}
                                    </button>
                                </td>
                            )}
                        </tr>

                        {expandedRows.includes(row["id"] as string) && renderExpandedRow && (
                            <tr>
                                <td
                                    colSpan={columns.length + (showCheckbox ? 1 : 0) + (showActionColumn ? 1 : 0)}
                                    className="px-4 py-4"
                                >
                                    {renderExpandedRow(row)}
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>

            <PaginationTwo filter={filter} />
        </div>
    );
};

export default Table;
