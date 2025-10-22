
import React from 'react';
import { MOCK_LOYALTY } from '../../constants';

const LoyaltyPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-text-primary mb-6">Loyalty & Rewards</h1>
      
      <div className="bg-primary text-white p-6 rounded-lg mb-8 text-center">
        <p className="text-lg">Your Loyalty Tier</p>
        <h2 className="text-4xl font-bold">{MOCK_LOYALTY.tier}</h2>
        <p className="mt-2 text-xl">{MOCK_LOYALTY.points.toLocaleString()} Points</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-text-primary mb-4">Your Available Rewards</h3>
        <div className="space-y-4">
          {MOCK_LOYALTY.rewards.map(reward => (
            <div key={reward.id} className="border p-4 rounded-lg bg-green-50">
              <h4 className="font-bold text-primary">{reward.title}</h4>
              <p className="text-sm text-text-secondary">{reward.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyPage;
