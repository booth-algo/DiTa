import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/header'

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

    </div>
  )
}

export default Home
