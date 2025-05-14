import SectionTitle from "@/components/SectionTitle";
import ProjectItem from "@/components/ProjectItem";
import { projectsData, projectInterface } from "@/lib/data";

export default function Projects({ params }: { params?: {} }) {
  return (
    <section className="w-full sm:w-[40rem] flex flex-col justify-center ">
      <SectionTitle params={{ title: "Projects" }} />

      <div className="flex flex-col justify-center items-start w-full ">
        {projectsData.map((item: projectInterface, index: number) => (
          <ProjectItem
            key={index}
            params={{
              item: item,
            }}
          />
        ))}
      </div>
    </section>
  );
}
