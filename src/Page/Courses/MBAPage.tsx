import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, BarChart3, Target, Briefcase, ArrowRight, CheckCircle, Award, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

 const handleNavigate = () => {
    window.scrollTo(0, 0);
  }; 

const MBAPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Corporate finance involves financial management and capital structure. Investments include portfolio management and risk analysis."
    },
    {
      icon: Users,
      title: "Marketing",
      description: "Branding focuses on brand positioning and identity. Digital strategies include social media and online advertising."
    },
    {
      icon: Globe,
      title: "HR Management",
      description: "Recruitment involves talent acquisition and selection. Training includes employee development and training program design."
    },
    {
      icon: BarChart3,
      title: "Systems",
      description: "ERP integrates business systems and manages implementation. Software project management uses agile methodologies"
    },
    {
      icon: Target,
      title: "Logistics & SCM",
      description: "ERP integrates business systems and manages implementation. Software project management uses agile methodologies"
    },
    {
      icon: Briefcase,
      title: "Hospital Management",
      description: "Healthcare operations involve hospital administration and patient care. Quality management ensures patient safety"
    },
    {
      icon: Briefcase,
      title: "Business Data Analytics",
      description: "Business Data Analytics uses data and tools like visualization and machine learning to uncover insights, improve decisions, and boost business performance."
    }
  ];

  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "Management principles and Business Ethics ",
        "Quantitative and ResearchMethods in Business",
        "OrganisationalBehaviour",
        "Accounting for Managers",
        "Managerial Economics"
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Legal Systems in Business",
        "Applied Operations Research",
        "strategic Management",
        "InternationalBusiness",
        "Management Information System"
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Human Resource Management",
        "Marketing Management",
        "Operations Management",
        "Financial Management",
        "Innovation and Entrepreneurship"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Entrepreneurship Development",
        "Business Analytics",
        "Corporate Governance",
        "Industry Project",
        "Management Seminar"
      ]
    }
  ];
  const stats = [
    { icon: Users, value: "1500+", label: "Alumni Network" },
    { icon: Award, value: "98%", label: "Job Placement" },
    { icon: Clock, value: "2 Years", label: "Program Duration" },
    { icon: Building, value: "500+", label: "Partner Companies" }
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
                  className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Executive Track
                </motion.span>
                
                <h1 className="text-7xl lg:text-8xl font-bold text-white">MBA</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Master of Business Administration
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Lead the future of business with our comprehensive MBA program. Develop strategic thinking, 
                  leadership skills, and business acumen to excel in today's competitive global market and 
                  drive organizational success.
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MBA Business Meeting"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                Executive Ready
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Global Network
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
              Master Business Leadership
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MBA curriculum is designed to develop well-rounded business leaders who can navigate 
              complex challenges and drive organizational growth in the modern business landscape.
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
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="bg-yellow-400 p-3 rounded-lg w-fit group-hover:bg-yellow-500 transition-colors">
                    <feature.icon className="h-6 w-6 text-slate-900" />
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
              Our MBA curriculum combines core business fundamentals with specialized tracks, 
              case studies, and practical projects to prepare you for executive leadership roles.
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
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">{sem.semester}</h3>
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
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
              Transform your career with our executive MBA program. Join a network of successful 
              business leaders and gain the skills to drive organizational excellence.
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

export default MBAPage;