import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftRail() {
  const navItems = [
    { to: '/', icon: 'storefront', label: 'Sàn Sách Số' },
    { to: '/community', icon: 'groups', label: 'Mạng Xã Hội' },
    { to: '/books', icon: 'auto_stories', label: 'Khám Phá' },
    { to: '/library', icon: 'local_library', label: 'Tủ Sách' },
    { to: '/profile', icon: 'person', label: 'Hồ Sơ' },
    { to: '/seller/dashboard', icon: 'store', label: 'Kênh Người Bán' }
  ];

  return (
    <aside className="hidden md:flex flex-col items-center justify-between w-16 bg-white border-r border-[#e8e5df] py-4 shrink-0 h-[calc(100vh-64px)] sticky top-16 z-30">
      <div className="flex flex-col items-center gap-3 w-full px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 rounded-xl transition-all ${
                isActive
                  ? 'bg-[#003b2b] text-white shadow-md'
                  : 'text-[#6b7280] hover:bg-[#f2fbf9] hover:text-[#003b2b]'
              }`
            }
            title={item.label}
          >
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <NavLink
          to="/seller/edge-cases"
          className="w-10 h-10 rounded-lg flex items-center justify-center text-[#6b7280] hover:text-[#ac2c19] hover:bg-[#f2fbf9] transition-colors"
          title="Thư viện trạng thái & Edge cases"
        >
          <span className="material-symbols-outlined text-xl">grid_view</span>
        </NavLink>
      </div>
    </aside>
  );
}
