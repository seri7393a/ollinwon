import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
}

const ProjectCard = ({ image, description, tech1, tech2, tech3, tech4, title }: Props) => {
  return (
    <div className='grid w-full max-w-screen-xl mx-auto pt-10 grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
      <div className='p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md'>
        <Image src={image} alt={title} width={500} height={500} className='object-contain'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
      </div>
      <div>
        <h1 className='text-3xl lg:text-4xl text-white'>{title}</h1>
        <p className='text-white opacity-75 text-lg lg:text-xl mt-4' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">{description}</p>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4'>
        <h1 className='px-4 py-2 bg-blue-700 text-white rounded-lg text-center' data-aos="fade-down-left">{tech1}</h1>
        <h1 className='px-4 py-2 bg-white text-black rounded-lg text-center' data-aos="fade-up-right">{tech2}</h1>
        <h1 className='px-4 py-2 bg-sky-500 text-white rounded-lg text-center' data-aos="fade-down-right">{tech3}</h1>
        <h1 className='px-4 py-2 bg-blue-500 text-white rounded-lg text-center'  data-aos="fade-down-right">{tech4}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
