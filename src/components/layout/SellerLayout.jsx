import React from 'react';
import { Outlet } from 'react-router-dom';
import SellerFooter from './SellerFooter';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';

export default function SellerLayout() {
  return (
    <div className="min-h-dvh bg-background text-on-surface flex flex-col">
      <SellerHeader />
      <div className="flex flex-1 min-w-0">
        <div className="hidden lg:block">
          <SellerSidebar />
        </div>
        <div className="min-w-0 flex-1 flex flex-col">
          <main id="main-content" className="flex-1 min-w-0">
            <Outlet />
          </main>
          <SellerFooter />
        </div>
      </div>
    </div>
  );
}
