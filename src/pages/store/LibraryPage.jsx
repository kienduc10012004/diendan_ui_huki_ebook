import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function LibraryPage() {
  return (
    <div className="stitch-page bg-[#F4F7F6] text-huki-charcoal font-sans antialiased overflow-hidden h-screen w-screen flex select-none">
      <style>{".material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;\n      font-size: 20px;\n      line-height: 1;\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .material-symbols-outlined.fill {\n      font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20;\n    }\n    /* Custom scrollbars */\n    ::-webkit-scrollbar {\n      width: 4px;\n      height: 4px;\n    }\n    ::-webkit-scrollbar-track {\n      background: transparent;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: #D8E0DD;\n      border-radius: 4px;\n    }"}</style>




<aside className="w-[68px] h-full bg-[#FAFCFB] border-r border-[#E5EBE8] flex flex-col items-center py-4 justify-between z-30 shrink-0">

<div className="flex flex-col items-center w-full gap-2">

<button className="w-10 h-10 rounded-[10px] bg-huki-green-subtle text-huki-green flex items-center justify-center border border-[#CFE5DD] shadow-sm hover:bg-huki-green-light transition-all duration-150 group" title="Workspace &amp; Code">
<span className="material-symbols-outlined text-[20px] font-medium">code</span>
</button>

<div className="h-6"></div>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150 group" title="Sàn Sách Số">
<span className="material-symbols-outlined text-[20px]">storefront</span>
</button>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Diễn Đàn Đọc">
<span className="material-symbols-outlined text-[20px]">forum</span>
</button>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Tủ Sách Cá Nhân">
<span className="material-symbols-outlined text-[20px]">local_library</span>
</button>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Khám Phá Sách">
<span className="material-symbols-outlined text-[20px]">menu_book</span>
</button>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-orange hover:bg-white flex items-center justify-center transition-all duration-150" title="Thử Thách Đọc">
<span className="material-symbols-outlined text-[20px]">local_fire_department</span>
</button>

<div className="w-8 h-[1px] bg-[#E5EBE8] my-2"></div>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Thống Kê Đọc">
<span className="material-symbols-outlined text-[20px]">show_chart</span>
</button>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="CLB Bạn Đọc">
<span className="material-symbols-outlined text-[20px]">group</span>
</button>

<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Kênh NXB &amp; Tác Giả">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
</button>
</div>

<div className="flex flex-col items-center w-full gap-2">
<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Ứng Dụng Đọc &amp; Thiết Bị">
<span className="material-symbols-outlined text-[20px]">apps</span>
</button>
<button className="w-10 h-10 rounded-[10px] text-huki-muted hover:text-huki-charcoal hover:bg-white flex items-center justify-center transition-all duration-150" title="Cài Đặt Hệ Thống">
<span className="material-symbols-outlined text-[20px]">settings</span>
</button>
</div>
</aside>



<aside className="w-[238px] h-full bg-[#FFFFFF] border-r border-[#E5EBE8] flex flex-col justify-between z-20 shrink-0">

<div className="flex flex-col h-full overflow-y-auto px-[14px]">

<div className="h-[66px] flex items-center gap-2.5 shrink-0 border-b border-[#F0F4F2] mb-3">

<div className="w-8 h-8 rounded-[8px] bg-huki-green flex items-center justify-center text-white shadow-sm shadow-huki-green/20">
<span className="material-symbols-outlined text-[19px]">auto_stories</span>
</div>
<div className="flex items-baseline">
<span className="font-bold text-[17px] tracking-tight text-[#142621]">Huki</span>
<span className="font-medium text-[17px] tracking-tight text-huki-green ml-[1px]">Ebook</span>
<span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#EBF5F1] text-huki-green border border-[#D5EBE2]">PRO</span>
</div>
</div>

<div className="flex flex-col gap-[3px]">

<div className="flex items-center gap-3 px-3 h-[44px] rounded-[10px] bg-huki-green-subtle text-huki-green font-semibold text-[14.5px] cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[20px] text-huki-green">storefront</span>
<span className="tracking-tight">Sàn Sách Số</span>
</div>
<div className="h-2"></div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#2C3834] hover:bg-[#F6FAF8] font-medium text-[14px] cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[19px] text-[#7A8B86] group-hover:text-huki-green">forum</span>
<span>Diễn Đàn Đọc</span>
</div>
<span className="material-symbols-outlined text-[18px] text-[#A5B4AF]">expand_more</span>
</div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#1E2C28] hover:bg-[#F6FAF8] font-semibold text-[14px] cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[19px] text-huki-green">local_library</span>
<span>Tủ Sách Của Tôi</span>
</div>
<span className="material-symbols-outlined text-[18px] text-[#556963] rotate-180 transition-transform">expand_more</span>
</div>

<div className="relative ml-[22px] pl-[14px] flex flex-col py-1 space-y-1">

<div className="absolute left-0 top-1 bottom-1 w-[1.5px] bg-[#E3ECE8] rounded-full"></div>
<a className="h-[34px] flex items-center justify-between text-[13.5px] text-[#61736D] hover:text-huki-green hover:font-medium transition-colors pr-2" href="#">
<span>Đang Đọc <span className="text-[12px] text-[#8E9F9A]">(Progress)</span></span>
<span className="text-[11px] font-medium bg-[#F0F5F3] text-[#778B85] px-1.5 py-0.5 rounded">3</span>
</Link>
<a className="h-[34px] flex items-center justify-between text-[13.5px] text-[#61736D] hover:text-huki-green hover:font-medium transition-colors pr-2" href="#">
<span>Muốn Đọc <span className="text-[12px] text-[#8E9F9A]">(Want)</span></span>
<span className="text-[11px] font-medium bg-[#F0F5F3] text-[#778B85] px-1.5 py-0.5 rounded">18</span>
</Link>
<a className="h-[34px] flex items-center justify-between text-[13.5px] text-[#61736D] hover:text-huki-green hover:font-medium transition-colors pr-2" href="#">
<span>Đã Đọc Xong <span className="text-[12px] text-[#8E9F9A]">(Done)</span></span>
<span className="text-[11px] font-medium bg-[#F0F5F3] text-[#778B85] px-1.5 py-0.5 rounded">25</span>
</Link>
<a className="h-[34px] flex items-center justify-between text-[13.5px] text-[#61736D] hover:text-huki-green hover:font-medium transition-colors pr-2" href="#">
<span>Sách Đã Mua</span>
<span className="text-[11px] font-semibold text-huki-green bg-[#E6F4EF] px-1.5 py-0.5 rounded">15</span>
</Link>
</div>

<div className="mt-2 flex items-center gap-3 px-3 h-[40px] rounded-[8px] text-[#2C3834] hover:bg-[#F6FAF8] font-medium text-[14px] cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-[19px] text-[#E98A15]">local_fire_department</span>
<span className="tracking-tight">Thử Thách 2026</span>
<span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 bg-[#FFF4E5] text-[#D97706] rounded-full border border-[#FDE68A]">HOT</span>
</div>

<div className="mt-6 mb-1 px-3">
<span className="text-[11px] font-bold tracking-wider text-[#8C9E98] uppercase">Hệ Thống Xuất Bản</span>
</div>

<div className="flex items-center gap-3 px-3 h-[40px] rounded-[8px] text-[#41534E] hover:bg-[#F6FAF8] font-medium text-[14px] cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-[19px] text-[#7A8B86] group-hover:text-huki-green">query_stats</span>
<span>Thống Kê Đọc</span>
</div>

<div className="flex items-center gap-3 px-3 h-[40px] rounded-[8px] text-[#41534E] hover:bg-[#F6FAF8] font-medium text-[14px] cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-[19px] text-[#7A8B86] group-hover:text-huki-green">groups</span>
<span>CLB Bạn Đọc</span>
</div>

<div className="flex items-center gap-3 px-3 h-[40px] rounded-[8px] text-[#41534E] hover:bg-[#F6FAF8] font-medium text-[14px] cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-[19px] text-[#7A8B86] group-hover:text-huki-green">account_balance</span>
<span>Kênh NXB &amp; Tác Giả</span>
</div>
</div>
</div>

<div className="p-[14px] border-t border-[#F0F4F2] flex flex-col gap-1 shrink-0">
<div className="flex items-center gap-3 px-3 h-[38px] rounded-[8px] text-[#556963] hover:bg-[#F6FAF8] font-medium text-[13.5px] cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[18px] text-[#7A8B86]">grid_view</span>
<span>Tích Hợp Sách Số</span>
</div>
<div className="flex items-center gap-3 px-3 h-[38px] rounded-[8px] text-[#556963] hover:bg-[#F6FAF8] font-medium text-[13.5px] cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[18px] text-[#7A8B86]">settings</span>
<span>Cài Đặt</span>
</div>
</div>
</aside>



<aside className="w-[250px] h-full bg-[#FAFCFB] border-r border-[#E5EBE8] flex flex-col justify-between z-10 shrink-0 px-4 py-4">
<div className="flex flex-col h-full overflow-y-auto">

<div className="relative w-full mb-4">
<div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#8A9B95]">
<span className="material-symbols-outlined text-[17px]">search</span>
</div>
<input className="w-full h-[38px] pl-8 pr-3 bg-white border border-[#DEE5E2] rounded-[8px] text-[13px] text-[#1E2C28] placeholder-[#90A29C] focus:outline-none focus:border-huki-green focus:ring-1 focus:ring-huki-green/30 transition-all" placeholder="Tìm kiếm nhanh trong tủ..." type="text" />
</div>

<div className="flex items-center justify-between pt-1 pb-3 mb-2">
<h2 className="font-serif font-bold text-[21px] text-[#172622] tracking-tight">Tủ Sách &amp; Phân Loại</h2>
<button className="w-6 h-6 rounded flex items-center justify-center text-[#8C9E98] hover:text-[#2C3834] hover:bg-[#E8F0ED] transition-colors" title="Đóng panel">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>

<div className="flex flex-col gap-[3px]">

<div className="flex items-center justify-between px-3 h-[42px] rounded-[10px] bg-huki-green-subtle text-huki-green font-semibold text-[13.5px] cursor-pointer transition-colors border border-[#CFE5DD]/60">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-huki-green">menu_book</span>
<span>Tất Cả Sách</span>
</div>
<span className="text-[12.5px] font-bold text-huki-green bg-white px-2 py-0.5 rounded-md shadow-2xs border border-[#CFE5DD]">48</span>
</div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#33443F] hover:bg-white font-medium text-[13.5px] cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#16A34A] group-hover:scale-105 transition-transform">schedule</span>
<span>Đang Đọc Dở</span>
</div>
<span className="text-[12px] font-medium text-[#7A8F88] group-hover:text-huki-charcoal">3</span>
</div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#33443F] hover:bg-white font-medium text-[13.5px] cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#EAB308] group-hover:scale-105 transition-transform">star</span>
<span>Sách Yêu Thích</span>
</div>
<span className="text-[12px] font-medium text-[#7A8F88] group-hover:text-huki-charcoal">12</span>
</div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#33443F] hover:bg-white font-medium text-[13.5px] cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#EA580C] group-hover:scale-105 transition-transform">bookmark</span>
<span>Muốn Đọc</span>
</div>
<span className="text-[12px] font-medium text-[#7A8F88] group-hover:text-huki-charcoal">18</span>
</div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#33443F] hover:bg-white font-medium text-[13.5px] cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#0D9488] group-hover:scale-105 transition-transform">check_circle</span>
<span>Đã Đọc Xong</span>
</div>
<span className="text-[12px] font-medium text-[#7A8F88] group-hover:text-huki-charcoal">25</span>
</div>

<div className="flex items-center justify-between px-3 h-[40px] rounded-[8px] text-[#33443F] hover:bg-white font-medium text-[13.5px] cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[19px] text-[#6366F1] group-hover:scale-105 transition-transform">shopping_bag</span>
<span>Ebook Đã Mua</span>
</div>
<span className="text-[12px] font-medium text-[#7A8F88] group-hover:text-huki-charcoal">15</span>
</div>
</div>

<div className="mt-8 pt-3 border-t border-[#EAEFECE]">
<div className="flex items-center justify-between px-1 mb-3">
<span className="text-[11px] font-bold tracking-wider text-[#8A9C96] uppercase">Nhãn Màu Cá Nhân</span>
<button className="w-5 h-5 rounded hover:bg-[#E2ECE8] flex items-center justify-center text-[#556963] transition-colors" title="Thêm nhãn mới">
<span className="material-symbols-outlined text-[17px]">add</span>
</button>
</div>

<div className="p-3 bg-white/70 border border-dashed border-[#D6E0DC] rounded-[8px] text-center mt-2">
<p className="text-[11.5px] text-[#7E918B] leading-relaxed">
            Nhấn <span className="font-semibold text-huki-green">+</span> để tạo nhãn màu tùy chỉnh phân loại sách theo dự án hoặc tâm trạng.
          </p>
</div>
</div>
</div>

<div className="pt-3 border-t border-[#EAEFECE] flex items-center justify-between text-[11.5px] text-[#7A8D87]">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-huki-green"></span>
        Đã đồng bộ đám mây
      </span>
<span className="font-medium text-[#5B6D67]">48 / 500 sách</span>
</div>
</aside>



<main className="flex-1 h-full overflow-y-auto bg-[#F5F8F7] flex flex-col">

<header className="h-[66px] bg-white border-b border-[#E5EBE8] px-8 flex items-center justify-between shrink-0">

<div className="flex items-center gap-3">
<div className="flex items-center text-[13.5px] text-[#758782] gap-1.5 font-medium">
<span>Tủ sách của tôi</span>
<span className="material-symbols-outlined text-[16px] text-[#A2B3AE]">chevron_right</span>
<span className="text-huki-charcoal font-semibold">Tất cả sách (48 cuốn)</span>
</div>
</div>

<div className="flex items-center gap-4">

<div className="flex items-center bg-[#F0F5F3] p-1 rounded-lg border border-[#DCE8E3]">
<button className="p-1 rounded bg-white text-huki-green shadow-xs">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
<button className="p-1 rounded text-[#7B8D88] hover:text-huki-charcoal">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
</div>

<div className="flex items-center gap-2 text-[13px] text-[#4A5D57] bg-white border border-[#DCE5E1] px-3 py-1.5 rounded-lg shadow-2xs font-medium cursor-pointer">
<span>Sắp xếp: <strong className="text-huki-charcoal font-semibold">Đọc gần đây</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>

<div className="flex items-center gap-2 pl-3 border-l border-[#E5ECE9]">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-huki-green/20" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<div className="text-left hidden xl:block">
<div className="text-[13px] font-semibold text-huki-charcoal leading-tight">Minh Trí</div>
<div className="text-[11px] text-huki-green font-medium">Hội viên VIP</div>
</div>
</div>
</div>
</header>

<div className="p-8 space-y-6">

<div className="w-full rounded-2xl bg-gradient-to-r from-[#005740] via-[#006B4F] to-[#0D4B39] text-white p-7 relative overflow-hidden shadow-sm">

<div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 flex items-center justify-end pr-10 pointer-events-none">
<span className="material-symbols-outlined text-[240px]">menu_book</span>
</div>
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-white/90 text-[12px] font-medium backdrop-blur-xs mb-3 border border-white/20">
<span className="material-symbols-outlined text-[15px] text-[#FBBF24]">auto_awesome</span>
<span>Mục tiêu đọc sách năm 2026</span>
</div>
<h1 className="font-serif text-[28px] font-bold tracking-tight text-white mb-2 leading-tight">
            Bạn đã hoàn thành 25 / 40 cuốn sách trong năm
          </h1>
<p className="text-white/80 text-[14px] leading-relaxed mb-5">
            Tiếp tục giữ vững nhịp độ 30 phút mỗi ngày. Cuốn sách “Sức Mạnh Của Thói Quen” đang đạt 68% tiến độ đọc.
          </p>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white text-huki-green font-semibold text-[13.5px] rounded-lg shadow-sm hover:bg-[#F3F8F6] transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
              Đọc tiếp Chương 4
            </button>
<button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium text-[13.5px] rounded-lg transition-colors border border-white/20">
              Chi tiết mục tiêu
            </button>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<div>
<h3 className="font-serif font-bold text-[20px] text-huki-charcoal">Tất cả sách trong tủ</h3>
<p className="text-[13px] text-[#71857F]">Đang hiển thị 48 cuốn sách điện tử có bản quyền DRM HUKI</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[12.5px] text-[#697D77]">Lọc định dạng:</span>
<span className="px-2.5 py-1 bg-white border border-[#DCE4E1] rounded-md text-[12px] font-medium text-huki-green">EPUB (38)</span>
<span className="px-2.5 py-1 bg-white border border-[#DCE4E1] rounded-md text-[12px] font-medium text-[#677A75]">PDF (10)</span>
</div>
</div>

<div className="grid grid-cols-4 gap-5">

<div className="bg-white rounded-[14px] border border-[#E3ECE8] p-3.5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col">
<div className="w-full aspect-[2/3] bg-[#F2ECE4] rounded-[8px] overflow-hidden relative shadow-inner mb-3">
<img alt="Sức Mạnh Của Thói Quen" className="w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#006B4F] text-white text-[10.5px] font-bold">68%</span>
</div>
<div className="text-[11.5px] text-huki-orange font-semibold flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[14px] fill">star</span>
<span>4.9</span>
<span className="text-[#8B9D97] font-normal">(125)</span>
</div>
<h4 className="font-semibold text-[14px] text-huki-charcoal line-clamp-1 leading-snug">Sức Mạnh Của Thói Quen</h4>
<p className="text-[12px] text-[#728580] line-clamp-1 mt-0.5">Charles Duhigg</p>
<div className="mt-3 pt-2.5 border-t border-[#F0F5F3] flex items-center justify-between">
<span className="text-[11.5px] text-huki-green font-medium bg-[#EBF5F1] px-2 py-0.5 rounded">EPUB</span>
<span className="material-symbols-outlined text-[18px] text-[#8EA29C] hover:text-huki-green">more_vert</span>
</div>
</div>

<div className="bg-white rounded-[14px] border border-[#E3ECE8] p-3.5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col">
<div className="w-full aspect-[2/3] bg-[#F2ECE4] rounded-[8px] overflow-hidden relative shadow-inner mb-3">
<img alt="Atomic Habits" className="w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#006B4F] text-white text-[10.5px] font-bold">100%</span>
</div>
<div className="text-[11.5px] text-huki-orange font-semibold flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[14px] fill">star</span>
<span>5.0</span>
<span className="text-[#8B9D97] font-normal">(3.4k)</span>
</div>
<h4 className="font-semibold text-[14px] text-huki-charcoal line-clamp-1 leading-snug">Thay Đổi Tí Hon - Atomic Habits</h4>
<p className="text-[12px] text-[#728580] line-clamp-1 mt-0.5">James Clear</p>
<div className="mt-3 pt-2.5 border-t border-[#F0F5F3] flex items-center justify-between">
<span className="text-[11.5px] text-huki-green font-medium bg-[#EBF5F1] px-2 py-0.5 rounded">EPUB</span>
<span className="material-symbols-outlined text-[18px] text-[#8EA29C] hover:text-huki-green">more_vert</span>
</div>
</div>

<div className="bg-white rounded-[14px] border border-[#E3ECE8] p-3.5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col">
<div className="w-full aspect-[2/3] bg-[#F2ECE4] rounded-[8px] overflow-hidden relative shadow-inner mb-3">
<img alt="Tâm Lý Học Về Tiền" className="w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#E98A15] text-white text-[10.5px] font-bold">Muốn đọc</span>
</div>
<div className="text-[11.5px] text-huki-orange font-semibold flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[14px] fill">star</span>
<span>4.8</span>
<span className="text-[#8B9D97] font-normal">(980)</span>
</div>
<h4 className="font-semibold text-[14px] text-huki-charcoal line-clamp-1 leading-snug">Tâm Lý Học Về Tiền</h4>
<p className="text-[12px] text-[#728580] line-clamp-1 mt-0.5">Morgan Housel</p>
<div className="mt-3 pt-2.5 border-t border-[#F0F5F3] flex items-center justify-between">
<span className="text-[11.5px] text-[#61746F] font-medium bg-[#F0F4F2] px-2 py-0.5 rounded">PDF</span>
<span className="material-symbols-outlined text-[18px] text-[#8EA29C] hover:text-huki-green">more_vert</span>
</div>
</div>

<div className="bg-white rounded-[14px] border border-[#E3ECE8] p-3.5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col">
<div className="w-full aspect-[2/3] bg-[#F2ECE4] rounded-[8px] overflow-hidden relative shadow-inner mb-3">
<img alt="Đám Bị Ghét" className="w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<span className="absolute top-2 right-2 p-1 rounded-full bg-white/90 text-[#EF4444] shadow-xs">
<span className="material-symbols-outlined text-[14px] fill">favorite</span>
</span>
</div>
<div className="text-[11.5px] text-huki-orange font-semibold flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[14px] fill">star</span>
<span>4.9</span>
<span className="text-[#8B9D97] font-normal">(2.1k)</span>
</div>
<h4 className="font-semibold text-[14px] text-huki-charcoal line-clamp-1 leading-snug">Can Đảm Để Bị Ghét</h4>
<p className="text-[12px] text-[#728580] line-clamp-1 mt-0.5">Koga Fumitake, Kishimi Ichiro</p>
<div className="mt-3 pt-2.5 border-t border-[#F0F5F3] flex items-center justify-between">
<span className="text-[11.5px] text-huki-green font-medium bg-[#EBF5F1] px-2 py-0.5 rounded">EPUB</span>
<span className="material-symbols-outlined text-[18px] text-[#8EA29C] hover:text-huki-green">more_vert</span>
</div>
</div>
</div>
</div>
</main>



    </div>
  );
}
