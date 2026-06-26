import { Award, Sparkles, Recycle, HeartHandshake, Eye, BookOpen, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO.ts';
import { useJsonLdSchema } from '../hooks/useJsonLdSchema.ts';

export default function AboutUs() {
  useSEO({
    title: 'About Veloura Perfumes | Luxury Perfumes Heritage & Story',
    description: 'Learn about our passion for luxury perfumes and premium fragrances. Discover the story, ethical sourcing, and formulation secrets of Veloura Perfumes.',
    keywords: 'about Veloura Perfumes, luxury perfume brand, premium fragrance oils, ethical perfume formulation, long lasting fragrances'
  });

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
          'name': 'About Us',
          'item': 'https://velouraperfumes.com/about-us'
        }
      ]
    }
  ]);

  const values = [
    {
      title: 'Artisanal Sourcing',
      description: 'Every formulation is derived from rare botanicals, ethically sourced directly from the flower fields of Grasse and Atlas cedar peaks.',
      icon: Compass
    },
    {
      title: 'Molecular Innovation',
      description: 'We continuous experiment with olfactive oil weights to form rich, slow-evaporation fixatives that anchor on your skin.',
      icon: Sparkles
    },
    {
      title: 'Certified Cruelty-Free',
      description: 'Our values pledge absolute ethical curation. No animal testing is employed in any individual raw ingredients or formulas.',
      icon: Recycle
    },
    {
      title: 'Accessible Luxury',
      description: 'By bypassing heavy boutique overhead markups, we dedicate resources entirely to superior concentrations and raw oils.',
      icon: HeartHandshake
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Ideation & Genesis',
      description: 'Veloura was established in New York by olfactive designers dedicated to making premium perfume affordable and long lasting.'
    },
    {
      year: '2024',
      title: 'Longevity Formula Lab',
      description: 'Developed our custom fixative molecule structures, delivering unprecedented continuous wear across seasonal climates.'
    },
    {
      year: '2025',
      title: 'Excellence Recognition',
      description: 'Honored as the "Boutique Fragrance Star" in Paris for Velvet Bloom, cementing our sovereign position in elite scent circles.'
    },
    {
      year: '2026',
      title: 'The Digital Circle',
      description: 'Introduced our custom interactive Scent Finder, allowing clients internationally to unlock their bespoke signature notes online.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 sm:space-y-36 bg-[#0B0B0B] text-[#F8F5F0]">
      
      {/* Editorial Title header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-[10px] uppercase font-sans tracking-[0.35em] text-[#D4AF37] font-bold block">
          Behind the Craft
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest font-light text-white leading-tight">
          Our Heritage & Story
        </h1>
        <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
      </section>

      {/* Narrative block - Brand Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-sans font-bold block">Brand Story</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F8F5F0] font-light tracking-wide italic leading-normal">
            "A fine fragrance is not simply a cosmetic addition—it is an invisible sovereign dress of character, memories, and personal definition."
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
          
          <p className="text-[#E8DDD4] font-sans text-sm tracking-wide leading-relaxed font-light">
            Veloura Perfumes was founded to rewrite the terms of high-end perfumery. We set out to prove that the **best perfume** compounds do not need to feature restrictive designer markups. By choosing raw, premium perfume components, we create an olfactory landscape that is accessible yet entirely sovereign.
          </p>
          <p className="text-[#E8DDD4] font-sans text-sm tracking-wide leading-relaxed font-light">
            Each perfume bottle is structural poetry. From the top burst of citrus or spice, through the lingering floral heart, to the dark amber and woody notes of our bases, we deliver long lasting perfume compounds that speak on your behalf long after you leave the conversation.
          </p>
        </motion.div>

        {/* Abstract visual frame box */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-[#121212] text-[#F8F5F0] p-10 sm:p-12 relative overflow-hidden flex flex-col justify-between aspect-square border border-[#D4AF37]/20 rounded-lg shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
          <span className="font-serif text-7xl text-[#D4AF37]/10 leading-none select-none">VP</span>
          
          <div className="space-y-4">
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] font-sans block font-semibold">EST. 2026 IN NEW YORK</span>
            <p className="text-xs sm:text-sm font-serif italic text-[#E8DDD4] leading-relaxed">
              Synthesized inside premier laboratories, and carefully bottled with pristine heavy glass and weighted gold enclosures.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Panels */}
      <section className="space-y-6">
        <h2 className="sr-only">Our Core Foundations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] p-8 sm:p-12 border border-[#D4AF37]/10 space-y-5 flex flex-col justify-center relative rounded-lg"
        >
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-1">
            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <span className="text-[10px] text-[#D4AF37] uppercase font-sans tracking-[0.3em] font-bold">Our Mission</span>
          <h3 className="font-serif text-xl sm:text-2xl text-[#F8F5F0] tracking-wider leading-relaxed font-light">
            Designing sovereign, long-lasting fragrances that democratize elite scent quality.
          </h3>
          <p className="text-[#E8DDD4] text-xs font-sans font-light leading-relaxed">
            By shifting financial priority directly into compound oil quality over standard multi-million marketing budgets, we deliver superior sillage and longevity benchmarks with every bottle. We make genuine luxury an everyday touchpoint.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] p-8 sm:p-12 border border-[#D4AF37]/10 space-y-5 flex flex-col justify-center relative rounded-lg"
        >
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-1">
            <Eye className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <span className="text-[10px] text-[#D4AF37] uppercase font-sans tracking-[0.3em] font-bold">Our Vision</span>
          <h3 className="font-serif text-xl sm:text-2xl text-[#F8F5F0] tracking-wider leading-relaxed font-light">
            To define the global standard in reliable, direct-to-consumer haute perfumery.
          </h3>
          <p className="text-[#E8DDD4] text-xs font-sans font-light leading-relaxed">
            We are designing a timeless catalog of modern classics and interactive digital engines that allow scent lovers to identify their personal matches anywhere across the world, establishing a new era of clean consumer luxury.
          </p>
        </motion.div>
        </div>
      </section>

      {/* Brand Values Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-bold">The Pillars</span>
          <h2 className="font-serif text-3xl tracking-widest uppercase font-light text-white">
            Our Core Values
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                key={i}
                className="bg-[#121212] p-8 border border-[#D4AF37]/10 flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/40 rounded-lg transition-colors shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg tracking-wider text-white font-light">
                    {v.title}
                  </h3>
                </div>

                <p className="text-xs text-[#E8DDD4] leading-relaxed font-sans font-light">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Brand Timeline Section */}
      <section className="space-y-16 border-t border-[#D4AF37]/15 pt-16">
        <div className="text-center space-y-3">
          <span className="text-[#D4AF37] text-xs tracking-[0.35em] font-sans uppercase font-bold text-center">Chronicle of Excellence</span>
          <h2 className="font-serif text-3xl tracking-widest uppercase font-light text-white">
            The Historical Timeline
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="relative border-l border-[#D4AF37]/20 ml-4 md:ml-10 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Bullet node indicator */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 bg-[#0B0B0B] border-2 border-[#D4AF37] rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300" />
              
              <div className="space-y-1">
                <span className="font-serif text-2xl tracking-wider text-[#D4AF37] font-semibold">{item.year}</span>
                <h3 className="font-serif text-lg text-white font-light tracking-wide">{item.title}</h3>
                <p className="max-w-3xl text-xs sm:text-sm text-[#E8DDD4] font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
