"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Contact from "./Contact";

const Hero = () => {
  const navLinks = [
    {
      label: "OUR SERVICES",
      href: "#service",
      color: "text-[#BC021D]",
    },
    {
      label: "OUR INDUSTRIES",
      href: "#industries",
      color: "text-[#C69C6D]",
    },
    {
      label: "ABOUT RED HAWK",
      href: "#about",
      color: "text-white",
    },
  ];

  return (
    <section className="mainBg relative">
      <Contact />
      <div className="flex flex-col items-center justify-center max-w-2xl m-auto py-[80px] px-5">
        <div className="mb-8">
          <img
            src="./images/logo.png"
            className="w-[200px]"
            alt="red hawk logo"
          />
        </div>

        <div className="mb-8">
          <h1 className="font-semibold italic text-white leading-tight text-4xl md:text-[50px] text-center">
            Your success is our business
          </h1>
        </div>

        <div className="flex gap-10 flex-wrap items-center justify-center md:gap-20 text-md text-white">
          {navLinks?.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }} // Start with opacity 0
              animate={{ opacity: 1 }} // Animate to opacity 1
              transition={{ duration: 0.5, delay: index * 0.5 }} // Add delay based on index
              className="flex items-center gap-3"
            >
              <i className={`bx bxs-circle text-sm ${value.color}`}></i>
              <Link href={value.href}>{value.label}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
