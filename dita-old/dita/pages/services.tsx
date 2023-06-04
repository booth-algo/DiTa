import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from "date-fns";
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';

function services() {
  return (
    <div>
      <Header />

      <main>
      
      {/* <h1 className='px-10 pt-10 pb-10 text-4xl'>Services</h1> */}

      <div style={{padding: '50px'}} className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600 sm:h-72 h-52 block">
      <div className="text-white text-6xl font-extrabold"><br />Services</div>
      </div>

      <div style={{padding: '50px'}}></div>

      <section className='flex-grow pt-14 px-6'>
        <p className='text-xs'>300+ stays for 69 guests</p>
      
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in HK</h1>

        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
          <p className='button'>Cancellation Flexibility</p>
          <p className='button'>Type of Place</p>
          <p className='button'>Price</p>
          <p className='button'>Rooms and Beds</p>
          <p className='button'>More filters</p>
        </div>

        <div className='flex flex-col'>
          <InfoCard 
          
          
          
          />
        
        </div>

      </section>



      </main>
      
      <Footer />
      </div>
  )
}

export default services