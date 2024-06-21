// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, onBuy, onAddToCart, onToggleCompare, selectedProducts, comparedProducts }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onBuy={onBuy}
          onAddToCart={onAddToCart}
          onToggleCompare={onToggleCompare}
          isSelected={!!selectedProducts.find(p => p.id === product.id)}
          isCompared={!!comparedProducts.find(p => p.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
