import React from 'react'
import { styles } from "../styles";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className='pt-20 pb-40 flex flex-row justify-center'>
        <img src={logo} className='w-7 h-7 mr-3 bg-white rounded-2xl'/>
        <p className={`${styles.sectionSubText} text-center`}>
          DiTa Limousine Limited
        </p>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}>
          Designed by ...
        </p>
    </div>  
  )
}

export default Footer