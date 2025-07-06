import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Smartphone, Shield, ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MCAPage = () => {
  const features = [
    {
      icon: Code,
      title: "Advanced Programming",
      description: "Master multiple programming languages including Java, Python, C++, and JavaScript with hands-on projects."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Learn SQL, NoSQL, and modern database technologies like MongoDB, PostgreSQL, and Redis."
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Gain expertise in AWS, Azure, and Google Cloud platforms with practical deployment experience."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Explore artificial intelligence, machine learning algorithms, and deep learning frameworks."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Build native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Understand security principles, ethical hacking, and modern cybersecurity practices."
    }
  ];

  const curriculum = [
    {
      semester: "Semester 1",
      courses: [
        "Programming Fundamentals with C++",
        "Data Structures and Algorithms",
        "Computer Organization and Architecture",
        "Discrete Mathematics",
        "Technical Communication"
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        "Object-Oriented Programming with Java",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering Principles"
      ]
    },
    {
      semester: "Semester 3",
      courses: [
        "Web Development (HTML, CSS, JavaScript)",
        "Python Programming",
        "System Analysis and Design",
        "Computer Graphics",
        "Statistics for Data Science"
      ]
    },
    {
      semester: "Semester 4",
      courses: [
        "Advanced Web Development (React, Node.js)",
        "Mobile Application Development",
        "Cloud Computing Fundamentals",
        "Data Mining and Warehousing",
        "Project Management"
      ]
    },
    {
      semester: "Semester 5",
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "DevOps and Deployment",
        "Cybersecurity Fundamentals",
        "Research Methodology"
      ]
    },
    {
      semester: "Semester 6",
      courses: [
        "Advanced AI and Deep Learning",
        "Blockchain Technology",
        "Industry Internship",
        "Major Project",
        "Seminar and Presentation"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Software Engineer at Google",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The MCA program transformed my career completely. The comprehensive curriculum and practical approach prepared me for real-world challenges in tech.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer at Microsoft",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Outstanding faculty and industry-relevant projects. The AI and ML modules were particularly impressive and helped me land my dream job.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Data Scientist at Amazon",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The program's focus on emerging technologies like AI, ML, and cloud computing gave me a competitive edge in the job market.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "2000+", label: "Students Enrolled" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: Clock, value: "3 Years", label: "Program Duration" },
    { icon: Star, value: "4.9/5", label: "Student Rating" }
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
                  Most Popular Program
                </motion.span>
                
                <h1 className="text-7xl lg:text-8xl font-bold text-white">MCA</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Master of Computer Applications
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Transform your passion for technology into a rewarding career. Our comprehensive MCA program 
                  combines theoretical knowledge with hands-on experience in cutting-edge technologies like AI, 
                  ML, cloud computing, and modern software development.
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
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MCA Student Programming"
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
                Industry Ready
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                100% Online
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
              Master Modern Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MCA curriculum is designed to make you proficient in the latest technologies 
              that are shaping the future of software development and computer applications.
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
              Comprehensive 3-Year Curriculum
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our carefully structured curriculum progresses from fundamentals to advanced topics, 
              ensuring you build a strong foundation while staying current with industry trends.
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
              Success Stories from Our Alumni
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our MCA graduates are working at top tech companies worldwide. 
              Here's what they have to say about their journey with us.
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
              Ready to Start Your MCA Journey?
            </h2>
            <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
              Join our next batch and transform your career with comprehensive computer applications education. 
              Limited seats available for the upcoming semester.
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

export default MCAPage;