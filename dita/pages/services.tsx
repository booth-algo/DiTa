import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function services() {
  return (
    <div>
      <Header />
      
      {/* <h1 className='px-10 pt-10 pb-10 text-4xl'>Services</h1> */}

      <div style={{padding: '50px'}} className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600 sm:h-72 h-52 block">
      <div className="text-white text-6xl font-extrabold"><br />Services</div>
      </div>

      <div style={{padding: '50px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      
      <Footer />
      </div>
  )
}

export default services