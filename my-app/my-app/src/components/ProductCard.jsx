import React from "react";
import "../App.css"; // Adjust the path as necessary

const ProductCard = (props) => {
  const { title, description, price, image } = props.product || {};

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="price">₹ {price}</div>
      <div className="buttons">
        <button>Buy</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
