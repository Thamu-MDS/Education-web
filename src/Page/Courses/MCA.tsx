import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const heroImages = [
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=800'
];

const MCA: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* Hero */}
      <div className="relative h-[420px] bg-primary-950 text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center px-6 md:px-16 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-400"
            >
              MCA - Master of Computer Applications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-4 text-lg text-gray-200 max-w-xl"
            >
              Advanced program focusing on software development, system architecture, and cutting-edge technology trends.
            </motion.p>
          </div>
          <motion.img
            key={currentHero}
            src={heroImages[currentHero]}
            alt="MCA Hero"
            initial={{ opacity: 0.2, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Program Overview */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary-950 mb-4">Program Highlights</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>In-depth software engineering and architecture</li>
              <li>Focus on full-stack development and DevOps</li>
              <li>Real-world capstone projects</li>
              <li>Strong foundation in data science and AI</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary-950 mb-4">Career Objectives</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Prepare for software engineering and development roles</li>
              <li>Leadership in IT project management</li>
              <li>Advance toward specialized roles in AI/ML and cybersecurity</li>
              <li>Gain expertise in cloud technologies and backend systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Cards */}
      <div className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl text-center font-bold text-primary-950 mb-12">Core Technologies Covered</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            { tech: 'Java & Spring Boot', icon: '☕', detail: 'Enterprise app development & microservices' },
            { tech: 'Python & AI/ML', icon: '🐍', detail: 'Data science and machine learning integration' },
            { tech: 'Web Dev (React/Node)', icon: '🌐', detail: 'Full-stack web application development' },
            { tech: 'Cloud (AWS/GCP)', icon: '☁️', detail: 'Cloud-native infrastructure and deployment' },
            { tech: 'DevOps & CI/CD', icon: '⚙️', detail: 'Modern software delivery practices' },
            { tech: 'Security & Networks', icon: '🔐', detail: 'Network fundamentals and secure coding' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border-t-4 border-yellow-400 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary-950 mb-1">{item.tech}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.detail}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto bg-yellow-400 text-primary-950 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 bg-primary-950 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your tech career?</h2>
        <p className="text-lg mb-6">Join our MCA program and gain the skills to lead in the digital world.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-primary-950 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Enroll Now
        </motion.button>
      </div>
    </section>
  );
};

export default MCA;
