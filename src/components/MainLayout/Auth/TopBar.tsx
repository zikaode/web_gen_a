"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Braces, Contact2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <nav
      className="p-4 rounded-xl mt-5 flex justify-between
     items-center shadow shadow-slate-500 backdrop-blur-sm
    "
    >
      <div>
        <Image
          className="rounded-full hover:shadow hover:shadow-primary duration-200"
          src="https://picsum.photos/200"
          width={45}
          height={45}
          alt="logo"
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {<User className="mr-2" />} About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {<Contact2 className="mr-2" />} Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {<Braces className="mr-2" />} Random
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Button>Just There</Button>
      </div>
    </nav>
  );
};

export default TopBar;
