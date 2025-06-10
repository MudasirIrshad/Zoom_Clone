"use client";
import { cn } from "@/lib/utils";
import {
  CalendarClock,
  HistoryIcon,
  HomeIcon,
  PlusIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const sidebarRoutes = [
    {
      icon: <HomeIcon className="w-5 pr-1" />,
      route: "/",
      label: "Home",
    },
    {
      icon: <CalendarClock className="w-5 pr-1" />,
      route: "/upcoming",
      label: "Upcoming",
    },
    {
      icon: <HistoryIcon className="w-5 pr-1" />,
      route: "/previous",
      label: "Previous",
    },
    {
      icon: <VideoIcon className="w-5 pr-1" />,
      route: "/recordings",
      label: "Recordings",
    },
    {
      icon: <PlusIcon className="w-5 pr-1" />,
      route: "/personal-room",
      label: "Personal Room",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="sticky flex justify-between flex-col bg-dark-1 max-sm:hidden lg:w-[264px] pt-24">
      <div>
        {sidebarRoutes.map((route) => {
          const isActive =
            pathname === route.route ||
            (route.route !== "/" && pathname.startsWith(route.route));
          return (
            <Link key={route.label} href={route.route}>
              <div
                className={cn(
                  "flex hover:bg-dark-2 m-1 gap-4 p-3 rounded-lg items-center justify-start",
                  isActive && "bg-blue-500 hover:pointer-events-none",
                  !isActive && "bg-none"
                )}
              >
                <div>{route.icon}</div>
                <p>{route.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
