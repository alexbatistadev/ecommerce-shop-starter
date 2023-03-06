import React from 'react';
//import images
import WomanImg from '../img/woman_hero.png';
//import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[3px] bg-purple-500 mr-4"></div>New Trand
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold text-purple-500">WOMENS</span>
          </h1>
          <Link
            to={'/'}
            className="self-start uppercase font-semibold border-b-2 border-primary cursor-pointer hover:text-purple-500 hover:border-purple-500"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
