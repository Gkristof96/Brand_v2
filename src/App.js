import React from 'react'
import './App.css';
import './css/style.css'
import Header from './components/Header'
import Hero from './components/Sections/Hero'
import Services from './components/Sections/Services'
import Trainers from './components/Sections/Trainers'
import Prices from './components/Sections/Prices'
import Contact from './components/Sections/Contact';
import Footer from './components/Footer'
import { sectionData } from './data/SectionData'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='filler light' />
      <Services data={sectionData[0]}/>
      <div className='filler dark' />
      <Trainers />
      <div className='filler light' />
      <Prices data={sectionData[1]}/>
      <div className='filler dark' />
      <Contact data={sectionData[2]}/>
      <Footer />
    </>
  );
}

export default App;
