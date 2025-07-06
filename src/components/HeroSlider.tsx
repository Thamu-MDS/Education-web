import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCTA: string;
  secondaryCTA: string;
  link: string;
  stats: Array<{ value: string; label: string }>;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "MCA",
    subtitle: "Master of Computer Applications",
    description: "Transform your passion for technology into a rewarding career. Our comprehensive MCA program combines theoretical knowledge with hands-on experience in cutting-edge technologies.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore MCA",
    secondaryCTA: "Apply Now",
    link: "/mca",
    stats: [
      { value: "2000+", label: "Students Enrolled" },
      { value: "95%", label: "Placement Rate" },
      { value: "3 Years", label: "Duration" }
    ],
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "MBA",
    subtitle: "Master of Business Administration",
    description: "Lead the future of business with our comprehensive MBA program. Develop strategic thinking, leadership skills, and business acumen to excel in today's competitive market.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore MBA",
    secondaryCTA: "Apply Now",
    link: "/mba",
    stats: [
      { value: "1500+", label: "Alumni Network" },
      { value: "98%", label: "Job Placement" },
      { value: "2 Years", label: "Duration" }
    ],
    badge: "Executive Track"
  },
  {
    id: 3,
    title: "MSc IT",
    subtitle: "Master of Science in Information Technology",
    description: "Advance your IT career with specialized knowledge in emerging technologies, system architecture, and digital transformation strategies for the modern enterprise.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore MSc IT",
    secondaryCTA: "Apply Now",
    link: "/msc-it",
    stats: [
      { value: "800+", label: "IT Professionals" },
      { value: "96%", label: "Industry Placement" },
      { value: "2 Years", label: "Duration" }
    ],
    badge: "Tech Specialist"
  },
  {
    id: 4,
    title: "MSc Cyber Forensics",
    subtitle: "Master of Science in Cyber Forensics",
    description: "Become a cybersecurity expert with advanced training in digital forensics, incident response, and cyber threat analysis to protect organizations from digital crimes.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore Cyber Forensics",
    secondaryCTA: "Apply Now",
    link: "/msc-cyber",
    stats: [
      { value: "500+", label: "Security Experts" },
      { value: "99%", label: "Job Security" },
      { value: "2 Years", label: "Duration" }
    ],
    badge: "High Demand"
  },
  {
    id: 5,
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    description: "Start your journey in computer science with our foundational BCA program. Build strong programming skills and technical expertise for a successful tech career.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore BCA",
    secondaryCTA: "Apply Now",
    link: "/bca",
    stats: [
      { value: "1200+", label: "Students" },
      { value: "92%", label: "Success Rate" },
      { value: "3 Years", label: "Duration" }
    ],
    badge: "Foundation Course"
  },
  {
    id: 6,
    title: "B.Com",
    subtitle: "Bachelor of Commerce",
    description: "Build a strong foundation in business, accounting, and finance. Our B.Com program prepares you for diverse career opportunities in the corporate world.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore B.Com",
    secondaryCTA: "Apply Now",
    link: "/bcom",
    stats: [
      { value: "2500+", label: "Commerce Graduates" },
      { value: "94%", label: "Employment Rate" },
      { value: "3 Years", label: "Duration" }
    ],
    badge: "Business Foundation"
  }
];


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 mt-[80px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-yellow-400 font-semibold uppercase tracking-wider"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={slides[currentSlide].link}
                      className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                    >
                      {slides[currentSlide].primaryCTA}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      {slides[currentSlide].secondaryCTA}
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700"
                >
                  {slides[currentSlide].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-[400px] sm:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
                >
                  Industry Ready
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
                >
                  100% Online
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>

      {/* Right Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="h-full bg-yellow-400"
        />
      </div>
    </section>
  );
};

export default HeroSlider;
