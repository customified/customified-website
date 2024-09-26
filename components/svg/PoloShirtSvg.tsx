import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import { RotateCcwSquare } from "lucide-react"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"

const PoloShirtSvg = () => {
    const { color } = useSvgStore()
    const { canvast, setCanvasType } = useCanvasStore()

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

            <div className="flex flex-col " >
                <button className="cursor-pointer px-1 w-fit h-fit " onClick={() => canvast === 'front' ? setCanvasType("back") : setCanvasType("front")}>
                    <RotateCcwSquare />
                </button>
                {canvast}
            </div>

            <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
                {/* front svg */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 172.37 156.87"
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}

                    className="md:w-[350px] md:h-[350px] xl:w-[350px] xl:h-[350px] w-[310px] h-[310px]"
                >
                    <title>{"Blue Polo Shirt Remix by Merlin2525.svg"}</title>
                    <defs>
                        <filter
                            id="h"
                            width={1.698}
                            height={1.119}
                            x={-0.349}
                            y={-0.06}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.281} />
                        </filter>
                        <filter
                            id="i"
                            width={2.372}
                            height={1.157}
                            x={-0.686}
                            y={-0.079}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={2.346} />
                        </filter>
                        <filter
                            id="j"
                            width={2.002}
                            height={1.09}
                            x={-0.501}
                            y={-0.045}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.352} />
                        </filter>
                        <filter
                            id="k"
                            width={1.559}
                            height={1.104}
                            x={-0.279}
                            y={-0.052}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.531} />
                        </filter>
                        <filter
                            id="l"
                            width={1.522}
                            height={1.158}
                            x={-0.261}
                            y={-0.079}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.82} />
                        </filter>
                        <filter id="m" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.621} />
                        </filter>
                        <filter
                            id="n"
                            width={1.363}
                            height={1.194}
                            x={-0.181}
                            y={-0.097}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.212} />
                        </filter>
                        <filter
                            id="o"
                            width={1.434}
                            height={1.22}
                            x={-0.217}
                            y={-0.11}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.604} />
                        </filter>
                        <filter
                            id="p"
                            width={1.512}
                            height={1.194}
                            x={-0.256}
                            y={-0.097}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.325} />
                        </filter>
                        <filter
                            id="q"
                            width={1.31}
                            height={1.353}
                            x={-0.155}
                            y={-0.177}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.733} />
                        </filter>
                        <filter
                            id="r"
                            width={1.293}
                            height={1.254}
                            x={-0.147}
                            y={-0.127}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.808} />
                        </filter>
                        <filter
                            id="s"
                            width={1.338}
                            height={1.06}
                            x={-0.169}
                            y={-0.03}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={0.94} />
                        </filter>
                        <filter
                            id="t"
                            width={1.244}
                            height={1.114}
                            x={-0.122}
                            y={-0.057}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.317} />
                        </filter>
                        <filter
                            id="u"
                            width={1.445}
                            height={1.124}
                            x={-0.223}
                            y={-0.062}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.069} />
                        </filter>
                        <filter
                            id="v"
                            width={1.457}
                            height={1.084}
                            x={-0.229}
                            y={-0.042}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.323} />
                        </filter>
                        <filter
                            id="w"
                            width={1.328}
                            height={1.262}
                            x={-0.164}
                            y={-0.131}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.663} />
                        </filter>
                        <filter id="a" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={2.462} />
                        </filter>
                        <filter id="f" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={10.84} />
                        </filter>
                        <filter id="c" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.43} />
                        </filter>
                        <filter id="b" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.429} />
                        </filter>
                        <radialGradient
                            id="d"
                            cx={298.86}
                            cy={306.83}
                            r={189.29}
                            gradientTransform="matrix(1.9901 .00021 -.00019 1.7691 -333.04 -271.62)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#fff" />
                            <stop offset={1} stopColor="#333" />
                        </radialGradient>
                        <radialGradient
                            id="e"
                            cx={310.42}
                            cy={406.01}
                            r={189.29}
                            gradientTransform="matrix(1.9901 .00021 -.00019 1.7691 -333.04 -271.62)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#fff" />
                            <stop offset={1} />
                        </radialGradient>
                        <radialGradient
                            id="g"
                            cx={294.5}
                            cy={423.23}
                            r={189.29}
                            gradientTransform="matrix(1.9901 .00021 -.00019 1.7691 -333.04 -271.62)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#fff" />
                            <stop offset={1} stopColor="#888" />
                        </radialGradient>
                    </defs>
                    <path
                        fillOpacity={0.292}
                        fillRule="evenodd"
                        d="M69.456 4.002c11.262 1.512 20.644 1.144 29.25 0l5.25 7.25c22.644 8.583 35.766 7.646 60 21-3.119 10.486-3.706 21.984-13 30-7.75-6.088-15.5-4.8-23.25-6.75 0 0 1.042 13.155 0 19.42-1.403 8.431 1.46 17.72 0 25.64-1.31 7.107 1.042 15.704 0 21.68-1.232 7.063 0 21.51 0 21.51-29.128 5.302-58.037 6.666-86.5 0 0 0-1.111-11.53 0-17.133 1.668-8.407-1.287-18.158 0-27.099 1.25-8.685 2.383-17.296 0-25.432-1.876-6.403 0-18.586 0-18.586-6.74.752-12.342.2-23.5 6-8.376-6.985-10.991-18.452-13.5-30 25.954-11.67 39.005-13.262 60.25-19.75z"
                        filter="url(#a)"
                        transform="translate(8.112 7.457)"
                    />
                    <path
                        fillRule="evenodd"
                        d="M65.715.568c11.262 1.512 20.644 1.144 29.25 0l5.25 7.25c22.644 8.583 35.766 7.646 60 21-3.119 10.486-3.706 21.984-13 30-7.75-6.088-15.5-4.8-23.25-6.75 0 0 1.042 13.155 0 19.42-1.403 8.431 1.46 17.72 0 25.64-1.31 7.107 1.042 15.704 0 21.68-1.232 7.063 0 21.51 0 21.51-29.128 5.302-58.037 6.666-86.5 0 0 0-1.111-11.53 0-17.133 1.668-8.407-1.288-18.158 0-27.099 1.25-8.685 2.383-17.296 0-25.432-1.876-6.404 0-18.586 0-18.586-6.74.752-12.342.2-23.5 6-8.376-6.985-10.991-18.452-13.5-30 25.949-11.673 39-13.264 60.245-19.753z"
                        style={{
                            fill: color,
                        }}
                        transform="translate(8.112 7.457)"
                    />

                    <path
                        strokeLinecap="round"
                        strokeOpacity={0.22}
                        d="M80.34 22.294h3.75v23.25h-3.75v-23.25Z"
                        style={{
                            fill: "rgba(0,0,0,.447)",
                            stroke: "rgba(0,0,0,.467)",
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        d="m80.306 22.789-7.094 8.89c-7.733-5.938-8.595-13.76-10.674-20.326"
                        filter="url(#b)"
                        opacity={0.206}
                        style={{
                            fill: "#00000096",
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        d="m84.16 22.24 7.215 8.61c7.733-5.936 8.975-13.242 10.838-20.561"
                        filter="url(#c)"
                        opacity={0.206}
                        style={{
                            fill: "#00000096",
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        d="M79.157 21.257c-2.154-1.677-4.289-4-5.937-6.462-.555-.829-1.661-2.672-1.661-2.768 0-.094 2.378-.68 3.678-.907 4.648-.81 10.116-.667 15.32.402 2.022.416 2.5.527 2.5.582 0 .03-.243.454-.54.943-2.07 3.417-4.639 6.233-7.695 8.433l-.59.426H79.99l-.834-.649z"
                        style={{
                            fill: color,
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        d="M79.157 21.257c-2.154-1.677-4.289-4-5.937-6.462-.555-.829-1.661-2.672-1.661-2.768 0-.094 2.378-.68 3.678-.907 4.648-.81 10.116-.667 15.32.402 2.022.416 2.5.527 2.5.582 0 .03-.243.454-.54.943-2.07 3.417-4.639 6.233-7.695 8.433l-.59.426H79.99l-.834-.649z"
                        style={{
                            fill: "rgba(22,22,22,.443)",
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        d="M67.538 3.763c2.74 8.062 6.168 14.451 12.235 18.52l-6.771 7.922c-7.733-5.937-8.057-12.685-10.136-19.25M97.08 3.606c-2.74 8.062-6.511 14.28-12.578 18.349l7 7.75c7.733-5.937 8.114-13.028 10.193-19.593"
                        style={{
                            fill: color,
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        d="M92.24 10.381c-5.66-1.322-11.716-1.613-16.716-.803-.991.16-3.15.634-3.892.854-.297.088-.563.16-.592.16-.208 0-2.84-6.244-2.83-6.712a.582.582 0 0 1 .119-.265c.111-.148.167-.146 1.98.061 4.772.545 8.938.75 13.798.677 4.298-.065 7.449-.267 11.186-.718.757-.091 1.39-.153 1.407-.136.05.05-.75 2.152-1.36 3.578-.784 1.834-1.648 3.552-1.794 3.568-.066.007-.654-.112-1.306-.264z"
                        style={{
                            fill: color,
                        }}
                        transform="translate(6.01 5.152)"
                    />
                    <path
                        fill="url(#d)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        transform="matrix(.00656 0 0 .00656 85.826 29.023)"
                    />
                    <path
                        fill="url(#e)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        transform="matrix(-.00601 0 0 .00601 90.603 29.25)"
                    />
                    <path
                        fill="url(#g)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        filter="url(#f)"
                        transform="matrix(.00544 0 0 .00544 86.31 29.457)"
                    />
                    <path
                        fillOpacity={0.941}
                        d="M88.19 31.41a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.179 31.412a.104.104 0 1 1-.21 0 .104.104 0 0 1 .21 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.661 31.41a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.65 31.412a.104.104 0 1 1-.21 0 .104.104 0 0 1 .21 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.661 31.92a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.65 31.922a.104.104 0 1 1-.21 0 .104.104 0 0 1 .21 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.194 31.92a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.183 31.922a.104.104 0 1 1-.209 0 .104.104 0 0 1 .209 0z" />
                    <path
                        fill="url(#d)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        transform="matrix(.00656 0 0 .00656 85.751 35.031)"
                    />
                    <path
                        fill="url(#e)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        transform="matrix(-.00601 0 0 .00601 90.528 35.258)"
                    />
                    <path
                        fill="url(#g)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        filter="url(#f)"
                        transform="matrix(.00544 0 0 .00544 86.236 35.465)"
                    />
                    <path
                        fillOpacity={0.941}
                        d="M88.115 37.418a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.104 37.42a.104.104 0 1 1-.21 0 .104.104 0 0 1 .21 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.586 37.418a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.574 37.42a.104.104 0 1 1-.208 0 .104.104 0 0 1 .208 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.586 37.928a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.574 37.93a.104.104 0 1 1-.208 0 .104.104 0 0 1 .208 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.12 37.928a.116.116 0 1 1-.233 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.108 37.93a.104.104 0 1 1-.209 0 .104.104 0 0 1 .209 0z" />
                    <path
                        fill="url(#d)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        transform="matrix(.00656 0 0 .00656 85.73 40.943)"
                    />
                    <path
                        fill="url(#e)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        transform="matrix(-.00601 0 0 .00601 90.507 41.17)"
                    />
                    <path
                        fill="url(#g)"
                        d="M568.57 398.79c0 104.54-84.746 189.29-189.29 189.29s-189.29-84.746-189.29-189.29S274.736 209.5 379.28 209.5s189.29 84.746 189.29 189.29z"
                        filter="url(#f)"
                        transform="matrix(.00544 0 0 .00544 86.215 41.377)"
                    />
                    <path
                        fillOpacity={0.941}
                        d="M88.094 43.33a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.083 43.332a.104.104 0 1 1-.21 0 .104.104 0 0 1 .21 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.565 43.33a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.553 43.332a.104.104 0 1 1-.208 0 .104.104 0 0 1 .208 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.565 43.84a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.553 43.842a.104.104 0 1 1-.208 0 .104.104 0 0 1 .208 0z" />
                    <path
                        fillOpacity={0.941}
                        d="M88.098 43.84a.116.116 0 1 1-.232 0 .116.116 0 0 1 .232 0z"
                    />
                    <path d="M88.087 43.842a.104.104 0 1 1-.209 0 .104.104 0 0 1 .209 0z" />
                    <path
                        fillOpacity={0.205}
                        d="M89.954 55.265s3.588 12.867 3.237 19.421c-.184 3.436-2.04 8.375-2.455 11.79-.91 7.501.374 20.809.374 20.809s-3.75-13.652-3.237-20.577c.305-4.108 1.656-9.538 2.112-13.632.727-6.532-.031-17.811-.031-17.811z"
                        filter="url(#h)"
                        opacity={0.642}
                        transform="rotate(9.814 215.732 -169.71)"
                    />
                    <path
                        fillOpacity={0.361}
                        d="M61.826 49.19c4.407 11.45 9.752 22.483 7.1 33.329-3.078 12.59.292 25.59.404 38.379-2.464-12.443-8.437-24.85-6.693-37.545 1.309-9.522-1.916-22.353-.811-34.164z"
                        filter="url(#i)"
                        opacity={0.354}
                        transform="translate(8.899 7.457)"
                    />
                    <path
                        fillOpacity={0.137}
                        d="M103.67 74.764c4.582 11.904 7.728 24.366 4.228 32.262-5.067 11.434 3.168 27.083 3.276 39.447-2.804-14.161-18.533-30.125-12.346-43.41 3.523-7.564 3.912-18.364 4.841-28.298z"
                        filter="url(#j)"
                        opacity={0.498}
                        transform="rotate(6.481 414.338 112.236)"
                    />
                    <path
                        fillOpacity={0.242}
                        d="M38.06 71.32c3.216 1.117 12.099-46.339 11.673-46.694 1.625 27.975 5.849 61.988-12.924 70.875.476-7.91 3.362-9.741 1.25-24.181z"
                        filter="url(#k)"
                        opacity={0.412}
                        transform="translate(8.899 7.457)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M65.004 71.382c-1.154-4.32-3.353 13.989-9.598 24.005 0 0 1.56-22.101 3.644-25.264 6.69-10.153 13.248-20.42 13.04-20.593.61 10.508-4.081 20.834-2.676 31.821 2.164 16.921-1.965 17.836-13.687 23.389.476-7.915 10.24.19 9.277-33.358z"
                        filter="url(#l)"
                        opacity={0.37}
                        transform="matrix(-1 0 0 1 186.859 -2.776)"
                    />
                    <path
                        d="M39.398 76.595c7.613-5.826 14.551-12.816 18.344-25.223-.219 8.067 2.097 17.517-3.752 22.513z"
                        filter="url(#m)"
                        opacity={0.428}
                        style={{
                            fill: "rgba(41,41,41,.52)",
                        }}
                        transform="translate(-12.29 -20.918) scale(1.0874)"
                    />
                    <path
                        fillOpacity={0.123}
                        d="m160.09 72.842 1.25-12.09 8.964 9.172-16.05-27.099c2.935 15.179-.92 15.756 5.836 30.018z"
                        filter="url(#n)"
                        opacity={0.399}
                        transform="rotate(-28.676 135.466 82.963)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M81.506 138.92c5.003 6.462 5.586 13.12 11.048 8.755 5.964-4.766.569-18.339.834-27.516 1.518 11.951 10.414 22.338 2.754 31.565-6.65 8.01-10.598-5.083-14.636-12.804z"
                        filter="url(#o)"
                        opacity={0.305}
                        transform="scale(.7084) rotate(38.97 105.014 254.164)"
                    />
                    <path
                        fillOpacity={0.178}
                        d="M87.174 141.15s-3.643 5.454-4.586 8.547c-1.222 4.007-.145 8.466-1.25 12.507-1.133 4.138-5.42 11.673-5.42 11.673l12.09-1.46c-.106-4.334-1.628-8.71-1.55-12.922.109-5.9 3.628-11.89.716-18.346z"
                        filter="url(#p)"
                        opacity={0.374}
                        transform="matrix(-1 0 0 1 134.669 -25.865)"
                    />
                    <path
                        fillOpacity={0.274}
                        d="m69.395 92.17-.975-17.363 14.548 16.17L63.649 53.71c-1.417 12.484-1.01 24.199 5.745 38.46z"
                        filter="url(#q)"
                        opacity={0.374}
                        transform="rotate(72.276 75.266 28.243)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M77.337 151.85s5.167 10.049 10.654 9.622c7.957-.62 9.435-21.73 8.337-29.635-.797-5.735 10.462-18.662 10.462-18.662s-6.73 17.297-5.955 23.457c.941 7.485-4.908 31.365-12.45 31.166-6.1-.17-11.048-15.95-11.048-15.95z"
                        filter="url(#r)"
                        opacity={0.501}
                        transform="matrix(-.94217 0 0 .84552 159.219 -7.959)"
                    />
                    <path
                        fillOpacity={0.21}
                        d="M93.596 86.137s7.024 27.949 7.891 34.802c.653 5.16.423 13.707-.725 16.52-2.818 6.903-.866 26.7-.866 26.7s-4.25-18.899-2.789-29.068c.57-3.962 2.35-10.338 1.745-14.741-.901-6.555-5.256-34.213-5.256-34.213z"
                        filter="url(#s)"
                        opacity={0.412}
                        transform="matrix(-1.5411 .24238 .38502 .97018 191.009 -73.333)"
                    />
                    <path
                        fillOpacity={0.142}
                        d="M145.54 123.13c-7.816 19.045-15.253 51.149-32.932 63.334l6.995 4.708c19.75-20.503 20.734-48.94 25.938-68.042z"
                        filter="url(#t)"
                        opacity={0.564}
                        transform="rotate(-35.396 48.07 199.347)"
                    />
                    <path
                        fillOpacity={0.16}
                        d="M53.802 76.532c.206-14.412 3.49-40.959 12.647-52.74l4.17 2.918C62.994 37.806 56.844 63.4 53.801 76.531z"
                        filter="url(#u)"
                        opacity={0.407}
                        transform="translate(8.899 7.457)"
                    />
                    <path
                        d="M39.398 76.595c7.613-5.826 14.551-12.816 18.344-25.223-.219 8.067 2.097 17.517-3.752 22.513z"
                        filter="url(#m)"
                        opacity={0.276}
                        style={{
                            fill: "rgba(56,56,56,.8)",
                        }}
                        transform="matrix(-1.0874 0 0 1.0874 192.529 -20.697)"
                    />
                    <path
                        fillOpacity={0.224}
                        d="M93.596 86.137s9.626 28.884 10.492 35.737c.653 5.16-.32 12.309-1.47 15.122-2.817 6.903-2.723 27.164-2.723 27.164s-4.25-18.899-2.788-29.068c.569-3.962 2.35-10.338 1.745-14.741-.902-6.555-5.257-34.213-5.257-34.213z"
                        filter="url(#v)"
                        opacity={0.346}
                        transform="matrix(.96844 .12055 -.24195 .48251 30.502 -16.185)"
                    />
                    <path
                        fillOpacity={0.306}
                        d="M93.596 86.137s7.024 27.949 7.891 34.802c.653 5.16.423 13.707-.725 16.52-2.818 6.903-.866 26.7-.866 26.7s-4.25-18.899-2.789-29.068c.57-3.962 2.35-10.338 1.745-14.741-.901-6.555-5.256-34.213-5.256-34.213z"
                        filter="url(#s)"
                        opacity={0.284}
                        transform="matrix(-1.1875 .16551 .29666 .6625 203.809 -48.397)"
                    />
                    <path
                        fillOpacity={0.123}
                        d="M163.97 86.529c-.907-8.534-3.597-13.911-2.622-25.776l12.14 16.929-17.536-32.197c-.846 15.278 1.262 26.783 8.018 41.044z"
                        filter="url(#n)"
                        opacity={0.761}
                        transform="rotate(46.5 68.588 48.673)"
                    />
                    <path
                        fillOpacity={0.128}
                        d="M123.99 108.59s-3.643 5.454-4.586 8.547c-1.222 4.007-.145 8.466-1.25 12.507-1.133 4.137-5.42 11.673-5.42 11.673l12.09-1.46c-.106-4.334-1.628-8.71-1.55-12.922.109-5.9 3.628-11.89.716-18.346z"
                        filter="url(#p)"
                        opacity={0.374}
                        transform="translate(8.899 7.457)"
                    />
                    <path
                        fillOpacity={0.142}
                        d="M138.47 139.1c-7.816 19.045-8.182 35.176-25.862 47.361l8.186 1.459c19.75-20.503 12.473-29.72 17.676-48.82z"
                        filter="url(#t)"
                        opacity={0.564}
                        transform="scale(-1 1) rotate(-13.794 -129.507 932.703)"
                    />
                    <path
                        fillOpacity={0.174}
                        d="M13.657 53.677c14.931-6.709 25.735-15.481 24.21-30.418-2.444 11.077-11.873 20.99-24.21 30.418z"
                        filter="url(#w)"
                        opacity={0.428}
                        transform="translate(8.899 7.457)"
                    />
                    <path
                        fillOpacity={0.274}
                        d="m69.395 92.17-.975-17.363 14.548 16.17L63.649 53.71c-1.417 12.484-1.01 24.199 5.745 38.46z"
                        filter="url(#q)"
                        opacity={0.374}
                        transform="scale(-1 1) rotate(72.276 -13.817 -95.534)"
                    />
                    <path
                        d="M67.538 3.763c2.74 8.062 6.168 14.451 12.235 18.52l-6.771 7.922c-7.733-5.937-8.057-12.685-10.136-19.25"
                        style={{
                            fill: "rgba(0,0,0,.18)",
                        }}
                        transform="translate(6.01 4.837)"
                    />
                    <path
                        d="M97.08 3.606c-2.74 8.062-6.511 14.28-12.578 18.349l7 7.75c7.733-5.937 8.114-13.028 10.193-19.593"
                        style={{
                            fill: "rgba(0,0,0,.16)",
                        }}
                        transform="translate(6.01 4.837)"
                    />
                    <path
                        d="M92.24 10.381c-5.66-1.322-11.716-1.613-16.716-.803-.991.16-3.15.634-3.892.854-.297.088-.563.16-.592.16-.208 0-2.84-6.244-2.83-6.712a.582.582 0 0 1 .119-.265c.111-.148.167-.146 1.98.061 4.772.545 8.938.75 13.798.677 4.298-.065 7.449-.267 11.186-.718.757-.091 1.39-.153 1.407-.136.05.05-.75 2.152-1.36 3.578-.784 1.834-1.648 3.552-1.794 3.568-.066.007-.654-.112-1.306-.264z"
                        style={{
                            fill: "rgba(0,0,0,.176)",
                        }}
                        transform="translate(6.01 4.837)"
                    />
                </svg>
            </div>

            <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
                {/* back svg */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-7.457 -10.12 179.827 166.99"
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}

                    className="md:w-[350px] md:h-[350px] xl:w-[350px] xl:h-[350px] w-[310px] h-[310px]"
                >
                    <title>{"Blue Polo Shirt Remix by Merlin2525.svg"}</title>
                    <defs>
                        <filter
                            id="h"
                            width={1.698}
                            height={1.119}
                            x={-0.349}
                            y={-0.06}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.281} />
                        </filter>
                        <filter
                            id="i"
                            width={2.372}
                            height={1.157}
                            x={-0.686}
                            y={-0.079}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={2.346} />
                        </filter>
                        <filter
                            id="j"
                            width={2.002}
                            height={1.09}
                            x={-0.501}
                            y={-0.045}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.352} />
                        </filter>
                        <filter
                            id="k"
                            width={1.559}
                            height={1.104}
                            x={-0.279}
                            y={-0.052}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.531} />
                        </filter>
                        <filter
                            id="l"
                            width={1.522}
                            height={1.158}
                            x={-0.261}
                            y={-0.079}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.82} />
                        </filter>
                        <filter id="m" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.621} />
                        </filter>
                        <filter
                            id="o"
                            width={1.363}
                            height={1.194}
                            x={-0.181}
                            y={-0.097}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.212} />
                        </filter>
                        <filter
                            id="p"
                            width={1.434}
                            height={1.22}
                            x={-0.217}
                            y={-0.11}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.604} />
                        </filter>
                        <filter
                            id="q"
                            width={1.512}
                            height={1.194}
                            x={-0.256}
                            y={-0.097}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.325} />
                        </filter>
                        <filter
                            id="r"
                            width={1.31}
                            height={1.353}
                            x={-0.155}
                            y={-0.177}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.733} />
                        </filter>
                        <filter
                            id="s"
                            width={1.293}
                            height={1.254}
                            x={-0.147}
                            y={-0.127}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.808} />
                        </filter>
                        <filter
                            id="t"
                            width={1.338}
                            height={1.06}
                            x={-0.169}
                            y={-0.03}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={0.94} />
                        </filter>
                        <filter
                            id="u"
                            width={1.244}
                            height={1.114}
                            x={-0.122}
                            y={-0.057}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.317} />
                        </filter>
                        <filter
                            id="v"
                            width={1.445}
                            height={1.124}
                            x={-0.223}
                            y={-0.062}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.069} />
                        </filter>
                        <filter
                            id="w"
                            width={1.457}
                            height={1.084}
                            x={-0.229}
                            y={-0.042}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.323} />
                        </filter>
                        <filter
                            id="x"
                            width={1.328}
                            height={1.262}
                            x={-0.164}
                            y={-0.131}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={1.663} />
                        </filter>
                        <filter id="a" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={2.462} />
                        </filter>
                        <filter id="b" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.239} />
                        </filter>
                        <filter
                            id="c"
                            width={1.279}
                            height={1.027}
                            x={-0.139}
                            y={-0.013}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={0.202} />
                        </filter>
                        <filter
                            id="d"
                            width={1.02}
                            height={1.436}
                            x={-0.01}
                            y={-0.218}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={0.365} />
                        </filter>
                        <filter id="e" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.216} />
                        </filter>
                        <filter id="f" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation={0.425} />
                        </filter>
                        <filter
                            id="g"
                            width={1.22}
                            height={1.021}
                            x={-0.11}
                            y={-0.011}
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation={0.165} />
                        </filter>
                        <linearGradient
                            id="n"
                            x1={56.824}
                            x2={47.431}
                            y1={72.514}
                            y2={64.654}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} />
                            <stop offset={1} stopColor="#b3b3b3" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <path
                        fillOpacity={0.292}
                        fillRule="evenodd"
                        d="M69.456 4.002c11.262 1.512 20.644 1.144 29.25 0l5.25 7.25c22.644 8.583 35.766 7.646 60 21-3.119 10.486-3.706 21.984-13 30-7.75-6.088-15.5-4.8-23.25-6.75 0 0 1.042 13.155 0 19.42-1.403 8.431 1.46 17.72 0 25.64-1.31 7.107 1.042 15.704 0 21.68-1.232 7.063 0 21.51 0 21.51-29.128 5.302-58.037 6.666-86.5 0 0 0-1.111-11.53 0-17.133 1.668-8.407-1.287-18.158 0-27.099 1.25-8.685 2.383-17.296 0-25.432-1.876-6.403 0-18.586 0-18.586-6.74.752-12.342.2-23.5 6-8.376-6.985-10.991-18.452-13.5-30 25.954-11.67 39.005-13.262 60.25-19.75z"
                        filter="url(#a)"
                        transform="translate(2.102 2.305)"
                    />
                    <path
                        fillRule="evenodd"
                        d="M65.715.568c11.262 1.512 20.644 1.144 29.25 0l5.25 7.25c22.644 8.583 35.766 7.646 60 21-3.119 10.486-3.706 21.984-13 30-7.75-6.088-15.5-4.8-23.25-6.75 0 0 1.042 13.155 0 19.42-1.403 8.431 1.46 17.72 0 25.64-1.31 7.107 1.042 15.704 0 21.68-1.232 7.063 0 21.51 0 21.51-29.128 5.302-58.037 6.666-86.5 0 0 0-1.111-11.53 0-17.133 1.668-8.407-1.288-18.158 0-27.099 1.25-8.685 2.383-17.296 0-25.432-1.876-6.404 0-18.586 0-18.586-6.74.752-12.342.2-23.5 6-8.376-6.985-10.991-18.452-13.5-30 25.949-11.673 39-13.264 60.245-19.753z"
                        style={{
                            fill: color,
                        }}
                        transform="translate(2.102 2.305)"
                    />
                    <g fill="none" stroke="#000">
                        <path
                            strokeOpacity={0.031}
                            d="M41.971 24.615s7.886-1.771 11.664-3.977c3.144-1.834 10.336-3.523 10.336-3.523"
                            filter="url(#b)"
                        />
                        <path
                            strokeOpacity={0.037}
                            d="M41.131 17.235c2.061 11.043 6.243 24.826-.25 36.5"
                            filter="url(#c)"
                        />
                        <path
                            strokeOpacity={0.064}
                            d="M39.285 139.61c5.413 1.964 11.259.483 16.238 2.029 4.454 1.382 9.624 2.197 13.766 1.954 3.558-.209 7.159-.11 10.735-.305 5.488-.298 10.988.744 16.482-.16 4.011-.66 8.132-1.337 12.266-1.237 5.704.137 11.4-.826 16.764-2.281"
                            filter="url(#d)"
                        />
                        <path
                            strokeOpacity={0.055}
                            d="M6.875 28.834c.633 1.247.823 3.321.849 4.731.05 2.684 1.038 5.532 2.46 7.666 1.338 2.006 2.546 4.19 3.11 6.531.541 2.243 1.327 3.964 3.281 5.496 2.056 1.611 2.14 3.544 3.268 5.297"
                            filter="url(#e)"
                        />
                        <path
                            strokeOpacity={0.055}
                            d="M158.41 29.455c-1.507 2.82-3.892 7.654-3.613 11.389.395 5.302-1.074 8.465-4.322 10.808-4.144 2.99-4.373 5.222-4.635 7.235"
                            filter="url(#f)"
                        />
                        <path
                            strokeOpacity={0.041}
                            d="M126.02 17.48c-2.061 11.043-5.97 25.399.523 37.072"
                            filter="url(#g)"
                        />
                    </g>
                    <path
                        fillOpacity={0.205}
                        d="M89.954 55.265s3.588 12.867 3.237 19.421c-.184 3.436-2.04 8.375-2.455 11.79-.91 7.501.374 20.809.374 20.809s-3.75-13.652-3.237-20.577c.305-4.108 1.656-9.538 2.112-13.632.727-6.532-.031-17.811-.031-17.811z"
                        filter="url(#h)"
                        opacity={0.642}
                        transform="rotate(9.814 242.336 -211.873)"
                    />
                    <path
                        fillOpacity={0.361}
                        d="M61.826 49.19c4.407 11.45 9.752 22.483 7.1 33.329-3.078 12.59.292 25.59.404 38.379-2.464-12.443-8.437-24.85-6.693-37.545 1.309-9.522-1.916-22.353-.811-34.164z"
                        filter="url(#i)"
                        opacity={0.354}
                        transform="translate(2.102 2.305)"
                    />
                    <path
                        fillOpacity={0.137}
                        d="M103.67 74.764c4.582 11.904 7.728 24.366 4.228 32.262-5.067 11.434 3.168 27.083 3.276 39.447-2.804-14.161-18.533-30.125-12.346-43.41 3.523-7.564 3.912-18.364 4.841-28.298z"
                        filter="url(#j)"
                        opacity={0.498}
                        transform="rotate(6.481 456.44 49.623)"
                    />
                    <path
                        fillOpacity={0.242}
                        d="M38.06 71.32c3.216 1.117 12.099-46.339 11.673-46.694 1.625 27.975 5.849 61.988-12.924 70.875.476-7.91 3.362-9.741 1.25-24.181z"
                        filter="url(#k)"
                        opacity={0.412}
                        transform="translate(2.102 2.305)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M65.004 71.382c-1.154-4.32-3.353 13.989-9.598 24.005 0 0 1.56-22.101 3.644-25.264 6.69-10.153 13.248-20.42 13.04-20.593.61 10.508-4.081 20.834-2.676 31.821 2.164 16.921-1.965 17.836-13.687 23.389.476-7.915 10.24.19 9.277-33.358z"
                        filter="url(#l)"
                        opacity={0.37}
                        transform="matrix(-1 0 0 1 180.061 -7.928)"
                    />
                    <path
                        fill="url(#n)"
                        d="M39.398 76.595c7.613-5.826 14.551-12.816 18.344-25.223-.219 8.067 2.097 17.517-3.752 22.513z"
                        filter="url(#m)"
                        opacity={0.428}
                        transform="translate(-19.087 -26.07) scale(1.0874)"
                    />
                    <path
                        fillOpacity={0.123}
                        d="m160.09 72.842 1.25-12.09 8.964 9.172-16.05-27.099c2.935 15.179-.92 15.756 5.836 30.018z"
                        filter="url(#o)"
                        opacity={0.399}
                        transform="rotate(-28.676 121.99 93.685)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M81.506 138.92c5.003 6.462 5.586 13.12 11.048 8.755 5.964-4.766.569-18.339.834-27.516 1.518 11.951 10.414 22.338 2.754 31.565-6.65 8.01-10.598-5.083-14.636-12.804z"
                        filter="url(#p)"
                        opacity={0.305}
                        transform="scale(.7084) rotate(38.97 110.493 236.968)"
                    />
                    <path
                        fillOpacity={0.178}
                        d="M87.174 141.15s-3.643 5.454-4.586 8.547c-1.222 4.007-.145 8.466-1.25 12.507-1.133 4.138-5.42 11.673-5.42 11.673l12.09-1.46c-.106-4.334-1.628-8.71-1.55-12.922.109-5.9 3.628-11.89.716-18.346z"
                        filter="url(#q)"
                        opacity={0.374}
                        transform="matrix(-1 0 0 1 127.871 -31.017)"
                    />
                    <path
                        fillOpacity={0.274}
                        d="m69.395 92.17-.975-17.363 14.548 16.17L63.649 53.71c-1.417 12.484-1.01 24.199 5.745 38.46z"
                        filter="url(#r)"
                        opacity={0.374}
                        transform="rotate(72.276 75.395 21.013)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M77.337 151.85s5.167 10.049 10.654 9.622c7.957-.62 9.435-21.73 8.337-29.635-.797-5.735 10.462-18.662 10.462-18.662s-6.73 17.297-5.955 23.457c.941 7.485-4.908 31.365-12.45 31.166-6.1-.17-11.048-15.95-11.048-15.95z"
                        filter="url(#s)"
                        opacity={0.501}
                        transform="matrix(-.94217 0 0 .84552 152.421 -13.11)"
                    />
                    <path
                        fillOpacity={0.21}
                        d="M93.596 86.137s7.024 27.949 7.891 34.802c.653 5.16.423 13.707-.725 16.52-2.818 6.903-.866 26.7-.866 26.7s-4.25-18.899-2.789-29.068c.57-3.962 2.35-10.338 1.745-14.741-.901-6.555-5.256-34.213-5.256-34.213z"
                        filter="url(#t)"
                        opacity={0.412}
                        transform="matrix(-1.5411 .24238 .38502 .97018 184.212 -78.485)"
                    />
                    <path
                        fillOpacity={0.142}
                        d="M145.54 123.13c-7.816 19.045-15.253 51.149-32.932 63.334l6.995 4.708c19.75-20.503 20.734-48.94 25.938-68.042z"
                        filter="url(#u)"
                        opacity={0.564}
                        transform="rotate(-35.396 36.6 207.423)"
                    />
                    <path
                        fillOpacity={0.16}
                        d="M53.802 76.532c.206-14.412 3.49-40.959 12.647-52.74l4.17 2.918C62.994 37.806 56.844 63.4 53.801 76.531z"
                        filter="url(#v)"
                        opacity={0.407}
                        transform="translate(2.102 2.305)"
                    />
                    <path
                        fill="url(#n)"
                        d="M39.398 76.595c7.613-5.826 14.551-12.816 18.344-25.223-.219 8.067 2.097 17.517-3.752 22.513z"
                        filter="url(#m)"
                        opacity={0.276}
                        transform="matrix(-1.0874 0 0 1.0874 185.731 -25.849)"
                    />
                    <path
                        fillOpacity={0.224}
                        d="M93.596 86.137s9.626 28.884 10.492 35.737c.653 5.16-.32 12.309-1.47 15.122-2.817 6.903-2.723 27.164-2.723 27.164s-4.25-18.899-2.788-29.068c.569-3.962 2.35-10.338 1.745-14.741-.902-6.555-5.257-34.213-5.257-34.213z"
                        filter="url(#w)"
                        opacity={0.346}
                        transform="matrix(.96844 .12055 -.24195 .48251 23.705 -21.337)"
                    />
                    <path
                        fillOpacity={0.306}
                        d="M93.596 86.137s7.024 27.949 7.891 34.802c.653 5.16.423 13.707-.725 16.52-2.818 6.903-.866 26.7-.866 26.7s-4.25-18.899-2.789-29.068c.57-3.962 2.35-10.338 1.745-14.741-.901-6.555-5.256-34.213-5.256-34.213z"
                        filter="url(#t)"
                        opacity={0.284}
                        transform="matrix(-1.1875 .16551 .29666 .6625 197.011 -53.549)"
                    />
                    <path
                        fillOpacity={0.123}
                        d="M163.97 86.529c-.907-8.534-3.597-13.911-2.622-25.776l12.14 16.929-17.536-32.197c-.846 15.278 1.262 26.783 8.018 41.044z"
                        filter="url(#o)"
                        opacity={0.761}
                        transform="rotate(46.5 71.184 38.187)"
                    />
                    <path
                        fillOpacity={0.128}
                        d="M123.99 108.59s-3.643 5.454-4.586 8.547c-1.222 4.007-.145 8.466-1.25 12.507-1.133 4.137-5.42 11.673-5.42 11.673l12.09-1.46c-.106-4.334-1.628-8.71-1.55-12.922.109-5.9 3.628-11.89.716-18.346z"
                        filter="url(#q)"
                        opacity={0.374}
                        transform="translate(2.102 2.305)"
                    />
                    <path
                        fillOpacity={0.142}
                        d="M138.47 139.1c-7.816 19.045-8.182 35.176-25.862 47.361l8.186 1.459c19.75-20.503 12.473-29.72 17.676-48.82z"
                        filter="url(#u)"
                        opacity={0.564}
                        transform="scale(-1 1) rotate(-13.794 -147.403 902.03)"
                    />
                    <path
                        fillOpacity={0.228}
                        d="M77.337 151.85s5.167 10.049 10.654 9.622c7.957-.62 9.841-13.593 8.743-21.498-.797-5.735 2.755-11.882 2.755-11.882s.977 8.257 1.752 14.416c.941 7.485-5.314 25.488-12.855 25.29-6.1-.17-11.05-15.95-11.05-15.95z"
                        filter="url(#s)"
                        opacity={0.501}
                        transform="matrix(.94217 0 0 .84552 -10.734 1.795)"
                    />
                    <path
                        fillOpacity={0.174}
                        d="M13.657 53.677c14.931-6.709 25.735-15.481 24.21-30.418-2.444 11.077-11.873 20.99-24.21 30.418z"
                        filter="url(#x)"
                        opacity={0.428}
                        transform="translate(2.102 2.305)"
                    />
                    <path
                        fillOpacity={0.274}
                        d="m69.395 92.17-.975-17.363 14.548 16.17L63.649 53.71c-1.417 12.484-1.01 24.199 5.745 38.46z"
                        filter="url(#r)"
                        opacity={0.374}
                        transform="scale(-1 1) rotate(72.276 -6.89 -93.456)"
                    />
                </svg>
            </div>

            <div style={{ position: 'absolute'}} className={` z-20 flex items-center justify-center
                ${canvast === 'front' ? 'top-[55px] left-[15px] right-0 bottom-0' : 'top-[55px] left-0 right-0 bottom-0'}`}>
                <div className={`${canvast === 'front' ? 'block' : 'hidden'} `}>
                    <CanvasComponent canvasType='front' height='220' width='170' />
                </div>

                <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
                    <CanvasComponent canvasType='back' height='210' width='160' />
                </div>
            </div>

        </div>
    )
}
export default PoloShirtSvg
