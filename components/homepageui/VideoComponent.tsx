"use client";
import { ToolTipProvider } from "@/providers/tooltip-provider";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const VideoComponent = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showHero, setShowHero] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = video.dataset.src || "";
          }
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);
  return (
    <>
      {showHero ? (
        <div className=" relative w-full h-full">
          <video
            ref={videoRef}
            muted={isMuted}
            data-src="https://res.cloudinary.com/dwpdwkw5h/video/upload/v1727453887/Skype_Video_bmewz8_1_1_1_1_ilac1o.mp4"
            autoPlay
            loop
            className=" border-0 w-full h-[390px]"
            playsInline
          ></video>
          <div
            onClick={toggleSound}
            className="md:h-9 md:w-9 w-7 h-7 flex items-center justify-center bg-[#0d0d0d] backdrop-blur-xl shadow-md shadow-[#097392] rounded-full mr-4 absolute md:bottom-16 md:right-8 bottom-16 right-2"
          >
            {isMuted ? (
              <ToolTipProvider label="UnMute">
                <VolumeX
                  color="white"
                  className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
                />
              </ToolTipProvider>
            ) : (
              <ToolTipProvider label="Mute">
                <Volume2
                  color="white"
                  className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
                />
              </ToolTipProvider>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <Image
            src="/hero.jpg"
            alt="hero-image"
            className="w-full h-full"
            width={1920}
            height={390}
          />
        </div>
      )}
    </>
  );
};

export default VideoComponent;
