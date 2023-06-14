import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Module/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from './Module/Product/Product';
import Products from './Module/Products/Products';



function App() {
 
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route  path='/products' element={<Products/>}/>

      </Routes >
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App