"use client";
import React from "react";
import Link from "next/link";
import Heading from "./Heading";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const serviceLinks = [
    {
      name: "24/7 Remote video surveillance",
      icon: "bx-video",
      href: "24-7-remote-video-surveillance",
    },

    {
      name: "Inventory Management",
      icon: "bx-wallet-alt",
      href: "inventory-management",
    },
    {
      name: "Business Transparency Enhancemente",
      icon: "bxs-credit-card ",
      href: "business-transparency-enhancement",
    },

    {
      name: "Top tier video analytics Lab",
      icon: "bx-trending-up",
      href: "top-tier-video-analytics-lab",
    },

    {
      name: "Incident Management",
      icon: "bx-alarm-exclamation",
      href: "incident-management",
    },

    {
      name: "Bookkeeping",
      icon: "bx-edit-alt",
      href: "bookkeeping",
    },
    {
      name: "Solar IP Cameras",
      icon: "bx-cctv",
      href: "solar-ip-cameras",
    },
  ];

  return (
    <section className=" py-[110px] px-4  bg-[#eeeeee]" id="service">
      <Heading heading={"Our Services"} />

      <div className=" relative  m-auto max-w-[1000px] flex flex-col  bg-[#4B4B4B]  ">
        <div className="  max-w-[100%] md:max-w-[80%]  py-20 px-10   md:py-32 md:px-20">
          <p className=" mb-10 para text-white">
            Red Hawk enhances management through live monitoring services,
            providing real time oversight to streamline business operations
          </p>

          <div className=" mb-14  grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {serviceLinks.map((v, i) => (
              <div key={i}>
                <span
                  onClick={() => router.push(`/services/${v.href}`)}
                  className=" flex items-center gap-3 text-md  md:text-lg text-white w-fit cursor-pointer"
                >
                  <i className={`bx text-4xl ${v.icon}`}></i>
                  {v.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className=" conditionCLass absolute shadow-2xl right-[-12%]  top-[25%] bg-white  flex items-center justify-center py-14 px-10 gap-10">
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

export default Services;
