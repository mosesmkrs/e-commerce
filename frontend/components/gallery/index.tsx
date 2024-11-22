"use client"

import { TabGroup, TabList, TabPanel, TabPanels,  } from "@headlessui/react"
import Image from "next/image"
import { Image as ImageType } from "@/types"
import GalleryTab from "./gallery-tab"

interface GalleryProps {
    images: ImageType[]
}
const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-4xl">
            <TabList className="grid grid-cols-4 gap-6">
                {images.map((image) => (
                    <GalleryTab key={image.id} image={image} />
                ))}
            </TabList>
        </div>
        <TabPanels className="aspect-square relative w-full overflow-hidden sm:rounded-xl">
            {images.map((image) => (
                <TabPanel key={image.id}>
                    <Image 
                    fill 
                    className=" object-cover rounded-md object-center" 
                    src={image.url} alt="" 
                    />
                </TabPanel>
            ))}
        </TabPanels>
    </TabGroup>
  )
}

export default Gallery
