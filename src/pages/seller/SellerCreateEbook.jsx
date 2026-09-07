import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SellerCreateEbook() {
  return (
    <div className="stitch-page bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <style>{".material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n      display: inline-block;\n      vertical-align: middle;\n      line-height: 1;\n    }\n    .custom-spine-effect {\n      position: relative;\n    }\n    .custom-spine-effect::after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      width: 14px;\n      background: linear-gradient(to right, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 25%, transparent 100%);\n      pointer-events: none;\n      border-top-left-radius: inherit;\n      border-bottom-left-radius: inherit;\n    }"}</style>


<header className="w-full h-[64px] bg-surface-container-lowest border-b border-surface-variant sticky top-0 z-50 px-6 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<span className="w-9 h-9 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center font-bold shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="auto_stories">auto_stories</span>
</span>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-sm font-semibold tracking-tight text-on-surface">HUKI</span>
<span className="font-label-sm text-label-sm uppercase bg-surface-container text-tertiary px-2 py-0.5 rounded font-semibold tracking-wider">SELLER CENTER</span>
</div>
</div>
</div>
<div className="h-5 w-[1px] bg-surface-variant"></div>
<div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-surface-container-high">
<span className="material-symbols-outlined text-[18px] text-tertiary" data-icon="verified">verified</span>
<span className="font-title-md text-[13px] font-semibold text-on-surface">Alpha Books Official Store</span>
<span className="font-label-sm text-[11px] bg-tertiary-container text-on-tertiary px-1.5 py-0.5 rounded font-medium">Bản Quyền Đã Xác Minh</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="relative w-72">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" data-icon="search">search</span>
<input className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface border border-surface-variant text-body-sm focus:border-tertiary focus:ring-0" placeholder="Tìm kiếm tài liệu, SKU, đơn hàng..." type="text" />
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface-variant relative">
<span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-surface-container-lowest"></span>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
</button>
<div className="h-6 w-[1px] bg-surface-variant mx-1"></div>
<div className="flex items-center gap-2.5 pl-1 cursor-pointer">
<img className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-variant" alt="A dignified professional portrait of an editorial manager wearing glasses and a dark linen shirt, soft library lighting in background, natural warm tone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxq_7T4Sluulc1W5qgIYv_FCRpnJ5_bwjj6YRK5CHKKk6lKorNzApwNnPCsmT4NW-9uGoG9PHuxxuCMDI5KK_pAMEWWz_kBr0JsA42-OOeEpUT2uYhrRjR09YH3ANerj9T4y1WFbzeBFWoftURkVtzkVUcFxt47BFP-7efNEdJWBA7J8i2p2Jx9RGGqT-kLARb91u6Aauo9y7goKI9yo95eg5fF8mqv2TCgdkoIZzBxewBSogadjtYRg" />
<div className="flex flex-col text-left">
<span className="font-title-md text-[13px] text-on-surface leading-tight">Minh Trí (Biên Tập)</span>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Nhà Xuất Bản Đối Tác</span>
</div>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
</header>

<div className="flex-1 flex max-w-[1440px] w-full mx-auto min-h-0">

<aside className="w-[240px] flex-shrink-0 bg-surface-container-lowest border-r border-surface-variant py-6 px-4 flex flex-col justify-between">
<div className="space-y-6">
<div>
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant px-2 font-semibold">Quản Lý Gian Hàng</span>
<nav className="mt-2.5 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="dashboard">dashboard</span>
<span className="font-body-md text-[13px]">Bảng Điều Khiển</span>
</Link>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface-container text-tertiary font-medium" href="#">
<span className="material-symbols-outlined text-[20px] text-tertiary fill-icon" data-icon="inventory_2" data-weight="fill">inventory_2</span>
<span className="font-title-md text-[13px]">Kho Sách &amp; Ebook</span>
</Link>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="receipt_long">receipt_long</span>
<span className="font-body-md text-[13px]">Đơn Đặt Mua &amp; DRM</span>
</Link>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="security">security</span>
<span className="font-body-md text-[13px]">Quản Trị Tác Quyền</span>
</Link>
</nav>
</div>
<div>
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant px-2 font-semibold">Tài Chính &amp; Doanh Thu</span>
<nav className="mt-2.5 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="payments">payments</span>
<span className="font-body-md text-[13px]">Doanh Số Bán Số</span>
</Link>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="local_offer">local_offer</span>
<span className="font-body-md text-[13px]">Chiến Dịch Khuyến Mãi</span>
</Link>
</nav>
</div>
<div>
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant px-2 font-semibold">Cài Đặt</span>
<nav className="mt-2.5 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="store">store</span>
<span className="font-body-md text-[13px]">Hồ Sơ Nhà Xuất Bản</span>
</Link>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
<span className="font-body-md text-[13px]">Thiết Lập DRM &amp; Bảo Mật</span>
</Link>
</nav>
</div>
</div>

<div className="p-3.5 bg-surface-container-low rounded-xl border border-surface-container-high">
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-[18px]" data-icon="verified_user">verified_user</span>
<span className="font-title-md text-[12px] font-semibold">HUKI Core DRM v3.4</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant mt-1.5 leading-relaxed">Mọi tệp số được mã hóa đa tầng và đóng dấu watermark thời gian thực khi độc giả mở sách.</p>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-surface">

<div className="px-8 py-5 border-b border-surface-variant bg-surface-container-lowest/80 backdrop-blur-md sticky top-[64px] z-40">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2 font-body-sm text-[12px] text-on-surface-variant">
<a className="hover:text-tertiary" href="#">Kho Sách &amp; Ebook</Link>
<span>/</span>
<a className="hover:text-tertiary" href="#">Thêm Sản Phẩm Mới</Link>
<span>/</span>
<span className="text-on-surface font-medium">Bản Quyền Số (Ebook)</span>
</div>
<div className="flex items-center gap-3 mt-1.5">
<h1 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">19.2 Thêm Sản Phẩm Ebook Bản Quyền Số</h1>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed font-semibold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                DRM PROTECTED EBOOK
              </span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary" data-icon="cloud_sync">cloud_sync</span>
              Bản nháp tự lưu lúc 10:42
            </span>
<button className="px-3 py-1.5 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface font-body-sm text-[13px] hover:bg-surface-container transition-colors">
              Chuyển Sang Sách Giấy (19.1)
            </button>
</div>
</div>

<div className="mt-5 grid grid-cols-3 gap-4">

<div className="p-4 rounded-xl border border-surface-variant bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-all cursor-pointer opacity-75 hover:opacity-100 flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[22px]" data-icon="menu_book">menu_book</span>
</div>
<div>
<span className="font-title-md text-[14px] font-semibold text-on-surface block">SÁCH GIẤY</span>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5 line-clamp-2 leading-snug">Ấn phẩm vật lý lưu kho, quản lý tồn kho và vận chuyển tận nơi qua bưu cục.</p>
</div>
</div>
<span className="material-symbols-outlined text-surface-variant text-[20px]" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</div>

<div className="p-4 rounded-xl border-2 border-tertiary bg-surface-container-low shadow-sm transition-all cursor-pointer relative flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[22px]" data-icon="tablet_mac">tablet_mac</span>
</div>
<div className="pr-2">
<div className="flex items-center gap-2">
<span className="font-title-md text-[14px] font-bold text-tertiary block">EBOOK KỸ THUẬT SỐ</span>
<span className="font-label-sm text-[10px] bg-tertiary text-on-tertiary px-1.5 py-0.2 rounded font-semibold uppercase">Đang Chọn</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface font-normal mt-1 leading-snug">Đọc trực tuyến trên HUKI Reader sau khi được cấp quyền DRM số. Không tốn phí kho bãi.</p>
</div>
</div>
<span className="material-symbols-outlined text-tertiary text-[22px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>

<div className="p-4 rounded-xl border border-surface-variant bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-all cursor-pointer opacity-75 hover:opacity-100 flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[22px]" data-icon="collections_bookmark">collections_bookmark</span>
</div>
<div>
<span className="font-title-md text-[14px] font-semibold text-on-surface block">SÁCH GIẤY + EBOOK</span>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5 line-clamp-2 leading-snug">Gói Bundle cao cấp độc quyền: nhận sách vật lý đồng thời mở khóa bản điện tử ngay.</p>
</div>
</div>
<span className="material-symbols-outlined text-surface-variant text-[20px]" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</div>
</div>
</div>

<div className="px-8 py-8 flex gap-8 items-start">

<div className="w-[200px] flex-shrink-0 sticky top-[240px] space-y-4">
<div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-variant shadow-sm">
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-3">THÔNG TIN SẢN PHẨM</span>
<nav className="space-y-1.5 font-body-sm text-[13px]">

<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-surface-container text-tertiary font-semibold" href="#section-basic">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Thông Tin Cơ Bản</span>
</Link>

<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#section-category">
<span className="material-symbols-outlined text-[16px] text-tertiary fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Phân Loại Sách</span>
</Link>

<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#section-media">
<span className="material-symbols-outlined text-[16px] text-tertiary fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Ảnh &amp; Media</span>
</Link>

<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#section-pricing">
<span className="material-symbols-outlined text-[16px] text-tertiary fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Giá Ebook</span>
</Link>

<a className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface bg-tertiary-fixed/40 font-semibold border-l-2 border-tertiary" href="#section-ebook-content">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span className="text-tertiary">Nội Dung Ebook</span>
</div>
<span className="font-label-sm text-[10px] bg-tertiary text-on-tertiary px-1 rounded font-bold">DRM</span>
</Link>

<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#section-rights">
<span className="w-2 h-2 rounded-full border border-outline"></span>
<span>Quyền Phân Phối</span>
</Link>

<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#section-publish">
<span className="w-2 h-2 rounded-full border border-outline"></span>
<span>Xuất Bản</span>
</Link>
</nav>

<div className="mt-4 pt-3 border-t border-surface-variant">
<div className="p-2 rounded bg-surface-container-low text-[11px] text-on-surface-variant leading-tight flex items-start gap-1.5">
<span className="material-symbols-outlined text-[14px] text-tertiary mt-0.5" data-icon="info">info</span>
<span>Ebook bản quyền số không áp dụng tồn kho vật lý &amp; vận chuyển.</span>
</div>
</div>
</div>
</div>

<div className="w-[680px] flex-shrink-0 space-y-6 pb-28">

<section className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant shadow-sm space-y-5" id="section-basic">
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-surface-container text-tertiary font-bold text-xs flex items-center justify-center">1</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Thông Tin Cơ Bản Ebook</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Trường có dấu (*) là bắt buộc</span>
</div>

<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">
                Tên sản phẩm Ebook <span className="text-primary">*</span>
</label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="text" value="Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ (Bản Kỹ Thuật Số DRM)" />
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1 block">Tên sách điện tử kèm định danh bản quyền để bạn đọc dễ nhận diện trên HUKI Reader.</span>
</div>

<div>
<div className="flex items-center justify-between mb-1.5">
<label className="font-title-md text-[13px] font-semibold text-on-surface">Giới thiệu ngắn (Lead Text) <span className="text-primary">*</span></label>
<span className="font-label-sm text-[11px] text-on-surface-variant">142 / 300 ký tự</span>
</div>
<textarea className="w-full p-3 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary resize-none" rows="2">Cuốn sách kinh điển toàn cầu về việc hình thành thói quen tốt và loại bỏ thói quen xấu một cách tự nhiên thông qua hệ thống phân tầng hành vi 1% mỗi ngày.</textarea>
</div>

<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Mô tả chi tiết nội dung sách <span className="text-primary">*</span></label>
<div className="border border-surface-variant rounded-xl overflow-hidden bg-surface">

<div className="px-3 py-2 bg-surface-container border-b border-surface-variant flex items-center gap-1.5 text-on-surface-variant">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest font-bold text-xs" type="button">B</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest italic text-xs" type="button">I</button>
<div className="h-4 w-[1px] bg-surface-variant mx-1"></div>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest font-semibold text-xs" type="button">H1</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest font-semibold text-xs" type="button">H2</button>
<div className="h-4 w-[1px] bg-surface-variant mx-1"></div>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest" type="button">
<span className="material-symbols-outlined text-[16px]" data-icon="format_list_bulleted">format_list_bulleted</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest" type="button">
<span className="material-symbols-outlined text-[16px]" data-icon="format_quote">format_quote</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-highest" type="button">
<span className="material-symbols-outlined text-[16px]" data-icon="link">link</span>
</button>
</div>
<div className="p-3.5 min-h-[140px] font-body-md text-on-surface space-y-2 focus:outline-none">
<p className="font-headline-sm text-[16px] text-tertiary italic">"Thay đổi không bắt đầu từ mục tiêu lớn lao, mà từ chu kỳ 1% cải thiện nhỏ nhặt mỗi ngày."</p>
<p className="text-body-sm leading-relaxed text-on-surface-variant">Trong ấn bản điện tử chính thức phân phối trên HUKI, độc giả được tiếp cận toàn bộ sơ đồ ma trận hành vi độ phân giải cao, chỉ mục tương tác chuyển chương tức thì và tính năng ghi chú riêng tư đồng bộ qua Cloud Reader.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-1">
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Ngôn ngữ <span className="text-primary">*</span></label>
<div className="relative">
<select className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface appearance-none focus:border-tertiary focus:ring-1 focus:ring-tertiary">
<option selected="">Tiếng Việt</option>
<option>English</option>
<option>Song ngữ Anh - Việt</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]" data-icon="expand_more">expand_more</span>
</div>
</div>
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Ngày phát hành điện tử <span className="text-primary">*</span></label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="date" value="2025-05-15" />
</div>
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Mã eISBN Bản Quyền Số <span className="text-primary">*</span></label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="text" value="978-604-58-9123-4-EB" />
</div>
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Số trang kỹ thuật số <span className="text-primary">*</span></label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="number" value="380" />
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant shadow-sm space-y-5" id="section-category">
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-surface-container text-tertiary font-bold text-xs flex items-center justify-center">2</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Phân Loại &amp; Tác Giả</h2>
</div>
<span className="material-symbols-outlined text-tertiary text-[20px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Danh mục chính <span className="text-primary">*</span></label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="text" value="Phát Triển Bản Thân" />
</div>
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Danh mục phụ</label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="text" value="Thói Quen &amp; Kỷ Luật" />
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="font-title-md text-[13px] font-semibold text-on-surface">Tác giả <span className="text-primary">*</span></label>
<a className="font-body-sm text-[11px] text-tertiary hover:underline" href="#">Không tìm thấy? Đề xuất mới</Link>
</div>
<div className="relative">
<input className="w-full h-11 pl-3.5 pr-8 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary font-medium" type="text" value="James Clear" />
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-tertiary text-[18px]" data-icon="check">check</span>
</div>
</div>
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Nhà xuất bản bản quyền <span className="text-primary">*</span></label>
<input className="w-full h-11 px-3.5 rounded-xl border border-surface-variant bg-surface font-body-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="text" value="NXB Thế Giới - Alpha Books" />
</div>
</div>

<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-2">Từ khóa tìm kiếm (Tags)</label>
<div className="flex flex-wrap gap-2 items-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-body-sm text-[12px] border border-surface-variant">
                  Atomic Habits
                  <button className="hover:text-primary"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-body-sm text-[12px] border border-surface-variant">
                  Ebook bản quyền
                  <button className="hover:text-primary"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-body-sm text-[12px] border border-surface-variant">
                  Kỷ luật bản thân
                  <button className="hover:text-primary"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
</span>
<input className="h-8 px-3 rounded-full border border-dashed border-surface-variant bg-transparent text-[12px] font-body-sm focus:border-tertiary focus:ring-0" placeholder="+ Thêm thẻ..." type="text" />
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant shadow-sm space-y-5" id="section-media">
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-surface-container text-tertiary font-bold text-xs flex items-center justify-center">3</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Ảnh Bìa Kỹ Thuật Số &amp; Media</h2>
</div>
<span className="material-symbols-outlined text-tertiary text-[20px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div className="flex gap-6">

<div className="w-40 flex-shrink-0">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-surface-variant shadow-md custom-spine-effect group bg-surface-container">
<img className="w-full h-full object-cover" alt="Official graphic book cover design of Atomic Habits Vietnamese edition, bold typography with subtle textured off-white background and geometric concentric progress circles in deep terracotta and emerald ink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOYh4ba1idBkiR2I8t0pbdA5FVcmBvHkOWsn-6ihQAw4v36GBdi9qZb-Ef2l9Q7pwf8U5b-YhC_MHz4uICBBj1fVy10mzaI1UWVXqpQY8u2Pt0bsfSl7mZtxUx2jwedu3VpfRL-dHGtqxlrkAAJCUYiX9sL3DilKi9JH38UBhTg7gbdhOvQ49VfEsuXjVZSGFMhjkdSxAVpWEetgSSRzLHqYif101iDoUn8nRyClOOEC8cuhL8j3JLag" />

<div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-inverse-surface/85 backdrop-blur-sm text-surface-bright font-label-sm text-[9px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[11px] text-tertiary-fixed" data-icon="lock">lock</span>
                    HUKI DRM
                  </div>

<div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-surface-container-lowest/90 text-on-surface font-label-sm text-[9px] font-semibold">
                    3:4 Hi-Res
                  </div>
</div>
<div className="flex gap-2 mt-2.5">
<button className="flex-1 py-1.5 rounded-lg border border-surface-variant text-on-surface font-body-sm text-[12px] hover:bg-surface-container text-center" type="button">
                    Thay ảnh
                  </button>
<button className="px-2 py-1.5 rounded-lg border border-surface-variant text-primary font-body-sm text-[12px] hover:bg-primary-fixed/20" type="button">
<span className="material-symbols-outlined text-[16px]" data-icon="delete">delete</span>
</button>
</div>
</div>

<div className="flex-1 space-y-4">
<div className="p-4 rounded-xl bg-surface border border-dashed border-surface-variant flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-tertiary text-[28px] mb-1" data-icon="add_photo_alternate">add_photo_alternate</span>
<span className="font-title-md text-[13px] font-semibold text-on-surface">Tải ảnh bìa sắc nét hoặc banner quảng bá Ebook</span>
<p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">Khuyến nghị tỉ lệ 3:4, tối thiểu 1600x2133 px, dung lượng dưới 10MB (JPG, PNG, WebP).</p>
<button className="mt-2.5 px-3 py-1 rounded-lg bg-surface-container-lowest border border-surface-variant font-body-sm text-[12px] font-medium hover:bg-surface-container">
                    Tải tệp lên từ máy
                  </button>
</div>

<div>
<span className="font-title-md text-[12px] font-semibold text-on-surface block mb-2">Thư viện ảnh trang sách mẫu &amp; Infographic minh họa (3)</span>
<div className="flex gap-3">
<div className="w-16 h-20 rounded-lg border border-surface-variant overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" alt="A clean infographic page preview displaying a four-step cue craving response reward habit loop diagram printed in minimal black and terracotta editorial layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwSz4ICEALQ7BW7d5Piktpd_iLDoCQsvkP8SXNBtxH2hlcRdP0m5kG1Z76w4LVUIZJBw5Er9itVIdCTwoT9xdev1AFuXOZttzRojLhtqccxe4SN_c2jz9RS4WVC2BqZMGAhmnVEEdVzXZlZ-4YSjGxG8NCv0BPjJUPylLSDryKzlYGCtgW-5Y9zCSo2VcOI-iQD71gmCt8LGBOc3hCmJ3N-6bZw_di6lBnYWwtPEn3esRDV3vReJl9w" />
</div>
<div className="w-16 h-20 rounded-lg border border-surface-variant overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" alt="A beautifully typeset book interior chapter header page with elegant Newsreader serif font, clean typography margins, and Vietnamese accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUkdO_KBXafZYeYIc4h0qGePrs2MBc9U6UloeqRMDnNaXnvAued2YBSWO-zQV39Web2b1ouxwGyxFW_-hDGIDmEmwTbtrjEKFA7haFoGL0URiYW78w-Is1otIIGEvxq_r8DLKWnEfIuTDdoPY4xt3n1p67ttOKNDROgfPL21IgXKB527wtlYeEKLF47pNO5xdb2XOLpLH23poyoJo5lWqm79Fv_Mi7SKK7cdOpBxf8T752MisOaSRIbA" />
</div>
<div className="w-16 h-20 rounded-lg border border-dashed border-surface-variant flex items-center justify-center text-on-surface-variant hover:border-tertiary cursor-pointer">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant shadow-sm space-y-5" id="section-pricing">
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-surface-container text-tertiary font-bold text-xs flex items-center justify-center">4</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Giá Bán Bản Quyền Ebook</h2>
</div>
<span className="material-symbols-outlined text-tertiary text-[20px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">Giá bìa niêm yết (Tham chiếu sách giấy)</label>
<div className="relative">
<input className="w-full h-11 pl-3.5 pr-10 rounded-xl border border-surface-variant bg-surface font-title-md text-on-surface focus:border-tertiary focus:ring-1 focus:ring-tertiary" type="text" value="149.000" />
<span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-title-md text-[13px] text-on-surface-variant">₫</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1 block">Dùng để tính mức giảm giá hấp dẫn hiển thị tới người đọc.</span>
</div>
<div>
<label className="block font-title-md text-[13px] font-semibold text-on-surface mb-1.5">
                  Giá bán Ebook HUKI <span className="text-primary">*</span>
</label>
<div className="relative">
<input className="w-full h-11 pl-3.5 pr-10 rounded-xl border-2 border-tertiary bg-surface-container-lowest font-title-md text-[16px] text-tertiary font-bold focus:border-tertiary focus:ring-0" type="text" value="79.000" />
<span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-title-md text-[14px] text-tertiary font-bold">₫</span>
</div>
<span className="font-body-sm text-[11px] text-tertiary font-medium mt-1 block">Doanh thu ròng sau thuế khấu trừ trực tiếp vào ví đối tác.</span>
</div>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low border border-tertiary-fixed flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-[20px]" data-icon="savings">savings</span>
<div>
<span className="font-title-md text-[13px] font-semibold text-on-surface">Tự động tính toán hiển thị:</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">Giá khách hàng thấy: <strong className="text-tertiary">79.000đ</strong> · Tiết kiệm: <strong className="text-on-surface">70.000đ (-47%)</strong> so với bản giấy.</p>
</div>
</div>
<span className="font-label-sm text-[11px] text-tertiary font-semibold bg-tertiary-fixed px-2 py-0.5 rounded">Tỉ lệ chuyển đổi cao</span>
</div>

<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[12px]">
<span className="material-symbols-outlined text-[16px] text-tertiary" data-icon="task_alt">task_alt</span>
<span>Không phát sinh chi phí vận chuyển, vật tư đóng gói hoặc rủi ro hoàn trả vật lý.</span>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-2xl border-2 border-tertiary/40 shadow-sm space-y-6 relative overflow-hidden" id="section-ebook-content">
<div className="absolute top-0 right-0 w-28 h-28 bg-tertiary/5 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary font-bold text-xs flex items-center justify-center shadow-sm">5</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Nội Dung Ebook &amp; Bảo Mật DRM</h2>
<p className="font-body-sm text-[12px] text-tertiary font-medium">Trung tâm tệp số phân phối độc quyền</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">
                DRM SECURE V3
              </span>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="font-title-md text-[13px] font-semibold text-on-surface">
                  Tệp Ebook Chính (Master File) <span className="text-primary">*</span>
</label>
<span className="font-body-sm text-[12px] text-on-surface-variant">Hỗ trợ PDF, EPUB 3.0 với mã hóa DRM</span>
</div>

<div className="p-4 rounded-xl bg-surface-container-low border border-tertiary/30 space-y-3">
<div className="flex items-start justify-between">
<div className="flex items-start gap-3.5">
<div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[26px]" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-[14px] font-bold text-on-surface">Atomic-Habits-Vietnamese-Edition.pdf</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-[10px] font-semibold">DRM Ready</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                        Dung lượng: <strong>48.2 MB</strong> · Định dạng: <strong>PDF DRM Ready</strong> · Ngày tải: <strong>10:32 hôm nay</strong>
</p>
</div>
</div>
<div className="flex items-center gap-1.5 text-tertiary font-title-md text-[12px] font-semibold bg-surface-container-lowest px-2.5 py-1 rounded-lg border border-tertiary/20">
<span className="material-symbols-outlined text-[16px]" data-icon="verified">verified</span>
<span>✓ Đã Xử Lý Sẵn Sàng (Ready)</span>
</div>
</div>

<div className="flex items-center justify-between pt-2 border-t border-surface-variant/60">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-surface-variant hover:bg-surface-container font-body-sm text-[12px] font-semibold text-on-surface flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px] text-tertiary" data-icon="chrome_reader_mode">chrome_reader_mode</span>
                      Xem Trước Nội Dung Đọc (Preview Reader)
                    </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-surface-variant hover:bg-surface-container font-body-sm text-[12px] text-on-surface flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="sync">sync</span>
                      Thay Tệp Khác
                    </button>
</div>
<button className="px-3 py-1.5 rounded-lg bg-tertiary-fixed/60 text-on-tertiary-fixed hover:bg-tertiary-fixed font-body-sm text-[12px] font-semibold flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]" data-icon="fingerprint">fingerprint</span>
                    Kiểm Tra DRM &amp; Watermark
                  </button>
</div>
</div>
</div>

<div className="p-4 rounded-xl border border-surface-variant bg-surface space-y-3">
<div className="flex items-center justify-between">
<div>
<span className="font-title-md text-[13px] font-semibold text-on-surface block">Nội Dung Đọc Thử / Xem Trước (Sample Preview)</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">Khuyến khích bạn đọc trải nghiệm trước khi thanh toán</p>
</div>

<div className="flex items-center gap-2 cursor-pointer">
<span className="font-body-sm text-[12px] font-medium text-tertiary">BẬT</span>
<div className="w-11 h-6 bg-tertiary rounded-full relative p-0.5 transition-colors">
<div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-5 transition-transform"></div>
</div>
</div>
</div>
<div className="pt-2 flex items-center gap-4 text-body-sm text-on-surface">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="text-tertiary focus:ring-tertiary" name="sample_rule" type="radio" />
<span className="font-medium text-[13px]">Tự động trích xuất 30 trang đầu tiên từ tệp chính (10% nội dung)</span>
</label>
</div>
</div>

<div className="p-4 rounded-xl bg-surface-container-low/70 border border-surface-variant flex items-start gap-3.5">
<span className="material-symbols-outlined text-tertiary text-[22px] flex-shrink-0 mt-0.5" data-icon="shield">shield</span>
<div className="space-y-1">
<span className="font-title-md text-[13px] font-semibold text-on-surface">Quyền Truy Cập Độc Quyền &amp; Chống Sao Chép</span>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Khách hàng mua sách sẽ được cấp quyền đọc vĩnh viễn trên ứng dụng HUKI Reader (iOS, Android, Web Reader). Hệ thống DRM độc quyền tự động chèn chữ ký số mờ (dynamic forensic watermarking) gồm ID người dùng, email và thời gian đọc trên từng trang để ngăn chặn hành vi chụp màn hình hoặc chia sẻ tệp trái phép.
                </p>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant shadow-sm space-y-4" id="section-rights">
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-surface-container text-tertiary font-bold text-xs flex items-center justify-center">6</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cam Kết Bản Quyền &amp; Giấy Phép Phân Phối Số</h2>
</div>
<span className="font-label-sm text-[11px] text-primary font-semibold">Bắt buộc</span>
</div>
<div className="p-4 rounded-xl border border-outline-variant bg-surface space-y-3">
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="w-5 h-5 rounded border-outline text-tertiary focus:ring-tertiary mt-0.5" type="checkbox" />
<div className="text-body-sm">
<span className="font-title-md text-[13px] font-semibold text-on-surface block">
                    Tôi xác nhận gian hàng Alpha Books Official sở hữu hợp pháp bản quyền phân phối nội dung số này trên nền tảng HUKI.
                  </span>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                    Hợp đồng nhượng quyền số mã định danh: <strong className="text-on-surface font-medium">HUKI-ALPHA-2024-C09</strong> có hiệu lực tới ngày 31/12/2028. Gian hàng chịu hoàn toàn trách nhiệm pháp lý nếu xảy ra tranh chấp sở hữu trí tuệ liên quan đến tệp dữ liệu đã tải lên.
                  </p>
</div>
</label>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant shadow-sm space-y-4" id="section-publish">
<div className="flex items-center justify-between border-b border-surface-variant pb-3">
<div className="flex items-center gap-2.5">
<span className="w-6 h-6 rounded-full bg-surface-container text-tertiary font-bold text-xs flex items-center justify-center">7</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tùy Chọn Xuất Bản</h2>
</div>
</div>
<div className="space-y-2.5">
<label className="flex items-center gap-3 p-3 rounded-xl border border-surface-variant hover:bg-surface cursor-pointer">
<input checked="" className="text-tertiary focus:ring-tertiary" name="publish_mode" type="radio" />
<div>
<span className="font-title-md text-[13px] font-semibold text-on-surface block">Tự động phát hành sau khi HUKI thẩm định DRM thành công</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Sách sẽ ngay lập tức xuất hiện trên kho tìm kiếm và cửa hàng HUKI Ebook sau 15-30 phút kiểm duyệt.</span>
</div>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl border border-surface-variant hover:bg-surface cursor-pointer">
<input className="text-tertiary focus:ring-tertiary" name="publish_mode" type="radio" />
<div>
<span className="font-title-md text-[13px] font-semibold text-on-surface block">Lưu kho chờ kích hoạt thủ công</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Dành cho các chiến dịch phát hành đồng bộ cùng sự kiện ra mắt hoặc hội sách online.</span>
</div>
</label>
</div>
</section>
</div>

<div className="w-[260px] flex-shrink-0 sticky top-[240px] space-y-5 pb-20">

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-surface-variant shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">Xem Trước Thẻ Sách</span>
<span className="material-symbols-outlined text-[16px] text-tertiary" data-icon="visibility">visibility</span>
</div>

<div className="rounded-xl border border-surface-variant p-3 bg-surface hover:shadow-md transition-all">
<div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2.5 custom-spine-effect bg-surface-container">
<img className="w-full h-full object-cover" alt="Clear frontal book cover of Atomic Habits Vietnamese digital edition with bold white and black graphics against warm ivory paper aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZSMbnZ3Ez4_3FpTz7wfaPvgqRxa7RxtJdoB39t0_rpI1ndq3lYzglRub13-bikf_0NiA_ddwUd8G57jPli9_K4CLfA8Lx0i9SORc5RHKcTuR0XKV4KNN7r_UTVLZUdmCPc6BgaGtJgQ2rFZU1qg6k0iUaCT_aM8yBCu67bljUty2xUxrsidImkdwACZCCl5V_m4_Ks6R3lRFHhb8SQ_CcbYgdyBIw3GH8iHIoinuVVDgdXczOal6dxg" />
<span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm text-[8px] font-bold uppercase tracking-wider shadow-sm">
                  EBOOK KỸ THUẬT SỐ
                </span>
</div>
<div>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">James Clear</span>
<h4 className="font-title-md text-[13px] font-bold text-on-surface leading-snug line-clamp-2 mt-0.5">
                  Atomic Habits (Ebook)
                </h4>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">79.000 ₫</span>
<span className="font-body-sm text-[11px] text-outline line-through">149.000 ₫</span>
</div>
<div className="mt-2 pt-2 border-t border-surface-variant flex items-center justify-between text-[11px] text-on-surface-variant">
<span className="flex items-center gap-1 text-tertiary font-medium">
<span className="material-symbols-outlined text-[13px]" data-icon="cloud_done">cloud_done</span>
                    HUKI Reader
                  </span>
<span className="font-semibold text-on-surface">Alpha Books</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-surface-variant shadow-sm space-y-2.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">Mức Độ Hoàn Thiện</span>
<span className="font-title-md text-[14px] font-bold text-tertiary">85%</span>
</div>

<div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style="width: 85%"></div>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
              Còn <strong>1 mục</strong> cần xác nhận trước khi gửi duyệt xuất bản chính thức.
            </p>
</div>

<div className="bg-surface-container-lowest p-4 rounded-2xl border border-surface-variant shadow-sm space-y-3">
<span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold block">Checklist Xuất Bản Số</span>
<div className="space-y-2 font-body-sm text-[12px]">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[16px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Tên sản phẩm &amp; Mô tả</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[16px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Phân loại &amp; Tác giả</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[16px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Ảnh bìa tỉ lệ 3:4 chuẩn</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[16px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Giá bán Ebook (79.000đ)</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[16px] fill-icon" data-icon="check_circle" data-weight="fill">check_circle</span>
<span>Tệp PDF DRM sẵn sàng</span>
</div>
<div className="flex items-center gap-2 text-primary font-medium">
<span className="material-symbols-outlined text-[16px]" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<span>Xác nhận quyền phân phối</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<aside className="fixed bottom-0 left-0 right-0 h-[68px] bg-surface-container-lowest/95 backdrop-blur-md border-t border-surface-variant z-50 px-8 shadow-lg">
<div className="max-w-[1440px] h-full mx-auto flex items-center justify-between">

<div className="flex items-center gap-3 text-body-sm text-[13px] text-on-surface-variant">
<span className="flex items-center gap-1.5 text-tertiary font-medium">
<span className="material-symbols-outlined text-[18px]" data-icon="cloud_done">cloud_done</span>
          Đã tự động lưu nháp lúc 10:42
        </span>
<span className="h-4 w-[1px] bg-surface-variant"></span>
<span>Bản nháp: <strong className="font-mono text-on-surface font-semibold">#EB-DRAFT-9921</strong></span>
<span className="h-4 w-[1px] bg-surface-variant"></span>
<span className="text-tertiary font-medium">Định dạng: Ebook Bản Quyền Số</span>
</div>

<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-xl border border-surface-variant bg-surface-container-lowest text-on-surface font-title-md text-[13px] hover:bg-surface-container transition-colors" type="button">
          Hủy / Thoát
        </button>
<button className="px-4 py-2 rounded-xl border border-surface-variant bg-surface-container-lowest text-on-surface font-title-md text-[13px] hover:bg-surface-container transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="save">save</span>
          Lưu Bản Nháp
        </button>
<button className="px-4 py-2 rounded-xl border border-tertiary bg-surface-container-lowest text-tertiary font-title-md text-[13px] hover:bg-surface-container-low transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span>
          Xem Thử Trên HUKI Reader
        </button>

<button className="px-6 py-2.5 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[13px] font-bold shadow-md hover:bg-tertiary-container transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="send">send</span>
          GỬI DUYỆT EBOOK
        </button>
</div>
</div>
</aside>

    </div>
  );
}
