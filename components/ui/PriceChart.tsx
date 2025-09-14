"use client";

import React, { useState } from 'react';
import { Product, Customization, CustomizationType } from '@/types';

interface PriceChartProps {
  product: Product;
}

const PriceChart: React.FC<PriceChartProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get size customizations to extract pricing tiers
  const sizeCustomization = product.customizations.find(
    (customization) => customization.type === CustomizationType.Size
  );

  if (!sizeCustomization || !sizeCustomization.options) {
    return null;
  }

  const maxPricesLength = Math.max(
    ...sizeCustomization.options.map(option => option.prices ? option.prices.length : 0)
  );

  // Show only first option when collapsed, all options when expanded
  const displayOptions = isExpanded 
    ? sizeCustomization.options 
    : sizeCustomization.options.slice(0, 1);

  const hasMoreOptions = sizeCustomization.options.length > 1;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-blue-900">
          Price Chart
        </h3>
        {hasMoreOptions && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
          >
            {isExpanded ? 'Show Less' : `Show All (${sizeCustomization.options.length})`}
          </button>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {displayOptions.map((option, optionIndex) => (
            <div key={`option-${optionIndex}`} className="mb-2 last:mb-0">
              <div className="grid border border-gray-300 rounded-lg" style={{ gridTemplateColumns: `120px repeat(${maxPricesLength}, 1fr)` }}>
                {/* Size Name - Merged Cell */}
                <div className="col-span-1 row-span-2 px-2 py-4 text-center text-sm font-medium text-blue-900 bg-blue-100 border-r border-gray-300 flex items-center justify-center">
                  {option.name}
                </div>
                
                {/* Quantities Row */}
                {(() => {
                  const prices = option.prices || [];
                  const filledPrices = [
                    ...prices,
                    ...Array(maxPricesLength - prices.length).fill(null)
                  ];
                  return filledPrices.map((tier: any, qtyIndex: number) => (
                    <div
                      key={`qty-${optionIndex}-${qtyIndex}`}
                      className="px-2 py-2 text-center text-sm font-medium text-blue-900 bg-white border-r border-gray-300 last:border-r-0"
                    >
                      {tier
                        ? (tier.max !== undefined
                            ? (tier.max === 'infinity' ? '∞' : tier.max)
                            : '-')
                        : '-'}
                    </div>
                  ));
                })()}

                {(() => {
                  const prices = option.prices || [];
                  const filledPrices = [
                    ...prices,
                    ...Array(maxPricesLength - prices.length).fill(null)
                  ];
                  return filledPrices.map((tier: any, qtyIndex: number) => (
                    <div
                      key={`price-${optionIndex}-${qtyIndex}`}
                      className="px-2 py-2 text-center text-sm font-medium text-blue-900 bg-white border-r border-gray-300 last:border-r-0"
                    >
                      {tier
                        ? (tier.price !== undefined
                            ? (tier.price === 'infinity' ? '∞' : `$${tier.price}`)
                            : '-')
                        : '-'}
                    </div>
                  ));
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
