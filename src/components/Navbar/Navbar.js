import React from 'react';
import './Navbar.css';
import Logo from '../../logo.png';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg rounded-md justify-between">
                <div className="navbar-start">
                    <img src={Logo} alt="" className='w-full md:w-1/2 lg:w-[200px]' />
                </div>
                <div className="hidden md:hidden lg:block flex-none">
                    <div className="navbar-item">
                        <a href="#home" className="btn btn-ghost btn-sm rounded-btn">Home</a>
                        <a href="#about" className="btn btn-ghost btn-sm rounded-btn">About</a>
                        <a href="#techState" className="btn btn-ghost btn-sm rounded-btn">TechStack</a>
                        <a href="#projects" className="btn btn-ghost btn-sm rounded-btn">Projects</a>
                        <a href="#contact" className="btn btn-ghost btn-sm rounded-btn">Contact</a>
                        <a href="https://github.com/anikahammedkhan" target="_blank" rel='noopener noreferrer' className="btn btn-ghost btn-sm rounded-btn text-xl"><FaGithub></FaGithub></a>
                        <a href="https://www.linkedin.com/in/anikahammedkhan/" className="btn btn-ghost btn-sm rounded-btn text-xl" target="_blank" rel='noopener noreferrer'><FaLinkedin></FaLinkedin></a>
                        <a href="https://www.facebook.com/anikahammedkhan.99" className="btn btn-ghost btn-sm rounded-btn text-xl" target="_blank" rel='noopener noreferrer'><FaFacebook></FaFacebook></a>

                    </div>
                </div>
                <div className="flex-none block md:block lg:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#techState">TechStack</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://github.com/anikahammedkhan" target="_blank" rel='noopener noreferrer'><FaGithub></FaGithub></a></li>
                            <li><a href="https://www.linkedin.com/in/anikahammedkhan/" target="_blank" rel='noopener noreferrer'><FaLinkedin></FaLinkedin></a></li>
                            <li><a href="https://www.facebook.com/anikahammedkhan.99" target="_blank" rel='noopener noreferrer'><FaFacebook></FaFacebook></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;