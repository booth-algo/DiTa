import React from 'react'
import BookingMap from '../components/BookingMap';
import Footer from '../components/Footer';
import Header from '../components/Header';


function booking() {
  return (
    <div>
      <Header />
    
      <h1 className='px-10 pt-10 pb-10'>Booking</h1>

      <section className='px-10'>
        <BookingMap />

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