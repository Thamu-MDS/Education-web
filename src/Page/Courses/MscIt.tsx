import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Mscit: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-primary-950 text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Master of Science in Information Technology</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Advance your IT skills and unlock career opportunities in software development, cybersecurity, data analytics, and more.
        </p>
      </motion.div>

      {/* About the Course */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-primary-950 mb-4">About the Program</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The M.Sc in Information Technology is a 2-year postgraduate program designed to provide advanced knowledge and practical skills in IT. It covers areas like software engineering, database management, networking, AI, machine learning, and cloud technologies. This course is ideal for those aiming to take leadership roles in the tech industry or pursue research.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-950 mb-6 text-center">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="bg-gray-100 p-6 rounded-lg shadow">Advanced curriculum focused on emerging technologies</li>
            <li className="bg-gray-100 p-6 rounded-lg shadow">Hands-on lab sessions and live projects</li>
            <li className="bg-gray-100 p-6 rounded-lg shadow">Expert faculty with industry experience</li>
            <li className="bg-gray-100 p-6 rounded-lg shadow">Career support and placement assistance</li>
            <li className="bg-gray-100 p-6 rounded-lg shadow">Flexible learning modes (Online/Offline)</li>
            <li className="bg-gray-100 p-6 rounded-lg shadow">Access to latest tools and software platforms</li>
          </ul>
        </div>
      </motion.div>

      {/* Career Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-950 mb-6 text-center">Career Opportunities</h2>
          <p className="text-gray-700 text-lg mb-8 text-center">
            Graduates of M.Sc IT can pursue careers in a variety of high-growth domains:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">Software Developer / Engineer</div>
            <div className="bg-white p-6 rounded-lg shadow text-center">Data Analyst / Scientist</div>
            <div className="bg-white p-6 rounded-lg shadow text-center">Cybersecurity Specialist</div>
            <div className="bg-white p-6 rounded-lg shadow text-center">Cloud Architect</div>
            <div className="bg-white p-6 rounded-lg shadow text-center">IT Consultant</div>
            <div className="bg-white p-6 rounded-lg shadow text-center">AI/ML Engineer</div>
          </div>
        </div>
      </motion.div>

      {/* Enroll Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 px-4 bg-primary-950 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to join the M.Sc IT program?</h2>
        <p className="text-lg mb-6">Take the next step in your career today.</p>
        <Link
          to="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-primary-950 font-semibold px-8 py-3 rounded-lg shadow transition duration-200"
        >
          Enroll Now
        </Link>
      </motion.div>
    </section>
  );
};

export default Mscit;
