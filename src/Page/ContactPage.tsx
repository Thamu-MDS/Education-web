import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Education Street", "Chennai, Tamil Nadu 600001", "India"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9876543210", "+91 9876543211", "Mon-Sat: 9AM-6PM"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["admissions@mde.edu", "info@mde.edu", "support@mde.edu"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 9AM - 4PM", "Sunday: Closed"]
    }
  ];

  const courses = [
    "MCA - Master of Computer Applications",
    "MBA - Master of Business Administration", 
    "BCA - Bachelor of Computer Applications",
    "MSc IT - Master of Science in Information Technology",
    "MSc Cyber Forensics - Master of Science in Cyber Forensics",
    "B.Com - Bachelor of Commerce"
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Get In Touch
            </motion.span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your educational journey? We're here to help you every step of the way. 
              Get in touch with our admissions team for personalized guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 group text-center"
              >
                <div className="mb-6">
                  <div className="bg-yellow-400 p-4 rounded-lg w-fit mx-auto group-hover:bg-yellow-500 transition-colors">
                    <info.icon className="h-8 w-8 text-slate-900" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-400">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-slate-300 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-slate-300 mb-2">
                        Course of Interest
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      placeholder="Tell us about your educational goals and any questions you have..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Our Campus</h3>
                  <p className="text-slate-300">
                    123 Education Street<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-slate-300">+91 9876543210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-slate-300">admissions@mde.edu</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                    <div className="text-slate-300">
                      <p>Monday - Friday: 9AM - 6PM</p>
                      <p>Saturday: 9AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">How do I apply?</h4>
                    <p className="text-slate-300 text-sm">
                      You can apply online through our website or contact our admissions team for assistance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">What are the admission requirements?</h4>
                    <p className="text-slate-300 text-sm">
                      Requirements vary by program. Contact us for specific eligibility criteria.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Do you offer financial aid?</h4>
                    <p className="text-slate-300 text-sm">
                      Yes, we offer various scholarship and financial assistance programs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;