import React, { useEffect } from 'react';
import { X, ArrowRight, Globe, MapPin, HelpCircle } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { Category } from '../types';

interface MobileNavProps {
  isOpen: boolean;
  activeCategory: Category;
  onClose: () => void;
  onSelectCategory: (category: Category) => void;
  onNavigate: (view: 'home' | 'shop' | 'pdp' | 'editorial') => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  activeCategory,
  onClose,
  onSelectCategory,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide Drawer */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className="relative w-full max-w-xs bg-white text-neutral-900 shadow-2xl flex flex-col justify-between h-full z-10 animate-slide-in-left"
      >
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-black tracking-tight text-neutral-950">KŌSO</span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">LIFEWEAR</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-black rounded"
            aria-label="Close mobile menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 px-3">
            Collections & Categories
          </p>

          <button
            onClick={() => {
              onNavigate('home');
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold tracking-wide text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <span>Home</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id as Category);
                onNavigate('shop');
                onClose();
              }}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.id 
                  ? 'bg-neutral-900 text-white font-semibold' 
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}

          <div className="pt-4 border-t border-neutral-100 mt-4 space-y-1">
            <button
              onClick={() => {
                onNavigate('editorial');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            >
              <span>Fabric & Philosophy</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Footer utilities */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-600 space-y-3 font-mono">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-neutral-500" />
              <span>Region: United States (USD $)</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-neutral-500" />
              <span>Find a Workshop / Store</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-neutral-500" />
              <span>Client Concierge & Returns</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
