import React from "react";
import { Minus, X } from "react-feather";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="w-full draggable h-12 bg-gray-700" />
      <div className="absolute top-2 left-3 no-drag">
        <h1 className="text-lg">Logo</h1>
      </div>
      <div className="flex gap-1 absolute top-3.5 right-3 z-50 no-drag">
        <div className="p-1 w-5 h-5 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all cursor-pointer">
          <Minus size={13} />
        </div>
        <div className="p-1 w-5 h-5 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all cursor-pointer">
          <X size={20} />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
