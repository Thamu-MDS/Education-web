import { motion } from 'framer-motion';
import { Heart, Handshake, User, Ear, BookOpen, MessageSquare, ArrowRight, CheckCircle, Users, Award, Clock, Activity } from 'lucide-react';
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

const MScCounselingPsychology = () => {
  const features: Feature[] = [
    {
      icon: Heart,
      title: "Therapeutic Techniques",
      description: "Master evidence-based counseling methods for diverse client needs and situations."
    },
    {
      icon: Handshake,
      title: "Client-Centered Therapy",
      description: "Develop skills in creating supportive, non-judgmental therapeutic environments."
    },
    {
      icon: User,
      title: "Mental Health Assessment",
      description: "Learn comprehensive evaluation techniques for mental health conditions."
    },
    {
      icon: Ear,
      title: "Active Listening",
      description: "Develop advanced listening skills crucial for effective counseling practice."
    },
    {
      icon: BookOpen,
      title: "Ethical Practice",
      description: "Understand professional ethics, boundaries, and legal aspects of counseling."
    },
    {
      icon: MessageSquare,
      title: "Communication Skills",
      description: "Enhance verbal and non-verbal communication techniques for therapy."
    }
  ];

  const curriculum: Semester[] = [
    {
      semester: "Semester 1",
      courses: [
        "Advanced General Psychology- I",
        "Research Methodology- I",
        "Theories of Counseling & Practice-I  ",
        "Developmental Psychology",
        "Positive Psychology "
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Advanced General Psychology- II ",
        "Research Methodology- II",
        "Theories of Counseling & Practice -II ",
        "Psychological Testing ",
        "Counselling for children "
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Psychopathology –I ",
        "Counselling Special Population ",
        "Family & Work Place Counselling",
        "School Counselling  ",
        "Personality"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Psychopathology -II",
        "Rehabilitation Counselling ",
        "Contemporary Therapies ",
        "Case study ",
        "Crisis intervention and Trauma Counseling "
      ]
    }
  ];

  const stats: Stat[] = [
    { icon: Users, value: "400+", label: "Counseling Graduates" },
    { icon: Award, value: "98%", label: "Placement Rate" },
    { icon: Clock, value: "2 Years", label: "Program Duration" },
    { icon: Activity, value: "500+", label: "Clinical Hours" }
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
                  Healing Through Understanding
                </motion.span>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white">MSc Counseling Psychology</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Master of Science in Counseling Psychology
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Become a professional counselor with our comprehensive MSc program that combines 
                  psychological theory with practical therapeutic skills. Learn to help individuals 
                  overcome challenges, improve mental health, and achieve personal growth through 
                  evidence-based counseling approaches.
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
                  alt="Counseling Psychology"
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
                Empathetic Care
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Therapeutic Approach
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
              Transform Lives Through Counseling
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MSc Counseling Psychology program equips you with the knowledge and skills to 
              help individuals navigate life's challenges and achieve mental well-being.
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
              Our program combines theoretical knowledge with extensive practical training, 
              including supervised counseling sessions and clinical placements.
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
              Become a Professional Counselor
            </h2>
            <p className="text-xl text-slate-900 mb-8 max-w-3xl mx-auto">
              Start your journey to help individuals overcome challenges and improve their mental health 
              with our MSc Counseling Psychology program.
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

export default MScCounselingPsychology;