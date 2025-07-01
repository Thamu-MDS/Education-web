import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const heroImages = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://www.postgrad.com/filer/canonical/1627393288/9958/',
];

const mbaSpecializations = [
  {
    title: 'Finance',
    description: 'Corporate finance, investments, and financial markets.',
    icon: '💰',
    keyHighlights: ['Capital Markets', 'Risk Management', 'Financial Modeling'],
  },
  {
    title: 'Marketing',
    description: 'Branding, digital strategies, market research & advertising.',
    icon: '📈',
    keyHighlights: ['SEO & SEM', 'Consumer Behavior', 'Social Media Marketing'],
  },
  {
    title: 'HR Management',
    description: 'Recruitment, employee training, labor law compliance.',
    icon: '👥',
    keyHighlights: ['Talent Acquisition', 'Employee Engagement', 'HR Analytics'],
  },
  {
    title: 'Systems',
    description: 'ERP systems, MIS, software project management.',
    icon: '🖥️',
    keyHighlights: ['Database Design', 'System Integration', 'Agile Management'],
  },
  {
    title: 'Logistics & SCM',
    description: 'Procurement, inventory, supply chain operations.',
    icon: '🚚',
    keyHighlights: ['Inventory Control', 'Demand Forecasting', 'Logistics Tech'],
  },
  {
    title: 'Hospital Management',
    description: 'Healthcare ethics, patient care, and quality control.',
    icon: '🏥',
    keyHighlights: ['Health Informatics', 'Clinical Services', 'Quality Assurance'],
  },
];

const MBA: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-950 text-white overflow-hidden">
        <div className="grid md:grid-cols-2 h-[420px]">
          {/* Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-16 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-400"
            >
              MBA - Master of Business Administration
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-lg text-gray-200 max-w-xl"
            >
              A flexible, affordable MBA program tailored for professionals seeking leadership excellence in various domains.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            key={currentHero}
            initial={{ opacity: 0.2, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <img
              src={heroImages[currentHero]}
              alt="MBA Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Key Features & Career Objectives */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary-950 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Strategic Management and Business Planning</li>
              <li>Financial Analysis and Market Insights</li>
              <li>Leadership & Organizational Behavior</li>
              <li>Digital Marketing and Analytics</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary-950 mb-4">Career Objectives</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Prepare for senior management and leadership roles</li>
              <li>Enhance decision-making and critical thinking</li>
              <li>Gain multidisciplinary business knowledge</li>
              <li>Drive innovation and strategic growth</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MBA Specializations */}
      <div className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl text-center font-bold text-primary-950 mb-12">MBA Specializations</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mbaSpecializations.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border-t-4 border-yellow-400 hover:shadow-lg transition"
            >
              <div>
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{course.icon}</span>
                  <h3 className="text-xl font-bold text-primary-950">{course.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <h4 className="font-semibold text-primary-950 mb-1">Key Highlights:</h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {course.keyHighlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-primary-950 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-800 transition"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MBA;
