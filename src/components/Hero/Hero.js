import React from 'react';
import './Hero.css';
import profie from './profile.png';
const Hero = () => {
    return (
        <div className='flex p-5 md:p-28 justify-center items-center flex-col-reverse md:flex-row lg:flex-row'>
            <div className='flex-initial md:w-1/2'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl py-2'>Hi👋,</h1>
                <h1 className='text-2xl md:text-4xl lg:text-4xl py-2'>My Name is</h1>
                <h1 className='text-2xl md:text-4xl lg:text-5xl py-2 font-semibold text-gardient'>Md Anik Ahammed Khan</h1>
                <p className='md:text-lg lg:text-2xl py-2'>I'm a web developer based in Dhaka, Bangladesh specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>

            </div>
            <div className='flex-initial md:w-1/2'>
                <img className='w-3/4 md:w-4/5 lg:w-3/4 mx-auto rounded-full border-[#243c5a]' src={profie} alt="" />
            </div>
        </div>
    );
};

export default Hero;