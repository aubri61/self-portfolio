"use client";

import SectionTitle from "@/components/SectionTitle";
import { workExperiencesData } from "@/lib/data";
import ExperienceItem from "@/components/ExperienceItem";
import { IWorkExperience } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import FadeInSection from "@/components/FadeInSection";

export default function Experiences({ params }: { params?: {} }) {
  const { ref } = useSectionInView("Experiences");

  return (
    <FadeInSection>
      <section
        ref={ref}
        className="w-full sm:w-[40rem] flex flex-col justify-center scroll-mt-30"
        id="experiences"
      >
        <SectionTitle params={{ title: "Work Experiences" }} />

        <div className="flex flex-col justify-center items-start w-full ">
          {workExperiencesData.map((item: IWorkExperience, index: number) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
