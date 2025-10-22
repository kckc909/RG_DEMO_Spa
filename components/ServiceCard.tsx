
import React from 'react';
import type { Service } from '../types';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.name} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{service.name}</h3>
        <p className="text-text-secondary text-sm mb-4">{service.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-primary">${service.price}</span>
          <span className="text-sm text-gray-500">{service.duration} min</span>
        </div>
        <Link 
            to="/booking"
            state={{ serviceId: service.id }}
            className="w-full block text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
