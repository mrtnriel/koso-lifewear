import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, CreditCard, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  items,
  onClose,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: 'Martin Tanaka',
    email: 'martin@example.com',
    address: '428 Omotesando Hills, Shibuya-ku',
    city: 'Tokyo',
    postalCode: '150-0001',
    deliveryMethod: 'standard',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = rawSubtotal >= 100 ? 0 : 9.00;
  const total = rawSubtotal + shippingFee + (rawSubtotal * 0.08);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onOrderSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
        className="relative bg-white w-full max-w-xl shadow-2xl border border-neutral-300 z-10 animate-modal-pop text-neutral-900 overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-neutral-800" />
            <h2 id="checkout-modal-title" className="text-sm font-bold tracking-tight text-neutral-950 uppercase font-mono">
              {step === 'details' ? 'Secure Express Checkout' : 'Order Confirmed'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-black rounded"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="p-5 sm:p-6 space-y-5">
            
            {/* Quick Order Summary */}
            <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-neutral-600">
                <span>Total Items ({items.reduce((a, b) => a + b.quantity, 0)})</span>
                <span className="font-bold text-neutral-900">${total.toFixed(2)} USD</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-700 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted • Zero Carbon Dispatch</span>
              </div>
            </div>

            {/* Contact & Shipping */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                1. Dispatch Details
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">Email for Dispatch Tracking</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-neutral-500 mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Preview */}
            <div className="space-y-3 pt-3 border-t border-neutral-200">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                2. Payment Method
              </p>
              
              <div className="p-3 border border-neutral-900 bg-neutral-50 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2.5 font-mono">
                  <CreditCard className="w-4 h-4 text-neutral-800" />
                  <span>Encrypted Test Gateway (Card ending 4242)</span>
                </div>
                <span className="text-[10px] font-mono bg-neutral-200 px-1.5 py-0.5 rounded">TEST MODE</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 bg-neutral-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center space-x-2 active:scale-98 shadow-md disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Authorizing Dispatch...</span>
              ) : (
                <>
                  <span>Place Order • ${total.toFixed(2)} USD</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        ) : (
          /* Order Confirmed State */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold tracking-tight text-neutral-950">
              Thank you, {formData.name.split(' ')[0]}!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-sm mx-auto leading-relaxed">
              Your architectural lifewear order has been confirmed. A dispatch notification with tracking details will be delivered to <strong className="text-neutral-900 font-mono">{formData.email}</strong>.
            </p>

            <div className="p-4 bg-neutral-50 border border-neutral-200 font-mono text-xs text-neutral-600 space-y-1">
              <p>ORDER ID: <strong className="text-neutral-900">KS-2026-{Math.floor(100000 + Math.random() * 900000)}</strong></p>
              <p>ESTIMATED DISPATCH: Within 24 Hours</p>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-8 py-3.5 bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
            >
              Return to Catalog
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
