import React from 'react'
import CanvasComponent from '../ui/Canvas'
import { useSvgStore } from '@/hooks/useSvgStore'

const DrawStringBagSvg = () => {
  
  const {color} = useSvgStore()
  return (
    
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1280"
      height="1280"
      viewBox="1063.288 0 984.712 787"
      preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}

        className="md:w-[420px] md:h-[420px] xl:w-[420px] xl:h-[420px] w-[400px] h-[400px]"
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h2048v787H0z"></path>
      <path
        fill={color}
        d="M1354 111h7l7 3 24 2 39 3 24 1 45 1h109l55-1 50-3 30-3h7l7-3h7l10 4 5 4v2h2l10 14 9 17 9 23 8 25 9 34 13 57 13 47 15 47 16 47 17 48 12 35 10 33 9 36 4 25v47l-4 13-7 9-7 7-12 6-8 2h-25l-33-3-25-3-21-1v3l-2 1-184 1h-137l-138-1-8-1v-3l-31 2-35 4-14 1h-23l-12-3-10-6-9-9-6-11-2-9v-45l4-26 9-36 12-38 17-50 17-48 19-57 15-52 9-37 10-43 8-29 10-30 10-22 9-14 9-10 9-6z"
      ></path>
      <path
        fill="#FFF"
        d="M1767 131l6 5 9 17 15 41 15 45 17 56 20 69 26 92 18 63 16 49 14 41 6 24-1 10-4 10-9 10-9 5-8 2-17 1-26-3-44-8-16-2-1-1-2-185-2-69-4-74-4-54-6-63-5-50-2-18-2-5z"
      ></path>
      <path
        fill="#F7F7F7"
        d="M1351 131l1 3-3 20-9 84-5 59-3 43-3 59-2 62-1 64-1 132-1 1-27 4-33 6-26 3-16-1-13-4-8-6-6-8-4-9-1-9 5-21 12-36 14-41 12-41 21-74 23-81 17-58 14-45 14-43 16-43 7-13z"
      ></path>
      <path
        fill="#FFF"
        d="M1928 658l1 2-6 11-9 9-10 5-10 2h-16l-35-3-32-4-15-1-2-1v-14h9l49 9 23 3h18l15-3 11-6zM1191 658l5 5 7 6 8 4 16 3h16l30-4 43-8h9v13l-4 2-30 3-36 4-15 1h-15l-10-2-10-5-9-9-5-10z"
      ></path>
      <path
        fill="rgba(35, 35, 35, 0.067)"
        d="M1376 603l4 4 3 11 5 12 8 14 9 14 4 6 1 5-3 8-10 4-7-6-12-13-8-10 2-8 1-19v-17z"
      ></path>
      <path
        fill="rgba(92, 92, 92, 0.114)"
        d="M1450 126l53 2h116l36-1 1 4-1 1-40 2-54 1-55-1-54-2-5-2-1-3z"
      ></path>
      <path
        fill="#FFF"
        d="M1870 414l2 3 22 63 16 47 10 34 6 25 3 17-1 3-15-43-15-46-22-78-6-21zM1249 411l1 4-21 74-12 41-14 42-11 32h-1l1-12 6-27 11-37 12-37 17-48zM1759 118h6l10 6 8 10 8 14 8 17 8 22 10 35 7 29-1 4-14-44-15-43-10-25-6-10-4-5-8-5-5-2zM1354 118h6l-3 4-8 3-5 4-9 14-12 31-16 47-11 35-1-4 9-37 9-30 8-22 10-21 8-12 9-9z"
      ></path>
      <path
        fill="rgba(0, 0, 0, 0.086)"
        d="M1332 630l5 1 5 8 8 14-3 5h-8l-7-1-1-2v-20z"
      ></path>
      <path
        fill="rgba(0, 0, 0, 0.106)"
        d="M1718 122h8l2 2-3 3-16 2-33 2-5-3 2-2z"
      ></path>
      <path
        fill="rgba(40, 40, 40, 0.153)"
        d="M1717 661h4l2 5 8 5-2 4-3 3-5-1-5-3-3-4 1-6z"
      ></path>
      <path
        fill="rgba(0, 0, 0, 0.165)"
        d="M1393 122l17 1 13 2-3 4-16-1-12-2z"
      ></path>
      <path
        fill="rgba(92, 92, 92, 0.23)"
        d="M1784 631l3 2v6l-3 4h-5l-1-1 1-7z"
      ></path>
      <path
        fill="#000000"
        d="M1766 662l2 2-3 2-1 5h8l3-3-1 5-6 2-5-2-2-3 1-5zM1352 662l5 3 1 5-3 4h-9l-2-2 1-4 3 3h7l-1-5-3-3z"
      ></path>
      <path
        fill="rgba(92, 92, 92, 0.208)"
        d="M1336 617l7 6 11 13-1 2-13-14-4-5z"
      ></path>
      <path fill="rgba(92, 92, 92, 0.325)" d="M1782 617v3l-11 12v-3z"></path>
    </svg>

    <div style={{ position: 'absolute', top: 12, left: 3, right: 0, bottom: 0 }} className="z-20 flex items-center justify-center">
                    <CanvasComponent canvasType='front' height='220' width='200' />
            </div>

    </div>
  )
}

export default DrawStringBagSvg