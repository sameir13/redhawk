"use client";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Logoslider = () => {
  const logos = [
    {
      link: "./logo/logo1.png",
      path: "https://hazelhome.us/",
    },
    {
      link: "./logo/logo2.png",
      path: "/",
    },
    {
      link: "./logo/logo3.png",
      path: "https://www.boulevardcre.com/",
    },
    {
      link: "./logo/logo4.png",
      path: " https://theboulevard.us/",
    },
    {
      link: "./logo/logo5.png",
      path: "/",
    },
    {
      link: "./logo/logo6.png",
      path: "https://milestone-energy.com/test/",
    },
    {
      link: "./logo/logo7.png",
      path: "https://milestone-energy.com/test/",
    },
    {
      link: "./logo/logo8.png",
      path: "https://ospreymart.com/",
    },
    {
      link: "./logo/logo9.png",
      path: "https://docuwise.us/",
    },
    {
      link: "./logo/logo10.png",
      path: "/",
    },
  ];

  return (
    <div className=" py-[70px] px-5 bg-[#F9F8F8]  md:relative  md:border-t-2 border-[#DDC548]">
      <span className=" hidden md:block absolute -top-5 bg-[#DDC548] text-white  py-2 text-lg px-5 rounded-3xl left-[43%] ">
        Our Companies
      </span>

      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 120,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 120,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 120,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {logos?.map((v, i) => (
            <div key={i}>
              <SwiperSlide>
                <div className=" h-[200px] w-full flex items-center  justify-center ">
                  <Link href={v.path} target={"_blank"}>
                    <img
                      src={v.link}
                      className=" max-w-60 object-contain"
                      alt=""
                    />
                  </Link>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Logoslider;
