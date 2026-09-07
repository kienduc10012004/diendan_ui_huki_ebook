import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function CatalogPage() {
  return (
    <div className="stitch-page bg-background text-on-surface antialiased min-h-screen font-body-md text-body-md flex">
      <style>{".material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n      display: inline-block;\n      vertical-align: middle;\n      line-height: 1;\n    }\n    .book-spine-shadow {\n      background: linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 4%, transparent 10%);\n    }\n    .custom-scroll::-webkit-scrollbar {\n      width: 4px;\n    }\n    .custom-scroll::-webkit-scrollbar-thumb {\n      background: #e0eae8;\n      border-radius: 4px;\n    }"}</style>


<aside className="w-[68px] bg-[#fbf9f4] border-r border-[#e8e5df] flex flex-col items-center py-5 shrink-0 fixed top-0 bottom-0 left-0 z-50">
<a className="w-10 h-10 rounded-xl bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm mb-8 transition-transform hover:scale-105" href="#">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</Link>
<nav className="flex flex-col items-center gap-4 flex-1">
<a className="group relative p-2.5 rounded-xl transition-all hover:bg-surface-container text-on-surface-variant flex items-center justify-center" href="#">
<span className="material-symbols-outlined text-[22px]">home</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface text-[11px] font-label-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">Trang chủ</span>
</Link>

<a className="group relative p-2.5 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-semibold flex items-center justify-center shadow-sm" href="#">
<span className="material-symbols-outlined text-[22px] fill-icon">storefront</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface text-[11px] font-label-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">Sàn TMĐT</span>
</Link>
<a className="group relative p-2.5 rounded-xl transition-all hover:bg-surface-container text-on-surface-variant flex items-center justify-center" href="#">
<span className="material-symbols-outlined text-[22px]">auto_stories</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface text-[11px] font-label-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">Thư viện của tôi</span>
</Link>
<a className="group relative p-2.5 rounded-xl transition-all hover:bg-surface-container text-on-surface-variant flex items-center justify-center" href="#">
<span className="material-symbols-outlined text-[22px]">forum</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface text-[11px] font-label-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">Diễn đàn đọc</span>
</Link>
<a className="group relative p-2.5 rounded-xl transition-all hover:bg-surface-container text-on-surface-variant flex items-center justify-center" href="#">
<span className="material-symbols-outlined text-[22px]">local_activity</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface text-[11px] font-label-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">Voucher &amp; Quà</span>
</Link>
</nav>
<div className="flex flex-col items-center gap-3 pt-4 border-t border-[#e8e5df] w-full">
<a className="p-2 text-on-surface-variant hover:text-tertiary transition-colors" href="#" title="Trợ giúp">
<span className="material-symbols-outlined text-[20px]">help_outline</span>
</Link>
<a className="p-2 text-on-surface-variant hover:text-tertiary transition-colors" href="#" title="Cài đặt">
<span className="material-symbols-outlined text-[20px]">settings</span>
</Link>
</div>
</aside>

<div className="flex-1 ml-[68px] min-w-0 flex flex-col">

<section className="h-[34px] bg-[#f2eee7] border-b border-[#e5e1d8] px-10 flex items-center justify-between text-[12px] font-label-md text-on-surface-variant">
<div className="flex items-center gap-6">
<a className="hover:text-tertiary transition-colors flex items-center gap-1.5" href="#">
<span className="material-symbols-outlined text-[14px]">store</span> Kênh người bán
        </Link>
<a className="hover:text-tertiary transition-colors flex items-center gap-1.5" href="#">
<span className="material-symbols-outlined text-[14px]">install_mobile</span> Tải app Huki Reader
        </Link>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-tertiary transition-colors" href="#">Chính sách giao hàng &amp; Ebook</Link>
<a className="hover:text-tertiary transition-colors" href="#">Hỗ trợ 24/7 (1900 6868)</Link>
<div className="flex items-center gap-2 pl-3 border-l border-[#d8d3c7]">
<span className="material-symbols-outlined text-[15px] text-tertiary">translate</span>
<span className="font-medium text-on-surface">Tiếng Việt</span>
</div>
</div>
</section>

<header className="h-[74px] bg-surface-container-lowest border-b border-[#e8e5df] px-10 flex items-center justify-between sticky top-0 z-40 shadow-sm">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 text-decoration-none" href="#">
<div className="w-8 h-8 rounded-lg bg-tertiary flex items-center justify-center text-on-tertiary">
<span className="material-symbols-outlined text-[20px]">auto_stories</span>
</div>
<span className="font-headline-md text-headline-md font-semibold text-tertiary tracking-tight">HUKI EBOOK</span>
</Link>

<nav className="flex items-center gap-1 bg-[#f4f1ea] p-1 rounded-xl">
<a className="px-4 py-1.5 rounded-lg font-title-md text-[13px] bg-white text-tertiary font-semibold shadow-xs flex items-center gap-1.5" href="#">
<span className="material-symbols-outlined text-[16px] fill-icon">shopping_bag</span>
            Sàn TMĐT
          </Link>
<a className="px-4 py-1.5 rounded-lg font-title-md text-[13px] text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" href="#">
<span className="material-symbols-outlined text-[16px]">groups</span>
            Mạng Xã Hội Sách
          </Link>
</nav>
</div>

<div className="w-[560px] relative">
<div className="relative flex items-center w-full">
<span className="material-symbols-outlined absolute left-3.5 text-[#737d7a] text-[20px]">search</span>
<input className="w-full h-11 pl-11 pr-24 rounded-lg bg-[#f8f6f1] border border-[#e2ded6] text-body-md text-on-surface placeholder:text-[#888e8c] focus:outline-none focus:border-tertiary focus:bg-white transition-all" placeholder="Tìm kiếm hơn 100.000+ tựa sách, tác giả, nhà xuất bản..." type="text" />
<button className="absolute right-1.5 px-3.5 py-1.5 bg-tertiary text-on-tertiary rounded-md text-label-sm font-semibold hover:bg-tertiary-container transition-colors">
            Tìm
          </button>
</div>
</div>

<div className="flex items-center gap-3">

<a className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-[#f4f1ea] hover:text-tertiary transition-colors relative" href="#" title="Yêu thích">
<span className="material-symbols-outlined text-[22px]">favorite</span>
<span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">4</span>
</Link>

<a className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-[#f4f1ea] hover:text-tertiary transition-colors relative" href="#" title="Giỏ hàng">
<span className="material-symbols-outlined text-[22px]">shopping_bag</span>
<span className="absolute top-1 right-1 w-4 h-4 bg-tertiary text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
</Link>

<a className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-[#f4f1ea] hover:text-tertiary transition-colors relative" href="#" title="Thông báo">
<span className="material-symbols-outlined text-[22px]">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white"></span>
</Link>

<div className="h-10 pl-3 pr-1 py-1 rounded-full border border-[#e2ded6] bg-[#fbf9f4] flex items-center gap-2.5 ml-2 hover:border-tertiary cursor-pointer transition-all">
<div className="flex flex-col text-right">
<span className="text-[12px] font-semibold text-on-surface leading-tight">Minh Trí</span>
<span className="text-[10px] text-tertiary font-medium leading-none">Hội viên VIP</span>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#d8d3c7] shrink-0">
<img className="w-full h-full object-cover" alt="Chân dung avatar độc giả nam trẻ tuổi tri thức Minh Trí, phong cách nhiếp ảnh studio thanh lịch, phông nền thư viện sách mờ ấm áp, ánh sáng nhẹ nhàng tôn vẻ điềm tĩnh mọt sách." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB22B3nNPpd_4PSA0udO5lh-jS0ED3cNBFeobApE9zlLzWXzQTwUJ-QuXcO46lAGpxsngx_W9I5gbC4ZQ6VwDjBMYxFn9Y6gskkxwKXLGB1_kpXrnFpBuOpKHA3y_85ZQ9Oi9vNbo2qkAjkaVBbSVPdfqrYEZM6ENimRaZSgVSRd7-ozjUPxiXGKD72jF8W9I63lL6B2HC6H1zt-JHmcjW4ZBn6ERoRyNAhkWI-5-RjXR1zBRe8OdvT5w" />
</div>
</div>
</div>
</header>

<main className="max-w-[1820px] w-full mx-auto px-10 py-6 flex-1">

<nav className="flex items-center gap-2 text-[13px] font-body-sm text-[#707875] mb-4">
<a className="hover:text-tertiary transition-colors" href="#">Trang chủ</Link>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-tertiary transition-colors" href="#">Sách</Link>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-medium">Tất cả sách</span>
</nav>

<section className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e5e1d8]">
<div>
<span className="text-tertiary font-label-sm tracking-widest uppercase mb-1.5 block">Khám phá</span>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight flex items-baseline gap-3">
            Tất Cả Sách
            <span className="font-body-md text-[15px] font-normal text-[#6f7875]">(1.248 sản phẩm)</span>
</h1>
<p className="font-body-md text-[#596461] mt-1 max-w-2xl">
            Khám phá những đầu sách nổi bật từ các nhà sách uy tín và nhà xuất bản hàng đầu trên nền tảng HUKI. Trải nghiệm kết hợp hoàn hảo giữa ấn bản Ebook linh hoạt và Sách in bìa mềm cao cấp.
          </p>
</div>

<div className="w-full md:w-[380px] shrink-0">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-[#737d7a] text-[18px]">filter_list</span>
<input className="w-full h-[46px] pl-10 pr-4 rounded-xl bg-surface-container-lowest border border-[#e2ded6] text-body-md text-on-surface placeholder:text-[#888e8c] focus:outline-none focus:border-tertiary shadow-sm transition-all" placeholder="Tìm trong danh mục sách..." type="text" />
</div>
</div>
</section>

<div className="grid grid-cols-12 gap-8 items-start">

<aside className="col-span-12 lg:col-span-3 xl:col-span-2 bg-surface-container-lowest border border-[#e8e5df] rounded-2xl p-5 shadow-xs sticky top-[98px]">

<div className="flex items-center justify-between pb-4 border-b border-[#ece8df]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]">tune</span>
<h2 className="font-title-md text-title-md font-semibold text-on-surface">Bộ Lọc</h2>
</div>
<button className="text-[12px] font-label-md text-primary hover:underline cursor-pointer">Xóa tất cả</button>
</div>

<div className="py-4 border-b border-[#ece8df]">
<h3 className="font-title-md text-[14px] font-semibold text-on-surface mb-3 flex items-center justify-between">
              Danh mục
              <span className="material-symbols-outlined text-[18px] text-[#7d8481]">expand_less</span>
</h3>
<div className="space-y-2.5 max-h-[220px] overflow-y-auto custom-scroll pr-1">
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-2.5">
<input checked="" className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="text-[13px] font-medium text-tertiary group-hover:text-tertiary transition-colors">Công nghệ &amp; AI</span>
</div>
<span className="text-[11px] text-[#828b88] bg-[#f2eee7] px-1.5 py-0.5 rounded-full">342</span>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant group-hover:text-on-surface transition-colors">Phát triển bản thân</span>
</div>
<span className="text-[11px] text-[#828b88] bg-[#f2eee7] px-1.5 py-0.5 rounded-full">219</span>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant group-hover:text-on-surface transition-colors">Kinh doanh &amp; Khởi nghiệp</span>
</div>
<span className="text-[11px] text-[#828b88] bg-[#f2eee7] px-1.5 py-0.5 rounded-full">184</span>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant group-hover:text-on-surface transition-colors">Văn học cổ điển &amp; Hiện đại</span>
</div>
<span className="text-[11px] text-[#828b88] bg-[#f2eee7] px-1.5 py-0.5 rounded-full">276</span>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant group-hover:text-on-surface transition-colors">Tâm lý học hành vi</span>
</div>
<span className="text-[11px] text-[#828b88] bg-[#f2eee7] px-1.5 py-0.5 rounded-full">115</span>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant group-hover:text-on-surface transition-colors">Kỹ năng sống</span>
</div>
<span className="text-[11px] text-[#828b88] bg-[#f2eee7] px-1.5 py-0.5 rounded-full">112</span>
</label>
</div>
</div>

<div className="py-4 border-b border-[#ece8df]">
<h3 className="font-title-md text-[14px] font-semibold text-on-surface mb-3">Định dạng sách</h3>
<div className="space-y-2">
<label className="flex items-center gap-2.5 cursor-pointer">
<input checked="" className="w-4 h-4 text-tertiary focus:ring-tertiary border-[#c9c5bd]" name="format" type="radio" />
<span className="text-[13px] font-medium text-tertiary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">devices</span> Ebook
                </span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer">
<input className="w-4 h-4 text-tertiary focus:ring-tertiary border-[#c9c5bd]" name="format" type="radio" />
<span className="text-[13px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">menu_book</span> Sách giấy
                </span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer">
<input className="w-4 h-4 text-tertiary focus:ring-tertiary border-[#c9c5bd]" name="format" type="radio" />
<span className="text-[13px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">auto_stories</span> Cả hai (Combo)
                </span>
</label>
</div>
</div>

<div className="py-4 border-b border-[#ece8df]">
<h3 className="font-title-md text-[14px] font-semibold text-on-surface mb-3">Khoảng giá</h3>

<div className="grid grid-cols-2 gap-1.5 mb-3">
<button className="py-1.5 px-2 bg-[#f4f1ea] hover:bg-[#eae6dc] rounded-md text-[11px] font-label-sm text-on-surface-variant text-center transition-colors">Dưới 100k</button>
<button className="py-1.5 px-2 bg-[#f4f1ea] hover:bg-[#eae6dc] rounded-md text-[11px] font-label-sm text-on-surface-variant text-center transition-colors">100k - 200k</button>
<button className="py-1.5 px-2 bg-[#f4f1ea] hover:bg-[#eae6dc] rounded-md text-[11px] font-label-sm text-on-surface-variant text-center transition-colors">200k - 500k</button>
<button className="py-1.5 px-2 bg-[#f4f1ea] hover:bg-[#eae6dc] rounded-md text-[11px] font-label-sm text-on-surface-variant text-center transition-colors">Trên 500k</button>
</div>

<div className="flex items-center gap-2">
<input className="w-full py-1 px-2.5 rounded-md bg-[#f8f6f1] border border-[#d8d3c7] text-[12px] text-on-surface focus:outline-none focus:border-tertiary" placeholder="Từ" type="number" />
<span className="text-[#8e9592] text-[12px]">-</span>
<input className="w-full py-1 px-2.5 rounded-md bg-[#f8f6f1] border border-[#d8d3c7] text-[12px] text-on-surface focus:outline-none focus:border-tertiary" placeholder="Đến" type="number" />
</div>
<button className="w-full mt-2 py-1.5 bg-tertiary text-on-tertiary rounded-md text-[12px] font-label-sm font-semibold hover:bg-tertiary-container transition-colors">
              Áp dụng
            </button>
</div>

<div className="py-4 border-b border-[#ece8df]">
<h3 className="font-title-md text-[14px] font-semibold text-on-surface mb-3">Đánh giá</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<div className="flex items-center gap-1 text-[#f59e0b]">
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
</div>
<span className="text-[12px] text-on-surface-variant font-medium">5 sao</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<div className="flex items-center gap-1 text-[#f59e0b]">
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
</div>
<span className="text-[12px] text-tertiary font-medium">Từ 4 sao</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary focus:ring-tertiary" type="checkbox" />
<div className="flex items-center gap-1 text-[#f59e0b]">
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
</div>
<span className="text-[12px] text-on-surface-variant">Từ 3 sao</span>
</label>
</div>
</div>

<div className="py-4 border-b border-[#ece8df]">
<h3 className="font-title-md text-[14px] font-semibold text-on-surface mb-3">Nhà xuất bản &amp; Đối tác</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">NXB Trẻ</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">Nhã Nam</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-tertiary font-medium">Alpha Books</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">First News - Trí Việt</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">Kim Đồng</span>
</label>
</div>
</div>

<div className="pt-4">
<h3 className="font-title-md text-[14px] font-semibold text-on-surface mb-3">Ưu đãi &amp; Tính năng</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">Đang giảm giá</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">Freeship Extra</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-tertiary font-medium">Có Ebook tải ngay</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-[#c9c5bd] text-tertiary" type="checkbox" />
<span className="text-[13px] text-on-surface-variant">Đọc thử miễn phí (Sample)</span>
</label>
</div>
</div>
</aside>

<section className="col-span-12 lg:col-span-9 xl:col-span-10 flex flex-col">

<div className="bg-surface-container-lowest border border-[#e8e5df] rounded-xl px-5 py-3.5 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-4">

<div className="flex items-center flex-wrap gap-2.5">
<span className="font-body-md text-on-surface font-semibold pr-2 border-r border-[#e0dad0]">1.248 kết quả</span>

<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-label-md bg-[#eef6f3] text-tertiary border border-tertiary-fixed-dim">
                Danh mục: Công nghệ &amp; AI
                <button className="hover:text-primary transition-colors ml-1">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</span>

<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-label-md bg-[#eef6f3] text-tertiary border border-tertiary-fixed-dim">
                Định dạng: Ebook
                <button className="hover:text-primary transition-colors ml-1">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</span>

<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-label-md bg-[#fff7eb] text-secondary border border-secondary-fixed">
                Từ 4 sao ★
                <button className="hover:text-primary transition-colors ml-1">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</span>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[13px] font-body-sm">
<span className="text-[#6d7673]">Sắp xếp:</span>
<div className="relative">
<select className="appearance-none bg-[#f8f6f1] border border-[#d8d3c7] rounded-lg py-1.5 pl-3 pr-8 text-[13px] font-medium text-on-surface focus:outline-none focus:border-tertiary cursor-pointer">
<option>Phổ biến nhất</option>
<option>Bán chạy nhất tuần</option>
<option>Mới phát hành</option>
<option>Giá: Thấp đến Cao</option>
<option>Giá: Cao đến Thấp</option>
<option>Đánh giá cao nhất</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[#757d7a] text-[18px] pointer-events-none">expand_more</span>
</div>
</div>

<div className="flex items-center bg-[#f4f1ea] p-1 rounded-lg border border-[#e0ded6]">
<button className="p-1 rounded bg-white text-tertiary shadow-2xs" title="Lưới">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" title="Danh sách">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>

<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Atomic Habits Thay Đổi Tí Hon Hiệu Quả Bất Ngờ phiên bản màu trắng và vàng typography thanh lịch của James Clear, ánh sáng studio chụp nghiêng nhẹ tôn độ hoàn thiện của bìa mềm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnpkLHH_uTMGrlj1zyP7icA1PG3-3iWU7wq6-ZFXEUWMCA235gD5Oa64EK8JagqTA_xFjZ40v_d-uc2D_KYuL5CvWPpkpImlgdu2iiy50-YSpKU6TaMDFqHVhCfjebUUKueGAwGKVhhwulj2J-6L2a3qavOchp8WsNkeXC7UFq3imbBABnMUmT4AEG3IIJ-uBMU6ypdR-hk-GPHjrd8X3nAM5p-3nMw4uSRDI7WHz2KZu6WJnO4VuCvQ" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>

<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-25%</span>
</div>

<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Atomic Habits - Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">James Clear</p>

<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.9</span>
<span className="text-[11px] text-[#868f8c]">(4.8k đã bán)</span>
</div>
</div>

<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">98.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">130.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Nhà Giả Kim của Paulo Coelho ấn bản bìa cứng minh họa bầu trời đêm sa mạc trăng sao huyền ảo và đàn cừu, ánh sáng vàng ấm cổ điển của văn học nghệ thuật." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNSJv8WbQTwJya636_FW0mYshlMn8ZpW5DfTmCp3q_pz4q9n5jP3hiiK3mafekUIWZ4se4a15jzeHs71mnK4Mviw5CtTeXeiMfOy_D7OQY08FMOEvWoMRV_yHkKNkWgtp3-9ssDhlPZWDF47EM35t0qWNVVwHzwqTo3ic5EjVPrw5a8l3rlNpdZ4cU3R2LgXrZCzqw-9l1_d2KZaINmahY_3bxKAudtwN7-VybtwPcyEU6QBBbn5z-Fw" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-[#855300]/90 text-white backdrop-blur-xs">Cả hai</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-20%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Nhã Nam</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Nhà Giả Kim (The Alchemist)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Paulo Coelho</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">5.0</span>
<span className="text-[11px] text-[#868f8c]">(9.2k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">64.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">80.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Tư Duy Nhanh Và Chậm Thinking Fast and Slow của Daniel Kahneman với biểu tượng chiếc bút chì sắc nét trên nền trắng tối giản, phong cách sách học thuật phương Tây cao cấp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs4TOGpw97Vnc6jgkJQMlOiU7qkOiSmZMU8P6YK_c_Xv4yyyh5kcdgWdNcmp_7lzHDU83XTVXrEQfQ_DPSN-Mp9dSA0MQApwu8ZLxoCWnLRzqWiFkVvWX2RVAkwZvps1dOv0-yTu-_yB4018zA1AdeR8PRZO-z44u04brEkbSH_KBxSDPYogcbHMroUxaLZGIV609Be_tEY3scjX_tvWAlaSAs_WqnVoLBT2e7gBWeTaofdU_B8QdTww" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-30%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Tư Duy Nhanh Và Chậm (Thinking, Fast and Slow)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Daniel Kahneman</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.8</span>
<span className="text-[11px] text-[#868f8c]">(3.1k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">139.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">199.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Tâm Lý Học Về Tiền The Psychology of Money của Morgan Housel với thiết kế đồ họa hình đồng xu thanh lịch và phong cách bìa màu kem sang trọng hiện đại." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ouqQ7elIuGRHZ7rj7l5cYrPzWtVWXyk8F3s9fBkQf8lEZFMOCpZ1WNMWOVoN5Uy13M3ZCCtm0Kp6qODtQ3a5mAu81yactomECdD4kLkkrlCvqEPHOgvwES7pkRYwgFiAN7MHH3veqNbCNbdX5MfzYRgsIN5CRugb_eWd0jzg2YPAWJlzYTmoYx-QBxSmQa0tUxtsTK7oDOF1qSFqUnhLUn91MXUytXRomvOwDXqwzBlH_CfbqtBLxg" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-15%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">NXB Trẻ</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Tâm Lý Học Về Tiền (The Psychology of Money)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Morgan Housel</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.9</span>
<span className="text-[11px] text-[#868f8c]">(5.4k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">92.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">108.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Deep Work Làm Ra Làm Chơi Ra Chơi của Cal Newport nền vàng rực rỡ với typography đen ấn tượng, bìa sách tối giản sắc nét thể hiện sự tập trung cao độ." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Td_fncjsrtfhP7pD1zoyow8X0cbRu6_n_thngTwB6nLhuC7eqp1Pd51OhQUdL5VFM-pFQHaRRHrxlicYEZOTgkzJDiL3_QUDrKQSgoawjEqamxNDNc-uoZAhi3U_D_vCsLO5lkm_oUjQbWeVl0xqSwQuzfubBlRvSLA7o3cEOKFyI7Q_vXNj5PHG1cdctYb2ECJPxHkHvyCQdVC1NQ3PlkWtsGi4eIvk2UDDHzeKGT6zlcIK_leb6A" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-20%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Deep Work - Làm Ra Làm, Chơi Ra Chơi
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Cal Newport</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.8</span>
<span className="text-[11px] text-[#868f8c]">(2.9k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">112.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">140.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Clean Code Mã Sạch của Robert C Martin Uncle Bob bản tiếng Việt bìa xanh lam công nghệ tiêu chuẩn quốc tế, ánh sáng đều rõ nét bố cục chuyên nghiệp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYD__UmCCqKlTM22GbDoPZqtdjw0iEjqWN6T80ZcIMdl-FMIkOxY5vWGs7tcVfInEqG4TCljslu--bVITD9IuFq1v5dawGTDsIGZPWRaPQrMMPb-8S0YiEtKVlkjyvMqezW4xZawW-TEEqMzhxNvfUfSf-YrEvSo-w0DQW-ks8Vlt9o5RyACER1nuaSKnPGpT0tS8AcA1qv2a3ZmvjsRRZVxCZcBxkeUwE-8JGDpb9W71CLFOlv1BIhg" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-18%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Clean Code - Mã Sạch Trong Lập Trình Phần Mềm
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Robert C. Martin</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.9</span>
<span className="text-[11px] text-[#868f8c]">(1.6k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">225.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">275.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Dám Bị Ghét của Koga Fumitake và Kishimi Ichiro tông xanh pastel dịu mát với nét vẽ thiền định phương Đông tinh tế, bìa sách phong cách Nhật Bản tối giản." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDv1JdME3PJnFHb-TdqnRjNsNPr9SMcBhVNpimC-ikDBPmeI_JCpp77WbxFZ9ryp3D2HSWLKM79oY8gT3wtpuB5fUQxoDZ3PXC7y9iDwvYOw1xkPGGyCWF-6nNwrcgakfFjFPLzIZhRwBW8S4GF4m2a0PxJdsQa5xK1L9MeD3iXNJ5lc7ZIY-r7SzZ1xDbxVb3JYeXfMruiAK9qaUg_v8OzYUgR-HW8j73LGNwq0xUpPs_BGf6sgMSdA" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-[#855300]/90 text-white backdrop-blur-xs">Cả hai</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-22%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Nhã Nam</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Dám Bị Ghét (The Courage to Be Disliked)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Kishimi Ichiro, Koga Fumitake</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.8</span>
<span className="text-[11px] text-[#868f8c]">(4.1k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">89.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">115.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Sapiens Lược Sử Loài Người của Yuval Noah Harari với dấu vân tay màu đỏ đất nổi bật trên nền giấy cổ điển màu ngà, nhiếp ảnh sản phẩm sách lịch sử đồ sộ." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVtbO0fbu_8b9geTD9ziXMlIqLZMCpTBEvBf0qOCnOlNDbsbRdunucqKd3rfBkDm7Uzj20MFU8ehNJiY-0vkw2zV8g0q_Wf2PXklSNO1745JwGPynDsJj4YB2ranVzQKLm1m4GZQoPS99U-fPeR1ErYzxThCf9ylQWFuJ4g3018BL9iME7qHokMxZ5g0O8XmJDSxjJIqiAwjzlJg390f3eYwePhtIsM36z2M4P7jk2FUrMfX3oiGPB-Q" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-25%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Nhã Nam</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Sapiens: Lược Sử Loài Người
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Yuval Noah Harari</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.9</span>
<span className="text-[11px] text-[#868f8c]">(6.7k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">145.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">195.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Đột Phá Trong Kỷ Nguyên AI bìa đen huyền bí kết hợp mạch điện tử màu ngọc lục bảo phát sáng nhẹ nhàng, phong cách thiết kế tương lai học thuật cho sách trí tuệ nhân tạo." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh6fssmKqeir8XMFa2wDecClL0CT6Ok_3Inbwa5hxjKiVjBpNff8aH64egIb0kN2JGBz36PxgZw7jfigTroPSFm5W3aePLCq_w_RY5rM0JQXDO3PhCD3QFvFdgfqkOg-40WyfXq9Sym71n9ZVAsvJ0x_4bh5WebqNI17Jf4mxrqYLzXBPMM9H5lU1nbhaw5rkMdS8uLmR-5d8IixitgX2lA3seAi9nGD0Kz8ZRr_ZMYP4zPuGlfdrWnw" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-tertiary text-white">MỚI</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">First News</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Đột Phá Trong Kỷ Nguyên AI &amp; Tự Động Hóa
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Andrew Ng, Huki Lab</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">5.0</span>
<span className="text-[11px] text-[#868f8c]">(890 đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">168.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">210.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Kỷ Nguyên Trí Tuệ Nhân Tạo The Age of AI của Henry Kissinger và Eric Schmidt bìa xanh lục bảo sang trọng ánh kim bạc, toát lên phong thái chiến lược toàn cầu." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlchu25Vxyhq_2bXp42EMZdVw_JCVHGhXC3lheIM7-QsBp8TmVRseFqysaGTtO3ZSY99xs4R3rGId6VPwZG0_jFPfoqvd1ZovH6BeEhXB1ZZjjieqiUi0GFT4nCoSj6yvVpbpX7iaxbBWBqdvWReUI4mUoH6e_lYjht7_uxMWZmpemUF12j9EBEv2ZlfQJEE55pmnL880ghbYpDlmaATB8hevBVUBjy8l6BTUop8HWZ4R2SjpxFvVXQA" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-15%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Kỷ Nguyên Trí Tuệ Nhân Tạo (The Age of AI)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Henry Kissinger, Eric Schmidt</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.8</span>
<span className="text-[11px] text-[#868f8c]">(1.4k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">179.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">210.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>
</div>

<div className="my-8 rounded-2xl bg-gradient-to-r from-[#004d3d] via-tertiary to-[#0b5344] p-8 text-white relative overflow-hidden shadow-md flex flex-col md:flex-row items-center justify-between gap-8">

<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none"></div>
<div className="absolute right-60 -top-20 w-60 h-60 rounded-full bg-tertiary-fixed/10 pointer-events-none"></div>
<div className="max-w-xl z-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-label-sm font-semibold bg-white/15 text-tertiary-fixed border border-white/20 mb-3">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> TUYỂN CHỌN BIÊN TẬP VIÊN
              </span>
<h3 className="font-headline-lg text-[28px] font-bold tracking-tight text-white mb-2 leading-tight">
                Khám phá Ebook nổi bật tuần này
              </h3>
<p className="text-white/80 font-body-md text-[14px] leading-relaxed mb-5">
                Tối ưu hóa hành trình nâng cấp bản thân với bộ sưu tập Ebook độc quyền HUKI: Ghi chú đồng bộ đám mây, tóm tắt AI thông minh và nghe sách nói giọng đọc tự nhiên.
              </p>
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 rounded-xl bg-white text-tertiary font-title-md text-[14px] font-semibold hover:bg-[#f4f1ea] transition-all shadow-sm flex items-center gap-2">
                  Xem Ebook nổi bật
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="text-white/70 text-[13px] font-body-sm">Chỉ từ 49.000đ / tác phẩm</span>
</div>
</div>

<div className="flex items-center gap-4 shrink-0 z-10">

<div className="w-32 aspect-[2/3] rounded-lg shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white/30">
<img className="w-full h-full object-cover" alt="Bìa sách Ebook số hóa chủ đề Trí Tuệ Nhân Tạo Tạo Sinh Generative AI với tông màu xanh ngọc HUKI sang trọng trên thiết bị đọc sách e-reader hiện đại." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfzXOZ-y7rRzi8FDhMl-EYKhLiJSsIlGIBo00BdqCif8W41HPZviV88DGz-4LjY4MxyYrJ6l9ZkPDHhWG0JwDjitSUtrwgzctGmWTHF_NgNkqQ1a95u1C8UaBR2wDszyoRAvXhtLjRlpeJmx0zoT4F6HuPHreIlEBunctrkCpv_T40Pfe4MbfgviLNaye-qhY8RwlcmnCd5690FiOLG_DrlTnimDwhFWYr7q9bc9tDQ0HaW0U6X9ptCg" />
</div>

<div className="w-36 aspect-[2/3] rounded-lg shadow-2xl overflow-hidden transform translate-y-[-8px] hover:translate-y-[-14px] transition-transform duration-300 border-2 border-white/40 ring-4 ring-tertiary-fixed/30">
<img className="w-full h-full object-cover" alt="Bìa sách Ebook nghệ thuật lãnh đạo phong cách tối giản Bắc Âu bìa trắng chữ đen tuyền viền vàng đồng tinh tế trưng bày 3D góc nghiêng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7xQ8NWMgRcm69eTJqIsNUA9_zzEzs1MUPG4C2PcFkZhCpX486orVibP2_CXz-hBq8IWbhLDGrM90qL33QQi833gswaW06OFPZV4ANLKE_Bmd2YHJcFujRpJdSSJU9HdpDIpQUP2Ekgb3EQRweUxc5owfmdSyFDdZ_-FePcJwGImtH3UcWzmnLTEJFGoGAHjAF5ciHCjDYdOndImLftUy92BQIrn2qdavvtnisTBBNI8dc7V6RkHYMEQ" />
</div>

<div className="w-32 aspect-[2/3] rounded-lg shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white/30">
<img className="w-full h-full object-cover" alt="Bìa sách Ebook phát triển tư duy đột phá ấn bản độc quyền HUKI với hiệu ứng ánh sáng neon ngọc bích trên nền tối trừu tượng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7WhvMQjkNKu23eZzuqBEFYIQkaVgVPolIt9NpEukxQGfswiDaW3i-lsNdb0X0NKXhVtx4qrbC5_hX9l6DJ3DzxoOGBMrZSg6xMOHCranTxs28psbtQoAeg-nUoOFpWgdXYqTONRNNfVDuaXGVpDmUBj9AEO2Zn-DqXaFjHY0uWraHJRRq-jLmjGmArM72Y9nisfS5jh59Pn-JkWOLLFFnWuOrqhwx6UjSwUm2mK5XH0b9xaF9Dx2_w" />
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-10">

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Lối Sống Tối Giản Của Người Nhật Sasaki Fumio bìa trắng tinh khiết với hình ảnh căn phòng trống thanh tịnh đầy nắng sớm, phong cách thẩm mỹ thiền định." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKnP0FORMXpZmzRCqyYqVtUGoOJQ4KB-xWkgtHT7sLNX5vXbXtKaYTJ188FXLkZdNE17uUyx6okgNGWK4CpB53zZxdtC-mAcJ9aL_1AY5-72SMZqd7CEe5cEPTBplDz07YQ8su7CsYyOckcqNDHQdFbmO791TzJ8t9kHsh5HgQ4TFJkJt_T2zLPw8ZjL-SERZ-jiLo1Qc94vLb-tvyhdbV9W4pbgR5B4hKb1Ekjhz7VORS17UasBL-rQ" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-[#855300]/90 text-white backdrop-blur-xs">Sách giấy</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-20%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Nhã Nam</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Lối Sống Tối Giản Của Người Nhật
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Sasaki Fumio</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.7</span>
<span className="text-[11px] text-[#868f8c]">(3.8k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">78.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">98.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Tinh Gọn Khởi Nghiệp The Lean Startup của Eric Ries thiết kế biểu tượng vòng lặp mũi tên xanh trên nền sáng, bìa cẩm nang kinh doanh công nghệ hiện đại." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetbLNZsLGOVsulpX9Ee6LxtqaQWzAPbxf-s1FrOsaCC56IT6VghwrcvIw2nu03BtvdpWRAmJ8Z1Z_ekpGmaFpflt8Xrd2wa8g5zQTd1DVgxfEeMF_Lrv6WDnXHPwKdJiXlJbZOZ-f28m5NYFO8DGiCMQr6LfyngJN82jMaJei3cfoyyHYlU4pqkLpFxdfiXjTJlXaMKhAm0yEJajulxObUO5EnycQEhcXAZYZx-32MlqCfadn33YKgg" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-15%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Khởi Nghiệp Tinh Gọn (The Lean Startup)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Eric Ries</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.8</span>
<span className="text-[11px] text-[#868f8c]">(2.4k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">119.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">140.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Không Diệt Không Sinh Đừng Sợ Hãi của Thiền sư Thích Nhất Hạnh với hình ảnh hoa sen mộc mạc và phong chữ thư pháp tĩnh lặng đậm chất thiền môn." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFl_5uKwxlz6NSWcItSZ0J22NxhkXuxs57gSxZlwlrCR_VGDC6mYwydTm--zqInOUWYpHwmGxcI_Q2Ia94E9bOj94kbsUzq37r2zEfqBlznfevkLunncZqm8Kh_-CnEAi4-jsiYz5L5j2HUdAbk-d3wy6vnXHmwak3nosgaJ0YCYq8aP7fPzm_7WeGoqJenh406aAgoZNDxCn1pxtxSQhsdwx76remBktlLL2UJVHnGKOZ1CRwaA9Zvw" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-[#855300]/90 text-white backdrop-blur-xs">Cả hai</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-25%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">First News</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Không Diệt Không Sinh Đừng Sợ Hãi
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Thích Nhất Hạnh</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">5.0</span>
<span className="text-[11px] text-[#868f8c]">(7.3k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">72.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">96.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Đi Tìm Lẽ Sống Man's Search for Meaning của Viktor Frankl với hình bóng người đàn ông kiên cường trên nền trời ảm đạm chuyển dần sang rạng đông hy vọng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDOO6XW43HaLMcl8dhfx6Loz2vlUi8Zu8P4xRZ_GPVlKMEXmEeqBS0GnQt8sKRevh7GHbpWFcTeyi8fPcbhhv5MX4cKR7kvM87ZXWSjGcyeuMPQtx7RNBIVgthozQTv3Lq_EGB1YeoyRS-2_pcxFGGz6uBrPZ5gXdfPMlrEkJ26p7UApwhrNcO_w_3YTGJCAvcPfABXhXiTV6RwYyWeK1WE-MjauaqmqzTCoLrKUB7ccCj8Bb-esning" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-tertiary/90 text-white backdrop-blur-xs">Ebook</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-20%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Alpha Books</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Đi Tìm Lẽ Sống (Man's Search for Meaning)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Viktor E. Frankl</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">4.9</span>
<span className="text-[11px] text-[#868f8c]">(4.6k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">84.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">105.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>

<article className="bg-surface-container-lowest border border-[#e8e5df] rounded-[18px] p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
<div>
<div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#e9e6df] mb-3 shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Tội Ác Và Trừng Phạt Fyodor Dostoevsky ấn bản văn học kinh điển Nhã Nam với tranh khắc gỗ cổ kính bí ẩn, tạo cảm giác chiều sâu triết học bi kịch." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYxlZAoK2wU0pqgOD1S33bsW0u-x-nCPWNPVxQ4yJZkvy8Y2W_e5hek5d9qW0Tv0OJ8DxSaZMzwHd6sdeaulSjH_OiEGqT0AJr_9UO-dCbPuqv928peHPhU2yNXdKVg1baue7ejFiaVtSQnPHEd--JxwjCJsYYnnn_eTeUz_lonxjJI-Vsziq_zmacMCrv2oGYiJ_PQSqkp_zVVnGZuQFlcVzIZquRcFhufpHXQbyOBvDzKL5Rgo7Ebg" />
<div className="absolute inset-0 book-spine-shadow pointer-events-none"></div>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-label-sm font-semibold bg-[#855300]/90 text-white backdrop-blur-xs">Sách giấy</span>
<span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-label-sm font-bold bg-primary text-white">-30%</span>
</div>
<span className="text-[11px] font-label-sm text-tertiary block mb-0.5 font-medium">Nhã Nam</span>
<h3 className="font-title-md text-[14px] font-semibold text-on-surface group-hover:text-tertiary transition-colors line-clamp-2 leading-snug">
                  Tội Ác Và Trừng Phạt (Trọn Bộ 2 Tập)
                </h3>
<p className="text-[12px] text-[#6d7673] mt-0.5">Fyodor Dostoevsky</p>
<div className="flex items-center gap-1.5 mt-2">
<span className="material-symbols-outlined text-[#f59e0b] text-[15px] fill-icon">star</span>
<span className="text-[12px] font-bold text-on-surface">5.0</span>
<span className="text-[11px] text-[#868f8c]">(1.9k đã bán)</span>
</div>
</div>
<div className="pt-3 mt-2 border-t border-[#f0ece3] flex items-baseline justify-between">
<div>
<span className="text-[15px] font-title-lg font-bold text-tertiary">182.000đ</span>
<span className="text-[11px] text-[#9ca3af] line-through ml-1.5">260.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-[#f4f1ea] hover:bg-tertiary hover:text-white text-on-surface-variant flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
</button>
</div>
</article>
</div>

<nav className="flex items-center justify-center gap-2 py-6 border-t border-[#e8e5df]">
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-[#6d7673] flex items-center justify-center hover:border-tertiary hover:text-tertiary transition-colors disabled:opacity-40" disabled="">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>

<button className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[14px] font-bold shadow-xs">
              1
            </button>
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-on-surface font-title-md text-[14px] hover:border-tertiary hover:text-tertiary transition-colors">
              2
            </button>
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-on-surface font-title-md text-[14px] hover:border-tertiary hover:text-tertiary transition-colors">
              3
            </button>
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-on-surface font-title-md text-[14px] hover:border-tertiary hover:text-tertiary transition-colors">
              4
            </button>
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-on-surface font-title-md text-[14px] hover:border-tertiary hover:text-tertiary transition-colors">
              5
            </button>
<span className="px-1 text-[#8b9490] font-bold">...</span>
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-on-surface font-title-md text-[14px] hover:border-tertiary hover:text-tertiary transition-colors">
              25
            </button>
<button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-[#d8d3c7] text-on-surface flex items-center justify-center hover:border-tertiary hover:text-tertiary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</nav>
</section>
</div>
</main>

<footer className="bg-surface-container-low border-t border-outline-variant mt-space-3xl">
<div className="max-w-[1280px] mx-auto px-margin-desktop py-space-2xl flex flex-col justify-between">

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#ded9cd]">

<div className="md:col-span-1">
<div className="font-headline-md text-headline-md font-semibold text-primary mb-3">HUKI EBOOK</div>
<p className="font-body-md text-[#5f6865] leading-relaxed mb-4">
              Nền tảng thương mại điện tử và mạng xã hội đọc sách hàng đầu Việt Nam. Nơi kết nối độc giả với tri thức vô tận qua ấn bản sách giấy và ebook bản quyền.
            </p>
<div className="flex items-center gap-3 text-tertiary">
<a className="w-8 h-8 rounded-full bg-white border border-[#d8d3c7] flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">public</span></Link>
<a className="w-8 h-8 rounded-full bg-white border border-[#d8d3c7] flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">share</span></Link>
<a className="w-8 h-8 rounded-full bg-white border border-[#d8d3c7] flex items-center justify-center hover:bg-tertiary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">mail</span></Link>
</div>
</div>

<div>
<h4 className="font-title-md text-[15px] font-semibold text-on-surface mb-3">Về Huki Ebook</h4>
<ul className="space-y-2 font-body-md text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="#">Giới thiệu nền tảng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Tuyển dụng nhân sự</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chương trình liên kết Tác giả</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Dành cho Nhà xuất bản</Link></li>
</ul>
</div>

<div>
<h4 className="font-title-md text-[15px] font-semibold text-on-surface mb-3">Chính sách &amp; Hỗ trợ</h4>
<ul className="space-y-2 font-body-md text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Hướng dẫn mua hàng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách đổi trả &amp; Hoàn tiền</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Liên hệ hỗ trợ</Link></li>
</ul>
</div>

<div>
<h4 className="font-title-md text-[15px] font-semibold text-on-surface mb-3">Ứng dụng đọc sách</h4>
<p className="font-body-md text-[#5f6865] mb-3">Đọc sách mọi lúc mọi nơi trên iOS, Android và Máy đọc sách chuyên dụng.</p>
<div className="flex flex-col gap-2">
<button className="h-10 px-4 rounded-lg bg-surface-container-lowest border border-[#d8d3c7] flex items-center gap-2 hover:border-tertiary transition-colors">
<span className="material-symbols-outlined text-tertiary text-[20px]">phone_iphone</span>
<span className="text-[12px] font-medium text-left"><span className="block text-[10px] text-[#737b78]">Tải trên</span>App Store</span>
</button>
<button className="h-10 px-4 rounded-lg bg-surface-container-lowest border border-[#d8d3c7] flex items-center gap-2 hover:border-tertiary transition-colors">
<span className="material-symbols-outlined text-tertiary text-[20px]">shop</span>
<span className="text-[12px] font-medium text-left"><span className="block text-[10px] text-[#737b78]">Tải trên</span>Google Play</span>
</button>
</div>
</div>
</div>

<div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="font-label-sm text-label-sm text-[#707976]">
            © 2025 HUKI EBOOK. Bản quyền thuộc về Công ty TNHH Sách Điện Tử Huki.
          </p>
<div className="flex items-center gap-6 font-body-md text-on-surface-variant text-[13px]">
<a className="hover:text-primary transition-colors" href="#">Về Huki Ebook</Link>
<a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</Link>
<a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</Link>
<a className="hover:text-primary transition-colors" href="#">Hướng dẫn mua hàng</Link>
<a className="hover:text-primary transition-colors" href="#">Liên hệ hỗ trợ</Link>
</div>
</div>
</div>
</footer>
</div>

    </div>
  );
}
