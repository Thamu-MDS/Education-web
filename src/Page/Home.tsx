import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Code, Users, Award, Clock, Phone, Mail } from 'lucide-react';
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

const handleNavigate = () => {
  window.scrollTo(0, 0);
};

const slides: Slide[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "MSc",
    subtitle: "Master of Science ",
    description: "M.Sc. is a postgraduate degree designed to provide in-depth knowledge in science and technical disciplines. It builds strong analytical, research, and problem-solving skills that prepare students for academic, research, and industry roles.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    primaryCTA: "Explore MSc",
    secondaryCTA: "Apply Now",
    link: "/msc",
    stats: [
      { value: "800+", label: "IT Professionals" },
      { value: "96%", label: "Industry Placement" },
      { value: "2 Years", label: "Duration" }
    ],
    badge: "Tech Specialist"
  },
  {
    id: 4,
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
    id: 5,
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
    <section className="relative block overflow-hidden h-[calc(100vh-4rem)] min-h-[40rem] max-h-[60rem]">
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-10 pb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 md:space-y-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="bg-yellow-400 text-slate-900 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                <div className="space-y-3 md:space-y-4">
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-yellow-400 font-semibold uppercase tracking-wider"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={slides[currentSlide].link}
                      className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl text-sm md:text-base"
                    >
                      {slides[currentSlide].primaryCTA}
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center group text-sm md:text-base"
                    >
                      <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      {slides[currentSlide].secondaryCTA}
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-slate-700"
                >
                  {slides[currentSlide].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">{stat.value}</div>
                      <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-[30rem] md:h-[35rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm shadow-lg"
                >
                  Industry Ready
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm border border-slate-700 shadow-lg"
                >
                  Future Secured
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-20 
                   bg-slate-800/80 hover:bg-slate-700 text-white p-2 md:p-3 rounded-full 
                   backdrop-blur-sm transition-all duration-300 
                   focus:outline-none focus:ring-0 active:bg-slate-700"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20 
                   bg-slate-800/80 hover:bg-slate-700 text-white p-2 md:p-3 rounded-full 
                   backdrop-blur-sm transition-all duration-300 
                   focus:outline-none focus:ring-0 active:bg-slate-700"
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
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

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Practical Learning",
      description: "Hands-on experience with real-world projects and industry-standard tools and technologies."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of experience and academic excellence."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Degrees recognized by top companies with excellent placement opportunities worldwide."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with recorded lectures and live interactive sessions."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            Why Choose Our Programs?
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your career with our comprehensive educational programs designed for the modern professional landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 group"
            >
              <div className="mb-4 md:mb-6">
                <div className="bg-yellow-400 p-2 md:p-3 rounded-lg w-fit group-hover:bg-yellow-500 transition-colors">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-slate-900" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-base md:text-xl text-slate-800 mb-6 md:mb-8 max-w-3xl mx-auto">
            Join our next batch and take the first step towards a successful career.
            Limited seats available for the upcoming semester.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                onClick={handleNavigate}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg text-sm md:text-base"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <a href="tel:+919884880809" className="flex items-center text-slate-900 hover:underline">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-slate-900 mr-2" />
                <span className="text-sm md:text-base font-semibold">+91 9884880809</span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <a href="mailto:hetaeduversity2025@gmail.com" className="flex items-center text-slate-900 hover:underline">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-slate-900 mr-2" />
                <span className="text-sm md:text-base font-semibold">hetaeduversity2025@gmail.com</span>
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden mt-20">
      <HeroSlider />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;