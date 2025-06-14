import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main className="relative">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">
              <Toaster />
              {children}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
