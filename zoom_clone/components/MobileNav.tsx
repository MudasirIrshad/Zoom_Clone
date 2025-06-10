"use client";
import React from "react";
import ZoomIcon from "../public/icons/zoom-icon.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CalendarClock,
  HistoryIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function MobileNav() {
  const sidebarRoutes = [
    {
      icon: <HomeIcon className="w-4" />,
      route: "/",
      label: "Home",
    },
    {
      icon: <CalendarClock className="w-4" />,
      route: "/upcoming",
      label: "Upcoming",
    },
    {
      icon: <HistoryIcon className="w-4" />,
      route: "/previous",
      label: "Previous",
    },
    {
      icon: <VideoIcon className="w-4" />,
      route: "/recordings",
      label: "Recordings",
    },
    {
      icon: <PlusIcon className="w-4" />,
      route: "/personal-room",
      label: "Personal Room",
    },
  ];

  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="w-5" />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-dark-1 border-none w-[230px]">
          <Link
            href={"/"}
            className="flex items-center gap-2 font-semibold  mb-6"
          >
            <Image
              src={ZoomIcon}
              alt="Zoom Icon"
              width={32}
              height={32}
              className="max-sm:size-5"
            />
            <p>Yoom</p>
          </Link>
          <div>
            <SheetClose>
              {sidebarRoutes.map((route) => {
                const isActive =
                  pathname === route.route ||
                  (route.route !== "/" && pathname.startsWith(route.route));
                return (
                  <SheetClose asChild key={route.label}>
                    <Link key={route.label} href={route.route}>
                      <div
                        className={cn(
                          "flex hover:bg-dark-2 gap-4 p-3 text-sm font-semibold rounded-lg items-center justify-start",
                          isActive && "bg-blue-500 hover:pointer-events-none"
                        )}
                      >
                        <div>{route.icon}</div>
                        <p>{route.label}</p>
                      </div>
                    </Link>
                  </SheetClose>
                );
              })}
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
