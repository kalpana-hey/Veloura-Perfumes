import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types.ts';
import { X, Minus, Plus, ShoppingBag, Trash2, CheckCircle2, Ticket, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  cart: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onClose: () => void;
}

export default function CartDrawer({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onClose,
}: CartDrawerProps) {
  const navigate = useNavigate();
  // Checkout Form states
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [shippingDetails, setShippingDetails] = useState({
    shippingAddress: '',
    zipCode: '',
    email: '',
    deliveryNote: '',
  });
  const [preOrderId, setPreOrderId] = useState('');

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingThreshold = 150;
  const shippingCost = cartSubtotal >= shippingThreshold || cartSubtotal === 0 ? 0 : 15;
  const grandTotal = cartSubtotal + shippingCost;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!shippingDetails.shippingAddress || !shippingDetails.email) return;

    // Generate random pre-order code
    const orderNo = 'VEL-' + Math.floor(200000 + Math.random() * 800000);
    setPreOrderId(orderNo);
    
    // Clear and close
    onClearCart();
    onClose();

    // Reset drawer state for next time
    setCheckoutStep('cart');
    setShippingDetails({ shippingAddress: '', zipCode: '', email: '', deliveryNote: '' });

    // Navigate to dedicated confirmation route
    navigate(`/order-confirmation?orderId=${orderNo}`);
  };

  const resetDrawer = () => {
    onClearCart();
    setCheckoutStep('cart');
    setShippingDetails({ shippingAddress: '', zipCode: '', email: '', deliveryNote: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 p-0 backdrop-blur-sm animate-fadeIn flex justify-end">
      {/* Absolute Backdrop closing trigger click */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Drawer content drawer panel in brand luxury dark */}
      <div className="relative z-10 w-full max-w-md h-full bg-[#0B0B0B] text-[#F8F5F0] shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/25">
        
        {/* Drawer Header */}
        <header className="p-5 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#121212]">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif text-lg tracking-widest text-[#F8F5F0] uppercase font-light">
              Your Fragrances Bag
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-3 bg-black hover:bg-[#D4AF37] text-[#E8DDD4] hover:text-[#0B0B0B] text-xs font-semibold rounded-none border border-[#D4AF37]/30 uppercase tracking-widest transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </header>

        {/* Drawer Main Body */}
        <div className="flex-grow overflow-y-auto p-5">
          {checkoutStep === 'cart' && (
            <div className="space-y-4 h-full flex flex-col justify-between">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3 flex-grow flex flex-col items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-[#D4AF37]/20 animate-pulse" />
                  <p className="text-xs uppercase tracking-widest text-[#E8DDD4] font-sans">
                    Your luxury collection is currently empty.
                  </p>
                  <button
                    onClick={onClose}
                    className="text-xs font-bold text-[#D4AF37] hover:text-[#C9A227] uppercase tracking-widest border-b border-[#D4AF37]/35 pb-0.5 mt-2 cursor-pointer transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-1">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 items-center justify-between bg-[#121212] border border-[#D4AF37]/15">
                      {/* Perfume mini visual */}
                      <div className="w-16 h-16 bg-black border border-[#D4AF37]/20 shrink-0 overflow-hidden">
                        <img
                          src={item.perfume.image}
                          alt={item.perfume.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Detail metadata */}
                      <div className="space-y-1 flex-grow">
                        <span className="text-[8px] uppercase tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] px-1.5 py-0.5 font-bold font-sans">
                          {item.perfume.category}
                        </span>
                        <h4 className="font-serif text-sm tracking-wider text-white font-normal uppercase leading-tight mt-1">
                          {item.perfume.name}
                        </h4>
                        <p className="text-[9px] text-[#E8DDD4] tracking-widest uppercase font-sans">
                          Custom Size: {item.selectedVolume}
                        </p>
                        <p className="text-xs text-[#D4AF37] font-sans font-semibold">
                          ${item.price}.00 each
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-[#E8DDD4]/60 hover:text-red-500 transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center space-x-1 bg-black border border-[#D4AF37]/30 p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                            className="p-1 text-[#E8DDD4] hover:text-[#0B0B0B] hover:bg-[#D4AF37] transition-all rounded-none cursor-pointer"
                          >
                            <Minus className="w-2.5 h-2.5" />
                          </button>
                          <span className="text-[11px] font-sans font-bold text-[#F8F5F0] w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-1 text-[#E8DDD4] hover:text-[#0B0B0B] hover:bg-[#D4AF37] transition-all rounded-none cursor-pointer"
                          >
                            <Plus className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {checkoutStep === 'form' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4 py-2 animate-fadeIn">
              <h4 className="font-serif text-base tracking-widest text-white uppercase border-b border-[#D4AF37]/20 pb-2">
                Pre-order Shipping Address
              </h4>

              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wide text-[#E8DDD4] font-sans block">
                  Delivery Address <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={shippingDetails.shippingAddress}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, shippingAddress: e.target.value })}
                  placeholder="e.g. 12 or 742 Fragrance Parkway"
                  className="w-full bg-[#121212] border border-[#D4AF37]/30 p-2.5 text-xs text-white font-sans outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-wide text-[#E8DDD4] font-sans block">
                    Zip Code <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.zipCode}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, zipCode: e.target.value })}
                    placeholder="10001"
                    className="w-full bg-[#121212] border border-[#D4AF37]/30 p-2.5 text-xs text-white font-sans outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-wide text-[#E8DDD4] font-sans block">
                    Client Email <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={shippingDetails.email}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#121212] border border-[#D4AF37]/30 p-2.5 text-xs text-white font-sans outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wide text-[#E8DDD4] font-sans block">
                  Custom Request or Sampler Note
                </label>
                <textarea
                  rows={3}
                  value={shippingDetails.deliveryNote}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, deliveryNote: e.target.value })}
                  placeholder="Include a request for customized trial blotters..."
                  className="w-full bg-[#121212] border border-[#D4AF37]/30 p-2.5 text-xs text-white font-sans outline-none focus:border-[#D4AF37] resize-none transition-colors"
                />
              </div>

              <div className="bg-[#121212] p-4 border border-[#D4AF37]/20 text-[10px] text-[#E8DDD4]/80 font-sans leading-relaxed space-y-1.5 rounded-none">
                <p className="flex items-center space-x-1.5 font-semibold text-[#D4AF37]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Maison Security Guarantee</span>
                </p>
                <p>This is a luxurious preview order. No payment is drawn. A client advisor will correspond via the email supplied.</p>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="w-1/3 border border-[#D4AF37]/30 hover:border-[#D4AF37] py-3 text-xs tracking-widest uppercase font-sans font-medium text-[#E8DDD4] hover:bg-[#121212] transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] py-3 text-xs tracking-widest uppercase font-sans font-bold transition-colors cursor-pointer"
                >
                  Reserve Order
                </button>
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-12 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto select-none pointer-events-none">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl tracking-wider text-white uppercase font-medium">
                Luxury Reservation Filed
              </h3>
              <p className="text-[#E8DDD4] font-sans text-xs leading-relaxed max-w-sm mx-auto">
                Fine aromas are being prepared for your shipping review. We have sent a comprehensive receipt and parcel tracking guides to <span className="font-semibold text-[#D4AF37]">{shippingDetails.email}</span>.
              </p>

              <div className="bg-[#121212] border border-[#D4AF37]/20 p-4 inline-block w-full">
                <span className="text-[9px] uppercase tracking-widest text-[#E8DDD4]/60 font-sans block">RESERVATION IDENTIFIER</span>
                <span className="text-sm font-mono font-bold text-[#D4AF37] tracking-wider uppercase flex items-center justify-center space-x-1.5 mt-1.5">
                  <Ticket className="w-4 h-4 text-[#D4AF37]" />
                  <span>{preOrderId}</span>
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetDrawer}
                  className="bg-[#D4AF37] hover:bg-[#C9A227] text-stone-950 py-3 px-8 text-xs font-sans uppercase font-bold tracking-widest transition-colors shadow-lg cursor-pointer"
                >
                  Complete & Finish
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Calculations (only if not success state) */}
        {checkoutStep !== 'success' && cart.length > 0 && (
          <footer className="p-5 border-t border-[#D4AF37]/20 bg-[#121212] space-y-4">
            <div className="space-y-2 text-xs font-sans text-[#E8DDD4]">
              <div className="flex items-center justify-between">
                <span>Subtotal:</span>
                <span className="text-[#F8F5F0] font-semibold">${cartSubtotal}.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Direct Courier Logistics:</span>
                <span>{shippingCost === 0 ? <strong className="text-emerald-400 font-semibold uppercase text-[10px]">Complimentary</strong> : `$${shippingCost}.00`}</span>
              </div>
              
              {/* Complimentary threshold banner progress bar */}
              {cartSubtotal < shippingThreshold && (
                <div className="text-[10px] bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-2 text-[#D4AF37] text-center uppercase tracking-wider font-semibold font-sans">
                  Add <strong className="text-white font-semibold">${shippingThreshold - cartSubtotal}</strong> more for complimentary delivery.
                </div>
              )}

              <hr className="border-[#D4AF37]/20 mt-1" />

              <div className="flex items-center justify-between text-sm text-white font-bold font-sans pt-1">
                <span>Estimated Value:</span>
                <span className="text-base tracking-widest font-sans font-semibold text-[#D4AF37]">${grandTotal}.00</span>
              </div>
            </div>

            {checkoutStep === 'cart' && (
              <button
                onClick={() => setCheckoutStep('form')}
                className="w-full bg-[#D4AF37] hover:bg-[#C9A227] text-[#0B0B0B] py-3.5 text-xs uppercase tracking-widest font-sans font-bold text-center transition-colors shadow-md cursor-pointer"
              >
                Proceed to Checkout Form
              </button>
            )}
          </footer>
        )}
      </div>
    </div>
  );
}
