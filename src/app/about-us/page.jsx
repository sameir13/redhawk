import React from "react";
import BreadCrumb from "@/src/components/BreadCrumb";
// import TextBox from "@/src/components/About-Us/TextBox";
import Services from "@/src/components/About-Us/Services";
import AboutSlider from "@/src/components/About-Us/AboutSlider";
import Industries from "@/src/components/Industries";

const Page = () => {
  return (
    <>
      <BreadCrumb Head={"About Us"} />
      <AboutSlider />
      {/* <TextBox /> */}
      <Industries />
      <Services />
    </>
  );
};

export default Page;
