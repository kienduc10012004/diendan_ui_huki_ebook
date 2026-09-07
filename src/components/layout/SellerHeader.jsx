import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SellerHeader() {
  const { seller } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e8e5df] px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Left: Brand & Shop Identity */}
      <div className="flex items-center gap-6">
        <Link to="/seller/dashboard" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#003b2b] flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">store</span>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl font-bold text-[#003b2b] leading-none">HUKI SELLER</span>
            <span className="text-[9px] uppercase tracking-widest text-[#ac2c19] font-bold">Kênh Nhà Xuất Bản & Tác Giả</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-[#f2fbf9] px-3 py-1.5 rounded-full border border-[#e8e5df]">
          <span className="w-2 h-2 rounded-full bg-[#006953] animate-pulse" aria-hidden="true"></span>
          <span className="text-xs font-bold text-[#003b2b]">{seller?.name || "Kênh Người Bán"}</span>
          <span className="text-[10px] bg-[#006953]/10 text-[#006953] px-2 py-0.5 rounded-full font-semibold">Đối tác cấp 1</span>
        </div>
      </div>

      {/* Center Search */}
      <div className="hidden lg:flex items-center bg-[#f8f6f1] border border-[#e8e5df] rounded-full px-4 py-1.5 w-80 text-xs text-[#6b7280]">
        <span className="material-symbols-outlined text-base mr-2">search</span>
        <input
          type="text"
          placeholder="Tìm mã đơn #HK..., SKU, tựa sách..."
          className="bg-transparent border-none outline-none w-full text-xs text-[#17201f]"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <Link
          to="/seller/product/create-hybrid"
          className="flex items-center gap-1.5 bg-[#ac2c19] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#8e1404] transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-base">add_circle</span>
          <span>Thêm Sản Phẩm Mới</span>
        </Link>

        <div className="h-6 w-px bg-[#e8e5df]"></div>

        <Link
          to="/"
          className="flex items-center gap-1 text-xs font-semibold text-[#006953] hover:text-[#003b2b] px-3 py-1.5 rounded-lg border border-[#e8e5df] hover:bg-[#f2fbf9]"
        >
          <span className="material-symbols-outlined text-base">open_in_new</span>
          <span className="hidden sm:inline">Về Sàn HUKI</span>
        </Link>
      </div>
    </header>
  );
}
