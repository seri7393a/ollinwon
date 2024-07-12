"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typewrittereffect = () => {
  return (
    <div>
      <TypeAnimation
      sequence={[
        'IT Solution...',
        1000,
        'Mobile App Development...',
        1000,
        'Web Development...',
        1000,
        'Graphic Designing...',
        1000,
        'Degital Marketing...',
      ]}
      wrapper="span"
      speed={50}
      className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bold text-[#000000]'
      repeat={Infinity}
    />
    </div>
  )
}

export default Typewrittereffect
