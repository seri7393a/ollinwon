import ProjectCard from "@/Helper/ProjectCard";
import React from "react";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Our plans</p>
        <h1 className="heading_primary text-white">
          We Will Make Our{" "}
          <span className="text-yellow-600">Plans Very Well </span>{" "}
        </h1>
      </div>
      <ProjectCard 
        title="Custom Web Design"
        description="We understand that every business is different, which is why we take a custom approach to web design. Our talented designers work closely with you to create sleek, user-friendly interfaces that reflect your brand identity and resonate with your target audience."
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind CSS"
        tech4="JavaScript"
        image="/images/p1.png"
      />
      <ProjectCard
        title="Responsive Design"
        description="In today's digital landscape, having a responsive website is non-negotiable. Our websites are meticulously designed to adapt seamlessly to all screen sizes and devices, ensuring an optimal user experience no matter how your audience accesses your site."
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind CSS"
        tech4="JavaScript"
        image="/images/p2.png"
      />
      <ProjectCard
        title="E-commerce Solutions"
        description="Looking to take your business online? We specialize in developing powerful e-commerce solutions that streamline the buying process and drive conversions. From inventory management to secure payment gateways, we handle every aspect of your online store's development."
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind CSS"
        tech4="JavaScript"
        image="/images/p3.png"
      />
      <ProjectCard
        title="Ongoing Support and Maintenance"
        description="Your website is an extension of your brand, and we take pride in ensuring it stays up-to-date and bug-free. From regular updates and security patches to custom feature development, we're here to support you every step of the way."
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind CSS"
        tech4="JavaScript"
        image="/images/p4.png"
      />
    </div>
  );
};

export default Project;
