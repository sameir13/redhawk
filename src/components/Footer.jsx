import React from "react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      social: "bxl-facebook",
      href: "https://www.facebook.com/profile.php?id=100092725004981",
    },

    {
      social: "bxl-instagram",
      href: "https://www.instagram.com/red_hawk.inc",
    },

    {
      social: "bxl-linkedin",
      href: "https://www.linkedin.com/company/red-hawk-usa/",
    },

    {
      social: "bxl-youtube",
      href: "https://www.youtube.com/@BoulevardHoldings",
    },
  ];

  const footerData = [
    {
      label: "+1 (916) 330-4239",
      icon: "bx-phone",
    },
    {
      label: "4080 Truxel Rd, Sacramento, Ca",
      icon: "bx-current-location",
    },
    {
      label: "Info@iRedHawk.com",
      icon: "bx-envelope",
    },
  ];
  return (
    <footer className="">
      <div className=" px-5 flex items-center  gap-4 md:gap-0  bg-[#DDC548] py-10 flex-wrap justify-between">
        {footerData.map((v, i) => {
          return (
            <div key={i} className="flex items-center gap-3 ">
              <i
                class={`bx ${v.icon} text-2xl border border-white bg-white p-1 rounded-full text-[#DDC548]`}
              ></i>
              <span className="text-md text-white">{v.label}</span>
            </div>
          );
        })}
      </div>

      <div className="bg-[#F9F8F8]  px-5 py-10  flex gap-7 flex-col items-center justify-between md:flex-row md:gap-0 ">
        <p className=" text-sm  text-center text-gray-600">
          ©2024, Red Hawk All rights reserved.
        </p>
        <img src="/images/logo.png" className="w-[150px]" alt="" />

        <div className=" flex items-center justify-center gap-4 flex-wrap">
          {socialLinks.map((v, i) => (
            <Link href={v.href} key={i} target="_blank">
              <div
                key={i}
                className={` bg-white shadow-lg  flex items-center justify-center h-10 w-10 rounded-full hover:-translate-y-1 transition-all duration-300`}
              >
                <i className={`bx ${v.social} text-xl text-gray-400`}></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
