import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', to: '/admin/dashboard', icon: 'home' },
    { label: 'Leads', to: '/admin/leads', icon: 'group_add', count: '4.3k' },
    { label: 'Contacts', to: '/admin/contacts', icon: 'person_outline' },
    { label: 'Companies', to: '/admin/companies', icon: 'domain' },
    { label: 'Deals', to: '/admin/deals', icon: 'monetization_on', count: '540' },
    { label: 'Tasks', to: '/admin/tasks', icon: 'task_alt', count: '12' },
    { label: 'Calendar', to: '/admin/calendar', icon: 'calendar_today' },
    { label: 'Reports', to: '/admin/reports', icon: 'description' },
    { label: 'Automation', to: '/admin/automation', icon: 'hub' },
    { label: 'Integrations', to: '/admin/integrations', icon: 'link' }
  ];

  const bottomNavItems = [
    { label: 'Settings', to: '/admin/settings', icon: 'settings' },
    { label: 'Help & Support', to: '/admin/support', icon: 'help_outline' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // search handler
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* MAC-STYLE APP SHELL CONTAINER */}
      <div className="w-full max-w-[1680px] mx-auto p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm flex-1 flex flex-col overflow-hidden min-h-[92vh]">
          
          {/* TOP APP BAR / HEADER */}
          <header className="h-16 border-b border-[#F1F5F9] px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 bg-white/95 backdrop-blur-sm sticky top-0 z-30">
            {/* Left: Window Dots & Logo */}
            <div className="flex items-center gap-4">
              {/* macOS Window Controls */}
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></span>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100"
              >
                <span className="material-symbols-outlined text-[22px]">menu</span>
              </button>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative w-48 sm:w-80 md:w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
                <input
                  type="text"
                  placeholder="Search contacts, deals, companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                />
              </form>
            </div>

            {/* Right: Date Range, Notification & Profile */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Date Filter */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold text-gray-700">
                <span className="material-symbols-outlined text-[16px] text-gray-500">calendar_month</span>
                <span>Jun 1, 2026 – Jun 30, 2026</span>
                <span className="material-symbols-outlined text-[14px] text-gray-400">expand_more</span>
              </div>

              {/* Notification Bell with Badge */}
              <button className="relative w-9 h-9 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#EF4444] ring-2 ring-white"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-2.5 pl-2 sm:border-l sm:border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Hi, Alex"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-500/30"
                />
                <div className="hidden xl:flex flex-col text-left">
                  <span className="text-xs font-bold text-gray-900 leading-tight">Hi, Alex</span>
                  <span className="text-[10px] text-gray-500 font-medium">Sales &amp; Ops Manager</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-gray-400 hidden xl:inline">expand_more</span>
              </div>
            </div>
          </header>

          {/* MAIN WORKSPACE BODY (SIDEBAR + CONTENT) */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* LEFT SIDEBAR (STICKY NAVIGATION) */}
            <aside className={`
              w-60 border-r border-[#F1F5F9] bg-[#FAFBFD] p-4 flex flex-col justify-between shrink-0
              ${isMobileMenuOpen ? 'fixed inset-y-0 left-0 z-50 bg-white shadow-2xl block' : 'hidden lg:flex'}
            `}>
              {/* Navigation Links */}
              <div className="space-y-1">
                <div className="px-3 py-1 text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  CRM Management
                </div>

                {navItems.map((item, idx) => {
                  const isActive = location.pathname === item.to || (item.to === '/admin/dashboard' && (location.pathname === '/admin' || location.pathname === '/admin/'));
                  return (
                    <Link
                      key={idx}
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group
                        ${isActive 
                          ? 'bg-[#EBF7F2] text-[#00875A] font-bold shadow-2xs' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-[19px] ${isActive ? 'text-[#00875A]' : 'text-gray-400 group-hover:text-gray-700'} transition-colors`}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </div>

                      {item.count && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                          isActive 
                            ? 'bg-[#00875A] text-white' 
                            : 'bg-gray-200/70 text-gray-600 group-hover:bg-gray-200'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Support & Settings */}
              <div className="pt-4 border-t border-gray-200/80 space-y-1">
                {bottomNavItems.map((item, idx) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={idx}
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all group
                        ${isActive 
                          ? 'bg-emerald-50 text-emerald-800 font-bold' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'}
                      `}
                    >
                      <span className="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-gray-700 transition-colors">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}

                <Link
                  to="/"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors mt-2"
                >
                  <span className="material-symbols-outlined text-[18px]">storefront</span>
                  <span>Về Sàn HUKI Store</span>
                </Link>
              </div>
            </aside>

            {/* MAIN CONTENT OUTLET */}
            <main className="flex-1 bg-[#F8FAFC] overflow-y-auto p-4 sm:p-6 lg:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
