"use client"


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/shadcn/tooltip"
import React, { ReactElement, useEffect, useState } from "react"

interface props {
    children: ReactElement
    label: string
}
export const ToolTipProvider: React.FC<props> = ({ children, label }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    })

    if (!isMounted) {
        return null
    }

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>{children}</TooltipTrigger>
                    <TooltipContent>
                        <p>{label}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}