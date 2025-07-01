import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Bcom: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-primary-950 text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bachelor of Commerce (B.Com) Distance Education</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          A flexible and career-focused program for aspiring professionals in finance, accounting, business, and commerce.
        </p>
      </motion.div>

      {/* Career Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-primary-950 mb-6">Career Opportunities After B.Com Distance Education</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The B.Com Distance Education program opens up a wide range of career opportunities in business, finance, accounting, and management. Some potential career paths include:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800 list-disc list-inside">
          <li>Accountant</li>
          <li>Financial Analyst</li>
          <li>Tax Consultant</li>
          <li>Internal Auditor</li>
          <li>Corporate Trainer</li>
          <li>Banking Professional</li>
          <li>Business Consultant</li>
          <li>Retail Manager</li>
          <li>Human Resources Executive</li>
          <li>Sales and Marketing Executive</li>
          <li>Entrepreneur</li>
          <li>Insurance Executive</li>
          <li>E-commerce Specialist</li>
        </ul>
        <p className="text-gray-700 mt-6">
          Graduates can work in various sectors, including corporate finance, accounting firms, banking, insurance, government sectors, IT companies, retail, and more.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-950 mb-6 text-center">Benefits of B.Com Distance Education</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
            <li><strong>Flexibility:</strong> Study from home and at your own pace, balancing studies with work or other commitments.</li>
            <li><strong>Affordable:</strong> Distance education is often more cost-effective than traditional on-campus courses.</li>
            <li><strong>Industry-Relevant Curriculum:</strong> Designed to align with industry needs, ensuring students are job-ready.</li>
            <li><strong>Wide Range of Specializations:</strong> Choose electives like finance, taxation, marketing, and entrepreneurship.</li>
            <li><strong>Global Reach:</strong> Opportunities to connect with peers, faculty, and professionals globally.</li>
          </ol>
        </div>
      </motion.div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-950 mb-4">Conclusion</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The B.Com Distance Education program is an excellent option for those seeking a flexible, affordable, and comprehensive education in commerce and business. It provides essential skills and knowledge needed to pursue careers in finance, accounting, business management, and related fields. With the increasing demand for professionals in the business world, this degree offers valuable opportunities for career growth and advancement.
          </p>
        </div>
      </motion.div>

      {/* Enroll Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 px-4 bg-primary-950 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Start Your B.Com Journey Today!</h2>
        <p className="text-lg mb-6">Contact us to learn more and enroll in the program.</p>
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

export default Bcom;
