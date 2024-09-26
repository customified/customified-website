import { useCanvasStore } from "@/hooks/useCanvasStore"
import { useSvgStore } from "@/hooks/useSvgStore"
import { RotateCcwSquare } from "lucide-react"
import * as React from "react"
import CanvasComponent from "../ui/Canvas"
const MugSvg = () => {

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

      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
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
          <clipPath id="a">
            <path d="M3084 641h1120.879v2149H3084Zm0 0" />
          </clipPath>
          <clipPath id="b">
            <path d="M3088 642h1014v2148H3088Zm0 0" />
          </clipPath>
          <clipPath id="c">
            <path d="M254 17h2902v3776H254Zm0 0" />
          </clipPath>
          <clipPath id="d">
            <path d="M1704.96 18.04c-48.35-.392-1193.023-7.552-1450.42 171.51l80.038 3304.2 22.863 102.91s468.2 216.961 1347.52 194.399c879.328 22.562 1347.527-194.399 1347.527-194.399l22.864-102.91 80.039-3304.2C2898 10.489 1753.32 17.649 1704.96 18.04Zm0 0" />
          </clipPath>
          <clipPath id="e">
            <path d="M1704.96 18.04c-48.35-.392-1193.023-7.552-1450.42 171.51l80.038 3304.2 22.863 102.91s468.2 216.961 1347.52 194.399c879.328 22.562 1347.527-194.399 1347.527-194.399l22.864-102.91 80.039-3304.2C2898 10.489 1753.32 17.649 1704.96 18.04" />
          </clipPath>
          <clipPath id="f">
            <path d="M2753 652h392v2144h-392Zm0 0" />
          </clipPath>
          <clipPath id="g">
            <path d="M3140.281 1029.059s-189.91-15.989-201.48 342.691c0 0-19.66 981.04-6.281 1007.781 13.378 26.739 119.652 23.54 155.3-16.562 35.649-40.078 19.352 10.61 19.352 10.61l-12.41 421.98s-291.422-99.72-318.16-335.84c-26.743-236.11-80.204-1514.77 187.117-1626.16l131.043-134.82 49.648-46.15Zm0 0" />
          </clipPath>
          <clipPath id="h">
            <path d="M3140.281 1029.059s-189.91-15.989-201.48 342.691c0 0-19.66 981.04-6.281 1007.781 13.378 26.739 119.652 23.54 155.3-16.562 35.649-40.078 19.352 10.61 19.352 10.61l-12.41 421.98s-291.422-99.72-318.16-335.84c-26.743-236.11-80.204-1514.77 187.117-1626.16l131.043-134.82 49.648-46.15-4.129 376.47" />
          </clipPath>
          <clipPath id="j">
            <path d="M2614 261h163v1100h-163Zm0 0" />
          </clipPath>
          <clipPath id="k">
            <path d="M2614.828 272.59s69.434 960.32 57.852 1087.59l104.14-1099.16Zm0 0" />
          </clipPath>
          <clipPath id="l">
            <path d="M2614.828 272.59s69.434 960.32 57.852 1087.59l104.14-1099.16-161.992 11.57" />
          </clipPath>
          <clipPath id="n">
            <path d="M370 75h2650v256H370Zm0 0" />
          </clipPath>
          <clipPath id="o">
            <path d="M3019.79 203.172c0 70.289-593.11 127.27-1324.778 127.27-731.653 0-1324.77-56.981-1324.77-127.27 0-70.293 593.117-127.274 1324.77-127.274 731.668 0 1324.777 56.98 1324.777 127.274Zm0 0" />
          </clipPath>
          <clipPath id="p">
            <path d="M3019.79 203.172c0 70.289-593.11 127.27-1324.778 127.27-731.653 0-1324.77-56.981-1324.77-127.27 0-70.293 593.117-127.274 1324.77-127.274 731.668 0 1324.777 56.98 1324.777 127.274" />
          </clipPath>
          <linearGradient
            id="i"
            x1={-0.146}
            x2={1}
            y1={0}
            y2={0}
            gradientTransform="translate(2753.54 1724.07) scale(390.874)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#E5E6E3" />
            <stop offset={0.25} stopColor="#E5E6E3" />
            <stop offset={0.266} stopColor="#E4E6E3" />
            <stop offset={0.281} stopColor="#E4E6E3" />
            <stop offset={0.297} stopColor="#E4E5E2" />
            <stop offset={0.313} stopColor="#E4E5E2" />
            <stop offset={0.344} stopColor="#E4E5E2" />
            <stop offset={0.375} stopColor="#E3E5E2" />
            <stop offset={0.406} stopColor="#E3E4E1" />
            <stop offset={0.438} stopColor="#E3E4E1" />
            <stop offset={0.453} stopColor="#E3E3E1" />
            <stop offset={0.469} stopColor="#E2E3E0" />
            <stop offset={0.5} stopColor="#E2E3E0" />
            <stop offset={0.516} stopColor="#E2E2DF" />
            <stop offset={0.531} stopColor="#E1E2DF" />
            <stop offset={0.563} stopColor="#E1E2DE" />
            <stop offset={0.594} stopColor="#E0E1DE" />
            <stop offset={0.625} stopColor="#E0E1DD" />
            <stop offset={0.641} stopColor="#DFE0DD" />
            <stop offset={0.648} stopColor="#DFE0DD" />
            <stop offset={0.656} stopColor="#DFDFDC" />
            <stop offset={0.688} stopColor="#DFDFDC" />
            <stop offset={0.703} stopColor="#DEDFDB" />
            <stop offset={0.719} stopColor="#DEDEDB" />
            <stop offset={0.75} stopColor="#DDDEDA" />
            <stop offset={0.766} stopColor="#DDDDDA" />
            <stop offset={0.773} stopColor="#DCDDDA" />
            <stop offset={0.781} stopColor="#DCDDD9" />
            <stop offset={0.797} stopColor="#DCDCD9" />
            <stop offset={0.813} stopColor="#DBDCD9" />
            <stop offset={0.844} stopColor="#DBDBD8" />
            <stop offset={0.859} stopColor="#DADBD8" />
            <stop offset={0.875} stopColor="#DADAD7" />
            <stop offset={0.883} stopColor="#D9DAD7" />
            <stop offset={0.891} stopColor="#D9D9D6" />
            <stop offset={0.906} stopColor="#D8D9D6" />
            <stop offset={0.922} stopColor="#D8D9D6" />
            <stop offset={0.938} stopColor="#D8D8D5" />
            <stop offset={0.953} stopColor="#D7D8D5" />
            <stop offset={0.969} stopColor="#D7D8D4" />
            <stop offset={0.984} stopColor="#D6D7D4" />
            <stop offset={1} stopColor="#D6D6D3" />
          </linearGradient>
          <linearGradient
            id="m"
            x1={0}
            x2={1}
            y1={0}
            y2={0}
            gradientTransform="rotate(-90 2028 -667.82) scale(1099.16)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#EBECEB" />
            <stop offset={0.25} stopColor="#ECECEB" />
            <stop offset={0.375} stopColor="#ECECEB" />
            <stop offset={0.391} stopColor="#ECECEB" />
            <stop offset={0.406} stopColor="#ECECEC" />
            <stop offset={0.438} stopColor="#ECECEC" />
            <stop offset={0.469} stopColor="#ECECEC" />
            <stop offset={0.484} stopColor="#EDECEC" />
            <stop offset={0.5} stopColor="#EDEDEC" />
            <stop offset={0.531} stopColor="#EDEDEC" />
            <stop offset={0.563} stopColor="#EDEDED" />
            <stop offset={0.578} stopColor="#EEEDED" />
            <stop offset={0.594} stopColor="#EEEEED" />
            <stop offset={0.609} stopColor="#EEE" />
            <stop offset={0.625} stopColor="#EFEEEE" />
            <stop offset={0.656} stopColor="#EFEFEF" />
            <stop offset={0.672} stopColor="#F0EFEF" />
            <stop offset={0.688} stopColor="#F0F0F0" />
            <stop offset={0.719} stopColor="#F1F0F0" />
            <stop offset={0.734} stopColor="#F1F1F1" />
            <stop offset={0.75} stopColor="#F2F1F1" />
            <stop offset={0.766} stopColor="#F2F2F2" />
            <stop offset={0.781} stopColor="#F3F2F2" />
            <stop offset={0.797} stopColor="#F3F3F3" />
            <stop offset={0.813} stopColor="#F3F3F4" />
            <stop offset={0.828} stopColor="#F4F3F4" />
            <stop offset={0.844} stopColor="#F4F4F4" />
            <stop offset={0.859} stopColor="#F5F5F5" />
            <stop offset={0.875} stopColor="#F5F5F6" />
            <stop offset={0.906} stopColor="#F6F6F6" />
            <stop offset={0.922} stopColor="#F6F7F7" />
            <stop offset={0.938} stopColor="#F7F7F8" />
            <stop offset={0.953} stopColor="#F7F8F8" />
            <stop offset={0.969} stopColor="#F8F8F9" />
            <stop offset={0.984} stopColor="#F9F9FA" />
            <stop offset={1} stopColor="#F9FAFB" />
          </linearGradient>
          <linearGradient
            id="q"
            x1={0}
            x2={1}
            y1={0}
            y2={0}
            gradientTransform="translate(370.243 203.17) scale(2649.55)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#BABBBC" />
            <stop offset={0.004} stopColor="#BBBCBD" />
            <stop offset={0.008} stopColor="#BDBEBE" />
            <stop offset={0.012} stopColor="#BEBFBF" />
            <stop offset={0.016} stopColor="#BFBFC0" />
            <stop offset={0.019} stopColor="#C0C1C1" />
            <stop offset={0.023} stopColor="#C1C2C2" />
            <stop offset={0.027} stopColor="#C2C3C3" />
            <stop offset={0.031} stopColor="#C3C3C4" />
            <stop offset={0.035} stopColor="#C4C5C5" />
            <stop offset={0.039} stopColor="#C6C6C6" />
            <stop offset={0.043} stopColor="#C6C7C7" />
            <stop offset={0.047} stopColor="#C7C7C8" />
            <stop offset={0.051} stopColor="#C8C9C9" />
            <stop offset={0.055} stopColor="#C9CACA" />
            <stop offset={0.059} stopColor="#CBCBCB" />
            <stop offset={0.063} stopColor="#CCCDCC" />
            <stop offset={0.066} stopColor="#CDCECE" />
            <stop offset={0.07} stopColor="#CECFCF" />
            <stop offset={0.074} stopColor="#CFD0D0" />
            <stop offset={0.078} stopColor="#D1D1D1" />
            <stop offset={0.082} stopColor="#D2D2D2" />
            <stop offset={0.086} stopColor="#D3D3D3" />
            <stop offset={0.09} stopColor="#D4D4D4" />
            <stop offset={0.094} stopColor="#D5D5D5" />
            <stop offset={0.098} stopColor="#D6D6D6" />
            <stop offset={0.102} stopColor="#D7D7D7" />
            <stop offset={0.105} stopColor="#D8D8D7" />
            <stop offset={0.109} stopColor="#D9D9D8" />
            <stop offset={0.113} stopColor="#DBDAD9" />
            <stop offset={0.117} stopColor="#DCDCDA" />
            <stop offset={0.121} stopColor="#DDDCDC" />
            <stop offset={0.125} stopColor="#DEDDDD" />
            <stop offset={0.129} stopColor="#DFDFDE" />
            <stop offset={0.133} stopColor="#DFE0DF" />
            <stop offset={0.137} stopColor="#E0E1E0" />
            <stop offset={0.141} stopColor="#E2E2E1" />
            <stop offset={0.144} stopColor="#E3E3E2" />
            <stop offset={0.148} stopColor="#E4E4E3" />
            <stop offset={0.152} stopColor="#E4E5E4" />
            <stop offset={0.156} stopColor="#E5E6E5" />
            <stop offset={0.16} stopColor="#E6E7E6" />
            <stop offset={0.164} stopColor="#E7E8E7" />
            <stop offset={0.168} stopColor="#E9E9E8" />
            <stop offset={0.172} stopColor="#EAEAE9" />
            <stop offset={0.176} stopColor="#EBEBEA" />
            <stop offset={0.18} stopColor="#ECECEB" />
            <stop offset={0.184} stopColor="#EDEDEC" />
            <stop offset={0.188} stopColor="#EDEDED" />
            <stop offset={0.191} stopColor="#EEEFEF" />
            <stop offset={0.195} stopColor="#F0F0F0" />
            <stop offset={0.199} stopColor="#F1F1F1" />
            <stop offset={0.203} stopColor="#F2F2F2" />
            <stop offset={0.207} stopColor="#F3F3F3" />
            <stop offset={0.211} stopColor="#F4F4F4" />
            <stop offset={0.215} stopColor="#F5F5F5" />
            <stop offset={0.219} stopColor="#F6F6F6" />
            <stop offset={0.227} stopColor="#F5F6F5" />
            <stop offset={0.234} stopColor="#F5F5F5" />
            <stop offset={0.242} stopColor="#F4F4F4" />
            <stop offset={0.25} stopColor="#F3F3F3" />
            <stop offset={0.258} stopColor="#F3F2F2" />
            <stop offset={0.262} stopColor="#F2F1F1" />
            <stop offset={0.266} stopColor="#F1F1F0" />
            <stop offset={0.27} stopColor="#F0F0F0" />
            <stop offset={0.273} stopColor="#F0F0F0" />
            <stop offset={0.277} stopColor="#EFEFEF" />
            <stop offset={0.281} stopColor="#EEEFEF" />
            <stop offset={0.289} stopColor="#EEE" />
            <stop offset={0.297} stopColor="#EDEDED" />
            <stop offset={0.305} stopColor="#EDEDEC" />
            <stop offset={0.309} stopColor="#ECECEB" />
            <stop offset={0.313} stopColor="#EBEBEB" />
            <stop offset={0.316} stopColor="#EBEBEB" />
            <stop offset={0.32} stopColor="#EAEAEA" />
            <stop offset={0.328} stopColor="#EAEAEA" />
            <stop offset={0.332} stopColor="#E9E9E9" />
            <stop offset={0.336} stopColor="#E9E9E8" />
            <stop offset={0.34} stopColor="#E8E8E7" />
            <stop offset={0.344} stopColor="#E8E8E7" />
            <stop offset={0.348} stopColor="#E7E7E6" />
            <stop offset={0.352} stopColor="#E7E7E6" />
            <stop offset={0.359} stopColor="#E6E6E5" />
            <stop offset={0.367} stopColor="#E5E6E4" />
            <stop offset={0.371} stopColor="#E5E5E4" />
            <stop offset={0.375} stopColor="#E4E4E3" />
            <stop offset={0.379} stopColor="#E3E4E3" />
            <stop offset={0.383} stopColor="#E3E3E2" />
            <stop offset={0.391} stopColor="#E3E3E2" />
            <stop offset={0.398} stopColor="#E2E2E1" />
            <stop offset={0.406} stopColor="#E1E1E0" />
            <stop offset={0.41} stopColor="#E0E0DF" />
            <stop offset={0.414} stopColor="#E0DFDF" />
            <stop offset={0.422} stopColor="#DFDFDE" />
            <stop offset={0.43} stopColor="#DEDEDD" />
            <stop offset={0.438} stopColor="#DEDDDC" />
            <stop offset={0.445} stopColor="#DDDCDC" />
            <stop offset={0.449} stopColor="#DCDBDB" />
            <stop offset={0.453} stopColor="#DBDBDA" />
            <stop offset={0.461} stopColor="#DBDADA" />
            <stop offset={0.469} stopColor="#DADAD9" />
            <stop offset={0.473} stopColor="#D9D9D8" />
            <stop offset={0.477} stopColor="#D8D8D8" />
            <stop offset={0.48} stopColor="#D8D8D7" />
            <stop offset={0.484} stopColor="#D7D7D7" />
            <stop offset={0.488} stopColor="#D7D7D7" />
            <stop offset={0.492} stopColor="#D6D7D6" />
            <stop offset={0.496} stopColor="#D6D6D6" />
            <stop offset={0.5} stopColor="#D5D5D5" />
            <stop offset={0.508} stopColor="#D5D5D5" />
            <stop offset={0.516} stopColor="#D4D4D4" />
            <stop offset={0.519} stopColor="#D3D3D3" />
            <stop offset={0.523} stopColor="#D3D2D3" />
            <stop offset={0.527} stopColor="#D2D2D2" />
            <stop offset={0.531} stopColor="#D2D2D2" />
            <stop offset={0.539} stopColor="#D2D1D2" />
            <stop offset={0.543} stopColor="#D1D0D1" />
            <stop offset={0.547} stopColor="#D0D0D0" />
            <stop offset={0.551} stopColor="#D0D0CF" />
            <stop offset={0.555} stopColor="#CFCFCF" />
            <stop offset={0.559} stopColor="#CECECE" />
            <stop offset={0.563} stopColor="#CECECE" />
            <stop offset={0.566} stopColor="#CDCDCD" />
            <stop offset={0.57} stopColor="#CCCCCD" />
            <stop offset={0.574} stopColor="#CCC" />
            <stop offset={0.578} stopColor="#CBCCCB" />
            <stop offset={0.582} stopColor="#CBCBCB" />
            <stop offset={0.586} stopColor="#CBCACA" />
            <stop offset={0.59} stopColor="#CACACA" />
            <stop offset={0.594} stopColor="#CAC9C9" />
            <stop offset={0.598} stopColor="#C9C9C9" />
            <stop offset={0.602} stopColor="#C9C8C9" />
            <stop offset={0.609} stopColor="#C8C8C8" />
            <stop offset={0.617} stopColor="#C7C7C7" />
            <stop offset={0.621} stopColor="#C6C6C6" />
            <stop offset={0.625} stopColor="#C6C6C6" />
            <stop offset={0.629} stopColor="#C5C5C5" />
            <stop offset={0.633} stopColor="#C5C5C5" />
            <stop offset={0.637} stopColor="#C5C4C4" />
            <stop offset={0.641} stopColor="#C4C4C4" />
            <stop offset={0.644} stopColor="#C4C3C3" />
            <stop offset={0.648} stopColor="#C3C3C3" />
            <stop offset={0.656} stopColor="#C3C2C3" />
            <stop offset={0.664} stopColor="#C2C2C2" />
            <stop offset={0.668} stopColor="#C1C1C1" />
            <stop offset={0.672} stopColor="#C0C1C1" />
            <stop offset={0.676} stopColor="silver" />
            <stop offset={0.68} stopColor="#BFC0C0" />
            <stop offset={0.684} stopColor="#BFBFC0" />
            <stop offset={0.688} stopColor="#BFBEBF" />
            <stop offset={0.691} stopColor="#BEBEBF" />
            <stop offset={0.695} stopColor="#BEBDBE" />
            <stop offset={0.699} stopColor="#BDBDBD" />
            <stop offset={0.703} stopColor="#BDBDBD" />
            <stop offset={0.707} stopColor="#BCBCBD" />
            <stop offset={0.711} stopColor="#BBBCBC" />
            <stop offset={0.719} stopColor="#BBBBBC" />
            <stop offset={0.727} stopColor="#BABBBB" />
            <stop offset={0.731} stopColor="#B9BABA" />
            <stop offset={0.734} stopColor="#B9B9BA" />
            <stop offset={0.738} stopColor="#B8B9BA" />
            <stop offset={0.742} stopColor="#B8B8B9" />
            <stop offset={0.75} stopColor="#B7B8B9" />
            <stop offset={0.754} stopColor="#B7B7B8" />
            <stop offset={0.758} stopColor="#B6B7B7" />
            <stop offset={0.762} stopColor="#B6B6B7" />
            <stop offset={0.766} stopColor="#B5B6B6" />
            <stop offset={0.769} stopColor="#B4B5B6" />
            <stop offset={0.773} stopColor="#B4B5B6" />
            <stop offset={0.781} stopColor="#B3B4B5" />
            <stop offset={0.785} stopColor="#B3B3B4" />
            <stop offset={0.789} stopColor="#B2B3B4" />
            <stop offset={0.793} stopColor="#B2B2B4" />
            <stop offset={0.797} stopColor="#B1B2B3" />
            <stop offset={0.801} stopColor="#B1B2B3" />
            <stop offset={0.805} stopColor="#B0B1B3" />
            <stop offset={0.809} stopColor="#B0B1B2" />
            <stop offset={0.813} stopColor="#B0B1B1" />
            <stop offset={0.816} stopColor="#AFB0B1" />
            <stop offset={0.82} stopColor="#AFAFB1" />
            <stop offset={0.824} stopColor="#AEAFB0" />
            <stop offset={0.828} stopColor="#AEAEB0" />
            <stop offset={0.836} stopColor="#ADAEAF" />
            <stop offset={0.84} stopColor="#ADADAF" />
            <stop offset={0.844} stopColor="#ACADAE" />
            <stop offset={0.848} stopColor="#ABACAD" />
            <stop offset={0.852} stopColor="#ABABAD" />
            <stop offset={0.856} stopColor="#AAABAD" />
            <stop offset={0.859} stopColor="#AAABAC" />
            <stop offset={0.863} stopColor="#A9AAAC" />
            <stop offset={0.867} stopColor="#A9AAAC" />
            <stop offset={0.871} stopColor="#A8AAAB" />
            <stop offset={0.875} stopColor="#A7A9AB" />
            <stop offset={0.879} stopColor="#A7A9AA" />
            <stop offset={0.883} stopColor="#A7A8AA" />
            <stop offset={0.887} stopColor="#A6A8A9" />
            <stop offset={0.891} stopColor="#A6A7A9" />
            <stop offset={0.894} stopColor="#A5A7A8" />
            <stop offset={0.898} stopColor="#A5A6A8" />
            <stop offset={0.902} stopColor="#A4A6A8" />
            <stop offset={0.906} stopColor="#A4A5A7" />
            <stop offset={0.91} stopColor="#A3A5A7" />
            <stop offset={0.914} stopColor="#A3A4A6" />
            <stop offset={0.918} stopColor="#A2A3A6" />
            <stop offset={0.922} stopColor="#A1A3A5" />
            <stop offset={0.926} stopColor="#A1A2A5" />
            <stop offset={0.93} stopColor="#A0A2A4" />
            <stop offset={0.934} stopColor="#A0A2A4" />
            <stop offset={0.938} stopColor="#9FA1A3" />
            <stop offset={0.941} stopColor="#9EA1A3" />
            <stop offset={0.945} stopColor="#9EA0A2" />
            <stop offset={0.949} stopColor="#9D9FA2" />
            <stop offset={0.953} stopColor="#9D9FA1" />
            <stop offset={0.961} stopColor="#9C9EA1" />
            <stop offset={0.965} stopColor="#9C9EA0" />
            <stop offset={0.969} stopColor="#9B9DA0" />
            <stop offset={0.973} stopColor="#9B9DA0" />
            <stop offset={0.977} stopColor="#9A9D9F" />
            <stop offset={0.981} stopColor="#999C9F" />
            <stop offset={0.984} stopColor="#999B9F" />
            <stop offset={0.992} stopColor="#989B9E" />
            <stop offset={1} stopColor="#989A9E" />
          </linearGradient>
        </defs>
        <g clipPath="url(#a)" transform="matrix(.0857 0 0 .08093 77.539 88.257)">
          <path
            d="m3126.46 641.61-5.23 519.84h36.75s68.25-304.56 414.81-210.04c346.57 94.52 430.6 525.102 315.07 1092.2-115.532 567.09-693.141 472.59-782.4 299.3l-21 446.309s26.25-21 52.5-21c26.27 0 708.892 84.031 950.43-467.32 0 0 215.282-582.848 63.008-1097.438-152.277-514.59-535.59-567.11-981.918-551.352l-42.02-10.5"
            style={{
              fill: color,
            }}
          />
        </g>
        <path
          fill="#F9FAFB"
          d="M377.921 149.855c2.9-.112 26.154 4.751 37.311 26.053 0 0 3.763-5.92-11.286-18.355-15.051-12.435-26.025-7.698-26.025-7.698"
        />
        <path
          d="M391.853 167.027s12.544 6.513 14.738 11.843c0 0-3.137-11.251-14.738-11.843"
          style={{
            fill: "#fff",
          }}
        />
        <path
          fill="#F9FAFB"
          d="M346.794 290.244s5.645 7.698 19.754 7.402c0 0-19.754-8.586-19.754-11.25v3.848"
        />
        <g clipPath="url(#c)" transform="matrix(.0857 0 0 .08093 77.539 88.257)">
          <g clipPath="url(#d)">
            <g clipPath="url(#e)">
              <path
                d="M254.54 10.488v3803.133h2900.85V10.488Zm0 0"
                style={{
                  fill: color,
                }}
              />
            </g>
          </g>
        </g>
        <path
          fill="#F9FAFB"
          d="M177.5 380.589s31.891 10.998 95.194 0c0 0-71.013 5.736-95.194 0"
        />
        <g clipPath="url(#f)" transform="matrix(.0857 0 0 .08093 76.238 96.058)">
          <g clipPath="url(#g)">
            <g clipPath="url(#h)">
              <path
                fill="url(#i)"
                d="M2696.398 652.59v2142.969h448.012V652.589Zm0 0"
                style={{
                  fillOpacity: 0.5,
                }}
              />
            </g>
          </g>
        </g>
        <path
          fill="#959497"
          d="M107.55 379.984s49.742 16.706 116.151 15.254c0 0 83.331-1.453 114.613-15.254l-1.283 2.663s-46.666 16.223-109.997 15.98c-63.332-.243-113.331-12.591-118.459-15.98l-1.025-2.663"
        />
        <g clipPath="url(#j)" transform="matrix(.0857 0 0 .08093 54.786 66.804)">
          <g clipPath="url(#k)">
            <g clipPath="url(#l)">
              <path
                fill="url(#m)"
                d="M2614.828 1360.18h161.992V261.02h-161.992Zm0 0"
                style={{
                  fillOpacity: 0.5,
                }}
              />
            </g>
          </g>
        </g>
        <path
          d="M345.271 104.174c0 8.791-55.273 15.918-123.455 15.918-68.182 0-123.454-7.127-123.454-15.918s55.272-15.917 123.454-15.917c68.182 0 123.455 7.126 123.455 15.917"
          style={{
            fill: color,
          }}
        />
        <g clipPath="url(#n)" transform="matrix(.0857 0 0 .08093 77.518 87.628)">
          <g clipPath="url(#o)">
            <g clipPath="url(#p)">
              <path
                fill="url(#q)"
                d="M370.242 75.898v254.543H3019.79V75.898Zm0 0"
                style={{
                  fillOpacity: 0.69,
                }}
              />
            </g>
          </g>
        </g>
      </svg>

      <div style={{ position: 'absolute', top: 6, left: 0, right: 40, bottom: 0 }} className="z-20 flex items-center justify-center">
        <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
          <CanvasComponent canvasType='front' height='200' width='180' />
        </div>
        <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
          <CanvasComponent canvasType='back' height='200' width='180' />
        </div>
      </div>

    </div>
  )
}
export default MugSvg
