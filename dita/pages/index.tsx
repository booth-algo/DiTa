import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="" /*"flex min-h-screen flex-col items-center justify-center py-2"*/ >
      <Head>
        <title>DiTa 滴答</title> 
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
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pb = padding bottom */}

          {/* Pull some data from a server - API endpoints */}




        </section>

      </main>

    </div>
  )
}

export async function getStaticProps() {
  // for server rendering
}

export default Home
