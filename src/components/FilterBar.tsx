import React from 'react';
import { SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';
import { Category, FilterState, Size } from '../types';
import { CATEGORIES } from '../data/products';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onOpenMobileFilter: () => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const SIZES: Size[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const COLOR_OPTIONS = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#1C1C1E' },
  { name: 'Olive', hex: '#586053' },
  { name: 'Sand', hex: '#D6CDBF' },
  { name: 'Navy', hex: '#1B2430' },
  { name: 'Charcoal', hex: '#4A4C50' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onOpenMobileFilter,
  onResetFilters,
  totalCount,
}) => {
  const activeFilterCount = 
    (filters.category !== 'All' ? 1 : 0) +
    (filters.gender !== 'All' ? 1 : 0) +
    filters.colors.length +
    filters.sizes.length +
    (filters.inStockOnly ? 1 : 0) +
    (filters.onSaleOnly ? 1 : 0);

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
    <div className="w-full bg-white border-b border-[#E8E8E8] sticky top-[65px] z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        
        {/* Top Filter Bar: Category Tabs on Desktop & Action Controls */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Category Quick Tabs (Desktop scrollable) */}
          <div className="hidden lg:flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onFilterChange({ category: cat.id as Category })}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-colors rounded-none ${
                  filters.category === cat.id
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile Filter trigger button */}
          <button
            onClick={onOpenMobileFilter}
            className="lg:hidden flex items-center space-x-2 px-3.5 py-2 border border-neutral-300 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:bg-neutral-50 rounded"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-neutral-900 text-white font-mono text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Right Side: Product Count & Sort Dropdown */}
          <div className="flex items-center space-x-4 ml-auto">
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
              Showing <strong className="text-neutral-900">{totalCount}</strong> pieces
            </span>

            <div className="flex items-center space-x-2 text-xs font-medium text-neutral-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-500" />
              <label htmlFor="sort-select" className="sr-only">Sort products by</label>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as FilterState['sortBy'] })}
                className="bg-transparent border border-neutral-200 rounded px-2.5 py-1.5 text-xs font-medium text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
              >
                <option value="featured">Featured Curation</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Secondary Desktop Quick Filter Row */}
        <div className="hidden lg:flex items-center justify-between pt-3 border-t border-neutral-100 mt-3 text-xs">
          
          {/* Quick Gender Chips */}
          <div className="flex items-center space-x-4">
            <span className="text-[11px] font-mono uppercase text-neutral-400">Fit / Gender:</span>
            {(['All', 'Men', 'Women', 'Unisex'] as const).map((gender) => (
              <button
                key={gender}
                onClick={() => onFilterChange({ gender })}
                className={`text-xs font-medium transition-colors ${
                  filters.gender === gender ? 'text-black font-bold underline underline-offset-4' : 'text-neutral-500 hover:text-black'
                }`}
              >
                {gender}
              </button>
            ))}
          </div>

          {/* Quick Size Chips */}
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono uppercase text-neutral-400 mr-1">Size:</span>
            {SIZES.map((size) => {
              const isSelected = filters.sizes.includes(size);
              return (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`w-6 h-6 text-[10px] font-mono flex items-center justify-center border transition-colors ${
                    isSelected ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {/* Quick Color Swatches */}
          <div className="flex items-center space-x-1.5">
            <span className="text-[11px] font-mono uppercase text-neutral-400 mr-1">Palette:</span>
            {COLOR_OPTIONS.map((c) => {
              const isSelected = filters.colors.includes(c.name);
              return (
                <button
                  key={c.name}
                  onClick={() => toggleColor(c.name)}
                  className={`w-4 h-4 rounded-full border transition-transform ${
                    isSelected ? 'ring-2 ring-offset-1 ring-neutral-950 scale-110 border-neutral-400' : 'border-neutral-300 hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  aria-label={`Filter by color ${c.name}`}
                />
              );
            })}
          </div>

          {/* Sale and In Stock Toggles */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-1.5 cursor-pointer text-xs text-neutral-700 hover:text-black">
              <input
                type="checkbox"
                checked={filters.onSaleOnly}
                onChange={(e) => onFilterChange({ onSaleOnly: e.target.checked })}
                className="rounded border-neutral-300 text-neutral-900 focus:ring-black"
              />
              <span>On Sale</span>
            </label>

            <label className="flex items-center space-x-1.5 cursor-pointer text-xs text-neutral-700 hover:text-black">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
                className="rounded border-neutral-300 text-neutral-900 focus:ring-black"
              />
              <span>In Stock</span>
            </label>
          </div>

        </div>

        {/* Active Filter Tags Bar (Shows pills when filters are active) */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-neutral-100 mt-2 text-xs">
            <span className="text-[11px] font-mono uppercase text-neutral-400">Active:</span>

            {filters.category !== 'All' && (
              <span className="inline-flex items-center px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded font-mono text-[11px]">
                {filters.category}
                <button onClick={() => onFilterChange({ category: 'All' })} className="ml-1 hover:text-black" aria-label="Remove category filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.gender !== 'All' && (
              <span className="inline-flex items-center px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded font-mono text-[11px]">
                {filters.gender}
                <button onClick={() => onFilterChange({ gender: 'All' })} className="ml-1 hover:text-black" aria-label="Remove gender filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.sizes.map((s) => (
              <span key={s} className="inline-flex items-center px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded font-mono text-[11px]">
                Size {s}
                <button onClick={() => toggleSize(s)} className="ml-1 hover:text-black" aria-label={`Remove size ${s} filter`}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.colors.map((c) => (
              <span key={c} className="inline-flex items-center px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded font-mono text-[11px]">
                {c}
                <button onClick={() => toggleColor(c)} className="ml-1 hover:text-black" aria-label={`Remove color ${c} filter`}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.onSaleOnly && (
              <span className="inline-flex items-center px-2 py-0.5 bg-red-50 text-red-700 rounded font-mono text-[11px]">
                On Sale
                <button onClick={() => onFilterChange({ onSaleOnly: false })} className="ml-1 hover:text-black" aria-label="Remove on sale filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.inStockOnly && (
              <span className="inline-flex items-center px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded font-mono text-[11px]">
                In Stock Only
                <button onClick={() => onFilterChange({ inStockOnly: false })} className="ml-1 hover:text-black" aria-label="Remove in stock filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={onResetFilters}
              className="text-[11px] font-mono text-neutral-500 hover:text-black underline ml-2"
            >
              Clear All
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
