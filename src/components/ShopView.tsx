import React, { useState, useMemo } from 'react';
import { Product, ProductColor, FilterState, Category } from '../types';
import { FilterBar } from './FilterBar';
import { FilterDrawer } from './FilterDrawer';
import { ProductGrid } from './ProductGrid';

interface ShopViewProps {
  products: Product[];
  wishlistIds: string[];
  initialCategory: Category;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, color: ProductColor, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  wishlistIds,
  initialCategory,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
  onSelectProduct,
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    gender: 'All',
    colors: [],
    sizes: [],
    priceRange: [0, 300],
    sortBy: 'featured',
    searchQuery: '',
    inStockOnly: false,
    onSaleOnly: false,
  });

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'All',
      gender: 'All',
      colors: [],
      sizes: [],
      priceRange: [0, 300],
      sortBy: 'featured',
      searchQuery: '',
      inStockOnly: false,
      onSaleOnly: false,
    });
  };

  // Filter and Sort Engine
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (filters.category !== 'All' && p.category !== filters.category) return false;

      // Gender filter
      if (filters.gender !== 'All' && p.gender !== filters.gender && p.gender !== 'Unisex') return false;

      // Color filter
      if (filters.colors.length > 0) {
        const matchesColor = p.colors.some((c) => filters.colors.includes(c.name));
        if (!matchesColor) return false;
      }

      // Size filter
      if (filters.sizes.length > 0) {
        const matchesSize = p.sizes.some((s) => filters.sizes.includes(s.size) && s.stock > 0);
        if (!matchesSize) return false;
      }

      // In Stock filter
      if (filters.inStockOnly) {
        const totalStock = p.sizes.reduce((acc, s) => acc + s.stock, 0);
        if (totalStock === 0) return false;
      }

      // On Sale filter
      if (filters.onSaleOnly) {
        if (!p.originalPrice || p.originalPrice <= p.price) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (filters.sortBy === 'price-asc') {
        return a.price - b.price;
      }
      if (filters.sortBy === 'price-desc') {
        return b.price - a.price;
      }
      if (filters.sortBy === 'rating') {
        return b.rating - a.rating;
      }
      // Default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [products, filters]);

  const categoryDescriptions: Record<Category, string> = {
    'All': 'Explore the complete catalog of structural lifewear, high-density knitwear, and technical outerwear.',
    'T-Shirts': 'Heavyweight 280 GSM Californian Supima® and mercerized Giza cottons engineered for shape retention.',
    'Outerwear': 'Modular weatherproof parkas, 750 fill power packable down, and seam-taped storm shields.',
    'Pants & Trousers': 'High-density Okayama cotton twill with deep forward pleats and tailored relaxed drape.',
    'Knitwear': '3D WHOLEGARMENT® seamless 19.5-micron Australian merino wool with zero armhole stitching.',
    'Shirts & Blouses': 'Garment-washed 100% organic Oxford cloth with relaxed silhouette and mother-of-pearl buttons.',
    'Accessories': 'Everyday modular utility built with recycled 500D Cordura® and magnetic Fidlock® hardware.',
  };

  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      
      {/* Page Title & Breadcrumb */}
      <div className="bg-white border-b border-[#E8E8E8] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
            <span>KŌSO</span>
            <span>/</span>
            <span>COLLECTIONS</span>
            <span>/</span>
            <span className="text-neutral-900 font-bold">{filters.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            {filters.category === 'All' ? 'All Architectural Lifewear' : filters.category}
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-2xl font-light leading-relaxed">
            {categoryDescriptions[filters.category]}
          </p>
        </div>
      </div>

      {/* Interactive Filter Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onOpenMobileFilter={() => setIsMobileFilterOpen(true)}
        onResetFilters={handleResetFilters}
        totalCount={filteredProducts.length}
      />

      {/* Main Grid View Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ProductGrid
          products={filteredProducts}
          wishlistIds={wishlistIds}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          onQuickAdd={onQuickAdd}
          onSelectProduct={onSelectProduct}
          onResetFilters={handleResetFilters}
        />
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        isOpen={isMobileFilterOpen}
        filters={filters}
        onClose={() => setIsMobileFilterOpen(false)}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        totalCount={filteredProducts.length}
      />

    </main>
  );
};
