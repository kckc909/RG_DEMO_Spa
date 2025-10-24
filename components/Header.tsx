
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

// SVG Icons as Components for clarity
const BurgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const SocialIcons = () => (
    <div className="flex items-center space-x-4">
        {/* Placeholder SVGs for social media */}
        <a href="#" className="text-text-primary hover:text-primary"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a4 4 0 00-4 4v2.01h-2v3.98h2v8.01z" /></svg></a>
        <a href="#" className="text-text-primary hover:text-primary"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.6 5.82s.01.21.02.42c.03 1.5.08 4.69-3.21 8.2-2.38 2.5-5.6 3.6-8.6 3.3-.2.1-.4.1-.6.2-2.9-.3-5.5-1.6-7.6-3.9.4.1.8.1 1.2.1 2.3 0 4.5-1 6-2.6-1-.1-2.6-1-3-2.8.3.1.7.1 1 .1.5 0 1 0 1.4-.1-2.3-.5-3.9-2.5-3.8-4.9.7.3 1.5.5 2.2.5-2.2-1.5-2.8-4.3-1.2-6.2C4.1 4.1 7.4 6.2 11.2 6.5c-.1-.3-.1-.6-.1-1 0-2.5 2-4.5 4.5-4.5 1.3 0 2.5.5 3.3 1.4.1.1.2.1.3.1 1-.2 2-.6 2.9-1.1-.3 1-1.1 1.8-2.1 2.4.9-.1 1.8-.3 2.5-.7-.6.9-1.4 1.7-2.3 2.3z"/></svg></a>
        <a href="#" className="text-text-primary hover:text-primary"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-11v6l5.25-3L11 7z"/></svg></a>
    </div>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  
  const mainNavLinks = [
    { to: '/', name: 'Trang chủ' },
    { to: '/services', name: 'Dịch Vụ' },
    { to: '/products', name: 'Sản phẩm' },
    { to: '/about', name: 'Về Rocket Global Spa' },
    { to: '/promotions', name: 'Ưu đãi' },
    { to: '/contact', name: 'Liên Hệ' },
  ];
  
  const subNavLinks = [
      { to: '#', name: 'Tin tức' },
      { to: '/specialists', name: 'Chuyên viên' },
      { to: '/account/profile', name: 'Tài khoản' },
  ]

  const navLinkClasses = "px-4 py-2 text-sm font-medium text-text-primary hover:text-primary transition-colors";
  const mobileNavLinkClasses = "block px-4 py-3 text-base font-semibold text-text-primary hover:bg-secondary";

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);


  return (
    <>
      {/* --- Desktop Headers --- */}
      <header className="hidden md:block bg-secondary">
        {/* Sub Header (Non-Sticky) */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
             <div className="flex items-center space-x-6">
                {subNavLinks.map(link => <Link key={link.name} to={link.to} className="text-xs text-text-secondary hover:text-primary">{link.name}</Link>)}
             </div>
             <SocialIcons />
          </div>
        </div>
        
        {/* Main Header (Sticky) */}
        <div className="sticky top-0 z-50 bg-secondary shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-3xl font-serif font-bold text-primary">
                Rocket Global Spa
                </Link>
                <div className="flex items-center space-x-2">
                    {mainNavLinks.map(link => <NavLink key={link.name} to={link.to} className={navLinkClasses}>{link.name}</NavLink>)}
                </div>
                <div className="flex items-center space-x-4">
                  <Link to="/cart" className="relative text-text-primary hover:text-primary p-2">
                    <CartIcon />
                    {itemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {itemCount}
                        </span>
                    )}
                  </Link>
                  <NavLink
                    to="/booking"
                    className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    ĐẶT LỊCH
                  </NavLink>
                </div>
            </nav>
        </div>
      </header>

      {/* --- Mobile Header --- */}
      <header className="md:hidden sticky top-0 z-50 bg-secondary shadow-md">
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                <BurgerIcon />
            </button>
            <Link to="/" className="text-2xl font-serif font-bold text-primary">
                Rocket Global Spa
            </Link>
             <Link to="/cart" className="relative text-text-primary hover:text-primary p-2">
                <CartIcon />
                {itemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {itemCount}
                    </span>
                )}
              </Link>
         </div>
      </header>

      {/* --- Mobile Off-Canvas Menu --- */}
      <div className={`md:hidden fixed inset-0 z-50 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="relative w-4/5 max-w-sm h-full bg-white shadow-xl p-6">
            <div className="flex justify-between items-center mb-8">
                 <Link to="/" className="text-2xl font-serif font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Rocket Global Spa
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                    <CloseIcon />
                </button>
            </div>
            <nav className="flex flex-col space-y-2">
              {mainNavLinks.map(link => <NavLink key={link.name} to={link.to} className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>{link.name}</NavLink>)}
              <div className="pt-4 mt-4 border-t">
                 {subNavLinks.map(link => <NavLink key={link.name} to={link.to} className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>{link.name}</NavLink>)}
              </div>
               <NavLink
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 w-full text-center bg-primary text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors"
              >
                ĐẶT LỊCH
              </NavLink>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
