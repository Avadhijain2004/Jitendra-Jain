import React from 'react'
import aboutImg from '../assets/profile-pic.jpg'
import { motion } from "framer-motion"

function About() {
    return (
        <div className='pb-4'>
            <h1 className='my-10 text-center text-5xl'>About <span className='text-neutral-500'>Us</span></h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-2/5 lg:pl-20 lg:pr-0 pl-6 pr-6'>
                    <div className='flex items-center justify-start'>
                        <img 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1}}
                        className='h-auto max-h-full w-auto max-w-full lg:h-[600px] lg:w-auto border-sky-100 border' src={aboutImg} alt="About Image" />
                    </div>
                </div>
                <div className='w-full lg:w-3/5 lg:pr-20'>
                    <div className='flex justify-center lg:justify-end'>
                        <p 
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1}}
                        className='lg:pl-16 lg:pt-0 pt-16
                        pl-2 font-light tracking-tighter text-base'>I am a dedicated and passionate Computer Science student and a Front-end Developer with a robust foundation in software development and web technologies. Throughout my academic journey, I have honed my skills in a variety of programming languages and frameworks, including C, C++, Python, HTML, CSS, JavaScript, and ReactJS.
                        <br /><br />
                        My experiences have equipped me with the technical proficiency and problem-solving capabilities necessary to tackle complex coding challenges. I have a strong understanding of front-end development principles and a keen eye for creating intuitive and responsive user interfaces.
                        <br /><br />
                        In addition to my technical expertise, I possess excellent collaboration and communication skills, making me an effective team player in a dynamic development environment. I am eager to contribute my knowledge and skills to innovative projects and work alongside seasoned professionals to drive technological advancements.
                        <br /><br />
                        I am actively seeking opportunities that will allow me to leverage my skills and expand my horizons within a forward-thinking team. My goal is to contribute to impactful projects, continue learning and growing as a developer, and ultimately, play a key role in delivering high-quality software solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
