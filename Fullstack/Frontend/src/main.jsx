import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
