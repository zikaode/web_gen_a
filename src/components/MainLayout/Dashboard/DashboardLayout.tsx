import { ILayout } from "@/lib/Types";
import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const DashboardLayout = ({ children }: ILayout) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <main className="py-8 px-14 min-h-[93vh]">
            <TopBar />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
