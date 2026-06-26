import { useState, FormEvent } from 'react';
import { faqItems } from '../data.ts';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSEO } from '../hooks/useSEO.ts';
import { useJsonLdSchema } from '../hooks/useJsonLdSchema.ts';

export default function Contact() {
  useSEO({
    title: 'Contact Our Fragrance Concierge Team | Veloura Perfumes',
    description: 'Connect with our luxury perfume experts for personalized fragrance assistance, sample requests, order support, or sizing enquiries at Veloura Perfumes.',
    keywords: 'contact Veloura Perfumes, perfume customer support, custom fragrance requests, luxury perfume concierge'
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
          'name': 'Contact',
          'item': 'https://velouraperfumes.com/contact-us'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Veloura Perfumes Contact Page',
      'description': 'Contact our luxury perfume customer service and fragrance concierge team.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Veloura Perfumes',
        'telephone': '+1 (555) 123-4567',
        'email': 'support@velouraperfumes.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '125 Fragrance Avenue',
          'addressLocality': 'New York',
          'addressRegion': 'NY',
          'postalCode': '10001',
          'addressCountry': 'US'
        }
      }
    }
  ]);

  // Accordion State
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  // Contact Form State
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactTicket, setContactTicket] = useState('');
  const [contactError, setContactError] = useState('');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactError('');

    const { fullName, email, subject, message } = formFields;
    if (!fullName || !email || !subject || !message) {
      setContactError('Please complete all required fields (*)');
      return;
    }

    const sampleTicket = 'VL-' + Math.floor(100000 + Math.random() * 900000);
    setContactTicket(sampleTicket);
    setContactSuccess(true);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  const benefitsList = [
    'First access to exclusive seasonal fragrance launches',
    'Private VIP collection concierge events & seasonal private pricing',
    'Personal complimentary perfume sample vials with orders',
    'Direct advice on perfume aging preservation & maceration guides'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 sm:space-y-32 bg-[#0B0B0B] text-[#F8F5F0]">
      {/* Editorial Title header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4 animate-fadeIn">
        <span className="text-[10px] uppercase font-sans tracking-[0.35em] text-[#D4AF37] font-bold block">
          Client Services
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest font-light text-white leading-tight">
          Client Relations Concierge
        </h1>
        <div className="w-20 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
        <p className="text-[#E8DDD4] text-xs sm:text-sm tracking-wide font-sans leading-relaxed font-light">
          Have an inquiry regarding private perfume maceration, custom sampling, or bulk pre-ordering? Contact our fragrance advisers to tailor your elite scent layout.
        </p>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="space-y-6">
        <h2 className="sr-only">Contact Channels and Inquiries</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Contact Coordinates */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-widest text-[#F8F5F0] uppercase font-light">
              Contact Information
            </h3>
            <p className="text-xs text-[#E8DDD4]/80 tracking-wide font-sans leading-relaxed">
              Our New York headquarters and global customer assistance lines operate Monday through Friday, 9:00 AM &ndash; 6:00 PM EST.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-center space-x-4 bg-[#121212] p-5 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#E8DDD4]/50 font-sans block">Olfactory Inquiry Email</span>
                  <a href="mailto:concierge@velouraperfumes.com" className="text-xs tracking-wider font-sans text-white hover:text-[#D4AF37] transition-colors underline">
                    concierge@velouraperfumes.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 bg-[#121212] p-5 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#E8DDD4]/50 font-sans block">VIP Client Telephone</span>
                  <a href="tel:+18005558356" className="text-xs tracking-wider font-sans text-white hover:text-[#D4AF37] transition-colors">
                    +1 (800) 555-VELOURA
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 bg-[#121212] p-5 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#E8DDD4]/50 font-sans block">Sovereign Flagship Salon</span>
                  <span className="text-xs tracking-wider font-sans text-white block">
                    742 Fifth Avenue, Suite 19B, New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scent Slogan footer block */}
          <div className="bg-[#121212] p-6 border border-[#D4AF37]/10 text-center rounded-lg shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
            <h4 className="font-serif italic text-sm text-[#D4AF37]">"Individuality has its own signature scent."</h4>
            <span className="text-[8px] uppercase tracking-widest text-[#E8DDD4]/40 font-sans block mt-1">Maison Veloura Perfumes</span>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="lg:col-span-7 bg-[#121212] p-8 sm:p-10 border border-[#D4AF37]/10 rounded-lg shadow-2xl relative">
          <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
          
          {contactSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl tracking-widest text-white uppercase font-light">Transmission Received</h3>
              <p className="text-[#E8DDD4] text-xs sm:text-sm tracking-wide leading-relaxed font-sans font-light max-w-md mx-auto">
                Thank you, <span className="text-white font-medium">{formFields.fullName}</span>. Your private sensory inquiry has been registered under case <span className="text-[#D4AF37] font-semibold tracking-widest">{contactTicket}</span>. A fragrance specialist will reach out within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setContactSuccess(false);
                  setFormFields({ fullName: '', email: '', phone: '', subject: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] text-xs uppercase tracking-widest font-sans font-bold transition-all rounded-none"
              >
                Send New Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl tracking-widest text-white uppercase font-light">Submit Inquiry</h3>
                <p className="text-[10px] text-[#E8DDD4]/50 uppercase tracking-widest font-sans">Required fields are denoted with (*)</p>
              </div>

              {contactError && (
                <div className="bg-red-950/40 border border-red-500/30 p-3 text-red-300 text-xs text-center font-sans">
                  {contactError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#E8DDD4]/60 font-sans block">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formFields.fullName}
                    onChange={(e) => setFormFields({ ...formFields, fullName: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans text-white rounded-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email address field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#E8DDD4]/60 font-sans block">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formFields.email}
                    onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans text-white rounded-none"
                    placeholder="name@exclusive.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone number field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#E8DDD4]/60 font-sans block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formFields.phone}
                    onChange={(e) => setFormFields({ ...formFields, phone: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans text-white rounded-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#E8DDD4]/60 font-sans block">
                    Subject <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formFields.subject}
                    onChange={(e) => setFormFields({ ...formFields, subject: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans text-white rounded-none"
                    placeholder="e.g. Bespoke sample collection"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#E8DDD4]/60 font-sans block">
                  Your Message <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formFields.message}
                  onChange={(e) => setFormFields({ ...formFields, message: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none p-3 text-xs font-sans text-white resize-none rounded-none"
                  placeholder="Describe your request in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] py-3.5 text-xs uppercase tracking-[0.2em] font-sans font-bold flex items-center justify-center space-x-2 transition-all transition-shadow h-11"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="bg-[#121212] border border-[#D4AF37]/10 p-6 sm:p-12 space-y-10 rounded-lg shadow-2xl">
        <div className="text-center space-y-2">
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] font-sans uppercase font-bold text-center block">Client Queries</span>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase font-light text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-[#D4AF37]/10">
          {faqItems.map((faq) => {
            const isOpen = openFAQId === faq.id;
            return (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left py-2 font-serif text-base sm:text-lg text-white hover:text-[#D4AF37] font-light transition-colors outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#D4AF37] stroke-[1.5]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#E8DDD4]/40 stroke-[1.5]" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-2 text-[#E8DDD4] font-sans text-xs sm:text-sm tracking-wide leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Newsletter Panel */}
      <section className="bg-black text-[#F8F5F0] p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 rounded-lg border border-[#D4AF37]/15">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
        
        <div className="lg:w-1/2 space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/35 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-[#D4AF37] font-sans font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
            <span>Maison Concierge Privé</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase font-light text-white leading-tight">
            Join The Veloura Circle
          </h2>
          <p className="text-[#E8DDD4] text-xs sm:text-sm tracking-wide font-sans leading-relaxed font-light max-w-md">
            Subscribe to receive private seasonal fragrance releases, bespoke sampling benefits, and perfume care tutorials from our compound experts.
          </p>

          <ul className="space-y-1.5 pt-2">
            {benefitsList.map((ben, i) => (
              <li key={i} className="flex items-center space-x-2 text-[#E8DDD4]/80 text-xs font-sans font-light">
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full shrink-0" />
                <span>{ben}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-5/12 w-full bg-[#121212] border border-[#D4AF37]/15 p-6 sm:p-8 relative z-10 flex flex-col justify-center rounded-lg">
          {newsletterSuccess ? (
            <div className="text-center py-6 space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto animate-bounce" />
              <h4 className="font-serif text-lg tracking-wider text-white uppercase font-light">Subscription Approved</h4>
              <p className="text-[#E8DDD4] font-sans text-xs leading-relaxed">
                Welcome to Maison Veloura. Confirmation has been sent to <span className="text-white font-medium">{newsletterEmail}</span>. Your private seasonal guides have been dispatched.
              </p>
              <button
                onClick={() => {
                  setNewsletterSuccess(false);
                  setNewsletterEmail('');
                }}
                className="mt-3 text-[10px] uppercase font-sans tracking-widest text-[#D4AF37] hover:underline"
              >
                Enroll New Contact
              </button>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <span className="text-[9px] uppercase font-sans tracking-widest text-[#D4AF37] block font-bold text-center">
                Maison Newsletter Enrollment
              </span>
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter client email coordinates"
                className="w-full bg-[#0B0B0B] border border-[#D4AF37]/20 text-white p-3.5 text-xs tracking-wider outline-none focus:border-[#D4AF37] focus:bg-[#0B0B0B] transition-all h-11 font-sans text-center rounded-none"
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] text-xs tracking-[0.25em] uppercase font-bold py-3.5 transition-all text-center h-11"
              >
                Access Circle
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
