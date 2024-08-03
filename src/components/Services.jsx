import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const Services = () => {
  return (
    <section className=" py-[110px] px-4  bg-[#eeeeee]">
      <Heading heading={"Our Services"} />

      <div className=" relative  m-auto max-w-[1000px] flex flex-col  bg-[#4B4B4B]  ">
        <div className="  max-w-[100%] md:max-w-[80%]  py-20 px-10   md:py-32 md:px-20">
          <p className=" mb-10 text-2xl text-white">
            Red Hawk enhances management through live monitoring services,
            providing real time oversight to streamline business operations
          </p>

          <div className=" mb-14  grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <span className=" flex items-center gap-3 text-lg text-white">
              <i className="bx text-4xl bx-video"></i>
              24/7 Remote video surveillance
            </span>

            <span className=" flex items-center gap-3 text-lg text-white">
              <i className="bx text-4xl bx-wallet-alt"></i>
              Inventory Management
            </span>

            <span className=" flex items-center gap-3 text-lg text-white">
              <i className="bx text-4xl bxs-credit-card "></i>
              Business Transparency Enhancement
            </span>

            <span className=" flex items-center gap-3 text-lg text-white">
              <i className="bx text-4xl bx-trending-up"></i>
              Top tier video analytics Lab
            </span>

            <span className=" flex items-center gap-3 text-lg text-white">
              <i className="bx text-4xl bx-alarm-exclamation"></i>
              Incident Management
            </span>

            <span className=" flex items-center gap-3 text-lg text-white">
              <i className="bx text-4xl bx-edit-alt"></i>
              Bookkeeping
            </span>
          </div>

          <div>
            <Link
              className=" w-fit block text-white text-md bg-[#F0483E] px-10 py-3"
              href={"/"}
            >
              Explore More
            </Link>
          </div>
        </div>

        <div className=" conditionCLass absolute shadow-2xl right-[-12%]  top-[25%] bg-white  flex-col items-center justify-center py-14 px-10 gap-10">
          <img src="./images/logo.png" className="w-[300px] mb-5" alt="" />
          <p className=" text-xl text-center ">
            Streamline Business <br /> Success with Red Hawk
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
