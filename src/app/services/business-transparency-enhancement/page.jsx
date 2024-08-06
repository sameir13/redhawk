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
      <BreadCrumb Head={"Business Transparency Enhancement"} />
      <section className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center  max-w-[1100px] py-[110px] px-5 mx-auto">
          <div>
            <span className="text-xs block mb-6  w-fit text-white shadow-lg bg-indigo-400 px-3 py-1 rounded-2xl">
              OUR SERVICES
            </span>
            <h2 className=" text-2xl md:text-3xl font-semibold mb-6">
            Business Transparency Enhancement
            </h2>
            <p className=" text-lg font-normal">
              Red Hawk boosts business transparency and performance with
              continuous monitoring, deterring theft and unauthorized activities
              for a secure environment. We improve operational efficiency by
              monitoring workflows and identifying areas for improvement.Our
              system enhances employee accountability and policy adherence,
              improving overall performance.Advanced CCTV analytics provide
              valuable data for informed decision-making, keeping businesses
              competitive and maintaining high performance and transparency.
            </p>
          </div>
          <div className="relative ">
            <img src="/images/service-3.jpg" className="w-full rounded-3xl" alt="" />
            <div className=" -bottom-20 right-0 absolute z-10 bg-white  shadow-2xl   w-32 h-32 rounded-full flex items-center justify-center ">
              <i class="bx bx-search-alt text-5xl text-indigo-400"></i>
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
