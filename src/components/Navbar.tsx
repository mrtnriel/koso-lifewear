import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  activeCategory: Category;
  currentView: 'home' | 'shop' | 'pdp' | 'editorial';
  onNavigate: (view: 'home' | 'shop' | 'pdp' | 'editorial', category?: Category) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenMobileNav: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  activeCategory,
  currentView,
  onNavigate,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenMobileNav,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartAnimate, setCartAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setCartAnimate(true);
      const timer = setTimeout(() => setCartAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E8E8E8] py-3' 
          : 'bg-[#FBFBFB] border-b border-[#E8E8E8] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Mobile menu button & search */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={onOpenMobileNav}
            className="p-2 -ml-2 text-neutral-900 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenSearch}
            className="p-2 text-neutral-700 hover:text-black focus:outline-none rounded"
            aria-label="Search catalog"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Brand Logo Treatment */}
        <div className="flex items-center">
          <button
            onClick={() => onNavigate('home')}
            className="group text-left flex items-baseline space-x-2 focus:outline-none"
            aria-label="KŌSO Homepage"
          >
            <span className="text-2xl sm:text-2xl font-black tracking-[-0.04em] text-neutral-950 font-sans group-hover:opacity-80 transition-opacity">
              KŌSO
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
              LIFEWEAR / 構造
            </span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          <button
            onClick={() => onNavigate('home')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'home' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Home
            {currentView === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>

          <button
            onClick={() => onNavigate('shop', 'All')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'shop' && activeCategory === 'All' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            All Shop
            {currentView === 'shop' && activeCategory === 'All' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>

          <button
            onClick={() => onNavigate('shop', 'T-Shirts')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'shop' && activeCategory === 'T-Shirts' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            T-Shirts
            {currentView === 'shop' && activeCategory === 'T-Shirts' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>

          <button
            onClick={() => onNavigate('shop', 'Outerwear')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'shop' && activeCategory === 'Outerwear' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Outerwear
            {currentView === 'shop' && activeCategory === 'Outerwear' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>

          <button
            onClick={() => onNavigate('shop', 'Pants & Trousers')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'shop' && activeCategory === 'Pants & Trousers' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Trousers
            {currentView === 'shop' && activeCategory === 'Pants & Trousers' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>

          <button
            onClick={() => onNavigate('shop', 'Knitwear')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'shop' && activeCategory === 'Knitwear' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Knitwear
            {currentView === 'shop' && activeCategory === 'Knitwear' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>

          <button
            onClick={() => onNavigate('editorial')}
            className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-150 relative py-1 ${
              currentView === 'editorial' ? 'text-black font-semibold' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Philosophy
            {currentView === 'editorial' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>
            )}
          </button>
        </nav>

        {/* Action icons (Search, Wishlist, Cart) */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={onOpenSearch}
            className="hidden lg:flex items-center space-x-2 px-3 py-1.5 text-xs text-neutral-500 bg-neutral-100 hover:bg-neutral-200/80 rounded-full transition-colors duration-150 font-mono"
            aria-label="Open search"
          >
            <Search className="w-3.5 h-3.5 text-neutral-600" />
            <span>Search</span>
            <kbd className="text-[10px] bg-white border border-neutral-300 px-1.5 py-0.5 rounded shadow-2xs text-neutral-500 font-sans">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={onOpenWishlist}
            className="p-2 text-neutral-800 hover:text-black relative transition-transform duration-150 active:scale-90 rounded"
            aria-label={`Wishlist with ${wishlistCount} items`}
          >
            <Heart className="w-5 h-5 stroke-[1.75]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-neutral-900 text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className={`p-2 text-neutral-800 hover:text-black relative transition-all duration-200 active:scale-90 rounded ${
              cartAnimate ? 'scale-110' : ''
            }`}
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#111111] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
