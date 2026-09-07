import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function BookDetailPage() {
  return (
    <div className="stitch-page bg-surface text-on-surface font-body-md min-h-screen flex flex-row selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <style>{".material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n      display: inline-block;\n      vertical-align: middle;\n      line-height: 1;\n    }\n    .spine-crease {\n      position: relative;\n    }\n    .spine-crease::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      width: 14px;\n      background: linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.03) 45%, transparent 100%);\n      pointer-events: none;\n      border-top-left-radius: inherit;\n      border-bottom-left-radius: inherit;\n    }\n    .custom-scrollbar::-webkit-scrollbar {\n      width: 4px;\n    }\n    .custom-scrollbar::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 105, 83, 0.2);\n      border-radius: 9999px;\n    }"}</style>




<aside className="w-[68px] h-screen sticky top-0 flex-shrink-0 bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col items-center justify-between py-space-sm z-40">

<div className="flex flex-col items-center gap-space-sm w-full">

<a className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center font-headline-sm font-bold shadow-sm mb-space-xs hover:scale-105 transition-transform" href="#" title="HUKI EBOOK">
        H
      </Link>

<div className="flex flex-col items-center gap-1 w-full px-1">

<a className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex flex-col items-center justify-center group relative transition-all" href="#" title="Sàn TMĐT">
<span className="material-symbols-outlined text-[22px] fill-icon">storefront</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5 font-semibold">Sàn</span>
<span className="absolute left-0 top-2 bottom-2 w-1 bg-tertiary rounded-r-full"></span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Diễn Đàn">
<span className="material-symbols-outlined text-[20px]">forum</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Diễn đàn</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Tủ Sách">
<span className="material-symbols-outlined text-[20px]">local_library</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Tủ sách</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Khám Phá">
<span className="material-symbols-outlined text-[20px]">explore</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Khám phá</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Thử Thách Đọc">
<span className="material-symbols-outlined text-[20px]">military_tech</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Thử thách</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Thống Kê">
<span className="material-symbols-outlined text-[20px]">insights</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Thống kê</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Câu Lạc Bộ">
<span className="material-symbols-outlined text-[20px]">groups</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">CLB</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center group" href="#" title="Kênh Nhà Xuất Bản">
<span className="material-symbols-outlined text-[20px]">assured_workload</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Kênh NXB</span>
</Link>
</div>
</div>

<div className="flex flex-col items-center gap-1 w-full px-1 border-t border-outline-variant/30 pt-space-xs">
<a className="w-12 h-11 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center" href="#" title="Mô-đun Tiện Ích">
<span className="material-symbols-outlined text-[20px]">extension</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Mô-đun</span>
</Link>
<a className="w-12 h-11 rounded-xl text-on-surface-variant hover:text-tertiary hover:bg-surface-container transition-colors flex flex-col items-center justify-center" href="#" title="Cài Đặt">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-label-sm text-[9px] tracking-tight mt-0.5">Cài đặt</span>
</Link>
</div>
</aside>



<div className="flex-1 flex flex-col min-w-0 bg-surface">

<div className="w-full h-[34px] bg-surface-container-lowest border-b border-outline-variant/20 px-margin-desktop flex items-center justify-between text-on-surface-variant text-[12px] font-body-sm select-none">
<div className="flex items-center gap-space-lg">
<span className="flex items-center gap-1 text-tertiary font-semibold">
<span className="material-symbols-outlined text-[15px]">auto_stories</span>
          Không gian Đọc Sách Số &amp; Sàn Giao Dịch Bản Quyền Việt Nam
        </span>
<span className="hidden xl:inline text-outline-variant/60">|</span>
<span className="hidden xl:flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">verified</span>
          100% Sách điện tử chính hãng có bảo vệ bản quyền DRM
        </span>
</div>
<div className="flex items-center gap-space-md">
<a className="hover:text-tertiary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">help_center</span>
          Trợ giúp &amp; Hỗ trợ
        </Link>
<span className="text-outline-variant/60">|</span>
<a className="hover:text-tertiary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">download</span>
          Tải ứng dụng HUKI Ebook
        </Link>
<span className="text-outline-variant/60">|</span>
<span className="inline-flex items-center gap-1 text-tertiary font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          Máy chủ đám mây: Sẵn sàng
        </span>
</div>
</div>

<header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm sticky top-0 z-30 transition-all duration-200 ease-in-out">
<div className="w-full h-[72px] flex items-center justify-between max-w-[1280px] mx-auto px-margin-desktop">

<div className="flex items-center gap-space-xl">
<a className="font-headline-md text-headline-md font-semibold text-primary dark:text-inverse-primary flex items-center gap-space-xs tracking-tight" href="#">
<span className="material-symbols-outlined text-[30px] text-tertiary">menu_book</span>
<span className="tracking-tight text-tertiary font-headline-md text-headline-md">HUKI EBOOK</span>
</Link>

<nav className="hidden lg:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30">
<a className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-tertiary font-title-md text-body-md font-semibold shadow-xs flex items-center gap-1.5" href="#">
<span className="material-symbols-outlined text-[18px]">shopping_cart_checkout</span>
              Sàn TMĐT
            </Link>
<a className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-tertiary font-body-md text-body-md transition-colors flex items-center gap-1.5" href="#">
<span className="material-symbols-outlined text-[18px]">bubble_chart</span>
              Mạng Xã Hội Sách
            </Link>
</nav>
</div>

<div className="flex-1 max-w-[460px] mx-space-lg relative">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-[20px] text-outline pointer-events-none">search</span>
<input className="w-full h-11 pl-10 pr-24 rounded-xl border border-outline-variant/50 bg-surface-container-lowest focus:border-tertiary focus:ring-1 focus:ring-tertiary font-body-md text-body-md text-on-surface transition-all placeholder:text-outline/70 shadow-2xs" placeholder="Tìm kiếm sách, tác giả, nhà xuất bản, cửa hàng..." type="text" value="Atomic Habits" />
<div className="absolute right-1.5 flex items-center gap-1">
<kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-outline bg-surface-container rounded border border-outline-variant/50">⌘K</kbd>
<button className="bg-tertiary text-on-tertiary px-3 py-1.5 rounded-lg text-label-md font-medium hover:bg-tertiary-container transition-colors flex items-center">
                Tìm
              </button>
</div>
</div>
</div>

<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant">

<button className="w-10 h-10 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center relative group" title="Danh sách yêu thích">
<span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">favorite</span>
<span className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
</button>

<button className="w-10 h-10 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center relative group" title="Thông báo mới">
<span className="material-symbols-outlined text-[22px] group-hover:text-tertiary transition-colors">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-secondary-container rounded-full"></span>
</button>

<button className="w-10 h-10 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-center relative group" title="Giỏ hàng HUKI">
<span className="material-symbols-outlined text-[22px] group-hover:text-tertiary transition-colors">shopping_bag</span>
<span className="absolute top-1 right-1 w-4 h-4 bg-tertiary text-on-tertiary text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
</button>
</div>

<div className="h-6 w-px bg-outline-variant/40"></div>

<div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border-2 border-tertiary" alt="Minh Tri profile avatar showing an approachable Vietnamese reader in his early thirties with dark hair, glasses, wearing a smart casual olive collar shirt in a warm, warmly lit modern bookstore cafe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFnlBERd__67OOLsyXQ0YcznGCKhLA2TsHeKndVlhDGtFCnQYkP3AL-EWAZ4jHpGJa-Nz8fvCXLPgy0WDNtTCnXRz9AM-OJw2VSLyGBu7TRziLDoFqATSkRHV5G9FTMr4rtQZrbicdbO1SrVw5EdHDeUL1uma_jN8yJdFNSYDrGcSnHJA7sBKcaFvyL9zNEn4m0eZAD2xuTb7audzalUR6u-1nf-mIAEj0AUxCHdHlcOYpuY8hLqBqzA" />
<span className="absolute -bottom-1 -right-1 bg-secondary text-secondary-fixed text-[9px] font-bold px-1 rounded border border-surface-container-lowest">VIP</span>
</div>
<div className="hidden xl:flex flex-col">
<div className="flex items-center gap-1">
<span className="font-title-md text-body-md font-semibold text-on-surface group-hover:text-tertiary transition-colors">Minh Trí</span>
<span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary">Hội viên Bạch Kim</span>
</div>
</div>
</div>
</div>
</header>

<div className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
<div className="max-w-[1280px] mx-auto px-margin-desktop h-11 flex items-center justify-between text-body-md">
<div className="flex items-center gap-space-xl">
<a className="text-on-surface-variant hover:text-tertiary font-body-md text-body-md transition-colors pb-space-xs flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[18px]">home</span> Trang chủ
          </Link>
<a className="text-primary font-title-md text-title-md border-b-2 border-primary pb-space-xs flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[18px]">menu_book</span> Sách
          </Link>
<a className="text-on-surface-variant hover:text-tertiary font-body-md text-body-md transition-colors pb-space-xs" href="#">Thể loại</Link>
<a className="text-on-surface-variant hover:text-tertiary font-body-md text-body-md transition-colors pb-space-xs" href="#">Tác giả</Link>
<a className="text-on-surface-variant hover:text-tertiary font-body-md text-body-md transition-colors pb-space-xs flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px] text-primary">local_offer</span> Khuyến mãi
          </Link>
<a className="text-on-surface-variant hover:text-tertiary font-body-md text-body-md transition-colors pb-space-xs" href="#">Bảng xếp hạng</Link>
</div>
<div className="text-label-sm font-semibold text-secondary flex items-center gap-1.5 bg-secondary-fixed/20 px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]">bolt</span>
          Độc quyền Ebook: Đọc thử 20% miễn phí
        </div>
</div>
</div>

<main className="flex-1 overflow-y-auto">

<div className="max-w-[1280px] mx-auto px-margin-desktop py-space-sm">
<nav className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
<a className="hover:text-tertiary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
            Trang chủ
          </Link>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<a className="hover:text-tertiary transition-colors" href="#">Sách</Link>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<a className="hover:text-tertiary transition-colors" href="#">Phát triển bản thân</Link>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="text-on-surface font-medium truncate max-w-[280px]">Atomic Habits</span>
</nav>
</div>



<section className="max-w-[1280px] mx-auto px-margin-desktop pb-space-2xl">
<div className="grid grid-cols-12 gap-space-xl items-start">

<div className="col-span-12 lg:col-span-4 flex flex-col gap-space-md">

<div className="relative bg-surface-container-lowest rounded-2xl p-space-md border border-outline-variant/30 shadow-sm flex flex-col items-center group">

<div className="relative w-[260px] aspect-[2/3] rounded-lg overflow-hidden shadow-xl spine-crease transition-transform duration-300 group-hover:scale-[1.01]">
<img className="w-full h-full object-cover" alt="Editorial book cover art for Atomic Habits by James Clear. Crisp minimalist cover design featuring concentric dots forming a purposeful atomic pattern with elegant typographic title Thay Doi Ti Hon Hieu Qua Bat Ngo in rich black and warm orange against off-white high grade paper texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLJxGEmdyoWHJaML4r0fjhy-pwbtgp7K9qLyLsNNwNW286Ktk5gQ-3VewcqEla5ymD3ZNzwg7t1y-2PsIQb7yPIkcGwQuERA0Itq1qT5O14aEGSG876FleaCfm62Nj1OzUPgxPhlX-QKiAyyYKMfpj0ngsjKpXuJNURlFyrrOkB5mNkkWUW3yBSioWXpa0PnnvHWBhGsbkGPa8eMhu8Bv7eGGni1sRI3qinMFFmeNBDbZQfyyZB0ubsA" />

<div className="absolute bottom-3 right-3 bg-inverse-surface/80 text-inverse-on-surface backdrop-blur-sm px-2.5 py-1 rounded-full text-label-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[14px]">zoom_in</span>
                  Phóng to
                </div>
</div>

<div className="grid grid-cols-4 gap-space-xs w-full mt-space-md px-2">

<button className="relative rounded-lg overflow-hidden border-2 border-tertiary p-0.5 bg-surface-container-lowest shadow-2xs group focus:outline-none">
<img className="w-full aspect-[2/3] object-cover rounded" alt="Front cover thumbnail of Atomic Habits Vietnamese edition showing crisp white book with orange graphic dot circle and James Clear title typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj7Uoz0Mb3_fcT5VLAoXU9AjGiYTdW6WZ7UlKYcnJDfCXakuSiZVEhCMWVG6mgJOdXRZLqbfeNhhiRnWBa2OmK4KicfukXJjsygPyeJaHZXbljzlMYsp91yR1VJkdjSr_5SRe0uUfdq59RctidVJtt91SEUVzgPhu9u9aZ9LWXRNqj4xH3QyD3emB4MWxbdYcQN5-wF0Lri4acw1RwWWpZ91idDGwfRU3T4HArg_SucXZHNtUzCzJ-YQ" />
<span className="absolute inset-0 bg-tertiary/10 pointer-events-none"></span>
</button>

<button className="relative rounded-lg overflow-hidden border border-outline-variant/50 hover:border-tertiary p-0.5 bg-surface-container-lowest transition-all group focus:outline-none">
<img className="w-full aspect-[2/3] object-cover rounded" alt="Back cover of Atomic Habits showing publisher blurbs, barcode, testimonial quotes by Mark Manson and Adam Grant on fine textured paper." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxTvTjXkDmEm9Utxrnrwu66hT6XyVudAI4hcF73tUhbcGdFBRBXmj48RZBk433GBrJQEp_5aSBdlUt3SzQ8GENVSHH5hXEgcqc-9kTjrV_C-_h1blVJJ6oHyxtUuFWyLqM1A_Voh9SpRWjL7JnEZ-yZc5a6kr9zO-va544ujVME3npmP6mD2xM_ZZlHk8ueYyQVOR2NF9sPUNKxfjC3wHt-HbxAWUVLCZq1k6CZOH4amEPzDc9RAopTA" />
</button>

<button className="relative rounded-lg overflow-hidden border border-outline-variant/50 hover:border-tertiary p-0.5 bg-surface-container-lowest transition-all group focus:outline-none">
<img className="w-full aspect-[2/3] object-cover rounded" alt="Open double-page spread of Atomic Habits book showing Vietnamese typesetting, habit loop diagrams, and clean margin notes on cream ivory paper." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBelU1aJDH4GJ2Ng31Gyjh_GFJUFeZDnCFYU9JPqMZ4S_olnH3Gtk2IfcC3Xmay-YTAksXlxMFL7cNsvIpAXrzTW1YXRmUBCB3zup7inbahLBvC1Qu4N42327by7TBjCw9gFZ8H2buHfthyd8PhJDnIjw4xvuNjXYM9P3mN_CPfJrmCjZVyv-aoSXlgyWcljdglSTL83As2SJeQ-lqJTopoJRaU7pxetd4g113SgIGmrFzK2g_Gc-F5qw" />
</button>

<button className="relative rounded-lg overflow-hidden border border-outline-variant/50 hover:border-tertiary p-0.5 bg-surface-container-lowest transition-all group focus:outline-none">
<img className="w-full aspect-[2/3] object-cover rounded" alt="Digital tablet screen displaying the HUKI Ebook application interface with chapter typography and adjustable font slider controls." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMo7clJRTa2M6Lk4Lxqg_QsmA3bC2snd35xmycJJOcNBNjWdIKtFIGw8YaeHPumzdfcx99p_IOC9yYVcEMjeTjKX8IgltO7_riQes61s3XpRUlthajdaL9HtyRj5M9q-qxMRbF2sHY_H52JapBe_L4D3jKB5PcQJUjDvlhCzVuyj_WxKJ65relNAn61FC7UDwwPYhRNcoHRuPIgAsIos4lxwgA_svlMXQeBnjsTxOwETqRSaIFDyt89g" />
</button>
</div>

<button className="w-full mt-space-md py-2.5 px-space-md rounded-xl border border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors flex items-center justify-center gap-2 font-title-md text-body-md font-medium">
<span className="material-symbols-outlined text-[20px]">auto_stories</span>
                Xem trước nội dung (20 trang)
              </button>
</div>

<div className="flex items-center justify-between text-body-sm text-on-surface-variant px-space-xs">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-tertiary">security</span>
                Bảo vệ tác quyền bởi HUKI DRM
              </span>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg hover:bg-surface-container transition-colors" title="Chia sẻ sách">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container transition-colors" title="Báo cáo sai sót">
<span className="material-symbols-outlined text-[18px]">flag</span>
</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 flex flex-col gap-space-md">

<div className="flex items-center flex-wrap gap-2">
<span className="bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm px-2.5 py-1 rounded-full font-semibold tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                BÁN CHẠY #1
              </span>
<span className="bg-tertiary/15 text-tertiary font-label-sm text-label-sm px-2.5 py-1 rounded-full font-semibold tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">devices</span>
                CÓ EBOOK &amp; SÁCH NÓI
              </span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full">
                Tâm Lý - Kỹ Năng
              </span>
</div>

<div>
<h1 className="font-headline-lg text-headline-lg font-medium text-on-surface tracking-tight leading-tight">
                Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ
              </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Tác giả: <a className="text-tertiary font-semibold hover:underline" href="#">James Clear</Link>
<span className="text-outline-variant/60 mx-1.5">•</span> 
                Dịch giả: <span className="text-on-surface">Đỗ Thủy</span>
</p>
</div>

<div className="flex items-center flex-wrap gap-space-md text-body-sm border-b border-outline-variant/30 pb-space-md">
<div className="flex items-center gap-1">
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-[18px] fill-icon">star</span>
<span className="material-symbols-outlined text-[18px] fill-icon">star</span>
<span className="material-symbols-outlined text-[18px] fill-icon">star</span>
<span className="material-symbols-outlined text-[18px] fill-icon">star</span>
<span className="material-symbols-outlined text-[18px] fill-icon">star_half</span>
</div>
<span className="font-title-md text-body-md font-bold text-on-surface ml-1">4.8</span>
</div>
<span className="text-outline-variant/60">|</span>
<a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#reviews">
<strong className="text-on-surface">1.248</strong> đánh giá
              </Link>
<span className="text-outline-variant/60">|</span>
<span className="text-on-surface-variant">
                Đã bán <strong className="text-on-surface">8,6k</strong> bản
              </span>
</div>

<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Dù mục tiêu của bạn là gì, <em className="font-headline-sm font-normal text-on-surface">Atomic Habits</em> cung cấp một khuôn khổ đã được kiểm chứng để cải thiện mỗi ngày 1%. Bạn sẽ học cách hệ thống hóa các thói quen tốt và loại bỏ các thói quen xấu với 4 quy luật hành vi nền tảng.
            </p>

<div className="grid grid-cols-2 gap-y-2.5 gap-x-4 bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30 text-body-sm">
<div className="flex items-center justify-between pr-2">
<span className="text-on-surface-variant">Nhà xuất bản:</span>
<span className="font-medium text-on-surface">NXB Thế Giới</span>
</div>
<div className="flex items-center justify-between pl-2 border-l border-outline-variant/30">
<span className="text-on-surface-variant">Nhà phát hành:</span>
<span className="font-medium text-tertiary">Alpha Books</span>
</div>
<div className="flex items-center justify-between pr-2">
<span className="text-on-surface-variant">Ngày phát hành:</span>
<span className="font-medium text-on-surface">Tháng 01/2025</span>
</div>
<div className="flex items-center justify-between pl-2 border-l border-outline-variant/30">
<span className="text-on-surface-variant">Ngôn ngữ:</span>
<span className="font-medium text-on-surface">Tiếng Việt</span>
</div>
<div className="flex items-center justify-between pr-2">
<span className="text-on-surface-variant">Số trang / Dung lượng:</span>
<span className="font-medium text-on-surface">320 trang / 18 MB</span>
</div>
<div className="flex items-center justify-between pl-2 border-l border-outline-variant/30">
<span className="text-on-surface-variant">Định dạng file:</span>
<span className="font-medium text-on-surface">EPUB, PDF HUKI-DRM</span>
</div>
</div>

<div className="mt-space-xs">
<label className="block font-title-md text-body-md font-semibold text-on-surface mb-2">
                Chọn hình thức phát hành:
              </label>
<div className="grid grid-cols-2 gap-space-md">

<div className="border border-outline-variant/60 rounded-xl p-space-sm bg-surface-container-lowest hover:border-outline cursor-pointer transition-all flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-title-md text-title-md text-on-surface block">SÁCH GIẤY</span>
<span className="font-label-sm text-on-surface-variant">Bìa mềm cao cấp</span>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">local_shipping</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
<span className="font-title-lg text-title-md text-on-surface font-bold">129.000đ</span>
<span className="font-label-sm text-tertiary">Giao tận nơi</span>
</div>
</div>

<div className="border-2 border-tertiary rounded-xl p-space-sm bg-tertiary/5 relative cursor-pointer shadow-xs flex flex-col justify-between">

<div className="absolute -top-2.5 right-3 bg-tertiary text-on-tertiary font-label-sm text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[12px]">check</span>
                    ĐANG CHỌN
                  </div>
<div className="flex items-start justify-between">
<div>
<span className="font-title-md text-title-md text-tertiary font-bold flex items-center gap-1">
                        EBOOK
                        <span className="material-symbols-outlined text-[16px]">bolt</span>
</span>
<span className="font-label-sm text-on-surface-variant">Đọc ngay trên HUKI App &amp; Web</span>
</div>
<span className="material-symbols-outlined text-[20px] text-tertiary">smartphone</span>
</div>
<div className="mt-3 pt-2 border-t border-tertiary/20 flex items-baseline justify-between">
<div>
<span className="font-title-lg text-title-lg text-tertiary font-bold">79.000đ</span>
<span className="font-label-sm text-outline line-through ml-1">119.000đ</span>
</div>
<span className="font-label-sm text-primary font-bold">-34%</span>
</div>
</div>
</div>

<div className="mt-space-sm bg-tertiary-fixed/15 border border-tertiary/20 rounded-xl p-space-sm">
<span className="font-label-sm font-bold text-tertiary block mb-1.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">verified</span>
                  Đặc quyền người mua Ebook chính hãng HUKI:
                </span>
<div className="grid grid-cols-2 gap-x-2 gap-y-1 font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Đọc ngay tức thì sau khi trả tiền</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Lưu trọn đời trong Tủ Sách HUKI</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Đồng bộ tiến độ &amp; ghi chú đọc</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Đọc trên 5 thiết bị (iOS, Android, Web)</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3">
<div className="sticky top-24 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-space-md shadow-md flex flex-col gap-space-md">

<div className="border-b border-outline-variant/20 pb-space-sm">
<div className="flex items-center justify-between text-body-sm text-on-surface-variant mb-1">
<span>Phiên bản số:</span>
<span className="font-semibold text-tertiary">EBOOK (EPUB)</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-[30px] font-bold text-tertiary">79.000đ</span>
<span className="font-body-md text-outline line-through">119.000đ</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-semibold">
                    Tiết kiệm 40.000đ (-34%)
                  </span>
<span className="font-label-sm text-on-surface-variant">Tích 790 HukiXu</span>
</div>
</div>

<div className="bg-surface-container-low p-2.5 rounded-xl flex items-center gap-2.5 text-body-sm text-on-surface">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">auto_stories</span>
</div>
<div>
<strong className="block text-[13px] font-semibold">Nhận sách ngay lập tức</strong>
<span className="text-on-surface-variant text-[12px]">Tự động thêm vào Tủ Sách cá nhân</span>
</div>
</div>

<div className="flex flex-col gap-2.5">

<button className="w-full h-12 bg-tertiary hover:bg-tertiary-container text-on-tertiary rounded-xl font-title-md text-body-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                  Mua Ebook Ngay
                </button>

<div className="grid grid-cols-2 gap-2">
<button className="h-10 rounded-xl border border-tertiary text-tertiary hover:bg-tertiary/5 transition-colors font-title-md text-body-md font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    Thêm Vào Giỏ
                  </button>
<button className="h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-title-md text-body-md font-medium flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
                    Đọc Thử
                  </button>
</div>

<button className="w-full py-1.5 text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[18px] text-primary">favorite</span>
                  Thêm vào danh sách ước muốn
                </button>
</div>

<div className="border-t border-outline-variant/20 pt-space-sm flex flex-col gap-1.5">
<span className="font-label-sm font-semibold text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">confirmation_number</span>
                  Mã giảm giá áp dụng được:
                </span>
<div className="flex flex-wrap gap-1.5">
<span className="bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-[11px] px-2 py-0.5 rounded border border-secondary-fixed font-medium">
                    Giảm 20K đơn từ 199K
                  </span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-[11px] px-2 py-0.5 rounded border border-outline-variant/30">
                    FREESHIP cho sách giấy
                  </span>
</div>
</div>

<div className="border-t border-outline-variant/20 pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-2xl">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-xs">
                      α
                    </div>
<div>
<div className="flex items-center gap-1">
<span className="font-title-md text-body-md font-bold text-on-surface">Alpha Books Official</span>
<span className="material-symbols-outlined text-[16px] text-tertiary" title="Cửa hàng chính hãng">verified</span>
</div>
<span className="font-label-sm text-on-surface-variant block text-[11px]">Nhà xuất bản &amp; phát hành chính thức</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-body-sm py-1">
<div className="text-[12px] text-on-surface-variant">
                    Đánh giá: <strong className="text-on-surface">4.9 / 5.0</strong>
</div>
<div className="text-[12px] text-on-surface-variant text-right">
                    Người theo dõi: <strong className="text-on-surface">12,8K</strong>
</div>
</div>
<button className="w-full mt-2 py-1.5 rounded-lg border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container transition-colors text-body-sm font-medium text-on-surface flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">storefront</span>
                  Xem Cửa Hàng
                </button>
</div>

<div className="flex items-center justify-around text-center text-label-sm text-on-surface-variant pt-1">
<div className="flex flex-col items-center gap-0.5">
<span className="material-symbols-outlined text-[18px] text-tertiary">lock</span>
<span>Bảo mật 100%</span>
</div>
<div className="flex flex-col items-center gap-0.5">
<span className="material-symbols-outlined text-[18px] text-tertiary">support_agent</span>
<span>Hỗ trợ 24/7</span>
</div>
<div className="flex flex-col items-center gap-0.5">
<span className="material-symbols-outlined text-[18px] text-tertiary">verified_user</span>
<span>Bản quyền HUKI</span>
</div>
</div>
</div>
</div>
</div>
</section>




<div className="sticky top-[72px] z-20 bg-surface-container-lowest border-y border-outline-variant/30 shadow-2xs">
<div className="max-w-[1280px] mx-auto px-margin-desktop flex items-center gap-space-xl text-body-md font-title-md">
<a className="py-3.5 border-b-2 border-tertiary text-tertiary font-bold flex items-center gap-1.5" href="#intro">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
            Giới Thiệu Sách
          </Link>
<a className="py-3.5 text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-1.5" href="#toc">
<span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
            Mục Lục (20 Chương)
          </Link>
<a className="py-3.5 text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-1.5" href="#preview">
<span className="material-symbols-outlined text-[18px]">chrome_reader_mode</span>
            Đọc Thử Mẫu
          </Link>
<a className="py-3.5 text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-1.5" href="#reviews">
<span className="material-symbols-outlined text-[18px]">rate_review</span>
            Đánh Giá Độc Giả (1.248)
          </Link>
<a className="py-3.5 text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-1.5" href="#community">
<span className="material-symbols-outlined text-[18px]">forum</span>
            Cộng Đồng Thảo Luận
          </Link>
</div>
</div>
<div className="max-w-[1280px] mx-auto px-margin-desktop py-space-xl grid grid-cols-12 gap-space-xl">

<div className="col-span-12 lg:col-span-8 flex flex-col gap-space-2xl">

<section className="bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-36" id="intro">
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-md flex items-center gap-2">
<span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
              Giới Thiệu Sách
            </h2>
<div className="prose max-w-none text-on-surface leading-relaxed flex flex-col gap-space-md font-body-md">
<p>
                Người ta thường tin rằng khi muốn thay đổi cuộc đời, bạn cần phải nghĩ những điều lớn lao. Nhưng chuyên gia thói quen lừng danh thế giới <strong>James Clear</strong> đã chứng minh một chân lý hoàn toàn trái ngược: <em>những thay đổi thực sự bắt nguồn từ hiệu ứng tích lũy của hàng trăm quyết định nhỏ nhặt</em> — từ việc chống đẩy hai cái mỗi ngày, thức dậy sớm hơn năm phút cho đến việc đọc một trang sách trước khi ngủ. Ông gọi chúng là những <strong>Thói Quen Nguyên Tử (Atomic Habits)</strong>.
              </p>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2">
                Thay đổi nhỏ, kết quả lớn – Sức mạnh của 1% mỗi ngày
              </h3>
<p>
                Nếu bạn có thể trở nên tốt hơn 1% mỗi ngày trong suốt một năm, cuối cùng bạn sẽ trở nên tốt hơn gấp <strong>37 lần</strong>. Ngược lại, nếu bạn tệ đi 1% mỗi ngày, bạn sẽ suy giảm gần như về con số 0. Những thói quen tí hon không tạo ra khác biệt rõ rệt trong những ngày đầu tiên, nhưng theo thời gian, chúng tạo ra bước ngoặt phi thường giữa việc bạn là ai và bạn có thể trở thành ai.
              </p>

<div className="bg-surface-container-low border-l-4 border-primary p-space-md rounded-r-xl my-2">
<p className="font-headline-sm italic text-on-surface text-[17px] leading-snug">
                  "Bạn không vươn lên tới tầm của những mục tiêu bạn đặt ra. Bạn tụt xuống bằng đúng mức của những hệ thống bạn duy trì."
                </p>
<span className="block mt-2 font-label-md text-primary font-bold">— James Clear, Trích Atomic Habits</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-2">
                Xây dựng hệ thống thay vì chỉ đặt mục tiêu
              </h3>
<p>
                Trong cuốn sách này, bạn sẽ không tìm thấy những lời khuyên động lực sáo rỗng. Thay vào đó, tác giả đưa ra một hệ thống thực hành 4 bước dựa trên khoa học thần kinh và tâm lý học nhận thức:
              </p>
<ul className="list-disc pl-5 space-y-1.5 text-on-surface">
<li><strong>Quy luật 1:</strong> Khiến nó trở nên rõ ràng (Make it obvious).</li>
<li><strong>Quy luật 2:</strong> Khiến nó trở nên hấp dẫn (Make it attractive).</li>
<li><strong>Quy luật 3:</strong> Khiến nó trở nên dễ dàng (Make it easy).</li>
<li><strong>Quy luật 4:</strong> Khiến nó đem lại cảm giác thỏa mãn (Make it satisfying).</li>
</ul>

<div className="bg-secondary-fixed/20 border border-secondary-fixed-dim/40 rounded-xl p-space-md mt-space-sm">
<h4 className="font-title-md text-title-md font-bold text-on-secondary-fixed-variant flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-[20px]">lightbulb</span>
                  Cuốn sách này phù hợp với bạn nếu...
                </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-body-sm text-on-surface">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">done</span>
<span>Bạn đã thử nhiều lần xây dựng thói quen tốt nhưng thường bỏ cuộc sau vài tuần.</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">done</span>
<span>Bạn muốn vượt qua trạng thái trì hoãn và thiết lập kỷ luật tự giác lâu dài.</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">done</span>
<span>Bạn là nhà quản lý, lãnh đạo muốn xây dựng văn hóa đội ngũ năng suất vượt trội.</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">done</span>
<span>Bạn muốn tìm lại sự cân bằng và định hình danh tính tích cực của bản thân.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-36" id="toc">
<div className="flex items-center justify-between mb-space-md">
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold flex items-center gap-2">
<span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                Mục Lục Sách
              </h2>
<span className="text-body-sm text-on-surface-variant">Tổng số: 6 Phần • 20 Chương</span>
</div>
<div className="flex flex-col gap-2.5">

<div className="border border-outline-variant/40 rounded-xl p-space-sm hover:border-tertiary transition-colors">
<div className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-2.5">
<span className="w-7 h-7 rounded bg-tertiary/10 text-tertiary font-bold text-xs flex items-center justify-center">I</span>
<span className="font-title-md text-body-md font-bold text-on-surface">Các Nguyên Tắc Cơ Bản: Vì Sao Những Thay Đổi Nhỏ Tạo Khác Biệt Lớn</span>
</div>
<span className="material-symbols-outlined text-[20px] text-outline">expand_more</span>
</div>
<div className="mt-2 pl-9 text-body-sm text-on-surface-variant space-y-1">
<p>Chương 1: Sức mạnh bất ngờ của thói quen tí hon (1% mỗi ngày)</p>
<p>Chương 2: Thói quen định hình danh tính của bạn như thế nào</p>
<p>Chương 3: Bốn bước đơn giản để xây dựng thói quen tốt hơn</p>
</div>
</div>

<div className="border border-outline-variant/40 rounded-xl p-space-sm hover:border-tertiary transition-colors">
<div className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-2.5">
<span className="w-7 h-7 rounded bg-tertiary/10 text-tertiary font-bold text-xs flex items-center justify-center">II</span>
<span className="font-title-md text-body-md font-bold text-on-surface">Quy Luật Thứ Nhất: Làm Cho Nó Rõ Ràng</span>
</div>
<span className="material-symbols-outlined text-[20px] text-outline">expand_more</span>
</div>
<div className="mt-2 pl-9 text-body-sm text-on-surface-variant space-y-1">
<p>Chương 4: Người đàn ông nhìn thấu sự việc</p>
<p>Chương 5: Cách tốt nhất để bắt đầu một thói quen mới: Ý định thực thi</p>
<p>Chương 6: Động lực được đánh giá quá cao; môi trường mới quyết định</p>
</div>
</div>

<div className="border border-outline-variant/40 rounded-xl p-space-sm hover:border-tertiary transition-colors">
<div className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-2.5">
<span className="w-7 h-7 rounded bg-tertiary/10 text-tertiary font-bold text-xs flex items-center justify-center">III</span>
<span className="font-title-md text-body-md font-bold text-on-surface">Quy Luật Thứ Hai: Làm Cho Nó Hấp Dẫn</span>
</div>
<span className="material-symbols-outlined text-[20px] text-outline">expand_more</span>
</div>
</div>

<div className="border border-outline-variant/40 rounded-xl p-space-sm hover:border-tertiary transition-colors">
<div className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-2.5">
<span className="w-7 h-7 rounded bg-tertiary/10 text-tertiary font-bold text-xs flex items-center justify-center">IV</span>
<span className="font-title-md text-body-md font-bold text-on-surface">Quy Luật Thứ Ba: Làm Cho Nó Dễ Dàng (Quy tắc 2 phút)</span>
</div>
<span className="material-symbols-outlined text-[20px] text-outline">expand_more</span>
</div>
</div>
</div>
<button className="w-full mt-space-md py-2 text-center text-tertiary font-title-md text-body-md font-semibold hover:underline flex items-center justify-center gap-1">
              Xem toàn bộ mục lục 20 chương
              <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
</button>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-36" id="preview">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold flex items-center gap-2">
<span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                  Đọc Thử Bản Mẫu Miễn Phí
                </h2>
<span className="text-body-sm text-on-surface-variant">Bản đọc thử được cấp phép chính thức bởi Alpha Books</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-surface-container rounded-lg text-body-sm hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">format_size</span>
                  Cỡ chữ: Chuẩn
                </button>
<button className="px-3 py-1.5 bg-surface-container rounded-lg text-body-sm hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">dark_mode</span>
                  Nền giấy
                </button>
</div>
</div>

<div className="bg-[#FAF8F3] border border-outline-variant/40 rounded-xl p-space-xl shadow-inner relative overflow-hidden">

<div className="absolute right-6 bottom-4 text-[64px] font-headline-lg font-bold text-outline-variant/10 pointer-events-none select-none">
                HUKI PREVIEW
              </div>
<div className="max-w-[620px] mx-auto text-[#23211E]">
<div className="text-center mb-space-lg pb-space-sm border-b border-[#E4DFD5]">
<span className="text-[11px] uppercase tracking-widest text-[#7C7467] font-semibold">Chương 1</span>
<h3 className="font-headline-md text-[24px] font-bold text-[#1F1E1B] mt-1">Sức Mạnh Bất Ngờ Của Thói Quen Tí Hon</h3>
<span className="text-[12px] text-[#7C7467] italic">Trích trang 18 / 320</span>
</div>
<div className="space-y-4 font-headline-sm font-normal text-[16px] leading-[28px] text-justify text-[#2E2B27]">
<p>
                    Vào năm 2003, số phận của Hiệp hội Đua xe đạp Chuyên nghiệp Anh quốc (British Cycling) đã thay đổi mãi mãi. Tổ chức này vốn đã trải qua gần một thế kỷ với thành tích vô cùng mờ nhạt: kể từ năm 1908, các tay đua người Anh chỉ giành được đúng một huy chương vàng duy nhất tại Thế vận hội Olympic.
                  </p>
<p>
                    Tình hình tồi tệ đến mức một trong những nhà sản xuất xe đạp hàng đầu châu Âu đã từ chối bán xe cho đội tuyển Anh vì họ lo sợ hình ảnh thương hiệu sẽ bị tổn hại nếu các vận động viên khác nhìn thấy người Anh dùng đồ của mình.
                  </p>
<p>
                    Sau đó, Dave Brailsford được thuê về làm Giám đốc Hiệu suất. Khác với những huấn luyện viên trước đây, Brailsford có một triết lý cam kết sắt đá với chiến lược mà ông gọi là <em>"sự tích lũy của những lợi ích cận biên" (the aggregation of marginal gains)</em>. Triết lý này bắt nguồn từ việc tìm kiếm một biên độ cải thiện nhỏ nhất trong mọi thứ bạn làm...
                  </p>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/90 to-transparent flex flex-col items-center justify-end pb-4">
<button className="px-space-xl py-3 rounded-xl bg-tertiary hover:bg-tertiary-container text-on-tertiary font-title-md text-body-md font-bold shadow-md transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">auto_stories</span>
                  Bắt đầu đọc mẫu 20 trang trên Huki Reader
                </button>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-36" id="reviews">
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-md flex items-center gap-2">
<span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
              Đánh Giá Từ Độc Giả
            </h2>

<div className="grid grid-cols-12 gap-space-lg p-space-lg bg-surface-container-low rounded-xl border border-outline-variant/30 items-center">

<div className="col-span-12 sm:col-span-4 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-outline-variant/30 pb-4 sm:pb-0">
<span className="font-headline-lg text-[54px] font-bold text-on-surface leading-none">4.8</span>
<div className="flex text-secondary-container my-1.5">
<span className="material-symbols-outlined text-[20px] fill-icon">star</span>
<span className="material-symbols-outlined text-[20px] fill-icon">star</span>
<span className="material-symbols-outlined text-[20px] fill-icon">star</span>
<span className="material-symbols-outlined text-[20px] fill-icon">star</span>
<span className="material-symbols-outlined text-[20px] fill-icon">star_half</span>
</div>
<span className="text-body-sm text-on-surface-variant">Dựa trên 1.248 nhận xét đã kiểm duyệt</span>
</div>

<div className="col-span-12 sm:col-span-8 flex flex-col gap-1.5 text-body-sm">

<div className="flex items-center gap-2">
<span className="w-10 text-right text-on-surface-variant font-medium">5 sao</span>
<div className="flex-1 h-2.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style="width: 82%;"></div>
</div>
<span className="w-12 text-on-surface-variant text-[12px] font-semibold">82%</span>
</div>

<div className="flex items-center gap-2">
<span className="w-10 text-right text-on-surface-variant font-medium">4 sao</span>
<div className="flex-1 h-2.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-tertiary/70 h-full rounded-full" style="width: 12%;"></div>
</div>
<span className="w-12 text-on-surface-variant text-[12px] font-semibold">12%</span>
</div>

<div className="flex items-center gap-2">
<span className="w-10 text-right text-on-surface-variant font-medium">3 sao</span>
<div className="flex-1 h-2.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" style="width: 4%;"></div>
</div>
<span className="w-12 text-on-surface-variant text-[12px] font-semibold">4%</span>
</div>

<div className="flex items-center gap-2">
<span className="w-10 text-right text-on-surface-variant font-medium">2 sao</span>
<div className="flex-1 h-2.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-outline-variant h-full rounded-full" style="width: 1%;"></div>
</div>
<span className="w-12 text-on-surface-variant text-[12px] font-semibold">1%</span>
</div>

<div className="flex items-center gap-2">
<span className="w-10 text-right text-on-surface-variant font-medium">1 sao</span>
<div className="flex-1 h-2.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-error/50 h-full rounded-full" style="width: 1%;"></div>
</div>
<span className="w-12 text-on-surface-variant text-[12px] font-semibold">1%</span>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-space-md pt-space-xs border-b border-outline-variant/30 pb-space-sm">
<div className="flex items-center flex-wrap gap-2">
<button className="px-3 py-1 rounded-full bg-tertiary text-on-tertiary text-label-md font-semibold">Tất cả (1.248)</button>
<button className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-label-md transition-colors">5 sao (1.023)</button>
<button className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high text-label-md transition-colors">Có hình ảnh (342)</button>
<button className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-label-md font-semibold">Đã mua Ebook (610)</button>
</div>
<button className="px-4 py-2 rounded-xl bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors font-title-md text-body-sm font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">edit</span>
                Viết Đánh Giá
              </button>
</div>

<div className="flex flex-col gap-space-lg mt-space-md">

<div className="border-b border-outline-variant/20 pb-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<img className="w-9 h-9 rounded-full object-cover border border-outline-variant/40" alt="Reader portrait of Dang Thu Ha a young Vietnamese professional woman smiling warmly in clean indoor light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4IWSr-YOjJIKmklH-13MY_5ZVpUUwHxGOyKuoUIlf_r52rph3mQzl-zm4HVQANNa1wRkFJ2Y0zDLoSiJXGyTdTiQZBHLQyGnlgc4HiY1COHbkAkJtQuO_AqtzzZzcOSLqyv2zQFpMwvvJuWConFlAAylOguJ-FDQOuWo2nt21gZ8GMx7cK6bKW743GdAabzWvJxdlC0UrKPuWA2EtrKwbKN0V52ElUh4buGED8QplFiLNQuY-eogP-Q" />
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-body-md font-bold text-on-surface">Đặng Thu Hà</span>
<span className="bg-tertiary/10 text-tertiary text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]">verified</span> Đã mua Ebook
                        </span>
</div>
<span className="text-[11px] text-on-surface-variant">Tiến độ đọc: <strong className="text-tertiary">Đã đọc 100%</strong> • 3 ngày trước</span>
</div>
</div>
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface mt-2.5 leading-relaxed">
                  Cuốn sách thay đổi hoàn toàn tư duy của mình về thói quen. Trước đây mình hay đặt mục tiêu tập gym 1 tiếng/ngày rồi chỉ duy trì được 1 tuần. Nhờ "quy tắc 2 phút" trong sách, mình đã bắt đầu từ 5 cái hít đất và duy trì được liên tục 4 tháng nay! Bản ebook trên HUKI đọc rất mượt, tính năng highlight đồng bộ tốt.
                </p>
<div className="flex items-center gap-4 mt-2 text-[12px] text-on-surface-variant">
<button className="hover:text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">thumb_up</span> Hữu ích (84)
                  </button>
<button className="hover:text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">chat_bubble_outline</span> Phản hồi (6)
                  </button>
</div>
</div>

<div className="border-b border-outline-variant/20 pb-space-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<img className="w-9 h-9 rounded-full object-cover border border-outline-variant/40" alt="Reader portrait of Nguyen Hoang Long in a modern creative studio workspace in Ho Chi Minh City." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU9KUUh8Aile-oiE8e08_ey61pTu1CXGCiawMe-9cvLxrqBig5lWHmeNrKwElVni0IwWXPh1QF8PQgyKp90cZ_ngWz7rLLvV-jQ86C0GNTeFEDjQdAtLQHYDqq-SqPU0PRcziAq3EFW4Ve8nutl47piC3UiY1ecNJHReWO8YOL8JHHD4UXmC8cPVOz6m7rcgUgVSIYzqHyGSAbhezX-2m5SytWvA4Eg3AM9M5oOcwfr3ezvlSgxp3UDA" />
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-body-md font-bold text-on-surface">Nguyễn Hoàng Long</span>
<span className="bg-tertiary/10 text-tertiary text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]">verified</span> Đã mua Ebook
                        </span>
</div>
<span className="text-[11px] text-on-surface-variant">Tiến độ đọc: <strong className="text-tertiary">Đã đọc 75%</strong> • 1 tuần trước</span>
</div>
</div>
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
<span className="material-symbols-outlined text-[16px] fill-icon">star</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface mt-2.5 leading-relaxed">
                  Bản dịch của NXB Thế Giới và Alpha Books rất mượt, dịch thoát ý các thuật ngữ khoa học não bộ. Điểm thích nhất là sách có các bảng biểu tóm tắt cuối mỗi chương giúp tổng hợp nhanh kiến thức.
                </p>
<div className="flex items-center gap-4 mt-2 text-[12px] text-on-surface-variant">
<button className="hover:text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">thumb_up</span> Hữu ích (39)
                  </button>
<button className="hover:text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">chat_bubble_outline</span> Phản hồi (2)
                  </button>
</div>
</div>
</div>
<button className="w-full mt-space-md py-2 text-center text-tertiary font-title-md text-body-md font-semibold hover:underline">
              Xem thêm 1.246 đánh giá khác
            </button>
</section>

<section className="bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-36" id="community">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold flex items-center gap-2">
<span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                  Cộng Đồng Đang Nói Gì Về Cuốn Sách Này?
                </h2>
<span className="text-body-sm text-on-surface-variant">Trích thảo luận từ Mạng Xã Hội Đọc Sách HUKI Social</span>
</div>
<a className="text-tertiary font-title-md text-body-sm font-semibold hover:underline flex items-center gap-1" href="#">
                Xem diễn đàn sách
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm font-semibold">CLB Dậy Sớm 5h Sáng</span>
<span className="text-[11px] text-on-surface-variant">• 42 thành viên tham gia</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface hover:text-tertiary cursor-pointer transition-colors">
                    Thử thách: Áp dụng quy tắc "Xếp chồng thói quen" trong 21 ngày
                  </h4>
<p className="font-body-sm text-on-surface-variant mt-1.5 line-clamp-3">
                    "Sau khi pha cà phê buổi sáng, tôi sẽ lập tức viết 3 điều biết ơn vào sổ". Chia sẻ công thức xếp chồng thói quen hiệu quả nhất của bạn tại đây nào mọi người...
                  </p>
</div>
<div className="flex items-center justify-between pt-space-sm mt-space-sm border-t border-outline-variant/20 text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-[12px]"><span className="material-symbols-outlined text-[16px] text-primary">favorite</span> 156 quan tâm</span>
<span className="flex items-center gap-1 text-[12px]"><span className="material-symbols-outlined text-[16px]">forum</span> 48 thảo luận</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm font-semibold">Tranh Luận Sách</span>
<span className="text-[11px] text-on-surface-variant">• Bài viết được ghim</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface hover:text-tertiary cursor-pointer transition-colors">
                    Tại sao thay đổi danh tính (Identity-based habits) lại bền vững hơn thay đổi kết quả?
                  </h4>
<p className="font-body-sm text-on-surface-variant mt-1.5 line-clamp-3">
                    Phân tích sâu về Chương 2 của James Clear: Mục tiêu không phải là đọc một cuốn sách, mục tiêu là trở thành một NGƯỜI ĐỌC SÁCH...
                  </p>
</div>
<div className="flex items-center justify-between pt-space-sm mt-space-sm border-t border-outline-variant/20 text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-[12px]"><span className="material-symbols-outlined text-[16px] text-primary">favorite</span> 289 quan tâm</span>
<span className="flex items-center gap-1 text-[12px]"><span className="material-symbols-outlined text-[16px]">forum</span> 92 thảo luận</span>
</div>
</div>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-3 mb-space-sm">
<img className="w-14 h-14 rounded-full object-cover border-2 border-tertiary" alt="James Clear high resolution author portrait in a minimalist study studio with warm neutral background, natural lighting, looking confident and thoughtful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZyf2TvVbgJ9mk2BvFP0thF1r0s4mBG9sSVVZUpfP_0520ISUBvIbUni2WzbWM_pLhm5DZ4h-MGgUUfgXDD9Adoops_uJziUTiDeXSieCFCf14IWh4qWkBaDB8--i7uHjLXG0YJpa-T3u9Ii16p8nMLMLCLq3ANXzae9MKFSBeen9SJwLDCueBi7-TWVjN7MYTdyrZCuLojNKcFVW2TIPa9j_HUeGZ8HsTo-xmlwvZ7CKhMlUFDkY16w" />
<div>
<h3 className="font-title-lg text-title-lg font-bold text-on-surface">James Clear</h3>
<span className="text-body-sm text-on-surface-variant">Tác giả &amp; Chuyên gia thói quen</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Diễn giả hàng đầu thế giới về sự hình thành thói quen. Bản tin hàng tuần "3-2-1" của ông có hơn 3 triệu người đăng ký trên toàn cầu.
            </p>
<div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm text-on-surface-variant">3 tác phẩm trên HUKI</span>
<a className="text-tertiary font-title-md text-body-sm font-semibold hover:underline" href="#">
                Xem tất cả sách
              </Link>
</div>
</div>

<div className="bg-gradient-to-br from-tertiary to-tertiary-container text-on-tertiary p-space-md rounded-2xl shadow-sm relative overflow-hidden">
<div className="relative z-10">
<span className="bg-surface-container-lowest/20 backdrop-blur-sm text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Thử Thách Đọc Sách 2025
              </span>
<h3 className="font-headline-sm text-headline-sm font-bold mt-2">
                Đọc Atomic Habits nhận ngay Huy Hiệu "Bậc Thầy Kỷ Luật"
              </h3>
<p className="text-body-sm opacity-90 mt-1">
                Gia nhập cùng 4.200 độc giả đang cùng đọc và ghi chép tiến độ trong tháng này.
              </p>
<button className="mt-space-md px-4 py-2 bg-surface-container-lowest text-tertiary rounded-xl font-title-md text-body-sm font-bold shadow-xs hover:bg-surface-container transition-colors">
                Tham gia thử thách ngay
              </button>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[110px] text-surface-container-lowest/10 pointer-events-none">military_tech</span>
</div>

<div className="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/30">
<h4 className="font-title-md text-body-md font-bold text-on-surface flex items-center gap-1.5 mb-2">
<span className="material-symbols-outlined text-[20px] text-tertiary">verified</span>
              Cam Kết Huki Ebook Marketplace
            </h4>
<ul className="space-y-2 text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5">check_circle</span>
<span>Bản quyền nội dung phân phối 100% hợp pháp từ Alpha Books.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5">check_circle</span>
<span>Chính sách hoàn tiền trong 24 giờ nếu file lỗi kỹ thuật hoặc thiếu trang.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5">check_circle</span>
<span>Hỗ trợ tải offline trên ứng dụng đọc sách HUKI Ebook.</span>
</li>
</ul>
</div>
</div>
</div>



<section className="max-w-[1280px] mx-auto px-margin-desktop py-space-xl border-t border-outline-variant/30">
<div className="flex items-center justify-between mb-space-lg">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold flex items-center gap-2">
<span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
              Có Thể Bạn Cũng Thích
            </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Các tựa sách phát triển bản thân và tư duy được độc giả mua cùng</p>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-xl border border-outline-variant/50 hover:bg-surface-container flex items-center justify-center transition-colors" title="Trang trước">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-9 h-9 rounded-xl border border-outline-variant/50 hover:bg-surface-container flex items-center justify-center transition-colors" title="Trang tiếp theo">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md">

<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-[18px] p-4 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all group">
<div>
<div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-sm bg-surface-container">
<img className="w-full h-full object-cover" alt="Book cover of Deep Work Lam Ra Lam Choi Ra Choi by Cal Newport Vietnamese translation with clean red typography and minimalist modern background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTGRSexaK4Q2CvYCmb_-v97AQzmVWRY5A3JZG-DU08dEFgP54ksWMx39ZvjVtzGiQSqVX2cTxSEth9aG1QLNdvMujLYkRyQLW02IpgRg1cxu5u9_B6zMWUiFXTn9n2jAm-nTA6QtJvIYtYbBVfAlgORb1EsIdeorj3bv2kX2803hlMAluJDEQYICheIzazfK_YPUlXFyTNkC8cs6krKPflBk8UEnG09dVtwYBujZHQrB0QNY7tKYb5jA" />
<span className="absolute top-2 left-2 bg-tertiary text-on-tertiary text-[10px] font-bold px-1.5 py-0.5 rounded">EBOOK</span>
</div>
<h3 className="font-title-md text-body-md font-bold text-on-surface mt-3 group-hover:text-tertiary transition-colors line-clamp-2">
                Deep Work – Làm Ra Làm, Chơi Ra Chơi
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Cal Newport</p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20">
<div className="flex items-center gap-1 text-[12px] text-secondary-container">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="font-bold text-on-surface">4.7</span>
<span className="text-on-surface-variant">(890)</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-title-md text-title-md font-bold text-primary">69.000đ</span>
<span className="text-[12px] text-outline line-through">99.000đ</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-[18px] p-4 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all group">
<div>
<div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-sm bg-surface-container">
<img className="w-full h-full object-cover" alt="Book cover of The Psychology of Money Tam Ly Hoc Ve Tien by Morgan Housel Vietnamese edition with elegant blue and white graphics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8FEBMViv_qoFANLO5HNvpmeYocsRkM38Xeea1-39wCopHmVl0NjSVtYqxngqw_AVYLIPMev1huFwBqsgKAlcwu3_ahV29dkM1ri798h3ofl9dDICitCTAVZcqG8KbLegj5_Hbkv8kXatULPyWyCj6niYP36VX-61UzUaYSHm9Zu1ZPDGke7IuFZTrY6FzTb75hwV3dCPQKFOVRIka9KvyF1Y9TNYry_TAD1x7R5DKCpb2sCRUQnw3Pg" />
<span className="absolute top-2 left-2 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-1.5 py-0.5 rounded">HOT</span>
</div>
<h3 className="font-title-md text-body-md font-bold text-on-surface mt-3 group-hover:text-tertiary transition-colors line-clamp-2">
                Tâm Lý Học Về Tiền
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Morgan Housel</p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20">
<div className="flex items-center gap-1 text-[12px] text-secondary-container">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant">(1.520)</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-title-md text-title-md font-bold text-primary">85.000đ</span>
<span className="text-[12px] text-outline line-through">125.000đ</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-[18px] p-4 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all group">
<div>
<div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-sm bg-surface-container">
<img className="w-full h-full object-cover" alt="Book cover of Thinking Fast and Slow Tu Duy Nhanh Va Cham by Daniel Kahneman Vietnamese translation with classic beige paper and black typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByEnyAQuH1OLgeOlGFCI7AkKiyiMMtdhSbUwK4ptiND9qFdFx0ent7765JWlhazoJKyzUYDmDoJkkpngPWypw0Use1i9N7nyPIV9d_fVWRElZ9xCRhV8nMnru3_CCRwDSfsk86n5TwP-0Dqkz9QIXCnwseIStidac3d3VeVZfNjoj54glurfWOPtp5Edrx4XT94pQTftjq2R2fztcdIF3d_vdX09PHHCNmQIJcvzQpdbxPjapca78lDA" />
</div>
<h3 className="font-title-md text-body-md font-bold text-on-surface mt-3 group-hover:text-tertiary transition-colors line-clamp-2">
                Tư Duy Nhanh Và Chậm
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Daniel Kahneman</p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20">
<div className="flex items-center gap-1 text-[12px] text-secondary-container">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="font-bold text-on-surface">4.6</span>
<span className="text-on-surface-variant">(640)</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-title-md text-title-md font-bold text-primary">99.000đ</span>
<span className="text-[12px] text-outline line-through">150.000đ</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-[18px] p-4 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all group">
<div>
<div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-sm bg-surface-container">
<img className="w-full h-full object-cover" alt="Book cover of The Courage to Be Disliked Dam Bi Ghet by Kishimi Ichiro and Koga Fumitake Vietnamese edition with calming light blue background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJW6ZgMbERKfra_haLu3-0-jd5ft4hv-GEYGUKwtCBYeCcZr1adSsk0TtEtLMjXwyV04TToiR07uF5NJ4ntDOv_ojzVz-2TfGXXUdO8-xaKJ3coowHkfuWbyeVc29h2rSyRCiRiGHNZVICneQpvzWvkWYFaKO8ZNcoWEZxIW8wg7f5VtnqHDze00LdZp3BMZ2iAVSl0n3wESoUncWuw645DjzYBbgnY_mvIw5P7z-2fkKLfQycMF8gvw" />
<span className="absolute top-2 left-2 bg-tertiary text-on-tertiary text-[10px] font-bold px-1.5 py-0.5 rounded">EBOOK</span>
</div>
<h3 className="font-title-md text-body-md font-bold text-on-surface mt-3 group-hover:text-tertiary transition-colors line-clamp-2">
                Dám Bị Ghét
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Kishimi Ichiro &amp; Koga Fumitake</p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20">
<div className="flex items-center gap-1 text-[12px] text-secondary-container">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="font-bold text-on-surface">4.8</span>
<span className="text-on-surface-variant">(2.100)</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-title-md text-title-md font-bold text-primary">65.000đ</span>
<span className="text-[12px] text-outline line-through">96.000đ</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-[18px] p-4 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all group">
<div>
<div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-sm bg-surface-container">
<img className="w-full h-full object-cover" alt="Book cover of The 7 Habits of Highly Effective People 7 Thoi Quen Hieu Qua by Stephen R Covey Vietnamese edition with rich navy blue and gold typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoh34LNDdhaYG15G_An7IHdAyGu-qTHGISFrda0RnBusnFPQrcZvYE9mnLMiKgzmBozdj21qk7S8YondELKJhKWjoQUtWkYTtDz6ksXYjGN7uf7x8gVZzEtczQBbb2YH2MRze9xCMQZzAWssKU8Q9z5uF2ffqNBVJkvRHFZ44-5kCilqSSkGwHktysmMBcBNbIHwZKsvfblFVoqnLfkWH9uHxZszqPca3hbNMHT56DbDvfc1hFwRGUAQ" />
</div>
<h3 className="font-title-md text-body-md font-bold text-on-surface mt-3 group-hover:text-tertiary transition-colors line-clamp-2">
                7 Thói Quen Hiệu Quả
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Stephen R. Covey</p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20">
<div className="flex items-center gap-1 text-[12px] text-secondary-container">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="font-bold text-on-surface">4.9</span>
<span className="text-on-surface-variant">(3.450)</span>
</div>
<div className="flex items-baseline justify-between mt-1">
<span className="font-title-md text-title-md font-bold text-primary">89.000đ</span>
<span className="text-[12px] text-outline line-through">135.000đ</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1280px] mx-auto px-margin-desktop pb-space-2xl">
<div className="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[24px] text-tertiary">history</span>
<div>
<h3 className="font-title-md text-body-md font-bold text-on-surface">Sách bạn vừa xem gần đây</h3>
<span className="text-body-sm text-on-surface-variant">Tiếp tục hành trình tìm kiếm tri thức của bạn</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center -space-x-3">
<img className="w-9 h-12 rounded object-cover border border-surface-container-lowest shadow-xs" alt="Small thumbnail of Deep Work book cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADombKJ8uzMuAbOyAY26Iz8TIn7GbtRrAI6tliMkQOqmFnDhCC9cPz6gejHoLFQuBhzprOXavcFnMq2eKWcE1ABMd46EgwxNQQ83J2015boCmm-9SLMVKPMpMNZVnkQcjI9Dy9AfncrAyOj_RBl_fZFtMqxOmvoM0tMjLjKw6vrHEv-jhYcIaSsGDBNT0w6MeU4g4jk8-tNUFtil_KOHfhijlkRatZemKWWStyXZFoxeJgKf_J6nAGfA" />
<img className="w-9 h-12 rounded object-cover border border-surface-container-lowest shadow-xs" alt="Small thumbnail of The Psychology of Money book cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTnQ2k-_nF6qD3CRsjbVmxTNpGtk3AjNSNX1uzlcjkwH_RhcK1nYfFstIrLEtbNZfWD-esi_rvISSK1Obuv6znw_xoHlPKFbc7u_MRjuLQ8kbuvHtfC4qNUOnqkdBoiA8qE8Hc76p8OmkDxKa4w9teHbWhoREiiSIivbW8gfGFEHycPtjpsuPXOhujXfZG3MYEr7t57k8jr7SKdQdEQCLpSOLMrXyv4O9kr8Ug35mxxUkwvX0SIrDnlA" />
<img className="w-9 h-12 rounded object-cover border-2 border-tertiary shadow-xs" alt="Small thumbnail of Atomic Habits book cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmTIPBg9ZPCMQmlywuHRhcYO6vaFGP-DZMIGMlBZlROltw7RzSjifiTiorAFlnqhD1rcFLMXeUoJY9PoMTMollyTiIpGqSwFknOUicZtLyiF-ICoOlr_g69DouIXEpLGb0UXj2yzwlJHhFPB-NN2c72oHsOKF0gT3FHEYzg7ibjksZOujmRmfBg5Nq02WoH1GEAjAf-8bS0WR88yyRIfuq5USz3p76IR3q-2Gm8oyG9Nn4S6-YVNZOyw" />
</div>
<a className="text-tertiary font-title-md text-body-sm font-semibold hover:underline" href="#">
              Xem lịch sử xem
            </Link>
</div>
</div>
</section>



<footer className="w-full mt-space-3xl bg-surface-container-low dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flat no shadows transition-colors duration-200">
<div className="max-w-[1280px] mx-auto px-margin-desktop py-space-2xl flex flex-col justify-between">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-2xl border-b border-outline-variant/30">

<div className="lg:col-span-2 flex flex-col gap-space-sm">
<div className="font-headline-md text-headline-md font-semibold text-primary dark:text-inverse-primary flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[28px] text-tertiary">menu_book</span>
<span className="text-tertiary">HUKI EBOOK</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface max-w-[360px] leading-relaxed">
                Nền tảng xuất bản và thương mại điện tử sách điện tử có bản quyền hàng đầu Việt Nam. Kết nối trực tiếp độc giả, tác giả và các nhà xuất bản uy tín.
              </p>
<div className="flex items-center gap-space-xs text-on-surface-variant mt-2">
<a className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center hover:text-tertiary transition-colors shadow-2xs" href="#">
<span className="material-symbols-outlined text-[18px]">public</span>
</Link>
<a className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center hover:text-tertiary transition-colors shadow-2xs" href="#">
<span className="material-symbols-outlined text-[18px]">mail</span>
</Link>
<a className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center hover:text-tertiary transition-colors shadow-2xs" href="#">
<span className="material-symbols-outlined text-[18px]">phone</span>
</Link>
</div>
</div>

<div className="flex flex-col gap-2.5">
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Về Huki Ebook</h4>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Giới thiệu nền tảng</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Tuyển dụng</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Chương trình đối tác NXB</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Báo chí &amp; Truyền thông</Link>
</div>

<div className="flex flex-col gap-2.5">
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Chính Sách</h4>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Điều khoản sử dụng</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Chính sách bảo mật</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Bảo vệ bản quyền DRM</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Chính sách hoàn tiền Ebook</Link>
</div>

<div className="flex flex-col gap-2.5">
<h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Hỗ Trợ</h4>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Hướng dẫn mua hàng</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Cài đặt ứng dụng đọc HUKI</Link>
<a className="text-on-surface-variant dark:text-inverse-on-surface font-body-md text-body-md hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Liên hệ hỗ trợ 24/7</Link>
<div className="mt-2 pt-2">
<span className="text-label-sm font-bold text-on-surface block mb-1">Phương thức thanh toán:</span>
<div className="flex items-center gap-1.5 text-outline">
<span className="px-2 py-1 bg-surface-container-lowest rounded border border-outline-variant/30 text-[10px] font-bold">MOMO</span>
<span className="px-2 py-1 bg-surface-container-lowest rounded border border-outline-variant/30 text-[10px] font-bold">VNPAY</span>
<span className="px-2 py-1 bg-surface-container-lowest rounded border border-outline-variant/30 text-[10px] font-bold">VISA</span>
</div>
</div>
</div>
</div>

<div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between text-body-sm text-on-surface-variant gap-4">
<p>© 2025 HUKI EBOOK. Bản quyền thuộc về Công ty TNHH Sách Điện Tử Huki.</p>
<div className="flex items-center gap-space-lg">
<span className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
                Chứng nhận sàn TMĐT an toàn Bộ Công Thương
              </span>
<span>Phiên bản: 4.8.2-prod</span>
</div>
</div>
</div>
</footer>
</main>
</div>

    </div>
  );
}
