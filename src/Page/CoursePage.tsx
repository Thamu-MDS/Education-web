import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase, FaLaptopCode, FaNetworkWired,
  FaShieldAlt, FaGraduationCap, FaBook, FaChartBar
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/* 1. DATA                                                            */
/* ------------------------------------------------------------------ */
const courses = [
  {
    id: 'mba',
    icon: <FaBriefcase />,
    title: 'MBA',
    duration: '2 Years',
    summary:
      'Master of Business Administration program tailored for aspiring leaders, managers, and entrepreneurs looking to gain expertise in management, marketing, and finance.',
    highlights: ['Finance & Marketing', 'Business Analytics', 'Case Studies', 'Internship Program'],
    careerPaths: ['Marketing Manager', 'HR Manager', 'Business Analyst'],
    mentor: { name: 'Dr. Priya Sharma', title: 'Professor of Management' },
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mca',
    icon: <FaLaptopCode />,
    title: 'MCA',
    duration: '2 Years',
    summary:
      'Master of Computer Applications focusing on full‑stack development, software architecture, and AI‑driven applications.',
    highlights: ['Full‑Stack Development', 'AI & ML', 'Cloud Computing'],
    careerPaths: ['Software Developer', 'Backend Engineer', 'Cloud Architect'],
    mentor: { name: 'Mr. Arjun Mehta', title: 'Senior Software Architect' },
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'msc-it',
    icon: <FaNetworkWired />,
    title: 'M.Sc IT',
    duration: '2 Years',
    summary:
      'Master of Science in IT prepares professionals in enterprise systems, network security, and information management.',
    highlights: ['Networking', 'IT Management', 'Cybersecurity Basics'],
    careerPaths: ['IT Consultant', 'Network Admin', 'Data Manager'],
    mentor: { name: 'Ms. Kavitha R.', title: 'IT Infrastructure Lead' },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'msc-cf',
    icon: <FaShieldAlt />,
    title: 'M.Sc CF',
    duration: '2 Years',
    summary:
      'M.Sc in Cyber Forensics builds expertise in digital investigation, cyber law, and forensic analysis.',
    highlights: ['Ethical Hacking', 'Cyber Law', 'Forensic Tools'],
    careerPaths: ['Forensic Analyst', 'Security Consultant', 'Investigator'],
    mentor: { name: 'Mr. Vinod Kumar', title: 'Cybersecurity Investigator' },
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bca',
    icon: <FaGraduationCap />,
    title: 'BCA',
    duration: '3 Years',
    summary:
      'Bachelor in Computer Applications focused on programming languages, web development, and software testing.',
    highlights: ['C++, Java, Python', 'Web Dev Projects', 'Database Design'],
    careerPaths: ['Web Developer', 'IT Support', 'Junior Programmer'],
    mentor: { name: 'Mrs. Swetha M.', title: 'Frontend Developer & Lecturer' },
    image: 'https://images.unsplash.com/photo-1580894894513-79a9dc9d2785?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bcom',
    icon: <FaBook />,
    title: 'B.Com',
    duration: '3 Years',
    summary:
      'Bachelor of Commerce with specialization in finance, accounting, taxation and business law.',
    highlights: ['Accounting', 'Finance', 'Taxation'],
    careerPaths: ['Accountant', 'Bank PO', 'Auditor'],
    mentor: { name: 'Mr. Rajan Iyer', title: 'Chartered Accountant & Faculty' },
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mcom',
    icon: <FaChartBar />,
    title: 'M.Com',
    duration: '2 Years',
    summary:
      'Master in Commerce for those pursuing careers in financial analysis, commerce teaching, or corporate law.',
    highlights: ['Advanced Taxation', 'Business Law', 'Research Project'],
    careerPaths: ['Finance Analyst', 'Auditor', 'Commerce Professor'],
    mentor: { name: 'Dr. Rekha Narayanan', title: 'Professor of Commerce' },
    image: 'https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=800&q=80'
  }
];

/* ------------------------------------------------------------------ */
/* 2. ANIMATION HELPERS                                               */
/* ------------------------------------------------------------------ */
const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } })
};

/* ------------------------------------------------------------------ */
/* 3. COMPONENT                                                       */
/* ------------------------------------------------------------------ */
const CoursePage: React.FC = () => (
  <section className="bg-gray-50">
    {/* ▸▸ HERO SECTION ◂◂ */}
    <div className="relative h-[340px] md:h-[420px] overflow-hidden">
      {/* Banner image */}
      <motion.img
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=75"
        alt="Students collaborating"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-700/60" />
      {/* Headline */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Elevate Your Career with<br className="hidden md:block" /> Distance Learning Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Industry‑relevant curricula, expert mentors, and flexible schedules to help you succeed.
          </motion.p>
        </div>
      </div>
    </div>

    {/* ▸▸ COURSE SECTIONS ◂◂ */}
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-primary-950 mb-16">
        Our Programs
      </h2>

      {courses.map((course, index) => (
        <motion.article
          id={course.id}
          key={course.id}
          custom={index}
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 scroll-mt-28"
        >
          {/* Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Course image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>

            {/* Textual content */}
            <div>
              {/* Header */}
              <div className="flex items-center mb-4">
                <span className="text-3xl text-primary-800 mr-3">{course.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-primary-950">{course.title}</h3>
                  <p className="text-gold-600 font-semibold">{course.duration}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-700 mb-6">{course.summary}</p>

              {/* Highlights & Career paths */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-950 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {course.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-950 mb-2">
                    Career Paths
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {course.careerPaths.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mentor */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary-950 mb-2">
                  Mentor Details
                </h4>
                <p className="text-gray-800">
                  <strong>{course.mentor.name}</strong> – {course.mentor.title}
                </p>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="bg-primary-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default CoursePage;
