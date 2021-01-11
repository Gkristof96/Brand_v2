import React from 'react'
import './App.css';
import './css/style.css'
import Header from './components/Header'
import Hero from './components/Sections/Hero'
import Services from './components/Sections/Services'
import Trainers from './components/Sections/Trainers'
import Prices from './components/Sections/Prices'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Trainers />
      <Prices />
    </>
  );
}

export default App;
