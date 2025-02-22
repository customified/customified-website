

import { useProductStore } from '@/hooks/useProductStore';
import { usePriceStore } from '@/hooks/usePriceStore';
import { DeliveryCost, Customization } from '@/types';

export const usePriceUpdater = (items: Customization[], deliveryCosts: DeliveryCost) => {
  const { quantities, productSize, upgrades, isUpgrade ,quantity} = useProductStore();
  const { setUnitCost, setDeliveryCostPerUnit ,setTotalDeliveryCost, setBasePriceForDatePicker} = usePriceStore();

  const updatePrice = () => {
    const totalQuantity = quantity

    // Calculating the base unit cost
    let baseUnitCost = 0;
    items
      .filter(option => option.type === 'Size')
      .forEach(option => {
        option.options
          ?.filter(size => size.name === productSize)
          .forEach(size => {
            size.prices
              ?.filter(price => {
                const maxQuantity = price.max === 'infinity' ? Infinity : parseInt(price.max, 10);
                const minQuantity = parseInt(price.min, 10);
                return totalQuantity >= minQuantity && totalQuantity <= maxQuantity;
              })
              .forEach(price => {
                baseUnitCost = parseFloat(price.price); 
              });
          });
      });

    // Calculate upgrade cost
    let upgradeCost = 0;
    Object.values(upgrades).forEach(upgrade => {
      if (isUpgrade[upgrade._id]) {
        upgrade.priceTiers
          ?.filter(priceTier => {
            const maxQuantity = priceTier.max === 'infinity' ? Infinity : parseInt(priceTier.max, 10);
            const minQuantity = parseInt(priceTier.min, 10);
            return totalQuantity >= minQuantity && totalQuantity <= maxQuantity;
          })
          .forEach(priceTier => {
            upgradeCost += parseFloat(priceTier.price); 
          });
      }
    });

    // Calculate delivery cost per unit
    let deliveryCostPerUnit = 0;
    deliveryCosts.priceTiers
      .filter(cost => {
        const maxQuantity = cost.max === 'infinity' ? Infinity : parseInt(cost.max, 10);
        const minQuantity = parseInt(cost.min, 10);
        return totalQuantity >= minQuantity && totalQuantity <= maxQuantity;
      })
      .forEach(cost => {
        deliveryCostPerUnit = parseFloat(cost.price); 
      });

    // Set total unit cost
    setUnitCost(baseUnitCost + upgradeCost);
    setBasePriceForDatePicker(deliveryCostPerUnit);
  };

  return { updatePrice };
};


