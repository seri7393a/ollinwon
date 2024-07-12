import {
    BugAntIcon,
    CodeBracketIcon,
    CommandLineIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    RocketLaunchIcon,
    ServerIcon,
  } from "@heroicons/react/16/solid";
  import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
  import React from "react";
  
  interface Props {
    title: string;
    para : string;
    num: string;
  }
  
  const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": DevicePhoneMobileIcon,
    "07": CodeBracketSquareIcon,
  };
  
    const ServiceCard = ({ num, para, title }: Props) => {
    
        const IconComponent = (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;
    
      return (
        <div style={{cursor:'pointer'}} className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md relative flex flex-col h-[100%] w-[100%] items-center justify-center font-semibold overflow-hidden text-white shadow-2xl transition-all hover:bg-[#323232]">
            <IconComponent className='w-[2rem] relative z-[1] mx-auto h-[2rem] text-yellow-600'/>
            <h1 className="text-[25px] relative z-[1] text-white mt-[1rem">{title}</h1>
            <p className="text-white text-[15px] opacity-60 mt-[0.5rem]">{para}</p>
            <p className="text-white text-[1.6rem] font-bold absolute top-3 right-4">{num}</p>
          </div>
          
      )
    };
    
    export default ServiceCard;
    