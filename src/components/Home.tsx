import { useState } from 'react';
import { HERO_IMAGE, featuredCategories, customerTestimonials, perfumesData, faqItems } from '../data.ts';
import { Sparkles, ArrowRight, Star, Award, Shield, Package, Heart, Globe, TrendingUp, Users, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Perfume } from '../types.ts';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO.ts';
import { useJsonLdSchema } from '../hooks/useJsonLdSchema.ts';

interface HomeProps {
  openScentQuiz: () => void;
  onSelectPerfume: (perfume: Perfume) => void;
}

export default function Home({ openScentQuiz, onSelectPerfume }: HomeProps) {
  const navigate = useNavigate();
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);
  const [selectedHeroVersion, setSelectedHeroVersion] = useState<number>(0);

  // Set highly crawled title and premium meta tags for Veloura Perfumes
  useSEO({
    title: 'Veloura Perfumes | Luxury Perfumes & Premium Fragrances Online',
    description: 'Discover luxury perfumes crafted to leave a lasting impression. Explore floral, woody and oriental fragrances at Veloura Perfumes.',
    keywords: 'luxury perfumes, premium fragrances, floral perfume, oud perfume, signature scents, buy perfumes online'
  });

  // Inject Organization and Website Schema Markups for Homepage
  useJsonLdSchema([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://velouraperfumes.com/#organization',
      'name': 'Veloura Perfumes',
      'url': 'https://velouraperfumes.com',
      'logo': 'https://velouraperfumes.com/src/assets/images/veloura_hero_fixed_1782037649382.jpg',
      'email': 'support@velouraperfumes.com',
      'telephone': '+1-555-123-4567',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '125 Fragrance Avenue',
        'addressLocality': 'New York',
        'addressRegion': 'NY',
        'postalCode': '10001',
        'addressCountry': 'US'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://velouraperfumes.com/#website',
      'name': 'Veloura Perfumes',
      'url': 'https://velouraperfumes.com',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://velouraperfumes.com/products?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ]);

  const scrollToSection = (id: string) => {

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bestSellersSummary: { [key: string]: string } = {
    'velvet-bloom': 'A delicate, royal floral symphony captured with pristine white roses and velvet musk.',
    'midnight-ember': 'A mysterious woodsy aura with rich dark sandalwood, dry amber, and bold incense.',
    'golden-aura': 'An opulent, sweet oriental signature blending exotic golden saffron with amber.',
    'ocean-whisper': 'A refreshing, sun-kissed marine splash of pure sea salt, bergamot, and cedar wood.',
    'celeste-noir': 'A deep nocturnal oud perfume blending black cardamom with bourbon vanilla.',
    'velvet-orchid': 'An opulent floral perfume with Cattleya orchid notes, honey, and sandalwood.'
  };

  const statistics = [
    { value: '50+', label: 'Premium Fragrances', desc: 'Olfactive masterpieces', icon: TrendingUp },
    { value: '100,000+', label: 'Happy Customers', desc: 'Cherished scent seekers worldwide', icon: Users },
    { value: '25+', label: 'Countries Served', desc: 'Premium international distribution', icon: Globe },
    { value: '98%', label: 'Customer Satisfaction', desc: 'Unparalleled scent rating', icon: CheckCircle2 }
  ];

  const curatedWhyChooseUs = [
    {
      title: 'Premium Ingredients',
      description: 'Carefully selected rare essential oils and sustainably grown natural botanicals to formulate the best perfume experience.',
      icon: Award
    },
    {
      title: 'Long Lasting Perfumes',
      description: 'Engineered at highest Eau de Parfum concentrations, ensuring luxury fragrances that linger beautifully for over 12 hours.',
      icon: Shield
    },
    {
      title: 'Luxury Packaging',
      description: 'Delivered in bespoke glass collectibles featuring weight-balanced structures, custom gold collars, and magnetic enclosures.',
      icon: Package
    },
    {
      title: 'Cruelty Free',
      description: 'Ethically crafted liquid artwork. We maintain absolute cruelty-free procedures, banning direct animal testing universally.',
      icon: Heart
    },
    {
      title: 'Worldwide Shipping',
      description: 'Sovereign temperature-controlled shipping networks that preserve scent molecular structures, delivering straight to your door.',
      icon: Globe
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24 bg-[#0B0B0B] text-[#F8F5F0] overflow-hidden">
      
      {/* Premium Luxury Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-10 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121212] via-[#0B0B0B] to-[#0B0B0B]">
        {/* Intricate Radial Gold Lighting Effects Behind the Bottle and Text */}
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute right-[15%] top-1/4 w-[45vw] h-[45vw] rounded-full bg-[#D4AF37]/15 blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute right-[25%] bottom-1/4 w-[30vw] h-[30vw] rounded-full bg-[#C9A227]/10 blur-[130px] pointer-events-none mix-blend-screen" />
        
        {/* Subtle Elegant Geometric Line Decor */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-black/60 border border-[#D4AF37]/30 px-4 py-2.5 rounded-none text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>The House of Veloura</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-[62px] tracking-widest uppercase font-light leading-[1.1] text-white">
                Discover Your <br />
                <span className="font-light italic text-[#D4AF37] tracking-normal block sm:inline font-serif bg-gradient-to-r from-[#D4AF37] via-[#F8F5F0] to-[#C9A227] bg-clip-text text-transparent">
                  Signature Scent
                </span>
              </h1>
              <div className="w-20 h-[1.5px] bg-[#D4AF37] mt-3" />
            </div>

            <p className="max-w-xl text-[#E8DDD4] text-xs sm:text-[15px] tracking-wide font-sans leading-relaxed font-light">
              Discover carefully crafted luxury perfumes inspired by elegance, confidence, and unforgettable moments. Explore premium fragrances designed to leave a lasting impression.
            </p>

            {/* SEO Tagline for Indexing */}
            <p className="sr-only">
              Find the Best Perfume of 2026. Long lasting perfume and luxurious Oud perfume crafted using rare exquisite floral perfume oils, botanical extracts, and pristine woody bases. Perfect Perfume For Women and Perfume For Men.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => {
                  navigate('/products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-sans font-bold transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Shop Collection
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="w-full sm:w-auto border border-[#E8DDD4]/20 hover:border-[#D4AF37] text-[#F8F5F0] hover:text-[#D4AF37] px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-sans font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/5 cursor-pointer"
              >
                Explore Fragrances
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 text-stone-400 font-sans text-[10px] tracking-wider uppercase font-medium">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pure Essential Oils</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>12+ Hour Intense Sillage</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Free Insured Delivery</span>
              </span>
            </div>
          </motion.div>


          {/* Right Product Spotlight Column: Completely Enhanced with Luxury Lighting Effect & Larger Bottle Size */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Elegant Luxury Luminous Backdrop Halos (Lighting Effect behind bottle) */}
            <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-[60px] animate-pulse pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#D4AF37]/10 blur-[40px] pointer-events-none" />
            
            {/* Concentric Gold Wire Mesh Decor */}
            <div className="absolute w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#D4AF37]/10 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#C9A227]/5 pointer-events-none" />

            {/* Luxurious Arch Frame Wrapper around Image */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[480px] aspect-[4/5] rounded-t-[240px] sm:rounded-t-[280px] border-2 border-[#D4AF37]/30 overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] group bg-black/50 backdrop-blur-md">
              {/* Golden Outer Bezel Arch Line */}
              <div className="absolute inset-0 -m-[1px] rounded-t-[240px] sm:rounded-t-[280px] border border-[#D4AF37]/45 pointer-events-none z-20" />
              <div className="absolute inset-0 rounded-t-[240px] sm:rounded-t-[280px] bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none z-10" />

              <img
                src={HERO_IMAGE}
                alt="Veloura Luxury Perfume Premium Scent Bottle Advertisement"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-[2.0s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Luxury gold lighting overlay reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B] via-transparent to-[#D4AF37]/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent pointer-events-none" />
              
              {/* Absolute Badge Inside Frame */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md p-4 border border-[#D4AF37]/25 flex items-center justify-between">
                <div>
                  <p className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-sans font-extrabold">Exquisite Discovery</p>
                  <p className="text-sm text-[#F8F5F0] uppercase tracking-[0.1em] font-serif font-light mt-0.5">Maison Velvet Orchid</p>
                </div>
                <div className="flex items-center space-x-1 border-l border-[#D4AF37]/20 pl-4">
                  <Star className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                  <span className="text-xs font-sans font-semibold text-white">5.0</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 z-10 cursor-pointer text-[#E8DDD4] hover:text-[#D4AF37] transition-colors"
          onClick={() => scrollToSection('categories')}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-sans font-light">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-10 bg-[#D4AF37]" 
          />
        </div>
      </section>

      {/* Featured Scent Collections */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-semibold">Olfactive Families</span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest uppercase font-light text-[#F8F5F0]">
            Shop by Fragrance Family
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredCategories.map((item, idx) => {
            const h3Title = item.category === 'Floral' ? 'Floral Perfumes' :
                            item.category === 'Woody' ? 'Woody Fragrances' :
                            item.category === 'Oriental' ? 'Oriental Perfumes' :
                            item.category === 'Fresh' ? 'Fresh Scents' : item.title;
            return (
              <motion.div
                whileHover={{ y: -5 }}
                key={idx}
                className="p-8 bg-[#121212] border border-[#D4AF37]/10 group hover:border-[#D4AF37]/50 relative overflow-hidden transition-all duration-500 flex flex-col justify-between rounded-lg shadow-xl"
              >
                <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-[#D4AF37]/5 group-hover:scale-150 transition-transform duration-700 blur-2xl" />

                <div className="space-y-4 relative z-10">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] block font-bold font-sans">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif text-xl tracking-wider text-[#F8F5F0] font-light">
                    {h3Title}
                  </h3>
                  <p className="text-xs text-[#E8DDD4] leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8 relative z-10">
                  <button
                    onClick={() => {
                      navigate('/products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-2 text-[10px] uppercase font-sans tracking-widest font-semibold text-[#D4AF37] group-hover:text-[#F8F5F0] transition-colors cursor-pointer"
                  >
                    <span>Discover Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Scent Match Quiz Teaser Panel */}
      <section className="bg-stone-950 text-white relative py-20 border-y border-[#D4AF37]/15">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-transparent pointer-events-none" />
        
        {/* Soft floating particles back glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Finder</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest uppercase font-light text-[#F8F5F0]">
            Find Your Signature Scent Aura
          </h2>
          
          <p className="max-w-2xl mx-auto text-[#E8DDD4] text-xs sm:text-sm tracking-wide font-sans leading-relaxed font-light">
            Your perfume says everything before you speak. Take our 1-minute Scent Aura finder to identify your custom matches. Couple your personality traits with our masterfully built woody, fresh, oriental, and floral perfume notes.
          </p>

          <div className="pt-4">
            <button
              onClick={openScentQuiz}
              className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] text-xs tracking-[0.25em] uppercase font-semibold py-4 px-10 transition-colors shadow-xl hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5 active:translate-y-0 duration-300"
            >
              Begin Scent Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Luxury Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={idx} 
              className="text-center p-6 bg-[#121212] border border-[#D4AF37]/10 rounded-lg relative group overflow-hidden"
            >
              <div className="absolute top-2 right-2 opacity-5">
                <stat.icon className="w-16 h-16 text-[#D4AF37]" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#D4AF37] tracking-wider mb-2">{stat.value}</p>
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#F8F5F0] font-medium mb-1">{stat.label}</h3>
              <p className="font-sans text-[10px] text-[#E8DDD4] font-light">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Featured Best Sellers */}
      <section id="best-sellers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-semibold">Highest Masterpieces</span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest uppercase font-light text-[#F8F5F0]">
            Luxury Perfume Collections
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumesData.slice(0, 6).map((perfume) => {
            const shortText = bestSellersSummary[perfume.id] || perfume.description;
            return (
              <motion.div
                key={perfume.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between h-full bg-[#121212] border border-[#D4AF37]/10 relative overflow-hidden rounded-lg p-6 shadow-xl"
              >
                {/* Image Panel */}
                <div className="relative aspect-square overflow-hidden bg-black mb-5 border border-[#D4AF37]/10 rounded-md">
                  <img
                    src={perfume.image}
                    alt={perfume.name + ' Luxury Perfume Bottle'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-all duration-300" />
                  
                  {/* Premium badge */}
                  <div className="absolute top-3 right-3 bg-[#0B0B0B]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] uppercase tracking-[0.2em] font-medium px-3 py-1 bg-gradient-to-r from-[#D4AF37]/10 to-transparent">
                    {perfume.reviewsCount > 120 ? 'Elite Selection' : 'Bestseller'}
                  </div>
                </div>

                <div className="space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-sans tracking-[0.2em] font-bold text-[#D4AF37] block">
                      {perfume.category} Collection
                    </span>
                    <h3 className="font-serif text-xl tracking-wider text-[#F8F5F0] font-light mt-1">
                      {perfume.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#E8DDD4] font-sans leading-relaxed font-light py-1">
                    {shortText}
                  </p>

                  <div className="flex items-center space-x-1.5 py-1">
                    <div className="flex text-[#D4AF37] space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-sans tracking-wide text-[#E8DDD4]/60">
                      ({perfume.reviewsCount} reviews)
                    </span>
                  </div>

                  <hr className="border-[#D4AF37]/20 my-2" />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#F8F5F0] text-sm tracking-wider font-sans font-medium">
                      From ${perfume.basePrice}
                    </span>
                    <button
                      onClick={() => onSelectPerfume(perfume)}
                      className="text-[10px] uppercase font-sans tracking-widest font-bold text-[#D4AF37] hover:text-[#C9A227] transition-all duration-300 border-b border-[#D4AF37]/20 hover:border-[#D4AF37]"
                    >
                      View Scent
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Veloura - Premium Bento Style Section */}
      <section className="bg-[#121212] py-20 sm:py-28 border-y border-[#D4AF37]/15 relative">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#D4AF37]/2 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-20">
            <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-bold">The Sovereignty of Scent</span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-widest uppercase font-light text-[#F8F5F0]">
              Why Choose Veloura Perfumes
            </h2>
            <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {curatedWhyChooseUs.map((feature, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                key={idx}
                className="bg-[#0B0B0B] p-8 rounded-lg border border-[#D4AF37]/10 text-center relative group flex flex-col items-center space-y-4 shadow-2xl transition-all duration-300 hover:border-[#D4AF37]/40"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-1 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-lg tracking-wider text-[#F8F5F0] font-light">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#E8DDD4] leading-relaxed font-sans font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials - Premium Dark Review Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-semibold">True Scent Impressions</span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest uppercase font-light text-[#F8F5F0]">
            Customer Reviews
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerTestimonials.map((testimonial, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={testimonial.id}
              className="bg-[#121212] p-8 border border-[#D4AF37]/10 flex flex-col justify-between space-y-6 shadow-2xl relative rounded-lg"
            >
              {/* Premium quotation mark decal */}
              <div className="absolute top-4 left-4 font-serif text-7xl text-[#D4AF37]/5 select-none pointer-events-none leading-none z-0">
                “
              </div>

              <div className="text-[#D4AF37] flex space-x-0.5 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                ))}
              </div>

              <p className="italic text-[#E8DDD4] font-serif leading-relaxed text-sm relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-[#D4AF37]/10 pt-4 flex justify-between items-center relative z-10">
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-[#F8F5F0]">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] font-sans text-[#E8DDD4]/60 tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section for Rich Snippets and Local Indexing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-12">
          <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-semibold">Got Questions?</span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-widest uppercase font-light text-[#F8F5F0]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                className="border-b border-[#D4AF37]/10 pb-4"
              >
                <button
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full flex justify-between items-center py-4 text-left font-serif text-lg tracking-wide hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
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
                    className="text-xs sm:text-sm font-sans font-light text-[#E8DDD4] leading-relaxed pb-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Join the Circle - Newsletter Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] p-8 sm:p-12 border border-[#D4AF37]/10 rounded-lg text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration elements */}
          <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
          <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#C9A227]/5 blur-2xl pointer-events-none" />

          <div className="space-y-2">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans font-bold">Exclusive Membership</span>
            <h2 className="font-serif text-2xl sm:text-4xl tracking-widest uppercase font-light text-[#F8F5F0]">
              Join The Veloura Circle
            </h2>
            <p className="max-w-lg mx-auto text-xs sm:text-sm text-[#E8DDD4] font-light leading-relaxed">
              Become a custodian of fragrance refinement. Receive priority releases, private olfactive educational essays, and member-only pricing invitations.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-[#F8F5F0] placeholder-[#E8DDD4]/40 px-5 py-3 rounded-none text-xs tracking-wider transition-all"
              required
            />
            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] font-sans font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 whitespace-nowrap transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>

    </div>
  );
}
