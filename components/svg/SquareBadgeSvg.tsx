import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"

const RoundBadgeSvg = () => {

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

                className="md:w-[380px] md:h-[380px] xl:w-[380px] xl:h-[380px] w-[350px] h-[350px]"
    >
      <defs>
        <linearGradient
          id="gradient-0"
          x1="120.96"
          x2="120.96"
          y1="55.03"
          y2="186.369"
          gradientTransform="matrix(.68423 0 0 1.7839 21.035 -86.49)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#262626" stopOpacity="0.41"></stop>
        </linearGradient>
        <radialGradient
          id="gradient-3"
          cx="108.246"
          cy="17.323"
          r="118.776"
          gradientTransform="matrix(-.00256 .29618 -2.0874 -.01803 142.419 -10.58)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFF" stopOpacity="0.62"></stop>
          <stop offset="1" stopColor="#CECECE" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="gradient-2"
          cx="86.269"
          cy="177.62"
          r="116.531"
          gradientTransform="matrix(-.00175 .20777 -1.16066 -.0098 351.104 116.563)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFF" stopOpacity="0.44"></stop>
          <stop offset="1" stopColor="silver" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <g stroke="rgba(0, 0, 0, 0)" transform="translate(25.148)">
        <rect
          width="234.777"
          height="233.875"
          x="-14.525"
          y="10.776"
          fill={color}
          rx="6"
          ry="6"
        ></rect>
        <rect
          width="234.842"
          height="234.296"
          x="-13.621"
          y="11.68"
          fill="url('#gradient-0')"
          rx="6"
          ry="6"
        ></rect>
        <rect
          width="237.552"
          height="61.952"
          x="-14.524"
          y="9.798"
          fill="url('#gradient-3')"
          rx="6"
          ry="6"
        ></rect>
        <path
          style={{
            WebkitTransform: "fill-box",
            msTransform: "fill-box",
            transformBox: "fill-box",
            WebkitTransformOrigin: "50% 50%",
            msTransformOrigin: "50% 50%",
            transformOrigin: "50% 50%",
          }}
          fill="url('#gradient-2')"
          d="M55.894 120.058H288.956V182.01100000000002H55.894z"
          transform="rotate(90 8.166 8.42)"
        ></path>
      </g>
    </svg>

            <div style={{ position: 'absolute', top: 0, left: 0, right: 26, bottom: 5 }} className="z-20 flex items-center justify-center">
                <CanvasComponent canvasType='front' height='210' width='210' />
            </div>

        </div>
    )
}
export default RoundBadgeSvg
