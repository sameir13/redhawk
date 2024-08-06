import React from "react";
import BreadCrumb from "@/src/components/BreadCrumb";

const Page = () => {
  return (
    <div>
      <BreadCrumb Head={"Contact Us"} />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl text-center">Contact Us</h1>
      </div>
    </div>
  );
};

export default Page;
