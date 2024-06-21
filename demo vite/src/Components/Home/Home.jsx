// src/home/Home.jsx

import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=6')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
