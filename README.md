# Frontend Specialist Benchmark — KŌSO (構造 LIFEWEAR)

A production-grade, architectural fashion e-commerce web application inspired by the minimalism, utilitarian craft, and fabric engineering of Japanese lifewear.

<img width="1912" height="971" alt="image" src="https://github.com/user-attachments/assets/56fcfbe7-da9c-443c-94be-dd3a7338c73f" />

Built as a benchmark evaluation for the **Frontend Specialist** agent, demonstrating advanced frontend architecture, UI/UX design taste, spatial discipline, spring motion physics, responsive layout engineering, and accessibility.

---

## 🏛️ Brand & Visual Identity: KŌSO (構造)

* **Design Manifesto:** *"Form Follows Function. Longevity Outlives Trends."*
* **Typography Pairing:** 
  * **Plus Jakarta Sans:** Geometric grotesque display and body typography for high legibility and contemporary posture.
  * **JetBrains Mono:** Technical monospace font for fabric weights (GSM), yarn microns (µ), SKUs, and metric measurements.
* **Color System:** 
  * Architectural Canvas: `#FBFBFB`
  * Surface Neutral: `#FFFFFF`
  * Subdued Borders: `#E8E8E8`
  * High-Contrast Text: `#111111`
  * Accent Highlight: Japanese Lacquer Vermillion (`#E03131`) for promotional indicators.
* **Photography Direction:** High-resolution minimalist studio and editorial lookbook photography highlighting drape, silhouette, and natural fiber texture.

---

## 🎯 Applied Skills & Standards

### 1. Impeccable (Design Discipline & System Rigor)
* **Spatial Rhythm:** Strict 4px/8px spacing grid throughout all components and layout containers.
* **Anti-AI Design Patterns:** Zero arbitrary pastel blobs, zero unnecessary glassmorphic cards, zero bloated pill buttons, and zero generic dashboard templates. Every line, margin, and divider serves an intentional structural purpose.
* **Accessibility (WCAG 2.1 AA):** Native semantic DOM landmarks (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`), keyboard focus indicators (`:focus-visible`), readable contrast ratios (4.5:1+), and descriptive ARIA labels.

### 2. Emil Kowalski Animation Principles
* **Spring Physics:** Custom cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`) for all drawers, modals, and hover states.
* **Micro-Interactions:** Tactile scale-down (`scale(0.98)`) on button click/tap, smooth color swatch switching, instant cart badge bounce on addition, and animated free shipping progress bar.
* **Motion Accessibility:** Strict `@media (prefers-reduced-motion)` overrides for all animated elements.

### 3. Taste (Art Direction & Editorial Personality)
* Japanese editorial typography annotations (`構造 LIFEWEAR`, `分類`, `新作`, `哲学`, `定番`, `季刊`).
* Authentic technical fabric specifications (280 GSM Californian Supima® Cotton, 3D WHOLEGARMENT® Seamless Merino Wool, 15,000mm Storm-Shield Membrane, 750+ Fill Power RDS Down, 500D Recycled Cordura®).

---

## 📦 Component & View Architecture

| Component | File Path | Responsibilities & Features |
|:---|:---|:---|
| **AnnouncementBar** | `src/components/AnnouncementBar.tsx` | Auto-rotating promotional marquee with pause-on-hover, prev/next arrows, and dismiss button. |
| **Navbar** | `src/components/Navbar.tsx` | Sticky header with blur on scroll, instant search trigger (`⌘K`), wishlist counter, and animated cart bag badge. |
| **MobileNav** | `src/components/MobileNav.tsx` | Left slide-over drawer with category shortcuts, fabric philosophy link, and currency/region selectors. |
| **Hero** | `src/components/Hero.tsx` | High-impact editorial hero with dual CTA triggers and a 4-pillar technical badge ticker (Supima®, 3D WholeGarment, 750 RDS Down, Zero Plastic). |
| **CategoryNav** | `src/components/CategoryNav.tsx` | Visual silhouette navigation tiles across T-Shirts, Outerwear, Trousers, Knitwear, Shirts, and Accessories. |
| **ProductCard** | `src/components/ProductCard.tsx` | Interactive color swatch switcher with instant image updates, hover secondary angle cross-fade, quick-add size button, wishlist heart toggle, and low-stock indicators. |
| **ProductGrid** | `src/components/ProductGrid.tsx` | Responsive grid (4-col desktop, 3-col tablet, 2-col mobile) with zero layout shift and empty-state reset triggers. |
| **ShopView** | `src/components/ShopView.tsx` | Full catalog browsing view with client-side multi-attribute filtering and sorting engine. |
| **FilterBar & Drawer** | `src/components/FilterBar.tsx`<br>`src/components/FilterDrawer.tsx` | Multi-attribute filters (Category, Fit/Gender, Size, Color Palette, In-Stock, On-Sale), sort dropdown, and active filter removal tags. |
| **ProductDetailModal** | `src/components/ProductDetailModal.tsx` | Complete PDP experience: multi-angle gallery, color/size selector with real-time stock feedback, quantity stepper, collapsible specification accordions (Fabric, Care, Shipping & Returns), and related silhouette recommendations. |
| **SizeGuideModal** | `src/components/SizeGuideModal.tsx` | Tabbed Metric/Imperial (CM / INCHES) measurement table with model specifications. |
| **CartDrawer** | `src/components/CartDrawer.tsx` | Slide-over cart with free shipping progress meter ($100 threshold), item quantity steppers, promo code discount engine (`KOSO10`, `ARCHITECT`), tax/shipping calculator, and sticky checkout CTA. |
| **WishlistDrawer** | `src/components/WishlistDrawer.tsx` | Saved lookbook drawer with direct "Move to Bag" capability. |
| **SearchModal** | `src/components/SearchModal.tsx` | Instant search modal with keyboard shortcuts (`⌘K` / `Esc`), popular keywords, and material filters. |
| **CheckoutModal** | `src/components/CheckoutModal.tsx` | Simulated express checkout flow with shipping address validation, payment preview, and order confirmation generation. |
| **EditorialStory** | `src/components/EditorialStory.tsx` | Three-pillar material craft and sustainability manifesto. |
| **Newsletter** | `src/components/Newsletter.tsx` | High-contrast email dispatch subscription form with instant validation feedback. |
| **Footer** | `src/components/Footer.tsx` | Architectural 5-column footer with brand manifesto, categories, client concierge, and legal links. |
| **Toast** | `src/components/Toast.tsx` | Non-intrusive toast notifications with product thumbnails and action buttons. |

---

## ⚡ Technical Stack

* **Runtime & Bundler:** Node.js, Vite 6
* **Framework:** React 19 with TypeScript (Strict Mode)
* **Styling Engine:** Tailwind CSS v4 + Modern CSS Custom Properties
* **Icons:** Lucide React
* **State & Persistence:** React Hooks (`useState`, `useMemo`, `useEffect`) with `localStorage` persistence for Cart and Wishlist.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
