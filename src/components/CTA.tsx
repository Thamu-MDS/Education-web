import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
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
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
            Join our next batch and take the first step towards a successful career. 
            Limited seats available for the upcoming semester.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Download Brochure
              </button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <Phone className="h-5 w-5 text-slate-900 mr-2" />
              <span className="text-slate-900 font-semibold">+91 9876543210</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <Mail className="h-5 w-5 text-slate-900 mr-2" />
              <span className="text-slate-900 font-semibold">admissions@mde.edu</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;