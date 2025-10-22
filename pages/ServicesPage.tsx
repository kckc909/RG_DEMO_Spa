
import React, { useState } from 'react';
import { MOCK_SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(MOCK_SERVICES.map(s => s.category)))];

  const filteredServices = filter === 'All' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(service => service.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-text-primary mb-4">Our Services</h1>
      <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
        Indulge in our wide range of treatments designed to relax your body, calm your mind, and soothe your soul.
      </p>

      {/* Category Filters */}
      <div className="flex justify-center space-x-2 md:space-x-4 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
              filter === category
                ? 'bg-primary text-white'
                : 'bg-white text-text-primary hover:bg-green-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
