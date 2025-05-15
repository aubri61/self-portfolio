import SectionTitle from "@/components/SectionTitle";
import ProjectItem from "@/components/ProjectItem";
import { projectsData, IProject } from "@/lib/data";

export default function Projects({ params }: { params?: {} }) {
  return (
    <section className="w-full sm:w-[40rem] flex flex-col justify-center " id="projects">
      <SectionTitle params={{ title: "Projects" }} />

      <div className="flex flex-col justify-center items-start w-full ">
        {projectsData.map((item: IProject, index: number) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
