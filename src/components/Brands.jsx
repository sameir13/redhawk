import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const Brands = () => {
  return (
    <section className=" py-[110px] px-4  bg-[#eeeeee]">
      <Heading heading={"Management Through CCTV Monitoring"} />

      <div className=" relative  m-auto max-w-[1000px] flex flex-col  bg-[#FFDD2B]  ">
        <div className="  max-w-[100%] md:max-w-[80%]  py-20 px-10   md:py-32 md:px-20">
          <p className=" mb-10 text-2xl">
            Red Hawk enhances management through live monitoring services,
            providing real time oversight to streamline business operations
          </p>
          <div className=" mb-14 flex flex-col gap-4 ">
            <span className=" flex items-center gap-3 text-lg">
              <i class="bx bx-bell text-4xl"></i>
              Instant Mobile Notifications
            </span>

            <span className=" flex items-center gap-3 text-lg">
              <i class="bx bx-book-content text-4xl"></i>
              Daily/Weekly/Monthly Reports
            </span>

            <span className=" flex items-center gap-3 text-lg">
              <i class="bx bxs-credit-card text-4xl"></i>
              Reimbursement
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

        <div className=" conditionCLass absolute shadow-2xl right-[-10%]  top-[25%] bg-white  flex-col items-center justify-center py-14 px-10 gap-10">
          <img src="./images/logo.png" className="w-[300px] mb-5" alt="" />
          <p className=" text-xl text-center ">
            Streamline Business <br /> Success with Red Hawk
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
