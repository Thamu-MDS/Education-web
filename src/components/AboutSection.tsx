import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary-950 mb-6"
            >
              About EduDistance
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Empowering learners globally through technology-enabled education. We bridge the gap between 
              traditional classroom learning and modern digital education, making quality higher education 
              accessible to working professionals worldwide.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-950 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Online Learning"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent rounded-2xl"></div>
            
            {/* Floating Stats */}
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
      </div>
    </section>
  );
};

export default AboutSection;