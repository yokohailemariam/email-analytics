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

type ResponderProfileResponse = {
  id: number;
  image: string;
  email: string;
  name: string;
  body: string;
  title: string;
  date: string;
};

const responderProfileResponse: ResponderProfileResponse[] = [
  {
    id: 1,
    image:
      "https://ui-avatars.com/api/?name=John+Doe&background=random&size=128",
    email: "johndoe@mail.com",
    name: "John Doe",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a ullam ut in dicta, quis inventore tenetur minus obcaecati aut est, quia iure, optio quo accusamus. Earum animi perferendis culpa!",
    title: "Marketing Manager",
    date: "2021-10-10",
  },
  {
    id: 2,
    image:
      "https://ui-avatars.com/api/?name=John+Doe&background=random&size=128",
    email: "janesmith@mail.com",
    name: "John Doe",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a ullam ut in dicta, quis inventore tenetur minus obcaecati aut est, quia iure, optio quo accusamus. Earum animi perferendis culpa!",
    title: "CEO at Company",
    date: "2021-10-10",
  },
];

const columnHelper = createColumnHelper<ResponderProfileResponse>();

const columns = [
  columnHelper.accessor("image", {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="Profile"
        className="size-[40px] rounded-full"
      />
    ),
    header: "Photo",
  }),

  columnHelper.accessor("name", {
    cell: (info) => (
      <div>
        <div>{info.getValue()}</div>
        <div className="text-sm text-gray-500">{info.row.original.title}</div>
      </div>
    ),
    header: "Name",
  }),
  columnHelper.accessor("body", {
    cell: (info) => (
      <div className="truncate max-w-sm md:max-w-xl">{info.getValue()}</div>
    ),
    header: "Bio",
  }),
  columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
    header: "Date",
  }),
];

export default function ResponderProfileTable() {
  const [data] = React.useState(() => [...responderProfileResponse]);
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
