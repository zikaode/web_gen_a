"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, FileEdit, Trash2 } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { Key } from "react";

export type Berita = {
  id: Key;
  image: Url;
  judul: String;
  Kategory: string;
  status: String;
  author: String;
  tanggal: Date;
};

export const columns: ColumnDef<Berita>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "Gambar",
    cell: ({ row }) => {
      return (
        <AspectRatio ratio={16 / 9}>
          <Image className="rounded-lg object-cover" src={row.getValue("image")} alt="Featured Image..." fill sizes="33vw" />
        </AspectRatio>
      );
    },
  },
  {
    accessorKey: "judul",
    header: "Judul",
  },
  {
    accessorKey: "kategori",
    header: "Kategori",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Badge>status</Badge>;
    },
  },
  {
    accessorKey: "author",
    header: "Author",
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
                <Button
                  size="sm"
                  className="rounded-full bg-green-500 hover:bg-green-500/80"
                >
                  <Eye className="w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>View</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" className="rounded-full">
                  <FileEdit className="w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
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
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
];
