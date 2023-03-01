import React from 'react'
import Navbar from '../components/Header'
import Hero from '../components/Hero'
import Feature from "../components/Feature"
import Product from '../components/Product'
import Banner from '../components/Banner'
import Products2 from '../components/Products2'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Feature/>
        <Product/>
        <Banner/>
        <Products2/>
        <Newsletter/>
        <Footer/>

    </div>
  )
}

export default Home