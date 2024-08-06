"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <div className=" absolute top-9  left-5  md:left-9 ">
      <div
        onClick={() => router.push("/contact-us")}
        className=" group flex items-center cursor-pointer bg-[#FFDD2B] sliderShadow justify-center relative  w-10 h-10 md:w-14  md:h-14 rounded-full "
      >
        <i class="bx bxs-paper-plane  text-xl md:text-3xl "></i>
        <span className=" absolute left-[110%] opacity-0 group-hover:opacity-100    transition-all duration-300   text-md md:text-lg font-medium bg-white sliderShadow px-9 py-1 rounded-l-full whitespace-nowrap">
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Contact;
