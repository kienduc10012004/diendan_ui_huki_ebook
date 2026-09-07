import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="stitch-page bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-row selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <style>{".material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n      display: inline-block;\n      vertical-align: middle;\n      line-height: 1;\n    }\n    .spine-crease {\n      position: relative;\n    }\n    .spine-crease::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 14px;\n      background: linear-gradient(to right, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 24%, transparent 100%);\n      pointer-events: none;\n      border-top-left-radius: inherit;\n      border-bottom-left-radius: inherit;\n    }\n    .book-card-shadow {\n      box-shadow: 0 4px 20px -2px rgba(23, 32, 31, 0.05), 0 2px 6px -1px rgba(23, 32, 31, 0.02);\n      transition: all 0.25s ease-in-out;\n    }\n    .book-card-shadow:hover {\n      box-shadow: 0 16px 32px -4px rgba(23, 32, 31, 0.12), 0 6px 12px -2px rgba(23, 32, 31, 0.04);\n      transform: translateY(-3px);\n    }"}</style>


<aside className="fixed top-0 left-0 bottom-0 w-[68px] bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col items-center py-4 z-50 select-none">

<button className="w-10 h-10 rounded-[10px] bg-tertiary text-on-tertiary flex items-center justify-center hover:bg-tertiary-container transition-colors shadow-sm mb-6" title="HUKI Workspace">
<span className="material-symbols-outlined text-[20px]">code</span>
</button>

<nav className="flex flex-col gap-2 items-center w-full px-2">

<a className="w-11 h-11 rounded-xl bg-tertiary-fixed/40 text-tertiary flex items-center justify-center transition-all group relative" href="#" title="Sàn Sách">
<span className="material-symbols-outlined text-[22px] fill-icon">storefront</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Sàn Thương Mại</span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors group relative" href="#" title="Mạng Xã Hội">
<span className="material-symbols-outlined text-[22px]">forum</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Cộng Đồng Bạn Đọc</span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors group relative" href="#" title="Tủ Sách Cá Nhân">
<span className="material-symbols-outlined text-[22px]">local_library</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Tủ Sách Của Tôi</span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors group relative" href="#" title="HUKI Reader Ebook">
<span className="material-symbols-outlined text-[22px]">auto_stories</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Trình Đọc Ebook</span>
</Link>

<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary flex items-center justify-center transition-colors group relative" href="#" title="Thử Thách Đọc Sách">
<span className="material-symbols-outlined text-[22px]">local_fire_department</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Thử Thách Đọc 2026</span>
</Link>
</nav>

<div className="w-8 h-[1px] bg-outline-variant/40 my-4"></div>

<div className="flex flex-col gap-2 items-center w-full px-2">
<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors group relative" href="#" title="Thống Kê Đọc">
<span className="material-symbols-outlined text-[22px]">bar_chart</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Thống Kê Đọc Sách</span>
</Link>
<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors group relative" href="#" title="Câu Lạc Bộ Sách">
<span className="material-symbols-outlined text-[22px]">groups</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Câu Lạc Bộ Sách</span>
</Link>
<a className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-tertiary flex items-center justify-center transition-colors group relative" href="#" title="Dành Cho Nhà Xuất Bản">
<span className="material-symbols-outlined text-[22px]">apartment</span>
<span className="absolute left-[70px] bg-inverse-surface text-inverse-on-surface text-[12px] py-1 px-2.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity font-body-sm whitespace-nowrap shadow-md z-50">Đối Tác Xuất Bản</span>
</Link>
</div>

<div className="mt-auto flex flex-col gap-2 items-center w-full px-2">
<button className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center justify-center transition-colors" title="Kho Ứng Dụng HUKI">
<span className="material-symbols-outlined text-[22px]">apps</span>
</button>
<button className="w-11 h-11 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center justify-center transition-colors" title="Cài Đặt">
<span className="material-symbols-outlined text-[22px]">settings</span>
</button>
</div>
</aside>

<div className="pl-[68px] flex-1 flex flex-col min-w-0">

<div className="w-full bg-surface-container-low border-b border-outline-variant/30 text-on-surface-variant font-body-sm text-[12px] leading-[34px] h-[34px] px-margin-desktop">
<div className="max-w-[1520px] mx-auto flex items-center justify-between">
<div className="flex items-center gap-4">
<a className="hover:text-tertiary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">store</span> Kênh dành cho người bán
          </Link>
<span className="text-outline-variant">|</span>
<a className="hover:text-tertiary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[14px]">download</span> Tải ứng dụng HUKI
          </Link>
<span className="text-outline-variant">|</span>
<a className="hover:text-tertiary transition-colors" href="#">Kết nối</Link>
<span className="text-outline-variant">|</span>
<a className="hover:text-tertiary transition-colors" href="#">Chính sách</Link>
<span className="text-outline-variant">|</span>
<a className="hover:text-tertiary transition-colors" href="#">Hỗ trợ</Link>
</div>
<div className="flex items-center gap-5">
<button className="flex items-center gap-1.5 hover:text-tertiary transition-colors">
<span className="material-symbols-outlined text-[15px]">light_mode</span> Giao diện Sáng
          </button>
<a className="flex items-center gap-1 hover:text-tertiary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">help</span> Trợ giúp
          </Link>
<a className="flex items-center gap-1 hover:text-tertiary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">notifications</span> Thông báo
          </Link>
<div className="flex items-center gap-1 font-medium text-tertiary">
<span>Tiếng Việt</span>
<span className="material-symbols-outlined text-[14px]">expand_more</span>
</div>
</div>
</div>
</div>

<header className="w-full bg-surface-container-lowest sticky top-0 z-40 border-b border-outline-variant/30 shadow-sm h-[74px]">
<div className="max-w-[1520px] mx-auto h-full px-margin-desktop flex items-center justify-between gap-6">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-decoration-none" href="#">
<div className="w-10 h-10 rounded-lg bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-sm font-semibold tracking-tight text-tertiary leading-none">HUKI EBOOK</span>
<span className="font-label-sm text-[10px] tracking-wider text-secondary uppercase font-semibold mt-1">Literary Salon &amp; Marketplace</span>
</div>
</Link>

<div className="hidden lg:flex items-center bg-surface-container p-1 rounded-full border border-outline-variant/30">
<a className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-tertiary font-title-md text-[13px] shadow-sm flex items-center gap-1.5 font-semibold" href="#">
<span className="material-symbols-outlined text-[16px]">shopping_cart</span> Sàn TMĐT
            </Link>
<a className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-tertiary font-title-md text-[13px] flex items-center gap-1.5 transition-colors" href="#">
<span className="material-symbols-outlined text-[16px]">diversity_3</span> Mạng Xã Hội Sách
            </Link>
</div>
</div>

<div className="flex-1 max-w-[580px]">
<div className="flex items-center bg-surface-container-low border border-outline-variant/60 rounded-xl px-3 h-[46px] focus-within:border-tertiary focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all">
<div className="flex items-center gap-1 pr-3 border-r border-outline-variant/50 text-on-surface-variant font-body-sm text-[13px] whitespace-nowrap cursor-pointer hover:text-tertiary">
<span>Tất cả</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<input className="w-full bg-transparent border-none text-on-surface font-body-md text-[14px] px-3 focus:outline-none placeholder:text-on-surface-variant/60" placeholder="Tìm kiếm sách, tác giả, nhà xuất bản, ISBN..." type="text" />
<button className="w-8 h-8 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center hover:bg-tertiary-container transition-colors shrink-0">
<span className="material-symbols-outlined text-[18px]">search</span>
</button>
</div>
</div>

<div className="flex items-center gap-4">

<a className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant relative transition-colors" href="#" title="Danh sách yêu thích">
<span className="material-symbols-outlined text-[22px]">favorite</span>
<span className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary text-[10px] font-bold rounded-full flex items-center justify-center">5</span>
</Link>

<a className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant relative transition-colors" href="#" title="Thông báo">
<span className="material-symbols-outlined text-[22px]">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-surface-container-lowest"></span>
</Link>

<a className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface" href="#">
<div className="relative">
<span className="material-symbols-outlined text-[22px] text-tertiary">shopping_bag</span>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
</div>
<div className="hidden sm:flex flex-col text-left">
<span className="font-label-sm text-[10px] text-on-surface-variant">Giỏ hàng</span>
<span className="font-title-md text-[12px] font-semibold text-tertiary">353.000₫</span>
</div>
</Link>

<div className="flex items-center gap-2 pl-2 border-l border-outline-variant/40 cursor-pointer">
<div className="w-9 h-9 rounded-full ring-2 ring-tertiary/20 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" alt="Chân dung avatar độc giả nam thanh lịch Minh Trí, biểu cảm tươi tắn trong góc cà phê sách ấm áp với kệ sách mờ ảo phía sau, ánh sáng tự nhiên tinh tế, phong cách chụp chân dung editorial chuyên nghiệp màu sắc ấm áp ngọc lục bảo và kem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Qsrh5I3Wle2Nd7qn5yg7qX5I04Rwh5f28AZR0QosIjPapx1_LYcd0fpdGqXJr5zRPLFmg02MqFQ1HFAgUI0RE8aJkogxgrD7EbUixL9UCQy-0Sds62YwBdXZKfKzdZ4URR5rRUfcEX9qGA2h4NMG0AZPzt141m6FsoV4igG8Nj4gouJm1fcL4sd5gv0bjk2oBkH6_R8XJIsjnXE5pCco6fMVnJ_0TE5gJbD17r3sqZ0Q5JxBYg_SzQ" />
</div>
<div className="hidden xl:flex flex-col">
<div className="flex items-center gap-1">
<span className="font-title-md text-[13px] font-semibold text-on-surface">Minh Trí</span>
<span className="bg-secondary-container text-on-secondary-container text-[9px] font-bold px-1.5 py-0.2 rounded font-label-sm">VIP</span>
</div>
<span className="font-label-sm text-[11px] text-tertiary font-medium">Hạng Học Giả</span>
</div>
</div>
</div>
</div>
</header>

<main className="w-full max-w-[1520px] mx-auto px-margin-desktop py-8 flex flex-col gap-12">

<section className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#00382B] via-[#004D38] to-[#00271E] text-on-tertiary shadow-xl min-h-[500px] flex flex-col justify-between p-10 lg:p-14 border border-tertiary/40">

<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-tertiary-fixed/10 blur-3xl pointer-events-none"></div>
<div className="absolute -left-12 bottom-0 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-7 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 text-tertiary-fixed text-[13px] font-title-md w-fit">
<span className="material-symbols-outlined text-[16px] text-secondary-container">auto_awesome</span>
<span>Đại Tiệc Tri Thức Mùa Xuất Bản 2026</span>
</div>
<h1 className="font-display-lg text-display-lg font-medium text-white tracking-tight leading-[1.12]">
              THE NEXT CHAPTER IN YOUR READING JOURNEY
            </h1>
<p className="font-body-lg text-body-lg text-inverse-on-surface/85 max-w-[620px]">
              Mua sách thật, bản quyền chuẩn mực. Đọc Ebook tức thì trên mọi nền tảng và kết nối cùng hơn 250.000 độc giả tâm huyết trên HUKI.
            </p>
</div>

<div className="lg:col-span-5 relative flex justify-center items-center h-[300px]">

<div className="w-[160px] h-[240px] rounded-xl overflow-hidden shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 absolute -left-4 top-4 border border-white/20 spine-crease z-10">
<img className="w-full h-full object-cover" alt="Bìa sách nghệ thuật cao cấp phong cách văn học kinh điển phương Đông, tông màu xanh lục bảo thẫm và vàng kim óng ánh, chi tiết hoa văn dát vàng tinh xảo phản chiếu ánh sáng tự nhiên dịu nhẹ trong không gian phòng đọc tao nhã." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0XD4epuA9uGzk8p2QUk5ZApI5HZkfb9APvuWW_YiLXwtBnUorKQHz5l_BAZrHkGnLxR7nTHWC9jfV_bvkbZ7mjIgNpANANCqOCf2Mqmk6XrSy00XCsKEO0xfC6VLqplL1CqbDC_A16JVX0R5fiCkUnrD5x3QaLUB35R719wxnEGtK0s5nx0cR3s_CW6-Eug4ivhfIzOi3B3jJnPtEN8GvbjFSpwZ1Kaljjo_bjWRVukiykK8aSp7lOg" />
</div>

<div className="w-[180px] h-[270px] rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:scale-105 transition-transform duration-300 relative z-20 border-2 border-white/30 spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách hiện đại về tư duy phát triển bản thân và tri thức đương đại, thiết kế typography tối giản sắc nét trên nền kem giấy mỹ thuật, điểm xuyết các mảng khối hình học màu cam đất ấm và ngọc bích sang trọng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8bxDpaWJvlZh36fF2Lcr-Qxq02W5oZUFbxAw8Q9Kl1tjO8SD_fHP1nPUnoN9KIQRJBBMtTF7ogW5RHAfrcBddvLFNyIVeearETdMbuLaaHbTs2ZK7j9KJaaNkoqllUvlSucAUT_K6y6ZS0XDVGnELJxGzPFnEbEdqMfdUlLHO_00ubBnRJo0k-9tGVooaQPzlk1gWbpc7UoQf6wYcas9Fa0R02GE5hQESIskX-RdelR6JnnmoFgLeMA" />
<div className="absolute top-2 right-2 bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold px-2 py-0.5 rounded shadow">
                TOP 1 BESTSELLER
              </div>
</div>

<div className="w-[155px] h-[230px] rounded-xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 absolute -right-2 top-8 border border-white/20 spine-crease z-10">
<img className="w-full h-full object-cover" alt="Bìa cuốn sách Ebook chủ đề khoa học công nghệ và trí tuệ nhân tạo, đồ họa 3D trừu tượng màu xanh thẫm và ánh sáng ngọc bích huyền ảo, phong cách thiết kế sách ấn phẩm cao cấp quốc tế thanh thoát." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLIUp69uyAUlwfsWjfZSKPiRBAFeEMdzK13KM5bD95N171lBk9uJ0eRwLz3A9YJ9uNEHXt0-Lb361ukl0j6fG1p1wzluyOD8mVZsaexm0l3hxOnUU3WSje_nt4TdMKmzkS8pqYHKR5A4Ta-DT0l4OJc7MJR2ir0kU9tQ22k1pOb9_JjtVe2sBlZCGV5PDAwY_qmlCjTlnWBcN5eq2FJ2a0yXSeuQzpBTkxj1pcep69oBL7K49JzRDGkw" />
</div>
</div>
</div>

<div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col items-center">
<div className="w-full max-w-[820px] bg-surface-container-lowest rounded-2xl p-2 shadow-2xl flex flex-col sm:flex-row items-center gap-2 border border-white/20">
<div className="flex items-center gap-2 px-4 py-2 border-b sm:border-b-0 sm:border-r border-outline-variant/40 text-on-surface-variant font-title-md text-[14px] cursor-pointer hover:text-tertiary shrink-0">
<span className="material-symbols-outlined text-[18px] text-tertiary">category</span>
<span>Tất cả danh mục</span>
<span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
</div>
<div className="flex-1 flex items-center px-3 w-full">
<span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-2">search</span>
<input className="w-full bg-transparent border-none text-on-surface font-body-md text-[15px] focus:outline-none placeholder:text-on-surface-variant/60" placeholder="Tìm tên sách, tác giả, ISBN, chủ đề muốn khám phá..." type="text" />
</div>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-title-md text-[14px] font-bold hover:brightness-105 shadow-md flex items-center justify-center gap-2 transition-all">
<span>Tìm kiếm</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

<div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[12px] text-inverse-on-surface/80 font-body-sm">
<span className="text-tertiary-fixed font-medium">Gợi ý tìm kiếm:</span>
<a className="hover:text-white underline decoration-white/30 underline-offset-2" href="#">Tâm lý học</Link>
<span>•</span>
<a className="hover:text-white underline decoration-white/30 underline-offset-2" href="#">Kinh doanh</Link>
<span>•</span>
<a className="hover:text-white underline decoration-white/30 underline-offset-2" href="#">Trí tuệ nhân tạo AI</Link>
<span>•</span>
<a className="hover:text-white underline decoration-white/30 underline-offset-2" href="#">Tiểu thuyết kinh điển</Link>
<span>•</span>
<a className="hover:text-white underline decoration-white/30 underline-offset-2" href="#">Atomic Habits</Link>
<span>•</span>
<a className="hover:text-white underline decoration-white/30 underline-offset-2" href="#">Chữa lành tâm thức</Link>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[22px]">explore</span>
            Khám Phá Nhanh Theo Chủ Đề
          </h2>
<a className="font-title-md text-[14px] text-tertiary hover:underline flex items-center gap-1 font-semibold" href="#">
            Xem tất cả danh mục <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
<div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
<button className="px-5 py-2.5 rounded-full bg-tertiary text-on-tertiary font-title-md text-[13px] shadow-sm whitespace-nowrap">
            Tất cả sách
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Phát triển bản thân
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Kinh doanh &amp; Khởi nghiệp
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Tâm lý học &amp; Hành vi
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Công nghệ &amp; AI
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Văn học &amp; Tiểu thuyết
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Trinh thám &amp; Giật gân
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Kỹ năng sống
          </button>
<button className="px-5 py-2.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-title-md text-[13px] hover:border-tertiary hover:text-tertiary transition-colors whitespace-nowrap">
            Triết học &amp; Tư tưởng
          </button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex items-start gap-4 hover:border-tertiary/40 transition-all shadow-sm">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 text-tertiary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">library_books</span>
</div>
<div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Mua Sách Bản Quyền</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Hơn 50.000 đầu sách giấy &amp; ebook có bản quyền từ 200+ Nhà xuất bản uy tín.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex items-start gap-4 hover:border-tertiary/40 transition-all shadow-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-tertiary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">devices</span>
</div>
<div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Đọc Trực Tuyến Đa Nền Tảng</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Đồng bộ ghi chú, bookmark và tiến độ đọc tức thì trên Web, iOS, Android &amp; Máy đọc sách.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex items-start gap-4 hover:border-tertiary/40 transition-all shadow-sm">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">forum</span>
</div>
<div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Kết Nối Bạn Đọc</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Đọc review chân thực, tham gia thảo luận cùng các tác giả và tham gia thử thách đọc 2026.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex items-start gap-4 hover:border-tertiary/40 transition-all shadow-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">psychology</span>
</div>
<div>
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Khám Phá Thông Minh AI</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Trợ lý AI gợi ý sách chuẩn xác theo tâm trạng, mục tiêu nghề nghiệp và chiều sâu cảm xúc.</p>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 border border-outline-variant/40 shadow-sm flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/30">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-primary-fixed text-primary px-3.5 py-1.5 rounded-full font-title-md text-[14px] font-bold">
<span className="material-symbols-outlined text-[20px] fill-icon">local_fire_department</span>
              FLASH SALE HÔM NAY
            </div>

<div className="flex items-center gap-1.5 font-title-md text-[13px] text-on-surface font-semibold">
<span className="text-on-surface-variant font-normal">Kết thúc trong:</span>
<span className="bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-[12px] font-mono">02</span> :
              <span className="bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-[12px] font-mono">18</span> :
              <span className="bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-[12px] font-mono">36</span>
</div>
</div>
<a className="font-title-md text-[14px] text-primary hover:underline flex items-center gap-1 font-semibold" href="#">
            Xem toàn bộ Flash Sale <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col relative group">
<span className="absolute top-4 left-4 z-20 bg-primary text-on-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded shadow">-31%</span>
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Nhà Giả Kim của Paulo Coelho, thiết kế hội họa màu lam ngọc và vàng cát sa mạc huyền bí, bầu trời đêm ngàn sao lấp lánh phản chiếu chất thơ triết lý nhẹ nhàng sâu sắc." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMW6Ygf2v_PkH6UwpH5HtMgEnkSTukKcuSzk6OzxWbjqi9bNLJ2ZjcfiPOGzNfHcKUejI4SxFFG6lzkeh3lJ1aS3stQ-DWKwTU2gV-yjdQMLxPbv38z6vcuSwfnN2yiEMO-gw4Qa-YZ08mg9eyTX-c2yDUKxxOy28O7qT1IxG0PejgAezdSexDFr8CUezUXNwFLQsoa7_MgwFGEZxIAqpW5D6NdkvEK8TTFFJ3-TAzk0A5wXCkAEeIcQ" />
</div>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mb-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.9</span>
<span className="text-on-surface-variant font-normal">(1.420)</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Nhà Giả Kim (Tái bản đặc biệt)</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Paulo Coelho</p>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">89.000₫</span>
<span className="font-body-sm text-[12px] text-on-surface-variant/60 line-through">129.000₫</span>
</div>

<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[85%]"></div>
</div>
<span className="font-label-sm text-[10px] text-primary font-semibold mt-1">Đã bán 85%</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col relative group">
<span className="absolute top-4 left-4 z-20 bg-primary text-on-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded shadow">-15%</span>
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa cuốn sách Tâm Lý Học Về Tiền của Morgan Housel, tông màu xanh ngọc bích sẫm thanh lịch, đồ họa đồng hồ cát và tiền tệ cổ điển tinh tế, typography hiện đại sắc bén." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8jItzbAJIC3KVerOwstn03tRIb9-Ua-_Ayd_gJXO9Ljzl9MhNj9E0jAA-NsUZdlcrAYh-V2ydL0x4auN0rpQFmfG80dSCVsSRl5SygWjzwm7BSaLIqLpTnnqyIIR4e97uyqE1XtnC_P81L9aQbRcwNPrYEr2gurkLh4by197FvJhU0Rc1dzF-Bm0K87BOLnRHSI9EHxRG7plWfXbgyqj6v_e9exxMoCv0Rj7YRvJgy89bi5tRX8Gg5Q" />
</div>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mb-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.9</span>
<span className="text-on-surface-variant font-normal">(980)</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Tâm Lý Học Về Tiền</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Morgan Housel</p>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">123.250₫</span>
<span className="font-body-sm text-[12px] text-on-surface-variant/60 line-through">145.000₫</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[64%]"></div>
</div>
<span className="font-label-sm text-[10px] text-primary font-semibold mt-1">Đã bán 64%</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col relative group">
<span className="absolute top-4 left-4 z-20 bg-primary text-on-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded shadow">-25%</span>
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Atomic Habits của James Clear, nền màu trắng ngà kem thanh nhã với các hạt li ti hội tụ thành vòng cung vàng đồng, phong cách bìa sách phát triển bản thân sang trọng hàng đầu thế giới." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBldhgYiC5r8pQXi4qeHSTCtWbbqbNG3on0MvhA1aDlNqhPWUc0vxDN66WP08gQOhujNyn9ioDRAdk0WMZ2kusBW1UaNz_drE-pr1z6kDX__xWCUYXEou-HgS4oTKLU_PdZUYQU71wmsMrkWVQ2QQQ9TpzYAwBodRXxIwHfqU3BdZALmt5R3bfLCpA0TV9C5YDY7LX8yfeFuJj3ZWernvxTjnpvNMG56GL6j2j-E-XC_WY454GWEaLicw" />
</div>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mb-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>5.0</span>
<span className="text-on-surface-variant font-normal">(3.110)</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Thay Đổi Tí Hon Hiệu Quả Bất Ngờ</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">James Clear</p>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">141.750₫</span>
<span className="font-body-sm text-[12px] text-on-surface-variant/60 line-through">189.000₫</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[92%]"></div>
</div>
<span className="font-label-sm text-[10px] text-primary font-semibold mt-1">Gần hết hàng (92%)</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col relative group">
<span className="absolute top-4 left-4 z-20 bg-primary text-on-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded shadow">-30%</span>
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách công nghệ Đột Phá AI, mạng nơ-ron phát sáng nhẹ nhàng màu lục bảo trên nền đen huyền sâu thẳm, phong cách ấn phẩm khoa học công nghệ đương đại chuẩn mực quốc tế." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsoPRm1o5oAf0LdG-UEOhv4hl5WN0P8pL54ffx0hvUIIu8xwa5CwQvQQ57VOaufr_auWd5PM3ma8-Oks_ejxXfgeKK2qNj5g8OXDAqYjPvWCyOP7uoz2pt3V0OxL-aFeL6GB2B4X_gQw5ma7EN8UY930o8Xdwt565uCw467Mqey1vTk3JLFCx3qJh8Tlu8H-9D8gbizcWBThmI3S3j7DNhDit8kTFkBVwhpzsiMt4-GdkTNfpgr3aKWQ" />
</div>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mb-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.8</span>
<span className="text-on-surface-variant font-normal">(420)</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Đột Phá AI &amp; Tương Lai Loài Người</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Max Tegmark</p>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">154.000₫</span>
<span className="font-body-sm text-[12px] text-on-surface-variant/60 line-through">220.000₫</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[45%]"></div>
</div>
<span className="font-label-sm text-[10px] text-primary font-semibold mt-1">Đã bán 45%</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col relative group">
<span className="absolute top-4 left-4 z-20 bg-primary text-on-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded shadow">-20%</span>
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Dám Bị Ghét của Kishimi Ichiro, thiết kế tối giản phong cách triết học Nhật Bản tông màu lam chàm trang nhã, kiểu chữ thanh thoát trên chất liệu giấy kraft ấm áp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkQMsE3JYx1MiacLW-pCW4R4aI2ID7OUS6jIc0zqammHEZymG_D_EbuJfIQav6ZHfMV71XcrzYulytqxP2CfVs7wfcTM73E5wSBQjS3NhZ3llvxCc_Uk0d1O-5RMuqdXqNEDK1JWbqA17kKcJOx8hyLekAuG3rqu71jN7jLJ19dWkHxNa6Nd7T2O3_VW6XqqRzqUaNgyRvwtAFuHHF7O37aK82eJQN2Tk_NqYVRdUDOPZzVix54noa2g" />
</div>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mb-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.9</span>
<span className="text-on-surface-variant font-normal">(2.180)</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Dám Bị Ghét</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Kishimi Ichiro &amp; Koga Fumitake</p>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">108.000₫</span>
<span className="font-body-sm text-[12px] text-on-surface-variant/60 line-through">135.000₫</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[78%]"></div>
</div>
<span className="font-label-sm text-[10px] text-primary font-semibold mt-1">Đã bán 78%</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col relative group">
<span className="absolute top-4 left-4 z-20 bg-primary text-on-primary font-label-sm text-[11px] font-bold px-2 py-0.5 rounded shadow">-22%</span>
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Tư Duy Nhanh Và Chậm của Daniel Kahneman, hình vẽ hai bán cầu não cách điệu tinh xảo, phối màu xanh lục ngọc và nâu đất trầm lắng, chuẩn mực sách nghiên cứu học thuật tâm lý." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx7ue4Vh4KbHNkR6CR4zWzXheCx8uX-DGqYTaZ4-t33F92llGELpWK2JUtMf5wSq_hmxevwPpZIxOXyDbD7Bt7bbNejs5qLAqmzospFYfzm4dfbHKemwHCNwHH9GhQMLni_xDfeDc6xRh6K1DUbD56GLWO0TvI1vNX95rOuVyWDvDm81F0-4T050BlAhGnFOZY0Vg8TgyYuVN0WdG5neqfm04jO6ixnU40e54y0YbM_c6QZELd1zmkoA" />
</div>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mb-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.9</span>
<span className="text-on-surface-variant font-normal">(1.870)</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Tư Duy Nhanh Và Chậm</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Daniel Kahneman</p>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="font-title-md text-[15px] font-bold text-tertiary">156.000₫</span>
<span className="font-body-sm text-[12px] text-on-surface-variant/60 line-through">200.000₫</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[88%]"></div>
</div>
<span className="font-label-sm text-[10px] text-primary font-semibold mt-1">Đã bán 88%</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/30 pb-4">
<div>
<span className="font-label-sm text-[12px] uppercase tracking-wider text-tertiary font-bold">Cá nhân hóa độc quyền</span>
<h2 className="font-headline-lg text-headline-md font-semibold text-on-surface mt-1">Gợi Ý Dành Riêng Cho Minh Trí</h2>
</div>

<div className="flex items-center gap-2 overflow-x-auto">
<button className="px-4 py-2 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[13px] font-semibold whitespace-nowrap shadow-sm">
              Tất cả
            </button>
<button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-[13px] whitespace-nowrap transition-colors">
              Bán chạy nhất
            </button>
<button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-[13px] whitespace-nowrap transition-colors">
              Mới phát hành 2026
            </button>
<button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-[13px] whitespace-nowrap transition-colors">
              Ebook bản quyền
            </button>
<button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-[13px] whitespace-nowrap transition-colors">
              Sách giấy chọn lọc
            </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between group">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Cội Nguồn Tri Thức của nhà bác học Yuval Noah Harari, tông màu kem ngà và xanh cổ vịt lịch lãm, hình ảnh lịch sử văn minh nhân loại được thể hiện tinh tế mang phong vị hàn lâm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAahWq-O8ZZn50FXO2Ffh5G7bABTQCGBC0oLuWQHyBAPLufVQpmjylouUJqJgAJp83JsnQAFJ_ETlHZJ542ADUa266CMGia7A410cOiCQqd7A2g9cDYPMPTelbTkoqYAtXvSQ9MaMtvmanDOarYO11x3pYzC8VZ6iiOQQ1zM1HJgDQQVTZTZubqU-PRdhJqGuL3AQNB0uNd6sZn41MbAqLsaDUMMCrp4iNB5e2JdKHt_QEPAOLKHtpfQw" />
<span className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-sm text-[10px] px-2 py-0.5 rounded">Ebook + Sách Giấy</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Sapiens: Lược Sử Loài Người</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Yuval Noah Harari</p>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mt-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.95</span>
<span className="text-on-surface-variant font-normal">(4.350)</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[15px] font-bold text-tertiary">168.000₫</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary flex items-center justify-center transition-colors shadow-sm" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between group">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Rừng Na Uy của Haruki Murakami, tông màu đỏ sẫm kết hợp xanh lục thẩm mỹ Nhật Bản, phong cảnh tuyết trắng rơi lãng đãng đậm chất trữ tình văn chương hiện đại." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA1xP3paoLAqBU3fKHmRDckUIE8iPzVZoNNBZhxhSwMiSKPx5pxgdTFt5D8C-BIv7ydsAWRxjc6vxLDWdemsBQBMs5XvueBE9BbE636D26rl2dCtf7SYQDTU6SRHgh96uAlcBIZpqzDpVLEa-kpiAPjj9u5y4vngAViz3HHDqV3Hi7Tn8RqAQYH-FMvsuROg6hRJAqb2loxUuR8Sckc93MuOsVDdg0M_2xAiqfdZhaVMwTTRzFUgYQXw" />
<span className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-sm text-[10px] px-2 py-0.5 rounded">Tái Bản 2026</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Rừng Na Uy (Bản Dịch Mới)</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Haruki Murakami</p>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mt-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.88</span>
<span className="text-on-surface-variant font-normal">(2.890)</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[15px] font-bold text-tertiary">132.000₫</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary flex items-center justify-center transition-colors shadow-sm" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between group">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Deep Work Làm Việc Sâu của Cal Newport, thiết kế tối giản hiện đại với khối màu xanh đậm và đường nét thanh thoát, biểu tượng cho sự tập trung tuyệt đối." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeAldOchs0jay4pfEB0J0t3--m5JpoFgODgKxnbamTXfQc3Q9wUABUJSkfstf6A8pXWiI6Y3uVi4oMfQQFC7-VLtuAb2AiiFIZm2rBmlOuf_mVOJIAK5PCBKUDl2EFR7AFI1fHiekfjNFuQVj8MtDymmATqTvDT2KRbP4A8htfV-YDlGcocEa_rVDhnbcrAFIUHjRpNjY-BWR1qcovQ_uHsrTbdYiM78YuF0gReQlUxEhJei5cqEktMA" />
<span className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-sm text-[10px] px-2 py-0.5 rounded">Được Đánh Giá Cao</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Deep Work: Làm Việc Sâu</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Cal Newport</p>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mt-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.92</span>
<span className="text-on-surface-variant font-normal">(1.650)</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[15px] font-bold text-tertiary">119.000₫</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary flex items-center justify-center transition-colors shadow-sm" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between group">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Muôn Kiếp Nhân Sinh tập 3 của tác giả Nguyên Phong, minh họa hoa sen thanh tịnh và luân xa ánh sáng huyền diệu trên nền tranh thủy mặc màu xanh ngọc bích êm đềm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8ebcHFsos4ubMNEXwR6C1JXMygF__I6x474rm8P8Sm1nDYpa_CTT5wBb-NkMzfYzu1oBjqTNDeyJyzlW_-xR6CQ-bp3l_BIajAnOl1_LrC95ExyimgbHfH2bbOM_vRqrAqfnus2lnsFor1vxKnPS9GiUVRC0dj5Y678Sgl4gOhHVxgqDiR5yQG43OSJwFIADGowh0oko0NkkAK9iVZlXGuZynAVyN7D8bYUnUu32lWEi1BZcJEj1hg" />
<span className="absolute bottom-2 left-2 bg-secondary-container text-on-secondary-container font-label-sm text-[10px] px-2 py-0.5 rounded font-bold">Bán Chạy Nhất</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Muôn Kiếp Nhân Sinh (Trọn bộ)</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Nguyên Phong</p>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mt-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.96</span>
<span className="text-on-surface-variant font-normal">(5.410)</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[15px] font-bold text-tertiary">210.000₫</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary flex items-center justify-center transition-colors shadow-sm" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between group">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Không Diệt Không Sinh Đừng Sợ Hãi của Thiền sư Thích Nhất Hạnh, typography chữ thư pháp hiện đại thanh tịnh trên nền giấy mỹ thuật mộc mạc màu be ấm cúng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIVd9e_xnuEa_DW6YY3L3loH6GzqT5fbdDVDUXUGPYTiwNwtsNRPsq0IDnExW68G2riBcucukM_GYSYHVIumaHSrkG6PaiousV-H7pu3UnxOPIuJWrGBo7V9SPhF9SSq4DcP2sCNM2f5IquMZ9GAjqxLJg1dxRIjLO863oh6Z8IkjciAsYS6H2z39GOVXtRqI6lEmbMpcauoOMktSp2zLuGCZFwKvcUV_nka0vi9jIw5VpguiyBRdUVg" />
<span className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-sm text-[10px] px-2 py-0.5 rounded">Tâm Linh Chữa Lành</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Không Diệt Không Sinh Đừng Sợ Hãi</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Thích Nhất Hạnh</p>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mt-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>5.0</span>
<span className="text-on-surface-variant font-normal">(6.200)</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[15px] font-bold text-tertiary">98.000₫</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary flex items-center justify-center transition-colors shadow-sm" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between group">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-3 bg-surface-container spine-crease relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bìa sách Chiến Tranh Tiền Tệ của Song Hongbing, màu vàng đồng và xanh navy quyền lực, họa tiết đồng tiền cổ và đồ thị tài chính thế giới tinh xảo đẳng cấp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB9X3iVNCsQDE09EyZoO09SvACM8dE3-aqidJnYjQGppCxNWng3hSqiFoImsWnJZeIW2cqwb4rkZpr7RERqQBGCN0RpLHcrt5EDs4tnZr_yZKIgYu__ty6b-a-OWg11m0XJEzrL5bSmPBMNGZw56FM6xANQbeO-ynAzcRXaOhwx6I5afV1mx6bi6L1pZyG7TGevA5xtH8ncPE9HYZK3o8wUGe426L_R3OIxQZOs1EvxsV3Rr2G6IEh0g" />
<span className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-sm text-[10px] px-2 py-0.5 rounded">Kinh Tế Tài Chính</span>
</div>
<h4 className="font-title-md text-[14px] text-on-surface font-semibold line-clamp-2 leading-snug">Chiến Tranh Tiền Tệ (Bộ 5 cuốn)</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Song Hongbing</p>
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium mt-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container fill-icon">star</span>
<span>4.85</span>
<span className="text-on-surface-variant font-normal">(1.120)</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[15px] font-bold text-tertiary">185.000₫</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary flex items-center justify-center transition-colors shadow-sm" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</section>

<section className="rounded-3xl overflow-hidden border border-outline-variant/40 relative bg-gradient-to-r from-[#00382B] via-[#005B46] to-[#043328] text-white p-8 lg:p-12 shadow-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 flex flex-col gap-4">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold px-3 py-1 rounded-full w-fit tracking-wider">
              BỘ SƯU TẬP CHUYÊN ĐỀ ĐẶC BIỆT
            </span>
<h3 className="font-display-lg text-headline-lg lg:text-display-lg font-medium leading-tight">
              ĐỌC ĐỂ HIỂU MÌNH - Tuyển tập Tâm lý học &amp; Chữa lành tâm thức
            </h3>
<blockquote className="font-headline-sm italic text-inverse-on-surface/90 border-l-2 border-secondary-container pl-4 my-1">
              "Khi bạn bắt đầu nhìn sâu vào bên trong chính mình, cả thế giới hỗn độn bên ngoài bỗng trở nên sáng tỏ và bình yên lạ thường."
            </blockquote>
<p className="font-body-md text-inverse-on-surface/80 max-w-[680px]">
              Tuyển tập 24 tác phẩm kinh điển từ Carl Jung, Thích Nhất Hạnh, Erich Fromm và Viktor Frankl. Giảm ngay 30% khi mua trọn bộ ebook hoặc combo sách bìa cứng.
            </p>
<div className="flex items-center gap-4 mt-2">
<button className="px-6 py-3 rounded-xl bg-secondary-container text-on-secondary-container font-title-md text-[14px] font-bold hover:brightness-105 transition-all shadow-md">
                Khám phá bộ sưu tập ngay
              </button>
<button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-title-md text-[14px] font-semibold border border-white/20 transition-all backdrop-blur-sm">
                Đọc thử Ebook miễn phí
              </button>
</div>
</div>
<div className="lg:col-span-4 flex justify-center items-center">
<div className="relative w-[280px] h-[340px] flex items-center justify-center">

<div className="w-[170px] h-[250px] rounded-xl overflow-hidden shadow-2xl absolute -left-2 transform -rotate-6 border border-white/30 spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Đi Tìm Lẽ Sống của Viktor Frankl, phong cách tranh vẽ mực nho xám trầm mặc với tia nắng vàng ấm le lói qua kẽ nứt, toát lên tinh thần kiên cường của nhân loại." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyE5tatnZnRNymMx9UkRCMQIqouBY67LmdSzlX6bQTU8_aLCJPXiU_ODA9joZcXzn8S1G5CAHikFsmSWSBwHt8kY2kFLI-OcyTFJLooyNM2enwQftmbxCMMMQC6zqLFSBfN1lZeFz3h_ZzXeMxe2FAhZihkyNsJ12FFZrOV2tyEpxleNeYbLoUUC1_npNZ3mmtOSLE7ig7kGsXnQcotggOFdqADloUpvh2b5UoEfh_zmp5QtnWKEFgkQ" />
</div>
<div className="w-[185px] h-[270px] rounded-xl overflow-hidden shadow-2xl relative z-10 border-2 border-white/40 spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Nghệ Thuật Yêu của Erich Fromm, phong cách ấn họa tối giản hai bàn tay đan vào nhau trên nền màu kem ngà dịu mắt, thể hiện chiều sâu tâm lý và tình yêu thương con người." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5OKAyXa7Fcvl7yTUoWXOPzwNoPWu-QEK7s1eHA2FdwMOMaCgN8ohkwWLec1nTxQSDEu-J0NrgeD6me73NX8Pi3acfgGIpIFJ33kXnnmPXoUQBykWZqgSI233v4ur5aHgbP7Z5UwgKD4uaQATmq-5jfLrwySxWrJ4doiamhldPjUN26xd_pMzw6YVDOFM72tNXKigOZnJZtfWKBY_WdBhPrgv24HZZMi-Sv2S6j-riyoqNDVcHBVwmyw" />
</div>
</div>
</div>
</div>
</section>


<section className="flex flex-col gap-5">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Kinh Doanh &amp; Khởi Nghiệp</h3>
</div>
<a className="font-title-md text-[13px] text-tertiary hover:underline font-semibold flex items-center gap-1" href="#">
            Xem 1.250+ đầu sách <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

<div className="lg:col-span-4 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between relative overflow-hidden">
<div className="z-10">
<span className="bg-tertiary text-on-tertiary font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded">Chủ đề của tuần</span>
<h4 className="font-headline-md text-headline-sm font-semibold text-on-surface mt-3">Xây Dựng Mô Hình Kinh Doanh Bền Vững</h4>
<p className="font-body-sm text-on-surface-variant mt-2">
                Tuyển chọn những cuốn cẩm nang thực chiến giúp nhà sáng lập và quản lý vượt qua biến động thị trường toàn cầu năm 2026.
              </p>
</div>
<div className="my-4 z-10 w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover" alt="Không gian làm việc của doanh nhân hiện đại với tách cà phê thơm, cuốn sổ da tay và chồng sách kinh doanh cao cấp trên bàn gỗ sồi ấm áp, ánh sáng ban mai chan hòa phản chiếu tinh thần khởi nghiệp năng động." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0LJPKennDP1Y0g9gdKp_kGaFBmH3JKfZTmPetHYAOhtqWL8h3BM1SN1AlycxVCbFU9UAmhXpr5vC5WzD0w6s1xluvJQgdJKypCsbXbW3fgBcuGOThOgl70u94a7qa2KedRRPqlHXdK3k_92NQBrEt9J-hib9tx9h_9IiFedDJUBkHZ0EaaIiW9SyMxzLGGturWn6e5zehuwY2RlZ5CCKUkNAGAWne08Qhqeynhd688JQKR0yXeqtAhw" />
</div>
<button className="z-10 w-full py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 hover:border-tertiary text-tertiary font-title-md text-[13px] font-semibold transition-colors">
              Xem bộ sưu tập cẩm nang →
            </button>
</div>

<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Từ Tốt Đến Vĩ Đại của Jim Collins, tông màu đỏ sẫm và đen thanh lịch quyền lực, đồ họa mũi tên vượt ngưỡng kỷ lục kinh tế." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUnUpUsTPVTT2aXL1sifuheoTa-M2lRoP-gxSZUz8DinaHvgh4rrwHhYC9nS98SkyYQAxoz0IK2JE_R1tRMan0RnFbZm0xxt23qPvmAwc6om5HUeUsbISapxnWhQ4455r4h_9zdvJRtQ-oH6Sys-LjyMGclScmFLMOiluJl7liJ7wq9QAZd6vTYGok_UUjVdsaS8-I3AU4_0I_rH-RBQd-pHji-FeTOJPT7xROWqzhy0-iggWoICykvw" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Từ Tốt Đến Vĩ Đại</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Jim Collins</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">148.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Khởi Nghiệp Tinh Gọn của Eric Ries, màu xanh ngọc bích sáng và trắng tối giản, hình ảnh chu kỳ phản hồi học hỏi đổi mới." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRaGRJNJ7vfUrylplMwfVY9QHdZBrRx7NVDK1vIzpMWZTy4_JA1q0KswqDyO6SSEUrK40l7qFx9WqA6OnE1AWtwVXpQ1yfvrVDt4dBTD45OVZIqkDlDELMJRzY9gj9XTJff4dQyGKq-l6ScglDYRWIqzzEhWxudMc37_hC1l8io1YG5J0mtPGnC7kUwfQhsES9gBczRoeCkfR5HKCJH_xa3-hEebGZRK3G9ggIFBK2rPXc10ZXVpb7SA" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Khởi Nghiệp Tinh Gọn</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Eric Ries</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">136.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Nguyên Tắc Của Ray Dalio, phông chữ serif thanh thoát sang trọng trên nền màu trắng ngọc trai, đồ họa cấu trúc tổ chức hoàn mỹ." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu1ETTpP_q49a6Or93AYr49R6qMo6Yi9idxACmUvRewI8ENEoSOH6KUg95Iep8_o2vaXfJRtYFvI-JnonNGTuxbiXUikov8gjxxWw2zEC1w4p5miiRdbLLXHwJUJu_cSNlss9oJzb-vKfdDuvhBI1EdqDQ6g99zu6iEI9cxkdkjOI8iODUKToCXrL54f4Izo5wvm18ejk4J24vnwzSh3v0VlqSgwTEaGaEgrwrIWmpp4AmlrUZizK4dw" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Principles: Những Nguyên Tắc</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Ray Dalio</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">225.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Dốc Hết Trái Tim của Howard Schultz người sáng lập Starbucks, tông màu xanh lục đậm Starbucks đặc trưng và hình tách cà phê sứ tinh tế." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCvgkAYV8tHSxLicrtfk2dtzzxMmyGtceGCPTHn1R1B6-ZKXYdeX-Ht4JaoN4tGlDCSdeK2vG2pBWm68fZCF8QBG6f8CY3AmchZQnEy9NK7fxwnIpIrV0YGeOJmTUHi3Zw5B0EsygTmnDpeRvUCY2HuO6LQusjoW-UfElXoJ_Csrrmhj7tJOvChx6xBHW2qINZ1ypyXweDZYCmLb5cEhzubsRixlpmOw9hldvxfSsZKGQlkhjsM0qxAg" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Dốc Hết Trái Tim</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Howard Schultz</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">115.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-5">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Công Nghệ &amp; Trí Tuệ Nhân Tạo AI</h3>
</div>
<a className="font-title-md text-[13px] text-tertiary hover:underline font-semibold flex items-center gap-1" href="#">
            Xem 680+ đầu sách <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

<div className="lg:col-span-8 order-2 lg:order-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Trí Tuệ Nhân Tạo 2041 của Kai-Fu Lee, hình ảnh thành phố tương lai rực rỡ ánh sáng công nghệ xanh ngọc và dữ liệu số." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARPqw7OevD_hTUUZaUYpo6_hVosYYl1VnIKM3DCFtz-F5a9Yx_CN-kNTW8oyPi2NI16FGDc6cA61mHnEnj_KJc2GJB7oUh18Gs1AsUrmQIgOj-NvCvQw0vtEvzMIninPuFwsXbrAi2DKXRcSkuRZ1RLtvtXxrrO5hGmGm8u1SMyXGKbNQUXPkf1YkQkyUn9XIgTyVsa-9ZpUOt9RemMTD4lMLBfFk_XpC2lp0e1K-WKsO2nMpps-iOSg" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">AI 2041: 10 Viễn Cảnh Tương Lai</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Kai-Fu Lee</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">172.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Chip War Cuộc Chiến Vi Mạch của Chris Miller, hình ảnh mạch silicon phát quang màu xanh ngọc bích trên nền kim loại xước." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbmG-DrwzDF7L-xQC0apLXmttMBZRPoKvu3rMyr8W7vyn4zTfdiN3JtQyOa_IObFnmj1bdvIY73nAT_QjNjLLfuYgxo6FBNn-lt7lOTfQNIva3WaAKlxnMHgy-_IhHoktDeEGEDA3rnfjz9Vfn3AevGOk0kZi2dXV-JghxIDb2TycTgXazMg_SXHXg5rQ094aGVtNPb39Rp8lmU2aE-iFWhX57HnxWU8RB7a246d1ZYO2y6aBpBliXGw" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Chip War: Cuộc Chiến Vi Mạch</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Chris Miller</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">195.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Đổi Mới Sáng Tạo của Walter Isaacson, chân dung Steve Jobs và Ada Lovelace phong cách pop-art thanh lịch tối giản." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_gsZLLRb4Di9VKDAmVZLYnP1sbNwB7BNIzRhx9M95BrYFbAENKwIl5UjDLBbPRAu8PU7uFuCqLuGZ47Ok4QYtQfSjz-EVeZ4TrQr7JRlQDTiDzKA1io4U3j6zLBuLd2uuWnsg1v72eiASjQfHim3vKrFkfPYoM-TdXeb64CQKnmqQbA1hmGw5IadCRPC5gAbv9U48hd3AQ54LuAX9xTThBVpXtT8ZbmlHPsXqyDfo85n5KDIA3GGGwg" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Những Kẻ Đổi Mới Sáng Tạo</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Walter Isaacson</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">238.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-3 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="aspect-[2/3] w-full rounded-xl overflow-hidden mb-2 bg-surface-container spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Tương Lai Sau Trí Tuệ Nhân Tạo, hình vẽ trừu tượng con người chạm tay vào luồng sóng dữ liệu rực rỡ." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqFYczOxI6BBEPJSMzztuWwVEuoaWCELJRJUH8TPmZfu4TGUMCLBDdIMVayaksl_ckCMcALtlmYopDNyBpIa_B749DzC1MNOvwmZOqhS2wpECcIBwflRtdvHy9VdoTbFzHF8dOjHY0HqabUfwJ-xZJ8NAdR7w2eeCJjxjT0azwVDaDemPRQEQoK8n2ib3M5PlmtfIqpKqJhGvdmsuXSvYUk5LzX_cPr74oMG-KpxiOpQ3-gMeRZp2fPQ" />
</div>
<h5 className="font-title-md text-[13px] font-semibold text-on-surface line-clamp-2">Kỷ Nguyên AI &amp; Tương Lai</h5>
<p className="font-body-sm text-[11px] text-on-surface-variant">Henry Kissinger</p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-title-md text-[14px] font-bold text-tertiary">145.000₫</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant hover:text-tertiary cursor-pointer">shopping_cart</span>
</div>
</div>
</div>

<div className="lg:col-span-4 order-1 lg:order-2 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between relative overflow-hidden">
<div>
<span className="bg-secondary text-on-secondary font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded">Xu hướng công nghệ</span>
<h4 className="font-headline-md text-headline-sm font-semibold text-on-surface mt-3">Làm Chủ Kỷ Nguyên Trí Tuệ Nhân Tạo</h4>
<p className="font-body-sm text-on-surface-variant mt-2">
                Bộ sưu tập các nghiên cứu mới nhất về Generative AI, đạo đức công nghệ và năng lực thích ứng của người đi làm tương lai.
              </p>
</div>
<div className="my-4 w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md">
<img className="w-full h-full object-cover" alt="Một chiếc máy đọc sách hiện đại hiển thị sơ đồ thuật toán thông minh đặt trên bàn làm việc tinh tế với cây xanh và ánh sáng đèn bàn ấm cúng tông màu xanh và kem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpnGNexM2TF1jotLx4R4BsL2dIyucHjoHpzJDhYkb-uBDneoAYmatMZ5jDV42EOdJbXIhCBFuyb2jZGXDTuAq0BR9O8WaOUSFmZXwJNzwa2t35QQ8pQRcgVUOUBApUlAn-9B7OmrTswI10BYtACwwKGMfFZvs6xynPnoPLURX_upmgqY6EdVufSL-8RZbPGyN5HYtt2jzddY78ya3x3CDL2baRzeKZvZEjUbhariX9-nMo_fZdp4kZw" />
</div>
<button className="w-full py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 hover:border-tertiary text-tertiary font-title-md text-[13px] font-semibold transition-colors">
              Khám phá tủ sách Công nghệ →
            </button>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 border border-outline-variant/40 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 flex flex-col gap-5">
<div className="flex items-center gap-2 text-tertiary font-label-sm text-[12px] uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[18px]">chrome_reader_mode</span> HUKI READER CLOUD
            </div>
<h3 className="font-headline-lg text-headline-lg font-semibold text-on-surface leading-tight">
              Trải Nghiệm Đọc Ebook Tinh Tế &amp; Đồng Bộ Tức Thì
            </h3>
<p className="font-body-lg text-body-lg text-on-surface-variant">
              Không cần chờ đợi giao hàng. Bắt đầu đọc ngay trong 10 giây trên ứng dụng HUKI Reader độc quyền với chế độ bảo vệ mắt, phông chữ thuần Việt tối ưu và tính năng đồng bộ ghi chú đám mây đa thiết bị.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-[20px]">cloud_sync</span>
<span className="font-body-md text-[14px] text-on-surface">Đồng bộ trang đọc &amp; bookmark</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-[20px]">format_size</span>
<span className="font-body-md text-[14px] text-on-surface">Tùy biến phông &amp; cỡ chữ</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-[20px]">offline_pin</span>
<span className="font-body-md text-[14px] text-on-surface">Tải về đọc offline chuẩn DRM</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-[20px]">nightlight</span>
<span className="font-body-md text-[14px] text-on-surface">Chế độ ban đêm &amp; màu giấy ngà</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 mt-2">
<button className="px-6 py-3 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[14px] font-semibold hover:bg-tertiary-container transition-colors shadow-sm">
                Khám phá 25.000+ Ebook bản quyền
              </button>
<button className="px-6 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-[14px] font-semibold transition-colors">
                Mở Tủ Sách Của Tôi
              </button>
</div>
</div>
<div className="lg:col-span-6 flex justify-center">

<div className="relative w-full max-w-[480px] bg-inverse-surface rounded-3xl p-4 shadow-2xl border-4 border-outline-variant/40">
<div className="bg-[#FAF9F6] rounded-2xl p-6 text-[#17201F] font-serif shadow-inner min-h-[380px] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-[11px] text-gray-500 font-sans border-b border-gray-200 pb-2 mb-4">
<span>Chương 4: Thói quen nguyên tử</span>
<span>Trang 74 / 320</span>
</div>
<h4 className="text-[18px] font-bold text-[#141D1C] font-serif mb-3">Quy luật thứ nhất: Khiến nó trở nên rõ ràng</h4>
<p className="text-[14px] leading-relaxed text-gray-800 font-serif mb-3">
                    "Nhiều người nghĩ rằng họ thiếu động lực khi điều họ thực sự thiếu là sự rõ ràng. Không phải lúc nào cũng hiển nhiên bạn nên bắt đầu từ đâu và khi nào nên hành động."
                  </p>
<p className="text-[14px] leading-relaxed text-gray-800 font-serif bg-secondary-container/20 p-2 rounded border-l-2 border-secondary">
<span className="text-[10px] uppercase font-sans font-bold text-secondary block">Ghi chú của bạn:</span>
                    Cần thiết lập không gian làm việc chuyên biệt vào mỗi 8h sáng!
                  </p>
</div>
<div className="pt-4 border-t border-gray-200 flex items-center justify-between font-sans text-[12px] text-gray-500">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">battery_charging_full</span>
<span>94%</span>
</div>
<div className="w-32 bg-gray-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[23%]"></div>
</div>
<span>23% đã đọc</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
<div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Gặp Gỡ Tác Giả Yêu Thích</h3>
<p className="font-body-sm text-[13px] text-on-surface-variant mt-0.5">Theo dõi trang cá nhân tác giả để nhận thông báo ấn phẩm mới và giao lưu trực tuyến</p>
</div>
<a className="font-title-md text-[13px] text-tertiary hover:underline font-semibold flex items-center gap-1" href="#">
            Xem tất cả tác giả <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center text-center hover:border-tertiary/40 transition-all book-card-shadow">
<div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-tertiary/20">
<img className="w-full h-full object-cover" alt="Chân dung nhà văn Haruki Murakami với nét mặt trầm ngâm hiền hòa, ánh mắt sâu thẳm trong không gian phòng làm việc ngập tràn đĩa than jazz cổ điển, ảnh chân dung đen trắng phối nâu ấm sang trọng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-OPOd7e4KsfO0t-0xMw2DyZP6jFtwwwqK09pUgJkDjYa5toolI1E43E6nK-pjKQ6oIWrou0_f2agMmZEgZ5RS2CAqewxN9TTMHgCwG3kskJbOd9X7kp7O9OAoalbSgCbAKmG8cO9bWGgyhXmV7IYpaXvZo22hV3-AQrsi84-ZhwNMBtpp6uHr5U4YKB0kas_ERbqkslBd2P7hY2oeGjp4StJDzkov6Y8h3uarnyuNI2MzhOB6sP7Vw" />
</div>
<h4 className="font-title-md text-[14px] font-semibold text-on-surface">Haruki Murakami</h4>
<span className="font-body-sm text-[12px] text-on-surface-variant">18 đầu sách đã dịch</span>
<button className="mt-3 px-4 py-1.5 rounded-full bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary font-title-md text-[12px] font-semibold transition-colors">
              + Theo dõi
            </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center text-center hover:border-tertiary/40 transition-all book-card-shadow">
<div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-tertiary/20">
<img className="w-full h-full object-cover" alt="Chân dung James Clear tác giả sách Thói Quen Nguyên Tử, nụ cười thông thái tự tin, ánh sáng chân dung chuyên nghiệp phong cách studio hiện đại tông màu ấm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnw9yJWOrKGesjDyl1-X_0R2W4HNILmzCsBYgbF0XKynDiK7fNvri-xM3jY3V_3z15MmE0g3IJX0qsypYqufMmBW5544ziG8nhUbsSR9WJhuCOKCBJisehB_5esWgbY7RkVY2LHadzTRsRvBp8TVGnTCHFoDrWjwhXvNwjNCCisa-LJUAhhMYg7n_eLSRD2IdW0XHKQl2V1i3tKp6YJXGPZUt1ZTo4IpAKkERRMoCTmqrThvqL1YOmFA" />
</div>
<h4 className="font-title-md text-[14px] font-semibold text-on-surface">James Clear</h4>
<span className="font-body-sm text-[12px] text-on-surface-variant">4 ấn phẩm best-seller</span>
<button className="mt-3 px-4 py-1.5 rounded-full bg-tertiary text-on-tertiary font-title-md text-[12px] font-semibold transition-colors">
              ✓ Đang theo dõi
            </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center text-center hover:border-tertiary/40 transition-all book-card-shadow">
<div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-tertiary/20">
<img className="w-full h-full object-cover" alt="Chân dung Morgan Housel tác giả Tâm lý học về tiền, phong thái điềm đạm trí thức trong trang phục vest giản dị, phông nền thư viện sách mờ ảo màu nâu ấm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtrE0r2gXqHTig1zo3glXgfCTbKIG1iJv0jftMG7jgJJAy4XBzXb_a0OQpbRa8X1mTIRnjs54Zb5EsOBo9IE1RxUfVgYt5ysUjQ46kpM6ikrx4t_t56RpqAQbYuqKfhaO1h18LuSzCUNduXsNOWS2wX0xolsVziTAj70AnD6YrUKPB5Oyg0jtxgqFbF0yN0X6x3vCXuSCMXzIhQxcEBAP86uH8f2lmCgbn6JCxhlEqNeYzY_-Zpiv-tQ" />
</div>
<h4 className="font-title-md text-[14px] font-semibold text-on-surface">Morgan Housel</h4>
<span className="font-body-sm text-[12px] text-on-surface-variant">3 tác phẩm tài chính</span>
<button className="mt-3 px-4 py-1.5 rounded-full bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary font-title-md text-[12px] font-semibold transition-colors">
              + Theo dõi
            </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center text-center hover:border-tertiary/40 transition-all book-card-shadow">
<div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-tertiary/20">
<img className="w-full h-full object-cover" alt="Chân dung học giả sử học Yuval Noah Harari, ánh mắt thông tuệ và sâu sắc, ánh sáng tự nhiên dịu nhẹ phong cách tư liệu danh nhân quốc tế." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTraLVsMiNUVda0rejvWN-zCy-uTUY55qgl17upiljc0TV6u1kOJnsntndANnLcPEmEgEEdIwvKaT_yEjZTbUveJXG5yZUXE77KuhWBL4eSEm_dlUCQuFaEisFn6uqlFfcY-RTB2cMXk3FuQCIdIfRpqkHpiSqE3hsDJW1RFT1dQTBClR3wqcCD6Y-Jt6X1SsOlJCvS-pcnFeB47QmLs4X8uc9_tU14Sv2hqeEB1ry4JzHN-_w8ji9Fw" />
</div>
<h4 className="font-title-md text-[14px] font-semibold text-on-surface">Yuval Noah Harari</h4>
<span className="font-body-sm text-[12px] text-on-surface-variant">5 bộ lược sử nhân loại</span>
<button className="mt-3 px-4 py-1.5 rounded-full bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary font-title-md text-[12px] font-semibold transition-colors">
              + Theo dõi
            </button>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center text-center hover:border-tertiary/40 transition-all book-card-shadow">
<div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-tertiary/20">
<img className="w-full h-full object-cover" alt="Chân dung nhà văn Nguyễn Nhật Ánh của văn học tuổi thơ Việt Nam, nụ cười hiền hậu ấm áp bên trang bản thảo viết tay trong góc quán quen." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmk40IHL8nN8QgKmmU5Htwlb2gfZo134PTe-LmHn1e02Dy8D3eLCGlU_U27hCuP3t0jn7R4F3zjTTBBAowvf6PDX6-RbVei2RSTp33PDhYHzIFrWCpK9wHIInJJ5w0ByCX87r2K5VshsFg3ne7rf6i-N_G-_nzhcvWnfSkv7aJHW-9Bx3QzTpbw_67wwMZsthqpn3yoWWuD8LZQ9LpRP-5UTOg8eIetCyfz3Txa9jlqbr0mHuqw_4EHQ" />
</div>
<h4 className="font-title-md text-[14px] font-semibold text-on-surface">Nguyễn Nhật Ánh</h4>
<span className="font-body-sm text-[12px] text-on-surface-variant">32 truyện dài tuổi thơ</span>
<button className="mt-3 px-4 py-1.5 rounded-full bg-surface-container hover:bg-tertiary hover:text-on-tertiary text-tertiary font-title-md text-[12px] font-semibold transition-colors">
              + Theo dõi
            </button>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
<div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Nhà Xuất Bản &amp; Đối Tác Bản Quyền</h3>
<p className="font-body-sm text-[13px] text-on-surface-variant mt-0.5">Cam kết 100% sách thật, ấn bản chuẩn chỉ từ các đơn vị uy tín hàng đầu</p>
</div>
<a className="font-title-md text-[13px] text-tertiary hover:underline font-semibold flex items-center gap-1" href="#">
            Xem tất cả gian hàng chính hãng <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex items-center gap-3.5 hover:border-tertiary transition-all book-card-shadow cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-bold text-tertiary font-headline-sm shrink-0">
              TRẺ
            </div>
<div>
<div className="flex items-center gap-1">
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">NXB Trẻ</h4>
<span className="material-symbols-outlined text-[15px] text-tertiary fill-icon">verified</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">42.500 người theo dõi</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex items-center gap-3.5 hover:border-tertiary transition-all book-card-shadow cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-bold text-secondary font-headline-sm shrink-0">
              NN
            </div>
<div>
<div className="flex items-center gap-1">
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">Nhã Nam</h4>
<span className="material-symbols-outlined text-[15px] text-tertiary fill-icon">verified</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">68.200 người theo dõi</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex items-center gap-3.5 hover:border-tertiary transition-all book-card-shadow cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-bold text-primary font-headline-sm shrink-0">
              KĐ
            </div>
<div>
<div className="flex items-center gap-1">
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">NXB Kim Đồng</h4>
<span className="material-symbols-outlined text-[15px] text-tertiary fill-icon">verified</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">51.900 người theo dõi</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex items-center gap-3.5 hover:border-tertiary transition-all book-card-shadow cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-bold text-tertiary font-headline-sm shrink-0">
              αB
            </div>
<div>
<div className="flex items-center gap-1">
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">Alpha Books</h4>
<span className="material-symbols-outlined text-[15px] text-tertiary fill-icon">verified</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">39.100 người theo dõi</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 flex items-center gap-3.5 hover:border-tertiary transition-all book-card-shadow cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-bold text-on-surface font-headline-sm shrink-0">
              FN
            </div>
<div>
<div className="flex items-center gap-1">
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">First News</h4>
<span className="material-symbols-outlined text-[15px] text-tertiary fill-icon">verified</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">45.800 người theo dõi</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
<div>
<div className="flex items-center gap-2 text-tertiary font-label-sm text-[12px] uppercase font-bold">
<span className="material-symbols-outlined text-[18px]">forum</span> Mạng Xã Hội Độc Giả HUKI
            </div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">Cộng Đồng Đang Đọc &amp; Thảo Luận Gì?</h3>
</div>
<a className="font-title-md text-[13px] text-tertiary hover:underline font-semibold flex items-center gap-1" href="#">
            Ghé thăm Diễn Đàn Đọc <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" alt="Chân dung độc giả nữ Phương Thảo dịu dàng trong tiệm trà sách, đeo kính thanh lịch, nụ cười tinh tế phong cách văn học nghệ thuật tao nhã." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDudxgVMML_sgJfIDt0kJIqOu05zv5bBG96Ja3O8eT9mifVyStY6lnCLUheExhdsRhlWBnksCN9Id433O1w10F0tKY3CWhucJ1HtwKFgt0FWE51G9cDr89SDbDyKql8LrrC4z60g8NQRNR0oxk-3uEoCkcmdHTTdqdS1LsNDtb75jWIfsUnMYTGbCqUEH5L0ao-jk1o2TqP_VkmIHjoBvX3UZ6KfbfMLj-SYtdNMRr7Yp-IfJHzzMfLNw" />
</div>
<div>
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">Lê Phương Thảo</h4>
<span className="font-body-sm text-[11px] text-on-surface-variant">Vừa đọc xong cuốn 'Atomic Habits'</span>
</div>
</div>
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
</div>
<p className="font-body-md text-[13px] text-on-surface leading-relaxed">
                "Cuốn sách đã thay đổi hoàn toàn cách mình nhìn nhận về mục tiêu. Đừng tập trung vào đích đến, hãy kiến tạo một hệ thống hành vi tí hon mỗi ngày..."
              </p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant text-[12px]">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-[16px]">favorite</span> 142</span>
<span className="flex items-center gap-1 hover:text-tertiary cursor-pointer"><span className="material-symbols-outlined text-[16px]">chat_bubble</span> 28 bình luận</span>
</div>
<span className="text-[11px]">2 giờ trước</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" alt="Chân dung độc giả nam Hoàng Long trẻ tuổi năng động với nụ cười sảng khoái bên bàn đọc sách thư viện hiện đại ngập tràn ánh nắng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVUON5wplaY962G-e4RdAr5WP_j4J21qV8OznHaoQUVPnQSP1y4_DXp21uo9peEB3INDzgEGvN1YSsYIsl0r7m66X_i7OlfJnX3cQM0F57aZhTi_v1xuaTAsYrqmaqdeRst4lPKMRmelueUtLls719HTVw0dZLzXU6hAcq2usErTkgND60zNHnkqHG1l2ejELA1bke5WkS3ns3g-iU2DsHrJDsWW94nu4DFi-2ul0Lnm7lNsFM9m8SyQ" />
</div>
<div>
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">Trần Hoàng Long</h4>
<span className="font-body-sm text-[11px] text-on-surface-variant">Review cuốn 'Tâm Lý Học Về Tiền'</span>
</div>
</div>
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star_half</span>
</div>
<p className="font-body-md text-[13px] text-on-surface leading-relaxed">
                "Cách tác giả phân tích về lòng tham và sự đủ đầy thực sự là một cú tát thức tỉnh. Đọc chậm từng chương trên HUKI Reader ban đêm rất thấm!"
              </p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant text-[12px]">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-[16px]">favorite</span> 98</span>
<span className="flex items-center gap-1 hover:text-tertiary cursor-pointer"><span className="material-symbols-outlined text-[16px]">chat_bubble</span> 16 bình luận</span>
</div>
<span className="text-[11px]">5 giờ trước</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 book-card-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" alt="Chân dung độc giả nữ Minh Anh phong cách thanh lịch với mái tóc ngắn tinh tế và nụ cười rạng rỡ trong triển lãm sách hội họa nghệ thuật." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcI1ilftVRQhZe8zdz1QYlqywoblx1SYa-VF-sg4AVarmY6Q_aEbNRIzQ-i4PDxgD5FNegtJ6F8NIsaTYtygfnOf4KrQpn4Yu0q0KdQiPFP5GmVoHxQrQW4k54yh4JJWb7TjxSQj6aNPHC3WtAV7sU6ZCg5reilFciTdbQKjAerueFV6pK6W4uo2CGFdrRN8JDBrYv9LsYreNDoJEQIXt7kDMHCt8QJ4yuIm-LeJuzQ7FOTnvPKDb1Uw" />
</div>
<div>
<h4 className="font-title-md text-[13px] font-semibold text-on-surface">Nguyễn Minh Anh</h4>
<span className="font-body-sm text-[11px] text-on-surface-variant">Khởi động Thử Thách Đọc 2026</span>
</div>
</div>
<div className="flex items-center gap-1 text-secondary-container mb-2">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
</div>
<p className="font-body-md text-[13px] text-on-surface leading-relaxed">
                "Mục tiêu 35 cuốn năm nay đã hoàn thành cuốn số 4 rồi cả nhà ơi! Bạn nào đang tìm sách chữa lành tâm hồn thì không nên bỏ qua 'Dám Bị Ghét' nhé."
              </p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant text-[12px]">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-[16px]">favorite</span> 210</span>
<span className="flex items-center gap-1 hover:text-tertiary cursor-pointer"><span className="material-symbols-outlined text-[16px]">chat_bubble</span> 42 bình luận</span>
</div>
<span className="text-[11px]">Hôm qua</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low rounded-3xl p-6 lg:p-8 border border-outline-variant/30 flex flex-col gap-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[24px]">collections_bookmark</span>
<div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Bộ Sưu Tập Combo Sách - Tiết Kiệm 30%</h3>
<p className="font-body-sm text-[13px] text-on-surface-variant">Mua theo bộ ba ấn phẩm tinh hoa, đóng gói hộp quà sang trọng kèm bookmark độc quyền</p>
</div>
</div>
<span className="bg-secondary text-on-secondary font-label-sm text-[11px] font-bold px-3 py-1 rounded-full uppercase">
            Hộp Quà Tri Thức
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 flex flex-col sm:flex-row gap-6 items-center book-card-shadow">
<div className="w-[200px] h-[180px] relative shrink-0 flex items-center justify-center">
<div className="w-[100px] h-[150px] rounded-lg shadow-md absolute left-2 transform -rotate-12 border border-outline-variant/30 overflow-hidden spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Tư Duy Đột Phá màu xanh ngọc bích sang trọng, chi tiết tia sáng tri thức tinh xảo." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_QjvduKfNR5seSn9HPQEvqsH1E7n9WeSjjr9wNbXrRGbPMZDQx-zMBxCEDXUuKTyqJgLwQjYnRRlbm3tj3ffqDtG5oIj915dx4fdYGouCBRv67zL2f4HLc0YY0dFXeQIJ2n1iUGV0DXtqTQXU6KCLevhIIzzexoCH-_6PuICpO8LDeszxFJy6bk9UliEwUulEAc_bvwTRZb7QBXVhr2SJCmaOGv8UbmgEMYqd8B3pyPYz6x6V1ZB-tA" />
</div>
<div className="w-[105px] h-[155px] rounded-lg shadow-lg relative z-10 border border-outline-variant/40 overflow-hidden spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Rèn Luyện Tư Duy Phản Biện màu kem ngà và xanh đậm thanh nhã, phong cách ấn họa trí thức hàn lâm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkHNckh2qNxG6vP9xBQOhN_j0cpXF9XzvB2lmrn6RNFJ588pRh96iKJIl7t1DjsTo4XWg4nHw7FOyTaZiK-CExIDPjSGlvF6Tgm3uO5Ka7C3lm9hvA0Q9SrZHUxRGn5_m_81s9p0Zgmb6j0FQMDvQw69X1Svu-VMorrJkauSziIpvFdfZG7pJJT3ufAwSAeewW60Asdh2BW8KEzFYpqjQp3DiKCLBtibBM1w7draDDvJ_s5iwkxzPSmw" />
</div>
<div className="w-[100px] h-[150px] rounded-lg shadow-md absolute right-2 transform rotate-12 border border-outline-variant/30 overflow-hidden spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Sức Mạnh Của Trực Giác màu xanh lam thẫm bí ẩn kết hợp ánh kim sang trọng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD07ofHbad1Ed8bpRC3fJjNXcQHdEtXLiX2Zlrovt8CF41gqPHpReuJASicWyqIUc_FvmGOJIruGktt8garc8-MItXxGTd-cdei8NsJ-U-85yDlLFX8O4pK0p3PrWH9nQSZP6GLmJ7QPmoO_-UQ8IJ1N_4vQ9TkjdophOsPeN1nNvIO0k79B1gjI1bTwTALG8Q-rr6FEilTOzqjXO_RJo9ysWHdIJ0HurEbQQliuiK94Fgr3hjNzZr8yQ" />
</div>
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<span className="bg-primary-fixed text-primary font-label-sm text-[10px] font-bold px-2 py-0.5 rounded">Combo 3 cuốn - Tiết kiệm 135.000₫</span>
<h4 className="font-title-md text-[16px] font-semibold text-on-surface mt-2">Bộ Sách Rèn Luyện Tư Duy Sắc Bén &amp; Quyết Định Đúng Đắn</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Gồm: Tư Duy Nhanh &amp; Chậm + Nghệ Thuật Tư Duy Rành Mạch + Rèn Luyện Trí Não</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[18px] font-bold text-tertiary">315.000₫</span>
<span className="font-body-sm text-[13px] text-on-surface-variant/60 line-through ml-2">450.000₫</span>
</div>
<button className="px-4 py-2 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[12px] font-semibold hover:bg-tertiary-container transition-colors">
                  Mua Combo Ngay
                </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 flex flex-col sm:flex-row gap-6 items-center book-card-shadow">
<div className="w-[200px] h-[180px] relative shrink-0 flex items-center justify-center">
<div className="w-[100px] h-[150px] rounded-lg shadow-md absolute left-2 transform -rotate-12 border border-outline-variant/30 overflow-hidden spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Nhà Đầu Tư Thông Minh của Benjamin Graham tông màu xanh cổ điển uy quyền." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu7LaASRbXZ7TUHWVAA27v2w_NOsutXCFd2cyMdMjko98cXe1k4fUFUxUMyAJPuv94pBCY0nl8uM01aoHKeuFpg6ZVTga7A_CyDLJnVJN3VjPtUKX01ZRbji59GS_rVb4yiV0iivvQM-Dl-auR9zcEvDyZWHwg4d1R42zRmKJ1GzWAvk2yIJlwXpOUsU44i6pD2gqSDBIi0ln-qTTye32CBClOpmCDacWI7uvsqRGnn9kwNyaDzslOYw" />
</div>
<div className="w-[105px] h-[155px] rounded-lg shadow-lg relative z-10 border border-outline-variant/40 overflow-hidden spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Tâm Lý Học Về Tiền màu lục bảo ánh vàng kim đẳng cấp quốc tế." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM7gBSVDgX1zUMWDdQFGZ7IZg2kjfHbgtiqdLWk-uRX--8P_yVE1QgBXtZc-vuME4D_3wWbkWNqk79YS-9NOXNCV3o7Y_GGruD6pzQ-iZrMq23Bl5Zdd_XQ961fXc8maykgDBp_OWE4_l2BuZ_aioFoNZ9XiJz4L1PeFwm7RTJpZLcerg1dTvIUrXf8pgpBer-e9X--S2UqUZ0cw3pb3CO56J0IDZHmJfbkpLmIECuNyvzwng-FqKPsw" />
</div>
<div className="w-[100px] h-[150px] rounded-lg shadow-md absolute right-2 transform rotate-12 border border-outline-variant/30 overflow-hidden spine-crease">
<img className="w-full h-full object-cover" alt="Bìa sách Bước Đi Ngẫu Nhiên Trên Phố Wall màu lam thẫm trang trọng." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsq8ZiGEIYceYqKnhpVyjqgGJm-dW0JALzvnEZGfK2Huzvok3KGyrL3q7K7vGcnyA1kVW1-2oY_HmfLRc2tErTMOfiigAX-REIRW2GxLUpRHAiVQGvqELsnSl-V5wq5jbqYwUzbeWsaVZRqXc9-clAMuow_8uYbbHrU9oHAeLeLmGMcEVkvMbX6-5rou19M_tYrelhPRHEql9PvUZj9_0VyN0zyV3dUBxO56Cw-6R0wipatHSUXQQK-g" />
</div>
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<span className="bg-primary-fixed text-primary font-label-sm text-[10px] font-bold px-2 py-0.5 rounded">Combo 3 cuốn - Tiết kiệm 168.000₫</span>
<h4 className="font-title-md text-[16px] font-semibold text-on-surface mt-2">Bộ Cẩm Nang Tự Do Tài Chính &amp; Đầu Tư Bền Vững 2026</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Gồm: Tâm Lý Học Về Tiền + Nhà Đầu Tư Thông Minh + Bước Đi Ngẫu Nhiên</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="font-title-md text-[18px] font-bold text-tertiary">392.000₫</span>
<span className="font-body-sm text-[13px] text-on-surface-variant/60 line-through ml-2">560.000₫</span>
</div>
<button className="px-4 py-2 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[12px] font-semibold hover:bg-tertiary-container transition-colors">
                  Mua Combo Ngay
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-3xl p-8 border border-tertiary/30 shadow-sm relative overflow-hidden">
<div className="max-w-[880px] mx-auto text-center flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-tertiary-fixed/30 text-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[28px]">smart_toy</span>
</div>
<h3 className="font-headline-md text-headline-sm font-semibold text-on-surface">
            Chưa Biết Nên Đọc Gì Hôm Nay? Hãy Để HUKI AI Lắng Nghe Bạn
          </h3>
<p className="font-body-md text-on-surface-variant max-w-[620px]">
            Nhập câu hỏi tự nhiên về tâm trạng, khó khăn hiện tại trong công việc hay chủ đề bạn tò mò, trợ lý AI sẽ phân tích và đề xuất chính xác cuốn sách dành cho bạn.
          </p>

<div className="w-full mt-2 bg-surface-container-low border border-outline-variant/50 rounded-2xl p-2.5 flex flex-col sm:flex-row items-center gap-2 focus-within:border-tertiary focus-within:bg-surface-container-lowest transition-all">
<div className="flex-1 flex items-center px-3 w-full">
<span className="material-symbols-outlined text-tertiary text-[22px] mr-2">auto_awesome</span>
<input className="w-full bg-transparent border-none text-on-surface font-body-md text-[14px] focus:outline-none" type="text" value="Tôi muốn tìm sách giúp cải thiện sự tập trung và làm việc sâu mà không bị kiệt sức..." />
</div>
<button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-tertiary text-on-tertiary font-title-md text-[14px] font-semibold hover:bg-tertiary-container flex items-center justify-center gap-2 transition-colors shrink-0 shadow-sm">
<span>Gợi ý thông minh</span>
<span className="material-symbols-outlined text-[18px]">magic_button</span>
</button>
</div>
<div className="flex flex-wrap items-center justify-center gap-2 text-[12px] text-on-surface-variant font-body-sm">
<span>Ví dụ câu hỏi hay:</span>
<span className="bg-surface-container px-2.5 py-1 rounded-full cursor-pointer hover:text-tertiary">"Sách về tâm lý vượt qua trì hoãn"</span>
<span className="bg-surface-container px-2.5 py-1 rounded-full cursor-pointer hover:text-tertiary">"Tiểu thuyết trinh thám lôi cuốn cuối tuần"</span>
<span className="bg-surface-container px-2.5 py-1 rounded-full cursor-pointer hover:text-tertiary">"Sách nhập môn đầu tư cho người mới"</span>
</div>
</div>
</section>

<section className="rounded-3xl bg-[#004D38] text-white p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="max-w-[540px]">
<div className="flex items-center gap-2 text-secondary-container font-label-sm text-[12px] font-bold uppercase tracking-wider mb-2">
<span className="material-symbols-outlined text-[18px]">mail</span> BẢN TIN SALON VĂN HỌC
          </div>
<h3 className="font-headline-md text-headline-sm font-semibold leading-snug">
            Nhận Ngay Mã Ưu Đãi 20% Cho Đơn Hàng Đầu Tiên
          </h3>
<p className="font-body-sm text-inverse-on-surface/80 mt-1">
            Cập nhật review sách chuyên sâu từ các dịch giả uy tín, danh mục sách tặng miễn phí hàng tuần và vé tham dự giao lưu tác giả độc quyền.
          </p>
</div>
<div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2">
<input className="w-full sm:w-[320px] px-4 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-[14px] focus:outline-none border-none shadow-md placeholder:text-on-surface-variant/60" placeholder="Nhập địa chỉ email của bạn..." type="email" />
<button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-title-md text-[14px] font-bold hover:brightness-105 transition-all shrink-0 shadow-md">
            Đăng ký ngay
          </button>
</div>
</section>
</main>

<footer className="w-full bg-[#00382B] text-inverse-on-surface mt-space-3xl border-t border-outline-variant/30">
<div className="max-w-[1520px] mx-auto px-margin-desktop py-14 flex flex-col justify-between">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

<div className="lg:col-span-2 flex flex-col gap-4">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">menu_book</span>
</div>
<span className="font-headline-md text-headline-sm font-semibold text-white tracking-tight">HUKI EBOOK</span>
</div>
<p className="font-body-md text-[13px] text-inverse-on-surface/75 max-w-[380px] leading-relaxed">
              Hệ sinh thái Sàn Thương Mại Điện Tử và Mạng Xã Hội Bạn Đọc hàng đầu Việt Nam. Nơi tôn vinh giá trị sách thật, tri thức bản quyền và văn hóa đọc tinh tế.
            </p>
<div className="flex items-center gap-3 mt-1">
<a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#" title="Facebook">
<span className="material-symbols-outlined text-[18px]">public</span>
</Link>
<a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#" title="Youtube">
<span className="material-symbols-outlined text-[18px]">smart_display</span>
</Link>
<a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#" title="TikTok">
<span className="material-symbols-outlined text-[18px]">podcasts</span>
</Link>
<a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" href="#" title="Zalo">
<span className="material-symbols-outlined text-[18px]">chat</span>
</Link>
</div>
</div>

<div className="flex flex-col gap-3">
<h4 className="font-title-md text-[14px] font-semibold text-white uppercase tracking-wider">Về Huki Ebook</h4>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Giới thiệu về Huki</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Tuyển dụng nhân tài</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Điều khoản sử dụng</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Chính sách bảo mật</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Bản quyền &amp; DRM sách số</Link>
</div>

<div className="flex flex-col gap-3">
<h4 className="font-title-md text-[14px] font-semibold text-white uppercase tracking-wider">Hỗ Trợ Khách Hàng</h4>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Trung tâm trợ giúp độc giả</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Hướng dẫn mua sách giấy &amp; Ebook</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Chính sách đổi trả &amp; hoàn tiền</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Phương thức vận chuyển hỏa tốc</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Cài đặt ứng dụng HUKI Reader</Link>
</div>

<div className="flex flex-col gap-3">
<h4 className="font-title-md text-[14px] font-semibold text-white uppercase tracking-wider">Hợp Tác &amp; Thanh Toán</h4>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Dành cho Nhà Xuất Bản &amp; Tác Giả</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Mở gian hàng chính hãng (Mall)</Link>
<a className="font-body-sm text-[13px] text-inverse-on-surface/70 hover:text-white transition-colors" href="#">Tiếp thị liên kết độc giả (Affiliate)</Link>
<div className="mt-2 pt-2 border-t border-white/10">
<span className="font-label-sm text-[11px] text-inverse-on-surface/60 uppercase block mb-2">Thanh toán an toàn</span>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-white text-[#17201F] text-[10px] font-bold">VISA</span>
<span className="px-2 py-1 rounded bg-white text-[#17201F] text-[10px] font-bold">MasterCard</span>
<span className="px-2 py-1 rounded bg-[#A50064] text-white text-[10px] font-bold">MoMo</span>
<span className="px-2 py-1 rounded bg-[#005BAA] text-white text-[10px] font-bold">VNPay</span>
</div>
</div>
</div>
</div>

<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-inverse-on-surface/60 font-body-sm">
<p>© 2026 HUKI EBOOK. Bản quyền thuộc về Công ty TNHH Sách Điện Tử Huki.</p>
<div className="flex items-center gap-4">
<span>Giấy phép hoạt động số 128/GP-BTTTT cấp năm 2023</span>
<span>•</span>
<span className="text-tertiary-fixed">Đã chứng nhận Sàn Sách Bản Quyền</span>
</div>
</div>
</div>
</footer>
</div>

    </div>
  );
}
