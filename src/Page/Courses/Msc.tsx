import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
    Award,
    Users,
    Briefcase,
    Clock,
    ArrowRight,
    TrendingUp,
    Brain,
    Heart,
    Shield,
    Lock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const handleNavigate = () => {
    window.scrollTo(0, 0);
}; 

const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
};

const stats = [
  { icon: Briefcase, value: "95%", label: "Placement Rate" },
  { icon: Users, value: "24", label: "Faculty Experts" },
  { icon: Award, value: "18", label: "Months Program" },
  { icon: TrendingUp, value: "180%", label: "Salary Hike" }
];

function Msc() {
    const features = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Industry-Recognized Certification",
            description: "Earn a prestigious MSc degree recognized by top employers worldwide"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Faculty",
            description: "Learn from industry leaders and renowned academics with real-world experience"
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Career Support",
            description: "Dedicated career services with 95% job placement rate within 6 months"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Flexible Learning",
            description: "Part-time and full-time options with online and on-campus flexibility"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
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
                                    className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold"
                                >
                                    Emerging Tech Focus
                                </motion.span>

                                <h1 className="text-5xl lg:text-6xl font-bold text-white">Master of Science Programs</h1>
                                <p className="text-2xl text-yellow-400 font-semibold uppercase tracking-wider">
                                    Specialized Graduate Degrees
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                    Choose from our comprehensive range of MSc programs designed to meet the demands 
                                    of today's professional landscape across technology and psychology disciplines.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/contact"
                                        onClick={handleNavigate}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
                                    >
                                        Apply Now
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
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
                                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Graduate Programs"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            </div>

                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
                            >
                                Career Focused
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute -bottom-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-full font-semibold text-sm border border-slate-700 shadow-lg"
                            >
                                Industry Ready
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs Grid Section */}
            <motion.section
                className="py-24 px-4 bg-slate-900"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={fadeInUp} className="text-center mb-20">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="inline-block mb-4"
                        >
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] px-6 py-2 rounded-full text-sm font-bold">
                                🎓 Four Specialized Programs
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                            Choose Your Path
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Four specialized master's programs designed to meet the demands of today's professional landscape. 
                            Each program offers unique career opportunities and industry connections.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Cyber Forensics Program */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                            className="bg-gradient-to-br from-yellow-400/15 to-yellow-600/5 backdrop-blur-sm p-10 rounded-2xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-500 relative overflow-hidden group"
                        >
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="absolute -top-8 -right-8 w-28 h-28 bg-blue-400/5 rounded-full"
                            />

                            <motion.div
                                className="text-yellow-500 mb-8"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Shield className="w-16 h-16" />
                            </motion.div>

                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-yellow-500 transition-colors duration-300">
                                MSc Cyber Forensics
                            </h3>

                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                Specialized program in digital investigation, cybersecurity, and forensic analysis for law enforcement and corporate security.
                            </p>

                            <div className="space-y-3">
                               <Link to="/msc-cyber" onClick={handleNavigate}>
                                    <motion.button
                                        {...scaleOnHover}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-lg"
                                    >
                                        Learn More
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* MSc IT Program */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                            className="bg-gradient-to-br from-yellow-400/15 to-yellow-600/5 backdrop-blur-sm p-10 rounded-2xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-500 relative overflow-hidden group"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 5 }}
                                className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-400/5 rounded-full"
                            />

                            <motion.div
                                className="text-yellow-500 mb-8"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Lock className="w-16 h-16" />
                            </motion.div>

                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-yellow-500 transition-colors duration-300">
                                MSc Information Technology
                            </h3>

                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                Comprehensive IT management program focusing on enterprise systems, cloud infrastructure, and digital transformation.
                            </p>

                            <div className="space-y-3">
                               <Link to="/msc-it" onClick={handleNavigate}>
                                    <motion.button
                                        {...scaleOnHover}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-lg"
                                    >
                                        Learn More
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* MSc Psychology Program */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                            className="bg-gradient-to-br from-yellow-400/15 to-yellow-600/5 backdrop-blur-sm p-10 rounded-2xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-500 relative overflow-hidden group"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute -top-8 -left-8 w-28 h-28 bg-pink-400/5 rounded-full"
                            />

                            <motion.div
                                className="text-yellow-500  mb-8"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Brain className="w-16 h-16" />
                            </motion.div>

                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-yellow-500 transition-colors duration-300">
                                MSc Psychology
                            </h3>

                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                Comprehensive study of human behavior, cognition, and mental processes with practical applications in various settings.
                            </p>

                            <div className="space-y-3">
                               <Link to="" onClick={handleNavigate}>
                                    <motion.button
                                        {...scaleOnHover}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-lg"
                                    >
                                        Learn More
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* MSc Counseling Psychology Program */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                            className="bg-gradient-to-br from-yellow-400/15 to-yellow-600/5 backdrop-blur-sm p-10 rounded-2xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-500 relative overflow-hidden group"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 6 }}
                                className="absolute -bottom-8 -left-8 w-28 h-28 bg-purple-400/5 rounded-full"
                            />

                            <motion.div
                                className="text-yellow-500  mb-8"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Heart className="w-16 h-16" />
                            </motion.div>

                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-yellow-500 transition-colors duration-300">
                                MSc Counseling Psychology
                            </h3>

                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                Professional training in therapeutic techniques, mental health assessment, and client-centered therapy approaches.
                            </p>

                            <div className="space-y-3">
                               <Link to="/msc-cphy" onClick={handleNavigate}>
                                    <motion.button
                                        {...scaleOnHover}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a1f44] font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-lg"
                                    >
                                        Learn More
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Additional Info Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-20 text-center"
                    >
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Why Choose Our Programs?</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                        className="text-yellow-400 mb-4 mx-auto w-fit"
                                    >
                                        <Award className="w-12 h-12" />
                                    </motion.div>
                                    <h4 className="font-bold text-white mb-2">Industry Recognition</h4>
                                    <p className="text-gray-300 text-sm">Accredited programs recognized by top employers worldwide</p>
                                </div>
                                <div className="text-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="text-yellow-400 mb-4 mx-auto w-fit"
                                    >
                                        <Users className="w-12 h-12" />
                                    </motion.div>
                                    <h4 className="font-bold text-white mb-2">Expert Faculty</h4>
                                    <p className="text-gray-300 text-sm">Learn from industry leaders and renowned academics</p>
                                </div>
                                <div className="text-center">
                                    <motion.div
                                        animate={{ y: [-5, 5, -5] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="text-yellow-400 mb-4 mx-auto w-fit"
                                    >
                                        <TrendingUp className="w-12 h-12" />
                                    </motion.div>
                                    <h4 className="font-bold text-white mb-2">Career Growth</h4>
                                    <p className="text-gray-300 text-sm">95% job placement rate with average 180% salary increase</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Why Choose This Program */}
            <motion.section
                className="py-20 px-4 bg-gradient-to-b from-[#0a1f44] to-[#1a365d]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
                            Why Choose Our Program?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Join thousands of successful graduates who have transformed their careers with our comprehensive MSc programs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <div className="text-yellow-400 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export default Msc;