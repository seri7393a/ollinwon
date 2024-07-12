import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='mt-[-4rem] bg-black pb-[3rem] '>
      <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-col-2 gap-[2rem]'>
          <div>
            <p className='heading__mini'>Get To Know Us</p>
            <h1 className='heading__primary'>Ollinwon specializes in creating customized, <br />responsive web designs and e-commerce solutions, <br />backed by ongoing support, to transform and <br />elevate your <span className='text-yellow-600 '> online business presence </span> </h1>

              <p data-aos='fade-left' data-aos-anchor-placement='top-center' className='text-[15px] mt-[1.3rem] text-white opacity-75'>
              Ollinwon excels in designing bespoke digital experiences, blending creative innovation with technical expertise to produce <br />cutting-edge web solutions that not only meet but surpass business expectations and drive tangible results.
              </p>

              <div className='mt-[2rem] space-y-3 '>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='200' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>Custom Web Design</p>
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='200' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>Responsive Design</p>
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>E-commerce Solutions</p>
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>Mobile App Development</p>
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>Web Designing And Development</p>
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>Degital Marketing</p>
                </div>
                <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='flex items-center space-x-4'>
                  <CheckIcon className='w-[2rem] h-[2rem] text-yellow-600'/> 
                  <p className='text-[20px] text-white'>Graphic Designing</p>
                </div>
              </div>
          </div>

              <div className='lg:ml-auto' >
                <div className='grid grid-cols-2 sm:grid-cols-2 items-center gap-[2rem]'>
                  <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>50+</p>
                    <p className='text-[20px] text-black  font-600'>Master Plans</p>
                  </div>

                  <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>10+</p>
                    <p className='text-[20px] text-black  font-600'>Staffs</p>
                  </div>

                  <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>10+</p>
                    <p className='text-[20px] text-black  font-600'>Well prepared ideas</p>
                  </div>

                  <div data-aos='zoom-in' data-aos-anchor-placement='top-center' className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>2</p>
                    <p className='text-[20px] text-black  font-600'>Partners</p>
                  </div>

                </div>
              </div>
      </div>
    </div>
  )
}

export default AboutMe
