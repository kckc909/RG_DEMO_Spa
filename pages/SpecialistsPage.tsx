
import React from 'react';
import { MOCK_SPECIALISTS } from '../constants';
import SpecialistCard from '../components/SpecialistCard';

const SpecialistsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-text-primary mb-4">Meet Our Experts</h1>
      <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
        Our team of certified and experienced professionals is dedicated to providing you with the highest quality of care and personalized service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MOCK_SPECIALISTS.map(specialist => (
          <SpecialistCard key={specialist.id} specialist={specialist} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsPage;
