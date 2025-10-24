
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_SERVICES, MOCK_SPECIALISTS } from '../constants';
import type { Service, Specialist } from '../types';

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const BookingPage: React.FC = () => {
    const location = useLocation();
    const [isConfirmed, setIsConfirmed] = useState(false);

    const [bookingDetails, setBookingDetails] = useState({
        serviceId: location.state?.serviceId?.toString() || '',
        specialistId: location.state?.specialistId?.toString() || '',
        date: new Date().toISOString().split('T')[0],
        time: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleTimeSelect = (time: string) => {
        setBookingDetails(prev => ({...prev, time}));
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking submitted:', bookingDetails);
        setIsConfirmed(true);
    };

    const selectedService = useMemo((): Service | undefined => 
        MOCK_SERVICES.find(s => s.id === parseInt(bookingDetails.serviceId)), 
        [bookingDetails.serviceId]
    );
    
    const selectedSpecialist = useMemo((): Specialist | undefined => 
        MOCK_SPECIALISTS.find(s => s.id === parseInt(bookingDetails.specialistId)),
        [bookingDetails.specialistId]
    );

    if (isConfirmed) {
        return (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
                 <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h2 className="text-3xl font-serif text-primary mt-4 mb-2">Cảm ơn bạn!</h2>
                <p className="text-text-secondary">
                    Lịch hẹn của bạn đã được xác nhận. Một email xác nhận đã được gửi đến {bookingDetails.email}.
                    <br />
                    Chúng tôi rất mong được đón tiếp bạn!
                </p>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
             <h1 className="text-4xl font-serif text-center text-primary mb-8">Đặt Lịch Hẹn</h1>
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg space-y-8">
                    {/* --- Step 1: Service & Specialist --- */}
                    <fieldset>
                        <legend className="text-2xl font-serif text-text-primary mb-4">1. Dịch vụ & Chuyên viên</legend>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Chọn dịch vụ</label>
                                <select id="service" name="serviceId" value={bookingDetails.serviceId} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    <option value="">-- Lựa chọn --</option>
                                    {MOCK_SERVICES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="specialist" className="block text-sm font-medium text-gray-700 mb-1">Chọn chuyên viên</label>
                                <select id="specialist" name="specialistId" value={bookingDetails.specialistId} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required>
                                    <option value="">-- Lựa chọn --</option>
                                    {MOCK_SPECIALISTS.map(s => <option key={s.id} value={s.id}>{s.name} - {s.title}</option>)}
                                </select>
                            </div>
                        </div>
                    </fieldset>
                    
                     {/* --- Step 2: Date & Time --- */}
                    <fieldset>
                         <legend className="text-2xl font-serif text-text-primary mb-4">2. Chọn Ngày & Giờ</legend>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Chọn ngày</label>
                                <input type="date" id="date" name="date" value={bookingDetails.date} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required min={new Date().toISOString().split('T')[0]} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Chọn giờ</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {timeSlots.map(time => (
                                        <button type="button" key={time} onClick={() => handleTimeSelect(time)} className={`p-2 border rounded-md text-sm transition-colors ${bookingDetails.time === time ? 'bg-primary text-white' : 'bg-secondary hover:bg-accent hover:text-white'}`}>
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </fieldset>

                    {/* --- Step 3: Personal Details --- */}
                    <fieldset>
                        <legend className="text-2xl font-serif text-text-primary mb-4">3. Thông tin của bạn</legend>
                        <div className="grid md:grid-cols-2 gap-6">
                             <input type="text" name="name" placeholder="Họ và Tên" value={bookingDetails.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                             <input type="email" name="email" placeholder="Địa chỉ Email" value={bookingDetails.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                             <input type="tel" name="phone" placeholder="Số Điện Thoại" value={bookingDetails.phone} onChange={handleChange} className="md:col-span-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </fieldset>
                </form>

                {/* Summary Section */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
                         <h2 className="text-2xl font-serif text-text-primary border-b pb-3 mb-4">Tóm Tắt Đặt Lịch</h2>
                         <div className="space-y-3 text-text-secondary">
                            <div className="flex justify-between"><span>Dịch vụ:</span> <span className="font-semibold text-right text-text-primary">{selectedService?.name || 'Chưa chọn'}</span></div>
                            <div className="flex justify-between"><span>Chuyên viên:</span> <span className="font-semibold text-right text-text-primary">{selectedSpecialist?.name || 'Chưa chọn'}</span></div>
                            <div className="flex justify-between"><span>Ngày:</span> <span className="font-semibold text-text-primary">{bookingDetails.date ? new Date(bookingDetails.date).toLocaleDateString('vi-VN') : 'Chưa chọn'}</span></div>
                            <div className="flex justify-between"><span>Giờ:</span> <span className="font-semibold text-text-primary">{bookingDetails.time || 'Chưa chọn'}</span></div>
                         </div>
                         <div className="border-t mt-4 pt-4">
                             <div className="flex justify-between items-center text-xl font-bold">
                                 <span>Tổng cộng:</span>
                                 <span className="text-primary">{selectedService ? selectedService.price.toLocaleString('vi-VN') + ' VNĐ' : '0 VNĐ'}</span>
                             </div>
                         </div>
                         <button type="submit" form="booking-form" onClick={handleSubmit} className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors"
                          disabled={!bookingDetails.serviceId || !bookingDetails.specialistId || !bookingDetails.date || !bookingDetails.time || !bookingDetails.name || !bookingDetails.email}>
                            Xác Nhận Đặt Lịch
                         </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
