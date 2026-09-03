import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'koso-01',
    sku: 'KS-AIR-088',
    name: 'AIRism Cotton Oversized Crew Neck T-Shirt',
    subtitle: 'AIRism Performance Lining • 280 GSM Smooth Cotton Face',
    category: 'T-Shirts',
    gender: 'Unisex',
    price: 24.90,
    originalPrice: 29.90,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 542,
    description: 'An architectural lifewear masterwork. Features an innovative dual-layer hybrid structure: the exterior delivers a crisp, heavyweight matte cotton drape, while the interior is lined with ultra-fine AIRism microfibers for instant moisture-wicking and cooling comfort.',
    fabricDetails: [
      'Hybrid weave: 53% Extra-Long Staple Cotton, 47% AIRism Polyester',
      'Dual-layer construction: Crisp cotton exterior, cool-to-touch interior',
      'Drop-shoulder boxy silhouette with clean side slits',
      'Reinforced 1.25" rib collar engineered to resist sagging'
    ],
    careInstructions: [
      'Machine wash cold, gentle cycle inside out',
      'Line dry in shade; quick-dry technology allows fast drying',
      'Warm iron if needed; do not dry clean'
    ],
    fit: 'Relaxed Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_00_455359.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_09_455359.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_57_455359.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/sub/goods_455359_sub14.jpg'
    ],
    colors: [
      { name: 'Pure White (00)', hex: '#F7F7F7', imageIndex: 0 },
      { name: 'Onyx Black (09)', hex: '#1C1C1E', imageIndex: 1 },
      { name: 'Olive Green (57)', hex: '#535A4B', imageIndex: 2 }
    ],
    sizes: [
      { size: 'XS', stock: 12 },
      { size: 'S', stock: 24 },
      { size: 'M', stock: 38 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 3 }
    ],
    tags: ['AIRism', 'Essentials', 'Oversized', 'Bestseller'],
    createdAt: '2026-08-01'
  },
  {
    id: 'koso-02',
    sku: 'KS-OUT-042',
    name: 'Blocktech Modular Storm-Shield Parka',
    subtitle: '3-Layer Hydrophilic Membrane • 100% Water-Repellent & Windproof',
    category: 'Outerwear',
    gender: 'Unisex',
    price: 129.90,
    originalPrice: 149.90,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 218,
    description: 'A minimalist technical shell engineered for demanding city conditions. Constructed with a 2.5-layer matte lamination with heat-sealed micro-seams. Delivers 10,000mm waterproofing with zero bulk, featuring an adjustable 3D hood and water-resistant zippers.',
    fabricDetails: [
      'Outer: 100% Matte Recycled Polyester with C0 Fluorine-Free DWR',
      'Mid-Layer: Breathable Hydrophilic Microporous Film (10,000mm Rating)',
      '3D ergonomic sleeve construction for unrestricted arm rotation',
      'YKK AquaGuard® waterproof taped zippers throughout'
    ],
    careInstructions: [
      'Hand wash cold 30°C or wipe clean with damp cloth',
      'Do not wring or use fabric softener',
      'Hang dry away from direct sunlight'
    ],
    fit: 'Regular Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449631/item/goods_09_449631.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449631/item/goods_69_449631.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449631/sub/goods_449631_sub14.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449631/sub/goods_449631_sub17.jpg'
    ],
    colors: [
      { name: 'Matte Black (09)', hex: '#1D1E20', imageIndex: 0 },
      { name: 'Navy Blue (69)', hex: '#1C2638', imageIndex: 1 }
    ],
    sizes: [
      { size: 'XS', stock: 4 },
      { size: 'S', stock: 15 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 14 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 0 }
    ],
    tags: ['Blocktech', 'Waterproof', 'Windproof', 'New'],
    createdAt: '2026-08-20'
  },
  {
    id: 'koso-03',
    sku: 'KS-PNT-104',
    name: 'Pleated Wide-Fit Architectural Trousers',
    subtitle: 'High-Density Crease-Resistant Twill • Tailored Elasticated Waist',
    category: 'Pants & Trousers',
    gender: 'Unisex',
    price: 59.90,
    originalPrice: undefined,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 380,
    description: 'The definitive modern trouser. Tailored with deep forward pleats and a relaxed wide-leg silhouette that tapers subtly at the hem. Features a 2-way stretch high-density twill with an elasticated waistband and internal drawcord for all-day comfort.',
    fabricDetails: [
      '67% Recycled Polyester, 29% Rayon, 4% Polyurethane Twill',
      'Permanent center pleat crease retains sharp press after machine wash',
      'Hidden elastic waistband with dual belt loops and drawstring',
      'Deep slash side pockets with reinforced bartack stitching'
    ],
    careInstructions: [
      'Machine wash cold, gentle cycle inside out in laundry net',
      'Line dry; fabric naturally resists wrinkles',
      'Steam lightly if necessary'
    ],
    fit: 'Relaxed Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450251/item/goods_08_450251.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450251/item/goods_09_450251.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450251/sub/goods_450251_sub14.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450251/sub/goods_450251_sub17.jpg'
    ],
    colors: [
      { name: 'Dark Gray (08)', hex: '#3B3D40', imageIndex: 0 },
      { name: 'Black (09)', hex: '#1B1B1C', imageIndex: 1 }
    ],
    sizes: [
      { size: 'S', stock: 18 },
      { size: 'M', stock: 45 },
      { size: 'L', stock: 26 },
      { size: 'XL', stock: 11 }
    ],
    tags: ['Pleated', 'Trousers', 'Wide Fit', 'Bestseller'],
    createdAt: '2026-07-15'
  },
  {
    id: 'koso-04',
    sku: 'KS-KNT-019',
    name: '3D WHOLEGARMENT® Extra Fine Merino Crew',
    subtitle: '100% 19.5µ Australian Merino • Seam-Free Knit',
    category: 'Knitwear',
    gender: 'Unisex',
    price: 69.90,
    originalPrice: 89.90,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 620,
    description: 'Seamless ergonomic knitwear manufactured in a continuous 3D loop using Japanese WHOLEGARMENT® technology. Completely free of uncomfortable side seams and armhole bulk, providing a pure, smooth silhouette with natural elasticity.',
    fabricDetails: [
      '100% Extra-Fine 19.5-Micron Non-Mulesed Australian Merino Wool',
      'WHOLEGARMENT® 3D seam-free dimensional knitting',
      'Machine washable with anti-pilling and anti-shrink treatment',
      'Natural thermo-regulation and odor resistance'
    ],
    careInstructions: [
      'Machine wash cold on delicate wool cycle using net',
      'Do not wring; lay flat on towel to dry in shade',
      'Store folded with cedar blocks'
    ],
    fit: 'Regular Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450535/item/goods_08_450535.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450535/item/goods_69_450535.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/453762/item/goods_01_453762.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450535/sub/goods_450535_sub14.jpg'
    ],
    colors: [
      { name: 'Charcoal (08)', hex: '#484A4D', imageIndex: 0 },
      { name: 'Navy (69)', hex: '#1A2333', imageIndex: 1 },
      { name: 'Off White (01)', hex: '#F0ECE4', imageIndex: 2 }
    ],
    sizes: [
      { size: 'XS', stock: 8 },
      { size: 'S', stock: 20 },
      { size: 'M', stock: 32 },
      { size: 'L', stock: 25 },
      { size: 'XL', stock: 12 },
      { size: 'XXL', stock: 6 }
    ],
    tags: ['Merino', '3D Knit', 'Seamless', 'Premium'],
    createdAt: '2026-08-10'
  },
  {
    id: 'koso-05',
    sku: 'KS-SHR-055',
    name: 'Oxford Regular Fit Long-Sleeve Shirt',
    subtitle: '100% Combed Cotton Oxford • Button-Down Collar',
    category: 'Shirts & Blouses',
    gender: 'Unisex',
    price: 39.90,
    originalPrice: undefined,
    isNew: false,
    isBestSeller: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 245,
    description: 'The quintessential everyday button-down shirt. Woven from 100% combed long-staple cotton with a classic pin-point Oxford basketweave. Garment pre-washed for an authentic, broken-in texture that drapes naturally without stiff creasing.',
    fabricDetails: [
      '100% Combed Long-Staple Cotton Oxford Cloth',
      'Pre-washed enzyme finish for soft hand feel and minimized shrinkage',
      'Durable resin buttons with cross-stitched thread anchor',
      'Chest patch pocket and box pleat hanger loop at back yoke'
    ],
    careInstructions: [
      'Machine wash warm 40°C with like colors',
      'Hang dry for casual texture or steam press for clean crisp look'
    ],
    fit: 'Regular Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455365/item/goods_00_455365.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455365/item/goods_62_455365.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455365/item/goods_69_455365.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455365/sub/goods_455365_sub14.jpg'
    ],
    colors: [
      { name: 'White (00)', hex: '#FFFFFF', imageIndex: 0 },
      { name: 'Light Blue (62)', hex: '#C2D6E6', imageIndex: 1 },
      { name: 'Navy (69)', hex: '#1E293B', imageIndex: 2 }
    ],
    sizes: [
      { size: 'XS', stock: 5 },
      { size: 'S', stock: 14 },
      { size: 'M', stock: 29 },
      { size: 'L', stock: 18 },
      { size: 'XL', stock: 7 }
    ],
    tags: ['Oxford', 'Cotton', 'Classic', 'Layering'],
    createdAt: '2026-06-12'
  },
  {
    id: 'koso-06',
    sku: 'KS-OUT-077',
    name: 'Packable Ultra Light Down Compact Vest',
    subtitle: '750+ Fill Power RDS Down • Water-Repellent Toray Ripstop',
    category: 'Outerwear',
    gender: 'Unisex',
    price: 59.90,
    originalPrice: 69.90,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 412,
    description: 'Weighing under 130 grams, this ultra-packable thermal vest provides exceptional heat retention without bulk. Filled with 750+ fill power premium down housed in high-density Japanese ripstop nylon. Convertible 2-way collar folds inside for discreet coat layering.',
    fabricDetails: [
      'Shell & Lining: 100% 20D Toray Ultralight Ripstop Nylon with DWR',
      'Insulation: 90% Down / 10% Feather (750+ Fill Power RDS Certified)',
      'Convertible V-neck snap closure for invisible inner-jacket layering',
      'Includes compact drawstring carrying pouch'
    ],
    careInstructions: [
      'Hand wash with mild down cleaner',
      'Tumble dry low with 3 clean tennis balls to restore loft'
    ],
    fit: 'Slim Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449622/item/goods_09_449622.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449622/sub/goods_449622_sub14.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449622/sub/goods_449622_sub17.jpg'
    ],
    colors: [
      { name: 'Black (09)', hex: '#18181A', imageIndex: 0 }
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
    name: 'Round Mini Nylon Crossbody Bag',
    subtitle: 'Water-Repellent Japanese Nylon • Ergonomic Half-Moon Gusset',
    category: 'Accessories',
    gender: 'Unisex',
    price: 19.90,
    originalPrice: undefined,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 980,
    description: 'The viral global essential. Engineered with an anatomical curved half-moon silhouette that contours naturally against the body. Made with a crisp water-resistant textured nylon with piped seams, dual interior slip pockets, and a smooth adjustable shoulder strap.',
    fabricDetails: [
      '100% Water-Repellent High-Density Crinkled Nylon Shell',
      'Padded piping holds structural shape even when filled',
      'Dual interior organizational slip pockets for phone and cards',
      'Smooth YKK nylon coil zipper with metal pull tab'
    ],
    careInstructions: [
      'Wipe clean with a damp cloth and mild soap',
      'Do not machine wash or dry clean'
    ],
    fit: 'Regular Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457155/item/goods_09_457155.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457155/item/goods_30_457155.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457155/sub/goods_457155_sub14.jpg'
    ],
    colors: [
      { name: 'Black (09)', hex: '#1C1C1D', imageIndex: 0 },
      { name: 'Natural (30)', hex: '#EBE5D8', imageIndex: 1 }
    ],
    sizes: [
      { size: 'M', stock: 65 }
    ],
    tags: ['Round Mini Bag', 'Water Repellent', 'Accessories', 'Bestseller'],
    createdAt: '2026-08-28'
  },
  {
    id: 'koso-08',
    sku: 'KS-TSH-034',
    name: 'Supima® Cotton Regular Fit Crew Neck T-Shirt',
    subtitle: '100% Extra-Long Staple Combed Supima® • Silk-Like Finish',
    category: 'T-Shirts',
    gender: 'Unisex',
    price: 19.90,
    originalPrice: undefined,
    isNew: false,
    isBestSeller: true,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 410,
    description: 'Crafted exclusively from 100% Californian Supima® cotton, representing the top 1% of world cotton production. Exceptional long-staple fibers provide a smooth, silken luster, deep color fastness, and a luxurious hand that softens with every wash.',
    fabricDetails: [
      '100% Supima® Extra-Long Staple Combed Cotton',
      'Micro-singeing process to eliminate surface fuzz and pilling',
      'Narrow rib collar and blind-stitched hem finish',
      'Clean tailored regular silhouette'
    ],
    careInstructions: [
      'Machine wash cold with like colors inside out',
      'Line dry in shade to preserve cotton luster'
    ],
    fit: 'Regular Fit',
    images: [
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441598/item/goods_00_441598.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441598/item/goods_09_441598.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441598/item/goods_69_441598.jpg',
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441598/item/goods_03_441598.jpg'
    ],
    colors: [
      { name: 'White (00)', hex: '#FFFFFF', imageIndex: 0 },
      { name: 'Black (09)', hex: '#1C1C1E', imageIndex: 1 },
      { name: 'Navy (69)', hex: '#1B2430', imageIndex: 2 },
      { name: 'Gray (03)', hex: '#878684', imageIndex: 3 }
    ],
    sizes: [
      { size: 'S', stock: 12 },
      { size: 'M', stock: 26 },
      { size: 'L', stock: 30 },
      { size: 'XL', stock: 15 }
    ],
    tags: ['Supima', 'Cotton', 'T-Shirts', 'Essentials'],
    createdAt: '2026-07-22'
  }
];

export const CATEGORIES = [
  { id: 'All', name: 'All Lifewear', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_00_455359.jpg', count: 8 },
  { id: 'T-Shirts', name: 'T-Shirts', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_00_455359.jpg', count: 2 },
  { id: 'Outerwear', name: 'Outerwear', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449631/item/goods_09_449631.jpg', count: 2 },
  { id: 'Pants & Trousers', name: 'Pants & Trousers', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450251/item/goods_08_450251.jpg', count: 1 },
  { id: 'Knitwear', name: 'Knitwear', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450535/item/goods_08_450535.jpg', count: 1 },
  { id: 'Shirts & Blouses', name: 'Shirts & Blouses', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455365/item/goods_00_455365.jpg', count: 1 },
  { id: 'Accessories', name: 'Accessories', image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457155/item/goods_09_457155.jpg', count: 1 },
] as const;

export const PROMO_MESSAGES = [
  'COMPLIMENTARY WORLDWIDE SHIPPING ON ORDERS OVER $100',
  'THE 2026 ARCHITECTURAL ESSENTIALS COLLECTION IS NOW LIVE',
  '30-DAY COMPLIMENTARY EXCHANGES & RETURNS AT ALL WORKSHOPS',
  '100% RECYCLED PACKAGING & ZERO-PLASTIC DISPATCH'
];
