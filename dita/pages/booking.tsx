import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function booking() {
  return (
    <div>
      <Header />
    
      <div className='pt-10 pb-10'>Booking</div>
      

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