import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
