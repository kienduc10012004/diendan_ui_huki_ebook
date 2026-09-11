import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuSections = [
    {
      group: 'TỔNG QUAN HỆ THỐNG',
      items: [
        { label: 'Bảng Điều Hành Sàn', to: '/admin/dashboard', icon: 'dashboard' }
      ]
    },
    {
      group: 'ĐỐI TÁC & NXB',
      items: [
        { label: 'Quản Lý Nhà Xuất Bản', to: '/admin/publishers', icon: 'domain', count: '1.024' },
        { label: 'Duyệt Đăng Ký Mới', to: '/admin/leads', icon: 'group_add', count: '18', badgeColor: 'bg-amber-500' }
      ]
    },
    {
      group: 'NỘI DUNG & BẢN QUYỀN',
      items: [
        { label: 'Hàng Chờ Kiểm Duyệt', to: '/admin/tasks', icon: 'verified', count: '12', badgeColor: 'bg-rose-500' },
        { label: 'Kho Bản Quyền DRM', to: '/admin/drm', icon: 'security', count: '43.2k' }
      ]
    },
    {
      group: 'ĐỘC GIẢ & HỘI VIÊN',
      items: [
        { label: 'Danh Sách Bạn Đọc', to: '/admin/users', icon: 'groups' }
      ]
    },
    {
      group: 'TÀI CHÍNH & ĐƠN HÀNG',
      items: [
        { label: 'Đối Soát Doanh Thu', to: '/admin/deals', icon: 'payments', count: '540' },
        { label: 'Báo Cáo Phân Tích', to: '/admin/reports', icon: 'monitoring' }
      ]
    },
    {
      group: 'MARKETING & SỰ KIỆN',
      items: [
        { label: 'Banner & Flash Deal', to: '/admin/automation', icon: 'campaign' },
        { label: 'Lịch Trình Toàn Sàn', to: '/admin/calendar', icon: 'calendar_month' }
      ]
    },
    {
      group: 'HẠ TẦNG KỸ THUẬT',
      items: [
        { label: 'Cổng Tích Hợp DRM', to: '/admin/integrations', icon: 'hub' },
        { label: 'Cài Đặt Hệ Thống', to: '/admin/settings', icon: 'settings' },
        { label: 'Hỗ Trợ & Khiếu Nại', to: '/admin/support', icon: 'support_agent' }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/admin/tasks?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="h-screen w-full bg-white text-[#1E293B] flex flex-col font-sans antialiased overflow-hidden selection:bg-[#00875A] selection:text-white">
      
      {/* 1. TOP APP BAR / HEADER (FULL WIDTH EDGE-TO-EDGE) */}
      <header className="h-16 border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 shrink-0 bg-white z-30">
        
        {/* Left: Window Controls & Root Brand */}
        <div className="flex items-center gap-4">
          {/* macOS Window Dots */}
          <div className="hidden sm:flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>

          {/* Logo & Portal Identity */}
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#003B2B] to-[#00875A] flex items-center justify-center text-white shadow-xs font-black text-base">
              H
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-editorial text-base font-bold text-gray-900 leading-tight tracking-tight">
                  HUKI SUPER ADMIN
                </span>
                <span className="bg-[#00875A] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded tracking-wide">
                  ROOT
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                Ban Điều Hành Trung Ương Sàn HUKI
              </span>
            </div>
          </Link>

          {/* Global Search Bar */}
          <form onSubmit={handleSearch} className="relative hidden md:block w-72 lg:w-96 ml-4">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
            <input
              type="text"
              placeholder="Tìm kiếm NXB, mã ISBN, tác phẩm, bản quyền DRM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#00875A] focus:bg-white transition-all"
            />
          </form>
        </div>

        {/* Right: Date, DRM Status, Notification & Profile */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Date Filter */}
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold text-gray-700">
            <span className="material-symbols-outlined text-[16px] text-[#00875A]">calendar_month</span>
            <span>Tháng 6/2026</span>
            <span className="material-symbols-outlined text-[14px] text-gray-400">expand_more</span>
          </div>

          {/* Server Status Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EBF7F2] border border-[#BDE6D7] text-[11px] font-bold text-[#00875A]">
            <span className="w-2 h-2 rounded-full bg-[#00875A] animate-pulse"></span>
            <span>DRM Cluster: Hoạt động (99.99%)</span>
          </div>

          {/* Notification Bell */}
          <button className="relative w-9 h-9 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#EF4444] ring-2 ring-white"></span>
          </button>

          {/* Super Admin Profile */}
          <div className="flex items-center gap-2.5 pl-2 sm:border-l sm:border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Super Admin"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#00875A]/30"
            />
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-bold text-gray-900 leading-tight">Admin Trưởng Sàn</span>
              <span className="text-[10px] text-gray-500 font-medium">Head of Operations</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE (SIDEBAR + CONTENT OUTLET) */}
      <div className="flex-1 flex overflow-hidden w-full">
        
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside className={`
          w-72 border-r border-[#E2E8F0] bg-[#FAFBFD] p-4 flex flex-col justify-between shrink-0 overflow-y-auto select-none
          ${isMobileMenuOpen ? 'fixed inset-y-0 left-0 z-50 bg-white shadow-2xl block' : 'hidden lg:flex'}
        `}>
          <div className="space-y-4">
            {menuSections.map((sec, sIdx) => (
              <div key={sIdx}>
                <p className="px-3 text-[9.5px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">
                  {sec.group}
                </p>
                <div className="space-y-0.5">
                  {sec.items.map((item, iIdx) => {
                    const isActive = location.pathname === item.to || 
                      (item.to === '/admin/dashboard' && location.pathname === '/admin') ||
                      (item.to === '/admin/tasks' && location.pathname === '/admin/moderation') ||
                      (item.to === '/admin/publishers' && (location.pathname === '/admin/companies')) ||
                      (item.to === '/admin/users' && location.pathname === '/admin/contacts') ||
                      (item.to === '/admin/deals' && location.pathname === '/admin/finance') ||
                      (item.to === '/admin/automation' && location.pathname === '/admin/marketing');

                    return (
                      <Link
                        key={iIdx}
                        to={item.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group cursor-pointer
                          ${isActive 
                            ? 'bg-[#EBF7F2] text-[#00875A] font-bold shadow-2xs' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'}
                        `}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`material-symbols-outlined text-[19px] shrink-0 ${isActive ? 'text-[#00875A]' : 'text-gray-400 group-hover:text-gray-700'} transition-colors`}>
                            {item.icon}
                          </span>
                          <span className="truncate">{item.label}</span>
                        </div>

                        {item.count && (
                          <span className={`text-[9.5px] px-1.5 py-0.5 rounded-md font-bold shrink-0 ${
                            isActive 
                              ? 'bg-[#00875A] text-white' 
                              : `${item.badgeColor ? `${item.badgeColor} text-white` : 'bg-gray-200/70 text-gray-600'}`
                          }`}>
                            {item.count}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Switcher Links */}
          <div className="pt-4 mt-4 border-t border-gray-200/80 space-y-1.5">
            <Link
              to="/seller/dashboard"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:text-[#003B2B] hover:bg-emerald-50/70 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-gray-400">store</span>
                <span>Kênh Người Bán NXB</span>
              </div>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>

            <Link
              to="/"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                <span>Về Sàn HUKI Store</span>
              </div>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </aside>

        {/* MAIN CONTENT OUTLET */}
        <main className="flex-1 bg-[#F8FAFC] overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
