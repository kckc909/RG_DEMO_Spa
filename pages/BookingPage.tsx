
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_SERVICES, MOCK_SPECIALISTS } from '../constants';
import type { Service, Specialist } from '../types';

const BookingPage: React.FC = () => {
    const location = useLocation();
    const [step, setStep] = useState(1);
    const [bookingDetails, setBookingDetails] = useState({
        service: location.state?.serviceId || '',
        specialist: location.state?.specialistId || '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({...prev, [name]: value}));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to a server
        console.log('Booking submitted:', bookingDetails);
        setStep(5); // Confirmation step
    };

    const getSelectedService = (): Service | undefined => MOCK_SERVICES.find(s => s.id === parseInt(bookingDetails.service));
    const getSelectedSpecialist = (): Specialist | undefined => MOCK_SPECIALISTS.find(s => s.id === parseInt(bookingDetails.specialist));

    const renderStep = () => {
        switch(step) {
            case 1: // Select Service
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">1. Select a Service</h2>
                        <select name="service" value={bookingDetails.service} onChange={handleChange} className="w-full p-2 border rounded">
                            <option value="">Choose a service...</option>
                            {MOCK_SERVICES.map(s => <option key={s.id} value={s.id}>{s.name} - ${s.price}</option>)}
                        </select>
                        {bookingDetails.service && <button onClick={handleNext} className="mt-6 bg-primary text-white px-6 py-2 rounded">Next</button>}
                    </div>
                );
            case 2: // Select Specialist
                return (
                     <div>
                        <h2 className="text-2xl font-bold mb-4">2. Select a Specialist</h2>
                        <select name="specialist" value={bookingDetails.specialist} onChange={handleChange} className="w-full p-2 border rounded">
                            <option value="">Choose a specialist...</option>
                            {MOCK_SPECIALISTS.map(s => <option key={s.id} value={s.id}>{s.name} - {s.title}</option>)}
                        </select>
                        <div className="mt-6 flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-text-primary px-6 py-2 rounded">Back</button>
                            {bookingDetails.specialist && <button onClick={handleNext} className="bg-primary text-white px-6 py-2 rounded">Next</button>}
                        </div>
                    </div>
                );
            case 3: // Select Date & Time
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">3. Select Date & Time</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="date" name="date" value={bookingDetails.date} onChange={handleChange} className="w-full p-2 border rounded" />
                            <input type="time" name="time" value={bookingDetails.time} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                         <div className="mt-6 flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-text-primary px-6 py-2 rounded">Back</button>
                            {bookingDetails.date && bookingDetails.time && <button onClick={handleNext} className="bg-primary text-white px-6 py-2 rounded">Next</button>}
                        </div>
                    </div>
                );
            case 4: // Personal Details & Confirm
                return (
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-4">4. Your Details & Confirmation</h2>
                        <div className="space-y-4 mb-6">
                            <input type="text" name="name" placeholder="Full Name" value={bookingDetails.name} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="email" name="email" placeholder="Email Address" value={bookingDetails.email} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="tel" name="phone" placeholder="Phone Number" value={bookingDetails.phone} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-primary">
                            <h3 className="font-bold text-lg mb-2">Booking Summary</h3>
                            <p><strong>Service:</strong> {getSelectedService()?.name}</p>
                            <p><strong>Specialist:</strong> {getSelectedSpecialist()?.name}</p>
                            <p><strong>Date:</strong> {bookingDetails.date}</p>
                            <p><strong>Time:</strong> {bookingDetails.time}</p>
                        </div>
                        <div className="mt-6 flex justify-between">
                           <button onClick={handleBack} className="bg-gray-300 text-text-primary px-6 py-2 rounded">Back</button>
                           <button type="submit" className="bg-primary text-white px-6 py-2 rounded">Confirm Booking</button>
                        </div>
                    </form>
                );
            case 5: // Thank You
                return (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">Thank You!</h2>
                        <p className="text-text-secondary">Your booking has been confirmed. A confirmation email has been sent to {bookingDetails.email}. We look forward to seeing you!</p>
                    </div>
                );
            default: return null;
        }
    }

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center text-text-primary mb-8">Book an Appointment</h1>
            {/* Progress Bar */}
            {step < 5 && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>
            )}
            {renderStep()}
        </div>
    );
};

export default BookingPage;
