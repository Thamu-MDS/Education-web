import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface ElectiveCardProps {
  title: string;
  subjects: string[];
  icon: string;
}

const ElectiveCard: React.FC<ElectiveCardProps> = ({ title, subjects, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-80 perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-gradient-to-br from-[#1a2952] to-[#0B1C39] rounded-2xl p-6 border-2 border-[#FFD700]/20 shadow-lg h-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">{title}</h3>
            
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-[#FFD700] to-[#e6c200] rounded-2xl p-6 shadow-lg h-full text-[#0B1C39]">
            <div className="flex items-center mb-4">
              <BookOpen size={20} className="mr-2" />
              <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <div className="space-y-2">
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium"
                >
                  • {subject}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ElectiveCard;