import React, { useEffect } from 'react';
import { X, CheckCircle, ShoppingBag } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
  onOpenCart: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss, onOpenCart }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 3800);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <aside 
      aria-live="polite"
      aria-label="Notification"
      className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-neutral-950 text-white p-4 shadow-2xl border border-neutral-800 animate-toast-pop flex items-center gap-3.5"
    >
      {toast.thumbnail ? (
        <div className="w-11 h-14 bg-neutral-800 overflow-hidden shrink-0 border border-neutral-700">
          <img src={toast.thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-white">
          {toast.type === 'cart' ? (
            <ShoppingBag className="w-4 h-4" />
          ) : (
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          )}
        </div>
      )}

      <div className="flex-1 pr-2">
        <p className="text-xs font-bold tracking-tight text-white">{toast.title}</p>
        {toast.description && (
          <p className="text-[11px] font-mono text-neutral-400 mt-0.5 line-clamp-1">
            {toast.description}
          </p>
        )}
      </div>

      {toast.type === 'cart' && (
        <button
          onClick={() => {
            onDismiss();
            onOpenCart();
          }}
          className="text-xs font-mono font-bold underline hover:text-neutral-300 shrink-0 uppercase"
        >
          View Bag
        </button>
      )}

      <button
        onClick={onDismiss}
        className="text-neutral-400 hover:text-white p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
};
