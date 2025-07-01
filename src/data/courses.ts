import { Course, HeroContent } from '../types';

export const courses: Course[] = [
  {
    id: 'mba',
    title: 'MBA - Master of Business Administration',
    duration: '2 Years',
    summary: 'A flexible, affordable MBA program tailored for working professionals seeking leadership roles in business management.',
    highlights: ['Strategic Management', 'Financial Analysis', 'Leadership Skills', 'Digital Marketing'],
    icon: '💼',
    category: 'Business',
    careerPaths: ['Product Manager', 'Business Analyst', 'Operations Manager', 'Consultant']
  },
  {
    id: 'mca',
    title: 'MCA - Master of Computer Applications',
    duration: '3 Years',
    summary: 'Comprehensive computer science program focusing on software development, system analysis, and emerging technologies.',
    highlights: ['Software Engineering', 'Data Structures', 'Web Development', 'AI & ML'],
    icon: '💻',
    category: 'Technology',
    careerPaths: ['Software Developer', 'System Analyst', 'Technical Lead', 'IT Consultant']
  },
  {
    id: 'msc-it',
    title: 'MSc IT - Information Technology',
    duration: '2 Years',
    summary: 'Advanced IT program covering network security, database management, and modern computing technologies.',
    highlights: ['Network Security', 'Database Management', 'Cloud Computing', 'Project Management'],
    icon: '🔧',
    category: 'Technology',
    careerPaths: ['IT Manager', 'Network Administrator', 'Database Administrator', 'Cloud Architect']
  },
  {
    id: 'msc-cyber',
    title: 'MSc Cyber Forensics',
    duration: '2 Years',
    summary: 'Specialized program in digital forensics, cybersecurity, and investigation of cyber crimes.',
    highlights: ['Digital Forensics', 'Cybersecurity', 'Ethical Hacking', 'Legal Aspects'],
    icon: '🔒',
    category: 'Security',
    careerPaths: ['Cyber Security Analyst', 'Digital Forensics Expert', 'Security Consultant', 'Incident Response Specialist']
  },
  {
    id: 'bca',
    title: 'BCA - Bachelor of Computer Applications',
    duration: '3 Years',
    summary: 'Undergraduate program providing strong foundation in computer applications and programming.',
    highlights: ['Programming Languages', 'Web Technologies', 'Database Systems', 'Software Testing'],
    icon: '🖥️',
    category: 'Technology',
    careerPaths: ['Junior Developer', 'Web Designer', 'System Administrator', 'Technical Support']
  },
  {
    id: 'bcom',
    title: 'B.Com - Bachelor of Commerce',
    duration: '3 Years',
    summary: 'Comprehensive commerce program covering accounting, finance, business law, and economics.',
    highlights: ['Financial Accounting', 'Business Law', 'Economics', 'Taxation'],
    icon: '📊',
    category: 'Commerce',
    careerPaths: ['Accountant', 'Financial Analyst', 'Tax Consultant', 'Banking Professional']
  }
];

export const heroContent: HeroContent[] = [
  {
    courseName: 'MBA',
    abbreviation: 'Master of Business Administration',
    summary: 'A flexible, affordable MBA program tailored for working professionals seeking leadership excellence.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    courseName: 'MCA',
    abbreviation: 'Master of Computer Applications',
    summary: 'Comprehensive computer science education with focus on practical software development skills.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    courseName: 'MSc Cyber Forensics',
    abbreviation: 'Master of Science in Cyber Forensics',
    summary: 'Advanced cybersecurity program preparing experts for digital investigation and security roles.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];