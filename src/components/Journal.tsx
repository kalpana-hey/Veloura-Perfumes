import { useState } from 'react';
import { blogPosts } from '../data.ts';
import { BlogPost } from '../types.ts';
import { Clock, Search, BookOpen, X, ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO.ts';
import { useJsonLdSchema } from '../hooks/useJsonLdSchema.ts';

export default function Journal() {
  useSEO({
    title: 'The Fragrance Journal | Perfume Learning & Guides | Veloura Perfumes',
    description: 'Delve into olfactory science, luxurious perfume formulation guidelines, seasonal Oud perfume advice, and trends curated by Veloura Perfumes editors.',
    keywords: 'perfume guides, fragrance education, how to wear perfumes, perfume longevity tips, raw perfume oils, sillage'
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
          'name': 'Journal',
          'item': 'https://velouraperfumes.com/blog'
        }
      ]
    },
    ...blogPosts.map(post => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.title,
      'datePublished': post.date,
      'description': post.excerpt,
      'author': {
        '@type': 'Organization',
        'name': 'Veloura Perfumes'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Veloura Perfumes',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://velouraperfumes.com/icon.png'
        }
      },
      'mainEntityOfPage': 'https://velouraperfumes.com/blog'
    }))
  ]);

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['all', 'Guide', 'Education', 'Guides', 'Lifestyle', 'Aroma Care', 'Insight'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeTab === 'all' || post.category.toLowerCase() === activeTab.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Split featured post
  const featuredPost = blogPosts.find(p => p.id === 'how-to-choose');
  const otherPosts = filteredPosts.filter(p => p.id !== 'how-to-choose');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 bg-[#0B0B0B] text-[#F8F5F0]">
      {/* Page Title header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4 animate-fadeIn">
        <span className="text-[10px] uppercase font-sans tracking-[0.35em] text-[#D4AF37] font-bold block">
          Editorial Journal
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest font-light text-white">
          The Fragrance Journal
        </h1>
        <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
        <p className="text-[#E8DDD4] text-xs sm:text-sm tracking-wide font-sans leading-relaxed font-light">
          Delve into modern olfactory science, elegant perfume formulation guidelines, seasonal Oud perfume advice, and trends curated by our head perfumers.
        </p>
      </section>

      {/* Featured Big Article Card */}
      {featuredPost && (searchQuery === '' && (activeTab === 'all' || activeTab.toLowerCase() === 'guide')) && (
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#121212] border border-[#D4AF37]/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 rounded-lg shadow-2xl relative"
        >
          <div className="lg:col-span-5 bg-black p-8 sm:p-12 text-[#F8F5F0] flex flex-col justify-between aspect-video lg:aspect-auto border-r border-[#D4AF37]/10">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>FEATURED COLUMN</span>
              </span>
              <p className="text-[10px] font-sans tracking-widest uppercase text-[#E8DDD4]/60">
                {featuredPost.date} &bull; {featuredPost.readTime}
              </p>
            </div>
            
            <div className="pt-6">
              <span className="font-serif text-[10px] tracking-widest text-[#D4AF37] uppercase block">EDITORIAL MASTHEAD</span>
              <span className="font-serif text-xs italic text-[#E8DDD4]">Maison Veloura Perfumes Editors Team</span>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-[#D4AF37]">
                Best Scent Pairing Guide
              </span>
              <h2 className="font-serif text-2xl sm:text-4.5xl text-white tracking-widest font-light uppercase leading-snug">
                {featuredPost.title}
              </h2>
            </div>
            <p className="text-[#E8DDD4] font-sans text-xs sm:text-sm tracking-wide leading-relaxed font-light">
              {featuredPost.excerpt}
            </p>
            <div>
              <button
                onClick={() => setSelectedPost(featuredPost)}
                className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-sans font-bold hover:text-[#C9A227] transition-colors group"
              >
                <span>Read Editorial Column</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Search & Categories Bar */}
      <div className="bg-[#121212] p-6 border border-[#D4AF37]/10 flex flex-col md:flex-row items-center gap-6 justify-between shadow-2xl rounded-lg">
        {/* Category filtering tags */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto max-w-full pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-2 text-[9px] uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 border ${
                activeTab === cat
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0B]'
                  : 'bg-[#0B0B0B] border-[#D4AF37]/15 text-[#E8DDD4] hover:border-[#D4AF37]'
              }`}
            >
              {cat === 'all' ? 'All Publications' : cat}
            </button>
          ))}
        </div>

        {/* Local Search input */}
        <div className="relative w-full md:max-w-xs group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8DDD4]/40 group-focus-within:text-[#D4AF37] transition-colors" />
          <input
            type="text"
            placeholder="Search our journals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs uppercase tracking-widest bg-[#0B0B0B] border border-[#D4AF37]/20 outline-none focus:border-[#D4AF37] text-white focus:bg-[#121212] transition-colors h-11 font-sans"
          />
        </div>
      </div>

      {/* Grid of Other Articles */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherPosts.map((post) => (
          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            key={post.id}
            className="bg-[#121212] border border-[#D4AF37]/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/40 rounded-lg shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-1 font-bold font-sans">
                  {post.category}
                </span>
                <span className="text-[10px] text-[#E8DDD4]/60 flex items-center space-x-1.5 font-sans">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className="font-serif text-xl tracking-wider text-white font-light leading-snug">
                {post.title}
              </h3>

              <p className="text-[#E8DDD4] font-sans text-xs tracking-wide leading-relaxed font-light line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="border-t border-[#D4AF37]/10 pt-4 flex items-center justify-between">
              <span className="text-[10px] text-[#E8DDD4]/50 font-sans uppercase">
                {post.date}
              </span>
              <button
                onClick={() => setSelectedPost(post)}
                className="inline-flex items-center space-x-1.5 text-[10px] uppercase font-sans tracking-widest font-bold text-[#D4AF37] hover:text-[#C9A227] transition-colors"
              >
                <span>Read More</span>
                <BookOpen className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="p-8 text-center bg-[#121212] border border-[#D4AF37]/15 min-h-[250px] flex flex-col items-center justify-center col-span-full space-y-2 rounded-lg">
            <AlertCircle className="w-8 h-8 text-[#D4AF37]/40 mb-1" />
            <p className="text-xs uppercase tracking-widest text-[#E8DDD4]/50 font-sans">No matching journals found.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest border-b border-[#D4AF37] mt-3 pb-0.5"
            >
              Show All Publications
            </button>
          </div>
        )}
      </section>

      {/* Reader Dialog Overlay (Fully Dark and Luxury themed) */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#121212] w-full max-w-3xl border border-[#D4AF37]/25 relative max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col rounded-lg">
            
            {/* Modal Header */}
            <header className="p-5 border-b border-[#D4AF37]/15 flex items-center justify-between bg-[#161616] sticky top-0 z-20">
              <div className="flex items-center space-x-3">
                <span className="text-[9px] font-sans font-bold bg-[#D4AF37]/10 text-[#D4AF37] uppercase tracking-widest px-3 py-1 border border-[#D4AF37]/35">
                  {selectedPost.category}
                </span>
                <span className="text-[10px] text-[#E8DDD4]/60 tracking-widest uppercase font-sans">
                  {selectedPost.readTime}
                </span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1.5 px-3 bg-[#0B0B0B] hover:bg-black border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold rounded-full uppercase tracking-wider transition-all flex items-center space-x-1"
                aria-label="Close reader modal"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </header>

            {/* Modal Body */}
            <div className="p-8 sm:p-12 space-y-6 flex-grow overflow-y-auto">
              <span className="text-[9px] text-[#D4AF37] tracking-[0.25em] uppercase font-sans block font-semibold">
                Published {selectedPost.date} &bull; Maison Veloura Perfumes Column
              </span>
              <h2 className="font-serif text-3xl sm:text-4.5xl text-white tracking-widest uppercase font-light leading-snug">
                {selectedPost.title}
              </h2>
              <div className="w-16 h-[1.5px] bg-[#D4AF37]" />
              
              {/* Premium body copy */}
              <p className="text-[#E8DDD4] font-serif text-[15px] sm:text-lg leading-relaxed whitespace-pre-line italic">
                "{selectedPost.excerpt}"
              </p>

              <hr className="border-[#D4AF37]/10" />

              <p className="text-[#E8DDD4] font-sans text-xs sm:text-sm tracking-wide leading-relaxed font-light whitespace-pre-line">
                {selectedPost.content}
              </p>

              {/* Conditional bullets rendering */}
              {selectedPost.bullets && selectedPost.bullets.length > 0 && (
                <ul className="space-y-4 pl-0 pt-3">
                  {selectedPost.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start space-x-4 bg-[#0B0B0B] p-5 border border-[#D4AF37]/10 rounded-md">
                      <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center font-sans text-xs font-bold shrink-0 border border-[#D4AF37]/35">
                        {index + 1}
                      </span>
                      <p className="text-[#E8DDD4] font-sans text-xs sm:text-sm tracking-wide leading-relaxed font-light">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Modal Footer */}
            <footer className="p-6 border-t border-[#D4AF37]/15 bg-[#161616] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#E8DDD4]/60 gap-4">
              <p>Maison de Haute Parfumerie &bull; Veloura Perfumes</p>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#D4AF37] text-[#0B0B0B] font-sans uppercase font-bold py-2 px-5 text-center text-[10px] tracking-widest hover:bg-[#C9A227] transition-all"
              >
                Finished Reading
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
