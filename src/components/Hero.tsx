import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Feather } from 'lucide-react';
import { Category } from '../types';

interface HeroProps {
  onExplore: (category?: Category) => void;
  onReadStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onReadStory }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white border-b border-neutral-800">
      
      {/* Background Image with subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="KŌSO Autumn/Winter Collection Editorial"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 flex flex-col justify-between">
        
        {/* Editorial Eyebrow */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest uppercase text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AW26 Collection Now Available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.08] text-white">
            Architecture for the <br />
            <span className="text-neutral-400 font-light italic">Everyday Silhouette.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-xl font-light leading-relaxed">
            Minimalist lifewear engineered with high-density Supima® cotton, 3D seamless Japanese knits, and weatherproof outerwear. Designed for lasting comfort.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onExplore('All')}
              className="inline-flex items-center space-x-3 px-7 py-3.5 bg-white text-neutral-950 font-semibold text-sm rounded-none tracking-wide hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-98"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>

            <button
              onClick={onReadStory}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/20 transition-all duration-200 backdrop-blur-sm active:scale-98"
            >
              <span>The Fabric Philosophy</span>
            </button>
          </div>
        </div>

        {/* Highlight Feature Badges Ticker */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-400 font-mono">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-4 h-4 text-neutral-300" />
            <div>
              <p className="text-white font-medium">3D WHOLEGARMENT®</p>
              <p className="text-[11px] text-neutral-400">Zero side-seams</p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-neutral-300" />
            <div>
              <p className="text-white font-medium">100% SUPIMA® COTTON</p>
              <p className="text-[11px] text-neutral-400">280 GSM heavyweight</p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <Feather className="w-4 h-4 text-neutral-300" />
            <div>
              <p className="text-white font-medium">750+ FILL POWER RDS</p>
              <p className="text-[11px] text-neutral-400">Ultra-lightweight down</p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5">
            <div className="w-2 h-2 rounded-full bg-neutral-300" />
            <div>
              <p className="text-white font-medium">ZERO PLASTIC</p>
              <p className="text-[11px] text-neutral-400">Recycled fiber packaging</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
