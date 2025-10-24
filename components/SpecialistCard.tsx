
import React from 'react';
import type { Specialist } from '../types';
import { Link } from 'react-router-dom';

interface SpecialistCardProps {
  specialist: Specialist;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg text-center p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary"
        src={specialist.imageUrl}
        alt={specialist.name}
      />
      <h3 className="text-xl font-bold text-text-primary">{specialist.name}</h3>
      <p className="text-primary font-medium mb-3">{specialist.title}</p>
      <p className="text-text-secondary text-sm mb-4">{specialist.bio}</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {specialist.specialties.map(spec => (
          <span key={spec} className="bg-secondary text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
            {spec}
          </span>
        ))}
      </div>
      <Link 
          to="/booking"
          state={{ specialistId: specialist.id }}
          className="w-full block bg-accent text-white px-4 py-2 rounded-md hover:bg-primary transition-colors"
      >
        Đặt lịch với {specialist.name.split(' ')[0]}
      </Link>
    </div>
  );
};

export default SpecialistCard;
