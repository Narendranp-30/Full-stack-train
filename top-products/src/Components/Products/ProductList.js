// ProductList.js
import React from 'react';
import Product from './Product';
import SearchBar from '../SearchBar/SearchBar';
import './ProductList.css';

const ProductList = ({ products, searchTerm, onSearchChange, onBuy, onAddToCart, onToggleCompare, selectedProducts, comparedProducts }) => {
  return (
    <div className="product-list-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <Product
              key={product.id}
              product={product}
              onBuy={onBuy}
              onAddToCart={onAddToCart}
              onToggleCompare={onToggleCompare}
              isSelected={!!selectedProducts.find(p => p.id === product.id)}
              isCompared={!!comparedProducts.find(p => p.id === product.id)}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
