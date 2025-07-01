import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroContent } from '../data/courses';

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];

  return (
    <section id="home" className="bg-primary-950 text-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {currentContent.courseName}
                  </h1>
                  <p className="text-gold-400 text-xl font-semibold mt-2 uppercase tracking-wide">
                    ({currentContent.abbreviation})
                  </p>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {currentContent.summary}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-primary-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-200 text-center"
              >
                Explore Courses
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-500 hover:text-primary-950 transition-all duration-200 text-center"
              >
                Apply Now
              </motion.a>
            </div>

            {/* Carousel Indicators */}
            <div className="flex space-x-2">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-gold-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={currentContent.image}
                  alt={currentContent.courseName}
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent rounded-2xl"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
