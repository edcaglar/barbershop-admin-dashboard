import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import TablesPage from "./tables/page";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function Home() {
  return (
    <>
      <TablesPage />
    </>
  );
}
