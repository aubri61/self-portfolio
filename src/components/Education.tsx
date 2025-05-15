"use client";

import SectionTitle from "@/components/SectionTitle";
import { useSectionInView } from "@/lib/hooks";
import FadeInSection from "@/components/FadeInSection";

export default function Education({ params }: { params?: {} }) {
  const { ref } = useSectionInView("Education");

  return (
    <FadeInSection>
      <section
        ref={ref}
        className="sm:w-[40rem] w-full flex flex-col justify-center items-center scroll-mt-30"
        id="education"
      >
        <SectionTitle params={{ title: "Education" }} />
        <div className="flex mt-8 flex-col justify-center items-start w-full px-5">
          <p className="text-2xl font-semibold flex items-center">
            <span className=" text-blue-600 font-bold text-3xl mr-2"> • </span>
            Yonsei University
          </p>
          <p className="text-lg text-gray-700 font-light">
            Dept. Computer Sceince & Education
          </p>
          <p className=" text-[0.95rem] text-blue-800 font-light">
            2018.02 ~ 2024.02
          </p>
        </div>
        <p className="mt-5 px-5 text-lg text-gray-800">
          자료구조와 알고리즘, 정보 보호, AI 등 컴퓨터 과학 기초 과목을 수강하여
          이론을 다졌습니다. 공모전과 모의 창업 등으로 실전 경험을 쌓았으며,
          졸업 프로젝트로 AI 활용 영화 추천 챗봇을 개발했습니다.
        </p>
      </section>
    </FadeInSection>
  );
}
