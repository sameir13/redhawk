import React from "react";
import BreadCrumb from "@/src/components/BreadCrumb";

const Page = () => {
  const kpis = [
    "Theft Reporting",
    "Fencing Perimeter",
    "Stay Duration",
    "Equipment Theft",
    "Pollution Prevention",
    "Employees In/Out Timing",
    "Employee Safety",
    "Hazardous Material Prevention",
    "Vandalism",
    "Gate Control",
    "Cargo theft",
    "Drugs Or Illegal Activities",
    "Number of Available Spaces",
    "Maintaining Infrastructure",
    "Remote Monitoring and Control",
    "Waste Management",
    "Unauthorised Access",
    "Wild Life Security",
    "Loitering Issues",
  ];
  return (
    <div>
      <BreadCrumb Head={"Top tier video analytics Lab"} />
      <section className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center  max-w-[1100px] py-[110px] px-5 mx-auto">
          <div>
            <span className="text-xs block mb-6  w-fit text-white shadow-lg bg-indigo-400 px-3 py-1 rounded-2xl">
              OUR SERVICES
            </span>
            <h2 className=" text-2xl md:text-3xl font-semibold mb-6">
              Top tier video analytics Lab
            </h2>
            <p className=" text-lg font-normal">
              Red Hawk provides comprehensive services to help businesses
              leverage data for valuable insights. We specialize in collecting,
              analyzing, and interpreting extensive data using advanced
              technologies and statistical models to extract actionable
              insights. These services empower businesses to optimize
              operations, personalize marketing, enhance customer experiences,
              and identify new growth opportunities.
            </p>
          </div>
          <div className="relative ">
            <img src="/images/service-4.jpeg" className="w-full rounded-3xl" alt="" />
            <div className=" -bottom-20 right-0 absolute z-10 bg-white  shadow-2xl   w-32 h-32 rounded-full flex items-center justify-center ">
              <i class="bx bx-cctv text-5xl text-indigo-400"></i>
            </div>
          </div>
        </div>

        {/* KPIS */}

        <div className=" grid grid-cols-1 md:grid-cols-3  py-[110px] ">
          <div className=" col-span-1 relative">
            <img
              src="/images/kpis.webp"
              className=" w-full object-cover h-full"
              alt=""
            />
            <div className=" absolute inset-0 flex items-center justify-center">
              <div className=" shadow-2xl rounded-full  h-[150px] w-[150px]  md:w-[250px] md:h-[250px] flex items-center justify-center backdrop-blur-md">
                <img src="/images/logo.png" className="w-[200px]" alt="" />
              </div>
            </div>
          </div>

          <div className=" p-14 md:p-20 bg-[#1A191D] col-span-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 bg-indigo-400 text-white px-6 py-1 rounded-3xl w-fit">
              Our KPIS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {kpis.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <i class="bx bxs-circle text-md text-indigo-400"></i>

                  <span className=" text-white text-md hover:ml-4  transition-all duration-200 cursor-pointer">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
