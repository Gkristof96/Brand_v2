import React from 'react'
import './App.css';
import './css/style.css'
import Header from './components/Header'
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
    </>
  );
}

export default App;
