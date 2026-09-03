import React from 'react';
import { CATEGORIES } from '../data/products';
import { Category } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Curation / 分類
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">
            Shop by Silhouette
          </h2>
        </div>
        <button
          onClick={() => onSelectCategory('All')}
          className="hidden sm:inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
        >
          <span>View All Categories</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of category tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {CATEGORIES.filter((c) => c.id !== 'All').map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as Category)}
              className={`group text-left relative overflow-hidden rounded-none border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                isSelected 
                  ? 'border-neutral-900 ring-1 ring-neutral-900' 
                  : 'border-neutral-200 hover:border-neutral-400 bg-white'
              }`}
            >
              {/* Category Image */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Title & Item count */}
              <div className="p-3 bg-white flex items-center justify-between border-t border-neutral-100">
                <div>
                  <h3 className="text-xs font-bold text-neutral-900 tracking-tight">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {cat.count} {cat.count === 1 ? 'item' : 'items'}
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-800" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
