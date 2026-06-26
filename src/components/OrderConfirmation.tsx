import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, Home, Sparkles, Clipboard, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO.ts';

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');
  const [copied, setCopied] = useState(false);

  // Set beautiful luxury SEO metadata
  useSEO({
    title: 'Order Confirmed | Veloura Perfumes',
    description: 'Thank you for your order. Your premium selection of luxury perfumes has been reserved successfully.'
  });

  useEffect(() => {
    // Attempt to extract order ID from URL query parameters
    const params = new URLSearchParams(location.search);
    const idFromQuery = params.get('orderId');

    if (idFromQuery) {
      setOrderId(idFromQuery);
    } else {
      // Fallback fallback if they navigated here manually or direct
      const randomId = 'VEL-' + Math.floor(200000 + Math.random() * 800000);
      setOrderId(randomId);
    }
    
    // Smoothly scroll window back to top on checkout success page load
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  const handleCopyId = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] overflow-hidden">
      {/* Decorative luxury radial backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-stone-900/40 blur-[60px] pointer-events-none" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-lg bg-[#121212] border border-[#D4AF37]/25 p-8 sm:p-12 text-center shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]"
      >
        {/* Subtle Luxury Corner Bezel Linework */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/30" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/30" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/30" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/30" />

        {/* Visual Premium Success Ring Icon with Staggered Scale Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="w-20 h-20 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative"
        >
          {/* Animated pulsing external bezel ring */}
          <span className="absolute inset-x-0 inset-y-0 rounded-full border border-[#D4AF37]/20 animate-ping opacity-60" />
          <CheckCircle2 className="w-10 h-10 stroke-[1.25]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-serif text-2xl sm:text-3xl tracking-[0.1em] text-[#F8F5F0] uppercase font-light leading-tight mb-4"
        >
          Thank You For Your Order!
        </motion.h1>

        {/* Confirmation message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-stone-300 font-sans text-xs sm:text-sm tracking-wider leading-relaxed max-w-sm mx-auto mb-8"
        >
          Your order has been placed successfully and is being processed.
        </motion.p>

        {/* Luxury Reservation Invoice Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-black/40 border border-[#D4AF37]/20 p-5 rounded-none max-w-sm mx-auto mb-10 text-center"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-sans block">Unique Order Reference</span>
          
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-base font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
              {orderId}
            </span>
            <button
              onClick={handleCopyId}
              className="p-1 text-stone-500 hover:text-[#D4AF37] active:scale-95 transition-all focus:outline-none cursor-pointer"
              title="Copy Order ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Clipboard className="w-3.5 h-3.5" />}
            </button>
          </div>
          
          {copied && (
            <span className="text-[8px] text-emerald-400 tracking-widest uppercase font-sans font-bold block mt-1 animate-pulse">
              Copied to clipboard
            </span>
          )}
        </motion.div>

        <div className="absolute left-1/2 -translate-x-1/2 w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent mb-10" />

        {/* Buttons Action Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto mt-8"
        >
          <button
            onClick={() => navigate('/products')}
            className="w-full sm:w-1/2 bg-[#D4AF37] hover:bg-[#C9A227] text-stone-950 py-3.5 px-6 text-[10px] uppercase font-sans font-extrabold tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Continue Shopping</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-1/2 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F8F5F0] hover:bg-white/5 py-3.5 px-6 text-[10px] uppercase font-sans font-bold tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <Home className="w-3.5 h-3.5 text-stone-400" />
            <span>Back To Home</span>
          </button>
        </motion.div>

        {/* Fine advisory tag */}
        <div className="mt-8 flex items-center justify-center space-x-1.5 text-[9px] uppercase tracking-widest text-[#D4AF37]/60 font-sans font-semibold">
          <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />
          <span>A Confirmation guide has been sent to client mailbox</span>
        </div>
      </motion.div>
    </div>
  );
}
