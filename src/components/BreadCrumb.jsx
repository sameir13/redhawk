"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BreadCrumb = ({ Head }) => {
  const router = useRouter();
  return (
    <div className=" relative flex   flex-col items-center breadCrumbImage justify-center py-20 px-5  ">
      <div>
        <img
          src="/images/logo.png"
          className=" w-[150px] mb-10  relative z-50  md:w-[200px]"
          alt=""
        />
      </div>

      <h1 className=" relative z-50 text-center text-3xl  md:text-5xl text-white mb-10 font-semibold">
        {Head}
      </h1>

      <div
        onClick={() => router.back()}
        className=" w-8 h-8 z-50   md:w-14 md:h-14 border border-white flex items-center justify-center absolute top-5 left-5 rounded-full cursor-pointer"
      >
        <i class="bx bx-left-arrow-alt text-white text-2xl md:text-3xl"></i>
      </div>
    </div>
  );
};

export default BreadCrumb;
