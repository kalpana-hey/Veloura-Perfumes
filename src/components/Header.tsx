import { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  openScentQuiz: () => void;
}

export default function Header({
  cartCount,
  setIsCartOpen,
  openScentQuiz,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/blog', name: 'Blog' },
    { path: '/about-us', name: 'About Us' },
    { path: '/contact-us', name: 'Contact Us' },
    { path: '/faq', name: 'FAQ' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-stone-950/95 text-stone-100 shadow-xl border-b border-gold-900/20 py-3 backdrop-blur-md'
          : 'bg-stone-950/80 text-stone-100 py-5 border-b border-white/5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 text-left group cursor-pointer"
        >
          <div className="relative">
            <span className="font-serif text-2xl tracking-[0.25em] font-light uppercase transition-all duration-300 group-hover:text-gold-300">
              VELOURA
            </span>
            <span className="block text-[8px] tracking-[0.45em] font-sans text-gold-400 absolute -bottom-2 left-0 uppercase font-medium">
              PERFUMES
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm tracking-widest font-sans font-light uppercase transition-all duration-300 py-1 border-b relative group ${
                  isActive
                    ? 'text-gold-300 border-gold-400'
                    : 'text-stone-300 border-transparent hover:text-white'
                }`}
              >
                {item.name}
                {/* Animated hover line */}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Scent Match Quiz Button */}
          <button
            onClick={openScentQuiz}
            className="hidden sm:flex items-center space-x-1 border border-gold-400/30 hover:border-gold-400 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 shadow-md group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse group-hover:rotate-12 transition-transform" />
            <span>Scent Finder</span>
          </button>

          {/* Cart triggers */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-stone-200 hover:text-gold-300 transition-colors relative group cursor-pointer"
            aria-label="Open Shopping Bag"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-black text-[11px] font-sans font-bold leading-none w-4 h-4 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                  {cartCount}
                </span>
              )}
            </div>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-200 hover:text-gold-300 transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full min-h-[calc(100vh-60px)] bg-stone-950/98 backdrop-blur-lg flex flex-col justify-between py-8 px-6 animate-fadeIn z-50">
          <div className="space-y-6 flex flex-col">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl tracking-widest font-serif font-light text-left py-2 border-b border-stone-900 block ${
                    isActive ? 'text-gold-300' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openScentQuiz();
              }}
              className="mt-4 flex items-center justify-center space-x-2 border border-gold-400/50 bg-gold-500/15 py-3 rounded-md text-gold-300 text-sm tracking-widest uppercase font-sans font-medium cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Scent Finder Quiz</span>
            </button>
          </div>

          <div className="text-center text-xs text-stone-500 tracking-wider">
            <p>Veloura Perfumes Headquarters</p>
            <p className="mt-1">New York, NY 10001</p>
          </div>
        </div>
      )}
    </header>
  );
}
