
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

import { Image as ImageType } from "@/types"

interface GalleryTabProps {
    image: ImageType
}
const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({ selected }) => (
          <div
            className={cn(
              "absolute inset-0 rounded-md border-2",
              selected
                ? "border-black"
                : "border-transparent opacity-0 hover:opacity-100"
            )}
          >
            <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image  
            fill    
            src={image.url}
            alt=""
            className="object-cover object-center"
            />
            </span>
            <span className={cn(
                "absolute inset-0 rounded-md ring-2 ring-offset-2",
                selected ? "ring-black" : "ring-transparent"
            )}/>
          </div>
        )}
    </Tab>
  )
}

export default GalleryTab
