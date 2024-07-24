import React from 'react'
import { EXperience } from '../constants'
const Experience = () => {
    return (
        <div className='text-center text-3xl border-b border-neutral-900 mt-16'>
            <h2 className='mb-20 text-4xl'>Experience
            </h2>
            <div>
                {EXperience.map((experience, index) => (
                    <div key={index} className='grid md:grid-cols-3 border-b border-neutral-800'>
                        <div className='col-span-1 lg:border-r-2 border-neutral-800'>
                            <p className='mb-4 ml-8 md:ml-0 text-lg text-neutral-400'>{experience.Year}</p>
                        </div>
                        <div className="col-span-2 text-left ml-8">
                            <h6 className='font-semibold mb-2 text-2xl'>
                                {experience.Role} -{" "}
                                <span className='text-purple-100'>{experience.Company}</span>
                            </h6>
                            <p className='text-lg text-neutrla-400 mb-6'>{experience.Description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experience.Skills.map((skill, index) => (
                                    <div key={index} className="bg-neutral-800 rounded-xl mb-2 p-4 text-lg font-semibold text-purple-600">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience