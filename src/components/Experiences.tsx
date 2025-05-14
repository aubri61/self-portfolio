import SectionTitle from "@/components/SectionTitle";
import { workExperiencesData } from "@/lib/data";
import ExperienceItem from "@/components/ExperienceItem";
import { workExperienceInterface } from "@/lib/data";
// import Image from "next/image";
import VacatioDemo from "@/components/VacatioDemo";

export default function Experiences({ params }: { params?: {} }) {
  return (
    <section className="w-full sm:w-[40rem] flex flex-col justify-center ">
      <SectionTitle params={{ title: "Work Experiences" }} />

      <div className="flex flex-col justify-center items-start w-full ">
        {workExperiencesData.map(
          (item: workExperienceInterface, index: number) => (
            <ExperienceItem
              key={index}
              params={{
                item: item,
                material: item.materials ? <VacatioDemo /> : null,
              }}
            />
          )
        )}
      </div>
    </section>
  );
}
