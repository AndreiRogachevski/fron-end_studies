import React from 'react';
import Products from './components/products';
import Product from './components/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Cart />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
