"use client";

import { IProject } from "@/lib/data";
import VideoDemoYoutube from "@/components/VideoDemoYouTube";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

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
      <p className=" text-medium mb-4   text-gray-700 font-light">{date}</p>

      <p className="font-semibold text-xl text-gray-700">Description</p>
      <p className=" break-keep mb-2 sm:text-lg text-gray-800">{description}</p>

      <p className="font-semibold text-xl mt-3 text-gray-700">What I did</p>
      <ul className="pl-3">
        {did.map((val, idx) => (
          <li
            key={idx}
            className="break-keep mb-1.5 text-medium sm:text-lg text-gray-800"
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
            className="text-[.95rem] sm:text-medium text-gray-800 px-2  rounded-full "
          >
            {val}
          </li>
        ))}
      </ul>

      {materials && (
        <div className="w-full">
          <p className="mt-4 font-semibold text-xl text-gray-700">Demo</p>
          {materialType === "video" ? (
            <VideoDemoYoutube
              src={materialSrc}
              aspectRatio={materialRatio}
              isLandscape={isLandscape}
            />
          ) : // <VideoDemo src={materialSrc} aspectRatio={materialRatio} isLandscape={isLandscape}/>

          // <VideoDemo url={materialUrl} />
          null}
        </div>
      )}
    </motion.article>
  );
}
