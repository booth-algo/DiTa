import React from 'react'
import BookingMap from '../components/BookingMap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, TranslateIcon, MoonIcon, MailIcon, PhoneIcon, ChatIcon, DeviceMobileIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Calendar } from 'react-date-range';
import router, { useRouter } from "next/dist/client/router";
import { useState } from "react";

function booking({ placeholder }) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {

  setStartDate(ranges.selection.startDate);
   setEndDate(ranges.selection.endDate);

  const selectionRange = {
      startDate: startDate, 
      endDate: endDate, 
      key: 'selection'
  };

};

  return (
    <div>
      <Header />
      <h1 className='px-10 pt-10 pb-10 text-4xl'>Booking</h1>

      <main className='antialiased bg-gray-100'> 


        <div className='flex w-full min-h-screen justify-center items-center'>

          {/* Main cyan frame */}
          <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0
          space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white
          overflow-hidden
          sm:p-12'>

            <div className='flex flex-col space-y-8 justify-between'>

              <div className='font-bold text-4xl tracking-wide'>
                <h1 className='uppercase'>Book now</h1>
                <p className='pt-2 text-cyan-100 text-sm'>lol heres a paragraph dsfgsdfghbjksdhfbgsdfdfjkddfdffg</p>
              </div>

              <div>
                <div className='inline-flex space-x-2 items-center 
                hidden'>

                  <BookingMap />
                  

                </div>
              </div>


            </div>
            
            <div className='relative'>

              <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'></div>
              <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16'></div>


              <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 
              relative z-10
              md:w-80'>

                <form action="" className='flex flex-col space-y-4'>
                  <div>
                    <label htmlFor="" className='text-sm'>Your name</label>    
                    <input type="text" placeholder='Kimi no nawa' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>
      

                  <div>
                    <label htmlFor="" className='text-sm'>Phone (WeChat)</label>
                    <input type="text" placeholder='Phone number' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>

                  <div>
                    <label htmlFor="" className='text-sm'>Departure</label>
                    <input type="text" placeholder='Phone number' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>

                  <div>
                    <label htmlFor="" className='text-sm'>Destination</label>
                    <input type="text" placeholder='Phone number' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>


                  <div>
                    <label htmlFor="" className='text-sm'>Remarks</label>
                    <textarea rows='4' placeholder='Type here..' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                  </div>

                  <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Place order</button>

                </form>

              </div>


            </div>



          </div>

        </div>



      </main>
      
      <Footer />



      <div className='hidden'>
        {/* Map */}

        {/* map is currently hidden */}
        <section className='hidden min-w-[600px]'>
        
          <BookingMap />

        </section>


        {/* Calendar */}

        {/*
        <DateRangePicker 
          // ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5B61"]}
          onChange={handleSelect}

        />
        */}

        {/* Other components */}

        <div className='flex'>

          <h2 className="text-xl flex-grow">Number of Guests</h2>

          <input 
          value={noOfGuests}
          onChange={(e) => setNoOfGuests(e.target.value)}
          type="number" 
          min={1}
          className="w-12 pl-2 text-lg outline-none text-red-400"
          /> 

        </div>
      </div>



    </div>

    
  )
}

/* booking data requires: 

1. Map -> start location, end location, middle stops
2. Time and Date
3. Number of cars


*/

export default booking