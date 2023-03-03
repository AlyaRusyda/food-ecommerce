"use client";
import About from "@/components/About";
import Food from "@/components/Food";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import withNavbar from "@/components/layout/withNavbar";
// import styles from '../styles/globals.css'

function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <Headline />
        {/* <section id='about'> */}
        <About />
        {/* </section> */}
        <section id="favorit">
          <Food />
        </section>
      </div>
    </>
  );
}

export default withNavbar(Home);
