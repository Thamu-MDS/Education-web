import { useState, useEffect } from 'react';
import { Globe, Sparkles, Target } from 'lucide-react';

const languages = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    description: 'Global lingua franca, essential for business and technology',
    keyFeatures: [
      'Simple grammar structure',
      'Rich vocabulary from multiple origins',
      'Widely used in technology and science',
      'Essential for international communication'
    ]
  },
  {
    code: 'hi',    name: 'Hindi',
    nativeName: 'हिन्दी',
    description: 'language of India, rich cultural heritage and literature',
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
    description: 'Language of engineering, philosophy, and European business',
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
    description: 'Complex writing system, unique cultural expressions, business importance',
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
    description: 'Language of diplomacy, cuisine, and international organizations',
    keyFeatures: [
      'Gendered noun system',
      'Complex pronunciation rules',
      'Rich literary tradition',
      'International diplomatic language'
    ]
  }
];

function LanguageCard({ language, index }: { language: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div 
        className="relative overflow-hidden rounded-2xl p-6 h-full
          bg-slate-800/70 border border-slate-700/50
          transition-all duration-300 hover:bg-slate-800/80"
        style={{
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl">
              {language.flag}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{language.name}</h3>
              <p className="text-sm font-medium text-slate-300">{language.nativeName}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm mb-6 leading-relaxed text-slate-300">
            {language.description}
          </p>

          {/* Key Features */}
          <div>
            <h4 className="text-amber-100 font-semibold mb-3 flex items-center">
              <Target className="w-4 h-4 text-amber-300 mr-2" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {language.keyFeatures.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
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
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Globe className="w-12 h-12 text-amber-400" />
              <Sparkles className="w-4 h-4 text-amber-300 absolute -top-1 -right-1" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Language Learning
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our selection of language courses designed to help you communicate effectively.
          </p>
        </div>

        {/* Language Cards */}
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
      </div>
    </div>
  );
}

export default Lang;