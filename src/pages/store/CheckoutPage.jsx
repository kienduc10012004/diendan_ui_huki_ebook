import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function CheckoutPage() {
  return (
    <div className="stitch-page bg-surface font-body-md text-on-surface antialiased flex min-h-screen">
      <style>{".spine-shadow {\n      box-shadow: inset 3px 0 5px rgba(0, 0, 0, 0.18), inset -1px 0 2px rgba(255, 255, 255, 0.2);\n    }\n    .soft-card-shadow {\n      box-shadow: 0 4px 20px -2px rgba(20, 29, 28, 0.04), 0 2px 6px -1px rgba(20, 29, 28, 0.02);\n    }\n    .custom-scroll::-webkit-scrollbar {\n      width: 4px;\n    }\n    .custom-scroll::-webkit-scrollbar-thumb {\n      background: #dbe5e2;\n      border-radius: 4px;\n    }"}</style>


<aside className="w-[68px] h-screen bg-surface-container-lowest border-r border-surface-variant flex flex-col items-center py-4 fixed left-0 top-0 z-50 shrink-0 select-none">

<a className="w-10 h-10 rounded-xl bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm mb-6 transition-transform hover:scale-105" href="#" title="HUKI EBOOK">
<span className="material-symbols-outlined text-[22px]" data-icon="auto_stories">auto_stories</span>
</Link>

<nav className="flex flex-col gap-3 w-full items-center">

<a className="w-11 h-11 rounded-xl bg-surface-container text-tertiary flex items-center justify-center relative group transition-colors" href="#" title="Sàn TMĐT">
<span className="material-symbols-outlined text-[22px] fill-icon" data-icon="storefront">storefront</span>
<span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-tertiary rounded-r-full"></span>

<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-md">
          Sàn TMĐT
        </span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center relative group transition-colors" href="#" title="Diễn đàn">
<span className="material-symbols-outlined text-[22px]" data-icon="forum">forum</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-md">
          Diễn đàn Sách
        </span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center relative group transition-colors" href="#" title="Tủ sách của tôi">
<span className="material-symbols-outlined text-[22px]" data-icon="local_library">local_library</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-md">
          Tủ sách của tôi
        </span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center relative group transition-colors" href="#" title="Khám phá">
<span className="material-symbols-outlined text-[22px]" data-icon="explore">explore</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-md">
          Khám phá
        </span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center relative group transition-colors" href="#" title="Thử thách đọc sách">
<span className="material-symbols-outlined text-[22px]" data-icon="military_tech">military_tech</span>
<span className="absolute left-full ml-3 px-2 py-1 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-md">
          Thử thách 2025
        </span>
</Link>
</nav>

<div className="mt-auto flex flex-col gap-3 items-center w-full">
<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors" href="#" title="Trợ giúp &amp; Hướng dẫn">
<span className="material-symbols-outlined text-[22px]" data-icon="help_outline">help_outline</span>
</Link>
<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors" href="#" title="Cài đặt">
<span className="material-symbols-outlined text-[22px]" data-icon="settings">settings</span>
</Link>
</div>
</aside>

<div className="flex-1 ml-[68px] min-w-0 flex flex-col bg-surface">

<header className="h-[34px] bg-surface-container-low border-b border-surface-variant/60 flex items-center justify-between px-6 text-on-surface-variant text-label-sm font-label-sm z-40">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-tertiary font-medium">
<span className="material-symbols-outlined text-[14px]" data-icon="verified">verified</span>
          Hệ sinh thái đọc sách số &amp; Sàn TMĐT bản quyền chuẩn quốc tế
        </span>
<span className="text-outline/40">|</span>
<span className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="headset_mic">headset_mic</span>
          Hotline: 1900 6868 (8:00 - 21:00)
        </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-tertiary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]" data-icon="download">download</span>
          Tải ứng dụng đọc HUKI
        </Link>
<span className="text-outline/40">|</span>
<span className="hover:text-tertiary transition-colors cursor-pointer">Tiếng Việt (VN)</span>
</div>
</header>

<header className="h-[74px] bg-surface-container-lowest border-b border-surface-variant sticky top-0 z-40 shadow-sm px-6 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 text-primary font-headline-md text-headline-md font-semibold tracking-tight" href="#">
<span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]" data-icon="menu_book">menu_book</span>
</span>
<span>HUKI <span className="text-on-surface font-title-lg text-title-lg font-bold">EBOOK</span></span>
</Link>

<div className="flex items-center bg-surface-container-low p-1 rounded-lg border border-surface-variant">
<button className="px-3.5 py-1.5 rounded-md bg-surface-container-lowest text-tertiary font-title-md text-[13px] font-semibold shadow-xs flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] fill-icon" data-icon="storefront">storefront</span>
            Sàn TMĐT
          </button>
<button className="px-3.5 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-title-md text-[13px] font-medium transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]" data-icon="groups">groups</span>
            Mạng Xã Hội Sách
          </button>
</div>

<nav className="hidden lg:flex items-center gap-6 text-body-md font-body-md">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Trang chủ</Link>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Sách</Link>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Thể loại</Link>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Tác giả</Link>
<a className="text-primary font-medium flex items-center gap-1" href="#">
            Khuyến mãi
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
</Link>
</nav>
</div>

<div className="flex items-center gap-4">

<div className="relative w-64 hidden xl:block">
<input className="w-full h-10 pl-9 pr-3 rounded-lg border border-surface-variant bg-surface-container-lowest text-body-sm font-body-sm placeholder:text-outline focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none transition-all" placeholder="Tìm sách, tác giả, ISBN..." type="text" />
<span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant" data-icon="search">search</span>
</div>

<div className="flex items-center gap-1 text-on-surface-variant">
<button className="w-10 h-10 rounded-lg hover:bg-surface-container flex items-center justify-center transition-colors relative" title="Yêu thích">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
<button className="w-10 h-10 rounded-lg hover:bg-surface-container flex items-center justify-center transition-colors relative" title="Thông báo">
<span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"></span>
</button>
<button className="w-10 h-10 rounded-lg hover:bg-surface-container text-tertiary flex items-center justify-center transition-colors relative" title="Giỏ hàng">
<span className="material-symbols-outlined text-[20px]" data-icon="shopping_bag">shopping_bag</span>
<span className="absolute -top-1 -right-1 px-1.5 py-0.2 bg-tertiary text-on-tertiary font-label-sm text-[10px] rounded-full font-bold">4</span>
</button>
</div>
<div className="h-6 w-px bg-surface-variant"></div>

<div className="flex items-center gap-2.5 pl-1 cursor-pointer">
<img className="w-9 h-9 rounded-full object-cover border border-tertiary/20" alt="Chân dung bạn đọc Minh Trí, một chàng trai trẻ trí thức trong trang phục áo sơ mi thanh lịch, ánh mắt sáng và nụ cười hòa nhã, phong cách ảnh editorial hiện đại trên phông nền thư viện sách mờ ảo." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKWPO6UOk0V92x2kIZ0fGQbPaV8KfRwqBNfiNKJ14wDrfv_g1-R7cR3Q9UHpn3A9xQtydjNyTkfNS76bldwj0VcJaxPcSTm5r9d9ksjSKEf-7GAZT0aU0R7odO2021CvjtkKATAIM2kuqlHKoGGnuhsr7FFao3DQZX0qnNiHJwEbWw_dFyWbQL613GHUkF0R199YRkuVWvF1RgiDXDVv38rusYzbqefJJ5EtcUpBXM33Tfb0FKr3bSVQ" />
<div className="hidden sm:flex flex-col text-left">
<span className="font-title-md text-[13px] font-semibold text-on-surface leading-tight">Minh Trí</span>
<span className="font-label-sm text-[11px] text-tertiary font-medium">Thành viên Bạc</span>
</div>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
</header>

<div className="bg-surface-container-lowest border-b border-surface-variant py-4 px-6 md:px-12">
<div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

<div>
<nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mb-1">
<a className="hover:text-tertiary transition-colors" href="#">Trang chủ</Link>
<span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<a className="hover:text-tertiary transition-colors" href="#">Giỏ hàng</Link>
<span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span className="text-tertiary font-semibold">Thanh toán</span>
</nav>
<div className="flex items-baseline gap-3">
<h1 className="font-headline-lg text-headline-lg font-headline-md text-on-surface tracking-tight">Thanh Toán</h1>
<span className="text-body-md font-body-md text-on-surface-variant hidden sm:inline">Kiểm tra thông tin đơn hàng trước khi hoàn tất thanh toán.</span>
</div>
</div>

<div className="flex items-center gap-1 sm:gap-2">

<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-surface-container-low text-tertiary border border-tertiary/30 flex items-center justify-center font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] font-bold" data-icon="check">check</span>
</div>
<span className="font-title-md text-[13px] font-medium text-tertiary hidden xl:inline">Giỏ hàng</span>
</div>
<div className="w-8 lg:w-12 h-0.5 bg-tertiary"></div>

<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-surface-container-low text-tertiary border border-tertiary/30 flex items-center justify-center font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] font-bold" data-icon="check">check</span>
</div>
<span className="font-title-md text-[13px] font-medium text-tertiary hidden xl:inline">Thông tin</span>
</div>
<div className="w-8 lg:w-12 h-0.5 bg-tertiary"></div>

<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-title-md text-[13px] font-semibold shadow-sm ring-4 ring-tertiary/15">
              3
            </div>
<span className="font-title-md text-[13px] font-semibold text-on-surface">Thanh toán</span>
</div>
<div className="w-8 lg:w-12 h-0.5 bg-surface-variant"></div>

<div className="flex items-center gap-2 opacity-50">
<div className="w-7 h-7 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant flex items-center justify-center font-title-md text-[13px]">
              4
            </div>
<span className="font-title-md text-[13px] font-medium text-on-surface-variant hidden xl:inline">Hoàn tất</span>
</div>
</div>
</div>
</div>

<main className="flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-12 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 flex flex-col gap-6">

<section className="bg-surface-container-lowest rounded-2xl border border-surface-variant soft-card-shadow p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary via-tertiary-container to-secondary-container opacity-80"></div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2.5">
<span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="location_on">location_on</span>
</span>
<h2 className="font-title-lg text-title-lg font-semibold text-on-surface">Địa Chỉ Nhận Hàng (Dành cho Sách Giấy)</h2>
</div>
<button className="px-3 py-1.5 rounded-lg text-tertiary hover:bg-surface-container-low font-title-md text-body-sm font-semibold transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="edit">edit</span>
                Thay đổi
              </button>
</div>
<div className="pl-10">
<div className="flex flex-wrap items-center gap-3 mb-1.5">
<span className="font-title-md text-title-md text-on-surface font-semibold">Lê Đức Kiên</span>
<span className="text-on-surface-variant font-body-md text-body-md font-medium">09•• ••• •••</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-tertiary border border-tertiary/20 font-label-sm text-[11px] font-semibold uppercase tracking-wider">
                  Mặc định
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                  Nhà riêng
                </span>
</div>
<p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                12 Nguyễn Văn Bảo, Phường Hạnh Thông, Quận Gò Vấp, TP. Hồ Chí Minh
              </p>
<div className="mt-3 flex items-center gap-2 text-label-sm text-outline">
<span className="material-symbols-outlined text-[15px] text-tertiary" data-icon="schedule">schedule</span>
<span>Giao hàng giờ hành chính (Thứ 2 - Thứ 7)</span>
</div>
</div>
</section>

<section className="bg-[#EEF7F4] rounded-2xl border border-[#B8DFD5] p-5 flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<span className="material-symbols-outlined text-[22px]" data-icon="auto_stories">auto_stories</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h3 className="font-title-md text-title-md font-semibold text-[#003F32]">
                  Đơn hàng của bạn bao gồm cả Sách giấy và Ebook bản quyền
                </h3>
<span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-[11px] font-bold">Hybrid Cart</span>
</div>
<p className="text-body-md font-body-md text-[#143029] mt-1.5 leading-relaxed">
<strong className="font-semibold text-on-surface">Sách in</strong> sẽ được đóng gói cẩn thận và vận chuyển tận nơi theo địa chỉ trên. <strong className="font-semibold text-tertiary">Ebook kỹ thuật số</strong> sẽ được kích hoạt trực tiếp vào <em>Tủ Sách HUKI</em> cá nhân của bạn ngay tức thì sau khi thanh toán thành công.
              </p>
</div>
</section>

<div className="flex flex-col gap-6">

<section className="bg-surface-container-lowest rounded-2xl border border-surface-variant soft-card-shadow p-6">

<div className="flex flex-wrap items-center justify-between pb-4 border-b border-surface-variant gap-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface font-title-md font-bold">
                    α
                  </div>
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md font-semibold text-on-surface">Alpha Books Official</span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-surface-container-low text-tertiary text-label-sm font-semibold border border-tertiary/20">
<span className="material-symbols-outlined text-[13px] fill-icon" data-icon="verified">verified</span>
                        Chính hãng
                      </span>
</div>
<span className="text-label-sm text-outline font-label-sm">Đối tác xuất bản chiến lược HUKI Ebook</span>
</div>
</div>
<button className="text-tertiary hover:underline text-body-sm font-body-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="chat">chat</span>
                  Chat với Shop
                </button>
</div>

<div className="divide-y divide-surface-variant/60">

<div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">

<div className="w-[60px] h-[86px] rounded-md overflow-hidden shrink-0 border border-surface-variant relative shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa sách Atomic Habits Thay Đổi Tí Hon Hiệu Quả Bất Ngờ của tác giả James Clear, phong cách đồ họa tối giản sang trọng với các chấm tròn năng lượng ấm áp trên nền giấy kem tinh tế." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYxDrDwd6cRo51x85s-IHrwP8ZAynsX3_2RqoOYCRMKtHUfmLnJZzpwpzKNx3JkXaZaBWzI6ddp-sKx7mAqs2Rw9jLprZLac9-Izr97AuX_fsO3cQr6g7alvWqHcOvZYWdo_XdOmZATseF9ikHeve9kEj4bDHpj4NorN8ZrligBl_Ble_Y6x1uI2Jsk3_ZbIsfVo7erInSksjZqnXecL6QiSx1TNxwhZ3-7DIGPirwHKNcqJ1kmDmy6Q" />
<div className="absolute inset-0 spine-shadow pointer-events-none"></div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-[11px] font-semibold">
                          Sách giấy
                        </span>
<span className="text-outline text-label-sm">Bìa mềm · Tái bản 2024</span>
</div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface hover:text-tertiary transition-colors cursor-pointer">
                        Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ
                      </h4>
<p className="text-body-sm text-on-surface-variant font-body-sm mt-0.5">Tác giả: James Clear</p>
<div className="flex items-center gap-2 mt-2">
<span className="font-title-md text-title-md text-primary font-bold">129.000đ</span>
<span className="text-body-sm text-outline line-through">189.000đ</span>
<span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">-32%</span>
</div>
</div>
</div>
<div className="sm:text-right shrink-0">
<span className="text-body-md font-body-md text-on-surface-variant">Số lượng: <strong className="text-on-surface font-semibold">x1</strong></span>
<div className="font-title-md text-title-md font-bold text-on-surface mt-1">129.000đ</div>
</div>
</div>

<div className="py-3 bg-surface-container-low/50 rounded-xl p-4 my-2 border border-surface-variant/70">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5 text-tertiary font-title-md text-body-sm font-semibold">
<span className="material-symbols-outlined text-[18px]" data-icon="local_shipping">local_shipping</span>
                      Phương thức vận chuyển sách in:
                    </div>
<span className="text-label-sm text-outline">Giao từ kho Q. Bình Thạnh</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">

<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border-2 border-tertiary cursor-pointer shadow-xs">
<div className="flex items-center gap-2.5">
<input checked="" className="text-tertiary focus:ring-tertiary w-4 h-4" name="shipping_alpha" type="radio" />
<div>
<p className="font-title-md text-[13px] font-semibold text-on-surface">Giao hàng tiêu chuẩn</p>
<p className="text-label-sm text-outline">Dự kiến nhận: 10–12/09</p>
</div>
</div>
<span className="font-title-md text-body-sm font-bold text-on-surface">25.000đ</span>
</label>

<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-surface-variant hover:border-tertiary/40 cursor-pointer transition-colors">
<div className="flex items-center gap-2.5">
<input className="text-tertiary focus:ring-tertiary w-4 h-4" name="shipping_alpha" type="radio" />
<div>
<p className="font-title-md text-[13px] font-semibold text-on-surface">Giao hàng hỏa tốc</p>
<p className="text-label-sm text-outline">Nhận trong 4 giờ làm việc</p>
</div>
</div>
<span className="font-title-md text-body-sm font-bold text-on-surface">40.000đ</span>
</label>
</div>
</div>

<div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">

<div className="w-[60px] h-[86px] rounded-md overflow-hidden shrink-0 border border-tertiary/30 relative shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa cuốn sách điện tử Deep Work Làm Ra Làm Chơi Ra Chơi của Cal Newport trên nền tông màu xanh ngọc lục bảo tinh xảo và sang trọng, phong cách minh họa sách bản quyền kỹ thuật số cao cấp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMDX-7jeiygzFpBm_8Id_9RgN0cR8pDybhXyXktPzctkwFpKMnqTByAkSEcvF87JzbemIBXyMkxbnwAjysE5Ph1arW9baZWIZdZxz5zWTPOoaRrjRNSdC5vJwBAGa9swSPsIlmPB2McJPYIj4fpFta9Q-k4Gy7mrTfAeYZpA4VAJTmOvXZ0L7k_-2obKS1S5u3mwsUaTQegl1thT-JT7_37O1upolEzrV7gcedfvgAFBXKMhdF54TnQA" />
<div className="absolute inset-0 spine-shadow pointer-events-none"></div>
<div className="absolute bottom-1 right-1 bg-tertiary text-on-tertiary rounded px-1 text-[9px] font-bold">EPUB</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container-low text-tertiary border border-tertiary/30 font-label-sm text-[11px] font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" data-icon="tablet_mac">tablet_mac</span>
                          Ebook bản quyền
                        </span>
<span className="text-tertiary text-label-sm font-medium">Bản quyền số vĩnh viễn</span>
</div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface hover:text-tertiary transition-colors cursor-pointer">
                        Deep Work – Làm Ra Làm, Chơi Ra Chơi
                      </h4>
<p className="text-body-sm text-on-surface-variant font-body-sm mt-0.5">Tác giả: Cal Newport</p>

<div className="mt-2 flex items-center gap-1.5 text-label-sm text-tertiary font-medium bg-surface-container-low px-2.5 py-1 rounded-md border border-tertiary/20">
<span className="material-symbols-outlined text-[15px]" data-icon="bolt">bolt</span>
                        Giao hàng kỹ thuật số: Miễn phí · Cấp quyền đọc vĩnh viễn trên Tủ Sách HUKI ngay sau khi thanh toán
                      </div>
</div>
</div>
<div className="sm:text-right shrink-0">
<span className="text-label-sm text-outline font-label-sm">Định dạng số (1 tài khoản)</span>
<div className="font-title-md text-title-md font-bold text-on-surface mt-1">79.000đ</div>
</div>
</div>
</div>

<div className="pt-4 mt-2 border-t border-surface-variant/60 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
<div className="flex items-center gap-2 bg-[#FFF7ED] border border-[#FDBA74] px-3 py-1.5 rounded-lg text-secondary">
<span className="material-symbols-outlined text-[18px] text-secondary" data-icon="confirmation_number">confirmation_number</span>
<span className="font-label-md text-label-md font-semibold">Voucher Shop ALPHA20:</span>
<span className="text-body-sm font-bold text-primary">-20.000đ</span>
</div>
<div className="flex-1 max-w-md">
<div className="relative">
<input className="w-full h-9 pl-8 pr-3 rounded-lg border border-surface-variant text-body-sm placeholder:text-outline/70 focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none" placeholder="Lời nhắn cho người bán (Alpha Books)..." type="text" />
<span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[16px] text-outline" data-icon="edit_note">edit_note</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-2xl border border-surface-variant soft-card-shadow p-6">

<div className="flex flex-wrap items-center justify-between pb-4 border-b border-surface-variant gap-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface font-title-md font-bold">
                    FN
                  </div>
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md font-semibold text-on-surface">Nhà Sách HUKI Partner - First News Trí Việt</span>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-surface-container-low text-tertiary text-label-sm font-semibold border border-tertiary/20">
<span className="material-symbols-outlined text-[13px] fill-icon" data-icon="verified">verified</span>
                        Đối tác uy tín
                      </span>
</div>
<span className="text-label-sm text-outline font-label-sm">Đơn vị phát hành sách uy tín hàng đầu</span>
</div>
</div>
<button className="text-tertiary hover:underline text-body-sm font-body-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="chat">chat</span>
                  Chat với Shop
                </button>
</div>

<div className="divide-y divide-surface-variant/60">

<div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">

<div className="w-[60px] h-[86px] rounded-md overflow-hidden shrink-0 border border-surface-variant relative shadow-xs">
<img className="w-full h-full object-cover" alt="Bìa cuốn sách Tâm Lý Học Về Tiền của tác giả Morgan Housel xuất bản bởi First News, thiết kế nghệ thuật với phông chữ thanh lịch và biểu tượng đồng tiền trên nền giấy mộc mạc." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCseD2G_jzZQKfVDbKGdmTazttATJBNrrMIauQM9Dy7h90VPFyfSNfPc6gxc1yROZRc7u5SyRoe6wqvYscAHL7HYUReW4h4SVMnyP7UjG0XTa48XQ9UD4112r5EQVyKGrR3uz3UUGhV0ZDBfWo0iGgGpxXxl8lbZSjr5GdL8kcjXWT4LK3OQiFcu4KpL9ysaaLgvJUkxs6teRvARa2qpubqECRRonzY86jlxtRu0mBfVfmZXbqYTcMYKA" />
<div className="absolute inset-0 spine-shadow pointer-events-none"></div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-[11px] font-semibold">
                          Sách giấy
                        </span>
<span className="text-outline text-label-sm">Bìa mềm tay gập · Bản cao cấp</span>
</div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface hover:text-tertiary transition-colors cursor-pointer">
                        Tâm Lý Học Về Tiền (The Psychology of Money)
                      </h4>
<p className="text-body-sm text-on-surface-variant font-body-sm mt-0.5">Tác giả: Morgan Housel</p>
<div className="flex items-center gap-2 mt-2">
<span className="font-title-md text-title-md text-primary font-bold">149.000đ</span>
<span className="text-body-sm text-outline line-through">190.000đ</span>
<span className="text-body-sm text-on-surface-variant font-medium">/ 1 cuốn</span>
</div>
</div>
</div>
<div className="sm:text-right shrink-0">
<span className="text-body-md font-body-md text-on-surface-variant">Số lượng: <strong className="text-on-surface font-semibold">x2</strong></span>
<div className="font-title-md text-title-md font-bold text-on-surface mt-1">298.000đ</div>
</div>
</div>

<div className="py-3 bg-surface-container-low/50 rounded-xl p-4 my-2 border border-surface-variant/70">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5 text-tertiary font-title-md text-body-sm font-semibold">
<span className="material-symbols-outlined text-[18px]" data-icon="local_shipping">local_shipping</span>
                      Phương thức vận chuyển sách in:
                    </div>
<span className="text-label-sm text-outline">Giao từ kho Q.1 TP.HCM</span>
</div>

<label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border-2 border-tertiary cursor-pointer shadow-xs max-w-md">
<div className="flex items-center gap-2.5">
<input checked="" className="text-tertiary focus:ring-tertiary w-4 h-4" name="shipping_firstnews" type="radio" />
<div>
<p className="font-title-md text-[13px] font-semibold text-on-surface">Giao hàng tiết kiệm</p>
<p className="text-label-sm text-outline">Dự kiến nhận: 11–13/09</p>
</div>
</div>
<span className="font-title-md text-body-sm font-bold text-on-surface">20.000đ</span>
</label>
</div>
</div>

<div className="pt-4 mt-2 border-t border-surface-variant/60 flex items-center justify-end">
<div className="w-full max-w-md">
<div className="relative">
<input className="w-full h-9 pl-8 pr-3 rounded-lg border border-surface-variant text-body-sm placeholder:text-outline/70 focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none" placeholder="Lời nhắn cho First News..." type="text" />
<span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[16px] text-outline" data-icon="edit_note">edit_note</span>
</div>
</div>
</div>
</section>
</div>

<section className="bg-surface-container-lowest rounded-2xl border border-surface-variant soft-card-shadow p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2.5">
<span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" data-icon="account_balance_wallet">account_balance_wallet</span>
</span>
<h2 className="font-title-lg text-title-lg font-semibold text-on-surface">Phương Thức Thanh Toán</h2>
</div>
<span className="text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-tertiary" data-icon="lock">lock</span>
                Mã hóa SSL 256-bit
              </span>
</div>
<div className="flex flex-col gap-3">

<label className="p-4 rounded-xl border-2 border-tertiary bg-surface-container-low flex items-start justify-between cursor-pointer transition-all shadow-xs relative">
<div className="flex items-start gap-3.5">
<input checked="" className="mt-1 text-tertiary focus:ring-tertiary w-4 h-4" name="payment_method" type="radio" />
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md font-bold text-on-surface">PayOS</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-[11px] font-bold">
                        Khuyên dùng · Tự động 24/7
                      </span>
</div>
<p className="text-body-sm text-on-surface-variant font-body-sm mt-1">
                      Thanh toán trực tuyến quét mã <strong>VietQR</strong> qua hơn 40+ ứng dụng ngân hàng và ví điện tử (MoMo, ZaloPay). Hệ thống kích hoạt sách số tức thì trong 3 giây.
                    </p>
<div className="flex items-center gap-2 mt-2 text-[12px] font-medium text-tertiary">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]" data-icon="qr_code_scanner">qr_code_scanner</span>
                        Tạo mã QR tức thì
                      </span>
<span>•</span>
<span>Miễn phí giao dịch</span>
</div>
</div>
</div>
<div className="shrink-0 flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded border border-surface-variant text-[11px] font-bold text-tertiary">
                  VietQR
                </div>
</label>

<label className="p-4 rounded-xl border border-surface-variant hover:border-tertiary/50 bg-surface-container-lowest flex items-start justify-between cursor-pointer transition-colors">
<div className="flex items-start gap-3.5">
<input className="mt-1 text-tertiary focus:ring-tertiary w-4 h-4" name="payment_method" type="radio" />
<div>
<span className="font-title-md text-title-md font-bold text-on-surface">VNPay-QR</span>
<p className="text-body-sm text-on-surface-variant font-body-sm mt-0.5">
                      Thanh toán qua cổng VNPAY quét mã QR hoặc thẻ ATM nội địa / Thẻ quốc tế Visa, Mastercard, JCB.
                    </p>
</div>
</div>
<span className="font-label-sm text-outline font-medium">Cổng VNPay</span>
</label>

<div className="p-4 rounded-xl border border-surface-variant/50 bg-surface-container/30 opacity-70 cursor-not-allowed">
<div className="flex items-start gap-3.5">
<input className="mt-1 text-outline w-4 h-4 cursor-not-allowed" disabled="" name="payment_method" type="radio" />
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md font-semibold text-outline">Thanh toán khi nhận hàng (COD)</span>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[11px] font-semibold">
                        Không khả dụng
                      </span>
</div>

<div className="mt-2 p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 flex items-start gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5" data-icon="info">info</span>
<span>
<strong>Không áp dụng COD</strong> cho đơn hàng có chứa <strong>Ebook bản quyền</strong> (yêu cầu thanh toán trực tuyến để kích hoạt quyền đọc ngay lập tức vào Tủ Sách cá nhân).
                      </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-2xl border border-surface-variant soft-card-shadow p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]" data-icon="receipt_long">receipt_long</span>
</span>
<div>
<label className="font-title-md text-title-md font-semibold text-on-surface cursor-pointer select-none" htmlFor="vat_invoice">
                  Yêu cầu xuất hóa đơn GTGT điện tử (e-VAT)
                </label>
<p className="text-body-sm text-outline font-body-sm">Hóa đơn hợp lệ cho cá nhân hoặc doanh nghiệp sẽ gửi qua email</p>
</div>
</div>
<input className="w-5 h-5 rounded border-surface-variant text-tertiary focus:ring-tertiary cursor-pointer" id="vat_invoice" type="checkbox" />
</section>
</div>

<aside className="lg:col-span-4 lg:sticky lg:top-[100px] flex flex-col gap-6">
<div className="bg-surface-container-lowest rounded-2xl border border-surface-variant soft-card-shadow p-6 overflow-hidden">

<div className="flex items-center justify-between pb-4 border-b border-surface-variant">
<h3 className="font-title-lg text-title-lg font-bold text-on-surface">Tóm Tắt Thanh Toán</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                4 sản phẩm · 2 shop
              </span>
</div>

<div className="py-4 space-y-3 font-body-md text-body-md text-on-surface-variant border-b border-surface-variant">

<div className="flex items-center justify-between">
<span>Tạm tính hàng hóa:</span>
<span className="font-medium text-on-surface">506.000đ</span>
</div>

<div className="flex items-center justify-between">
<span>Giảm giá sản phẩm:</span>
<span className="font-semibold text-primary">-40.000đ</span>
</div>

<div className="flex items-center justify-between">
<span className="flex items-center gap-1">
                  Voucher shop (Alpha Books):
                  <span className="material-symbols-outlined text-[14px] text-secondary" data-icon="sell">sell</span>
</span>
<span className="font-semibold text-secondary">-20.000đ</span>
</div>

<div className="flex items-center justify-between">
<span className="flex items-center gap-1">
                  Voucher HUKI (<code className="text-tertiary font-bold">HUKI30</code>):
                  <span className="material-symbols-outlined text-[14px] text-tertiary" data-icon="stars">stars</span>
</span>
<span className="font-semibold text-tertiary">-30.000đ</span>
</div>

<div className="flex items-center justify-between">
<div>
<span>Phí vận chuyển sách in:</span>
<span className="text-label-sm text-outline block text-[11px]">(2 shop: 25k + 20k)</span>
</div>
<span className="font-medium text-on-surface">45.000đ</span>
</div>

<div className="flex items-center justify-between text-tertiary">
<span>Phí cấp bản quyền Ebook:</span>
<span className="font-semibold uppercase text-label-sm tracking-wider">Miễn phí 100%</span>
</div>
</div>

<div className="pt-4 pb-2">
<div className="flex items-baseline justify-between mb-1">
<span className="font-title-lg text-title-lg font-bold text-on-surface">TỔNG THANH TOÁN:</span>
<div className="text-right">
<span className="font-headline-lg text-[28px] font-bold text-[#003F32] tracking-tight">461.000đ</span>
<span className="block text-label-sm text-outline font-label-sm">(Đã bao gồm VAT)</span>
</div>
</div>

<div className="p-3 rounded-xl bg-surface-container-low border border-tertiary/20 my-3 text-[12px] text-[#005140] leading-relaxed">
<div className="font-semibold mb-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="pie_chart">pie_chart</span>
                  Phân rã đơn hàng kết hợp:
                </div>
<div>• Sách in giao tận nơi: <strong className="text-on-surface font-semibold">382.000đ</strong></div>
<div>• Ebook kích hoạt đọc ngay: <strong className="text-tertiary font-semibold">79.000đ</strong></div>
</div>
</div>

<div className="bg-surface-container/50 rounded-xl p-3 border border-surface-variant/80 flex items-start gap-2.5 mb-5">
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 mt-0.5" data-icon="menu_book">menu_book</span>
<div className="text-label-sm text-on-surface-variant">
                Quyền đọc cuốn <strong>Deep Work</strong> sẽ được đồng bộ ngay vào tài khoản: <span className="text-tertiary font-bold">kien***@gmail.com</span> trên Web &amp; App HUKI.
              </div>
</div>

<button className="w-full h-[52px] rounded-[10px] bg-[#005B46] hover:bg-[#003F32] active:scale-[0.99] text-white font-title-lg text-title-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer">
<span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110" data-icon="lock">lock</span>
<span>THANH TOÁN 461.000đ</span>
</button>

<div className="mt-4 pt-3 border-t border-surface-variant/50 text-center text-label-sm text-outline flex flex-col items-center gap-1.5">
<div className="flex items-center gap-2">
<span className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[14px]" data-icon="security">security</span>
                  Bảo mật SSL 256-bit
                </span>
<span>•</span>
<span>Hoàn tiền 100% nếu lỗi sách</span>
</div>
<p className="text-[11px] leading-tight">
                Nhấn "Thanh toán", bạn đồng ý với <a className="underline hover:text-tertiary" href="#">Điều khoản mua hàng</Link> &amp; <a className="underline hover:text-tertiary" href="#">Bản quyền số</Link> của HUKI EBOOK.
              </p>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl border-l-4 border-l-primary p-4 border border-surface-variant/50">
<div className="flex items-center gap-2 text-primary font-title-md text-[13px] font-semibold mb-1">
<span className="material-symbols-outlined text-[16px]" data-icon="auto_awesome">auto_awesome</span>
              Đặc quyền bạn đọc HUKI EBOOK
            </div>
<p className="text-body-sm font-headline-md text-on-surface-variant italic">
              "Mỗi trang sách số bạn đọc hôm nay là một đóng góp trực tiếp cho tác giả và ngành xuất bản bản quyền Việt Nam. HUKI đồng hành cùng bạn trên từng trang sách."
            </p>
</div>
</aside>
</div>
</main>

<footer className="w-full mt-space-3xl border-t border-outline-variant bg-surface-container-low text-on-surface">
<div className="max-w-[1280px] mx-auto px-margin-desktop py-space-2xl flex flex-col justify-between">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

<div className="md:col-span-1">
<div className="font-headline-md text-headline-md font-semibold text-primary flex items-center gap-space-xs mb-3">
<span className="material-symbols-outlined text-[24px]" data-icon="menu_book">menu_book</span>
<span>HUKI EBOOK</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
              Nền tảng thương mại điện tử sách giấy &amp; hệ thống phân phối sách điện tử bản quyền tiên phong tại Việt Nam.
            </p>
<div className="flex items-center gap-3 text-tertiary">
<span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-tertiary hover:text-on-tertiary transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="share">share</span>
</span>
<span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-tertiary hover:text-on-tertiary transition-colors">
<span className="material-symbols-outlined text-[16px]" data-icon="mail">mail</span>
</span>
</div>
</div>

<div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface mb-3">Về Chúng Tôi</h4>
<ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="#">Về Huki Ebook</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Bản quyền &amp; DMCA</Link></li>
</ul>
</div>

<div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface mb-3">Hỗ Trợ Khách Hàng</h4>
<ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="#">Hướng dẫn mua hàng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách vận chuyển sách in</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Cài đặt ứng dụng đọc Ebook</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Liên hệ hỗ trợ</Link></li>
</ul>
</div>

<div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface mb-3">Thanh Toán An Toàn</h4>
<p className="text-body-sm text-on-surface-variant mb-3">Chấp nhận thanh toán trực tuyến qua các đối tác hàng đầu:</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container-lowest border border-surface-variant text-label-sm font-bold text-tertiary">PayOS</span>
<span className="px-2.5 py-1 rounded bg-surface-container-lowest border border-surface-variant text-label-sm font-bold text-tertiary">VietQR</span>
<span className="px-2.5 py-1 rounded bg-surface-container-lowest border border-surface-variant text-label-sm font-bold text-on-surface">VNPAY</span>
<span className="px-2.5 py-1 rounded bg-surface-container-lowest border border-surface-variant text-label-sm font-bold text-on-surface">VISA / JCB</span>
</div>
</div>
</div>

<div className="pt-6 border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between text-body-sm text-on-surface-variant gap-4">
<p>© 2025 HUKI EBOOK. Bản quyền thuộc về Công ty TNHH Sách Điện Tử Huki.</p>
<div className="flex items-center gap-6">
<span className="hover:text-primary transition-colors cursor-pointer">Bảo mật thông tin</span>
<span className="hover:text-primary transition-colors cursor-pointer">Quy chế hoạt động sàn</span>
<span className="hover:text-primary transition-colors cursor-pointer">Giải quyết khiếu nại</span>
</div>
</div>
</div>
</footer>
</div>

    </div>
  );
}
