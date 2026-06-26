import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO.ts';
import { useJsonLdSchema } from '../hooks/useJsonLdSchema.ts';
import { faqItems } from '../data.ts';

export default function FAQPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Core SEO tags
  useSEO({
    title: 'Expert Perfume Care & FAQ | Veloura Perfumes',
    description: 'Get answers to common queries regarding luxury perfumes, formulations, sillage, shipping, and returns at Veloura Perfumes.',
    keywords: 'perfume FAQ, fragrance questions, long lasting perfumes help, how to apply perfumes, perfume shipping, Veloura Perfumes'
  });

  // Dual schema: Breadcrumb and FAQPage
  useJsonLdSchema([
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://velouraperfumes.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'FAQ',
          'item': 'https://velouraperfumes.com/faq'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqItems.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#F8F5F0] bg-[#0B0B0B]">
      
      {/* Editorial Title */}
      <section className="text-center space-y-4 mb-16 pt-4">
        <span className="text-[10px] uppercase font-sans tracking-[0.35em] text-[#D4AF37] font-bold block">
          Customer Care Center
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest font-light text-white leading-tight">
          Frequently Asked Questions
        </h1>
        <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
        <p className="max-w-xl mx-auto text-stone-400 text-xs sm:text-sm tracking-wide font-sans leading-relaxed font-light">
          Have an inquiry about our premium fragrances, long-lasting formulation techniques, or shipping policies? Discover our rapid answers compiled below.
        </p>
      </section>

      {/* Main FAQ Accordion */}
      <div className="space-y-6 max-w-3xl mx-auto mb-16">
        {faqItems.map((faq) => {
          const isOpen = activeId === faq.id;
          return (
            <motion.div
              key={faq.id}
              className="bg-[#121212] rounded-lg border border-[#D4AF37]/10 p-6 transition-all duration-300 hover:border-[#D4AF37]/30"
            >
              <button
                onClick={() => setActiveId(isOpen ? null : faq.id)}
                className="w-full flex justify-between items-center text-left font-serif text-lg tracking-wide hover:text-[#D4AF37] transition-colors focus:outline-none"
              >
                <span className="flex items-center space-x-3 pr-4">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]/60 shrink-0" />
                  <span className="text-white text-base sm:text-lg">{faq.question}</span>
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#D4AF37]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
                )}
              </button>
              
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed pl-8 border-l border-[#D4AF37]/20"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Interlinked Contact Banner */}
      <section className="bg-[#121212] border border-[#D4AF37]/10 p-8 sm:p-12 text-center rounded-lg max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
        <div className="space-y-4 relative z-10">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide">
            Still Have Questions?
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed max-w-md mx-auto font-light">
            Our luxury fragrance specialists are always standing by to help select your next masterpiece or track your premium delivery.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/20"
            >
              <span>Contact Specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
