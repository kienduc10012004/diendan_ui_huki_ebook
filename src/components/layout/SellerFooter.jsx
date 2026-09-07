import React from 'react';
import { Link } from 'react-router-dom';

export default function SellerFooter() {
  return (
    <footer className="bg-white border-t border-[#e8e5df] py-6 px-4 md:px-8 text-xs text-[#6b7280] mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-editorial font-bold text-[#003b2b] text-base">HUKI SELLER CENTER</span>
          <span>•</span>
          <span>Cổng thông tin & dịch vụ TMĐT Sách Bản Quyền Số</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/seller" className="hover:text-[#17201f] transition-colors">Quy chế hoạt động</Link>
          <span>•</span>
          <Link to="/seller/register" className="hover:text-[#17201f] transition-colors">Chính sách bản quyền DRM</Link>
          <span>•</span>
          <a href="tel:19008866" className="text-[#006953] font-bold">Hotline B2B: 1900 8866</Link>
        </div>
      </div>
    </footer>
  );
}
