
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import BookingPage from './pages/BookingPage';
import SpecialistsPage from './pages/SpecialistsPage';
import PromotionsPage from './pages/PromotionsPage';
import AuthPage from './pages/AuthPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AccountLayout from './pages/account/AccountLayout';
import ProfilePage from './pages/account/ProfilePage';
import HistoryPage from './pages/account/HistoryPage';
import LoyaltyPage from './pages/account/LoyaltyPage';
import PrivateRoute from './components/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="booking" element={<BookingPage />} />
              <Route path="specialists" element={<SpecialistsPage />} />
              <Route path="promotions" element={<PromotionsPage />} />
              <Route path="auth" element={<AuthPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="cart" element={<CartPage />} />
              
              <Route path="account" element={
                <PrivateRoute>
                  <AccountLayout />
                </PrivateRoute>
              }>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="loyalty" element={<LoyaltyPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
