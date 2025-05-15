"use client";

import { IWorkExperience } from "@/lib/data";
import VacatioDemo from "@/components/VacatioDemo";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExperienceItem({
  CorpTitle,
  role,
  description,
  stacks,
  date,
  did,
  materials,
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
            <p className="mt-4 font-semibold text-xl text-gray-700">Demo</p>
            <VacatioDemo />
          </div>
        )}
      </article>
    </motion.div>
  );
}
