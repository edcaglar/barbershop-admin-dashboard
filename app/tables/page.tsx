
import { Metadata } from "next";
import { useEffect } from "react";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AppointmentTable from "./appointment-table"

export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {

  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <AppointmentTable/>
        </div>
      </div>
    </>
  );
};

export default TablesPage;
