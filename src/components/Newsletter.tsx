import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-100 border-t border-b border-neutral-200">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          THE KŌSO GAZETTE / 季刊
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mt-1.5">
          Join the Architectural Dispatch
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto font-light leading-relaxed">
          Receive exclusive early access to small-batch seasonal drops, material engineering field notes, and private workshop invitations.
        </p>

        {isSubmitted ? (
          <div className="mt-6 p-4 bg-white border border-neutral-300 inline-flex items-center space-x-2 text-xs font-mono text-emerald-700">
            <Check className="w-4 h-4" />
            <span>You have joined the dispatch. Welcome to KŌSO.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-300 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {error && (
          <p className="mt-2 text-xs font-mono text-red-600">{error}</p>
        )}

        <p className="mt-3 text-[11px] font-mono text-neutral-400">
          Zero marketing spam. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
};
