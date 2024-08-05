"use client";
import React from "react";
import Link from "next/link";
import Heading from "../Heading";
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
  ];

  return (
    <section className=" py-[110px] px-4  bg-[#eeeeee]">
      <Heading heading={"Our Services"} />
      <div className=" relative  m-auto max-w-[1000px] flex flex-col  bg-[#4B4B4B]  ">
        <div className=" py-20 px-10   md:py-32 md:px-20">
          <p className=" mb-10 para text-white">
            Red Hawk enhances management through live monitoring services,
            providing real time oversight to streamline business operations
          </p>

          <div className=" mb-14  grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {serviceLinks.map((v, i) => (
              <div key={i}>
                <span
                  onClick={() => router.push(`/our-services/${v.href}`)}
                  className=" flex items-center gap-3 text-md md:text-lg text-white w-fit cursor-pointer"
                >
                  <i className={`bx text-4xl ${v.icon}`}></i>
                  {v.name}
                </span>
              </div>
            ))}
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
      </div>
    </section>
  );
};

export default Services;
