import { motion } from 'framer-motion';
import { Server, Cloud, Database, Network, Shield, Cpu, ArrowRight, CheckCircle, Star, Users, Award, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        "Advanced Programming Concepts",
        "System Analysis and Design",
        "Database Management Systems",
        "Computer Networks and Security",
        "Research Methodology"
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Cloud Computing Architecture",
        "Big Data Analytics",
        "Enterprise Application Development",
        "IT Project Management",
        "Software Quality Assurance"
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Artificial Intelligence in IT",
        "Cybersecurity and Risk Management",
        "Mobile and Web Technologies",
        "IT Governance and Compliance",
        "Elective Specialization"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Emerging Technologies",
        "Digital Transformation Strategies",
        "Industry Internship",
        "Dissertation Project",
        "Seminar and Presentation"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Cloud Architect at Amazon",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The MSc IT program provided me with comprehensive knowledge of cloud technologies and system architecture. It directly contributed to my role as a Cloud Architect.",
      rating: 5
    },
    {
      name: "Priya Nair",
      role: "IT Manager at Wipro",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The program's focus on IT governance and emerging technologies prepared me for leadership roles in enterprise IT management.",
      rating: 5
    },
    {
      name: "Arjun Singh",
      role: "Data Scientist at IBM",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The big data analytics and AI modules were exceptional. They gave me the skills needed to transition into data science successfully.",
      rating: 5
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

      {/* Testimonials Section */}
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
              IT Leaders Making Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MSc IT graduates are leading technology initiatives at major corporations worldwide. 
              Discover how our program accelerated their careers in IT leadership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
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