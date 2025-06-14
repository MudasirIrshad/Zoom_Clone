import { Loader2Icon } from "lucide-react";
import React from "react";

function Loader() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Loader2Icon className="animate-spin w-12 h-12"/>
    </div>
  );
}

export default Loader;
