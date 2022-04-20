import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import Hero from '../Layout/Hero/Hero'
import Ads from '../Layout/Ads/Ads'
import About from '../Layout/About/About'
import Recomendation from '../Layout/Recomendation/Recomendation'
import Banner from '../Layout/Banner/Banner'
import Categories from '../Layout/Categories/Categories'
import Comments from '../Layout/Comments/Comments'
import Vacans from '../Layout/Vacans/Vacans'
import ContactUs from '../Layout/ContactUs/ContactUs'

const Home = () => {
  return (
    <>
      <Header/>
        <Hero/>
        <About/>
        <Recomendation/>
        <Ads/>
        <Banner/>
        <Categories/>
        <Comments/>
        <Vacans/>
        <ContactUs/>
      <Footer/>
    </>
  )
}

export default Home