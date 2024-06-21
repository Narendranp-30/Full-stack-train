// Components/ProductBox/ProductBox.js
import React from 'react';
import './ProductBox.css';

const ProductBox = ({ product }) => {
  return (
    <div className="product-box">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductBox;
