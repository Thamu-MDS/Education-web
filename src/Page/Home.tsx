import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-screen md:h-[100vh] lg:h-screen">
        <HeroSlider />
      </div>
      <Features />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;