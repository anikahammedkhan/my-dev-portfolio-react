import React from "react";
import Lottie from "lottie-react";
import { GiOfficeChair } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { BsCalendar3 } from "react-icons/bs";
import hello from "../Lottie/31548-robot-says-hello.json";
import "aos/dist/aos.css";
import Aos from "aos";
import react from "../../Assets/icons/react.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

Aos.init({ duration: 2000 });

const About = () => {
  const Hello = hello;

  const dataArray = [
    { id: 1, text: "React Js", imageUrl: react, value: 75 },
    { id: 2, text: "Next Js", imageUrl: "image1.jpg", value: 75 },
    { id: 3, text: "React Native", imageUrl: "image1.jpg", value: 75 },
    { id: 4, text: "JavaScript", imageUrl: "image1.jpg", value: 75 },
    { id: 5, text: "TypeScript", imageUrl: "image1.jpg", value: 75 },
    { id: 6, text: "Redux", imageUrl: "image1.jpg", value: 75 },
    { id: 7, text: "Node Js", imageUrl: "image1.jpg", value: 75 },
    { id: 8, text: "AWS", imageUrl: "image1.jpg", value: 75 },
    { id: 9, text: "Docker", imageUrl: "image1.jpg", value: 75 },
    { id: 10, text: "Express Js", imageUrl: "image1.jpg", value: 75 },
    { id: 11, text: "Mongodb", imageUrl: "image1.jpg", value: 75 },
    { id: 12, text: "PostgreSQl", imageUrl: "image1.jpg", value: 75 },
    { id: 13, text: "GraphQL", imageUrl: "image1.jpg", value: 75 },
    { id: 14, text: "Prisma", imageUrl: "image1.jpg", value: 75 },
    { id: 15, text: "Jest", imageUrl: "image1.jpg", value: 75 },
    { id: 16, text: "SQL", imageUrl: "image1.jpg", value: 75 },
    { id: 17, text: "Firebase", imageUrl: "image1.jpg", value: 75 },
    { id: 18, text: "Sass", imageUrl: "image1.jpg", value: 75 },
  ];

  const config = {
    percent: 55,
    colorSlice: "#CDDC39",
    colorCircle: "#f1f1f1",
    fontWeight: 100,
    fontSize: "1rem",
    textPosition: "1.5em",
  };

  return (
    <div className="px-10">
      <div className="lg:flex md:block block mx-8 my-4">
        <div
          className="lg:w-1/2 md:w-2/3 py-6 md:mx-auto"
          data-aos="fade-right"
        >
          <Lottie animationData={Hello} loop={true} autoplay={true} />
        </div>
        <div className="lg:w-1/2 md:w-full my-auto" data-aos="fade-left">
          <div>
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4">
              I'm a Frontend Developer at BlackRock IT Solutions with 2 years of
              experience in MERN stack. I'm passionate about learning and
              updating my skills to create high-quality web applications. I
              value collaboration, problem-solving, and thrive in agile,
              team-oriented environments. Besides my technical skills, I'm
              pursuing a Bachelor's degree in Mathematics at the University of
              Dhaka, blending logical thinking with web development to create
              innovative solutions. I'm open to new opportunities and
              challenges, ready to connect if you need a creative, dedicated,
              problem-solving Frontend Developer. Let's explore exciting
              projects in web development. Wish me good luck 😃
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-4xl font-bold">Work Experience</h1>
            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-lg font-bold">Front-End Developer</h1>
                <small className="md:flex text-sm">
                  <p className="flex justify-items-center items-center mr-3">
                    <GiOfficeChair></GiOfficeChair>BlackRock IT Solutions
                  </p>
                  <p className="flex justify-items-center items-center">
                    <GrLocation></GrLocation>Arizona, USA
                  </p>
                </small>
              </div>
              <d iv className="w-[200px]">
                <span className="badge badge-success my-1">Full-Time</span>
                <p className="flex justify-items-center items-center gap-2">
                  <BsCalendar3 />
                  <span>Jan 2023 - Present</span>
                </p>
              </d>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-lg font-bold">Front-End Developer</h1>
                <small className="md:flex text-sm">
                  <p className="flex justify-items-center items-center mr-3">
                    <GiOfficeChair></GiOfficeChair>Fiverr
                  </p>
                  <p className="flex justify-items-center items-center">
                    <GrLocation></GrLocation>Dhaka,Bangladesh
                  </p>
                </small>
              </div>
              <div className="w-[200px]">
                <span className="badge badge-success my-1">Freelance</span>
                <p className="flex justify-items-center items-center gap-2">
                  <BsCalendar3 />
                  <span>Jan 2017 - Present</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-lg font-bold">Open Source Contributor</h1>
                <small className="md:flex text-sm">
                  <p className="flex justify-items-center items-center mr-3">
                    <GiOfficeChair></GiOfficeChair>GitHub Open Source Projects
                  </p>
                  <p className="flex justify-items-center items-center">
                    <GrLocation></GrLocation>Dhaka,Bangladesh
                  </p>
                </small>
              </div>
              <div className="w-[200px]">
                <span className="badge badge-success my-1">Freelance</span>
                <p className="flex justify-items-center items-center gap-2">
                  <BsCalendar3 /> <span>April 2021 - Present</span>
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="mt-12">
            <h1 className="text-4xl font-bold">Education</h1>
            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-lg font-bold">B.Sc in Mathematics</h1>
                <small className="md:flex text-sm">
                  <p className="flex justify-items-center items-center mr-3">
                    <GiOfficeChair />
                    University of Dhaka
                  </p>
                  <p className="flex justify-items-center items-center">
                    <GrLocation />
                    Dhaka,Bangladesh
                  </p>
                </small>
              </div>
              <div>
                <span className="badge badge-success">Full Time</span>
                <p className="flex justify-items-center items-center">
                  <BsCalendar3></BsCalendar3>Jun 2017 - Dec 2022
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center" data-aos="fade-right">
          Skills
        </h1>
        <div className="flex">
          <div className="my-5 w-1/2 grid grid-cols-3">
            {dataArray.map((item, index) => (
              <div
                className=""
                key={index}
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbar
                  animationSmooth={`500ms ease-out`}
                  value={item.value}
                  text={`${item.value}%`}
                  styles={buildStyles({
                    pathColor: config.colorSlice,
                    trailColor: config.colorCircle,
                    textColor: config.colorSlice,
                    fontWeight: config.fontWeight,
                    textSize: config.fontSize,
                  })}
                />
                <div className="relative flex flex-col justify-center items-center bottom-[70%]">
                  <img
                    src={item.imageUrl}
                    alt={item.text}
                    style={{
                      width: "70px",
                      backgroundColor: "#fff",
                      height: "70px",
                      borderRadius: "50%",
                      padding: "2px",
                      border: `3px solid ${config.colorSlice}`,
                    }}
                  />
                  <p className="font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <h3>My Working Strategy:</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
