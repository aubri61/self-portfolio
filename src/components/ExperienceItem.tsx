"use client";

import { IWorkExperience } from "@/lib/data";
import VacatioDemo from "@/components/VacatioDemo";
import VideoDemoYoutube from "@/components/VideoDemoYouTube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

export default function ExperienceItem({
  CorpTitle,
  role,
  description,
  stacks,
  date,
  did,
  materials,
  materialType,
  materialSrc,
  materialRatio,
  isLandscape,
  demoUrl,
}: IWorkExperience) {
  // if (!item) return null;
  const highlightText = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, idx) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={idx} className="text-blue-800 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <article className=" flex mt-8 mb-10 flex-col justify-center items-start w-full px-5">
        <p className="text-2xl font-semibold flex items-center">
          <span className=" text-blue-600 font-bold text-4xl mr-2"> • </span>
          {CorpTitle}
        </p>
        <p className="text-lg mb-1 text-blue-900">{role}</p>
        <p className=" text-base mb-4   text-gray-700 font-light">{date}</p>

        <p className="font-semibold text-xl text-gray-700">Description</p>
        <p className=" break-keep mb-2 sm:text-lg text-gray-800">
          {description}
        </p>

        <p className="font-semibold text-xl mt-3 text-gray-700">What I did</p>
        <ul className="pl-3">
          {did.map((val, idx) => (
            <li
              key={idx}
              className="break-keep mb-1.5 text-base sm:text-lg text-gray-800"
            >
              <span className="text-blue-600"> • </span>
              {/* {val} */}
              {highlightText(val, "i18n")} {/* 원하는 키워드만 색 바꿔줌 */}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-xl mt-3 text-gray-700">Tech Stacks</p>
        <ul className="pl-1.5 flex flex-wrap gap-1 mt-2 mb-3  items-center">
          {stacks.map((val, idx) => (
            <li
              key={idx}
              className="text-[.95rem] sm:text-base text-gray-800 px-2  rounded-full "
            >
              {val}
            </li>
          ))}
        </ul>

        {materials && (
          <div className="w-full">
            <p className="mt-4 font-semibold text-xl mb-3 text-gray-700">Demo</p>
            {demoUrl && (
              <div className="flex justify-center items-center">
                <a
                  href={demoUrl}
                  target="_blank"
                  className="text-xl font-semibold mb-5 text-blue-500 cursor-pointer text-center underline hover:text-blue-800"
                >
                  Live Demo
                </a>
              </div>
            )}
            {materialType === "video" ? (
              <VideoDemoYoutube
                src={materialSrc as string}
                aspectRatio={materialRatio}
                isLandscape={isLandscape}
              />
            ) : materialType === "image" && materialSrc ? (
              Array.isArray(materialSrc) ? (
                <div className="flex items-center justify-center w-full relative">
                  <button className="swiper-prev absolute -left-4 sm:left-5 top-1/2 z-10 -translate-y-1/2 text-4xl text-blue-300">
                    <IoIosArrowBack />
                  </button>
                  <button className="swiper-next absolute -right-4 sm:right-5 top-1/2 z-10 -translate-y-1/2 text-4xl text-blue-300">
                    <IoIosArrowForward />
                  </button>
                  <div className="w-full max-w-[500px] flex justify-center items-center rounded-2xl">
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={true}
                      navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                        disabledClass: "swiper-button-disabled",
                      }}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      className="w-full"
                    >
                      {materialSrc.map((src, i) => (
                        <SwiperSlide key={i} className="flex justify-center items-center">
                          <div className="w-full flex justify-center items-center">
                            <Image
                              src={src}
                              alt={`slide ${i + 1}`}
                              width={800}
                              height={600}
                              className="object-contain w-full h-auto max-h-[600px] rounded-2xl shadow-lg"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src={materialSrc}
                    alt="material"
                    width={200}
                    height={200}
                    className="w-[400px] sm:w-[500px] rounded-2xl shadow-lg"
                  />
                </div>
              )
            ) : !materialType && !materialSrc ? (
              <VacatioDemo />
            ) : null}
          </div>
        )}
      </article>
    </motion.div>
  );
}
