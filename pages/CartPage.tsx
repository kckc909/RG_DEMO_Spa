
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, itemCount, clearCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-center text-primary mb-8">Giỏ Hàng Của Bạn</h1>
      
      {itemCount === 0 ? (
        <div className="text-center bg-white p-12 rounded-lg shadow-lg">
          <p className="text-text-secondary text-lg mb-6">Giỏ hàng của bạn đang trống.</p>
          <Link
            to="/products"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Bắt đầu mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold">Sản phẩm ({itemCount})</h2>
                <button onClick={clearCart} className="text-sm text-red-500 hover:underline">Xóa tất cả</button>
            </div>
            
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-text-primary">{item.name}</h3>
                    <p className="text-sm text-text-secondary">{item.brand}</p>
                    <p className="text-primary font-bold mt-1">{item.price.toLocaleString('vi-VN')} VNĐ</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 border rounded-md">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 border rounded-md">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <h2 className="text-xl font-semibold border-b pb-4 mb-4">Tổng Cộng</h2>
              <div className="space-y-2 text-text-secondary">
                 <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span>{subtotal.toLocaleString('vi-VN')} VNĐ</span>
                 </div>
                 <div className="flex justify-between">
                    <span>Phí vận chuyển</span>
                    <span>Miễn phí</span>
                 </div>
              </div>
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-bold text-lg">
                    <span>Tổng tiền</span>
                    <span className="text-primary">{subtotal.toLocaleString('vi-VN')} VNĐ</span>
                </div>
              </div>
               <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Tiến hành thanh toán
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
