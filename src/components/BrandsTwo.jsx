import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const BrandsTwo = () => {
  return (
    <section className=" py-[110px] px-4  bg-[#F7F7F7]">
      <Heading heading={"Security Through CCTV Monitoring"} />

      <div className=" m-auto max-w-[1000px] flex flex-col  bg-[#01A768]  ">
        <div className=" py-20 px-10 md:py-24 md:px-16">
          <p className="  mb-10 md:mb-20 para text-white">
            Strengthen your security measures through Red Hawks CCTV monitoring,
            offering extensive protection through continuous surveillance
            without using any additional equipment. Our advanced system
            instantly detects and responds to potential threats, providing a
            strong defense against any unwanted activity.
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <span className=" flex items-center gap-3  text-md md:text-lg text-white">
              <i class="bx text-4xl bx-lock-alt"></i>
              Theft Prevention
            </span>

            <span className=" flex items-center gap-3 text-md md:text-lg text-white">
              <i class="bx text-4xl bx-alarm"></i>
              Emergency Handling
            </span>

            <span className=" flex items-center gap-3 text-md md:text-lg text-white">
              <i class="bx text-4xl bx-home"></i>
              Vandalism
            </span>

            <span className=" flex items-center gap-3 text-md md:text-lg text-white">
              <i class="bx text-4xl bx-x-circle"></i>
              Unauthorized Access
            </span>

            <span className=" flex items-center gap-3 text-md md:text-lg text-white">
              <i class="bx text-4xl bx-walk"></i>
              Break Inn
            </span>

            <span className=" flex items-center gap-3 text-md md:text-lg text-white">
              <i class="bx text-4xl bx-shield-x"></i>
              Drugs or Illegal Activities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsTwo;
