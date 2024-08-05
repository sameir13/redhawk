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
      <BreadCrumb Head={"Gas Stations"} />
      <div className="max-w-[1100px] px-5 pt-[100px] m-auto">
        <div className=" relative group">
          <img src="/inds/inds-1.jpg" className=" rounded-3xl w-full" alt="" />

          <div className=" absolute  flex   items-center z-50 w-full justify-center gap-2  bottom-0 right-0  px-5   py-2  md:py-5 bg-[#4B4B4B]">
            <i class="bx bx-gas-pump  text-2xl md:text-4xl w-fit rounded-full  p-1 md:p-2 border-2 border-white text-white "></i>
          </div>

          {/* overlay */}
          <div className=" absolute inset-0 flex z-40  scale-50 opacity-0  group-hover:scale-100 group-hover:opacity-100  transition-all duration-500 rounded-3xl  items-center justify-center bg-black/50 backdrop-blur-lg  ">
            <h2 className=" text-4xl text-white">Gas Stations</h2>
          </div>
        </div>
      </div>

      <div className=" px-5 max-w-[1100px] m-auto ">
        <div className=" relative border-2  rounded-b-3xl bg-[#4B4B4B] px-3 py-10  md:px-6 md:py-20">

        <h3 className=" text-white text-2xl md:text-3xl font-medium mb-5 text-center">Gas Stations</h3>
        <p className="para text-center text-white ">
          Gas station surveillance is essential for security and efficiency.
          CCTV cameras deter theft, vandalism, and fuel pilferage, ensuring the
          safety of employees and customers. They provide evidence for
          investigations and help resolve disputes. Red Hawks systems enable
          remote monitoring, improving response times and operational
          compliance. Additionally, robust security measures can lead to reduced
          insurance premiums, contributing to a safer and more efficient
          environment.
        </p>
        </div>
      </div>

      {/* KPIS section */}

      <div className=" grid grid-cols-1 md:grid-cols-3  py-[110px] ">
        <div className=" col-span-1 relative">
          <img
            src="/inds/inds-1.jpg"
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
    </div>
  );
};

export default Page;
