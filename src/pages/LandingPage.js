import React from 'react';
import Navbar from '../components/Navbar';
import HeroPage from '../components/LandingSection';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const LandingPage = () => (
  <>
    <Navbar />
    <HeroPage />
    <Skills />
    <Contact />
  </>
);

export default LandingPage;
