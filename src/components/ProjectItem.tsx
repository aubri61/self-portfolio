import { IProject } from "@/lib/data";
import VideoDemo from "@/components/VideoDemo";
import VideoDemoYoutube from "@/components/VideoDemoYouTube";

export default function ProjectItem({
  title,
  description,
  stacks,
  date,
  did,
  materials,
  materialType,
  materialSrc,
  materialRatio,
  isLandscape,
}: IProject) {
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

  // const VideoDemo = ({ url }: { url: string }) => {
  //   if (!url) return null;
  //   return (
  //     <div className="aspect-[9/16] w-full mt-2">
  //       <iframe
  //         src={url}
  //         title="Demo video"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //         className="w-full h-full rounded-xl border"
  //       ></iframe>
  //     </div>
  //   );
  // };

  return (
    <article className="flex mt-8 mb-15 flex-col justify-center items-start w-full px-5">
      <p className="text-2xl font-semibold flex items-center">
        <span className=" text-blue-600 font-bold text-4xl mr-2"> • </span>
        {title}
      </p>
      <p className=" text-medium mb-4   text-gray-700 font-light">{date}</p>

      <p className="font-semibold text-xl text-gray-700">Description</p>
      <p className=" break-keep mb-2 sm:text-lg text-gray-800">{description}</p>

      <p className="font-semibold text-xl mt-3 text-gray-700">What I did</p>
      <ul className="pl-3">
        {did.map((val, idx) => (
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

      <p className="font-semibold text-xl mt-3 text-gray-700">Tech Stacks</p>
      <ul className="pl-1.5 flex flex-wrap gap-1 mt-2 mb-3  items-center">
        {stacks.map((val, idx) => (
          <li
            key={idx}
            className="text-[.95rem] sm:text-medium text-gray-800 px-2  rounded-full "
          >
            {val}
          </li>
        ))}
      </ul>

      {materials && (
        <div className="w-full">
          <p className="mt-4 font-semibold text-xl text-gray-700">Demo</p>
          {materialType === "video" ? (
            <VideoDemoYoutube
              src={materialSrc}
              aspectRatio={materialRatio}
              isLandscape={isLandscape}
            />
          ) : // <VideoDemo src={materialSrc} aspectRatio={materialRatio} isLandscape={isLandscape}/>

          // <VideoDemo url={materialUrl} />
          null}
        </div>
      )}
    </article>
  );
}
