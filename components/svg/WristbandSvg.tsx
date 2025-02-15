import { useSvgStore } from "@/hooks/useSvgStore";
import React from "react";
import CanvasComponent from "../ui/Canvas";
import {RotateCcwSquare} from "lucide-react";
import {useCanvasStore} from "@/hooks/useCanvasStore";

function WristbandSvg() {

    const { color } = useSvgStore()
    const { canvast, setCanvasType } = useCanvasStore()

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div className="flex flex-col  " >
                <div className="cursor-pointer px-1 w-full h-full" onClick={() => canvast === 'front' ? setCanvasType("back") : setCanvasType("front")}>
                    <RotateCcwSquare />
                </div>
                {canvast}
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                baseProfile="tiny"
                overflow="scroll"
                version="1.1"
                viewBox="313.892 400.42 422.777 335.202"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}

                className="md:w-[350px] md:h-[350px] xl:w-[350px] xl:h-[350px] w-[340px] h-[340px]"
            >
                <defs>
                    <linearGradient
                        id="gradient-0"
                        x1="277.24"
                        x2="277.24"
                        y1="237.081"
                        y2="306.381"
                        gradientTransform="matrix(.98787 -.15529 .14454 .91946 -35.743 156.922)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopOpacity="0.08"></stop>
                        <stop offset="1" stopColor="#D7D7D7" stopOpacity="0.66"></stop>
                    </linearGradient>
                    <linearGradient
                        id="gradient-1"
                        x1="279.33"
                        x2="279.33"
                        y1="439.565"
                        y2="543.765"
                        gradientTransform="matrix(-.16808 .98576 -1.90495 -.3248 1210.658 305.11)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#E5E7E7" stopOpacity="0.71"></stop>
                        <stop offset="1" stopOpacity="0.14"></stop>
                    </linearGradient>
                </defs>
                <g fillRule="evenodd">
                    <path
                        fill={color}
                        d="M426.8 363.6c.1-.4.2-.7.2-1.1v52.1c0 27.8-66.4 50.3-148.4 50.3s-148.4-22.5-148.4-50.3v-53.9.3c1.4 45 141.8 50 148.4 50 21.6 0 141.4-6.4 148.2-47.4"
                        transform="translate(248.633 200.064)"
                    ></path>
                    <path
                        fill={color}
                        d="M278.6 326.9c79.9 0 145 18.4 148.3 41.4l-.1.4c-2.3 14.2-21.2 23.6-29.9 27.5-28.5-11.3-70.9-18.5-118.2-18.5s-89.7 7.2-118.2 18.5l-.3-.1c-9.9-4.4-27.1-13.8-29.7-28.3 3.9-22.8 68.7-40.9 148.1-40.9"
                        transform="translate(248.633 200.064)"
                    ></path>

                    {/* shadows */}
                    <path
                        fill="url('#gradient-1')"
                        d="M426.739 363.904c.1-.4.2-.7.2-1.1v52.1c0 27.8-66.4 50.3-148.4 50.3s-148.4-22.5-148.4-50.3v-53.9.3c1.4 45 141.8 50 148.4 50 21.6 0 141.4-6.4 148.2-47.4"
                        transform="translate(248.633 200.064)"
                    ></path>
                    <path
                        fill="url('#gradient-0')"
                        fillOpacity="0.73"
                        d="M277.397 326.384c79.9 0 146.071 18.222 149.371 41.222l.436.043c-2.3 14.2-26.911 22.529-35.611 26.429-28.5-11.3-66.796-16.894-114.096-16.894s-89.7 7.2-118.2 18.5l5.436-2.339c-9.9-4.4-30.737-12.261-33.337-26.761 3.9-22.8 66.601-40.2 146.001-40.2"
                        transform="translate(248.633 200.064)"
                    ></path>
                </g>
            </svg>

            <div style={{ position: 'absolute', top: 150, left: 0, right: 0, bottom: 0 }} className="z-20 flex items-center justify-center">
                <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
                    <CanvasComponent canvasType='front' height='65' width='310' />
                </div>
                <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
                    <CanvasComponent canvasType='back' height='65' width='310' />
                </div>
            </div>

        </div>
    );
}

export default WristbandSvg;