import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col pb-20 ">
      <div className="max-w-[calc(100dvw-3rem)] sm:max-w-[50rem] w-full flex flex-col items-center justify-center gap-45">
        <About />
        <Education />
        <Experiences />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
