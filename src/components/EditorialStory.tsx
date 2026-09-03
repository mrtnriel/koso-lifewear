import React from 'react';
import { Layers, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface EditorialStoryProps {
  onExplore: (category?: Category) => void;
}

export const EditorialStory: React.FC<EditorialStoryProps> = ({ onExplore }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          PHILOSOPHY & CRAFT / 哲学
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 mt-2">
          Form Follows Function. <br />
          <span className="text-neutral-500 font-light italic">Longevity Outlives Trends.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
          At KŌSO, we reject seasonal churn. Every garment is treated as a piece of architectural utility—engineered with high-density natural fibers, anatomical 3D patterns, and Japanese precision craftsmanship.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Pillar 1 */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Pillar 01</span>
            <h3 className="text-lg font-bold text-neutral-950 mt-1 mb-3">
              Extra-Long Staple Integrity
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              We exclusively source Californian Supima® and Egyptian Giza cottons with fibers 45% longer than standard cotton, creating lustrous tensile strength that will not pill or lose shape over hundreds of laundry cycles.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
            280 GSM Heavyweight Jersey
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Pillar 02</span>
            <h3 className="text-lg font-bold text-neutral-950 mt-1 mb-3">
              WHOLEGARMENT® 3D Seamless
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Our extra-fine merino knitwear is sculpted in a single three-dimensional piece with zero armhole seams or side stitching. Unprecedented drape, ergonomic freedom of movement, and zero material waste.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
            19.5µ Non-Mulesed Merino
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Pillar 03</span>
            <h3 className="text-lg font-bold text-neutral-950 mt-1 mb-3">
              Circular & Zero Plastic
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              From Corozo nut buttons and recycled Cordura® shells to 100% recycled paper mailers, every detail is engineered to minimize ecological footprint while maximizing technical resilience.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
            100% Recyclable Packaging
          </div>
        </div>

      </div>

      {/* Interactive CTA Banner */}
      <div className="mt-12 p-8 bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold tracking-tight">Experience Architectural Lifewear</h4>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
            Free worldwide carbon-neutral delivery on all orders over $100.
          </p>
        </div>
        <button
          onClick={() => onExplore('All')}
          className="px-6 py-3 bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center space-x-2 shrink-0"
        >
          <span>Shop The Collection</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
