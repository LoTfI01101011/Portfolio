import React from 'react'
import { motion } from 'framer-motion'
const About = () => {

    return (
        <div className='text-center  border-b border-neutral-800 mt-36 lg:mt-8'>
            <h2 className='mb-10 md:text-5xl md:mb-20 text-4xl'>About
                <span className='text-neutral-500 m-4'>Me</span>
            </h2>
            <div className='grid md:grid-cols-2'>
                <motion.div className='mx-4 my-6' whileInView={{x:0 , opacity: 1}} initial={{x:-100 , opacity:0}} transition={{duration:0.5, delay:1 }}>
                    <img src="images/colleagues-discussing-work-project.jpg" alt="team" />
                </motion.div>
                <motion.div className='mx-20 my-6 max-w-xl' whileInView={{x:0 , opacity: 1}} initial={{x:100 , opacity:0}} transition={{duration:0.5, delay:1 }} >
                    <p className='text-left  text-sm md:text-lg '>
                        My name is Kaddari Lotfi Tadj Eddine, and I am from Setif, Algeria. I hold a bachelor's degree in Computer Science with a focus on web development. I specialize in backend development, particularly with REST APIs, Node.js, and Laravel, and have expertise in both SQL and NoSQL databases as well as networking (CCNA). While my primary strength lies in backend development, I am also proficient in frontend development, especially with React. My professional goals include becoming an expert in backend development, diving into DevOps, and pursuing a career as a web application penetration tester.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About