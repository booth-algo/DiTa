import React from 'react'
import BookingMap from '../components/BookingMap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, TranslateIcon, MoonIcon  } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Calendar } from 'react-date-range';
import router, { useRouter } from "next/dist/client/router";
import { useState } from "react";

function booking({ placeholder }) {

  const [searchInput, setSearchInput] = useState('');
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

      <main className='max-w-7xl mx-auto px-8 sm:px-16 flex'> 

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


        {/* Booking form */}

        <div className='flex'>

          <h1 className='px-10 pt-10 pb-5 text-xl'>Start location</h1>


          <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" 
                placeholder={placeholder || "Starting location"}/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                  
            <input 
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number" 
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            /> 

        </div>

      </main>
      
      <Footer />

    </div>
  )
}

/* booking data requires: 

1. Map -> start location, end location, middle stops
2. Time and Date
3. Number of cars


*/

export default booking