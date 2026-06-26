import { useState } from 'react';
import { perfumesData } from '../data.ts';
import { Perfume, ScentCategory } from '../types.ts';
import { Search, Sparkles, Star, ShoppingBag, Check, Triangle, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO.ts';
import { useJsonLdSchema } from '../hooks/useJsonLdSchema.ts';

interface ProductsProps {
  onAddToCart: (perfume: Perfume, volume: string, price: number) => void;
  selectedPerfumeFromHome: Perfume | null;
  clearSelectedPerfumeFromHome: () => void;
}

export default function Products({
  onAddToCart,
  selectedPerfumeFromHome,
  clearSelectedPerfumeFromHome,
}: ProductsProps) {
  useSEO({
    title: 'Luxury Perfume Collection & Premium Fragrances | Veloura Perfumes',
    description: 'Explore the collection of premium luxury perfumes, floral fragrances, oud perfumes, and signature fragrances crafted for elegance by Veloura Perfumes.',
    keywords: 'luxury perfumes, premium fragrances, floral perfume, oud perfume, signature scents, buy perfumes online'
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
          'name': 'Products',
          'item': 'https://velouraperfumes.com/products'
        }
      ]
    },
    ...perfumesData.map(perfume => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': perfume.name,
      'image': perfume.image,
      'description': perfume.description,
      'category': perfume.category,
      'brand': {
        '@type': 'Brand',
        'name': 'Veloura Perfumes'
      },
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'USD',
        'price': perfume.basePrice,
        'availability': 'https://schema.org/InStock',
        'url': 'https://velouraperfumes.com/products'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': perfume.reviewsCount
      }
    }))
  ]);

  // Filters & State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [volumes, setVolumes] = useState<{ [key: string]: string }>({
    'velvet-bloom': '50ml',
    'midnight-ember': '50ml',
    'golden-aura': '50ml',
    'ocean-whisper': '50ml',
    'celeste-noir': '50ml',
    'velvet-orchid': '50ml',
  });
  const [addedItemName, setAddedItemName] = useState<string | null>(null);
  const [wishlistedIds, setWishlistedIds] = useState<Set<string>>(new Set());

  // Highlight pass-through
  const [highlightedScent, setHighlightedScent] = useState<string | null>(
    selectedPerfumeFromHome ? selectedPerfumeFromHome.id : null
  );

  const clearHighlight = () => {
    if (highlightedScent) {
      setHighlightedScent(null);
      clearSelectedPerfumeFromHome();
    }
  };

  const getPriceForVolume = (basePrice: number, volume: string) => {
    if (volume === '100ml') {
      return Math.round(basePrice * 1.55); // 100ml is 1.55x price
    }
    return basePrice;
  };

  const handleVolumeChange = (perfumeId: string, value: string) => {
    clearHighlight();
    setVolumes(prev => ({ ...prev, [perfumeId]: value }));
  };

  const handleAddClick = (perfume: Perfume) => {
    clearHighlight();
    const volume = volumes[perfume.id] || '50ml';
    const price = getPriceForVolume(perfume.basePrice, volume);
    onAddToCart(perfume, volume, price);

    setAddedItemName(perfume.name);
    setTimeout(() => {
      setAddedItemName(null);
    }, 2200);
  };

  const toggleWishlist = (id: string) => {
    setWishlistedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter logic
  const filteredPerfumes = perfumesData.filter(perfume => {
    const matchesCategory = selectedCategory === 'all' || perfume.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      perfume.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      perfume.fragranceNotes.top.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
      perfume.fragranceNotes.heart.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
      perfume.fragranceNotes.base.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 bg-[#0B0B0B] text-[#F8F5F0]">
      {/* Introduction Banner header */}
      <section className="text-center max-w-3xl mx-auto space-y-5 pt-4">
        <div className="inline-flex items-center space-x-2 text-xs text-[#D4AF37] tracking-[0.25em] uppercase font-semibold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Curated Fragrance Gallery</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest font-light text-white leading-tight">
          Veloura Scent Library
        </h1>
        <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
        <p className="text-[#E8DDD4] text-xs sm:text-sm tracking-wide font-sans leading-relaxed font-light">
          Experience long lasting perfume creations handcrafted with premier, rare botanical oils. Indulge in exquisite floral perfume compounds, heavy oriental ambers, or noble woody bases formulated both for women and men.
        </p>
      </section>

      {/* Control Panel (Search, Filter, Reset) */}
      <div className="bg-[#121212] p-6 border border-[#D4AF37]/10 flex flex-col md:flex-row items-center gap-6 justify-between shadow-2xl rounded-lg">
        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8DDD4]/40 transition-colors group-focus-within:text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Search notes (e.g. Oud, Rose)..."
            value={searchQuery}
            onChange={(e) => {
              clearHighlight();
              setSearchQuery(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-3 text-xs uppercase tracking-widest bg-[#0B0B0B] border border-[#D4AF37]/25 outline-none focus:border-[#D4AF37] text-white focus:bg-[#121212] transition-colors h-11 font-sans"
          />
        </div>

        {/* Collection Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
          <button
            onClick={() => {
              clearHighlight();
              setSelectedCategory('all');
            }}
            className={`px-4 py-2.5 text-[9px] uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 h-11 border ${
              selectedCategory === 'all'
                ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0B]'
                : 'bg-[#0B0B0B] border-[#D4AF37]/20 text-[#E8DDD4] hover:border-[#D4AF37]'
            }`}
          >
            All Scent Profiles
          </button>
          {Object.values(ScentCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                clearHighlight();
                setSelectedCategory(cat.toLowerCase());
              }}
              className={`px-4 py-2.5 text-[9px] uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 h-11 border ${
                selectedCategory === cat.toLowerCase()
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0B]'
                  : 'bg-[#0B0B0B] border-[#D4AF37]/20 text-[#E8DDD4] hover:border-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredPerfumes.length === 0 ? (
        <div className="text-center py-20 bg-[#121212] border border-[#D4AF37]/15 rounded-lg">
          <p className="text-xs tracking-widest text-[#E8DDD4] font-sans uppercase">No exceptional scents match your current search.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] hover:border-b border-[#D4AF37] transition-all pb-1 mx-auto block"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-20">
          {filteredPerfumes.map((perfume, index) => {
            const currentVol = volumes[perfume.id] || '50ml';
            const currentPrice = getPriceForVolume(perfume.basePrice, currentVol);
            const isHighlighted = highlightedScent === perfume.id;

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, boxShadow: "0 30px 60px -15px rgba(212, 175, 55, 0.12)" }}
                transition={{ duration: 0.4 }}
                key={perfume.id}
                id={perfume.id}
                className={`bg-[#121212] border relative transition-all duration-500 overflow-hidden flex flex-col lg:flex-row rounded-none ${
                  isHighlighted ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-2xl' : 'border-[#D4AF37]/10'
                }`}
              >
                {/* Visual Highlight matching banner inside card if highlighted */}
                {isHighlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-[#D4AF37] text-[#0B0B0B] font-sans uppercase font-bold text-center py-2 text-[9px] tracking-[0.25em] z-20">
                    Your Personalized Match Discovery
                  </div>
                )}

                {/* Hot Heart Wishlist Indicator with motion */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleWishlist(perfume.id)}
                  className="absolute top-12 lg:top-5 right-5 p-2.5 rounded-full bg-black/75 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B] transition-all duration-300 z-20 cursor-pointer shadow-lg"
                  aria-label="Add perfume item to wishlist"
                >
                  <Heart className={`w-4 h-4 ${wishlistedIds.has(perfume.id) ? 'fill-current text-[#D4AF37]' : 'text-[#E8DDD4]'}`} />
                </motion.button>

                {/* Left side: Premium Image Display with motion hover transition */}
                <div className="w-full lg:w-[42%] aspect-square lg:h-auto relative bg-black md:flex md:items-center md:justify-center overflow-hidden border-r border-[#D4AF37]/10 group">
                  <img
                    src={perfume.image}
                    alt={perfume.name + ' - Veloura Premium Long Lasting Scent Bottle'}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0B0B0B]/15 pointer-events-none" />
                </div>

                {/* Right side: Detailed Fragrance Breakdown */}
                <div className="w-full lg:w-[58%] p-6 sm:p-10 flex flex-col justify-between space-y-8">
                  {/* Category & Title */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
                        {perfume.id === 'celeste-noir' ? 'Oriental Luxury' : perfume.id === 'velvet-orchid' ? 'Floral Luxury' : `${perfume.category} Family`} Profile
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                        <span className="text-xs font-sans font-medium text-white">
                          {perfume.rating.toFixed(1)}
                        </span>
                        <span className="text-[#E8DDD4]/60 font-sans text-[10px]">
                          ({perfume.reviewsCount} reviews)
                        </span>
                      </div>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl tracking-widest text-[#F8F5F0] uppercase font-light">
                      {perfume.name}
                    </h2>

                    <p className="text-[#E8DDD4] font-sans text-xs sm:text-sm tracking-wide leading-relaxed font-light pt-2">
                      {perfume.description}
                    </p>
                  </div>

                  {/* Fragrance Note Pyramid Graphic representation */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-[10px] tracking-[0.25em] uppercase font-bold text-white border-b border-[#D4AF37]/15 pb-2">
                      Olfactory Pyramid Notes
                    </h4>
                    
                    {/* Modern conceptual Pyramid representation */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                      <div className="md:col-span-4 flex flex-col items-center justify-center p-3.5 bg-[#0B0B0B]/80 border border-[#D4AF37]/10 relative overflow-hidden rounded-md">
                        {/* Golden styled triangle representation */}
                        <Triangle className="w-12 h-12 text-[#D4AF37]/15 fill-[#D4AF37]/5 stroke-[0.5] scale-y-90 translate-y-1.5" />
                        <span className="text-[9px] tracking-[0.25em] font-sans uppercase font-bold text-[#D4AF37] absolute bottom-4">FORMULA</span>
                      </div>

                      <div className="md:col-span-8 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center text-xs">
                          <span className="w-20 font-serif tracking-[0.2em] uppercase font-bold text-[#D4AF37] text-[9px]">
                            Top Notes:
                          </span>
                          <span className="text-[#E8DDD4] font-sans tracking-wide font-light">
                            {perfume.fragranceNotes.top.join(' • ')}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-xs">
                          <span className="w-20 font-serif tracking-[0.2em] uppercase font-bold text-[#D4AF37] text-[9px]">
                            Heart Notes:
                          </span>
                          <span className="text-[#E8DDD4] font-sans tracking-wide font-light">
                            {perfume.fragranceNotes.heart.join(' • ')}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-xs">
                          <span className="w-20 font-serif tracking-[0.2em] uppercase font-bold text-[#D4AF37] text-[9px]">
                            Base Notes:
                          </span>
                          <span className="text-[#E8DDD4] font-sans tracking-wide font-light">
                            {perfume.fragranceNotes.base.join(' • ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Longevity & Occasion Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#0B0B0B] p-4 border border-[#D4AF37]/10 rounded-md">
                    <div className="space-y-1.5">
                      <span className="text-[9px] text-[#E8DDD4]/50 font-sans uppercase tracking-[0.2em] block">Scent Longevity Rating</span>
                      <span className="text-[#F8F5F0] text-xs font-sans tracking-wider font-semibold block">{perfume.longevity}</span>
                      
                      {/* Interactive performance progress scale bar */}
                      <div className="w-full bg-[#121212] h-1.5 rounded-full mt-1.5 overflow-hidden border border-[#D4AF37]/10">
                        <div
                          className="bg-[#D4AF37] h-full rounded-full transition-all duration-1000"
                          style={{
                            width: perfume.longevity.includes('12+') || perfume.longevity.includes('10+') || perfume.longevity.includes('10–12')
                              ? '100%'
                              : perfume.longevity.includes('8–10')
                              ? '80%'
                              : '60%'
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] text-[#E8DDD4]/50 font-sans uppercase tracking-[0.2em] block">Best Suited Wear</span>
                      <span className="text-[#F8F5F0] text-xs font-sans tracking-wider font-semibold">{perfume.suitableFor}</span>
                    </div>
                  </div>

                  {/* Volume Options, Price & Cart Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-5 border-t border-[#D4AF37]/15">
                    {/* Bottle Volume selector */}
                    <div className="flex items-center space-x-3 w-full sm:w-auto">
                      <span className="text-[9px] font-sans font-bold text-[#E8DDD4] uppercase tracking-widest">
                        Volume Selection:
                      </span>
                      <div className="flex items-center space-x-1 border border-[#D4AF37]/25 bg-black p-0.5">
                        {perfume.volumeOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleVolumeChange(perfume.id, opt)}
                            className={`px-3 py-1.5 text-[9px] tracking-widest uppercase font-sans font-semibold transition-all duration-300 ${
                              currentVol === opt
                                ? 'bg-[#D4AF37] text-[#0B0B0B]'
                                : 'text-[#E8DDD4] hover:text-[#D4AF37]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Scent Pricing & Add-to-bag */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      <span className="text-xl tracking-widest text-[#F8F5F0] font-sans font-light">
                        ${currentPrice}.00
                      </span>

                      <button
                        onClick={() => handleAddClick(perfume)}
                        disabled={addedItemName !== null}
                        className={`px-6 h-11 text-[10px] uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-44 rounded-none border border-[#D4AF37]/20 ${
                          addedItemName === perfume.name
                            ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40 shadow-md'
                            : 'bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] hover:shadow-lg hover:shadow-[#D4AF37]/15'
                        }`}
                      >
                        {addedItemName === perfume.name ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>In Your Bag</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
