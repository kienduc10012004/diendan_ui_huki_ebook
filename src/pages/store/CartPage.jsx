import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function CartPage() {
  return (
    <div className="stitch-page bg-background text-on-surface font-body-md text-body-md min-h-screen flex flex-col antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <style>{".book-spine-shadow {\n      position: relative;\n    }\n    .book-spine-shadow::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 10%;\n      background: linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.03) 6%, transparent 12%);\n      pointer-events: none;\n      z-index: 10;\n      border-top-left-radius: inherit;\n      border-bottom-left-radius: inherit;\n    }"}</style>


<div className="w-full bg-surface-container-low border-b border-outline-variant/60 text-body-sm font-body-sm h-[34px] flex items-center justify-between px-6 text-on-surface/70 z-40">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 text-tertiary font-medium">
<span className="material-symbols-outlined text-[15px]">verified_user</span>
        HUKI Cam kết 100% Sách Thật &amp; Bản Quyền Số
      </span>
<span className="text-outline-variant">|</span>
<span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[15px]">headset_mic</span>
        Hotline: 1900 8866 (8:00 - 21:00)
      </span>
</div>
<div className="flex items-center gap-5">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[15px]">menu_book</span>
        Tải ứng dụng đọc HukiReader
      </Link>
<span className="text-outline-variant">|</span>
<a className="hover:text-primary transition-colors" href="#">Trở thành Tác giả/Nhà xuất bản</Link>
<span className="text-outline-variant">|</span>
<div className="flex items-center gap-1 text-on-surface font-medium cursor-pointer">
<span>Tiếng Việt</span>
<span className="material-symbols-outlined text-[14px]">expand_more</span>
</div>
</div>
</div>

<header className="w-full bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50 shadow-sm transition-all">
<div className="w-full max-w-[1780px] mx-auto h-[74px] px-6 flex items-center justify-between gap-6">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-headline-md text-headline-md font-bold shadow-sm shadow-primary/20 group-hover:scale-105 transition-transform">
            H
          </div>
<div>
<span className="font-headline-md text-headline-md font-semibold text-primary tracking-tight leading-none">HUKI EBOOK</span>
<span className="block text-[10px] tracking-widest text-on-surface/50 font-body-sm font-semibold uppercase">Salon Văn Học &amp; Sàn Sách</span>
</div>
</Link>

<nav className="hidden xl:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/50">
<a className="px-4 py-1.5 rounded-lg bg-white text-primary font-title-md text-body-md shadow-xs flex items-center gap-2 font-medium" href="#">
<span className="material-symbols-outlined text-[18px]">storefront</span>
            Sàn TMĐT
          </Link>
<a className="px-4 py-1.5 rounded-lg text-on-surface/70 hover:text-primary font-body-md text-body-md flex items-center gap-2 transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">forum</span>
            Mạng Xã Hội Sách
          </Link>
</nav>
</div>

<div className="flex-1 max-w-[560px] relative">
<div className="relative flex items-center w-full">
<input className="w-full h-11 pl-11 pr-24 rounded-lg bg-surface-container-low border border-outline-variant focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary text-body-md text-on-surface placeholder:text-on-surface/40 transition-all" placeholder="Tìm theo tựa sách, tác giả James Clear, Cal Newport, dịch giả..." type="text" />
<span className="material-symbols-outlined absolute left-3.5 text-on-surface/45 text-[20px]">search</span>
<button className="absolute right-1.5 h-8 px-3.5 bg-primary text-white rounded-md text-label-md font-medium hover:bg-primary-dark transition-colors flex items-center gap-1">
            Tìm
          </button>
</div>
</div>

<div className="flex items-center gap-4">

<button className="relative p-2 rounded-lg text-on-surface/80 hover:bg-surface-container-low hover:text-primary transition-colors" title="Danh sách yêu thích">
<span className="material-symbols-outlined text-[23px]">favorite</span>
<span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-huki-amber"></span>
</button>

<button className="relative p-2 rounded-lg text-on-surface/80 hover:bg-surface-container-low hover:text-primary transition-colors" title="Thông báo">
<span className="material-symbols-outlined text-[23px]">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
</button>

<a className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-huki-soft-mint border border-primary/20 text-primary group transition-all" href="#" title="Giỏ hàng">
<span className="material-symbols-outlined text-[22px]">shopping_bag</span>
<span className="font-title-md text-body-md font-semibold">Giỏ hàng</span>
<span className="bg-primary text-white text-label-sm font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">4</span>
</Link>
<div className="h-6 w-[1px] bg-outline-variant mx-1"></div>

<div className="flex items-center gap-3 pl-1 cursor-pointer group">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition-all" alt="Editorial portrait of Minh Tri, a stylish Vietnamese literature enthusiast and scholar wearing tortoiseshell glasses and a dark linen shirt in a warm modern bookstore ambiance, soft cinematic lighting, premium magazine photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQdVVdlcmohkwn4JRcW1X119nU5s_2kmxoXsZBu92DtPVGImDNmhr_9qgveyMeo8jBw2tVx7sej_85-25H72nyZ86PVd-GTaj8C9Y32ohRROkshCYy9r62bpYSPNxpC7qepWuYQDgDqN_CZZJK5fU53ktUJMXLIiqb9d-TIbC7L8RC1hsNrxkT7Ctgm4XCcXzJ2t2Q7ZRJcx0O1zRYvOcM1h197vtoddBSOwNLi1v8_N2HAVkS8FkBcA" />
<span className="absolute -bottom-1 -right-1 bg-huki-amber text-white text-[9px] font-bold px-1 rounded-full border border-white">VIP</span>
</div>
<div className="hidden 2xl:block text-left">
<div className="font-title-md text-body-sm font-semibold text-on-surface leading-tight flex items-center gap-1">
              Minh Trí
              <span className="material-symbols-outlined text-[14px] text-primary fill-icon">verified</span>
</div>
<span className="text-[11px] text-on-surface/60">Tủ sách: 142 cuốn</span>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 flex w-full">

<aside className="w-[68px] bg-surface-container-lowest border-r border-outline-variant flex flex-col items-center py-6 shrink-0 z-30">
<div className="flex flex-col items-center gap-6 w-full">

<a className="w-12 h-12 rounded-xl bg-huki-soft-mint text-primary flex flex-col items-center justify-center gap-0.5 border border-primary/25 relative group" href="#" title="Sàn Sách">
<span className="material-symbols-outlined text-[22px]">storefront</span>
<span className="text-[9px] font-semibold">Sàn Sách</span>
<span className="absolute -left-0.5 top-2 bottom-2 w-1 bg-primary rounded-r-md"></span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface/65 hover:text-primary hover:bg-surface-container-low flex flex-col items-center justify-center gap-0.5 transition-colors group" href="#" title="Tủ Sách Cá Nhân">
<span className="material-symbols-outlined text-[22px]">import_contacts</span>
<span className="text-[9px] font-medium">Tủ Sách</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface/65 hover:text-primary hover:bg-surface-container-low flex flex-col items-center justify-center gap-0.5 transition-colors group" href="#" title="Cộng Đồng">
<span className="material-symbols-outlined text-[22px]">groups</span>
<span className="text-[9px] font-medium">Salon</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface/65 hover:text-primary hover:bg-surface-container-low flex flex-col items-center justify-center gap-0.5 transition-colors group" href="#" title="Sách Nói">
<span className="material-symbols-outlined text-[22px]">headphones</span>
<span className="text-[9px] font-medium">Audio</span>
</Link>

<a className="w-12 h-12 rounded-xl text-on-surface/65 hover:text-primary hover:bg-surface-container-low flex flex-col items-center justify-center gap-0.5 transition-colors group" href="#" title="Đơn Hàng">
<span className="material-symbols-outlined text-[22px]">local_shipping</span>
<span className="text-[9px] font-medium">Đơn Hàng</span>
</Link>
</div>

<div className="mt-auto flex flex-col items-center gap-4 w-full">
<a className="w-10 h-10 rounded-lg text-on-surface/50 hover:text-primary hover:bg-surface-container-low flex items-center justify-center transition-colors" href="#" title="Trợ giúp &amp; Thiết lập">
<span className="material-symbols-outlined text-[20px]">help_outline</span>
</Link>
<a className="w-10 h-10 rounded-lg text-on-surface/50 hover:text-primary hover:bg-surface-container-low flex items-center justify-center transition-colors" href="#" title="Cài đặt giao diện">
<span className="material-symbols-outlined text-[20px]">tune</span>
</Link>
</div>
</aside>

<main className="flex-1 min-w-0 bg-background pb-space-3xl">
<div className="max-w-[1520px] mx-auto px-8 pt-6">

<nav className="flex items-center gap-2 text-body-sm text-on-surface/60 mb-5">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
            Trang chủ
          </Link>
<span className="text-outline-variant">/</span>
<a className="hover:text-primary transition-colors" href="#">Sàn TMĐT</Link>
<span className="text-outline-variant">/</span>
<span className="text-on-surface font-semibold">Giỏ hàng</span>
</nav>

<div className="flex items-baseline justify-between border-b border-outline-variant pb-5 mb-6">
<div className="flex items-baseline gap-4">
<h1 className="font-headline-lg text-[38px] leading-tight text-on-surface tracking-tight font-headline-md font-semibold">
              Giỏ Hàng
            </h1>
<span className="text-on-surface/60 font-body-md text-body-md">
              (4 sản phẩm từ 2 nhà xuất bản &amp; đối tác)
            </span>
</div>
<a className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-title-md text-body-md group font-medium transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Tiếp tục mua sắm sách
          </Link>
</div>

<div className="mb-6 rounded-2xl bg-huki-soft-mint border border-primary/25 p-4 sm:p-5 flex items-start gap-4 shadow-sm">
<div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm shadow-primary/20 mt-0.5">
<span className="material-symbols-outlined text-[22px]">auto_stories</span>
</div>
<div className="flex-1 text-on-surface">
<div className="flex items-center gap-2 mb-1">
<span className="font-title-md text-body-md font-semibold text-primary">Đơn Hàng Hỗn Hợp: Sách Giấy &amp; Ebook Bản Quyền</span>
<span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">Hệ Sinh Thái HUKI</span>
</div>
<p className="text-body-md text-on-surface/80 leading-relaxed">
              Đơn hàng của bạn bao gồm cả <strong className="text-on-surface font-semibold">Sách in giao tận nơi</strong> và <strong className="text-primary font-semibold">Ebook số hóa bản quyền</strong>. Ebook sẽ được tự động kích hoạt và cấp quyền đọc vĩnh viễn trên <span className="underline decoration-primary decoration-1 underline-offset-2 font-medium">Tủ Sách HUKI</span> ngay sau khi giao dịch thanh toán trực tuyến thành công.
            </p>
</div>
<button className="text-on-surface/40 hover:text-on-surface transition-colors p-1" title="Đóng thông báo">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>

<div className="grid grid-cols-12 gap-8 items-start">

<div className="col-span-12 lg:col-span-8 space-y-6">

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant px-6 py-4 flex items-center justify-between shadow-xs">
<label className="flex items-center gap-3 cursor-pointer select-none">
<input checked="" className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant transition-all cursor-pointer" type="checkbox" />
<span className="font-title-md text-body-md font-semibold text-on-surface">Chọn tất cả (4 sản phẩm)</span>
</label>
<div className="flex items-center gap-4">
<span className="text-on-surface/50 text-body-sm">Đã chọn: <strong className="text-primary font-semibold">4/4</strong></span>
<div className="h-4 w-[1px] bg-outline-variant"></div>
<button className="flex items-center gap-1.5 text-on-surface/60 hover:text-error text-body-sm transition-colors group">
<span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">delete_outline</span>
                  Xóa các sản phẩm đã chọn
                </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden shadow-sm">

<div className="p-5 bg-surface-container-low/70 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-3">
<input checked="" className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant cursor-pointer" type="checkbox" />
<div className="w-8 h-8 rounded-lg bg-[#00427A] text-white flex items-center justify-center font-bold text-xs tracking-tighter shadow-xs">
                    αB
                  </div>
<div className="flex items-center gap-1.5">
<span className="font-title-md text-body-md font-bold text-on-surface">Alpha Books Official</span>
<span className="material-symbols-outlined text-primary text-[17px] fill-icon" title="Gian hàng chính hãng chứng nhận">verified</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">Chính hãng</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest hover:bg-surface-container border border-outline-variant text-body-sm text-on-surface flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[15px]">storefront</span>
                    Xem cửa hàng
                  </button>
<button className="px-3 py-1 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 text-body-sm text-primary flex items-center gap-1 font-medium transition-colors">
<span className="material-symbols-outlined text-[15px]">confirmation_number</span>
                    Voucher của Shop (2)
                  </button>
</div>
</div>

<div className="p-6 border-b border-outline-variant/60 hover:bg-surface-container-lowest/80 transition-colors">
<div className="flex items-start gap-4">
<input checked="" className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant mt-8 cursor-pointer" type="checkbox" />

<div className="w-[90px] h-[135px] shrink-0 rounded-lg overflow-hidden book-spine-shadow border border-outline-variant/70 shadow-sm relative">
<img className="w-full h-full object-cover" alt="Modern editorial cover design for the Vietnamese edition of Atomic Habits book titled Thay Doi Ti Hon Hieu Qua Bat Ngo by James Clear, featuring elegant geometric patterns and warm cream typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcU26O9RXxuUE6tEdj3lV_IkEPeAEbV_XINI408XHscj13B9Jt1eC7uQrRDXyu3byi6MeVzLdEBIBHf5L8tmx014XlWWOzO01LApRCq4Le5GtlpUO9P3z4OnOy3u0_l9rOnFsQkRnUijXOyWPLwafoYZuaoB7ydHbcfLvstaGLDTSn3h3RHfCblHEFxRUKl6kfs2bFvKAg1rLzGwyefjfrMpJky9GO477VUaNcWoT2osMgxUat2Zyelw" />
</div>

<div className="flex-1 min-w-0 pr-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full text-label-sm font-semibold bg-[#E8E5DF] text-[#4A453E]">
                        Sách giấy
                      </span>
<span className="text-body-sm text-on-surface/50">•</span>
<span className="text-body-sm text-on-surface/70">Bìa mềm cao cấp</span>
<span className="text-body-sm text-on-surface/50">•</span>
<span className="text-body-sm text-on-surface/60">Tái bản 2024</span>
</div>
<h3 className="font-title-lg text-title-md font-bold text-on-surface hover:text-primary transition-colors cursor-pointer line-clamp-1">
                      Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ
                    </h3>
<p className="text-body-sm text-on-surface/65 mt-0.5">Tác giả: <span className="font-medium text-on-surface">James Clear</span> | Dịch giả: Đỗ Hàn</p>
<div className="mt-4 flex items-center gap-3">
<div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest shadow-2xs">
<button className="w-8 h-8 flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-surface-container-low rounded-l-lg transition-colors">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="w-10 text-center font-title-md text-body-md font-semibold text-on-surface">1</span>
<button className="w-8 h-8 flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-surface-container-low rounded-r-lg transition-colors">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<span className="text-body-sm text-on-surface/50">Còn 28 sản phẩm trong kho</span>
</div>
</div>

<div className="text-right shrink-0 flex flex-col items-end justify-between min-h-[120px]">
<div>
<div className="font-title-lg text-title-lg font-bold text-on-surface">
                        129.000đ
                      </div>
<div className="flex items-center justify-end gap-1.5 mt-0.5">
<span className="text-body-sm text-on-surface/40 line-through">169.000đ</span>
<span className="px-1.5 py-0.5 rounded bg-huki-amber/15 text-secondary font-bold text-label-sm">-24%</span>
</div>
</div>
<button className="text-on-surface/40 hover:text-error p-1.5 rounded-lg hover:bg-surface-container-low transition-colors group" title="Xóa khỏi giỏ hàng">
<span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">delete</span>
</button>
</div>
</div>
</div>

<div className="p-6 border-b border-outline-variant/60 bg-huki-soft-mint/30 hover:bg-huki-soft-mint/45 transition-colors">
<div className="flex items-start gap-4">
<input checked="" className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant mt-8 cursor-pointer" type="checkbox" />

<div className="w-[90px] h-[135px] shrink-0 rounded-lg overflow-hidden book-spine-shadow border border-primary/25 shadow-sm relative">
<img className="w-full h-full object-cover" alt="Book cover mockup for Vietnamese edition of Deep Work Lam Ra Lam Choi Ra Choi by Cal Newport with modern emerald green accents and minimalist editorial styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA62ygeX4HioU7gYvlmmpgNNTgKeSlXvDw5GwpDj3xf04iSpU9ZfBZRnLQe5nXAwrtqhxPFu5fXkQvCqGcoeEHZIEGJex1LPIFiTOujpnZCNePfHl6gsENVGgOVLcNp7w4k4HmoZgB_6MZWF0P5CfmSkRiecUcK8EzdW9WXLK6wAcyosRBMSruNquOVVJB4fUDfII1Gy_YE6RnTKZ3ZYQhaR9pi4F8WdoJZBwqF8Sa_BVVSXkA4rXxIVQ" />
<div className="absolute bottom-0 inset-x-0 bg-primary/90 text-white text-[9px] font-bold text-center py-0.5 uppercase tracking-wider backdrop-blur-xs">
                      Ebook Số
                    </div>
</div>

<div className="flex-1 min-w-0 pr-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2.5 py-0.5 rounded-full text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">devices</span>
                        Ebook (EPUB + PDF)
                      </span>
<span className="text-body-sm text-on-surface/50">•</span>
<span className="text-body-sm text-primary font-medium">Bản quyền điện tử vĩnh viễn</span>
</div>
<h3 className="font-title-lg text-title-md font-bold text-on-surface hover:text-primary transition-colors cursor-pointer line-clamp-1">
                      Deep Work – Làm Ra Làm, Chơi Ra Chơi
                    </h3>
<p className="text-body-sm text-on-surface/65 mt-0.5">Tác giả: <span className="font-medium text-on-surface">Cal Newport</span></p>

<div className="mt-4 flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-primary/20 text-body-sm text-primary font-medium shadow-2xs">
<span className="material-symbols-outlined text-[16px]">cloud_done</span>
                        1 Bản quyền số tài khoản
                      </div>
<span className="text-body-sm text-tertiary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-huki-amber">bolt</span>
                        Đọc ngay sau khi thanh toán · Tự động đồng bộ Tủ Sách HUKI
                      </span>
</div>
</div>

<div className="text-right shrink-0 flex flex-col items-end justify-between min-h-[120px]">
<div>
<div className="font-title-lg text-title-lg font-bold text-primary">
                        79.000đ
                      </div>
<div className="flex items-center justify-end gap-1.5 mt-0.5">
<span className="text-body-sm text-on-surface/40 line-through">119.000đ</span>
<span className="px-1.5 py-0.5 rounded bg-huki-amber/15 text-secondary font-bold text-label-sm">-34%</span>
</div>
<div className="text-[11px] text-primary/80 font-medium mt-1">Miễn phí giao hàng (Kỹ thuật số)</div>
</div>
<button className="text-on-surface/40 hover:text-error p-1.5 rounded-lg hover:bg-surface-container-low transition-colors group" title="Xóa khỏi giỏ hàng">
<span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">delete</span>
</button>
</div>
</div>
</div>

<div className="p-4 bg-surface-container-low/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-body-sm">

<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-full bg-huki-amber/20 text-secondary flex items-center justify-center font-bold text-[11px]">
                    🚚
                  </div>
<div>
<span className="text-on-surface/80">
                      Sách giấy từ shop đạt <strong className="text-on-surface">129.000đ</strong> — Mua thêm <strong className="text-primary font-semibold">91.000đ</strong> sách giấy để nhận <strong>Freeship</strong>
</span>
<div className="w-48 bg-outline-variant/40 h-1.5 rounded-full mt-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style="width: 58%"></div>
</div>
</div>
</div>

<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-outline-variant shadow-2xs">
<span className="material-symbols-outlined text-primary text-[18px]">local_activity</span>
<span className="text-on-surface font-medium">Voucher Shop: Giảm 20.000đ (đơn từ 200k)</span>
<span className="text-primary font-semibold text-label-sm ml-1 flex items-center">
                    Đã áp dụng
                    <span className="material-symbols-outlined text-[14px]">check</span>
</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden shadow-sm">

<div className="p-5 bg-surface-container-low/70 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-3">
<input checked="" className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant cursor-pointer" type="checkbox" />
<div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    FN
                  </div>
<div className="flex items-center gap-1.5">
<span className="font-title-md text-body-md font-bold text-on-surface">Nhà Sách First News Trí Việt</span>
<span className="material-symbols-outlined text-primary text-[17px] fill-icon" title="Đối tác uy tín">verified</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">HUKI Partner</span>
</div>
</div>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest hover:bg-surface-container border border-outline-variant text-body-sm text-on-surface flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[15px]">storefront</span>
                  Xem cửa hàng
                </button>
</div>

<div className="p-6 border-b border-outline-variant/60 hover:bg-surface-container-lowest/80 transition-colors">
<div className="flex items-start gap-4">
<input checked="" className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant mt-8 cursor-pointer" type="checkbox" />

<div className="w-[90px] h-[135px] shrink-0 rounded-lg overflow-hidden book-spine-shadow border border-outline-variant/70 shadow-sm relative">
<img className="w-full h-full object-cover" alt="Editorial book cover of The Psychology of Money by Morgan Housel Vietnamese translation Tam Ly Hoc Ve Tien published by First News in premium aesthetic styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ9lJefwh7SJsM-d-yKmavwMuSTbUtKJj-cZwvWAegojU70CFmrOCJdnnT-shs6lLglKJfVIuXwIkabc64a9-lG6Z_KTtOg00vErrb2W1ic9ON7-F6e9uHNzAnuFWZ4UZCXJDDSl4bsQuOlrncR7TRp6uTxk8DCht7yUhEocR1qaEHvjqIhM4S0r-q0WQh9GxdSZd78yx8oeuPJOt3s9YSFMLgMkfY4ahtq9qAlTkASPMz8nMvj-3f6g" />
</div>

<div className="flex-1 min-w-0 pr-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full text-label-sm font-semibold bg-[#E8E5DF] text-[#4A453E]">
                        Sách giấy
                      </span>
<span className="text-body-sm text-on-surface/50">•</span>
<span className="text-body-sm text-on-surface/70">Bìa mềm dập nổi</span>
<span className="text-body-sm text-on-surface/50">•</span>
<span className="text-body-sm text-on-surface/60">Tập 1</span>
</div>
<h3 className="font-title-lg text-title-md font-bold text-on-surface hover:text-primary transition-colors cursor-pointer line-clamp-1">
                      Tâm Lý Học Về Tiền (The Psychology of Money)
                    </h3>
<p className="text-body-sm text-on-surface/65 mt-0.5">Tác giả: <span className="font-medium text-on-surface">Morgan Housel</span></p>

<div className="mt-4 flex items-center gap-3">
<div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest shadow-2xs">
<button className="w-8 h-8 flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-surface-container-low rounded-l-lg transition-colors">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="w-10 text-center font-title-md text-body-md font-semibold text-on-surface">2</span>
<button className="w-8 h-8 flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-surface-container-low rounded-r-lg transition-colors">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<span className="text-body-sm text-on-surface/50">Đơn giá: 149.000đ / cuốn (Gốc 189.000đ)</span>
</div>
</div>

<div className="text-right shrink-0 flex flex-col items-end justify-between min-h-[120px]">
<div>
<div className="font-title-lg text-title-lg font-bold text-on-surface">
                        298.000đ
                      </div>
<div className="text-body-sm text-on-surface/40 line-through mt-0.5">378.000đ</div>
<span className="text-label-sm text-tertiary font-semibold block mt-1">Tiết kiệm 80.000đ</span>
</div>
<button className="text-on-surface/40 hover:text-error p-1.5 rounded-lg hover:bg-surface-container-low transition-colors group" title="Xóa">
<span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">delete</span>
</button>
</div>
</div>
</div>

<div className="p-4 bg-surface-container-low/40 flex items-center justify-between text-body-sm">
<div className="flex items-center gap-2 text-primary font-medium">
<span className="material-symbols-outlined text-[20px] text-tertiary">task_alt</span>
<span>🎉 Đã đủ điều kiện <strong>Miễn phí vận chuyển sách giấy</strong> từ First News (Đơn đạt 298.000đ)</span>
</div>
<span className="text-on-surface/50 text-body-sm">Giao hỏa tốc 2h khả dụng tại TP.HCM</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 shadow-xs mt-8">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">bookmark</span>
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Đã Lưu Để Mua Sau (2 sản phẩm)
                  </h2>
</div>
<button className="text-body-sm text-primary hover:text-primary-dark font-medium transition-colors">
                  Chuyển tất cả vào giỏ
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-outline-variant hover:border-primary/40 bg-surface-container-lowest transition-all group">
<div className="w-[60px] h-[90px] rounded-lg overflow-hidden shrink-0 book-spine-shadow border border-outline-variant/60">
<img className="w-full h-full object-cover" alt="Book cover of Dam Bi Ghet The Courage To Be Disliked Vietnamese edition with clean minimalist white and turquoise color scheme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Gv7-f0mBV5kDP9TtiJgBe-rO2H5RTSZ_wF-QUbFiSlqQ1zZbt4-BIFcegGBFFvO9XgoP6E9VS26FRTTqfHESb2APnwNLjZJ8Pr2XlxnivsxWYSoLSYinbHiVjVfoXe2eV_dCRoNVAYLHCwdeMv3-SBlzX0G6f9Qb47tJlGsPMplBKFZiH-DgQZIeT9DN0vWURTxVrKgD4GrNomOOB1-G8054ZJabupcr8OZiQmTFYMG1SawJQ5HRbw" />
</div>
<div className="flex-1 min-w-0">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed inline-block mb-1">Ebook</span>
<h4 className="font-title-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors truncate">Dám Bị Ghét</h4>
<p className="text-body-sm text-on-surface/60">Koga Fumitake, Kishimi Ichiro</p>
<div className="flex items-center justify-between mt-2">
<span className="font-title-md text-body-md font-bold text-primary">69.000đ</span>
<button className="px-3 py-1 bg-surface-container-low hover:bg-primary hover:text-white rounded-lg text-body-sm font-medium text-primary transition-colors border border-primary/20">
                        Thêm vào giỏ
                      </button>
</div>
</div>
</div>

<div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-outline-variant hover:border-primary/40 bg-surface-container-lowest transition-all group">
<div className="w-[60px] h-[90px] rounded-lg overflow-hidden shrink-0 book-spine-shadow border border-outline-variant/60">
<img className="w-full h-full object-cover" alt="Book cover of Sapiens Luoc Su Loai Nguoi by Yuval Noah Harari Vietnamese edition with iconic fingerprint design on parchment texture background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHClMu5f19knTRj5vpsYvuD6Iz1V0BsphdkgRW5AHj6pe4QwJ8SdH52JVt52bKVSrVYOkAQ_pGZXnOBZw1y3Dxgnao4eLs0WFZX1WaDJMWsLOrIzPKUjnEVcLOkQ02WuLvD8MoFyLck56bps2xKQzzdooV6tBgg8-_5St_KMcmQEP_ZwKy3LFnG4vcfWWh8LZr3rYiE1Vz2HP2F4bC8kxQ2VvwumVL_rOrloJu08haBubzfInHheAumA" />
</div>
<div className="flex-1 min-w-0">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E8E5DF] text-[#4A453E] inline-block mb-1">Sách giấy</span>
<h4 className="font-title-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors truncate">Sapiens – Lược Sử Loài Người</h4>
<p className="text-body-sm text-on-surface/60">Yuval Noah Harari</p>
<div className="flex items-center justify-between mt-2">
<span className="font-title-md text-body-md font-bold text-on-surface">178.000đ</span>
<button className="px-3 py-1 bg-surface-container-low hover:bg-primary hover:text-white rounded-lg text-body-sm font-medium text-primary transition-colors border border-primary/20">
                        Thêm vào giỏ
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 sticky top-24 space-y-5">

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 shadow-sm">
<h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface border-b border-outline-variant pb-4 mb-4 flex items-center justify-between">
<span>Tóm Tắt Đơn Hàng</span>
<span className="material-symbols-outlined text-primary text-[22px]">receipt_long</span>
</h2>

<div className="space-y-3.5 text-body-md">
<div className="flex items-center justify-between text-on-surface/80">
<span>Tạm tính (4 sản phẩm)</span>
<span className="font-title-md text-body-md font-semibold text-on-surface">506.000đ</span>
</div>
<div className="flex items-center justify-between text-on-surface/80">
<span className="flex items-center gap-1">
                    Giảm giá trực tiếp
                    <span className="material-symbols-outlined text-[15px] text-on-surface/40">info</span>
</span>
<span className="font-title-md text-body-md font-semibold text-primary">-50.000đ</span>
</div>
<div className="flex items-center justify-between text-on-surface/80">
<span>Voucher Shop (Alpha Books)</span>
<span className="font-title-md text-body-md font-semibold text-primary">-20.000đ</span>
</div>
<div className="flex items-center justify-between text-on-surface/80">
<span className="flex items-center gap-1.5 text-tertiary font-medium">
<span className="material-symbols-outlined text-[16px]">confirmation_number</span>
                    Voucher HUKI (Mã HUKI30)
                  </span>
<span className="font-title-md text-body-md font-semibold text-tertiary">-30.000đ</span>
</div>
<div className="flex items-center justify-between text-on-surface/80">
<div>
<span>Phí vận chuyển</span>
<div className="text-[11px] text-on-surface/50 font-normal">(Chỉ tính 3 cuốn sách giấy)</div>
</div>
<div className="text-right">
<span className="font-title-md text-body-md font-semibold text-on-surface">25.000đ</span>
<span className="text-[11px] text-on-surface/40 line-through block">40.000đ</span>
</div>
</div>
<div className="border-t border-outline-variant/80 pt-4">
<div className="flex items-baseline justify-between mb-1">
<span className="font-title-lg text-title-lg font-bold text-on-surface">Tổng thanh toán:</span>
<div className="text-right">
<span className="font-headline-md text-[28px] font-bold text-primary tracking-tight">431.000đ</span>
<div className="text-[11px] text-on-surface/50 font-medium">Đã bao gồm VAT</div>
</div>
</div>
</div>
</div>

<div className="mt-4 p-3 rounded-xl bg-huki-soft-mint border border-primary/20 text-body-sm text-primary flex items-start gap-2.5">
<span className="material-symbols-outlined text-[19px] shrink-0 mt-0.5">menu_book</span>
<span className="text-body-sm leading-snug">
<strong>1 cuốn Ebook</strong> sẽ được thêm vào Tủ Sách HUKI của bạn tức thì ngay sau khi hoàn tất giao dịch.
                </span>
</div>

<div className="mt-5 pt-4 border-t border-outline-variant">
<label className="block text-body-sm font-semibold text-on-surface mb-2 flex items-center justify-between">
<span>HUKI Voucher &amp; Khuyến mãi</span>
<span className="text-primary hover:underline cursor-pointer text-[12px] font-medium">Xem tất cả (4)</span>
</label>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-2.5 text-primary text-[18px]">loyalty</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-low border border-primary/30 text-body-sm font-semibold text-primary uppercase focus:outline-none" readOnly type="text" value="HUKI30" />
</div>
<button className="h-10 px-3.5 bg-surface-container hover:bg-surface-container-high text-on-surface/70 rounded-lg text-body-sm font-medium transition-colors">
                    Gỡ bỏ
                  </button>
</div>
<div className="text-[11px] text-tertiary mt-1.5 flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
                  Mã HUKI30: Giảm ngay 30.000đ cho đơn từ 400.000đ
                </div>
</div>

<div className="mt-6">
<button className="w-full h-[50px] bg-primary hover:bg-primary-dark text-white rounded-xl font-title-lg text-title-md font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2">
<span>Tiến Hành Thanh Toán</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<div className="flex items-center justify-center gap-1.5 text-body-sm text-on-surface/60 mt-3">
<span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
<span>Thanh toán an toàn &amp; mã hóa bảo mật 256-bit</span>
</div>
</div>

<div className="mt-5 pt-4 border-t border-outline-variant">
<span className="block text-[11px] text-on-surface/50 font-semibold uppercase tracking-wider mb-2.5 text-center">
                  Phương thức thanh toán chấp nhận
                </span>
<div className="flex items-center justify-center gap-2">

<div className="h-7 px-2.5 bg-surface-container-low rounded border border-outline-variant/80 flex items-center justify-center text-[11px] font-bold text-[#006B4F]">
                    PayOS
                  </div>

<div className="h-7 px-2 bg-surface-container-low rounded border border-outline-variant/80 flex items-center justify-center text-[11px] font-bold text-blue-700">
                    VNPAY-QR
                  </div>

<div className="h-7 px-2 bg-surface-container-low rounded border border-outline-variant/80 flex items-center justify-center text-[11px] font-bold text-indigo-900">
                    VISA / MASTER
                  </div>

<div className="h-7 px-2 bg-surface-container-low rounded border border-outline-variant/80 flex items-center justify-center text-[11px] font-bold text-amber-800">
                    COD
                  </div>
</div>
<p className="text-[11px] text-on-surface/50 text-center mt-2">
                  *COD chỉ áp dụng cho phần sách in, không áp dụng cho Ebook bản quyền.
                </p>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/60 text-body-sm space-y-2.5">
<div className="flex items-center gap-2.5 text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-[19px]">verified</span>
<span>Chính sách đổi trả sách giấy 7 ngày miễn phí</span>
</div>
<div className="flex items-center gap-2.5 text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-[19px]">sync_saved_locally</span>
<span>Ebook đọc mượt trên Web, iOS, Android &amp; Máy đọc sách</span>
</div>
</div>
</div>
</div>

<section className="mt-16 pt-10 border-t border-outline-variant">
<div className="flex items-end justify-between mb-8">
<div>
<span className="text-[12px] font-bold uppercase tracking-widest text-primary block mb-1">Gợi Ý Riêng Cho Bạn</span>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
                Có Thể Bạn Cũng Thích
              </h2>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface/70 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface/70 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
<div>
<div className="w-full aspect-[2/3] rounded-xl overflow-hidden book-spine-shadow border border-outline-variant/60 mb-3.5 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Editorial book cover for Vietnamese edition of Thinking Fast and Slow Tu Duy Nhanh Va Cham by Daniel Kahneman in modern classic styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCox7PnhNLQdKBNYvfmR3uoo-GPRCLHVXpOP_GPIwJMnG7xNK-RoaFiWz5Wk39Sw_gYjl7JtKrHlHaexxiCuw1QyISc72KzJLipOIMuSgoe8HLCvYON4mnJS8u_m3JG0oLvYqnze3262gtJVtaIzljBSGnpOfwPoLyQYT74XHmUjQ-SrbgTifJ7MzTgTBRoIxZQelQOEmKkRfvWB3rM0TWMEYD3_gZMzRpjvkXWPid_Emac-U2QsMvcFw" />
<span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-huki-amber text-white shadow-xs">
                    Bestseller
                  </span>
</div>
<div className="flex items-center gap-1 text-huki-amber text-[13px] mb-1 font-semibold">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span>4.9</span>
<span className="text-on-surface/40 font-normal">(1.420)</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                  Tư Duy Nhanh Và Chậm
                </h4>
<p className="text-body-sm text-on-surface/60 mt-1">Daniel Kahneman</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
<div>
<span className="font-title-md text-body-md font-bold text-primary block">159.000đ</span>
<span className="text-[11px] text-on-surface/40 line-through">219.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors" title="Thêm vào giỏ hàng">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
<div>
<div className="w-full aspect-[2/3] rounded-xl overflow-hidden book-spine-shadow border border-outline-variant/60 mb-3.5 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Editorial book cover for 7 Habits of Highly Effective People Vietnamese version 7 Thoi Quen Hieu Qua by Stephen Covey with classic layout." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjcI4GJCSp5FkdESgJS2im9xwD8rn2Dj6ASP1nOj0JWRAEY3dYA3qm9f2vSRy9gSsQXhqzdXIxhUf5ABUAC4xIw0I-RWMELofnRZiVV8MmZu3WXj7u_ZJXqLcaEq4bGgTBba9O6DJAQiCykK6f7ZhkixJ62ABCIWqCxpJTtdYaWLBbaXioWiz7OnU8stHpJD3UWJqSIIDuDHeLZy6ijWxpqHDRAp7m8b_jy3G2KOitSwZ0c38POER97A" />
<span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-tertiary-fixed text-on-tertiary-fixed shadow-xs">
                    Ebook + Giấy
                  </span>
</div>
<div className="flex items-center gap-1 text-huki-amber text-[13px] mb-1 font-semibold">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span>4.8</span>
<span className="text-on-surface/40 font-normal">(890)</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                  7 Thói Quen Hiệu Quả
                </h4>
<p className="text-body-sm text-on-surface/60 mt-1">Stephen R. Covey</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
<div>
<span className="font-title-md text-body-md font-bold text-primary block">135.000đ</span>
<span className="text-[11px] text-on-surface/40 line-through">180.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
<div>
<div className="w-full aspect-[2/3] rounded-xl overflow-hidden book-spine-shadow border border-outline-variant/60 mb-3.5 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Editorial book cover for Dac Nhan Tam How to Win Friends and Influence People Vietnamese First News official publication." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEj37yqkz947Sy0BFJBlOBsjstWSAhVzSxRJvbBYXGiMiEcfX2JuEGaKHsOSVjHf6w1r2eAiVYiNYg3o01Oe_vdXxXlnYigPOG451M87GNoJEsQRgeJNjVagWwr5yv0iLpgfaAycqpSLFjE4VPjruqF5SYjDQxNuJQtO8CfamZvNSQ9_EfUxdu-RMjGVqpSI6baB3XhFpuXrg4XwpTQWCDMxoaJBRiCi0kgQ8g4epFsDugd5qSkp5sIw" />
</div>
<div className="flex items-center gap-1 text-huki-amber text-[13px] mb-1 font-semibold">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span>5.0</span>
<span className="text-on-surface/40 font-normal">(3.120)</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                  Đắc Nhân Tâm (Khổ Lớn)
                </h4>
<p className="text-body-sm text-on-surface/60 mt-1">Dale Carnegie</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
<div>
<span className="font-title-md text-body-md font-bold text-primary block">88.000đ</span>
<span className="text-[11px] text-on-surface/40 line-through">110.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
<div>
<div className="w-full aspect-[2/3] rounded-xl overflow-hidden book-spine-shadow border border-outline-variant/60 mb-3.5 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Editorial cover of The Lean Startup Khoi Nghiep Tinh Gon by Eric Ries Vietnamese translated book edition with blue and white minimalist palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5wm2fEGfXMhzBA3oSXn6BYD4vcR5hMquRC_CGUJLXd3PypNYS5KDRea5IjKUs1geLrImc9tS94NcdKGdVHTkr21Etu-HNL2HgjHB3OgjivSwCwo_J0Nx7ujIx1viwpeDJhwtVBLkwZTdg-aaOKI_uFxnJEMwtBNJi649dB3FYuy0JjNAlLixrhT9wt2bpUWOJPZu18ugPQg7vR8vqmMeUpTVyGAkfx1GzzI29FPc0PODAteOHnLyWcw" />
</div>
<div className="flex items-center gap-1 text-huki-amber text-[13px] mb-1 font-semibold">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span>4.7</span>
<span className="text-on-surface/40 font-normal">(640)</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                  Khởi Nghiệp Tinh Gọn
                </h4>
<p className="text-body-sm text-on-surface/60 mt-1">Eric Ries</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
<div>
<span className="font-title-md text-body-md font-bold text-primary block">115.000đ</span>
<span className="text-[11px] text-on-surface/40 line-through">155.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-4 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group">
<div>
<div className="w-full aspect-[2/3] rounded-xl overflow-hidden book-spine-shadow border border-outline-variant/60 mb-3.5 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Spiritual book cover for Khong Diet Khong Sinh Dung So Hai No Death No Fear by Zen Master Thich Nhat Hanh with gentle calligraphic illustration and tranquil natural tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS-awkZ5Zd6ousGZ0k8lcT0VlyaeBQzIuWj1W2Cpy7QOMuGoWCAdEpuvpkJ8ePnrjly6cnciomnc_uPLZEJeIEitayvyZrOdTtRskWaBUBKsqWCWMR7Jlwwpmxf2E4z_u8qCI0NxNU7JUrxWeWj63cyuh3iLpSLyjIRN78XHfmDG0ReYw6nCmY8sdpeQjLgR0KK4NjSI_5GEtZc-TqYDnGl1FfTzmoSCY9J7U24kR_aKcpibh-t-TKYw" />
<span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">
                    Tuyển Chọn
                  </span>
</div>
<div className="flex items-center gap-1 text-huki-amber text-[13px] mb-1 font-semibold">
<span className="material-symbols-outlined text-[15px] fill-icon">star</span>
<span>5.0</span>
<span className="text-on-surface/40 font-normal">(2.180)</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                  Không Diệt Không Sinh Đừng Sợ Hãi
                </h4>
<p className="text-body-sm text-on-surface/60 mt-1">Thiền sư Thích Nhất Hạnh</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
<div>
<span className="font-title-md text-body-md font-bold text-primary block">95.000đ</span>
<span className="text-[11px] text-on-surface/40 line-through">125.000đ</span>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors" title="Thêm vào giỏ">
<span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

<footer className="w-full bg-surface-container-low border-t border-outline-variant mt-auto">
<div className="max-w-[1520px] mx-auto px-8 py-space-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-headline-md text-headline-md font-bold">
              H
            </div>
<span className="font-headline-md text-headline-md font-semibold text-primary tracking-tight">HUKI EBOOK</span>
</div>
<p className="text-body-md text-on-surface/75 max-w-md leading-relaxed">
            Hệ sinh thái đọc sách toàn diện kết hợp Sàn Thương Mại Sách chính hãng và Nền tảng Đọc Ebook bản quyền cao cấp. Nâng tầm tri thức và trải nghiệm văn hóa đọc của người Việt.
          </p>
<div className="flex items-center gap-3 pt-2 text-on-surface/70">
<a className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:text-primary transition-colors" href="#" title="Facebook">
<span className="material-symbols-outlined text-[18px]">public</span>
</Link>
<a className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:text-primary transition-colors" href="#" title="YouTube">
<span className="material-symbols-outlined text-[18px]">smart_display</span>
</Link>
<a className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:text-primary transition-colors" href="#" title="Podcast">
<span className="material-symbols-outlined text-[18px]">podcasts</span>
</Link>
</div>
</div>

<div className="space-y-3">
<h4 className="font-title-md text-body-md font-bold text-on-surface">Về Huki Ebook</h4>
<ul className="space-y-2 text-body-sm text-on-surface/70">
<li><a className="hover:text-primary transition-colors" href="#">Giới thiệu nền tảng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Tác giả &amp; Nhà xuất bản</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Bản quyền số (DRM)</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Tuyển dụng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Tin tức &amp; Sự kiện Salon</Link></li>
</ul>
</div>

<div className="space-y-3">
<h4 className="font-title-md text-body-md font-bold text-on-surface">Chính Sách &amp; Hỗ Trợ</h4>
<ul className="space-y-2 text-body-sm text-on-surface/70">
<li><a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Chính sách đổi trả sách in</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Hướng dẫn mua hàng</Link></li>
<li><a className="hover:text-primary transition-colors" href="#">Liên hệ hỗ trợ 24/7</Link></li>
</ul>
</div>

<div className="space-y-3">
<h4 className="font-title-md text-body-md font-bold text-on-surface">Trải Nghiệm HukiReader</h4>
<p className="text-body-sm text-on-surface/70">Đồng bộ tự động ghi chú, trích dẫn &amp; tiến trình đọc trên mọi thiết bị.</p>
<div className="space-y-2 pt-1">
<div className="flex items-center gap-2 p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/80 cursor-pointer hover:border-primary transition-all">
<span className="material-symbols-outlined text-primary text-[24px]">phone_iphone</span>
<div className="text-left">
<span className="text-[10px] block text-on-surface/50 font-medium">Tải trên</span>
<span className="text-body-sm font-bold text-on-surface leading-none">Apple App Store</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/80 cursor-pointer hover:border-primary transition-all">
<span className="material-symbols-outlined text-primary text-[24px]">android</span>
<div className="text-left">
<span className="text-[10px] block text-on-surface/50 font-medium">Tải trên</span>
<span className="text-body-sm font-bold text-on-surface leading-none">Google Play Store</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-outline-variant/70 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-label-sm text-on-surface/60">
<p>© 2025 HUKI EBOOK. Bản quyền thuộc về Công ty TNHH Sách Điện Tử Huki. Giấy phép cung cấp dịch vụ TMĐT &amp; Xuất bản điện tử số 88/GP-BTTTT.</p>
<div className="flex items-center gap-6">
<a className="hover:text-primary transition-colors" href="#">Quy chế hoạt động sàn</Link>
<a className="hover:text-primary transition-colors" href="#">Giải quyết khiếu nại</Link>
<a className="hover:text-primary transition-colors" href="#">Sơ đồ trang web</Link>
</div>
</div>
</div>
</footer>

    </div>
  );
}
