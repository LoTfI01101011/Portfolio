import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { PiXLogo } from 'react-icons/pi'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className='mb-14 flex items-center justify-between'>
        <div className='m-10 flex'>
          <h1 className='font-serif  text-3xl bg-gradient-to-r from-blue-300 to-purple-900 bg-clip-text text-transparent  text-[50px]'>LotfI</h1>
        </div>
        <div className='flex justify-between gap-4 m-10'>
          <a href="https://www.linkedin.com/in/lotfi-kaddari-060a612a6/?trk=opento_sprofile_details">
            <FaLinkedin size={30} className='hover:text-neutral-100 transition duration-300' />
          </a>
          <a href="https://github.com/LoTfI01101011">
          <FaGithub size={30} className='hover:text-neutral-100 transition duration-300'/>
          </a>
          <a href="https://x.com/KaddariL?t=JxdVnelH6rd6g3R-GRvrrw&s=09">
          <PiXLogo size={30} className='hover:text-neutral-100 transition duration-300'/>
          </a>
          <a href="https://www.instagram.com/lotfi_kadari/">
          <FaInstagram size={30} className='hover:text-neutral-100 transition duration-300'/>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar