
import React from 'react';
import { MOCK_PROMOTIONS } from '../constants';
import PromotionCard from '../components/PromotionCard';

const PromotionsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-text-primary mb-4">Special Offers & Vouchers</h1>
      <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
        Take advantage of our special promotions to enhance your spa experience. The perfect treat for yourself or a loved one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROMOTIONS.map(promo => (
          <PromotionCard key={promo.id} promotion={promo} />
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
