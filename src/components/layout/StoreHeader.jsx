import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import UserAvatar from '../common/UserAvatar';

export default function StoreHeader({ onToggleSidebar, onToggleMobileSidebar, isSidebarCollapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItemsCount } = useCart();
  const { user, isLoggedIn, logout, switchDemoAccount, hasRole } = useAuth();
  const { theme, setTheme, isDarkMode, toggleDarkMode, palettes, currentPalette } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const isCommunity = location.pathname.startsWith('/community');
  const isStore = !isCommunity && !location.pathname.startsWith('/seller');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--theme-surface,#ffffff)]/95 backdrop-blur-md border-b border-[var(--theme-border,#e8e5df)] shadow-xs shrink-0 transition-colors duration-200">
      {/* Top Utility Bar (h-[30px]) */}
      <div className="h-[30px] bg-[var(--theme-header-top,#003b2b)] text-[var(--theme-header-top-text,#ffffff)] text-[11px] px-4 md:px-8 flex items-center justify-between font-medium shrink-0 transition-colors duration-200">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-[var(--theme-header-top-accent,#94f5d6)]">verified_user</span>
            <span className="hidden sm:inline">Hệ sinh thái đọc Sách Thật &amp; Bản quyền số HUKI</span>
            <span className="sm:hidden font-semibold">HUKI EBOOK</span>
          </span>
          <span className="hidden sm:inline-block opacity-40">|</span>
          <span className="hidden md:flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[var(--theme-header-top-accent,#94f5d6)]">support_agent</span>
            Hotline: 1900 8866 (8:00 - 21:00)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={hasRole('seller') ? '/seller/dashboard' : '/seller'}
            className="hover:text-[var(--theme-header-top-accent,#94f5d6)] transition-colors flex items-center gap-1 font-semibold"
          >
            <span className="material-symbols-outlined text-[14px]">storefront</span>
            <span>Kênh Người Bán</span>
          </Link>
          <span className="opacity-40">|</span>
          <Link to="/reader" className="hover:text-[var(--theme-header-top-accent,#94f5d6)] transition-colors hidden sm:flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">download</span>
            <span>Tải App Huki</span>
          </Link>
          <span className="opacity-40 hidden sm:inline">|</span>
          <span className="text-[var(--theme-header-top-accent,#94f5d6)] font-semibold">VN</span>
        </div>
      </div>

      {/* Main Header Bar (h-[62px]) */}
      <div className="h-[62px] w-full pr-4 md:pr-6 pl-0 flex items-center justify-between gap-3 lg:gap-6 shrink-0">
        {/* Left: Sidebar Toggle & Brand Logo */}
        <div className="flex items-center">
          {/* Hamburger / Sidebar Toggle Button Box (68px width matches mini-rail center alignment) */}
          <div className="w-[56px] lg:w-[68px] flex items-center justify-center shrink-0">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  if (onToggleMobileSidebar) onToggleMobileSidebar();
                } else {
                  if (onToggleSidebar) onToggleSidebar();
                }
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container active:scale-95 transition-all cursor-pointer"
              title={isSidebarCollapsed ? 'Mở rộng menu điều hướng' : 'Thu gọn menu điều hướng'}
              aria-label="Toggle Sidebar Navigation"
            >
              <span className="material-symbols-outlined text-[22px] transition-transform duration-200">
                {isSidebarCollapsed ? 'menu' : 'menu_open'}
              </span>
            </button>
          </div>

          <Link to="/" className="flex items-center gap-2.5 group pr-2">
            <div className="w-10 h-10 rounded-xl bg-theme-primary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <span className="material-symbols-outlined text-xl">menu_book</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl md:text-2xl font-bold tracking-tight text-theme-primary leading-none">
                HUKI EBOOK
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#ac2c19] font-bold mt-0.5">
                Sách Số &amp; Sách In
              </span>
            </div>
          </Link>

          {/* Mode Tabs: Sàn TMĐT vs Mạng Xã Hội */}
          <div className="hidden xl:flex items-center bg-[var(--theme-secondary-subtle,#f2fbf9)] p-1 rounded-xl border border-[var(--theme-border,#e8e5df)] ml-2">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isStore
                  ? 'bg-[var(--theme-surface,#ffffff)] text-[var(--theme-primary,#003b2b)] shadow-xs border border-[var(--theme-border,#e8e5df)]'
                  : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`}
            >
              <span className="material-symbols-outlined text-base">storefront</span>
              Sàn TMĐT Sách
            </Link>
            <Link
              to="/community"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isCommunity
                  ? 'bg-[var(--theme-primary,#003b2b)] text-white shadow-xs'
                  : 'text-[var(--theme-text-muted,#6b7280)] hover:text-[var(--theme-text,#17201f)]'
              }`}
            >
              <span className="material-symbols-outlined text-base">groups</span>
              Mạng Xã Hội Độc Giả
            </Link>
          </div>
        </div>

        {/* Global Semantic Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl relative hidden md:block">
          <div className="flex items-center bg-[var(--theme-surface-subtle,#f8f6f1)] border border-[var(--theme-border,#e8e5df)] rounded-full px-3.5 py-1.5 focus-within:border-[var(--theme-accent,#ac2c19)] focus-within:bg-[var(--theme-surface,#ffffff)] focus-within:ring-2 focus-within:ring-[var(--theme-accent,#ac2c19)]/15 transition-all shadow-2xs">
            <span className="material-symbols-outlined text-[var(--theme-text-muted,#6b7280)] text-lg mr-2 shrink-0">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm tác phẩm, tác giả, ISBN, bài review..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-[var(--theme-text,#17201f)] placeholder-[var(--theme-text-muted,#6b7280)]"
            />
            <button
              type="submit"
              className="bg-[var(--theme-accent,#ac2c19)] text-white px-3.5 py-1 rounded-full text-xs font-semibold hover:bg-[var(--theme-accent-hover,#8e1404)] transition-colors ml-2 shrink-0 cursor-pointer"
            >
              Tìm
            </button>
          </div>
        </form>

        {/* Right Actions: Navigation, Cart & Profile / Auth */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <Link
            to="/books"
            className="hidden sm:flex items-center gap-1 text-xs md:text-sm font-semibold text-[var(--theme-text,#17201f)] hover:text-[var(--theme-accent,#ac2c19)] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-[var(--theme-secondary,#006953)]">category</span>
            <span>Khám Phá</span>
          </Link>

          {isLoggedIn && <Link
            to="/library"
            className="hidden sm:flex items-center gap-1 text-xs md:text-sm font-semibold text-[var(--theme-text,#17201f)] hover:text-[var(--theme-accent,#ac2c19)] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-[var(--theme-secondary,#006953)]">local_library</span>
            <span>Tủ Sách</span>
          </Link>}

          {/* Quick Reading Theme Toggle Button */}
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-xl text-[var(--theme-primary,#003b2b)] bg-[var(--theme-secondary-subtle,#f2fbf9)] hover:bg-[var(--theme-primary,#003b2b)] hover:text-white border border-[var(--theme-border,#e8e5df)] hover:border-[var(--theme-primary,#003b2b)] transition-all cursor-pointer flex items-center justify-center"
              title={`Giao diện đọc: ${currentPalette.name}`}
              aria-label="Chọn màu chủ đề đọc sách"
            >
              <span className="material-symbols-outlined text-xl">palette</span>
            </button>

            {showThemeMenu && (
              <div
                className="absolute right-0 mt-2 w-72 bg-[var(--theme-surface,#ffffff)] rounded-2xl shadow-xl border border-[var(--theme-border,#e8e5df)] p-3 z-50 text-xs animate-fade-in-up"
                onMouseLeave={() => setShowThemeMenu(false)}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--theme-border,#e8e5df)]">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-[var(--theme-text,#17201f)]">
                    <span className="material-symbols-outlined text-base text-[var(--theme-primary,#003b2b)]">palette</span>
                    <span>Reading Theme</span>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--theme-primary,#003b2b)] bg-[var(--theme-secondary-subtle,#e6f4f0)] px-2 py-0.5 rounded-full">
                    {currentPalette.name}
                  </span>
                </div>

                <div className="space-y-1 max-h-64 overflow-y-auto custom-scroll pr-0.5">
                  {palettes.map((p) => {
                    const isSelected = theme === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setTheme(p.id);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[var(--theme-secondary-subtle,#e6f4f0)] text-[var(--theme-primary,#003b2b)] ring-1 ring-[var(--theme-primary,#003b2b)]/40 font-bold shadow-2xs'
                            : 'text-[var(--theme-text,#17201f)] hover:bg-black/5 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* 4 Semantic Role Preview Circles */}
                          <div className="flex items-center -space-x-1 shrink-0">
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                              style={{ backgroundColor: p.colors.background }}
                              title={`Background: ${p.colors.background}`}
                            />
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                              style={{ backgroundColor: p.colors.surface }}
                              title={`Surface: ${p.colors.surface}`}
                            />
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                              style={{ backgroundColor: p.colors.secondary }}
                              title={`Secondary: ${p.colors.secondary}`}
                            />
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                              style={{ backgroundColor: p.colors.primary }}
                              title={`Primary: ${p.colors.primary}`}
                            />
                          </div>
                          <span className="truncate text-left">{p.name}</span>
                        </div>

                        {isSelected && (
                          <span className="material-symbols-outlined text-base text-[var(--theme-primary,#003b2b)] font-bold shrink-0">
                            check_circle
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between px-2.5 py-2 mt-2 pt-2 border-t border-[var(--theme-border,#e8e5df)] font-medium text-[var(--theme-text,#17201f)]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[var(--theme-text-muted,#6b7280)]">
                      {isDarkMode ? 'dark_mode' : 'light_mode'}
                    </span>
                    <span>Chế độ ban đêm</span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleDarkMode}
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                      isDarkMode ? 'bg-[var(--theme-primary,#003b2b)]' : 'bg-gray-300'
                    }`}
                    aria-label="Chuyển đổi Dark mode"
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-4' : ''}`} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Messenger / Tin nhắn & Trò chuyện */}
          <Link
            to="/chat"
            className={`relative p-2 rounded-xl transition-all flex items-center justify-center group ${
              location.pathname.startsWith('/chat') || location.pathname.startsWith('/messages')
                ? 'bg-[var(--theme-primary,#003b2b)] text-white shadow-xs'
                : 'hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-text,#17201f)] border border-transparent hover:border-[var(--theme-border,#e8e5df)]'
            }`}
            title="Tin nhắn & Trò chuyện"
            aria-label="Tin nhắn & Trò chuyện"
          >
            <span className={`material-symbols-outlined text-2xl transition-colors ${
              location.pathname.startsWith('/chat') || location.pathname.startsWith('/messages')
                ? 'text-white'
                : 'group-hover:text-[var(--theme-primary,#003b2b)]'
            }`}>
              chat
            </span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.2 min-w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-xs animate-pulse">
              1
            </span>
          </Link>

          {/* Cart Icon with Live Counter */}
          <Link
            to="/cart"
            className="relative p-2 rounded-xl hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-text,#17201f)] border border-transparent hover:border-[var(--theme-border,#e8e5df)] transition-all"
            title="Xem giỏ hàng"
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--theme-accent,#ac2c19)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {totalItemsCount}
              </span>
            )}
          </Link>

          {/* User Profile or Login/Register Buttons */}
          {isLoggedIn && user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-black/5 transition-colors border border-[var(--theme-border,#e8e5df)] cursor-pointer"
                aria-expanded={showUserMenu}
                aria-label="Menu tài khoản"
              >
                <UserAvatar src={user?.avatar} name={user?.name || "Khách"} size="w-8 h-8" />
                <span className="hidden 2xl:inline text-xs font-bold text-[var(--theme-text,#17201f)] pr-1.5 truncate max-w-[120px]">
                  {user?.name || "Khách"}
                </span>
              </button>

              {showUserMenu && (
                <div
                  className="absolute right-0 mt-2 w-72 bg-[var(--theme-surface,#ffffff)] rounded-2xl shadow-xl border border-[var(--theme-border,#e8e5df)] p-2 z-50 text-xs animate-fade-in-up"
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <div className="px-3 py-2.5 border-b border-[var(--theme-border,#e8e5df)] mb-1 bg-[var(--theme-surface-subtle,#f9fbfb)] rounded-xl">
                    <p className="font-bold text-[var(--theme-text,#17201f)] text-sm truncate">{user?.name || "Khách Hàng"}</p>
                    <p className="text-[11px] text-[var(--theme-text-muted,#6b7280)] truncate">{user?.email}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-[var(--theme-accent,#ac2c19)] font-bold text-[11px]">{user?.role || "Hội viên Gold"}</span>
                      <span className="text-[10px] bg-[#fea619]/20 text-[#684000] px-1.5 py-0.5 rounded font-bold">
                        🔥 {user?.streakDays || 14} ngày
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-text,#17201f)] font-medium"
                  >
                    <span className="material-symbols-outlined text-base text-[var(--theme-secondary,#006953)]">account_circle</span>
                    <span>Hồ sơ cá nhân &amp; Streak</span>
                  </Link>

                  <Link
                    to="/library"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-text,#17201f)] font-medium"
                  >
                    <span className="material-symbols-outlined text-base text-[var(--theme-secondary,#006953)]">auto_stories</span>
                    <span>Tủ sách của tôi</span>
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-text,#17201f)] font-medium"
                  >
                    <span className="material-symbols-outlined text-base text-[var(--theme-secondary,#006953)]">local_shipping</span>
                    <span>Lịch sử đơn hàng</span>
                  </Link>

                  <Link
                    to="/wallet"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-text,#17201f)] font-medium"
                  >
                    <span className="material-symbols-outlined text-base text-[var(--theme-secondary,#006953)]">account_balance_wallet</span>
                    <span>Ví HUKI Xu &amp; Ưu Đãi</span>
                  </Link>

                  <Link
                    to={hasRole('seller') ? '/seller/dashboard' : '/seller/register'}
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] text-[var(--theme-accent,#ac2c19)] font-bold"
                  >
                    <span className="material-symbols-outlined text-base text-[var(--theme-accent,#ac2c19)]">store</span>
                    <span>{hasRole('seller') ? 'Kênh Người Bán & DRM' : 'Đăng ký Người Bán'}</span>
                  </Link>

                  {/* ---------------------------------------------------- */}
                  {/* READING THEME / COLOR PALETTES PERSONALIZATION SECTION */}
                  {/* ---------------------------------------------------- */}
                  <div className="border-t border-[var(--theme-border,#e8e5df)] my-1.5 pt-1.5">
                    <div className="px-2.5 py-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[var(--theme-text-muted,#6b7280)] uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[14px] text-[var(--theme-primary,#003b2b)]">palette</span>
                        <span>Giao Diện Đọc &amp; Màu Sắc</span>
                      </div>
                      <span className="text-[10px] font-bold text-[var(--theme-primary,#003b2b)] bg-[var(--theme-secondary-subtle,#e6f4f0)] px-2 py-0.5 rounded-full">
                        {currentPalette.name}
                      </span>
                    </div>

                    {/* 8-Palette List with 4 Semantic Preview Circles */}
                    <div className="space-y-0.5 max-h-44 overflow-y-auto custom-scroll pr-0.5 my-1">
                      {palettes.map((p) => {
                        const isSelected = theme === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setTheme(p.id)}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-[11.5px] transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[var(--theme-secondary-subtle,#e6f4f0)] text-[var(--theme-primary,#003b2b)] ring-1 ring-[var(--theme-primary,#003b2b)]/30 font-bold shadow-2xs'
                                : 'text-[var(--theme-text,#17201f)] hover:bg-black/5 font-medium'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {/* 4 Semantic Role Preview Circles */}
                              <div className="flex items-center -space-x-1 shrink-0">
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                                  style={{ backgroundColor: p.colors.background }}
                                  title={`Background: ${p.colors.background}`}
                                />
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                                  style={{ backgroundColor: p.colors.surface }}
                                  title={`Surface: ${p.colors.surface}`}
                                />
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                                  style={{ backgroundColor: p.colors.secondary }}
                                  title={`Secondary: ${p.colors.secondary}`}
                                />
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs shrink-0"
                                  style={{ backgroundColor: p.colors.primary }}
                                  title={`Primary: ${p.colors.primary}`}
                                />
                              </div>
                              <span className="truncate text-left">{p.name}</span>
                            </div>

                            {isSelected && (
                              <span className="material-symbols-outlined text-[15px] text-[var(--theme-primary,#003b2b)] font-bold shrink-0">
                                check_circle
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Dark Mode Toggle */}
                    <div className="flex items-center justify-between px-2.5 py-1.5 border-t border-[var(--theme-border,#e8e5df)]/60 text-[11.5px] font-medium text-[var(--theme-text,#17201f)]">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[var(--theme-text-muted,#6b7280)]">
                          {isDarkMode ? 'dark_mode' : 'light_mode'}
                        </span>
                        <span>Chế độ ban đêm</span>
                      </div>
                      <button
                        type="button"
                        onClick={toggleDarkMode}
                        className={`w-8 h-5 rounded-full p-0.5 flex items-center transition-colors cursor-pointer ${
                          isDarkMode ? 'bg-[var(--theme-primary,#003b2b)]' : 'bg-gray-300'
                        }`}
                        aria-label="Chuyển đổi Dark mode"
                      >
                        <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-3.5' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-[var(--theme-border,#e8e5df)] my-1"></div>

                  {import.meta.env.DEV && <><div className="px-2 py-1 text-[10px] text-[var(--theme-text-muted,#6b7280)] font-bold uppercase tracking-wider">
                    Đổi Tài Khoản Mẫu:
                  </div></>}
                  <div className="grid grid-cols-2 gap-1 mb-1">
                    <button
                      type="button"
                      onClick={() => {
                        switchDemoAccount('reader');
                        setShowUserMenu(false);
                      }}
                      className="px-2 py-1 rounded-lg bg-[var(--theme-surface-subtle,#f8f6f1)] hover:bg-[var(--theme-primary,#003b2b)] hover:text-white text-[var(--theme-primary,#003b2b)] text-[11px] font-semibold text-left truncate transition-colors cursor-pointer"
                    >
                      Độc giả VIP
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        switchDemoAccount('seller');
                        setShowUserMenu(false);
                      }}
                      className="px-2 py-1 rounded-lg bg-[var(--theme-surface-subtle,#f8f6f1)] hover:bg-[var(--theme-accent,#ac2c19)] hover:text-white text-[var(--theme-accent,#ac2c19)] text-[11px] font-semibold text-left truncate transition-colors cursor-pointer"
                    >
                      NXB Alpha
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-red-50 text-[var(--theme-accent,#ac2c19)] font-bold text-left transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">logout</span>
                    <span>Đăng Xuất Tài Khoản</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--theme-primary,#003b2b)] border border-[var(--theme-primary,#003b2b)]/30 hover:bg-[var(--theme-secondary-subtle,#f2fbf9)] transition-all flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-base">login</span>
                <span>Đăng Nhập</span>
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[var(--theme-accent,#ac2c19)] hover:bg-[var(--theme-accent-hover,#8e1404)] transition-all shadow-xs flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-base">person_add</span>
                <span className="hidden sm:inline">Đăng Ký</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

