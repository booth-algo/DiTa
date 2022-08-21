import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function contactUs() {
  return (
    <div>
      <Header />

      {/* <div className='pt-10 pb-10'>Contact Us</div> */}

      <div style={{padding: '50px', height: '300px'}} className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 h-80 block">
      <div className="text-white text-7xl font-extrabold"><br />Contact us</div>
      </div>

      <br />
      <div style={{paddingLeft: '50px'}}>
      <span className="text-3xl">📞</span> &nbsp; +852 1234 5678
      </div><br />
      <div style={{paddingLeft: '50px'}}>
      <span className="text-3xl">✉️</span> &nbsp; abc@gmail.com
      </div><br />
      <div style={{paddingLeft: '50px'}}>
      <span className="text-3xl">📍</span> &nbsp; Somewhere in the world
      </div><br />

      <br /><br />

      <Footer />
    </div>
  )
}

export default contactUs