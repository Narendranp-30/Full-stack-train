// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import ProductList from './Components/Products/ProductList';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortCriteria, setSortCriteria] = useState('rating');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        sortProducts(data.products, sortCriteria);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
        setLoading(false);
      });
  }, [sortCriteria]);

  const sortProducts = (products, criteria) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (criteria === 'rating') {
        return b.rating - a.rating;
      } else if (criteria === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setProducts(sortedProducts);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating} ({product.reviews} reviews)</p>
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
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductList
                  products={filteredProducts}
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                  onBuy={handleBuy}
                  onAddToCart={handleAddToCart}
                  onToggleCompare={handleToggleCompare}
                  selectedProducts={selectedProducts}
                  comparedProducts={comparedProducts}
                />
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
