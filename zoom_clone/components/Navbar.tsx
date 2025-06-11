import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZoomIcon from "../public/icons/zoom-icon.svg";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
      <div className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="gap-5 sm:hidden ">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
