import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </div>
  );
};

export default HomeLayout;
