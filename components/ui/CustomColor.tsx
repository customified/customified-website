import { useProductStore } from '@/hooks/useProductStore';
import { useSvgStore } from '@/hooks/useSvgStore';
import { usePriceUpdater } from '@/hooks/usePriceUpdater';
import { Customization, DeliveryCost } from '@/types';
import React, { useEffect } from 'react';

interface ColorProps {
    data: Customization;
    items: Customization[];
    deliveryCosts: DeliveryCost
}

const CustomColor: React.FC<ColorProps> = ({ data, items, deliveryCosts }) => {
    const { setSelectedImage, setColor } = useSvgStore();
    const { quantities, setQuantities, setQuantity, productSize, quantity, upgrades, isUpgrade } = useProductStore();
    const { updatePrice } = usePriceUpdater(items, deliveryCosts);
    
    useEffect(() => {
        updatePrice();
    }, [quantities, upgrades, isUpgrade, productSize]);

    const increment = (colorId: string) => {
        setSelectedImage(true)
        const newQuantities = {
            ...quantities,
            [colorId]: (quantities[colorId] || 0) + 1,
        };
        setQuantities(newQuantities);
        updateTotalQuantity(newQuantities);
    };

    const decrement = (colorId: string) => {
        setSelectedImage(true)
        const newQuantities = {
            ...quantities,
            [colorId]: (quantities[colorId] || 0) > 0 ? (quantities[colorId] || 0) - 1 : 0,
        };
        setQuantities(newQuantities);
        updateTotalQuantity(newQuantities);
    };

    const handleChange = (colorId: string, value: string, newValue: number) => {
        setSelectedImage(true);
        setColor(value);
        const newQuantities = {
            ...quantities,
            [colorId]: isNaN(newValue) ? 0 : newValue,
        };
        setQuantities(newQuantities);
        updateTotalQuantity(newQuantities);
    };

    const updateTotalQuantity = (newQuantities: { [key: string]: number }) => {
        const total = Object.values(newQuantities).reduce((sum, qty) => sum + qty, 0);
        setQuantity(total);
    };

    return (
        <div className="grid md:grid-cols-4 grid-cols-3 2xl:gap-3 md:gap-6 gap-3 md:mb-3 2xl:mb-0 w-full justify-start py-5 cursor-pointer">
            {data.options?.map(color => (
                <div key={color.id} className="flex flex-col justify-center items-center border-2 rounded-lg p-3 gap-4">
                    <div className="flex flex-col justify-center items-center md:gap-5 gap-3">
                        <p className="font-semibold text-center 2xl:text-base md:text-sm text-xs uppercase">{color.name}</p>
                        <input
                            type="radio"
                            name="color"
                            onClick={() => {
                                setSelectedImage(true);
                                setColor(color.value);
                            }}
                            className="md:h-10 md:w-10 h-8 w-8 appearance-none rounded-full border border-gray-300 cursor-pointer"
                            style={{ backgroundColor: color.value }}
                        />
                    </div>

                    <div className="py-1 px-1 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700" data-hs-input-number="">
                        <div className="flex items-center gap-x-1.5">
                            <button
                                type="button"
                                className="md:size-6 size-5 inline-flex justify-center items-center gap-x-2 md:text-sm text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                onClick={(e) => decrement(color.name)}
                            >
                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                </svg>
                            </button>

                            <input
                                className="p-0 md:w-14 w-8 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white md:text-sm text-xs"
                                type="text"
                                placeholder="Quantity"
                                value={quantities[color.name] || 0}
                                onChange={e => handleChange(color.name, color.value, parseInt(e.target.value, 10))}
                            />

                            <button
                                type="button"
                                className="md:size-6 size-5 inline-flex justify-center items-center gap-x-2 md:text-sm text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                onClick={() => increment(color.name)}
                            >
                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomColor;
