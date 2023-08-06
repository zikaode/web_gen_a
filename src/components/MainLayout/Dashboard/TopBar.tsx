"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiMenuAltLeft, BiMenuAltRight, BiSolidBellRing } from "react-icons/bi";
import { Badge } from "../../ui/badge";
import { useSelectedLayoutSegments } from "next/navigation";
import Breadcrumb from "../../ui/breadcrumb";
import { useContext, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuContext } from "@/context/MenuContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import ThemeButton from '@/components/ThemeButton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TopBar = () => {
  const menuContext = useContext(MenuContext);
  const selectedSegments = useSelectedLayoutSegments();
  const selectedSegment = selectedSegments[selectedSegments.length - 1].replace(
    "_",
    " "
  );

  const [isSticky, setIsSticky] = useState(false);
  const offsetToSticky = 10; // Offset for smooth transition

  const handleScroll = () => {
    if (window.scrollY >= offsetToSticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const { isSidebarOpen, toggle } = menuContext;

  return (
    <header
      className={`rounded-xl flex justify-between px-6 py-2 mb-5 items-center z-50 ${
        isSticky &&
        "sticky top-5 bg-gray-200/70 shadow shadow-slate-500 backdrop-blur-sm"
      } duration-300`}
    >
      <div>
        <Breadcrumb />
        <h2 className="first-letter:uppercase text-2xl font-semibold">
          {selectedSegment ? selectedSegment : "Dashboard"}
        </h2>
      </div>
      <div className="flex items-center">
        <ThemeButton />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={toggle}
              className="text-gray-600 hover:text-gray-900 duration-200 focus:outline-none py-2 px-4 block ml-auto"
            >
              {isSidebarOpen ? (
                <BiMenuAltRight className="text-3xl" />
              ) : (
                <BiMenuAltLeft className="text-3xl" />
              )}
            </TooltipTrigger>
            <TooltipContent side="left">
              {isSidebarOpen ? "Close SideBar" : "Open SideBar"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="relative cursor-pointer mt-3 group">
          <Popover>
            <PopoverTrigger>
              <Badge className="absolute -top-3 right-2.5 rounded-full">
                <small>1</small>
              </Badge>
              <BiSolidBellRing className="text-xl text-gray-600 group-hover:text-gray-900 duration-200 mr-5" />
            </PopoverTrigger>
            <PopoverContent className="max-w-[13rem] border-b-2 border-b-primary">
              you got nothing yet
            </PopoverContent>
          </Popover>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopBar;
