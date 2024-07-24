import { useState } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Breakpoint from './components/Breakpoint/Breakpoint';
import Testimonials from './components/Testimonials/Testimonials';
import Certifications from './components/Certifications/Certifications';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Breakpoint />
      <Testimonials />
      <Certifications />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
