"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowDownNarrowWideIcon, FilePlus2 } from "lucide-react";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  description: string;
}

export function DataTablePost<TData, TValue>({
  columns,
  data,
  description,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const menuContext = useContext(MenuContext);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      columnVisibility,
    },
  });

  if (!menuContext) {
    return (
      <div className="fixed top-2 right-3">
        <Alert variant="destructive" className="w-full h-fit m-10">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Cannot Find context</AlertDescription>
        </Alert>
      </div>
    );
  }

  const { isSidebarOpen } = menuContext;

  return (
    <div className={`${isSidebarOpen && "max-w-6xl"} ml-auto`}>
      <div className="flex items-center justify-between py-4">
        {/* filter input and button section */}
        <div className="flex flex-grow gap-5">
          <Input
            placeholder="Filter Judul..."
            value={(table.getColumn("judul")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("judul")?.setFilterValue(event.target.value)
            }
            className="max-w-sm border-gray-500"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center justify-between gap-3">
                Filter Columns <ArrowDownNarrowWideIcon className="w-4 mt-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="divide-y divide-primary">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Button Add */}
        <Button asChild>
          <Link href="/dashboard/unggulan/add_unggulan">
            <FilePlus2 className="mr-2" /> Add Unggulan
          </Link>
        </Button>
      </div>

      {/* Top Table Section */}
      <div className="relative mt-16">
        <Alert className="absolute -top-10 left-0 right-0 w-[95%] m-auto z-[5]">
          <AlertTitle>Hai User!</AlertTitle>
          <AlertDescription>
            {description} <span className="font-bold">Gen A</span>
          </AlertDescription>
        </Alert>

        {/* table section */}
        <Table className="bg-white/75 rounded-lg border-t-4 border-primary border-b-2 w-full overflow-y-auto">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="h-[100px]" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="align-bottom" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Table check and button pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex gap-5">
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage}
          >
            Previous Page
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage}
          >
            Next Page
          </Button>
        </div>
      </div>
    </div>
  );
}
