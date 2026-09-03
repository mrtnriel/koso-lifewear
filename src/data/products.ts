import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'koso-01',
    sku: 'KS-TSH-088',
    name: 'Heavyweight Supima Crew Neck T-Shirt',
    subtitle: '100% Long-Staple Supima Cotton • 280 GSM',
    category: 'T-Shirts',
    gender: 'Unisex',
    price: 29.00,
    originalPrice: 35.00,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 428,
    description: 'An architectural everyday essential. Engineered from combed 280 GSM extra-long staple Supima® cotton for a dense, lustrous drape that holds its boxy structure through repeated wear and washing. Features a reinforced 1.25" rib collar that resists stretching.',
    fabricDetails: [
      '100% Californian Extra-Long Staple Supima® Cotton',
      '280 GSM heavyweight compact jersey weave',
      'Pre-shrunk double-needle hem and blind stitched cuffs',
      'Zero synthetic blend for maximum skin breathability'
    ],
    careInstructions: [
      'Machine wash cold with like colors inside out',
      'Line dry in shade to preserve cotton luster',
      'Warm iron if needed; do not dry clean'
    ],
    fit: 'Relaxed Fit',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F5F5F3', imageIndex: 0 },
      { name: 'Onyx Black', hex: '#1C1C1E', imageIndex: 1 },
      { name: 'Washed Olive', hex: '#586053', imageIndex: 2 },
      { name: 'Raw Sand', hex: '#D6CDBF', imageIndex: 3 }
    ],
    sizes: [
      { size: 'XS', stock: 12 },
      { size: 'S', stock: 24 },
      { size: 'M', stock: 38 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 3 }
    ],
    tags: ['Essentials', 'Supima', 'Heavyweight', 'Bestseller'],
    createdAt: '2026-08-01'
  },
  {
    id: 'koso-02',
    sku: 'KS-OUT-042',
    name: 'Modular Storm-Shield Hooded Parka',
    subtitle: '3-Layer Membrane • Water-Repellent & Windproof',
    category: 'Outerwear',
    gender: 'Unisex',
    price: 149.00,
    originalPrice: 179.00,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 164,
    description: 'Designed for unpredictable urban climates. The Modular Storm-Shield Parka combines a matte waterproof exterior with micro-taped seams and an ergonomic 3D articulated sleeve pattern. Features magnetic pocket flaps and an adjustable storm collar.',
    fabricDetails: [
      'Outer: 100% Recycled Matte Nylon with C0 DWR Finish',
      'Mid-Layer: Hydrophilic Microporous Breathable Membrane',
      '15,000mm Waterproof / 10,000g/m² Breathability Rating',
      'Fidlock® magnetic snap closures and YKK AquaGuard® zippers'
    ],
    careInstructions: [
      'Gentle machine wash cold 30°C',
      'Do not use fabric softeners',
      'Tumble dry low 20 min to reactivate DWR coating'
    ],
    fit: 'Regular Fit',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Slate Charcoal', hex: '#2F343B', imageIndex: 0 },
      { name: 'Earth Ochre', hex: '#8C6D46', imageIndex: 1 },
      { name: 'Deep Moss', hex: '#374136', imageIndex: 2 }
    ],
    sizes: [
      { size: 'XS', stock: 4 },
      { size: 'S', stock: 15 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 14 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 0 }
    ],
    tags: ['Technical', 'Weatherproof', 'Recycled', 'New'],
    createdAt: '2026-08-20'
  },
  {
    id: 'koso-03',
    sku: 'KS-PNT-104',
    name: 'Wide-Pleated Japanese Twill Trousers',
    subtitle: 'High-Density Cotton Twill • Double Front Pleat',
    category: 'Pants & Trousers',
    gender: 'Unisex',
    price: 89.00,
    originalPrice: undefined,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 312,
    description: 'A contemporary silhouette with classical tailoring. Crafted from a heavyweight Kurashiki twill with a crisp, dry hand feel. Features deep double forward pleats, an internal drawstring waist with belt loops, and a subtle taper at the ankle.',
    fabricDetails: [
      '100% Combed Compact Cotton Twill (340 GSM)',
      'Woven on vintage Toyoda shuttle looms in Okayama',
      'Corozo nut buttons and concealed hook & bar closure',
      'Deep slash side pockets with coin pocket insert'
    ],
    careInstructions: [
      'Machine wash cold, gentle cycle inside out',
      'Hang to dry immediately after wash',
      'Steam iron on medium heat to set pleats'
    ],
    fit: 'Relaxed Fit',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Warm Ecru', hex: '#EBE7DF', imageIndex: 0 },
      { name: 'Midnight Navy', hex: '#1B2430', imageIndex: 1 },
      { name: 'Deep Taupe', hex: '#635D56', imageIndex: 2 }
    ],
    sizes: [
      { size: 'S', stock: 18 },
      { size: 'M', stock: 45 },
      { size: 'L', stock: 26 },
      { size: 'XL', stock: 11 }
    ],
    tags: ['Trousers', 'Japanese Twill', 'Pleated', 'Bestseller'],
    createdAt: '2026-07-15'
  },
  {
    id: 'koso-04',
    sku: 'KS-KNT-019',
    name: '3D Seamless Extra-Fine Merino Crew',
    subtitle: '100% Australian 19.5µ Merino • WHOLEGARMENT® Knit',
    category: 'Knitwear',
    gender: 'Unisex',
    price: 99.00,
    originalPrice: 120.00,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 518,
    description: 'Constructed from a single continuous strand of extrafine 19.5-micron Australian merino wool with zero side seams or armhole stitching. The result is pure ergonomic comfort, natural temperature regulation, and an exceptionally smooth silhouette.',
    fabricDetails: [
      '100% Non-Mulesed Extra-Fine Australian Merino Wool',
      'WHOLEGARMENT® 3D seam-free dimensional knitting',
      'Naturally odor-resistant, thermo-regulating, and moisture-wicking',
      'Ribbed collar, cuffs, and hem with internal spandex recovery'
    ],
    careInstructions: [
      'Hand wash cold or wool cycle with gentle wool detergent',
      'Do not wring; lay flat to dry on towel',
      'Store folded with cedar balls; do not hang'
    ],
    fit: 'Regular Fit',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Heather Charcoal', hex: '#4A4C50', imageIndex: 0 },
      { name: 'Raw Natural', hex: '#F0EEE8', imageIndex: 1 },
      { name: 'Terracotta', hex: '#9E5B47', imageIndex: 2 }
    ],
    sizes: [
      { size: 'XS', stock: 8 },
      { size: 'S', stock: 20 },
      { size: 'M', stock: 32 },
      { size: 'L', stock: 25 },
      { size: 'XL', stock: 12 },
      { size: 'XXL', stock: 6 }
    ],
    tags: ['Merino Wool', 'Seamless', 'Knitwear', 'Premium'],
    createdAt: '2026-08-10'
  },
  {
    id: 'koso-05',
    sku: 'KS-SHR-055',
    name: 'Relaxed Oxford Cotton Overshirt',
    subtitle: '100% Organic Heavy Oxford Cloth • Button-Down Collar',
    category: 'Shirts & Blouses',
    gender: 'Unisex',
    price: 69.00,
    originalPrice: undefined,
    isNew: false,
    isBestSeller: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 198,
    description: 'An updated classic tailored with a relaxed, dropped shoulder cut. Cut from a garment-washed 100% organic cotton pin-point Oxford cloth that softens gracefully with every wash. Perfect as a lightweight jacket layer or standalone button-down.',
    fabricDetails: [
      '100% GOTS Certified Organic Long-Staple Cotton',
      'Garment dyed for soft texture and subtle lived-in fading',
      'Genuine mother-of-pearl buttons with cross-stitching',
      'Single chest patch pocket and curved split hem'
    ],
    careInstructions: [
      'Machine wash warm 40°C with like colors',
      'Tumble dry low or line dry',
      'Warm iron for crisp finish or leave unironed for relaxed roll'
    ],
    fit: 'Oversized Fit',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Sky Stripe', hex: '#CBDDE6', imageIndex: 0 },
      { name: 'Pure White', hex: '#FFFFFF', imageIndex: 1 },
      { name: 'Washed Indigo', hex: '#3B4D61', imageIndex: 2 }
    ],
    sizes: [
      { size: 'XS', stock: 5 },
      { size: 'S', stock: 14 },
      { size: 'M', stock: 29 },
      { size: 'L', stock: 18 },
      { size: 'XL', stock: 7 }
    ],
    tags: ['Oxford', 'Cotton', 'Layering', 'Relaxed'],
    createdAt: '2026-06-12'
  },
  {
    id: 'koso-06',
    sku: 'KS-OUT-077',
    name: 'Packable Ultra-Light Down Vest',
    subtitle: '750 Fill Power RDS Goose Down • Toray Air-Tastic® Shell',
    category: 'Outerwear',
    gender: 'Unisex',
    price: 79.00,
    originalPrice: 89.00,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 380,
    description: 'Weighing under 180 grams, this packable insulating vest delivers thermal efficiency without bulk. Constructed with 750+ fill power Responsible Down Standard down housed in ultra-fine 10-denier Japanese Toray nylon. Folds into its own interior pocket.',
    fabricDetails: [
      'Shell & Lining: 100% 10D Toray Air-Tastic® Ripstop Nylon',
      'Insulation: 90% Goose Down / 10% Feather (750+ Fill Power RDS)',
      'PFC-Free DWR finish repels light rain and snow',
      'Convertible V-neck snap closure for discreet inner-jacket layering'
    ],
    careInstructions: [
      'Hand wash or delicate machine wash with down detergent',
      'Tumble dry low with 3 clean tennis balls to restore loft',
      'Do not iron or dry clean'
    ],
    fit: 'Regular Fit',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Matte Olive', hex: '#4B5344', imageIndex: 0 },
      { name: 'Obsidian Black', hex: '#191919', imageIndex: 1 },
      { name: 'Soft Greige', hex: '#D2CCC4', imageIndex: 0 }
    ],
    sizes: [
      { size: 'S', stock: 10 },
      { size: 'M', stock: 24 },
      { size: 'L', stock: 30 },
      { size: 'XL', stock: 14 }
    ],
    tags: ['Ultra Light Down', 'Packable', 'Insulation', 'RDS'],
    createdAt: '2026-08-05'
  },
  {
    id: 'koso-07',
    sku: 'KS-ACC-012',
    name: 'Architectural Water-Repellent Crossbody',
    subtitle: 'Recycled Cordura® 500D • Fidlock® Magnetic Buckle',
    category: 'Accessories',
    gender: 'Unisex',
    price: 49.00,
    originalPrice: undefined,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 245,
    description: 'An ergonomic everyday carry designed for effortless mobility. Made from ultra-durable 500D recycled Cordura® with a matte water-resistant coating. Features a quick-release Fidlock® magnetic slide buckle and expandable gusset.',
    fabricDetails: [
      '500D Recycled Cordura® Ballistic Nylon with DWR finish',
      'Fidlock® magnetic V-buckle for intuitive one-handed release',
      'YKK AquaGuard® weather-sealed zippered compartments',
      'Internal padded sleeve fits up to an 11" tablet or e-reader'
    ],
    careInstructions: [
      'Wipe clean with a damp cloth and mild soap',
      'Air dry completely before storage',
      'Do not machine wash or submerge in water'
    ],
    fit: 'Regular Fit',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Matte Black', hex: '#18181A', imageIndex: 0 },
      { name: 'Stone Grey', hex: '#9E9EA0', imageIndex: 1 }
    ],
    sizes: [
      { size: 'M', stock: 50 }
    ],
    tags: ['Accessories', 'Cordura', 'Everyday Carry', 'New'],
    createdAt: '2026-08-28'
  },
  {
    id: 'koso-08',
    sku: 'KS-TSH-034',
    name: 'AIR-Loom Mercerized Heavyweight Pocket Tee',
    subtitle: '100% Mercerized Egyptian Giza Cotton • Silk-Like Luster',
    category: 'T-Shirts',
    gender: 'Unisex',
    price: 34.00,
    originalPrice: undefined,
    isNew: false,
    isBestSeller: false,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 182,
    description: 'Engineered with double-mercerized Egyptian Giza cotton, providing an exquisite silky sheen and superior tensile strength. Designed with a clean seamless chest pocket, side slit vents, and a relaxed boxy cut.',
    fabricDetails: [
      '100% Mercerized Giza 86 Extra-Long Staple Cotton (240 GSM)',
      'Double-gas singeing process to eliminate all surface fuzz',
      'Reinforced bar-tacked patch pocket',
      'Extended stepped back hem with taped side splits'
    ],
    careInstructions: [
      'Machine wash cold, gentle cycle inside out',
      'Do not tumble dry; hang dry in shade',
      'Steam iron on medium heat'
    ],
    fit: 'Relaxed Fit',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Washed Concrete', hex: '#878684', imageIndex: 0 },
      { name: 'Optical White', hex: '#FFFFFF', imageIndex: 1 },
      { name: 'Cast Iron', hex: '#2A2C2E', imageIndex: 0 }
    ],
    sizes: [
      { size: 'S', stock: 12 },
      { size: 'M', stock: 26 },
      { size: 'L', stock: 30 },
      { size: 'XL', stock: 15 }
    ],
    tags: ['Mercerized', 'T-Shirts', 'Giza Cotton'],
    createdAt: '2026-07-22'
  }
];

export const CATEGORIES = [
  { id: 'All', name: 'All Lifewear', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop', count: 8 },
  { id: 'T-Shirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop', count: 2 },
  { id: 'Outerwear', name: 'Outerwear', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop', count: 2 },
  { id: 'Pants & Trousers', name: 'Pants & Trousers', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop', count: 1 },
  { id: 'Knitwear', name: 'Knitwear', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop', count: 1 },
  { id: 'Shirts & Blouses', name: 'Shirts & Blouses', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop', count: 1 },
  { id: 'Accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop', count: 1 },
] as const;

export const PROMO_MESSAGES = [
  'COMPLIMENTARY WORLDWIDE SHIPPING ON ORDERS OVER $100',
  'THE 2026 ARCHITECTURAL ESSENTIALS COLLECTION IS NOW LIVE',
  '30-DAY COMPLIMENTARY EXCHANGES & RETURNS AT ALL WORKSHOPS',
  '100% RECYCLED PACKAGING & ZERO-PLASTIC DISPATCH'
];
