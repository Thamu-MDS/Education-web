// ElectiveSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ElectiveCard from './ElectiveCard';

interface ElectiveSectionProps {
  electives: Array<{
    title: string;
    subjects: string[];
    icon: string;
  }>;
}

const ElectiveSection: React.FC<ElectiveSectionProps> = ({ electives }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0B1C39] to-[#1a2952]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD700]">
            Choose Your Specialization
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialize in your area of interest with our comprehensive elective programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {electives.map((elective, index) => (
            <motion.div
              key={elective.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
            >
              <ElectiveCard {...elective} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectiveSection;