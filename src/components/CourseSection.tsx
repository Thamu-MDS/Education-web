import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import { FaLaptopCode, FaNetworkWired, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const technicalCourses = [
  {
    id: 'mca',
    icon: <FaLaptopCode />,
    title: 'MCA',
    duration: '2 Years',
    summary: 'Master of Computer Applications focuses on advanced programming, software design, and application development.',
    highlights: ['Full-stack Development', 'AI & Machine Learning', 'Database Management', 'Capstone Projects'],
    careerPaths: ['Software Engineer', 'System Analyst', 'App Developer'],
  },
  {
    id: 'msc-it',
    icon: <FaNetworkWired />,
    title: 'M.Sc IT',
    duration: '2 Years',
    summary: 'Specialize in managing and implementing IT infrastructure with an emphasis on data networks and system security.',
    highlights: ['Cloud Computing', 'Network Administration', 'Cybersecurity Fundamentals', 'Big Data Analytics'],
    careerPaths: ['IT Consultant', 'Cloud Architect', 'Tech Support Manager'],
  },
  {
    id: 'msc-cf',
    icon: <FaShieldAlt />,
    title: 'M.Sc CF',
    duration: '2 Years',
    summary: 'Cyber Forensics program designed to train experts in cybercrime investigation and digital evidence analysis.',
    highlights: ['Ethical Hacking', 'Digital Forensics Tools', 'Cyber Law & Policy', 'Threat Intelligence'],
    careerPaths: ['Cyber Forensics Expert', 'Security Analyst', 'Investigator'],
  },
  {
    id: 'bca',
    icon: <FaGraduationCap />,
    title: 'BCA',
    duration: '3 Years',
    summary: 'Bachelor in Computer Applications lays the foundation in programming and computer science fundamentals.',
    highlights: ['Programming in Java & Python', 'Web Development', 'Data Structures', 'Mini Projects'],
    careerPaths: ['Junior Developer', 'Web Designer', 'IT Support'],
  },
];

const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MBA SECTION */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primary-950 mb-4"
          >
            MBA Distance Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose from our comprehensive range of distance learning programs designed for working professionals
          </motion.p>
        </div>

        {/* MBA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{course.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary-950">{course.title}</h3>
                    <p className="text-gold-600 font-semibold">{course.duration}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{course.summary}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-950 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-950 mb-3">Career Paths:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.careerPaths.map((path, idx) => (
                      <span
                        key={idx}
                        className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/courses/${course.id}`} className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-950 text-white py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TECHNICAL SECTION */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primary-950 mb-4"
          >
            Technical Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our range of technical programs built to meet the needs of today's IT and cybersecurity landscape
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {technicalCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{course.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary-950">{course.title}</h3>
                    <p className="text-gold-600 font-semibold">{course.duration}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{course.summary}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-950 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-950 mb-3">Career Paths:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.careerPaths.map((path, idx) => (
                      <span
                        key={idx}
                        className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/courses/${course.id}`} className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-950 text-white py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
