import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import Products from './components/Products.tsx';
import AboutUs from './components/AboutUs.tsx';
import Journal from './components/Journal.tsx';
import Contact from './components/Contact.tsx';
import FAQPage from './components/FAQPage.tsx';
import OrderConfirmation from './components/OrderConfirmation.tsx';
import InteractiveQuiz from './components/InteractiveQuiz.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import { Perfume, CartItem } from './types.ts';

// ScrollToTop component to automatically scroll to top when path changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();

  // Shopping Cart state with LocalStorage persistence wrapper
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('veloura_perfumes_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Interactive drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScentQuizOpen, setIsScentQuizOpen] = useState(false);

  // Active highlighted scent pass-through state from Home bestsellers view
  const [selectedPerfumeFromHome, setSelectedPerfumeFromHome] = useState<Perfume | null>(null);

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem('veloura_perfumes_cart', JSON.stringify(cart));
  }, [cart]);

  // Cart Mutative Logic
  const handleAddToCart = (perfume: Perfume, volume: string, price: number) => {
    setCart((prevCart) => {
      // Check if duplicate perfume & volume option already listed
      const existsIdx = prevCart.findIndex(
        (item) => item.perfume.id === perfume.id && item.selectedVolume === volume
      );

      if (existsIdx > -1) {
        const updated = [...prevCart];
        updated[existsIdx].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { perfume, selectedVolume: volume, price, quantity: 1 }];
      }
    });

    // Auto open cart drawer occasionally for visual confirmation
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Navigating to direct product after Scent Finder selection
  const handleNavigateToProducts = (perfumeId: string) => {
    // Set highlighted scent pass-through to Products component
    const found = perfumesData?.find(p => p.id === perfumeId);
    if (found) {
      setSelectedPerfumeFromHome(found as any);
    }
    navigate('/products');
    // Auto scroll down to the element
    setTimeout(() => {
      const element = document.getElementById(perfumeId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleSelectPerfumeFromHome = (perfume: Perfume) => {
    setSelectedPerfumeFromHome(perfume);
    navigate('/products');
    setTimeout(() => {
      const element = document.getElementById(perfume.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Helper static check due to circular reference avoidance 
  // perfumesData loaded in products navigation directly
  const perfumesData = [
    { id: 'velvet-bloom' },
    { id: 'midnight-ember' },
    { id: 'golden-aura' },
    { id: 'ocean-whisper' },
    { id: 'celeste-noir' },
    { id: 'velvet-orchid' }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0B0B0B] text-[#F8F5F0] selection:bg-[#D4AF37] selection:text-[#0B0B0B]">
      {/* Scroll to Top helper */}
      <ScrollToTop />

      {/* Header component */}
      <Header
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        openScentQuiz={() => setIsScentQuizOpen(true)}
      />

      {/* Main viewport transitions */}
      <main className="flex-grow pt-[84px]">
        <div className="animate-fadeIn transition-opacity duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  openScentQuiz={() => setIsScentQuizOpen(true)}
                  onSelectPerfume={handleSelectPerfumeFromHome}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  onAddToCart={handleAddToCart}
                  selectedPerfumeFromHome={selectedPerfumeFromHome}
                  clearSelectedPerfumeFromHome={() => setSelectedPerfumeFromHome(null)}
                />
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Journal />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Footer component */}
      <Footer
        openScentQuiz={() => setIsScentQuizOpen(true)}
      />

      {/* Bespoke interactive scent matchmaking quiz */}
      {isScentQuizOpen && (
        <InteractiveQuiz
          onAddToCart={handleAddToCart}
          onClose={() => setIsScentQuizOpen(false)}
          onNavigateToProducts={handleNavigateToProducts}
        />
      )}

      {/* Luxury checkout & shopping cart panel drawer */}
      {isCartOpen && (
        <CartDrawer
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}
