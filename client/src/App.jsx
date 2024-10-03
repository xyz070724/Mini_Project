import React from 'react'

import { Routes, Route, Router } from "react-router-dom";

// Pages
import Home from './Pages/Home/Home'
import Product_Description from './Pages/Product_Description/Product_Description';
import Check_Out from './Pages/Check Out/Check_Out';
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import { CartProvider } from './Pages/Cart/CartContext';
import Login from './auth/login';
import SignUp from './auth/SignUp';
import About from './Pages/About/About';
import FAQ from './Pages/FAQ/FAQ';
import Product from './Pages/Product/Product';
import Products from './Pages/Product/Products';
import FAQs from './Pages/FAQ/FAQs';


const App = () => {

  return (
    <>
      <CartProvider >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product_description" element={<Product_Description />} />
          <Route path='/product' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check_out" element={<Check_Out />} />
          <Route path="/payment" element={<Payment />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/faqs' element={<FAQs />} />

        </Routes>
      </CartProvider>
    </>
  )

}

export default App