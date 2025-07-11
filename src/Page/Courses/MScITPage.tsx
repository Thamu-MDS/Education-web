import { motion } from 'framer-motion';
import { Server, Cloud, Database, Network, Shield, Cpu, ArrowRight, CheckCircle, Users, Award, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

 const handleNavigate = () => {
    window.scrollTo(0, 0);
  }; 
const MScITPage = () => {
  const features = [
    {
      icon: Server,
      title: "System Architecture",
      description: "Master enterprise system design, scalable architectures, and distributed computing solutions."
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "Gain expertise in AWS, Azure, Google Cloud, and modern cloud-native application development."
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Learn advanced data processing, analytics, and machine learning for business intelligence."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Understand network protocols, security frameworks, and infrastructure management."
    },
    {
      icon: Shield,
      title: "IT Governance",
      description: "Master IT compliance, risk management, and enterprise security policies."
    },
    {
      icon: Cpu,
      title: "Emerging Technologies",
      description: "Explore IoT, blockchain, AI integration, and next-generation computing paradigms."
    }
  ];

  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "C++ and Data Structures ",
        "Computer Architecture ",
        "Data Base Management Systems",
        "Practical – I: Data Structures Lab. Using C ++ ",
        "Practical – II: RDBMS Lab. ",
        "Visual Programming"
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Operating Systems",
        "Programming in Java ",
        "Practical – III: Java Programming Lab ",
        "Data Warehousing and data Mining ",
        "Dot Net Programming",
        "Practical – IV: Dot Net Programming Lab. "
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Computer Networks",
        "Design and Analysis of Algorithms ",
        "Advanced Java Programming ",
        "Information Security ",
        "Practical – V: Advanced Java Lab. ",
        "Practical – VI: Mini Project ",
        "Mobile Computing "
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Project & Viva – voce ",
      ]
    }
  ];
  const stats = [
    { icon: Users, value: "800+", label: "IT Professionals" },
    { icon: Award, value: "96%", label: "Industry Placement" },
    { icon: Clock, value: "2 Years", label: "Program Duration" },
    { icon: BookOpen, value: "30+", label: "Specialized Modules" }
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
                  Tech Specialist
                </motion.span>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-white">MSc IT</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Master of Science in Information Technology
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Advance your IT career with specialized knowledge in emerging technologies, system architecture, 
                  and digital transformation strategies. Our MSc IT program prepares you for leadership roles 
                  in the rapidly evolving technology landscape.
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
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MSc IT Technology"
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
                Future Ready
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Enterprise Focus
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
              Advanced IT Specializations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MSc IT curriculum covers cutting-edge technologies and enterprise solutions, 
              preparing you for senior technical and leadership roles in the IT industry.
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
              Our MSc IT curriculum is designed to provide deep technical knowledge while developing 
              strategic thinking and leadership skills for IT management roles.
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
              Advance Your IT Career Today
            </h2>
            <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
              Join our MSc IT program and become a technology leader. Gain the advanced skills 
              and strategic knowledge needed to drive digital transformation in organizations.
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

export default MScITPage;