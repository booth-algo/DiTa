import React from 'react'
import BookingMap from '../components/BookingMap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, TranslateIcon, MoonIcon  } from '@heroicons/react/solid';


function booking() {
  return (
    <div>
      <Header />
      <h1 className='px-10 pt-10 pb-10 text-4xl'>Booking</h1>

      <section className='px-10 flex'>
        {/* Map */}
        <BookingMap />

        {/* Booking form */}

        <div className=''>

          <h1 className='px-10 pt-10 pb-5 text-xl'>Start location</h1>


          <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm h-10 w-100 ml-10">
            <input className='className="flex-grow pl-5 bg-transparent outline-none 
            text-sm text-gray-600 placeholder-gray-400"' type="text"></input>
            <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
          </div>

        </div>


      </section>

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