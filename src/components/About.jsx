import React from "react"
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from '../hoc'

const ServiceCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
  <motion.div variants={fadeIn("up","spring",index*0.5, 0.75)}>

    <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full shadow-card"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className='mt-5 flex justify-center'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
      </div>

      <div className='mt-4 flex justify-center flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>

    </Tilt>

  </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Story</p>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service}/>
        ))}
      </div>

    </>
  )
} 

export default SectionWrapper(About, "about") 