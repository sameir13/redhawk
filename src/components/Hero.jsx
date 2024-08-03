import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mainBg">
      <div className="flex flex-col items-center justify-center max-w-2xl m-auto py-[80px] px-5">
        <div className=" mb-8">
          <img
            src="./images/logo.png"
            className=" w-[200px]"
            alt="red hawk logo"
          />
        </div>

        <div className=" mb-8">
          <h1 className=" font-semibold text-white leading-tight  text-4xl md:text-[50px] text-center">
          Streamline Business Success with Red Hawk
          </h1>
        </div>

        <div className="flex gap-10 flex-wrap items-center justify-center  md:gap-20 text-md  text-white">
          <Link href={"/"}>OUR BRANDS</Link>
          <Link href={"/"}>OUR CUSTOMERS</Link>
          <Link href={"/"}>GLOBAL PRESENCE</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
