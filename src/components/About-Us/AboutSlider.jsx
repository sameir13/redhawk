"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const AboutSlider = () => {
  return (
    <div className=" px-5 bg-[#EEEEEE]">
      <div className="py-3">
        <Swiper
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
                <div className=" h-[160px] w-full flex items-center  justify-center ">
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

export default AboutSlider;
