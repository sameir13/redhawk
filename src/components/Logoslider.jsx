"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Logoslider = () => {
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
          {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((v, i) => (
            <div key={i}>
              <SwiperSlide>
                <div className=" h-[200px] w-full flex items-center  justify-center ">
                  <img
                    src={`./logo/logo${i + 1}.png`}
                    className=" max-w-60 object-contain"
                    alt=""
                  />
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
