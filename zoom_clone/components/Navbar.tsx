import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZoomIcon from "../public/icons/zoom-icon.svg";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-4 font-extrabold">
        <Image
          src={ZoomIcon}
          alt="Zoom Icon"
          width={32}
          height={32}
          className="max-sm:size-6"
        />
        <p className="max-sm:hidden">Yoom</p>
      </Link>
      <div className="flex-between gap-5 sm:hidden ">
        {/* Clerk user management */}
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
