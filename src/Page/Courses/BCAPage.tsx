import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, TowerControl as GameController2, Shield, ArrowRight, CheckCircle, Star, Users, Award, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BCAPage = () => {
  const features = [
    {
      icon: Code2,
      title: "Programming Fundamentals",
      description: "Master core programming languages including C, C++, Java, and Python with strong foundation building."
    },
    {
      icon: Database,
      title: "Database Systems",
      description: "Learn database design, SQL, and modern database management systems for data-driven applications."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build dynamic websites using HTML, CSS, JavaScript, and modern web frameworks."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Create mobile applications for Android and iOS platforms using modern development tools."
    },
    {
      icon: GameController2,
      title: "Game Development",
      description: "Explore game design principles and develop interactive games using popular game engines."
    },
    {
      icon: Shield,
      title: "IT Security",
      description: "Understand cybersecurity fundamentals and secure coding practices for safe applications."
    }
  ];

  const curriculum = [
    {
      year: "SEMESTER 1",
      courses: [
        "Tamil or other language ",
        "English",
        "Fundamentals of Digital Computers",
        "Practical – I :  PC Software Lab",
        "Mathematics – I  "
      ]
    },
    {
      year: "SEMESTER 2",
      courses: [
        "Tamil or other language",
        "English ",
        "Programming in C ",
        "Practical – II :   Programming in C Lab ",
        "Mathematics – II "
      ]
    },
    {
      year: "SEMESTER 3",
      courses: [
        "Programming in C++ and Data Structures ",
        "Microprocessors and its Applications",
        "Numerical and Statistical Methods  ",
        "Practical-III : Programming  in C++ using Data structures   ",
        "Financial Accounting "
      ]
    },
     {
      year: "SEMESTER 4",
      courses: [
        "Programming in Java",
        "Operating System",
        "Computer Graphics ",
        "Practical-IV :  Java Programming Lab",
        "Cost and Management Accounting "
      ]
    },
    {
      year: "SEMESTER 5",
      courses: [
        "Database Management System   ",
        "Software Engineering",
        "Resource Management Techniques ",
        "Practical-V :   RDBMS Lab",
       "Visual Programming ",
        "Environmental Studies"
      ]
    },
    {
      year: "SEMESTER 6",
      courses: [
        "Web Technology",
        "Data Communication and Net Working",
        "Software Testing ",
        "Practical-VI :    Web Application Lab  ",
        "Multimedia Systems",
        "Value Education "
      ]
    }
  ];


  const stats = [
    { icon: Users, value: "1200+", label: "Students Enrolled" },
    { icon: Award, value: "92%", label: "Success Rate" },
    { icon: Clock, value: "3 Years", label: "Program Duration" },
    { icon: BookOpen, value: "40+", label: "Core Subjects" }
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
                  Foundation Course
                </motion.span>
                
                <h1 className="text-7xl lg:text-8xl font-bold text-white">BCA</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Bachelor of Computer Applications
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Start your journey in computer science with our foundational BCA program. Build strong 
                  programming skills, technical expertise, and practical knowledge for a successful career 
                  in the rapidly growing technology sector.
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
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                    Download Brochure
                  </button>
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
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="BCA Student Learning"
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
                Career Ready
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Practical Focus
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
              Build Your Tech Foundation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our BCA program provides comprehensive training in computer applications, programming, 
              and software development to prepare you for entry-level positions in the IT industry.
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
              Progressive 3-Year Curriculum
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our BCA curriculum is structured to build your skills progressively, starting with 
              fundamentals and advancing to specialized areas of computer applications and software development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {curriculum.map((year, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">{year.year}</h3>
                <ul className="space-y-3">
                  {year.courses.map((course, courseIndex) => (
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
              Start Your Tech Journey Today
            </h2>
            <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
              Begin your career in computer applications with our comprehensive BCA program. 
              Build the foundation you need for a successful future in technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
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

export default BCAPage;