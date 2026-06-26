import { Sparkles, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  openScentQuiz: () => void;
}

export default function Footer({ openScentQuiz }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-gold-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-stone-900">
          {/* Brand Intro */}
          <div className="space-y-4 max-w-sm md:pr-4">
            <span className="font-serif text-2xl tracking-[0.25em] font-light text-stone-100 uppercase">
              VELOURA
            </span>
            <p className="text-xs tracking-wider text-stone-400 font-sans leading-relaxed">
              Timeless liquid artistry crafted with premium essential oils to create unshakeable confidence and define your distinctive presence.
            </p>
            <div className="pt-2">
              <button
                onClick={openScentQuiz}
                className="inline-flex items-center space-x-1 text-gold-400 hover:text-gold-300 text-xs tracking-widest uppercase font-semibold transition-colors font-sans cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Perfume Match Finder</span>
              </button>
            </div>
          </div>

          {/* Boutique Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#F8F5F0] uppercase mb-4">
              The Boutique
            </h4>
            <ul className="space-y-2.5 text-xs tracking-widest uppercase text-stone-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-stone-100 uppercase mb-4">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-xs tracking-widest uppercase text-stone-400">
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-gold-400 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-gold-400 transition-colors"
                >
                  Common FAQs
                </Link>
              </li>
              <li>
                <span className="text-stone-500 cursor-not-allowed">Shipping & Returns</span>
              </li>
              <li>
                <span className="text-stone-500 cursor-not-allowed font-sans">Cruelty-Free Charter</span>
              </li>
            </ul>
          </div>

          {/* Headquarters info */}
          <div className="space-y-3 text-xs tracking-wider font-sans text-stone-400">
            <h4 className="font-serif text-sm tracking-widest text-stone-100 uppercase">
              Headquarters
            </h4>
            <p>
              Veloura Perfumes Corporate
              <br />
              125 Fragrance Avenue
              <br />
              New York, NY 10001
            </p>
            <p className="pt-2">
              <span className="text-stone-500">Inquiries:</span>{' '}
              <a
                href="mailto:support@velouraperfumes.com"
                className="text-gold-400 hover:underline"
              >
                support@velouraperfumes.com
              </a>
            </p>
            <p>
              <span className="text-stone-500">Phone:</span> +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-stone-500 tracking-widest uppercase gap-4">
          <p>© {currentYear} Veloura Perfumes. All Rights Reserved. Crafted with pristine elegance.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
