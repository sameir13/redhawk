import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import BrandsTwo from "../components/BrandsTwo";
import Services from "../components/Services";
import Industries from "../components/Industries";
import About from "../components/About";
import Logoslider from "../components/Logoslider";

const Page = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <BrandsTwo />
      <Services />
      <Industries />
      <About />
      <Logoslider />
    </div>
  );
};

export default Page;
