"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const pointer = [
    "Business Management",
    "Human Eye Surveillance",
    "Instant Updates",
    "Reasonable pricing",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const bounceTransition = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  return (
    <section
      id="about"
      className="overflow-x-hidden  py-[110px] px-5 max-w-[1100px] m-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      ref={ref}
    >
      <motion.div
        initial={{ x: "-200%" }} // Start completely off screen to the left
        animate={inView ? { x: 0 } : {}} // Animate to original position when in view
        transition={bounceTransition}
      >
        <span className="text-gray-600 text-sm block mb-2 font-medium">
          ABOUT RED HAWK
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
        <p className="mb-9 para">
          At Red Hawk, Inc., we deliver customized management services for
          diverse industries. As a market-leading company from Silicon Valley,
          our commitment to excellence and innovation ensures secure, efficient,
          and optimized operations, positioning us as a leader in the field.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
          {pointer.map((v, i) => (
            <div key={i} className="flex items-center md:text-md gap-2">
              <i className="bx bxs-chevron-right-circle text-lg md:text-xl text-[#DDC548]"></i>
              {v}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "200%" }} // Start completely off screen to the right
        animate={inView ? { x: 0 } : {}} // Animate to original position when in view
        transition={bounceTransition}
      >
        <img src="./images/report.png" className="w-full" alt="Report" />
      </motion.div>
    </section>
  );
};

export default About;
