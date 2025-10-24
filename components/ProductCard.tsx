
import React, { useState } from 'react';
import type { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };


  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.name} />
        <span className="absolute top-2 left-2 bg-secondary text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{product.brand}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-serif text-text-primary mb-2 flex-grow">{product.name}</h3>
        <p className="text-text-secondary text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-primary">{product.price.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <button 
            onClick={handleAddToCart}
            className={`w-full block text-center text-white px-4 py-2 rounded-md transition-colors font-semibold ${isAdded ? 'bg-green-500' : 'bg-primary hover:bg-opacity-90'}`}
        >
          {isAdded ? 'Đã thêm!' : 'Thêm vào giỏ'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
