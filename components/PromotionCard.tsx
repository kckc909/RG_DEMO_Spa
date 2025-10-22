
import React from 'react';
import type { Promotion } from '../types';

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={promotion.imageUrl} alt={promotion.title} />
        <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-3 py-1 m-2 rounded-md">
          {promotion.discount}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{promotion.title}</h3>
        <p className="text-text-secondary text-sm mb-4">{promotion.description}</p>
        <div className="flex items-center justify-between text-sm">
            <div className="font-mono bg-gray-200 text-text-primary px-2 py-1 rounded">
                Code: <span className="font-bold">{promotion.code}</span>
            </div>
            <span className="text-gray-500">
                Expires: {new Date(promotion.expiryDate).toLocaleDateString()}
            </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
