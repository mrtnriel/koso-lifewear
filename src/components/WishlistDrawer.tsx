import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  wishlistProducts: Product[];
  onClose: () => void;
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product, color: ProductColor, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  wishlistProducts,
  onClose,
  onRemoveFromWishlist,
  onMoveToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

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
        aria-labelledby="wishlist-drawer-title"
        className="relative ml-auto w-full max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col justify-between h-full z-10 animate-slide-in-right"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-neutral-950 fill-current" />
            <h2 id="wishlist-drawer-title" className="text-base font-bold tracking-tight text-neutral-950">
              Saved Silhouettes
            </h2>
            <span className="text-xs font-mono text-neutral-500 font-semibold">
              ({wishlistProducts.length})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded"
            aria-label="Close saved items"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-neutral-100">
          {wishlistProducts.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">No saved pieces yet</h3>
              <p className="text-xs text-neutral-500 font-light mt-1 max-w-xs leading-relaxed">
                Tap the heart icon on any piece to save it to your personal architectural lookbook.
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => {
              const defaultColor = product.colors[0];
              const defaultSize = product.sizes.find((s) => s.stock > 0)?.size || 'M';

              return (
                <div key={product.id} className="py-4 flex gap-3.5 first:pt-0">
                  {/* Thumbnail */}
                  <div 
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="w-20 h-24 bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0 cursor-pointer"
                  >
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform" 
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 
                          onClick={() => {
                            onClose();
                            onSelectProduct(product);
                          }}
                          className="text-xs font-semibold text-neutral-900 line-clamp-1 hover:underline cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(product)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1 -mr-1"
                          aria-label={`Remove ${product.name} from wishlist`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                        {product.category} • ${product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quick Move to Bag Action */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => onMoveToCart(product, defaultColor, defaultSize)}
                        className="flex-1 py-2 px-3 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag ({defaultSize})</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500">
              Items saved locally in your browser
            </span>
            <button
              onClick={onClose}
              className="text-xs font-bold font-mono text-neutral-900 uppercase hover:underline"
            >
              Continue Browsing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
