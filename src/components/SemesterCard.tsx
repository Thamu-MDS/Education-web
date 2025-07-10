import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, FileText, GraduationCap, Sparkles, Tag, TrendingDown } from 'lucide-react';
import { Semester } from '../data/programData';
import { Link } from 'react-router-dom';

  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

interface SemesterCardProps extends Semester {}

const SemesterCard: React.FC<SemesterCardProps> = ({ semester, subjects, price, hasChoice, choices }) => {
  const [selectedChoice, setSelectedChoice] = useState<'project' | 'subjects'>('project');
  const [isHovered, setIsHovered] = useState(false);

  // Animated pricing component
  const AnimatedPricing = ({ currentPrice }: { currentPrice: string }) => (
    <motion.div 
      className="relative mb-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Special Offer Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3
        }}
        className="absolute -top-3 -right-3 z-10"
      >
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <Sparkles size={12} />
          <span>55% OFF</span>
        </div>
      </motion.div>

      {/* Pricing Container */}
      <motion.div
        className="bg-gradient-to-br from-[#FFD700]/20 to-[#e6c200]/10 rounded-xl p-4 border-2 border-[#FFD700]/30 relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          borderColor: "#FFD700",
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)"
        }}
      >
        {/* Animated Background Sparkles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: Math.random() * 100, y: Math.random() * 60 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute w-2 h-2 bg-[#FFD700] rounded-full"
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Special Offer Header */}
        <motion.div 
          className="flex items-center justify-center mb-3"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2 bg-[#FFD700] text-[#0B1C39] px-3 py-1 rounded-full">
            <Tag size={14} />
            <span className="text-xs font-bold">SPECIAL OFFER</span>
            <TrendingDown size={14} />
          </div>
        </motion.div>

        {/* Price Display */}
        <div className="text-center">
          {/* Original Price */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <span className="text-gray-400 text-lg line-through relative">
              ₹27,700
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 bg-red-500 h-0.5 top-1/2 origin-left"
              />
            </span>
          </motion.div>

          {/* New Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="flex items-center justify-center space-x-2"
          >
            <span className="text-3xl font-bold text-[#FFD700]">{currentPrice}</span>
            <motion.div
              animate={{ 
                rotate: isHovered ? [0, -10, 10, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
              className="text-[#FFD700]"
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>

          {/* Savings Display */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-green-400 font-medium mt-1"
          >
            You save ₹15,200!
          </motion.div>

          {/* Limited Time */}
          <motion.div
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-xs text-[#FFD700] font-bold mt-2 flex items-center justify-center space-x-1"
          >
            <span>⏰ Limited Time Offer</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );

  if (hasChoice && choices) {
    const currentChoice = choices[selectedChoice];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.03,
          rotateY: 2,
          boxShadow: "0 25px 50px rgba(255, 215, 0, 0.4)"
        }}
        className="bg-gradient-to-br from-[#1a2952] to-[#0B1C39] rounded-2xl p-6 border-t-4 border-[#FFD700] shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-500 h-full relative overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23FFD700\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></svg>')",
              backgroundSize: "60px 60px"
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="bg-[#FFD700] rounded-full p-2 mr-3"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Calendar className="text-[#0B1C39]" size={20} />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#FFD700]">
            {semester}
            </h3>
          </motion.div>

          {/* Special Offer Pricing */}
          <AnimatedPricing currentPrice={currentChoice.price} />

          {/* Choice Toggle */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-gray-300 mb-3">Choose your final semester option:</p>
            <div className="flex space-x-2 mb-4">
              <motion.button
                onClick={() => setSelectedChoice('project')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedChoice === 'project'
                    ? 'bg-[#FFD700] text-[#0B1C39] shadow-lg'
                    : 'bg-[#0B1C39] text-gray-300 border border-[#FFD700]/30 hover:border-[#FFD700]'
                }`}
              >
                <FileText size={16} />
                <span>Project Work</span>
              </motion.button>
              <motion.button
                onClick={() => setSelectedChoice('subjects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedChoice === 'subjects'
                    ? 'bg-[#FFD700] text-[#0B1C39] shadow-lg'
                    : 'bg-[#0B1C39] text-gray-300 border border-[#FFD700]/30 hover:border-[#FFD700]'
                }`}
              >
                <GraduationCap size={16} />
                <span>Additional Subjects</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Subjects List */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-3">
              {selectedChoice === 'project' ? (
                <FileText className="text-[#FFD700] mr-2" size={18} />
              ) : (
                <BookOpen className="text-[#FFD700] mr-2" size={18} />
              )}
              <span className="text-sm font-medium text-gray-300">
                {selectedChoice === 'project' ? 'Project Components' : 'Subjects'}
              </span>
            </div>
            <ul className="space-y-2">
              <AnimatePresence mode="wait">
                {currentChoice.subjects.map((subject, index) => (
                  <motion.li
                    key={`${selectedChoice}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm text-gray-200 leading-relaxed"
                  >
                    {index + 1}. {subject}
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>

          {/* Enroll Button */}
          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 25px #FFD700",
              backgroundColor: "#e6c200"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#FFD700] text-[#0B1C39] py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-yellow-400 transition-all duration-300 relative overflow-hidden"
          >
            <Link to="/msc-it"
            onClick={handleNavigate}>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Enroll Now
            </motion.span>
            </Link>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Regular semester card (no choice)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 2,
        boxShadow: "0 25px 50px rgba(255, 215, 0, 0.4)"
      }}
      className="bg-gradient-to-br from-[#1a2952] to-[#0B1C39] rounded-2xl p-6 border-t-4 border-[#FFD700] shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-500 h-full relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23FFD700\" fill-opacity=\"0.1\"><circle cx=\"30\" cy=\"30\" r=\"2\"/></g></svg>')",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="bg-[#FFD700] rounded-full p-2 mr-3"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="text-[#0B1C39]" size={20} />
          </motion.div>
          <h3 className="text-2xl font-bold text-[#FFD700]">
            {semester}
          </h3>
        </motion.div>

        {/* Special Offer Pricing */}
        <AnimatedPricing currentPrice={price} />

        {/* Subjects */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-3">
            <BookOpen className="text-[#FFD700] mr-2" size={18} />
            <span className="text-sm font-medium text-gray-300">Subjects</span>
          </div>
          <ul className="space-y-2">
            {subjects.map((subject, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-sm text-gray-200 leading-relaxed"
              >
                {index + 1}. {subject}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Enroll Button */}
        <Link to="/contact"
            onClick={handleNavigate}>
        <motion.button
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 25px #FFD700",
            backgroundColor: "#e6c200"
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#FFD700] text-[#0B1C39] py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-yellow-400 transition-all duration-300 relative overflow-hidden"
        >
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Enroll Now
          </motion.span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SemesterCard;