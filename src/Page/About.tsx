import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  EyeIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const features = [
    {
      icon: ClockIcon,
      title: 'Flexible Learning Environment',
      description: 'Study at your own pace with 24/7 access to course materials and recorded lectures.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Industry-Relevant Curriculum',
      description: 'Courses designed by industry experts to meet current market demands and trends.'
    },
    {
      icon: UserGroupIcon,
      title: 'Supportive Mentorship',
      description: 'Dedicated faculty support and peer interaction through virtual classrooms.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable Tuition Structure',
      description: 'Quality education at competitive prices with flexible payment options.'
    }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Top Intro - Left Text, Right Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950">
                About EduDistance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to <strong>Madras Distance Education</strong>. We are dedicated to making quality
                education accessible to everyone, anywhere. Our platform empowers learners by providing
                flexible and affordable learning opportunities through a modern, tech-driven environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through innovative course delivery and expert-designed content, we aim to bridge the gap
                between traditional classroom learning and the digital era — providing a seamless experience
                for learners at all stages of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
  alt="Learning Illustration"
  className="rounded-2xl shadow-xl w-full h-60 object-cover"
/>

            </motion.div>
          </div>

          {/* Vision & Mission Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-4"
              >
                <EyeIcon className="h-10 w-10 text-gold-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-primary-950 mb-1">Our Vision</h3>
                  <p className="text-gray-600 text-base">
                    To become a leading force in global distance education by combining innovation,
                    technology, and inclusivity. We envision a world where every learner, regardless of
                    geography, economic status, or background, has the opportunity to access top-quality
                    education that transforms their future.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <FlagIcon className="h-10 w-10 text-gold-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-primary-950 mb-1">Our Mission</h3>
                  <p className="text-gray-600 text-base">
                    Our mission is to deliver flexible, career-aligned educational programs through an
                    intuitive digital platform powered by React, Vite, Tailwind CSS, Node.js, and MongoDB.
                    We aim to equip learners with practical skills, real-world knowledge, and mentorship
                    that drive personal and professional success—while ensuring affordability, support, and
                    continuous innovation in the learning experience.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image + Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent rounded-2xl"></div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-950">10,000+</div>
                  <div className="text-sm text-gray-600">Students Enrolled</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <feature.icon className="h-8 w-8 text-gold-500" />
                <div>
                  <h3 className="font-semibold text-primary-950 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0C1D3E] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/thinking-man-5205660-4346744.png" // Replace with your own image
            alt="Why Choose Us"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right - Content */}
        <div>
          <p className="text-orange-500 font-medium mb-2">— What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <br /> Chartered Accountants
          </h2>
          <p className="text-gray-300 mb-6">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Specialist Company Advisor Team',
              'Understanding Machines OpenStandard',
              'Can Data Visualization Improve Mobile'
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mt-1" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
            Join With Us
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
 