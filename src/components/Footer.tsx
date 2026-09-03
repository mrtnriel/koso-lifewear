import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (category: Category) => void;
  onNavigate: (view: 'home' | 'shop' | 'pdp' | 'editorial') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigate }) => {
  return (
    <footer className="bg-[#111111] text-neutral-300 border-t border-neutral-800 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Manifesto Col */}
          <div className="lg:col-span-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black tracking-tight text-white">KŌSO</span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">構造 LIFEWEAR</span>
            </div>
            
            <p className="mt-4 text-neutral-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              An architectural approach to everyday essentials. Formed in Tokyo, manufactured with ethical craft worldwide. Designed for enduring utility.
            </p>

            <div className="mt-6 flex items-center space-x-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span>Global Store • USD ($)</span>
              </div>
            </div>
          </div>

          {/* Col 1: Shop */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Silhouettes
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <button 
                  onClick={() => { onSelectCategory('All'); onNavigate('shop'); }}
                  className="hover:text-white transition-colors"
                >
                  All Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('T-Shirts'); onNavigate('shop'); }}
                  className="hover:text-white transition-colors"
                >
                  Supima® T-Shirts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('Outerwear'); onNavigate('shop'); }}
                  className="hover:text-white transition-colors"
                >
                  Weatherproof Parkas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('Pants & Trousers'); onNavigate('shop'); }}
                  className="hover:text-white transition-colors"
                >
                  Pleated Twill Trousers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('Knitwear'); onNavigate('shop'); }}
                  className="hover:text-white transition-colors"
                >
                  3D Merino Knitwear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectCategory('Accessories'); onNavigate('shop'); }}
                  className="hover:text-white transition-colors"
                >
                  Cordura® Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Client Concierge */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <a href="#shipping" className="hover:text-white transition-colors">
                  Complimentary Shipping
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-white transition-colors">
                  30-Day Returns Policy
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-white transition-colors">
                  Order Tracking
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('editorial')}
                  className="hover:text-white transition-colors"
                >
                  Care & Repair Manual
                </button>
              </li>
              <li>
                <a href="#stores" className="hover:text-white transition-colors">
                  Workshop Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Standards & Press */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Manifesto
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <button 
                  onClick={() => onNavigate('editorial')}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Fabric Philosophy</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </button>
              </li>
              <li>
                <a href="#supply-chain" className="hover:text-white transition-colors">
                  GOTS® & RDS Certifications
                </a>
              </li>
              <li>
                <a href="#circularity" className="hover:text-white transition-colors">
                  Zero-Plastic Packaging
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Atelier Careers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
          <p>© 2026 KŌSO LIFEWEAR INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-neutral-300">Privacy Notice</a>
            <a href="#terms" className="hover:text-neutral-300">Terms of Service</a>
            <a href="#accessibility" className="hover:text-neutral-300">Accessibility (WCAG 2.1)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
