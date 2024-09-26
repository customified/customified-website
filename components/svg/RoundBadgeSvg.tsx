import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"

const RoundBadgeSvg = () => {

    const { color } = useSvgStore()

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>



            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1"
                viewBox="-52.308 -62.367 390.795 385.764"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}

                className="md:w-[480px] md:h-[480px] xl:w-[480px] xl:h-[480px] w-[450px] h-[450px]"
            >
                <defs>
                    <filter
                        id="filter3210"
                        width="1.169"
                        height="1.219"
                        x="-0.084"
                        y="-0.109"
                    >
                        <feGaussianBlur stdDeviation="2.769"></feGaussianBlur>
                    </filter>
                    <filter id="filter3226">
                        <feGaussianBlur stdDeviation="0.173"></feGaussianBlur>
                    </filter>
                    <radialGradient
                        id="radialGradient2401"
                        cx="139.08"
                        cy="68.405"
                        r="39.407"
                        gradientTransform="matrix(0 2.57292 -10.98668 0 872.705 -342.87)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#FFF"></stop>
                        <stop offset="1" stopColor="#FFF" stopOpacity="0"></stop>
                    </radialGradient>
                    <linearGradient
                        id="gradient-1"
                        x1="137.78"
                        x2="137.78"
                        y1="73.052"
                        y2="152.05"
                        gradientTransform="matrix(3.1005 0 0 4.0185 -303.994 -292.067)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#8E8E8E" stopOpacity="0.06"></stop>
                        <stop offset="1" stopColor="#292929" stopOpacity="0.49"></stop>
                    </linearGradient>
                </defs>
                <g transform="translate(25.148)">
                    <path
                        fill={color}
                        d="M177.19 103.46c0 16.78-17.66 30.4-39.41 30.4s-39.408-13.62-39.408-30.4c0-16.787 17.658-30.408 39.408-30.408s39.41 13.621 39.41 30.408z"
                        filter="url('#filter3226')"
                        transform="matrix(3.1005 0 0 4.0185 -305 -291.56)"
                    ></path>
                    <path
                        fill="url(#radialGradient2401)"
                        d="M240.5 108.574c0 59.95-53.471 108.61-119.326 108.61-65.854 0-119.319-48.66-119.319-108.61C1.855 48.599 55.32-.065 121.174-.065c65.855 0 119.326 48.664 119.326 108.639z"
                        filter="url(#filter3210)"
                    ></path>
                    <path
                        fill="url('#gradient-1')"
                        d="M245.384 123.687c0 67.431-54.755 122.163-122.191 122.163S1.009 191.118 1.009 123.687c0-67.458 54.748-122.194 122.184-122.194s122.191 54.736 122.191 122.194z"
                        filter="url('#filter3226')"
                    ></path>
                </g>
            </svg>

            <div style={{ position: 'absolute', top: 0, left: 10, right: 0, bottom: 10 }} className="z-20 flex items-center justify-center">
                <CanvasComponent canvasType='front' height='280' width='280' rounded={true} />
            </div>

        </div>
    )
}
export default RoundBadgeSvg
