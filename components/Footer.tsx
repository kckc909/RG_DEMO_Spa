import React from 'react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3">
        {/* Placeholder SVGs for CTA icons */}
        <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.04c-5.5,0-10,4.46-10,9.96c0,4.84,3.44,8.87,8,9.75V15.1H7.88v-3.03H10V9.89c0-2.09,1.26-3.24,3.15-3.24 c0.89,0,1.81,0.16,1.81,0.16v2.58h-1.32c-1.04,0-1.38,0.62-1.38,1.32v1.46h2.9l-0.45,3.03h-2.45v6.57c4.56-0.88,8-4.91,8-9.75 C22,6.5,17.5,2.04,12,2.04z"/></svg>
        </a>
        <a href="#" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors">
             <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" ><path d="M16.5 12c0-1.77-1.43-3-3.5-3s-3.5 1.23-3.5 3c0 1.52 1.01 2.77 2.44 2.96l-.54 2.62-2.3-1.63c-2.43-1.4-4.1-3.6-4.1-6.4C5 6.02 8.13 3 12.5 3S20 6.02 20 9.5c0 2.8-1.67 5-4.1 6.4l-2.3 1.63.54-2.62c.1-.5.1-1.02.1-1.43z"/></svg>
        </a>
        <a href="tel:1234567890" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
        </a>
    </div>
);


const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-text-primary text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Column 1: About & Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">NHÀ SPA</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Nơi tái tạo năng lượng, tìm về an yên và nuông chiều bản thân bằng những liệu pháp trị liệu độc đáo.</p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Khám Phá</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">Về Nhà Spa</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Tất Cả Dịch Vụ</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-primary transition-colors">Tin Tức & Sự Kiện</Link></li>
                <li><Link to="/promotions" className="text-gray-300 hover:text-primary transition-colors">Ưu Đãi Đặc Biệt</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Liên Hệ</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start"><span className="mr-2 mt-1">&#10140;</span><span>123 Wellness Lane, Tranquil City</span></li>
                <li className="flex items-start"><span className="mr-2 mt-1">&#9993;</span><a href="mailto:contact@nhaspa.com" className="hover:text-primary">contact@nhaspa.com</a></li>
                <li className="flex items-start"><span className="mr-2 mt-1">&#9742;</span><a href="tel:19001234" className="hover:text-primary">Hotline: 1900 1234</a></li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} NHÀ SPA. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <FloatingCTA />
    </>
  );
};

export default Footer;
