import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import { EXperience } from './constants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>
      <div className='fixed w-full h-full -z-10'>
        <div className="absolute  top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-fixed" > </div>
      </div>
        <div className='mx-auto p-8'>
          <Navbar />
          <Hero />
          <div className='m-12 w-40 h-0 md:h-0'></div>
          <About />
          <Technologies />
          <Experience/>
        </div>
    </div>
  )
}

export default App
