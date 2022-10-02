import Lottie from "lottie-react";
import Hello from '../Lottie/hello.json';
import { GiOfficeChair } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { BsCalendar3 } from 'react-icons/bs';

const About = () => {
    return (
        <div className='flex'>
            <div className='w-1/2 py-6'>
                <Lottie animationData={Hello} />
            </div>
            <div className='w-1/2 my-auto'>
                <div>
                    <h1 className='text-4xl font-bold'>About Me</h1>
                    <p className='mt-4'>I am a Full Stack Web Developer. I am not from Computer Science background but I have extreme interest on Technology, Ai, Programming. Currently I am learning data structure and algorithm. I feel more interest in competitive programming, learning new things, explore new places. I good at JavaScript and Python. Trying to learn C++.
                        Wish me good luck 😃</p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-4xl font-bold'>Work Experience</h1>
                    <div className="flex justify-between my-3">
                        <div>
                            <h1 className='text-lg font-bold'>Web Developer</h1>
                            <small className="flex text-sm"><p className="flex justify-items-center items-center mr-3"><GiOfficeChair ></GiOfficeChair>Programming Hero</p>
                                <p className="flex justify-items-center items-center"><GrLocation></GrLocation>Dhaka,Bangladesh</p></small>
                        </div>
                        <div>
                            <span className="badge badge-success">Full Time</span>
                            <p className="flex justify-items-center items-center"><BsCalendar3></BsCalendar3>sep 2021 - march 2022</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between my-3">
                        <div>
                            <h1 className='text-lg font-bold'>Front-End Developer</h1>
                            <small className="flex text-sm"><p className="flex justify-items-center items-center mr-3"><GiOfficeChair ></GiOfficeChair>Programming Hero</p>
                                <p className="flex justify-items-center items-center"><GrLocation></GrLocation>Dhaka,Bangladesh</p></small>
                        </div>
                        <div>
                            <span className="badge badge-success">Full Time</span>
                            <p className="flex justify-items-center items-center"><BsCalendar3></BsCalendar3>sep 2021 - march 2022</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between my-3">
                        <div>
                            <h1 className='text-lg font-bold'>React.js Developer</h1>
                            <small className="flex text-sm"><p className="flex justify-items-center items-center mr-3"><GiOfficeChair ></GiOfficeChair>Programming Hero</p>
                                <p className="flex justify-items-center items-center"><GrLocation></GrLocation>Dhaka,Bangladesh</p></small>
                        </div>
                        <div>
                            <span className="badge badge-success">Full Time</span>
                            <p className="flex justify-items-center items-center"><BsCalendar3></BsCalendar3>sep 2021 - march 2022</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="mt-12">
                    <h1 className='text-4xl font-bold'>Education</h1>
                    <div className="flex justify-between my-3">
                        <div>
                            <h1 className='text-lg font-bold'>B.Sc in Mathematices</h1>
                            <small className="flex text-sm"><p className="flex justify-items-center items-center mr-3"><GiOfficeChair ></GiOfficeChair>University of Dhaka</p>
                                <p className="flex justify-items-center items-center"><GrLocation></GrLocation>Dhaka,Bangladesh</p></small>
                        </div>
                        <div>
                            <span className="badge badge-success">Full Time</span>
                            <p className="flex justify-items-center items-center"><BsCalendar3></BsCalendar3>Jun 2017 - Dec 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;