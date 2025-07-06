import { useState, useEffect } from 'react';
import { Globe, Sparkles, BookOpen, ArrowRight, ChevronDown, ChevronUp, Users, Clock, Target, Award, GraduationCap } from 'lucide-react';

const languages = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    path: '/language/en',
    speakers: '1.5B',
    difficulty: 'Beginner',
    timeToLearn: '6-12 months',
    description: 'Global lingua franca, essential for business and technology',
    teachingMethods: [
      {
        method: 'Immersion Learning',
        description: 'Surround yourself with English media, podcasts, and conversations',
        effectiveness: '95%',
        timeRequired: '2-3 hours daily'
      },
      {
        method: 'Grammar-Translation',
        description: 'Systematic study of grammar rules with translation exercises',
        effectiveness: '80%',
        timeRequired: '1-2 hours daily'
      },
      {
        method: 'Communicative Approach',
        description: 'Focus on real-life communication and practical usage',
        effectiveness: '90%',
        timeRequired: '1.5-2 hours daily'
      }
    ],
    keyFeatures: [
      'Simple grammar structure',
      'Rich vocabulary from multiple origins',
      'Widely used in technology and science',
      'Essential for international communication'
    ]
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    path: '/language/hi',
    speakers: '600M',
    difficulty: 'Intermediate',
    timeToLearn: '12-18 months',
    description: 'Official language of India, rich cultural heritage and literature',
    teachingMethods: [
      {
        method: 'Devanagari Script Mastery',
        description: 'Learn the writing system through systematic character practice',
        effectiveness: '85%',
        timeRequired: '30-45 minutes daily'
      },
      {
        method: 'Bollywood Integration',
        description: 'Use movies, songs, and cultural content for contextual learning',
        effectiveness: '88%',
        timeRequired: '1-2 hours daily'
      },
      {
        method: 'Sanskrit Root Analysis',
        description: 'Understand word formation through Sanskrit etymology',
        effectiveness: '75%',
        timeRequired: '45 minutes daily'
      }
    ],
    keyFeatures: [
      'Devanagari script system',
      'Rich verb conjugation patterns',
      'Cultural context essential',
      'Tonal variations in pronunciation'
    ]
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    path: '/language/de',
    speakers: '100M',
    difficulty: 'Advanced',
    timeToLearn: '18-24 months',
    description: 'Language of engineering, philosophy, and European business',
    teachingMethods: [
      {
        method: 'Case System Drilling',
        description: 'Intensive practice with Nominativ, Akkusativ, Dativ, Genitiv',
        effectiveness: '82%',
        timeRequired: '45-60 minutes daily'
      },
      {
        method: 'Compound Word Building',
        description: 'Master German\'s unique compound word construction',
        effectiveness: '90%',
        timeRequired: '30 minutes daily'
      },
      {
        method: 'Cultural Context Method',
        description: 'Learn through German history, literature, and current events',
        effectiveness: '85%',
        timeRequired: '1-1.5 hours daily'
      }
    ],
    keyFeatures: [
      'Four-case grammatical system',
      'Compound word formation',
      'Precise grammatical rules',
      'Strong cultural integration'
    ]
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    path: '/language/ja',
    speakers: '125M',
    difficulty: 'Expert',
    timeToLearn: '24-36 months',
    description: 'Complex writing system, unique cultural expressions, business importance',
    teachingMethods: [
      {
        method: 'Three-Script Mastery',
        description: 'Sequential learning of Hiragana, Katakana, and Kanji systems',
        effectiveness: '80%',
        timeRequired: '1-2 hours daily'
      },
      {
        method: 'Keigo (Honorific) Training',
        description: 'Master formal and respectful language patterns',
        effectiveness: '75%',
        timeRequired: '45 minutes daily'
      },
      {
        method: 'Anime & Manga Integration',
        description: 'Use popular culture for contextual and engaging learning',
        effectiveness: '85%',
        timeRequired: '1-1.5 hours daily'
      }
    ],
    keyFeatures: [
      'Three writing systems (Hiragana, Katakana, Kanji)',
      'Complex honorific system (Keigo)',
      'Context-dependent meaning',
      'Unique grammatical structure'
    ]
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    path: '/language/fr',
    speakers: '280M',
    difficulty: 'Intermediate',
    timeToLearn: '12-18 months',
    description: 'Language of diplomacy, cuisine, and international organizations',
    teachingMethods: [
      {
        method: 'Phonetic Immersion',
        description: 'Master French pronunciation through systematic phonetic training',
        effectiveness: '88%',
        timeRequired: '30-45 minutes daily'
      },
      {
        method: 'Gender Pattern Recognition',
        description: 'Learn masculine/feminine noun patterns and exceptions',
        effectiveness: '83%',
        timeRequired: '20-30 minutes daily'
      },
      {
        method: 'Cultural Gastronomy Method',
        description: 'Learn through French cuisine, wine culture, and lifestyle',
        effectiveness: '90%',
        timeRequired: '1-2 hours daily'
      }
    ],
    keyFeatures: [
      'Gendered noun system',
      'Complex pronunciation rules',
      'Rich literary tradition',
      'International diplomatic language'
    ]
  }
];

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'Beginner': return 'text-green-400 bg-green-400/20';
    case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
    case 'Advanced': return 'text-orange-400 bg-orange-400/20';
    case 'Expert': return 'text-red-400 bg-red-400/20';
    default: return 'text-gray-400 bg-gray-400/20';
  }
}

function LanguageCard({ language, index }: { language: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  const handleToggleDetails = () => {
    if (!showDetails) {
      setIsExpanding(true);
      setTimeout(() => setIsExpanding(false), 600);
    }
    setShowDetails(!showDetails);
  };

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div 
        className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 h-full
          ${showDetails 
            ? 'bg-slate-800/80 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/30 hover:scale-[1.01]' 
            : 'bg-slate-800/50 border border-slate-700/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 hover:bg-slate-800/70'
          }
          ${isExpanding ? 'animate-pulse' : ''}
        `}
        style={{
          backdropFilter: 'blur(12px)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Golden glow effect - only for this card */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          showDetails 
            ? 'bg-gradient-to-r from-amber-400/15 via-amber-400/10 to-amber-400/15' 
            : isHovered 
              ? 'bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-amber-400/10'
              : 'bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0'
        }`}></div>
        
        {/* Glowing border effect - only when this card is expanded */}
        {showDetails && (
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.3)]"></div>
        )}
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className={`text-4xl transform transition-all duration-500 ${
                isHovered && !showDetails ? 'scale-110 rotate-12' : ''
              } ${showDetails ? 'scale-110 animate-bounce' : ''}`}>
                {language.flag}
              </div>
              <div>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  showDetails ? 'text-amber-100' : 'text-white'
                }`}>{language.name}</h3>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  showDetails ? 'text-amber-200' : 'text-slate-300'
                }`}>{language.nativeName}</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${getDifficultyColor(language.difficulty)} ${
              showDetails ? 'scale-110 shadow-lg' : ''
            }`}>
              {language.difficulty}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className={`flex items-center space-x-2 transition-all duration-300 ${
              showDetails ? 'transform scale-105' : ''
            }`}>
              <Users className={`w-4 h-4 transition-colors duration-300 ${
                showDetails ? 'text-amber-300' : 'text-amber-400'
              }`} />
              <span className={`text-sm transition-colors duration-300 ${
                showDetails ? 'text-amber-100' : 'text-slate-300'
              }`}>{language.speakers}</span>
            </div>
            <div className={`flex items-center space-x-2 transition-all duration-300 ${
              showDetails ? 'transform scale-105' : ''
            }`}>
              <Clock className={`w-4 h-4 transition-colors duration-300 ${
                showDetails ? 'text-amber-300' : 'text-amber-400'
              }`} />
              <span className={`text-sm transition-colors duration-300 ${
                showDetails ? 'text-amber-100' : 'text-slate-300'
              }`}>{language.timeToLearn}</span>
            </div>
          </div>

          {/* Description */}
          <p className={`text-sm mb-4 leading-relaxed flex-grow transition-colors duration-300 ${
            showDetails ? 'text-amber-50' : 'text-slate-300'
          }`}>
            {language.description}
          </p>

          {/* Toggle Details Button */}
          <button
            onClick={handleToggleDetails}
            className={`w-full flex items-center justify-between rounded-lg p-3 mb-4 transition-all duration-300 transform ${
              showDetails 
                ? 'bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 scale-105' 
                : 'bg-slate-700/50 hover:bg-slate-700/70 hover:scale-105'
            }`}
          >
            <span className={`font-medium transition-colors duration-300 ${
              showDetails ? 'text-amber-100' : 'text-white'
            }`}>
              {showDetails ? 'Hide Teaching Methods' : 'View Teaching Methods'}
            </span>
            <div className={`transition-all duration-500 ${showDetails ? 'rotate-180' : ''}`}>
              {showDetails ? 
                <ChevronUp className={`w-5 h-5 transition-colors duration-300 ${
                  showDetails ? 'text-amber-300' : 'text-amber-400'
                }`} /> : 
                <ChevronDown className="w-5 h-5 text-amber-400" />
              }
            </div>
          </button>

          {/* Detailed Teaching Methods - Independent expansion */}
          <div className={`overflow-hidden transition-all duration-700 ease-out ${
            showDetails 
              ? 'max-h-[1200px] opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 transform -translate-y-4'
          }`}>
            <div className={`transition-all duration-500 delay-100 ${
              showDetails ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-amber-100 font-semibold mb-3 flex items-center">
                  <Target className="w-4 h-4 text-amber-300 mr-2" />
                  Key Language Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {language.keyFeatures.map((feature: string, idx: number) => (
                    <div key={idx} className={`flex items-center space-x-2 transition-all duration-300 delay-${idx * 100}`}>
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      <span className="text-amber-50 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teaching Methods */}
              <div>
                <h4 className="text-amber-100 font-semibold mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 text-amber-300 mr-2" />
                  Recommended Teaching Methods
                </h4>
                <div className="space-y-4">
                  {language.teachingMethods.map((method: any, idx: number) => (
                    <div key={idx} className={`bg-slate-900/60 border border-amber-500/20 rounded-lg p-4 transition-all duration-300 delay-${idx * 150} hover:bg-slate-900/80 hover:border-amber-500/40 hover:shadow-lg`}>
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-amber-100 font-medium">{method.method}</h5>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-medium">{method.effectiveness}</span>
                        </div>
                      </div>
                      <p className="text-amber-50 text-sm mb-2">{method.description}</p>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span className="text-amber-300 text-xs">{method.timeRequired}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Enroll Now Button */}
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 active:scale-95 group">
                  <div className="flex items-center justify-center space-x-3">
                    <GraduationCap className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="text-lg">Enroll Now in {language.name}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="text-sm mt-1 opacity-80">
                    Start your language journey today
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lang() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden mt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Globe className="w-12 h-12 text-amber-400 animate-pulse" />
              <Sparkles className="w-4 h-4 text-amber-300 absolute -top-1 -right-1 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
            Master Any Language
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose your target language and discover proven teaching methods tailored for effective learning.
            <span className="text-amber-400 font-medium"> Each language comes with specialized approaches and cultural insights.</span>
          </p>
        </div>

        {/* Language Cards - Optimized 5-card grid */}
        <div className="max-w-7xl mx-auto">
          {/* First row: 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {languages.slice(0, 2).map((language, index) => (
              <LanguageCard key={language.code} language={language} index={index} />
            ))}
          </div>
          
          {/* Second row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.slice(2, 5).map((language, index) => (
              <LanguageCard key={language.code} language={language} index={index + 2} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-300 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Our Teaching Methods Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Targeted Approach</h4>
                <p className="text-slate-300 text-sm">Each method is specifically designed for the unique challenges of that language</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Proven Effectiveness</h4>
                <p className="text-slate-300 text-sm">Methods tested and refined by language learning experts worldwide</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Time Efficient</h4>
                <p className="text-slate-300 text-sm">Optimized learning schedules that fit into your daily routine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lang;