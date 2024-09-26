// Summary.tsx

import { usePriceStore } from '@/hooks/usePriceStore';
import { useProductStore } from '@/hooks/useProductStore';
import React, { useEffect } from 'react';

const InfoSummary: React.FC = () => {
    const { quantity } = useProductStore();
    const { unitCost, setTotalCost, deliveryCostPerUnit, setTotalDeliveryCost, setTotalCostWithoutDelivery } = usePriceStore();

    const parsedUnitCost = typeof unitCost === 'string' ? parseFloat(unitCost) : unitCost;
    const parsedDeliveryCostPerUnit = typeof deliveryCostPerUnit === 'string' ? parseFloat(deliveryCostPerUnit) : deliveryCostPerUnit;
    const calculatedTotalCostWithoutDelivery = parsedUnitCost * quantity;
    const calculatedTotalDeliveryCost = parsedDeliveryCostPerUnit * quantity;
    const calculatedTotalCost = calculatedTotalCostWithoutDelivery + calculatedTotalDeliveryCost;

    useEffect(() => {
        setTotalCostWithoutDelivery(calculatedTotalCostWithoutDelivery);
        setTotalDeliveryCost(calculatedTotalDeliveryCost);
        setTotalCost(calculatedTotalCost);
    }, [parsedUnitCost, quantity, parsedDeliveryCostPerUnit, setTotalCostWithoutDelivery, setTotalDeliveryCost, setTotalCost]);

    return (
        <div className="summary font-medium md:text-base text-sm">

            <div className='flex gap-2'>
                <h3>Unit Cost:</h3>
                <p>${parsedUnitCost.toFixed(2)}</p>
            </div>

            <div className='flex gap-2'>
                <h3>Unit Delivery Cost:</h3>
                <p>${parsedDeliveryCostPerUnit.toFixed(2)}</p>
            </div>


            <div className='flex gap-2'>
                <h3>Total Cost:</h3>
                <p>${calculatedTotalCost.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default InfoSummary;
