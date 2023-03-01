import React from 'react'
import Navbar from '../components/Header'
import Product from '../components/Product'
import Footer from '../components/Footer'
import SingleProduct from '../components/SingleProduct'

import Newsletter from '../components/Newsletter'

function Single() {
    return (
          <>
          <Navbar/>
          <SingleProduct/>
          <Product/>
          <Newsletter/>
          <Footer/>
          </>
        
  
          
      
    )
  }
  
  export default Single