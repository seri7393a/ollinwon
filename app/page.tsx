"use client"
import AboutMe from '@/Components/AboutMe'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Nav from '@/Components/Nav'
import Project from '@/Components/Project'
import Service from '@/Components/Service'
import Skills from '@/Components/Skills'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomePage = () => {


    //animation setup
    useEffect(() => {
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom'
      });
    },[])


  return (
    <div className='overflow-hidden'>  
      <Nav />
      <Hero />
      <AboutMe />
      <Service />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
