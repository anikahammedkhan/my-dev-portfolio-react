import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-base-100 shadow-lg rounded-md justify-between">
                <div className="navbar-start">
                    <img src={Logo} alt="" className='w-full md:w-1/2 lg:w-[200px]' />
                </div>
                <div className="hidden md:hidden lg:block flex-none">
                    <div className="navbar-item">
                        <Link to="/home" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">About</Link>
                        <Link to="/techState" className="btn btn-ghost btn-sm rounded-btn">TechStack</Link>
                        <Link to="/projects" className="btn btn-ghost btn-sm rounded-btn">Projects</Link>
                        <Link to="/contact" className="btn btn-ghost btn-sm rounded-btn">Contact</Link>
                        <Link to="https://github.com/anikahammedkhan" target="_blank" rel='noopener noreferrer' className="btn btn-ghost btn-sm rounded-btn text-xl"><FaGithub></FaGithub></Link>
                        <Link to="https://www.linkedin.com/in/anikahammedkhan/" className="btn btn-ghost btn-sm rounded-btn text-xl" target="_blank" rel='noopener noreferrer'><FaLinkedin></FaLinkedin></Link>
                        <Link to="https://www.facebook.com/anikahammedkhan.99" className="btn btn-ghost btn-sm rounded-btn text-xl" target="_blank" rel='noopener noreferrer'><FaFacebook></FaFacebook></Link>

                    </div>
                </div>
                <div className="flex-none block md:block lg:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/techState">TechStack</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="https://github.com/anikahammedkhan" target="_blank" rel='noopener noreferrer'><FaGithub></FaGithub></Link></li>
                            <li><Link to="https://www.linkedin.com/in/anikahammedkhan/" target="_blank" rel='noopener noreferrer'><FaLinkedin></FaLinkedin></Link></li>
                            <li><Link to="https://www.facebook.com/anikahammedkhan.99" target="_blank" rel='noopener noreferrer'><FaFacebook></FaFacebook></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;