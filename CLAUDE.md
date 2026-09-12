# HUKI Ebook Marketplace — Project Map

## System Identity

**HUKI Ebook** is a Vietnamese e-commerce + digital publishing platform combining:
1. **Sàn TMĐT Sách** — Book marketplace with physical + ebook hybrid products
2. **Sàn Bản Quyền Số** — DRM-protected ebook store and reading platform
3. **Mạng Xã Hội Độc Giả** — Book community, forums, clubs, reviews, quotes
4. **Kênh Người Bán / NXB** — Seller portal for publishers and authors

**Stack**: Vite + React 18 + React Router v6, Tailwind CSS (with custom Material Design tokens), Google Fonts (Material Symbols Outlined, Playfair Display editorial font, Source Serif 4 serif), lazy-loaded page components.

---

## Architecture Map

### Directory Structure

```
src/
├── main.jsx                    # Entry point: renders App, sets up theme/system-font
├── App.jsx                     # Route definitions, context providers, error boundary
│
├── components/
│   ├── auth/
│   │   └── RouteGuards.jsx     # RequireAuth, RequireGuest, RequireSeller HOC/wrappers
│   ├── common/
│   │   ├── Toast.jsx           # Global toast notification (useToast context)
│   │   ├── AppErrorBoundary.jsx # Top-level React error boundary
│   │   └── RouteEffects.jsx    # Scroll-to-top, document-title, route-change hooks
│   └── layout/
│       ├── AppLayout.jsx        # Layout wrapper: StoreHeader + HierarchicalSidebar + StoreFooter
│       ├── SellerLayout.jsx     # Layout wrapper: SellerHeader + SellerSidebar + SellerFooter
│       ├── StoreHeader.jsx      # Sticky top nav: logo, search, cart badge, user menu
│       ├── StoreFooter.jsx       # Dark-green footer: ecosystem links, seller links
│       ├── HierarchicalSidebar.jsx # Collapsible left nav tree (full + mini-rail modes)
│       ├── LeftRail.jsx         # Alternative minimal rail (used by some store pages)
│       ├── SellerHeader.jsx      # Seller portal top nav
│       ├── SellerSidebar.jsx     # Seller portal left sidebar
│       └── SellerFooter.jsx     # Seller portal footer
│
├── context/
│   ├── AuthContext.jsx          # User auth state, login/logout, demo accounts, role check
│   ├── CartContext.jsx          # Cart state: items, stores, checkedSubtotal, CRUD ops
│   ├── ToastContext.jsx        # Toast queue: showToast(type, message)
│   └── ReaderContext.jsx       # Reader state: reading progress, theme, font, bookmarks
│
├── pages/
│   ├── auth/
│   │   ├── LoginPage.jsx        # Email/Password + OTP + Passkey tabs, social login, demo 1-click
│   │   ├── RegisterPage.jsx     # New reader registration with role selection
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── VerifyOtpPage.jsx   # SMS OTP verification flow
│   │   └── ResetPasswordPage.jsx
│   │
│   ├── store/
│   │   ├── HomePage.jsx         # Homepage: flash sale, categories, book carousels, community CTA
│   │   ├── CatalogPage.jsx      # /books — book grid with filters, tabs, sort, pagination
│   │   ├── BookDetailPage.jsx   # /book/:id — product detail with 3 format selectors
│   │   ├── ShopPage.jsx         # /shop/:id — seller's mall storefront
│   │   ├── AuthorPage.jsx       # /author/:id — author profile and works
│   │   ├── CartPage.jsx         # /cart — cart with store groups, saved items, voucher modal
│   │   ├── CheckoutPage.jsx     # /checkout — address, fulfillment split, payment methods
│   │   ├── OrderSuccessPage.jsx # /order-success — post-checkout confirmation
│   │   ├── LibraryPage.jsx      # /library — personal bookshelf: reading, DRM, favorites, notes
│   │   ├── ReaderPage.jsx       # /reader — web ebook reader with theme/font/progress
│   │   ├── ProfilePage.jsx      # /profile — user profile and stats
│   │   ├── WalletPage.jsx       # /wallet — HukiXu points, HukiPay balance
│   │   ├── CommunityPage.jsx    # /community — forum: posts, reactions, tabs, clubs
│   │   ├── CommunityPostDetailPage.jsx # /community/post/:id
│   │   ├── AudiobooksPage.jsx   # /audiobooks — audiobook catalog
│   │   ├── BookPreviewPage.jsx  # /book/:id/preview
│   │   ├── BookReviewsFeedPage.jsx  # /community/reviews — aggregated book reviews
│   │   ├── BookQuotesPage.jsx   # /community/quotes — quotes collection
│   │   ├── BookClubsDirectoryPage.jsx # /community/clubs
│   │   ├── BookClubDetailPage.jsx # /community/club/:id
│   │   ├── ReadingChallengePage.jsx  # /challenge/2026 — reading challenge dashboard
│   │   ├── OrderTrackingPage.jsx # /orders/:id — track delivery + DRM license
│   │   ├── OrderInvoicePage.jsx # /orders/:id/invoice — VAT e-invoice
│   │   ├── OrderReviewPage.jsx  # /orders/:id/review — post-purchase review
│   │   ├── OrderReturnPage.jsx   # /order/:id/return — return/refund request
│   │   ├── DeviceManagementPage.jsx # /settings/devices — DRM device slots (5 max)
│   │   └── UserAddressesPage.jsx # /settings/addresses
│   │
│   └── seller/
│       ├── SellerPortalPage.jsx  # /seller/portal — overview/landing for sellers
│       ├── SellerRegisterPage.jsx # /seller/register — B2B partner registration
│       ├── SellerDashboardPage.jsx # /seller/dashboard — KPI cards, revenue chart, order table
│       ├── SellerOrdersPage.jsx  # /seller/orders — order management list
│       ├── SellerChatPage.jsx    # /seller/chat — real-time customer chat
│       ├── SellerCreateEbook.jsx  # /seller/product/create-ebook — add DRM ebook product
│       ├── SellerCreatePhysical.jsx # /seller/product/create-physical
│       ├── SellerCreateHybrid.jsx # /seller/product/create-hybrid — add hybrid book product
│       ├── SellerEditHybrid.jsx  # /seller/product/edit-hybrid — edit existing hybrid product
│       ├── SellerCorrection.jsx  # /seller/product/correction — fix flagged product errors
│       └── EdgeCasesLibrary.jsx  # /seller/edge-cases — edge states: low stock, DRM errors
│
└── styles/ (referenced via index.css import chain)
```

---

## Routing Structure

### Authentication Pages (outside layout, RequireGuest guard)
- `/login` — LoginPage
- `/register` — RegisterPage
- `/forgot-password`
- `/verify-otp`
- `/reset-password`

### Public Store Pages (AppLayout)
```
/                              → HomePage
/books                         → CatalogPage
/book/:id                      → BookDetailPage
/book/:id/preview              → BookPreviewPage
/shop/:id                      → ShopPage
/author/:id                    → AuthorPage
/audiobooks                    → AudiobooksPage
/cart                          → CartPage
/checkout                      → CheckoutPage
/order-success                 → OrderSuccessPage
```

### Authenticated Store Pages (RequireAuth guard)
```
/library                       → LibraryPage
/reader                       → ReaderPage
/profile                      → ProfilePage
/wallet                       → WalletPage
/orders/:id                   → OrderTrackingPage
/orders/:id/invoice           → OrderInvoicePage
/orders/:id/review            → OrderReviewPage
/order/:id/return              → OrderReturnPage
/settings/devices              → DeviceManagementPage
/settings/addresses            → UserAddressesPage
/settings/security             → UserSecurityPage
```

### Community Pages (public)
```
/community                     → CommunityPage
/community/reviews             → BookReviewsFeedPage
/community/quotes              → BookQuotesPage
/community/clubs               → BookClubsDirectoryPage
/community/club/:id            → BookClubDetailPage
/community/post/:id            → CommunityPostDetailPage
/challenge/2026               → ReadingChallengePage
```

### Seller Portal Pages (SellerLayout, RequireSeller guard)
```
/seller/portal                 → SellerPortalPage
/seller/register              → SellerRegisterPage
/seller/dashboard             → SellerDashboardPage
/seller/orders                → SellerOrdersPage
/seller/chat                  → SellerChatPage
/seller/product/create-ebook   → SellerCreateEbook
/seller/product/create-physical → SellerCreatePhysical
/seller/product/create-hybrid  → SellerCreateHybrid
/seller/product/edit-hybrid    → SellerEditHybrid
/seller/product/correction     → SellerCorrection
/seller/edge-cases            → EdgeCasesLibrary
```

---

## Contexts

### AuthContext
- State: `user`, `isLoggedIn`, `isLoading`
- Methods: `login()`, `logout()`, `switchDemoAccount(roleKey)`
- Demo accounts: `reader` (VIP Gold), `seller` (Alpha Books)
- Roles: `['reader', 'seller']` checked via `hasRole()`
- Demo credentials (DEV mode): `nguyenvanan@huki.vn` / `demo1234`

### CartContext
- State: `cartItems[]`, `storeGroups[]`, `totalItemsCount`, `checkedSubtotal`, `checkedItemsCount`, `allChecked`, `hasPhysicalItems`, `hasEbookItems`
- Methods: `addItem()`, `removeFromCart()`, `toggleCheckItem()`, `toggleStoreCheck()`, `toggleAll()`, `updateQuantity()`, `clearCart()`
- Cart item shape: `{ id, title, author, price, originalPrice, format, formatTag, cover, type: 'physical'|'ebook', quantity, checked, storeId }`
- Store group shape: `{ id, name, tag, tagBg, badge, vouchersCount, items[] }`

### ToastContext
- State: `toasts[]` with `{ id, type: 'success'|'error'|'warning'|'info', message }`
- Methods: `showToast(message, type)`

### ReaderContext
- State: `currentBook`, `progress`, `theme`, `fontSize`, `bookmarks[]`, `notes[]`, `devices[]`
- Methods: `openBook()`, `updateProgress()`, `setTheme()`, `addBookmark()`, `addNote()`, `syncDevice()`

---

## Design System

### Color Palette
```
Primary (Dark Teal):   #003b2b   (brand, buttons, links)
Primary Light:          #006953   (secondary actions, success)
Primary Accent:        #94f5d6   (highlights, active states)
Accent:                #ac2c19   (error, alerts, seller badges)
Amber:                 #fea619   (warnings, badges, bestseller)
Surface:               #f8f6f1   (main background)
Surface Container:     #f2fbf9   (cards, panels)
On Surface:            #17201f   (primary text)
On Surface Variant:    #6b7280   (secondary text)
```

### Typography
- **Editorial / Display**: `font-editorial` → Playfair Display (headings, brand)
- **Serif**: `font-serif` → Source Serif 4 (quotes, book content)
- **UI / Body**: System font stack (Inter via Tailwind default or OS system)
- **Material Symbols**: All iconography via `material-symbols-outlined` class

### Layout Patterns
- **Store**: `max-w-[1280px] mx-auto` centered content, 12-col grid
- **Sidebar**: Fixed left at `lg:top-[92px]`, collapses 260px ↔ 68px mini-rail
- **Header**: Sticky at top, full-width, `h-[62px]` mobile / auto desktop
- **Cards**: `rounded-2xl`, `border border-outline-variant/30`, `shadow-sm`
- **Buttons**: `rounded-xl`, `font-bold`, `text-sm`, `h-10` to `h-12`

---

## Key Patterns

### Page Loading
All pages are lazy-loaded via `React.lazy()`. Wrap in `<Suspense fallback={<PageLoading />}>`. No page-level loading states are used — Suspense covers it.

## Cart Flow
CartPage → CheckoutPage → OrderSuccessPage. Cart is cleared on successful order placement (`clearCart()`).

### Hybrid Product Format
BookDetailPage supports 3 formats per product:
- **Ebook**: instant DRM activation, free shipping
- **Physical**: shipping fee applies, 2-3 day delivery
- **Hybrid**: best value combo (-49%), both ebook + physical

### Seller Product Creation
4 product creation flows, all in SellerLayout:
- `create-ebook` — DRM file upload, metadata, pricing
- `create-physical` — inventory, shipping specs
- `create-hybrid` — combines both above
- `edit-hybrid` — edit existing hybrid listing

### Edge Cases & Corrections
- `EdgeCasesLibrary.jsx` — handles: low stock, DRM encoding failures, missing cover images, EPUB validation errors
- `SellerCorrection.jsx` — seller correction flow for flagged products

### Community
Full forum system: posts, reactions, clubs, reviews, quotes. Reading challenge dashboard tracks user reading streaks.

### DRM & Devices
Max 5 device slots. DeviceManagementPage shows active/revoked slots. Ebook reading requires device registration.

---

## Working with this Codebase

### Adding a New Store Page
1. Create the page component in `src/pages/store/`
2. Add lazy import and Route in `App.jsx` inside the `<Route element={<AppLayout />}>` block
3. Use `useCart()` for cart operations, `useToast()` for notifications
4. Follow the 12-column grid layout pattern

### Adding a New Seller Page
1. Create in `src/pages/seller/`
2. Add route inside `<Route element={<SellerLayout />}>` block in `App.jsx`
3. Seller pages use Material Design 3 token classes (`bg-surface-container-lowest`, `text-on-surface-variant`, etc.)

### Demo Account Switching
In DEV mode (`import.meta.env.DEV`), LoginPage shows 1-click demo buttons. `AuthContext.switchDemoAccount('reader'|'seller')` sets the user instantly.

### Theme
No dark mode toggle yet — all colors are static. Light mode only.
