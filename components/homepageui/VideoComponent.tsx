    // Start of Selection
    "use client";
    import Image from "next/image";
    import React, { useEffect, useState } from "react";
    import hero1 from "../../public/hero1.jpg";
    import hero2 from "../../public/hero2.jpg";
    
    const VideoComponent = () => {
      const [activeIndex, setActiveIndex] = useState(0);
      
      const images = [
        hero1,
        hero2,
      ];
      const imageChangeInterval = 3000; // 3 seconds
  
    
      useEffect(() => {
          const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }, imageChangeInterval);
          return () => clearInterval(interval);
      }, [images.length]);
    
      return (
        <>
            <div className="relative w-full h-72 overflow-hidden">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`hero-image-${index + 1}`}
                  className={`w-full h-full absolute transition-opacity duration-1000 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  } object-cover`}
                  priority={index === activeIndex}
                  fill
                />
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? "bg-teal-600" : "bg-gray-300"
                    } cursor-pointer`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
        </>
      );
    };
    
    export default VideoComponent;
