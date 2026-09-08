import React, { useState, createContext, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import StoreHeader from './StoreHeader';
import HierarchicalSidebar from './HierarchicalSidebar';
import StoreFooter from './StoreFooter';

export const LayoutContext = createContext({
  isSidebarCollapsed: false,
  setIsSidebarCollapsed: () => {},
  isMobileOpen: false,
  setIsMobileOpen: () => {},
  toggleSidebar: () => {}
});

export const useLayout = () => useContext(LayoutContext);

export default function AppLayout() {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(prev => !prev);
  };

  // Reader page can be minimal or special, all other pages get the full layout
  const isReaderPage = location.pathname === '/reader';
  const isChatPage = location.pathname.startsWith('/chat') || location.pathname.startsWith('/messages');

  if (isReaderPage) {
    return <Outlet />;
  }

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
      <div className={`bg-background text-on-surface flex flex-col antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed font-sans ${isChatPage ? 'h-screen max-h-screen overflow-hidden' : 'min-h-screen'}`}>
        {/* Unified E-Commerce Header */}
        <StoreHeader
          onToggleSidebar={toggleSidebar}
          onToggleMobileSidebar={toggleMobileSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        <div className={`flex-1 flex flex-row relative ${isChatPage ? 'overflow-hidden min-h-0 h-[calc(100vh-92px)]' : 'min-h-[calc(100vh-108px)]'}`}>
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
              ${isChatPage ? 'overflow-hidden min-h-0 h-full' : ''}
              ml-0
            `}
          >
            <main id="main-content" tabIndex="-1" className={`flex-1 min-w-0 outline-none ${isChatPage ? 'overflow-hidden min-h-0 h-full flex flex-col' : ''}`}>
              <Outlet />
            </main>

            {/* Unified E-Commerce Footer */}
            {!isChatPage && <StoreFooter />}
          </div>
        </div>
      </div>
    </LayoutContext.Provider>
  );
}
