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
          <div className='flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white'>

            <div className='flex flex-col space-y-8 justify-between'>

              <div className='font-bold text-4xl tracking-wide'>
                <h1>Contact Us</h1>
                <p className='pt-2 text-cyan-100 text-sm'>lol heres a paragraph</p>
              </div>

              <div>
                <div className='inline-flex space-x-2 items-center'>
                  <PhoneIcon className='h-6 w-6'/>
                  <div>+852 6698 6968</div>
                </div>
              </div>


            </div>
            
            <div>
              <div className='bg-white rounded-xl shadow-lg p-8'>
                <form action=""></form>
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