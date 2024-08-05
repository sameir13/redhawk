import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className=" pt-[110px] px-5 max-w-[1100px] m-auto flex flex-col items-center justify-center gap-8"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          About Us
        </h2>
        <p className=" mb-5 para text-center ">
          At Red Hawk, Inc., we deliver customized management services for
          diverse industries. Our commitment to excellence and innovation
          ensures secure, efficient, and optimized operations, positioning us as
          a leader in the field.
        </p>
      </div>
      <div className=" flex items-center justify-center mb-20">
        <Link
          className="  w-full text-center   md:w-fit block text-white text-md bg-[#F0483E] px-10 py-3"
          href={"/about-us"}
        >
          Read More
        </Link>
      </div>

      <div className=" mb-10">
        <img src="./images/report.png" className="w-full" alt="" />
      </div>
    </section>
  );
};

export default About;
