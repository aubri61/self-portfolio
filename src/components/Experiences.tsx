import SectionTitle from "@/components/SectionTitle";
import { workExperiencesData } from "@/lib/data";
import ExperienceItem from "@/components/ExperienceItem";
import { IWorkExperience } from "@/lib/data";
import { useScroll } from "framer-motion";
// import Image from "next/image";

export default function Experiences({ params }: { params?: {} }) {
  return (
    <section
      className="w-full sm:w-[40rem] flex flex-col justify-center scroll-mt-5"
      id="experiences"
    >
      <SectionTitle params={{ title: "Work Experiences" }} />

      <div className="flex flex-col justify-center items-start w-full ">
        {workExperiencesData.map((item: IWorkExperience, index: number) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
