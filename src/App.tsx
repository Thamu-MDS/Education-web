import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Page/Home';
import MCAPage from './Page/Courses/MCAPage';
import MBAPage from './Page/Courses/MBAPage';
import BCAPage from './Page/Courses/BCAPage';
import MScITPage from './Page/Courses/MScITPage';
import MScCyberPage from './Page/Courses/MScCyberPage';
import BComPage from './Page/Courses/BComPage';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import Pricedata from './Page/Pricedata';
import Lang from './Page/Lang';
import Skill from './Page/Skill';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mca" element={<MCAPage />} />
        <Route path="/mba" element={<MBAPage />} />
        <Route path="/bca" element={<BCAPage />} />
        <Route path="/msc-it" element={<MScITPage />} />
        <Route path="/msc-cyber" element={<MScCyberPage />} />
        <Route path="/bcom" element={<BComPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/languages" element={<Lang />} />
        <Route path="//price" element={<Pricedata />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import Pricedata from "./Page/Pricedata";





// function App() {
//   return (
//     <div className="App">
//     <Pricedata/>
//     </div>
//   );
// }

// export default App;
