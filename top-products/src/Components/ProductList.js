// src/ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Components/Product';

const ProductList = ({ existingProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleBuy = (id) => {
    alert(`Product ${id} bought!`);
  };

  const handleAddToCart = (id) => {
    alert(`Product ${id} added to cart!`);
  };

  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={sortProductsByPrice}>Sort by Price</button>
      <div className="product-list">
        {existingProducts.map(product => (
          <Product
            key={product.id}
            product={product}
            onBuy={handleBuy}
            onAddToCart={handleAddToCart}
          />
        ))}
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onBuy={handleBuy}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
