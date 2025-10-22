
import React from 'react';
import { MOCK_HISTORY } from '../../constants';

const HistoryPage: React.FC = () => {
  const upcomingBookings = MOCK_HISTORY.filter(b => b.status === 'Confirmed');
  const pastBookings = MOCK_HISTORY.filter(b => b.status !== 'Confirmed');

  const BookingCard = ({ booking }) => (
    <div className="border p-4 rounded-lg mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-primary">{booking.service.name}</h3>
          <p className="text-sm text-text-secondary">with {booking.specialist.name}</p>
          <p className="text-sm text-text-secondary">{new Date(booking.date).toDateString()} at {booking.time}</p>
        </div>
        <span className={`px-3 py-1 text-sm rounded-full ${
            booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' : 
            booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
        }`}>
            {booking.status}
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-text-primary mb-6">Booking History</h1>
      
      <section>
        <h2 className="text-2xl font-semibold text-text-primary border-b pb-2 mb-4">Upcoming</h2>
        {upcomingBookings.length > 0 ? (
          upcomingBookings.map(b => <BookingCard key={b.id} booking={b} />)
        ) : (
          <p className="text-text-secondary">You have no upcoming appointments.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-text-primary border-b pb-2 mb-4">Past</h2>
        {pastBookings.length > 0 ? (
          pastBookings.map(b => <BookingCard key={b.id} booking={b} />)
        ) : (
          <p className="text-text-secondary">You have no past appointments.</p>
        )}
      </section>
    </div>
  );
};

export default HistoryPage;
