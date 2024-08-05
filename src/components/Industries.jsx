import React from "react";
import Link from "next/link";

const Industries = () => {
  const industriesArray = [
    {
      name: " Gas Stations",
      href: "/industries/gas-stations",
    },
    {
      name: "Liquor & Smoke Shops",
      href: "/industries/liquor-smoke-shops",
    },
    {
      name: "Truck Yards",
      href: "/industries/truck-yards",
    },
    {
      name: "Construction Sites",
      href: "/industries/construction-sites",
    },
    {
      name: "Institutional Buildings",
      href: "/industries/institutional-buildings",
    },
    {
      name: "Day Care",
      href: "/industries/day-care",
    },
    {
      name: "Elder Care",
      href: "/industries/elder-care",
    },
    {
      name: "Apartment Complex",
      href: "/industries/apartment-complex",
    },
    {
      name: "Car Dealerships",
      href: "/industries/car-dealerships",
    },
    {
      name: "Warehouse",
      href: "/industries/warehouse",
    },
    {
      name: "Hotels, Motels & Resorts",
      href: "/industries/hotels-motels-resorts",
    },
    {
      name: "Office Buildings",
      href: "/industries/office-buildings",
    },
  ];

  return (
    <section
      className=" px-5 py-[110px] max-w-[1100px] m-auto "
      id="industries"
    >
      <div className=" shadow-2xl bg-[#213B13] px-10 md:px-20 py-20 md:py-32">
        <h2 className="text-4xl text-center font-semibold mb-5 text-white">
          Our Industries
        </h2>
        <p className="text-2xl mb-20 text-center para text-white">
          Discover more about the Red hawk industries
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 flex-wrap justify-center">
          {industriesArray?.map((v, i) => (
            <div
              className={` cursor-pointer flex items-center w-fit gap-2 px-3 py-1 rounded-lg`}
              key={i}
            >
              <div className=" w-10 h-10 flex items-center justify-center border border-white rounded-full">
                <i class="bx bx-log-in-circle text-3xl text-white"></i>
              </div>

              <Link
                href={v.href}
                className="block text-md md:text-lg text-white"
              >
                {v.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
