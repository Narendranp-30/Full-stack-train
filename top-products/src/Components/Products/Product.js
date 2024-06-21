
import React from 'react';
import './Product.css'; // If you have specific styles for Product component

const Product = ({ product, onBuy, onAddToCart, onToggleCompare, isSelected, isCompared }) => {
  const { id, title, description, price, rating, image } = product;

  return (
    
    <div className={`product ${isSelected ? 'selected' : ''} ${isCompared ? 'compared' : ''}`}>
      
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating.rate} ({rating.count} reviews)</p>
      {isSelected ? (
        <button onClick={() => onToggleCompare(product)}>Remove from Compare</button>
      ) : (
        <button onClick={() => onToggleCompare(product)}>Add to Compare</button>
      )}
      {isCompared && <button onClick={() => onToggleCompare(product)}>Delete</button>}
      <button onClick={() => onBuy(id)}>Buy</button>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
