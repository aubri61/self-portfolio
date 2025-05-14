"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoGithub, IoIosDownload } from "react-icons/io";

export default function About({ params }: { params?: {} }) {
  return (
    <section className=" text-center sm:max-w-[35rem]">
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
        className="mt-6  flex flex-col items-center justify-center text-left sm:text-center text-gray-800 text-xl sm:text-2xl/snug pl-5 pr-5 sm:pl-0 sm:pr-0"
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
        <div className="flex flex-col pl-3 pr-3 break-keep text-gray-700  ">
          <p className="mt-4">
            <span className="font-bold">2년 </span>동안{" "}
            <span className="font-bold">웹, 앱, 서버</span>를 개발하며 효율적인
            코드 작성과 재사용성에 대해 고민했습니다.
          </p>
          <p className="mt-1">
            주도적으로 문제를 파악하고 집요하게 파고들어 해결하는 걸 즐깁니다.
          </p>
        </div>

        {/* 버튼들 */}
        <div className="mt-15 flex justify-center items-center gap-8">
          <a className="flex items-center justify-center gap-2 text-[1.15rem] bg-black text-gray-100 shadow-xl rounded-3xl px-7 py-2 cursor-pointer hover:scale-105 focus:scale-105 transition-all duration-200"
          href="https://github.com/aubri61"
          target="_blank"
          >
            <IoLogoGithub />
            Go to Github
          </a>
          <a
            className="flex items-center justify-center gap-2 text-[1.15rem] bg-white text-gray-800 shadow-xl rounded-3xl px-7 py-2 cursor-pointer hover:scale-105 focus:scale-105 transition-all duration-200"
            href="/CV.pdf"
            download
          >
            <IoIosDownload />
            Download CV
          </a>
        </div>
      </motion.div>
      {/* </div> */}
    </section>
  );
}
