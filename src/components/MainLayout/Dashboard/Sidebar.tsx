"use client";

import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { ListRoute } from "@/lib/ListRoute";
import { usePathname } from "next/navigation";
import { MenuContext } from "@/context/MenuContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Sidebar = () => {
  const menuContext = useContext(MenuContext);
  let currentURL = usePathname();

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
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-all duration-500 z-50`}
    >
      <div
        className={`fixed ml-5 my-5 rounded-3xl bg-gradient-to-bl from-gray-700 to-gray-900 overflow-y-auto overflow-x-hidden h-[95%] ${
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-500`}
      >
        <nav className={`${isSidebarOpen ? "p-4" : "px-1 py-4"}`}>
          <div
            className={`flex flex-col items-center px-2 justify-center gap-3 transition-all duration-300`}
          >
            <Image className="rounded-full hover:shadow hover:shadow-primary duration-200" src="https://picsum.photos/200" width={50} height={50} alt="logo" />
            {isSidebarOpen && <span className="text-gray-200 uppercase font-bold text-xl tracking-widest">Gen_A</span>}
          </div>
          <Separator className="my-4 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <ul className="space-y-2">
            {ListRoute.map(({ icon, link, title, id }) => {
              let isActive: boolean = link === currentURL;

              return (
                <li key={id}>
                  <Link
                    href={link}
                    className={`flex items-center p-4 text-gray-200 hover:text-primary-foreground hover:bg-primary hover:scale-105 ${
                      isActive
                        ? "color-primary shadow-lg"
                        : ""
                    } rounded-lg ${
                      isSidebarOpen ? "" : "justify-center"
                    } transition-all duration-300`}
                  >
                    {icon}
                    {isSidebarOpen && (
                      <span className="ml-3 font-semibold">{title}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
