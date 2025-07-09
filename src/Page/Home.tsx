import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative block  overflow-hidden  h-[71.5rem]'>
        <HeroSlider />
      </div>
      <Features />
     
      <CTA />
    </motion.div>
  );
};

export default Home;