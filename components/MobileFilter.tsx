"use client"


import { useState } from "react"
import { Button } from "./ui/shadcn/Button"
import { Plus, X } from "lucide-react"
import { Dialog, DialogPanel } from "@headlessui/react"
import IconButton from "./ui/shadcn/IconButton"

interface MobileFilterProps {
    colors: {
        id: string;
        name: string;
        value: string;
    }
}

const MobileFilters: React.FC<MobileFilterProps> = ({
    colors
}) => {

    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
            <Button
                onClick={onOpen}
                className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose} >

                {/* bg */}
                <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                {/* dialog posi */}
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* close btn */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>

                        <div className="p-4">

                           
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters