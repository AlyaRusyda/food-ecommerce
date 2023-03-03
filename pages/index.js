"use client";
import About from '@/components/About';
import Food from '@/components/Food'
import Headline from '@/components/Headline'
import Hero from '@/components/Hero'
import withNavbar from '@/components/layout/withNavbar';
// import styles from '../styles/globals.css'

function Home() {
  return (
    <>
    <Hero />
    <Headline />
    {/* <section id='about'> */}
      <About />
    {/* </section> */}
    <section id='favorit'>
      <Food />
    </section>
    
    </>
  )
}

export default withNavbar(Home)
