import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type EmailResponse = {
  id: number;
  email: string;
  name: string;
  body: string;
  date: string;
};

const emailResponse: EmailResponse[] = [
  {
    id: 1,
    email: "john@mail.com",
    name: "John Doe",
    body: "Hello, how are you?",
    date: "2021-10-10",
  },
  {
    id: 2,
    email: "jane@mail.com",
    name: "Jane Smith",
    body: "Hello, how are you?",
    date: "2021-10-10",
  },
];

const columnHelper = createColumnHelper<EmailResponse>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("body", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
  }),
];

export default function SearchTable() {
  const [data] = React.useState(() => [...emailResponse]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <Table className="w-full border-collapse">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="p-2 text-left font-bold">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="border-b hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
