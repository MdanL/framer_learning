import Head from 'next/head'
import Image from 'next/image'
import BigCard from '../components/BigCard'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { PlaceholderText } from '../components/PlaceholderText'
import Layout from '../layouts/navLaylout'


export default function Home() {
  return (
    <div>
      <Head>
        <title>silica_landing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header />
        <PlaceholderText/>
        <PlaceholderText/>
        <PlaceholderText/>
        <BigCard />
      </Layout>
    </div>
  )
}
