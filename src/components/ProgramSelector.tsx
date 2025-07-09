import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, Monitor, Code, Calculator, Laptop } from 'lucide-react';
import { ProgramData } from '../data/programData';

interface ProgramSelectorProps {
  selectedProgram: keyof typeof ProgramData;
  onProgramChange: (program: keyof typeof ProgramData) => void;
}

const programIcons = {
  MBA: GraduationCap,
  MCA: Laptop,
  'MSC_CYBER': Shield,
  'MSC_IT': Monitor,
  BCA: Code,
  BCOM: Calculator,
};

const programNames = {
  MBA: 'MBA',
  MCA: 'MCA',
  'MSC_CYBER': 'MSC Cyber Forensicn',
  'MSC_IT': 'MSC Information Technology',
  BCA: 'BCA',
  BCOM: 'BCOM',
};

const ProgramSelector: React.FC<ProgramSelectorProps> = ({ selectedProgram, onProgramChange }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0B1C39] to-[#1a2952]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD700]">
            Choose Your Program
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select from our comprehensive range of distance education programs
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(ProgramData).map((program, index) => {
            const IconComponent = programIcons[program as keyof typeof programIcons];
            const isSelected = selectedProgram === program;
            
            return (
              <motion.button
                key={program}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onProgramChange(program as keyof typeof ProgramData)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-full font-bold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#FFD700] text-[#0B1C39] shadow-lg shadow-[#FFD700]/50'
                    : 'bg-[#1a2952] text-white border-2 border-[#FFD700]/30 hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/30'
                }`}
              >
                <IconComponent size={20} />
                <span>{programNames[program as keyof typeof programNames]}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#1a2952] to-[#0B1C39] rounded-2xl p-8 border border-[#FFD700]/20">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
              {ProgramData[selectedProgram].title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {ProgramData[selectedProgram].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSelector;