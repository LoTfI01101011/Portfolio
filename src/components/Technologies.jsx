import React from 'react'
import { DiLaravel, DiMongodb, DiPostgresql, DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

const Technologies = () => {
    return (
        <div className='my-16 border-b border-neutral-800 text-center text-4xl'>
            <h1>Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-3xl my-14">
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <RiReactjsLine className='text-6xl text-sky-500'/>
                </div>
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <DiMongodb className='text-6xl text-green-500'/>
                </div>
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <DiPostgresql className='text-6xl text-blue-600'/>
                </div>
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <SiTypescript className='text-6xl text-blue-500' />
                </div>
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <DiLaravel className='text-6xl text-red-600' />
                </div>
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <FaNodeJs className='text-6xl text-green-500' />
                </div>
                <div className="border-neutral-900 border-4 rounded-2xl p-4 hover:border-neutral-600 transition duration-300 hover:shadow-neutral-500 shadow-lg ">
                    <DiRedis className='text-6xl text-red-700' />
                </div>
            </div>

        </div>
    )
}

export default Technologies