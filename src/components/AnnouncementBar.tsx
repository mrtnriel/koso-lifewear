import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PROMO_MESSAGES } from '../data/products';

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROMO_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Promotions and Announcements"
      className="bg-[#111111] text-neutral-300 text-[11px] font-mono tracking-wider py-2 px-4 relative z-50 border-b border-neutral-800 selection:bg-white selection:text-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + PROMO_MESSAGES.length) % PROMO_MESSAGES.length)}
          className="p-1 text-neutral-400 hover:text-white transition-colors duration-150 rounded"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 text-center truncate px-2">
          <span className="inline-block transition-opacity duration-300 ease-in-out font-medium uppercase text-neutral-200">
            {PROMO_MESSAGES[currentIndex]}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % PROMO_MESSAGES.length)}
            className="p-1 text-neutral-400 hover:text-white transition-colors duration-150 rounded"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-neutral-500 hover:text-white transition-colors duration-150 ml-2 rounded"
            aria-label="Dismiss announcement bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
