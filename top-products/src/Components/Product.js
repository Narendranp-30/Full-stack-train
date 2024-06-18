// src/Components/Product.js

import React from 'react';
import './Product.css';

const Product = ({ product, onBuy, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.rating && <p>Rating: {product.rating}</p>} {/* Display the rating if available */}
      <div className="product-buttons">
        <button onClick={() => onBuy(product.id)}>Buy</button>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
