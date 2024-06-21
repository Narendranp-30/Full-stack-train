// src/App.jsx

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './home/Home';

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default App;
