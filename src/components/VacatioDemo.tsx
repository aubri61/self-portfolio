"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function VacatioDemo() {
  return (
    <div className="flex items-center justify-center w-full relative">
      <button className="swiper-prev absolute -left-4 sm:left-5 top-1/2 z-10 -translate-y-1/2 text-4xl text-blue-300 ">
        <IoIosArrowBack />
      </button>
      <button className="swiper-next absolute -right-4 sm:right-5 top-1/2 z-10 -translate-y-1/2 text-4xl text-blue-300">
        <IoIosArrowForward />
      </button>

      <div className="w-[380px] h-[780px] flex justify-center items-center overflow-hidden rounded-2xl ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          // navigation={true} // ← 화살표 버튼
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: "swiper-button-disabled",
          }}
          autoplay={{
            delay: 3500, // 2.5초마다 자동 전환
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full h-full"
        >
          {Array.from({ length: 11 }).map((_, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/materials/vacatio/${i + 1}.png`}
                alt={`slide ${i + 1}`}
                width={250}
                height={500}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
