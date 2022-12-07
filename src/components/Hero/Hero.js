import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import TechStack from '../TechStack/TechStack';
import './Hero.css';
import profile from './profile.png';

const Hero = () => {
    const downloadResume = () => {
        fetch('md-anik-ahammed-khan-resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'md-anik-ahammed-khan-resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <div id='home' className='flex p-5 md:p-28 justify-center items-center flex-col-reverse md:flex-row lg:flex-row'>
                <div className='flex-initial md:w-1/2'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl py-2 font-color'>Hi👋,</h1>
                    <h1 className='text-2xl md:text-4xl lg:text-4xl py-2 font-color'>My Name is</h1>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl py-2 font-semibold text-gardient'>Md Anik Ahammed Khan</h1>
                    <p className='md:text-lg lg:text-2xl py-2 font-color'>I'm a web developer based in Dhaka, Bangladesh specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <button onClick={downloadResume} className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-2 px-8 rounded-full mr-2'>Download Resume</button>
                    </div>
                </div>
                <div className='flex-initial md:w-1/2'>
                    <img className='w-3/4 md:w-4/5 lg:w-3/4 mx-auto rounded-full border-[#243c5a]' src={profile} alt="" />
                </div>
            </div>
            <TechStack></TechStack>
            <Projects></Projects>
            <About></About>
        </div>
    );
};

export default Hero;