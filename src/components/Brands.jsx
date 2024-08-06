import React from "react";
import Heading from "./Heading";

const Brands = () => {
  return (
    <section className=" py-[110px] px-4  bg-[#eeeeee]">
      <Heading heading={"Management Through CCTV Monitoring"} />

      <div className=" relative  m-auto max-w-[1000px] flex flex-col  bg-[#FFDD2B]  ">
        <div className="  max-w-[100%] md:max-w-[80%]  py-20 px-10   md:py-32 md:px-20">
          <p className=" mb-10 para">
            Red Hawk enhances management through live monitoring services,
            providing real time oversight to streamline business operations
          </p>

          <div className="  flex flex-col gap-4 ">
            <span className=" flex items-center gap-3  text-md md:text-lg">
              <i class="bx bx-bell text-4xl"></i>
              Instant Mobile Notifications
            </span>
            <p className="px-1 py-2 w-fit rounded-3xl max-w-full md:max-w-[70%]">
              Customers receive instant mobile notifications for all activities
              in their facility
            </p>

            <span className=" flex items-center gap-3 text-md md:text-lg  mt-10">
              <i class="bx bx-book-content text-4xl"></i>
              Daily/Weekly/Monthly Reports
            </span>

            <p className="px-1 py-2 w-fit rounded-3xl max-w-full md:max-w-[70%]">
              Red Hawk provides comprehensive reports for in-depth facility
              monitoring & analysis
            </p>

            <span className=" flex items-center gap-3 text-md md:text-lg mt-10">
              <i class="bx bxs-credit-card text-4xl"></i>
              Reimbursement
            </span>
            <p className="px-1 py-2 w-fit rounded-3xl max-w-full md:max-w-[70%]">
              Red Hawk offers reimbursement for undetected stolen goods under
              specific conditions
            </p>
          </div>
        </div>

        <div className=" conditionCLass absolute shadow-2xl right-[-10%]  top-[25%] bg-white  flex items-center justify-center py-14 px-10 gap-10">
          <img
            src="./images/logo.png"
            className="w-[300px] mb-5 rounded-full p-7 shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
