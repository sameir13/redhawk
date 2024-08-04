import React from "react";
import BreadCrumb from "@/src/components/BreadCrumb";
import TextBox from "@/src/components/About-Us/TextBox";
import Services from "@/src/components/About-Us/Services";
import Logoslider from "@/src/components/Logoslider";

const Page = () => {
  return (
    <>
      <BreadCrumb Head={"About Us"} />
      <div className="px-4 py-[110px] max-w-[1100px] m-auto">
        <TextBox />
        <Logoslider/>
      </div>
        <Services/>
    </>
  );
};

export default Page;
