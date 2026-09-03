import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  category,
}) => {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isOpen) return null;

  const measurementsCM = [
    { size: 'XS', chest: '96', shoulder: '44', length: '68', sleeve: '21' },
    { size: 'S',  chest: '102', shoulder: '46', length: '70', sleeve: '22' },
    { size: 'M',  chest: '108', shoulder: '48', length: '72', sleeve: '23' },
    { size: 'L',  chest: '114', shoulder: '50', length: '74', sleeve: '24' },
    { size: 'XL', chest: '122', shoulder: '52', length: '76', sleeve: '25' },
    { size: 'XXL', chest: '130', shoulder: '54', length: '78', sleeve: '26' },
  ];

  const measurementsIN = [
    { size: 'XS', chest: '37.8', shoulder: '17.3', length: '26.8', sleeve: '8.3' },
    { size: 'S',  chest: '40.2', shoulder: '18.1', length: '27.6', sleeve: '8.7' },
    { size: 'M',  chest: '42.5', shoulder: '18.9', length: '28.3', sleeve: '9.1' },
    { size: 'L',  chest: '44.9', shoulder: '19.7', length: '29.1', sleeve: '9.4' },
    { size: 'XL', chest: '48.0', shoulder: '20.5', length: '29.9', sleeve: '9.8' },
    { size: 'XXL', chest: '51.2', shoulder: '21.3', length: '30.7', sleeve: '10.2' },
  ];

  const currentData = unit === 'cm' ? measurementsCM : measurementsIN;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
        className="relative bg-white max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 z-10 animate-modal-pop text-neutral-900"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <div className="flex items-center space-x-2.5">
            <Ruler className="w-5 h-5 text-neutral-700" />
            <div>
              <h2 id="size-guide-title" className="text-lg font-bold tracking-tight">
                Architectural Fit & Size Matrix
              </h2>
              <p className="text-xs text-neutral-500 font-mono">Garment Measurements for {category}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Selector */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-neutral-500 font-light">
            Measurements taken laid flat. All garments feature pre-shrunk construction.
          </p>

          <div className="inline-flex items-center border border-neutral-300 rounded p-0.5 bg-neutral-50 font-mono text-xs">
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-xs font-semibold transition-colors ${
                unit === 'cm' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Centimeters (CM)
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 rounded-xs font-semibold transition-colors ${
                unit === 'in' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Inches (IN)
            </button>
          </div>
        </div>

        {/* Sizing Table */}
        <div className="mt-4 overflow-x-auto border border-neutral-200">
          <table className="w-full text-xs text-left font-mono">
            <thead className="bg-neutral-100 text-neutral-600 uppercase tracking-wider text-[11px] border-b border-neutral-200">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Size</th>
                <th className="py-2.5 px-3 font-semibold">Chest Circumference</th>
                <th className="py-2.5 px-3 font-semibold">Shoulder Width</th>
                <th className="py-2.5 px-3 font-semibold">Body Length</th>
                <th className="py-2.5 px-3 font-semibold">Sleeve Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {currentData.map((row) => (
                <tr key={row.size} className="hover:bg-neutral-50">
                  <td className="py-2.5 px-3 font-bold text-neutral-950 bg-neutral-50/50">{row.size}</td>
                  <td className="py-2.5 px-3 text-neutral-700">{row.chest} {unit}</td>
                  <td className="py-2.5 px-3 text-neutral-700">{row.shoulder} {unit}</td>
                  <td className="py-2.5 px-3 text-neutral-700">{row.length} {unit}</td>
                  <td className="py-2.5 px-3 text-neutral-700">{row.sleeve} {unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Model Spec Box */}
        <div className="mt-5 p-3.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-mono space-y-1">
          <p className="font-semibold text-neutral-900">MODEL SPECIFICATIONS:</p>
          <p>• Male model is 6'1" (185 cm), 170 lbs (77 kg), wearing Size <strong>Large</strong> for a standard relaxed drape.</p>
          <p>• Female model is 5'9" (175 cm), 130 lbs (59 kg), wearing Size <strong>Small</strong>.</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
