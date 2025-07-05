import { motion } from 'framer-motion';
import { Code, Users, Award, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Practical Learning",
      description: "Hands-on experience with real-world projects and industry-standard tools and technologies."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of experience and academic excellence."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Degrees recognized by top companies with excellent placement opportunities worldwide."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with recorded lectures and live interactive sessions."
    }
  ];

  return (
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
            Why Choose Our Programs?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your career with our comprehensive educational programs designed for the modern professional landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
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
  );
};

export default Features;