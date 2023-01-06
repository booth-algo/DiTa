import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Banner from '../components/Banner'
// import Header from '../components/Header'
// import MediumCard from '../components/MediumCard'
// import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

// suppress Hydration error
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../components/Banner"), {ssr: false});
const Header = dynamic(() => import("../components/Header"), {ssr: false});
const MediumCard = dynamic(() => import("../components/MediumCard"), {ssr: false});
const LargeCard = dynamic(() => import("../components/LargeCard"), {ssr: false});
// const Footer = dynamic(() => import("../components/Footer"), {ssr: false});

// remove exploreData when necessary 

const Home: NextPage = ({ exploreData, cardsData }) => {
  return (
    <div className="" /*"flex min-h-screen flex-col items-center justify-center py-2"*/ >
      <Head>
        <title>DiTa 滴踏</title> 
        {/*Check name and change icon*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main section */}

      <main className='max-w-7xl mx-auto px-8 sm:px-16'> 
      {/* max and mx for centering and restricting main body */}
        

        {/* Medium card */}

        <section>
            {/* <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2> */}
            
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title}/>

              ))}

              
              </div>


        {/* Large card */}

        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          // title="The Greatest Outdoors"
          // description="Wishlists curated by Airbnb"
          // buttonText="Get Inspired"
        />

      </main>

      <Footer />

    </div>
  )

}



// floating nav bar
// setTimeout(function(){
  
//   function dynamicFloat() {

//     if(location.href == 'http://localhost:3000/') {
//       a = 100;
//     }

//     let scrollY = this.scrollY;
//     document.getElementById("header").style.position = 'absolute';
//     document.getElementById("header").style.top = String(scrollY) + 'px';
//     document.getElementById("header").style.width = '100vw';
//     if(scrollY > a) {
//         document.getElementById("header").style.backgroundColor = '';
//         document.getElementById("header").style.boxShadow = '';
//         document.getElementById("navBar").style.backgroundColor = '';
//         for(let i=0; i<4; i++) {
//           document.getElementById("items").getElementsByTagName('a')[i].style.color = '';
//           document.getElementById("items").getElementsByTagName('a')[i].style.opacity = '';
//           document.getElementById("items").getElementsByTagName('a')[i].className = '';
//         }
//         document.getElementById("buttons").style.color = '';

//     } else if(scrollY <= a) {
//         document.getElementById("header").style.backgroundColor = 'transparent';
//         document.getElementById("header").style.boxShadow = 'none';
//         document.getElementById("navBar").style.backgroundColor = 'transparent';
//         for(let i=0; i<4; i++) {
//           document.getElementById("items").getElementsByTagName('a')[i].style.color = 'white';
//           document.getElementById("items").getElementsByTagName('a')[i].style.opacity = '1';
//             document.getElementById("items").getElementsByTagName('a')[i].className = 'floaty';
//         }
//         document.getElementById("buttons").style.color = 'white';
//     }
//   }

//   window.addEventListener("scroll", dynamicFloat);
//   window.scrollTo(0,1);
//   window.scrollTo(0,0);

// },200);


export default Home
