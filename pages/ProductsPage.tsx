
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  const filteredAndSortedProducts = useMemo(() => {
    let products: Product[] = MOCK_PRODUCTS;

    // Filter by category
    if (filter !== 'All') {
      products = products.filter(product => product.category === filter);
    }

    // Filter by search term
    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortOrder === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [filter, searchTerm, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-center text-primary mb-4">Sản Phẩm Của Chúng Tôi</h1>
      <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
        Khám phá bộ sưu tập các sản phẩm chăm sóc cao cấp được tuyển chọn kỹ lưỡng để bạn tiếp tục hành trình chăm sóc bản thân tại nhà.
      </p>

      {/* Filter & Sort Controls */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="md:col-span-2 flex items-center justify-end">
             <label htmlFor="sort-product" className="mr-2 text-sm font-medium text-gray-700">Sắp xếp:</label>
            <select
                id="sort-product"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>
          </div>
        </div>
      </div>


      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
              filter === category
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-primary hover:bg-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-text-secondary">Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
