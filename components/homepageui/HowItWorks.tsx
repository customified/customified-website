"use client";

import { ToolTipProvider } from "@/providers/tooltip-provider";
import { VolumeX, Volume2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HowItWorks = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
    <div className="flex flex-col items-center justify-center pt-20 pb-10">
      <h1 className="text-4xl font-medium text-center my-5">
        <span className="text-[#097392]">How It </span> Works
      </h1>
      {/* <div className="flex py-14 md:px-10 px-4 rounded-lg border-0 relative md:w-[74%] h-full">
        <video
          ref={videoRef}
          muted={isMuted}
          data-src="https://res.cloudinary.com/dwpdwkw5h/video/upload/v1727453887/Skype_Video_bmewz8_1_1_1_1_ilac1o.mp4"
          autoPlay
          loop
          className="rounded-lg border-0 w-fit"
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
      </div> */}
      {/* // Start of Selection */}
      <div className="flex flex-col items-center justify-center px-4 relative">
        {/* Simple Background SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dots-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="#097392" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>

        <div className="grid md:grid-cols-3 grid-cols-2 md:mb-16 mb-8 gap-8 justify-between relative z-10">
          <div className="col-span-1 flex flex-col items-center bg-white shadow-sm border border-gray-200 rounded-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center bg-[#097392] text-white rounded-full w-16 h-16 mb-4">
              <span className="text-2xl font-extrabold">1</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-[#097392] mb-2">
              Choose
            </h2>
            <p className="text-gray-700 text-sm md:text-xl font-normal text-center">
              Browse our extensive range of customizable items and select the
              one that best suits your needs.
            </p>
          </div>

          <div className="col-span-1 flex flex-col items-center bg-white shadow-sm border border-gray-200 rounded-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center bg-[#097392] text-white rounded-full w-16 h-16 mb-4">
              <span className="text-2xl font-extrabold">2</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-[#097392] mb-2">
              Select
            </h2>
            <p className="text-gray-700 text-sm md:text-xl font-normal text-center">
              Pick your preferred colors, sizes, and any additional features to
              make your product uniquely yours.
            </p>
          </div>

          <div className="md:col-span-1 col-span-2 flex flex-col items-center bg-white shadow-sm border border-gray-200 rounded-lg p-6 mt-8 md:mt-0 transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center bg-[#097392] text-white rounded-full w-16 h-16 mb-4">
              <span className="text-2xl font-extrabold">3</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-[#097392] mb-2">
              Customize
            </h2>
            <p className="text-gray-700 text-sm md:text-xl font-normal text-center px-4 md:px-0">
              Add your logo, text, or images using our easy-to-use design tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 justify-between gap-4 w-full relative z-10">
          <div className="md:col-span-1 hidden md:block"></div>

          <div className="col-span-3 md:col-span-2 flex flex-col items-center bg-white shadow-sm border border-gray-200 rounded-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center bg-[#097392] text-white rounded-full w-16 h-16 mb-4">
              <span className="text-2xl font-extrabold">4</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-[#097392] mb-2">
              Approve
            </h2>
            <p className="text-gray-700 text-sm md:text-xl font-normal text-center">
              Preview your product, make any necessary adjustments, and approve
              the final design.
            </p>
          </div>

          <div className="col-span-3 md:col-span-2 flex flex-col items-center bg-white shadow-sm border border-gray-200 rounded-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center bg-[#097392] text-white rounded-full w-16 h-16 mb-4">
              <span className="text-2xl font-extrabold">5</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-[#097392] mb-2">
              Order
            </h2>
            <p className="text-gray-700 text-sm md:text-xl font-normal text-center">
              Checkout securely and await your custom products, which will be
              delivered to your doorstep.
            </p>
          </div>

          <div className="md:col-span-1 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
