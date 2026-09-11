import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route, Link, useParams } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ReaderProvider } from './context/ReaderContext';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import Toast from './components/common/Toast';
import AppErrorBoundary from './components/common/AppErrorBoundary';
import RouteEffects from './components/common/RouteEffects';
import AppLayout from './components/layout/AppLayout';
import CheckoutLayout from './components/layout/CheckoutLayout';
import SellerPortalLayout from './components/layout/SellerPortalLayout';
import SellerLayout from './components/layout/SellerLayout';
import AdminLayout from './components/layout/AdminLayout';
import { RequireAuth, RequireGuest, RequireSeller } from './components/auth/RouteGuards';

const page = (loader) => lazy(loader);
const HomePage = page(() => import('./pages/store/HomePage'));
const CommunityPage = page(() => import('./pages/store/CommunityPage'));
const CatalogPage = page(() => import('./pages/store/CatalogPage'));
const BookDetailPage = page(() => import('./pages/store/BookDetailPage'));
const ShopPage = page(() => import('./pages/store/ShopPage'));
const AuthorPage = page(() => import('./pages/store/AuthorPage'));
const OrderTrackingPage = page(() => import('./pages/store/OrderTrackingPage'));
const OrderReturnPage = page(() => import('./pages/store/OrderReturnPage'));
const WalletPage = page(() => import('./pages/store/WalletPage'));
const AudiobooksPage = page(() => import('./pages/store/AudiobooksPage'));
const BookClubDetailPage = page(() => import('./pages/store/BookClubDetailPage'));
const DeviceManagementPage = page(() => import('./pages/store/DeviceManagementPage'));
const LibraryPage = page(() => import('./pages/store/LibraryPage'));
const CartPage = page(() => import('./pages/store/CartPage'));
const CheckoutPage = page(() => import('./pages/store/CheckoutPage'));
const OrderSuccessPage = page(() => import('./pages/store/OrderSuccessPage'));
const ProfilePage = page(() => import('./pages/store/ProfilePage'));
const ReaderPage = page(() => import('./pages/store/ReaderPage'));
const BookPreviewPage = page(() => import('./pages/store/BookPreviewPage'));
const BookReviewsFeedPage = page(() => import('./pages/store/BookReviewsFeedPage'));
const BookQuotesPage = page(() => import('./pages/store/BookQuotesPage'));
const BookClubsDirectoryPage = page(() => import('./pages/store/BookClubsDirectoryPage'));
const CommunityPostDetailPage = page(() => import('./pages/store/CommunityPostDetailPage'));
const UserAddressesPage = page(() => import('./pages/store/UserAddressesPage'));
const UserSecurityPage = page(() => import('./pages/store/UserSecurityPage'));
const ReadingChallengePage = page(() => import('./pages/store/ReadingChallengePage'));
const OrderInvoicePage = page(() => import('./pages/store/OrderInvoicePage'));
const OrderReviewPage = page(() => import('./pages/store/OrderReviewPage'));
const LoginPage = page(() => import('./pages/auth/LoginPage'));
const RegisterPage = page(() => import('./pages/auth/RegisterPage'));
const ForgotPasswordPage = page(() => import('./pages/auth/ForgotPasswordPage'));
const VerifyOtpPage = page(() => import('./pages/auth/VerifyOtpPage'));
const ResetPasswordPage = page(() => import('./pages/auth/ResetPasswordPage'));
const SellerPortalPage = page(() => import('./pages/seller/SellerPortalPage'));
const SellerRegisterPage = page(() => import('./pages/seller/SellerRegisterPage'));
const SellerDashboardPage = page(() => import('./pages/seller/SellerDashboardPage'));
const SellerOrdersPage = page(() => import('./pages/seller/SellerOrdersPage'));
const SellerChatPage = page(() => import('./pages/seller/SellerChatPage'));
const SellerCreateEbook = page(() => import('./pages/seller/SellerCreateEbook'));
const SellerCreatePhysical = page(() => import('./pages/seller/SellerCreatePhysical'));
const SellerCreateHybrid = page(() => import('./pages/seller/SellerCreateHybrid'));
const SellerEditHybrid = page(() => import('./pages/seller/SellerEditHybrid'));
const SellerCorrection = page(() => import('./pages/seller/SellerCorrection'));
const EdgeCasesLibrary = page(() => import('./pages/seller/EdgeCasesLibrary'));
const MessengerPage = page(() => import('./pages/store/MessengerPage'));
const AdminDashboardPage = page(() => import('./pages/admin/AdminDashboardPage'));

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <ReaderProvider>
            <BrowserRouter>
              <RouteEffects />
              <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:shadow-lg">
                Bỏ qua điều hướng
              </a>
              <AppErrorBoundary>
              <Suspense fallback={<PageLoading />}>
              <Routes>
                {/* 1. KHU VỰC XÁC THỰC: Độc lập ngoài sàn TMĐT */}
                <Route element={<RequireGuest />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/verify-otp" element={<VerifyOtpPage />} />
                  <Route path="/reset-password" element={<ResetPasswordPage />} />
                </Route>

                {/* 2. KHU VỰC TRÌNH ĐỌC SÁCH FULLSCREEN & STANDALONE (Tách biệt hoàn toàn) */}
                <Route path="/read/:id" element={<ReaderPage />} />
                <Route path="/read" element={<ReaderPage />} />
                <Route path="/reader" element={<ReaderPage />} />
                <Route path="/book/:id/preview" element={<BookPreviewPage />} />

                {/* 3. KHU VỰC CHAT TOÀN MÀN HÌNH (Full-height Messenger Workspace) */}
                <Route path="/chat" element={<MessengerPage />} />
                <Route path="/messages" element={<MessengerPage />} />
                <Route path="/message" element={<Navigate to="/chat" replace />} />

                {/* 4. KHU VỰC HÓA ĐƠN VAT CHUẨN IN ẤN A4 (Standalone Minimal View) */}
                <Route element={<RequireAuth />}>
                  <Route path="/orders/:id/invoice" element={<OrderInvoicePage />} />
                  <Route path="/order/:id/invoice" element={<NavigateOrderAlias suffix="invoice" />} />
                </Route>

                {/* 5. KHU VỰC THANH TOÁN (Distraction-Free: Không Mega Sidebar) */}
                <Route element={<RequireAuth />}>
                  <Route element={<CheckoutLayout />}>
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-success" element={<OrderSuccessPage />} />
                  </Route>
                </Route>

                {/* 6. KHU VỰC B2B PORTAL: GIỚI THIỆU & ĐĂNG KÝ NGƯỜI BÁN */}
                <Route element={<SellerPortalLayout />}>
                  <Route path="/seller" element={<SellerPortalPage />} />
                  <Route element={<RequireAuth />}>
                    <Route path="/seller/register" element={<SellerRegisterPage />} />
                  </Route>
                </Route>

                {/* 7. KHU VỰC SÀN TMĐT, CỘNG ĐỒNG & KHÁCH HÀNG (AppLayout chuẩn có Header, Sidebar, Footer) */}
                <Route element={<AppLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/community/reviews" element={<BookReviewsFeedPage />} />
                  <Route path="/community/quotes" element={<BookQuotesPage />} />
                  <Route path="/community/clubs" element={<BookClubsDirectoryPage />} />
                  <Route path="/community/club/:id" element={<BookClubDetailPage />} />
                  <Route path="/community/club" element={<Navigate to="/community/clubs" replace />} />
                  <Route path="/community/post/:id" element={<CommunityPostDetailPage />} />
                  <Route path="/community/post" element={<Navigate to="/community" replace />} />
                  <Route path="/clubs" element={<Navigate to="/community/clubs" replace />} />
                  <Route path="/club" element={<Navigate to="/community/clubs" replace />} />
                  <Route path="/challenge/2026" element={<ReadingChallengePage />} />
                  <Route path="/challenge" element={<ReadingChallengePage />} />
                  <Route path="/profile/challenge" element={<ReadingChallengePage />} />
                  <Route path="/books" element={<CatalogPage />} />
                  <Route path="/book/:id" element={<BookDetailPage />} />
                  <Route path="/book" element={<Navigate to="/books" replace />} />
                  <Route path="/shop/:id" element={<ShopPage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/publisher/:id" element={<ShopPage />} />
                  <Route path="/publisher" element={<ShopPage />} />
                  <Route path="/author/:id" element={<AuthorPage />} />
                  <Route path="/author" element={<AuthorPage />} />
                  <Route path="/authors" element={<CatalogPage />} />
                  <Route path="/audiobooks" element={<AudiobooksPage />} />
                  <Route path="/audiobook" element={<Navigate to="/audiobooks" replace />} />
                  <Route path="/audio" element={<Navigate to="/audiobooks" replace />} />
                  <Route path="/podcasts" element={<Navigate to="/audiobooks" replace />} />
                  <Route path="/cart" element={<CartPage />} />

                  {/* Authenticated customer profile & orders */}
                  <Route element={<RequireAuth />}>
                    <Route path="/orders/:id/review" element={<OrderReviewPage />} />
                    <Route path="/orders/:id" element={<OrderTrackingPage />} />
                    <Route path="/orders" element={<OrderTrackingPage />} />
                    <Route path="/order" element={<Navigate to="/orders" replace />} />
                    <Route path="/order/:id/review" element={<NavigateOrderAlias suffix="review" />} />
                    <Route path="/order/tracking/:id" element={<NavigateOrderAlias />} />
                    <Route path="/order/:id/return" element={<NavigateOrderAlias suffix="return" />} />
                    <Route path="/orders/:id/return" element={<OrderReturnPage />} />
                    <Route path="/wallet" element={<WalletPage />} />
                    <Route path="/rewards" element={<Navigate to="/wallet" replace />} />
                    <Route path="/settings" element={<Navigate to="/settings/devices" replace />} />
                    <Route path="/settings/devices" element={<DeviceManagementPage />} />
                    <Route path="/settings/addresses" element={<UserAddressesPage />} />
                    <Route path="/settings/security" element={<UserSecurityPage />} />
                    <Route path="/drm/devices" element={<Navigate to="/settings/devices" replace />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* 8. KHU VỰC QUẢN TRỊ NGƯỜI BÁN ĐÃ DUYỆT (SellerLayout chuẩn) */}
                <Route element={<RequireAuth />}>
                  <Route element={<RequireSeller />}>
                    <Route element={<SellerLayout />}>
                      <Route path="/seller/dashboard" element={<SellerDashboardPage />} />
                      <Route path="/seller/orders" element={<SellerOrdersPage />} />
                      <Route path="/seller/chat" element={<SellerChatPage />} />
                      <Route path="/seller/products" element={<SellerEditHybrid />} />
                      <Route path="/seller/product" element={<Navigate to="/seller/products" replace />} />
                      <Route path="/seller/product/create-ebook" element={<SellerCreateEbook />} />
                      <Route path="/seller/product/create-physical" element={<SellerCreatePhysical />} />
                      <Route path="/seller/product/create-hybrid" element={<SellerCreateHybrid />} />
                      <Route path="/seller/product/edit-hybrid" element={<Navigate to="/seller/products" replace />} />
                      <Route path="/seller/product/correction" element={<SellerCorrection />} />
                      <Route path="/seller/edge-cases" element={<EdgeCasesLibrary />} />
                    </Route>
                  </Route>
                </Route>

                {/* 9. KHU VỰC SUPER ADMIN CRM DASHBOARD (AdminLayout chuẩn macOS / Modern CRM) */}
                <Route element={<AdminLayout />}>
                  <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                  <Route path="/admin/leads" element={<AdminDashboardPage />} />
                  <Route path="/admin/contacts" element={<AdminDashboardPage />} />
                  <Route path="/admin/companies" element={<AdminDashboardPage />} />
                  <Route path="/admin/deals" element={<AdminDashboardPage />} />
                  <Route path="/admin/tasks" element={<AdminDashboardPage />} />
                  <Route path="/admin/calendar" element={<AdminDashboardPage />} />
                  <Route path="/admin/reports" element={<AdminDashboardPage />} />
                  <Route path="/admin/automation" element={<AdminDashboardPage />} />
                  <Route path="/admin/integrations" element={<AdminDashboardPage />} />
                  <Route path="/admin/settings" element={<AdminDashboardPage />} />
                  <Route path="/admin/support" element={<AdminDashboardPage />} />
                </Route>
              </Routes>
              </Suspense>
              </AppErrorBoundary>
              <Toast />
            </BrowserRouter>
          </ReaderProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
    </ThemeProvider>
  );
}

function PageLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background" role="status" aria-live="polite">
      <div className="flex items-center gap-3 rounded-xl border border-outline-variant bg-white px-5 py-3 text-sm font-semibold text-on-surface shadow-sm">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary/20 border-t-primary" aria-hidden="true" />
        Đang tải nội dung…
      </div>
    </div>
  );
}

function NavigateOrderAlias({ suffix }) {
  const { id } = useParams();
  return <Navigate to={`/orders/${id || ''}${suffix ? `/${suffix}` : ''}`} replace />;
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background font-body-md py-16">
      <div className="text-center px-6">
        <div className="text-7xl font-editorial font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-headline-md text-on-surface mb-2">Không tìm thấy trang</h1>
        <p className="text-on-surface-variant mb-6 max-w-md mx-auto">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang danh mục khác trong hệ thống.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#003b2b] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#00523c] transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Quay về Trang Chủ Sàn TMĐT
        </Link>
      </div>
    </div>
  );
}
