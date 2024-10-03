import React from 'react'
import HeroSection from './Hero_section/HeroSection'
import Product from '../Product/Product'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import About from '../About/About'
import FAQ from '../FAQ/FAQ'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Product />
             <FAQ />
            <Footer />
        </>
    )
}

export default Home