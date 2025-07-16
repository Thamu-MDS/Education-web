import { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://education-web-re6d.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submission successful:', result);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Unit No.509, Beta Wing, 5th Floor Raheja Towers.177, Anna Salai, Chennai, Tamil Nadu 600002"],
      link: "https://www.google.com/maps/place/HETA+INSTITUTE+OF+TECHNOLOGY/@13.0624437,80.2653258,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526504a0f3792f:0xfc7d8e8cad27aa54!8m2!3d13.0624437!4d80.2653258!16s%2Fg%2F11rsfsqw8w?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
      action: () => window.open("https://www.google.com/maps/place/HETA+INSTITUTE+OF+TECHNOLOGY/@13.0624437,80.2653258,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526504a0f3792f:0xfc7d8e8cad27aa54!8m2!3d13.0624437!4d80.2653258!16s%2Fg%2F11rsfsqw8w?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D", "_blank")
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9884880809", "+91 9150249532", "Mon-Sat: 9AM-6PM"],
      action: (phoneNumber: string) => window.open(`tel:${phoneNumber.replace(/\D/g, '')}`)
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hetaeduversity2025@gmail.com"],
      action: (email: string) => window.open(`mailto:${email}`)
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
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 group text-center cursor-pointer"
                onClick={() => {
                  if (info.action) {
                    if (info.title === "Call Us" || info.title === "Email Us") {
                      info.action(info.details[0]);
                    } else {
                      info.action();
                    }
                  }
                }}
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
                    <p 
                      key={detailIndex} 
                      className="text-slate-400 hover:text-yellow-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (info.title === "Call Us" && info.action && detail.match(/\+?\d[\d -]{8,}\d/)) {
                          info.action(detail);
                        } else if (info.title === "Email Us" && info.action && detail.includes("@")) {
                          info.action(detail);
                        }
                      }}
                    >
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

                {error && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                    {error}
                  </div>
                )}

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

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
                    disabled={isLoading}
                    className={`w-full ${isLoading ? 'bg-yellow-600' : 'bg-yellow-400 hover:bg-yellow-500'} text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : isSubmitted ? (
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
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 h-64 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full w-full"
                >
                  <iframe
                    title="Location Map"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5790731004304!2d80.262750874843!3d13.062443687261345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526504a0f3792f%3A0xfc7d8e8cad27aa54!2sHETA%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1751520011502!5m2!1sen!"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </motion.div>
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div 
                    className="flex items-center cursor-pointer hover:text-yellow-400 transition-colors"
                    onClick={() => window.open('tel:+919884880809')}
                  >
                    <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-slate-300">+91 9884880809</span>
                  </div>
                  <div 
                    className="flex items-center cursor-pointer hover:text-yellow-400 transition-colors"
                    onClick={() => window.open('mailto:hetaeduversity2025@gmail.com')}
                  >
                    <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-slate-300">hetaeduversity2025@gmail.com</span>
                  </div>
                  <div 
                    className="flex items-start cursor-pointer hover:text-yellow-400 transition-colors"
                    onClick={() => window.open('https://www.google.com/maps/place/HETA+INSTITUTE+OF+TECHNOLOGY/@13.0624437,80.2653258,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526504a0f3792f:0xfc7d8e8cad27aa54!8m2!3d13.0624437!4d80.2653258!16s%2Fg%2F11rsfsqw8w?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                  >
                    <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                    <div className="text-slate-300">
                      <p>View on Google Maps</p>
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