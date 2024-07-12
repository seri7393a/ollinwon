import React from 'react'
import ServiceCard from '../Helper/ServiceCard'

const Service = () => {
  return (
    
    <div className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
      <div className='text-center'>
        <p className='heading__mini'>Popular Services</p>
        <h1 className='heading__primary'>Our Special <span className='text-yellow-600'> Services </span>For You And Your Business</h1>
      </div>
      <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[3rem] items-center'>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-delay='400'>
           <ServiceCard title='React WebSite' para='React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage the state of their applications efficiently. It enables the creation of dynamic, interactive web applications with high performance and maintainability.' num='01'/>
        </div>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-delay='400'>
           <ServiceCard title='NextJS WebSite' para='Next.js is a React framework that enables functionalities like server-side rendering and generating static websites, aiming to improve performance and SEO. It offers out-of-the-box features like file-based routing and API routes to simplify the development of web applications.' num='02'/>
        </div>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-delay='400'>
           <ServiceCard title='Full Stack WebSite' para='A full stack website involves both front-end and back-end development, encompassing user interface design, server-side scripting, database management, and network security. It delivers a complete web application, handling everything from user interactions to data storage and manipulation.' num='03'/>
        </div>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-delay='400'>
           <ServiceCard title='NodeJS Api' para='Node.js enables the building of scalable and efficient server-side applications using JavaScript. Its particularly well-suited for creating RESTful APIs that handle requests and responses between clients and servers.' num='04'/>
        </div>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-delay='400'>
           <ServiceCard title='MERN WebApp' para='A MERN web app utilizes MongoDB, Express.js, React, and Node.js to create a full-stack JavaScript application. It allows for building dynamic and scalable web applications with a seamless integration of front-end and back-end technologies.' num='05'/>
        </div>
        <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-delay='400'>
           <ServiceCard title='Responsive Designing' para='Responsive designing ensures that web pages adapt and display optimally across various devices and screen sizes, providing a consistent user experience. It utilizes flexible layouts and CSS media queries to adjust content and design elements dynamically.' num='06'/>
        </div>  
        
      </div>
    </div>
  )
}

export default Service
