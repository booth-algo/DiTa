import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { parsePath } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className="backdrop-blur-sm rounded-3xl p-5">
          <h1 className={`${styles.heroHeadText}`}>DiTa</h1>
          <p className={`${styles.heroSubText} mt-2 text-[#915eff] underline decoration-sky-500/30`}> The Best Limousine Service <br/>in Hong Kong and Macau</p>
        </div>
      </div>
    
      {/* <ComputersCanvas /> */} 
      {/* Uncomment above to reveal the 3D model */}

    </section>
    
  )
}

export default Hero