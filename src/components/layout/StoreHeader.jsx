import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import UserAvatar from '../common/UserAvatar';

export default function StoreHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItemsCount } = useCart();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isCommunity = location.pathname.startsWith('/community');
  const isStore = !isCommunity && !location.pathname.startsWith('/seller');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#e8e5df]">
      {/* Top Utility Bar */}
      <div className="bg-[#003b2b] text-white text-[11px] px-4 md:px-8 py-1.5 flex items-center justify-between font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#94f5d6]">verified_user</span>
            Hệ sinh thái đọc Sách Thật & Bản quyền số HUKI
          </span>
          <span className="hidden sm:inline-block opacity-40">|</span>
          <span className="hidden sm:flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#94f5d6]">support_agent</span>
            Hotline hỗ trợ: 1900 8866 (8:00 - 21:00)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/seller" className="hover:text-[#94f5d6] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px]">storefront</span>
            Kênh Người Bán & Phát Hành
          </Link>
          <span className="opacity-40">|</span>
          <span className="text-[#94f5d6]">Tiếng Việt</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo & Platform Switcher Tabs */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#003b2b] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl font-bold tracking-tight text-[#003b2b] leading-none">HUKI EBOOK</span>
              <span className="text-[10px] uppercase tracking-widest text-[#ac2c19] font-semibold mt-0.5">Sách Số & Sách In</span>
            </div>
          </Link>

          {/* Mode Tabs: Sàn TMĐT vs Mạng Xã Hội */}
          <div className="hidden lg:flex items-center bg-[#f2fbf9] p-1 rounded-xl border border-[#e8e5df]">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isStore
                  ? 'bg-white text-[#003b2b] shadow-sm border border-[#e8e5df]'
                  : 'text-[#6b7280] hover:text-[#17201f]'
              }`}
            >
              <span className="material-symbols-outlined text-base">storefront</span>
              Sàn TMĐT Sách
            </Link>
            <Link
              to="/community"
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isCommunity
                  ? 'bg-[#003b2b] text-white shadow-sm'
                  : 'text-[#6b7280] hover:text-[#17201f]'
              }`}
            >
              <span className="material-symbols-outlined text-base">groups</span>
              Mạng Xã Hội Độc Giả
            </Link>
          </div>
        </div>

        {/* Global Semantic Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl relative hidden md:block">
          <div className="flex items-center bg-[#f8f6f1] border border-[#e8e5df] rounded-full px-4 py-2 focus-within:border-[#ac2c19] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ac2c19]/10 transition-all">
            <span className="material-symbols-outlined text-[#6b7280] text-xl mr-2">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm tác phẩm, tác giả, ISBN, bài review..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-[#17201f] placeholder-[#6b7280]"
            />
            <button type="submit" className="bg-[#ac2c19] text-white px-4 py-1 rounded-full text-xs font-semibold hover:bg-[#8e1404] transition-colors ml-2">
              Tìm
            </button>
          </div>
        </form>

        {/* Right Actions: Navigation, Cart & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/books"
            className="hidden sm:flex items-center gap-1 text-xs md:text-sm font-semibold text-[#17201f] hover:text-[#ac2c19] px-3 py-2 rounded-lg hover:bg-black/5 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">category</span>
            Khám Phá Sách
          </Link>

          <Link
            to="/library"
            className="hidden sm:flex items-center gap-1 text-xs md:text-sm font-semibold text-[#17201f] hover:text-[#ac2c19] px-3 py-2 rounded-lg hover:bg-black/5 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">local_library</span>
            Tủ Sách
          </Link>

          {/* Cart Icon with Live Counter */}
          <Link
            to="/cart"
            className="relative p-2.5 rounded-full hover:bg-black/5 text-[#17201f] transition-colors"
            title="Xem giỏ hàng"
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {totalItemsCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#ac2c19] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {totalItemsCount}
              </span>
            )}
          </Link>

          {/* User Profile Trigger & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1.5 rounded-full hover:bg-black/5 transition-colors border border-[#e8e5df]"
            >
              <UserAvatar src={user?.avatar} name={user?.name || "Khách"} size="w-8 h-8" />
              <span className="hidden xl:inline text-xs font-bold text-[#17201f] pr-1">{user?.name || "Khách"}</span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#e8e5df] p-2 z-50 text-xs">
                <div className="px-3 py-2 border-b border-[#e8e5df] mb-1">
                  <p className="font-bold text-[#17201f] text-sm">{user?.name || "Khách"}</p>
                  <p className="text-[#ac2c19] font-semibold">{user?.role || "Hội viên"}</p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#f2fbf9] text-[#17201f]"
                >
                  <span className="material-symbols-outlined text-base text-[#006953]">account_circle</span>
                  Hồ sơ cá nhân & Streak
                </Link>
                <Link
                  to="/library"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#f2fbf9] text-[#17201f]"
                >
                  <span className="material-symbols-outlined text-base text-[#006953]">auto_stories</span>
                  Tủ sách của tôi (48 cuốn)
                </Link>
                <Link
                  to="/seller/dashboard"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#f2fbf9] text-[#17201f] font-semibold text-[#ac2c19]"
                >
                  <span className="material-symbols-outlined text-base text-[#ac2c19]">store</span>
                  Chuyển sang Kênh Người Bán
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
