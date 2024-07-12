import SkillsCard from "@/Helper/SkillsCard";
import React from "react";

const Skills = () => {
  return (
    <div className="pt-10 lg:pt-20 pb-8 lg:pb-12 bg-black">
  <div className="grid w-full max-w-screen-xl mx-auto grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-12 items-center">
    <div className="col-span-3">
      <p className="text-sm lg:text-base leading-none text-white opacity-70">what We Do</p>
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
        Lets explore
        <span className="text-yellow-600">Whats popular</span>
      </h1>
      <p className="text-sm lg:text-base mt-4 lg:mt-6 text-white opacity-70">
        At Ollinwon, we specialize in crafting exceptional digital experiences tailored to meet your unique business needs. Our dedicated team of experts merges creativity with technical prowess to deliver cutting-edge web solutions that drive results and exceed expectations.
      </p>
    </div>
    <div className="col-span-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6 items-center">
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="React" image="/images/react.svg" percent="100%" />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="CSS" image="/images/css.svg" percent="100%" />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="JavaScript" image="/images/js.svg" percent="90%" />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="Typescript" image="/images/ts.svg" percent="67%" />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="Node JS" image="/images/node.svg" percent="60%" />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="MongoDB" image="/images/mongo.svg" percent="67%" />
        </div>
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="Tailwind" image="/images/tailwind.svg" percent="90%" />
        </div>    
        <div data-aos="flip-left" data-aos-anchor-placement='top-center' data-delay='400'>
          <SkillsCard title="HTML" image="/images/html.svg" percent="90%" />
        </div>
      </div>
    </div>
  </div>
</div>
  
  );
};

export default Skills;
