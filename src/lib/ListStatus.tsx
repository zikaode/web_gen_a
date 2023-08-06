import { BsStars } from "react-icons/bs";
import { IListStatus } from "./Types";
import { HiMiniClipboardDocumentList, HiUserGroup } from "react-icons/hi2";
import { IoNewspaperSharp } from "react-icons/io5";
import { PencilRulerIcon } from "lucide-react";

const getDataAnggota = async () => {
  const res = await fetch(
    "https://64c0ffa6fa35860bae9fc1e3.mockapi.io/api/user",
    { cache: "no-store" }
  );
  return res.json();
};

const jumlahAnggota = Object.keys(getDataAnggota()).length;

export const ListStatus: IListStatus[] = [
  {
    post: 5,
    title: "Unggulan",
    icon: <BsStars className="text-3xl" />,
    iconButton: <PencilRulerIcon className="w-4" />,
    link: "/dashboard/unggulan",
  },
  {
    post: 5,
    title: "Kegiatan",
    icon: <HiMiniClipboardDocumentList className="text-3xl" />,
    iconButton: <PencilRulerIcon className="w-4" />,
    link: "/dashboard/kegiatan",
  },
  {
    post: 5,
    title: "Berita",
    icon: <IoNewspaperSharp className="text-3xl" />,
    iconButton: <PencilRulerIcon className="w-4" />,
    link: "/dashboard/berita",
  },
  {
    post: jumlahAnggota,
    title: "Anggota",
    icon: <HiUserGroup className="text-3xl" />,
    iconButton: <PencilRulerIcon className="w-4" />,
    link: "/dashboard/anggota",
  },
];
