"use client"

import { ToolTipProvider } from '@/providers/tooltip-provider';
import { Volume2, VolumeX } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

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
        <div className='flex flex-col items-center justify-center pt-20 pb-10'>
            <h1 className='text-4xl font-medium text-center'><span className='text-[#097392]'>How It </span> Works</h1>

            <div className="flex py-14 md:px-10 px-4 rounded-lg border-0 relative md:w-[74%] h-full">
                <video
                    ref={videoRef}
                    muted={isMuted}
                    data-src='https://res.cloudinary.com/dwpdwkw5h/video/upload/v1727453887/Skype_Video_bmewz8_1_1_1_1_ilac1o.mp4'
                    autoPlay
                    loop
                    className='rounded-lg border-0 w-fit'
                    playsInline
                >
                </video>
                <div
                    onClick={toggleSound}
                    className="md:h-9 md:w-9 w-7 h-7 flex items-center justify-center bg-[#0d0d0d] backdrop-blur-xl shadow-md shadow-[#097392] rounded-full mr-4 absolute md:bottom-16 md:right-8 bottom-16 right-2">
                    {isMuted ? (
                        <ToolTipProvider label='UnMute' >
                            <VolumeX color='white' className='md:w-[20px] md:h-[20px] w-[16px] h-[16px]'/>
                        </ToolTipProvider>
                    ) :
                        (
                            <ToolTipProvider label='Mute' >
                                <Volume2 color='white' className='md:w-[20px] md:h-[20px] w-[16px] h-[16px]'/>
                            </ToolTipProvider>
                        )}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-1">
                <div className="grid md:grid-cols-3 grid-cols-2 md:mb-16 mb-8 justify-between ">

                    <div className="col-span-1 flex flex-col items-center">
                        <h1 className=' text-2xl md:text-7xl font-extrabold text-[#097392]'>1</h1>
                        <h2 className=' text-xl md:text-4xl font-bold text-[#097392]'>Choose</h2>
                        <p className='text-black text-sm md:text-xl font-normal text-center'>Browse our extensive range of customizable items and select the one that best suits your needs.</p>
                    </div>

                    <div className="col-span-1 flex flex-col items-center">
                        <h1 className='text-2xl md:text-7xl font-extrabold text-[#097392]'>2</h1>
                        <h2 className='text-xl md:text-4xl font-bold text-[#097392]'>Select</h2>
                        <p className='text-black text-sm md:text-xl font-normal text-center'>Pick your preferred colors, sizes, and any additional features to make your product uniquely yours.</p>
                    </div>

                    <div className="md:col-span-1 col-span-2 flex flex-col items-center mt-8 md:mt-0">
                        <h1 className='text-2xl md:text-7xl font-extrabold text-[#097392]'>3</h1>
                        <h2 className='text-xl md:text-4xl font-bold text-[#097392]'>Customize</h2>
                        <p className='text-black text-sm md:text-xl font-normal text-center px-[70px] md:px-0'>Add your logo, text, or images using our easy-to-use design tools.</p>
                    </div>

                </div>

                <div className="grid grid-cols-6 justify-between gap-2">
                    <div className="md:col-span-1 hidden md:block"></div>

                    <div className="col-span-3 md:col-span-2  flex flex-col items-center">
                        <h1 className='text-2xl md:text-7xl font-extrabold text-[#097392]'>4</h1>
                        <h2 className='text-xl md:text-4xl font-bold text-[#097392]'>Approve</h2>
                        <p className='text-black text-sm md:text-xl font-normal text-center'>Preview your product, make any necessary adjustments, and approve the final design.</p>
                    </div>

                    <div className="col-span-3 md:col-span-2 flex flex-col items-center">
                        <h1 className='text-2xl md:text-7xl font-extrabold text-[#097392]'>5</h1>
                        <h2 className='text-xl md:text-4xl font-bold text-[#097392]'>Order</h2>
                        <p className='text-black text-sm md:text-xl font-normal text-center'> Checkout securely and await your custom products, which will be delivered to your doorstep.</p>
                    </div>

                    <div className="md:col-span-1 hidden md:block"></div>

                </div>


            </div>
        </div>
    )
}

export default HowItWorks