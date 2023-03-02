"use client";
import About from '@/components/About';
import Food from '@/components/Food'
import Headline from '@/components/Headline'
import Hero from '@/components/Hero'
// import styles from '../styles/globals.css'

export default function Home() {
  return (
    <>
    <Hero />
    <Headline />
    <section id='about'>
      <About />
    </section>
    <section id='favorit'>
      <Food />
    </section>
    
    </>
  )
}
