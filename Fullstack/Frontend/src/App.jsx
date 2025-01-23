// src/App.jsx

import { useState, useEffect } from "react";
import './App.css';
import { ThemeContext, CountContext } from './contexts/theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setCount(count + 1);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CountContext.Provider value={{ count }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            {/* Add other routes as necessary */}
          </Switch>
        </Router>
      </CountContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
