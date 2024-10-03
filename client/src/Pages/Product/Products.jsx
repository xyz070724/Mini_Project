import React from 'react'
import Product_Card_Grid from './Product_Card/Product_Card_Grid'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Products = () => {
  return (
    <>
    <Navbar />
    <div className="product bg-[#C9E8D7]">
      <Product_Card_Grid />
    </div>
    <Footer />
    </>

  )
}

export default Products