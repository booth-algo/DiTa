import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function contactUs() {
  return (
    <div>
      <Header />

      {/* <div className='pt-10 pb-10'>Contact Us</div> */}

      <div style={{padding: '50px'}} className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 sm:h-72 h-52 block">
      <div className="text-white sm:text-7xl text-4xl font-extrabold "><br />Contact us</div>
      </div>

      <br />

      <div className="hidden md:flex" style={{width: '100vw'}}>
        <br /><br />
        <div className="inline-block rounded-3xl bg-emerald-400" style={{width: '26%', height: '24vw', marginLeft: '8%', marginBottom: '2%', paddingTop: '4vw', textAlign: 'center'}}>
        <span style={{fontSize: '8vw'}}>📞</span>
        <br /><br />
        <span className="text-white font-semibold" style={{fontSize: '2vw'}}>+852 1234 5678</span>
        </div>
        <div className="inline-block rounded-3xl bg-blue-500" style={{width: '26%', height: '24vw', marginLeft: '3%', marginBottom: '2%', paddingTop: '4vw', textAlign: 'center'}}>
        <span style={{fontSize: '8vw'}}>✉️</span>
        <br /><br />
        <a href="mailto:abc@gmail.com" className="text-white font-semibold" style={{fontSize: '2vw', textDecoration: 'underline'}}>abc@gmail.com</a>
        </div>
        <div className="inline-block rounded-3xl bg-amber-400" style={{width: '26%', height: '24vw', marginLeft: '3%', marginRight: '8%', marginBottom: '2%', paddingTop: '4vw', textAlign: 'center'}}>
        <span style={{fontSize: '8vw'}}>📍</span>
        <br /><br />
        <span className="text-white font-semibold" style={{fontSize: '2vw'}}>Somewhere in the world</span>
        </div>
      </div>

      <div className="block md:hidden">
      <div style={{paddingLeft: '50px'}}>
      <span className="text-3xl">📞</span> &nbsp; +852 1234 5678
      </div><br />
      <div style={{paddingLeft: '50px'}}>
      <span className="text-3xl">✉️</span> &nbsp; <a href="mailto:abc@gmail.com" style={{textDecoration: 'underline'}}>abc@gmail.com</a>
      </div><br />
      <div style={{paddingLeft: '50px'}}>
      <span className="text-3xl">📍</span> &nbsp; Somewhere in the world
      </div><br />
      </div>

      <br /><br />

      <Footer />
    </div>
  )
}

export default contactUs