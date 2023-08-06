import { IoNewspaperSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { RiDashboardFill } from "react-icons/ri";
import { BsHouseGearFill } from 'react-icons/bs'
import { BsStars } from 'react-icons/bs'
import { FaSignOutAlt } from 'react-icons/fa'
import { IListRoute } from "./Types";

export const ListRoute : IListRoute[] = [
    {
        id    : 1,
        icon  : <RiDashboardFill className="text-3xl"/>,
        link  : '/dashboard',
        title : "Dashboard",
    },
    {
        id    : 2,
        icon  : <BsStars className="text-3xl"/>,
        link  : '/dashboard/unggulan',
        title : "Unggulan",
    },
    {
        id    : 3,
        icon  : <HiMiniClipboardDocumentList className="text-3xl"/>,
        link  : '/dashboard/kegiatan',
        title : "Kegiatan",
    },
    {
        id    : 4,
        icon  : <IoNewspaperSharp className="text-3xl"/>,
        link  : "/dashboard/berita",
        title : "Berita",
    },
    {
        id    : 5,
        icon  : <HiUserGroup className="text-3xl"/>,
        link  : "/dashboard/anggota",
        title : "Anggota",
    },
    {
        id    : 6,
        icon  : <BsHouseGearFill className="text-3xl"/>,
        link  : "/dashboard/pengaturan",
        title : "Pengaturan",
    },
    {
        id    : 7,
        icon  : <FaSignOutAlt className="text-3xl"/>,
        link  : "/login",
        title : "Sign In",
    },
    {
        id    : 8,
        icon  : <FaSignOutAlt className="text-3xl"/>,
        link  : "/register",
        title : "Sign up",
    },
]
