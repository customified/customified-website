import { useProductStore } from "@/hooks/useProductStore";
import { useSvgStore } from "@/hooks/useSvgStore";
import { Upgrade } from "@/types";
import React from "react";
import Image from "next/image";

interface UpgradesProps {
    upgrades: Upgrade[];
}

const Upgrades: React.FC<UpgradesProps> = ({ upgrades }) => {
    const { setSelectedImage, setInsideColor, insideColor } = useSvgStore();
    const { isUpgrade, setIsUpgrade, setUpgrade, removeUpgrade } = useProductStore();

    const handleUpgradeChange = (upgrade: Upgrade) => {
        if (upgrade.name === 'Both-side Print') {
            setSelectedImage(true);
            setInsideColor(!insideColor);
        }
        setIsUpgrade(upgrade._id, !isUpgrade[upgrade._id]);
        const toggleValue = !isUpgrade[upgrade._id];

        if (toggleValue) {
            setUpgrade(upgrade._id, upgrade);
        } else {
            removeUpgrade(upgrade._id);
        }
        
    };

    return (
        <div className="w-full h-full">
            <div className="items-center justify-between py-10 w-full grid md:grid-cols-4 grid-cols-2 gap-4 px-2 h-full">
                {upgrades.map(upgrade => (
                    <label
                        key={upgrade._id}
                        className="relative cursor-pointer h-full ">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={() => handleUpgradeChange(upgrade)}
                        />
                        <div className="border-2 peer-checked:border-slate-800 peer-checked:bg-slate-200 transition-colors duration-200 rounded-lg py-5 px-2 z-10 w-full h-full flex flex-col justify-between gap-2">
                            <div className="w-full h-20 md:h-28 flex justify-center items-center">
                                <Image 
                                width={120}
                                height={110}
                                alt="upgrade image"
                                loading="lazy"
                                src={upgrade.mediaUrl} className="w-full h-full object-contain object-center rounded-lg" />
                            </div>
                            <hr />
                            <p className="text-center text-slate-900 font-medium 2xl:text-base md:text-sm text-xs">{upgrade.name}</p>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Upgrades;
