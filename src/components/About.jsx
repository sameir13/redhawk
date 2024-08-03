import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const About = () => {
  return (
    <section className=" py-[110px] px-5 max-w-[1100px] m-auto">
      <Heading heading={"About Red Hawk"} />
      <p className=" mb-10 text-2xl text-center">
        At Red Hawk, Inc., we deliver customized management services for diverse
        industries. Our commitment to excellence and innovation ensures secure,
        efficient, and optimized operations, positioning us as a leader in the
        field.
      </p>
      <div className=" mb-10">
        <img src="./images/report.png" className="w-full" alt="" />
      </div>

      <div className="flex items-center justify-center">
        <Link
          className=" w-fit block text-white text-md bg-[#F0483E] px-20 py-4"
          href={"/"}
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About;
