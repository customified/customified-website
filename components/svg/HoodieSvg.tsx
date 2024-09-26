import * as React from "react"
import CanvasComponent from "../ui/Canvas"
import { useSvgStore } from "@/hooks/useSvgStore"
import { useCanvasStore } from "@/hooks/useCanvasStore"
import { RotateCcwSquare } from "lucide-react"


const HoodieSvg = () => {

  const { color } = useSvgStore()
  const { canvast, setCanvasType } = useCanvasStore()

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>


      <div className="flex flex-col relative" >
        <button className="cursor-pointer px-1 w-fit h-fit z-20" onClick={() => canvast === 'front' ? setCanvasType("back") : setCanvasType("front")}>
          <RotateCcwSquare className="cursor-pointer" />
        </button>
        {canvast}
      </div>


      <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
        {/* front svg */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={5000}
          height={3000}
          viewBox="-121.077 -130.389 3118.654 3204.897"
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
            <clipPath id="a" />
            <clipPath id="b">
              <path d="M3887.969 868.48s-13.867-9.37-76.29-48.718c-83.238 18.758-159.917 25.008-225.699 24.937-65.761-.847-142.37-8.18-225.378-28.11-62.883 38.47-76.864 47.65-76.864 47.65s114.871 51.683 301.832 50.652c186.93 3.648 302.399-46.41 302.399-46.41" />
            </clipPath>
            <clipPath id="c">
              <path d="M775 2829h8v8h-8Zm0 0" />
            </clipPath>
            <clipPath id="d">
              <path d="M775.957 2836.031a23.615 23.615 0 0 0 2.156-1.742c1.176-1.07 2.117-2.18 2.817-3.348a2.88 2.88 0 0 0 .379-1.851c.578.308 1.136.629 1.671.95-1.128 1.91-3.41 3.98-7.023 5.991" />
            </clipPath>
            <clipPath id="e">
              <path d="M1339 971h34v32h-34Zm0 0" />
            </clipPath>
            <clipPath id="f">
              <path d="M1339.398 987.11c0 8.73 7.332 15.8 16.372 15.8 9.039 0 16.37-7.07 16.37-15.8 0-8.72-7.331-15.801-16.37-15.801-9.04 0-16.372 7.082-16.372 15.8Zm0 0" />
            </clipPath>
            <clipPath id="g">
              <path d="M1339.398 987.11c0 8.73 7.332 15.8 16.372 15.8 9.039 0 16.37-7.07 16.37-15.8 0-8.72-7.331-15.801-16.37-15.801-9.04 0-16.372 7.082-16.372 15.8" />
            </clipPath>
            <clipPath id="i">
              <path d="M1345 976h22v22h-22Zm0 0" />
            </clipPath>
            <clipPath id="j">
              <path d="M1345.148 987.11c0 5.66 4.75 10.25 10.622 10.25 5.859 0 10.62-4.59 10.62-10.25s-4.761-10.25-10.62-10.25c-5.872 0-10.622 4.59-10.622 10.25Zm0 0" />
            </clipPath>
            <clipPath id="k">
              <path d="M1345.148 987.11c0 5.66 4.75 10.25 10.622 10.25 5.859 0 10.62-4.59 10.62-10.25s-4.761-10.25-10.62-10.25c-5.872 0-10.622 4.59-10.622 10.25" />
            </clipPath>
            <clipPath id="m">
              <path d="M1490 961h34v33h-34Zm0 0" />
            </clipPath>
            <clipPath id="n">
              <path d="M1523.48 977.691c0 8.72-7.332 15.797-16.37 15.797-9.04 0-16.372-7.078-16.372-15.797 0-8.73 7.332-15.8 16.371-15.8 9.04 0 16.371 7.07 16.371 15.8Zm0 0" />
            </clipPath>
            <clipPath id="o">
              <path d="M1523.48 977.691c0 8.72-7.332 15.797-16.37 15.797-9.04 0-16.372-7.078-16.372-15.797 0-8.73 7.332-15.8 16.371-15.8 9.04 0 16.371 7.07 16.371 15.8" />
            </clipPath>
            <clipPath id="q">
              <path d="M1496 967h22v21h-22Zm0 0" />
            </clipPath>
            <clipPath id="r">
              <path d="M1517.73 977.691c0 5.66-4.761 10.25-10.62 10.25-5.872 0-10.622-4.59-10.622-10.25s4.75-10.25 10.621-10.25c5.86 0 10.621 4.59 10.621 10.25Zm0 0" />
            </clipPath>
            <clipPath id="s">
              <path d="M1517.73 977.691c0 5.66-4.761 10.25-10.62 10.25-5.872 0-10.622-4.59-10.622-10.25s4.75-10.25 10.621-10.25c5.86 0 10.621 4.59 10.621 10.25" />
            </clipPath>
            <radialGradient
              id="h"
              cx={0}
              cy={0}
              r={33.409}
              gradientTransform="matrix(-1.0177 0 0 .9823 1355.77 987.11)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#FFF" />
              <stop offset={0.004} stopColor="#FEFEFE" />
              <stop offset={0.008} stopColor="#FDFDFD" />
              <stop offset={0.012} stopColor="#FCFCFC" />
              <stop offset={0.016} stopColor="#FBFBFB" />
              <stop offset={0.019} stopColor="#FAFAFA" />
              <stop offset={0.023} stopColor="#F9F9F9" />
              <stop offset={0.027} stopColor="#F8F8F8" />
              <stop offset={0.031} stopColor="#F7F7F7" />
              <stop offset={0.035} stopColor="#F6F6F6" />
              <stop offset={0.039} stopColor="#F5F5F5" />
              <stop offset={0.043} stopColor="#F4F4F4" />
              <stop offset={0.047} stopColor="#F3F3F3" />
              <stop offset={0.051} stopColor="#F2F2F2" />
              <stop offset={0.055} stopColor="#F1F1F1" />
              <stop offset={0.059} stopColor="#F0F0F0" />
              <stop offset={0.063} stopColor="#EFEFEF" />
              <stop offset={0.066} stopColor="#EEE" />
              <stop offset={0.07} stopColor="#EDEDED" />
              <stop offset={0.074} stopColor="#ECECEC" />
              <stop offset={0.078} stopColor="#EBEBEB" />
              <stop offset={0.082} stopColor="#EAEAEA" />
              <stop offset={0.086} stopColor="#E9E9E9" />
              <stop offset={0.09} stopColor="#E8E8E8" />
              <stop offset={0.094} stopColor="#E7E7E7" />
              <stop offset={0.098} stopColor="#E6E6E6" />
              <stop offset={0.102} stopColor="#E5E5E5" />
              <stop offset={0.105} stopColor="#E4E4E4" />
              <stop offset={0.109} stopColor="#E3E3E3" />
              <stop offset={0.113} stopColor="#E2E2E2" />
              <stop offset={0.117} stopColor="#E1E1E1" />
              <stop offset={0.121} stopColor="#E0E0E0" />
              <stop offset={0.125} stopColor="#DFDFDF" />
              <stop offset={0.129} stopColor="#DEDEDE" />
              <stop offset={0.133} stopColor="#DDD" />
              <stop offset={0.137} stopColor="#DCDCDC" />
              <stop offset={0.141} stopColor="#DBDBDB" />
              <stop offset={0.144} stopColor="#DADADA" />
              <stop offset={0.148} stopColor="#D9D9D9" />
              <stop offset={0.152} stopColor="#D8D8D8" />
              <stop offset={0.156} stopColor="#D7D7D7" />
              <stop offset={0.16} stopColor="#D6D6D6" />
              <stop offset={0.164} stopColor="#D5D5D5" />
              <stop offset={0.168} stopColor="#D4D4D4" />
              <stop offset={0.172} stopColor="#D3D3D3" />
              <stop offset={0.176} stopColor="#D2D2D2" />
              <stop offset={0.18} stopColor="#D1D1D1" />
              <stop offset={0.184} stopColor="#D0D0D0" />
              <stop offset={0.188} stopColor="#CFCFCF" />
              <stop offset={0.191} stopColor="#CECECE" />
              <stop offset={0.195} stopColor="#CDCDCD" />
              <stop offset={0.199} stopColor="#CCC" />
              <stop offset={0.203} stopColor="#CBCBCB" />
              <stop offset={0.207} stopColor="#CACACA" />
              <stop offset={0.211} stopColor="#C9C9C9" />
              <stop offset={0.215} stopColor="#C8C8C8" />
              <stop offset={0.219} stopColor="#C7C7C7" />
              <stop offset={0.223} stopColor="#C6C6C6" />
              <stop offset={0.227} stopColor="#C5C5C5" />
              <stop offset={0.231} stopColor="#C4C4C4" />
              <stop offset={0.234} stopColor="#C3C3C3" />
              <stop offset={0.238} stopColor="#C2C2C2" />
              <stop offset={0.242} stopColor="#C1C1C1" />
              <stop offset={0.246} stopColor="silver" />
              <stop offset={0.25} stopColor="#BFBFBF" />
              <stop offset={0.254} stopColor="#BEBEBE" />
              <stop offset={0.258} stopColor="#BDBDBD" />
              <stop offset={0.262} stopColor="#BCBCBC" />
              <stop offset={0.266} stopColor="#BBB" />
              <stop offset={0.27} stopColor="#BABABA" />
              <stop offset={0.273} stopColor="#B9B9B9" />
              <stop offset={0.277} stopColor="#B8B8B8" />
              <stop offset={0.281} stopColor="#B7B7B7" />
              <stop offset={0.285} stopColor="#B6B6B6" />
              <stop offset={0.289} stopColor="#B5B5B5" />
              <stop offset={0.293} stopColor="#B4B4B4" />
              <stop offset={0.297} stopColor="#B3B3B3" />
              <stop offset={0.301} stopColor="#B2B2B2" />
              <stop offset={0.305} stopColor="#B1B1B1" />
              <stop offset={0.309} stopColor="#B0B0B0" />
              <stop offset={0.313} stopColor="#AFAFAF" />
              <stop offset={0.316} stopColor="#AEAEAE" />
              <stop offset={0.32} stopColor="#ADADAD" />
              <stop offset={0.324} stopColor="#ACACAC" />
              <stop offset={0.328} stopColor="#ABABAB" />
              <stop offset={0.332} stopColor="#AAA" />
              <stop offset={0.336} stopColor="#A9A9A9" />
              <stop offset={0.34} stopColor="#A8A8A8" />
              <stop offset={0.344} stopColor="#A7A7A7" />
              <stop offset={0.348} stopColor="#A6A6A6" />
              <stop offset={0.352} stopColor="#A5A5A5" />
              <stop offset={0.355} stopColor="#A4A4A4" />
              <stop offset={0.359} stopColor="#A3A3A3" />
              <stop offset={0.363} stopColor="#A2A2A2" />
              <stop offset={0.367} stopColor="#A1A1A1" />
              <stop offset={0.371} stopColor="#A0A0A0" />
              <stop offset={0.375} stopColor="#9F9F9F" />
              <stop offset={0.379} stopColor="#9E9E9E" />
              <stop offset={0.383} stopColor="#9D9D9D" />
              <stop offset={0.387} stopColor="#9C9C9C" />
              <stop offset={0.391} stopColor="#9B9B9B" />
              <stop offset={0.395} stopColor="#9A9A9A" />
              <stop offset={0.398} stopColor="#999" />
              <stop offset={0.402} stopColor="#989898" />
              <stop offset={0.406} stopColor="#979797" />
              <stop offset={0.41} stopColor="#969696" />
              <stop offset={0.414} stopColor="#959595" />
              <stop offset={0.418} stopColor="#949494" />
              <stop offset={0.422} stopColor="#939393" />
              <stop offset={0.426} stopColor="#929292" />
              <stop offset={0.43} stopColor="#919191" />
              <stop offset={0.434} stopColor="#909090" />
              <stop offset={0.438} stopColor="#8F8F8F" />
              <stop offset={0.441} stopColor="#8E8E8E" />
              <stop offset={0.445} stopColor="#8D8D8D" />
              <stop offset={0.449} stopColor="#8C8C8C" />
              <stop offset={0.453} stopColor="#8B8B8B" />
              <stop offset={0.457} stopColor="#8A8A8A" />
              <stop offset={0.461} stopColor="#898989" />
              <stop offset={0.465} stopColor="#888" />
              <stop offset={0.469} stopColor="#878787" />
              <stop offset={0.473} stopColor="#868686" />
              <stop offset={0.477} stopColor="#858585" />
              <stop offset={0.48} stopColor="#848484" />
              <stop offset={0.484} stopColor="#838383" />
              <stop offset={0.488} stopColor="#828282" />
              <stop offset={0.492} stopColor="#818181" />
              <stop offset={0.496} stopColor="gray" />
              <stop offset={0.5} stopColor="#7F7F7F" />
              <stop offset={0.504} stopColor="#7E7E7E" />
              <stop offset={0.508} stopColor="#7D7D7D" />
              <stop offset={0.512} stopColor="#7C7C7C" />
              <stop offset={0.516} stopColor="#7B7B7B" />
              <stop offset={0.519} stopColor="#7A7A7A" />
              <stop offset={0.523} stopColor="#797979" />
              <stop offset={0.527} stopColor="#787878" />
              <stop offset={0.531} stopColor="#777" />
              <stop offset={0.535} stopColor="#767676" />
              <stop offset={0.539} stopColor="#757575" />
              <stop offset={0.543} stopColor="#747474" />
              <stop offset={0.547} stopColor="#737373" />
              <stop offset={0.551} stopColor="#727272" />
              <stop offset={0.555} stopColor="#717171" />
              <stop offset={0.559} stopColor="#707070" />
              <stop offset={0.563} stopColor="#6F6F6F" />
              <stop offset={0.566} stopColor="#6E6E6E" />
              <stop offset={0.57} stopColor="#6D6D6D" />
              <stop offset={0.574} stopColor="#6C6C6C" />
              <stop offset={0.578} stopColor="#6B6B6B" />
              <stop offset={0.582} stopColor="#6A6A6A" />
              <stop offset={0.586} stopColor="#696969" />
              <stop offset={0.59} stopColor="#686868" />
              <stop offset={0.594} stopColor="#676767" />
              <stop offset={0.598} stopColor="#666" />
              <stop offset={0.602} stopColor="#656565" />
              <stop offset={0.606} stopColor="#646464" />
              <stop offset={0.609} stopColor="#636363" />
              <stop offset={0.613} stopColor="#626262" />
              <stop offset={0.617} stopColor="#616161" />
              <stop offset={0.621} stopColor="#606060" />
              <stop offset={0.625} stopColor="#5F5F5F" />
              <stop offset={0.629} stopColor="#5E5E5E" />
              <stop offset={0.633} stopColor="#5D5D5D" />
              <stop offset={0.637} stopColor="#5C5C5C" />
              <stop offset={0.641} stopColor="#5B5B5B" />
              <stop offset={0.644} stopColor="#5A5A5A" />
              <stop offset={0.648} stopColor="#595959" />
              <stop offset={0.652} stopColor="#585858" />
              <stop offset={0.656} stopColor="#575757" />
              <stop offset={0.66} stopColor="#565656" />
              <stop offset={0.664} stopColor="#555" />
              <stop offset={0.668} stopColor="#545454" />
              <stop offset={0.672} stopColor="#535353" />
              <stop offset={0.676} stopColor="#525252" />
              <stop offset={0.68} stopColor="#515151" />
              <stop offset={0.684} stopColor="#505050" />
              <stop offset={0.688} stopColor="#4F4F4F" />
              <stop offset={0.691} stopColor="#4E4E4E" />
              <stop offset={0.695} stopColor="#4D4D4D" />
              <stop offset={0.699} stopColor="#4C4C4C" />
              <stop offset={0.703} stopColor="#4B4B4B" />
              <stop offset={0.707} stopColor="#4A4A4A" />
              <stop offset={0.711} stopColor="#494949" />
              <stop offset={0.715} stopColor="#484848" />
              <stop offset={0.719} stopColor="#474747" />
              <stop offset={0.723} stopColor="#464646" />
              <stop offset={0.727} stopColor="#454545" />
              <stop offset={0.731} stopColor="#444" />
              <stop offset={0.734} stopColor="#434343" />
              <stop offset={0.738} stopColor="#424242" />
              <stop offset={0.742} stopColor="#414141" />
              <stop offset={0.746} stopColor="#404040" />
              <stop offset={0.75} stopColor="#3F3F3F" />
              <stop offset={0.754} stopColor="#3E3E3E" />
              <stop offset={0.758} stopColor="#3D3D3D" />
              <stop offset={0.762} stopColor="#3C3C3C" />
              <stop offset={0.766} stopColor="#3B3B3B" />
              <stop offset={0.769} stopColor="#3A3A3A" />
              <stop offset={0.773} stopColor="#393939" />
              <stop offset={0.777} stopColor="#383838" />
              <stop offset={0.781} stopColor="#373737" />
              <stop offset={0.785} stopColor="#363636" />
              <stop offset={0.789} stopColor="#353535" />
              <stop offset={0.793} stopColor="#343434" />
              <stop offset={0.797} stopColor="#333" />
              <stop offset={0.801} stopColor="#323232" />
              <stop offset={0.805} stopColor="#313131" />
              <stop offset={0.809} stopColor="#303030" />
              <stop offset={0.813} stopColor="#2F2F2F" />
              <stop offset={0.816} stopColor="#2E2E2E" />
              <stop offset={0.82} stopColor="#2D2D2D" />
              <stop offset={0.824} stopColor="#2C2C2C" />
              <stop offset={0.828} stopColor="#2B2B2B" />
              <stop offset={0.832} stopColor="#2A2A2A" />
              <stop offset={0.836} stopColor="#292929" />
              <stop offset={0.84} stopColor="#282828" />
              <stop offset={0.844} stopColor="#272727" />
              <stop offset={0.848} stopColor="#262626" />
              <stop offset={0.852} stopColor="#252525" />
              <stop offset={0.856} stopColor="#242424" />
              <stop offset={0.859} stopColor="#232323" />
              <stop offset={0.863} stopColor="#222" />
              <stop offset={0.867} stopColor="#212121" />
              <stop offset={0.871} stopColor="#202020" />
              <stop offset={0.875} stopColor="#1F1F1F" />
              <stop offset={0.879} stopColor="#1E1E1E" />
              <stop offset={0.883} stopColor="#1D1D1D" />
              <stop offset={0.887} stopColor="#1C1C1C" />
              <stop offset={0.891} stopColor="#1B1B1B" />
              <stop offset={0.894} stopColor="#1A1A1A" />
              <stop offset={0.898} stopColor="#191919" />
              <stop offset={0.902} stopColor="#181818" />
              <stop offset={0.906} stopColor="#171717" />
              <stop offset={0.91} stopColor="#161616" />
              <stop offset={0.914} stopColor="#151515" />
              <stop offset={0.918} stopColor="#141414" />
              <stop offset={0.922} stopColor="#131313" />
              <stop offset={0.926} stopColor="#121212" />
              <stop offset={0.93} stopColor="#111" />
              <stop offset={0.934} stopColor="#101010" />
              <stop offset={0.938} stopColor="#0F0F0F" />
              <stop offset={0.941} stopColor="#0E0E0E" />
              <stop offset={0.945} stopColor="#0D0D0D" />
              <stop offset={0.949} stopColor="#0C0C0C" />
              <stop offset={0.953} stopColor="#0B0B0B" />
              <stop offset={0.957} stopColor="#0A0A0A" />
              <stop offset={0.961} stopColor="#090909" />
              <stop offset={0.965} stopColor="#080808" />
              <stop offset={0.969} stopColor="#070707" />
              <stop offset={0.973} stopColor="#060606" />
              <stop offset={0.977} stopColor="#050505" />
              <stop offset={0.981} stopColor="#040404" />
              <stop offset={0.984} stopColor="#030303" />
              <stop offset={0.988} stopColor="#020202" />
              <stop offset={0.992} stopColor="#010101" />
              <stop offset={0.996} />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="l"
              cx={0}
              cy={0}
              r={27.611}
              gradientTransform="matrix(-1.0177 0 0 .9823 1355.77 987.11)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#FFF" />
              <stop offset={0.004} stopColor="#FEFEFE" />
              <stop offset={0.008} stopColor="#FDFDFD" />
              <stop offset={0.012} stopColor="#FCFCFC" />
              <stop offset={0.016} stopColor="#FBFBFB" />
              <stop offset={0.019} stopColor="#FAFAFA" />
              <stop offset={0.023} stopColor="#F9F9F9" />
              <stop offset={0.027} stopColor="#F8F8F8" />
              <stop offset={0.031} stopColor="#F7F7F7" />
              <stop offset={0.035} stopColor="#F6F6F6" />
              <stop offset={0.039} stopColor="#F5F5F5" />
              <stop offset={0.043} stopColor="#F4F4F4" />
              <stop offset={0.047} stopColor="#F3F3F3" />
              <stop offset={0.051} stopColor="#F2F2F2" />
              <stop offset={0.055} stopColor="#F1F1F1" />
              <stop offset={0.059} stopColor="#F0F0F0" />
              <stop offset={0.063} stopColor="#EFEFEF" />
              <stop offset={0.066} stopColor="#EEE" />
              <stop offset={0.07} stopColor="#EDEDED" />
              <stop offset={0.074} stopColor="#ECECEC" />
              <stop offset={0.078} stopColor="#EBEBEB" />
              <stop offset={0.082} stopColor="#EAEAEA" />
              <stop offset={0.086} stopColor="#E9E9E9" />
              <stop offset={0.09} stopColor="#E8E8E8" />
              <stop offset={0.094} stopColor="#E7E7E7" />
              <stop offset={0.098} stopColor="#E6E6E6" />
              <stop offset={0.102} stopColor="#E5E5E5" />
              <stop offset={0.105} stopColor="#E4E4E4" />
              <stop offset={0.109} stopColor="#E3E3E3" />
              <stop offset={0.113} stopColor="#E2E2E2" />
              <stop offset={0.117} stopColor="#E1E1E1" />
              <stop offset={0.121} stopColor="#E0E0E0" />
              <stop offset={0.125} stopColor="#DFDFDF" />
              <stop offset={0.129} stopColor="#DEDEDE" />
              <stop offset={0.133} stopColor="#DDD" />
              <stop offset={0.137} stopColor="#DCDCDC" />
              <stop offset={0.141} stopColor="#DBDBDB" />
              <stop offset={0.144} stopColor="#DADADA" />
              <stop offset={0.148} stopColor="#D9D9D9" />
              <stop offset={0.152} stopColor="#D8D8D8" />
              <stop offset={0.156} stopColor="#D7D7D7" />
              <stop offset={0.16} stopColor="#D6D6D6" />
              <stop offset={0.164} stopColor="#D5D5D5" />
              <stop offset={0.168} stopColor="#D4D4D4" />
              <stop offset={0.172} stopColor="#D3D3D3" />
              <stop offset={0.176} stopColor="#D2D2D2" />
              <stop offset={0.18} stopColor="#D1D1D1" />
              <stop offset={0.184} stopColor="#D0D0D0" />
              <stop offset={0.188} stopColor="#CFCFCF" />
              <stop offset={0.191} stopColor="#CECECE" />
              <stop offset={0.195} stopColor="#CDCDCD" />
              <stop offset={0.199} stopColor="#CCC" />
              <stop offset={0.203} stopColor="#CBCBCB" />
              <stop offset={0.207} stopColor="#CACACA" />
              <stop offset={0.211} stopColor="#C9C9C9" />
              <stop offset={0.215} stopColor="#C8C8C8" />
              <stop offset={0.219} stopColor="#C7C7C7" />
              <stop offset={0.223} stopColor="#C6C6C6" />
              <stop offset={0.227} stopColor="#C5C5C5" />
              <stop offset={0.231} stopColor="#C4C4C4" />
              <stop offset={0.234} stopColor="#C3C3C3" />
              <stop offset={0.238} stopColor="#C2C2C2" />
              <stop offset={0.242} stopColor="#C1C1C1" />
              <stop offset={0.246} stopColor="silver" />
              <stop offset={0.25} stopColor="#BFBFBF" />
              <stop offset={0.254} stopColor="#BEBEBE" />
              <stop offset={0.258} stopColor="#BDBDBD" />
              <stop offset={0.262} stopColor="#BCBCBC" />
              <stop offset={0.266} stopColor="#BBB" />
              <stop offset={0.27} stopColor="#BABABA" />
              <stop offset={0.273} stopColor="#B9B9B9" />
              <stop offset={0.277} stopColor="#B8B8B8" />
              <stop offset={0.281} stopColor="#B7B7B7" />
              <stop offset={0.285} stopColor="#B6B6B6" />
              <stop offset={0.289} stopColor="#B5B5B5" />
              <stop offset={0.293} stopColor="#B4B4B4" />
              <stop offset={0.297} stopColor="#B3B3B3" />
              <stop offset={0.301} stopColor="#B2B2B2" />
              <stop offset={0.305} stopColor="#B1B1B1" />
              <stop offset={0.309} stopColor="#B0B0B0" />
              <stop offset={0.313} stopColor="#AFAFAF" />
              <stop offset={0.316} stopColor="#AEAEAE" />
              <stop offset={0.32} stopColor="#ADADAD" />
              <stop offset={0.324} stopColor="#ACACAC" />
              <stop offset={0.328} stopColor="#ABABAB" />
              <stop offset={0.332} stopColor="#AAA" />
              <stop offset={0.336} stopColor="#A9A9A9" />
              <stop offset={0.34} stopColor="#A8A8A8" />
              <stop offset={0.344} stopColor="#A7A7A7" />
              <stop offset={0.348} stopColor="#A6A6A6" />
              <stop offset={0.352} stopColor="#A5A5A5" />
              <stop offset={0.355} stopColor="#A4A4A4" />
              <stop offset={0.359} stopColor="#A3A3A3" />
              <stop offset={0.363} stopColor="#A2A2A2" />
              <stop offset={0.367} stopColor="#A1A1A1" />
              <stop offset={0.371} stopColor="#A0A0A0" />
              <stop offset={0.375} stopColor="#9F9F9F" />
              <stop offset={0.379} stopColor="#9E9E9E" />
              <stop offset={0.383} stopColor="#9D9D9D" />
              <stop offset={0.387} stopColor="#9C9C9C" />
              <stop offset={0.391} stopColor="#9B9B9B" />
              <stop offset={0.395} stopColor="#9A9A9A" />
              <stop offset={0.398} stopColor="#999" />
              <stop offset={0.402} stopColor="#989898" />
              <stop offset={0.406} stopColor="#979797" />
              <stop offset={0.41} stopColor="#969696" />
              <stop offset={0.414} stopColor="#959595" />
              <stop offset={0.418} stopColor="#949494" />
              <stop offset={0.422} stopColor="#939393" />
              <stop offset={0.426} stopColor="#929292" />
              <stop offset={0.43} stopColor="#919191" />
              <stop offset={0.434} stopColor="#909090" />
              <stop offset={0.438} stopColor="#8F8F8F" />
              <stop offset={0.441} stopColor="#8E8E8E" />
              <stop offset={0.445} stopColor="#8D8D8D" />
              <stop offset={0.449} stopColor="#8C8C8C" />
              <stop offset={0.453} stopColor="#8B8B8B" />
              <stop offset={0.457} stopColor="#8A8A8A" />
              <stop offset={0.461} stopColor="#898989" />
              <stop offset={0.465} stopColor="#888" />
              <stop offset={0.469} stopColor="#878787" />
              <stop offset={0.473} stopColor="#868686" />
              <stop offset={0.477} stopColor="#858585" />
              <stop offset={0.48} stopColor="#848484" />
              <stop offset={0.484} stopColor="#838383" />
              <stop offset={0.488} stopColor="#828282" />
              <stop offset={0.492} stopColor="#818181" />
              <stop offset={0.496} stopColor="gray" />
              <stop offset={0.5} stopColor="#7F7F7F" />
              <stop offset={0.504} stopColor="#7E7E7E" />
              <stop offset={0.508} stopColor="#7D7D7D" />
              <stop offset={0.512} stopColor="#7C7C7C" />
              <stop offset={0.516} stopColor="#7B7B7B" />
              <stop offset={0.519} stopColor="#7A7A7A" />
              <stop offset={0.523} stopColor="#797979" />
              <stop offset={0.527} stopColor="#787878" />
              <stop offset={0.531} stopColor="#777" />
              <stop offset={0.535} stopColor="#767676" />
              <stop offset={0.539} stopColor="#757575" />
              <stop offset={0.543} stopColor="#747474" />
              <stop offset={0.547} stopColor="#737373" />
              <stop offset={0.551} stopColor="#727272" />
              <stop offset={0.555} stopColor="#717171" />
              <stop offset={0.559} stopColor="#707070" />
              <stop offset={0.563} stopColor="#6F6F6F" />
              <stop offset={0.566} stopColor="#6E6E6E" />
              <stop offset={0.57} stopColor="#6D6D6D" />
              <stop offset={0.574} stopColor="#6C6C6C" />
              <stop offset={0.578} stopColor="#6B6B6B" />
              <stop offset={0.582} stopColor="#6A6A6A" />
              <stop offset={0.586} stopColor="#696969" />
              <stop offset={0.59} stopColor="#686868" />
              <stop offset={0.594} stopColor="#676767" />
              <stop offset={0.598} stopColor="#666" />
              <stop offset={0.602} stopColor="#656565" />
              <stop offset={0.606} stopColor="#646464" />
              <stop offset={0.609} stopColor="#636363" />
              <stop offset={0.613} stopColor="#626262" />
              <stop offset={0.617} stopColor="#616161" />
              <stop offset={0.621} stopColor="#606060" />
              <stop offset={0.625} stopColor="#5F5F5F" />
              <stop offset={0.629} stopColor="#5E5E5E" />
              <stop offset={0.633} stopColor="#5D5D5D" />
              <stop offset={0.637} stopColor="#5C5C5C" />
              <stop offset={0.641} stopColor="#5B5B5B" />
              <stop offset={0.644} stopColor="#5A5A5A" />
              <stop offset={0.648} stopColor="#595959" />
              <stop offset={0.652} stopColor="#585858" />
              <stop offset={0.656} stopColor="#575757" />
              <stop offset={0.66} stopColor="#565656" />
              <stop offset={0.664} stopColor="#555" />
              <stop offset={0.668} stopColor="#545454" />
              <stop offset={0.672} stopColor="#535353" />
              <stop offset={0.676} stopColor="#525252" />
              <stop offset={0.68} stopColor="#515151" />
              <stop offset={0.684} stopColor="#505050" />
              <stop offset={0.688} stopColor="#4F4F4F" />
              <stop offset={0.691} stopColor="#4E4E4E" />
              <stop offset={0.695} stopColor="#4D4D4D" />
              <stop offset={0.699} stopColor="#4C4C4C" />
              <stop offset={0.703} stopColor="#4B4B4B" />
              <stop offset={0.707} stopColor="#4A4A4A" />
              <stop offset={0.711} stopColor="#494949" />
              <stop offset={0.715} stopColor="#484848" />
              <stop offset={0.719} stopColor="#474747" />
              <stop offset={0.723} stopColor="#464646" />
              <stop offset={0.727} stopColor="#454545" />
              <stop offset={0.731} stopColor="#444" />
              <stop offset={0.734} stopColor="#434343" />
              <stop offset={0.738} stopColor="#424242" />
              <stop offset={0.742} stopColor="#414141" />
              <stop offset={0.746} stopColor="#404040" />
              <stop offset={0.75} stopColor="#3F3F3F" />
              <stop offset={0.754} stopColor="#3E3E3E" />
              <stop offset={0.758} stopColor="#3D3D3D" />
              <stop offset={0.762} stopColor="#3C3C3C" />
              <stop offset={0.766} stopColor="#3B3B3B" />
              <stop offset={0.769} stopColor="#3A3A3A" />
              <stop offset={0.773} stopColor="#393939" />
              <stop offset={0.777} stopColor="#383838" />
              <stop offset={0.781} stopColor="#373737" />
              <stop offset={0.785} stopColor="#363636" />
              <stop offset={0.789} stopColor="#353535" />
              <stop offset={0.793} stopColor="#343434" />
              <stop offset={0.797} stopColor="#333" />
              <stop offset={0.801} stopColor="#323232" />
              <stop offset={0.805} stopColor="#313131" />
              <stop offset={0.809} stopColor="#303030" />
              <stop offset={0.813} stopColor="#2F2F2F" />
              <stop offset={0.816} stopColor="#2E2E2E" />
              <stop offset={0.82} stopColor="#2D2D2D" />
              <stop offset={0.824} stopColor="#2C2C2C" />
              <stop offset={0.828} stopColor="#2B2B2B" />
              <stop offset={0.832} stopColor="#2A2A2A" />
              <stop offset={0.836} stopColor="#292929" />
              <stop offset={0.84} stopColor="#282828" />
              <stop offset={0.844} stopColor="#272727" />
              <stop offset={0.848} stopColor="#262626" />
              <stop offset={0.852} stopColor="#252525" />
              <stop offset={0.856} stopColor="#242424" />
              <stop offset={0.859} stopColor="#232323" />
              <stop offset={0.863} stopColor="#222" />
              <stop offset={0.867} stopColor="#212121" />
              <stop offset={0.871} stopColor="#202020" />
              <stop offset={0.875} stopColor="#1F1F1F" />
              <stop offset={0.879} stopColor="#1E1E1E" />
              <stop offset={0.883} stopColor="#1D1D1D" />
              <stop offset={0.887} stopColor="#1C1C1C" />
              <stop offset={0.891} stopColor="#1B1B1B" />
              <stop offset={0.894} stopColor="#1A1A1A" />
              <stop offset={0.898} stopColor="#191919" />
              <stop offset={0.902} stopColor="#181818" />
              <stop offset={0.906} stopColor="#171717" />
              <stop offset={0.91} stopColor="#161616" />
              <stop offset={0.914} stopColor="#151515" />
              <stop offset={0.918} stopColor="#141414" />
              <stop offset={0.922} stopColor="#131313" />
              <stop offset={0.926} stopColor="#121212" />
              <stop offset={0.93} stopColor="#111" />
              <stop offset={0.934} stopColor="#101010" />
              <stop offset={0.938} stopColor="#0F0F0F" />
              <stop offset={0.941} stopColor="#0E0E0E" />
              <stop offset={0.945} stopColor="#0D0D0D" />
              <stop offset={0.949} stopColor="#0C0C0C" />
              <stop offset={0.953} stopColor="#0B0B0B" />
              <stop offset={0.957} stopColor="#0A0A0A" />
              <stop offset={0.961} stopColor="#090909" />
              <stop offset={0.965} stopColor="#080808" />
              <stop offset={0.969} stopColor="#070707" />
              <stop offset={0.973} stopColor="#060606" />
              <stop offset={0.977} stopColor="#050505" />
              <stop offset={0.981} stopColor="#040404" />
              <stop offset={0.984} stopColor="#030303" />
              <stop offset={0.988} stopColor="#020202" />
              <stop offset={0.992} stopColor="#010101" />
              <stop offset={0.996} />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="p"
              cx={0}
              cy={0}
              r={33.409}
              gradientTransform="matrix(1.0177 0 0 .9823 1507.11 977.69)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#FFF" />
              <stop offset={0.004} stopColor="#FEFEFE" />
              <stop offset={0.008} stopColor="#FDFDFD" />
              <stop offset={0.012} stopColor="#FCFCFC" />
              <stop offset={0.016} stopColor="#FBFBFB" />
              <stop offset={0.019} stopColor="#FAFAFA" />
              <stop offset={0.023} stopColor="#F9F9F9" />
              <stop offset={0.027} stopColor="#F8F8F8" />
              <stop offset={0.031} stopColor="#F7F7F7" />
              <stop offset={0.035} stopColor="#F6F6F6" />
              <stop offset={0.039} stopColor="#F5F5F5" />
              <stop offset={0.043} stopColor="#F4F4F4" />
              <stop offset={0.047} stopColor="#F3F3F3" />
              <stop offset={0.051} stopColor="#F2F2F2" />
              <stop offset={0.055} stopColor="#F1F1F1" />
              <stop offset={0.059} stopColor="#F0F0F0" />
              <stop offset={0.063} stopColor="#EFEFEF" />
              <stop offset={0.066} stopColor="#EEE" />
              <stop offset={0.07} stopColor="#EDEDED" />
              <stop offset={0.074} stopColor="#ECECEC" />
              <stop offset={0.078} stopColor="#EBEBEB" />
              <stop offset={0.082} stopColor="#EAEAEA" />
              <stop offset={0.086} stopColor="#E9E9E9" />
              <stop offset={0.09} stopColor="#E8E8E8" />
              <stop offset={0.094} stopColor="#E7E7E7" />
              <stop offset={0.098} stopColor="#E6E6E6" />
              <stop offset={0.102} stopColor="#E5E5E5" />
              <stop offset={0.105} stopColor="#E4E4E4" />
              <stop offset={0.109} stopColor="#E3E3E3" />
              <stop offset={0.113} stopColor="#E2E2E2" />
              <stop offset={0.117} stopColor="#E1E1E1" />
              <stop offset={0.121} stopColor="#E0E0E0" />
              <stop offset={0.125} stopColor="#DFDFDF" />
              <stop offset={0.129} stopColor="#DEDEDE" />
              <stop offset={0.133} stopColor="#DDD" />
              <stop offset={0.137} stopColor="#DCDCDC" />
              <stop offset={0.141} stopColor="#DBDBDB" />
              <stop offset={0.144} stopColor="#DADADA" />
              <stop offset={0.148} stopColor="#D9D9D9" />
              <stop offset={0.152} stopColor="#D8D8D8" />
              <stop offset={0.156} stopColor="#D7D7D7" />
              <stop offset={0.16} stopColor="#D6D6D6" />
              <stop offset={0.164} stopColor="#D5D5D5" />
              <stop offset={0.168} stopColor="#D4D4D4" />
              <stop offset={0.172} stopColor="#D3D3D3" />
              <stop offset={0.176} stopColor="#D2D2D2" />
              <stop offset={0.18} stopColor="#D1D1D1" />
              <stop offset={0.184} stopColor="#D0D0D0" />
              <stop offset={0.188} stopColor="#CFCFCF" />
              <stop offset={0.191} stopColor="#CECECE" />
              <stop offset={0.195} stopColor="#CDCDCD" />
              <stop offset={0.199} stopColor="#CCC" />
              <stop offset={0.203} stopColor="#CBCBCB" />
              <stop offset={0.207} stopColor="#CACACA" />
              <stop offset={0.211} stopColor="#C9C9C9" />
              <stop offset={0.215} stopColor="#C8C8C8" />
              <stop offset={0.219} stopColor="#C7C7C7" />
              <stop offset={0.223} stopColor="#C6C6C6" />
              <stop offset={0.227} stopColor="#C5C5C5" />
              <stop offset={0.231} stopColor="#C4C4C4" />
              <stop offset={0.234} stopColor="#C3C3C3" />
              <stop offset={0.238} stopColor="#C2C2C2" />
              <stop offset={0.242} stopColor="#C1C1C1" />
              <stop offset={0.246} stopColor="silver" />
              <stop offset={0.25} stopColor="#BFBFBF" />
              <stop offset={0.254} stopColor="#BEBEBE" />
              <stop offset={0.258} stopColor="#BDBDBD" />
              <stop offset={0.262} stopColor="#BCBCBC" />
              <stop offset={0.266} stopColor="#BBB" />
              <stop offset={0.27} stopColor="#BABABA" />
              <stop offset={0.273} stopColor="#B9B9B9" />
              <stop offset={0.277} stopColor="#B8B8B8" />
              <stop offset={0.281} stopColor="#B7B7B7" />
              <stop offset={0.285} stopColor="#B6B6B6" />
              <stop offset={0.289} stopColor="#B5B5B5" />
              <stop offset={0.293} stopColor="#B4B4B4" />
              <stop offset={0.297} stopColor="#B3B3B3" />
              <stop offset={0.301} stopColor="#B2B2B2" />
              <stop offset={0.305} stopColor="#B1B1B1" />
              <stop offset={0.309} stopColor="#B0B0B0" />
              <stop offset={0.313} stopColor="#AFAFAF" />
              <stop offset={0.316} stopColor="#AEAEAE" />
              <stop offset={0.32} stopColor="#ADADAD" />
              <stop offset={0.324} stopColor="#ACACAC" />
              <stop offset={0.328} stopColor="#ABABAB" />
              <stop offset={0.332} stopColor="#AAA" />
              <stop offset={0.336} stopColor="#A9A9A9" />
              <stop offset={0.34} stopColor="#A8A8A8" />
              <stop offset={0.344} stopColor="#A7A7A7" />
              <stop offset={0.348} stopColor="#A6A6A6" />
              <stop offset={0.352} stopColor="#A5A5A5" />
              <stop offset={0.355} stopColor="#A4A4A4" />
              <stop offset={0.359} stopColor="#A3A3A3" />
              <stop offset={0.363} stopColor="#A2A2A2" />
              <stop offset={0.367} stopColor="#A1A1A1" />
              <stop offset={0.371} stopColor="#A0A0A0" />
              <stop offset={0.375} stopColor="#9F9F9F" />
              <stop offset={0.379} stopColor="#9E9E9E" />
              <stop offset={0.383} stopColor="#9D9D9D" />
              <stop offset={0.387} stopColor="#9C9C9C" />
              <stop offset={0.391} stopColor="#9B9B9B" />
              <stop offset={0.395} stopColor="#9A9A9A" />
              <stop offset={0.398} stopColor="#999" />
              <stop offset={0.402} stopColor="#989898" />
              <stop offset={0.406} stopColor="#979797" />
              <stop offset={0.41} stopColor="#969696" />
              <stop offset={0.414} stopColor="#959595" />
              <stop offset={0.418} stopColor="#949494" />
              <stop offset={0.422} stopColor="#939393" />
              <stop offset={0.426} stopColor="#929292" />
              <stop offset={0.43} stopColor="#919191" />
              <stop offset={0.434} stopColor="#909090" />
              <stop offset={0.438} stopColor="#8F8F8F" />
              <stop offset={0.441} stopColor="#8E8E8E" />
              <stop offset={0.445} stopColor="#8D8D8D" />
              <stop offset={0.449} stopColor="#8C8C8C" />
              <stop offset={0.453} stopColor="#8B8B8B" />
              <stop offset={0.457} stopColor="#8A8A8A" />
              <stop offset={0.461} stopColor="#898989" />
              <stop offset={0.465} stopColor="#888" />
              <stop offset={0.469} stopColor="#878787" />
              <stop offset={0.473} stopColor="#868686" />
              <stop offset={0.477} stopColor="#858585" />
              <stop offset={0.48} stopColor="#848484" />
              <stop offset={0.484} stopColor="#838383" />
              <stop offset={0.488} stopColor="#828282" />
              <stop offset={0.492} stopColor="#818181" />
              <stop offset={0.496} stopColor="gray" />
              <stop offset={0.5} stopColor="#7F7F7F" />
              <stop offset={0.504} stopColor="#7E7E7E" />
              <stop offset={0.508} stopColor="#7D7D7D" />
              <stop offset={0.512} stopColor="#7C7C7C" />
              <stop offset={0.516} stopColor="#7B7B7B" />
              <stop offset={0.519} stopColor="#7A7A7A" />
              <stop offset={0.523} stopColor="#797979" />
              <stop offset={0.527} stopColor="#787878" />
              <stop offset={0.531} stopColor="#777" />
              <stop offset={0.535} stopColor="#767676" />
              <stop offset={0.539} stopColor="#757575" />
              <stop offset={0.543} stopColor="#747474" />
              <stop offset={0.547} stopColor="#737373" />
              <stop offset={0.551} stopColor="#727272" />
              <stop offset={0.555} stopColor="#717171" />
              <stop offset={0.559} stopColor="#707070" />
              <stop offset={0.563} stopColor="#6F6F6F" />
              <stop offset={0.566} stopColor="#6E6E6E" />
              <stop offset={0.57} stopColor="#6D6D6D" />
              <stop offset={0.574} stopColor="#6C6C6C" />
              <stop offset={0.578} stopColor="#6B6B6B" />
              <stop offset={0.582} stopColor="#6A6A6A" />
              <stop offset={0.586} stopColor="#696969" />
              <stop offset={0.59} stopColor="#686868" />
              <stop offset={0.594} stopColor="#676767" />
              <stop offset={0.598} stopColor="#666" />
              <stop offset={0.602} stopColor="#656565" />
              <stop offset={0.606} stopColor="#646464" />
              <stop offset={0.609} stopColor="#636363" />
              <stop offset={0.613} stopColor="#626262" />
              <stop offset={0.617} stopColor="#616161" />
              <stop offset={0.621} stopColor="#606060" />
              <stop offset={0.625} stopColor="#5F5F5F" />
              <stop offset={0.629} stopColor="#5E5E5E" />
              <stop offset={0.633} stopColor="#5D5D5D" />
              <stop offset={0.637} stopColor="#5C5C5C" />
              <stop offset={0.641} stopColor="#5B5B5B" />
              <stop offset={0.644} stopColor="#5A5A5A" />
              <stop offset={0.648} stopColor="#595959" />
              <stop offset={0.652} stopColor="#585858" />
              <stop offset={0.656} stopColor="#575757" />
              <stop offset={0.66} stopColor="#565656" />
              <stop offset={0.664} stopColor="#555" />
              <stop offset={0.668} stopColor="#545454" />
              <stop offset={0.672} stopColor="#535353" />
              <stop offset={0.676} stopColor="#525252" />
              <stop offset={0.68} stopColor="#515151" />
              <stop offset={0.684} stopColor="#505050" />
              <stop offset={0.688} stopColor="#4F4F4F" />
              <stop offset={0.691} stopColor="#4E4E4E" />
              <stop offset={0.695} stopColor="#4D4D4D" />
              <stop offset={0.699} stopColor="#4C4C4C" />
              <stop offset={0.703} stopColor="#4B4B4B" />
              <stop offset={0.707} stopColor="#4A4A4A" />
              <stop offset={0.711} stopColor="#494949" />
              <stop offset={0.715} stopColor="#484848" />
              <stop offset={0.719} stopColor="#474747" />
              <stop offset={0.723} stopColor="#464646" />
              <stop offset={0.727} stopColor="#454545" />
              <stop offset={0.731} stopColor="#444" />
              <stop offset={0.734} stopColor="#434343" />
              <stop offset={0.738} stopColor="#424242" />
              <stop offset={0.742} stopColor="#414141" />
              <stop offset={0.746} stopColor="#404040" />
              <stop offset={0.75} stopColor="#3F3F3F" />
              <stop offset={0.754} stopColor="#3E3E3E" />
              <stop offset={0.758} stopColor="#3D3D3D" />
              <stop offset={0.762} stopColor="#3C3C3C" />
              <stop offset={0.766} stopColor="#3B3B3B" />
              <stop offset={0.769} stopColor="#3A3A3A" />
              <stop offset={0.773} stopColor="#393939" />
              <stop offset={0.777} stopColor="#383838" />
              <stop offset={0.781} stopColor="#373737" />
              <stop offset={0.785} stopColor="#363636" />
              <stop offset={0.789} stopColor="#353535" />
              <stop offset={0.793} stopColor="#343434" />
              <stop offset={0.797} stopColor="#333" />
              <stop offset={0.801} stopColor="#323232" />
              <stop offset={0.805} stopColor="#313131" />
              <stop offset={0.809} stopColor="#303030" />
              <stop offset={0.813} stopColor="#2F2F2F" />
              <stop offset={0.816} stopColor="#2E2E2E" />
              <stop offset={0.82} stopColor="#2D2D2D" />
              <stop offset={0.824} stopColor="#2C2C2C" />
              <stop offset={0.828} stopColor="#2B2B2B" />
              <stop offset={0.832} stopColor="#2A2A2A" />
              <stop offset={0.836} stopColor="#292929" />
              <stop offset={0.84} stopColor="#282828" />
              <stop offset={0.844} stopColor="#272727" />
              <stop offset={0.848} stopColor="#262626" />
              <stop offset={0.852} stopColor="#252525" />
              <stop offset={0.856} stopColor="#242424" />
              <stop offset={0.859} stopColor="#232323" />
              <stop offset={0.863} stopColor="#222" />
              <stop offset={0.867} stopColor="#212121" />
              <stop offset={0.871} stopColor="#202020" />
              <stop offset={0.875} stopColor="#1F1F1F" />
              <stop offset={0.879} stopColor="#1E1E1E" />
              <stop offset={0.883} stopColor="#1D1D1D" />
              <stop offset={0.887} stopColor="#1C1C1C" />
              <stop offset={0.891} stopColor="#1B1B1B" />
              <stop offset={0.894} stopColor="#1A1A1A" />
              <stop offset={0.898} stopColor="#191919" />
              <stop offset={0.902} stopColor="#181818" />
              <stop offset={0.906} stopColor="#171717" />
              <stop offset={0.91} stopColor="#161616" />
              <stop offset={0.914} stopColor="#151515" />
              <stop offset={0.918} stopColor="#141414" />
              <stop offset={0.922} stopColor="#131313" />
              <stop offset={0.926} stopColor="#121212" />
              <stop offset={0.93} stopColor="#111" />
              <stop offset={0.934} stopColor="#101010" />
              <stop offset={0.938} stopColor="#0F0F0F" />
              <stop offset={0.941} stopColor="#0E0E0E" />
              <stop offset={0.945} stopColor="#0D0D0D" />
              <stop offset={0.949} stopColor="#0C0C0C" />
              <stop offset={0.953} stopColor="#0B0B0B" />
              <stop offset={0.957} stopColor="#0A0A0A" />
              <stop offset={0.961} stopColor="#090909" />
              <stop offset={0.965} stopColor="#080808" />
              <stop offset={0.969} stopColor="#070707" />
              <stop offset={0.973} stopColor="#060606" />
              <stop offset={0.977} stopColor="#050505" />
              <stop offset={0.981} stopColor="#040404" />
              <stop offset={0.984} stopColor="#030303" />
              <stop offset={0.988} stopColor="#020202" />
              <stop offset={0.992} stopColor="#010101" />
              <stop offset={0.996} />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="t"
              cx={0}
              cy={0}
              r={27.611}
              gradientTransform="matrix(1.0177 0 0 .9823 1507.11 977.69)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#FFF" />
              <stop offset={0.004} stopColor="#FEFEFE" />
              <stop offset={0.008} stopColor="#FDFDFD" />
              <stop offset={0.012} stopColor="#FCFCFC" />
              <stop offset={0.016} stopColor="#FBFBFB" />
              <stop offset={0.019} stopColor="#FAFAFA" />
              <stop offset={0.023} stopColor="#F9F9F9" />
              <stop offset={0.027} stopColor="#F8F8F8" />
              <stop offset={0.031} stopColor="#F7F7F7" />
              <stop offset={0.035} stopColor="#F6F6F6" />
              <stop offset={0.039} stopColor="#F5F5F5" />
              <stop offset={0.043} stopColor="#F4F4F4" />
              <stop offset={0.047} stopColor="#F3F3F3" />
              <stop offset={0.051} stopColor="#F2F2F2" />
              <stop offset={0.055} stopColor="#F1F1F1" />
              <stop offset={0.059} stopColor="#F0F0F0" />
              <stop offset={0.063} stopColor="#EFEFEF" />
              <stop offset={0.066} stopColor="#EEE" />
              <stop offset={0.07} stopColor="#EDEDED" />
              <stop offset={0.074} stopColor="#ECECEC" />
              <stop offset={0.078} stopColor="#EBEBEB" />
              <stop offset={0.082} stopColor="#EAEAEA" />
              <stop offset={0.086} stopColor="#E9E9E9" />
              <stop offset={0.09} stopColor="#E8E8E8" />
              <stop offset={0.094} stopColor="#E7E7E7" />
              <stop offset={0.098} stopColor="#E6E6E6" />
              <stop offset={0.102} stopColor="#E5E5E5" />
              <stop offset={0.105} stopColor="#E4E4E4" />
              <stop offset={0.109} stopColor="#E3E3E3" />
              <stop offset={0.113} stopColor="#E2E2E2" />
              <stop offset={0.117} stopColor="#E1E1E1" />
              <stop offset={0.121} stopColor="#E0E0E0" />
              <stop offset={0.125} stopColor="#DFDFDF" />
              <stop offset={0.129} stopColor="#DEDEDE" />
              <stop offset={0.133} stopColor="#DDD" />
              <stop offset={0.137} stopColor="#DCDCDC" />
              <stop offset={0.141} stopColor="#DBDBDB" />
              <stop offset={0.144} stopColor="#DADADA" />
              <stop offset={0.148} stopColor="#D9D9D9" />
              <stop offset={0.152} stopColor="#D8D8D8" />
              <stop offset={0.156} stopColor="#D7D7D7" />
              <stop offset={0.16} stopColor="#D6D6D6" />
              <stop offset={0.164} stopColor="#D5D5D5" />
              <stop offset={0.168} stopColor="#D4D4D4" />
              <stop offset={0.172} stopColor="#D3D3D3" />
              <stop offset={0.176} stopColor="#D2D2D2" />
              <stop offset={0.18} stopColor="#D1D1D1" />
              <stop offset={0.184} stopColor="#D0D0D0" />
              <stop offset={0.188} stopColor="#CFCFCF" />
              <stop offset={0.191} stopColor="#CECECE" />
              <stop offset={0.195} stopColor="#CDCDCD" />
              <stop offset={0.199} stopColor="#CCC" />
              <stop offset={0.203} stopColor="#CBCBCB" />
              <stop offset={0.207} stopColor="#CACACA" />
              <stop offset={0.211} stopColor="#C9C9C9" />
              <stop offset={0.215} stopColor="#C8C8C8" />
              <stop offset={0.219} stopColor="#C7C7C7" />
              <stop offset={0.223} stopColor="#C6C6C6" />
              <stop offset={0.227} stopColor="#C5C5C5" />
              <stop offset={0.231} stopColor="#C4C4C4" />
              <stop offset={0.234} stopColor="#C3C3C3" />
              <stop offset={0.238} stopColor="#C2C2C2" />
              <stop offset={0.242} stopColor="#C1C1C1" />
              <stop offset={0.246} stopColor="silver" />
              <stop offset={0.25} stopColor="#BFBFBF" />
              <stop offset={0.254} stopColor="#BEBEBE" />
              <stop offset={0.258} stopColor="#BDBDBD" />
              <stop offset={0.262} stopColor="#BCBCBC" />
              <stop offset={0.266} stopColor="#BBB" />
              <stop offset={0.27} stopColor="#BABABA" />
              <stop offset={0.273} stopColor="#B9B9B9" />
              <stop offset={0.277} stopColor="#B8B8B8" />
              <stop offset={0.281} stopColor="#B7B7B7" />
              <stop offset={0.285} stopColor="#B6B6B6" />
              <stop offset={0.289} stopColor="#B5B5B5" />
              <stop offset={0.293} stopColor="#B4B4B4" />
              <stop offset={0.297} stopColor="#B3B3B3" />
              <stop offset={0.301} stopColor="#B2B2B2" />
              <stop offset={0.305} stopColor="#B1B1B1" />
              <stop offset={0.309} stopColor="#B0B0B0" />
              <stop offset={0.313} stopColor="#AFAFAF" />
              <stop offset={0.316} stopColor="#AEAEAE" />
              <stop offset={0.32} stopColor="#ADADAD" />
              <stop offset={0.324} stopColor="#ACACAC" />
              <stop offset={0.328} stopColor="#ABABAB" />
              <stop offset={0.332} stopColor="#AAA" />
              <stop offset={0.336} stopColor="#A9A9A9" />
              <stop offset={0.34} stopColor="#A8A8A8" />
              <stop offset={0.344} stopColor="#A7A7A7" />
              <stop offset={0.348} stopColor="#A6A6A6" />
              <stop offset={0.352} stopColor="#A5A5A5" />
              <stop offset={0.355} stopColor="#A4A4A4" />
              <stop offset={0.359} stopColor="#A3A3A3" />
              <stop offset={0.363} stopColor="#A2A2A2" />
              <stop offset={0.367} stopColor="#A1A1A1" />
              <stop offset={0.371} stopColor="#A0A0A0" />
              <stop offset={0.375} stopColor="#9F9F9F" />
              <stop offset={0.379} stopColor="#9E9E9E" />
              <stop offset={0.383} stopColor="#9D9D9D" />
              <stop offset={0.387} stopColor="#9C9C9C" />
              <stop offset={0.391} stopColor="#9B9B9B" />
              <stop offset={0.395} stopColor="#9A9A9A" />
              <stop offset={0.398} stopColor="#999" />
              <stop offset={0.402} stopColor="#989898" />
              <stop offset={0.406} stopColor="#979797" />
              <stop offset={0.41} stopColor="#969696" />
              <stop offset={0.414} stopColor="#959595" />
              <stop offset={0.418} stopColor="#949494" />
              <stop offset={0.422} stopColor="#939393" />
              <stop offset={0.426} stopColor="#929292" />
              <stop offset={0.43} stopColor="#919191" />
              <stop offset={0.434} stopColor="#909090" />
              <stop offset={0.438} stopColor="#8F8F8F" />
              <stop offset={0.441} stopColor="#8E8E8E" />
              <stop offset={0.445} stopColor="#8D8D8D" />
              <stop offset={0.449} stopColor="#8C8C8C" />
              <stop offset={0.453} stopColor="#8B8B8B" />
              <stop offset={0.457} stopColor="#8A8A8A" />
              <stop offset={0.461} stopColor="#898989" />
              <stop offset={0.465} stopColor="#888" />
              <stop offset={0.469} stopColor="#878787" />
              <stop offset={0.473} stopColor="#868686" />
              <stop offset={0.477} stopColor="#858585" />
              <stop offset={0.48} stopColor="#848484" />
              <stop offset={0.484} stopColor="#838383" />
              <stop offset={0.488} stopColor="#828282" />
              <stop offset={0.492} stopColor="#818181" />
              <stop offset={0.496} stopColor="gray" />
              <stop offset={0.5} stopColor="#7F7F7F" />
              <stop offset={0.504} stopColor="#7E7E7E" />
              <stop offset={0.508} stopColor="#7D7D7D" />
              <stop offset={0.512} stopColor="#7C7C7C" />
              <stop offset={0.516} stopColor="#7B7B7B" />
              <stop offset={0.519} stopColor="#7A7A7A" />
              <stop offset={0.523} stopColor="#797979" />
              <stop offset={0.527} stopColor="#787878" />
              <stop offset={0.531} stopColor="#777" />
              <stop offset={0.535} stopColor="#767676" />
              <stop offset={0.539} stopColor="#757575" />
              <stop offset={0.543} stopColor="#747474" />
              <stop offset={0.547} stopColor="#737373" />
              <stop offset={0.551} stopColor="#727272" />
              <stop offset={0.555} stopColor="#717171" />
              <stop offset={0.559} stopColor="#707070" />
              <stop offset={0.563} stopColor="#6F6F6F" />
              <stop offset={0.566} stopColor="#6E6E6E" />
              <stop offset={0.57} stopColor="#6D6D6D" />
              <stop offset={0.574} stopColor="#6C6C6C" />
              <stop offset={0.578} stopColor="#6B6B6B" />
              <stop offset={0.582} stopColor="#6A6A6A" />
              <stop offset={0.586} stopColor="#696969" />
              <stop offset={0.59} stopColor="#686868" />
              <stop offset={0.594} stopColor="#676767" />
              <stop offset={0.598} stopColor="#666" />
              <stop offset={0.602} stopColor="#656565" />
              <stop offset={0.606} stopColor="#646464" />
              <stop offset={0.609} stopColor="#636363" />
              <stop offset={0.613} stopColor="#626262" />
              <stop offset={0.617} stopColor="#616161" />
              <stop offset={0.621} stopColor="#606060" />
              <stop offset={0.625} stopColor="#5F5F5F" />
              <stop offset={0.629} stopColor="#5E5E5E" />
              <stop offset={0.633} stopColor="#5D5D5D" />
              <stop offset={0.637} stopColor="#5C5C5C" />
              <stop offset={0.641} stopColor="#5B5B5B" />
              <stop offset={0.644} stopColor="#5A5A5A" />
              <stop offset={0.648} stopColor="#595959" />
              <stop offset={0.652} stopColor="#585858" />
              <stop offset={0.656} stopColor="#575757" />
              <stop offset={0.66} stopColor="#565656" />
              <stop offset={0.664} stopColor="#555" />
              <stop offset={0.668} stopColor="#545454" />
              <stop offset={0.672} stopColor="#535353" />
              <stop offset={0.676} stopColor="#525252" />
              <stop offset={0.68} stopColor="#515151" />
              <stop offset={0.684} stopColor="#505050" />
              <stop offset={0.688} stopColor="#4F4F4F" />
              <stop offset={0.691} stopColor="#4E4E4E" />
              <stop offset={0.695} stopColor="#4D4D4D" />
              <stop offset={0.699} stopColor="#4C4C4C" />
              <stop offset={0.703} stopColor="#4B4B4B" />
              <stop offset={0.707} stopColor="#4A4A4A" />
              <stop offset={0.711} stopColor="#494949" />
              <stop offset={0.715} stopColor="#484848" />
              <stop offset={0.719} stopColor="#474747" />
              <stop offset={0.723} stopColor="#464646" />
              <stop offset={0.727} stopColor="#454545" />
              <stop offset={0.731} stopColor="#444" />
              <stop offset={0.734} stopColor="#434343" />
              <stop offset={0.738} stopColor="#424242" />
              <stop offset={0.742} stopColor="#414141" />
              <stop offset={0.746} stopColor="#404040" />
              <stop offset={0.75} stopColor="#3F3F3F" />
              <stop offset={0.754} stopColor="#3E3E3E" />
              <stop offset={0.758} stopColor="#3D3D3D" />
              <stop offset={0.762} stopColor="#3C3C3C" />
              <stop offset={0.766} stopColor="#3B3B3B" />
              <stop offset={0.769} stopColor="#3A3A3A" />
              <stop offset={0.773} stopColor="#393939" />
              <stop offset={0.777} stopColor="#383838" />
              <stop offset={0.781} stopColor="#373737" />
              <stop offset={0.785} stopColor="#363636" />
              <stop offset={0.789} stopColor="#353535" />
              <stop offset={0.793} stopColor="#343434" />
              <stop offset={0.797} stopColor="#333" />
              <stop offset={0.801} stopColor="#323232" />
              <stop offset={0.805} stopColor="#313131" />
              <stop offset={0.809} stopColor="#303030" />
              <stop offset={0.813} stopColor="#2F2F2F" />
              <stop offset={0.816} stopColor="#2E2E2E" />
              <stop offset={0.82} stopColor="#2D2D2D" />
              <stop offset={0.824} stopColor="#2C2C2C" />
              <stop offset={0.828} stopColor="#2B2B2B" />
              <stop offset={0.832} stopColor="#2A2A2A" />
              <stop offset={0.836} stopColor="#292929" />
              <stop offset={0.84} stopColor="#282828" />
              <stop offset={0.844} stopColor="#272727" />
              <stop offset={0.848} stopColor="#262626" />
              <stop offset={0.852} stopColor="#252525" />
              <stop offset={0.856} stopColor="#242424" />
              <stop offset={0.859} stopColor="#232323" />
              <stop offset={0.863} stopColor="#222" />
              <stop offset={0.867} stopColor="#212121" />
              <stop offset={0.871} stopColor="#202020" />
              <stop offset={0.875} stopColor="#1F1F1F" />
              <stop offset={0.879} stopColor="#1E1E1E" />
              <stop offset={0.883} stopColor="#1D1D1D" />
              <stop offset={0.887} stopColor="#1C1C1C" />
              <stop offset={0.891} stopColor="#1B1B1B" />
              <stop offset={0.894} stopColor="#1A1A1A" />
              <stop offset={0.898} stopColor="#191919" />
              <stop offset={0.902} stopColor="#181818" />
              <stop offset={0.906} stopColor="#171717" />
              <stop offset={0.91} stopColor="#161616" />
              <stop offset={0.914} stopColor="#151515" />
              <stop offset={0.918} stopColor="#141414" />
              <stop offset={0.922} stopColor="#131313" />
              <stop offset={0.926} stopColor="#121212" />
              <stop offset={0.93} stopColor="#111" />
              <stop offset={0.934} stopColor="#101010" />
              <stop offset={0.938} stopColor="#0F0F0F" />
              <stop offset={0.941} stopColor="#0E0E0E" />
              <stop offset={0.945} stopColor="#0D0D0D" />
              <stop offset={0.949} stopColor="#0C0C0C" />
              <stop offset={0.953} stopColor="#0B0B0B" />
              <stop offset={0.957} stopColor="#0A0A0A" />
              <stop offset={0.961} stopColor="#090909" />
              <stop offset={0.965} stopColor="#080808" />
              <stop offset={0.969} stopColor="#070707" />
              <stop offset={0.973} stopColor="#060606" />
              <stop offset={0.977} stopColor="#050505" />
              <stop offset={0.981} stopColor="#040404" />
              <stop offset={0.984} stopColor="#030303" />
              <stop offset={0.988} stopColor="#020202" />
              <stop offset={0.992} stopColor="#010101" />
              <stop offset={0.996} />
              <stop offset={1} />
            </radialGradient>
          </defs>
          <g clipPath="url(#a)">
            <g clipPath="url(#b)">
              <path d="M3271.5 898.14c.238.09 1.09.391 2.531.891l37.59-129.32c-.473-.16-.793-.281-.973-.34l-.148-.05-.828 2.75.828-2.75-.828 2.75.828-2.75-5.441 18.058 5.453-18.059h-.012l-5.441 18.059 5.453-18.059-7.301 24.16 7.3-24.16-7.3 24.16 7.3-24.16-.081-.03-16.73 55.67 16.87-55.62-.14-.05-16.73 55.67 16.87-55.62Zm12.64 4.27c.63.2 1.282.41 1.962.63l34.878-130.22c-.558-.18-1.101-.36-1.609-.52Zm11.669 3.66c.64.2 1.28.39 1.93.59l33.12-130.77c-.558-.18-1.12-.34-1.66-.511Zm11.57 3.442c.633.187 1.27.367 1.922.558l31.61-131.218c-.571-.16-1.13-.332-1.68-.493Zm11.52 3.27c.632.167 1.273.347 1.921.527l30.239-131.61c-.579-.16-1.137-.308-1.7-.469Zm11.511 3.109c.63.16 1.27.328 1.918.5l28.942-131.95c-.57-.152-1.141-.3-1.711-.453Zm11.512 2.968c.629.16 1.27.32 1.906.48l27.711-132.269c-.578-.148-1.148-.289-1.719-.43Zm11.508 2.832c.64.149 1.28.309 1.922.457l26.5-132.558c-.582-.14-1.153-.281-1.723-.418Zm11.52 2.707c.64.153 1.28.293 1.929.442L3392.19 792c-.582-.129-1.152-.262-1.73-.398Zm11.538 2.582c.64.141 1.282.282 1.934.418l24.137-133.097c-.579-.121-1.149-.25-1.73-.371Zm11.551 2.461c.64.137 1.29.27 1.93.399l22.992-133.34c-.582-.121-1.16-.238-1.742-.36Zm11.57 2.348c.653.121 1.29.25 1.93.371l21.84-133.57c-.578-.121-1.16-.23-1.738-.34Zm11.59 2.223c.653.117 1.29.238 1.942.347l20.668-133.789c-.579-.11-1.16-.21-1.739-.32Zm11.61 2.097c.64.11 1.293.22 1.93.34l19.53-134.008c-.59-.101-1.167-.203-1.75-.3Zm11.62 1.98c.65.11 1.301.212 1.942.321l18.36-134.2c-.583-.1-1.16-.19-1.743-.288Zm11.65 1.86c.64.102 1.292.2 1.94.301l17.192-134.379c-.582-.09-1.16-.18-1.75-.27Zm11.66 1.742c.652.09 1.3.188 1.952.278L3475.7 807.41c-.578-.082-1.168-.16-1.75-.25Zm11.683 1.618c.648.09 1.297.171 1.95.261l14.827-134.718a97.99 97.99 0 0 0-1.75-.23Zm11.707 1.5c.652.082 1.3.152 1.95.23l13.62-134.867c-.59-.07-1.168-.14-1.75-.211Zm11.723 1.37 1.949.212 12.41-135.012c-.59-.059-1.172-.129-1.75-.188Zm11.738 1.243c.648.066 1.3.129 1.95.2l11.179-135.142c-.59-.058-1.168-.12-1.75-.18Zm11.75 1.117c.66.063 1.308.121 1.969.172l9.921-135.25c-.582-.05-1.171-.102-1.75-.16Zm11.781.992c.649.047 1.309.098 1.969.149l8.648-135.36c-.578-.039-1.168-.09-1.75-.14Zm11.8.848c.65.05 1.31.09 1.958.133l7.371-135.453c-.578-.04-1.172-.07-1.75-.11Zm11.81.73c.648.032 1.308.07 1.968.102l6.063-135.52c-.582-.03-1.172-.07-1.75-.101Zm11.82.582c.66.028 1.32.059 1.98.09l4.73-135.601c-.581-.02-1.171-.04-1.75-.07Zm11.847.45 1.973.058 3.39-135.64c-.59-.02-1.171-.028-1.75-.047Zm11.852.308c.66.012 1.32.02 1.969.031l2.02-135.671c-.579-.008-1.16-.02-1.739-.028Zm11.871.16h.41c.528 0 1.047.012 1.57.012l.598-135.691c-.449 0-.91 0-1.37-.008h-.368Zm11.93.012c.668-.012 1.328-.012 1.988-.02l-.918-135.68c-.582 0-1.16 0-1.742.009Zm11.937-.152c.66-.02 1.32-.028 1.98-.04l-2.437-135.667c-.582.008-1.152.027-1.73.039Zm11.922-.309c.668-.031 1.328-.05 1.988-.07l-3.949-135.621c-.578.02-1.16.043-1.738.062Zm11.93-.469c.66-.03 1.32-.062 1.98-.09l-5.46-135.562c-.57.02-1.15.05-1.731.082Zm11.91-.632 1.988-.118-6.957-135.472c-.582.031-1.16.07-1.742.101Zm11.91-.778 1.98-.152-8.46-135.367c-.578.039-1.149.078-1.73.129Zm11.89-.941c.66-.059 1.321-.11 1.981-.168l-9.953-135.262c-.578.05-1.148.11-1.726.149Zm11.88-1.102c.66-.058 1.32-.129 1.98-.187L3684.97 812.93c-.578.058-1.149.12-1.73.18Zm11.87-1.25c.66-.066 1.321-.148 1.981-.218l-12.93-134.961c-.581.07-1.152.132-1.73.203Zm11.86-1.41c.66-.078 1.309-.168 1.969-.25l-14.418-134.77c-.57.07-1.152.153-1.73.223Zm11.84-1.566c.66-.09 1.309-.184 1.969-.274l-15.91-134.566c-.57.078-1.149.156-1.72.238Zm11.82-1.723c.66-.098 1.32-.2 1.97-.3l-17.4-134.348c-.57.09-1.152.168-1.718.257Zm11.809-1.879c.66-.11 1.312-.219 1.973-.332l-18.903-134.11c-.57.102-1.14.204-1.719.294Zm11.793-2.039c.656-.11 1.308-.23 1.957-.351l-20.399-133.848c-.558.11-1.14.207-1.71.308Zm11.77-2.191c.66-.13 1.308-.258 1.956-.39l-21.91-133.56c-.558.11-1.129.23-1.699.34Zm11.757-2.36c.653-.14 1.301-.27 1.95-.41l-23.43-133.25c-.559.121-1.13.23-1.7.352Zm11.73-2.52c.66-.152 1.31-.288 1.962-.44l-24.98-132.919c-.56.13-1.122.258-1.692.38Zm11.72-2.69c.66-.15 1.312-.31 1.96-.462L3787.82 795.59c-.558.129-1.12.27-1.691.398l26.281 132.621Zm11.71-2.86c.653-.16 1.301-.328 1.95-.488l-28.13-132.16c-.558.136-1.12.277-1.679.418Zm11.692-3.031c.648-.168 1.3-.348 1.949-.52l-29.77-131.738c-.55.148-1.109.3-1.671.45Zm11.68-3.207c.648-.192 1.3-.383 1.949-.563l-31.461-131.258c-.547.149-1.098.309-1.66.47Zm11.68-3.41a92.45 92.45 0 0 1 1.948-.59l-33.23-130.742c-.54.16-1.09.332-1.64.492Zm11.69-3.622c.66-.21 1.31-.421 1.95-.628l-35.11-130.153c-.53.172-1.082.34-1.62.52Zm11.72-3.859c.66-.223 1.32-.45 1.96-.672l-37.172-129.46c-.52.171-1.058.363-1.597.542Zm11.808-4.14c.68-.25 1.34-.493 1.992-.731l-39.57-128.61c-.5.18-1.02.372-1.551.56Zm12.11-4.583c.761-.296 1.46-.578 2.113-.84l-42.91-127.328c-.41.168-.883.348-1.403.56l42.2 127.608" />
            </g>
          </g>
          <path
            fill={color}
            d="M2106.59 1077.172a107.914 107.914 0 0 0-3.121-4.621l.062-.172c1.04 1.383 2.07 3 3.059 4.793"
          />
          <path
            fill="#010101"
            d="m2106.59 1077.172 2.441-1.543a108.219 108.219 0 0 0-3.203-4.738l-2.36 1.66 2.731.93.063-.172-2.73-.93-2.313 1.723a40.378 40.378 0 0 1 2.84 4.457l2.53-1.387 2.442-1.543-2.441 1.543 2.531-1.39a44.782 44.782 0 0 0-3.281-5.134 2.886 2.886 0 0 0-2.762-1.128 2.902 2.902 0 0 0-2.277 1.921l-.063.18a2.885 2.885 0 0 0 .371 2.59c1.09 1.55 2.102 3.008 3.04 4.5a2.885 2.885 0 0 0 3.902.95 2.888 2.888 0 0 0 1.07-3.88l-2.531 1.39M594.227 2806.55l-2.536 1.38c.176.332 1.059 1.78 3.477 3.84 3.633 3.101 10.703 7.57 24.156 11.832 13.457 4.257 33.317 8.328 62.614 10.59 18.816 1.437 34.16 2 46.625 2 19.578 0 32.046-1.364 39.707-2.75 7.656-1.391 10.511-2.813 10.843-2.981a2.903 2.903 0 0 0 1.543-2.461l.043-1.11c.028-.73.07-1.788.125-3.128a2.872 2.872 0 0 0-1.36-2.57c-15.378-9.57-41.773-19.532-84.175-24.34-16.426-1.872-30.523-2.602-42.535-2.602-43.254-.012-59.512 9.52-60.012 9.82a2.885 2.885 0 0 0-1.05 3.86l2.535-1.38 1.488 2.481-.02-.031.016.031h.004l-.02-.031.016.031c.473-.27 15.95-9 57.043-9.011 11.777 0 25.656.718 41.883 2.57 41.785 4.73 67.394 14.539 81.777 23.5l1.527-2.45-2.886-.12c-.11 2.69-.168 4.27-.168 4.27l2.886.108-1.34-2.558.669 1.27-.637-1.29-.031.02.668 1.27-.637-1.29c-.008.008-2.621 1.29-9.918 2.559-7.3 1.27-19.277 2.531-37.985 2.531-12.292 0-27.492-.539-46.183-1.98-38.621-2.97-60.305-9.121-72.149-14.38-5.921-2.628-9.386-5.019-11.316-6.671-.965-.82-1.547-1.457-1.863-1.84-.16-.2-.254-.328-.297-.398l-.031-.04-1.344.82 1.383-.75-.04-.07-1.343.82 1.383-.75-2.535 1.38 1.488 2.48-1.488-2.48"
          />
          <path
            fill={color}
            d="M843.512 2482.14c-12.82 45.22-4.274 75.141-7.684 127.231-2.77 41.867-13.226 84.309-26.68 107.938-3.293 5.71-38.343 42.453-41.003 47.82-11.778 23.562 10.57 41.52 9.82 58.5-14.903-9.25-40.887-19.117-82.988-23.91-75.13-8.547-100.723 6.812-100.723 6.812 1.512-54.691-4.492-80.16-12.356-108.34-5.546-19.691-29.859-48.113-33.035-57.23-7.68-22.242-16.164-60.64-16.164-100.781 0-40.13 21.305-116.942 33.262-169.899 6.758-29.86-10.742-68.261-12.012-114.812-.984-35.797-2.48-73.11-1.726-106.547 1.672-76.813 23.898-133.98 35.859-169.852 11.953-35.86 3.402-40.129 5.078-101.582 1.73-61.508 24.778-111.86 37.594-161.36 7.625-29.39 10.398-91.019 13.746-159.097 2.258-46.55 4.793-96.16 9.3-140.57.345-3.352.696-6.7 1.04-10.05 7.734-75.31 29.742-165.231 47.41-230.481 1.797-6.532 3.473-12.82 5.148-18.77 0 0 .805-4.91 2.426-12.469 4.207-19.293 14.203-56.082 31.696-73.52-.055-.062 0-.062.117-.12 1.039-1.09 2.199-2.192 3.406-3.121l119.262 350.261 6.175 17.38c.985 39.8 3.524 74.738 3.473 161.48v2.078c-.066 22.98-.066 44.23-.125 64.043-.055 16.289-.055 31.648-.055 46.2 0 36.16.114 67.75.52 98.07 0 0 1.27 336.23 13.05 503.59.348 5.198.981 15.878 1.739 29.788-20.562 85.602-36.094 107.88-45.57 141.32"
          />
          <path
            fill="#010101"
            d="m843.512 2482.14-2.778-.78c-6.226 21.949-7.492 40.44-7.488 59.3 0 12.82.574 25.82.574 40.328 0 8.75-.207 18.051-.87 28.192-1.376 20.761-4.66 41.691-9.259 60.308-4.59 18.614-10.523 34.942-17.05 46.39l.007-.019c-.097.18-.382.602-.785 1.13-.754 1.011-1.933 2.452-3.39 4.171-5.125 6.02-13.715 15.45-21.285 23.91-3.79 4.23-7.325 8.23-10.075 11.461a148.331 148.331 0 0 0-3.48 4.25c-.465.61-.867 1.149-1.207 1.64-.344.5-.621.93-.867 1.43l.004-.023c-2.66 5.32-3.747 10.5-3.743 15.402 0 4.532.91 8.81 2.22 12.84 1.964 6.04 4.823 11.559 7.105 16.692 1.144 2.558 2.144 5.02 2.847 7.36.703 2.339 1.106 4.558 1.102 6.66 0 .238-.004.48-.016.718l2.887.129 1.52-2.457c-15.395-9.543-41.77-19.492-84.184-24.32-16.453-1.872-30.567-2.614-42.59-2.614-43.207 0-59.441 9.512-59.941 9.82l1.484 2.473 2.887.078c.16-5.738.234-11.168.234-16.32 0-22.02-1.398-38.898-3.691-53.46-2.293-14.56-5.477-26.77-9.004-39.407v-.012c-1.492-5.27-4.145-10.898-7.313-16.59-4.758-8.53-10.703-17.191-15.734-24.558-2.512-3.684-4.797-7.043-6.574-9.864a65.25 65.25 0 0 1-2.239-3.77c-.593-1.077-1.015-2-1.23-2.616l.004.008c-3.782-10.95-7.793-25.989-10.848-43.239-3.058-17.25-5.16-36.73-5.156-56.601-.004-9.782 1.305-21.989 3.476-35.57 3.254-20.391 8.438-43.872 13.926-67.22 5.488-23.35 11.29-46.57 15.781-66.468 1.145-5.063 1.618-10.3 1.618-15.711-.008-14.121-3.184-29.422-6.43-46.04-3.254-16.612-6.606-34.53-7.129-53.78-.797-29.051-1.93-59.04-1.93-87.11 0-6.55.063-12.992.207-19.3.828-38.141 6.762-71.41 13.98-99.622 7.223-28.218 15.727-51.379 21.731-69.37 2.606-7.817 4.27-14.208 5.282-20.067 1.007-5.852 1.359-11.14 1.355-16.66-.008-12.184-1.64-25.422-1.637-49.633 0-4.879.067-10.207.227-16.059.855-30.41 6.98-58.12 14.527-84.468 7.543-26.352 16.52-51.32 22.977-76.25 1.953-7.543 3.566-16.993 4.96-28.043 4.177-33.13 6.36-80.57 8.872-131.637 2.258-46.543 4.793-96.113 9.289-140.422v.012c.344-3.352.695-6.703 1.039-10.051 7.7-75.012 29.672-164.84 47.328-230.031l-.004.011c1.8-6.543 3.477-12.832 5.14-18.75.036-.12.052-.203.071-.32l.012-.05c.086-.532.879-5.243 2.39-12.282l-.003.012c2.082-9.551 5.609-23.461 10.746-37.051 2.57-6.79 5.539-13.5 8.91-19.54 3.37-6.038 7.144-11.401 11.258-15.5a2.85 2.85 0 0 0 .847-2.038c0-.781-.3-1.5-.847-2.05l-1.957 1.968 2.347-1.48c-.18-.282-.308-.4-.39-.489l-1.957 1.969 2.347-1.48-2.414 1.519 2.692-.938a3.149 3.149 0 0 0-.278-.582l-2.414 1.52 2.692-.938-2.707.938h2.867c0-.36-.07-.688-.16-.938l-2.707.938h2.867-2.871l2.492 1.422c.222-.371.383-.922.379-1.422h-2.871l2.492 1.422-2.48-1.41 1.917 2.109c.164-.148.375-.371.563-.7l-2.48-1.41 1.917 2.11-1.879-2.07 1.32 2.468c.098-.058.27-.136.56-.398l-1.88-2.07 1.32 2.468-1.179-2.199 1.047 2.262.133-.063-1.18-2.199 1.047 2.262-.68-1.473.668 1.48.012-.007-.68-1.473.668 1.48.016-.007c.031-.012.105-.05.199-.09a3.07 3.07 0 0 0 .773-.582c.965-1.02 2.024-2.02 3.067-2.809l-1.754-2.3-2.73.93L861.57 1419.12l.016.04 6.172 17.378 2.722-.969-2.886.078c.976 39.48 3.472 74 3.472 158.793v4.688-.008c-.066 22.988-.066 44.238-.125 64.04-.054 16.3-.054 31.66-.054 46.21 0 36.16.113 67.77.515 98.11v-.032c0 .012.32 84.07 2.11 189.07 1.793 105 5.054 230.91 10.953 314.711l-.004-.011c.348 5.172.98 15.86 1.738 29.761l2.883-.16-2.809-.672c-10.257 42.692-19.234 69.524-26.84 89.883-3.804 10.188-7.269 18.77-10.39 26.93-3.125 8.16-5.906 15.918-8.309 24.398l2.778.782 2.777.789c2.336-8.239 5.047-15.809 8.145-23.91 4.644-12.141 10.152-25.45 16.421-43.75 6.274-18.301 13.305-41.598 21.032-73.77.062-.262.093-.559.078-.828-.754-13.934-1.39-24.613-1.742-29.844v-.008c-5.883-83.558-9.149-209.449-10.938-314.398a16529.184 16529.184 0 0 1-2.027-174.23c-.031-4.762-.051-8.454-.063-10.954-.011-2.5-.015-3.808-.015-3.808v-.032c-.407-30.296-.52-61.878-.52-98.027 0-14.55 0-29.91.055-46.191.058-19.809.058-41.059.125-64.04v-4.699c0-84.89-2.504-119.64-3.473-158.941a2.944 2.944 0 0 0-.168-.89l-6.168-17.372L747.777 1067a2.887 2.887 0 0 0-4.484-1.36c-1.379 1.051-2.637 2.25-3.75 3.419l2.094 1.992-1.32-2.57.738 1.44-.668-1.472-.07.031.738 1.442-.668-1.473-.055.02c-.07.043-.203.082-.566.34-.176.14-.43.351-.692.75a3.003 3.003 0 0 0-.332.71c-.086.27-.133.583-.129.86-.004.371.07.7.16.96.137.38.297.622.418.79.121.16.215.262.29.332l2.039-2.04-2.04-2.05c-4.632 4.629-8.664 10.41-12.218 16.77-5.332 9.55-9.582 20.437-12.918 30.77-3.336 10.327-5.746 20.109-7.34 27.41l-.004.007c-1.637 7.621-2.445 12.57-2.45 12.613l2.848.47-2.78-.79c-1.68 5.98-3.36 12.277-5.15 18.79l-.003.01c-17.688 65.329-39.727 155.329-47.496 230.95-.344 3.34-.696 6.688-1.04 10.05-4.519 44.509-7.054 94.157-9.312 140.72-1.676 34.039-3.207 66.449-5.265 93.98-1.032 13.77-2.192 26.309-3.57 37.207-1.372 10.902-2.966 20.172-4.821 27.332-6.363 24.57-15.32 49.52-22.938 76.102-7.613 26.578-13.875 54.808-14.75 85.898-.16 5.899-.226 11.29-.226 16.219 0 24.46 1.644 38 1.637 49.633 0 5.277-.329 10.18-1.274 15.68-.95 5.5-2.527 11.597-5.066 19.218-5.957 17.871-14.547 41.23-21.848 69.77-7.3 28.53-13.32 62.261-14.16 100.93a855.522 855.522 0 0 0-.207 19.421c0 28.219 1.137 58.258 1.933 87.27.54 19.808 3.973 38.078 7.231 54.73 3.266 16.649 6.336 31.688 6.324 44.93 0 5.07-.441 9.879-1.472 14.43-5.965 26.418-14.282 58.879-21.118 89.78-3.418 15.45-6.465 30.52-8.664 44.27-2.195 13.77-3.547 26.207-3.55 36.489 0 20.28 2.14 40.07 5.246 57.61 3.109 17.538 7.18 32.82 11.078 44.108v.012c.511 1.45 1.308 3 2.336 4.77 1.793 3.09 4.3 6.832 7.152 11.011 4.273 6.278 9.305 13.54 13.691 20.778 2.196 3.633 4.227 7.242 5.918 10.71 1.692 3.47 3.043 6.801 3.887 9.801l-.004-.011c3.512 12.59 6.621 24.52 8.863 38.761 2.243 14.23 3.622 30.782 3.622 52.56 0 5.089-.075 10.472-.23 16.16a2.875 2.875 0 0 0 1.425 2.57c.906.539 2.043.53 2.941-.008l-.02-.043.02.043-.02-.043.02.043c.473-.274 15.918-8.992 56.973-8.992 11.785 0 25.684.718 41.937 2.57 41.793 4.75 67.387 14.55 81.793 23.488a2.879 2.879 0 0 0 2.871.102 2.904 2.904 0 0 0 1.536-2.43c.015-.32.02-.64.02-.969 0-3.781-.938-7.441-2.247-11.02-1.973-5.37-4.789-10.66-7.05-16.062-2.274-5.398-3.977-10.84-3.973-16.469.004-4.07.859-8.261 3.129-12.808l.007-.012c.032-.082.266-.469.621-.969.676-.941 1.797-2.351 3.204-4.03 2.468-2.962 5.84-6.79 9.543-10.942 5.55-6.219 11.847-13.149 17.02-18.98 2.589-2.919 4.894-5.56 6.698-7.72a86.85 86.85 0 0 0 2.32-2.859c.641-.832 1.126-1.5 1.512-2.16l.004-.02c6.93-12.171 12.95-28.878 17.645-47.859 4.68-18.973 8.011-40.2 9.41-61.312.676-10.297.883-19.73.883-28.57 0-14.66-.574-27.68-.57-40.329.003-18.62 1.222-36.398 7.265-57.73l-2.777-.79"
          />
          <path
            fill="#CDCCCB"
            d="M689.125 2812.172c-63.77-6.113-98.035 6.168-98.035 6.168s18.914 20.48 89.637 26.031c65.796 5.168 92.738-6.52 97.718-14.902-14.383-8.719-43.992-12.957-89.32-17.297"
          />
          <g clipPath="url(#c)">
            <g clipPath="url(#d)">
              <path fill="#B2B2B2" d="M775.957 2836.031h7.023v-6.941h-7.023Zm0 0" />
            </g>
          </g>
          <path
            fill="#8F8E8E"
            d="M759.617 2837.18c-6.465-7.27-34.789-13.309-77.129-15.95-6.867-.43-12.894-.62-18.187-.62-33.723 0-37.457 7.788-37.098 11.87-6.687-1.93-12.191-3.94-16.68-5.859-6.277-2.691-10.558-5.2-13.296-7.07 8.652-2.242 28.058-6.2 57.351-6.2 10.23 0 21.668.477 34.27 1.688l.261-2.71-.261 2.71c22.636 2.172 41.312 4.313 56.027 6.98 7.355 1.333 13.719 2.79 19.074 4.442 3.852 1.18 7.18 2.46 9.977 3.828-1.473 1.27-3.68 2.691-6.684 4.063-2.133.968-4.664 1.93-7.625 2.828"
          />
          <path
            fill="#010101"
            d="m689.125 2812.172.273-2.883c-12.789-1.219-24.406-1.71-34.82-1.71-41.875 0-64.191 7.94-64.46 8.042a2.898 2.898 0 0 0-1.833 2.027c-.23.942.028 1.942.684 2.653.281.308 5.37 5.668 19.281 11.629 13.91 5.96 36.637 12.52 72.254 15.32 11.297.89 21.473 1.281 30.605 1.281 22.192 0 38.239-2.32 49.422-5.601 5.594-1.64 9.973-3.52 13.32-5.532 1.672-1 3.087-2.039 4.262-3.109 1.176-1.07 2.117-2.18 2.817-3.348a2.882 2.882 0 0 0-.989-3.941c-3.882-2.352-8.636-4.32-14.296-6.059-8.493-2.613-19.028-4.691-31.711-6.55-12.688-1.852-27.512-3.47-44.536-5.102l-.273 2.883-.277 2.867c22.636 2.172 41.312 4.313 56.027 6.98 7.355 1.333 13.719 2.79 19.074 4.442 5.356 1.64 9.696 3.469 13 5.48l1.496-2.472-2.48-1.48c-.332.57-.899 1.273-1.738 2.03-1.465 1.34-3.766 2.86-6.985 4.333-4.832 2.207-11.722 4.328-20.972 5.867-9.254 1.55-20.864 2.543-35.16 2.531-8.97 0-18.993-.379-30.157-1.262-35.105-2.75-57.203-9.199-70.43-14.867-6.613-2.84-11.011-5.473-13.722-7.36-1.356-.952-2.285-1.702-2.864-2.21-.289-.25-.488-.43-.605-.551l-.117-.121-.016-.008-1 .95 1.012-.942-.012-.008-1 .95 1.012-.942-2.121 1.96.972 2.72-.671-1.88.672 1.88-.672-1.88.672 1.88.054-.02c1.219-.418 22.758-7.687 62.461-7.687 10.23 0 21.668.476 34.27 1.687l.277-2.867"
          />
          <path
            fill={color}
            d="M591.164 2843.121s68.902 56.719 184.945 15.55c-98.695-37.94-184.945-15.55-184.945-15.55"
          />
          <path
            fill="#B2B2B2"
            d="m591.172 2843.121-.012-.012s11.395-4.148 31.73-5.89c.739.23 1.493.453 2.258.68-20.988 1.89-33.652 5.132-33.976 5.222"
          />
          <path
            fill="#8F8E8E"
            d="M644.895 2836.719a66.873 66.873 0 0 0-1.086-.219c1.617.02 3.27.059 4.953.121-1.313.027-2.594.059-3.867.098"
          />
          <path
            fill="#010101"
            d="M625.148 2837.898c-.765-.226-1.52-.449-2.257-.68 5.355-.448 11.332-.738 17.879-.738 1 0 2.011.008 3.039.02.359.07.718.14 1.086.219-7.192.21-13.801.64-19.747 1.18"
          />
          <path
            fill="#243342"
            d="m649.629 2867.89-58.457-24.769c.324-.09 12.988-3.332 33.976-5.223 5.946-.539 12.555-.968 19.747-1.18 1.273-.038 2.554-.07 3.867-.097 7.004.25 14.566.828 22.648 1.867 0 0-58.61 7.633-21.781 29.403M722.691 2871.25s44.465-11.07-10.691-29.988c0 0 42.234 9.148 64.11 17.41l-53.419 12.578"
          />
          <path
            fill="#010101"
            d="m591.164 2843.121-1.836 2.23c.16.13 9.649 7.919 27.426 15.68 17.773 7.77 43.848 15.508 77.098 15.508 24.128 0 52.023-4.078 83.222-15.148a2.87 2.87 0 0 0 1.922-2.68 2.874 2.874 0 0 0-1.848-2.73c-45.68-17.56-88.687-22.31-121.87-22.31-39.165 0-64.665 6.61-64.84 6.65a2.913 2.913 0 0 0-2.094 2.179 2.885 2.885 0 0 0 .984 2.852l1.836-2.23.723 2.788h.011c.602-.148 25.465-6.469 63.38-6.46 32.636-.009 74.933 4.671 119.796 21.921l1.035-2.7-.964-2.722c-30.598 10.86-57.817 14.82-81.293 14.82-32.348 0-57.614-7.53-74.786-15.03-8.586-3.75-15.14-7.489-19.535-10.29a93.392 93.392 0 0 1-4.941-3.347 40.308 40.308 0 0 1-1.516-1.153l-.062-.05-.016-.008-.234.289.234-.29-.234.29.234-.29-1.832 2.231.723 2.79-.723-2.79"
          />
          <path
            fill={color}
            d="m582.309 2694.078 8.855 149.043s86.242-22.39 184.95 15.55c0 0 14.906-108.433 28.421-139.46-41.12-21.723-87.676-29.441-127.523-31.191-53.371-2.348-94.703 6.058-94.703 6.058"
          />
          <path
            fill="#010101"
            d="m582.309 2694.078-2.883.172 8.855 149.04a2.86 2.86 0 0 0 1.184 2.16c.703.51 1.586.679 2.426.46h.007c.602-.148 25.465-6.469 63.38-6.469 32.636 0 74.933 4.68 119.8 21.93.82.309 1.75.23 2.508-.21a2.926 2.926 0 0 0 1.39-2.102s.055-.41.169-1.207c.84-5.993 4.734-33.262 9.988-62.614 2.629-14.68 5.597-29.886 8.691-43.187 1.547-6.66 3.125-12.84 4.7-18.23 1.574-5.391 3.152-10 4.66-13.45.601-1.383.03-3-1.301-3.71-41.672-22.013-88.63-29.763-128.746-31.532-6.582-.29-12.98-.41-19.14-.41-44.142 0-76.134 6.5-76.263 6.531a2.878 2.878 0 0 0-2.308 3l2.883-.172.574 2.82.082-.007c1.781-.36 32.816-6.403 75.031-6.403 6.082 0 12.395.133 18.887.41 39.582 1.73 85.738 9.422 126.304 30.872l1.348-2.56-2.648-1.151c-1.77 4.07-3.504 9.25-5.23 15.261-3.009 10.508-5.966 23.54-8.72 37.211-8.257 41-14.675 87.719-14.683 87.75l2.86.39 1.038-2.69c-45.683-17.56-88.691-22.31-121.875-22.31-39.168 0-64.664 6.61-64.84 6.65l.727 2.8 2.883-.172-8.856-149.05-2.882.18.574 2.82-.574-2.82"
          />
          <path
            fill="#010101"
            d="m621.492 2838.262.809 21.957c1.136.46 2.304.91 3.515 1.36l-.714-23.669c-1.23.121-2.43.23-3.61.352M603.262 2840.691l.648 10.739c1.13.629 2.336 1.289 3.617 1.96l-.715-13.269a157.22 157.22 0 0 0-3.55.57M639.652 2836.922l.207 29.328c1.246.36 2.536.691 3.82 1.031l-.214-30.5c-1.281.04-2.555.078-3.813.14M746.352 2848.879l-4.16 19.441c1.148-.25 2.28-.48 3.43-.742l4.023-17.777c-1.102-.32-2.188-.61-3.293-.922M766.14 2855.04c-1.09-.38-2.163-.72-3.245-1.09l-2.649 9.788c1.246-.367 2.465-.699 3.723-1.078l2.172-7.62M694.176 2838.781l-2.84 34.84c1.125.008 2.27 0 3.41 0l2.984-34.441c-1.199-.149-2.367-.27-3.554-.399M658.031 2836.578l-.554 33.781c1.125.211 2.27.41 3.425.602l.758-34.32c-1.226-.032-2.433-.04-3.629-.063M676.234 2837.21l-1.62 35.54c.991.09 2.038.16 3.05.238l2.043-35.547c-1.16-.09-2.32-.152-3.473-.23M712 2841.27l-3.719 31.878c1.024-.058 2.07-.168 3.114-.25l4.003-31.046c-1.144-.204-2.27-.391-3.398-.582M729.492 2844.66l-4.242 26.73c1.063-.152 2.164-.35 3.238-.53l4.348-25.419c-1.121-.27-2.234-.52-3.344-.78"
          />
          <path
            fill="#010101"
            d="m606.813 2840.121-7.942-148.672c-1.656.223-3.191.442-4.617.653l9.008 148.59c1.113-.192 2.297-.383 3.55-.57M732.836 2845.43l24.773-144.86c-1.683-.48-3.367-.89-5.054-1.34l-23.063 145.43c1.113.25 2.227.5 3.344.77M749.652 2849.8l31.918-140.96c-1.617-.64-3.234-1.309-4.87-1.91l-30.345 141.949c1.094.3 2.18.601 3.297.922M766.14 2855.04l26.876-94.68c3.699-17.15 7.668-32.29 11.52-41.141-1.493-.79-3.048-1.43-4.552-2.188l-37.09 136.918c1.083.371 2.157.711 3.247 1.09M697.73 2839.18l12.832-148.23c-1.437-.18-2.87-.38-4.304-.552l-12.082 148.383c1.183.13 2.355.239 3.554.399M715.395 2841.852l18.94-146.891c-1.698-.352-3.41-.691-5.124-1.012L712 2841.262c1.125.199 2.258.386 3.395.59M625.098 2837.91l-4.489-148.77c-1.554.141-3.105.27-4.574.4l5.457 148.722c1.18-.133 2.375-.23 3.606-.352M679.703 2837.441l8.508-148.722c-1.738-.13-3.45-.23-5.156-.32l-6.825 148.812c1.153.07 2.317.148 3.473.23M643.465 2836.77l-1.04-148.88c-1.28.04-2.581.098-3.827.141l1.062 148.88c1.235-.04 2.524-.09 3.805-.141M661.66 2836.64l3.266-148.96c-1.5-.02-2.969-.04-4.446-.051l-2.449 148.95c1.2.01 2.407.023 3.63.062M578.242 2689.34l.059-.012c.281-.09 1.61-.476 3.886-1.047l-.613-2.422c-2.64.672-4.039 1.102-4.058 1.102l.726 2.379M585.309 2687.52c2.16-.508 4.796-1.09 7.87-1.692l-.484-2.45c-3.101.622-5.765 1.2-7.957 1.712Zm11.035-2.301c2.43-.45 5.082-.899 7.945-1.348l-.383-2.46c-2.89.448-5.562.91-8.015 1.359Zm11.133-1.828c2.523-.371 5.191-.73 7.992-1.063l-.293-2.476c-2.828.34-5.516.699-8.059 1.07Zm11.199-1.43c2.57-.29 5.246-.55 8.023-.79l-.21-2.48c-2.798.239-5.497.508-8.087.79Zm11.238-1.05c2.606-.2 5.29-.38 8.05-.532l-.136-2.48c-2.777.152-5.48.32-8.101.53Zm11.274-.692c2.62-.11 5.308-.2 8.058-.258l-.055-2.492c-2.77.062-5.476.152-8.117.27l.114 2.491Zm11.285-.32c1.55-.02 3.12-.028 4.71-.028 1.11 0 2.227 0 3.356.02l.024-2.493c-1.137-.02-2.262-.02-3.38-.02-1.601 0-3.18.013-4.742.032Zm11.293.03c2.64.051 5.328.13 8.058.243l.102-2.492c-2.75-.11-5.457-.192-8.117-.239Zm11.285.38c2.644.132 5.328.293 8.05.492l.176-2.492c-2.738-.188-5.441-.36-8.105-.489Zm11.265.73c2.645.211 5.325.461 8.032.742l.257-2.48c-2.73-.281-5.425-.531-8.09-.742Zm11.243 1.082c2.636.3 5.308.617 8.004.98l.332-2.46c-2.715-.371-5.403-.7-8.06-.993Zm11.199 1.43c2.633.379 5.289.789 7.969 1.23l.41-2.453c-2.7-.45-5.375-.867-8.028-1.25Zm11.148 1.777c2.621.461 5.266.953 7.93 1.48l.484-2.437a338.124 338.124 0 0 0-7.98-1.5Zm11.09 2.121a354.8 354.8 0 0 1 7.879 1.73l.559-2.417a338.699 338.699 0 0 0-7.93-1.75Zm11.02 2.473c2.59.629 5.195 1.289 7.816 1.976l.637-2.41c-2.64-.699-5.266-1.36-7.871-1.988Zm10.93 2.816c2.57.711 5.156 1.453 7.753 2.223l.711-2.383a320.159 320.159 0 0 0-7.805-2.238Zm10.84 3.16a387.26 387.26 0 0 1 7.679 2.473l.789-2.371c-2.59-.86-5.168-1.691-7.734-2.48Zm10.734 3.5c2.523.872 5.054 1.774 7.597 2.711l.86-2.34a452.217 452.217 0 0 0-7.649-2.73Zm10.617 3.84c2.496.942 5 1.922 7.508 2.942l.937-2.309a376.785 376.785 0 0 0-7.562-2.96Zm10.492 4.16a440.636 440.636 0 0 1 7.414 3.18l1.008-2.277a428.665 428.665 0 0 0-7.465-3.2l-.957 2.297M805.992 2711.898c1.254.57 2.504 1.141 3.762 1.73l1.05-2.257a326.21 326.21 0 0 0-3.784-1.742l-1.028 2.27M2249.828 2806.55l-2.539-1.378 1.39.75-1.35-.82-.04.07 1.39.75-1.35-.82-.028.039c-.153.23-1.02 1.437-3.39 3.23-3.56 2.68-10.5 6.66-23.38 10.48-12.883 3.82-31.672 7.489-58.86 9.579-18.69 1.441-33.882 1.98-46.183 1.98-19.308 0-31.449-1.34-38.668-2.648-3.61-.66-6-1.313-7.43-1.774-.718-.226-1.199-.41-1.492-.527-.136-.063-.226-.102-.27-.121l-.038-.02-.64 1.301.671-1.281-.031-.02-.64 1.301.671-1.281-1.34 2.558 2.89-.109s-.062-1.578-.171-4.27l-2.89.122 1.53 2.449c14.38-8.961 39.989-18.77 81.782-23.5 16.226-1.852 30.098-2.57 41.879-2.57 21.21 0 35.597 2.332 44.62 4.62 4.509 1.15 7.68 2.282 9.688 3.11 1 .41 1.72.75 2.16.98.231.11.391.192.481.239l.09.062.02-.043-.02.043.02-.043-.02.043 1.488-2.48-2.539-1.38 2.54 1.38 1.48-2.48c-.5-.301-16.758-9.833-60.008-9.821-12.012 0-26.11.73-42.531 2.602-42.41 4.808-68.801 14.77-84.18 24.34a2.897 2.897 0 0 0-1.36 2.57c.06 1.34.098 2.398.13 3.129.019.718.038 1.109.038 1.109a2.854 2.854 0 0 0 1.543 2.45c.34.179 3.188 1.6 10.848 2.991 7.66 1.387 20.121 2.75 39.7 2.75 12.472 0 27.812-.562 46.632-2 39.059-3.011 61.34-9.23 74.05-14.863 6.34-2.816 10.298-5.488 12.72-7.558 2.418-2.06 3.3-3.508 3.468-3.84a2.885 2.885 0 0 0-1.05-3.86l-1.48 2.48"
          />
          <path
            fill={color}
            d="M2311.371 2540.18c0 40.14-8.543 78.539-16.23 100.78-3.11 9.13-27.43 37.54-32.97 57.231-7.862 28.18-13.862 53.649-12.362 108.34 0 0-25.579-15.36-100.72-6.812-42.1 4.793-68.089 14.66-82.987 23.902-.75-16.973 21.609-34.93 9.82-58.5-2.652-5.371-37.711-42.101-41-47.812-13.461-23.618-23.973-66.07-26.684-107.938-3.41-52.09 5.09-82.012-7.68-127.23-9.48-33.43-25-55.73-45.57-141.32.75-13.91 1.332-24.602 1.73-29.79 11.731-167.37 13.063-503.59 13.063-503.59.57-42.8.508-88.191.457-145.312-.058-19.52-.058-40.36-.117-63v-2.078c-.062-86.692 2.598-118.621 3.527-158.41l1.614-3.063 128.207-363.027c1.101 1.558 2.14 3.058 3.12 4.62.173.227.352.52.462.75 14.96 26.048 32.687 88.13 35.11 96.618v.063c.12.628.23.918.23.918 18.25 65.902 38.347 148.082 46.84 230.89.34 3.352.699 6.7 1.039 10.05 4.449 44.009 6.98 93.15 9.242 139.349 3.347 68.55 6.117 130.75 13.808 160.32 12.809 49.492 35.852 99.851 37.54 161.36 1.718 61.44-6.82 65.722 5.128 101.581 11.953 35.86 34.133 93.04 35.864 169.852.75 33.43-.75 70.738-1.73 106.547-1.27 46.55-18.77 84.953-12.013 114.812 11.961 52.957 33.262 129.77 33.262 169.899"
          />
          <path
            fill="#010101"
            d="M2311.371 2540.18h-2.89c.007 19.87-2.11 39.34-5.18 56.601-3.07 17.25-7.102 32.29-10.88 43.23l-.01.009c-.27.832-.923 2.171-1.852 3.77-1.618 2.812-4.079 6.5-6.91 10.66-4.239 6.241-9.329 13.581-13.84 21.03-2.258 3.73-4.368 7.489-6.168 11.168-1.79 3.692-3.27 7.293-4.25 10.762-3.532 12.66-6.711 24.871-9.012 39.442-2.29 14.57-3.688 31.457-3.688 53.507 0 5.121.079 10.532.23 16.25l2.888-.078 1.492-2.48c-.512-.301-16.73-9.82-59.942-9.813-12.03 0-26.14.73-42.597 2.614-42.403 4.828-68.793 14.777-84.184 24.32l1.524 2.45 2.886-.122c-.008-.238-.02-.48-.02-.719 0-2.8.723-5.812 1.903-9.043 1.758-4.84 4.55-10.097 6.95-15.797 2.39-5.703 4.417-11.91 4.429-18.71 0-4.903-1.078-10.083-3.75-15.403l.012.012c-.301-.59-.653-1.121-1.102-1.75-.84-1.18-2.012-2.64-3.469-4.39-2.55-3.052-5.953-6.91-9.66-11.071-5.582-6.25-11.87-13.18-17.02-18.98-2.562-2.887-4.85-5.5-6.59-7.59-.87-1.04-1.612-1.938-2.171-2.68-.559-.719-.96-1.3-1.078-1.52v.02c-6.524-11.45-12.473-27.777-17.07-46.39-4.602-18.618-7.883-39.548-9.23-60.31-.673-10.218-.872-19.59-.872-28.398 0-14.37.55-27.27.55-39.992 0-18.91-1.25-37.43-7.46-59.43-2.399-8.48-5.192-16.238-8.309-24.398-4.691-12.25-10.14-25.43-16.351-43.563-6.211-18.136-13.192-41.226-20.88-73.25l-2.812.672 2.883.16c.75-13.91 1.34-24.609 1.73-29.73v-.02c5.868-83.8 9.13-209.71 10.938-314.71 1.79-105 2.133-189.06 2.133-189.07v.03c.398-30.082.488-61.421.488-97.199 0-15.172-.02-31.14-.031-48.152v-.008c-.07-19.512-.07-40.36-.117-63v.008-4.77c0-84.609 2.597-116.18 3.527-155.66l-2.89-.058 2.55 1.34 1.621-3.06a6.17 6.17 0 0 0 .16-.382l128.211-363.027-2.722-.961-2.36 1.66c1.09 1.55 2.102 3.008 3.04 4.5l.132.2.098.14.043.078.008.012.039-.02-.04.02.04-.02-.04.02.11.218c3.621 6.301 7.512 14.97 11.281 24.512 5.66 14.32 11.11 30.61 15.36 44.098 4.242 13.5 7.3 24.191 8.21 27.36l2.77-.79h-2.89v.063c0 .168.02.367.05.539.16.789.309 1.25.38 1.418l2.69-1.04-2.78.77c18.23 65.82 38.288 147.86 46.75 230.422v-.012c.34 3.36.69 6.711 1.038 10.051 4.43 43.898 6.973 93.012 9.223 139.2 1.68 34.28 3.207 66.98 5.29 94.85 1.038 13.938 2.21 26.68 3.609 37.81 1.41 11.128 3.03 20.66 5 28.25 6.46 24.921 15.43 49.89 22.968 76.242 7.543 26.347 13.653 54.058 14.48 84.468.173 6.032.243 11.5.243 16.508 0 23.89-1.602 37.043-1.602 49.133-.007 5.527.34 10.828 1.352 16.687 1.008 5.864 2.68 12.262 5.289 20.09 6 17.992 14.488 41.14 21.71 69.364 7.212 28.218 13.15 61.488 14.009 99.628.14 6.282.203 12.7.203 19.23 0 28.08-1.14 58.099-1.942 87.18-.52 19.25-3.859 37.169-7.12 53.782-3.25 16.617-6.419 31.918-6.43 46.039 0 5.41.468 10.648 1.61 15.71 6 26.54 14.312 58.97 21.12 89.74 3.399 15.39 6.43 30.359 8.602 43.94 2.168 13.59 3.476 25.797 3.468 35.579h5.782c0-10.282-1.364-22.72-3.551-36.489-3.3-20.632-8.512-44.222-14.012-67.62-5.5-23.4-11.3-46.622-15.77-66.43-1.038-4.551-1.48-9.36-1.48-14.43-.008-13.242 3.063-28.281 6.332-44.93 3.258-16.652 6.688-34.922 7.23-54.73.79-29.04 1.93-59.102 1.93-87.34 0-6.563-.062-13.031-.203-19.36-.867-38.66-6.886-72.39-14.187-100.921-7.29-28.54-15.871-51.899-21.82-69.77-2.551-7.629-4.13-13.738-5.083-19.25-.937-5.5-1.27-10.41-1.27-15.7-.007-11.55 1.602-24.991 1.602-49.132 0-5.058-.07-10.59-.242-16.668-.847-31.09-7.097-59.32-14.699-85.898-7.61-26.582-16.57-51.532-22.93-76.102-1.87-7.2-3.48-16.539-4.859-27.52-4.16-32.98-6.352-80.812-8.86-132.218-2.25-46.203-4.788-95.39-9.25-139.5v-.012c-.34-3.351-.699-6.7-1.03-10.039-8.532-83.082-28.669-165.402-46.93-231.371-.04-.11-.051-.148-.09-.262l-1.488.57 1.507-.5-.02-.07-1.487.57 1.507-.5v-.027c-.02-.05-.058-.21-.109-.472l-2.84.543h2.89v-.063c0-.27-.038-.527-.109-.789-1.222-4.262-6.27-21.941-12.902-41.852-3.309-9.949-7.02-20.457-10.848-30.148-3.84-9.691-7.78-18.54-11.64-25.262l-2.5 1.434 2.62-1.211c-.241-.5-.48-.871-.78-1.281l-2.301 1.742 2.441-1.531c-1.031-1.641-2.09-3.18-3.203-4.75a2.88 2.88 0 0 0-5.078.7l-128.14 362.83-1.52 2.868c-.2.39-.32.84-.328 1.281-.922 39.27-3.532 71.07-3.532 155.79V1599.14c.06 22.63.06 43.481.122 63 .02 17 .027 32.97.027 48.141 0 35.77-.09 67.09-.488 97.117v.032s0 1.308-.012 3.808c-.098 18.774-.61 104.473-2.469 205.09-1.87 100.613-5.082 216.152-10.57 294.5v-.02c-.399 5.262-.98 15.942-1.73 29.864-.02.27.011.566.07.828 10.308 42.89 19.379 70.012 27.05 90.55 3.829 10.27 7.31 18.88 10.41 26.97 3.098 8.101 5.81 15.671 8.141 23.91 6.028 21.379 7.239 39.191 7.25 57.86 0 12.538-.562 25.472-.562 39.991 0 8.899.21 18.399.89 28.778 1.371 21.113 4.7 42.34 9.391 61.312 4.7 18.98 10.73 35.688 17.66 47.86v.019c.32.54.692 1.07 1.168 1.71.89 1.18 2.121 2.68 3.621 4.438 5.242 6.16 13.82 15.582 21.38 24.024 3.773 4.207 7.292 8.18 9.972 11.348 1.34 1.582 2.48 2.96 3.32 4.039.418.55.758 1.02 1.02 1.39.25.36.41.64.437.7l.012.011c2.27 4.559 3.129 8.75 3.129 12.82 0 3.758-.75 7.418-1.93 11.051-1.77 5.457-4.508 10.797-6.89 16.13-1.188 2.66-2.29 5.327-3.098 8.05-.82 2.71-1.352 5.48-1.352 8.32 0 .32.012.649.02.969.05 1.02.633 1.95 1.543 2.43a2.9 2.9 0 0 0 2.867-.102c14.402-8.937 40-18.738 81.793-23.5 16.25-1.848 30.148-2.566 41.937-2.566 21.18 0 35.563 2.328 44.563 4.617 4.508 1.14 7.668 2.27 9.668 3.101 1.012.41 1.719.75 2.172.97.218.12.379.198.468.25l.09.05.032-.04-.032.04.032-.04-.032.04c.91.55 2.032.559 2.95.02a2.87 2.87 0 0 0 1.43-2.57c-.16-5.669-.231-11.02-.231-16.09 0-21.81 1.37-38.372 3.62-52.61 2.24-14.25 5.352-26.191 8.86-38.79v.009c1.281-4.57 3.75-9.88 6.79-15.34 4.57-8.2 10.421-16.75 15.452-24.117 2.508-3.692 4.82-7.082 6.668-10.032.93-1.48 1.75-2.851 2.422-4.101.68-1.258 1.219-2.39 1.598-3.488l-.008.007c3.91-11.289 7.988-26.57 11.11-44.109 3.12-17.539 5.28-37.328 5.28-57.61h-2.89"
          />
          <path
            fill="#CDCCCB"
            d="M2154.93 2812.172c63.77-6.113 98.039 6.168 98.039 6.168s-18.918 20.48-89.64 26.031c-65.798 5.168-92.74-6.52-97.72-14.902 14.38-8.719 43.993-12.957 89.32-17.297"
          />
          <path
            fill="#B2B2B2"
            d="M2068.102 2836.031c-3.622-2.011-5.903-4.082-7.024-5.992a36.96 36.96 0 0 1 1.672-.95c-.09.622.031 1.27.379 1.852.691 1.168 1.64 2.278 2.812 3.348.649.59 1.36 1.172 2.16 1.742"
          />
          <path
            fill="#8F8E8E"
            d="M2084.441 2837.18c-4.882-1.48-8.601-3.13-11.27-4.73-1.23-.74-2.241-1.47-3.042-2.16 2.8-1.368 6.121-2.65 9.98-3.83 8.032-2.472 18.332-4.519 30.852-6.35 12.52-1.829 27.27-3.438 44.25-5.07 12.598-1.212 24.039-1.688 34.27-1.688 20.57 0 36.257 1.949 46.78 3.886 4.458.82 7.989 1.64 10.567 2.313-2.828 1.93-7.297 4.539-13.93 7.34-4.367 1.84-9.668 3.75-16.046 5.59.359-4.083-3.372-11.872-37.102-11.872-5.29 0-11.309.192-18.18.621-42.34 2.641-70.672 8.68-77.129 15.95"
          />
          <path
            fill="#010101"
            d="m2154.93 2812.172.28 2.867c12.599-1.21 24.04-1.687 34.27-1.687 20.57 0 36.258 1.949 46.782 3.886 5.258.973 9.226 1.942 11.86 2.653 1.32.359 2.3.66 2.948.859.32.11.559.18.72.238l.16.051.038.02.34-.938-.34.938.34-.938-.34.938.98-2.72-2.128-1.96 1.02.941-1-.949-.02.008 1.02.941-1-.949c-.02.008-4.66 4.91-17.962 10.52-13.289 5.597-35.238 11.89-69.796 14.597-11.16.883-21.192 1.262-30.153 1.262-21.789.012-37.34-2.29-47.8-5.36-5.227-1.53-9.18-3.261-11.977-4.94-1.39-.84-2.5-1.66-3.344-2.43-.84-.758-1.398-1.461-1.738-2.032l-2.48 1.48 1.492 2.473c3.308-2.011 7.648-3.84 13.007-5.48 8.032-2.473 18.332-4.52 30.852-6.352 12.52-1.828 27.27-3.437 44.25-5.07l-.281-2.867-.27-2.883c-22.7 2.18-41.488 4.332-56.512 7.05-7.507 1.36-14.078 2.86-19.738 4.602-5.66 1.739-10.41 3.707-14.3 6.059a2.89 2.89 0 0 0-.981 3.941c.691 1.168 1.64 2.278 2.812 3.348 2.059 1.883 4.848 3.652 8.47 5.313 5.448 2.476 12.788 4.699 22.417 6.32 9.64 1.61 21.55 2.61 36.121 2.61 9.13 0 19.301-.391 30.602-1.282 35.62-2.8 58.34-9.36 72.25-15.32 13.91-5.961 19-11.32 19.289-11.63.648-.71.91-1.71.68-2.652a2.892 2.892 0 0 0-1.829-2.027c-.27-.101-22.59-8.043-64.46-8.043-10.422 0-22.04.492-34.82 1.711l.269 2.883"
          />
          <path
            fill={color}
            d="M2252.89 2843.121s-68.902 56.719-184.94 15.55c98.69-37.94 184.94-15.55 184.94-15.55"
          />
          <path
            fill="#B2B2B2"
            d="M2252.89 2843.121c-.331-.09-12.992-3.332-33.992-5.223.774-.226 1.524-.449 2.262-.68 20.34 1.743 31.73 5.891 31.73 5.891v.012"
          />
          <path
            fill="#8F8E8E"
            d="M2199.16 2836.719c-1.27-.04-2.558-.07-3.86-.098 1.68-.062 3.329-.101 4.95-.121-.36.07-.73.14-1.09.219"
          />
          <path
            fill="#010101"
            d="M2218.898 2837.898a323.293 323.293 0 0 0-19.738-1.18c.36-.077.73-.148 1.09-.218 1.02-.012 2.031-.02 3.031-.02 6.547 0 12.528.29 17.88.739-.74.23-1.49.453-2.263.68"
          />
          <path
            fill="#243342"
            d="M2194.43 2867.89c36.82-21.769-21.782-29.402-21.782-29.402a246.334 246.334 0 0 1 22.653-1.867c1.3.027 2.59.059 3.86.098 7.19.21 13.8.64 19.737 1.18 21 1.89 33.66 5.132 33.993 5.222l-58.461 24.77M2121.36 2871.25l-53.41-12.578c21.87-8.262 64.1-17.41 64.1-17.41-55.152 18.918-10.69 29.988-10.69 29.988"
          />
          <path
            fill="#010101"
            d="m2252.89 2843.121-1.831-2.23.21.257-.21-.257.21.257-.21-.257c-.13.097-9.309 7.59-26.47 15.03-17.167 7.438-42.288 14.849-74.378 14.849-23.48 0-50.7-3.961-81.3-14.82l-.962 2.722 1.031 2.7c44.86-17.25 87.16-21.93 119.801-21.923 19.258 0 35.149 1.621 46.2 3.25 5.53.813 9.847 1.621 12.769 2.223 1.469.297 2.578.547 3.32.726.38.09.649.153.84.204.09.02.16.039.2.046l.05.012h.012l.719-2.789-1.832-2.23 1.832 2.23.73-2.8c-.18-.04-25.68-6.65-64.84-6.65-33.191 0-76.191 4.75-121.87 22.31a2.872 2.872 0 0 0-1.852 2.73 2.87 2.87 0 0 0 1.921 2.68c31.2 11.07 59.098 15.148 83.23 15.148 33.24 0 59.321-7.738 77.09-15.508 17.778-7.761 27.27-15.55 27.43-15.68a2.875 2.875 0 0 0 .98-2.851 2.901 2.901 0 0 0-2.089-2.18l-.73 2.801"
          />
          <path
            fill={color}
            d="m2261.75 2694.078-8.86 149.043s-86.242-22.39-184.949 15.55c0 0-14.91-108.433-28.421-139.46 41.12-21.723 87.68-29.441 127.53-31.191 53.372-2.348 94.7 6.058 94.7 6.058"
          />
          <path
            fill="#010101"
            d="m2261.75 2694.078-2.89-.18-8.848 149.051 2.879.172.73-2.8c-.18-.04-25.672-6.65-64.84-6.65-33.18 0-76.191 4.75-121.87 22.31l1.03 2.69 2.86-.39c0-.02-3.73-27.16-9.16-58.203-2.711-15.52-5.852-32.02-9.16-46.629-1.66-7.3-3.36-14.129-5.083-20.129-1.726-6.011-3.457-11.191-5.226-15.261l-2.652 1.152 1.351 2.559c40.559-21.45 86.719-29.141 126.3-30.872 6.49-.277 12.81-.41 18.888-.41 21.793 0 40.601 1.614 53.941 3.223 6.68.8 11.988 1.598 15.621 2.2 1.809.3 3.207.55 4.149.73.468.078.82.148 1.058.199.121.02.203.039.262.05l.082.008.578-2.82-2.89-.18 2.89.18.57-2.828c-.129-.031-32.12-6.531-76.261-6.531-6.16 0-12.559.12-19.137.41-40.121 1.77-87.082 9.52-128.75 31.531a2.902 2.902 0 0 0-1.3 3.711c1.608 3.688 3.3 8.68 4.98 14.54 2.937 10.26 5.867 23.179 8.609 36.76 4.098 20.368 7.758 42.227 10.39 58.99 1.32 8.378 2.38 15.48 3.11 20.487.36 2.512.64 4.493.828 5.84.102.684.172 1.192.223 1.551.047.352.066.52.066.52.121.87.64 1.652 1.402 2.101.75.442 1.68.52 2.5.211 44.872-17.25 87.16-21.93 119.801-21.93 19.258 0 35.149 1.63 46.2 3.25 5.53.82 9.847 1.63 12.769 2.23 1.46.298 2.578.548 3.32.727.371.09.649.153.84.204.09.02.16.039.2.046l.05.012h.012c.828.219 1.719.05 2.418-.46a2.856 2.856 0 0 0 1.18-2.16l8.859-149.04a2.882 2.882 0 0 0-2.309-3l-.57 2.828"
          />
          <path
            fill="#010101"
            d="m2222.559 2838.262-.797 21.957c-1.14.46-2.313.91-3.524 1.36l.723-23.669c1.23.121 2.418.23 3.598.352M2240.79 2840.691l-.642 10.739c-1.128.629-2.34 1.289-3.617 1.96l.707-13.269c1.262.188 2.453.379 3.551.57M2204.398 2836.922l-.199 29.328c-1.25.36-2.539.691-3.82 1.031l.21-30.5c1.282.04 2.56.078 3.81.14M2097.71 2848.879l4.161 19.441c-1.16-.25-2.293-.48-3.441-.742l-4.02-17.777c1.102-.32 2.192-.61 3.3-.922M2077.922 2855.04c1.078-.38 2.156-.72 3.238-1.09l2.649 9.788c-1.25-.367-2.457-.699-3.72-1.078l-2.167-7.62M2149.879 2838.781l2.84 34.84c-1.117.008-2.27 0-3.41 0l-2.98-34.441c1.19-.149 2.362-.27 3.55-.399M2186.02 2836.578l.558 33.781c-1.129.211-2.27.41-3.418.602l-.762-34.32c1.223-.032 2.43-.04 3.622-.063M2167.82 2837.21l1.621 35.54c-.992.09-2.043.16-3.05.238l-2.04-35.547c1.16-.09 2.32-.152 3.47-.23M2132.05 2841.27l3.72 31.878c-1.02-.058-2.07-.168-3.11-.25l-4-31.046c1.14-.204 2.27-.391 3.39-.582M2114.559 2844.66l4.25 26.73c-1.07-.152-2.168-.35-3.239-.53l-4.351-25.419c1.12-.27 2.242-.52 3.34-.78"
          />
          <path
            fill="#010101"
            d="m2237.238 2840.121 7.942-148.672c1.66.223 3.199.442 4.62.653l-9.01 148.59c-1.11-.192-2.29-.383-3.552-.57M2111.219 2845.43l-24.77-144.86c1.68-.48 3.36-.89 5.051-1.34l23.059 145.43c-1.11.25-2.22.5-3.34.77M2094.398 2849.8l-31.918-140.96c1.622-.64 3.239-1.309 4.88-1.91l30.34 141.949c-1.09.3-2.18.601-3.302.922M2077.922 2855.04l-26.883-94.68c-3.7-17.15-7.668-32.29-11.52-41.141 1.493-.79 3.051-1.43 4.551-2.188l37.09 136.918c-1.082.371-2.16.711-3.238 1.09M2146.32 2839.18l-12.832-148.23c1.442-.18 2.883-.38 4.313-.552l12.078 148.383c-1.18.13-2.348.239-3.559.399M2128.66 2841.852l-18.941-146.891c1.703-.352 3.41-.691 5.133-1.012l17.207 147.313c-1.13.199-2.258.386-3.399.59M2218.96 2837.91l4.49-148.77c1.55.141 3.1.27 4.57.4l-5.461 148.722c-1.18-.133-2.368-.23-3.598-.352M2164.352 2837.441l-8.512-148.722c1.738-.13 3.45-.23 5.16-.32l6.82 148.812c-1.148.07-2.308.148-3.468.23M2200.59 2836.77l1.039-148.88c1.281.04 2.582.098 3.832.141l-1.07 148.88c-1.23-.04-2.52-.09-3.801-.141M2182.398 2836.64l-3.27-148.96c1.5-.02 2.974-.04 4.442-.051l2.45 148.95c-1.192.01-2.399.023-3.622.062M2035.621 2716.86l.02-.008c.257-.172 2.66-1.692 7.12-4.012l-1.152-2.211c-4.84 2.512-7.32 4.133-7.347 4.152Zm10.078-5.508c2.153-1.07 4.653-2.25 7.473-3.5l-1-2.282c-2.871 1.27-5.39 2.461-7.57 3.54Zm10.5-4.813c2.36-1 4.91-2.039 7.66-3.098l-.89-2.32a205.037 205.037 0 0 0-7.739 3.129Zm10.75-4.258c2.461-.91 5.063-1.832 7.801-2.75l-.79-2.36c-2.76.93-5.39 1.849-7.87 2.77Zm10.942-3.781c2.53-.809 5.16-1.61 7.91-2.41l-.7-2.39a319.81 319.81 0 0 0-7.972 2.429Zm11.09-3.309c2.57-.722 5.238-1.421 7.988-2.113l-.598-2.406a305.26 305.26 0 0 0-8.062 2.117Zm11.199-2.89a330.82 330.82 0 0 1 8.07-1.813l-.512-2.437c-2.789.59-5.5 1.199-8.129 1.828Zm11.308-2.473c2.653-.527 5.352-1.039 8.133-1.527l-.43-2.45c-2.793.489-5.52 1-8.191 1.528Zm11.39-2.078c2.673-.441 5.392-.86 8.18-1.25l-.347-2.46c-2.8.39-5.55.812-8.23 1.25Zm11.462-1.691c2.68-.348 5.422-.68 8.21-.98l-.269-2.477a367.34 367.34 0 0 0-8.27.988Zm11.5-1.32c2.7-.27 5.45-.509 8.238-.72l-.187-2.48c-2.813.211-5.582.45-8.29.723Zm11.539-.958c2.71-.18 5.46-.332 8.262-.46l-.11-2.493c-2.82.133-5.59.293-8.32.473Zm11.57-.601c2.711-.102 5.473-.168 8.27-.22l-.04-2.491c-2.82.05-5.59.12-8.327.222Zm11.582-.258c1.07-.012 2.149-.012 3.23-.012 1.669 0 3.348.012 5.04.031l.027-2.492c-1.7-.02-3.387-.027-5.066-.027-1.09 0-2.172 0-3.25.008Zm11.578.066c2.72.063 5.48.14 8.27.25l.101-2.488c-2.808-.11-5.582-.191-8.32-.25Zm11.582.403c2.72.129 5.48.289 8.258.468l.172-2.48c-2.8-.188-5.57-.348-8.312-.48Zm11.559.71c2.719.2 5.469.43 8.25.688l.23-2.48c-2.789-.258-5.558-.489-8.289-.7Zm11.55 1.008c2.712.27 5.45.57 8.22.903l.3-2.473c-2.789-.328-5.539-.629-8.27-.91Zm11.509 1.313c2.71.34 5.441.707 8.203 1.098l.36-2.461c-2.782-.399-5.52-.77-8.25-1.11Zm11.48 1.59c2.7.41 5.43.84 8.172 1.297l.418-2.45c-2.758-.468-5.5-.898-8.219-1.308Zm11.441 1.867c1.13.191 2.258.402 3.399.601l.45-2.449c-1.15-.203-2.29-.41-3.419-.61l-.43 2.458"
          />
          <path
            fill={color}
            d="m2103.469 1072.55-128.207 363.02-1.614 3.07c-.93 39.79-3.59 71.72-3.527 158.41v2.079c.059 22.633.059 43.492.117 63 0 16.691.051 32.351.051 47.242 0 35.348-.11 66.36-.508 96.098 0 0-1.332 336.23-13.062 503.59-.399 5.261-4.73 16.23-1.73 29.863 29.28 133.398-9.59 191.789-9.59 191.789-.047.18-.047.348-.047.46l-4.051-.46v.46c-39.563 14.388-191.95 60.349-521.32 60.349-329.352 0-481.7-45.961-521.254-60.348-.067-.113-.067-.281-.067-.461 0 0-38.863-58.39-9.578-191.79 2.996-13.632-1.394-24.6-1.738-29.862-11.782-167.36-13.051-503.59-13.051-503.59-.406-29.739-.52-60.75-.52-96.098 0-32.39.114-68.371.176-110.242v-2.078c.055-86.742-2.488-121.68-3.469-161.48l-6.171-17.38-119.262-350.261c-1.215.93-2.371 2.02-3.41 3.12 33.386-47.53 87.957-83.222 133.347-103.03 19.809-8.66 236.606-99.442 247.407-104.301 15.308 7.261 73.48 2.101 127.28-3.059 43.86-4.2 84.817-8.398 97.317-5.89 0 0 345.293 24.03 373.121 10.859 10.813 4.851 229.102 93.73 248.922 102.39 45.91 20.04 101.117 56.25 134.438 104.532"
          />
          <path
            fill="#010101"
            d="m2103.469 1072.55-2.719-.96-128.14 362.832-1.52 2.867c-.2.39-.32.84-.328 1.281-.91 39.239-3.532 71.032-3.532 155.61v4.949c.06 22.64.06 43.492.122 63.012v-.012c0 16.7.058 32.351.058 47.242 0 35.34-.12 66.34-.52 96.07v.02c0 .008 0 1.309-.011 3.82-.098 18.758-.61 104.469-2.469 205.09-1.86 100.61-5.082 216.149-10.57 294.488v-.02c-.05.75-.238 1.852-.512 3.173-.398 1.976-.969 4.476-1.437 7.36-.47 2.878-.84 6.148-.84 9.73 0 3.25.308 6.75 1.12 10.437 7.97 36.313 10.849 66.992 10.849 92.383 0 33.7-5.079 58.09-10.122 74.02-2.52 7.956-5.027 13.796-6.886 17.628a67.633 67.633 0 0 1-2.23 4.239c-.262.46-.473.8-.602 1.02a3.71 3.71 0 0 0-.149.23l-.031.05.98.66-.98-.66.98.66-.98-.66a3.14 3.14 0 0 0-.352.72c-.109.35-.148.651-.168.882-.02.23-.02.398-.02.46h2.892l.32-2.862-4.043-.47a2.913 2.913 0 0 0-2.25.72 2.884 2.884 0 0 0-.969 2.152v.46h2.89l-.98-2.71c-39.18 14.238-191.242 60.18-520.34 60.168-329.09.012-481.093-45.93-520.27-60.168l-.983 2.71 2.527-1.39-2.055 1.13 2.344-.24c-.02-.12-.035-.41-.29-.89l-2.054 1.13 2.344-.24-1.27.13 1.274-.031-.004-.098-1.27.129 1.274-.031v-.06a2.95 2.95 0 0 0-.48-1.6l-.993.66.992-.649v-.012l-.992.66.992-.648c-.043-.082-20.015-30.32-20.023-97.191 0-25.39 2.887-56.07 10.86-92.39.804-3.661 1.109-7.142 1.109-10.368 0-4.793-.668-9.031-1.348-12.524-.34-1.75-.684-3.296-.945-4.617-.27-1.32-.45-2.422-.492-3.152l-.004-.02c-5.88-83.57-9.145-209.449-10.934-314.398-.894-52.48-1.422-99.73-1.726-133.86-.153-17.07-.247-30.851-.305-40.37-.028-4.762-.047-8.45-.063-10.95-.011-2.511-.015-3.812-.015-3.82v-.031c-.407-29.72-.52-60.72-.52-96.059 0-32.39.113-68.371.176-110.242v-2.078c0-.88.004-1.75.004-2.61 0-84.89-2.508-119.64-3.473-158.941a3.062 3.062 0 0 0-.164-.89l-6.172-17.372L747.777 1067a2.88 2.88 0 0 0-1.886-1.828 2.884 2.884 0 0 0-2.59.457c-1.39 1.062-2.645 2.262-3.758 3.43l2.094 1.992 2.363 1.66c16.46-23.441 38.227-44.05 61.523-61.25 23.293-17.191 48.114-30.973 70.618-40.79 2.445-1.07 8.004-3.44 15.843-6.76 27.45-11.622 82.973-34.942 132.805-55.891a56134.229 56134.229 0 0 0 66.281-27.88c8.93-3.761 16.45-6.93 22.04-9.3 2.788-1.18 5.1-2.168 6.859-2.918 1.77-.762 2.972-1.281 3.601-1.563l-1.18-2.64-1.242 2.61c1.633.773 3.512 1.37 5.66 1.862 3.223.73 7.032 1.22 11.391 1.547 4.371.32 9.27.461 14.63.461 12.952 0 28.55-.84 45.25-2.09 25.062-1.87 52.62-4.68 77.343-7.007 12.367-1.172 24.02-2.223 34.289-2.98 10.27-.763 19.16-1.224 25.937-1.224 2.391 0 4.512.063 6.332.18 1.81.113 3.32.3 4.442.524.117.027.25.039.367.046.012 0 53.2 3.704 119.52 7.41 66.332 3.704 145.77 7.403 198.382 7.403 14.418 0 26.82-.281 36.438-.922 4.82-.32 8.93-.719 12.293-1.25 1.68-.258 3.168-.55 4.476-.879 1.313-.332 2.442-.7 3.454-1.172l-1.243-2.61-1.18 2.634c.743.34 2.22.957 4.43 1.886 16.5 6.91 72.993 30.012 127.692 52.403 27.347 11.199 54.25 22.219 75.469 30.949 10.609 4.36 19.8 8.148 26.91 11.102 7.12 2.949 12.172 5.07 14.441 6.058 22.758 9.942 47.867 23.91 71.379 41.36 23.512 17.44 45.422 38.37 61.84 62.171l2.379-1.64-2.719-.961 2.719.96 2.37-1.64c-16.89-24.469-39.25-45.789-63.148-63.531-23.91-17.738-49.363-31.899-72.511-42.008-2.52-1.101-8.09-3.43-15.989-6.7-27.613-11.452-83.492-34.312-133.652-54.85-25.078-10.27-48.73-19.95-66.7-27.333-8.987-3.699-16.55-6.808-22.16-9.129-2.808-1.168-5.12-2.129-6.878-2.87a133.345 133.345 0 0 1-3.5-1.489 2.883 2.883 0 0 0-2.422.02c-.488.242-1.32.52-2.39.789-1.887.48-4.54.921-7.81 1.293-9.82 1.097-25.167 1.59-43.988 1.59-52.37 0-131.78-3.704-198.062-7.403-33.14-1.848-63-3.7-84.578-5.078-10.79-.7-19.5-1.281-25.52-1.68-3.011-.203-5.351-.36-6.93-.472l-2.41-.168-.203 2.879.57-2.829c-1.488-.3-3.218-.492-5.206-.62-1.98-.13-4.223-.192-6.704-.192-9.367 0-22.226.84-37.128 2.09-22.329 1.87-49.18 4.672-75.258 7.011-26.063 2.329-51.364 4.2-70.434 4.2-7 0-13.156-.258-18.156-.809-2.5-.281-4.711-.64-6.57-1.062-1.872-.43-3.383-.93-4.473-1.45a2.875 2.875 0 0 0-2.418-.02c-.633.282-2.121.923-4.29 1.852-16.382 7-72.51 30.579-126.855 53.418-27.171 11.422-53.902 22.653-75 31.54-10.55 4.44-19.691 8.3-26.777 11.312-7.09 3-12.11 5.14-14.46 6.16-22.888 9.988-48.048 23.969-71.735 41.45-23.684 17.48-45.895 38.48-62.82 62.57a2.88 2.88 0 0 0 .535 3.89 2.882 2.882 0 0 0 3.921-.242c.97-1.02 2.024-2.02 3.063-2.809l-1.746-2.3-2.735.93 119.262 350.261.012.04 6.176 17.378 2.718-.969-2.886.07c.972 39.489 3.468 74.008 3.468 158.801v4.688-.008c-.062 41.867-.175 77.848-.175 110.25 0 35.348.113 66.379.52 96.14v-.03c0 .007.316 84.078 2.109 189.078 1.789 105 5.05 230.91 10.949 314.71v-.019c.082 1.23.312 2.5.59 3.91.422 2.102.968 4.488 1.406 7.18.441 2.68.773 5.64.773 8.832a42.22 42.22 0 0 1-.972 9.129c-8.055 36.699-10.992 67.8-10.992 93.629-.008 68.57 20.71 99.98 20.988 100.379l2.402-1.598h-2.887c0 .09-.003.258.024.539.035.29.082.719.402 1.32a2.842 2.842 0 0 0 1.54 1.32c39.937 14.52 192.62 60.52 522.241 60.52 329.63 0 482.372-46 522.31-60.52a2.899 2.899 0 0 0 1.901-2.718v-.461h-2.89l-.332 2.867 4.05.461c.82.102 1.63-.16 2.25-.71.61-.548.961-1.329.961-2.157v-.024h-.011.011-.011.011l-1.57-.039 1.488.48c.082-.269.082-.417.082-.44l-1.57-.04 1.488.48-2.75-.878 2.41 1.598c.27-.399 21-31.82 20.993-100.387 0-25.832-2.942-56.934-10.992-93.621a42.95 42.95 0 0 1-.98-9.2c0-4.242.581-8.07 1.222-11.382.32-1.649.66-3.168.937-4.57.282-1.387.524-2.649.614-3.868v-.011c5.867-83.801 9.136-209.711 10.937-314.711 1.8-105 2.133-189.07 2.133-189.07v.023c.387-29.762.508-60.793.508-96.14 0-14.903-.051-30.552-.051-47.243v-.008c-.07-19.512-.07-40.36-.117-63v.008-4.949c0-84.47 2.597-116.02 3.527-155.48l-2.89-.06 2.55 1.34 1.621-3.058a6.17 6.17 0 0 0 .16-.383l128.211-363.027c.309-.871.18-1.84-.351-2.602l-2.371 1.64"
          />
          <path
            fill="#202020"
            d="M842.262 1253.02s3.582 11.468 8.312 30.308c4.735 18.82 10.461 45.05 14.711 74.371 4.23 29.332 6.153 56.11 6.942 75.5.8 19.41.609 31.422.609 31.422s-1.973-12.52-4.867-31.012c-2.996-20.039-6.922-46.257-11.164-74.68-3.973-28.468-7.637-54.718-10.434-74.788-2.46-18.551-4.11-31.121-4.11-31.121M2001.79 1253.02s-3.58 11.468-8.31 30.308c-4.73 18.82-10.46 45.05-14.71 74.371-4.23 29.332-6.149 56.11-6.942 75.5-.797 19.41-.61 31.422-.61 31.422s1.973-12.52 4.872-31.012c2.988-20.039 6.922-46.257 11.16-74.68 3.969-28.468 7.629-54.718 10.441-74.788 2.45-18.551 4.098-31.121 4.098-31.121"
          />
          <path
            fill="#010101"
            d="m747.68 1060.371 2.633 7.867 2.363-.789-2.637-7.87Zm3.687 11.008 2.637 7.871 2.36-.79-2.634-7.87Zm3.692 11.02 2.632 7.87 2.364-.789-2.637-7.87Zm3.687 11.023 2.637 7.867 2.36-.789-2.634-7.871Zm3.692 11.02 2.636 7.867 2.36-.79-2.637-7.87Zm3.69 11.019 2.634 7.867 2.363-.789-2.637-7.867Zm3.688 11.02 2.637 7.87 2.36-.792-2.633-7.868Zm3.692 11.019 2.633 7.871 2.363-.793-2.637-7.867Zm3.687 11.012 2.637 7.879 2.36-.801-2.633-7.871Zm3.692 11.02 2.636 7.866 2.36-.789-2.637-7.87Zm3.687 11.019 2.637 7.87 2.363-.792-2.636-7.867Zm3.692 11.02 2.636 7.87 2.36-.793-2.633-7.867Zm3.691 11.019 2.633 7.87 2.363-.788-2.637-7.871Zm3.688 11.02 2.636 7.87 2.36-.789-2.633-7.87Zm3.69 11.019 2.638 7.871 2.359-.79-2.637-7.87Zm3.688 11.012 2.637 7.879 2.363-.801-2.636-7.867Zm3.692 11.02 2.637 7.87 2.359-.793-2.637-7.867Zm3.691 11.019 2.633 7.87 2.363-.788-2.636-7.871Zm3.688 11.02 2.636 7.87 2.36-.789-2.633-7.87Zm3.691 11.019 2.637 7.87 2.36-.788-2.637-7.871Zm3.688 11.02 2.636 7.87 2.364-.789-2.637-7.87Zm3.691 11.023 2.637 7.867 2.36-.79-2.638-7.87Zm3.691 11.008 2.633 7.878 2.364-.796-2.637-7.872Zm3.688 11.02 2.637 7.87 2.36-.789-2.634-7.871Zm3.691 11.019 2.633 7.87 2.363-.788-2.636-7.871Zm3.692 11.02 2.633 7.87 2.363-.789-2.637-7.87Zm3.687 11.023 2.637 7.867 2.36-.79-2.633-7.87Zm3.692 11.02 2.633 7.866 2.363-.789-2.637-7.87Zm3.687 11.019 2.637 7.87 2.36-.792-2.634-7.867Zm3.692 11.007 2.632 7.883 2.364-.8-2.637-7.872Zm3.687 11.024 2.637 7.867 2.36-.789-2.634-7.871Zm3.692 11.02 2.636 7.867 2.36-.79-2.633-7.87Zm3.69 11.019 2.274 6.8 2.364-.792-2.278-6.797-2.36.789M2098.09 1067.031l-2.738 7.828 2.347.832 2.742-7.84Zm-3.84 10.957-2.75 7.84 2.352.82 2.75-7.828Zm-3.852 10.973-2.738 7.828 2.352.832 2.738-7.84Zm-3.84 10.969-2.75 7.832 2.352.816 2.75-7.828Zm-3.847 10.96-2.742 7.829 2.351.832 2.739-7.84Zm-3.84 10.97-2.75 7.831 2.348.82 2.75-7.831Zm-3.84 10.96-2.75 7.828 2.348.832 2.75-7.832Zm-3.851 10.97-2.739 7.831 2.348.82 2.742-7.832Zm-3.84 10.96-2.75 7.84 2.351.82 2.75-7.832Zm-3.852 10.969-2.738 7.832 2.352.828 2.738-7.84Zm-3.84 10.96-2.75 7.84 2.352.82 2.75-7.827Zm-3.847 10.97-2.742 7.831 2.351.829 2.738-7.84Zm-3.84 10.972-2.75 7.828 2.348.82 2.75-7.828Zm-3.84 10.957-2.75 7.832 2.348.828 2.75-7.828Zm-3.851 10.973-2.75 7.828 2.351.82 2.75-7.828Zm-3.84 10.96-2.75 7.84 2.351.82 2.75-7.831Zm-3.852 10.97-2.738 7.828 2.351.82 2.739-7.828Zm-3.84 10.96-2.75 7.84 2.352.82 2.75-7.831Zm-3.847 10.97-2.743 7.827 2.352.832 2.738-7.84Zm-3.84 10.968-2.75 7.832 2.347.82 2.75-7.832Zm-3.852 10.96-2.738 7.833 2.348.828 2.742-7.84Zm-3.84 10.97-2.75 7.832 2.352.82 2.75-7.832Zm-3.84 10.96-2.75 7.833 2.352.828 2.75-7.828Zm-3.847 10.97-2.742 7.831 2.351.82 2.739-7.831Zm-3.844 10.96-2.75 7.84 2.352.82 2.75-7.828Zm-3.848 10.973-2.742 7.828 2.352.828 2.738-7.84Zm-3.84 10.957-2.75 7.84 2.348.82 2.75-7.828Zm-3.85 10.973-2.74 7.828 2.348.832 2.743-7.84Zm-3.84 10.968-2.75 7.828 2.35.82 2.75-7.827Zm-3.848 10.961-2.743 7.828 2.352.832 2.738-7.84Zm-3.84 10.969-2.75 7.828 2.347.82 2.75-7.828Zm-3.84 10.96-2.75 7.83 2.348.831 2.75-7.832Zm-3.852 10.97-.648 1.851 2.348.82.652-1.851-2.352-.82"
          />
          <path
            fill="#00000017"
            d="M888.89 2288.5c-.07-1.14-.136-2.29-.206-3.441.125-2.82.25-5.63.379-8.438-.067 4.078-.125 8.04-.172 11.879"
          />
          <path
            fill="#010101"
            d="m888.8 2352.238-1.573-28.988c.41-12.762.902-25.54 1.457-38.191.07 1.152.136 2.3.207 3.441-.47 37.738-.09 63.738-.09 63.738"
          />
          <path
            fill="#00000017"
            d="M889.063 2276.621c.992-60.543 4.218-144.68 13.937-203.02 0 0-9 95.88-13.938 203.02M866.89 2404.11c8.65-27.758-1.956-149.938-1.956-149.938l20.789 78.148.37 6.75a519.95 519.95 0 0 0-2.378 11.52c-4.883 19.488-9.457 35.41-13.719 48.851l-3.105 4.668"
          />
          <path
            fill="#010101"
            d="M869.996 2399.441c4.262-13.441 8.836-29.363 13.719-48.851-.461 2.36-.903 4.7-1.32 7.012l-9.055 36.82-3.344 5.02m16.098-60.372c-.13-2.351-.254-4.601-.371-6.75l.976 3.68a37.762 37.762 0 0 1-.437 2.3c-.055.259-.114.52-.168.77"
          />
          <path
            fill="#010101"
            d="M882.395 2357.602c.418-2.313.859-4.653 1.32-7.012a519.95 519.95 0 0 1 2.379-11.52c.054-.25.113-.511.168-.77.172-.769.316-1.538.437-2.3l.524 1.969-4.828 19.633"
          />
          <path
            fill="#00000017"
            d="M865.918 2045.5c.078-5.5.969-14.262 2.477-25.469-2.04 17.489-2.477 25.469-2.477 25.469M868.395 2020.031c1.101-9.46 2.671-21.71 4.894-36.972l.07 4.28c-2.015 12.29-3.707 23.34-4.964 32.692"
          />
          <path
            fill="#010101"
            d="M873.36 1987.34c-.024-1.43-.048-2.86-.07-4.281l.03-.2.07 4.301c-.011.059-.019.121-.03.18"
          />
          <path
            fill="#00000017"
            d="m878.684 1956.23-.106-7.289c9.215-56.39 25.004-139.8 51.926-256.242-.277 1.332-33.074 157.531-51.82 263.531"
          />
          <path
            fill="#010101"
            d="m873.39 1987.16-.07-4.3a1991.675 1991.675 0 0 1 5.258-33.919l.106 7.29c-1.93 10.917-3.711 21.3-5.293 30.93"
          />
          <path
            fill="#00000017"
            d="M1329.25 2400.578c-43.27 0-85.71-4.2-123.871-14.828.332.05 45.601 6.781 117.86 6.781 86.94 0 212.952-9.742 346.761-52.61-.648.22-176.71 60.657-340.75 60.657M1437.691 2271.96c-1.222-.038-206.351-7.67-300.492-95.76 0 0 108.332 75.402 300.492 95.76M833.188 2522.121c-.079-.832-12.77-142.652-.86-169.883l5.977 135.653v.109l-1.438 9.59a187.18 187.18 0 0 0-2.289 15.25l-1.39 9.281"
          />
          <path
            fill="#010101"
            d="M834.578 2512.84a187.18 187.18 0 0 1 2.29-15.25l-2.29 15.25"
          />
          <path
            fill="#00000017"
            d="M570.387 2354.379c-.035-3.918-.309-7.938-.758-12.04l.523-23.398s30.442-166.21 33.02-192.28c-1.457 21.448-12.121 169.28-32.785 227.718"
          />
          <path
            fill="#010101"
            d="M569.297 2357.36v-.079l.332-14.941c.45 4.101.723 8.12.758 12.039a135.48 135.48 0 0 1-1.09 2.98"
          />
          <path
            fill="#00000017"
            d="m603.172 2126.66.172-2.61c0 .579-.059 1.45-.172 2.61M700.86 2499.93l-.005-.008h.004v.008M700.855 2499.922c-.585-1.23-87.66-185.434-88.117-452.313v-2.078c.196 2.867 16.008 231.27 88.117 454.39M839.059 1955.012c-.942-.25-142.543-37.98-147.684-166.434v-.027c.184 1.46 14.55 111.34 147.684 166.46M595.688 1962.16c.148-.762.285-1.5.414-2.238 1.007-5.852 1.359-11.14 1.355-16.66 0-2.871-.094-5.801-.234-8.922 15.058-26.281 58.925-118.871 59.148-119.328-17.195 92.61-47.785 133.449-60.683 147.148"
          />
          <path
            fill="#010101"
            d="M589.691 1967.82h-.004c2.56-4.289 4.266-28.172 4.266-28.172.832-1.18 1.938-2.988 3.27-5.308.14 3.12.234 6.05.234 8.922.004 5.52-.348 10.808-1.355 16.66-.13.738-.266 1.476-.414 2.238-3.649 3.871-5.88 5.57-5.997 5.66"
          />
          <path
            fill="#00000017"
            d="M872.445 1924.012c-6.035-20.582-21.457-62.453-55.574-103.883.313.223 42.332 30.281 55.274 78.48.09 8.09.19 16.57.3 25.403"
          />
          <path
            fill="#010101"
            d="M872.473 1924.102c-.008-.032-.02-.063-.028-.09-.11-8.832-.21-17.313-.3-25.403.011.04.015.063.027.09.09 8.102.187 16.582.3 25.403"
          />
          <path
            fill="#010101"
            d="M875.773 1937.078c-.035-.18-.949-4.937-3.3-12.976-.114-8.82-.211-17.301-.301-25.403a111.005 111.005 0 0 1 2.746 13.63l.855 24.75"
          />
          <path
            fill="#00000017"
            d="M628.703 1734.21a529.829 529.829 0 0 0 4.848-17.358c1.832-7.063 3.363-15.82 4.695-25.993l46.297-137.09c-.23 1.13-22.473 109.122-55.84 180.442"
          />
          <path
            fill="#010101"
            d="m622.98 1745.852 10.247-40.122 5.02-14.87c-1.333 10.171-2.864 18.93-4.696 25.992a529.829 529.829 0 0 1-4.848 17.359 323.547 323.547 0 0 1-5.723 11.64"
          />
          <path
            fill="#00000017"
            d="M811.746 1726.2c-52.926-175.86-64.883-421.72-64.883-421.72 10.239 153.52 64.778 421.22 64.883 421.72"
          />
          <path
            d="M1090.39 1644.078s-118.742-217.887-142.3-619.668h.004c.183 1.38 52.187 391.711 142.297 619.668"
            style={{
              fill: "rgba(0,0,0,.086)",
            }}
          />
          <path
            d="M1736.602 1865.68c84.707-160.418 90.296-505.45 90.296-505.45 1.364 27.31 2 53.38 2 78.258v.082c.051 301.758-92.296 427.11-92.296 427.11"
            style={{
              fill: "rgba(0,0,0,.106)",
            }}
          />
          <path
            fill="#00000017"
            d="M2009.648 2514.55a189.61 189.61 0 0 0-5.59-30.581l5.801-131.73c10.29 23.511 2.23 132.46-.21 162.312"
          />
          <path
            fill="#010101"
            d="M2009.012 2522.121H2009l-5.121-34.152.18-4a189.61 189.61 0 0 1 5.59 30.582c-.387 4.719-.63 7.46-.637 7.57"
          />
          <path
            fill="#00000017"
            d="M2239.02 2126.66c-.098-.988-.16-1.781-.168-2.351v-.207c.007.226.07 1.097.168 2.558M2272.898 2357.36h-.007c-21.371-56.231-32.391-208.88-33.871-230.7 2.582 26.07 33.02 192.281 33.02 192.281l.858 38.418M2141.328 2499.93c71.934-222.54 87.852-450.36 88.121-454.371v2.941c-.648 267.3-88.12 451.43-88.12 451.43M2003.121 1955.012c134.04-55.492 147.7-166.473 147.7-166.473-5.13 128.91-147.7 166.473-147.7 166.473M2248.89 1964.59c-11.038-10.79-44.699-50.64-63.07-149.57v-.008c.34.718 47.89 101.066 60.899 122.289-.07 2.027-.11 3.98-.11 5.91-.007 5.527.34 10.828 1.352 16.687.27 1.524.57 3.082.93 4.692"
          />
          <path
            fill="#010101"
            d="M2252.5 1967.82c-.09-.07-1.39-1.058-3.61-3.23-.359-1.61-.66-3.168-.93-4.692-1.01-5.859-1.358-11.16-1.35-16.687 0-1.93.038-3.883.109-5.91.57.949 1.082 1.73 1.52 2.347 0 0 1.71 23.883 4.261 28.172"
          />
          <path
            fill="#00000017"
            d="M1971.691 1917.71c.11-8.92.207-17.448.29-25.55 14.8-44.59 53.34-72.031 53.34-72.031-30.942 37.562-46.5 75.492-53.63 97.582"
          />
          <path
            fill="#010101"
            d="M1971.66 1917.781c.11-8.91.211-17.453.3-25.562.009-.02.02-.04.02-.059-.082 8.102-.18 16.63-.289 25.55-.011.02-.02.052-.03.071"
          />
          <path
            fill="#010101"
            d="m1966.422 1937.078.848-24.75c.96-7.027 2.59-13.75 4.69-20.11-.089 8.11-.19 16.653-.3 25.563-3.8 11.809-5.2 19.078-5.238 19.297"
          />
          <path
            fill="#00000017"
            d="M2218.45 1744.371c-36.29-71.05-60.802-190.601-60.802-190.601l49.582 146.808c.98 6.121 2.07 11.57 3.29 16.281 2.37 9.141 5.082 18.29 7.93 27.512"
          />
          <path
            fill="#010101"
            d="M2219.21 1745.852c-.25-.493-.51-.993-.76-1.48-2.848-9.224-5.56-18.372-7.93-27.513-1.22-4.71-2.31-10.16-3.29-16.28l1.73 5.151 10.25 40.122M1937.75 2532.121l-3.762 130.3c3.543-37.792 5.903-82.542 7.32-131.57-1.078.41-2.296.829-3.558 1.27M903.484 2532.55l5.008 153.34c1.336 11.372 2.805 21.919 4.418 31.54l-5.84-183.66c-1.27-.43-2.441-.829-3.586-1.22"
          />
          <path
            fill={color}
            d="M898.695 2530.86c2.43 83.16 7.508 154.199 16.54 199.421 0 0 114.406 50.899 504.777 50.899 390.347 0 504.758-50.899 504.758-50.899 9.03-45.222 14.12-116.261 16.55-199.422-39.601 14.371-191.96 60.32-521.308 60.32-329.371 0-481.73-45.949-521.317-60.32"
          />
          <path
            fill="#010101"
            d="M895.809 2530.941c1.218 41.618 3.097 80.207 5.804 114.09 2.707 33.88 6.242 63.028 10.79 85.82l.292 1.458 1.367.613c.563.238 115.329 51.137 505.95 51.148 390.597-.011 505.367-50.91 505.937-51.148l1.36-.613.293-1.457c4.546-22.793 8.09-51.942 10.796-85.82 2.711-33.884 4.59-72.473 5.813-114.09l.117-4.25-3.988 1.449c-39.219 14.23-191.25 60.16-520.328 60.16-329.102 0-481.125-45.93-520.332-60.16l-1.97 5.43c39.966 14.507 192.669 60.5 522.302 60.5 329.617 0 482.316-45.993 522.297-60.5l-.989-2.712-2.89-.09c-1.211 41.551-3.09 80.06-5.79 113.801-2.69 33.739-6.218 62.72-10.699 85.149l2.829.562-1.168-2.64.238.539-.238-.54.238.54-.238-.54c-.332.16-115.012 50.66-503.59 50.66-195.063 0-321.102-12.722-398.313-25.421-38.597-6.34-64.992-12.68-81.699-17.418-8.355-2.371-14.285-4.34-18.113-5.711-1.914-.68-3.301-1.219-4.2-1.578-.449-.184-.777-.313-.992-.402-.101-.051-.18-.079-.226-.098l-.051-.024-.012-.007-.246.57.25-.57h-.004l-.246.57.25-.57-1.176 2.64 2.832-.562c-4.48-22.43-8.004-51.41-10.699-85.149-2.695-33.742-4.57-72.25-5.785-113.8l-5.773.171"
          />
          <path
            fill="#010101"
            d="m1662 2581.578-3.93 192.043c1.23-.09 2.47-.172 3.7-.262l3.378-192.058c-1.046.097-2.09.187-3.148.277M1678.84 2580.09l-3.371 192.238c1.05-.078 2.082-.156 3.12-.25l3.962-192.367c-1.262.117-2.45.25-3.711.379M1696.238 2578.36l-3.937 192.6c1.14-.1 2.277-.19 3.41-.3l3.96-192.64c-1.112.12-2.312.218-3.433.34M1644.61 2583.012l-3.36 191.738c1.148-.078 2.27-.148 3.41-.219l3.38-191.8c-1.142.097-2.278.18-3.43.28M1747.629 2572.379l-3.969 193.562c1.059-.12 2.121-.242 3.16-.351l4.54-193.692c-1.231.16-2.489.32-3.731.48M1866.719 2744.32l-.059 2.36.059-.008 1.73-65.39-1.73 63.038"
          />
          <path
            fill="#010101"
            d="M1871.762 2550.61c-.992.218-1.934.449-2.934.68l-5.738 196.151c1.21-.261 2.39-.5 3.558-.761l.082-2.371 5.032-193.7M1849.629 2743.852l-.16 6.378.05-.011 1.84-69.41-1.73 63.043"
          />
          <path
            fill="#010101"
            d="M1854.559 2554.43c-.957.191-1.957.398-2.938.61l-5.73 195.882c1.21-.242 2.39-.461 3.558-.692l.18-6.378 4.93-189.422M1834.059 2558.578l-5.13 195.434c1.13-.192 2.29-.39 3.41-.602l5.18-195.52c-1.16.231-2.28.47-3.46.688M1885.648 2547.29l-5.168 196.23c1.11-.27 2.192-.532 3.258-.782l5.774-196.41c-1.23.313-2.582.64-3.864.961M1713.36 2576.531l-3.95 192.91c1.16-.12 2.281-.21 3.418-.332l3.961-192.96c-1.117.12-2.3.242-3.43.382M1903.262 2542.7l-5.723 196.448c1.191-.32 2.32-.636 3.422-.949l5.82-196.46c-1.12.312-2.37.652-3.52.96M1920.5 2537.738l-5.7 196.211c1.27-.418 2.41-.808 3.419-1.168l5.812-196.133c-1.16.352-2.293.711-3.531 1.09M1765.07 2570.012l-4.53 193.968c1.16-.14 2.28-.28 3.42-.421l4.56-194.028c-1.141.16-2.29.32-3.45.48M1785.602 2566.969c-.993.16-2.032.312-3.063.472l-5.09 194.387c1.211-.156 2.41-.316 3.61-.469l.46-19.21 4.083-175.18M1627.23 2584.309l-2.789 191.46c1.04-.058 2.07-.12 3.118-.18l3.37-191.538c-1.218.078-2.468.16-3.699.258M1816.54 2561.828l-4.56 195c1.079-.18 2.13-.34 3.192-.52l5.18-195.167c-1.25.23-2.532.468-3.813.687M1730.79 2574.5l-4.52 193.29c1.242-.13 2.468-.24 3.68-.368l3.972-193.3c-1.024.128-2.094.25-3.133.378"
          />
          <path
            fill="#010101"
            d="m1781.52 2742.148-.442 19.204h.024l1.937-82.282-1.52 63.078M1798.621 2740.93l-.422 18.011.051-.011 1.871-79.45-1.5 61.45"
          />
          <path
            fill="#010101"
            d="M1802.7 2564.219c-.97.16-1.99.332-2.981.48l-5.117 194.762c1.199-.18 2.386-.34 3.578-.52l.441-18 4.078-176.722M1437.988 2591.102v190.046c1.043 0 2.063-.02 3.09-.027l.563-190.031c-1.211.012-2.442.012-3.653.012M1265.852 2587.488l2.789 190.852c1.039.039 2.058.09 3.12.129l-2.241-190.809c-1.23-.05-2.45-.12-3.668-.172M1059.54 2567.75l4.57 194.281c1.14.149 2.269.309 3.421.45l-4.55-194.2c-1.16-.18-2.29-.36-3.442-.531M1025.23 2562.14l4.579 194.97c1.171.19 2.363.359 3.562.55l-5.133-195c-1.008-.18-2.008-.36-3.008-.52M1042.05 2565l5.15 194.719c1.05.14 2.109.3 3.179.441l-4.55-194.539c-1.27-.223-2.52-.422-3.778-.621M1249.012 2586.61l2.226 190.992c1.25.058 2.473.109 3.73.168l-2.808-190.98a725.63 725.63 0 0 1-3.148-.18M1283.238 2588.309l2.23 190.671c1.134.032 2.294.06 3.423.098l-2.22-190.629c-1.14-.05-2.312-.09-3.433-.14M1317.719 2589.59l1.672 190.39c1.129.032 2.289.051 3.418.079l-1.68-190.36c-1.14-.039-2.277-.07-3.41-.11M990.512 2555.488l5.187 195.73c1.117.212 2.27.43 3.414.641l-5.129-195.648c-1.199-.242-2.3-.48-3.472-.723M1007.7 2558.922l5.171 195.398c1.129.211 2.277.39 3.418.59l-5.129-195.34c-1.129-.23-2.332-.441-3.46-.648M1300.621 2589.012l1.668 190.5c1.242.039 2.492.058 3.73.097l-2.23-190.46c-1.07-.04-2.09-.098-3.168-.137M1128.41 2576.719l3.961 192.883c1.129.109 2.27.207 3.418.308l-3.95-192.82c-1.148-.121-2.3-.238-3.429-.371M1180.05 2581.77l3.38 191.94c1.14.09 2.27.169 3.422.25l-3.372-191.89c-1.16-.11-2.27-.21-3.43-.3M972.938 2551.68l5.773 196.148c1.062.23 2.129.442 3.226.672l-5.148-195.96c-1.281-.29-2.594-.571-3.851-.86M1110.98 2574.719l4.532 193.25c1.058.11 2.09.222 3.16.32l-3.961-193.14c-1.25-.137-2.492-.29-3.73-.43M1145.828 2578.57l3.383 192.508c1.219.113 2.398.211 3.629.313l-3.942-192.512c-1.02-.117-2.058-.207-3.07-.309M1162.66 2580.219l3.95 192.27c1.03.09 2.09.171 3.128.23l-3.367-192.168c-1.223-.121-2.492-.223-3.71-.332M1231.648 2585.57l2.793 191.22c1.137.062 2.278.12 3.418.16l-2.789-191.169c-1.129-.082-2.3-.133-3.422-.21M1076.7 2570.262l4.55 193.93c1.129.136 2.281.277 3.422.41l-4.543-193.872c-1.16-.152-2.277-.32-3.43-.468M1214.281 2584.41l3.36 191.488c1.039.051 2.09.102 3.129.16l-2.81-191.386c-1.222-.102-2.46-.184-3.679-.262M1094.148 2572.61l3.98 193.538c1.18.122 2.403.25 3.602.372l-4.53-193.508c-1.02-.14-2.028-.282-3.052-.403M1197.441 2583.172l2.809 191.668c1.21.082 2.422.16 3.64.23l-3.359-191.66c-1.043-.09-2.062-.16-3.09-.238M1541.32 2588.93l-1.672 190.53c1.043-.038 2.082-.07 3.122-.108l2.23-190.563c-1.23.04-2.43.09-3.68.14M1455.559 2590.98l-1.11 190.07c1.25 0 2.48-.019 3.73-.038l.551-190.082c-1.05.02-2.09.039-3.171.05M1507.059 2590.05l-1.668 190.27c1.148-.03 2.27-.039 3.418-.07l1.671-190.29c-1.152.02-2.27.071-3.421.09M1472.64 2590.762l-1.109 190.117c1.14-.008 2.278-.027 3.418-.05l1.102-190.13c-1.121.031-2.281.04-3.41.063M1489.969 2590.441l-1.668 190.207c1.25-.027 2.5-.046 3.738-.078l1.11-190.21c-1.06.019-2.11.05-3.18.081M1335.04 2590.102l1.12 190.238c1.23.031 2.488.058 3.719.082l-1.668-190.242c-1.04-.032-2.133-.051-3.172-.078M1562.07 2588.09c-1.02.039-2.101.082-3.129.129l-2.8 190.68c1.25-.028 2.46-.079 3.699-.118l.469-38.77 1.761-151.921M1575.781 2587.41l-2.25 190.84c1.04-.04 2.078-.078 3.11-.121l2.8-190.899c-1.21.051-2.441.11-3.66.18M1593.09 2586.488l-2.8 191.051c1.132-.059 2.28-.11 3.401-.168l2.82-191.09a198.54 198.54 0 0 0-3.421.207"
          />
          <path
            fill="#010101"
            d="m1560.309 2740.012-.45 38.758h.012l1.207-103.84-.77 65.082M1524.441 2589.52l-2.23 190.421c1.27-.03 2.488-.07 3.75-.101l1.66-190.43c-1.05.04-2.11.078-3.18.11M1369.398 2590.781l.563 190.117c1.23.012 2.488.024 3.738.032l-1.12-190.102c-1.06-.02-2.13-.02-3.18-.047M938.477 2543.172l5.796 196.469c1.106.3 2.243.597 3.426.91l-5.719-196.43c-1.218-.312-2.332-.633-3.503-.95M1352.09 2590.48l1.12 190.18c1.13.02 2.278.04 3.4.05l-1.122-190.151c-1.148-.028-2.25-.059-3.398-.079M959.055 2548.45c-1.012-.25-1.95-.481-2.934-.731l5.192 196.23c1.152.27 2.34.551 3.542.82l-1.777-63.257-4.023-133.063M1403.82 2591.11v190.038c1.13.012 2.282.012 3.41.012v-190.039c-1.128 0-2.28-.012-3.41-.012M1610.39 2585.45l-3.35 191.28c1.241-.082 2.491-.14 3.71-.21l2.809-191.27c-1.059.059-2.11.129-3.168.2M1420.898 2591.18v190c1.16 0 2.282-.008 3.422-.008V2591.16c-1.148 0-2.261.02-3.422.02M920.793 2538.129l6.383 196.473c1.031.328 2.11.68 3.27 1.039l-5.684-196.32a413.858 413.858 0 0 0-3.969-1.192M1386.488 2591.012l.563 190.039c1.129.027 2.277.027 3.41.027l-.563-190.02c-1.148-.019-2.25-.046-3.41-.046M894.488 2524.898c.02.012 2.61 1.024 7.89 2.762l.782-2.36c-2.62-.87-4.57-1.55-5.86-2.01-.644-.231-1.124-.411-1.44-.528-.32-.121-.47-.184-.47-.184Zm11.059 3.793c2.285.73 4.933 1.559 7.95 2.457l.714-2.378c-3-.899-5.633-1.72-7.906-2.45Zm11.14 3.399c2.454.719 5.122 1.48 7.997 2.281l.664-2.402c-2.864-.79-5.52-1.547-7.961-2.258Zm11.204 3.16c2.53.691 5.207 1.398 8.035 2.14l.625-2.41a639.64 639.64 0 0 1-8.008-2.128Zm11.254 2.969c2.57.652 5.257 1.332 8.062 2.011l.594-2.421a760.935 760.935 0 0 1-8.04-2Zm11.293 2.793c2.601.629 5.296 1.27 8.09 1.91l.558-2.434a647.37 647.37 0 0 1-8.066-1.898Zm11.328 2.648c2.625.602 5.328 1.2 8.109 1.809l.531-2.43c-2.773-.61-5.472-1.21-8.09-1.809Zm11.359 2.512c2.64.566 5.348 1.148 8.129 1.719l.504-2.442a788.59 788.59 0 0 1-8.11-1.71Zm11.383 2.387c2.652.543 5.367 1.09 8.144 1.64l.485-2.449c-2.774-.54-5.48-1.09-8.13-1.629Zm11.406 2.27c2.664.523 5.387 1.042 8.156 1.562l.461-2.45c-2.77-.52-5.48-1.03-8.14-1.55Zm11.426 2.171c2.68.488 5.398.988 8.18 1.48l.43-2.449c-2.77-.492-5.49-.992-8.16-1.48Zm11.45 2.059c2.679.472 5.41.941 8.179 1.41l.422-2.45c-2.77-.468-5.493-.94-8.172-1.41Zm11.46 1.96c2.691.45 5.422.903 8.2 1.352l.39-2.46c-2.77-.442-5.5-.891-8.18-1.34l-.41 2.46Zm11.48 1.88c2.692.43 5.43.851 8.2 1.28l.379-2.46c-2.77-.43-5.5-.848-8.188-1.278Zm11.489 1.78c2.703.41 5.441.821 8.21 1.22l.36-2.458c-2.77-.41-5.5-.812-8.2-1.222Zm11.5 1.7c2.71.39 5.453.781 8.222 1.16l.348-2.46c-2.777-.388-5.508-.778-8.219-1.157Zm11.511 1.621c2.72.371 5.461.738 8.23 1.102l.33-2.461c-2.77-.371-5.509-.743-8.22-1.11Zm11.532 1.54c2.707.35 5.457.698 8.238 1.05l.309-2.469c-2.778-.351-5.52-.7-8.23-1.05Zm11.527 1.46c2.723.34 5.473.672 8.25 1l.29-2.469c-2.77-.332-5.52-.66-8.227-1Zm11.55 1.39c2.72.32 5.47.641 8.25.95l.282-2.469c-2.781-.32-5.52-.633-8.242-.95Zm11.552 1.32c2.718.302 5.48.599 8.25.9l.27-2.481c-2.782-.29-5.52-.59-8.25-.89Zm11.558 1.25c2.73.29 5.48.571 8.262.849l.25-2.47c-2.781-.28-5.531-.57-8.25-.859Zm11.563 1.188c2.726.274 5.488.543 8.27.801l.23-2.48c-2.774-.258-5.524-.528-8.25-.797Zm11.566 1.114c2.742.258 5.492.508 8.274.77l.226-2.481c-2.777-.25-5.527-.512-8.258-.762Zm11.582 1.058c2.738.239 5.5.48 8.281.72l.207-2.481c-2.777-.239-5.539-.48-8.27-.72Zm11.59 1c2.73.22 5.488.45 8.27.668l.199-2.476c-2.778-.223-5.528-.453-8.27-.684Zm11.578.93c2.742.21 5.5.422 8.281.629l.192-2.48c-2.781-.208-5.54-.419-8.27-.63Zm11.602.879c2.742.2 5.5.39 8.28.59l.169-2.489c-2.777-.19-5.527-.39-8.27-.59Zm11.59.82c2.75.18 5.511.371 8.289.551l.16-2.488c-2.778-.184-5.54-.364-8.278-.551l-.171 2.48Zm11.601.762c2.75.168 5.508.34 8.29.508l.148-2.489c-2.778-.16-5.54-.332-8.278-.511Zm11.61.71c2.738.157 5.5.317 8.289.47l.128-2.493c-2.77-.148-5.539-.308-8.277-.468Zm11.597.65c2.75.148 5.512.3 8.293.44l.129-2.491c-2.781-.141-5.54-.29-8.281-.43Zm11.613.609c2.75.129 5.508.27 8.29.39l.12-2.48c-2.78-.13-5.542-.262-8.292-.399Zm11.61.55c2.75.122 5.52.239 8.3.36l.098-2.488c-2.777-.114-5.539-.243-8.277-.364Zm11.62.5c2.75.11 5.509.22 8.29.329l.098-2.489c-2.778-.11-5.54-.218-8.29-.332Zm11.61.45c2.75.101 5.52.199 8.297.3l.082-2.492c-2.77-.097-5.539-.199-8.289-.297Zm11.617.41c2.75.09 5.524.172 8.301.262l.07-2.493c-2.78-.09-5.539-.168-8.289-.257Zm11.622.351c2.75.079 5.52.16 8.3.23l.059-2.491c-2.777-.07-5.54-.149-8.29-.23Zm11.62.309c2.75.07 5.52.14 8.301.2l.047-2.49c-2.777-.062-5.539-.132-8.289-.198Zm11.622.27c2.75.058 5.52.109 8.297.16l.05-2.489c-2.78-.05-5.55-.101-8.3-.16Zm11.617.218c2.75.051 5.52.09 8.3.133l.04-2.492c-2.778-.04-5.54-.078-8.297-.129Zm11.621.184c2.762.027 5.52.058 8.309.09l.02-2.492c-2.778-.032-5.54-.06-8.29-.09l-.039 2.48Zm11.629.129c2.75.02 5.52.05 8.3.07l.02-2.492c-2.777-.02-5.55-.05-8.3-.07Zm11.621.09c2.762.007 5.52.03 8.3.039l.009-2.489c-2.778-.011-5.54-.03-8.29-.043Zm11.621.05c2.59 0 5.18.008 7.79.008h.519v-2.488h-.52c-2.601 0-5.2-.012-7.781-.012v2.492Zm11.629 0c2.75 0 5.52-.011 8.3-.02l-.01-2.491c-2.778.011-5.54.02-8.29.02Zm11.621-.03c2.758-.013 5.52-.032 8.3-.052l-.01-2.488c-2.782.02-5.552.04-8.302.05Zm11.617-.071c2.762-.031 5.532-.05 8.313-.078l-.031-2.492c-2.782.03-5.54.05-8.301.082Zm11.633-.121c1.5-.008 3-.028 4.508-.047h.012c1.257-.024 2.52-.043 3.78-.063l-.042-2.488-3.777.059c-1.512.02-3.012.039-4.512.05Zm11.617-.16c2.782-.04 5.551-.09 8.301-.137l-.039-2.492c-2.75.05-5.52.101-8.3.14Zm11.621-.188c2.782-.05 5.551-.11 8.301-.16l-.05-2.492c-2.75.05-5.508.11-8.29.16l.04 2.48Zm11.621-.223c2.782-.058 5.551-.117 8.301-.18l-.062-2.488c-2.75.06-5.508.122-8.29.18Zm11.622-.25c2.777-.058 5.539-.128 8.296-.187l-.058-2.492c-2.75.07-5.52.133-8.3.191Zm11.609-.27c2.789-.07 5.55-.14 8.3-.218l-.062-2.48-8.3.21Zm11.617-.3c2.781-.078 5.55-.156 8.3-.238l-.07-2.488c-2.75.078-5.519.16-8.296.238Zm11.621-.34c2.781-.078 5.551-.168 8.301-.258l-.078-2.492c-2.75.09-5.524.184-8.3.262Zm11.61-.367c2.793-.09 5.55-.18 8.3-.281l-.09-2.488c-2.75.097-5.507.187-8.289.277Zm11.62-.402c2.782-.098 5.551-.207 8.29-.309l-.09-2.488c-2.75.098-5.508.207-8.29.308Zm11.61-.45c2.781-.109 5.55-.218 8.3-.34l-.109-2.488c-2.75.118-5.511.239-8.289.348Zm11.61-.48c2.792-.117 5.55-.25 8.3-.367l-.12-2.492c-2.74.129-5.509.25-8.278.37Zm11.613-.527c2.777-.133 5.547-.274 8.297-.41l-.13-2.48c-2.738.14-5.507.269-8.28.398l.12 2.492Zm11.61-.57c2.776-.153 5.55-.301 8.288-.454l-.129-2.476c-2.75.148-5.511.289-8.293.437Zm11.608-.633c2.782-.16 5.54-.32 8.29-.48l-.149-2.49c-2.742.173-5.5.333-8.281.481Zm11.598-.68c2.781-.168 5.543-.34 8.293-.52l-.16-2.48c-2.75.172-5.5.351-8.281.512Zm11.602-.738c2.78-.18 5.539-.371 8.289-.563l-.18-2.476c-2.738.187-5.5.378-8.27.558Zm11.601-.79c2.77-.203 5.528-.402 8.278-.613l-.188-2.476c-2.742.207-5.5.41-8.27.61Zm11.59-.863c2.77-.207 5.527-.43 8.277-.648l-.199-2.48c-2.738.218-5.5.44-8.27.652Zm11.59-.918c2.77-.23 5.527-.468 8.27-.71l-.22-2.481c-2.741.242-5.491.473-8.261.7Zm11.578-1c2.77-.25 5.531-.5 8.27-.761l-.23-2.48c-2.74.26-5.49.51-8.259.76Zm11.582-1.07 8.258-.809-.25-2.48c-2.738.277-5.488.55-8.25.809Zm11.559-1.148c2.77-.282 5.52-.57 8.261-.872l-.27-2.468c-2.73.289-5.48.578-8.241.867Zm11.558-1.23c2.774-.302 5.524-.61 8.262-.93l-.29-2.473c-2.73.32-5.48.62-8.241.93Zm11.563-1.313c2.758-.32 5.5-.66 8.238-.989l-.309-2.468c-2.73.328-5.468.66-8.23.988Zm11.539-1.399c2.75-.351 5.5-.7 8.23-1.058l-.32-2.473c-2.73.36-5.469.71-8.219 1.062Zm11.531-1.5c2.75-.36 5.488-.738 8.219-1.12l-.34-2.47c-2.73.38-5.469.758-8.21 1.13Zm11.508-1.582c2.75-.387 5.492-.789 8.223-1.2l-.364-2.456c-2.726.398-5.457.797-8.207 1.187Zm11.512-1.687c2.738-.41 5.48-.832 8.21-1.262l-.39-2.457c-2.723.43-5.45.848-8.191 1.258Zm11.488-1.782c2.742-.437 5.473-.89 8.191-1.34l-.398-2.46c-2.723.46-5.453.902-8.192 1.34Zm11.473-1.89c2.738-.457 5.476-.93 8.207-1.41l-.43-2.457c-2.719.476-5.457.949-8.188 1.418Zm11.488-1.989c2.738-.492 5.469-.992 8.191-1.492l-.453-2.449c-2.719.5-5.437 1-8.168 1.492Zm11.469-2.101a886.437 886.437 0 0 0 8.16-1.559l-.469-2.441c-2.71.52-5.43 1.043-8.148 1.55Zm11.43-2.2c2.71-.53 5.433-1.077 8.14-1.628l-.5-2.442c-2.7.551-5.41 1.09-8.117 1.63Zm11.39-2.3c2.71-.559 5.422-1.129 8.121-1.7l-.52-2.44c-2.699.581-5.402 1.14-8.101 1.702Zm11.36-2.399c2.702-.582 5.402-1.18 8.1-1.78l-.538-2.43c-2.692.601-5.39 1.19-8.082 1.78Zm11.331-2.5c2.692-.609 5.38-1.218 8.07-1.851l-.562-2.418c-2.687.617-5.367 1.23-8.058 1.84Zm11.309-2.601a968.296 968.296 0 0 0 8.07-1.93l-.578-2.418c-2.691.649-5.383 1.29-8.062 1.918Zm11.3-2.707c2.692-.652 5.372-1.32 8.06-1.992l-.598-2.418a832.72 832.72 0 0 1-8.051 1.988Zm11.29-2.8c2.672-.68 5.351-1.36 8.043-2.063l-.621-2.41c-2.68.69-5.36 1.382-8.032 2.062Zm11.261-2.903c2.668-.688 5.34-1.399 8.02-2.117l-.64-2.403c-2.68.711-5.348 1.422-8.008 2.121Zm11.23-2.98c2.669-.72 5.33-1.45 8.009-2.188l-.66-2.403c-2.668.743-5.34 1.473-8 2.192Zm11.212-3.067c2.656-.742 5.328-1.492 8-2.25l-.684-2.39c-2.668.75-5.328 1.5-7.976 2.238Zm11.187-3.16c2.653-.75 5.313-1.524 7.97-2.301l-.688-2.39c-2.66.78-5.32 1.538-7.961 2.3l.68 2.39"
          />
          <path
            fill={color}
            d="M1097.27 875.3s90.69 115.759 318.23 114.731C1643.05 989 1756.172 880.72 1756.172 880.72s10.398-380.54-1.3-457.89c-11.7-77.34-52.013-212.438-88.423-234.09-36.41-21.66-156.027-84.567-371.87-9.278-200.24 71.148-271.75 167.059-271.75 167.059s-22.11 66 18.202 157.78c40.309 91.79 113.117 243.38 101.418 311.45-9.097 41.25-45.18 59.55-45.18 59.55"
          />
          <path
            fill="#020001"
            d="m1097.27 875.3-2.848 1.41c.156.2 22.887 29.161 74.008 58.118 51.101 28.961 130.66 57.883 244.05 57.871 1.008 0 2.032-.008 3.04-.008 114.449-.52 200.25-28.03 257.378-55.43 57.153-27.402 85.68-54.683 85.852-54.85l.75-.712.02-.93c0-.007 4.261-155.878 4.261-288.417 0-37.282-.332-72.711-1.203-102.332-.43-14.81-.988-28.16-1.707-39.57-.73-11.41-1.601-20.872-2.672-27.93-5.879-38.848-18.898-92.032-35.039-138.329-8.082-23.152-16.922-44.57-26.09-61.66-4.59-8.543-9.261-16.011-13.992-22.09-4.75-6.082-9.527-10.793-14.617-13.832-11.883-7.07-32.621-18.539-62.57-28.21-29.95-9.669-69.13-17.57-117.891-17.56-53.328-.01-118.102 9.43-194.77 36.18l-.02.012c-100.5 35.707-168.769 77.66-211.929 110.73-43.16 33.06-61.21 57.227-61.34 57.41l-.242.31-.12.359c-.06.18-6.157 18.46-6.157 49.101 0 27.938 5.078 66.149 24.437 110.239 18.7 42.582 44.352 97.941 65.313 151.82 10.488 26.941 19.789 53.512 26.469 77.89 6.68 24.372 10.71 46.579 10.71 64.688 0 5.703-.402 10.992-1.23 15.813l3.328.359-3.308-.46c-4.43 20.089-15.41 34.55-25.282 44.01a97.43 97.43 0 0 1-12.98 10.462 72.875 72.875 0 0 1-4.02 2.52c-.48.277-.84.48-1.078.609-.12.058-.203.109-.261.14l-.06.028h-.01l.66.812-.65-.812h-.01l.66.812-.65-.812-2.788 1.41 1.75 2.242 2.848-1.41 1.8 2.238c.22-.11 9.5-4.84 19.961-14.848 10.45-10.011 22.059-25.332 26.719-46.48l.012-.05.008-.052c.878-5.109 1.289-10.64 1.289-16.53 0-18.727-4.13-41.22-10.86-65.817-10.11-36.903-26.11-78.512-43.078-118.91-16.973-40.383-34.922-79.543-48.922-111.422-19.09-43.461-24.07-81.059-24.07-108.489 0-15.043 1.5-27.02 2.992-35.222.75-4.09 1.488-7.25 2.05-9.36.27-1.058.5-1.859.657-2.39.082-.258.14-.457.184-.59l.047-.14.011-.028v-.012l-3.242-.68 2.883 1.352h.008c.43-.57 18.52-24.492 61.23-57.05 42.711-32.56 110.04-73.77 209-108.942l-.02.012c75.942-26.48 139.743-35.73 192.071-35.73 47.84 0 86.121 7.73 115.36 17.167 29.242 9.453 49.43 20.613 61.081 27.543 4.008 2.367 8.457 6.61 12.93 12.367 7.848 10.07 15.867 24.711 23.52 41.973 23.02 51.828 43.007 127.41 50.648 177.937 1.04 6.864 1.91 16.23 2.621 27.57 2.149 34.032 2.918 85.75 2.91 141.634 0 66.226-1.058 138.308-2.129 193.828-.53 27.761-1.062 51.379-1.46 68.058-.2 8.34-.372 14.942-.481 19.473-.059 2.25-.11 3.988-.14 5.168-.032 1.172-.051 1.781-.051 1.781l3.363.059-2.582-1.7-.02.012c-.699.668-29.16 27.528-85.468 54.309-56.313 26.789-140.403 53.52-252.622 54.031h-3c-55.968 0-103.46-7.121-143.242-17.781-59.648-16-101.976-39.98-129.379-59.95-13.699-9.98-23.668-18.949-30.199-25.41-3.262-3.242-5.66-5.84-7.238-7.62-.793-.891-1.371-1.579-1.762-2.04-.191-.23-.332-.398-.422-.52l-.097-.12-.02-.032h-.012l-.668.332.668-.332-.668.332.668-.332-2.84 1.403 1.801 2.238-1.8-2.238"
          />
          <path
            fill="#2b2b2b"
            d="M1373.89 989s59.82 6.191 120.93-4.129c-27.308-83.531-100.12-309.383-205.441-481.601-105.32-172.22-183.34-188.72-227.55-184.59-44.208 4.12 68.921 248.53 145.632 382.601C1284.18 835.34 1373.89 989 1373.89 989"
          />
          <path
            fill="#020001"
            d="m1373.89 989-.43 2.64c.11.008 18.028 1.86 44.321 1.86 21.918 0 49.64-1.281 77.739-6.02l3.43-.582-.88-2.687c-13.66-41.77-38.699-119.172-73.511-207.672-34.82-88.508-79.387-188.129-132.16-274.43-48.598-79.46-91.458-126-128.2-152.808-18.37-13.403-35.23-21.871-50.488-26.973-15.25-5.11-28.902-6.84-40.723-6.84-4.066 0-7.918.203-11.547.543-2.34.207-4.53.98-6.261 2.188-1.301.89-2.352 2.011-3.2 3.261-1.27 1.891-2.101 4.098-2.652 6.63-.539 2.53-.789 5.39-.789 8.57 0 7.691 1.45 17.308 4.082 28.558 4.61 19.692 12.848 44.364 23.5 71.89 31.969 82.571 85.7 190.821 128.29 265.25 76.718 134.071 166.44 287.731 166.44 287.743l.778 1.328 1.832.192.43-2.641 3.05-1.121-1.03-1.758c-10.13-17.371-93.481-160.27-165.391-285.941-32.348-56.54-71.22-132.79-101.98-202.27-15.368-34.738-28.72-67.789-38.212-95.82-4.738-14.012-8.52-26.762-11.11-37.82-2.59-11.051-3.968-20.43-3.968-27.59 0-2.63.191-4.961.55-6.95.27-1.492.65-2.78 1.098-3.859.68-1.633 1.543-2.75 2.403-3.422.43-.347.86-.59 1.328-.77.473-.179.98-.3 1.601-.359 3.38-.32 6.97-.511 10.758-.511 10.992.011 23.672 1.59 38.114 6.421 21.66 7.239 47.32 21.84 76.66 49.508 29.34 27.66 62.328 68.383 98.597 127.692 52.54 85.922 97.04 185.34 131.79 273.691 34.75 88.36 59.773 165.649 73.421 207.418l3.25-.668-.699-2.601c-27.46 4.64-54.762 5.91-76.34 5.91-12.941 0-23.832-.461-31.472-.918-3.82-.223-6.829-.453-8.88-.621-1.019-.082-1.8-.16-2.327-.211-.262-.02-.461-.04-.582-.051l-.149-.02h-.043l-.437 2.641 3.05-1.121-3.05 1.121"
          />
          <path
            fill={color}
            d="M1127.5 332.34s127.75-112.918 330.59-136.899c166.75-17.793 216.488.77 216.488.77"
          />
          <path
            fill="#020001"
            d="m1129.988 334.121.024-.02c.86-.75 33.02-28.89 89.957-59.75 56.941-30.882 138.64-64.46 238.61-76.28l-.49-2.63.442 2.637c53.899-5.75 95.489-7.687 127.059-7.687 32.95 0 54.988 2.109 68.71 4.187 6.86 1.05 11.65 2.082 14.68 2.844 1.508.387 2.59.7 3.27.906.352.102.59.184.73.23l.16.063.02.008.531-.91-.543.902.012.008.531-.91-.543.902 2.864-4.812c-.582-.22-23.813-8.739-90.422-8.739-31.918 0-73.8 1.961-127.95 7.73l-.019.009h-.031c-102.078 12.07-185.18 46.492-242.762 77.882-57.59 31.387-89.7 59.758-89.828 59.868l4.988 3.562"
          />
          <path
            fill={color}
            d="M1290.84 842.82s78.02 12.371 156.52 4.25c3.902 12.38 6.34 18.95 6.34 18.95s-63.391 9.28-152.13-1.551c-9.75-16.63-10.73-21.649-10.73-21.649"
          />
          <path
            fill="#020001"
            d="m1290.84 842.82-.66 2.61c.14.011 44.539 7.058 100.25 7.058 18.289 0 37.789-.758 57.36-2.777l-.43-2.64-3.258.648c3.918 12.41 6.367 19.02 6.378 19.05l3.22-.75-.61-2.62-.059.011c-1.37.2-26.152 3.649-65.61 3.649-23.76 0-52.843-1.25-85.343-5.22l-.508 2.63 3.04-1.117c-4.84-8.25-7.481-13.59-8.891-16.82-.707-1.61-1.11-2.692-1.328-3.352-.11-.328-.172-.551-.211-.668l-.032-.121-2.078.28 2.09-.26-.012-.02-2.078.28 2.09-.26-3.32.41-.66 2.609.66-2.61-3.32.399c.05.222.351 1.62 1.859 5.062 1.512 3.45 4.23 8.938 9.152 17.32l.75 1.29 1.778.21a714.693 714.693 0 0 0 86.363 5.278c41.25 0 66.726-3.719 66.887-3.738l3.66-.54-1.047-2.831-.031-.07c-.27-.74-2.63-7.212-6.282-18.778l-.718-2.3-2.961.308c-19.22 1.992-38.45 2.742-56.5 2.742-27.5 0-52.27-1.742-70.149-3.492a647.358 647.358 0 0 1-21.12-2.39c-2.481-.33-4.411-.599-5.712-.79-.64-.09-1.14-.172-1.469-.219a3.967 3.967 0 0 1-.37-.062l-.11-.008-4.71-.75.73 3.758 3.32-.399M1088.86 880.559c.019.03 1.519 2.18 4.71 5.902l2.38-1.281c-1.571-1.82-2.712-3.258-3.47-4.239a67.454 67.454 0 0 1-.832-1.12 3.681 3.681 0 0 1-.207-.282l-.062-.078Zm6.359 7.8a176.435 176.435 0 0 0 5.152 5.563l2.29-1.39a160.227 160.227 0 0 1-5.09-5.481Zm6.93 7.38c1.671 1.671 3.5 3.46 5.5 5.34l2.19-1.477a215.696 215.696 0 0 1-5.429-5.274Zm7.382 7.081a238.557 238.557 0 0 0 5.778 5.14l2.12-1.55c-2.038-1.75-3.949-3.45-5.73-5.082Zm7.75 6.809c1.91 1.61 3.918 3.262 6.04 4.941l2.038-1.61c-2.097-1.66-4.09-3.3-5.98-4.89Zm8.098 6.562c2 1.559 4.09 3.137 6.27 4.75l1.96-1.68a247.238 247.238 0 0 1-6.218-4.702Zm8.402 6.297c2.078 1.5 4.25 3.024 6.489 4.551l1.878-1.73a262.835 262.835 0 0 1-6.43-4.508Zm8.688 6.043c2.16 1.45 4.39 2.899 6.703 4.367l1.797-1.789c-2.29-1.449-4.5-2.89-6.64-4.32Zm8.96 5.79c2.231 1.39 4.532 2.78 6.891 4.167l1.711-1.828a317.187 317.187 0 0 1-6.82-4.14Zm9.212 5.53c2.3 1.329 4.648 2.66 7.07 3.977l1.629-1.867c-2.39-1.32-4.73-2.633-7-3.95Zm9.449 5.278a408.176 408.176 0 0 0 7.23 3.793l1.551-1.922c-2.45-1.25-4.832-2.5-7.172-3.762Zm9.66 5.02a395.346 395.346 0 0 0 7.379 3.59l1.48-1.95a402.866 402.866 0 0 1-7.32-3.57Zm9.871 4.761c2.45 1.14 4.957 2.281 7.52 3.399l1.39-1.989a435.885 435.885 0 0 1-7.46-3.379Zm10.05 4.5a467.397 467.397 0 0 0 7.657 3.211l1.313-2.031c-2.582-1.05-5.11-2.11-7.59-3.18Zm10.227 4.25c2.551 1.02 5.141 2.02 7.782 3.02l1.23-2.059a444.063 444.063 0 0 1-7.71-3Zm10.391 3.988c2.59.961 5.223 1.903 7.89 2.832l1.16-2.09c-2.66-.921-5.269-1.859-7.827-2.812Zm10.54 3.743c2.62.89 5.292 1.77 8 2.629l1.07-2.11a410.46 410.46 0 0 1-7.93-2.62Zm10.683 3.48c2.648.828 5.347 1.649 8.078 2.45l1-2.141c-2.719-.801-5.39-1.61-8.031-2.43Zm10.789 3.238c2.687.762 5.41 1.52 8.18 2.262l.917-2.16c-2.75-.742-5.449-1.492-8.117-2.25Zm10.91 2.98c2.719.712 5.469 1.4 8.25 2.083l.84-2.184a447.487 447.487 0 0 1-8.192-2.066Zm11.008 2.74c2.742.651 5.511 1.28 8.32 1.901l.77-2.199c-2.79-.61-5.54-1.242-8.258-1.883Zm11.101 2.5c2.758.593 5.551 1.171 8.38 1.73l.69-2.22c-2.8-.55-5.581-1.12-8.32-1.71Zm11.18 2.273c2.781.527 5.59 1.046 8.43 1.546l.62-2.226c-2.82-.5-5.609-1.012-8.37-1.543Zm11.25 2.027c2.79.48 5.621.941 8.469 1.383l.55-2.242c-2.828-.442-5.64-.891-8.417-1.372Zm11.309 1.812c2.8.418 5.64.829 8.511 1.207l.48-2.238c-2.85-.39-5.671-.789-8.46-1.21Zm11.363 1.59c2.816.367 5.656.719 8.539 1.047l.418-2.258c-2.86-.332-5.7-.68-8.5-1.039Zm11.398 1.367c2.828.32 5.692.614 8.57.891l.348-2.258c-2.867-.281-5.707-.57-8.52-.89Zm11.442 1.16c2.84.262 5.699.512 8.597.743l.282-2.27c-2.88-.23-5.73-.472-8.551-.73Zm11.468.962c2.84.21 5.711.41 8.61.59l.219-2.282c-2.88-.18-5.73-.367-8.559-.578Zm11.489.761c2.851.16 5.722.309 8.633.438l.16-2.278c-2.89-.132-5.75-.28-8.59-.441Zm11.511.559c2.848.12 5.73.219 8.641.3l.098-2.28c-2.89-.079-5.758-.18-8.598-.301Zm11.52.37c2.852.071 5.73.13 8.629.161l.031-1.14-.07 1.14h.02l.12-2.27h-.011l-.02-.011h-.02c-2.89-.031-5.75-.09-8.59-.16Zm11.488.25c2.864.08 5.75.13 8.66.161l.032-2.281a475.72 475.72 0 0 1-8.59-.16Zm11.551.169c.48.012.973.012 1.461.012 2.379 0 4.781-.02 7.2-.051l-.052-2.281c-2.398.03-4.789.05-7.148.05-.488 0-.969 0-1.45-.007Zm11.54-.09c2.87-.059 5.75-.14 8.66-.238l-.13-2.281c-2.89.101-5.75.18-8.597.242Zm11.542-.36c2.86-.109 5.738-.25 8.64-.417l-.202-2.274c-2.88.16-5.75.301-8.59.422Zm11.52-.59c2.859-.167 5.73-.37 8.62-.589l-.273-2.27c-2.867.22-5.726.418-8.566.59Zm11.488-.808c2.86-.242 5.73-.492 8.61-.761l-.348-2.27c-2.86.281-5.711.531-8.551.762Zm11.473-1.043c2.847-.289 5.707-.59 8.578-.918l-.41-2.261c-2.848.332-5.7.632-8.532.921Zm11.43-1.25c2.84-.328 5.687-.687 8.546-1.066l-.469-2.25c-2.84.379-5.68.726-8.5 1.066Zm11.39-1.449c2.84-.39 5.668-.789 8.52-1.219l-.544-2.242c-2.82.422-5.648.832-8.457 1.211Zm11.348-1.648c2.82-.442 5.652-.891 8.48-1.371l-.59-2.23c-2.82.472-5.629.929-8.441 1.358Zm11.3-1.852c2.809-.48 5.63-.98 8.442-1.508l-.653-2.222c-2.8.52-5.597 1.02-8.398 1.5Zm11.25-2.027c2.801-.543 5.602-1.09 8.399-1.66l-.719-2.211c-2.781.57-5.57 1.12-8.352 1.648Zm11.192-2.23c2.777-.583 5.566-1.18 8.347-1.802l-.78-2.19c-2.759.608-5.528 1.21-8.298 1.78Zm11.11-2.423a446.85 446.85 0 0 0 8.276-1.93l-.828-2.179c-2.742.66-5.492 1.3-8.242 1.922Zm11.026-2.59c2.75-.68 5.493-1.37 8.23-2.078l-.89-2.16c-2.718.7-5.449 1.39-8.18 2.059Zm10.973-2.789c2.73-.718 5.45-1.46 8.168-2.21l-.95-2.16c-2.698.761-5.41 1.492-8.128 2.21Zm10.89-2.98a599.76 599.76 0 0 0 8.118-2.352l-1.008-2.136a830.24 830.24 0 0 1-8.082 2.347Zm10.81-3.16c2.699-.82 5.378-1.649 8.058-2.512l-1.07-2.11c-2.66.84-5.34 1.673-8.008 2.493Zm10.73-3.371a434.41 434.41 0 0 0 7.988-2.649l-1.14-2.09c-2.63.891-5.278 1.77-7.93 2.63Zm10.64-3.547a866.788 866.788 0 0 0 7.91-2.8l-1.203-2.083c-2.609.95-5.226 1.883-7.859 2.79Zm10.528-3.762c2.62-.96 5.23-1.95 7.832-2.95l-1.262-2.05c-2.578 1-5.168 1.969-7.777 2.93Zm10.422-3.96a532.1 532.1 0 0 0 7.738-3.098l-1.32-2.032a477.703 477.703 0 0 1-7.688 3.09Zm10.3-4.16c2.559-1.071 5.11-2.161 7.637-3.259l-1.387-2a456.452 456.452 0 0 1-7.59 3.239Zm10.168-4.38a441.005 441.005 0 0 0 7.532-3.422l-1.45-1.968c-2.48 1.16-4.972 2.289-7.48 3.402Zm10.02-4.59a464.25 464.25 0 0 0 7.422-3.582l-1.531-1.93c-2.43 1.204-4.891 2.391-7.36 3.551Zm9.871-4.8c2.45-1.23 4.871-2.48 7.281-3.75l-1.59-1.899c-2.39 1.258-4.8 2.5-7.23 3.719Zm9.691-5.032a478.315 478.315 0 0 0 7.137-3.918l-1.656-1.86a510.3 510.3 0 0 1-7.094 3.892Zm9.5-5.258c2.348-1.351 4.68-2.71 6.989-4.101l-1.739-1.809a424.397 424.397 0 0 1-6.93 4.059Zm9.297-5.492a338.055 338.055 0 0 0 6.793-4.258l-1.812-1.77a420.328 420.328 0 0 1-6.739 4.22Zm9.032-5.707c2.23-1.46 4.44-2.941 6.62-4.43l-1.89-1.73a319.43 319.43 0 0 1-6.559 4.399Zm8.8-5.953c2.18-1.52 4.32-3.066 6.442-4.629l-1.961-1.668a368.175 368.175 0 0 1-6.38 4.59Zm8.551-6.207c2.11-1.582 4.18-3.191 6.219-4.812l-2.04-1.61c-2.019 1.61-4.07 3.2-6.16 4.77Zm8.258-6.45a281.057 281.057 0 0 0 5.98-5l-2.109-1.55a274.136 274.136 0 0 1-5.93 4.95Zm7.93-6.702c1.941-1.7 3.851-3.43 5.722-5.18l-2.191-1.469a228.957 228.957 0 0 1-5.66 5.121Zm7.582-6.93c.257-.25.52-.5.78-.75l-2.222-1.45c-.258.25-.52.5-.77.74l2.212 1.46"
          />
          <path
            fill="#020001"
            d="M1295.16 849.941c.031.008 2.871.57 8.559 1.36l.492-2.25c-2.8-.39-4.902-.723-6.29-.961-.702-.11-1.222-.211-1.562-.27-.168-.03-.3-.05-.39-.07l-.11-.02Zm11.41 1.739c2.461.32 5.309.672 8.57 1.02l.391-2.259c-3.23-.351-6.062-.691-8.5-1.011ZM1318 853c2.64.262 5.5.531 8.602.8l.308-2.269a478.302 478.302 0 0 1-8.539-.8Zm11.469 1.04c2.71.21 5.582.42 8.62.632l.24-2.281c-3.02-.2-5.88-.41-8.567-.621Zm11.492.812c2.75.168 5.629.328 8.629.476l.18-2.27a663.932 663.932 0 0 1-8.59-.48Zm11.5.617c2.777.133 5.66.25 8.64.351l.13-2.28a628.867 628.867 0 0 1-8.602-.349Zm11.52.453c2.917.09 5.808.168 8.64.226l.078-2.277c-2.828-.062-5.699-.14-8.597-.23Zm11.53.277c2.93.051 5.817.09 8.637.11l.032-2.29c-2.82-.007-5.692-.05-8.61-.097Zm11.528.121h2.16c2.211 0 4.371-.011 6.492-.03l-.03-2.278c-2.11.02-4.27.027-6.462.027h-2.148Zm11.531-.058a584.79 584.79 0 0 0 8.649-.153l-.09-2.28c-2.758.07-5.64.12-8.598.151Zm11.532-.23c3.027-.083 5.91-.18 8.648-.294l-.148-2.277c-2.723.11-5.59.21-8.602.3Zm11.527-.423c3.11-.148 6-.308 8.64-.48l-.23-2.27c-2.617.172-5.48.332-8.578.47Zm11.52-.68c3.421-.238 6.32-.507 8.652-.769l-.41-2.262c-2.262.262-5.121.524-8.5.762Zm11.55-1.14c.75-.11 1.403-.219 1.942-.328.55-.11 1-.211 1.39-.352l-1.16-2.09c-.14.051-.48.141-.93.231a26.3 26.3 0 0 1-1.761.3l.52 2.24M1300.531 860.219c.008 0 3.2.453 8.578 1.09l.43-2.258c-2.68-.313-4.809-.582-6.27-.781-.73-.09-1.289-.16-1.667-.22a19.52 19.52 0 0 1-.57-.081Zm11.438 1.422c2.531.289 5.41.609 8.582.93l.37-2.262c-3.151-.32-6.023-.637-8.542-.918Zm11.441 1.218c2.711.27 5.59.54 8.602.801l.308-2.27c-3-.261-5.86-.53-8.558-.788Zm11.469 1.04c2.781.222 5.672.44 8.621.652l.25-2.281c-2.941-.2-5.8-.41-8.57-.641Zm11.5.84c2.832.183 5.723.34 8.64.48l.172-2.278c-2.902-.132-5.77-.3-8.582-.48Zm11.512.613c2.879.117 5.77.218 8.668.289l.082-2.282c-2.871-.07-5.743-.16-8.59-.289Zm11.558.347c2.04.031 4.082.051 6.102.051h2.57l-.012-2.281h-2.558c-2 0-4.02-.02-6.04-.047Zm11.551.04c2.898-.009 5.79-.04 8.648-.067l-.039-2.281c-2.859.03-5.738.05-8.62.07Zm11.531-.11c2.918-.04 5.809-.09 8.64-.149l-.081-2.28c-2.82.062-5.7.109-8.61.152Zm11.52-.219a695.6 695.6 0 0 0 8.648-.25l-.12-2.281c-2.79.101-5.669.18-8.61.25Zm11.527-.351c3.012-.11 5.902-.239 8.652-.38l-.19-2.28a571.1 571.1 0 0 1-8.599.382Zm11.531-.54c3.11-.167 6.012-.37 8.653-.59l-.301-2.269c-2.602.219-5.473.41-8.563.59Zm11.532-.84c3.53-.34 6.46-.71 8.68-1.128l-.673-2.223c-2.039.39-4.886.762-8.347 1.082Zm11.668-1.878c.562-.2 1.05-.41 1.48-.73l-1.969-1.66c-.039.03-.28.167-.672.3l1.16 2.09M1345.46 984.84s-1.288-2.262-3.62-6.281l-2.61.953c1.16 2.008 2.06 3.578 2.68 4.648.621 1.059.942 1.621.942 1.621l2.617-.941Zm-4.82-8.36c-1.05-1.832-2.261-3.921-3.609-6.25l-2.61.95c1.34 2.332 2.548 4.422 3.61 6.25Zm-4.812-8.332a3412.237 3412.237 0 0 0-3.61-6.238l-2.609.95c1.282 2.218 2.493 4.3 3.61 6.242Zm-4.808-8.308c-1.149-1.988-2.348-4.07-3.598-6.238l-2.621.949c1.258 2.168 2.46 4.25 3.61 6.238Zm-4.801-8.32c-1.168-2.008-2.367-4.09-3.61-6.23l-2.62.948c1.241 2.14 2.452 4.223 3.613 6.242Zm-4.809-8.301c-1.18-2.028-2.379-4.11-3.61-6.23l-2.62.952c1.23 2.118 2.441 4.2 3.61 6.23Zm-4.808-8.309c-1.192-2.039-2.391-4.12-3.622-6.23l-2.609.96c1.23 2.11 2.43 4.18 3.61 6.22Zm-4.82-8.3c-1.192-2.051-2.391-4.13-3.61-6.231l-2.613.96c1.222 2.102 2.421 4.173 3.613 6.22Zm-4.813-8.301c-1.2-2.059-2.399-4.13-3.617-6.23l-2.614.96c1.223 2.09 2.422 4.172 3.614 6.223Zm-4.82-8.297c-1.2-2.063-2.41-4.14-3.618-6.23l-2.61.956c1.208 2.09 2.419 4.16 3.618 6.223Zm-4.829-8.301c-1.199-2.063-2.398-4.14-3.61-6.223l-2.62.953c1.219 2.09 2.422 4.16 3.62 6.23l2.618-.96Zm-4.82-8.29c-1.2-2.07-2.41-4.14-3.621-6.21l-2.61.95c1.211 2.077 2.422 4.148 3.622 6.218Zm-4.828-8.292-3.633-6.238-2.61.96c1.212 2.079 2.423 4.16 3.63 6.239Zm-4.844-8.309c-1.207-2.082-2.418-4.148-3.629-6.218l-2.61.957c1.212 2.07 2.423 4.14 3.63 6.222Zm-4.84-8.289c-1.218-2.082-2.43-4.16-3.629-6.222l-2.609.96c1.2 2.06 2.422 4.141 3.629 6.22Zm-4.84-8.293c-1.226-2.09-2.437-4.16-3.636-6.218l-2.614.96c1.204 2.06 2.422 4.13 3.641 6.22Zm-4.859-8.289c-1.219-2.09-2.437-4.16-3.64-6.21l-2.61.96c1.2 2.051 2.422 4.121 3.652 6.211Zm-4.86-8.277c-1.23-2.102-2.449-4.184-3.648-6.223l-2.601.973c1.199 2.039 2.41 4.11 3.648 6.207Zm-4.87-8.293c-1.239-2.098-2.457-4.18-3.66-6.207l-2.598.969c1.199 2.03 2.418 4.097 3.66 6.21Zm-4.88-8.27c-1.25-2.129-2.48-4.199-3.667-6.21l-2.602.972c1.192 2.008 2.418 4.078 3.668 6.2Zm-4.898-8.28c-1.261-2.138-2.492-4.208-3.68-6.208l-2.601.98a838.462 838.462 0 0 1 3.68 6.2Zm-4.91-8.27c-1.3-2.168-2.531-4.239-3.71-6.2l-2.602.98c1.18 1.962 2.421 4.032 3.71 6.192Zm-4.95-8.27c-.792-1.3-1.55-2.55-2.273-3.75-.468-.777-.957-1.578-1.457-2.418l-2.601.98c.512.84 1 1.649 1.469 2.43a444.21 444.21 0 0 1 2.261 3.75Zm-4.972-8.23c-1.148-1.93-2.37-4-3.668-6.2l-2.61.961a667.643 667.643 0 0 0 3.688 6.211Zm-4.89-8.27c-1.16-1.98-2.368-4.05-3.63-6.219l-2.609.961a841.267 841.267 0 0 0 3.64 6.219Zm-4.829-8.289c-1.16-2-2.359-4.078-3.601-6.23l-2.617.949c1.238 2.152 2.437 4.23 3.597 6.242Zm-4.8-8.3c-1.16-2.02-2.352-4.098-3.57-6.24l-2.622.938c1.223 2.141 2.422 4.223 3.582 6.243Zm-4.75-8.321a1054.05 1054.05 0 0 1-3.551-6.238l-2.617.937c1.199 2.133 2.386 4.211 3.547 6.242Zm-4.73-8.32c-1.16-2.04-2.329-4.13-3.528-6.25l-2.621.93c1.187 2.12 2.37 4.21 3.527 6.25Zm-4.7-8.329a1696.04 1696.04 0 0 1-3.512-6.261l-2.629.93c1.192 2.12 2.36 4.203 3.512 6.261Zm-4.68-8.34c-1.148-2.062-2.308-4.152-3.492-6.269l-2.629.918c1.18 2.121 2.34 4.211 3.492 6.27Zm-4.648-8.35c-1.152-2.071-2.313-4.161-3.48-6.27l-2.633.91c1.171 2.12 2.332 4.21 3.48 6.28Zm-4.633-8.36c-1.14-2.07-2.3-4.16-3.46-6.27l-2.638.91c1.168 2.11 2.32 4.2 3.457 6.27Zm-4.61-8.36c-1.14-2.082-2.288-4.172-3.44-6.28l-2.637.901c1.148 2.118 2.296 4.207 3.437 6.29Zm-4.59-8.379c-1.128-2.07-2.28-4.171-3.429-6.28l-2.64.898c1.152 2.12 2.3 4.21 3.43 6.293Zm-4.558-8.37c-1.14-2.09-2.27-4.18-3.422-6.29l-2.64.899c1.14 2.11 2.281 4.21 3.41 6.289Zm-4.55-8.391c-1.13-2.078-2.262-4.18-3.403-6.29l-2.637.891c1.137 2.11 2.27 4.207 3.399 6.297Zm-4.52-8.39c-1.133-2.09-2.25-4.188-3.383-6.302l-2.648.89c1.129 2.11 2.261 4.212 3.379 6.302Zm-4.512-8.4a1849.53 1849.53 0 0 1-3.36-6.3l-2.648.879c1.118 2.11 2.25 4.222 3.368 6.312Zm-4.48-8.41c-1.11-2.09-2.23-4.19-3.34-6.308l-2.66.887c1.12 2.113 2.242 4.21 3.351 6.312Zm-4.457-8.41a2388.48 2388.48 0 0 1-3.332-6.308l-2.649.867c1.11 2.121 2.219 4.223 3.328 6.32Zm-4.434-8.422c-1.11-2.097-2.207-4.207-3.308-6.32l-2.66.871c1.1 2.121 2.21 4.223 3.312 6.332Zm-4.406-8.418c-1.102-2.101-2.192-4.199-3.281-6.308l-2.66.867c1.09 2.11 2.19 4.211 3.28 6.313Zm-4.383-8.41c-1.09-2.11-2.18-4.21-3.27-6.332l-2.66.871a9446.2 9446.2 0 0 1 3.27 6.332Zm-4.348-8.441c-1.09-2.11-2.18-4.219-3.261-6.34l-2.668.86c1.09 2.12 2.18 4.23 3.258 6.351Zm-4.34-8.45a976.165 976.165 0 0 1-3.242-6.359l-2.668.852c1.079 2.117 2.16 4.238 3.239 6.36Zm-4.32-8.48c-1.082-2.129-2.16-4.25-3.23-6.37l-2.672.843c1.07 2.129 2.152 4.25 3.23 6.379Zm-4.293-8.488c-1.066-2.121-2.136-4.242-3.199-6.36l-2.668.84c1.059 2.118 2.129 4.239 3.188 6.36Zm-4.258-8.48c-1.058-2.13-2.109-4.25-3.16-6.372l-2.68.832c1.051 2.13 2.11 4.25 3.169 6.38Zm-4.21-8.493c-1.06-2.129-2.11-4.258-3.149-6.379l-2.68.832c1.047 2.118 2.09 4.25 3.149 6.38Zm-4.192-8.5c-1.039-2.129-2.078-4.258-3.11-6.379l-2.687.813a959.143 959.143 0 0 0 3.117 6.387Zm-4.148-8.508c-1.032-2.14-2.059-4.27-3.09-6.402l-2.68.82c1.02 2.122 2.05 4.262 3.09 6.391Zm-4.11-8.53c-1.03-2.141-2.039-4.27-3.05-6.4l-2.692.81c1.012 2.12 2.031 4.261 3.05 6.402Zm-4.07-8.528c-1.012-2.152-2.02-4.293-3.02-6.41l-2.69.789c1 2.129 2 4.27 3.019 6.418Zm-4.02-8.55c-1-2.153-2-4.294-2.98-6.423l-2.7.781c.981 2.141 1.981 4.282 2.981 6.43Zm-3.968-8.563c-1-2.16-1.98-4.297-2.953-6.438l-2.7.777c.97 2.133 1.95 4.282 2.95 6.442Zm-3.922-8.579c-.98-2.16-1.95-4.308-2.899-6.44l-2.71.76c.949 2.13 1.917 4.29 2.898 6.45Zm-3.86-8.59a904.18 904.18 0 0 1-2.851-6.46l-2.719.75c.942 2.14 1.89 4.289 2.86 6.46Zm-3.789-8.62a579.787 579.787 0 0 1-2.8-6.47l-2.72.731c.907 2.149 1.849 4.309 2.798 6.489Zm-3.722-8.63c-.93-2.18-1.84-4.35-2.73-6.492l-2.739.723c.898 2.14 1.809 4.309 2.738 6.5Zm-3.63-8.652c-.91-2.187-1.8-4.36-2.66-6.5l-2.738.692c.868 2.148 1.75 4.32 2.66 6.52Zm-3.53-8.668c-.86-2.199-1.707-4.379-2.528-6.53l-2.75.66c.82 2.16 1.668 4.34 2.54 6.55Zm-3.36-8.71a666.379 666.379 0 0 1-2.437-6.551l-2.762.632c.79 2.16 1.61 4.348 2.45 6.57Zm-3.23-8.739c-.809-2.23-1.59-4.422-2.34-6.582l-2.777.61c.757 2.171 1.539 4.37 2.347 6.601Zm-3.11-8.77c-.77-2.242-1.507-4.43-2.23-6.601l-2.777.578a606.605 606.605 0 0 0 2.238 6.621Zm-2.949-8.8c-.73-2.242-1.441-4.45-2.11-6.621l-2.788.539c.668 2.18 1.379 4.402 2.11 6.652Zm-2.789-8.832a426.647 426.647 0 0 1-1.98-6.649l-2.801.508c.629 2.184 1.289 4.41 1.98 6.672Zm-2.61-8.867c-.64-2.274-1.25-4.493-1.831-6.672l-2.809.468a438.907 438.907 0 0 0 1.828 6.704Zm-2.41-8.903a352.755 352.755 0 0 1-1.652-6.687l-2.828.418c.52 2.191 1.07 4.441 1.66 6.73Zm-2.171-8.93a287.733 287.733 0 0 1-1.461-6.718l-2.84.37c.45 2.2.941 4.45 1.473 6.759Zm-1.91-8.96c-.461-2.309-.872-4.559-1.239-6.75l-2.851.3c.37 2.211.789 4.47 1.242 6.801Zm-1.61-9c-.37-2.329-.7-4.579-.98-6.77l-2.86.23c.282 2.2.61 4.481.989 6.82Zm-1.25-9.028a187.39 187.39 0 0 1-.66-6.793l-2.871.14c.172 2.212.39 4.493.672 6.86Zm-.82-9.062a150.67 150.67 0 0 1-.29-6.79l-2.87.032c.039 2.21.129 4.5.28 6.879Zm-.309-9.059v-.039c0-2.351.07-4.601.2-6.742l-2.88-.11c-.132 2.18-.19 4.47-.19 6.852v.04Zm.348-9.039c.191-2.383.46-4.621.8-6.742l-2.859-.29a94.51 94.51 0 0 0-.808 6.891Zm1.191-8.973c.45-2.378.98-4.578 1.602-6.628l-2.8-.52a66.933 66.933 0 0 0-1.653 6.809Zm2.29-8.796c.812-2.34 1.718-4.454 2.71-6.34l-2.66-.871a49.286 49.286 0 0 0-2.82 6.609Zm3.84-8.372a34.205 34.205 0 0 1 3.48-4.84c.23-.269.48-.53.75-.8l-2.23-1.43c-.321.309-.61.621-.891.942a36.4 36.4 0 0 0-3.707 5.148Zm6.062-7.171c1.797-1.32 4.09-2.52 6.828-3.52l-1.211-2.07c-2.969 1.09-5.508 2.402-7.57 3.91Zm9.379-4.36c2.418-.719 5.12-1.308 8.07-1.73l-.512-2.25c-3.11.453-5.969 1.07-8.558 1.84Zm10.847-2.078a88.245 88.245 0 0 1 8.422-.48l-.031-2.282c-3.09.032-6.02.2-8.777.5Zm11.25-.473c2.711.051 5.532.211 8.473.473l.328-2.262c-3.02-.28-5.937-.437-8.738-.488Zm11.282.762c2.71.309 5.5.719 8.378 1.219l.622-2.219c-2.942-.52-5.81-.941-8.59-1.25Zm11.14 1.738c2.68.532 5.41 1.141 8.211 1.852l.867-2.18a162.602 162.602 0 0 0-8.386-1.879Zm10.91 2.563c2.621.71 5.29 1.5 8 2.367l1.09-2.11c-2.762-.89-5.48-1.698-8.16-2.417Zm10.63 3.25c2.55.867 5.14 1.809 7.769 2.828l1.261-2.039c-2.66-1.04-5.3-2-7.902-2.89Zm10.312 3.848a207.962 207.962 0 0 1 7.52 3.242l1.429-1.98a201.667 201.667 0 0 0-7.633-3.29Zm9.988 4.382a219.068 219.068 0 0 1 7.262 3.598l1.578-1.91a242.44 242.44 0 0 0-7.371-3.649Zm9.64 4.848c2.32 1.242 4.66 2.55 7.008 3.91l1.704-1.84c-2.383-1.379-4.75-2.699-7.102-3.96Zm9.301 5.27a216.614 216.614 0 0 1 6.75 4.191l1.82-1.77c-2.292-1.48-4.57-2.89-6.84-4.25Zm8.957 5.632a215.971 215.971 0 0 1 6.5 4.438l1.91-1.707a239.735 239.735 0 0 0-6.57-4.492Zm8.622 5.95a264.475 264.475 0 0 1 6.25 4.668l2-1.637a253.932 253.932 0 0 0-6.31-4.711Zm8.289 6.257c1.82 1.43 3.652 2.903 5.472 4.422.18.14.36.29.54.442l2.077-1.57c-.18-.153-.359-.301-.539-.454-1.84-1.527-3.68-3.02-5.52-4.457Zm7.96 6.524c1.891 1.61 3.801 3.297 5.731 5.066l2.172-1.5a240.488 240.488 0 0 0-5.793-5.117Zm7.602 6.789c1.809 1.68 3.64 3.43 5.488 5.238l2.243-1.437a321.725 321.725 0 0 0-5.543-5.282Zm7.277 7.008a348.277 348.277 0 0 1 5.293 5.383l2.29-1.383a293.694 293.694 0 0 0-5.333-5.418l-2.238 1.418Zm7.024 7.191c1.7 1.79 3.398 3.621 5.117 5.488l2.32-1.34a453.548 453.548 0 0 0-5.14-5.519Zm6.789 7.34c1.648 1.82 3.3 3.68 4.96 5.578l2.368-1.297a470.518 470.518 0 0 0-4.988-5.61Zm6.59 7.45a653.338 653.338 0 0 1 4.828 5.66l2.39-1.27a603.814 603.814 0 0 0-4.84-5.68Zm6.418 7.55a545.01 545.01 0 0 1 4.703 5.73l2.418-1.242a622.08 622.08 0 0 0-4.719-5.738Zm6.25 7.64a490.056 490.056 0 0 1 4.59 5.782l2.453-1.203a528.435 528.435 0 0 0-4.621-5.797Zm6.11 7.72c1.491 1.91 2.991 3.859 4.491 5.831l2.461-1.18c-1.5-1.98-3.011-3.933-4.5-5.85Zm5.972 7.78c1.469 1.93 2.937 3.891 4.41 5.872l2.48-1.153a859.155 859.155 0 0 0-4.421-5.898Zm5.86 7.84c1.429 1.95 2.87 3.918 4.308 5.918l2.5-1.136c-1.45-2-2.89-3.98-4.328-5.934Zm5.737 7.891c1.41 1.969 2.82 3.95 4.243 5.957l2.5-1.117c-1.41-2.012-2.832-4-4.243-5.973Zm5.633 7.95c1.39 1.968 2.77 3.968 4.16 5.988l2.528-1.098c-1.39-2.02-2.778-4.02-4.168-6Zm5.54 7.988c1.359 1.98 2.718 3.992 4.09 6.011l2.53-1.07a623.812 623.812 0 0 0-4.101-6.031Zm5.44 8.02c1.34 2 2.68 4.023 4.02 6.05l2.547-1.059c-1.348-2.03-2.687-4.05-4.027-6.058Zm5.348 8.07c1.32 2.011 2.641 4.042 3.95 6.081l2.562-1.039c-1.32-2.05-2.64-4.082-3.96-6.09Zm5.262 8.113c1.3 2.008 2.598 4.047 3.899 6.097l2.57-1.03c-1.3-2.048-2.61-4.09-3.91-6.11Zm5.188 8.129c1.27 2.03 2.55 4.07 3.832 6.129l2.578-1.008a796.484 796.484 0 0 0-3.84-6.14Zm5.101 8.168c1.262 2.043 2.52 4.082 3.781 6.152l2.59-1a1061.76 1061.76 0 0 0-3.793-6.152Zm5.031 8.203c1.239 2.039 2.48 4.097 3.72 6.168l2.6-.98c-1.241-2.071-2.491-4.13-3.73-6.18Zm4.95 8.226a859.63 859.63 0 0 1 3.668 6.184l2.613-.961a702.43 702.43 0 0 0-3.684-6.2Zm4.89 8.25a2190.1 2190.1 0 0 1 3.617 6.211l2.614-.949c-1.211-2.09-2.41-4.16-3.621-6.219Zm4.809 8.282c1.2 2.058 2.379 4.14 3.57 6.218l2.621-.93c-1.191-2.09-2.383-4.167-3.57-6.238Zm4.75 8.3a671.4 671.4 0 0 1 3.52 6.25l2.628-.93c-1.168-2.09-2.347-4.18-3.52-6.25Zm4.691 8.328c1.149 2.082 2.309 4.16 3.469 6.262l2.629-.91c-1.16-2.102-2.309-4.191-3.469-6.27Zm4.61 8.352c1.148 2.078 2.289 4.18 3.43 6.281l2.64-.902c-1.14-2.11-2.281-4.2-3.43-6.29Zm4.558 8.371c1.13 2.09 2.25 4.188 3.38 6.29l2.651-.88c-1.128-2.11-2.261-4.21-3.39-6.312Zm4.492 8.39c1.118 2.098 2.23 4.2 3.34 6.31l2.649-.872a874.172 874.172 0 0 0-3.34-6.32Zm4.438 8.419c1.09 2.101 2.191 4.199 3.281 6.32l2.66-.86c-1.09-2.12-2.191-4.23-3.289-6.331Zm4.371 8.43c1.078 2.109 2.16 4.218 3.238 6.34l2.672-.848a962.396 962.396 0 0 0-3.25-6.352Zm4.309 8.449c1.07 2.113 2.14 4.23 3.203 6.363l2.668-.852a1381.96 1381.96 0 0 0-3.2-6.36Zm4.261 8.472c1.051 2.117 2.102 4.239 3.149 6.367l2.68-.828a743.5 743.5 0 0 0-3.16-6.37Zm4.2 8.489c1.039 2.12 2.07 4.25 3.109 6.378l2.68-.82c-1.028-2.129-2.07-4.258-3.11-6.379Zm4.14 8.511c1.02 2.13 2.04 4.258 3.059 6.39l2.691-.8c-1.02-2.14-2.039-4.281-3.07-6.402Zm4.078 8.528a882.406 882.406 0 0 1 3.024 6.402l2.699-.8c-1.012-2.141-2.02-4.282-3.031-6.411Zm4.024 8.543c1 2.128 1.988 4.27 2.988 6.41l2.7-.782c-1-2.152-1.99-4.289-2.99-6.421Zm3.968 8.558a746.134 746.134 0 0 1 2.942 6.43l2.707-.781c-.98-2.149-1.957-4.297-2.95-6.438Zm3.91 8.57c.97 2.141 1.938 4.29 2.9 6.442l2.71-.762c-.96-2.148-1.93-4.3-2.898-6.45Zm3.86 8.59c.95 2.149 1.91 4.301 2.852 6.45l2.718-.75c-.949-2.16-1.898-4.31-2.86-6.461Zm3.8 8.61c.938 2.148 1.88 4.3 2.81 6.46l2.718-.742c-.93-2.16-1.867-4.32-2.808-6.468Zm3.74 8.62a828.34 828.34 0 0 1 2.769 6.481l2.73-.73c-.918-2.172-1.848-4.332-2.777-6.492Zm3.69 8.641c.91 2.149 1.82 4.32 2.72 6.48l2.741-.71c-.91-2.172-1.82-4.34-2.742-6.5Zm3.63 8.649c.902 2.16 1.788 4.332 2.68 6.5l2.741-.711c-.902-2.168-1.793-4.34-2.691-6.508Zm3.57 8.66c.879 2.16 1.75 4.32 2.629 6.48l2.742-.69c-.88-2.169-1.762-4.33-2.64-6.5Zm3.5 8.648c.87 2.16 1.73 4.332 2.59 6.5l2.742-.68a1507.01 1507.01 0 0 0-2.59-6.507Zm3.449 8.672c.851 2.168 1.7 4.34 2.55 6.52l2.75-.668c-.85-2.184-1.699-4.363-2.558-6.531Zm3.39 8.7c.84 2.171 1.68 4.351 2.512 6.539l2.758-.66c-.84-2.188-1.668-4.368-2.52-6.547Zm3.34 8.718c.18.461.36.922.532 1.39a892.1 892.1 0 0 1 1.949 5.161l2.762-.648c-.653-1.711-1.301-3.43-1.954-5.172-.18-.457-.359-.93-.527-1.39Zm3.313 8.742c.828 2.2 1.648 4.38 2.469 6.551l2.757-.652c-.82-2.168-1.648-4.348-2.476-6.559Zm3.289 8.739c.828 2.203 1.66 4.39 2.469 6.55l2.761-.648c-.82-2.172-1.64-4.351-2.472-6.562Zm3.289 8.742c.828 2.2 1.648 4.39 2.46 6.55l2.759-.652c-.809-2.16-1.63-4.347-2.457-6.55Zm3.281 8.738c.828 2.211 1.649 4.39 2.457 6.563l2.762-.653c-.82-2.168-1.629-4.347-2.46-6.558Zm3.278 8.742c.82 2.207 1.64 4.399 2.453 6.57l2.75-.652c-.801-2.168-1.621-4.347-2.453-6.558Zm3.261 8.75c.82 2.207 1.64 4.399 2.442 6.559l2.758-.64c-.801-2.169-1.622-4.348-2.442-6.57Zm3.258 8.75c.82 2.207 1.633 4.399 2.442 6.559l2.75-.64c-.801-2.169-1.61-4.348-2.43-6.57Zm3.25 8.75 2.434 6.559 2.758-.64-2.43-6.56Zm3.242 8.75c.809 2.22 1.621 4.41 2.418 6.57l2.762-.64c-.8-2.16-1.602-4.351-2.422-6.57Zm3.23 8.758c.81 2.211 1.622 4.403 2.41 6.563l2.759-.633c-.79-2.168-1.598-4.36-2.41-6.57Zm3.22 8.75c.808 2.223 1.609 4.41 2.402 6.57l2.77-.628c-.794-2.16-1.602-4.352-2.41-6.57Zm3.21 8.762 2.399 6.57 2.762-.633-2.403-6.57Zm3.2 8.758c.808 2.23 1.601 4.422 2.39 6.582l2.758-.64c-.777-2.15-1.578-4.34-2.387-6.571Zm3.18 8.77c.812 2.222 1.609 4.421 2.39 6.57l2.762-.63c-.782-2.148-1.57-4.34-2.383-6.57Zm3.18 8.761c.8 2.23 1.589 4.43 2.37 6.578l2.77-.629c-.782-2.148-1.57-4.34-2.38-6.578Zm3.16 8.77c.8 2.242 1.59 4.43 2.359 6.582l2.77-.622c-.77-2.152-1.56-4.351-2.36-6.582Zm3.152 8.77c.796 2.241 1.578 4.44 2.347 6.581l2.77-.621c-.77-2.14-1.547-4.34-2.36-6.578Zm3.128 8.78c.801 2.25 1.579 4.442 2.34 6.578l2.77-.617c-.762-2.14-1.54-4.332-2.34-6.582Zm3.122 8.782c.796 2.25 1.57 4.449 2.32 6.578l2.77-.61c-.75-2.14-1.52-4.34-2.32-6.59Zm3.097 8.777c.79 2.262 1.563 4.46 2.313 6.59l2.77-.61c-.743-2.129-1.52-4.328-2.313-6.59Zm3.082 8.781c.79 2.281 1.559 4.48 2.29 6.602l2.78-.614c-.742-2.117-1.511-4.32-2.3-6.59Zm3.059 8.79c.789 2.288 1.55 4.491 2.27 6.6l2.78-.6c-.73-2.11-1.492-4.31-2.28-6.598Zm3.031 8.8c.79 2.309 1.55 4.512 2.258 6.59l2.77-.59c-.708-2.078-1.458-4.281-2.258-6.602Zm3 8.79c.8 2.358 1.55 4.562 2.23 6.608l2.778-.59c-.68-2.046-1.43-4.25-2.23-6.609l-2.778.602Zm2.969 8.812c.82 2.437 1.55 4.636 2.2 6.609l2.78-.582c-.648-1.969-1.379-4.168-2.199-6.617Zm2.93 8.808c.902 2.762 1.609 4.95 2.152 6.61l2.777-.56a644.64 644.64 0 0 0-2.148-6.632Zm2.851 8.809c.39 1.23.57 1.82.57 1.82l2.79-.539s-.18-.602-.57-1.828l-2.79.547"
          />
          <path
            fill="#020001"
            d="M1137.828 335.77s.121-.11.371-.32c.762-.641 2.672-2.212 5.653-4.56l-2.024-1.62c-4.008 3.152-6.098 4.93-6.11 4.94Zm8.07-6.47a547.213 547.213 0 0 1 6.23-4.722l-1.956-1.656a327.707 327.707 0 0 0-6.281 4.75Zm8.332-6.269c1.961-1.43 4.09-2.972 6.38-4.601l-1.919-1.7c-2.3 1.641-4.441 3.18-6.41 4.63Zm8.52-6.11c2.04-1.44 4.21-2.94 6.488-4.5l-1.867-1.722c-2.3 1.563-4.473 3.07-6.531 4.512Zm8.672-5.98a747.285 747.285 0 0 1 6.598-4.39l-1.829-1.762a592.242 592.242 0 0 0-6.632 4.422Zm8.816-5.84a570.183 570.183 0 0 1 6.703-4.292l-1.8-1.778a498.939 498.939 0 0 0-6.73 4.309Zm8.953-5.71c2.2-1.371 4.457-2.77 6.79-4.192l-1.75-1.808a569.288 569.288 0 0 0-6.833 4.21Zm9.07-5.582a736.22 736.22 0 0 1 6.887-4.098l-1.707-1.832a695.494 695.494 0 0 0-6.921 4.121Zm9.2-5.45a727.25 727.25 0 0 1 6.98-4l-1.671-1.859a720.274 720.274 0 0 0-7.008 4.02Zm9.32-5.32c2.309-1.3 4.668-2.598 7.07-3.91l-1.632-1.867a598.9 598.9 0 0 0-7.098 3.918Zm9.438-5.187c2.34-1.262 4.73-2.532 7.152-3.813l-1.59-1.898a782.11 782.11 0 0 0-7.18 3.82Zm9.55-5.063c2.372-1.23 4.782-2.46 7.231-3.7l-1.54-1.917a596.177 596.177 0 0 0-7.269 3.719Zm9.66-4.918c2.4-1.2 4.84-2.402 7.321-3.601l-1.5-1.942a649.037 649.037 0 0 0-7.352 3.613Zm9.77-4.781a893.66 893.66 0 0 1 7.403-3.488l-1.454-1.973a901.319 901.319 0 0 0-7.437 3.512Zm9.88-4.63c2.46-1.14 4.96-2.269 7.48-3.39l-1.41-1.992a723.534 723.534 0 0 0-7.508 3.402Zm9.98-4.5c2.5-1.089 5.011-2.19 7.562-3.269l-1.36-2.011a712.288 712.288 0 0 0-7.59 3.289l1.4 1.992Zm10.09-4.339c2.523-1.062 5.07-2.11 7.64-3.16l-1.309-2.031c-2.59 1.05-5.14 2.11-7.671 3.18Zm10.19-4.191c2.552-1.02 5.122-2.032 7.712-3.04l-1.262-2.05a942.833 942.833 0 0 0-7.738 3.05l1.3 2.04Zm10.302-4.032c2.57-.976 5.16-1.957 7.78-2.918l-1.21-2.07c-2.633.969-5.242 1.95-7.82 2.93Zm10.379-3.867a736.582 736.582 0 0 1 7.859-2.793l-1.16-2.09a622.735 622.735 0 0 0-7.89 2.813Zm10.492-3.703c2.617-.898 5.258-1.789 7.918-2.668l-1.102-2.101c-2.68.882-5.328 1.77-7.969 2.68Zm10.566-3.527c2.652-.86 5.313-1.7 8-2.531l-1.047-2.13c-2.703.84-5.383 1.688-8.031 2.551Zm10.672-3.36a538.916 538.916 0 0 1 8.059-2.39l-.989-2.14c-2.718.78-5.422 1.589-8.101 2.398Zm10.738-3.171c2.082-.59 4.172-1.168 6.274-1.75h-.012c.61-.16 1.238-.32 1.86-.489l-.91-2.16c-.622.16-1.25.328-1.872.488l-.008.012c-2.11.57-4.21 1.16-6.3 1.758l.98 2.14Zm10.84-2.942c2.723-.7 5.453-1.379 8.211-2.047l-.84-2.18c-2.77.669-5.52 1.36-8.25 2.06Zm10.961-2.707a610.9 610.9 0 0 1 8.262-1.902l-.781-2.188c-2.79.617-5.56 1.258-8.31 1.91Zm11.031-2.512c2.75-.597 5.52-1.187 8.309-1.757l-.719-2.211c-2.8.578-5.59 1.168-8.36 1.77Zm11.09-2.328c2.77-.562 5.559-1.11 8.36-1.64l-.668-2.22c-2.813.54-5.614 1.09-8.403 1.65Zm11.14-2.16c2.778-.52 5.579-1.031 8.38-1.52l-.621-2.23c-2.809.5-5.618 1.008-8.418 1.527Zm11.18-2c2.801-.492 5.598-.95 8.418-1.41l-.57-2.23c-2.828.449-5.648.917-8.457 1.41Zm11.23-1.86c2.81-.44 5.63-.87 8.45-1.292l-.531-2.239c-2.828.418-5.66.848-8.48 1.301Zm11.27-1.702c2.82-.41 5.649-.809 8.48-1.2l-.48-2.238c-2.851.379-5.68.777-8.52 1.188Zm11.31-1.579c2.839-.37 5.67-.73 8.51-1.09l-.44-2.25c-2.848.348-5.7.72-8.54 1.09Zm11.35-1.43c2.84-.34 5.688-.679 8.532-.991l-.402-2.258c-2.848.32-5.711.648-8.56.988Zm11.38-1.312c2.851-.308 5.699-.61 8.55-.886l-.36-2.274c-2.858.293-5.722.594-8.581.902Zm11.41-1.18c2.86-.277 5.718-.538 8.57-.796l-.32-2.262c-2.86.25-5.73.52-8.602.8Zm11.43-1.046c2.859-.242 5.718-.48 8.57-.703l-.29-2.27c-2.85.223-5.718.461-8.6.7Zm11.421-.922c2.867-.219 5.73-.418 8.578-.61l-.238-2.27c-2.86.188-5.73.392-8.61.61Zm11.45-.8c2.87-.18 5.738-.349 8.59-.509l-.212-2.281c-2.859.16-5.73.328-8.62.52Zm11.449-.669c2.879-.152 5.75-.293 8.601-.422l-.16-2.27c-2.86.122-5.742.262-8.633.423Zm11.468-.543c2.883-.117 5.75-.219 8.602-.316l-.121-2.282c-2.86.098-5.738.2-8.629.32Zm11.473-.406c2.89-.082 5.758-.152 8.61-.211l-.07-2.281c-2.86.058-5.74.129-8.65.21Zm11.48-.274a926.2 926.2 0 0 1 8.61-.097l-.031-2.29c-2.852.028-5.73.06-8.64.11Zm11.477-.117c1.203-.011 2.39-.011 3.57-.011 1.692 0 3.372.011 5.043.02l.02-2.278c-1.672-.012-3.36-.024-5.063-.024-1.187 0-2.378 0-3.578.012Zm11.48.028c2.91.03 5.782.07 8.614.132l.066-2.28c-2.84-.06-5.718-.102-8.636-.13Zm11.473.203c2.918.066 5.778.16 8.598.27l.14-2.282c-2.84-.11-5.718-.2-8.648-.27Zm11.469.379c2.91.129 5.781.27 8.578.43l.211-2.282c-2.828-.16-5.71-.3-8.64-.43Zm11.441.597c2.918.184 5.778.383 8.559.602l.29-2.27c-2.81-.218-5.68-.43-8.618-.61Zm11.41.832c2.93.25 5.778.532 8.528.82l.39-2.261c-2.789-.3-5.66-.57-8.609-.82Zm11.368 1.14c2.93.33 5.75.7 8.472 1.08l.508-2.24c-2.75-.39-5.61-.76-8.57-1.1Zm11.27 1.5c2.94.45 5.73.938 8.363 1.45l.687-2.21a214.38 214.38 0 0 0-8.5-1.481Zm11.12 2.009c1.23.261 2.43.531 3.582.8l.829-2.18c-1.192-.28-2.41-.558-3.668-.82l-.743 2.2"
          />
          <g clipPath="url(#e)">
            <g clipPath="url(#f)">
              <g clipPath="url(#g)">
                <path
                  fill="url(#h)"
                  d="M1372.14 971.309v31.601h-32.742V971.31Zm0 0"
                />
              </g>
            </g>
          </g>
          <path d="M1339.398 987.11h1.403c0 3.992 1.68 7.6 4.39 10.21 2.707 2.621 6.438 4.239 10.579 4.239 4.128 0 7.87-1.618 10.582-4.239 2.707-2.61 4.378-6.218 4.378-10.21 0-3.989-1.671-7.59-4.378-10.212-2.711-2.617-6.454-4.226-10.582-4.226-4.141 0-7.872 1.61-10.579 4.226-2.71 2.622-4.39 6.223-4.39 10.211H1338c0-4.73 1.988-9.03 5.2-12.129 3.21-3.101 7.671-5.02 12.57-5.02 4.902 0 9.351 1.919 12.558 5.02 3.223 3.098 5.211 7.399 5.211 12.13 0 4.73-1.988 9.03-5.21 12.128-3.208 3.102-7.657 5.024-12.56 5.024-4.898 0-9.359-1.922-12.57-5.024-3.21-3.097-5.199-7.398-5.199-12.129h1.398" />
          <g clipPath="url(#i)">
            <g clipPath="url(#j)">
              <g clipPath="url(#k)">
                <path fill="url(#l)" d="M1366.39 976.86v20.5h-21.242v-20.5Zm0 0" />
              </g>
            </g>
          </g>
          <path d="M1345.148 987.11h1.403c0 2.46 1.027 4.68 2.699 6.288 1.672 1.614 3.969 2.602 6.52 2.614 2.55-.012 4.84-1 6.511-2.614 1.668-1.609 2.7-3.828 2.7-6.289 0-2.46-1.032-4.668-2.7-6.289a9.34 9.34 0 0 0-6.511-2.601c-2.551 0-4.848.992-6.52 2.601-1.672 1.621-2.7 3.828-2.7 6.29h-2.8c0-3.2 1.352-6.11 3.52-8.2 2.171-2.101 5.18-3.398 8.5-3.398 3.308 0 6.332 1.297 8.5 3.398 2.171 2.09 3.52 5 3.52 8.2 0 3.199-1.349 6.109-3.52 8.199-2.168 2.101-5.192 3.402-8.5 3.402-3.32 0-6.329-1.3-8.5-3.402-2.168-2.09-3.52-5-3.52-8.2h1.398" />
          <path
            fill={color}
            d="M1363.672 992.79s-14.422 9.991-12.723 132.401c1.692 122.418 16.063 288.09 16.063 288.09l-36.364-8.16s-5.918-230.14-5.918-305.23c0-75.082 30.52-153.813 38.942-107.102"
          />
          <path d="m1363.672 992.79 1.11 1.491-.782-1.05.86.988-.079.062-.781-1.05.86.988-.25-.29.269.282-.02.008-.25-.29.27.282c-.008 0-.207.168-.559.7-1.242 1.839-4.21 7.898-6.78 24.327-2.59 16.434-4.83 43.23-4.83 86.621 0 6.102.04 12.532.142 19.313.84 61.148 4.859 133.148 8.66 189.86a5940.263 5940.263 0 0 0 5.129 70.32c.68 8.718 1.25 15.66 1.648 20.43.191 2.378.352 4.218.461 5.456.102 1.25.16 1.89.16 1.89l.211 2.513-40.332-9.051-.039-1.418c0-.012-5.922-230.133-5.922-305.281 0-29.903 4.8-60.301 11.14-83.32 3.173-11.512 6.723-21.173 10.313-28.06 1.809-3.452 3.61-6.21 5.469-8.21.93-1 1.89-1.813 2.91-2.41 1.02-.59 2.149-.961 3.328-.961 1.25-.008 2.48.441 3.48 1.21 1.512 1.16 2.634 2.9 3.61 5.25.973 2.348 1.793 5.348 2.461 9.09l.2 1.13-.958.671-1.11-1.492-1.882.32c-.848-4.757-1.95-8.12-3.09-10.097-.558-1-1.12-1.64-1.578-1.98-.473-.34-.77-.423-1.133-.43-.328 0-.777.109-1.367.449-1.11.62-2.59 2.097-4.11 4.328-2.69 3.91-5.59 10.043-8.35 17.75-8.31 23.133-15.532 60.441-15.52 96.762 0 37.507 1.48 113.82 2.949 180.738.738 33.45 1.48 64.57 2.039 87.32a189546.228 189546.228 0 0 0 .922 37.13l-1.903.042.43-1.793 36.363 8.172-.43 1.781-1.902.16c0-.02-14.37-165.703-16.07-288.222-.09-6.79-.129-13.239-.129-19.36 0-52.16 3.211-80.52 6.461-95.96 1.629-7.72 3.27-12.22 4.57-14.868 1.29-2.652 2.258-3.48 2.618-3.73l1.113 1.488-1.883.32 1.883-.32" />
          <path d="m1330.64 1379.2 5.141.78.27-1.66-5.14-.78Zm7.712 1.171 5.128.77.27-1.66-5.129-.77Zm7.699 1.16 5.14.77.27-1.66-5.14-.77Zm7.71 1.16 5.137.778.262-1.668-5.129-.77Zm7.7 1.16 1.84.278.27-1.66-1.84-.278-.27 1.66M1330.64 1383.969l5.141.77.27-1.66-5.14-.77Zm7.712 1.16 5.128.77.27-1.66-5.129-.77Zm7.699 1.16 5.14.781.27-1.66-5.14-.781Zm7.71 1.16 5.137.781.262-1.66-5.129-.78Zm7.7 1.172 1.84.27.27-1.66-1.84-.282-.27 1.672" />
          <g clipPath="url(#m)">
            <g clipPath="url(#n)">
              <g clipPath="url(#o)">
                <path
                  fill="url(#p)"
                  d="M1490.738 961.89v31.598h32.742v-31.597Zm0 0"
                />
              </g>
            </g>
          </g>
          <path d="M1523.48 977.691h-1.41c0 3.989-1.672 7.59-4.379 10.207-2.71 2.622-6.441 4.23-10.582 4.23-4.14 0-7.87-1.608-10.578-4.23-2.71-2.617-4.39-6.218-4.39-10.207 0-3.992 1.68-7.601 4.39-10.21 2.707-2.622 6.438-4.231 10.578-4.243 4.141.012 7.871 1.621 10.582 4.242 2.707 2.61 4.38 6.22 4.38 10.211h2.808c0-4.73-1.988-9.03-5.207-12.132-3.211-3.098-7.66-5.02-12.563-5.02-4.898 0-9.359 1.922-12.57 5.02-3.21 3.101-5.2 7.402-5.2 12.132 0 4.73 1.99 9.028 5.2 12.13 3.211 3.1 7.672 5.019 12.57 5.019 4.903 0 9.352-1.918 12.563-5.02 3.219-3.101 5.207-7.398 5.207-12.129h-1.399" />
          <g clipPath="url(#q)">
            <g clipPath="url(#r)">
              <g clipPath="url(#s)">
                <path fill="url(#t)" d="M1496.488 967.441v20.5h21.242v-20.5Zm0 0" />
              </g>
            </g>
          </g>
          <path d="M1517.73 977.691h-1.41c0 2.457-1.03 4.668-2.699 6.29-1.672 1.609-3.96 2.597-6.512 2.597a9.37 9.37 0 0 1-6.52-2.598c-1.667-1.62-2.698-3.832-2.698-6.289 0-2.46 1.03-4.68 2.699-6.293a9.37 9.37 0 0 1 6.52-2.597c2.55 0 4.84.988 6.511 2.597 1.668 1.614 2.7 3.832 2.7 6.293h2.808c0-3.203-1.348-6.113-3.52-8.203-2.168-2.097-5.187-3.398-8.5-3.398-3.32 0-6.328 1.3-8.5 3.398-2.168 2.09-3.52 5-3.52 8.203 0 3.2 1.352 6.11 3.52 8.2 2.172 2.097 5.18 3.398 8.5 3.398 3.313 0 6.332-1.3 8.5-3.398 2.172-2.09 3.52-5 3.52-8.2h-1.399" />
          <path
            fill={color}
            d="M1499.21 983.371s14.411 9.98 12.72 132.399c-1.692 122.421-16.059 288.09-16.059 288.09l36.348-8.16s5.922-230.141 5.922-305.231c0-75.078-30.512-153.809-38.93-107.098"
          />
          <path d="m1499.21 983.371-1.108 1.488.777-1.05-.867.98.09.07.777-1.05-.867.98.25-.277-.262.277h.012l.25-.277-.262.277s.2.172.55.7c1.24 1.831 4.212 7.89 6.79 24.32 2.59 16.43 4.832 43.23 4.832 86.632 0 6.098-.05 12.528-.14 19.309-.852 61.148-4.86 133.148-8.66 189.86a6352.788 6352.788 0 0 1-5.134 70.312c-.687 8.719-1.25 15.668-1.648 20.437-.2 2.38-.352 4.22-.461 5.461-.098 1.239-.16 1.89-.16 1.89l-.219 2.509 40.34-9.047.039-1.422c0-.012 5.922-230.14 5.922-305.281-.012-29.899-4.801-60.297-11.14-83.32-3.18-11.508-6.731-21.169-10.321-28.06-1.8-3.448-3.602-6.21-5.461-8.21-.938-1-1.89-1.809-2.918-2.41-1.02-.59-2.14-.957-3.332-.957-1.238-.012-2.469.437-3.469 1.207-1.512 1.152-2.629 2.902-3.61 5.25-.972 2.351-1.788 5.351-2.46 9.09l-.211 1.132.973.668 1.109-1.488 1.879.309c.851-4.75 1.95-8.11 3.082-10.102.566-.988 1.129-1.629 1.59-1.969.457-.34.77-.418 1.117-.43.34 0 .793.102 1.383.442 1.11.629 2.59 2.11 4.11 4.34 2.687 3.91 5.577 10.039 8.347 17.738 8.312 23.14 15.531 60.45 15.52 96.77 0 37.511-1.477 113.82-2.958 180.73-.742 33.461-1.48 64.582-2.031 87.32-.281 11.38-.512 20.66-.672 27.102-.078 3.219-.148 5.73-.187 7.43-.04 1.71-.07 2.61-.07 2.61l1.898.038-.43-1.789-36.36 8.16.442 1.79 1.89.16c0-.032 14.38-165.7 16.067-288.22.102-6.8.14-13.241.14-19.359 0-52.16-3.206-80.52-6.468-95.96-1.629-7.731-3.262-12.22-4.559-14.88-1.3-2.64-2.261-3.472-2.62-3.722l-1.11 1.492 1.879.309-1.88-.309" />
          <path d="m1530.07 1369.809-5.129.78.258 1.661 5.14-.781Zm-7.699 1.16-5.14.781.269 1.66 5.14-.77Zm-7.71 1.172-5.141.77.27 1.66 5.14-.77Zm-7.7 1.16-5.14.77.269 1.66 5.129-.77Zm-7.711 1.16-1.828.277.258 1.66 1.84-.277-.27-1.66M1530.07 1374.578l-5.129.774.258 1.66 5.14-.774Zm-7.699 1.16-5.14.774.269 1.66 5.14-.774Zm-7.71 1.16-5.141.774.27 1.668 5.14-.781Zm-7.7 1.16-5.14.782.269 1.66 5.129-.781Zm-7.711 1.16-1.828.282.258 1.66 1.84-.281-.27-1.66" />
          <path
            fill={color}
            d="m957.836 2294.309 58.465 182.77s486.05 91.273 801.64-11c16.5-47.278 51.547-173.688 51.547-173.688s-126.816-126.153-146.36-316.02h-612.847s.219 149.457-152.445 317.938"
          />
          <path d="m957.836 2294.309-2.445.78 58.937 184.231 1.5.282c.094.02 199.863 37.539 426.613 37.539 127.04-.012 262.559-11.77 376.29-48.61l1.218-.402.422-1.2c4.14-11.89 9.43-28.667 15.04-47.19 16.827-55.54 36.55-126.65 36.55-126.66l.41-1.45-1.07-1.059-.082-.082c-1.82-1.828-33.45-33.949-67-88.847-33.54-54.91-68.98-132.582-78.54-225.532l-.238-2.3H1107.711v2.562c0 .219-.031 37.43-19.012 95.5-18.98 58.07-56.91 137-132.765 220.707l-.993 1.102.45 1.41 2.445-.781 1.902 1.722c76.364-84.281 114.66-163.883 133.84-222.562 19.184-58.688 19.262-96.45 19.262-97.098h-2.559v2.57h612.848v-2.57l-2.559.27c9.828 95.437 46.602 174.789 80.88 230.289 34.3 55.511 66.128 87.18 66.23 87.28l1.808-1.82-2.468-.68s-.141.49-.399 1.43c-1.95 7.02-10.871 39-21.23 74.75-5.18 17.88-10.73 36.688-15.942 53.81-5.199 17.109-10.078 32.519-13.93 43.538l2.422.84-.793-2.437c-112.91 36.597-247.988 48.37-374.707 48.37-113.101 0-219.543-9.37-297.691-18.73-39.078-4.68-71.078-9.36-93.309-12.883-11.12-1.75-19.793-3.207-25.68-4.238-2.94-.512-5.19-.91-6.702-1.18-.758-.14-1.329-.242-1.707-.308-.383-.082-.57-.113-.57-.113l-.481 2.52 2.449-.778-58.469-182.781-2.445.789 1.902 1.722-1.902-1.722" />
          <path d="M1670.988 1978.922c0 .008.024 1.68.211 4.84l1.98-.121c-.09-1.563-.14-2.75-.167-3.551-.024-.399-.032-.711-.032-.91-.011-.2-.011-.301-.011-.301Zm.364 7.226c.097 1.403.218 3 .378 4.782l1.97-.168c-.15-1.774-.27-3.364-.372-4.75Zm.59 7.16c.136 1.481.296 3.07.48 4.762l1.969-.21c-.18-1.68-.34-3.258-.48-4.731Zm.738 7.141c.172 1.512.36 3.09.57 4.742l1.96-.25c-.198-1.64-.39-3.222-.562-4.722Zm.87 7.11c.2 1.52.419 3.101.65 4.73l1.96-.277c-.23-1.621-.441-3.192-.64-4.711Zm.99 7.101c.23 1.531.472 3.102.73 4.719l1.96-.309c-.261-1.61-.5-3.18-.718-4.699Zm1.108 7.07c.25 1.54.524 3.11.801 4.711l1.95-.34c-.278-1.601-.54-3.16-.79-4.69Zm1.211 7.06c.282 1.538.57 3.1.871 4.698l1.95-.367c-.301-1.59-.59-3.152-.871-4.68Zm1.32 7.038c.301 1.543.61 3.102.93 4.684l1.942-.39c-.32-1.583-.63-3.142-.93-4.673Zm1.41 7.024c.321 1.539.65 3.09 1 4.668l1.942-.418c-.351-1.582-.68-3.133-1-4.653Zm1.513 7c.34 1.527.699 3.078 1.058 4.648l1.93-.45c-.36-1.562-.711-3.109-1.05-4.628Zm1.609 6.976c.36 1.524.73 3.07 1.117 4.633l1.934-.473c-.39-1.558-.762-3.097-1.121-4.617Zm1.7 6.953c.378 1.52.769 3.07 1.179 4.617l1.922-.5c-.41-1.546-.801-3.078-1.184-4.597Zm1.788 6.93c.403 1.52.813 3.059 1.242 4.61l1.91-.532c-.421-1.539-.831-3.07-1.242-4.59Zm1.871 6.91c.43 1.508.86 3.04 1.309 4.59l1.902-.55c-.441-1.54-.87-3.071-1.293-4.583Zm1.97 6.879c.448 1.512.901 3.031 1.358 4.57l1.903-.57c-.461-1.531-.91-3.05-1.352-4.559Zm2.062 6.852c.457 1.507.937 3.027 1.418 4.558l1.89-.601c-.48-1.52-.95-3.04-1.41-4.54Zm2.136 6.828c.48 1.5.98 3.02 1.48 4.539l1.884-.617c-.5-1.524-.993-3.032-1.473-4.532Zm2.23 6.8c.5 1.5 1.012 3 1.544 4.52l1.867-.648a686.664 686.664 0 0 1-1.527-4.5Zm2.321 6.77a715.8 715.8 0 0 0 1.59 4.5l1.871-.672c-.54-1.5-1.07-3-1.59-4.476Zm2.402 6.738c.54 1.492 1.09 2.98 1.637 4.48l1.863-.687c-.55-1.5-1.101-2.98-1.64-4.46Zm2.48 6.711a929.64 929.64 0 0 0 1.7 4.461l1.848-.71c-.57-1.49-1.14-2.97-1.688-4.45Zm2.567 6.68c.582 1.48 1.16 2.95 1.762 4.441l1.84-.742c-.59-1.476-1.18-2.95-1.75-4.418Zm2.653 6.652c.597 1.469 1.199 2.938 1.808 4.41l1.84-.761a361.885 361.885 0 0 1-1.809-4.399Zm2.738 6.61c.61 1.46 1.23 2.918 1.86 4.39l1.831-.781a2929.84 2929.84 0 0 1-1.87-4.379Zm2.812 6.578c.63 1.453 1.27 2.91 1.918 4.37l1.82-.808c-.648-1.46-1.288-2.91-1.917-4.351Zm2.899 6.543c.648 1.449 1.308 2.886 1.98 4.34l1.801-.832c-.672-1.442-1.32-2.88-1.973-4.32Zm2.98 6.508c.668 1.43 1.34 2.87 2.032 4.308l1.789-.848c-.68-1.43-1.36-2.87-2.02-4.3Zm3.059 6.468c.691 1.422 1.383 2.852 2.09 4.293l1.781-.883c-.71-1.43-1.398-2.847-2.078-4.27Zm3.14 6.434c.711 1.406 1.422 2.828 2.141 4.258l1.77-.899a479.315 479.315 0 0 1-2.13-4.25Zm3.22 6.379c.722 1.41 1.452 2.828 2.19 4.238l1.762-.918c-.73-1.41-1.46-2.82-2.18-4.223Zm3.3 6.347a486.41 486.41 0 0 0 2.25 4.211l1.742-.937c-.75-1.402-1.5-2.8-2.23-4.192Zm3.383 6.313c.758 1.39 1.527 2.777 2.297 4.18l1.73-.961c-.77-1.39-1.527-2.782-2.277-4.168Zm3.457 6.258c.781 1.39 1.562 2.77 2.351 4.16l1.72-.988c-.79-1.38-1.571-2.762-2.34-4.141Zm3.543 6.222c.789 1.38 1.59 2.75 2.398 4.13l1.711-1.012a260.02 260.02 0 0 1-2.39-4.11Zm3.61 6.18c.808 1.36 1.628 2.719 2.448 4.09l1.7-1.031c-.82-1.36-1.64-2.72-2.442-4.07Zm3.687 6.129c.832 1.352 1.66 2.7 2.5 4.059l1.691-1.047a953.568 953.568 0 0 1-2.5-4.051Zm3.77 6.078c.84 1.344 1.69 2.692 2.55 4.031l1.672-1.07c-.852-1.34-1.7-2.68-2.54-4.008Zm3.84 6.043c.862 1.328 1.73 2.66 2.6 3.988l1.66-1.09c-.87-1.328-1.737-2.648-2.589-3.98Zm3.921 5.98c.871 1.32 1.762 2.649 2.648 3.97l1.653-1.11c-.89-1.32-1.781-2.64-2.653-3.95Zm3.988 5.938c.89 1.313 1.793 2.621 2.703 3.93l1.63-1.13c-.9-1.308-1.801-2.609-2.692-3.917Zm4.07 5.89c.903 1.301 1.82 2.59 2.75 3.891l1.614-1.148c-.922-1.293-1.832-2.594-2.742-3.883Zm4.133 5.833c.93 1.289 1.86 2.578 2.797 3.867l1.614-1.18a415.374 415.374 0 0 1-2.793-3.84Zm4.22 5.789c.94 1.27 1.89 2.55 2.839 3.82l1.59-1.191c-.95-1.27-1.899-2.54-2.84-3.809Zm4.28 5.73c.957 1.258 1.918 2.528 2.887 3.79l1.582-1.212c-.969-1.257-1.941-2.52-2.89-3.78Zm4.348 5.68c.973 1.25 1.95 2.5 2.941 3.75l1.56-1.23c-.981-1.25-1.962-2.493-2.93-3.743Zm4.43 5.617c.98 1.242 1.98 2.48 2.98 3.723l1.54-1.25c-1-1.242-1.989-2.473-2.97-3.711Zm4.492 5.57c1 1.223 2.008 2.454 3.027 3.68l1.532-1.27a501.32 501.32 0 0 1-3.032-3.667Zm4.559 5.512c1.02 1.211 2.039 2.43 3.082 3.64l1.507-1.288c-1.03-1.211-2.05-2.422-3.07-3.633Zm4.628 5.45c1.032 1.199 2.07 2.41 3.122 3.609l1.5-1.309c-1.051-1.191-2.09-2.39-3.122-3.59Zm4.692 5.402a867.14 867.14 0 0 0 3.172 3.566l1.476-1.328c-1.058-1.18-2.11-2.371-3.16-3.55Zm4.77 5.34a525.078 525.078 0 0 0 3.21 3.527l1.461-1.348c-1.082-1.172-2.14-2.34-3.203-3.511Zm4.82 5.277c1.082 1.16 2.16 2.332 3.25 3.492l1.449-1.36a526.87 526.87 0 0 1-3.238-3.48Zm4.89 5.223a665.801 665.801 0 0 0 3.301 3.449l1.43-1.38c-1.11-1.14-2.2-2.292-3.29-3.433Zm4.95 5.16c1.109 1.136 2.218 2.277 3.34 3.41l1.41-1.39c-1.11-1.134-2.22-2.262-3.32-3.403Zm5.02 5.11c1.12 1.116 2.241 2.237 3.382 3.358l1.387-1.41a339.78 339.78 0 0 1-3.36-3.351Zm5.07 5.038c1.14 1.11 2.28 2.219 3.421 3.32l1.38-1.421c-1.141-1.11-2.282-2.207-3.411-3.32Zm5.14 4.98c1.148 1.09 2.3 2.188 3.46 3.282l1.36-1.442c-1.16-1.09-2.308-2.18-3.449-3.27Zm5.191 4.91c1.047.981 2.11 1.962 3.168 2.938l1.34-1.449c-1.05-.98-2.11-1.96-3.148-2.937l-1.36 1.449M1675.059 1975.531c0 .02.03 1.68.21 4.828l1.981-.12c-.09-1.56-.148-2.739-.18-3.54-.011-.398-.02-.699-.03-.898v-.301Zm.363 7.207c.098 1.403.219 2.992.367 4.774l1.973-.172c-.153-1.762-.274-3.34-.364-4.73Zm.578 7.14c.14 1.481.3 3.063.48 4.75l1.97-.206c-.18-1.684-.34-3.25-.481-4.723Zm.738 7.122c.172 1.5.364 3.078.563 4.73l1.96-.25c-.202-1.64-.39-3.21-.562-4.699Zm.864 7.09c.199 1.52.418 3.101.648 4.719l1.96-.278c-.23-1.62-.448-3.18-.64-4.691Zm.988 7.082c.219 1.52.46 3.09.719 4.707l1.953-.309a430.33 430.33 0 0 1-.711-4.691Zm1.101 7.047c.25 1.543.508 3.101.79 4.703l1.949-.344c-.282-1.59-.54-3.148-.79-4.668Zm1.2 7.043c.27 1.527.558 3.097.859 4.687l1.941-.37c-.3-1.579-.582-3.138-.851-4.657Zm1.3 7.02c.297 1.527.61 3.09.93 4.667l1.938-.39c-.32-1.579-.63-3.13-.918-4.649Zm1.41 7c.32 1.527.637 3.077.989 4.66l1.93-.422a880.12 880.12 0 0 1-.989-4.641Zm1.5 6.98c.34 1.527.688 3.066 1.047 4.636l1.93-.437c-.367-1.563-.707-3.11-1.047-4.633Zm1.59 6.957c.36 1.52.73 3.062 1.11 4.62l1.918-.468c-.38-1.55-.75-3.09-1.11-4.61Zm1.68 6.93c.39 1.523.777 3.062 1.18 4.613l1.91-.492c-.402-1.551-.79-3.079-1.172-4.598Zm1.777 6.91c.403 1.52.813 3.05 1.23 4.601l1.911-.52c-.418-1.538-.828-3.07-1.23-4.581Zm1.872 6.89c.421 1.52.851 3.04 1.289 4.582l1.902-.543c-.441-1.539-.871-3.058-1.29-4.566Zm1.949 6.871c.441 1.5.89 3.032 1.351 4.559l1.89-.57c-.46-1.528-.901-3.04-1.339-4.547Zm2.043 6.828c.457 1.512.93 3.024 1.41 4.551l1.879-.597c-.473-1.524-.942-3.032-1.403-4.524Zm2.129 6.813c.468 1.5.96 3.008 1.46 4.527l1.88-.617c-.5-1.512-.981-3.012-1.461-4.512Zm2.21 6.789c.489 1.488 1 2.988 1.52 4.5l1.867-.64c-.508-1.5-1.02-3-1.52-4.489Zm2.29 6.75c.52 1.488 1.05 2.988 1.578 4.488l1.87-.668c-.538-1.492-1.058-2.98-1.577-4.468Zm2.39 6.73c.528 1.48 1.078 2.97 1.63 4.461l1.859-.68a395.087 395.087 0 0 1-1.63-4.452Zm2.457 6.692c.563 1.476 1.121 2.957 1.692 4.45l1.851-.712c-.57-1.488-1.133-2.96-1.691-4.43Zm2.551 6.668c.57 1.46 1.152 2.941 1.75 4.422l1.832-.73c-.59-1.481-1.172-2.954-1.742-4.41Zm2.633 6.629c.59 1.46 1.187 2.93 1.797 4.402l1.832-.762c-.61-1.46-1.211-2.93-1.79-4.379Zm2.719 6.601c.597 1.45 1.218 2.91 1.847 4.38l1.82-.778c-.628-1.461-1.238-2.922-1.847-4.371Zm2.789 6.559c.629 1.45 1.261 2.902 1.91 4.36l1.808-.81c-.636-1.449-1.277-2.89-1.898-4.34Zm2.879 6.531c.64 1.442 1.3 2.88 1.96 4.328l1.801-.816c-.66-1.453-1.308-2.89-1.96-4.32Zm2.96 6.488c.66 1.43 1.333 2.872 2.012 4.313l1.79-.852c-.68-1.43-1.352-2.87-2.012-4.289Zm3.032 6.454c.68 1.43 1.37 2.847 2.07 4.289l1.777-.871c-.699-1.43-1.378-2.848-2.058-4.27Zm3.12 6.418c.7 1.421 1.407 2.832 2.13 4.261l1.758-.89c-.707-1.422-1.418-2.84-2.11-4.25Zm3.2 6.378c.719 1.403 1.438 2.813 2.18 4.23l1.75-.917c-.73-1.402-1.45-2.813-2.172-4.211Zm3.277 6.332c.73 1.399 1.473 2.801 2.223 4.2l1.75-.93c-.75-1.398-1.492-2.79-2.223-4.191Zm3.352 6.301c.75 1.39 1.512 2.778 2.281 4.168l1.73-.949c-.761-1.39-1.523-2.781-2.273-4.16Zm3.441 6.25a350.6 350.6 0 0 0 2.329 4.149l1.718-.98c-.789-1.38-1.558-2.759-2.328-4.13Zm3.508 6.207c.781 1.371 1.582 2.742 2.38 4.121l1.71-1c-.8-1.37-1.59-2.738-2.379-4.097Zm3.59 6.172c.8 1.36 1.61 2.719 2.43 4.078l1.691-1.02c-.808-1.359-1.62-2.706-2.422-4.07Zm3.66 6.121c.82 1.348 1.653 2.7 2.492 4.047l1.68-1.039c-.84-1.348-1.66-2.7-2.48-4.039Zm3.742 6.07c.84 1.34 1.68 2.68 2.54 4.02l1.667-1.062c-.859-1.34-1.699-2.668-2.527-4.008Zm3.82 6.028c.848 1.332 1.708 2.66 2.579 3.992l1.66-1.082c-.871-1.328-1.73-2.66-2.578-3.98Zm3.887 5.98c.872 1.313 1.75 2.63 2.633 3.95l1.649-1.098c-.89-1.313-1.758-2.633-2.63-3.941Zm3.961 5.922c.891 1.309 1.782 2.617 2.692 3.93l1.629-1.121c-.899-1.309-1.801-2.61-2.68-3.918Zm4.04 5.88c.902 1.3 1.82 2.6 2.73 3.898l1.621-1.149a248.693 248.693 0 0 1-2.719-3.879Zm4.113 5.827c.918 1.293 1.847 2.57 2.777 3.864l1.602-1.16c-.93-1.282-1.852-2.57-2.77-3.852Zm4.187 5.782c.93 1.27 1.871 2.55 2.832 3.82l1.578-1.18c-.949-1.27-1.89-2.539-2.82-3.808Zm4.25 5.73c.95 1.262 1.91 2.52 2.88 3.781l1.57-1.203c-.958-1.258-1.919-2.52-2.868-3.77Zm4.332 5.672c.957 1.25 1.938 2.5 2.918 3.75l1.563-1.223c-.98-1.25-1.953-2.5-2.922-3.738Zm4.39 5.61c.99 1.238 1.97 2.48 2.97 3.718l1.539-1.238c-.989-1.242-1.98-2.473-2.961-3.703Zm4.47 5.57c1 1.218 2 2.449 3.007 3.668l1.532-1.258c-1.008-1.223-2.008-2.442-3.008-3.66Zm4.53 5.5a295.412 295.412 0 0 0 3.06 3.636l1.507-1.27a651.597 651.597 0 0 1-3.047-3.628Zm4.599 5.457c1.03 1.203 2.058 2.402 3.109 3.601l1.492-1.3c-1.043-1.2-2.07-2.391-3.09-3.59Zm4.671 5.39c1.04 1.192 2.09 2.38 3.149 3.563l1.469-1.313c-1.047-1.187-2.098-2.37-3.13-3.55Zm4.73 5.34c1.06 1.172 2.118 2.352 3.188 3.52l1.461-1.329c-1.058-1.171-2.12-2.34-3.18-3.52Zm4.798 5.27c1.07 1.171 2.152 2.332 3.23 3.492l1.45-1.352c-1.079-1.16-2.16-2.32-3.227-3.48Zm4.86 5.222c1.081 1.149 2.183 2.297 3.28 3.45l1.422-1.372c-1.09-1.14-2.18-2.289-3.261-3.43Zm4.921 5.16a907.304 907.304 0 0 0 3.32 3.41l1.41-1.39a662.227 662.227 0 0 1-3.3-3.39Zm4.988 5.098a341.97 341.97 0 0 0 3.364 3.371l1.386-1.398c-1.117-1.121-2.238-2.242-3.34-3.364Zm5.051 5.04a306.601 306.601 0 0 0 3.402 3.331l1.368-1.422c-1.13-1.097-2.258-2.207-3.38-3.308Zm5.102 4.98c1.14 1.101 2.289 2.191 3.437 3.293l1.363-1.442a461.143 461.143 0 0 1-3.421-3.27Zm5.168 4.921a1410.59 1410.59 0 0 0 3.472 3.239l1.348-1.45c-1.168-1.078-2.32-2.16-3.469-3.238l-1.351 1.45M1157.602 1976.75v.16c0 .121.007.29.007.52 0 .742-.02 2.09-.09 4.03l1.981.071c.078-1.96.09-3.34.09-4.101 0-.47-.012-.72-.012-.72Zm-.18 7.07c-.07 1.39-.172 2.97-.3 4.739l1.98.14c.128-1.777.226-3.379.296-4.777Zm-.48 7.102c-.122 1.469-.27 3.047-.43 4.726l1.968.204c.168-1.704.31-3.293.442-4.762Zm-.68 7.09c-.16 1.5-.34 3.066-.551 4.718l1.969.239c.21-1.66.39-3.239.55-4.75Zm-.852 7.066c-.2 1.512-.41 3.082-.648 4.711l1.968.281c.23-1.629.45-3.21.649-4.73Zm-.988 7.063c-.23 1.52-.48 3.078-.742 4.687l1.96.32c.258-1.617.508-3.187.739-4.718Zm-1.133 7.03c-.258 1.52-.527 3.079-.828 4.68l1.96.36c.29-1.61.56-3.18.817-4.711Zm-1.258 7.02c-.281 1.52-.582 3.079-.902 4.66l1.95.387c.32-1.597.62-3.16.901-4.687Zm-1.37 6.989a403.19 403.19 0 0 1-.97 4.648l1.938.422c.34-1.59.66-3.14.98-4.672Zm-1.481 6.968c-.328 1.524-.68 3.07-1.04 4.641l1.93.441c.36-1.57.711-3.12 1.051-4.652Zm-1.578 6.954c-.364 1.52-.73 3.058-1.122 4.617l1.93.48c.38-1.57.762-3.12 1.121-4.64Zm-1.692 6.93c-.379 1.507-.77 3.046-1.18 4.597l1.918.5c.41-1.559.801-3.098 1.18-4.617Zm-1.781 6.898c-.41 1.511-.82 3.039-1.238 4.59l1.91.53c.43-1.562.84-3.09 1.238-4.609Zm-1.879 6.879c-.422 1.511-.86 3.03-1.3 4.57l1.91.55c.44-1.538.878-3.07 1.3-4.59Zm-1.969 6.851c-.441 1.512-.89 3.031-1.351 4.559l1.898.57c.461-1.527.922-3.059 1.363-4.57Zm-2.05 6.828a803.3 803.3 0 0 1-1.41 4.543l1.89.598c.48-1.527.96-3.05 1.418-4.55Zm-2.13 6.813c-.48 1.488-.972 3-1.472 4.52l1.883.62c.5-1.53 1-3.043 1.476-4.543Zm-2.222 6.77c-.5 1.488-1.008 2.988-1.52 4.507l1.871.64c.52-1.519 1.032-3.027 1.532-4.519Zm-2.3 6.75c-.509 1.488-1.04 2.98-1.567 4.488l1.867.66c.531-1.508 1.062-3.008 1.582-4.5Zm-2.368 6.73c-.531 1.48-1.07 2.969-1.633 4.469l1.871.68c.551-1.5 1.09-3 1.63-4.481Zm-2.45 6.699c-.55 1.469-1.113 2.95-1.683 4.45l1.863.698c.57-1.5 1.13-2.976 1.68-4.457Zm-2.523 6.672c-.566 1.457-1.136 2.937-1.726 4.43l1.847.718c.59-1.492 1.16-2.968 1.73-4.441Zm-2.597 6.637c-.582 1.46-1.172 2.93-1.77 4.41l1.84.75 1.777-4.43Zm-2.66 6.62c-.602 1.45-1.2 2.923-1.82 4.391l1.839.758c.61-1.469 1.219-2.937 1.809-4.398Zm-2.731 6.583c-.61 1.449-1.23 2.91-1.86 4.379l1.82.78c.63-1.472 1.25-2.933 1.86-4.39Zm-2.8 6.558c-.63 1.45-1.259 2.899-1.91 4.36l1.82.8c.64-1.46 1.28-2.921 1.91-4.37Zm-2.872 6.54c-.637 1.44-1.289 2.878-1.937 4.331l1.8.82c.66-1.46 1.309-2.91 1.957-4.35Zm-2.93 6.5a780.922 780.922 0 0 1-1.976 4.32l1.797.832c.672-1.453 1.332-2.89 1.992-4.332Zm-2.988 6.48c-.66 1.422-1.34 2.86-2.02 4.3l1.79.848c.68-1.449 1.36-2.879 2.03-4.308Zm-3.05 6.441a603.372 603.372 0 0 1-2.07 4.278l1.788.87c.703-1.429 1.39-2.87 2.07-4.288Zm-3.11 6.418c-.7 1.422-1.398 2.84-2.11 4.262l1.782.89c.707-1.43 1.406-2.863 2.11-4.28Zm-3.172 6.39c-.707 1.411-1.418 2.821-2.148 4.24l1.77.91c.73-1.43 1.44-2.848 2.152-4.259Zm-3.226 6.36c-.332.64-.66 1.281-.993 1.93l.88.45-.868-.477c-.422.75-.84 1.507-1.262 2.257l1.72.97c.433-.75.85-1.509 1.28-2.259v-.02l.012-.01c.328-.65.668-1.29 1-1.93Zm-3.422 6.223c-.782 1.387-1.57 2.77-2.36 4.129l1.72.988c.788-1.36 1.581-2.738 2.37-4.129Zm-3.559 6.18c-.8 1.378-1.601 2.75-2.41 4.097l1.71 1.02c.81-1.36 1.61-2.73 2.419-4.117ZM1081.5 2212c-.82 1.36-1.64 2.719-2.46 4.07l1.698 1.032c.82-1.352 1.64-2.711 2.461-4.09Zm-3.7 6.09c-.831 1.37-1.671 2.71-2.5 4.05l1.688 1.051c.832-1.34 1.672-2.691 2.5-4.062Zm-3.76 6.058c-.849 1.352-1.7 2.692-2.552 4.024l1.672 1.066c.852-1.328 1.711-2.68 2.559-4.027Zm-3.83 6.024c-.87 1.34-1.73 2.668-2.6 3.976l1.66 1.09a261.775 261.775 0 0 0 2.601-4Zm-3.901 5.957c-.887 1.34-1.77 2.652-2.649 3.96l1.649 1.11a698.944 698.944 0 0 0 2.652-3.969Zm-3.98 5.93c-.9 1.32-1.79 2.62-2.688 3.921l1.64 1.122c.89-1.293 1.79-2.602 2.688-3.93Zm-4.04 5.87a645.546 645.546 0 0 1-2.738 3.88l1.62 1.152c.907-1.281 1.829-2.582 2.74-3.902Zm-4.117 5.821a585.33 585.33 0 0 1-2.793 3.852l1.61 1.168a352.1 352.1 0 0 0 2.792-3.86Zm-4.192 5.77c-.949 1.289-1.89 2.558-2.84 3.808l1.59 1.192a325.45 325.45 0 0 0 2.848-3.829Zm-4.27 5.71c-.96 1.282-1.92 2.54-2.882 3.782l1.57 1.207c.961-1.25 1.93-2.508 2.903-3.79Zm-4.339 5.66c-.98 1.258-1.96 2.508-2.93 3.739l1.547 1.23a507.6 507.6 0 0 0 2.953-3.75Zm-4.41 5.59c-1 1.258-2 2.489-2.992 3.7l1.543 1.25a554.08 554.08 0 0 0 3-3.711Zm-4.5 5.54c-1.02 1.242-2.031 2.449-3.04 3.652l1.52 1.277c1.008-1.199 2.028-2.43 3.047-3.668Zm-4.57 5.468a570.595 570.595 0 0 1-3.09 3.602l1.5 1.3a416.59 416.59 0 0 0 3.097-3.62Zm-4.653 5.39c-1.066 1.212-2.117 2.403-3.148 3.563l1.48 1.329a745.21 745.21 0 0 0 3.16-3.579Zm-4.738 5.333a268.858 268.858 0 0 1-3.21 3.508l1.46 1.34c1.059-1.137 2.129-2.32 3.219-3.52Zm-4.82 5.25a427.054 427.054 0 0 1-3.27 3.45l1.442 1.37a382.805 382.805 0 0 0 3.277-3.472Zm-4.91 5.16a482.024 482.024 0 0 1-3.32 3.399l1.41 1.402c1.09-1.113 2.199-2.242 3.331-3.422Zm-5 5.078a296.473 296.473 0 0 1-3.391 3.34l1.39 1.422c1.11-1.082 2.243-2.2 3.403-3.352Zm-5.094 4.98a268.56 268.56 0 0 1-3.45 3.27l1.356 1.45a382.184 382.184 0 0 0 3.469-3.278l-1.375-1.43Zm-5.192 4.88a256.18 256.18 0 0 1-3.52 3.191l1.321 1.48a287.437 287.437 0 0 0 3.543-3.21Zm-5.297 4.761a259.092 259.092 0 0 1-3.593 3.102l1.281 1.52a334.793 334.793 0 0 0 3.621-3.133Zm-5.41 4.63c-1.355 1.12-2.586 2.109-3.683 2.991l1.234 1.547c1.11-.879 2.352-1.886 3.715-3.02Zm-5.547 4.448a119.724 119.724 0 0 1-3.793 2.82l1.149 1.622c.762-.54 2.062-1.488 3.855-2.871l-1.21-1.57M1152.32 1975.691v.16c.008.11.008.278.008.508 0 .73-.02 2.07-.09 3.98l1.961.071c.07-1.93.09-3.289.09-4.05 0-.47-.008-.7-.008-.7Zm-.18 6.989c-.07 1.37-.16 2.93-.288 4.68l1.957.14c.12-1.762.222-3.34.293-4.719Zm-.468 7.011c-.121 1.45-.262 3.008-.434 4.668l1.953.2c.168-1.668.309-3.239.43-4.7Zm-.672 7.008c-.16 1.48-.34 3.031-.54 4.66l1.938.243c.204-1.641.383-3.204.551-4.692Zm-.84 6.98c-.2 1.5-.41 3.051-.64 4.65l1.94.28c.231-1.609.45-3.168.642-4.668Zm-.98 6.97c-.23 1.5-.47 3.05-.73 4.64l1.929.32c.262-1.597.512-3.16.73-4.66Zm-1.121 6.953a713.36 713.36 0 0 1-.809 4.628l1.93.348c.28-1.59.558-3.137.808-4.648Zm-1.239 6.93a445.977 445.977 0 0 1-.89 4.609l1.922.39c.32-1.582.609-3.12.898-4.633Zm-1.351 6.91c-.309 1.507-.63 3.038-.969 4.597l1.922.41c.34-1.558.656-3.097.969-4.61Zm-1.469 6.886c-.328 1.5-.672 3.031-1.031 4.582l1.91.442c.36-1.551.7-3.09 1.043-4.602Zm-1.57 6.871c-.352 1.5-.72 3.02-1.102 4.563l1.91.468c.383-1.55.75-3.082 1.102-4.582Zm-1.66 6.84c-.38 1.5-.77 3.012-1.168 4.55l1.898.49c.398-1.54.79-3.06 1.172-4.56Zm-1.758 6.82a928.66 928.66 0 0 1-1.23 4.532l1.89.52c.418-1.532.828-3.052 1.226-4.552Zm-1.864 6.801c-.41 1.488-.84 2.988-1.277 4.512l1.879.547c.441-1.528.871-3.04 1.29-4.54Zm-1.937 6.77c-.441 1.48-.883 2.98-1.34 4.5l1.867.57c.461-1.52.91-3.031 1.352-4.52Zm-2.031 6.742c-.45 1.476-.918 2.976-1.39 4.488l1.858.59c.48-1.512.954-3.012 1.41-4.5Zm-2.11 6.726a344.73 344.73 0 0 1-1.449 4.461l1.86.621c.5-1.511.98-3.011 1.46-4.492Zm-2.191 6.692c-.488 1.469-.988 2.96-1.5 4.45l1.851.64c.508-1.5 1.02-2.989 1.508-4.47Zm-2.27 6.672c-.507 1.468-1.03 2.937-1.55 4.43l1.84.66c.53-1.493 1.05-2.98 1.562-4.454Zm-2.34 6.636c-.53 1.461-1.058 2.942-1.609 4.422l1.84.668c.55-1.476 1.078-2.957 1.61-4.418Zm-2.417 6.622-1.66 4.402 1.828.687c.57-1.48 1.12-2.949 1.66-4.41Zm-2.5 6.59c-.551 1.449-1.122 2.91-1.704 4.378l1.832.723c.57-1.48 1.141-2.941 1.7-4.402Zm-2.563 6.562c-.57 1.45-1.16 2.898-1.75 4.36l1.82.738c.59-1.47 1.18-2.918 1.75-4.372Zm-2.629 6.539c-.59 1.437-1.191 2.89-1.8 4.34l1.812.758a491.45 491.45 0 0 0 1.797-4.36Zm-2.7 6.508-1.839 4.32 1.8.781c.618-1.46 1.24-2.898 1.84-4.34Zm-2.769 6.48c-.62 1.43-1.242 2.86-1.882 4.313l1.8.789c.63-1.45 1.262-2.89 1.88-4.32Zm-2.832 6.45c-.629 1.43-1.27 2.851-1.918 4.292l1.778.809c.66-1.441 1.3-2.871 1.93-4.3Zm-2.89 6.43c-.649 1.421-1.297 2.843-1.969 4.273l1.781.82c.668-1.434 1.32-2.863 1.969-4.281Zm-2.957 6.401c-.66 1.41-1.332 2.82-2 4.25l1.77.84c.679-1.43 1.347-2.851 2.007-4.261Zm-3.012 6.372c-.68 1.398-1.36 2.808-2.05 4.226l1.769.852a419.42 419.42 0 0 0 2.043-4.239Zm-3.078 6.34c-.684 1.398-1.383 2.796-2.082 4.206l1.75.872c.71-1.41 1.398-2.82 2.09-4.22Zm-3.133 6.308c-.7 1.39-1.41 2.79-2.117 4.191l1.738.887a385.07 385.07 0 0 0 2.13-4.2Zm-3.187 6.281c-.32.63-.653 1.258-.98 1.899l.878.441-.86-.473-1.261 2.243 1.71.96c.423-.742.84-1.492 1.263-2.25l.007-.011.012-.02c.32-.629.649-1.261.969-1.89Zm-3.383 6.149a563.258 563.258 0 0 1-2.34 4.082l1.7.976a690.078 690.078 0 0 0 2.35-4.09Zm-3.508 6.11c-.8 1.358-1.59 2.71-2.39 4.05l1.69 1c.798-1.352 1.59-2.7 2.387-4.059Zm-3.59 6.062c-.812 1.359-1.621 2.699-2.43 4.027l1.68 1.012a685.69 685.69 0 0 0 2.43-4.032Zm-3.652 6.027c-.82 1.34-1.649 2.68-2.469 3.992l1.66 1.04c.828-1.321 1.649-2.661 2.48-4Zm-3.719 5.98c-.84 1.34-1.68 2.66-2.512 3.97l1.653 1.062c.84-1.32 1.68-2.641 2.52-3.98Zm-3.781 5.95c-.86 1.32-1.707 2.632-2.57 3.93l1.64 1.081c.86-1.3 1.711-2.62 2.57-3.949Zm-3.86 5.89a424.655 424.655 0 0 1-2.609 3.91l1.629 1.09c.871-1.289 1.742-2.597 2.61-3.918Zm-3.93 5.852c-.878 1.308-1.769 2.597-2.648 3.879l1.61 1.11c.89-1.278 1.77-2.58 2.66-3.892Zm-3.988 5.8a688.008 688.008 0 0 1-2.71 3.84l1.597 1.137c.902-1.27 1.813-2.558 2.711-3.848Zm-4.07 5.75c-.922 1.29-1.84 2.56-2.75 3.81l1.578 1.16a462.41 462.41 0 0 0 2.762-3.821Zm-4.14 5.7a635.894 635.894 0 0 1-2.801 3.77l1.558 1.179c.942-1.25 1.883-2.512 2.82-3.781Zm-4.22 5.648c-.952 1.262-1.902 2.5-2.85 3.73l1.558 1.2c.941-1.23 1.902-2.48 2.86-3.75Zm-4.28 5.59c-.981 1.242-1.942 2.48-2.91 3.691l1.538 1.22c.97-1.22 1.942-2.462 2.91-3.712Zm-4.372 5.52a352.777 352.777 0 0 1-2.949 3.66l1.52 1.23c.98-1.199 1.968-2.418 2.96-3.66Zm-4.437 5.472c-1.012 1.219-2.012 2.43-3 3.61l1.5 1.257c.988-1.187 2-2.386 3.008-3.617Zm-4.524 5.399a345.378 345.378 0 0 1-3.058 3.558l1.48 1.293c1.02-1.172 2.04-2.36 3.07-3.582Zm-4.597 5.332c-1.051 1.199-2.082 2.367-3.11 3.52l1.457 1.308c1.032-1.149 2.07-2.328 3.133-3.531Zm-4.68 5.27a367.95 367.95 0 0 1-3.172 3.456l1.442 1.332c1.05-1.129 2.109-2.289 3.187-3.48Zm-4.762 5.179a284.862 284.862 0 0 1-3.23 3.41l1.422 1.36c1.058-1.122 2.14-2.262 3.238-3.43Zm-4.847 5.098a398.16 398.16 0 0 1-3.293 3.363l1.402 1.379c1.078-1.09 2.18-2.223 3.3-3.371Zm-4.942 5.02c-1.14 1.14-2.258 2.23-3.347 3.292l1.367 1.41a432.42 432.42 0 0 0 3.36-3.312Zm-5.035 4.921a376.742 376.742 0 0 1-3.406 3.23l1.336 1.43a379.42 379.42 0 0 0 3.426-3.238Zm-5.129 4.82a248.874 248.874 0 0 1-3.476 3.149l1.304 1.46c1.121-1 2.286-2.05 3.5-3.167Zm-5.234 4.7a284.25 284.25 0 0 1-3.55 3.07l1.265 1.488c1.125-.95 2.316-1.976 3.578-3.078Zm-5.348 4.57c-1.336 1.11-2.55 2.09-3.636 2.95l1.214 1.538c1.102-.867 2.325-1.86 3.672-2.976Zm-5.48 4.398a137.24 137.24 0 0 1-3.746 2.793l1.132 1.598c.747-.527 2.036-1.469 3.81-2.84l-1.196-1.55" />
          <path d="M1110.75 1985.559h4.762v-1.989h-4.762Zm7.14 0h4.77v-1.989h-4.77Zm7.15 0h4.76v-1.989h-4.76Zm7.14 0h4.761v-1.989h-4.761Zm7.14 0h4.758v-1.989h-4.758Zm7.14 0h4.77v-1.989h-4.77Zm7.15 0h4.761v-1.989h-4.762Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.758v-1.989h-4.757Zm7.15 0h4.76v-1.989h-4.76Zm7.14 0h4.761v-1.989h-4.761Zm7.14 0h4.758v-1.989h-4.758Zm7.14 0h4.759v-1.989h-4.758Zm7.15 0h4.761v-1.989h-4.762Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.758v-1.989h-4.757Zm7.141 0h4.77v-1.989h-4.77Zm7.149 0h4.761v-1.989h-4.761Zm7.14 0h4.758v-1.989h-4.758Zm7.14 0h4.759v-1.989h-4.758Zm7.142 0h4.77v-1.989h-4.77Zm7.148 0h4.762v-1.989h-4.762Zm7.14 0h4.758v-1.989h-4.757Zm7.141 0h4.758v-1.989h-4.758Zm7.14 0h4.77v-1.989h-4.77Zm7.15 0h4.757v-1.989h-4.758Zm7.14 0h4.758v-1.989h-4.758Zm7.14 0h4.758v-1.989h-4.757Zm7.149 0h4.762v-1.989h-4.762Zm7.14 0h4.758v-1.989h-4.757Zm7.141 0h4.758v-1.989h-4.758Zm7.14 0h4.759v-1.989h-4.758Zm7.15 0h4.757v-1.989h-4.758Zm7.14 0h4.758v-1.989h-4.758Zm7.14 0h4.758v-1.989h-4.757Zm7.137 0h4.774v-1.989h-4.774Zm7.153 0h4.757v-1.989h-4.757Zm7.14 0h4.758v-1.989h-4.758Zm7.14 0h4.759v-1.989h-4.758Zm7.138 0h4.77v-1.989h-4.77Zm7.152 0h4.758v-1.989h-4.758Zm7.14 0h4.758v-1.989h-4.757Zm7.137 0h4.762v-1.989h-4.762Zm7.14 0h4.77v-1.989h-4.77Zm7.153 0h4.758v-1.989h-4.758Zm7.14 0h4.759v-1.989h-4.758Zm7.138 0h4.761v-1.989h-4.761Zm7.14 0h4.77v-1.989h-4.77Zm7.153 0h4.757v-1.989h-4.757Zm7.136 0h4.762v-1.989h-4.762Zm7.14 0h4.763v-1.989h-4.762Zm7.153 0h4.758v-1.989h-4.758Zm7.14 0h4.759v-1.989h-4.758Zm7.138 0h4.761v-1.989h-4.761Zm7.14 0h4.762v-1.989h-4.762Zm7.153 0h4.757v-1.989h-4.757Zm7.136 0h4.762v-1.989h-4.762Zm7.14 0h4.763v-1.989h-4.762Zm7.142 0h4.77v-1.989h-4.77Zm7.152 0h4.758v-1.989h-4.758Zm7.137 0h4.761v-1.989h-4.761Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.77v-1.989h-4.77Zm7.15 0h4.761v-1.989h-4.762Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.762v-1.989h-4.761Zm7.141 0h4.77v-1.989h-4.77Zm7.149 0h4.761v-1.989h-4.761Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.763v-1.989h-4.762Zm7.141 0h4.77v-1.989h-4.77Zm7.149 0h4.762v-1.989h-4.762Zm7.14 0h4.762v-1.989h-4.761Zm7.141 0h4.762v-1.989h-4.762Zm7.149 0h4.761v-1.989h-4.761Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.763v-1.989h-4.762Zm7.141 0h4.758v-1.989h-4.758Zm7.149 0h4.762v-1.989h-4.762Zm7.14 0h4.762v-1.989h-4.761Zm7.141 0h4.762v-1.989h-4.762Zm7.14 0h4.77v-1.989h-4.77Zm7.15 0h4.76v-1.989h-4.76Zm7.14 0h4.762v-1.989h-4.762Zm7.14 0h4.758v-1.989h-4.758Zm7.141 0h4.77v-1.989h-4.77Zm7.149 0h.101v-1.989h-.101v1.989M962.363 2289.3l1.45 4.52 1.882-.601-1.449-4.52Zm2.172 6.778 1.45 4.524 1.882-.602-1.445-4.52Zm2.172 6.781 1.45 4.532 1.882-.61-1.45-4.52Zm2.172 6.79 1.45 4.523 1.882-.602-1.45-4.53Zm2.172 6.78 1.449 4.52 1.883-.597-1.45-4.524Zm2.172 6.782 1.449 4.52 1.883-.602-1.45-4.52Zm2.172 6.777 1.449 4.524 1.883-.602-1.45-4.52Zm2.171 6.793 1.45 4.52 1.882-.61-1.449-4.52Zm2.172 6.778 1.45 4.52 1.882-.599-1.449-4.53Zm2.172 6.78 1.45 4.52 1.882-.597-1.449-4.524Zm2.172 6.782 1.445 4.52 1.887-.602-1.45-4.52Zm2.172 6.777 1.445 4.524 1.887-.602-1.45-4.52Zm2.172 6.793 1.445 4.52 1.887-.61-1.45-4.523Zm2.172 6.778 1.449 4.52 1.883-.598-1.45-4.532Zm2.172 6.781 1.445 4.52 1.887-.598-1.45-4.524Zm2.171 6.781 1.446 4.52 1.886-.602-1.449-4.52Zm2.172 6.778 1.446 4.52 1.882-.599-1.445-4.52Zm2.172 6.793 1.445 4.52 1.891-.61-1.45-4.524Zm2.176 6.777 1.437 4.52 1.891-.598-1.45-4.531Zm2.168 6.781 1.45 4.52 1.882-.602-1.45-4.52Zm2.172 6.781 1.449 4.52 1.879-.602-1.45-4.52Zm2.168 6.778 1.453 4.52 1.879-.598-1.45-4.52Zm2.172 6.793 1.449 4.52 1.879-.61-1.438-4.524Zm2.168 6.777 1.453 4.52 1.886-.598-1.449-4.531Zm2.18 6.781 1.44 4.52 1.891-.602-1.449-4.52Zm2.171 6.782 1.45 4.52 1.878-.602-1.449-4.52Zm2.168 6.777 1.453 4.52 1.88-.598-1.45-4.52Zm2.172 6.793 1.45 4.52 1.878-.614-1.437-4.52-1.891.614M1863.39 2286.602l-1.35 4.558 1.901.559 1.34-4.559Zm-2.019 6.828-1.34 4.558 1.89.563 1.349-4.563Zm-2.02 6.832-1.34 4.558 1.9.559 1.339-4.559Zm-2.011 6.828-1.352 4.558 1.903.563 1.34-4.563Zm-2.02 6.832-1.351 4.547 1.902.562 1.348-4.55Zm-2.02 6.828-1.34 4.55 1.892.56 1.347-4.551Zm-2.019 6.828-1.34 4.55 1.899.563 1.34-4.55Zm-2.011 6.832-1.348 4.55 1.898.56 1.352-4.551Zm-2.02 6.828-1.34 4.551 1.89.563 1.348-4.551Zm-2.02 6.832-1.34 4.551 1.9.559 1.339-4.551Zm-2.011 6.828-1.348 4.551 1.899.563 1.34-4.551Zm-2.02 6.832-1.34 4.551 1.891.559 1.352-4.55Zm-2.02 6.829-1.34 4.55 1.9.563 1.34-4.55Zm-2.007 6.832-1.352 4.55 1.899.559 1.34-4.55Zm-2.024 6.828-1.347 4.55 1.898.56 1.352-4.548Zm-2.02 6.832-1.339 4.55 1.902.56 1.34-4.552Zm-2.007 6.828-1.351 4.55 1.902.56 1.34-4.548Zm-2.02 6.832-1.351 4.55 1.898.56 1.352-4.551Zm-2.023 6.828-1.34 4.55 1.89.56 1.352-4.547Zm-2.02 6.832-1.34 4.55 1.903.56 1.34-4.551Zm-2.007 6.828-1.352 4.551 1.903.559 1.34-4.547Zm-2.02 6.832-1.34 4.547 1.887.563 1.352-4.551Zm-2.02 6.828-1.34 4.551 1.9.559 1.34-4.547Zm-2.011 6.82-1.352 4.56 1.903.562 1.34-4.563Zm-2.02 6.833-1.34 4.558 1.891.559 1.348-4.559Zm-2.02 6.828-1.339 4.558 1.899.563 1.34-4.563Zm-2.01 6.832-1 3.379 1.902.558.988-3.379-1.89-.558" />
          <path d="M1012.559 2468.531c.011 0 1.59.348 4.68.98l.402-1.933c-1.54-.316-2.7-.558-3.48-.726-.782-.16-1.173-.25-1.173-.25Zm7.02 1.457c1.362.274 2.921.582 4.671.922l.371-1.941c-1.742-.34-3.293-.649-4.652-.918Zm7 1.371c1.452.282 3.01.582 4.671.891l.371-1.941c-1.66-.309-3.223-.61-4.672-.887Zm7.01 1.332c1.481.278 3.04.559 4.68.86l.352-1.95c-1.633-.292-3.191-.581-4.672-.851Zm7.013 1.278c1.507.27 3.07.55 4.68.84l.347-1.95c-1.617-.28-3.168-.558-4.68-.828Zm7.02 1.25c1.519.261 3.077.543 4.687.812l.332-1.953c-1.602-.27-3.16-.539-4.68-.808Zm7.026 1.21c1.524.262 3.082.52 4.692.79l.32-1.95c-1.601-.269-3.16-.53-4.68-.789Zm7.032 1.18c1.53.25 3.09.512 4.691.77l.32-1.95c-1.601-.257-3.16-.519-4.691-.769Zm7.03 1.153c1.54.25 3.099.5 4.7.75l.309-1.953c-1.598-.258-3.16-.5-4.688-.75Zm7.04 1.117c1.54.242 3.11.492 4.7.73l.3-1.949c-1.59-.25-3.148-.488-4.691-.73Zm7.04 1.09c1.55.242 3.108.48 4.698.722l.301-1.96c-1.59-.243-3.148-.481-4.7-.711Zm7.05 1.07c1.55.23 3.11.461 4.7.7l.288-1.958c-1.59-.23-3.148-.472-4.7-.703Zm7.05 1.04c1.551.23 3.122.452 4.7.683l.281-1.961c-1.582-.23-3.152-.45-4.691-.68Zm7.06 1.01c1.55.22 3.109.45 4.698.673l.274-1.961-4.703-.66Zm7.05.99c1.55.222 3.121.433 4.71.651l.27-1.96c-1.59-.22-3.16-.43-4.71-.649Zm7.059.972c1.562.21 3.132.418 4.71.629l.262-1.961a936.526 936.526 0 0 1-4.703-.63Zm7.07.937c1.55.211 3.121.41 4.71.614l.25-1.961c-1.577-.2-3.148-.41-4.71-.61Zm7.062.922c1.559.2 3.13.399 4.707.602l.25-1.961c-1.578-.2-3.148-.403-4.707-.602Zm7.07.89c1.56.2 3.13.391 4.72.59l.238-1.968a575.62 575.62 0 0 1-4.707-.582Zm7.067.88c1.563.191 3.133.379 4.723.558l.23-1.957c-1.582-.191-3.152-.383-4.71-.57Zm7.082.851c1.559.18 3.13.367 4.711.547l.23-1.969c-1.581-.18-3.152-.359-4.71-.55Zm7.07.82 4.72.54.23-1.961c-1.59-.18-3.16-.36-4.72-.54Zm7.079.81c1.57.167 3.14.35 4.722.519l.219-1.961c-1.578-.18-3.148-.348-4.719-.528Zm7.09.78c1.562.168 3.132.34 4.722.508l.207-1.96c-1.578-.169-3.156-.34-4.719-.509Zm7.081.77c1.56.16 3.141.328 4.72.488l.21-1.969c-1.582-.16-3.16-.332-4.719-.492Zm7.09.738c1.559.16 3.14.32 4.72.48l.198-1.968c-1.578-.16-3.16-.32-4.718-.48Zm7.078.723c1.57.148 3.153.308 4.73.457l.192-1.957c-1.582-.16-3.148-.32-4.718-.473Zm7.09.687c1.57.16 3.153.313 4.73.461l.192-1.968c-1.582-.153-3.16-.301-4.719-.454Zm7.102.68c1.57.152 3.14.3 4.73.441l.18-1.968c-1.59-.14-3.16-.293-4.73-.442Zm7.09.66c1.57.14 3.148.281 4.73.43l.18-1.969c-1.59-.148-3.16-.289-4.73-.43Zm7.101.63 4.73.421.169-1.969-4.73-.422Zm7.098.62c1.57.13 3.14.27 4.73.403l.16-1.973c-1.578-.129-3.16-.27-4.73-.399Zm7.101.602c1.57.12 3.141.25 4.73.379l.161-1.97-4.73-.39Zm7.098.57c1.57.117 3.152.25 4.73.367l.153-1.968c-1.582-.122-3.16-.25-4.73-.372Zm7.102.55c1.57.118 3.148.24 4.742.36l.137-1.972c-1.579-.118-3.16-.239-4.73-.36Zm7.101.54c1.578.11 3.16.23 4.739.34l.14-1.973c-1.582-.11-3.16-.226-4.73-.34Zm7.11.508c1.57.11 3.148.222 4.738.332l.133-1.973-4.73-.328Zm7.109.5c1.57.101 3.148.21 4.738.312l.133-1.972c-1.59-.11-3.172-.207-4.742-.32Zm7.11.472c1.57.098 3.152.2 4.742.297l.117-1.968c-1.578-.098-3.16-.2-4.739-.31Zm7.109.45c1.57.097 3.152.199 4.742.289l.117-1.97c-1.59-.1-3.168-.19-4.738-.288Zm7.11.43c1.57.1 3.151.19 4.741.28l.11-1.972c-1.578-.09-3.16-.188-4.739-.277Zm7.112.417c1.57.09 3.16.184 4.739.262l.11-1.969-4.74-.27Zm7.11.39c1.578.09 3.16.173 4.75.25l.097-1.968a703.09 703.09 0 0 0-4.738-.25Zm7.12.372c1.567.078 3.15.16 4.74.238l.1-1.968c-1.59-.079-3.171-.16-4.741-.239Zm7.11.36c1.578.07 3.16.152 4.75.218l.09-1.969c-1.59-.078-3.172-.148-4.742-.23Zm7.117.331 4.743.207.09-1.968c-1.583-.07-3.16-.14-4.743-.22Zm7.122.309c1.57.07 3.16.14 4.742.2l.078-1.97c-1.578-.07-3.16-.14-4.738-.199Zm7.109.3c1.582.06 3.16.122 4.75.18l.082-1.968c-1.59-.063-3.172-.133-4.75-.192Zm7.121.27c1.578.059 3.16.121 4.75.168l.07-1.968c-1.59-.06-3.172-.122-4.742-.18Zm7.121.25c1.578.059 3.16.11 4.75.16l.059-1.968c-1.578-.063-3.16-.114-4.739-.16Zm7.117.239c1.582.05 3.16.101 4.75.14l.063-1.969-4.742-.152Zm7.121.21c1.582.051 3.172.09 4.75.13l.063-1.97c-1.594-.05-3.172-.09-4.75-.14l-.05 1.98Zm7.13.2c1.581.043 3.16.082 4.741.11l.051-1.97c-1.582-.039-3.16-.078-4.742-.12Zm7.12.172c1.582.039 3.16.07 4.75.097l.04-1.968c-1.59-.04-3.169-.07-4.75-.11Zm7.121.148c1.579.04 3.16.07 4.75.102l.04-1.98c-1.59-.032-3.168-.06-4.75-.09Zm7.122.14c1.578.032 3.168.051 4.75.083l.027-1.98c-1.578-.032-3.16-.052-4.738-.083Zm7.128.11c1.579.031 3.16.05 4.75.07l.02-1.98c-1.578-.02-3.172-.04-4.738-.07Zm7.11.102c1.582.02 3.172.03 4.75.05l.02-1.98c-1.579-.02-3.16-.031-4.739-.05Zm7.129.07c1.59.02 3.172.027 4.75.039l.011-1.98c-1.582-.008-3.16-.02-4.742-.04Zm7.12.05c1.59.009 3.173.02 4.75.02l.013-1.972c-1.582-.008-3.16-.02-4.75-.02Zm7.13.028h4.75v-1.969h-.867c-1.293 0-2.582-.011-3.883-.011Zm7.12 0c1.59 0 3.173-.008 4.75-.008l-.01-1.98c-1.567.008-3.15.008-4.74.008Zm7.13-.02c1.59-.007 3.172-.019 4.75-.03l-.02-1.977c-1.57.008-3.16.02-4.738.027Zm7.12-.05c1.59-.02 3.173-.04 4.75-.047l-.019-1.98c-1.582.019-3.16.027-4.75.046Zm7.13-.078c1.59-.02 3.172-.051 4.75-.07l-.028-1.981c-1.582.031-3.16.05-4.75.07Zm7.12-.11c1.59-.02 3.173-.05 4.75-.082l-.038-1.98c-1.57.031-3.153.062-4.742.082Zm7.122-.133c1.59-.027 3.18-.07 4.75-.097l-.04-1.98c-1.581.03-3.16.07-4.75.1Zm7.129-.16 4.75-.117-.059-1.98c-1.57.039-3.152.078-4.742.12Zm7.12-.187c1.59-.04 3.169-.09 4.75-.14l-.062-1.981c-1.578.05-3.16.101-4.75.14Zm7.118-.223c1.594-.047 3.172-.098 4.75-.156l-.066-1.973c-1.57.051-3.153.11-4.742.16Zm7.121-.238c1.59-.059 3.172-.121 4.75-.18l-.078-1.98c-1.57.058-3.152.12-4.742.18Zm7.121-.27c1.59-.07 3.168-.14 4.75-.199l-.09-1.98c-1.57.07-3.152.129-4.742.199l.082 1.969Zm7.121-.308c1.59-.07 3.168-.14 4.75-.223l-.101-1.969c-1.57.07-3.149.14-4.738.22Zm7.118-.332c1.59-.078 3.171-.16 4.742-.239l-.102-1.98c-1.57.09-3.148.168-4.738.238Zm7.12-.36c1.583-.09 3.16-.172 4.743-.261l-.113-1.98c-1.57.093-3.149.183-4.739.26Zm7.11-.398c1.59-.094 3.172-.184 4.742-.281l-.12-1.97c-1.571.09-3.15.188-4.731.278Zm7.11-.422c1.59-.102 3.171-.2 4.742-.3l-.121-1.981c-1.57.11-3.149.21-4.739.3Zm7.113-.46c1.59-.099 3.168-.212 4.738-.321l-.129-1.969c-1.57.11-3.152.21-4.742.32Zm7.11-.481c1.589-.118 3.167-.23 4.737-.348l-.14-1.973c-1.57.121-3.149.23-4.739.34Zm7.108-.52c1.59-.117 3.168-.238 4.739-.367l-.16-1.973c-1.57.121-3.137.242-4.73.36Zm7.098-.55 4.742-.387-.16-1.973c-1.57.133-3.148.262-4.73.383Zm7.113-.59c1.579-.13 3.16-.27 4.73-.41l-.171-1.97c-1.57.141-3.148.282-4.73.41Zm7.098-.618c1.582-.14 3.16-.281 4.73-.43l-.19-1.972c-1.56.152-3.138.293-4.72.43Zm7.09-.652c1.59-.149 3.16-.3 4.73-.45l-.187-1.968c-1.57.148-3.14.3-4.723.45Zm7.09-.68c1.59-.16 3.16-.32 4.73-.48l-.199-1.969-4.719.48Zm7.09-.719c1.59-.171 3.16-.34 4.73-.5l-.21-1.968c-1.567.168-3.138.328-4.72.5Zm7.09-.761c1.581-.168 3.16-.348 4.722-.52l-.223-1.969c-1.558.18-3.128.348-4.718.52Zm7.081-.79c1.579-.179 3.16-.359 4.72-.55l-.231-1.957c-1.559.18-3.13.36-4.707.539Zm7.079-.827c1.582-.192 3.152-.383 4.722-.57l-.25-1.962c-1.562.192-3.133.38-4.71.57Zm7.07-.864c1.582-.199 3.16-.398 4.723-.597l-.262-1.961c-1.55.199-3.121.398-4.7.59Zm7.07-.91c1.582-.2 3.153-.406 4.711-.617l-.262-1.961c-1.558.21-3.117.422-4.699.621Zm7.07-.937c1.583-.211 3.153-.43 4.7-.641l-.27-1.96c-1.558.21-3.12.429-4.699.64Zm7.06-.97c1.581-.23 3.14-.452 4.702-.683l-.293-1.957c-1.547.23-3.11.45-4.687.68Zm7.05-1.023c1.582-.238 3.14-.468 4.7-.699l-.298-1.96c-1.55.23-3.11.472-4.691.702Zm7.05-1.058c1.571-.238 3.141-.488 4.692-.73l-.3-1.95c-1.551.238-3.122.48-4.692.719Zm7.04-1.102c1.582-.25 3.14-.5 4.691-.758l-.32-1.949c-1.55.25-3.11.5-4.68.758Zm7.031-1.136c1.578-.262 3.14-.524 4.691-.793l-.332-1.95c-1.55.27-3.109.532-4.68.79Zm7.031-1.18c1.578-.274 3.14-.55 4.68-.82l-.34-1.954c-1.543.282-3.101.551-4.672.82l.332 1.942Zm7.02-1.23c1.578-.282 3.14-.563 4.68-.84l-.36-1.954c-1.543.282-3.09.563-4.66.84Zm7.02-1.27c1.57-.293 3.128-.582 4.667-.871l-.367-1.95c-1.543.29-3.09.579-4.66.868Zm7-1.32c1.57-.301 3.128-.602 4.667-.903l-.379-1.937c-1.539.297-3.09.597-4.66.898Zm7-1.364c1.57-.308 3.12-.617 4.66-.93l-.403-1.937c-1.527.309-3.078.617-4.648.93Zm6.988-1.41c1.57-.316 3.12-.637 4.652-.957l-.41-1.941c-1.531.32-3.07.648-4.64.968Zm6.972-1.45c1.57-.327 3.117-.667 4.649-1l-.418-1.929c-1.532.332-3.07.66-4.64.992Zm6.969-1.5c1.57-.347 3.121-.687 4.64-1.026l-.43-1.93c-1.519.34-3.07.68-4.632 1.02Zm6.96-1.558c1.571-.351 3.11-.71 4.63-1.058l-.45-1.934c-1.511.352-3.062.711-4.62 1.063Zm6.938-1.601c1.57-.367 3.114-.739 4.633-1.098l-.46-1.922c-1.52.36-3.051.723-4.622 1.09Zm6.942-1.66c1.558-.38 3.101-.758 4.61-1.13l-.47-1.917c-1.511.367-3.05.75-4.609 1.129Zm6.922-1.707a457.47 457.47 0 0 0 4.597-1.172l-.488-1.91c-1.5.378-3.031.77-4.59 1.16Zm6.91-1.762 4.59-1.2-.5-1.921c-1.5.402-3.024.8-4.59 1.21Zm6.887-1.809c1.57-.43 3.101-.84 4.59-1.242l-.52-1.91c-1.488.402-3.008.812-4.578 1.23Zm6.882-1.87c1.579-.442 3.098-.86 4.579-1.282l-.54-1.899c-1.468.41-2.992.84-4.57 1.27Zm6.86-1.923c1.59-.449 3.11-.886 4.57-1.308l-.55-1.899c-1.45.418-2.97.848-4.56 1.297Zm6.847-1.968c1.614-.47 3.133-.91 4.563-1.329l-.55-1.902c-1.43.422-2.95.86-4.56 1.332Zm6.84-2c1.25-.372 2.422-.711 3.524-1.032l-.563-1.898c-1.097.32-2.27.672-3.508 1.031l.547 1.899" />
        </svg>


      </div>

      <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
        {/* back svg */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={5000}
          height={3000}
          viewBox="2139.396 -98.74 2926.43 3181.023"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}

          className="md:w-[350px] md:h-[350px] xl:w-[350px] xl:h-[350px] w-[330px] h-[330px]"
        >
          <defs>
            <clipPath id="a" />
            <clipPath id="b">
              <path d="M3887.969 868.48s-13.867-9.37-76.29-48.718c-83.238 18.758-159.917 25.008-225.699 24.937-65.761-.847-142.37-8.18-225.378-28.11-62.883 38.47-76.864 47.65-76.864 47.65s114.871 51.683 301.832 50.652c186.93 3.648 302.399-46.41 302.399-46.41" />
            </clipPath>
          </defs>
          <path
            fill="#010101"
            d="m2753.059 2806.55-2.54 1.38c.18.332 1.06 1.78 3.481 3.84 3.629 3.101 10.7 7.57 24.16 11.832 13.45 4.257 33.309 8.328 62.61 10.59 18.82 1.437 34.16 2 46.62 2 19.579 0 32.051-1.364 39.712-2.75 7.66-1.391 10.507-2.813 10.84-2.981a2.915 2.915 0 0 0 1.546-2.461s.012-.39.043-1.11c.028-.73.07-1.788.13-3.128a2.897 2.897 0 0 0-1.36-2.57c-15.38-9.57-41.781-19.532-84.18-24.34-16.43-1.872-30.52-2.602-42.543-2.602-43.25-.012-59.5 9.52-60.008 9.82a2.89 2.89 0 0 0-1.05 3.86l2.539-1.38 1.48 2.481-.008-.031.008.031-.008-.031.008.031c.473-.27 15.95-9 57.04-9.011 11.78 0 25.66.718 41.89 2.57 41.781 4.73 67.39 14.539 81.781 23.5l1.52-2.45-2.88-.12c-.109 2.69-.171 4.27-.171 4.27l2.883.108-1.34-2.558.668 1.27-.64-1.29-.028.02.668 1.27-.64-1.29c0 .008-2.61 1.29-9.911 2.559-7.3 1.27-19.277 2.531-37.988 2.531-12.29 0-27.493-.539-46.18-1.98-38.621-2.97-60.3-9.121-72.152-14.38-5.918-2.628-9.38-5.019-11.309-6.671-.969-.82-1.55-1.457-1.871-1.84-.16-.2-.25-.328-.3-.398l-.02-.04-1.348.82 1.379-.75-.031-.07-1.348.82 1.379-.75-2.531 1.38 1.48 2.48-1.48-2.48"
          />
          <path
            fill={color}
            d="M2691.512 2540.18c0 40.14 8.539 78.539 16.226 100.78 3.121 9.13 27.434 37.54 32.98 57.231 7.852 28.18 13.86 53.649 12.36 108.34 0 0 25.582-15.36 100.723-6.812 42.097 4.793 68.09 14.66 82.98 23.902.75-16.973-21.601-34.93-9.812-58.5 2.652-5.371 37.71-42.101 41-47.812 13.46-23.618 23.972-66.07 26.672-107.938 3.418-52.09-5.082-82.012 7.68-127.23 9.48-33.43 25.007-55.73 45.577-141.32-.75-13.91-1.34-24.602-1.726-29.79-11.73-167.37-13.063-503.59-13.063-503.59-.578-42.8-.52-88.191-.46-145.312.062-19.52.062-40.36.12-63v-2.078c.051-86.692-2.597-118.621-3.53-158.41l-1.61-3.063-128.207-363.027c-1.102 1.558-2.14 3.058-3.121 4.62a4.68 4.68 0 0 0-.461.75c-14.961 26.048-32.692 88.13-35.11 96.618v.063c-.12.628-.242.918-.242.918-18.25 65.902-38.34 148.082-46.84 230.89-.34 3.352-.687 6.7-1.027 10.05-4.45 44.009-6.992 93.15-9.242 139.349-3.348 68.55-6.117 130.75-13.809 160.32-12.82 49.492-35.86 99.851-37.539 161.36-1.73 61.44 6.82 65.722-5.133 101.581-11.957 35.86-34.128 93.04-35.867 169.852-.75 33.43.758 70.738 1.739 106.547 1.261 46.55 18.761 84.953 12.011 114.812-11.96 52.957-33.27 129.77-33.27 169.899"
          />
          <path
            fill="#010101"
            d="M2691.512 2540.18h-2.883c0 20.28 2.152 40.07 5.27 57.61 3.132 17.538 7.21 32.82 11.113 44.108v-.007c.5 1.46 1.297 3 2.316 4.78 1.781 3.099 4.281 6.829 7.133 11.02 4.258 6.278 9.289 13.54 13.68 20.778 2.187 3.62 4.218 7.242 5.91 10.71 1.699 3.47 3.05 6.79 3.89 9.79v-.008c3.508 12.598 6.618 24.539 8.86 38.789 2.238 14.238 3.62 30.8 3.62 52.61a569 569 0 0 1-.23 16.09 2.883 2.883 0 0 0 4.368 2.55l-.02-.031.02.031-.02-.031.02.031c.472-.262 15.921-8.98 56.972-8.988 11.79 0 25.68.718 41.938 2.566 41.793 4.762 67.39 14.563 81.793 23.5a2.9 2.9 0 0 0 2.867.102 2.929 2.929 0 0 0 1.543-2.43c.008-.328.02-.648.02-.969-.012-3.793-.954-7.441-2.25-11.02-1.973-5.37-4.794-10.66-7.051-16.062-2.27-5.39-3.98-10.84-3.98-16.469.01-4.07.87-8.261 3.14-12.82l.008-.012c.03-.078.261-.468.62-.957.673-.953 1.79-2.351 3.2-4.043 2.473-2.949 5.84-6.777 9.543-10.93 5.547-6.218 11.848-13.148 17.02-18.98 2.59-2.918 4.898-5.558 6.699-7.718a77.73 77.73 0 0 0 2.32-2.86c.64-.832 1.129-1.5 1.508-2.16l.011-.02c6.918-12.171 12.961-28.878 17.66-47.859 4.688-18.973 8.02-40.2 9.391-61.312.68-10.38.89-19.88.89-28.778-.01-14.52-.562-27.453-.562-39.992 0-18.668 1.211-36.48 7.243-57.86 2.34-8.238 5.046-15.808 8.148-23.91 4.64-12.14 10.148-25.449 16.422-43.75 6.27-18.308 13.297-41.597 21.027-73.769.07-.262.09-.559.082-.828-.75-13.922-1.332-24.602-1.742-29.863v.02c-5.848-83.567-9.117-209.458-10.91-314.407-.899-52.48-1.438-99.73-1.75-133.863-.149-17.059-.25-30.848-.309-40.368-.03-4.761-.05-8.453-.058-10.953-.012-2.5-.024-3.808-.024-3.808v-.032c-.398-30.02-.488-61.328-.488-97.078 0-15.18.02-31.16.031-48.18.07-19.519.07-40.37.117-63v-4.788c0-84.711-2.609-116.524-3.527-155.782a2.879 2.879 0 0 0-.332-1.28l-1.508-2.868-128.14-362.832a2.888 2.888 0 0 0-5.082-.7c-1.11 1.57-2.18 3.11-3.207 4.75l2.449 1.532-2.313-1.742c-.297.41-.527.78-.77 1.28l2.622 1.212-2.5-1.434c-3.86 6.723-7.809 15.57-11.64 25.262-5.75 14.531-11.22 30.922-15.5 44.488-4.27 13.57-7.34 24.32-8.25 27.512-.071.262-.11.52-.11.79v.062h2.89l-2.84-.543c-.05.242-.081.382-.1.453l-.009.039 1.809.629-1.79-.692-.019.063 1.809.629-1.79-.692c-.05.114-.062.153-.09.262-18.269 65.969-38.401 148.29-46.929 231.371-.34 3.34-.691 6.688-1.031 10.04l-.012.01c-4.449 44.11-6.988 93.298-9.238 139.5-1.68 34.278-3.21 66.95-5.281 94.7-1.028 13.879-2.2 26.527-3.578 37.52-1.391 10.98-2.993 20.32-4.871 27.52-6.36 24.57-15.31 49.519-22.918 76.1-7.614 26.579-13.864 54.81-14.711 85.9a588.594 588.594 0 0 0-.243 16.667c0 24.14 1.614 37.582 1.614 49.133-.012 5.289-.332 10.2-1.282 15.71-.949 5.5-2.53 11.61-5.07 19.24-5.95 17.87-14.531 41.23-21.832 69.769-7.289 28.53-13.308 62.261-14.18 100.922a896.875 896.875 0 0 0-.207 19.359c.008 28.238 1.149 58.3 1.938 87.34.543 19.808 3.973 38.078 7.23 54.73 3.27 16.649 6.34 31.688 6.332 44.93 0 5.07-.453 9.879-1.48 14.43-5.961 26.418-14.281 58.87-21.121 89.77-3.418 15.46-6.461 30.53-8.66 44.28-2.2 13.77-3.551 26.207-3.551 36.489h5.77c0-9.782 1.312-21.989 3.48-35.578 3.262-20.383 8.441-43.864 13.93-67.211 5.492-23.352 11.293-46.57 15.78-66.47 1.15-5.062 1.622-10.3 1.622-15.71-.012-14.121-3.191-29.422-6.43-46.04-3.261-16.612-6.61-34.53-7.133-53.78-.789-29.082-1.93-59.102-1.93-87.18 0-6.531.063-12.95.204-19.23.86-38.141 6.797-71.41 14.008-99.63 7.21-28.222 15.71-51.37 21.71-69.363 2.61-7.828 4.27-14.226 5.282-20.09 1.008-5.859 1.36-11.16 1.36-16.687-.012-12.09-1.602-25.242-1.602-49.133 0-5.008.07-10.476.242-16.508.828-30.41 6.937-58.12 14.476-84.468 7.543-26.352 16.512-51.32 22.961-76.243 1.97-7.59 3.602-17.12 5-28.25 4.211-33.39 6.391-81.238 8.903-132.66 2.258-46.187 4.789-95.3 9.226-139.199.34-3.34.692-6.691 1.043-10.05v.01c8.457-82.562 28.508-164.6 46.75-230.42l-2.793-.77 2.703 1.039a9.36 9.36 0 0 0 .368-1.418c.03-.172.05-.371.05-.54v-.062h-2.879l2.77.79c1.21-4.227 6.238-21.829 12.82-41.599 3.29-9.89 6.97-20.308 10.75-29.859 3.77-9.543 7.649-18.21 11.27-24.512l.12-.218-.05-.02.05.02-.05-.02.05.02.142-.23.136-.2c.942-1.492 1.953-2.95 3.043-4.5l-2.36-1.66-2.722.96 128.211 363.028c.04.11.11.27.16.383l1.61 3.058 2.558-1.34-2.886.06c.93 39.48 3.527 71.05 3.527 155.652V1599.129v-.008c-.059 22.64-.059 43.488-.117 63v.008c-.024 17.02-.032 33.012-.032 48.191 0 35.758.09 67.09.489 97.16v-.03c0 .01.332 84.07 2.133 189.07 1.796 105 5.07 230.91 10.937 314.71v.02c.39 5.121.98 15.82 1.723 29.73l2.886-.16-2.808-.672c-10.262 42.692-19.238 69.512-26.84 89.883-3.809 10.18-7.27 18.77-10.39 26.93-3.13 8.16-5.91 15.918-8.31 24.398-6.222 22-7.472 40.52-7.472 59.43 0 12.723.563 25.621.563 39.992 0 8.809-.211 18.18-.88 28.399-1.34 20.761-4.62 41.691-9.23 60.308-4.59 18.614-10.543 34.942-17.07 46.39l.008-.019c-.098.18-.38.602-.778 1.13-.761 1.011-1.941 2.452-3.402 4.171-5.117 6.02-13.71 15.45-21.277 23.91-3.793 4.23-7.332 8.22-10.082 11.461-1.371 1.617-2.551 3.047-3.48 4.25-.462.598-.86 1.14-1.2 1.64-.352.5-.629.93-.871 1.419l.012-.012c-2.672 5.313-3.75 10.5-3.75 15.402 0 4.532.91 8.81 2.218 12.84 1.961 6.04 4.82 11.559 7.102 16.692 1.148 2.558 2.148 5.02 2.848 7.36.703 2.339 1.101 4.55 1.101 6.66 0 .238 0 .48-.012.718l2.883.121 1.52-2.45c-15.39-9.542-41.77-19.491-84.18-24.32-16.45-1.882-30.57-2.613-42.59-2.613-43.21-.008-59.441 9.512-59.941 9.813l1.488 2.48 2.883.078c.16-5.718.238-11.129.238-16.25 0-22.05-1.398-38.937-3.699-53.507-2.29-14.57-5.469-26.782-9-39.442-1.488-5.281-4.14-10.898-7.309-16.59-4.761-8.53-10.703-17.191-15.722-24.558-2.508-3.684-4.79-7.043-6.559-9.852-.879-1.41-1.64-2.68-2.219-3.77-.59-1.09-1.011-2-1.21-2.62l-.012-.008c-3.79-10.942-7.809-25.98-10.88-43.23-3.07-17.262-5.19-36.731-5.19-56.602h-2.887"
          />
          <path
            fill="#CDCCCB"
            d="M2847.96 2812.172c-63.769-6.113-98.038 6.168-98.038 6.168s18.918 20.48 89.637 26.031c65.793 5.168 92.742-6.52 97.722-14.902-14.39-8.719-43.992-12.957-89.32-17.297"
          />
          <path
            fill="#B2B2B2"
            d="M2934.79 2836.031a24.81 24.81 0 0 0 2.16-1.742c1.171-1.07 2.109-2.18 2.812-3.348a2.88 2.88 0 0 0 .379-1.851c.578.308 1.14.629 1.668.95-1.13 1.91-3.41 3.98-7.02 5.991"
          />
          <path
            fill="#8F8E8E"
            d="M2918.45 2837.18c-6.47-7.27-34.79-13.309-77.13-15.95-6.87-.43-12.89-.62-18.191-.62-33.719 0-37.45 7.788-37.098 11.87-6.68-1.93-12.191-3.94-16.672-5.859-6.28-2.691-10.558-5.2-13.3-7.07 8.652-2.242 28.062-6.2 57.351-6.2 10.23 0 21.668.477 34.27 1.688l.261-2.71-.261 2.71c22.629 2.172 41.308 4.313 56.03 6.98 7.349 1.333 13.72 2.79 19.071 4.442 3.848 1.18 7.18 2.46 9.98 3.828-1.48 1.27-3.683 2.691-6.69 4.063-2.13.968-4.66 1.93-7.622 2.828"
          />
          <path
            fill="#010101"
            d="m2847.96 2812.172.27-2.883c-12.789-1.219-24.41-1.71-34.82-1.71-41.879 0-64.191 7.94-64.46 8.042a2.892 2.892 0 0 0-1.829 2.027 2.91 2.91 0 0 0 .68 2.653c.277.308 5.37 5.668 19.277 11.629 13.922 5.96 36.64 12.52 72.25 15.32 11.3.89 21.48 1.281 30.613 1.281 22.188 0 38.239-2.32 49.418-5.601 5.602-1.64 9.98-3.52 13.32-5.532 1.673-1 3.09-2.039 4.27-3.109 1.172-1.07 2.11-2.18 2.813-3.348a2.883 2.883 0 0 0-.992-3.941c-3.88-2.352-8.63-4.32-14.29-6.059-8.492-2.613-19.03-4.691-31.718-6.55-12.684-1.852-27.512-3.47-44.532-5.102l-.27 2.883-.28 2.867c22.629 2.172 41.308 4.313 56.03 6.98 7.349 1.333 13.72 2.79 19.071 4.442 5.348 1.64 9.688 3.469 13 5.48l1.5-2.472-2.48-1.48c-.34.57-.903 1.273-1.742 2.03-1.47 1.34-3.77 2.86-6.989 4.333-4.832 2.207-11.718 4.328-20.968 5.867-9.25 1.55-20.864 2.543-35.16 2.531-8.973 0-18.993-.379-30.153-1.262-35.11-2.75-57.21-9.199-70.43-14.867-6.62-2.84-11.02-5.473-13.73-7.36-1.348-.952-2.277-1.702-2.86-2.21-.289-.25-.488-.43-.609-.551l-.11-.121-.019-.008-1 .95 1.008-.942-.008-.008-1 .95 1.008-.942-2.117 1.96.969 2.72-.72-2.02.72 2.02-.72-2.02.72 2.02.058-.02c1.223-.418 22.762-7.687 62.461-7.687 10.23 0 21.668.476 34.27 1.687l.28-2.867"
          />
          <path
            fill={color}
            d="M2749.988 2843.121s68.91 56.719 184.953 15.55c-98.703-37.94-184.953-15.55-184.953-15.55"
          />
          <path
            fill="#B2B2B2"
            d="m2750 2843.121-.012-.012s11.403-4.148 31.73-5.89c.743.23 1.493.453 2.262.68-20.98 1.89-33.628 5.132-33.98 5.222"
          />
          <path
            fill="#8F8E8E"
            d="M2803.73 2836.719c-.37-.078-.73-.149-1.09-.219 1.622.02 3.27.059 4.95.121-1.3.027-2.59.059-3.86.098"
          />
          <path
            fill="#010101"
            d="M2783.98 2837.898c-.77-.226-1.52-.449-2.261-.68 5.36-.448 11.332-.738 17.883-.738 1 0 2.02.008 3.039.02.359.07.718.14 1.09.219-7.192.21-13.801.64-19.75 1.18"
          />
          <path
            fill="#243342"
            d="m2808.46 2867.89-58.46-24.769c.352-.09 13-3.332 33.98-5.223 5.95-.539 12.56-.968 19.75-1.18 1.27-.038 2.56-.07 3.86-.097 7.012.25 14.57.828 22.648 1.867 0 0-58.61 7.633-21.777 29.403M2881.52 2871.25s44.468-11.07-10.692-29.988c0 0 42.242 9.148 64.113 17.41l-53.421 12.578"
          />
          <path
            fill="#010101"
            d="m2749.988 2843.121-1.828 2.23c.16.13 9.649 7.919 27.418 15.68 17.781 7.77 43.852 15.508 77.102 15.508 24.129 0 52.03-4.078 83.23-15.148a2.878 2.878 0 0 0 1.918-2.68 2.88 2.88 0 0 0-1.848-2.73c-45.68-17.56-88.69-22.31-121.87-22.31-39.169 0-64.669 6.61-64.84 6.65a2.924 2.924 0 0 0-2.098 2.179 2.895 2.895 0 0 0 .988 2.852l1.828-2.23.73 2.788h.012c.598-.148 25.461-6.469 63.38-6.46 32.64-.009 74.93 4.671 119.8 21.921l1.031-2.7-.96-2.722c-30.602 10.86-57.82 14.82-81.301 14.82-32.34 0-57.61-7.53-74.782-15.03-8.59-3.75-15.148-7.489-19.539-10.29a92.947 92.947 0 0 1-4.937-3.347c-.55-.403-.961-.711-1.223-.922-.129-.102-.23-.18-.289-.23l-.07-.052-.012-.007-.219.27.22-.27-.22.27.22-.27-1.84 2.23.73 2.79-.73-2.79"
          />
          <path
            fill={color}
            d="m2741.14 2694.078 8.86 149.043s86.238-22.39 184.941 15.55c0 0 14.91-108.433 28.43-139.46-41.121-21.723-87.68-29.441-127.531-31.191-53.371-2.348-94.7 6.058-94.7 6.058"
          />
          <path
            fill="#010101"
            d="m2741.14 2694.078-2.878.172 8.847 149.04c.051.87.493 1.651 1.192 2.16.699.51 1.578.679 2.418.46h.011c.598-.148 25.461-6.469 63.38-6.469 32.628 0 74.93 4.68 119.8 21.93.82.309 1.75.23 2.5-.21a2.903 2.903 0 0 0 1.39-2.102s.06-.41.169-1.207c.84-5.993 4.742-33.262 9.992-62.614 2.629-14.68 5.598-29.886 8.7-43.187 1.538-6.66 3.12-12.84 4.698-18.23 1.57-5.391 3.153-10 4.653-13.45.61-1.383.039-3-1.293-3.71-41.68-22.013-88.63-29.763-128.75-31.532-6.578-.29-12.98-.41-19.14-.41-44.138 0-76.138 6.5-76.27 6.531a2.876 2.876 0 0 0-2.297 3l2.879-.172.578 2.82.082-.007c1.777-.36 32.808-6.403 75.027-6.403 6.082 0 12.39.133 18.89.41 39.571 1.73 85.731 9.422 126.302 30.872l1.351-2.56-2.652-1.151c-1.77 4.07-3.508 9.25-5.23 15.261-3.009 10.508-5.97 23.54-8.72 37.211-8.257 41-14.68 87.719-14.69 87.75l2.862.39 1.04-2.69c-45.68-17.56-88.692-22.31-121.872-22.31-39.168 0-64.668 6.61-64.84 6.65l.731 2.8 2.879-.172-8.86-149.05-2.878.18.578 2.82-.578-2.82"
          />
          <path
            fill="#010101"
            d="m2780.32 2838.262.809 21.957c1.14.46 2.312.91 3.52 1.36l-.72-23.669c-1.23.121-2.429.23-3.609.352M2762.09 2840.691l.648 10.739c1.133.629 2.34 1.289 3.621 1.96l-.71-13.269c-1.258.188-2.45.379-3.56.57M2798.488 2836.922l.203 29.328c1.25.36 2.54.691 3.82 1.031l-.21-30.5c-1.29.04-2.563.078-3.813.14M2905.18 2848.879l-4.16 19.441c1.152-.25 2.28-.48 3.43-.742l4.03-17.777c-1.101-.32-2.19-.61-3.3-.922M2924.969 2855.04c-1.09-.38-2.16-.72-3.25-1.09l-2.64 9.788c1.241-.367 2.46-.699 3.722-1.078l2.168-7.62M2853.012 2838.781l-2.84 34.84c1.117.008 2.27 0 3.406 0l2.98-34.441c-1.199-.149-2.359-.27-3.546-.399M2816.86 2836.578l-.551 33.781c1.12.211 2.27.41 3.421.602l.758-34.32c-1.226-.032-2.43-.04-3.629-.063M2835.07 2837.21l-1.629 35.54c1 .09 2.04.16 3.059.238l2.04-35.547c-1.161-.09-2.321-.152-3.47-.23M2870.828 2841.27l-3.719 31.878c1.032-.058 2.07-.168 3.121-.25l4-31.046c-1.14-.204-2.27-.391-3.402-.582M2888.32 2844.66l-4.242 26.73c1.063-.152 2.172-.35 3.242-.53l4.352-25.419c-1.121-.27-2.242-.52-3.352-.78"
          />
          <path
            fill="#010101"
            d="m2765.64 2840.121-7.94-148.672c-1.65.223-3.188.442-4.61.653l9 148.59a177.3 177.3 0 0 1 3.55-.57M2891.672 2845.43l24.77-144.86c-1.68-.48-3.364-.89-5.051-1.34l-23.07 145.43c1.12.25 2.23.5 3.35.77M2908.48 2849.8l31.918-140.96c-1.617-.64-3.226-1.309-4.867-1.91l-30.34 141.949c1.09.3 2.18.601 3.29.922M2924.969 2855.04l26.883-94.68c3.699-17.15 7.668-32.29 11.52-41.141-1.5-.79-3.052-1.43-4.552-2.188l-37.101 136.918c1.09.371 2.16.711 3.25 1.09M2856.559 2839.18l12.832-148.23c-1.43-.18-2.871-.38-4.301-.552l-12.078 148.383c1.18.13 2.347.239 3.547.399M2874.23 2841.852l18.942-146.891c-1.703-.352-3.41-.691-5.133-1.012l-17.21 147.313c1.132.199 2.26.386 3.401.59M2783.93 2837.91l-4.489-148.77c-1.55.141-3.101.27-4.57.4l5.45 148.722c1.179-.133 2.378-.23 3.609-.352M2838.54 2837.441l8.5-148.722c-1.74-.13-3.45-.23-5.161-.32l-6.82 148.812c1.152.07 2.32.148 3.48.23M2802.3 2836.77l-1.038-148.88c-1.282.04-2.582.098-3.832.141l1.058 148.88c1.242-.04 2.524-.09 3.813-.141M2820.488 2836.64l3.274-148.96c-1.5-.02-2.973-.04-4.453-.051l-2.45 148.95c1.2.01 2.41.023 3.63.062M2737.898 2690.059l.133-.028c.61-.14 3.367-.761 7.957-1.59l-.437-2.453c-5.29.961-8.2 1.64-8.211 1.64Zm11.352-2.18c2.39-.41 5.129-.84 8.18-1.277l-.36-2.473c-3.07.45-5.832.883-8.23 1.293Zm11.46-1.738c2.552-.352 5.29-.692 8.212-1.02l-.281-2.48c-2.942.34-5.7.68-8.27 1.03Zm11.5-1.391c2.63-.27 5.38-.54 8.24-.79l-.212-2.48c-2.879.25-5.648.52-8.289.801Zm11.54-1.059c2.672-.203 5.422-.39 8.262-.562l-.153-2.488c-2.847.168-5.62.359-8.3.57Zm11.57-.742c2.68-.14 5.442-.25 8.27-.34l-.078-2.488c-2.84.09-5.621.2-8.32.34Zm11.578-.437c2.704-.063 5.461-.102 8.274-.114l-.012-2.488c-2.832.012-5.601.05-8.32.11Zm11.582-.114c2.72.012 5.48.043 8.282.114l.058-2.492c-2.82-.07-5.601-.098-8.332-.11Zm11.59.204c2.72.078 5.48.199 8.27.34l.129-2.481a387.6 387.6 0 0 0-8.32-.352Zm11.57.527c2.731.16 5.481.36 8.258.582l.204-2.48c-2.801-.231-5.57-.422-8.313-.59Zm11.56.871c2.722.238 5.46.52 8.23.828l.27-2.476c-2.778-.313-5.54-.59-8.278-.832Zm11.51 1.21c2.72.33 5.45.688 8.212 1.09l.348-2.472c-2.77-.387-5.52-.758-8.258-1.09Zm11.481 1.58c2.7.41 5.418.858 8.16 1.35l.43-2.449c-2.75-.492-5.492-.953-8.21-1.363Zm11.41 1.94c2.7.508 5.399 1.051 8.11 1.63l.52-2.438c-2.731-.582-5.461-1.133-8.172-1.64Zm11.34 2.329c2.68.601 5.36 1.23 8.047 1.91l.602-2.418c-2.711-.68-5.41-1.32-8.102-1.922Zm11.25 2.73c2.66.691 5.309 1.422 7.97 2.191l.698-2.39c-2.68-.77-5.359-1.512-8.039-2.211Zm11.137 3.133c2.633.789 5.262 1.629 7.883 2.5l.789-2.371a345.55 345.55 0 0 0-7.95-2.512Zm11.024 3.558c2.59.891 5.18 1.82 7.77 2.801l.878-2.332c-2.61-.98-5.23-1.93-7.84-2.828Zm10.859 3.98c2.55 1 5.098 2.04 7.648 3.118l.97-2.289a283 283 0 0 0-7.72-3.148Zm10.68 4.43a268.22 268.22 0 0 1 7.52 3.438l1.07-2.25c-2.52-1.2-5.051-2.36-7.59-3.469Zm10.48 4.872c1.277.629 2.559 1.27 3.84 1.918l1.129-2.211c-1.29-.66-2.578-1.309-3.871-1.938l-1.098 2.23M4408.66 2806.55l-2.531-1.378 1.371.75-1.34-.82-.031.07 1.371.75-1.34-.82-.02.039c-.16.23-1.03 1.437-3.402 3.23-3.547 2.68-10.5 6.66-23.379 10.48-12.879 3.82-31.668 7.489-58.847 9.579-18.692 1.441-33.89 1.98-46.192 1.98-19.308 0-31.449-1.34-38.672-2.648-3.609-.66-5.988-1.313-7.43-1.774-.718-.226-1.198-.41-1.48-.527a6.37 6.37 0 0 1-.277-.121l-.04-.02-.632 1.29.66-1.27-.027-.02-.633 1.29.66-1.27-1.34 2.558 2.891-.097c0-.012-.059-1.59-.172-4.281l-2.879.12 1.52 2.45c14.39-8.961 40-18.77 81.781-23.5 16.23-1.852 30.11-2.57 41.879-2.57 21.21 0 35.601 2.332 44.621 4.62 4.512 1.15 7.68 2.282 9.691 3.11 1 .41 1.72.75 2.168.98.22.11.38.192.47.239l.093.062.02-.043-.02.043.02-.043-.02.043 1.488-2.48-2.531-1.38 2.531 1.38 1.488-2.48c-.507-.301-16.77-9.833-60.02-9.821-12.007 0-26.108.73-42.526 2.602-42.41 4.808-68.801 14.77-84.18 24.34a2.892 2.892 0 0 0-1.363 2.57c.062 1.34.101 2.398.132 3.117.028.73.04 1.121.04 1.121a2.907 2.907 0 0 0 1.539 2.46c.34.169 3.19 1.59 10.851 2.981 7.66 1.387 20.117 2.75 39.7 2.75 12.468 0 27.808-.562 46.628-2 39.063-3.011 61.34-9.23 74.051-14.863 6.34-2.816 10.3-5.488 12.719-7.558 2.422-2.06 3.3-3.508 3.472-3.84a2.887 2.887 0 0 0-1.043-3.86l-1.488 2.48"
          />
          <path
            fill={color}
            d="M4159.379 2482.14c12.812 45.22 4.27 75.141 7.68 127.231 2.77 41.867 13.222 84.309 26.68 107.938 3.292 5.71 38.34 42.453 41 47.82 11.78 23.562-10.567 41.52-9.817 58.5 14.898-9.25 40.887-19.117 82.988-23.91 75.13-8.547 100.719 6.812 100.719 6.812-1.508-54.691 4.5-80.16 12.36-108.34 5.542-19.691 29.863-48.113 33.03-57.23 7.68-22.242 16.172-60.64 16.172-100.781 0-40.13-21.312-116.942-33.261-169.899-6.758-29.86 10.742-68.261 12.011-114.812.98-35.797 2.48-73.11 1.73-106.547-1.683-76.813-23.901-133.98-35.862-169.852-11.957-35.86-3.41-40.129-5.079-101.582-1.73-61.508-24.78-111.86-37.601-161.36-7.617-29.39-10.399-91.019-13.738-159.097-2.262-46.55-4.801-96.16-9.301-140.57-.352-3.352-.7-6.7-1.04-10.05-7.741-75.31-29.741-165.231-47.41-230.481-1.8-6.532-3.48-12.82-5.152-18.77 0 0-.797-4.91-2.43-12.469-4.199-19.293-14.199-56.082-31.687-73.52.05-.062 0-.062-.121-.12-1.04-1.09-2.2-2.192-3.41-3.121l-119.262 350.261-6.168 17.38c-.988 39.8-3.531 74.738-3.48 161.48v2.078c.07 22.98.07 44.23.129 64.043.05 16.289.05 31.648.05 46.2 0 36.16-.109 67.75-.52 98.07 0 0-1.269 336.23-13.05 503.59-.34 5.198-.98 15.878-1.73 29.788 20.562 85.602 36.09 107.88 45.57 141.32"
          />
          <path
            fill="#010101"
            d="m4159.379 2482.14-2.777.79c6.039 21.332 7.257 39.11 7.257 57.73 0 12.649-.57 25.668-.57 40.328 0 8.84.211 18.274.89 28.57 1.391 21.114 4.72 42.34 9.41 61.313 4.692 18.98 10.712 35.688 17.641 47.86l.008.019c.313.54.692 1.07 1.16 1.71.891 1.18 2.122 2.68 3.622 4.438 5.242 6.16 13.82 15.582 21.378 24.024 3.774 4.219 7.293 8.187 9.973 11.348 1.34 1.582 2.48 2.96 3.32 4.05.418.54.758 1.008 1.02 1.38.25.359.418.652.437.71l.012.012c2.27 4.547 3.121 8.738 3.13 12.808 0 3.75-.75 7.418-1.93 11.051-1.77 5.45-4.508 10.797-6.9 16.13-1.179 2.667-2.28 5.339-3.1 8.05-.81 2.719-1.34 5.48-1.34 8.32 0 .328 0 .66.02.989.05 1.02.64 1.94 1.538 2.41.902.48 2 .441 2.863-.102 14.41-8.937 40.008-18.738 81.797-23.488 16.25-1.852 30.153-2.57 41.942-2.57 21.18 0 35.55 2.32 44.558 4.609 4.512 1.14 7.672 2.27 9.672 3.101 1.012.418 1.719.75 2.168.98.223.11.383.2.473.25l.097.052.024-.051-.024.05.024-.05-.024.05c.903.54 2.024.548 2.942.009a2.87 2.87 0 0 0 1.43-2.57c-.16-5.688-.239-11.071-.239-16.15 0-21.788 1.38-38.34 3.617-52.57 2.25-14.242 5.364-26.171 8.872-38.761v.011c1.28-4.582 3.75-9.89 6.789-15.351 4.57-8.2 10.43-16.75 15.46-24.117 2.52-3.684 4.833-7.082 6.692-10.032.93-1.468 1.75-2.84 2.43-4.09.68-1.25 1.23-2.39 1.609-3.48v-.012c3.898-11.289 7.969-26.57 11.078-44.109 3.102-17.539 5.242-37.328 5.242-57.61 0-10.28-1.351-22.718-3.55-36.488-3.29-20.632-8.5-44.222-14-67.62-5.508-23.4-11.301-46.622-15.782-66.43-1.027-4.551-1.468-9.36-1.468-14.442-.008-13.23 3.058-28.27 6.32-44.918 3.262-16.652 6.691-34.922 7.238-54.73.793-29.012 1.934-59.051 1.934-87.262 0-6.59-.07-13.078-.211-19.43-.84-38.668-6.86-72.398-14.16-100.93-7.301-28.538-15.891-51.898-21.852-69.769-2.527-7.62-4.11-13.719-5.059-19.219-.949-5.5-1.28-10.402-1.28-15.68 0-11.632 1.64-25.171 1.64-49.632 0-4.93-.07-10.309-.23-16.219-.872-31.09-7.13-59.32-14.75-85.898-7.61-26.582-16.57-51.532-22.93-76.102-1.86-7.16-3.45-16.43-4.828-27.332-4.133-32.719-6.32-80.129-8.832-131.2-2.258-46.55-4.79-96.198-9.31-140.706-.35-3.363-.698-6.711-1.038-10.05-7.774-75.622-29.813-165.622-47.5-230.95v-.012c-1.793-6.512-3.473-12.808-5.152-18.789l-2.782.79 2.852-.47c-.012-.043-.82-4.992-2.45-12.613l-.011-.008c-2.117-9.742-5.7-23.87-10.98-37.86-2.649-6.991-5.72-13.948-9.27-20.32-3.559-6.359-7.59-12.14-12.23-16.769l-2.028 2.05 2.059 2.009c.101-.102.23-.239.422-.532a3.34 3.34 0 0 0 .27-.59c.089-.25.148-.57.148-.93.011-.519-.16-1.07-.38-1.448-.199-.34-.41-.559-.581-.711-.297-.258-.48-.348-.59-.418-.168-.082-.207-.102-.219-.102l-.672 1.492.75-1.453-.078-.039-.672 1.492.75-1.453-1.328 2.563 2.09-1.992c-1.11-1.168-2.371-2.368-3.75-3.418a2.877 2.877 0 0 0-2.59-.47 2.92 2.92 0 0 0-1.89 1.829l-119.258 350.262 2.726.93-2.719-.962-6.168 17.38c-.101.28-.16.6-.171.89-.97 39.309-3.48 74.05-3.48 158.95 0 .859 0 1.73.01 2.609v-.008 2.09c.06 22.98.06 44.23.122 64.039.058 16.28.058 31.64.058 46.191 0 36.149-.12 67.73-.52 98.027v.032s-.01 1.308-.019 3.808c-.09 18.774-.59 104.473-2.441 205.09-1.86 100.613-5.07 216.152-10.59 294.492v.008c-.351 5.23-.98 15.91-1.738 29.844-.012.27.008.566.078.828 10.3 42.898 19.371 70.012 27.04 90.55 3.839 10.27 7.32 18.88 10.41 26.97 3.1 8.101 5.812 15.671 8.152 23.91l2.777-.79 2.77-.78c-2.399-8.481-5.18-16.239-8.297-24.4-4.692-12.25-10.141-25.429-16.364-43.562-6.207-18.128-13.18-41.226-20.879-73.25l-2.8.672 2.882.16c.75-13.902 1.387-24.59 1.73-29.761v.011c5.9-83.8 9.157-209.71 10.95-314.71 1.79-105 2.11-189.06 2.11-189.07v.03c.41-30.34.519-61.949.519-98.109 0-14.55 0-29.91-.05-46.21-.06-19.802-.06-41.052-.13-64.04v.008-4.68c0-84.789 2.5-119.32 3.47-158.8l-2.88-.079 2.719.97 6.172-17.38.008-.039 119.261-350.262-2.73-.93-1.75 2.301c1.039.79 2.101 1.79 3.07 2.81.219.23.469.42.762.57l.187.1.032.009.41-.899-.422.899h.012l.41-.899-.422.899 1.133-2.45-1.602 2.172c.34.23.442.25.469.278l1.133-2.45-1.602 2.172 1.692-2.3-2.372 1.578c.27.39.52.59.68.722l1.692-2.3-2.372 1.578 2.391-1.59-2.73.883c.09.277.21.52.34.707l2.39-1.59-2.73.883 2.73-.883h-2.871c0 .293.05.601.14.883l2.731-.883h-2.871 2.86l-2.712-.918c-.078.25-.148.57-.148.918h2.86l-2.712-.918 2.692.91-2.3-1.66c-.11.148-.259.379-.392.75l2.692.91-2.3-1.66 2.23 1.61-1.97-1.923a1.997 1.997 0 0 0-.26.313l2.23 1.61-1.97-1.923a2.878 2.878 0 0 0 .028 4.063c4.113 4.098 7.89 9.46 11.25 15.5 5.063 9.059 9.211 19.629 12.473 29.719 3.258 10.101 5.629 19.71 7.187 26.87v-.01c.801 3.75 1.41 6.85 1.801 8.991.211 1.078.352 1.918.45 2.489.05.28.09.5.113.64l.039.211c.02.117.039.2.07.32 1.668 5.918 3.34 12.207 5.14 18.75v-.011c17.649 65.191 39.63 155.02 47.329 230.03.34 3.349.691 6.7 1.03 10.052v-.012c4.5 44.309 7.028 93.879 9.29 140.422 1.68 34.039 3.21 66.476 5.281 94.129 1.028 13.828 2.2 26.46 3.59 37.508 1.399 11.05 3.008 20.5 4.969 28.05 6.45 24.922 15.43 49.891 22.969 76.243 7.55 26.347 13.671 54.058 14.53 84.468.161 5.852.22 11.18.22 16.059.011 24.21-1.618 37.45-1.63 49.633 0 5.52.352 10.808 1.36 16.66 1.012 5.86 2.672 12.25 5.281 20.066 6 17.992 14.508 41.153 21.73 69.371 7.212 28.211 13.15 61.48 13.981 99.621.14 6.31.2 12.75.2 19.31 0 28.062-1.13 58.05-1.93 87.1-.52 19.25-3.871 37.169-7.121 53.782-3.25 16.617-6.43 31.918-6.442 46.027 0 5.422.48 10.66 1.621 15.723 5.993 26.539 14.313 58.969 21.11 89.738 3.402 15.39 6.43 30.36 8.601 43.95 2.168 13.581 3.48 25.788 3.48 35.57 0 19.87-2.1 39.351-5.16 56.601-3.05 17.25-7.07 32.29-10.85 43.239l.01-.008c-.288.828-.948 2.168-1.878 3.77-1.633 2.82-4.102 6.507-6.934 10.66-4.258 6.25-9.347 13.59-13.86 21.038-4.507 7.47-8.456 15.008-10.417 21.93v.012c-3.531 12.637-6.723 24.848-9.012 39.406-2.289 14.563-3.687 31.442-3.687 53.473 0 5.14.078 10.57.238 16.308l2.879-.078 1.492-2.472c-.512-.309-16.742-9.82-59.941-9.82-12.032 0-26.14.741-42.59 2.613-42.418 4.828-68.79 14.777-84.192 24.32l1.524 2.457 2.887-.14c-.008-.239-.02-.477-.02-.708 0-2.8.723-5.812 1.902-9.043 1.758-4.84 4.54-10.097 6.95-15.797 2.39-5.703 4.418-11.91 4.418-18.71.011-4.903-1.079-10.083-3.739-15.403l.008.012c-.297-.59-.648-1.11-1.098-1.75-.84-1.168-2.011-2.64-3.468-4.39-5.09-6.079-13.614-15.47-21.223-23.938-3.8-4.23-7.367-8.23-10.14-11.453a141.063 141.063 0 0 1-3.458-4.137 34.72 34.72 0 0 1-1.12-1.453c-.29-.399-.5-.707-.583-.86l.012.02c-6.531-11.45-12.46-27.777-17.059-46.39-4.59-18.618-7.882-39.548-9.25-60.31-.671-10.14-.882-19.44-.882-28.19 0-14.509.582-27.509.582-40.329 0-18.86-1.262-37.351-7.493-59.3l-2.77.78"
          />
          <path
            fill="#CDCCCB"
            d="M4313.762 2812.172c63.77-6.113 98.039 6.168 98.039 6.168s-18.922 20.48-89.64 26.031c-65.802 5.168-92.74-6.52-97.72-14.902 14.387-8.719 43.989-12.957 89.32-17.297"
          />
          <path
            fill="#B2B2B2"
            d="M4226.93 2836.031c-3.61-2.011-5.899-4.082-7.02-5.992.531-.32 1.09-.64 1.668-.95-.09.622.031 1.27.383 1.852 1.078 1.809 2.73 3.489 4.969 5.09"
          />
          <path
            fill="#8F8E8E"
            d="M4243.27 2837.18c-4.88-1.48-8.598-3.13-11.27-4.73-1.23-.74-2.238-1.47-3.04-2.16 2.802-1.368 6.13-2.65 9.981-3.83 8.028-2.472 18.329-4.519 30.848-6.35 12.52-1.829 27.27-3.438 44.25-5.07 12.602-1.212 24.04-1.688 34.27-1.688 20.57 0 36.261 1.949 46.78 3.886 4.462.82 7.99 1.64 10.571 2.313-2.832 1.93-7.3 4.539-13.922 7.34-4.367 1.84-9.68 3.75-16.058 5.59.36-4.083-3.371-11.872-37.102-11.872-5.289 0-11.308.192-18.18.621-42.34 2.641-70.668 8.68-77.128 15.95"
          />
          <path
            fill="#010101"
            d="m4313.762 2812.172.277 2.867c12.602-1.21 24.04-1.687 34.27-1.687 20.57 0 36.261 1.949 46.78 3.886 5.263.973 9.231 1.942 11.86 2.653 1.32.359 2.313.66 2.95.859.331.11.562.18.722.238l.16.051.04.02.37-1.04-.37 1.04.37-1.04-.37 1.04.98-2.72-2.121-1.96 1 .93-.989-.938-.011.008 1 .93-.989-.938c-.02.008-4.66 4.91-17.953 10.52-13.297 5.597-35.25 11.89-69.808 14.597-11.16.883-21.192 1.262-30.149 1.262-21.793.012-37.34-2.29-47.8-5.36-5.231-1.53-9.18-3.261-11.981-4.94-2.8-1.669-4.422-3.321-5.078-4.462l-2.48 1.48 1.5 2.473c3.296-2.011 7.636-3.84 13-5.48 8.027-2.473 18.328-4.52 30.847-6.352 12.52-1.828 27.27-3.437 44.25-5.07l-.277-2.867-.274-2.883c-22.699 2.18-41.488 4.332-56.508 7.05-7.511 1.36-14.082 2.86-19.742 4.602-5.66 1.739-10.41 3.707-14.297 6.059a2.883 2.883 0 0 0-.98 3.941c1.398 2.34 3.73 4.45 7.07 6.457 5.02 3.012 12.367 5.75 22.649 7.793 10.27 2.028 23.449 3.34 40.101 3.34 9.13 0 19.297-.39 30.598-1.281 35.621-2.8 58.351-9.36 72.262-15.32 13.91-5.961 19-11.32 19.28-11.63.65-.71.907-1.71.68-2.652a2.898 2.898 0 0 0-1.831-2.027c-.27-.101-22.59-8.043-64.461-8.043-10.418 0-22.028.492-34.82 1.711l.273 2.883"
          />
          <path
            fill={color}
            d="M4411.719 2843.121s-68.899 56.719-184.938 15.55c98.688-37.94 184.938-15.55 184.938-15.55"
          />
          <path
            fill="#B2B2B2"
            d="M4411.719 2843.121c-.328-.09-12.989-3.332-33.98-5.223.761-.226 1.523-.449 2.261-.68 20.328 1.743 31.73 5.891 31.73 5.891l-.011.012"
          />
          <path
            fill="#8F8E8E"
            d="M4357.988 2836.719c-1.27-.04-2.547-.07-3.86-.098 1.68-.062 3.333-.101 4.95-.121-.36.07-.719.14-1.09.219"
          />
          <path
            fill="#010101"
            d="M4377.738 2837.898c-5.949-.539-12.558-.968-19.75-1.18.371-.077.73-.148 1.09-.218 1.024-.012 2.043-.02 3.043-.02 6.55 0 12.52.29 17.879.739-.738.23-1.5.453-2.262.68"
          />
          <path
            fill="#243342"
            d="M4353.262 2867.89c36.828-21.769-21.782-29.402-21.782-29.402a246.255 246.255 0 0 1 22.649-1.867c1.312.027 2.59.059 3.86.098 7.19.21 13.8.64 19.75 1.18 20.991 1.89 33.652 5.132 33.98 5.222l-58.457 24.77M4280.2 2871.25l-53.419-12.578c21.867-8.262 64.11-17.41 64.11-17.41-55.16 18.918-10.692 29.988-10.692 29.988"
          />
          <path
            fill="#010101"
            d="m4411.719 2843.121-1.828-2.23.16.199-.16-.2.16.2-.16-.2c-.13.098-9.313 7.59-26.47 15.032-17.171 7.437-42.292 14.848-74.382 14.848-23.48 0-50.7-3.961-81.3-14.82l-.958 2.722 1.028 2.7c44.87-17.25 87.16-21.93 119.8-21.923 19.262 0 35.153 1.621 46.2 3.25 5.53.813 9.851 1.621 12.77 2.223 1.472.297 2.581.547 3.32.726.382.09.66.153.84.204.09.02.16.039.202.046l.047.012h.012l.719-2.789-1.828-2.23 1.828 2.23.73-2.8c-.18-.04-25.68-6.65-64.84-6.65-33.187 0-76.187 4.75-121.87 22.31a2.869 2.869 0 0 0-1.848 2.73 2.883 2.883 0 0 0 1.918 2.68c31.203 11.07 59.101 15.148 83.23 15.148 33.242 0 59.32-7.738 77.09-15.508 17.781-7.761 27.27-15.55 27.43-15.68a2.867 2.867 0 0 0 .98-2.851 2.901 2.901 0 0 0-2.09-2.18l-.73 2.801"
          />
          <path
            fill={color}
            d="m4420.578 2694.078-8.86 149.043s-86.238-22.39-184.948 15.55c0 0-14.899-108.433-28.418-139.46 41.117-21.723 87.68-29.441 127.527-31.191 53.371-2.348 94.7 6.058 94.7 6.058"
          />
          <path
            fill="#010101"
            d="m4420.578 2694.078-2.879-.18-8.86 149.051 2.88.172.73-2.8c-.18-.04-25.668-6.65-64.84-6.65-33.18 0-76.187 4.75-121.87 22.31l1.03 2.69 2.86-.39c0-.02-3.73-27.16-9.16-58.203-2.707-15.52-5.848-32.02-9.16-46.629-1.66-7.3-3.36-14.129-5.079-20.129-1.73-6.011-3.46-11.191-5.23-15.261l-2.648 1.152 1.347 2.559c40.57-21.45 86.723-29.141 126.301-30.872a443.23 443.23 0 0 1 18.89-.41c21.79 0 40.598 1.614 53.95 3.223 6.672.8 11.98 1.598 15.61 2.2 1.812.3 3.21.55 4.152.73.468.078.82.148 1.058.199.121.02.2.039.262.05l.078.008.578-2.82-2.879-.18 2.88.18.57-2.828c-.118-.031-32.118-6.531-76.258-6.531-6.16 0-12.563.12-19.141.41-40.121 1.77-87.07 9.52-128.75 31.531a2.893 2.893 0 0 0-1.29 3.711c1.599 3.688 3.29 8.68 4.97 14.54 2.941 10.26 5.879 23.179 8.61 36.76 4.1 20.368 7.76 42.227 10.39 58.99 1.32 8.378 2.37 15.48 3.101 20.487.367 2.512.649 4.493.84 5.84.188 1.352.29 2.07.29 2.07.12.872.64 1.653 1.39 2.102.758.442 1.687.52 2.508.211 44.863-17.25 87.16-21.93 119.8-21.93 19.262 0 35.153 1.63 46.2 3.25 5.53.82 9.851 1.63 12.77 2.23 1.472.298 2.581.548 3.32.727.37.09.652.153.84.204.09.02.16.039.202.046l.047.012h.012c.84.219 1.719.05 2.422-.46.7-.509 1.129-1.302 1.18-2.16l8.859-149.04a2.878 2.878 0 0 0-2.313-3l-.57 2.828"
          />
          <path
            fill="#010101"
            d="m4381.398 2838.262-.808 21.957c-1.14.46-2.309.91-3.52 1.36l.72-23.669c1.23.121 2.429.23 3.608.352M4399.629 2840.691l-.649 10.739c-1.128.629-2.34 1.289-3.62 1.96l.71-13.269c1.258.188 2.45.379 3.559.57M4363.23 2836.922l-.199 29.328c-1.25.36-2.543.691-3.82 1.031l.21-30.5c1.278.04 2.56.078 3.81.14M4256.54 2848.879l4.16 19.441c-1.15-.25-2.278-.48-3.43-.742l-4.032-17.777c1.102-.32 2.192-.61 3.301-.922M4236.75 2855.04c1.09-.38 2.16-.72 3.238-1.09l2.653 9.788c-1.243-.367-2.461-.699-3.72-1.078l-2.171-7.62M4308.71 2838.781l2.84 34.84c-1.12.008-2.269 0-3.41 0l-2.98-34.441c1.2-.149 2.36-.27 3.55-.399M4344.86 2836.578l.55 33.781c-1.129.211-2.27.41-3.422.602l-.758-34.32c1.22-.032 2.43-.04 3.63-.063M4326.648 2837.21l1.622 35.54c-.989.09-2.032.16-3.051.238l-2.04-35.547c1.16-.09 2.321-.152 3.47-.23M4290.89 2841.27l3.72 31.878c-1.032-.058-2.07-.168-3.122-.25l-4-31.046c1.14-.204 2.274-.391 3.403-.582M4273.39 2844.66l4.25 26.73c-1.062-.152-2.171-.35-3.242-.53l-4.347-25.419c1.12-.27 2.238-.52 3.34-.78"
          />
          <path
            fill="#010101"
            d="m4396.07 2840.121 7.942-148.672c1.66.223 3.199.442 4.617.653l-9 148.59a165.69 165.69 0 0 0-3.559-.57M4270.05 2845.43l-24.769-144.86c1.68-.48 3.36-.89 5.047-1.34l23.07 145.43c-1.117.25-2.226.5-3.347.77M4253.238 2849.8l-31.918-140.96c1.61-.64 3.23-1.309 4.871-1.91l30.34 141.949c-1.09.3-2.18.601-3.293.922M4236.75 2855.04l-26.879-94.68c-3.7-17.15-7.672-32.29-11.52-41.141 1.5-.79 3.047-1.43 4.547-2.188l37.09 136.918c-1.078.371-2.148.711-3.238 1.09M4305.148 2839.18l-12.828-148.23c1.442-.18 2.88-.38 4.309-.552l12.082 148.383c-1.18.13-2.352.239-3.563.399M4287.488 2841.852l-18.937-146.891c1.699-.352 3.41-.691 5.129-1.012l17.21 147.313c-1.128.199-2.261.386-3.402.59M4377.79 2837.91l4.491-148.77c1.547.141 3.098.27 4.57.4l-5.453 148.722c-1.18-.133-2.378-.23-3.609-.352M4323.18 2837.441l-8.5-148.722c1.73-.13 3.441-.23 5.148-.32l6.832 148.812c-1.16.07-2.32.148-3.48.23M4359.422 2836.77l1.039-148.88c1.277.04 2.578.098 3.828.141l-1.059 148.88a464.91 464.91 0 0 1-3.808-.141M4341.23 2836.64l-3.27-148.96c1.5-.02 2.97-.04 4.45-.051l2.45 148.95c-1.2.01-2.41.023-3.63.062"
          />
          <path
            fill="#1D1C1B"
            d="m4194.54 2716.441.1-.062c.5-.328 2.86-1.809 7.008-3.988l-1.148-2.211c-4.828 2.539-7.3 4.16-7.328 4.191Zm10.05-5.562c2.148-1.07 4.64-2.258 7.46-3.52l-1.019-2.27a202.928 202.928 0 0 0-7.55 3.571Zm10.488-4.84a246.906 246.906 0 0 1 7.64-3.117l-.89-2.32a230.577 230.577 0 0 0-7.726 3.148Zm10.73-4.289c2.462-.91 5.063-1.828 7.794-2.762l-.793-2.36a271.07 271.07 0 0 0-7.86 2.794Zm10.93-3.79c2.532-.82 5.16-1.632 7.903-2.429l-.692-2.39a293.48 293.48 0 0 0-7.969 2.449Zm11.082-3.331c2.578-.719 5.239-1.43 7.989-2.117l-.598-2.41c-2.77.687-5.461 1.398-8.063 2.128Zm11.211-2.899c2.61-.628 5.297-1.23 8.059-1.82l-.512-2.43c-2.789.59-5.5 1.2-8.129 1.829Zm11.297-2.48c2.652-.531 5.363-1.04 8.133-1.531l-.43-2.45c-2.793.493-5.52 1-8.191 1.54Zm11.39-2.078c2.673-.442 5.391-.863 8.18-1.25l-.347-2.473c-2.801.403-5.551.82-8.23 1.262Zm11.454-1.703c2.687-.348 5.43-.68 8.219-.98l-.27-2.47c-2.812.301-5.562.63-8.27.981Zm11.508-1.309c2.699-.27 5.449-.512 8.242-.719l-.192-2.48c-2.808.21-5.582.45-8.289.719Zm11.539-.96c2.71-.18 5.46-.329 8.261-.462l-.109-2.488c-2.82.129-5.59.281-8.32.469Zm11.57-.598c2.711-.102 5.473-.172 8.27-.223l-.04-2.488c-2.82.05-5.59.12-8.328.218Zm11.57-.262c1.04 0 2.082-.012 3.13-.012 1.702 0 3.421.012 5.152.043l.03-2.492c-1.741-.027-3.472-.04-5.183-.04-1.047 0-2.097.013-3.136.013Zm11.59.082a433.3 433.3 0 0 1 8.27.25l.101-2.492c-2.808-.11-5.582-.192-8.32-.25Zm11.582.398c2.719.13 5.469.29 8.258.47l.172-2.481c-2.8-.188-5.57-.348-8.313-.48Zm11.559.711c2.719.2 5.469.43 8.25.688l.23-2.48c-2.789-.259-5.558-.489-8.289-.7Zm11.539 1.008c2.723.27 5.46.57 8.23.902l.301-2.472c-2.789-.328-5.55-.63-8.281-.91l-.238 2.48Zm11.52 1.313c2.71.34 5.44.707 8.203 1.097l.359-2.46c-2.781-.4-5.531-.77-8.25-1.11Zm11.48 1.578c2.7.41 5.43.851 8.172 1.308l.418-2.457c-2.77-.46-5.5-.902-8.219-1.312l-.371 2.472Zm11.441 1.87c1.43.25 2.86.5 4.301.77l.45-2.449c-1.45-.27-2.891-.52-4.321-.781l-.43 2.46"
          />
          <path
            fill={color}
            d="m2899.422 1072.55 128.207 363.02 1.61 3.07c.933 39.79 3.59 71.72 3.53 158.41v2.079c-.058 22.633-.058 43.492-.12 63 0 16.691-.06 32.351-.06 47.242 0 35.348.122 66.36.52 96.098 0 0 1.332 336.23 13.051 503.59.399 5.261 4.738 16.23 1.738 29.863-29.277 133.398 9.59 191.789 9.59 191.789.051.18.051.348.051.46l4.04-.46v.46c39.57 14.388 191.96 60.349 521.331 60.349 329.352 0 481.7-45.961 521.25-60.348.07-.113.07-.281.07-.461 0 0 38.86-58.39 9.57-191.79-2.991-13.632 1.4-24.6 1.74-29.862 11.78-167.36 13.05-503.59 13.05-503.59.41-29.739.52-60.75.52-96.098 0-32.39-.11-68.371-.169-110.242v-2.078c-.062-86.742 2.489-121.68 3.47-161.48l6.167-17.38 119.262-350.261c1.219.93 2.37 2.02 3.41 3.12-33.39-47.53-87.96-83.222-133.352-103.03-19.808-8.66-236.609-99.442-247.398-104.301-15.309 7.261-73.48 2.101-127.29-3.059-43.85-4.2-84.812-8.398-97.312-5.89 0 0-345.289 24.03-373.128 10.859-10.801 4.851-229.098 93.73-248.91 102.39-45.91 20.04-101.122 56.25-134.438 104.532"
          />
          <path
            fill="#010101"
            d="m2899.422 1072.55-2.723.962 128.211 363.027c.031.11.11.27.16.383l1.61 3.058 2.558-1.34-2.886.06c.918 39.46 3.527 71.01 3.527 155.48v4.949-.008c-.059 22.64-.059 43.488-.117 63v.008c0 16.691-.051 32.34-.051 47.242 0 35.348.11 66.379.508 96.14v-.023s.332 84.07 2.133 189.07c1.796 105 5.058 230.91 10.937 314.712v.011c.09 1.219.32 2.48.61 3.867.421 2.09.96 4.473 1.402 7.153.43 2.668.758 5.62.758 8.8 0 2.887-.27 5.958-.98 9.2-8.06 36.687-10.99 67.789-10.99 93.62-.01 68.567 20.72 99.99 20.99 100.388l2.41-1.598-2.759.879 1.63-.52-1.7.149c0 .07.02.191.07.37l1.63-.519-1.7.149 1.09-.098-1.102.027.012.07 1.09-.097-1.102.027h.09-.09.09-.09v.024c0 .828.352 1.61.973 2.156.617.55 1.43.813 2.25.711l4.04-.46-.333-2.868h-2.879v.46c0 1.22.762 2.298 1.903 2.72 39.937 14.52 192.668 60.52 522.308 60.52 329.621 0 482.3-46 522.238-60.52.66-.243 1.204-.7 1.543-1.32.32-.602.368-1.032.399-1.321.031-.281.02-.45.02-.54h-2.88l2.399 1.599c.281-.399 20.992-31.809 20.992-100.38 0-25.827-2.941-56.929-11-93.628-.7-3.211-.973-6.262-.973-9.13 0-4.25.59-8.1 1.243-11.421.32-1.66.66-3.191.937-4.59.281-1.41.512-2.68.594-3.91v.02c5.898-83.801 9.156-209.711 10.95-314.711 1.788-105 2.108-189.07 2.108-189.079v.032c.41-29.762.52-60.793.52-96.14 0-32.403-.11-68.384-.18-110.25v.007-4.688c0-84.793 2.5-119.312 3.47-158.8l-2.88-.07 2.719.968 6.172-17.379.008-.039 119.261-350.262-2.73-.93-1.75 2.301c1.039.79 2.101 1.79 3.07 2.81a2.877 2.877 0 0 0 3.918.241 2.88 2.88 0 0 0 .531-3.89c-16.918-24.09-39.14-45.09-62.82-62.57-23.68-17.481-48.848-31.462-71.73-41.45-2.508-1.09-8.059-3.45-15.91-6.781-27.458-11.621-82.977-34.942-132.82-55.89a52667.999 52667.999 0 0 1-66.27-27.88c-8.93-3.761-16.45-6.93-22.028-9.3-2.793-1.18-5.09-2.16-6.84-2.91s-2.96-1.27-3.511-1.52a2.875 2.875 0 0 0-2.418.02c-1.09.519-2.614 1.019-4.473 1.449-2.789.64-6.36 1.113-10.527 1.421-4.172.301-8.953.45-14.211.45-12.7 0-28.192-.828-44.82-2.07-24.942-1.872-52.47-4.669-77.22-7.008-12.382-1.172-24.07-2.23-34.41-2.993-10.351-.757-19.331-1.23-26.363-1.23-2.488 0-4.718.062-6.707.191-1.98.13-3.71.32-5.203.621l.57 2.829-.199-2.88c-.008 0-.828.06-2.418.169-11.86.812-66.07 4.472-129.601 7.921-63.52 3.461-136.39 6.711-185.48 6.711-14.34 0-26.66-.28-36.06-.91-4.71-.312-8.68-.71-11.78-1.191-1.551-.238-2.88-.5-3.962-.781-1.078-.27-1.898-.547-2.386-.79a2.884 2.884 0 0 0-2.422-.019c-.61.27-2.102.91-4.29 1.82-16.448 6.89-72.96 29.989-127.652 52.39-27.347 11.2-54.25 22.22-75.476 30.95-10.613 4.36-19.8 8.149-26.934 11.11-7.129 2.96-12.168 5.07-14.539 6.101-23.148 10.11-48.597 24.27-72.5 42.008-23.898 17.742-46.258 39.062-63.16 63.531a2.904 2.904 0 0 0-.34 2.602l2.723-.961 2.367 1.64c16.43-23.8 38.34-44.73 61.852-62.171 23.507-17.45 48.609-31.418 71.37-41.348 2.43-1.063 8.02-3.402 15.887-6.672 27.59-11.43 83.48-34.3 133.641-54.828 25.082-10.274 48.73-19.961 66.7-27.344 8.991-3.7 16.562-6.808 22.183-9.137a828.753 828.753 0 0 0 6.898-2.882 176.277 176.277 0 0 0 3.64-1.547l-1.19-2.633-1.23 2.61c1 .472 2.132.84 3.448 1.171 2.293.578 5.14 1.04 8.57 1.43 10.27 1.148 25.712 1.62 44.641 1.62 52.61 0 132.04-3.698 198.371-7.401 66.328-3.707 119.52-7.41 119.532-7.41.117-.008.25-.02.367-.047 1.12-.223 2.633-.41 4.441-.524a99.594 99.594 0 0 1 6.328-.18c9.043 0 21.82.82 36.64 2.07 22.243 1.872 49.102 4.673 75.231 7.012 26.13 2.34 51.52 4.22 70.942 4.22 7.148 0 13.488-.25 18.808-.848 2.66-.293 5.07-.672 7.22-1.16 2.14-.493 4.023-1.09 5.651-1.864l-1.23-2.61-1.191 2.641c.73.32 2.203.961 4.39 1.903 16.422 7.008 72.531 30.578 126.88 53.418 27.183 11.422 53.901 22.66 75 31.539 10.55 4.441 19.69 8.3 26.773 11.3 7.07 3 12.097 5.141 14.398 6.141 22.5 9.828 47.32 23.61 70.61 40.8 23.3 17.2 45.07 37.81 61.53 61.25l2.36-1.66 2.09-1.991c-1.11-1.168-2.36-2.368-3.75-3.43a2.89 2.89 0 0 0-2.59-.457c-.89.27-1.59.95-1.89 1.828l-119.258 350.238-6.16 17.371c-.102.282-.16.602-.172.891-.97 39.3-3.47 74.05-3.47 158.941v4.688c.06 41.871.18 77.851.18 110.242 0 35.34-.12 66.34-.52 96.059v.03c0 .009-.01 1.31-.019 3.821-.09 18.758-.59 104.469-2.453 205.09-1.847 100.61-5.058 216.149-10.578 294.488v.012c-.039.738-.23 1.84-.488 3.149-.402 1.992-.973 4.492-1.442 7.378-.48 2.891-.851 6.18-.851 9.774-.008 3.226.3 6.707 1.101 10.367 7.98 36.32 10.86 67 10.86 92.39 0 33.7-5.078 58.09-10.11 74.012-2.52 7.957-5.03 13.809-6.902 17.63a65.98 65.98 0 0 1-2.226 4.238c-.262.46-.461.8-.602 1.02-.07.112-.11.183-.14.23l-.04.05v.012l.98.64-.98-.652v.012l.98.64-.98-.652a2.95 2.95 0 0 0-.48 1.602v.059l1.59.039-1.57-.258c-.02.148-.02.219-.02.219l1.59.039-1.57-.258 2.39.398-2.121-1.168c-.188.36-.238.617-.27.77l2.391.398-2.121-1.168 2.531 1.39-.98-2.71c-39.18 14.238-191.192 60.168-520.27 60.168-329.101.012-481.16-45.93-520.34-60.168l-.992 2.71h2.89v-.46a2.9 2.9 0 0 0-.956-2.152 2.917 2.917 0 0 0-2.25-.72l-4.051.47.328 2.863h2.89c0-.063 0-.23-.019-.461a3.877 3.877 0 0 0-.172-.883 3.48 3.48 0 0 0-.347-.719l-.93.621.93-.62-.93.62.93-.62c-.04-.07-20.02-30.32-20.032-97.188 0-25.39 2.891-56.07 10.86-92.383a48.337 48.337 0 0 0 1.12-10.437c0-4.774-.66-9-1.339-12.48-.34-1.743-.68-3.294-.95-4.61-.26-1.32-.448-2.422-.51-3.16v.007c-5.849-83.57-9.118-209.449-10.911-314.398-.899-52.48-1.438-99.73-1.75-133.86-.149-17.07-.25-30.851-.309-40.37-.03-4.762-.05-8.45-.058-10.95-.012-2.511-.024-3.812-.024-3.82v-.02c-.386-29.73-.508-60.73-.508-96.07 0-14.89.051-30.543.051-47.242v.012c.07-19.52.07-40.371.117-63.012v-4.949c0-84.578-2.609-116.371-3.527-155.61a2.879 2.879 0 0 0-.332-1.28l-1.508-2.868-128.14-362.832-2.72.96 2.368 1.641-2.367-1.64"
          />
          <path
            fill="#202020"
            d="M4160.629 1253.02s-3.59 11.468-8.32 30.308c-4.73 18.82-10.457 45.05-14.707 74.371-4.23 29.332-6.153 56.11-6.942 75.5-.8 19.41-.61 31.422-.61 31.422s1.97-12.52 4.872-31.012c3-20.039 6.918-46.257 11.156-74.68 3.98-28.468 7.64-54.718 10.442-74.788 2.46-18.551 4.109-31.121 4.109-31.121M3001.09 1253.02s3.582 11.468 8.32 30.308c4.73 18.82 10.461 45.05 14.711 74.371 4.23 29.332 6.149 56.11 6.938 75.5.8 19.41.613 31.422.613 31.422s-1.973-12.52-4.871-31.012c-3-20.039-6.922-46.257-11.172-74.68-3.969-28.468-7.629-54.718-10.43-74.788-2.46-18.551-4.11-31.121-4.11-31.121"
          />
          <path
            fill="#010101"
            d="m2902.441 1064.531 2.7 7.848 2.347-.809-2.687-7.851Zm3.778 10.98 2.691 7.848 2.36-.8-2.7-7.848Zm3.77 10.989 2.702 7.852 2.348-.801-2.687-7.852Zm3.78 10.988 2.692 7.852 2.36-.8-2.7-7.849Zm3.77 10.992 2.7 7.848 2.35-.797-2.698-7.851Zm3.77 10.989 2.703 7.851 2.36-.8-2.7-7.848Zm3.78 10.992 2.7 7.848 2.352-.797-2.7-7.852Zm3.77 10.988 2.7 7.852 2.351-.813-2.691-7.84Zm3.782 10.992 2.687 7.848 2.363-.809-2.703-7.851Zm3.77 10.989 2.698 7.851 2.352-.812-2.691-7.848Zm3.78 10.992 2.688 7.848 2.36-.81-2.7-7.85Zm3.77 10.988 2.7 7.852 2.35-.813-2.69-7.847Zm3.777 10.988 2.692 7.852 2.36-.809-2.7-7.851Zm3.774 10.993 2.699 7.847 2.348-.808-2.688-7.852Zm3.777 10.988 2.691 7.851 2.36-.808-2.7-7.852Zm3.77 10.992 2.703 7.848 2.347-.809-2.699-7.851Zm3.77 10.988 2.702 7.852 2.36-.813-2.7-7.847Zm3.78 10.993 2.7 7.847 2.351-.808-2.7-7.852Zm3.77 10.988 2.7 7.851 2.35-.812-2.69-7.848Zm3.781 10.988 2.692 7.852 2.359-.809-2.7-7.851Zm3.77 10.992 2.699 7.852 2.351-.813-2.69-7.847Zm3.78 10.989 2.688 7.851 2.364-.808-2.703-7.852Zm3.77 10.992 2.7 7.847 2.351-.808-2.691-7.852Zm3.782 10.988 2.687 7.852 2.36-.813-2.7-7.848Zm3.77 10.992 2.698 7.848 2.348-.809-2.687-7.851Zm3.777 10.989 2.691 7.851 2.36-.812-2.7-7.848Zm3.77 10.992 2.702 7.847 2.348-.808-2.7-7.852Zm3.773 10.988 2.699 7.852 2.36-.813-2.7-7.848Zm3.777 10.988 2.7 7.852 2.35-.809-2.699-7.851Zm3.77 10.992 2.703 7.848 2.347-.808-2.687-7.848Zm3.78 10.989 2.692 7.851 2.36-.808-2.7-7.852Zm3.77 10.992 2.7 7.848 2.351-.809-2.691-7.852Zm3.781 10.988 1.22 3.563 2.359-.801-1.23-3.57-2.349.808M4252.02 1060.41l-2.63 7.871 2.36.79 2.629-7.88Zm-3.68 11.02-2.621 7.87 2.36.79 2.632-7.871Zm-3.668 11.02-2.633 7.878 2.371.793 2.621-7.883Zm-3.684 11.03-2.617 7.872 2.36.789 2.628-7.871Zm-3.668 11.02-2.629 7.879 2.368.781 2.62-7.87Zm-3.68 11.031-2.62 7.867 2.359.793 2.633-7.882Zm-3.671 11.02-2.617 7.87 2.359.79 2.617-7.871Zm-3.68 11.02-2.617 7.878 2.36.781 2.628-7.87Zm-3.668 11.03-2.621 7.868 2.36.793 2.62-7.883Zm-3.672 11.02-2.629 7.867 2.36.793 2.629-7.87Zm-3.68 11.02-2.62 7.879 2.363.789 2.617-7.88Zm-3.667 11.03-2.633 7.868 2.36.79 2.632-7.88Zm-3.68 11.02-2.621 7.88 2.36.78 2.62-7.87Zm-3.672 11.02-2.629 7.879 2.367.789 2.621-7.879Zm-3.68 11.027-2.62 7.871 2.359.79 2.632-7.868Zm-3.672 11.024-2.628 7.879 2.37.78 2.622-7.87Zm-3.68 11.027-2.616 7.871 2.359.79 2.629-7.88Zm-3.667 11.02-2.63 7.87 2.368.79 2.621-7.867Zm-3.672 11.02-2.629 7.882 2.36.777 2.628-7.867Zm-3.68 11.03-2.62 7.871 2.362.79 2.618-7.88Zm-3.668 11.02-2.633 7.871 2.364.79 2.629-7.868Zm-3.68 11.02-2.62 7.882 2.359.79 2.62-7.88Zm-3.671 11.03-2.63 7.872 2.36.789 2.63-7.871Zm-3.68 11.02-2.621 7.88 2.36.78 2.62-7.87Zm-3.672 11.031-2.629 7.872 2.371.789 2.621-7.88Zm-3.68 11.02-2.617 7.871 2.36.79 2.629-7.872Zm-3.668 11.02-2.628 7.878 2.367.782 2.62-7.871Zm-3.68 11.03-2.62 7.872 2.36.789 2.632-7.883Zm-3.671 11.02-2.629 7.871 2.371.79 2.617-7.872Zm-3.68 11.02-2.62 7.879 2.362.793 2.63-7.883Zm-3.668 11.031-2.62 7.867 2.359.793 2.62-7.883Zm-3.672 11.02-2.629 7.879 2.36.78 2.629-7.87-2.36-.79M3062.93 2530.809l3.77 130.3c-3.552-37.789-5.91-82.539-7.34-131.578 1.09.41 2.312.84 3.57 1.278M4099.05 2531.238l-5.019 153.332c-1.34 11.38-2.812 21.93-4.43 31.551l5.86-183.66c1.27-.43 2.437-.84 3.59-1.223"
          />
          <path
            fill={color}
            d="M4103.852 2529.54c-2.442 83.16-7.532 154.21-16.57 199.429 0 0-114.61 50.902-505.68 50.902-391.063 0-505.672-50.902-505.672-50.902-9.051-45.219-14.14-116.27-16.578-199.43 39.668 14.371 192.308 60.332 522.25 60.332 329.949 0 482.59-45.96 522.25-60.332"
          />
          <path
            fill="#010101"
            d="M4100.96 2529.46c-1.222 41.54-3.1 80.052-5.8 113.79-2.7 33.738-6.23 62.719-10.719 85.148l2.84.57-1.18-2.64.2.442-.2-.442.2.442-.2-.442c-.331.152-115.21 50.66-504.5 50.652-195.402 0-321.671-12.718-399.011-25.41-38.668-6.351-65.121-12.691-81.852-17.43-8.367-2.37-14.316-4.34-18.148-5.71a115.614 115.614 0 0 1-4.211-1.578c-.45-.18-.777-.313-.988-.403-.102-.039-.18-.078-.23-.097l-.052-.024h-.007l-.23.524.23-.524-.23.524.23-.524-1.172 2.64 2.832-.57c-4.492-22.43-8.012-51.41-10.723-85.148-2.7-33.738-4.578-72.25-5.8-113.79l-2.887.08-.98 2.722c40.05 14.508 193.019 60.5 523.23 60.5 330.218 0 483.187-45.992 523.226-60.5l-1.969-5.434c-39.28 14.23-191.57 60.152-521.257 60.152-329.68 0-481.973-45.921-521.262-60.16l-4-1.441.12 4.25c1.22 41.61 3.11 80.21 5.821 114.082 2.719 33.879 6.258 63.027 10.82 85.82l.29 1.469 1.37.61c.56.242 115.54 51.14 506.84 51.152 391.31-.012 506.29-50.91 506.848-51.153l1.371-.609.29-1.469c4.562-22.793 8.1-51.941 10.812-85.82 2.707-33.871 4.598-72.473 5.808-114.082l-5.77-.168"
          />
          <path
            fill="#010101"
            d="m3339.18 2580.27 3.941 192.03c-1.242-.09-2.492-.171-3.71-.26l-3.391-192.052c1.058.102 2.09.184 3.16.282M3322.309 2578.781l3.37 192.239c-1.05-.079-2.077-.16-3.128-.258l-3.961-192.364c1.262.122 2.45.25 3.719.383M3304.871 2577.05l3.95 192.598c-1.141-.097-2.282-.199-3.423-.308l-3.957-192.63c1.11.118 2.309.22 3.43.34M3356.602 2581.691l3.359 191.75c-1.152-.082-2.281-.152-3.422-.23l-3.379-191.79c1.149.09 2.281.18 3.442.27M3253.39 2571.07l3.981 193.559a520.88 520.88 0 0 1-3.172-.36l-4.55-193.69c1.23.171 2.492.331 3.742.491M3134.09 2743.012l.05 2.36-.05-.02-1.73-65.383 1.73 63.043"
          />
          <path
            fill="#010101"
            d="M3129.04 2549.3c.991.22 1.929.438 2.94.68l5.739 196.149c-1.207-.258-2.39-.508-3.559-.758l-.082-2.371-5.039-193.7M3151.21 2742.54l.161 6.382-.05-.012-1.84-69.41 1.73 63.04"
          />
          <path
            fill="#010101"
            d="M3146.27 2553.11c.96.19 1.96.41 2.949.609l5.73 195.883c-1.21-.23-2.39-.454-3.57-.68l-.18-6.383-4.93-189.43M3166.8 2557.27l5.15 195.43c-1.141-.188-2.302-.4-3.419-.598l-5.191-195.524c1.16.223 2.281.461 3.46.692M3115.129 2545.98l5.172 196.22c-1.11-.27-2.192-.528-3.262-.77l-5.777-196.418c1.226.316 2.578.648 3.867.968M3287.719 2575.21l3.96 192.919c-1.16-.117-2.28-.219-3.417-.328l-3.973-192.961c1.121.12 2.3.23 3.43.37M3097.488 2541.39l5.723 196.45c-1.191-.328-2.32-.649-3.43-.95l-5.832-196.468c1.13.316 2.38.648 3.54.969M3080.219 2536.422l5.703 196.207c-1.274-.41-2.41-.8-3.434-1.16l-5.808-196.14c1.148.362 2.289.722 3.539 1.093M3235.91 2568.691l4.54 193.97c-1.16-.13-2.278-.282-3.419-.411l-4.562-194.04c1.133.169 2.293.321 3.441.481M3215.352 2565.66c1 .149 2.039.309 3.07.461l5.098 194.399c-1.22-.16-2.418-.32-3.622-.48l-.457-19.212-4.09-175.168M3374.012 2582.988l2.797 191.473c-1.047-.063-2.09-.121-3.13-.18l-3.378-191.55c1.219.09 2.469.16 3.71.257M3184.352 2560.52l4.57 195c-1.082-.18-2.121-.348-3.192-.52l-5.19-195.172c1.26.23 2.538.461 3.812.692M3270.262 2573.191l4.527 193.278c-1.238-.13-2.469-.239-3.687-.36l-3.98-193.3c1.026.12 2.097.25 3.14.382"
          />
          <path
            fill="#010101"
            d="m3219.441 2740.84.438 19.2h-.02l-1.937-82.29 1.52 63.09M3202.309 2739.621l.421 18-.05-.012-1.871-79.449 1.5 61.461M3198.219 2562.898c.972.16 2 .332 2.98.493l5.14 194.757c-1.21-.18-2.39-.347-3.589-.52l-.441-18.007-4.09-176.723M3563.578 2589.79v190.038c-1.039 0-2.058-.008-3.09-.02l-.558-190.027c1.21 0 2.441 0 3.648.008M3736.031 2586.172l-2.793 190.848c-1.039.039-2.066.09-3.117.128l2.238-190.808c1.23-.04 2.45-.11 3.672-.168M3942.71 2566.441l-4.581 194.27c-1.129.16-2.27.309-3.418.46l4.559-194.202c1.16-.18 2.289-.36 3.44-.528M3977.078 2560.82l-4.578 194.98c-1.172.188-2.371.36-3.57.54l5.14-195c1.008-.168 2.008-.352 3.008-.52M3960.23 2563.68l-5.16 194.718c-1.05.153-2.11.313-3.18.454l4.56-194.551c1.269-.211 2.519-.41 3.78-.621M3752.898 2585.3l-2.226 190.99c-1.25.05-2.473.108-3.73.17l2.796-190.98c1.082-.058 2.102-.128 3.16-.18M3718.621 2586.988l-2.242 190.672c-1.14.031-2.3.07-3.43.11l2.223-190.63c1.137-.062 2.316-.1 3.45-.152M3684.07 2588.27l-1.672 190.39c-1.136.031-2.289.059-3.43.078l1.692-190.36c1.13-.026 2.281-.07 3.41-.108M4011.86 2554.172l-5.188 195.738c-1.121.211-2.281.43-3.422.64l5.14-195.652c1.2-.25 2.301-.476 3.47-.726M3994.648 2557.61l-5.187 195.402c-1.133.199-2.281.386-3.422.578l5.14-195.34c1.141-.219 2.34-.43 3.47-.64M3701.2 2587.7l-1.68 190.5c-1.23.038-2.489.05-3.73.1l2.241-190.472c1.07-.039 2.09-.09 3.168-.129M3873.719 2575.398l-3.969 192.891c-1.129.102-2.27.2-3.422.313l3.953-192.82a318.74 318.74 0 0 0 3.438-.384M3821.98 2580.46l-3.378 191.938c-1.141.082-2.274.172-3.422.25l3.37-191.898c1.16-.102 2.278-.2 3.43-.29M4029.469 2550.371l-5.778 196.149c-1.07.218-2.132.43-3.23.66l5.148-195.95c1.29-.289 2.602-.57 3.86-.859M3891.18 2573.398l-4.54 193.262c-1.062.102-2.09.211-3.171.32l3.972-193.152c1.25-.129 2.489-.289 3.739-.43M3856.27 2577.262l-3.391 192.508c-1.219.109-2.399.21-3.629.308l3.941-192.52c1.028-.109 2.07-.199 3.079-.296M3839.41 2578.91l-3.96 192.262c-1.028.09-2.09.168-3.13.238l3.38-192.172c1.222-.117 2.491-.218 3.71-.328M3770.3 2584.262l-2.8 191.207c-1.14.07-2.281.133-3.43.172l2.801-191.18c1.129-.07 2.3-.121 3.43-.2M3925.531 2568.95l-4.57 193.921c-1.121.149-2.281.277-3.422.41l4.54-193.86c1.171-.16 2.292-.32 3.452-.472M3787.7 2583.09l-3.372 191.488c-1.047.063-2.09.113-3.129.16l2.813-191.386c1.218-.102 2.468-.172 3.687-.262M3908.04 2571.3l-3.981 193.528c-1.188.121-2.41.25-3.61.383l4.54-193.52c1.023-.132 2.03-.27 3.05-.39M3804.57 2581.852l-2.82 191.68c-1.21.077-2.43.16-3.648.23l3.367-191.66c1.05-.09 2.062-.172 3.101-.25M3460.07 2587.621l1.668 190.52c-1.039-.032-2.078-.063-3.117-.102l-2.23-190.559c1.218.04 2.43.09 3.68.141M3545.98 2589.672l1.122 190.066c-1.262-.008-2.493-.027-3.743-.039l-.55-190.078c1.062.008 2.101.04 3.171.05M3494.398 2588.738 3496.07 2779l-3.43-.059-1.671-190.3c1.152.03 2.27.07 3.43.097M3528.871 2589.441l1.117 190.118a332.15 332.15 0 0 1-3.43-.04l-1.109-190.128c1.121.02 2.29.039 3.422.05M3511.512 2589.121l1.68 190.207c-1.262-.027-2.512-.047-3.75-.066l-1.114-190.223c1.063.031 2.113.063 3.184.082M3666.719 2588.79l-1.117 190.241c-1.243.02-2.493.047-3.73.07l1.679-190.242c1.039-.02 2.129-.039 3.168-.07M3439.281 2586.781c1.028.04 2.11.078 3.14.13l2.798 190.679c-1.25-.04-2.457-.078-3.7-.13l-.468-38.76-1.77-151.919M3425.55 2586.09l2.25 190.851c-1.038-.043-2.081-.082-3.109-.132l-2.812-190.899 3.672.18M3408.2 2585.172l2.812 191.058c-1.133-.058-2.282-.12-3.41-.171l-2.813-191.098 3.41.21M3441.05 2738.7l.438 38.76h-.008l-1.21-103.839.78 65.078M3476.98 2588.21l2.23 190.419c-1.269-.027-2.491-.078-3.75-.11l-1.67-190.417c1.062.027 2.12.07 3.19.109M3632.29 2589.469l-.552 190.12c-1.238 0-2.5.013-3.75.032l1.121-190.101c1.063-.02 2.13-.032 3.18-.051M4063.988 2541.86l-5.797 196.46c-1.113.301-2.25.602-3.441.91l5.73-196.421c1.22-.32 2.34-.637 3.508-.95M3649.64 2589.172l-1.12 190.18c-1.13.02-2.282.027-3.41.039l1.12-190.153c1.149-.02 2.258-.058 3.41-.066M4043.379 2547.14c1.012-.25 1.95-.492 2.941-.742l-5.199 196.243c-1.16.27-2.351.539-3.55.82l1.78-63.262 4.028-133.058M3597.809 2589.79v190.05c-1.118 0-2.278 0-3.41.012v-190.043c1.14 0 2.28-.008 3.41-.02M3390.879 2584.14l3.351 191.27c-1.242-.07-2.492-.14-3.71-.2l-2.82-191.28c1.062.07 2.109.129 3.179.21M3580.7 2589.86v190h-3.419v-190.008c1.149 0 2.27.007 3.418.007M4081.71 2536.809l-6.401 196.48c-1.028.32-2.11.672-3.27 1.04L4077.73 2538c1.38-.41 2.68-.8 3.98-1.191M3615.18 2589.691l-.559 190.047c-1.133.024-2.293.024-3.422.032l.563-190.032c1.148-.008 2.258-.039 3.418-.047M3054.512 2524.98c.02 0 2.648 1 7.898 2.73l.781-2.358a317.064 317.064 0 0 1-5.863-2 89.46 89.46 0 0 1-1.45-.524c-.327-.117-.48-.18-.48-.18Zm11.066 3.758c2.3.742 4.942 1.563 7.953 2.473l.719-2.39a467.613 467.613 0 0 1-7.91-2.45Zm11.14 3.422c2.462.719 5.134 1.488 8 2.29l.673-2.391c-2.86-.809-5.52-1.57-7.961-2.29Zm11.204 3.18c2.527.7 5.207 1.422 8.027 2.172l.63-2.41a696.233 696.233 0 0 1-8-2.16Zm11.25 3.012c2.566.66 5.258 1.34 8.047 2.039l.601-2.422c-2.789-.688-5.46-1.367-8.03-2.028Zm11.277 2.84c2.602.628 5.301 1.277 8.082 1.93l.57-2.423c-2.773-.648-5.46-1.3-8.062-1.93Zm11.32 2.687c2.622.61 5.333 1.223 8.102 1.84l.55-2.43a823.45 823.45 0 0 1-8.093-1.84Zm11.352 2.562c2.64.579 5.348 1.168 8.117 1.75l.524-2.43c-2.774-.59-5.473-1.171-8.114-1.75Zm11.379 2.438c2.648.55 5.36 1.11 8.14 1.66l.489-2.437c-2.77-.551-5.48-1.114-8.129-1.66Zm11.39 2.32c2.669.52 5.391 1.051 8.16 1.582l.47-2.441c-2.77-.531-5.48-1.059-8.141-1.59Zm11.419 2.2c2.68.511 5.402 1.011 8.171 1.511l.45-2.45c-2.77-.5-5.48-1-8.149-1.5Zm11.441 2.101c2.691.488 5.422.969 8.191 1.441l.418-2.453c-2.77-.476-5.488-.957-8.168-1.437Zm11.46 2c2.688.46 5.419.922 8.2 1.371l.399-2.45c-2.77-.46-5.489-.91-8.18-1.37Zm11.481 1.91c2.688.43 5.43.871 8.2 1.3l.379-2.46c-2.758-.43-5.489-.86-8.192-1.3Zm11.48 1.809c2.708.41 5.438.82 8.22 1.23l.359-2.46c-2.77-.41-5.5-.817-8.2-1.227Zm11.509 1.722c2.699.387 5.441.778 8.218 1.168l.34-2.468c-2.77-.38-5.5-.77-8.207-1.172Zm11.511 1.63c2.707.37 5.457.738 8.23 1.109l.329-2.47c-2.77-.37-5.512-.741-8.219-1.108Zm11.52 1.538c2.719.36 5.469.711 8.238 1.063l.313-2.473c-2.774-.347-5.512-.699-8.223-1.058Zm11.539 1.47c2.719.331 5.469.66 8.25.991l.29-2.468c-2.77-.332-5.52-.66-8.231-.993Zm11.55 1.382c2.72.32 5.47.629 8.25.937l.278-2.476c-2.777-.3-5.527-.621-8.25-.934Zm11.552 1.3c2.726.298 5.476.598 8.257.887l.262-2.476c-2.77-.293-5.52-.582-8.25-.883Zm11.558 1.227c2.738.282 5.488.563 8.27.832l.242-2.48c-2.774-.27-5.524-.54-8.25-.828Zm11.57 1.153c2.739.27 5.489.53 8.27.78l.23-2.48c-2.77-.25-5.53-.511-8.261-.77Zm11.579 1.078c2.742.25 5.5.492 8.27.73l.222-2.48c-2.781-.239-5.531-.48-8.262-.73Zm11.59 1.011c2.73.23 5.492.461 8.273.68l.2-2.48c-2.782-.22-5.532-.45-8.27-.68Zm11.581.942 8.29.629.18-2.492c-2.778-.2-5.54-.41-8.27-.618Zm11.598.867c2.742.2 5.5.39 8.281.582l.172-2.492c-2.781-.18-5.531-.379-8.27-.57Zm11.602.8c2.742.18 5.5.36 8.289.532l.152-2.48c-2.781-.172-5.543-.352-8.281-.532Zm11.601.74c2.75.16 5.508.32 8.29.48l.14-2.48c-2.781-.157-5.54-.317-8.281-.49Zm11.61.671c2.75.148 5.507.3 8.289.441l.129-2.492a2322 2322 0 0 1-8.278-.437Zm11.609.602c2.75.136 5.512.27 8.29.398l.12-2.488c-2.781-.133-5.539-.262-8.289-.39Zm11.621.539c2.777.097 5.55.21 8.3.308l.09-2.488c-2.75-.102-5.511-.211-8.3-.313Zm11.61.43c2.78.1 5.55.199 8.3.3l.09-2.48c-2.75-.102-5.512-.211-8.293-.313Zm11.62.417c2.778.102 5.54.203 8.29.301l.09-2.488c-2.75-.09-5.512-.192-8.29-.29Zm11.61.422c2.777.102 5.539.192 8.289.29l.09-2.49c-2.75-.1-5.512-.19-8.29-.288Zm11.61.399c2.78.101 5.55.191 8.3.28l.078-2.487c-2.75-.09-5.508-.18-8.289-.282Zm11.62.39 8.29.27.078-2.489c-2.75-.082-5.508-.171-8.29-.27Zm11.61.38c2.777.093 5.55.171 8.3.26l.07-2.487c-2.75-.09-5.51-.172-8.292-.262Zm11.62.362c2.778.079 5.54.16 8.29.239l.078-2.489c-2.75-.082-5.52-.16-8.3-.242Zm11.61.34c2.778.078 5.547.149 8.297.23l.07-2.491c-2.75-.079-5.52-.149-8.296-.23Zm11.617.32c2.782.07 5.551.137 8.301.208l.063-2.489-8.293-.21Zm11.622.29c2.78.07 5.539.129 8.3.199l.051-2.488c-2.75-.07-5.512-.133-8.293-.204Zm11.62.27c2.782.058 5.54.12 8.301.167l.047-2.488c-2.758-.05-5.52-.11-8.297-.168Zm11.622.237 8.297.153.043-2.492c-2.75-.047-5.524-.098-8.293-.149Zm11.617.211c2.781.04 5.543.082 8.3.121l.032-2.492-8.29-.117Zm11.621.172c2.781.04 5.54.07 8.3.098l.028-2.488c-2.758-.032-5.52-.063-8.297-.102Zm11.629.13c2.793.03 5.562.058 8.32.077l.02-2.488c-2.758-.02-5.528-.05-8.309-.078Zm11.652.1c2.778.02 5.547.028 8.309.04l.012-2.492c-2.762-.008-5.532-.02-8.301-.04Zm11.64.048c2.34.011 4.68.011 7.009.011h1.289v-2.492h-1.29c-2.327 0-4.66 0-7-.008Zm11.63.011 8.3-.03-.011-2.49c-2.762.009-5.531.02-8.3.028Zm11.629-.05 8.32-.06-.02-2.491c-2.77.02-5.539.043-8.308.062Zm11.648-.098c2.781-.024 5.55-.063 8.32-.102l-.027-2.492c-2.77.043-5.543.082-8.312.102Zm11.652-.152c2.77-.04 5.54-.079 8.31-.141l-.052-2.488c-2.758.058-5.527.097-8.297.14Zm11.63-.2c2.769-.058 5.538-.12 8.312-.18l-.063-2.492c-2.77.063-5.53.122-8.3.18Zm11.628-.27c2.762-.07 5.532-.14 8.301-.222l-.078-2.488c-2.762.082-5.52.148-8.29.219Zm11.614-.32c2.77-.09 5.527-.171 8.289-.27l-.082-2.491c-2.758.101-5.52.191-8.278.27Zm11.609-.39c2.758-.102 5.52-.2 8.277-.309l-.097-2.492c-2.762.11-5.52.223-8.27.32Zm11.59-.442c2.75-.117 5.508-.238 8.277-.359l-.117-2.488c-2.762.129-5.512.25-8.262.36Zm11.578-.507c2.75-.13 5.512-.27 8.27-.41l-.13-2.481c-2.75.14-5.507.27-8.257.398Zm11.59-.582c2.75-.137 5.52-.29 8.293-.45l-.14-2.48c-2.77.152-5.532.3-8.282.45Zm11.601-.63c2.758-.16 5.52-.327 8.29-.5l-.15-2.48c-2.769.172-5.53.332-8.28.492Zm11.602-.71c2.758-.168 5.52-.348 8.289-.528l-.172-2.492c-2.758.192-5.52.371-8.27.54Zm11.598-.758c2.761-.191 5.52-.383 8.28-.582l-.171-2.488c-2.77.199-5.527.398-8.277.59Zm11.601-.832c2.75-.2 5.508-.41 8.277-.617l-.199-2.492c-2.758.218-5.52.43-8.27.628Zm11.59-.879c2.738-.219 5.5-.441 8.27-.672l-.2-2.476c-2.77.218-5.52.449-8.27.668Zm11.578-.95c2.75-.23 5.5-.472 8.27-.71l-.207-2.48c-2.774.242-5.524.48-8.274.71Zm11.582-1c2.75-.25 5.5-.5 8.27-.76l-.23-2.481c-2.77.261-5.52.511-8.263.761Zm11.578-1.062c2.742-.258 5.492-.527 8.262-.797l-.242-2.472c-2.77.261-5.52.531-8.258.793Zm11.57-1.117c2.743-.27 5.493-.55 8.262-.832l-.261-2.48c-2.758.28-5.508.562-8.25.832Zm11.56-1.172c2.741-.277 5.491-.57 8.26-.87l-.269-2.47c-2.761.29-5.511.582-8.25.86Zm11.562-1.219c2.738-.289 5.488-.59 8.25-.902l-.27-2.476c-2.77.308-5.512.609-8.25.91Zm11.55-1.27c2.739-.3 5.489-.62 8.25-.929l-.28-2.48c-2.77.32-5.513.629-8.25.937Zm11.547-1.312c2.73-.32 5.48-.636 8.242-.968l-.289-2.47c-2.761.33-5.511.65-8.242.962Zm11.543-1.359c2.73-.328 5.48-.66 8.239-1l-.301-2.469c-2.758.34-5.5.668-8.23 1Zm11.54-1.398c2.73-.34 5.48-.68 8.238-1.032l-.309-2.468c-2.762.347-5.512.687-8.238 1.02Zm11.53-1.45c2.727-.34 5.47-.703 8.227-1.05l-.308-2.47c-2.758.349-5.508.708-8.23 1.048Zm11.528-1.48c2.73-.36 5.473-.723 8.23-1.082l-.328-2.469c-2.761.371-5.5.73-8.222 1.078Zm11.52-1.52c2.73-.363 5.472-.73 8.23-1.113l-.34-2.457c-2.75.367-5.488.738-8.219 1.098Zm11.523-1.55c2.719-.371 5.457-.75 8.219-1.13l-.34-2.472c-2.762.383-5.5.762-8.223 1.133Zm11.508-1.59c2.03-.281 4.07-.57 6.129-.86l.05-.011c.692-.121 1.391-.25 2.082-.38l-.453-2.448c-.687.128-1.386.257-2.078.378l.219 1.23-.168-1.23c-2.05.29-4.09.57-6.121.848Zm11.53-1.852c2.75-.52 5.47-1.039 8.161-1.558l-.473-2.45c-2.687.528-5.398 1.04-8.148 1.559Zm11.419-2.199c2.762-.54 5.473-1.09 8.152-1.64l-.5-2.43c-2.672.539-5.383 1.09-8.133 1.629Zm11.41-2.309c2.75-.57 5.461-1.14 8.133-1.71l-.524-2.43c-2.668.57-5.367 1.14-8.117 1.71Zm11.383-2.41c2.75-.601 5.457-1.203 8.11-1.793l-.544-2.43c-2.648.59-5.347 1.192-8.097 1.794Zm11.36-2.531c2.75-.621 5.448-1.25 8.097-1.871l-.57-2.418c-2.637.617-5.34 1.238-8.079 1.867Zm11.327-2.629c2.762-.66 5.45-1.312 8.082-1.96l-.59-2.411c-2.632.64-5.312 1.29-8.07 1.941Zm11.313-2.75c2.758-.691 5.45-1.371 8.058-2.043l-.62-2.406a884.84 884.84 0 0 1-8.04 2.027Zm11.277-2.871c2.77-.719 5.45-1.43 8.031-2.121l-.64-2.399c-2.57.692-5.25 1.391-8.02 2.11Zm11.242-2.98c2.809-.758 5.48-1.5 8.02-2.211l-.672-2.399c-2.539.711-5.2 1.45-8 2.2Zm11.22-3.11c2.85-.808 5.519-1.59 7.987-2.308l-.699-2.391c-2.46.719-5.12 1.488-7.969 2.3Zm11.179-3.25c3-.898 5.66-1.71 7.96-2.422l-.741-2.379c-2.29.711-4.938 1.52-7.93 2.41Zm11.14-3.422c4.72-1.488 7.22-2.347 7.23-2.36l-.812-2.347s-.148.047-.449.149c-.918.308-3.199 1.07-6.719 2.191l.75 2.367"
          />
          <path
            fill="#00000020"
            d="M4114 2288.488c-.05-3.84-.11-7.797-.18-11.867.13 2.809.258 5.617.38 8.438-.071 1.152-.13 2.293-.2 3.43"
          />
          <path
            fill="#010101"
            d="M4114.09 2352.238s.379-26-.09-63.75c.07-1.136.129-2.277.2-3.43.562 12.653 1.05 25.43 1.46 38.192l-1.57 28.988"
          />
          <path
            fill="#00000020"
            d="M4113.82 2276.621c-4.93-107.14-13.93-203.02-13.93-203.02 9.72 58.34 12.938 142.477 13.93 203.02M4136 2404.11l-3.11-4.669c-4.261-13.441-8.831-29.351-13.71-48.82a489.049 489.049 0 0 0-2.39-11.55c.132-2.352.26-4.602.382-6.743l20.777-78.156s-10.597 122.18-1.949 149.937"
          />
          <path
            fill="#010101"
            d="m4132.89 2399.441-3.34-5.02-9.062-36.82c-.41-2.3-.847-4.632-1.308-6.98 4.879 19.469 9.449 35.379 13.71 48.82m-16.1-60.37c-.052-.25-.11-.512-.169-.77-.172-.77-.312-1.54-.43-2.29l.98-3.683c-.12 2.14-.25 4.39-.382 6.742"
          />
          <path
            fill="#010101"
            d="m4120.488 2357.602-4.816-19.633.52-1.957c.117.75.257 1.52.43 2.289.058.258.116.52.167.77.86 3.91 1.652 7.757 2.39 11.55.462 2.348.9 4.68 1.31 6.98"
          />
          <path
            fill="#00000020"
            d="M4136.969 2045.5s-.438-7.98-2.48-25.469c1.511 11.207 2.402 19.969 2.48 25.469M4134.488 2020.031c-1.25-9.351-2.949-20.402-4.957-32.691.02-1.43.04-2.86.07-4.281 2.22 15.261 3.79 27.511 4.887 36.972"
          />
          <path
            fill="#010101"
            d="M4129.531 1987.34c-.011-.059-.02-.121-.031-.192.02-1.43.04-2.867.07-4.289.008.07.02.13.032.2-.032 1.421-.051 2.851-.07 4.28"
          />
          <path
            fill="#00000020"
            d="M4124.2 1956.219c-18.74-105.989-51.54-262.188-51.821-263.52 26.922 116.43 42.71 199.852 51.93 256.23-.04 2.41-.07 4.852-.11 7.29"
          />
          <path
            fill="#010101"
            d="M4129.5 1987.148a2862.032 2862.032 0 0 0-5.3-30.93c.038-2.437.07-4.878.109-7.288 2.062 12.648 3.8 23.93 5.261 33.93-.03 1.421-.05 2.859-.07 4.288"
          />
          <path
            fill="#00000020"
            d="M3673.64 2400.578c-164.038 0-340.1-60.437-340.75-60.656 133.801 42.867 259.81 52.61 346.758 52.61 72.25 0 117.532-6.731 117.852-6.782-38.16 10.629-80.59 14.828-123.86 14.828M3565.2 2271.96c192.16-20.358 300.48-95.76 300.48-95.76-94.14 88.09-299.258 95.722-300.48 95.76M4169.7 2522.121l-1.4-9.312c-.538-4.95-1.28-10-2.28-15.2l-1.442-9.609v-.11l5.98-135.652c11.91 27.23-.777 169.051-.859 169.883"
          />
          <path
            fill="#010101"
            d="m4168.3 2512.809-2.28-15.2c1 5.2 1.742 10.25 2.28 15.2"
          />
          <path
            fill="#00000020"
            d="M4432.5 2354.379c-20.66-58.45-31.328-206.27-32.781-227.719 2.57 26.07 33.02 192.281 33.02 192.281l.523 23.387c-.453 4.113-.73 8.133-.762 12.05"
          />
          <path
            fill="#010101"
            d="M4433.59 2357.36c-.371-.97-.73-1.962-1.09-2.981.031-3.918.309-7.938.762-12.05l.328 14.952v.078"
          />
          <path
            fill="#00000020"
            d="M4399.719 2126.66c-.117-1.16-.18-2.031-.18-2.61l.18 2.61M4302.031 2499.922c72.11-223.121 87.918-451.524 88.117-454.39v2.077c-.457 266.88-87.527 451.082-88.117 452.313M4163.828 1955.012c133.133-55.121 147.5-165 147.684-166.461v.027c-5.14 128.453-146.742 166.184-147.684 166.434M4407.2 1962.16c-12.9-13.7-43.49-54.539-60.68-147.148.218.457 44.082 93.047 59.14 119.316-.14 3.133-.23 6.063-.23 8.934 0 5.52.351 10.808 1.36 16.66.12.738.26 1.476.41 2.238"
          />
          <path
            fill="#010101"
            d="M4413.2 1967.82c-.122-.09-2.348-1.789-6-5.66a76.13 76.13 0 0 1-.41-2.238c-1.009-5.852-1.36-11.14-1.36-16.66 0-2.871.09-5.801.23-8.934 1.328 2.332 2.442 4.14 3.27 5.32 0 0 1.71 23.883 4.27 28.172"
          />
          <path
            fill="#00000020"
            d="M4130.441 1924.012c.11-8.832.207-17.313.297-25.403 12.942-48.199 54.961-78.257 55.282-78.48-34.13 41.43-49.551 83.312-55.579 103.883"
          />
          <path
            fill="#010101"
            d="M4130.41 1924.102c.121-8.813.219-17.301.309-25.391 0-.04.011-.063.02-.102-.09 8.09-.188 16.57-.298 25.403-.011.027-.02.058-.03.09"
          />
          <path
            fill="#010101"
            d="M4127.121 1937.078h-.012l.86-24.75a109.66 109.66 0 0 1 2.75-13.617c-.09 8.09-.188 16.578-.309 25.39-2.351 8.04-3.262 12.797-3.289 12.977"
          />
          <path
            fill="#00000020"
            d="M4374.18 1734.21c-33.371-71.32-55.602-179.312-55.84-180.44l46.3 137.09c1.329 10.171 2.86 18.93 4.7 26 1.488 5.769 3.129 11.55 4.84 17.35"
          />
          <path
            fill="#010101"
            d="M4379.91 1745.852c-1.95-3.75-3.851-7.641-5.73-11.641-1.711-5.8-3.352-11.582-4.84-17.352-1.84-7.07-3.371-15.828-4.7-26l5.02 14.871 10.25 40.122"
          />
          <path
            fill="#00000020"
            d="M4191.14 1726.2c.098-.5 54.641-268.2 64.88-421.72-.008.329-11.989 245.98-64.88 421.72M3912.5 1644.078c90.102-227.957 142.11-618.289 142.29-619.668h.01c-23.562 401.781-142.3 619.668-142.3 619.668M3266.29 1865.68s-92.349-125.352-92.302-427.11v-.082c0-24.879.633-50.949 2-78.258 0 0 5.59 345.032 90.301 505.45M2993.238 2514.54c-2.437-29.849-10.5-138.79-.207-162.302l5.797 131.73a190.572 190.572 0 0 0-5.59 30.571"
          />
          <path
            fill="#010101"
            d="M2993.879 2522.121c-.008-.11-.25-2.86-.64-7.582.972-9.68 2.683-19.71 5.59-30.57l.171 4-5.121 34.152"
          />
          <path
            fill="#00000020"
            d="M2763.871 2126.66c.098-1.46.149-2.332.168-2.558v.207c-.02.57-.07 1.363-.168 2.351M2729.988 2357.36l.864-38.419s30.437-166.21 33.02-192.28c-1.493 21.82-12.5 174.468-33.884 230.698M2861.559 2499.93s-87.47-184.13-88.118-451.43v-2.941c.27 4.011 16.188 231.832 88.118 454.37M2999.762 1955.012s-142.57-37.563-147.692-166.473c0 0 13.66 110.98 147.692 166.473M2754 1964.59c.352-1.61.66-3.168.922-4.692 1.008-5.859 1.36-11.16 1.36-16.687 0-1.93-.044-3.883-.11-5.902 13-21.22 60.558-121.579 60.887-122.297v.008c-18.368 98.93-52.02 138.78-63.059 149.57"
          />
          <path
            fill="#010101"
            d="M2750.39 1967.82h-.011c2.562-4.289 4.27-28.172 4.27-28.172a52.31 52.31 0 0 0 1.523-2.34c.066 2.02.11 3.973.11 5.903 0 5.527-.352 10.828-1.36 16.687-.262 1.524-.57 3.082-.922 4.692-2.219 2.172-3.52 3.16-3.61 3.23"
          />
          <path
            fill="#00000020"
            d="M3031.2 1917.71c-7.13-22.089-22.7-60.019-53.641-97.581 0 0 38.55 27.441 53.34 72.031.09 8.102.19 16.63.3 25.55"
          />
          <path
            fill="#010101"
            d="M3031.219 1917.781c-.008-.02-.008-.05-.02-.07-.11-8.922-.21-17.45-.3-25.55.011.019.023.038.023.058.09 8.11.187 16.652.297 25.562"
          />
          <path
            fill="#010101"
            d="M3036.469 1937.078c-.047-.219-1.438-7.488-5.25-19.297-.11-8.91-.207-17.453-.297-25.562 2.11 6.36 3.738 13.082 4.687 20.11l.86 24.75"
          />
          <path
            fill="#00000020"
            d="M2784.441 1744.371c2.848-9.223 5.547-18.371 7.918-27.512 1.22-4.71 2.32-10.16 3.301-16.28l49.578-146.81s-24.508 119.551-60.797 190.602"
          />
          <path
            fill="#010101"
            d="m2783.68 1745.852 10.242-40.122 1.738-5.152c-.98 6.121-2.082 11.57-3.3 16.281-2.372 9.141-5.07 18.29-7.919 27.512-.25.488-.511.988-.761 1.48"
          />
          <path d="M3283.23 870.95c.02 0 2.45 1.1 7.168 2.96l.864-2.601c-2.34-.93-4.114-1.66-5.301-2.16-.59-.25-1.031-.438-1.332-.57-.149-.06-.258-.11-.328-.138l-.11-.05Zm9.56 3.89c2.081.8 4.48 1.71 7.21 2.7l.8-2.618c-2.722-.992-5.109-1.89-7.171-2.684Zm9.62 3.57c2.23.8 4.649 1.64 7.25 2.52l.75-2.63c-2.59-.89-4.988-1.73-7.21-2.519Zm9.68 3.34c2.3.77 4.73 1.57 7.289 2.39l.71-2.66c-2.55-.808-4.968-1.609-7.26-2.37Zm9.719 3.16c2.34.73 4.78 1.488 7.32 2.25l.68-2.66a782.49 782.49 0 0 1-7.297-2.25Zm9.77 2.98c2.37.712 4.82 1.419 7.35 2.141l.641-2.672a691.776 691.776 0 0 1-7.332-2.129Zm9.8 2.829c2.39.672 4.851 1.351 7.383 2.031l.597-2.691c-2.52-.668-4.968-1.348-7.347-2.008Zm9.84 2.691c2.41.63 4.87 1.27 7.402 1.91l.57-2.691c-2.52-.64-4.98-1.277-7.37-1.91Zm9.87 2.531c2.423.61 4.891 1.22 7.423 1.82l.539-2.702a650.443 650.443 0 0 1-7.403-1.809Zm9.891 2.41c2.43.57 4.91 1.149 7.442 1.72l.508-2.712c-2.52-.57-4.989-1.14-7.41-1.71Zm9.918 2.27c2.442.55 4.93 1.09 7.461 1.617l.48-2.707c-2.519-.543-5-1.07-7.429-1.62Zm9.942 2.149c2.46.511 4.95 1.02 7.48 1.52l.45-2.712c-2.52-.508-5-1.02-7.45-1.527l-.468 2.719Zm9.969 2.02c2.46.48 4.96.96 7.492 1.429l.418-2.719a776.46 776.46 0 0 1-7.457-1.43Zm9.98 1.901c2.473.45 4.973.899 7.5 1.34l.402-2.73c-2.52-.442-5.02-.89-7.48-1.34Zm10.012 1.77c2.469.43 4.969.848 7.508 1.258l.37-2.73c-2.53-.419-5.019-.829-7.488-1.259Zm10.008 1.66c2.48.399 4.992.79 7.53 1.168l.34-2.73c-2.519-.387-5.03-.778-7.5-1.168Zm10.043 1.55c2.476.368 5 .727 7.527 1.079l.32-2.738a737.18 737.18 0 0 1-7.508-1.082Zm10.046 1.43c2.493.34 5 .669 7.543.989l.297-2.738c-2.539-.332-5.047-.66-7.527-1Zm10.063 1.31c2.488.308 5.008.62 7.55.91l.27-2.743c-2.543-.297-5.05-.598-7.531-.918Zm10.07 1.198c2.5.29 5.02.57 7.559.832l.238-2.75c-2.527-.27-5.047-.543-7.539-.832Zm10.078 1.102c2.5.25 5.032.5 7.57.738l.22-2.75c-2.54-.238-5.06-.488-7.547-.738Zm10.09.98c2.512.23 5.031.45 7.582.66l.188-2.75c-2.54-.222-5.059-.44-7.547-.671Zm10.102.868c2.508.203 5.039.402 7.578.582l.172-2.75c-2.54-.192-5.063-.38-7.563-.59Zm10.11.77c2.51.171 5.038.343 7.589.5l.14-2.759c-2.538-.16-5.062-.332-7.57-.5Zm10.109.651c2.52.149 5.05.29 7.59.43l.12-2.77c-2.539-.128-5.058-.269-7.57-.421Zm10.12.551c2.52.13 5.051.239 7.598.348l.09-2.77c-2.539-.097-5.058-.21-7.566-.34Zm10.13.45c2.511.097 5.039.18 7.59.257l.07-2.758c-2.54-.082-5.059-.171-7.57-.261Zm10.12.34c2.52.07 5.051.128 7.598.19l.051-2.773c-2.539-.047-5.07-.11-7.578-.18Zm10.13.238c2.52.043 5.05.082 7.601.101l.02-2.762c-2.54-.027-5.07-.058-7.582-.109Zm10.128.132h.903c2.219.02 4.449.028 6.699.028v-2.77c-2.238 0-4.469-.008-6.691-.02-.297 0-.59-.007-.887-.007Zm10.133.028c1.09-.008 2.168-.008 3.27-.02l-.012-1.379-.02 1.38c1.442.03 2.891.062 4.333.081l.027-2.77c-1.43-.023-2.867-.042-4.32-.07h-.028c-1.09 0-2.172.008-3.261.008Zm10.098.09c1.89.03 3.762.05 5.633.062.66 0 1.308.008 1.968.008l.008-2.758c-.648-.012-1.308-.012-1.957-.02-1.87-.011-3.742-.03-5.62-.05Zm10.133.082c2.547.007 5.078 0 7.597-.012l-.007-2.758c-2.524.008-5.043.008-7.582.008Zm10.129-.032c2.55-.02 5.078-.05 7.597-.078l-.039-2.77c-2.508.04-5.039.067-7.578.09Zm10.129-.129c2.55-.039 5.082-.101 7.601-.16l-.062-2.77c-2.508.071-5.04.122-7.579.169Zm10.128-.23c2.551-.07 5.082-.16 7.602-.25l-.09-2.762c-2.512.09-5.031.172-7.582.242Zm10.133-.34c2.54-.101 5.078-.21 7.59-.332l-.11-2.758c-2.511.121-5.03.23-7.57.328Zm10.117-.45c2.551-.12 5.082-.26 7.59-.401l-.129-2.758c-2.507.14-5.03.27-7.57.398Zm10.122-.55c2.55-.148 5.07-.32 7.582-.488l-.153-2.762c-2.508.168-5.027.34-7.57.488Zm10.109-.66c2.55-.18 5.082-.371 7.582-.57l-.18-2.758c-2.5.2-5.02.387-7.562.566Zm10.11-.77c2.55-.21 5.07-.43 7.581-.652l-.21-2.758c-2.5.23-5.02.442-7.56.649Zm10.1-.878c2.54-.243 5.071-.48 7.571-.73l-.23-2.763c-2.5.262-5.008.5-7.551.73Zm10.09-.993c2.551-.257 5.071-.539 7.56-.82l-.25-2.75c-2.5.281-5.009.55-7.548.82Zm10.083-1.097c2.547-.293 5.058-.59 7.558-.903l-.289-2.75c-2.48.313-4.992.61-7.531.903Zm10.078-1.223c2.539-.32 5.05-.648 7.539-.98l-.309-2.739c-2.48.328-4.992.66-7.52.98Zm10.058-1.32a601.83 601.83 0 0 0 7.532-1.078l-.328-2.73c-2.48.359-4.993.71-7.524 1.058Zm10.043-1.45c2.54-.378 5.047-.757 7.528-1.16l-.367-2.73c-2.473.39-4.973.781-7.5 1.152Zm10.028-1.558c2.543-.41 5.05-.82 7.52-1.25l-.387-2.73c-2.473.417-4.973.84-7.5 1.25Zm10.02-1.68c2.542-.441 5.042-.89 7.5-1.34l-.419-2.722c-2.449.453-4.949.89-7.48 1.332Zm10-1.8a785.38 785.38 0 0 0 7.491-1.43l-.449-2.723c-2.453.48-4.941.953-7.46 1.434Zm9.98-1.922c2.531-.508 5.031-1.02 7.472-1.528l-.472-2.71c-2.438.507-4.93 1.007-7.45 1.519Zm9.96-2.047a724.39 724.39 0 0 0 7.462-1.633l-.512-2.707c-2.43.547-4.91 1.09-7.43 1.617Zm9.942-2.184a879.866 879.866 0 0 0 7.438-1.726l-.54-2.704c-2.417.57-4.89 1.153-7.41 1.723Zm9.91-2.316c2.54-.614 5.008-1.223 7.418-1.82l-.57-2.704a428.47 428.47 0 0 1-7.39 1.82Zm9.89-2.453c2.528-.649 5-1.29 7.4-1.93l-.61-2.688a860.8 860.8 0 0 1-7.371 1.93Zm9.86-2.59c2.54-.688 4.989-1.38 7.367-2.047l-.636-2.672a533.516 533.516 0 0 1-7.34 2.031Zm9.82-2.75c2.547-.739 5-1.457 7.348-2.16l-.68-2.668c-2.328.699-4.769 1.418-7.308 2.16Zm9.79-2.91c2.57-.79 5.007-1.547 7.308-2.29l-.71-2.648c-2.29.73-4.72 1.5-7.278 2.277Zm9.738-3.079c2.633-.859 5.05-1.671 7.281-2.44l-.762-2.642a359.692 359.692 0 0 1-7.238 2.43Zm9.7-3.28a329.954 329.954 0 0 0 7.241-2.622l-.82-2.61c-2.04.762-4.441 1.634-7.191 2.602Zm9.64-3.528c4.07-1.563 6.172-2.461 6.18-2.473l-.93-2.57-.09.043c-.438.187-2.457 1.039-6 2.387l.84 2.613" />
          <path
            fill={color}
            d="M3887.969 868.488s-13.867-9.379-76.29-48.726c-83.238 18.758-159.917 25.008-225.699 24.937-65.761-.847-142.37-8.18-225.378-28.11-62.883 38.47-76.864 47.65-76.864 47.65s114.871 51.683 301.832 50.652c186.93 3.648 302.399-46.403 302.399-46.403"
          />
          <path d="m3887.969 868.488 1.332-2.36c-.051-.026-13.922-9.41-76.352-48.769a2.443 2.443 0 0 0-1.777-.308c-83.05 18.719-159.563 24.96-225.184 24.89l-.008 2.758.032-2.758c-65.614-.851-142.051-8.171-224.871-28.05a2.385 2.385 0 0 0-1.782.289c-62.89 38.468-76.87 47.66-76.918 47.691-.82.54-1.293 1.54-1.222 2.578.07 1.04.68 1.95 1.562 2.352.219.09 110.297 49.578 290.29 50.847 4.128.032 8.308.032 12.507.012l-.008-2.77-.039 2.77c4.2.078 8.367.13 12.508.16 179.992 1.27 290.64-46.672 290.86-46.761.89-.387 1.5-1.29 1.59-2.329.081-1.05-.368-2.039-1.188-2.601l-1.332 2.36-.93-2.567-.07.027c-3.168 1.352-112.547 47.59-288.899 46.34-4.11-.02-8.27-.078-12.449-.16h-.062c-4.188.02-8.34.02-12.457-.008-89.57-.633-161.73-13.262-211.461-25.73-24.871-6.23-44.13-12.422-57.16-17.04-6.512-2.32-11.47-4.242-14.79-5.581a162.902 162.902 0 0 1-3.75-1.551c-.421-.18-.73-.309-.93-.399-.113-.05-.183-.082-.23-.11l-.07-.03-.973 2.558 1.313 2.371.027-.02c.844-.55 15.852-10.327 76.75-47.589l-1.226-2.41-.551 2.7c83.21 19.972 159.988 27.32 225.898 28.179h.031c65.918.07 142.782-6.2 226.211-25l-.511-2.707-1.258 2.398c31.2 19.66 50.27 31.84 61.527 39.102 5.63 3.629 9.313 6.02 11.57 7.508 1.141.75 1.922 1.27 2.422 1.601.239.16.418.277.54.36l.12.078.04.03 1.328-2.35-.93-2.567.93 2.566" />
          <g clipPath="url(#a)">
            <g clipPath="url(#b)">
              <path d="M3271.5 898.14c.238.09 1.09.391 2.531.891l37.59-129.32c-.473-.16-.793-.281-.973-.34l-.148-.05-.828 2.75.828-2.75-.828 2.75.828-2.75-5.441 18.058 5.453-18.059h-.012l-5.441 18.059 5.453-18.059-7.301 24.16 7.3-24.16-7.3 24.16 7.3-24.16-.081-.03-16.73 55.67 16.87-55.62-.14-.05-16.73 55.67 16.87-55.62Zm12.64 4.27c.63.2 1.282.41 1.962.63l34.878-130.22c-.558-.18-1.101-.36-1.609-.52Zm11.669 3.66c.64.2 1.28.39 1.93.59l33.12-130.77c-.558-.18-1.12-.34-1.66-.511Zm11.57 3.442c.633.187 1.27.367 1.922.558l31.61-131.218c-.571-.16-1.13-.332-1.68-.493Zm11.52 3.27c.632.167 1.273.347 1.921.527l30.239-131.61c-.579-.16-1.137-.308-1.7-.469Zm11.511 3.109c.63.16 1.27.328 1.918.5l28.942-131.95c-.57-.152-1.141-.3-1.711-.453Zm11.512 2.968c.629.16 1.27.32 1.906.48l27.711-132.269c-.578-.148-1.148-.289-1.719-.43Zm11.508 2.832c.64.149 1.28.309 1.922.457l26.5-132.558c-.582-.14-1.153-.281-1.723-.418Zm11.52 2.707c.64.153 1.28.293 1.929.442L3392.19 792c-.582-.129-1.152-.262-1.73-.398Zm11.538 2.582c.64.141 1.282.282 1.934.418l24.137-133.097c-.579-.121-1.149-.25-1.73-.371Zm11.551 2.461c.64.137 1.29.27 1.93.399l22.992-133.34c-.582-.121-1.16-.238-1.742-.36Zm11.57 2.348c.653.121 1.29.25 1.93.371l21.84-133.57c-.578-.121-1.16-.23-1.738-.34Zm11.59 2.223c.653.117 1.29.238 1.942.347l20.668-133.789c-.579-.11-1.16-.21-1.739-.32Zm11.61 2.097c.64.11 1.293.22 1.93.34l19.53-134.008c-.59-.101-1.167-.203-1.75-.3Zm11.62 1.98c.65.11 1.301.212 1.942.321l18.36-134.2c-.583-.1-1.16-.19-1.743-.288Zm11.65 1.86c.64.102 1.292.2 1.94.301l17.192-134.379c-.582-.09-1.16-.18-1.75-.27Zm11.66 1.742c.652.09 1.3.188 1.952.278L3475.7 807.41c-.578-.082-1.168-.16-1.75-.25Zm11.683 1.618c.648.09 1.297.171 1.95.261l14.827-134.718a97.99 97.99 0 0 0-1.75-.23Zm11.707 1.5c.652.082 1.3.152 1.95.23l13.62-134.867c-.59-.07-1.168-.14-1.75-.211Zm11.723 1.37 1.949.212 12.41-135.012c-.59-.059-1.172-.129-1.75-.188Zm11.738 1.243c.648.066 1.3.129 1.95.2l11.179-135.142c-.59-.058-1.168-.12-1.75-.18Zm11.75 1.117c.66.063 1.308.121 1.969.172l9.921-135.25c-.582-.05-1.171-.102-1.75-.16Zm11.781.992c.649.047 1.309.098 1.969.149l8.648-135.36c-.578-.039-1.168-.09-1.75-.14Zm11.8.848c.65.05 1.31.09 1.958.133l7.371-135.453c-.578-.04-1.172-.07-1.75-.11Zm11.81.73c.648.032 1.308.07 1.968.102l6.063-135.52c-.582-.03-1.172-.07-1.75-.101Zm11.82.582c.66.028 1.32.059 1.98.09l4.73-135.601c-.581-.02-1.171-.04-1.75-.07Zm11.847.45 1.973.058 3.39-135.64c-.59-.02-1.171-.028-1.75-.047Zm11.852.308c.66.012 1.32.02 1.969.031l2.02-135.671c-.579-.008-1.16-.02-1.739-.028Zm11.871.16h.41c.528 0 1.047.012 1.57.012l.598-135.691c-.449 0-.91 0-1.37-.008h-.368Zm11.93.012c.668-.012 1.328-.012 1.988-.02l-.918-135.68c-.582 0-1.16 0-1.742.009Zm11.937-.152c.66-.02 1.32-.028 1.98-.04l-2.437-135.667c-.582.008-1.152.027-1.73.039Zm11.922-.309c.668-.031 1.328-.05 1.988-.07l-3.949-135.621c-.578.02-1.16.043-1.738.062Zm11.93-.469c.66-.03 1.32-.062 1.98-.09l-5.46-135.562c-.57.02-1.15.05-1.731.082Zm11.91-.632 1.988-.118-6.957-135.472c-.582.031-1.16.07-1.742.101Zm11.91-.778 1.98-.152-8.46-135.367c-.578.039-1.149.078-1.73.129Zm11.89-.941c.66-.059 1.321-.11 1.981-.168l-9.953-135.262c-.578.05-1.148.11-1.726.149Zm11.88-1.102c.66-.058 1.32-.129 1.98-.187L3684.97 812.93c-.578.058-1.149.12-1.73.18Zm11.87-1.25c.66-.066 1.321-.148 1.981-.218l-12.93-134.961c-.581.07-1.152.132-1.73.203Zm11.86-1.41c.66-.078 1.309-.168 1.969-.25l-14.418-134.77c-.57.07-1.152.153-1.73.223Zm11.84-1.566c.66-.09 1.309-.184 1.969-.274l-15.91-134.566c-.57.078-1.149.156-1.72.238Zm11.82-1.723c.66-.098 1.32-.2 1.97-.3l-17.4-134.348c-.57.09-1.152.168-1.718.257Zm11.809-1.879c.66-.11 1.312-.219 1.973-.332l-18.903-134.11c-.57.102-1.14.204-1.719.294Zm11.793-2.039c.656-.11 1.308-.23 1.957-.351l-20.399-133.848c-.558.11-1.14.207-1.71.308Zm11.77-2.191c.66-.13 1.308-.258 1.956-.39l-21.91-133.56c-.558.11-1.129.23-1.699.34Zm11.757-2.36c.653-.14 1.301-.27 1.95-.41l-23.43-133.25c-.559.121-1.13.23-1.7.352Zm11.73-2.52c.66-.152 1.31-.288 1.962-.44l-24.98-132.919c-.56.13-1.122.258-1.692.38Zm11.72-2.69c.66-.15 1.312-.31 1.96-.462L3787.82 795.59c-.558.129-1.12.27-1.691.398l26.281 132.621Zm11.71-2.86c.653-.16 1.301-.328 1.95-.488l-28.13-132.16c-.558.136-1.12.277-1.679.418Zm11.692-3.031c.648-.168 1.3-.348 1.949-.52l-29.77-131.738c-.55.148-1.109.3-1.671.45Zm11.68-3.207c.648-.192 1.3-.383 1.949-.563l-31.461-131.258c-.547.149-1.098.309-1.66.47Zm11.68-3.41a92.45 92.45 0 0 1 1.948-.59l-33.23-130.742c-.54.16-1.09.332-1.64.492Zm11.69-3.622c.66-.21 1.31-.421 1.95-.628l-35.11-130.153c-.53.172-1.082.34-1.62.52Zm11.72-3.859c.66-.223 1.32-.45 1.96-.672l-37.172-129.46c-.52.171-1.058.363-1.597.542Zm11.808-4.14c.68-.25 1.34-.493 1.992-.731l-39.57-128.61c-.5.18-1.02.372-1.551.56Zm12.11-4.583c.761-.296 1.46-.578 2.113-.84l-42.91-127.328c-.41.168-.883.348-1.403.56l42.2 127.608" />
            </g>
          </g>
          <path
            fill={color}
            d="M3272.219 877s-75.649-272.59-47.63-455.078c28.013-182.492 138.68-287.602 285.782-295.692 126.07-3.46 315.188 92.399 375.43 137.45 60.238 45.05 81.25 84.32 71.437 265.66-9.797 181.34-53.226 343.039-53.226 343.039s-303.992 174.41-631.793 4.621"
          />
          <path
            fill="#020001"
            d="m3272.219 877 3.203-.59s-.05-.191-.16-.558c-1.563-5.73-14.98-55.383-27.992-124.18-13.02-68.793-25.63-156.742-25.63-238.992 0-31.45 1.848-62.059 6.2-90.418 13.95-90.89 48.469-162.313 97.531-211.903 24.54-24.8 52.7-44.148 83.777-57.808 31.09-13.66 65.114-21.64 101.442-23.64l-.219-2.68.11 2.69c2.19-.062 4.398-.093 6.628-.093 31-.008 65.801 5.75 101.43 15.133 53.441 14.07 108.742 36.27 156.152 59.07 23.707 11.399 45.45 22.957 64.008 33.719 18.563 10.762 33.942 20.719 44.89 28.91 12.622 9.45 23.423 18.57 32.54 28.75 6.84 7.64 12.742 15.88 17.781 25.34 7.54 14.2 13.14 31.172 16.84 52.95 3.71 21.78 5.52 48.359 5.52 81.671 0 21.86-.782 46.629-2.301 74.848-4.899 90.531-18.188 176.203-30.258 239.222-6.04 31.52-11.762 57.368-15.98 75.329-2.11 8.992-3.84 16-5.051 20.761-.602 2.39-1.07 4.207-1.39 5.43-.161.61-.278 1.07-.36 1.379-.078.308-.121.46-.121.46l3.203.579-1.883-2.2-.09.051c-1.96 1.11-36.867 20.73-94.5 40.04-57.64 19.32-137.988 38.332-230.848 38.332-91.851-.012-195.93-18.57-302.722-73.872l-1.75 2.27 3.203-.59-3.203.59-1.758 2.27c107.86 55.87 213.309 74.699 306.23 74.699 95.457 0 177.7-19.84 236.09-39.66 58.399-19.82 92.969-39.649 93.11-39.73l1.05-.599.278-1.02c.02-.089 43.48-161.89 53.3-343.5 1.532-28.28 2.31-53.12 2.31-75.089 0-29.75-1.43-54.242-4.388-74.86-4.441-30.91-12.34-53.183-24.062-71.35-5.848-9.071-12.64-17.11-20.379-24.661-7.73-7.55-16.39-14.621-25.988-21.8-14.98-11.212-37.653-25.38-65.25-40.41-41.403-22.54-93.883-46.95-147.953-65.77-27.04-9.41-54.47-17.41-81.137-23.079-26.672-5.66-52.57-8.98-76.563-8.98-2.3 0-4.59.027-6.847.09h-.114c-37.218 2.05-72.199 10.238-104.097 24.27-47.871 21.03-88.813 55.16-120.371 101.16-31.57 46.007-53.801 103.89-64.352 172.597-4.398 28.66-6.25 59.48-6.25 91.102 0 85.36 13.492 176.539 26.973 246.43 13.48 69.878 26.96 118.44 26.969 118.48l.3 1.09 1.14.59 1.759-2.27"
          />
          <path
            fill="#020001"
            d="M3482.05 943.43s-.019-.121-.07-.371c-1.43-7.73-24.68-135.489-24.68-321.7 0-37.379.93-77.109 3.169-118.687 6.883-127.8 16.703-221.3 24.793-282.832 4.047-30.77 7.668-53.54 10.277-68.621 1.3-7.54 2.352-13.16 3.07-16.88.36-1.87.641-3.26.832-4.179.09-.46.168-.808.207-1.039.051-.23.082-.34.082-.34l-5.48-.793c-.02.114-25.57 118.703-39.328 374.48a2213.92 2213.92 0 0 0-3.184 118.891c0 192.54 24.813 322.692 24.82 322.77l5.5-.7h-.007"
          />
          <path
            fill="#020001"
            d="M3487.602 943.86s-.114-.579-.32-1.731c-.204-1.149-.512-2.867-.903-5.129l-2.79.32c.77 4.54 1.22 6.89 1.22 6.899Zm-1.602-9.15c-.34-1.98-.71-4.269-1.129-6.87l-2.8.3c.417 2.598.8 4.9 1.128 6.891Zm-1.488-9.16c-.332-2.109-.692-4.41-1.063-6.87l-2.8.28c.37 2.47.722 4.77 1.062 6.892Zm-1.41-9.16c-.32-2.18-.66-4.468-1.012-6.878l-2.8.27c.35 2.41.69 4.706 1.01 6.89Zm-1.332-9.18c-.32-2.198-.641-4.5-.961-6.882l-2.809.262c.328 2.379.648 4.68.96 6.89Zm-1.282-9.179c-.297-2.222-.61-4.52-.918-6.89l-2.8.25c.308 2.37.609 4.668.921 6.898Zm-1.218-9.18c-.29-2.242-.579-4.542-.872-6.89l-2.808.23c.289 2.36.59 4.66.879 6.899l2.812-.238Zm-1.16-9.19c-.282-2.25-.56-4.552-.84-6.9l-2.81.227c.278 2.352.56 4.653.84 6.903Zm-1.11-9.2c-.27-2.25-.54-4.55-.809-6.89l-2.812.21c.27 2.348.543 4.649.812 6.91Zm-1.07-9.191c-.25-2.258-.508-4.56-.758-6.899l-2.82.2c.257 2.35.52 4.648.77 6.91Zm-1.008-9.2c-.25-2.27-.492-4.57-.742-6.91l-2.809.2c.238 2.34.488 4.64.73 6.91Zm-.98-9.21c-.231-2.27-.462-4.57-.704-6.9l-2.808.18c.23 2.34.468 4.65.699 6.919Zm-.922-9.2c-.23-2.281-.45-4.582-.668-6.91l-2.813.18c.223 2.332.441 4.64.66 6.91Zm-.891-9.21c-.207-2.278-.418-4.579-.629-6.91l-2.82.17c.21 2.33.43 4.63.64 6.911Zm-.84-9.22c-.2-2.27-.398-4.582-.598-6.91l-2.812.16c.191 2.329.39 4.641.601 6.918Zm-.789-9.21c-.2-2.282-.39-4.59-.578-6.91l-2.813.152c.192 2.328.38 4.629.57 6.918Zm-.762-9.22c-.18-2.28-.36-4.59-.539-6.91l-2.82.141c.18 2.328.36 4.64.543 6.918Zm-.718-9.222c-.168-2.277-.34-4.59-.508-6.906l-2.813.129c.16 2.328.332 4.64.512 6.918Zm-.668-9.219c-.16-2.289-.32-4.59-.48-6.918l-2.821.13c.16 2.327.32 4.64.48 6.917Zm-.641-9.218c-.152-2.29-.3-4.602-.45-6.922l-2.82.12c.149 2.321.297 4.63.45 6.923Zm-.59-9.23c-.152-2.29-.293-4.59-.422-6.923l-2.82.114c.133 2.328.27 4.636.422 6.93Zm-.562-9.231c-.13-2.29-.258-4.59-.387-6.918l-2.82.11c.128 2.32.257 4.628.386 6.917Zm-.508-9.22c-.13-2.288-.25-4.6-.371-6.929l-2.82.098c.12 2.332.242 4.633.359 6.93l2.82-.098Zm-.48-9.23c-.122-2.3-.231-4.601-.34-6.921l-2.82.082c.109 2.328.218 4.64.339 6.93Zm-.442-9.23c-.098-2.3-.207-4.602-.309-6.93l-2.82.078c.102 2.332.2 4.641.309 6.93Zm-.399-9.238c-.101-2.293-.19-4.602-.28-6.922l-2.821.07c.09 2.328.18 4.64.281 6.93Zm-.359-9.23c-.09-2.294-.172-4.602-.25-6.923l-2.82.063c.078 2.316.16 4.637.25 6.93Zm-.332-9.231-.21-6.93-2.829.059c.07 2.32.148 4.629.219 6.93Zm-.277-9.242c-.07-2.29-.133-4.598-.192-6.918l-2.82.039c.059 2.332.121 4.64.191 6.941Zm-.25-9.23c-.051-2.298-.114-4.61-.16-6.93l-2.82.042c.046 2.32.097 4.63.16 6.93Zm-.211-9.24c-.04-2.3-.09-4.609-.13-6.929l-2.82.04c.04 2.32.079 4.628.13 6.929Zm-.172-9.23c-.027-2.3-.07-4.609-.098-6.93l-2.82.02c.027 2.32.059 4.64.098 6.942Zm-.129-9.238c-.031-2.3-.05-4.61-.07-6.93l-2.828.02c.027 2.32.046 4.629.078 6.93Zm-.09-9.242c-.02-2.3-.039-4.61-.05-6.93l-2.82.012c.01 2.32.019 4.64.038 6.937Zm-.058-9.238c-.012-2.301-.024-4.602-.024-6.922h-2.816c0 2.32.008 4.633.02 6.93Zm-.024-9.23c0-2.302.012-4.61.012-6.93h-2.82c-.008 2.32-.008 4.628-.008 6.93Zm.024-9.231c.007-2.301.02-4.61.039-6.93l-2.82-.012c-.02 2.32-.032 4.633-.04 6.934Zm.058-9.23c.02-2.302.04-4.61.07-6.93l-2.82-.02c-.031 2.32-.05 4.629-.07 6.93Zm.102-9.231c.02-2.297.058-4.61.09-6.93l-2.82-.027c-.044 2.316-.071 4.629-.102 6.93Zm.129-9.23c.039-2.298.078-4.61.129-6.93l-2.829-.028c-.043 2.309-.082 4.63-.12 6.93Zm.168-9.227c.05-2.301.101-4.614.16-6.934l-2.828-.039-.153 6.93Zm.21-9.23c.06-2.302.122-4.61.192-6.923l-2.832-.058c-.059 2.32-.117 4.629-.18 6.93Zm.25-9.231c.07-2.301.141-4.61.22-6.922l-2.829-.059-.21 6.93Zm.29-9.223c.082-2.297.16-4.61.242-6.93l-2.82-.07c-.083 2.32-.172 4.633-.243 6.934Zm.332-9.226c.078-2.301.168-4.614.27-6.922l-2.821-.078c-.102 2.32-.192 4.628-.27 6.93Zm.359-9.223c.102-2.309.2-4.61.3-6.918l-2.82-.09c-.101 2.309-.199 4.617-.3 6.93Zm.41-9.23c.102-2.297.211-4.61.328-6.919l-2.816-.09c-.121 2.31-.23 4.622-.332 6.919Zm.442-9.22c.117-2.3.238-4.609.359-6.917l-2.82-.102c-.121 2.309-.243 4.621-.36 6.918Zm.476-9.23c.133-2.32.262-4.62.383-6.918l-2.82-.101c-.121 2.289-.25 4.601-.38 6.922Zm.512-9.23c.129-2.32.262-4.617.39-6.918l-2.82-.11c-.129 2.297-.262 4.61-.39 6.93Zm.531-9.23c.129-2.317.258-4.618.399-6.919l-2.82-.11c-.141 2.302-.27 4.599-.4 6.919Zm.54-9.22c.128-2.32.269-4.628.41-6.93l-2.821-.109c-.129 2.301-.27 4.598-.41 6.918Zm.558-9.23c.14-2.32.281-4.629.43-6.918l-2.82-.121c-.15 2.29-.29 4.602-.43 6.922Zm.57-9.23c.152-2.32.3-4.618.45-6.918l-2.817-.121c-.152 2.289-.3 4.601-.453 6.921Zm.602-9.22c.148-2.32.3-4.628.46-6.917l-2.82-.133c-.16 2.29-.312 4.602-.46 6.922Zm.609-9.23c.16-2.32.309-4.629.469-6.918l-2.82-.132c-.16 2.3-.31 4.601-.47 6.921Zm.629-9.218c.16-2.32.32-4.63.492-6.922l-2.82-.14c-.16 2.3-.332 4.6-.492 6.933Zm.652-9.23c.168-2.321.328-4.622.5-6.911l-2.82-.14c-.16 2.288-.332 4.6-.5 6.921Zm.668-9.22c.172-2.32.34-4.632.52-6.921l-2.82-.141c-.169 2.293-.348 4.601-.52 6.922Zm.692-9.222c.18-2.32.347-4.63.53-6.91l-2.82-.149c-.171 2.29-.351 4.602-.53 6.918Zm.71-9.219c.18-2.32.36-4.629.547-6.922l-2.82-.148c-.18 2.289-.367 4.601-.547 6.922Zm.727-9.219c.192-2.32.371-4.62.563-6.91l-2.82-.16c-.18 2.289-.372 4.598-.56 6.918Zm.75-9.222c.192-2.32.383-4.618.582-6.91l-2.82-.16c-.192 2.292-.38 4.59-.578 6.921Zm.774-9.207c.199-2.332.398-4.633.59-6.922l-2.813-.16c-.2 2.289-.399 4.59-.59 6.921Zm.796-9.223c.204-2.32.403-4.617.602-6.91l-2.809-.168c-.203 2.289-.41 4.59-.613 6.918Zm.813-9.207c.21-2.332.418-4.633.629-6.91l-2.82-.184c-.211 2.293-.418 4.594-.622 6.922Zm.84-9.223c.21-2.32.43-4.62.64-6.91l-2.812-.168c-.219 2.277-.43 4.59-.649 6.91Zm.86-9.21c.218-2.317.44-4.618.66-6.91l-2.81-.18c-.222 2.28-.44 4.59-.66 6.91Zm.89-9.208c.219-2.32.449-4.62.68-6.902l-2.82-.188c-.22 2.278-.45 4.579-.68 6.91Zm.91-9.21c.23-2.321.46-4.622.7-6.9l-2.821-.19c-.23 2.28-.461 4.578-.7 6.91Zm.93-9.2c.238-2.332.48-4.633.718-6.902l-2.808-.2c-.242 2.282-.48 4.583-.723 6.903Zm.96-9.21c.25-2.321.5-4.622.739-6.9l-2.809-.202c-.25 2.28-.492 4.582-.742 6.91l2.82.191Zm.989-9.2c.262-2.332.512-4.633.762-6.902l-2.813-.207c-.25 2.277-.508 4.578-.758 6.91Zm1.02-9.2c.261-2.331.519-4.632.78-6.902l-2.812-.21c-.258 2.273-.52 4.57-.777 6.902Zm1.038-9.202c.274-2.329.543-4.618.813-6.887l-2.813-.223c-.27 2.27-.539 4.57-.808 6.903Zm1.082-9.188c.27-2.332.551-4.633.82-6.902l-2.812-.219c-.27 2.262-.547 4.559-.816 6.898Zm1.098-9.191c.293-2.34.57-4.64.852-6.899l-2.809-.23c-.281 2.258-.562 4.558-.851 6.898Zm1.14-9.192c.294-2.34.59-4.636.884-6.886l-2.813-.243c-.289 2.25-.578 4.551-.879 6.891Zm1.173-9.187c.3-2.34.597-4.64.898-6.89l-2.8-.25c-.298 2.26-.598 4.55-.91 6.898Zm1.21-9.18c.31-2.351.618-4.64.93-6.89l-2.812-.262c-.297 2.25-.617 4.55-.93 6.902Zm1.239-9.18c.332-2.351.648-4.652.96-6.882l-2.8-.27c-.32 2.242-.64 4.54-.96 6.89Zm1.289-9.18c.332-2.35.66-4.652.992-6.882l-2.812-.27c-.32 2.23-.649 4.532-.989 6.88Zm1.32-9.171c.352-2.36.692-4.66 1.031-6.88l-2.808-.28c-.332 2.218-.672 4.52-1.024 6.879Zm1.371-9.168c.371-2.371.72-4.66 1.059-6.871l-2.79-.29c-.35 2.2-.71 4.5-1.07 6.88Zm1.43-9.16c.371-2.39.738-4.684 1.102-6.864l-2.801-.308c-.36 2.191-.723 4.48-1.102 6.87Zm1.469-9.153c.402-2.43.793-4.718 1.152-6.859l-2.793-.32c-.367 2.148-.75 4.441-1.156 6.87Zm1.543-9.148c.43-2.492.828-4.77 1.207-6.852l-2.79-.34c-.378 2.09-.78 4.372-1.21 6.872Zm1.617-9.133c.492-2.68.91-4.957 1.281-6.84l-2.8-.36c-.36 1.892-.79 4.18-1.27 6.86Zm1.723-9.117c.296-1.55.527-2.7.687-3.473.16-.77.242-1.136.242-1.136l-2.781-.403s-.328 1.54-.941 4.64l2.793.372M3649.05 946.61s-.01-.122-.05-.36c-1.148-7.422-19.719-130.21-19.719-320.738 0-35.121.63-72.543 2.11-111.961 4.91-130.11 15.71-219.29 25.28-275.91 4.778-28.313 9.25-48.48 12.52-61.563 1.637-6.539 2.97-11.308 3.899-14.43.46-1.558.82-2.707 1.058-3.468.122-.38.211-.66.274-.84.027-.102.058-.16.066-.211l.024-.059-5.352-1.242c-.082.23-33.488 97.07-43.32 357.582a2977.068 2977.068 0 0 0-2.121 112.102c0 196.918 19.812 321.61 19.82 321.68l5.52-.583h-.008"
          />
          <path
            fill="#020001"
            d="M3640.25 946.75s-.102-.578-.27-1.73c-.171-1.149-.421-2.88-.75-5.149l-2.8.27c.64 4.55 1.02 6.898 1.02 6.91Zm-1.34-9.172c-.27-1.988-.582-4.289-.922-6.887l-2.808.25c.34 2.61.648 4.91.93 6.899l2.812-.262Zm-1.219-9.187c-.28-2.121-.57-4.422-.87-6.891l-2.81.23c.298 2.48.59 4.782.868 6.91Zm-1.16-9.192c-.261-2.168-.543-4.469-.82-6.89l-2.813.222c.282 2.418.563 4.719.82 6.899Zm-1.09-9.187c-.25-2.211-.52-4.512-.78-6.903l-2.81.211c.258 2.39.52 4.7.778 6.899Zm-1.043-9.203c-.238-2.23-.488-4.528-.738-6.899l-2.82.192c.262 2.378.512 4.687.75 6.91Zm-.988-9.207c-.23-2.23-.469-4.543-.71-6.903l-2.81.192c.239 2.37.481 4.668.712 6.91Zm-.941-9.204c-.219-2.25-.45-4.546-.68-6.91l-2.809.184c.23 2.36.45 4.668.68 6.918Zm-.899-9.207c-.21-2.261-.43-4.562-.64-6.91l-2.82.168c.218 2.36.43 4.66.652 6.922Zm-.851-9.21c-.207-2.27-.41-4.57-.617-6.922l-2.813.171c.2 2.348.41 4.649.61 6.918Zm-.82-9.22c-.188-2.261-.387-4.57-.579-6.91l-2.82.16c.191 2.34.39 4.65.59 6.91Zm-.778-9.222c-.18-2.27-.371-4.57-.55-6.91l-2.821.152c.18 2.34.371 4.649.559 6.918l2.82-.16Zm-.73-9.21c-.18-2.278-.36-4.579-.532-6.919l-2.82.14c.172 2.34.352 4.65.531 6.919Zm-.711-9.22c-.168-2.28-.328-4.59-.5-6.918l-2.82.13c.171 2.34.34 4.648.5 6.929Zm-.66-9.23c-.16-2.27-.32-4.578-.48-6.91l-2.821.12c.16 2.34.32 4.65.48 6.93Zm-.63-9.219c-.16-2.281-.312-4.59-.46-6.922l-2.82.121c.152 2.332.3 4.641.46 6.93Zm-.6-9.23c-.15-2.282-.29-4.59-.43-6.918l-2.82.117c.14 2.332.28 4.64.429 6.922Zm-.571-9.22c-.13-2.288-.258-4.589-.399-6.92l-2.82.1c.14 2.329.27 4.641.398 6.93l2.832-.11Zm-.528-9.23c-.12-2.289-.25-4.59-.37-6.921l-2.821.101c.121 2.328.25 4.64.371 6.918l2.828-.098Zm-.492-9.23c-.12-2.29-.238-4.59-.347-6.922l-2.832.094c.12 2.328.242 4.637.359 6.93Zm-.469-9.23c-.109-2.29-.218-4.598-.332-6.918l-2.82.078c.113 2.332.223 4.64.332 6.93Zm-.43-9.23c-.1-2.29-.21-4.599-.3-6.93l-2.828.081c.098 2.329.2 4.637.308 6.93Zm-.402-9.231c-.097-2.297-.187-4.598-.277-6.93l-2.82.082c.09 2.32.18 4.629.277 6.918Zm-.367-9.239c-.09-2.289-.172-4.601-.261-6.922l-2.82.063c.081 2.328.171 4.64.26 6.93Zm-.34-9.23c-.082-2.3-.16-4.602-.23-6.93l-2.82.059c.07 2.332.148 4.64.23 6.941Zm-.312-9.238c-.07-2.293-.14-4.602-.207-6.922l-2.82.05c.07 2.329.136 4.641.207 6.93Zm-.27-9.23c-.07-2.302-.129-4.61-.187-6.93l-2.832.046c.07 2.32.129 4.633.191 6.934Zm-.25-9.243c-.058-2.29-.109-4.598-.168-6.918l-2.82.039c.05 2.32.11 4.629.168 6.93Zm-.218-9.23c-.051-2.297-.102-4.61-.141-6.93l-2.82.043c.039 2.316.09 4.629.14 6.93Zm-.18-9.239c-.05-2.3-.09-4.61-.133-6.93l-2.816.032.117 6.93Zm-.16-9.238c-.04-2.3-.07-4.613-.102-6.934l-2.82.032c.031 2.32.062 4.628.101 6.93Zm-.13-9.242c-.03-2.29-.05-4.602-.07-6.918l-2.831.008c.02 2.332.05 4.64.082 6.94Zm-.1-9.23c-.02-2.302-.032-4.61-.051-6.93l-2.82.011c.01 2.32.03 4.63.05 6.93Zm-.06-9.24c-.023-2.3-.03-4.608-.042-6.929l-2.82.008c.011 2.32.023 4.633.03 6.93Zm-.042-9.241c-.008-2.297-.008-4.61-.008-6.918h-2.832c0 2.32.012 4.629.012 6.93Zm-.008-9.23c0-2.298 0-4.61.008-6.93h-2.82c-.008 2.32-.008 4.632-.02 6.93Zm.02-9.227c0-2.301.019-4.614.03-6.934l-2.82-.008c-.02 2.32-.03 4.63-.043 6.93Zm.039-9.23.058-6.93-2.816-.024a4346.06 4346.06 0 0 0-.063 6.942Zm.082-9.231c.02-2.301.046-4.61.078-6.93l-2.82-.02c-.032 2.32-.06 4.63-.079 6.93Zm.109-9.23c.027-2.301.059-4.61.098-6.93l-2.829-.032c-.03 2.32-.07 4.63-.09 6.93Zm.129-9.231c.039-2.309.082-4.61.12-6.93l-2.82-.039c-.038 2.32-.081 4.629-.12 6.938Zm.172-9.23c.039-2.31.09-4.622.136-6.93l-2.828-.04c-.05 2.32-.09 4.63-.14 6.93Zm.187-9.239c.051-2.3.102-4.61.16-6.922l-2.82-.05c-.059 2.32-.11 4.632-.168 6.93Zm.223-9.23c.058-2.301.117-4.61.18-6.922l-2.82-.047a3998.47 3998.47 0 0 0-.18 6.93Zm.25-9.23c.058-2.302.129-4.602.2-6.923l-2.821-.058c-.07 2.32-.14 4.629-.2 6.93Zm.277-9.22c.07-2.312.14-4.613.223-6.93l-2.82-.062c-.082 2.313-.153 4.621-.23 6.93Zm.301-9.23c.078-2.3.172-4.61.25-6.93l-2.82-.07c-.09 2.32-.168 4.629-.25 6.93Zm.34-9.23.27-6.93-2.82-.07a949.32 949.32 0 0 0-.27 6.917Zm.36-9.243c.09-2.316.19-4.629.288-6.918l-2.816-.082a1201.81 1201.81 0 0 0-.293 6.934Zm.39-9.226.3-6.922-2.82-.09c-.101 2.3-.199 4.61-.3 6.93Zm.41-9.23.328-6.923-2.816-.097c-.114 2.297-.223 4.61-.332 6.93Zm.441-9.231c.11-2.32.23-4.63.348-6.922l-2.82-.098c-.117 2.29-.239 4.598-.348 6.93Zm.47-9.23c.12-2.321.237-4.63.37-6.923l-2.832-.109c-.12 2.3-.238 4.61-.36 6.93Zm.487-9.231c.133-2.32.262-4.63.391-6.918l-2.82-.113-.39 6.93Zm.524-9.23c.137-2.32.277-4.63.418-6.919l-2.82-.113c-.141 2.293-.282 4.602-.41 6.922Zm.558-9.22c.141-2.331.282-4.628.43-6.921l-2.82-.117c-.14 2.289-.29 4.597-.43 6.918Zm.579-9.23c.152-2.32.3-4.629.46-6.91l-2.82-.129c-.16 2.29-.308 4.598-.46 6.918Zm.613-9.219c.156-2.32.316-4.632.476-6.921l-2.808-.13c-.168 2.29-.328 4.598-.488 6.919Zm.648-9.222c.16-2.328.328-4.63.5-6.918l-2.82-.14c-.172 2.288-.328 4.6-.5 6.917Zm.668-9.219c.184-2.328.364-4.629.532-6.922l-2.81-.137c-.179 2.278-.358 4.59-.53 6.918Zm.711-9.219c.192-2.32.371-4.633.563-6.91l-2.82-.16c-.18 2.289-.372 4.598-.551 6.918l2.82.152Zm.75-9.222c.192-2.32.39-4.618.582-6.91l-2.82-.16c-.191 2.292-.383 4.59-.582 6.921Zm.781-9.207c.2-2.32.399-4.633.61-6.91l-2.82-.172c-.2 2.289-.41 4.59-.61 6.921Zm.82-9.211c.212-2.332.419-4.63.63-6.91l-2.809-.18c-.223 2.289-.43 4.59-.64 6.918Zm.848-9.211c.223-2.328.442-4.63.672-6.91l-2.82-.18c-.219 2.281-.441 4.582-.66 6.91Zm.891-9.211c.23-2.32.461-4.617.7-6.899l-2.817-.199c-.23 2.29-.461 4.59-.692 6.91Zm.941-9.2c.239-2.328.48-4.628.72-6.898l-2.81-.21c-.242 2.28-.492 4.577-.73 6.91l2.809.199Zm.97-9.199c.25-2.332.5-4.629.76-6.898l-2.812-.211c-.257 2.27-.507 4.57-.757 6.898Zm1.019-9.199c.261-2.332.531-4.633.793-6.902l-2.813-.219c-.27 2.281-.527 4.578-.789 6.91Zm1.062-9.191c.278-2.328.547-4.63.828-6.899l-2.808-.23c-.281 2.27-.551 4.57-.832 6.898Zm1.11-9.192c.289-2.328.578-4.629.859-6.886l-2.8-.243c-.29 2.262-.579 4.563-.872 6.891Zm1.16-9.187c.3-2.332.597-4.621.898-6.89l-2.8-.25c-.31 2.269-.61 4.57-.91 6.898Zm1.21-9.18c.31-2.332.63-4.621.938-6.883l-2.8-.258c-.32 2.258-.63 4.551-.95 6.891Zm1.259-9.18c.332-2.332.66-4.62.992-6.87l-2.801-.282c-.332 2.262-.66 4.563-.992 6.89Zm1.32-9.171c.351-2.329.691-4.622 1.031-6.872l-2.8-.277c-.34 2.25-.68 4.54-1.032 6.879Zm1.39-9.16c.348-2.329.711-4.622 1.07-6.872l-2.8-.297c-.36 2.25-.719 4.54-1.078 6.88Zm1.442-9.15c.379-2.339.75-4.632 1.129-6.87l-2.801-.309c-.371 2.239-.75 4.528-1.129 6.867Zm1.508-9.151c.398-2.34.789-4.63 1.18-6.86l-2.79-.328c-.39 2.238-.789 4.527-1.191 6.867Zm1.59-9.137c.41-2.352.832-4.633 1.242-6.852l-2.801-.34c-.41 2.22-.82 4.508-1.242 6.86Zm1.66-9.133c.441-2.348.87-4.629 1.3-6.84l-2.78-.36c-.438 2.212-.872 4.49-1.31 6.852Zm1.75-9.117c.468-2.363.922-4.633 1.37-6.832l-2.78-.38c-.45 2.2-.91 4.481-1.38 6.849Zm1.84-9.102c.5-2.379.98-4.648 1.46-6.808l-2.78-.41c-.481 2.168-.962 4.449-1.462 6.828Zm1.96-9.09a655.6 655.6 0 0 1 1.54-6.8l-2.77-.43c-.5 2.14-1.02 4.422-1.55 6.82Zm2.07-9.058a561.37 561.37 0 0 1 1.65-6.781l-2.759-.461a392.643 392.643 0 0 0-1.66 6.8Zm2.22-9.043c.66-2.55 1.261-4.8 1.789-6.75l-2.75-.5a418.47 418.47 0 0 0-1.797 6.781Zm2.421-8.988c.938-3.34 1.63-5.54 2-6.692l-2.73-.59c-.383 1.172-1.07 3.403-2.02 6.762l2.75.52M3259.82 877.012c.02.02 2.29 1.59 6.73 4.289l1.669-1.84a205.274 205.274 0 0 1-4.938-3.102c-.562-.359-.972-.64-1.242-.82-.14-.098-.238-.168-.309-.21l-.09-.067Zm9.008 5.66a314.71 314.71 0 0 0 6.91 3.976l1.59-1.886a308.28 308.28 0 0 1-6.86-3.953Zm9.25 5.277c2.16 1.192 4.524 2.461 7.063 3.79l1.507-1.938c-2.52-1.32-4.859-2.57-7.007-3.762Zm9.442 5.02c2.261 1.16 4.66 2.37 7.19 3.62l1.45-1.968a573.277 573.277 0 0 1-7.148-3.59Zm9.609 4.793a407.975 407.975 0 0 0 7.3 3.457l1.38-1.989a500.203 500.203 0 0 1-7.25-3.44Zm9.762 4.59a525.7 525.7 0 0 0 7.398 3.308l1.32-2.02c-2.539-1.109-4.988-2.21-7.359-3.288Zm9.879 4.386c2.43 1.051 4.93 2.102 7.5 3.16l1.261-2.039a593.996 593.996 0 0 1-7.453-3.148Zm10.011 4.192a451.945 451.945 0 0 0 7.59 3.03l1.2-2.07a572.234 572.234 0 0 1-7.54-3.011Zm10.13 4.011c2.487.957 5.05 1.918 7.66 2.88l1.148-2.09c-2.598-.95-5.14-1.91-7.617-2.86Zm10.218 3.82c2.531.919 5.11 1.84 7.742 2.75l1.09-2.113c-2.61-.91-5.18-1.82-7.691-2.726Zm10.332 3.637c2.55.872 5.148 1.75 7.8 2.614l1.04-2.133a564.21 564.21 0 0 1-7.762-2.59Zm10.418 3.461c2.582.832 5.2 1.653 7.871 2.47l.98-2.138c-2.652-.82-5.261-1.64-7.832-2.472Zm10.5 3.282c2.601.78 5.25 1.558 7.93 2.34l.93-2.172c-2.669-.77-5.298-1.54-7.887-2.32Zm10.582 3.09c2.629.75 5.289 1.48 7.988 2.21l.88-2.18a632.6 632.6 0 0 1-7.95-2.19Zm10.66 2.93c2.64.698 5.32 1.39 8.04 2.07l.82-2.192c-2.7-.68-5.372-1.367-8-2.07Zm10.73 2.737c2.66.66 5.348 1.301 8.079 1.942l.77-2.211c-2.712-.629-5.391-1.27-8.04-1.93Zm10.79 2.57c2.68.61 5.39 1.212 8.129 1.802l.718-2.211c-2.726-.59-5.43-1.188-8.097-1.797Zm10.847 2.391c2.703.57 5.422 1.121 8.172 1.672l.668-2.23c-2.75-.54-5.457-1.102-8.137-1.672Zm10.91 2.211c2.711.532 5.442 1.04 8.211 1.551l.61-2.242c-2.75-.5-5.48-1.02-8.18-1.54Zm10.954 2.04c2.726.48 5.476.949 8.25 1.41l.558-2.239c-2.77-.46-5.5-.93-8.21-1.41Zm11.007 1.859c2.73.441 5.493.87 8.282 1.293l.5-2.262c-2.77-.41-5.52-.84-8.243-1.281Zm11.04 1.691c2.75.399 5.523.79 8.312 1.16l.45-2.261c-2.782-.38-5.54-.758-8.27-1.149Zm11.081 1.52c2.758.36 5.532.699 8.34 1.03l.39-2.269c-2.788-.332-5.55-.671-8.288-1.02Zm11.122 1.351c2.757.309 5.539.61 8.347.89l.352-2.273c-2.801-.289-5.57-.578-8.32-.886Zm11.136 1.168c2.774.27 5.563.531 8.371.77l.301-2.278c-2.8-.242-5.582-.5-8.34-.77Zm11.172 1.012c2.77.219 5.57.437 8.39.64l.24-2.292c-2.81-.2-5.59-.41-8.349-.637Zm11.192.828c2.777.18 5.578.36 8.398.52l.191-2.29a692.68 692.68 0 0 1-8.37-.519Zm11.199.672c2.789.14 5.59.27 8.41.39l.14-2.292c-2.812-.118-5.601-.25-8.37-.387Zm11.219.5c2.789.098 5.59.187 8.421.258l.09-2.29c-2.82-.07-5.61-.16-8.383-.269Zm11.23.328c2.809.063 5.621.11 8.422.133l.027-2.293c-2.777-.027-5.57-.07-8.379-.129Zm11.23.152a735.659 735.659 0 0 0 8.43-.012l-.031-2.288c-1.68.007-3.367.02-5.07.02-1.098 0-2.2 0-3.309-.013Zm11.239-.043c2.82-.027 5.633-.078 8.43-.148l-.09-2.29c-2.778.071-5.57.118-8.38.15Zm11.242-.226c2.82-.082 5.617-.184 8.418-.293l-.14-2.29c-2.778.11-5.579.212-8.38.29Zm11.219-.41c2.82-.133 5.62-.282 8.422-.442l-.204-2.289c-2.777.16-5.57.309-8.367.438Zm11.218-.614a721.2 721.2 0 0 0 8.403-.578l-.262-2.28c-2.77.21-5.559.401-8.348.57Zm11.192-.789c2.808-.218 5.61-.46 8.39-.71l-.308-2.278c-2.774.25-5.55.488-8.344.707Zm11.18-.968c2.8-.27 5.59-.551 8.37-.852l-.37-2.27c-2.758.29-5.532.57-8.32.84Zm11.152-1.16a502.47 502.47 0 0 0 8.34-.981l-.422-2.262c-2.75.34-5.52.66-8.3.973Zm11.117-1.32c2.79-.36 5.563-.731 8.32-1.122l-.468-2.258c-2.75.39-5.512.758-8.282 1.11Zm11.09-1.513c2.781-.398 5.543-.808 8.293-1.238l-.531-2.25c-2.73.418-5.48.84-8.25 1.23Zm11.05-1.668c2.77-.449 5.52-.902 8.262-1.37l-.582-2.239c-2.718.457-5.46.918-8.218 1.36Zm11-1.851c2.77-.48 5.512-.98 8.231-1.488l-.62-2.23c-2.712.5-5.438 1-8.188 1.48l.59 2.238Zm10.97-2.008c2.75-.52 5.492-1.062 8.19-1.61l-.667-2.23c-2.703.547-5.422 1.09-8.16 1.61Zm10.921-2.172c2.739-.57 5.461-1.14 8.16-1.738l-.73-2.211c-2.68.59-5.39 1.16-8.121 1.73Zm10.871-2.328c2.73-.61 5.438-1.23 8.118-1.86l-.77-2.202a655.875 655.875 0 0 1-8.09 1.84Zm10.82-2.5c2.708-.64 5.41-1.3 8.067-1.96l-.816-2.2a695.33 695.33 0 0 1-8.043 1.96Zm10.759-2.64c2.699-.692 5.378-1.38 8.03-2.09l-.859-2.18c-2.64.7-5.312 1.398-8 2.078Zm10.699-2.801c2.691-.73 5.36-1.461 7.992-2.2l-.91-2.171a595.745 595.745 0 0 1-7.961 2.191Zm10.64-2.95c2.68-.77 5.332-1.539 7.95-2.308l-.957-2.16c-2.602.77-5.243 1.539-7.91 2.297Zm10.582-3.101c2.668-.8 5.297-1.61 7.899-2.418l-1-2.14c-2.59.8-5.211 1.609-7.86 2.41Zm10.52-3.25c2.648-.84 5.27-1.68 7.84-2.52l-1.04-2.129c-2.57.84-5.171 1.68-7.812 2.52Zm10.45-3.39c2.628-.868 5.23-1.75 7.78-2.63l-1.082-2.109c-2.55.871-5.129 1.75-7.757 2.621l1.058 2.129Zm10.37-3.528c2.63-.91 5.207-1.832 7.739-2.742l-1.13-2.098c-2.53.91-5.09 1.82-7.71 2.73Zm10.297-3.672c2.621-.95 5.184-1.91 7.684-2.848l-1.172-2.082c-2.5.942-5.05 1.88-7.649 2.832Zm10.23-3.82c2.602-.989 5.141-1.969 7.622-2.95l-1.22-2.07c-2.46.98-4.991 1.961-7.581 2.942Zm10.153-3.95c2.59-1.03 5.11-2.058 7.559-3.058l-1.258-2.05c-2.442 1-4.953 2.019-7.532 3.05Zm10.059-4.097c2.59-1.07 5.082-2.133 7.5-3.172l-1.31-2.031a542.468 542.468 0 0 1-7.46 3.16Zm9.98-4.242a838.498 838.498 0 0 0 7.43-3.27l-1.352-2.02a770.33 770.33 0 0 1-7.387 3.27Zm9.89-4.38c2.59-1.179 5.04-2.312 7.348-3.39l-1.386-1.988c-2.301 1.078-4.743 2.2-7.32 3.367Zm9.79-4.538a561.331 561.331 0 0 0 7.28-3.5l-1.44-1.973a665.792 665.792 0 0 1-7.239 3.492Zm9.691-4.692c2.79-1.379 5.188-2.601 7.188-3.62l-1.48-1.938a577.311 577.311 0 0 1-7.157 3.597Zm9.578-4.851c1.301-.668 2.352-1.207 3.13-1.61.39-.199.71-.359.952-.488.25-.11.43-.2.48-.223l-1.25-2.046a7.465 7.465 0 0 0-.671.308c-.809.399-2.18 1.11-4.14 2.121l1.5 1.938"
          />
        </svg>
      </div>

      <div style={{ position: 'absolute', top: 0, left: 65, right: 0, bottom: 30 }} className={`z-20 flex items-center justify-center
        ${canvast === 'front' ? 'top-0 left-[65px] right-0 bottom-[30px]' : 'top-[60px] left-0 right-[6px] bottom-0'}`}>
        <div className={`${canvast === 'back' ? 'hidden' : 'block'}`}>
          <CanvasComponent canvasType='front' height='50' width='70' />
        </div>
      
        <div className={`${canvast === 'front' ? 'hidden' : 'block'}`}>
          <CanvasComponent canvasType='back' height='175' width='120' />
        </div>
      </div>

    </div>
  )
}

export default HoodieSvg