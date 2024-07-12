import Typewrittereffect from "@/Helper/Typewrittereffect";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[40vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custome-bg p-4 md:p-8">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <h1 data-aos='fade-right' className="text-black mb-[1.3rem]">
              TRANSFORMING IDEAS INTO REALITY
            </h1>
            <div data-aos='fade-right' data-aos-delay='400'>
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bold leading-[2.6rem] text-black">
                Ollinwon focus to have satisfied customers by providing{" "}
                <span className="text-yellow-700">
                  The best service that we can...
                </span>
              </h1>

              <Typewrittereffect />
            </div>

            <p data-aos='fade-up' data-aos-delay='800' className="mt-[1.2rem] text-[20px] text-yellow-700">Ollinwon specializes in crafting custom digital experiences that exceed business goals through a fusion of creative ingenuity and technical mastery.
            </p>

            <div data-aos='fade-left' data-aos-delay='200' className="hidden md:block">
                <Image src='/images/hero.png' alt="Hero" width={600} height={600} className="object-contain"style={{ marginLeft: '843px', marginTop: '-565px' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
