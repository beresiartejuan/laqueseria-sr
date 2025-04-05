
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cheese-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
