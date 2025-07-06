import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Search, FileText, ArrowRight, CheckCircle, Star, Users, Award, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const MScCyberPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Digital Forensics",
      description: "Master evidence collection, analysis, and preservation techniques for digital crime investigation."
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Learn advanced security protocols, threat detection, and incident response methodologies."
    },
    {
      icon: Eye,
      title: "Threat Intelligence",
      description: "Develop skills in threat hunting, malware analysis, and cyber threat landscape assessment."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Master rapid response techniques for security breaches and cyber attack mitigation."
    },
    {
      icon: Search,
      title: "Network Forensics",
      description: "Analyze network traffic, identify intrusions, and trace cyber attack vectors."
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Understand cyber law, evidence handling, and legal procedures in digital investigations."
    }
  ];

  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "Fundamentals of Cyber Forensics",
        "Computer Networks and Security",
        "Digital Evidence and Law",
        "Operating Systems Forensics",
        "Cryptography and Network Security"
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Malware Analysis and Reverse Engineering",
        "Network Forensics and Traffic Analysis",
        "Mobile Device Forensics",
        "Database Forensics",
        "Incident Response and Management"
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Advanced Digital Forensics",
        "Cloud Forensics and Security",
        "Cyber Threat Intelligence",
        "Ethical Hacking and Penetration Testing",
        "Research Methodology"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Emerging Threats and Technologies",
        "Cyber Law and Legal Procedures",
        "Industry Internship",
        "Dissertation Project",
        "Professional Certification Preparation"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Kavya Sharma",
      role: "Cyber Forensics Analyst at CBI",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The program provided comprehensive training in digital forensics and cyber law. It prepared me perfectly for my role in cybercrime investigation.",
      rating: 5
    },
    {
      name: "Rohit Gupta",
      role: "Security Consultant at Deloitte",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The hands-on approach to incident response and threat analysis gave me practical skills that are directly applicable in my consulting work.",
      rating: 5
    },
    {
      name: "Anita Verma",
      role: "Forensics Expert at CERT-In",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The program's focus on emerging threats and advanced forensics techniques made me a subject matter expert in the field.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Security Experts" },
    { icon: Award, value: "99%", label: "Job Security" },
    { icon: Clock, value: "2 Years", label: "Program Duration" },
    { icon: BookOpen, value: "25+", label: "Specialized Labs" }
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
                  className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  High Demand Field
                </motion.span>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white">MSc Cyber Forensics</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Master of Science in Cyber Forensics
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Become a cybersecurity expert with advanced training in digital forensics, incident response, 
                  and cyber threat analysis. Protect organizations from digital crimes and cyber attacks with 
                  cutting-edge investigative techniques and security protocols.
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
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cyber Forensics Security"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                Critical Skills
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                High Demand
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
              Master Cyber Investigation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MSc Cyber Forensics program provides comprehensive training in digital investigation, 
              cybersecurity, and incident response to combat modern cyber threats effectively.
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
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-red-400 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="bg-red-500 p-3 rounded-lg w-fit group-hover:bg-red-600 transition-colors">
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
              Specialized 2-Year Curriculum
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our curriculum combines theoretical knowledge with hands-on practical training 
              in state-of-the-art forensics labs and real-world case studies.
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
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-red-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-red-400 mb-6">{sem.semester}</h3>
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
              Cyber Security Professionals
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our graduates are protecting organizations and investigating cybercrimes at leading 
              security agencies and corporations. Here are their success stories.
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
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-red-400 transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Protect the Digital World
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join the fight against cybercrime with our MSc Cyber Forensics program. 
              Develop the skills to investigate digital crimes and protect organizations from cyber threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
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

export default MScCyberPage;