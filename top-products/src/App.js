// src/App.js

import React, { useEffect, useState } from 'react';
import Product from './Components/Product';
import './App.css';

const App = () => {
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
        // Sort products by rating (descending order)
        const sortedProducts = data.sort((a, b) => b.rating - a.rating);
        setProducts(sortedProducts);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Products</h1>
      </header>
      <div className="container">
        <div className="product-list">
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
    </div>
  );
};

export default App;
