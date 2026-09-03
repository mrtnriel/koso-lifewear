export type Category = 
  | 'All'
  | 'T-Shirts'
  | 'Shirts & Blouses'
  | 'Outerwear'
  | 'Pants & Trousers'
  | 'Knitwear'
  | 'Accessories';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductColor {
  name: string;
  hex: string;
  tailwindClass?: string;
  imageIndex: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  category: Category;
  gender: 'Unisex' | 'Women' | 'Men';
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  fabricDetails: string[];
  careInstructions: string[];
  fit: 'Relaxed Fit' | 'Regular Fit' | 'Oversized Fit' | 'Slim Fit';
  images: string[];
  colors: ProductColor[];
  sizes: {
    size: Size;
    stock: number;
  }[];
  tags: string[];
  createdAt: string;
}

export interface CartItem {
  id: string; // unique item instance id (e.g. `${product.id}-${color}-${size}`)
  productId: string;
  product: Product;
  selectedColor: ProductColor;
  selectedSize: Size;
  quantity: number;
  price: number;
}

export interface FilterState {
  category: Category;
  gender: 'All' | 'Men' | 'Women' | 'Unisex';
  colors: string[];
  sizes: Size[];
  priceRange: [number, number];
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
  inStockOnly: boolean;
  onSaleOnly: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'cart';
  title: string;
  description?: string;
  thumbnail?: string;
}
