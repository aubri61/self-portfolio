"use client";

import { IProject } from "@/lib/data";
import VideoDemoYoutube from "@/components/VideoDemoYouTube";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export default function ProjectItem({
  title,
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
  sourceCodeUrl,
}: IProject) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      className="flex mt-8 mb-15 flex-col justify-center items-start w-full px-5"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <p className="text-2xl font-semibold flex items-center">
        <span className=" text-blue-600 font-bold text-4xl mr-2"> • </span>
        {title}
      </p>
      <p className=" text-base mb-4   text-gray-700 font-light">{date}</p>

      <p className="font-semibold text-xl text-gray-700">Description</p>
      <p className=" break-keep mb-2 sm:text-lg text-gray-800">{description}</p>

      <p className="font-semibold text-xl mt-3 text-gray-700">What I did</p>
      <ul className="pl-3">
        {did.map((val, idx) => (
          <li
            key={idx}
            className="break-keep mb-1.5 text-base sm:text-lg text-gray-800"
          >
            <span className="text-blue-600"> • </span>
            {val}
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
          {sourceCodeUrl && (
            <div className="flex justify-center items-center">
              <a
                href={sourceCodeUrl}
                target="_blank"
                className="text-xl font-semibold mb-5 text-blue-500 cursor-pointer text-center underline hover:text-blue-800"
              >
                Github SourceCode
              </a>
            </div>
          )}
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
              src={materialSrc}
              aspectRatio={materialRatio}
              isLandscape={isLandscape}
            />
          ) : materialType === "image" && materialSrc ? (
            <div className="flex justify-center items-center flex-col">
              <Image
                src={materialSrc}
                alt="material"
                width={200}
                height={200}
                className="w-[400px] sm:w-[500px] rounded-2xl shadow-lg"
              />
            </div>
          ) : null}
        </div>
      )}
    </motion.article>
  );
}
