import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showCourses, setShowCourses] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  const courseSubLinks = [
    { name: 'MBA', href: '/mba' },
    { name: 'MCA', href: '/mca' },
    { name: 'MSc', href: '/msc' },
    { name: 'BCA', href: '/bca' },
    { name: 'BCom', href: '/bcom' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/16hXrA32wt/',
      icon: <Facebook size={20} />,
    },
    { name: 'X', href: 'https://x.com/Madras_Dist_Edu?t=jt6DcXGN156PC2D9ueHb2A&s=09', icon: <X size={20} /> },
    {
      name: 'LinkedIn',
      href: 'http://linkedin.com/in/madras-distance-education-85a769371',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/madras_distance_education?utm_source=qr',
      icon: <Instagram size={20} />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCourses(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    console.log('Subscribing with email:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-primary-950 text-white py-16 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gold-500 mb-4">EduDistance</h3>
            <p className="text-gray-300 mb-4">
              Empowering learners globally through technology-enabled education.
              Making quality higher education accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-gold-500 transition-colors duration-200"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links with Courses Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
            ref={dropdownRef}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className={link.name === 'Courses' ? 'relative' : ''}>
                  {link.name === 'Courses' ? (
                    <>
                      <button
                        onClick={() => setShowCourses((prev) => !prev)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 transition-colors duration-200 focus:outline-none"
                      >
                        <span>Courses</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${showCourses ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {showCourses && (
                        <ul className="absolute left-0 top-full mt-2 w-40 bg-slate-900 border border-gray-700 rounded-md shadow-lg z-10">
                          {courseSubLinks.map((course, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={course.href}
                                onClick={() => setShowCourses(false)}
                                className="block px-4 py-2 text-gray-300 hover:bg-slate-800 hover:text-yellow-500 transition"
                              >
                                {course.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <motion.a
                href="tel:+919876543210"
                className="flex items-start space-x-3 hover:text-gold-500 transition"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="text-gold-500 mt-1" size={18} />
                <span>+91 9876543210</span>
              </motion.a>

              <motion.a
                href="mailto:info@edudistance.com"
                className="flex items-start space-x-3 hover:text-gold-500 transition"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="text-gold-500 mt-1" size={18} />
                <span>info@edudistance.com</span>
              </motion.a>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=123+Education+Street+Learning+City+LC+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-gold-500 transition"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="text-gold-500 mt-1" size={18} />
                <span>
                  123 Education Street<br />
                  Learning City, LC 12345
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and course announcements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gold-500 text-primary-950 px-4 py-2 rounded-r-lg font-semibold hover:bg-gold-400 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
            {message && (
              <p className="mt-2 text-sm text-gold-400">{message}</p>
            )}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 EduDistance. All rights reserved. | Privacy Policy | Terms of Service</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;