import React from "react";
import Link from "next/link";

const Industries = () => {
  const industriesArray = [
    {
      name: " Gas Stations",
      href: "/",
    },
    {
      name: "Liquor & Smoke Shops",
      href: "/",
    },
    {
      name: "Truck Yards",
      href: "/",
    },
    {
      name: "Construction Sites",
      href: "/",
    },
    {
      name: "Institutional Buildings",
      href: "/",
    },
    {
      name: "Day Care",
      href: "/",
    },
    {
      name: "Elder Care",
      href: "/",
    },
    {
      name: "Apartment Complex",
      href: "/",
    },
    {
      name: "Car Dealerships",
      href: "/",
    },
    {
      name: "Warehouse",
      href: "/",
    },
    {
      name: "Hotels, Motels & Resorts",
      href: "/",
    },
    {
      name: "Office Buildings",
      href: "/",
    },
  ];

  return (
    <section className=" px-5 py-[110px] max-w-[1100px] m-auto">
      <div className=" shadow-2xl px-10 md:px-20 py-20 md:py-32">
        <h2 className="text-4xl text-center font-semibold mb-5">
          Our Industries
        </h2>
        <p className="text-2xl mb-10 text-center">
          Discover more about the Red hawk industries
        </p>

        <div className=" flex items-center  gap-3 md:gap-5 flex-wrap justify-center">
          {industriesArray?.map((v, i) => (
            <div
              className={`flex-grow text-center px-3 py-1 rounded-lg  ${
                i % 2 === 0
                  ? "bg-[#BC021D] border border-[#BC021D] text-white"
                  : " bg-slate-200 border border-slate-200"
              }`}
              key={i}
            >
              <Link href={v.href}>{v.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
