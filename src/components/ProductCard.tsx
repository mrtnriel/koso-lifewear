import React, { useState } from 'react';
import { Heart, Eye, Plus, Check } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, color: ProductColor, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
  onSelectProduct,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];
  const activeImage = product.images[activeColor.imageIndex] || product.images[0];
  const secondaryImage = product.images[(activeColor.imageIndex + 1) % product.images.length];

  const hasSale = product.originalPrice && product.originalPrice > product.price;
  const totalStock = product.sizes.reduce((acc, s) => acc + s.stock, 0);
  const defaultSize = product.sizes.find((s) => s.stock > 0)?.size || 'M';

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, activeColor, defaultSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article 
      className="group relative flex flex-col bg-white border border-[#E8E8E8] hover:border-neutral-900 transition-colors duration-200 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectProduct(product)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
        
        {/* Main Product Image with subtle cross-fade on hover */}
        <img
          src={isHovered && secondaryImage ? secondaryImage : activeImage}
          alt={`${product.name} in ${activeColor.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
        />

        {/* Badges (New / Bestseller / Sale) */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5 tracking-wider uppercase">
              New
            </span>
          )}
          {hasSale && (
            <span className="bg-[#E03131] text-white text-[10px] font-mono font-medium px-2 py-0.5 tracking-wider uppercase">
              Sale
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="bg-neutral-800 text-white text-[10px] font-mono font-medium px-2 py-0.5 tracking-wider uppercase">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-neutral-950 text-white shadow-md'
              : 'bg-white/85 hover:bg-white text-neutral-800 backdrop-blur-xs opacity-90 sm:opacity-0 sm:group-hover:opacity-100'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View & Quick Add Action Tray (Slide up on hover) */}
        <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-between gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-200 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 bg-white/95 hover:bg-white text-neutral-950 text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow-sm transition-transform active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={handleQuickAddClick}
            disabled={totalStock === 0}
            className={`py-2 px-3 text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1 shadow-sm transition-all active:scale-95 ${
              justAdded 
                ? 'bg-emerald-600 text-white' 
                : 'bg-neutral-900 hover:bg-black text-white'
            }`}
            title={`Quick add size ${defaultSize}`}
            aria-label={`Quick add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{defaultSize}</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Product Details Section */}
      <div className="p-3.5 flex flex-col flex-1 justify-between bg-white border-t border-[#F0F0F0]">
        
        <div>
          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 mb-2">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(idx);
                }}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  selectedColorIndex === idx
                    ? 'ring-1 ring-offset-1 ring-neutral-950 scale-110 border-neutral-400'
                    : 'border-neutral-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select color ${color.name}`}
              />
            ))}
            <span className="text-[10px] font-mono text-neutral-400 ml-1">
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
            </span>
          </div>

          {/* Product Category & Title */}
          <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-0.5">
            {product.category}
          </p>

          <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight line-clamp-1 group-hover:text-black">
            {product.name}
          </h3>

          <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-light">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Stock info */}
        <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm sm:text-base font-bold text-neutral-950 font-mono">
              ${product.price.toFixed(2)}
            </span>
            {hasSale && (
              <span className="text-xs text-neutral-400 line-through font-mono">
                ${product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>

          <div className="text-[10px] font-mono">
            {totalStock === 0 ? (
              <span className="text-red-500 font-medium">Sold Out</span>
            ) : totalStock < 15 ? (
              <span className="text-amber-600 font-medium">Low Stock</span>
            ) : (
              <span className="text-neutral-400">{product.fit}</span>
            )}
          </div>
        </div>

      </div>
    </article>
  );
};
