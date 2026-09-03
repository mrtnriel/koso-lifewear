import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag, Tag, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onStartShopping: () => void;
  onCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 100;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onStartShopping,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number | null>(null);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedDiscount ? (rawSubtotal * appliedDiscount) : 0;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);
  
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = isFreeShipping || items.length === 0 ? 0 : 9.00;
  const estimatedTax = subtotal * 0.08;
  const total = subtotal + shippingFee + estimatedTax;

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'KOSO10' || code === 'LIFEWEAR') {
      setAppliedDiscount(0.10);
    } else if (code === 'ARCHITECT') {
      setAppliedDiscount(0.15);
    } else {
      setPromoError('Invalid promotion code. Try "KOSO10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="relative ml-auto w-full max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col justify-between h-full z-10 animate-slide-in-right"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-neutral-950" />
            <h2 id="cart-drawer-title" className="text-base font-bold tracking-tight text-neutral-950">
              Shopping Bag
            </h2>
            <span className="text-xs font-mono text-neutral-500 font-semibold">
              ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-neutral-50 p-3.5 px-5 border-b border-neutral-200 shrink-0">
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            {isFreeShipping ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Free Worldwide Delivery Unlocked
              </span>
            ) : (
              <span className="text-neutral-600">
                Add <strong className="text-neutral-900 font-bold">${remainingForFreeShipping.toFixed(2)}</strong> more for Free Shipping
              </span>
            )}
            <span className="text-neutral-400 font-bold">{Math.round(shippingProgress)}%</span>
          </div>

          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ease-out ${
                isFreeShipping ? 'bg-emerald-600' : 'bg-neutral-900'
              }`}
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-neutral-100">
          {items.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">Your bag is currently empty</h3>
              <p className="text-xs text-neutral-500 font-light mt-1 max-w-xs leading-relaxed">
                Discover our curated collection of architectural essentials and everyday lifewear.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onStartShopping();
                }}
                className="mt-6 px-6 py-3 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemImage = item.product.images[item.selectedColor.imageIndex] || item.product.images[0];

              return (
                <div key={item.id} className="py-4 flex gap-3.5 first:pt-0">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0">
                    <img 
                      src={itemImage} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-semibold text-neutral-900 line-clamp-1 pr-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1 -mr-1"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-2 text-[11px] font-mono text-neutral-500 mt-1">
                        <span className="flex items-center gap-1">
                          <span 
                            className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          {item.selectedColor.name}
                        </span>
                        <span>•</span>
                        <span>Size: <strong>{item.selectedSize}</strong></span>
                      </div>
                    </div>

                    {/* Stepper and Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-neutral-200 bg-neutral-50 h-7 px-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-neutral-500 hover:text-black"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-neutral-500 hover:text-black"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right font-mono">
                        <span className="text-xs sm:text-sm font-bold text-neutral-950">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-neutral-400">
                            (${item.price.toFixed(2)} ea)
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Checkout Calculation & Sticky CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50/80 backdrop-blur-xs shrink-0 space-y-4">
            
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Promo code (e.g. KOSO10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-white border border-neutral-300 pl-8 pr-3 py-2 text-xs font-mono text-neutral-900 uppercase focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-colors"
              >
                Apply
              </button>
            </form>
            {appliedDiscount && (
              <p className="text-[11px] font-mono text-emerald-600 font-semibold">
                ✓ Promotional discount applied ({(appliedDiscount * 100)}% off)
              </p>
            )}
            {promoError && (
              <p className="text-[11px] font-mono text-red-600">{promoError}</p>
            )}

            {/* Financial breakdown */}
            <div className="space-y-1.5 text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-neutral-900 font-medium">${rawSubtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Sales Tax (8%)</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-neutral-950 border-t border-neutral-300 pt-2">
                <span>Total Estimated</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center space-x-2 shadow-sm active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
              <span>Encrypted Checkout • 30-Day Hassle-Free Returns</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
