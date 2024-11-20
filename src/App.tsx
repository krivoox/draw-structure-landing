import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Usage } from './components/Usage';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Usage />
      <Footer />
    </div>
  );
}

export default App;