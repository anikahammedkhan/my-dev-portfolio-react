import React from 'react';
import Lottie from "lottie-react";
import { GiOfficeChair } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { BsCalendar3 } from 'react-icons/bs';
import hello from '../Lottie/31548-robot-says-hello.json';
import 'aos/dist/aos.css';
import Aos from 'aos';
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
Aos.init({ duration: 2000 });

const About = () => {
    const Hello = hello;
    return (
        <div>
            <div className='lg:flex md:block block mx-8 my-4'>
                <div className='lg:w-1/2 md:w-2/3 py-6 md:mx-auto' data-aos="fade-right">
                    <Lottie animationData={Hello} loop={true} autoplay={true} />
                </div>
                <div className='lg:w-1/2 md:w-full my-auto' data-aos="fade-left">
                    <div>
                        <h1 className='text-4xl font-bold'>About Me</h1>
                        <p className='mt-4'>I am a Front-End Web Developer. I am not from Computer Science background but I have extreme interest on Technology, Ai, Programming. Currently I am learning data structure and algorithm. I feel more interest in competitive programming, learning new things, explore new places. I good at ReactJs ,NextJs . I know basic Python and C . Trying to learn C++.
                            Wish me good luck 😃</p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-4xl font-bold'>Work Experience</h1>
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className='text-lg font-bold'>Front-End Developer</h1>
                                <small className="md:flex text-sm"><p className="flex justify-items-center items-center mr-3"><GiOfficeChair ></GiOfficeChair>Fiverr</p>
                                    <p className="flex justify-items-center items-center"><GrLocation></GrLocation>Dhaka,Bangladesh</p></small>
                            </div>
                            <div>
                                <span className="badge badge-success">Freelance</span>
                                <p className="flex justify-items-center items-center"><BsCalendar3></BsCalendar3>Jan 2017 - Present</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="mt-12">
                        <h1 className='text-4xl font-bold'>Education</h1>
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className='text-lg font-bold'>B.Sc in Mathematices</h1>
                                <small className="md:flex text-sm"><p className="flex justify-items-center items-center mr-3"><GiOfficeChair ></GiOfficeChair>University of Dhaka</p>
                                    <p className="flex justify-items-center items-center"><GrLocation></GrLocation>Dhaka,Bangladesh</p></small>
                            </div>
                            <div>
                                <span className="badge badge-success">Full Time</span>
                                <p className="flex justify-items-center items-center"><BsCalendar3></BsCalendar3>Jun 2017 - Dec 2022</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-center' data-aos="fade-right">Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-10 py-10'>
                    <div>
                        <h1 className='text-lg font-bold'>Html</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={95}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>CSS</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={92}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>JavaScript</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={80}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Tailwind CSS</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={92}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Bootstrap</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={90}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>React Js</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={90}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Node Js</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={30}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>NextJs</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={80}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Firebase</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={50}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>MongoDB</h1>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={50}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            repeat
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${value / 100})`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7"
                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;