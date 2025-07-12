import { motion } from 'framer-motion';
import { Brain, Heart, User, Eye, BookOpen, Search, ArrowRight, CheckCircle, Users, Award, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Semester {
  semester: string;
  courses: string[];
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const handleNavigate = () => {
  window.scrollTo(0, 0);
};

const MScPsychology = () => {
  const features: Feature[] = [
    {
      icon: Brain,
      title: "Cognitive Psychology",
      description: "Explore mental processes including perception, thinking, memory, and decision-making."
    },
    {
      icon: Heart,
      title: "Emotional Development",
      description: "Study emotional growth across the lifespan and factors influencing emotional health."
    },
    {
      icon: User,
      title: "Personality Theories",
      description: "Examine major personality theories and their applications in understanding human behavior."
    },
    {
      icon: Eye,
      title: "Perception Studies",
      description: "Investigate how we interpret sensory information to understand our environment."
    },
    {
      icon: BookOpen,
      title: "Research Methods",
      description: "Master qualitative and quantitative research techniques in psychological studies."
    },
    {
      icon: Search,
      title: "Psychological Assessment",
      description: "Learn standardized tools and techniques for psychological evaluation and testing."
    }
  ];

  const curriculum: Semester[] = [
    {
      semester: "Semester 1",
      courses: [
        "Advanced General Psychology- I ",
        "Research Methodology-I ",
        "Advanced Social Psychology ",
        "Developmental Psychology ",
        "Positive Psychology "
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Advanced General Psychology- II",
        "Research Methodology-II ",
        "School Counselling ",
        "Guidance & Counselling – I ",
        "Counselling for children "
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Psychopathology –I ",
        "Guidance & Counselling – II ",
        "Organisational Behaviour ",
        "Human Resource Management ",
        "Personality"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Consumer Behaviour, Marketing & Advertising  ",
        "Psychopathology –II",
        "Health Psychology ",
        "Psychological Testing ",
        "Counselling for Adolescence"
      ]
    }
  ];

  const stats: Stat[] = [
    { icon: Users, value: "600+", label: "Psychology Graduates" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: Clock, value: "2 Years", label: "Program Duration" },
    { icon: GraduationCap, value: "15+", label: "Specializations" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Understanding Human Mind
                </motion.span>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white">MSc Psychology</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Master of Science in Psychology
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Explore the depths of human behavior, cognition, and emotion with our comprehensive MSc Psychology program. 
                  Gain advanced knowledge in psychological theories, research methods, and practical applications to understand 
                  and improve mental health and human functioning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Psychology Studies"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                Human Behavior
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Mind Research
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore the Human Mind
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MSc Psychology program provides comprehensive training in psychological theories, 
              research methodologies, and practical applications across various domains of psychology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="bg-amber-500 p-3 rounded-lg w-fit group-hover:bg-amber-500 transition-colors">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive 2-Year Curriculum
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our curriculum blends theoretical knowledge with practical training, research projects, 
              and fieldwork to prepare you for diverse career paths in psychology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {curriculum.map((sem, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-amber-500 mb-6">{sem.semester}</h3>
                <ul className="space-y-3">
                  {sem.courses.map((course, courseIndex) => (
                    <motion.li
                      key={courseIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: courseIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Understand Human Behavior
            </h2>
            <p className="text-xl text-slate-900 mb-8 max-w-3xl mx-auto">
              Begin your journey into the science of the mind with our MSc Psychology program. 
              Gain the knowledge and skills to make a difference in mental health, research, and human development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  onClick={handleNavigate}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MScPsychology;