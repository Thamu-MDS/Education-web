import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';


const Navigation: React.FC = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses', hasDropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
    setIsCoursesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary-950 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/src/assets/images/logo.jpg" alt="EduDistance Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-10 items-baseline space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                  >
                    <button className="flex items-center px-3 py-2 text-sm font-medium hover:text-yellow-400 transition">
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {isCoursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-50"
                        >
                          {courses.map((course) => (
                            <button
                              key={course.id}
                              onClick={() => handleCourseClick(course.id)}
                              className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition"
                            >
                              <div className="flex items-center">
                                <span className="text-lg mr-3">{course.icon}</span>
                                <div>
                                  <div className="font-medium">{course.title}</div>
                                  <div className="text-xs text-gray-500">{course.duration}</div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 text-sm font-medium hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-yellow-400 focus:outline-none">
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-950 px-4 py-4 space-y-2"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                      className="flex items-center justify-between w-full px-2 py-2 text-left text-sm font-medium text-white hover:text-yellow-400 transition"
                    >
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    {isCoursesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {courses.map((course) => (
                          <button
                            key={course.id}
                            onClick={() => handleCourseClick(course.id)}
                            className="w-full text-left text-sm text-gray-300 hover:text-yellow-400"
                          >
                            {course.icon} {course.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-2 py-2 text-sm font-medium text-white hover:text-yellow-400 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
