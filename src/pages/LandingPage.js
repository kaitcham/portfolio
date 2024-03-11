import React from 'react';
import Navbar from '../components/Navbar';
import HeroPage from '../components/LandingSection';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const LandingPage = () => (
  <>
    <Navbar />
    <HeroPage />
    <Skills />
    <Projects />
    <Contact />
  </>
);

export default LandingPage;
