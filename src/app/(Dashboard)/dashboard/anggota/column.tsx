"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, FileEdit, Trash2 } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Pegawai = {
  id: string;
  avatar: Url;
  name: String;
  role: string;
  category: String;
};

export const columns: ColumnDef<Pegawai>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 h-4"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 w-3" />
        </Button>
      );
    },
  },
  {
    accessorKey: "avatar",
    header: "Profile",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.getValue("avatar")} />
          <AvatarFallback className="font-semibold">NO</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "category",
    header: "Area",
  },
  {
    accessorKey: "role",
    header: "Jabatan",
    cell: ({ row }) => {
      return <Badge variant="outline">{row.getValue("role")}</Badge>;
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex justify-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" className="rounded-full">
                  <FileEdit className="w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Edit
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  className="rounded-full"
                  variant="destructive"
                >
                  <Trash2 className="w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Delete
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
];
