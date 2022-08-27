import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

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
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title}/>

              ))}

              
              </div>


        {/* Large card */}

        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  // for server rendering
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

export default Home
