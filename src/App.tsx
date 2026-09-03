import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductColor, Category, CartItem, ToastMessage, Size } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductGrid } from './components/ProductGrid';
import { ShopView } from './components/ShopView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { EditorialStory } from './components/EditorialStory';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CheckoutModal } from './components/CheckoutModal';
import { ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'editorial'>('home');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  // Modals & Drawers State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Notification Toast
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Cart State (Persisted in localStorage if available)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('koso_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted)
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('koso_wishlist');
      return saved ? JSON.parse(saved) : ['koso-01', 'koso-04'];
    } catch {
      return ['koso-01', 'koso-04'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('koso_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Storage sync failed', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('koso_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.warn('Storage sync failed', e);
    }
  }, [wishlistIds]);

  // Navigate handler with window scroll reset
  const handleNavigate = (view: 'home' | 'shop' | 'editorial', category?: Category) => {
    setCurrentView(view);
    if (category) setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Handlers
  const handleAddToCart = (
    product: Product, 
    color: ProductColor, 
    size: Size | string, 
    quantity: number = 1
  ) => {
    const itemInstanceId = `${product.id}-${color.name}-${size}`;
    
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemInstanceId);
      if (existing) {
        return prev.map((item) => 
          item.id === itemInstanceId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemInstanceId,
          productId: product.id,
          product,
          selectedColor: color,
          selectedSize: size as Size,
          quantity,
          price: product.price,
        }
      ];
    });

    const activeImage = product.images[color.imageIndex] || product.images[0];
    setToast({
      id: Date.now().toString(),
      type: 'cart',
      title: `Added to Bag • ${quantity}x ${size}`,
      description: `${product.name} in ${color.name}`,
      thumbnail: activeImage,
    });
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) => 
      prev
        .map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        setToast({
          id: Date.now().toString(),
          type: 'info',
          title: 'Removed from Saved Pieces',
          description: product.name,
        });
        return prev.filter((id) => id !== product.id);
      } else {
        setToast({
          id: Date.now().toString(),
          type: 'success',
          title: 'Saved to Lookbook',
          description: product.name,
          thumbnail: product.images[0],
        });
        return [...prev, product.id];
      }
    });
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Featured Homepage collections
  const newArrivals = PRODUCTS.filter((p) => p.isNew || p.isFeatured).slice(0, 4);
  const bestsellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#111111] font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        wishlistCount={wishlistIds.length}
        activeCategory={activeCategory}
        currentView={currentView}
        onNavigate={(view, cat) => handleNavigate(view as any, cat)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
      />

      {/* 3. Main Views Engine */}
      {currentView === 'home' && (
        <main className="flex-1">
          {/* Hero Banner */}
          <Hero
            onExplore={(cat) => handleNavigate('shop', cat)}
            onReadStory={() => handleNavigate('editorial')}
          />

          {/* Category Navigation Silhouettes */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={(cat) => handleNavigate('shop', cat)}
          />

          {/* Featured New Arrivals Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  NEW RELEASES / 新作
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">
                  Autumn/Winter 2026 Arrivals
                </h2>
              </div>
              <button
                onClick={() => handleNavigate('shop', 'All')}
                className="hidden sm:inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
              >
                <span>View All ({PRODUCTS.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <ProductGrid
              products={newArrivals}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={(p) => setSelectedProduct(p)}
              onQuickAdd={(p, c, s) => handleAddToCart(p, c, s, 1)}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          </section>

          {/* Editorial Craft Philosophy Highlight */}
          <EditorialStory onExplore={(cat) => handleNavigate('shop', cat)} />

          {/* Everyday Architectural Bestsellers */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  ICONIC SILHOUETTES / 定番
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">
                  Everyday Architectural Staples
                </h2>
              </div>
              <button
                onClick={() => handleNavigate('shop', 'All')}
                className="text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
              >
                Explore More
              </button>
            </div>

            <ProductGrid
              products={bestsellers}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={(p) => setSelectedProduct(p)}
              onQuickAdd={(p, c, s) => handleAddToCart(p, c, s, 1)}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          </section>

          {/* Newsletter Signup */}
          <Newsletter />
        </main>
      )}

      {currentView === 'shop' && (
        <ShopView
          products={PRODUCTS}
          wishlistIds={wishlistIds}
          initialCategory={activeCategory}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setSelectedProduct(p)}
          onQuickAdd={(p, c, s) => handleAddToCart(p, c, s, 1)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      )}

      {currentView === 'editorial' && (
        <main className="flex-1">
          <EditorialStory onExplore={(cat) => handleNavigate('shop', cat)} />
          <Newsletter />
        </main>
      )}

      {/* 4. Comprehensive Footer */}
      <Footer
        onSelectCategory={(cat) => handleNavigate('shop', cat)}
        onNavigate={(view) => handleNavigate(view as any)}
      />

      {/* 5. Drawers & Modals */}
      <MobileNav
        isOpen={isMobileNavOpen}
        activeCategory={activeCategory}
        onClose={() => setIsMobileNavOpen(false)}
        onSelectCategory={(cat) => handleNavigate('shop', cat)}
        onNavigate={(view) => handleNavigate(view as any)}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onSelectRelated={(p) => setSelectedProduct(p)}
        allProducts={PRODUCTS}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onStartShopping={() => handleNavigate('shop', 'All')}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        wishlistProducts={wishlistProducts}
        onClose={() => setIsWishlistOpen(false)}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={(p, c, s) => {
          handleAddToCart(p, c, s, 1);
          handleToggleWishlist(p);
        }}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        products={PRODUCTS}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        items={cartItems}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={() => setCartItems([])}
      />

      {/* Toast Notification Container */}
      <Toast
        toast={toast}
        onDismiss={() => setToast(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
};

export default App;
