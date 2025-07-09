import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const courses = [
     { name: 'MBA', path: '/mba', description: 'Master of Business Administration' },
    { name: 'MSc IT', path: '/msc-it', description: 'Master of Science in Information Technology' },
    { name: 'MSc Cyber Forensics', path: '/msc-cyber', description: 'Master of Science in Cyber Forensics' },
    { name: 'MCA', path: '/mca', description: 'Master of Computer Applications' },
    { name: 'BCA', path: '/bca', description: 'Bachelor of Computer Applications' },
    { name: 'B.Com', path: '/bcom', description: 'Bachelor of Commerce' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-slate-900 backdrop-blur-md shadow-md transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rounded-full group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
              <img
                src="/Images/logo.jpg"
                alt="Madras Distance Education Logo"
                className="h-12 w-auto object-contain rounded-full"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  isActive(link.path) ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                  />
                )}
              </Link>
            ))}

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="flex items-center px-4 py-2 font-medium text-white hover:text-yellow-400 transition-all duration-300">
                Courses 
                <motion.div animate={{ rotate: isCoursesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700 overflow-hidden max-h-96 overflow-y-auto"
                  >
                    {courses.map((course, index) => (
                      <motion.div
                        key={course.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={course.path}
                          onClick={() => setIsCoursesOpen(false)}
                          className="block px-6 py-4 hover:bg-slate-700/50 transition-all duration-300 group border-b border-slate-700/50 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors text-lg">
                                {course.name}
                              </h3>
                              <p className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">
                                {course.description}
                              </p>
                            </div>
                            <motion.div
                              initial={{ x: -10, opacity: 0 }}
                              whileHover={{ x: 0, opacity: 1 }}
                              className="text-yellow-400 text-xl"
                            >
                              →
                            </motion.div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* New Pages */}
            {[
              { name: 'Skills', path: '/skills' },
              { name: 'Languages', path: '/languages' },
              { name: 'Price', path: '/price' },
              { name: 'Contact', path: '/contact' }
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  isActive(link.path) ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                  />
                )}
              </Link>
            ))}

            {/* Apply Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Apply Now
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700 rounded-b-xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/') ? 'bg-yellow-400 text-slate-900' : 'text-white hover:bg-slate-700'}`}>
                  Home
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive('/about') ? 'bg-yellow-400 text-slate-900' : 'text-white hover:bg-slate-700'}`}>
                  About
                </Link>

                <div className="space-y-2">
                  <div className="text-yellow-400 font-semibold px-4 py-2 text-sm uppercase tracking-wider">
                    Courses
                  </div>
                  {courses.map(course => (
                    <Link
                      key={course.path}
                      to={course.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ml-4 ${isActive(course.path) ? 'bg-yellow-400 text-slate-900' : 'text-white hover:bg-slate-700'}`}
                    >
                      <div>
                        <div className="font-semibold">{course.name}</div>
                        <div className="text-xs opacity-75 mt-1">{course.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {['/skills', '/languages', '/price', '/contact'].map(path => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(path) ? 'bg-yellow-400 text-slate-900' : 'text-white hover:bg-slate-700'}`}
                  >
                    {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
