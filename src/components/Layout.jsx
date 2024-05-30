import React from "react";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = ({ children, headerText }) => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="ml-72 flex flex-col w-full">
        <div className="h-20 sticky top-0 bg-white">
          <Toaster />
          <Header headerText={headerText} />
        </div>
        <div className="flex-grow px-10 py-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;