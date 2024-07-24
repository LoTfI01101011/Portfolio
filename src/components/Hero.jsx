import React from 'react'

const Hero = () => {
    return (
        <div className='w-full py-16 px-4 border-b border-neutral-800'>
            <div className='max-w-[1240px] mt-[-40px] mb-96  w-full h-[81vh] mx-auto  grid grid-cols-1 md:grid-cols-2 md:mb-1'>
                <div className='mx-4 mb-12 p-4'>
                    <h1 className='font-thin text-6xl'>Lotfi Kaddari</h1>
                    <h1 className='bg-gradient-to-r from-blue-300 to-purple-900 bg-clip-text text-transparent text-2xl font-serif mt-16 '>Back End Developer</h1>
                    <p className='mt-4 font-serif text-sm md:text-lg '>
                        Passionate about building scalable and efficient backend systems while tackling complex technical challenges with innovative solutions. Proficient in integrating front-end technologies to develop functional and user-friendly applications, ensuring a seamless experience across all devices. Dedicated to optimizing performance and enhancing application functionality through careful analysis and practical problem-solving. Continuously learning and adapting to new technologies to deliver robust and future-proof solutions that meet both business needs and user expectations
                    </p>
                </div>
                <div className=' mt-12 md:mt-1 mb-12 p-4 '>
                    <img src="images/lotfi.png" alt="Lotfi Kaddari" />

                </div>

            </div>
        </div>
    )
}

export default Hero