import { ScentCategory, Perfume, BlogPost, Testimonial, FAQItem, QuizQuestion } from './types.ts';

// IMPORT LUXURY ADVERTISING AND PRODUCT IMAGES FOR VITE COMPILATION
import velvetBloomImg from './assets/images/velvet_bloom_1782033247249.jpg';
import midnightEmberImg from './assets/images/midnight_ember_1782033264332.jpg';
import goldenAuraImg from './assets/images/golden_aura_1782033278751.jpg';
import oceanWhisperImg from './assets/images/ocean_whisper_1782033294612.jpg';
import celesteNoirImg from './assets/images/celeste_noir_1782034612679.jpg';
import velvetOrchidImg from './assets/images/velvet_orchid_1782034629205.jpg';
import heroImg from './assets/images/veloura_hero_fixed_1782037649382.jpg';

// EXACT IMAGE PATHS GENERATED
export const HERO_IMAGE = heroImg;

export const perfumesData: Perfume[] = [
  {
    id: 'velvet-bloom',
    name: 'Velvet Bloom',
    category: ScentCategory.Floral,
    description: 'A delicate blend of blooming roses, jasmine petals, and soft white musk that captures feminine elegance.',
    fragranceNotes: {
      top: ['Pink Rose', 'Bergamot'],
      heart: ['Jasmine', 'Peony'],
      base: ['White Musk', 'Sandalwood']
    },
    longevity: '8–10 Hours',
    suitableFor: 'Daily Wear, Special Occasions',
    image: velvetBloomImg,
    basePrice: 110,
    rating: 4.9,
    reviewsCount: 124,
    volumeOptions: ['50ml', '100ml']
  },
  {
    id: 'midnight-ember',
    name: 'Midnight Ember',
    category: ScentCategory.Woody,
    description: 'A confident and mysterious fragrance crafted for individuals who enjoy deep, sophisticated scents.',
    fragranceNotes: {
      top: ['Black Pepper', 'Bergamot'],
      heart: ['Cedarwood', 'Lavender'],
      base: ['Amber', 'Sandalwood']
    },
    longevity: '10–12 Hours',
    suitableFor: 'Evening Wear',
    image: midnightEmberImg,
    basePrice: 125,
    rating: 4.8,
    reviewsCount: 98,
    volumeOptions: ['50ml', '100ml']
  },
  {
    id: 'golden-aura',
    name: 'Golden Aura',
    category: ScentCategory.Oriental,
    description: 'An opulent fragrance blending exotic spices with creamy vanilla and amber.',
    fragranceNotes: {
      top: ['Saffron', 'Mandarin'],
      heart: ['Amber', 'Patchouli'],
      base: ['Vanilla', 'Musk']
    },
    longevity: '10+ Hours',
    suitableFor: 'Luxury Events',
    image: goldenAuraImg,
    basePrice: 140,
    rating: 5.0,
    reviewsCount: 156,
    volumeOptions: ['50ml', '100ml']
  },
  {
    id: 'ocean-whisper',
    name: 'Ocean Whisper',
    category: ScentCategory.Fresh,
    description: 'A refreshing scent inspired by ocean air and coastal serenity.',
    fragranceNotes: {
      top: ['Lemon', 'Bergamot'],
      heart: ['Sea Salt', 'Lavender'],
      base: ['Driftwood', 'Musk']
    },
    longevity: '6–8 Hours',
    suitableFor: 'Summer & Daily Wear',
    image: oceanWhisperImg,
    basePrice: 95,
    rating: 4.7,
    reviewsCount: 82,
    volumeOptions: ['50ml', '100ml']
  },
  {
    id: 'celeste-noir',
    name: 'Céleste Noir',
    category: ScentCategory.Oriental,
    description: 'A mysterious blend of oud, amber, and exotic spices crafted for elegant evenings.',
    fragranceNotes: {
      top: ['Black Cardamom', 'Pink Pepper'],
      heart: ['Dark Oud', 'Night-Blooming Jasmine'],
      base: ['Bourbon Vanilla', 'Amberwood']
    },
    longevity: '12+ Hours',
    suitableFor: 'Late Night Gala, Bold Evenings',
    image: celesteNoirImg,
    basePrice: 165,
    rating: 4.9,
    reviewsCount: 142,
    volumeOptions: ['50ml', '100ml']
  },
  {
    id: 'velvet-orchid',
    name: 'Velvet Orchid',
    category: ScentCategory.Floral,
    description: 'An elegant floral fragrance inspired by blooming orchids and creamy vanilla.',
    fragranceNotes: {
      top: ['Golden Honey', 'Mandarin'],
      heart: ['Cattleya Orchid', 'Black Orchid'],
      base: ['Sandalwood', 'Warm Vanilla']
    },
    longevity: '10–12 Hours',
    suitableFor: 'Sultry Evenings, Luxury Galas',
    image: velvetOrchidImg,
    basePrice: 155,
    rating: 5.0,
    reviewsCount: 118,
    volumeOptions: ['50ml', '100ml']
  }
];

export const featuredCategories = [
  {
    category: ScentCategory.Floral,
    title: '🌸 Floral Collection',
    description: 'Soft, romantic fragrances featuring rose, jasmine, peony, and lily notes.',
    accentColor: 'from-pink-50 to-pink-100',
    borderColor: 'border-pink-200/50',
    tagline: 'Timeless Romance'
  },
  {
    category: ScentCategory.Fresh,
    title: '🌿 Fresh Collection',
    description: 'Clean and refreshing scents inspired by nature, citrus, and ocean breezes.',
    accentColor: 'from-teal-50 to-teal-100',
    borderColor: 'border-teal-200/50',
    tagline: 'Vibrant Serenity'
  },
  {
    category: ScentCategory.Woody,
    title: '🌲 Woody Collection',
    description: 'Warm, sophisticated perfumes with sandalwood, cedarwood, and vetiver.',
    accentColor: 'from-stone-50 to-stone-100',
    borderColor: 'border-stone-200/50',
    tagline: 'Warm Sophistication'
  },
  {
    category: ScentCategory.Oriental,
    title: '🍦 Oriental Collection',
    description: 'Rich and luxurious blends of vanilla, amber, musk, and exotic spices.',
    accentColor: 'from-amber-50 to-amber-100',
    borderColor: 'border-amber-200/50',
    tagline: 'Opulent Mystery'
  }
];

export const whyChooseUs = [
  {
    title: 'Premium Ingredients',
    description: 'Carefully selected fragrance oils for long-lasting performance.'
  },
  {
    title: 'Elegant Packaging',
    description: 'Designed to reflect luxury and sophistication.'
  },
  {
    title: 'Cruelty-Free',
    description: 'No animal testing, ever.'
  },
  {
    title: 'Long Lasting',
    description: 'Scents that stay with you throughout the day.'
  }
];

export const customerTestimonials: Testimonial[] = [
  {
    id: 't1',
    text: 'Velvet Bloom has become my signature scent. Elegant and long-lasting.',
    author: 'Eleanor Vance',
    role: 'Verified Purchaser',
    rating: 5
  },
  {
    id: 't2',
    text: 'The packaging and fragrance quality exceeded my expectations.',
    author: 'Marcus Thorne',
    role: 'Aroma Connoisseur',
    rating: 5
  },
  {
    id: 't3',
    text: 'Golden Aura smells far more luxurious than perfumes twice its price.',
    author: 'Sophia Chen',
    role: 'Fragrance Enthusiast',
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'how-to-choose',
    title: 'How to Choose the Perfect Perfume for Your Personality',
    excerpt: 'Finding the right fragrance starts with understanding scent families. Floral perfumes offer romance and elegance, woody fragrances provide sophistication, fresh scents feel clean and energetic, while oriental fragrances create a luxurious impression.',
    content: 'Finding the right fragrance starts with understanding scent families. Floral perfumes offer romance and elegance, woody fragrances provide sophistication, fresh scents feel clean and energetic, while oriental fragrances create a luxurious impression. Your scent is your unseen signature, reinforcing who you are without speaking. To find your matches, try associating fragrances with your daily wear, favorite elements, and times you feel most confident.',
    date: 'June 18, 2026',
    readTime: '4 Min Read',
    category: 'Guide'
  },
  {
    id: 'understanding-notes',
    title: 'Understanding Fragrance Notes: Top, Heart & Base',
    excerpt: 'Learn how perfumes evolve throughout the day and why different notes appear at different stages of wear.',
    content: 'Atmospheric and deeply sensory, a perfume is a three-dimensional journey that develops on human skin. Each perfume is structured with specialized layers known as Notes:\n\n1. Top Notes: First impressions. These are light, volatilize quickly, and introduce you to the fragrance within the first 15 minutes.\n2. Heart Notes (Middle): The soul of the perfume. Occurring as top notes dissolve, they form the core of the fragrance profile, lasting for hours.\n3. Base Notes: The anchor. Deep, rich, and fixative, they carry the perfume on your pulse points for the entire day, establishing its final warmth and longevity.',
    date: 'June 12, 2026',
    readTime: '5 Min Read',
    category: 'Education'
  },
  {
    id: 'perfume-last-longer',
    title: '5 Tips to Make Your Perfume Last Longer',
    excerpt: 'Simple yet effective tips to unlock the full potential and duration of your favorite luxury perfumes.',
    content: 'Make the most out of every elegant bottle with these direct professional recommendations:',
    date: 'June 05, 2026',
    readTime: '3 Min Read',
    category: 'Guides',
    bullets: [
      'Apply on pulse points (wrists, neck, behind knees, inside elbows) where natural body heat projects the scent.',
      'Moisturize skin before application. Fragrances bind better to hydrated skin compared to dry skin structures.',
      'Avoid rubbing wrists together. Rubbing breaks down the delicate top note molecules, speeding up evaporation.',
      'Store away from direct sunlight and humidity. Keep your bottles in cool, dark closets to prevent degradation.',
      'Layer with matching scented products or neutral oils to baseline the scent molecules.'
    ]
  },
  {
    id: 'categories-seasons',
    title: 'Best Perfume Categories for Every Season',
    excerpt: 'A seasonal transition guide to match your scent seamlessly with the shifting changes of nature.',
    content: 'Just as our wardrobe undergoes transitions, our olfactive presence should harmonize with atmospheric temperatures and moods:',
    date: 'May 28, 2026',
    readTime: '4 Min Read',
    category: 'Lifestyle',
    bullets: [
      'Spring: Floral – Welcomes blooming nature with soft, clean, and romantic bouquets like rose and jasmine.',
      'Summer: Fresh & Citrus – Energizes warm, sunny afternoons with marine sea salt, lemon, and cooling mint.',
      'Autumn: Woody – Echoes falling foliage with rich sandalwood, cedarwood, lavender, and comforting spices.',
      'Winter: Oriental & Amber – Amplifies warmth on cold nights with rich vanilla, intense amber, and musk.'
    ]
  },
  {
    id: 'mistakes-to-avoid',
    title: 'Common Perfume Mistakes to Avoid',
    excerpt: 'Discover simple habits that can affect fragrance performance, accuracy, and longevity.',
    content: 'Many fragrance enthusiasts unknowingly limit their scent experience. Some key mistakes to completely avoid:\n\n- Spraying directly onto delicate un-prepped clothing which can block heat-dispersal or stain silk structures.\n- Storing bottles on brightly lit window sills or humid bathroom shelves where heat cycles spoil perfume oils.\n- Overspraying out of anxiety: premium oils stay subtle; trust the longevity rating of high-quality formulations.\n- Sprayering fragrance strictly from too close distance: a distance of 6-8 inches is ideal for misty scent cloud dispersion.',
    date: 'May 15, 2026',
    readTime: '3 Min Read',
    category: 'Aroma Care'
  },
  {
    id: 'signature-scents',
    title: 'Why Signature Scents Matter',
    excerpt: 'A signature fragrance helps create memorable impressions and reflects your personal style.',
    content: 'A signature scent holds a unique place in personal branding. Like a melody or a visual signature, an olfactory memory bypasses language and directly links to emotional cortex centers. Your signature scent builds anticipation, instills comfort in close connections, elevates confidence during key interviews, and lives on long after you leave the room as an elegant aura of your presence.',
    date: 'May 01, 2026',
    readTime: '4 Min Read',
    category: 'Insight'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to selected countries worldwide. Standard shipping is free for all orders above $150, with fully trackable premium express delivery options.'
  },
  {
    id: 'faq2',
    question: 'Are your perfumes cruelty-free?',
    answer: 'Yes, all Veloura fragrances are 100% cruelty-free. We strictly ban animal testing at any stage of development, including ingredient selection.'
  },
  {
    id: 'faq3',
    question: 'How long do your fragrances last?',
    answer: 'Most fragrances last between 6–12 hours depending on the scent profile and skin type. Our rich oriental and woody profiles (Golden Aura, Midnight Ember) offer higher concentrations ranging from 10–12 hours.'
  },
  {
    id: 'faq4',
    question: 'Can I return a perfume?',
    answer: 'Unopened products in their original luxury cellophane wrap may be confidently returned within 30 days of purchase for a full refund or scent swap.'
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Choose your ideal morning escape location:',
    options: [
      { text: 'A romantic garden covered in morning dew', description: 'Surrounded by blooming roses and peonies', category: ScentCategory.Floral },
      { text: 'A brisk hike through an ancient dense forest', description: 'Surrounded by towering pines and cedarwood aroma', category: ScentCategory.Woody },
      { text: 'A cliffside breeze looking over crashing waves', description: 'Refreshing, mist-filled ocean air and ozone', category: ScentCategory.Fresh },
      { text: 'A luxury spice bazaar along royal streets', description: 'With rich lingering notes of incense and sweet vanilla', category: ScentCategory.Oriental }
    ]
  },
  {
    id: 2,
    question: 'What is your primary wardrobe mood or style?',
    options: [
      { text: 'Classic, romantic, elegant, and timelessly styled', description: 'Silk scarves, light materials, light pastels', category: ScentCategory.Floral },
      { text: 'Dapper or structured, earthy tones and textures', description: 'Tailored jackets, premium wool, warm leather boots', category: ScentCategory.Woody },
      { text: 'Minimalist, sportswear, crisp linens and whites', description: 'Clean lines, comfortable luxury, canvas sneakers', category: ScentCategory.Fresh },
      { text: 'Bold luxury, statement pieces and deep colors', description: 'Black velvet, gold ornaments, silk lapels', category: ScentCategory.Oriental }
    ]
  },
  {
    id: 3,
    question: 'How do you want people to describe your presence?',
    options: [
      { text: 'Graceful, gentle, romantic and highly approachable', description: 'Sweet memories and bright positive energy', category: ScentCategory.Floral },
      { text: 'Sophisticated, grounded, confident and wise', description: 'Solid warmth, steady character, quiet wisdom', category: ScentCategory.Woody },
      { text: 'Energetic, clean, refreshing and uplifting', description: 'A burst of clean crisp vitality and sunshine', category: ScentCategory.Fresh },
      { text: 'Mysterious, alluring, opulent and unforgettable', description: 'Exotic magnetism, rich spice, leaving a glowing trail', category: ScentCategory.Oriental }
    ]
  }
];
