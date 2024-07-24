import React from 'react'

const About = () => {
  return (
    <div className='text-center text-3xl border-b border-neutral-800 py-12'>
        <h2 className='text-5xl mb-8'>
            About 
            <span className='text-neutral-500 mx-4'>Me</span>
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
            <div className='w-full md:w-1/2'>
                <img src="images/colleagues-discussing-work-project.jpg" alt="team" className="w-full h-auto object-cover" />
            </div>
            <div className='w-full md:w-1/2 max-w-xl'>
                <p className='text-left text-lg'>
                    My name is Kaddari Lotfi Tadj Eddine, and I am from Setif, Algeria. I hold a bachelor's degree in Computer Science with a focus on web development. I specialize in backend development, particularly with REST APIs, Node.js, and Laravel, and have expertise in both SQL and NoSQL databases as well as security (CCNA). While my primary strength lies in backend development, I am also proficient in frontend development, especially with React. My professional goals include becoming an expert in backend development, diving into DevOps, and pursuing a career as a web application penetration tester.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About