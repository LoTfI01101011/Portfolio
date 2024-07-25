import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
    const container = (delay, position) => ({
        hidden: { x: position, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    })
    return (
        <div className='w-full py-16 px-4 border-b border-neutral-800'>
            <div className='max-w-[1240px] mt-[-40px] mb-96  w-full md:h-[81vh] mx-auto  grid grid-cols-1 md:grid-cols-2 md:mb-1'>
                <div className='mx-4 mb-12 p-4'>
                    <motion.h1 variants={container(0.5, -100)} initial="hidden" animate="visible" className='font-thin text-6xl'>Lotfi Kaddari</motion.h1>
                    <motion.h1 variants={container(1, -100)} initial="hidden" animate="visible" className='bg-gradient-to-r from-blue-300 to-purple-900 bg-clip-text text-transparent text-2xl font-serif mt-16 '>Back End Developer</motion.h1>
                    <motion.p variants={container(1.5, -100)} initial="hidden" animate="visible" className='mt-4 font-serif text-sm md:text-lg '>
                        Passionate about building scalable and efficient backend systems while tackling complex technical challenges with innovative solutions. Proficient in integrating front-end technologies to develop functional and user-friendly applications, ensuring a seamless experience across all devices. Dedicated to optimizing performance and enhancing application functionality through careful analysis and practical problem-solving. Continuously learning and adapting to new technologies to deliver robust and future-proof solutions that meet both business needs and user expectations
                    </motion.p>
                </div>
                <div className=' mt-12 md:mt-1 mb-12 p-4 '>
                    <motion.img variants={container(2,100)} initial="hidden" animate="visible"   src="images/lotfi.png" alt="Lotfi Kaddari" />

                </div>

            </div>
        </div>
    )
}

export default Hero