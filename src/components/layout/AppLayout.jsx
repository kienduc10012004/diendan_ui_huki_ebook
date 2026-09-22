import React, { useState, createContext, useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import StoreHeader from './StoreHeader';
import HierarchicalSidebar from './HierarchicalSidebar';
import StoreFooter from './StoreFooter';
import { useCart } from '../../context/CartContext';

export const LayoutContext = createContext({
  isSidebarCollapsed: false,
  setIsSidebarCollapsed: () => {},
  isMobileOpen: false,
  setIsMobileOpen: () => {},
  toggleSidebar: () => {}
});

export const useLayout = () => useContext(LayoutContext);

export default function AppLayout() {
  const { totalItemsCount } = useCart();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(prev => !prev);
  };

  return (
    <LayoutContext.Provider
      value={{
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        isMobileOpen,
        setIsMobileOpen,
        toggleSidebar
      }}
    >
      <div className="bg-background text-on-surface flex flex-col antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed font-sans min-h-screen pb-14 lg:pb-0">
        {/* Unified E-Commerce Header */}
        <StoreHeader
          onToggleSidebar={toggleSidebar}
          onToggleMobileSidebar={toggleMobileSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        <div className="flex-1 flex flex-row relative min-h-[calc(100vh-108px)]">
          {/* Hierarchical Multi-Level Sidebar */}
          <HierarchicalSidebar
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />

          {/* Main Page Content Wrapper with Dynamic Left Margin matching Sidebar */}
          <div
            className={`
              flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out
              ${isSidebarCollapsed ? 'lg:ml-[68px]' : 'lg:ml-[310px]'}
              ml-0
            `}
          >
            <main id="main-content" tabIndex="-1" className="flex-1 min-w-0 outline-none">
              <React.Suspense
                fallback={
                  <div className="flex-1 min-h-[40vh] flex items-center justify-center p-8 animate-fade-in">
                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--theme-border,#e8e5df)] bg-[var(--theme-surface,#ffffff)] px-5 py-3 text-xs font-semibold text-[var(--theme-text,#17201f)] shadow-md">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--theme-primary,#003b2b)]/20 border-t-[var(--theme-primary,#003b2b)]" aria-hidden="true" />
                      <span>Đang chuyển trang...</span>
                    </div>
                  </div>
                }
              >
                <Outlet />
              </React.Suspense>
            </main>

            {/* Unified E-Commerce Footer */}
            <StoreFooter />
          </div>
        </div>

        {/* Mobile Bottom Navigation Bar (Fixed for < 1024px) */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--theme-surface,#ffffff)] border-t border-[var(--theme-border,#e8e5df)] flex items-center justify-around h-14 px-2 lg:hidden shadow-lg">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
                isActive ? 'text-[var(--theme-primary,#003b2b)]' : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span>Trang chủ</span>
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
                isActive ? 'text-[var(--theme-primary,#003b2b)]' : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">menu_book</span>
            <span>Khám phá</span>
          </NavLink>

          <NavLink
            to="/library"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
                isActive ? 'text-[var(--theme-primary,#003b2b)]' : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
            <span>Tủ sách</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors relative ${
                isActive ? 'text-[var(--theme-primary,#003b2b)]' : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 right-1 bg-[var(--theme-accent,#ac2c19)] text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
            <span>Giỏ hàng</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
                isActive ? 'text-[var(--theme-primary,#003b2b)]' : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
            <span>Tài khoản</span>
          </NavLink>
        </nav>
      </div>
    </LayoutContext.Provider>
  );
}
