// src/pages/Home.tsx

import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseSection from '../components/CourseSection';
import AboutSection from '../components/AboutSection';
import ContactSection from './Contact';


const Home: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CourseSection />
      <AboutSection />
      <ContactSection />
      
    </main>
  );
};

export default Home;
