import { cn } from "@/lib/utils";
import React from "react";

interface HomeCardProps {
  className: string;
  icon: any;
  description: string;
  handleClick: () => void;
  title: string;
}
function HomeCard({
  className,
  icon,
  description,
  handleClick,
  title,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between px-4 py-12 rounded-2xl cursor-pointer min-h-[260px]",
        className
      )}
      onClick={handleClick}
    >
      <div>{icon}</div>
      <div className="text-xl font-bold">
        {title}
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
