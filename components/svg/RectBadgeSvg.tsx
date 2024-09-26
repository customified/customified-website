import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"

const RectBadgeSvg = () => {

    const { color } = useSvgStore()
    const { canvast, setCanvasType } = useCanvasStore()

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

                className="md:w-[400px] md:h-[400px] xl:w-[400px] xl:h-[400px] w-[360px] h-[360px]"
            >
                <defs>
                    <linearGradient
                        id="gradient-0"
                        x1="120.96"
                        x2="120.96"
                        y1="55.03"
                        y2="186.369"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#262626" stopOpacity="0.41"></stop>
                    </linearGradient>
                    <linearGradient
                        id="gradient-2"
                        x1="120.96"
                        x2="120.96"
                        y1="55.03"
                        y2="186.369"
                        gradientTransform="matrix(.99925 .02815 .00943 .445 -.429 27.136)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#FFF" stopOpacity="0.65"></stop>
                        <stop offset="1" stopColor="#707070" stopOpacity="0"></stop>
                    </linearGradient>
                </defs>
                <g stroke="rgba(0, 0, 0, 0)" transform="translate(25.148)">
                    <rect
                        width="343.22"
                        height="131.339"
                        x="-50.65"
                        y="55.03"
                        fill={color}
                        rx="6"
                        ry="6"
                    ></rect>
                    <rect
                        width="343.22"
                        height="131.339"
                        x="-50.65"
                        y="55.03"
                        fill="url('#gradient-0')"
                        rx="6"
                        ry="6"
                    ></rect>
                    <rect
                        width="343.22"
                        height="61.952"
                        x="-50.65"
                        y="55.03"
                        fill="url('#gradient-2')"
                        rx="6"
                        ry="6"
                    ></rect>
                </g>
            </svg>


            <div style={{ position: 'absolute', top: 0, left: 8, right: 0, bottom: 16 }} className="z-20 flex items-center justify-center">
                <CanvasComponent canvasType='front' height='120' width='320' />
            </div>

        </div>
    )
}
export default RectBadgeSvg
