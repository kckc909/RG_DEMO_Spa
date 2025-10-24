
import type { Service, Specialist, Promotion, Booking, Loyalty, User, Product } from './types';

export const MOCK_SERVICES: Service[] = [
  { id: 1, name: 'Massage Thụy Điển', description: 'Một liệu pháp massage nhẹ nhàng, thư giãn để giảm căng cơ.', price: 800000, duration: 60, category: 'Massage', imageUrl: 'https://picsum.photos/400/300?random=1' },
  { id: 2, name: 'Massage Mô Sâu', description: 'Tác động vào các lớp cơ và mô liên kết sâu hơn.', price: 1000000, duration: 60, category: 'Massage', imageUrl: 'https://picsum.photos/400/300?random=2' },
  { id: 3, name: 'Chăm Sóc Da Mặt Trẻ Hóa', description: 'Một liệu trình làm sạch, tẩy tế bào chết và nuôi dưỡng làn da.', price: 900000, duration: 75, category: 'Chăm sóc da', imageUrl: 'https://picsum.photos/400/300?random=3' },
  { id: 4, name: 'Trị Liệu Hương Thơm', description: 'Massage trị liệu kết hợp với tinh dầu thiên nhiên.', price: 850000, duration: 60, category: 'Trị liệu', imageUrl: 'https://picsum.photos/400/300?random=4' },
  { id: 5, name: 'Massage Đá Nóng', description: 'Sử dụng những viên đá mịn, được làm nóng để thư giãn cơ bắp.', price: 1100000, duration: 90, category: 'Massage', imageUrl: 'https://picsum.photos/400/300?random=5' },
  { id: 6, name: 'Ủ Dưỡng Thể Cấp Ẩm', description: 'Một liệu pháp giúp cấp ẩm và làm mềm da toàn thân.', price: 1200000, duration: 75, category: 'Trị liệu toàn thân', imageUrl: 'https://picsum.photos/400/300?random=6' },
  { id: 7, name: 'Gội Đầu Dưỡng Sinh', description: 'Gội đầu kết hợp massage cổ vai gáy, giúp thư giãn và cải thiện tuần hoàn máu.', price: 450000, duration: 60, category: 'Chăm sóc tóc', imageUrl: 'https://picsum.photos/400/300?random=13' },
  { id: 8, name: 'Cắt & Tạo Kiểu Tóc', description: 'Dịch vụ cắt và tạo kiểu tóc chuyên nghiệp theo xu hướng mới nhất.', price: 500000, duration: 45, category: 'Chăm sóc tóc', imageUrl: 'https://picsum.photos/400/300?random=14' },
  { id: 9, name: 'Sơn Gel Hàn Quốc', description: 'Làm sạch móng và sơn gel cao cấp, bền màu từ Hàn Quốc.', price: 350000, duration: 60, category: 'Chăm sóc móng', imageUrl: 'https://picsum.photos/400/300?random=15' },
  { id: 10, name: 'Chăm Sóc Móng Toàn Diện', description: 'Trọn gói cắt da, dũa móng, massage tay và sơn dưỡng.', price: 400000, duration: 75, category: 'Chăm sóc móng', imageUrl: 'https://picsum.photos/400/300?random=16' },
];

export const MOCK_SPECIALISTS: Specialist[] = [
  { id: 1, name: 'Olivia Chen', title: 'Trưởng KTV Massage', bio: 'Với hơn 10 năm kinh nghiệm, Olivia chuyên về các liệu pháp massage trị liệu giúp chữa lành cả cơ thể và tâm trí.', specialties: ['Mô Sâu', 'Massage Thụy Điển'], imageUrl: 'https://picsum.photos/400/400?random=7' },
  { id: 2, name: 'Benjamin Carter', title: 'Chuyên Viên Thẩm Mỹ Cao Cấp', bio: 'Benjamin đam mê chăm sóc da và cung cấp các liệu trình chăm sóc da mặt cá nhân hóa để có được làn da rạng rỡ.', specialties: ['Chăm sóc da mặt', 'Tư vấn da'], imageUrl: 'https://picsum.photos/400/400?random=8' },
  { id: 3, name: 'Sophia Rodriguez', title: 'Chuyên Gia Trị Liệu', bio: 'Sophia kết hợp các kỹ thuật truyền thống và hiện đại để tạo ra một trải nghiệm chăm sóc sức khỏe toàn diện.', specialties: ['Trị liệu hương thơm', 'Ủ dưỡng thể'], imageUrl: 'https://picsum.photos/400/400?random=9' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 101, name: 'Tinh Chất Dưỡng Ẩm Hyaluronic', description: 'Cung cấp độ ẩm sâu, giúp da căng bóng và mịn màng.', price: 750000, category: 'Chăm sóc da', brand: 'SereneSkin', imageUrl: 'https://picsum.photos/400/400?random=21' },
  { id: 102, name: 'Dầu Gội Thảo Dược Phục Hồi', description: 'Chiết xuất từ thảo dược tự nhiên, giúp phục hồi tóc hư tổn.', price: 450000, category: 'Chăm sóc tóc', brand: 'HerbalEssence', imageUrl: 'https://picsum.photos/400/400?random=22' },
  { id: 103, name: 'Sữa Tắm Tinh Dầu Oải Hương', description: 'Giúp thư giãn tinh thần và làm mềm mịn da sau mỗi lần tắm.', price: 380000, category: 'Chăm sóc cơ thể', brand: 'AromaRelax', imageUrl: 'https://picsum.photos/400/400?random=23' },
  { id: 104, name: 'Kem Chống Nắng Phổ Rộng SPF 50+', description: 'Bảo vệ da tối ưu khỏi tia UVA/UVB, không gây nhờn rít.', price: 550000, category: 'Chăm sóc da', brand: 'SereneSkin', imageUrl: 'https://picsum.photos/400/400?random=24' },
  { id: 105, name: 'Nến Thơm Trị Liệu', description: 'Nến thơm từ sáp ong và tinh dầu thiên nhiên, giúp thư giãn không gian sống.', price: 600000, category: 'Trị liệu', brand: 'AromaRelax', imageUrl: 'https://picsum.photos/400/400?random=25' },
  { id: 106, name: 'Dầu Dưỡng Tóc Argan', description: 'Nuôi dưỡng tóc bóng mượt, giảm chẻ ngọn và xơ rối.', price: 520000, category: 'Chăm sóc tóc', brand: 'HerbalEssence', imageUrl: 'https://picsum.photos/400/400?random=26' },
];


export const MOCK_PROMOTIONS: Promotion[] = [
  { id: 1, title: 'Thư Giãn Giữa Tuần', description: 'Giảm 20% cho tất cả dịch vụ massage từ Thứ Ba đến Thứ Năm.', discount: '20% OFF', code: 'WEEKDAY20', expiryDate: '2024-12-31', imageUrl: 'https://picsum.photos/400/250?random=10' },
  { id: 2, title: 'Ưu Đãi Khách Hàng Mới', description: 'Trải nghiệm lần đầu? Giảm ngay 150.000 VNĐ cho liệu trình đầu tiên.', discount: '150K OFF', code: 'NEW150', expiryDate: '2024-12-31', imageUrl: 'https://picsum.photos/400/250?random=11' },
  { id: 3, title: 'Gói Chăm Sóc Da', description: 'Mua gói 3 lần chăm sóc da mặt, tặng miễn phí lần thứ 4!', discount: 'TẶNG 1', code: 'FACIALPACK', expiryDate: '2025-06-30', imageUrl: 'https://picsum.photos/400/250?random=12' },
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
        { id: 1, title: 'Miễn phí tinh dầu trị liệu', description: 'Nâng cao trải nghiệm massage tiếp theo của bạn với một hỗn hợp tinh dầu miễn phí.' },
        { id: 2, title: 'Giảm 10% sản phẩm chăm sóc da', description: 'Tiết kiệm khi mua các sản phẩm chăm sóc da cao cấp của chúng tôi tại cửa hàng.' },
        { id: 3, title: 'Giảm 200.000 VNĐ cho lần tiếp theo', description: 'Hưởng ưu đãi đặc biệt cho lần đặt lịch tiếp theo từ 1.000.000 VNĐ trở lên.' },
    ]
};
