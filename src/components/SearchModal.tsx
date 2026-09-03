import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const POPULAR_SEARCHES = ['Supima Cotton', 'Merino Wool', 'Japanese Twill', 'Parka', 'Overshirt', 'Cordura'];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === '' ? [] : products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.fabricDetails.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-12 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
        className="relative bg-white w-full max-w-2xl mt-4 sm:mt-12 shadow-2xl border border-neutral-300 z-10 animate-modal-pop text-neutral-900 overflow-hidden"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search silhouettes, materials (e.g. Supima, Merino), or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-black rounded"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="hidden sm:inline-block text-xs font-mono px-2 py-1 bg-neutral-100 text-neutral-500 hover:text-black border border-neutral-200 rounded"
          >
            ESC
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Suggested Search Terms
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Quick Material Highlights
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-neutral-50 border border-neutral-200">
                    <p className="font-bold text-neutral-900">280 GSM Supima®</p>
                    <p className="text-neutral-500 font-light mt-0.5">Extra-long staple combed cotton</p>
                  </div>
                  <div className="p-3 bg-neutral-50 border border-neutral-200">
                    <p className="font-bold text-neutral-900">19.5µ Merino Wool</p>
                    <p className="text-neutral-500 font-light mt-0.5">WholeGarment 3D seamless knit</p>
                  </div>
                </div>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <Sparkles className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-neutral-900">No results found for "{query}"</p>
              <p className="text-xs text-neutral-500 font-light mt-1">
                Check spelling or try broader terms like "Cotton", "Parka", or "Pants".
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-mono text-neutral-400 mb-2">
                Found {filteredProducts.length} matching pieces
              </p>
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="w-full p-2.5 flex items-center justify-between hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-colors text-left group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-14 bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0">
                      <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-neutral-400">{product.category}</p>
                      <h4 className="text-sm font-semibold text-neutral-900 group-hover:underline">
                        {product.name}
                      </h4>
                      <p className="text-xs font-mono font-bold text-neutral-950 mt-0.5">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
