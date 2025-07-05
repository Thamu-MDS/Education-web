export interface Semester {
  semester: number | string;
  subjects: string[];
  price: string;
  hasChoice?: boolean;
  choices?: {
    project: {
      subjects: string[];
      price: string;
    };
    subjects: {
      subjects: string[];
      price: string;
    };
  };
}

export interface Elective {
  title: string;
  subjects: string[];
  icon: string;
}

export interface Program {
  title: string;
  description: string;
  semesterTitle: string;
  semesterDescription: string;
  semesters: Semester[];
  electives?: Elective[];
}

export const ProgramData: Record<string, Program> = {
  MBA: {
    title: "Master of Business Administration (MBA)",
    description: "Comprehensive MBA program designed to build your business acumen and leadership skills through strategic thinking, management principles, and practical application.",
    semesterTitle: "Semester-wise Curriculum & Pricing",
    semesterDescription: "Comprehensive MBA program designed to build your business acumen step by step",
    semesters: [
      {
        semester: 1,
        subjects: [
          "Management Principles and Business Ethics",
          "Organizational Behaviour",
          "Managerial Communication",
          "Statistics for Managers",
          "Accounting for Management"
        ],
        price: "₹2,500"
      },
      {
        semester: 2,
        subjects: [
          "Financial Management",
          "Marketing Management",
          "Human Resource Management",
          "Operations Management",
          "Business Law"
        ],
        price: "₹2,500"
      },
      {
        semester: 3,
        subjects: [
          "Strategic Management",
          "International Business",
          "Entrepreneurship Development",
          "Management Information Systems",
          "Research Methodology"
        ],
        price: "₹2,500"
      },
      {
        semester: 4,
        subjects: [],
        price: "",
        hasChoice: true,
        choices: {
          project: {
            subjects: [
              "Major Project Work",
              "Project Presentation",
              "Viva Voce"
            ],
            price: "₹2,500"
          },
          subjects: {
            subjects: [
              "Business Analytics",
              "Corporate Governance",
              "Innovation Management",
              "Digital Transformation",
              "Leadership Development"
            ],
            price: "₹2,500"
          }
        }
      }
    ],
    electives: [
      {
        title: "Marketing Management",
        subjects: [
          "Consumer Behaviour",
          "Brand Management",
          "Digital Marketing",
          "Sales Management",
          "Marketing Research"
        ],
        icon: "📊"
      },
      {
        title: "Financial Management",
        subjects: [
          "Investment Analysis",
          "Corporate Finance",
          "Financial Planning",
          "Risk Management",
          "International Finance"
        ],
        icon: "💰"
      },
      {
        title: "Hospital Management",
        subjects: [
          "Healthcare Operations",
          "Medical Administration",
          "Healthcare Quality",
          "Health Economics",
          "Healthcare Technology"
        ],
        icon: "🏥"
      },
      {
        title: "Systems Management",
        subjects: [
          "Information Systems",
          "Database Management",
          "System Analysis",
          "IT Project Management",
          "Cybersecurity"
        ],
        icon: "💻"
      },
      {
        title: "Logistics and Supply Chain",
        subjects: [
          "Supply Chain Strategy",
          "Logistics Management",
          "Inventory Management",
          "Distribution Systems",
          "Procurement Management"
        ],
        icon: "🚚"
      },
      {
        title: "Business Data Analytics",
        subjects: [
          "Data Mining",
          "Business Intelligence",
          "Predictive Analytics",
          "Statistical Analysis",
          "Data Visualization"
        ],
        icon: "📈"
      }
    ]
  },
  MCA: {
    title: "Master of Computer Applications (MCA)",
    description: "Advanced computer applications program focusing on software development, system design, emerging technologies, and preparing students for leadership roles in IT industry.",
    semesterTitle: "Semester-wise MCA Curriculum",
    semesterDescription: "Comprehensive MCA program designed to master advanced computing and software development",
    semesters: [
      {
        semester: 1,
        subjects: [
          "Mathematical Foundations for Computer Science",
          "Programming in C and Data Structures",
          "Computer Organization and Architecture",
          "Discrete Mathematics",
          "Professional Communication"
        ],
        price: "₹2,500"
      },
      {
        semester: 2,
        subjects: [
          "Object-Oriented Programming with Java",
          "Database Management Systems",
          "Operating Systems",
          "Software Engineering",
          "Computer Networks"
        ],
        price: "₹2,500"
      },
      {
        semester: 3,
        subjects: [
          "Web Technologies and Programming",
          "Design and Analysis of Algorithms",
          "System Programming",
          "Computer Graphics and Multimedia",
          "Management Information Systems"
        ],
        price: "₹2,500"
      },
      {
        semester: 4,
        subjects: [
          "Advanced Java Programming",
          "Mobile Application Development",
          "Network Programming",
          "Software Project Management",
          "Cyber Security Fundamentals"
        ],
        price: "₹2,500"
      },
      {
        semester: 5,
        subjects: [
          "Artificial Intelligence and Machine Learning",
          "Cloud Computing",
          "Big Data Analytics",
          "Internet of Things (IoT)",
          "Research Methodology"
        ],
        price: "₹2,500"
      },
      {
        semester: 6,
        subjects: [],
        price: "",
        hasChoice: true,
        choices: {
          project: {
            subjects: [
              "Major Project Development",
              "Project Documentation and Testing",
              "Project Presentation and Viva"
            ],
            price: "₹2,500"
          },
          subjects: {
            subjects: [
              "Advanced Database Systems",
              "Distributed Systems",
              "Software Architecture",
              "DevOps and Automation",
              "Emerging Technologies"
            ],
            price: "₹2,500"
          }
        }
      }
    ],
    electives: [
      {
        title: "Software Development",
        subjects: [
          "Full Stack Web Development",
          "Mobile App Development",
          "Software Architecture Design",
          "API Development and Integration",
          "Software Testing and Quality Assurance"
        ],
        icon: "💻"
      },
      {
        title: "Data Science & AI",
        subjects: [
          "Machine Learning Algorithms",
          "Deep Learning and Neural Networks",
          "Natural Language Processing",
          "Computer Vision",
          "Data Mining and Analytics"
        ],
        icon: "🤖"
      },
      {
        title: "Cloud & DevOps",
        subjects: [
          "Cloud Architecture and Services",
          "Container Technologies (Docker/Kubernetes)",
          "CI/CD Pipeline Development",
          "Infrastructure as Code",
          "Microservices Architecture"
        ],
        icon: "☁️"
      },
      {
        title: "Cybersecurity",
        subjects: [
          "Network Security",
          "Application Security",
          "Ethical Hacking and Penetration Testing",
          "Digital Forensics",
          "Security Compliance and Governance"
        ],
        icon: "🔒"
      }
    ]
  },
  MSC_CYBER: {
    title: "Master of Science in Cyber Security",
    description: "Advanced cybersecurity program focusing on protecting digital assets, ethical hacking, forensics, and security management in the modern digital landscape.",
    semesterTitle: "Semester-wise Cyber Security Curriculum",
    semesterDescription: "Comprehensive cybersecurity program to build expertise in digital security and threat management",
    semesters: [
      {
        semester: 1,
        subjects: [
          "Fundamentals of Cybersecurity",
          "Network Security Principles",
          "Cryptography and Data Protection",
          "Operating System Security",
          "Security Risk Assessment"
        ],
        price: "₹2,500"
      },
      {
        semester: 2,
        subjects: [
          "Ethical Hacking and Penetration Testing",
          "Digital Forensics",
          "Malware Analysis",
          "Web Application Security",
          "Incident Response Management"
        ],
        price: "₹2,500"
      },
      {
        semester: 3,
        subjects: [
          "Advanced Network Security",
          "Cloud Security Architecture",
          "Mobile Security",
          "IoT Security",
          "Security Governance and Compliance"
        ],
        price: "₹2,500"
      },
      {
        semester: 4,
        subjects: [],
        price: "",
        hasChoice: true,
        choices: {
          project: {
            subjects: [
              "Cybersecurity Research Project",
              "Security Implementation Project",
              "Project Defense"
            ],
            price: "₹2,500"
          },
          subjects: {
            subjects: [
              "Cyber Threat Intelligence",
              "Security Operations Center (SOC)",
              "Advanced Persistent Threats",
              "Blockchain Security",
              "Professional Ethics in Cybersecurity"
            ],
            price: "₹2,500"
          }
        }
      }
    ],
    electives: [
      {
        title: "Ethical Hacking",
        subjects: [
          "Penetration Testing Methodologies",
          "Vulnerability Assessment",
          "Social Engineering",
          "Wireless Security Testing",
          "Advanced Exploitation Techniques"
        ],
        icon: "🔒"
      },
      {
        title: "Digital Forensics",
        subjects: [
          "Computer Forensics",
          "Mobile Device Forensics",
          "Network Forensics",
          "Memory Analysis",
          "Legal Aspects of Digital Evidence"
        ],
        icon: "🔍"
      },
      {
        title: "Cloud Security",
        subjects: [
          "AWS Security",
          "Azure Security",
          "Container Security",
          "Serverless Security",
          "Cloud Compliance"
        ],
        icon: "☁️"
      }
    ]
  },
  MSC_IT: {
    title: "Master of Science in Information Technology",
    description: "Comprehensive IT program covering software development, database management, networking, and emerging technologies to prepare you for leadership roles in technology.",
    semesterTitle: "Semester-wise IT Curriculum",
    semesterDescription: "Advanced IT program designed to master modern technology and software development",
    semesters: [
      {
        semester: 1,
        subjects: [
          "Advanced Programming Concepts",
          "Database Management Systems",
          "Computer Networks",
          "Software Engineering",
          "Data Structures and Algorithms"
        ],
        price: "₹2,500"
      },
      {
        semester: 2,
        subjects: [
          "Web Technologies",
          "Mobile Application Development",
          "System Analysis and Design",
          "Network Administration",
          "Object-Oriented Programming"
        ],
        price: "₹2,500"
      },
      {
        semester: 3,
        subjects: [
          "Cloud Computing",
          "Artificial Intelligence",
          "Machine Learning",
          "Big Data Analytics",
          "Enterprise Resource Planning"
        ],
        price: "₹2,500"
      },
      {
        semester: 4,
        subjects: [],
        price: "",
        hasChoice: true,
        choices: {
          project: {
            subjects: [
              "Major IT Project",
              "System Implementation",
              "Project Presentation"
            ],
            price: "₹2,500"
          },
          subjects: {
            subjects: [
              "Project Management in IT",
              "IT Security and Audit",
              "Emerging Technologies",
              "DevOps and Automation",
              "Research Methodology"
            ],
            price: "₹2,500"
          }
        }
      }
    ],
    electives: [
      {
        title: "Software Development",
        subjects: [
          "Full Stack Development",
          "DevOps Practices",
          "Microservices Architecture",
          "API Development",
          "Software Testing"
        ],
        icon: "💻"
      },
      {
        title: "Data Science",
        subjects: [
          "Data Mining",
          "Statistical Analysis",
          "Machine Learning Algorithms",
          "Data Visualization",
          "Predictive Modeling"
        ],
        icon: "📊"
      },
      {
        title: "Network Administration",
        subjects: [
          "Network Design",
          "Server Management",
          "Network Security",
          "Wireless Networks",
          "Network Troubleshooting"
        ],
        icon: "🌐"
      }
    ]
  },
  BCA: {
    title: "Bachelor of Computer Applications (BCA)",
    description: "Undergraduate program in computer applications covering programming, web development, database management, and software engineering fundamentals.",
    semesterTitle: "Semester-wise BCA Curriculum",
    semesterDescription: "Comprehensive computer applications program building strong programming and technical foundations",
    semesters: [
      {
        semester: 1,
        subjects: [
          "Fundamentals of Computers",
          "Programming in C",
          "Mathematics for Computing",
          "Digital Electronics",
          "Communication Skills"
        ],
        price: "₹2,500"
      },
      {
        semester: 2,
        subjects: [
          "Data Structures",
          "Object-Oriented Programming with C++",
          "Computer Organization",
          "Discrete Mathematics",
          "Environmental Studies"
        ],
        price: "₹2,500"
      },
      {
        semester: 3,
        subjects: [
          "Database Management Systems",
          "Java Programming",
          "Computer Networks",
          "Operating Systems",
          "Software Engineering"
        ],
        price: "₹2,500"
      },
      {
        semester: 4,
        subjects: [
          "Web Technologies",
          "Python Programming",
          "Computer Graphics",
          "System Analysis and Design",
          "Mobile Application Development"
        ],
        price: "₹2,500"
      },
      {
        semester: 5,
        subjects: [
          "Advanced Java",
          "Data Mining",
          "Network Security",
          "E-Commerce",
          "Internship/Industrial Training"
        ],
        price: "₹2,500"
      },
      {
        semester: 6,
        subjects: [],
        price: "",
        hasChoice: true,
        choices: {
          project: {
            subjects: [
              "Final Year Project",
              "Project Documentation",
              "Project Viva"
            ],
            price: "₹2,500"
          },
          subjects: {
            subjects: [
              "Cloud Computing",
              "Artificial Intelligence",
              "Software Testing",
              "IT Project Management",
              "Emerging Technologies"
            ],
            price: "₹2,500"
          }
        }
      }
    ]
  },
  BCOM: {
    title: "Bachelor of Commerce (BCOM)",
    description: "Comprehensive commerce program covering accounting, finance, business law, economics, and management principles for a strong foundation in business studies.",
    semesterTitle: "Semester-wise BCOM Curriculum",
    semesterDescription: "Complete commerce education building expertise in business, finance, and accounting",
    semesters: [
      {
        semester: 1,
        subjects: [
          "Financial Accounting",
          "Business Mathematics",
          "Principles of Management",
          "Business Communication",
          "Environmental Studies"
        ],
        price: "₹2,500"
      },
      {
        semester: 2,
        subjects: [
          "Corporate Accounting",
          "Business Statistics",
          "Microeconomics",
          "Business Law",
          "Computer Applications in Business"
        ],
        price: "₹2,500"
      },
      {
        semester: 3,
        subjects: [
          "Cost Accounting",
          "Macroeconomics",
          "Company Law",
          "Banking and Insurance",
          "Marketing Management"
        ],
        price: "₹2,500"
      },
      {
        semester: 4,
        subjects: [
          "Management Accounting",
          "Financial Management",
          "Income Tax Law",
          "Human Resource Management",
          "Research Methodology"
        ],
        price: "₹2,500"
      },
      {
        semester: 5,
        subjects: [
          "Auditing",
          "International Business",
          "Goods and Service Tax",
          "Entrepreneurship Development",
          "Business Ethics"
        ],
        price: "₹2,500"
      },
      {
        semester: 6,
        subjects: [],
        price: "",
        hasChoice: true,
        choices: {
          project: {
            subjects: [
              "Comprehensive Project Work",
              "Business Case Study",
              "Project Presentation"
            ],
            price: "₹2,500"
          },
          subjects: {
            subjects: [
              "Financial Markets",
              "Strategic Management",
              "E-Commerce",
              "Project Management",
              "Advanced Business Analytics"
            ],
            price: "₹2,500"
          }
        }
      }
    ],
    electives: [
      {
        title: "Finance Specialization",
        subjects: [
          "Investment Analysis",
          "Portfolio Management",
          "Financial Planning",
          "Risk Management",
          "Corporate Finance"
        ],
        icon: "💰"
      },
      {
        title: "Marketing Specialization",
        subjects: [
          "Consumer Behaviour",
          "Brand Management",
          "Digital Marketing",
          "Sales Management",
          "Market Research"
        ],
        icon: "📈"
      },
      {
        title: "Accounting Specialization",
        subjects: [
          "Advanced Accounting",
          "Forensic Accounting",
          "International Accounting",
          "Taxation Planning",
          "Financial Reporting"
        ],
        icon: "📊"
      }
    ]
  }
};