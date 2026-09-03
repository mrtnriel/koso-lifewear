import React from 'react';
import { Product, ProductColor } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, RotateCcw } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  wishlistIds: string[];
  title?: string;
  subtitle?: string;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, color: ProductColor, size: string) => void;
  onSelectProduct: (product: Product) => void;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistIds,
  title,
  subtitle,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
  onSelectProduct,
  onResetFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 px-4 text-center max-w-md mx-auto">
        <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-neutral-400">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
          No matching silhouettes found
        </h3>
        <p className="text-sm text-neutral-500 mt-2 font-light leading-relaxed">
          Try expanding your filter parameters, selecting a different color, or resetting to view our full collection.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="mt-6 inline-flex items-center space-x-2 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors rounded-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="flex items-baseline justify-between mb-6">
          <div>
            {subtitle && (
              <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-0.5">
                {title}
              </h2>
            )}
          </div>
          <span className="text-xs font-mono text-neutral-400">
            {products.length} {products.length === 1 ? 'item' : 'items'}
          </span>
        </div>
      )}

      {/* Grid: 2 columns on mobile, 3 columns on tablet, 4 columns on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlistIds.includes(product.id)}
            onToggleWishlist={onToggleWishlist}
            onQuickView={onQuickView}
            onQuickAdd={onQuickAdd}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>
    </div>
  );
};
