"use client";

import { useEffect, useRef } from "react";

const VideoDemo = ({
  src,
  aspectRatio,
  isLandscape,
}: {
  src?: string;
  aspectRatio?: string;
  isLandscape?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            console.warn("Autoplay error:", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 } // 화면에 50% 이상 들어오면 재생
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  if (!src) return null;

  const widthClass = isLandscape ? "w-full" : "w-[350px] sm:w-[400px]";

  return (
    <div className="flex w-full justify-center items-center">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        controls
        playsInline
        className={`aspect-[${aspectRatio}] ${widthClass} rounded-xl object-cover`}
      />
    </div>
  );
};

export default VideoDemo;
