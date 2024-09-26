import { Billboard as BillboardType } from "@/types";
import React from "react";

interface BillboardProps{
    data: BillboardType
}

export const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return(
        <div className="p-4 sm:p-3  rounded-xl overflow-hidden md:mx-14" >
            <div className="rounded-xl relative  aspect-[4:1] overflow-hidden bg-cover bg-center bg-[#f4dcff]"
            style={{backgroundImage: `url(${data.imageUrl})`}}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-2xl sm:text-4xl  py-8 sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}