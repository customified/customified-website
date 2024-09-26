import { useSvgStore } from "@/hooks/useSvgStore"
import { cn } from "@/lib/utils"
import { Image as ImageType } from "@/types"
import { Tab } from "@headlessui/react"
import Image from "next/image"



interface GalleryTabProps{
  image: string
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {

  const { selectedImage, setSelectedImage } = useSvgStore();

  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
    >
      {({ selected })=>(
        <div onClick={() => {
          if (selectedImage) {
            setSelectedImage(false);
          }
        }}>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md border-2">
            <Image
            fill
            src={image}
            alt="image"
            className="object-cover object-center"
            />
          </span>
          <span className={cn(
            "absolute inset-0 rounded-md ring-2 ring-offset-2",
            selected? "ring-black" : "ring-transparent"
          )}/>
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab