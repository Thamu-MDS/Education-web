import { motion } from 'framer-motion';
import { TrendingUp, Calculator, PieChart, Building, Briefcase, DollarSign, ArrowRight, CheckCircle, Star, Users, Award, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BComPage = () => {
  const features = [
    {
      icon: Calculator,
      title: "Accounting & Finance",
      description: "Master financial accounting, cost accounting, and advanced financial management principles."
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Learn data analysis, business intelligence, and statistical methods for decision making."
    },
    {
      icon: PieChart,
      title: "Economics",
      description: "Understand micro and macroeconomics, market dynamics, and economic policy analysis."
    },
    {
      icon: Building,
      title: "Corporate Law",
      description: "Study business law, corporate governance, and legal compliance requirements."
    },
    {
      icon: Briefcase,
      title: "Business Management",
      description: "Develop skills in organizational behavior, strategic planning, and operations management."
    },
    {
      icon: DollarSign,
      title: "Taxation",
      description: "Learn direct and indirect taxation, tax planning, and compliance procedures."
    }
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Financial Accounting",
        "Business Mathematics",
        "Principles of Management",
        "Business Economics",
        "Business Communication",
        "Computer Applications in Business"
      ]
    },
    {
      year: "Second Year",
      courses: [
        "Cost Accounting",
        "Corporate Accounting",
        "Business Statistics",
        "Marketing Management",
        "Human Resource Management",
        "Business Law"
      ]
    },
    {
      year: "Third Year",
      courses: [
        "Advanced Accounting",
        "Financial Management",
        "Income Tax and GST",
        "Auditing and Assurance",
        "International Business",
        "Project Work and Internship"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sneha Agarwal",
      role: "Financial Analyst at HDFC Bank",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The B.Com program provided me with a strong foundation in finance and accounting. It opened doors to excellent career opportunities in banking.",
      rating: 5
    },
    {
      name: "Rajesh Mehta",
      role: "Tax Consultant",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The comprehensive coverage of taxation and business law helped me establish my own tax consultancy practice successfully.",
      rating: 5
    },
    {
      name: "Priya Joshi",
      role: "Business Analyst at Wipro",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The business analytics and management modules prepared me well for my role in corporate strategy and business analysis.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "2500+", label: "Commerce Graduates" },
    { icon: Award, value: "94%", label: "Employment Rate" },
    { icon: Clock, value: "3 Years", label: "Program Duration" },
    { icon: BookOpen, value: "45+", label: "Core Subjects" }
  ];

  const careerPaths = [
    "Chartered Accountant (CA)",
    "Company Secretary (CS)",
    "Cost and Management Accountant (CMA)",
    "Banking and Financial Services",
    "Tax Consultant",
    "Business Analyst",
    "Financial Analyst",
    "Audit and Assurance",
    "Corporate Finance",
    "Investment Banking"
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
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Business Foundation
                </motion.span>
                
                <h1 className="text-7xl lg:text-8xl font-bold text-white">B.Com</h1>
                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                  Bachelor of Commerce
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Build a strong foundation in business, accounting, and finance with our comprehensive B.Com program. 
                  Prepare for diverse career opportunities in the corporate world, professional services, 
                  and entrepreneurship with industry-relevant curriculum.
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="B.Com Business Studies"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                Career Ready
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
              >
                Professional Path
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
              Comprehensive Business Education
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our B.Com program provides a well-rounded business education covering all essential areas 
              of commerce, finance, and management to prepare you for professional success.
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
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="bg-green-500 p-3 rounded-lg w-fit group-hover:bg-green-600 transition-colors">
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
              Progressive 3-Year Curriculum
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our B.Com curriculum is structured to build your business knowledge progressively, 
              from fundamental concepts to advanced applications in commerce and finance.
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
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-green-400 mb-6">{year.year}</h3>
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

      {/* Career Paths Section */}
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
              Diverse Career Opportunities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              B.Com graduates have access to a wide range of career paths in finance, accounting, 
              business, and professional services. Here are some popular career options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-green-400 transition-all duration-300 text-center"
              >
                <p className="text-slate-300 font-medium">{career}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Success Stories from Our Graduates
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our B.Com graduates have built successful careers across various industries. 
              Discover how our program helped them achieve their professional goals.
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
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-green-400 transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your Business Career Today
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Launch your career in commerce and finance with our comprehensive B.Com program. 
              Build the foundation for professional success and diverse career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-green-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BComPage;