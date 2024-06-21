import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Carousel from '../Carousel/Carousel';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3') // Fetch only three products
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <SearchBar />
      <Link to="/products" className="see-all-link top-right">See All</Link>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
