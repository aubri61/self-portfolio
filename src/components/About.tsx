"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoGithub, IoIosDownload } from "react-icons/io";
import { useSectionInView } from "@/lib/hooks";

export default function About({ params }: { params?: {} }) {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className=" text-center sm:max-w-[35rem]  scroll-mt-30 mb-10"
      id="about"
    >
      {/* <div className="flex items-center justify-center flex-col"> */}
      {/* 프로필 파트 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="flex justify-center items-center"
      >
        <Image
          src={"/profile.jpg"}
          quality={95}
          width={200}
          height={300}
          priority={true}
          alt="profile image"
          className="h-80 w-80 rounded-full border-white object-cover shadow-xl"
        />
      </motion.div>

      {/* 글자 파트 */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="mt-10  flex flex-col items-center justify-center text-left sm:text-center text-gray-800 text-xl sm:text-2xl/snug pl-5 pr-5 sm:pl-0 sm:pr-0"
      >
        <div className="flex flex-col text-4xl/10 mb-5 ">
          {/* <div className="mt-6 flex flex-col items-start justify-start  text-gray-700 text-xl max-w-lg sm:text-2xl"> */}

          <p>
            <span>반갑습니다,</span>
          </p>
          <p>
            <span className="font-bold">풀스택 개발자 </span>
            <span>
              박주언입니다
              <span className="text-blue-600 text-[3rem] pl-0.5">.</span>
            </span>
          </p>
        </div>
        <div className="flex flex-col break-keep text-gray-800  ">
          <p className="mt-4">
            <span className="font-bold">3년 </span>동안 멈추지 않고 새로운
            기술과 도메인에 도전해왔습니다.
          </p>
          <p className="mt-2 mb-2 font-semibold">기획부터 디자인, 개발, 운영까지.</p>
          <p className="mt-1">
            주도적으로 문제를 파악하고 집요하게 파고들어 해결합니다.
          </p>
        </div>

        <article className="text-[1.1rem] mt-15 mb-5 text-gray-700 sm:text-lg">
          “하면 된다”는 신념으로 개발을 시작한 이후, 끊임없는 호기심과 빠른
          습득력으로 다양한 언어와 프레임워크를 경험했습니다. 1인으로 다양한 앱,
          웹 서비스를 기획하고 디자인, 개발, 배포까지 하며 쌓은 경험들로
          여러 돌발상황에 유연하게 대처가 가능합니다. 재사용성과 모듈화를
          중시하는 효율적인 코드 작성, 사용자 경험을 고려한 UI 개발, DevOps
          환경에서의 실전 배포 경험 등에 강점이 있습니다.
        </article>
        {/* 버튼들 */}
        <div className="mt-15 flex justify-center items-center sm:gap-8 w-full gap-5">
          <a
            className="flex items-center justify-center gap-1.5 text-base sm:text-[1.15rem] bg-black text-gray-100 shadow-xl rounded-3xl px-5 py-3 sm:px-10  cursor-pointer hover:scale-105 focus:scale-105 transition-all duration-200  whitespace-nowrap"
            href="https://github.com/aubri61"
            target="_blank"
          >
            <IoLogoGithub />
            <span>Go to Github</span>
          </a>
          {/* <a
            className="flex items-center justify-center gap-1.5 text-[1.15rem] bg-white text-gray-800 shadow-xl rounded-full  px-3 py-2 sm:px-7  cursor-pointer hover:scale-105 focus:scale-105 transition-all duration-200 whitespace-nowrap"
            href="/CV.pdf"
            download
          >
            <IoIosDownload />
            Download CV
          </a> */}
        </div>
      </motion.div>
      {/* </div> */}
    </section>
  );
}
