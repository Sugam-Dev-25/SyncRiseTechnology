import React from 'react'
import TopHeader from '../../Layouts/TopHeader'
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import BottomFooter from '../../Layouts/BottomFooter'
import AboutBanner from './AboutBanner'
import WhoWeAre from './WhoWeAre'

const About = () => {
  return (
    <>
    <TopHeader/>
    <Header/>
    <AboutBanner/>
    <WhoWeAre/>
    <Footer/>
    <BottomFooter/>
    </>
  )
}

export default About