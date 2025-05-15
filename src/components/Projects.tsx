"use client";
import SectionTitle from "@/components/SectionTitle";
import ProjectItem from "@/components/ProjectItem";
import { projectsData, IProject } from "@/lib/data";
import FadeInSection from "@/components/FadeInSection";
import { useSectionInView } from "@/lib/hooks";

export default function Projects({ params }: { params?: {} }) {
  const { ref } = useSectionInView("Projects");

  return (
    <FadeInSection>
      <section
        ref={ref}
        className="w-full sm:w-[40rem] flex flex-col justify-center scroll-mt-30"
        id="projects"
      >
        <SectionTitle params={{ title: "Projects" }} />

        <div className="flex flex-col justify-center items-start w-full ">
          {projectsData.map((item: IProject, index: number) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
