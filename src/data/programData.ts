// programData.ts
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
        semester: "Semester 1",
        subjects: [
          "Management principles and Business Ethics ",
          "Quantitative and ResearchMethods in Business",
          "OrganisationalBehaviour",
          "Accounting for Managers",
          "Managerial Economics"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Legal Systems in Business",
          "Applied Operations Research",
          "strategic Management",
          "InternationalBusiness",
          "Management Information System"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Human Resource Management",
          "Marketing Management",
          "Operations Management",
          "Financial Management",
          "Innovation and Entrepreneurship"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Entrepreneurship Development",
          "Business Analytics",
          "Corporate Governance",
          "Industry Project",
          "Management Seminar"
        ],
        price: "₹12,500"
      },
      {
        semester: "Project",
        subjects: [
          "Entrepreneurship Development",
          "Business Analytics",
          "Corporate Governance",
          "Industry Project",
          "Management Seminar"
        ],
        price: "₹12,500"
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
        semester: "Semester 1",
        subjects: [
          "C++ & Data Structures  ",
          "Digital Logic Fundamentals  ",
          "Database Management Systems ",
          "Practical-I: DS using C++  Lab",
          "Practical-II: RDBMS Lab",
          "Accounting & Financial Management",
          "Operating Systems"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Design and Analysis od Algorithms",
          "Object Oriented Analysis and Design ",
          "Artificial Intelligence ",
          "Practical-III: OOAD Lab ",
          "Practical-IV: Web Based Application Development Lab.",
          "Web Based Application Development  ",
          "Computer Network "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Machine Learning  ",
          "Practical-V:  Machine Learning Lab  ",
          "Practical-VI:  Mini Project (Group Project)  ",
          "Software Project Management ",
          "Cloud Computing ",
          "Mobile Application Development "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Project & Viva-Voce "
        ],
        price: "₹12,500"
      },
      {
        semester: "Project",
        subjects: [
          "Project & Viva-Voce "
        ],
        price: "₹12,500"
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
    title: "Master of Science in Cyber Forensic",
    description: "Advanced cybersecurity program focusing on protecting digital assets, ethical hacking, forensics, and security management in the modern digital landscape.",
    semesterTitle: "Semester-wise Cyber Security Curriculum",
    semesterDescription: "Comprehensive cybersecurity program to build expertise in digital security and threat management",
    semesters: [
      {
        semester: "Semester 1",
        subjects: [
          "Introduction to Cyber Criminology  ",
          "Networking and Communication Protocols ",
          "Introduction to Information Security ",
          "IT Infrastructure and Cloud Computing",
          "Forms of Cyber Crimes "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Network Security and Cryptography ",
          "Basics of Cyber Forensics ",
          "IT and Telecom Frauds  & Countermeasures ",
          "Practical- I  –  (Networking and Information Security)  ",
          "BFSI Frauds & Countermeasures "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Database Management Security ",
          "Advanced Cyber Forensics ",
          "Advanced Information  Security",
          "Practical – II (Cyber Forensics)",
          "Data Privacy"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Application Security ",
          "Governance, Risk  &Compliance ",
          "Business Continuity & Disaster Recovery Management ",
          "Security Testing ",
          "Cyber Laws &  Intellectual Property Rights "
        ],
        price: "₹12,500"
      },
      {
        semester: "Project",
        subjects: [
          "Application Security ",
          "Governance, Risk  &Compliance ",
          "Business Continuity & Disaster Recovery Management ",
          "Security Testing ",
          "Cyber Laws &  Intellectual Property Rights "
        ],
        price: "₹12,500"
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
        semester: "Semester 1",
        subjects: [
          "C++ and Data Structures ",
          "Computer Architecture ",
          "Data Base Management Systems",
          "Practical – I: Data Structures Lab. Using C ++ ",
          "Practical – II: RDBMS Lab. ",
          "Visual Programming"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Operating Systems",
          "Programming in Java ",
          "Practical – III: Java Programming Lab ",
          "Data Warehousing and data Mining ",
          "Dot Net Programming",
          "Practical – IV: Dot Net Programming Lab. "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Computer Networks",
          "Design and Analysis of Algorithms ",
          "Advanced Java Programming ",
          "Information Security ",
          "Practical – V: Advanced Java Lab. ",
          "Practical – VI: Mini Project ",
          "Mobile Computing "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Project Management in IT",
          "IT Security and Audit",
          "Emerging Technologies",
          "DevOps and Automation",
          "Research Methodology"
        ],
        price: "₹12,500"
      },
      {
        semester: "Project",
        subjects: [
          "Project Management in IT",
          "IT Security and Audit",
          "Emerging Technologies",
          "DevOps and Automation",
          "Research Methodology"
        ],
        price: "₹12,500"
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
  MSC_PSYCH: {
    title: "Master of Science in Psychology",
    description: "Comprehensive psychology program covering cognitive, behavioral, clinical, and organizational psychology to understand human behavior and mental processes.",
    semesterTitle: "Semester-wise Psychology Curriculum",
    semesterDescription: "Advanced psychology program designed to master human behavior and mental processes",
    semesters: [
      {
        semester: "Semester 1",
        subjects: [
          "Advanced General Psychology- I ",
          "Research Methodology-I ",
          "Advanced Social Psychology ",
          "Developmental Psychology ",
          "Positive Psychology "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Advanced General Psychology- II",
          "Research Methodology-II ",
          "School Counselling ",
          "Guidance & Counselling – I ",
          "Counselling for children "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Psychopathology –I ",
          "Guidance & Counselling – II ",
          "Organisational Behaviour ",
          "Human Resource Management ",
          "Personality"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Consumer Behaviour, Marketing & Advertising  ",
          "Psychopathology –II",
          "Health Psychology ",
          "Psychological Testing ",
          "Counselling for Adolescence"
        ],
        price: "₹12,500"
      },
      {
        semester: "Project",
        subjects: [
          "Consumer Behaviour, Marketing & Advertising  ",
          "Psychopathology –II",
          "Health Psychology ",
          "Psychological Testing ",
          "Counselling for Adolescence"
        ],
        price: "₹12,500"
      }
    ],
    electives: [
      {
        title: "Clinical Psychology",
        subjects: [
          "Psychopathology",
          "Therapeutic Interventions",
          "Mental Health Assessment",
          "Child Psychopathology",
          "Community Mental Health"
        ],
        icon: "🧠"
      },
      {
        title: "Organizational Psychology",
        subjects: [
          "Workplace Behavior",
          "Leadership Psychology",
          "Organizational Development",
          "Talent Management",
          "Workplace Stress Management"
        ],
        icon: "🏢"
      },
      {
        title: "Educational Psychology",
        subjects: [
          "Learning Theories",
          "Classroom Management",
          "Special Education",
          "Educational Assessment",
          "Child Development"
        ],
        icon: "📚"
      },
      {
        title: "Forensic Psychology",
        subjects: [
          "Criminal Behavior Analysis",
          "Legal Psychology",
          "Victimology",
          "Psychological Profiling",
          "Eyewitness Testimony"
        ],
        icon: "🕵️"
      }
    ]
  },
  MSC_COUNSELING: {
    title: "Master of Science in Counseling Psychology",
    description: "Specialized program focusing on counseling techniques, therapeutic interventions, and psychological assessment to help individuals cope with life challenges.",
    semesterTitle: "Semester-wise Counseling Psychology Curriculum",
    semesterDescription: "Comprehensive counseling program designed to develop therapeutic skills and psychological expertise",
    semesters: [
      {
        semester: "Semester 1",
        subjects: [
          "Advanced General Psychology- I",
          "Research Methodology- I",
          "Theories of Counseling & Practice-I  ",
          "Developmental Psychology",
          "Positive Psychology "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Advanced General Psychology- II ",
          "Research Methodology- II",
          "Theories of Counseling & Practice -II ",
          "Psychological Testing ",
          "Counselling for children "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Psychopathology –I ",
          "Counselling Special Population ",
          "Family & Work Place Counselling",
          "School Counselling  ",
          "Personality"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Psychopathology -II",
          "Rehabilitation Counselling ",
          "Contemporary Therapies ",
          "Case study ",
          "Crisis intervention and Trauma Counseling "
        ],
        price: "₹12,500"
      },
      {
        semester: "Project",
        subjects: [
          "Psychopathology -II",
          "Rehabilitation Counselling ",
          "Contemporary Therapies ",
          "Case study ",
          "Crisis intervention and Trauma Counseling "
        ],
        price: "₹12,500"
      }
    ],
    electives: [
      {
        title: "Child and Adolescent Counseling",
        subjects: [
          "Child Development",
          "Play Therapy",
          "School Counseling",
          "Adolescent Issues",
          "Family Systems"
        ],
        icon: "🧒"
      },
      {
        title: "Trauma Counseling",
        subjects: [
          "Trauma Theory",
          "PTSD Interventions",
          "Crisis Counseling",
          "Grief Counseling",
          "Resilience Building"
        ],
        icon: "🩹"
      },
      {
        title: "Rehabilitation Counseling",
        subjects: [
          "Disability Studies",
          "Vocational Rehabilitation",
          "Chronic Illness Counseling",
          "Cognitive Rehabilitation",
          "Community Reintegration"
        ],
        icon: "♿"
      },
      {
        title: "Positive Psychology Coaching",
        subjects: [
          "Strengths-Based Approaches",
          "Wellbeing Interventions",
          "Life Coaching Techniques",
          "Mindfulness Practices",
          "Goal Setting Strategies"
        ],
        icon: "🌟"
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
        semester: "Semester 1",
        subjects: [
          "Tamil or other language ",
          "English",
          "Fundamentals of Digital Computers",
          "Practical – I :  PC Software Lab",
          "Mathematics – I  "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Tamil or other language",
          "English ",
          "Programming in C ",
          "Practical – II :   Programming in C Lab ",
          "Mathematics – II "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Programming in C++ and Data Structures ",
          "Microprocessors and its Applications",
          "Numerical and Statistical Methods  ",
          "Practical-III : Programming  in C++ using Data structures   ",
          "Financial Accounting "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Programming in Java",
          "Operating System",
          "Computer Graphics ",
          "Practical-IV :  Java Programming Lab",
          "Cost and Management Accounting "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 5",
        subjects: [
          "Database Management System   ",
          "Software Engineering",
          "Resource Management Techniques ",
          "Practical-V :   RDBMS Lab",
          "Visual Programming ",
          "Environmental Studies"
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 6",
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
            price: "₹12,500"
          },
          subjects: {
            subjects: [
              "Web Technology",
              "Data Communication and Net Working",
              "Software Testing ",
              "Practical-VI :    Web Application Lab  ",
              "Multimedia Systems",
              "Value Education "
            ],
            price: "₹12,500"
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
        semester: "Semester 1",
        subjects: [
          "Tamil or other language ",
          "English",
          "Financial Accounting",
          "Business Communication ",
          "Business Economics "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 2",
        subjects: [
          "Tamil or other language",
          "English ",
          "Advanced Financial Accounting  ",
          "Principles of Management  ",
          "Indian Economy "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 3",
        subjects: [
          "Corporate Accounting -I ",
          "Business Laws ",
          "Banking Theory, Law & Practice ",
          "Business Statistics & Operation Research - I ",
          "Indian Constitution "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 4",
        subjects: [
          "Corporate Accounting – II",
          "Company Law ",
          "Financial Services  ",
          "Business Statistics & Operation Research - II ",
          "Basics of Psychology  "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 5",
        subjects: [
          "Cost Accounting  ",
          "Practical Auditing",
          "Financial Management ",
          "Marketing Management",
          "Environmental Studies "
        ],
        price: "₹12,500"
      },
      {
        semester: "Semester 6",
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
            price: "₹12,500"
          },
          subjects: {
            subjects: [
              "Management Accounting ",
              "Business Taxation",
              "Entrepreneurial Development ",
              "Portfolio Management   ",
              "Value Education"
            ],
            price: "₹12,500"
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