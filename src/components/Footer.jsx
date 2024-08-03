import React from "react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    "bxl-facebook",
    "bxl-instagram",
    "bxl-xing",
    "bxl-youtube",
  ];
  return (
    <footer className="bg-[#F9F8F8]  px-5 py-10 ">
      <div className="flex gap-7 flex-col items-center justify-between md:flex-row md:gap-0 ">

        <img src="./images/logo.png" className="w-[150px]" alt="" />
        <p className=" text-md  text-center ">©2024, Red Hawk All rights reserved.</p>

        <div className=" flex items-center justify-center gap-4 flex-wrap">
          {socialLinks.map((v, i) => (
            <Link href={"/"}>
              <div
                key={i}
                className="border border-black flex items-center justify-center h-10 w-10 rounded-full hover:-translate-y-1 transition-all duration-300"
              >
                <i className={`bx ${v} text-xl`}></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
