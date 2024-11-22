"use client"

import Button from "@/components/ui/button"
import { Color, Size } from "@/types"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import Filter from "./filter"
import IconButton from "@/components/ui/icon-button"

interface MobileFiltersProps {
    sizes: Size[],
    colors: Color[]
}
const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors 
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)
    return (
        <>
        <Button 
        className="flex items-center gap-x-2 lg:hidden" 
        onClick={onOpen}
        >
            Filters
            <Plus size={20} />
        </Button>

        <Dialog
        open={isOpen}
        onClose={onClose}
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <div className="fixed inset-0 z-40 flex">
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    <div className="flex items-center justify-end px-4">
                        <IconButton 
                        onClick={onClose}
                        icon={<X size={15} />}
                        />
                    </div>
                    <div className="p-4">
                        <Filter 
                        data={sizes}
                        name="Sizes"
                        valueKey="sizeId"
                        />
                        <Filter 
                        data={colors}
                        name="Colors"
                        valueKey="colorId"
                        />            
                    </div>
                </DialogPanel> 
            </div>
        </Dialog>
        </>
    )
}

export default MobileFilters