import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { CarCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { logo, menu, close, wtsicon, wechaticon, phone, car07 } from '../assets'

const Booking = () => {

  return (
    <div
      className={`h-auto lg:h-[550px] ml-5 mr-5 xl:mt-12 flex lg:flex-row flex-col-reverse gap-10`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Booking</h3>

        
        <div className='flex flex-row bg-gray-600 py-4 px-6 rounded-lg outline-none border-none font-medium mt-8'>

          <button className="hover:scale-110">
            <img src = {phone} 
            alt="logo" 
            className='w-12 h-12 object-contain p-2.5 bg-white rounded-2xl'/>
          </button>

          <div className='ml-5'>
            <p className={styles.sectionSubText}>Phone</p>
            <h3 className='text-white font-bold text-[24px]'>+852 5208 1611</h3>
          </div>

        </div>

        <div className='flex flex-row bg-gray-600 py-4 px-6 text-white rounded-lg outline-none border-none font-medium mt-5'>
          <button className="hover:scale-110">
            <img src = {wtsicon} 
            alt="logo" 
            className='w-12 h-12 object-contain p-1 bg-white rounded-2xl'/>
          </button>

          <div className='ml-5'>
            <p className={styles.sectionSubText}>WhatsApp</p>
            <h3 className='text-white font-bold text-[24px]'>+852 5208 1611</h3>
          </div>

        </div>

        <div className='flex flex-row bg-gray-600 py-4 px-6 text-white rounded-lg outline-none border-none font-medium mt-5'>
          <button className="hover:scale-110">
            <img src = {wechaticon} 
            alt="logo" 
            className='w-12 h-12 object-contain p-1.5 bg-white rounded-2xl'/>
          </button>

          <div className='ml-5'>
            <p className={styles.sectionSubText}>WeChat</p>
            <h3 className='text-white font-bold text-[24px]'>+853 6683 9769</h3>
          </div>

        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='lg:flex-1 lg:h-auto h-[350px] overflow-hidden rounded-3xl bg-gray-500 object-contain'
      >
        {/* <CarCanvas /> */}
        <img src = {car07} className=""/>

      </motion.div>

    </div>
  );
};

export default SectionWrapper(Booking, "booking");
