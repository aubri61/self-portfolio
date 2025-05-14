import SectionTitle from "@/components/SectionTitle";

export default function Education({ params }: { params?: {} }) {
  return (
    <section className="sm:w-[40rem] mt-5 w-full flex flex-col justify-center items-center">
      <SectionTitle params={{ title: "Education" }} />
      <div className="flex mt-8 flex-col justify-center items-start w-full px-5">
        <p className="text-2xl font-semibold flex items-center">
          <span className=" text-blue-600 font-bold text-3xl mr-2"> • </span>Yonsei
          University
        </p>
        <p className="text-lg text-gray-700 font-light">
          Dept. Computer Sceince & Education
        </p>
        <p className=" text-[0.95rem] text-blue-800 font-light">2018.02 ~ 2024.02</p>
      </div>
    </section>
  );
}
