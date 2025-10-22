import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Reusable SVG Icon ---
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);


// --- 2.1 Hero/Banner Slider ---
const HeroSlider = () => {
    const slides = [
        { img: 'https://picsum.photos/1920/1080?random=1', title: 'Thư Giãn Tuyệt Đối', subtitle: 'Trải nghiệm liệu pháp massage trị liệu độc quyền tại Rocket Global Spa', link: '/services' },
        { img: 'https://picsum.photos/1920/1080?random=2', title: 'Làn Da Rạng Rỡ', subtitle: 'Chăm sóc da chuyên sâu với sản phẩm hữu cơ cao cấp', link: '/services' },
        { img: 'https://picsum.photos/1920/1080?random=3', title: 'Món Quà Sức Khỏe', subtitle: 'Dành tặng người thân yêu thẻ quà tặng spa đầy ý nghĩa', link: '#' },
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent(current === slides.length - 1 ? 0 : current + 1);
        }, 5000);
        return () => clearTimeout(timer);
    }, [current, slides.length]);

    return (
        <section className="relative w-full h-[80vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div key={index} className={`slider-item absolute inset-0 w-full h-full ${index === current ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                        <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg">{slide.title}</h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl">{slide.subtitle}</p>
                        <Link to={slide.link} className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-transform transform hover:scale-105">
                            KHÁM PHÁ NGAY
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

// --- 2.2 Giới Thiệu & Slogan ---
const IntroSection = () => (
    <section className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-serif text-primary mb-4">Chào Mừng Đến Rocket Global Spa</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Tọa lạc giữa lòng thành phố, Rocket Global Spa là một ốc đảo bình yên, nơi bạn có thể tạm gác lại những bộn bề của cuộc sống, tìm về sự tĩnh tại và tái tạo năng lượng từ sâu bên trong.
            </p>
        </div>
    </section>
);

// --- 2.3 Đặc Điểm Nổi Bật ---
const KeyFeatures = () => {
    const features = [
        { icon: '🌿', title: 'Liệu Pháp Tự Nhiên', description: 'Sử dụng 100% sản phẩm hữu cơ, an toàn và lành tính cho làn da.' },
        { icon: '🧘', title: 'Không Gian Tĩnh Lặng', description: 'Thiết kế tinh tế, gần gũi với thiên nhiên, mang lại cảm giác thư thái tuyệt đối.' },
        { icon: '✨', title: 'Chuyên Gia Hàng Đầu', description: 'Đội ngũ kỹ thuật viên giàu kinh nghiệm, được đào tạo chuyên sâu và bài bản.' },
    ];
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {features.map(feature => (
                    <div key={feature.title} className="transform transition-transform hover:scale-105">
                        <div className="text-5xl mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-serif text-text-primary mb-2">{feature.title}</h3>
                        <p className="text-text-secondary">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- 2.4 Video Giới Thiệu ---
const VideoSection = () => {
    const [playVideo, setPlayVideo] = useState(false);
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                 <h2 className="text-4xl font-serif text-center text-primary mb-8">Một Thoáng An Yên Tại Rocket Global Spa</h2>
                <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer" onClick={() => setPlayVideo(true)}>
                    {playVideo ? (
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <>
                            <img src="https://picsum.photos/1280/720?random=4" alt="Spa preview" className="w-full h-full object-cover" loading="lazy"/>
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"/></svg>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- 2.5 Nhóm Dịch Vụ Chính ---
const MainServiceGroups = () => {
    const groups = [
        { name: 'Trị Liệu Toàn Thân', img: 'https://picsum.photos/800/600?random=5', link: '/services' },
        { name: 'Chăm Sóc Da Mặt', img: 'https://picsum.photos/800/600?random=6', link: '/services' },
        { name: 'Thư Giãn & Xông Hơi', img: 'https://picsum.photos/800/600?random=7', link: '/services' },
    ];
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center text-primary mb-12">Dịch Vụ Chăm Sóc Toàn Diện</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {groups.map(group => (
                        <Link to={group.link} key={group.name} className="group relative block h-96 rounded-lg overflow-hidden shadow-lg">
                            <img src={group.img} alt={group.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-3xl font-serif text-white">{group.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 2.6 Dịch Vụ Nổi Bật ---
const FeaturedServices = () => {
    const services = [
        { name: 'Massage Đá Nóng Himalaya', price: 950000, img: 'https://picsum.photos/400/500?random=8' },
        { name: 'Thanh Tẩy Da Chết Cà Phê', price: 650000, img: 'https://picsum.photos/400/500?random=9' },
        { name: 'Trị Liệu Cổ Vai Gáy', price: 550000, img: 'https://picsum.photos/400/500?random=10' },
        { name: 'Cấy Trắng Da Mặt', price: 1200000, img: 'https://picsum.photos/400/500?random=11' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                 <h2 className="text-4xl font-serif text-center text-primary mb-12">Liệu Trình Được Yêu Thích Nhất</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                     {services.map(service => (
                         <div key={service.name} className="group text-center">
                            <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                                <img src={service.img} alt={service.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary">{service.name}</h3>
                            <p className="text-primary font-medium my-2">{service.price.toLocaleString('vi-VN')} VNĐ</p>
                            <Link to="/booking" className="inline-block bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-colors">ĐẶT LỊCH</Link>
                         </div>
                     ))}
                 </div>
            </div>
        </section>
    );
};

// --- 2.7 Không Gian Rocket Global Spa ---
const SpaGallery = () => {
     const images = [
        'https://picsum.photos/1600/900?random=12',
        'https://picsum.photos/1600/900?random=13',
        'https://picsum.photos/1600/900?random=14'
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="py-20 relative bg-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-serif text-white mb-8">Không Gian Trị Liệu</h2>
                <div className="relative h-[60vh] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
                    {images.map((img, index) => (
                         <img key={index} src={img} className={`slider-item absolute inset-0 w-full h-full object-cover ${index === current ? 'opacity-100' : 'opacity-0'}`} loading="lazy"/>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 2.8 Trải Nghiệm Khách Hàng ---
const CustomerExperience = () => {
    const experiences = [
        { title: 'Dành cho Gia Đình', img: 'https://picsum.photos/600/800?random=15' },
        { title: 'Dành cho Bạn Bè', img: 'https://picsum.photos/600/800?random=16' },
        { title: 'Dành cho Cặp Đôi', img: 'https://picsum.photos/600/800?random=17' },
    ];
    return (
         <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center text-primary mb-12">Khoảnh Khắc Thư Giãn Đáng Nhớ</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                     {experiences.map(exp => (
                         <div key={exp.title} className="relative rounded-lg overflow-hidden shadow-lg group">
                            <img src={exp.img} alt={exp.title} className="w-full h-96 object-cover" loading="lazy"/>
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                            <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-serif text-white font-bold">{exp.title}</h3>
                         </div>
                     ))}
                 </div>
            </div>
        </section>
    );
};

// --- 2.9 Review & Gallery ---
const Reviews = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif text-primary mb-12">Khách Hàng Nói Về Chúng Tôi</h2>
            <div className="max-w-3xl mx-auto">
                <blockquote className="text-xl italic text-text-secondary leading-relaxed">
                    "Không gian ở đây thật sự tuyệt vời, rất yên tĩnh và thư giãn. Nhân viên thì cực kỳ chuyên nghiệp và thân thiện. Mình chắc chắn sẽ quay lại Rocket Global Spa nhiều lần nữa!"
                </blockquote>
                <p className="mt-4 font-semibold text-text-primary">- Chị Minh Anh, Khách hàng thân thiết -</p>
                {/* A small image gallery could be added here */}
            </div>
        </div>
    </section>
);

// --- 2.11 Hợp Tác Thương Hiệu ---
const BrandPartners = () => {
    const logos = Array.from({length: 8}, (_, i) => `https://picsum.photos/200/100?random=${20+i}&grayscale`);
    const allLogos = [...logos, ...logos]; // Duplicate for seamless loop

    return (
        <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                 <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-8">Đối Tác Đồng Hành</h4>
                 <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {allLogos.map((logo, index) => (
                             <li key={index}>
                                <img src={logo} alt={`Brand ${index + 1}`} className="h-10 w-auto opacity-60" loading="lazy" />
                            </li>
                        ))}
                    </ul>
                 </div>
            </div>
        </section>
    );
};


// --- 2.13 Tin Tức, Ưu Đãi ---
const NewsAndPromotions = () => {
    const posts = [
        { title: '5 Lợi Ích Bất Ngờ Của Việc Xông Hơi Thường Xuyên', date: '15/07/2024', img: 'https://picsum.photos/400/300?random=18' },
        { title: 'Ưu Đãi Tháng 8: Đi 2 Tính Tiền 1 Cho Dịch Vụ Massage', date: '01/08/2024', img: 'https://picsum.photos/400/300?random=19' },
        { title: 'Bí Quyết Chăm Sóc Da Mùa Hè Từ Chuyên Gia', date: '20/07/2024', img: 'https://picsum.photos/400/300?random=20' },
    ];
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                 <h2 className="text-4xl font-serif text-center text-primary mb-12">Tin Tức & Ưu Đãi</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {posts.map(post => (
                         <div key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                             <img src={post.img} alt={post.title} className="w-full h-48 object-cover" loading="lazy"/>
                             <div className="p-6">
                                 <p className="text-sm text-text-secondary mb-2">{post.date}</p>
                                 <h3 className="text-xl font-semibold text-text-primary mb-4 h-16">{post.title}</h3>
                                 <Link to="#" className="font-semibold text-primary hover:underline">Đọc thêm <ChevronRightIcon/></Link>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </section>
    );
};


// --- Main HomePage Component ---
const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSlider />
      <IntroSection />
      <KeyFeatures />
      <VideoSection />
      <MainServiceGroups />
      <FeaturedServices />
      <SpaGallery />
      <CustomerExperience />
      <Reviews />
      <NewsAndPromotions />
      <BrandPartners />
    </div>
  );
};

export default HomePage;
