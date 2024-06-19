import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Import NavBar component
import Home from './Components/Home'; // Import Home component
import ProductList from './Components/ProductList'; // Import ProductList component
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortCriteria, setSortCriteria] = useState('rating');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        sortProducts(data, sortCriteria);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [sortCriteria]);

  const sortProducts = (products, criteria) => {
    const sortedProducts = products.sort((a, b) => {
      if (criteria === 'rating') {
        return b.rating.rate - a.rating.rate;
      } else if (criteria === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setProducts(sortedProducts);
  };

  const handleBuy = (id) => {
    alert(`Product ${id} bought!`);
  };

  const handleAddToCart = (id) => {
    alert(`Product ${id} added to cart!`);
  };

  const handleToggleCompare = (product) => {
    if (comparedProducts.length < 4 && !comparedProducts.find(p => p.id === product.id)) {
      setComparedProducts(prev => [...prev, product]);
    }
  };

  const handleCompareProducts = () => {
    setSelectedProducts([]);
    setShowComparison(true);
  };

  const handleDeleteComparisonProduct = (id) => {
    setComparedProducts(prev => prev.filter(p => p.id !== id));
  };

  const renderComparison = () => {
    if (comparedProducts.length < 2) return null;
    return (
      <div className="comparison">
        <h2>Comparison</h2>
        <div className="comparison-list">
          {comparedProducts.map(product => (
            <div key={product.id} className="comparison-product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
              <button onClick={() => handleDeleteComparisonProduct(product.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const LocationHeader = () => {
    const location = useLocation();
    if (location.pathname === '/products') {
      return (
        <>
          <h1>Top Products</h1>
          <div className="sorting">
            <button onClick={() => setSortCriteria('rating')}>Sort by Rating</button>
            <button onClick={() => setSortCriteria('price')}>Sort by Price</button>
          </div>
          <button
            onClick={handleCompareProducts}
            disabled={comparedProducts.length < 2}
          >
            Compare Products
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <LocationHeader />
        </header>
        <div className="container">
          {showComparison && renderComparison()}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route
              path="/products"
              element={
                <ProductList
                  products={products}
                  onBuy={handleBuy}
                  onAddToCart={handleAddToCart}
                  onToggleCompare={handleToggleCompare}
                  selectedProducts={selectedProducts}
                  comparedProducts={comparedProducts}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
