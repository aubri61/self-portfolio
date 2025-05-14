import { workExperienceInterface } from "@/lib/data";

export default function ExperienceItem({
  params,
}: {
  params?: { item: workExperienceInterface; material?: React.ReactNode };
}) {
  const item = params?.item;
  if (!item) return null;

  const highlightText = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, idx) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={idx} className="text-blue-800 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex mt-8 mb-10 flex-col justify-center items-start w-full px-5">
      <p className="text-2xl font-semibold flex items-center">
        <span className=" text-blue-600 font-bold text-3xl mr-2"> • </span>
        {item.CorpTitle}
      </p>
      <p className="text-lg mb-1 text-gray-700">{item.role}</p>
      <p className=" text-medium mb-4 text-blue-800 font-light">{item.date}</p>

      <p className="font-semibold text-xl text-gray-700">Description</p>
      <p className=" break-keep mb-2 sm:text-lg text-gray-800">
        {item.description}
      </p>

      <p className="font-semibold text-xl mt-3 text-gray-700">What I did</p>
      <ul className="pl-3">
        {item.did.map((val, idx) => (
          <li
            key={idx}
            className="break-keep mb-1.5 text-medium sm:text-lg text-gray-800"
          >
            <span className="text-blue-600"> • </span>
            {/* {val} */}
            {highlightText(val, "i18n")} {/* 원하는 키워드만 색 바꿔줌 */}
          </li>
        ))}
      </ul>
      {item.materials &&
        (params?.material ? (
          <div className="w-full">
            <p className="mt-4 font-semibold text-xl text-gray-700">Demo</p>
              {params.material}
          </div>
        ) : null)}
    </div>
  );
}
