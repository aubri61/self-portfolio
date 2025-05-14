"use client";

import { useEffect, useRef } from "react";

const VideoDemoYoutube = ({
  src,
  aspectRatio = "16/9",
  isLandscape = true,
}: {
  src?: string;
  aspectRatio?: string;
  isLandscape?: boolean;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const src = iframe.dataset.src;
        if (entry.isIntersecting && src) {
          iframe.src = src; // lazy load: 실제로 iframe 로드
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(iframeRef.current);

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  if (!src) return null;

  const widthClass = isLandscape ? "w-full" : "w-[380px] sm:w-[350px]";
  const aspectClass = isLandscape ? "aspect-video" : `aspect-[${aspectRatio}]`;

  return (
    <div className="flex w-full justify-center items-center">
      <div className={`${widthClass} ${aspectClass} `}>
        {/* <div className={`${widthClass} aspect-[${aspectRatio}] `}> */}
        {/* <div className={`${widthClass} aspect-[${aspectRatio}] ${heightClass}`}> */}
        <iframe
          ref={iframeRef}
          data-src={`${src}?autoplay=1&mute=1&enablejsapi=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDemoYoutube;
