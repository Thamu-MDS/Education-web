import { useEffect } from 'react';
import { 
  ChevronRight, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle,
  DollarSign,
  Users,
  Lightbulb,
} from 'lucide-react';

// Introduction Component
const Introduction = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is Six Sigma?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Six Sigma is a data-driven methodology for improving process quality and eliminating defects. 
            It uses statistical analysis to identify and remove causes of errors in business processes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Define</h3>
                <p className="text-slate-300">Identify the problem, goals, and deliverables</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Measure</h3>
                <p className="text-slate-300">Collect data and establish baseline metrics</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Analyze</h3>
                <p className="text-slate-300">Identify root causes of problems and defects</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Improve & Control</h3>
                <p className="text-slate-300">Implement solutions and monitor long-term results</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 border-2 border-yellow-500 rounded-2xl p-8 text-center">
            <div className="text-6xl font-bold text-yellow-500 mb-2">99%</div>
            <div className="text-white text-lg mb-4">Accuracy Rate</div>
            <div className="text-slate-300">
              Six Sigma aims for near-perfect quality with only 3.4 defects per million opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Benefits Component
const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Advance your career with globally recognized certification'
    },
    {
      icon: DollarSign,
      title: 'Salary Increase',
      description: 'Six Sigma professionals earn 20-30% more on average'
    },
    {
      icon: Users,
      title: 'Leadership Skills',
      description: 'Develop strong project management and team leadership abilities'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Master data-driven approaches to complex business challenges'
    },
    {
      icon: Target,
      title: 'Process Optimization',
      description: 'Learn to eliminate waste and improve operational efficiency'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Gain expertise in statistical analysis and quality metrics'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Six Sigma?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Six Sigma certification opens doors to better career opportunities, higher salaries, 
            and the ability to drive meaningful change in your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group bg-slate-800 border-2 border-yellow-500 rounded-2xl p-8 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Call to Action Component
const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join over 10,000+ certified professionals worldwide who have advanced their careers 
            through Six Sigma certification. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Start Learning Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

// Main App Component
function Skill() {
  useEffect(() => {
    // Add scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="animate-on-scroll">
        <Introduction />
      </div>
      <div className="animate-on-scroll">
        <Benefits />
      </div>
      <div className="animate-on-scroll">
        <CallToAction />
      </div>
    </div>
  );
}

export default Skill;