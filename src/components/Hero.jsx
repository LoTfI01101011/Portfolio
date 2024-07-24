import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[81vh] bg'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between p-4'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
                <h1 className='text-6xl font-thin'>Lotfi Kaddari</h1>
                <h1 className='bg-gradient-to-r from-blue-300 to-purple-900 bg-clip-text text-transparent text-2xl font-serif mt-4'>Back End Developer</h1>
                <p className='mt-4 text-lg'>
                    Passionate about building scalable and efficient backend systems while tackling complex technical challenges with innovative solutions. Proficient in integrating front-end technologies to develop functional and user-friendly applications, ensuring a seamless experience across all devices. Dedicated to optimizing performance and enhancing application functionality through careful analysis and practical problem-solving. Continuously learning and adapting to new technologies to deliver robust and future-proof solutions that meet both business needs and user expectations.
                </p>
            </div>
            <div className='md:w-1/2'>
                <img src="images/lotfi.png" alt="Lotfi Kaddari" className="w-full h-auto" />
            </div>
        </div>
    </div>
    )
}

export default Hero