import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ReaderProvider } from './context/ReaderContext';
import { ToastProvider } from './context/ToastContext';
import Toast from './components/common/Toast';

// Store Pages
import HomePage from './pages/store/HomePage';
import CommunityPage from './pages/store/CommunityPage';
import CatalogPage from './pages/store/CatalogPage';
import BookDetailPage from './pages/store/BookDetailPage';
import LibraryPage from './pages/store/LibraryPage';
import CartPage from './pages/store/CartPage';
import CheckoutPage from './pages/store/CheckoutPage';
import OrderSuccessPage from './pages/store/OrderSuccessPage';
import ProfilePage from './pages/store/ProfilePage';
import ReaderPage from './pages/store/ReaderPage';

// Seller Pages
import SellerPortalPage from './pages/seller/SellerPortalPage';
import SellerRegisterPage from './pages/seller/SellerRegisterPage';
import SellerDashboardPage from './pages/seller/SellerDashboardPage';
import SellerOrdersPage from './pages/seller/SellerOrdersPage';
import SellerCreateEbook from './pages/seller/SellerCreateEbook';
import SellerCreatePhysical from './pages/seller/SellerCreatePhysical';
import SellerCreateHybrid from './pages/seller/SellerCreateHybrid';
import SellerEditHybrid from './pages/seller/SellerEditHybrid';
import SellerCorrection from './pages/seller/SellerCorrection';
import EdgeCasesLibrary from './pages/seller/EdgeCasesLibrary';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <ReaderProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reader" element={<ReaderPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/books" element={<CatalogPage />} />
                <Route path="/book/:id" element={<BookDetailPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/seller" element={<SellerPortalPage />} />
                <Route path="/seller/register" element={<SellerRegisterPage />} />
                <Route path="/seller/dashboard" element={<SellerDashboardPage />} />
                <Route path="/seller/orders" element={<SellerOrdersPage />} />
                <Route path="/seller/product/create-ebook" element={<SellerCreateEbook />} />
                <Route path="/seller/product/create-physical" element={<SellerCreatePhysical />} />
                <Route path="/seller/product/create-hybrid" element={<SellerCreateHybrid />} />
                <Route path="/seller/product/edit-hybrid" element={<SellerEditHybrid />} />
                <Route path="/seller/product/correction" element={<SellerCorrection />} />
                <Route path="/seller/edge-cases" element={<EdgeCasesLibrary />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toast />
            </BrowserRouter>
          </ReaderProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-body-md">
      <div className="text-center px-6">
        <div className="text-7xl font-editorial font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-headline-md text-on-surface mb-2">Không tìm thấy trang</h1>
        <p className="text-on-surface-variant mb-6">Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
}
