export interface Course {
  id: string;
  title: string;
  duration: string;
  summary: string;
  highlights: string[];
  icon: string;
  category: string;
  careerPaths: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}

export interface HeroContent {
  courseName: string;
  abbreviation: string;
  summary: string;
  image: string;
}