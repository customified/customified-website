import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"

const TriangleBadgeSvg = () => {

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

      className="md:w-[440px] md:h-[440px] xl:w-[440px] xl:h-[440px] w-[420px] h-[420px]"
    >
      <defs>
        <radialGradient
          id="gradient-3"
          cx="142.869"
          cy="14.088"
          r="118.776"
          gradientTransform="matrix(-.25037 .13765 -.55144 -1.003 198.193 125.467)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFF" stopOpacity="0.62"></stop>
          <stop offset="1" stopColor="#CECECE" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="gradient-0"
          x1="107.585"
          x2="107.585"
          y1="34.13"
          y2="230.807"
          gradientTransform="matrix(.85703 .51527 -.5758 .9577 38.257 -50.684)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFF" stopOpacity="0.3"></stop>
          <stop offset="1" stopColor="#090909" stopOpacity="0.45"></stop>
        </linearGradient>
      </defs>
      <g stroke="rgba(0, 0, 0, 0)">
        <path
          fill={color}
          d="M101.561 39.173q6.023-10.086 12.047 0l108.431 181.548q6.024 10.086-6.024 10.086H-.846q-12.048 0-6.024-10.086z"
          transform="translate(51.228 -4.89)"
        ></path>
        <path
          d="M121.057 46.457l103.295 175.579a5.999 5.999 0 01-2.622 8.07l-44.508-.075c-2.953 1.504-40.097 4.522-41.602 1.569L69.149 94.703c-1.505-2.953 18.83-34.11 21.783-35.614l14.799-26.326c2.952-1.504 13.822 10.741 15.326 13.694z"
          style={{
            WebkitTransformOrigin: 145.553,
            msTransformOrigin: 145.553,
            transformOrigin: 145.553,
          }}
          fill="url('#gradient-3')"
          transform="translate(51.228 -4.89)"
        ></path>
        <path
          fill="url('#gradient-0')"
          d="M101.561 39.173q6.023-10.086 12.047 0l108.431 181.548q6.024 10.086-6.024 10.086H-.846q-12.048 0-6.024-10.086z"
          transform="translate(51.228 -4.89)"
        ></path>
      </g>
    </svg>

            <div style={{ position: 'absolute', top: 0, left: 34, right: 0, bottom: 5 }} className="z-20 flex items-center justify-center">
                <CanvasComponent canvasType='front' height='210' width='250' />
            </div>

        </div>
    )
}
export default TriangleBadgeSvg
