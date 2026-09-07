import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SellerSidebar() {
  const menuGroups = [
    {
      title: 'TỔNG QUAN',
      items: [
        { to: '/seller/dashboard', icon: 'dashboard', label: 'Bảng Điều Khiển' }
      ]
    },
    {
      title: 'BÁN HÀNG',
      items: [
        { to: '/seller/orders', icon: 'orders', label: 'Quản Lý Đơn Hàng', badge: '12' },
        { to: '/seller/product/create-hybrid', icon: 'add_box', label: 'Thêm Sản Phẩm Mới' },
        { to: '/seller/product/edit-hybrid', icon: 'edit_note', label: 'Sản Phẩm Đang Bán' },
        { to: '/seller/product/correction', icon: 'report_problem', label: 'Sản Phẩm Cần Sửa', badge: '3', badgeColor: 'bg-[#ba1a1a]' }
      ]
    },
    {
      title: 'CỔNG PHÁT HÀNH & DRM',
      items: [
        { to: '/seller/product/create-ebook', icon: 'menu_book', label: 'Ebook Kỹ Thuật Số' },
        { to: '/seller/product/create-physical', icon: 'inventory_2', label: 'Kho Sách Giấy' },
        { to: '/seller/edge-cases', icon: 'account_tree', label: 'Thư Viện Trạng Thái' }
      ]
    },
    {
      title: 'HỒ SƠ ĐỐI TÁC',
      items: [
        { to: '/seller/register', icon: 'badge', label: 'Hồ Sơ Doanh Nghiệp' },
        { to: '/seller', icon: 'handshake', label: 'Giới Thiệu Kênh B2B' }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#e8e5df] p-4 flex flex-col justify-between shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <div className="space-y-6">
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx}>
            <p className="text-[10px] font-bold tracking-wider text-[#8d706b] mb-2 px-3">{group.title}</p>
            <div className="space-y-1">
              {group.items.map((item, iIdx) => (
                <NavLink
                  key={iIdx}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#003b2b] text-white shadow-sm'
                        : 'text-[#17201f] hover:bg-[#f2fbf9] hover:text-[#003b2b]'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold text-white ${item.badgeColor || 'bg-[#ac2c19]'}`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-[#e8e5df] text-[11px] text-[#6b7280] text-center">
        HUKI Core DRM v3.4 Protected
      </div>
    </aside>
  );
}
