import { motion } from 'framer-motion';
import { Award, Users, Globe, Target, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for academic excellence and maintain the highest standards in education delivery."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Our students are at the center of everything we do, ensuring their success is our priority."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace innovative teaching methods and cutting-edge technology in education."
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We maintain transparency, honesty, and ethical practices in all our operations."
    },
    {
      icon: BookOpen,
      title: "Accessibility",
      description: "We make quality education accessible to students regardless of their geographical location."
    },
    {
      icon: Heart,
      title: "Community",
      description: "We foster a supportive learning community that encourages collaboration and growth."
    }
  ];

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "50,000+", label: "Alumni Network" },
    { value: "100+", label: "Expert Faculty" },
    { value: "95%", label: "Success Rate" }
  ];

  const milestones = [
    {
      year: "1999",
      title: "Foundation",
      description: "Established as a pioneer in distance education with a vision to democratize quality education."
    },
    {
      year: "2005",
      title: "Digital Transformation",
      description: "Launched online learning platform, becoming one of the first institutions to embrace digital education."
    },
    {
      year: "2010",
      title: "Program Expansion",
      description: "Expanded course offerings to include MBA, MCA, and specialized professional programs."
    },
    {
      year: "2015",
      title: "Industry Partnerships",
      description: "Formed strategic partnerships with leading companies for internships and placement opportunities."
    },
    {
      year: "2020",
      title: "Global Reach",
      description: "Extended services internationally, serving students across multiple countries."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated AI-powered learning tools and personalized education pathways."
    }
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
                  25+ Years of Excellence
                </motion.span>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  Transforming Lives Through Education
                </h1>
                <p className="text-xl text-yellow-400 font-semibold">
                  Madras Distance Education
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  For over two decades, we have been at the forefront of distance education, 
                  empowering students worldwide with quality education that transcends geographical boundaries. 
                  Our commitment to excellence has made us a trusted name in online learning.
                </p>
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
                    <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
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
                  alt="Students Learning"
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
                Trusted Leader
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Global Reach
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-xl border border-slate-700"
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To democratize quality education by providing accessible, flexible, and industry-relevant 
                learning opportunities that empower students to achieve their academic and professional goals, 
                regardless of their geographical location or personal circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-xl border border-slate-700"
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To be the global leader in distance education, recognized for our innovative teaching 
                methodologies, cutting-edge technology integration, and commitment to student success. 
                We envision a world where quality education knows no boundaries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, 
              and define our commitment to educational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="bg-yellow-400 p-3 rounded-lg w-fit group-hover:bg-yellow-500 transition-colors">
                    <value.icon className="h-6 w-6 text-slate-900" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a leader in distance education, 
              here are the key milestones that shaped our institution.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-400"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300">
                      <div className="text-yellow-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold text-xl mb-3">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-800"></div>
                </motion.div>
              ))}
            </div>
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
              Join Our Legacy of Excellence
            </h2>
            <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
              Become part of our growing community of successful graduates. 
              Start your educational journey with us and transform your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Explore Programs
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;