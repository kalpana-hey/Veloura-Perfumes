import { useState } from 'react';
import { quizQuestions, perfumesData } from '../data.ts';
import { ScentCategory, Perfume } from '../types.ts';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, ShoppingBag, Check, Heart, HelpCircle, Lightbulb } from 'lucide-react';

interface InteractiveQuizProps {
  onAddToCart: (perfume: Perfume, volume: string, price: number) => void;
  onClose: () => void;
  onNavigateToProducts: (perfumeId: string) => void;
}

export default function InteractiveQuiz({
  onAddToCart,
  onClose,
  onNavigateToProducts,
}: InteractiveQuizProps) {
  // Navigation & Answers State
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<ScentCategory[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [matchedPerfume, setMatchedPerfume] = useState<Perfume | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const totalQuestions = quizQuestions.length;

  const handleOptionSelect = (category: ScentCategory) => {
    const updatedSelections = [...selections];
    updatedSelections[currentStep] = category;
    setSelections(updatedSelections);

    // Auto advance if not last step
    if (currentStep < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 350);
    } else {
      setTimeout(() => {
        calculateMatch(updatedSelections);
      }, 400);
    }
  };

  const calculateMatch = (answers: ScentCategory[]) => {
    // Tally answers
    const tallies = answers.reduce((acc, cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {} as Record<ScentCategory, number>);

    // Find highest category
    let maxCategory: ScentCategory = ScentCategory.Floral;
    let maxCount = 0;

    Object.entries(tallies).forEach(([cat, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxCategory = cat as ScentCategory;
      }
    });

    // Match with our perfumes list (each perfume is mapped to 1 unique Category)
    const matched = perfumesData.find(p => p.category === maxCategory) || perfumesData[0];
    setMatchedPerfume(matched);
    setQuizFinished(true);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections([]);
    setQuizFinished(false);
    setMatchedPerfume(null);
    setIsAdded(false);
  };

  const handleAddMatchedToCart = () => {
    if (!matchedPerfume) return;
    onAddToCart(matchedPerfume, '50ml', matchedPerfume.basePrice);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const percentProgress = Math.round(((selections.length) / totalQuestions) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-stone-950/85 p-4 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-2xl border luxury-border relative max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between">
        
        {/* Modal Header */}
        <header className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] font-medium uppercase text-stone-900">
              Maison Bespoke Scent Match Finder
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-950 text-xs font-sans uppercase tracking-widest transition-colors font-bold"
          >
            Exit
          </button>
        </header>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 flex-grow">
          {!quizFinished ? (
            <div className="space-y-8 animate-fadeIn">
              {/* Questionnaire Header indicator */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-stone-400 font-sans uppercase tracking-[0.2em]">
                  Question {currentStep + 1} of {totalQuestions}
                </span>
                
                {/* Visual Progress percentage */}
                <span className="text-[10px] text-gold-600 font-semibold font-sans uppercase tracking-widest">
                  {percentProgress}% Guided
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 h-[2px] rounded-full overflow-hidden">
                <div
                  className="bg-gold-500 h-full transition-all duration-300"
                  style={{ width: `${percentProgress}%` }}
                />
              </div>

              {/* Current Question */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-950 tracking-wide font-normal leading-relaxed">
                  {quizQuestions[currentStep].question}
                </h3>

                {/* Question Options list */}
                <div className="grid grid-cols-1 gap-3">
                  {quizQuestions[currentStep].options.map((option, idx) => {
                    const isSelected = selections[currentStep] === option.category;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(option.category)}
                        className={`p-4 text-left border transition-all duration-300 flex items-center justify-between group outline-none cursor-pointer ${
                          isSelected
                            ? 'bg-stone-950 border-stone-950 text-gold-300'
                            : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-white hover:border-gold-400/40'
                        }`}
                      >
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold">
                            {option.text}
                          </p>
                          <p className={`text-[10px] font-sans font-light ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                            {option.description}
                          </p>
                        </div>
                        
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          isSelected ? 'border-gold-300 bg-gold-400 text-stone-950' : 'border-stone-300 group-hover:border-gold-400/40'
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="inline-flex items-center space-x-1.5 text-[10px] uppercase font-sans tracking-widest text-stone-400 hover:text-stone-950 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Question</span>
                </button>
              )}
            </div>
          ) : (
            /* Result matching panel */
            <div className="space-y-8 text-center animate-fadeIn">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-1.5 bg-gold-400/10 border border-gold-300/30 px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] text-gold-700 font-semibold font-sans mx-auto justify-center">
                  <Heart className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                  <span>Calculated Signature Aura</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 tracking-wider uppercase font-light">
                  Your Destined Olfactive Match
                </h3>
              </div>

              {matchedPerfume && (
                <div className="bg-stone-50 p-5 sm:p-6 border luxury-border flex flex-col sm:flex-row items-center gap-6 text-left">
                  {/* Result image thumbnail */}
                  <div className="w-32 h-32 bg-stone-100 shrink-0 border luxury-border overflow-hidden rounded-none shadow-sm">
                    <img
                      src={matchedPerfume.image}
                      alt={matchedPerfume.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-gold-600 block">
                      {matchedPerfume.category} Collection Match (97% Synergy Score)
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-950 font-normal tracking-wide">
                      {matchedPerfume.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-500 font-sans leading-relaxed font-light">
                      {matchedPerfume.description}
                    </p>
                    <div className="pt-1.5 flex flex-wrap gap-1">
                      {matchedPerfume.fragranceNotes.top.map((note) => (
                        <span key={note} className="text-[8px] tracking-widest font-mono uppercase bg-white border border-stone-200 px-2 py-0.5 text-stone-500 rounded-sm">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleAddMatchedToCart}
                  disabled={isAdded}
                  className={`w-full sm:w-auto h-11 px-6 text-xs uppercase tracking-widest font-sans font-bold flex items-center justify-center space-x-2 transition-colors ${
                    isAdded ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-stone-950 hover:bg-stone-900 text-white hover:text-gold-300'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-800" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Own Match ($'{matchedPerfume?.basePrice}.00)</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (matchedPerfume) {
                      onNavigateToProducts(matchedPerfume.id);
                      onClose();
                    }
                  }}
                  className="w-full sm:w-auto border border-stone-300 hover:border-gold-400 text-stone-800 hover:text-gold-600 h-11 px-6 text-xs uppercase tracking-widest font-sans font-medium transition-colors"
                >
                  Explore Scent Notes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <footer className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-sans tracking-wide">
          <p>Maison Veloura Perfumes • Personalized Scent Consulting</p>
          {quizFinished && (
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-1 hover:text-gold-600 transition-colors uppercase tracking-widest font-bold font-sans"
            >
              <RefreshCw className="w-3 h-3 text-gold-500" />
              <span>Retry Quiz</span>
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
