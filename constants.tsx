
import type { Service, Specialist, Promotion, Booking, Loyalty, User } from './types';

export const MOCK_SERVICES: Service[] = [
  { id: 1, name: 'Swedish Massage', description: 'A gentle, relaxing massage to ease muscle tension.', price: 80, duration: 60, category: 'Massage', imageUrl: 'https://picsum.photos/400/300?random=1' },
  { id: 2, name: 'Deep Tissue Massage', description: 'Targets deeper layers of muscle and connective tissue.', price: 100, duration: 60, category: 'Massage', imageUrl: 'https://picsum.photos/400/300?random=2' },
  { id: 3, name: 'Rejuvenating Facial', description: 'A facial that cleanses, exfoliates, and nourishes the skin.', price: 90, duration: 75, category: 'Skincare', imageUrl: 'https://picsum.photos/400/300?random=3' },
  { id: 4, name: 'Aromatherapy', description: 'Massage therapy with essential oils.', price: 85, duration: 60, category: 'Wellness', imageUrl: 'https://picsum.photos/400/300?random=4' },
  { id: 5, name: 'Hot Stone Massage', description: 'Uses smooth, heated stones to relax muscles.', price: 110, duration: 90, category: 'Massage', imageUrl: 'https://picsum.photos/400/300?random=5' },
  { id: 6, name: 'Hydrating Body Wrap', description: 'A treatment to hydrate and soften the skin.', price: 120, duration: 75, category: 'Body Treatments', imageUrl: 'https://picsum.photos/400/300?random=6' },
];

export const MOCK_SPECIALISTS: Specialist[] = [
  { id: 1, name: 'Olivia Chen', title: 'Lead Massage Therapist', bio: 'With over 10 years of experience, Olivia specializes in therapeutic massages that heal both body and mind.', specialties: ['Deep Tissue', 'Swedish Massage'], imageUrl: 'https://picsum.photos/400/400?random=7' },
  { id: 2, name: 'Benjamin Carter', title: 'Senior Esthetician', bio: 'Benjamin is passionate about skincare and provides personalized facials to achieve radiant skin.', specialties: ['Facials', 'Skincare Consultation'], imageUrl: 'https://picsum.photos/400/400?random=8' },
  { id: 3, name: 'Sophia Rodriguez', title: 'Wellness Expert', bio: 'Sophia combines traditional and modern techniques to create a holistic wellness experience.', specialties: ['Aromatherapy', 'Body Wraps'], imageUrl: 'https://picsum.photos/400/400?random=9' },
];

export const MOCK_PROMOTIONS: Promotion[] = [
  { id: 1, title: 'Mid-Week Relaxation', description: 'Get 20% off any massage service from Tuesday to Thursday.', discount: '20% OFF', code: 'WEEKDAY20', expiryDate: '2024-12-31', imageUrl: 'https://picsum.photos/400/250?random=10' },
  { id: 2, title: 'First Time Client Offer', description: 'New to Serenity Spa? Enjoy $15 off your first treatment.', discount: '$15 OFF', code: 'NEW15', expiryDate: '2024-12-31', imageUrl: 'https://picsum.photos/400/250?random=11' },
  { id: 3, title: 'Skincare Package Deal', description: 'Buy a package of 3 facials and get the 4th one free!', discount: '1 FREE', code: 'FACIALPACK', expiryDate: '2025-06-30', imageUrl: 'https://picsum.photos/400/250?random=12' },
];

export const MOCK_USER: User = {
    id: 101,
    name: 'Jane Doe',
    email: 'jane.doe@example.com'
};

export const MOCK_HISTORY: Booking[] = [
  { id: 'BK001', service: MOCK_SERVICES[0], specialist: MOCK_SPECIALISTS[0], date: '2024-07-15', time: '14:00', status: 'Completed' },
  { id: 'BK002', service: MOCK_SERVICES[2], specialist: MOCK_SPECIALISTS[1], date: '2024-08-01', time: '11:00', status: 'Completed' },
  { id: 'BK003', service: MOCK_SERVICES[1], specialist: MOCK_SPECIALISTS[0], date: '2024-08-20', time: '16:00', status: 'Confirmed' },
];

export const MOCK_LOYALTY: Loyalty = {
    points: 1250,
    tier: 'Silver',
    rewards: [
        { id: 1, title: 'Free Aromatherapy Add-on', description: 'Enhance your next massage with a complimentary essential oil blend.' },
        { id: 2, title: '10% Off Skincare Products', description: 'Save on our premium range of skincare products in-store.' },
        { id: 3, title: '$20 Off Next Visit', description: 'Enjoy a special discount on your next booking of $100 or more.' },
    ]
};
