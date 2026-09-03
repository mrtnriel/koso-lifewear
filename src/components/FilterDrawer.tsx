import React from 'react';
import { X, RotateCcw } from 'lucide-react';
import { FilterState, Size, Category } from '../types';
import { CATEGORIES } from '../data/products';
import { SIZES, COLOR_OPTIONS } from './FilterBar';

interface FilterDrawerProps {
  isOpen: boolean;
  filters: FilterState;
  onClose: () => void;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  filters,
  onClose,
  onFilterChange,
  onResetFilters,
  totalCount,
}) => {
  if (!isOpen) return null;

  const toggleSize = (size: Size) => {
    const exists = filters.sizes.includes(size);
    const updated = exists 
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ sizes: updated });
  };

  const toggleColor = (colorName: string) => {
    const exists = filters.colors.includes(colorName);
    const updated = exists 
      ? filters.colors.filter((c) => c !== colorName)
      : [...filters.colors, colorName];
    onFilterChange({ colors: updated });
  };

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Filter products"
        className="relative ml-auto w-full max-w-sm bg-white text-neutral-900 shadow-2xl flex flex-col justify-between h-full z-10 animate-slide-in-right"
      >
        {/* Header */}
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-bold text-neutral-900">Refine Products</h2>
            <span className="text-xs font-mono text-neutral-400">({totalCount})</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-black rounded"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable filter options */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* Category */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Category</h3>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onFilterChange({ category: c.id as Category })}
                  className={`py-2 px-3 text-xs font-medium text-left border rounded transition-colors ${
                    filters.category === c.id
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gender / Silhouette */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Gender / Fit</h3>
            <div className="grid grid-cols-4 gap-2">
              {(['All', 'Men', 'Women', 'Unisex'] as const).map((gender) => (
                <button
                  key={gender}
                  onClick={() => onFilterChange({ gender })}
                  className={`py-2 text-xs font-medium text-center border rounded transition-colors ${
                    filters.gender === gender
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Sizes</h3>
            <div className="grid grid-cols-3 gap-2">
              {SIZES.map((size) => {
                const isSelected = filters.sizes.includes(size);
                return (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`py-2 text-xs font-mono text-center border rounded transition-colors ${
                      isSelected
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Palettes */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">Color Palette</h3>
            <div className="grid grid-cols-3 gap-2">
              {COLOR_OPTIONS.map((c) => {
                const isSelected = filters.colors.includes(c.name);
                return (
                  <button
                    key={c.name}
                    onClick={() => toggleColor(c.name)}
                    className={`flex items-center space-x-2 p-2 border rounded text-xs transition-colors ${
                      isSelected
                        ? 'border-neutral-900 bg-neutral-50 font-semibold'
                        : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0" 
                      style={{ backgroundColor: c.hex }} 
                    />
                    <span className="truncate">{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="pt-2 border-t border-neutral-200 space-y-3">
            <label className="flex items-center justify-between cursor-pointer py-1">
              <span className="text-sm font-medium text-neutral-800">Special Promotion / Sale</span>
              <input
                type="checkbox"
                checked={filters.onSaleOnly}
                onChange={(e) => onFilterChange({ onSaleOnly: e.target.checked })}
                className="w-4 h-4 rounded text-neutral-900 focus:ring-black border-neutral-300"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer py-1">
              <span className="text-sm font-medium text-neutral-800">In-Stock Only</span>
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
                className="w-4 h-4 rounded text-neutral-900 focus:ring-black border-neutral-300"
              />
            </label>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center space-x-3">
          <button
            onClick={onResetFilters}
            className="flex-1 py-3 px-4 border border-neutral-300 bg-white text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:bg-neutral-100 flex items-center justify-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
          >
            View ({totalCount}) Results
          </button>
        </div>

      </div>
    </div>
  );
};
