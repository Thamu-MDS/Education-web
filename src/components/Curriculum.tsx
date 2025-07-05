import React from 'react';
import { CheckCircle, BookOpen } from 'lucide-react';

const Curriculum = () => {
  const semesters = [
    {
      title: "Semester 1 & 2",
      courses: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    },
    {
      title: "Semester 3 & 4",
      courses: [
        "Web Development",
        "Mobile Application Development",
        "Cloud Computing",
        "Artificial Intelligence",
        "Machine Learning"
      ]
    },
    {
      title: "Semester 5 & 6",
      courses: [
        "Advanced Programming",
        "System Design",
        "DevOps & Deployment",
        "Final Project",
        "Industry Internship"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our carefully designed curriculum covers all aspects of modern computer applications and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {semesters.map((semester, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{semester.title}</h3>
              </div>
              <ul className="space-y-3">
                {semester.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;