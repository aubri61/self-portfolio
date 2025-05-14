import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col pb-20 ">
      <div className="max-w-[calc(100dvw-3rem)] sm:max-w-[50rem] w-full flex flex-col items-center justify-center">
        <About />
        <Education />
        <Experiences />
        <Projects />
      </div>
    </main>
  );
}
