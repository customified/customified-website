import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import { RotateCcwSquare } from "lucide-react"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"

const SweatshirtSvg = () => {

    const { color } = useSvgStore()
    const { canvast, setCanvasType } = useCanvasStore()

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

            <div className="flex flex-col relative  " >
                <button className="cursor-pointer px-1 w-hit h-fit z-20" onClick={() => canvast === 'front' ? setCanvasType("back") : setCanvasType("front")}>
                    <RotateCcwSquare />
                </button>
                {canvast}
            </div>

            <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
                {/* front */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={732.689}
                    height={278.783}
                    viewBox="-43.837 -86.446 472.31 452.669"
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}

                    className="md:w-[400px] md:h-[400px] xl:w-[400px] xl:h-[400px] w-[380px] h-[380px]"
                >
                    <path
                        d="m0 0-2.805-1.564s-52.219-10.438-55.192-11.928c-2.973-1.49-11.221-12.982-12.066-26.074 5.374-9.963 17.474-18.182 19.298-17.818 1.082-1.162 6.558-6.182 6.558-6.182l12.168 10.729-5.273 7.744s-.203 1.855-1.791 3.602c2.704.727 11.795-2.074 12.81-2.256 2.434-16.619 1.014-63.529 7.165-70.002.338-5.527.186-9.908.608-10.035 6.489-.582 61.241-2.184 64.689 0 .541 3.271.743 7.891.879 9.672 6.489 8.764 5.373 64.875 7.232 70.039 6.083-12.225 12.822-30.074 17.064-38.17 1.218-.04 3.877-8.522 3.877-8.522l16.133 4.408s-.543 6.287-.764 9.231c1.599-.089-19.989 58.824-32.814 66.522-6.393 3.837-20.189 8.437-26.275 9.076a56.305 56.305 0 0 1-2.704 1.42S7.603-2.365 0 0zm-37.19-44.983-13.493-12.541M-.104-.365s.475-16.342 14.709-16.342S28.839-.291 28.839-.291m-31.578-1.16s.542-18.088 17.411-18.234c8.435-.073 12.619 4.485 14.694 9.062 2.075 4.577 2.041 9.172 2.041 9.172M.348-3.619s18.074-2.477 28.209.637m62.135-74.015-19.248-5.127m-90.365-31.714s36.313-3 65.954-.082"
                        style={{
                            stroke: "#000",
                            strokeWidth: 0.449665,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeOpacity: 1,
                            strokeDasharray: "none",
                            fillOpacity: 1,
                            fill: color,
                        }}
                        transform="matrix(2.22388 0 0 -2.22388 156.297 .556)"
                    />
                    <path
                        d="M96.96 388.714s-19.397-27.182-30.265-52.337c-1.507-6.814 1.989-6.278 1.989-6.278"
                        style={{
                            stroke: "#000",
                            strokeWidth: 1,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeOpacity: 1,
                            strokeDasharray: "none",
                            fill: color,
                        }}
                        transform="translate(-27.794 -295.919)"
                    />
                    <path
                        d="M282.562 410.515s-1.667-58.456 12.908-70.352"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: 0.99999994,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeOpacity: 1,
                            strokeDasharray: "none",
                        }}
                        transform="translate(-5.57 -312.081)"
                    />
                </svg>
            </div>

            <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
                {/* back */}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={732.689}
                    height={278.783}
                    viewBox="312.898 -44.82 458.688 398.418"
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}

                    className="md:w-[350px] md:h-[350px] xl:w-[350px] xl:h-[350px] w-[330px] h-[330px]"
                >
                    <path
                        d="m0 0-2.805-1.564s-52.219-10.438-55.192-11.928c-2.973-1.49-11.221-12.982-12.066-26.074 5.374-9.963 17.474-18.182 19.298-17.818 1.082-1.162 6.558-6.182 6.558-6.182l12.168 10.729-5.273 7.744s-.203 1.855-1.791 3.602c2.704.727 11.795-2.074 12.81-2.256 2.434-16.619 1.014-63.529 7.165-70.002.338-5.527.186-9.908.608-10.035 6.489-.582 61.241-2.184 64.689 0 .541 3.271.743 7.891.879 9.672 6.489 8.764 5.373 64.875 7.232 70.039 6.083-12.225 12.822-30.074 17.064-38.17 1.218-.04 3.877-8.522 3.877-8.522l16.133 4.408s-.543 6.287-.764 9.231c1.599-.089-19.989 58.824-32.814 66.522-6.393 3.837-20.189 8.437-26.275 9.076a56.305 56.305 0 0 1-2.704 1.42S7.603-2.365 0 0zm-37.19-44.983-13.493-12.541M90.692-76.997l-19.248-5.127m-90.365-31.714s36.313-3 65.954-.082"
                        style={{
                            fill: color,
                            stroke: "#000",
                            strokeWidth: 0.44966492,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeOpacity: 1,
                            strokeDasharray: "none",
                        }}
                        transform="matrix(-2.22388 0 0 -2.22388 576.392 .556)"
                    />
                    <path
                        d="M96.96 388.714s-19.397-27.182-30.265-52.337c-1.507-6.814 1.989-6.278 1.989-6.278"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: 0.99999994,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeOpacity: 1,
                            strokeDasharray: "none",
                        }}
                        transform="matrix(-1 0 0 1 760.483 -295.919)"
                    />
                    <path
                        d="M461.268 410.515s1.668-58.456-12.907-70.352"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: 0.99999994,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeOpacity: 1,
                            strokeDasharray: "none",
                        }}
                        transform="translate(-5.57 -312.081)"
                    />
                    <path
                        d="M511.616 316.114c25.776 6.253 52.446 6.016 76.875.178"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: 1,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeOpacity: 1,
                        }}
                        transform="translate(-5.57 -312.081)"
                    />
                </svg>
            </div>


            <div style={{ position: 'absolute' }} className={`z-20 flex items-center justify-center
        ${canvast === 'front' ? 'top-[22px] left-0 right-[10px] bottom-0' : 'top-0 left-[5px] right-0 bottom-0'}`}>
                <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
                    <CanvasComponent canvasType='front' height='178' width='145' />
                </div>
            
                <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
                    <CanvasComponent canvasType='back' height='170' width='130' />
                </div>
            </div>

        </div>
    )
}
export default SweatshirtSvg
