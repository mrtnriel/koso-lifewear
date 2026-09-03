import React, { useState } from 'react';
import { 
  X, Heart, Star, Truck, RotateCcw, 
  ChevronDown, ChevronUp, Plus, Minus, Check, Ruler 
} from 'lucide-react';
import { Product, ProductColor, Size } from '../types';
import { SizeGuideModal } from './SizeGuideModal';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: Size, quantity: number) => void;
  onSelectRelated: (product: Product) => void;
  allProducts: Product[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
  onSelectRelated,
  allProducts,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  
  // Accordion state
  const [openSection, setOpenSection] = useState<'fabric' | 'care' | 'shipping' | null>('fabric');

  if (!isOpen || !product) return null;

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];
  const activeStock = product.sizes.find((s) => s.size === selectedSize)?.stock ?? 0;
  const hasSale = product.originalPrice && product.originalPrice > product.price;

  const handleColorSelect = (idx: number) => {
    setSelectedColorIndex(idx);
    const color = product.colors[idx];
    if (color && color.imageIndex !== undefined) {
      setSelectedImageIndex(color.imageIndex);
    }
  };

  const handleAddToCart = () => {
    if (activeStock === 0) return;
    onAddToCart(product, activeColor, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, 3);

  const toggleAccordion = (section: 'fabric' | 'care' | 'shipping') => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdp-modal-title"
          className="relative bg-white w-full max-w-5xl my-auto shadow-2xl border border-neutral-300 z-10 animate-modal-pop max-h-[92vh] flex flex-col text-neutral-900 overflow-hidden"
        >
          {/* Header Close & SKU */}
          <div className="p-3.5 sm:px-6 border-b border-neutral-200 flex items-center justify-between bg-[#FDFDFD] shrink-0">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                {product.category} • SKU: {product.sku}
              </span>
              <span className="hidden sm:inline-block text-neutral-300">|</span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500 font-medium">
                {product.fit}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-1.5 rounded transition-colors ${
                  isWishlisted ? 'text-black' : 'text-neutral-400 hover:text-black'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-neutral-500 hover:text-black rounded"
                aria-label="Close product view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Gallery & Thumbnails */}
              <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
                
                {/* Thumbnails list */}
                <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-20 shrink-0 no-scrollbar">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`aspect-[3/4] w-14 sm:w-full overflow-hidden border transition-all shrink-0 ${
                        selectedImageIndex === idx 
                          ? 'border-black ring-1 ring-black' 
                          : 'border-neutral-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover object-center" />
                    </button>
                  ))}
                </div>

                {/* Main Large Image */}
                <div className="flex-1 aspect-[3/4] bg-neutral-100 overflow-hidden relative border border-neutral-200">
                  <img
                    src={product.images[selectedImageIndex] || product.images[0]}
                    alt={`${product.name} view ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                  />

                  {hasSale && (
                    <span className="absolute top-3 left-3 bg-[#E03131] text-white text-xs font-mono font-bold px-2.5 py-1 uppercase tracking-wider">
                      Special Offer
                    </span>
                  )}
                </div>

              </div>

              {/* Right Column: Product Info & Purchase Engine */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                
                <div>
                  {/* Rating & reviews */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-600 mb-2">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-neutral-900">{product.rating.toFixed(1)}</span>
                    <span className="text-neutral-400">({product.reviewCount} reviews)</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h1 id="pdp-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                    {product.name}
                  </h1>

                  <p className="mt-1 text-xs sm:text-sm font-mono text-neutral-500">
                    {product.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="mt-4 flex items-baseline space-x-3 pb-4 border-b border-neutral-200">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-neutral-950">
                      ${product.price.toFixed(2)}
                    </span>
                    {hasSale && (
                      <span className="text-sm font-mono text-neutral-400 line-through">
                        ${product.originalPrice?.toFixed(2)}
                      </span>
                    )}
                    <span className="text-xs font-mono text-neutral-400">USD (Tax incl.)</span>
                  </div>

                  {/* Description paragraph */}
                  <p className="mt-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Color Selector */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                      <span className="uppercase text-neutral-500 font-semibold">Colorway</span>
                      <span className="font-bold text-neutral-900">{activeColor.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {product.colors.map((color, idx) => (
                        <button
                          key={color.name}
                          onClick={() => handleColorSelect(idx)}
                          className={`w-8 h-8 rounded-full border transition-all ${
                            selectedColorIndex === idx
                              ? 'ring-2 ring-offset-2 ring-neutral-950 scale-110 border-neutral-400'
                              : 'border-neutral-300 hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                          aria-label={`Select color ${color.name}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                      <span className="uppercase text-neutral-500 font-semibold">Select Size</span>
                      <button
                        onClick={() => setIsSizeGuideOpen(true)}
                        className="inline-flex items-center space-x-1 text-neutral-900 underline hover:text-black font-semibold"
                      >
                        <Ruler className="w-3.5 h-3.5" />
                        <span>Size Guide</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      {product.sizes.map((s) => {
                        const isSelected = selectedSize === s.size;
                        const isOutOfStock = s.stock === 0;

                        return (
                          <button
                            key={s.size}
                            disabled={isOutOfStock}
                            onClick={() => setSelectedSize(s.size)}
                            className={`py-2.5 text-xs font-mono font-semibold text-center border transition-all ${
                              isOutOfStock
                                ? 'bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed line-through'
                                : isSelected
                                ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                                : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-500'
                            }`}
                          >
                            {s.size}
                          </button>
                        );
                      })}
                    </div>

                    {/* Stock Status text */}
                    <div className="mt-2 text-[11px] font-mono">
                      {activeStock === 0 ? (
                        <span className="text-red-600 font-bold">Currently Sold Out in {selectedSize}</span>
                      ) : activeStock < 10 ? (
                        <span className="text-amber-600 font-semibold">Only {activeStock} units remaining in stock</span>
                      ) : (
                        <span className="text-emerald-600 font-medium">In Stock • Ready to dispatch</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Add to Cart Engine */}
                  <div className="mt-6 pt-4 border-t border-neutral-200 space-y-3">
                    <div className="flex items-center gap-3">
                      {/* Stepper */}
                      <div className="flex items-center border border-neutral-300 bg-neutral-50 h-12 px-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                          className="p-2 text-neutral-600 hover:text-black disabled:opacity-30"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-mono font-bold text-sm">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(Math.min(activeStock, quantity + 1))}
                          disabled={quantity >= activeStock}
                          className="p-2 text-neutral-600 hover:text-black disabled:opacity-30"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Primary CTA Button */}
                      <button
                        onClick={handleAddToCart}
                        disabled={activeStock === 0}
                        className={`flex-1 h-12 px-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all duration-200 ${
                          activeStock === 0
                            ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                            : addedAnimation
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-neutral-900 hover:bg-black text-white active:scale-98'
                        }`}
                      >
                        {addedAnimation ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added to Bag</span>
                          </>
                        ) : activeStock === 0 ? (
                          <span>Out of Stock</span>
                        ) : (
                          <span>Add to Shopping Bag • ${(product.price * quantity).toFixed(2)}</span>
                        )}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Collapsible Accordion Specifications */}
                <div className="mt-8 border-t border-neutral-200 divide-y divide-neutral-200 text-xs">
                  
                  {/* Fabric & Construction */}
                  <div>
                    <button
                      onClick={() => toggleAccordion('fabric')}
                      className="w-full py-3 flex items-center justify-between font-mono font-semibold uppercase text-neutral-800 hover:text-black"
                    >
                      <span>Fabric & Engineering</span>
                      {openSection === 'fabric' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {openSection === 'fabric' && (
                      <div className="pb-4 space-y-1.5 text-neutral-600 font-light">
                        {product.fabricDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-neutral-900 font-mono">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Care & Maintenance */}
                  <div>
                    <button
                      onClick={() => toggleAccordion('care')}
                      className="w-full py-3 flex items-center justify-between font-mono font-semibold uppercase text-neutral-800 hover:text-black"
                    >
                      <span>Care & Longevity</span>
                      {openSection === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {openSection === 'care' && (
                      <div className="pb-4 space-y-1.5 text-neutral-600 font-light">
                        {product.careInstructions.map((care, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-neutral-900 font-mono">•</span>
                            <span>{care}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Shipping & Returns */}
                  <div>
                    <button
                      onClick={() => toggleAccordion('shipping')}
                      className="w-full py-3 flex items-center justify-between font-mono font-semibold uppercase text-neutral-800 hover:text-black"
                    >
                      <span>Shipping & Returns</span>
                      {openSection === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {openSection === 'shipping' && (
                      <div className="pb-4 space-y-2 text-neutral-600 font-light">
                        <div className="flex items-center space-x-2">
                          <Truck className="w-4 h-4 text-neutral-800 shrink-0" />
                          <span>Complimentary standard shipping on all orders over $100. Dispatched within 24h.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RotateCcw className="w-4 h-4 text-neutral-800 shrink-0" />
                          <span>30-day hassle-free returns & exchanges. Pre-printed eco return label included.</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

            </div>

            {/* Related Silhouettes Section */}
            {relatedProducts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-900">
                    Pair With / 関連アイテム
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">Cohesive Looks</span>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {relatedProducts.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectRelated(rel)}
                      className="group text-left border border-neutral-200 hover:border-black p-2 bg-neutral-50 transition-colors"
                    >
                      <div className="aspect-[3/4] bg-neutral-200 overflow-hidden mb-2">
                        <img
                          src={rel.images[0]}
                          alt={rel.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-xs font-semibold text-neutral-900 truncate">{rel.name}</p>
                      <p className="text-xs font-mono font-bold text-neutral-950 mt-0.5">${rel.price.toFixed(2)}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Embedded Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </>
  );
};
