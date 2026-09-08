import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SellerCreateHybrid() {
  const [shippingEnabled, setShippingEnabled] = useState(true);
  const [samplePreviewEnabled, setSamplePreviewEnabled] = useState(true);

  return (
    <div className="w-full bg-background text-on-surface font-body-md text-body-md min-h-screen antialiased py-6 pb-28">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

<header className="bg-surface-container-lowest border-b border-[#e8e5df] px-8 py-4 sticky top-0 z-20 shadow-[0_2px_8px_-2px_rgba(20,29,28,0.03)]">
<div className="max-w-[1160px] mx-auto flex items-center justify-between">
<div>

<Link className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant hover:text-tertiary mb-1 transition-colors" to="/seller/products">
<span className="material-symbols-outlined !text-[16px]">arrow_back</span>
<span>Danh Sách Sản Phẩm</span>
</Link>
<div className="flex items-center gap-3">
<h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Thêm Sản Phẩm Mới</h1>
<span className="px-2.5 py-0.5 rounded-md bg-[#f2efe9] text-[#716e67] border border-[#dedad2] font-label-sm text-label-sm font-semibold tracking-wider">
                BẢN NHÁP
              </span>
</div>
<p className="font-body-sm text-body-sm text-[#737a78] mt-0.5">Tạo sản phẩm mới cho gian hàng <span className="font-medium text-on-surface">Alpha Books Official</span>.</p>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 font-label-md text-label-md text-[#788582] bg-background px-3 py-1.5 rounded-lg border border-[#e8e5df]">
<span className="material-symbols-outlined !text-[16px] text-tertiary">cloud_done</span>
<span>Đã tự động lưu lúc 10:42</span>
</div>
<button className="h-10 px-4 bg-surface-container-lowest border border-[#e8e5df] text-on-surface hover:bg-background hover:border-on-surface rounded-lg font-title-md text-body-sm font-medium transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined !text-[18px]">visibility</span>
<span>Xem Trước</span>
</button>
<button className="h-10 w-10 flex items-center justify-center bg-surface-container-lowest border border-[#e8e5df] hover:border-on-surface rounded-lg text-on-surface transition-all" type="button">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
</div>
</header>

<div className="max-w-[1160px] mx-auto px-6 py-7 space-y-6">

<section className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]">
<div className="mb-4">
<h2 className="font-title-lg text-title-lg text-on-surface font-semibold">Định Dạng Sản Phẩm</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Chọn các định dạng mà khách hàng có thể mua cho đầu sách này.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="relative rounded-xl border border-[#e8e5df] p-4 bg-surface-container-lowest hover:border-[#c5c1b8] cursor-pointer transition-all flex flex-col justify-between">
<input className="sr-only" name="format_type" type="radio" />
<div>
<div className="w-10 h-10 rounded-lg bg-[#f4f2ee] text-on-surface flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-[24px]">auto_stories</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-1">1. SÁCH GIẤY</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Có tồn kho và được giao đến khách hàng qua bưu tá.</p>
</div>
<div className="mt-4 pt-3 border-t border-[#f2eee8] flex items-center text-xs text-[#8c887f] font-medium">
                Quản lý kho &amp; cân nặng kiện
              </div>
</label>

<label className="relative rounded-xl border border-[#e8e5df] p-4 bg-surface-container-lowest hover:border-[#c5c1b8] cursor-pointer transition-all flex flex-col justify-between">
<input className="sr-only" name="format_type" type="radio" />
<div>
<div className="w-10 h-10 rounded-lg bg-[#eaf5f2] text-tertiary flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-[24px]">tablet_mac</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold mb-1">2. EBOOK DRM</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Đọc trực tuyến trên HUKI Reader sau khi được cấp quyền DRM.</p>
</div>
<div className="mt-4 pt-3 border-t border-[#f2eee8] flex items-center text-xs text-[#8c887f] font-medium">
                Phân phối số tức thì
              </div>
</label>

<label className="relative rounded-xl border-2 border-tertiary p-4 bg-[#f2faf7] cursor-pointer transition-all flex flex-col justify-between shadow-[0_8px_20px_-4px_rgba(0,107,79,0.12)] -translate-y-0.5">
<input defaultChecked className="sr-only" name="format_type" type="radio" />

<span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined !text-[16px] font-bold">check</span>
</span>
<div>
<div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center mb-3 shadow-sm">
<span className="material-symbols-outlined text-[24px]">library_books</span>
</div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-title-md text-title-md text-tertiary font-bold">3. SÁCH GIẤY + EBOOK</h3>
<span className="px-2 py-0.5 bg-tertiary/15 text-tertiary rounded font-label-sm text-[10px] font-bold">KHUYÊN DÙNG</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">Cung cấp đồng thời cả hai định dạng trên cùng một trang sản phẩm với mức giá và quản lý độc lập.</p>
</div>
<div className="mt-4 pt-3 border-t border-tertiary/20 flex items-center justify-between text-xs font-semibold text-tertiary">
<span>Tối ưu doanh thu kép</span>
<span className="material-symbols-outlined !text-[16px]">verified</span>
</div>
</label>
</div>

<div className="mt-4 p-3 rounded-lg bg-[#fdfbf6] border border-[#ede7d8] flex items-start gap-2.5 text-body-sm text-[#665e4e]">
<span className="material-symbols-outlined text-secondary !text-[18px] shrink-0 mt-0.5">info</span>
<span>Khách hàng có thể chọn mua <strong>Sách Giấy</strong> hoặc <strong>Ebook</strong> từ cùng một trang sản phẩm. Giá, tồn kho và trạng thái nội dung được quản lý riêng biệt cho từng định dạng.</span>
</div>
</section>

<div className="grid grid-cols-12 gap-6 items-start">

<aside className="col-span-12 lg:col-span-2 sticky top-[88px] space-y-3">
<div className="bg-surface-container-lowest p-3.5 rounded-xl border border-[#e8e5df] shadow-sm">
<div className="font-label-sm text-[10px] uppercase font-bold text-[#8c887f] px-2 mb-2 tracking-wider">THÔNG TIN SẢN PHẨM</div>
<ul className="space-y-1 text-body-sm">
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#eef7f4] text-tertiary font-semibold" to="/seller/product/edit-hybrid">
<span className="truncate">01 Cơ Bản</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="/seller/edge-cases">
<span className="truncate">02 Tác Giả</span>
<span className="material-symbols-outlined text-tertiary !text-[15px]">check_circle</span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="#sec-media">
<span className="truncate">03 Media</span>
<span className="material-symbols-outlined text-tertiary !text-[15px]">check_circle</span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="#sec-pricing">
<span className="truncate">04 Giá Kép</span>
<span className="material-symbols-outlined text-tertiary !text-[15px]">check_circle</span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="#sec-inventory">
<span className="truncate">05 Kho Giấy</span>
<span className="material-symbols-outlined text-tertiary !text-[15px]">check_circle</span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" to="#sec-shipping">
<span className="truncate">06 Vận Chuyển</span>
<span className="material-symbols-outlined text-tertiary !text-[15px]">check_circle</span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[#b83824] bg-[#fff5f2] font-medium" to="#sec-drm">
<span className="truncate">07 Ebook DRM</span>
<span className="material-symbols-outlined text-primary !text-[15px]">warning</span>
</Link>
</li>
<li>
<Link className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" to="/seller/product/edit-hybrid">
<span className="truncate">08 Xuất Bản</span>
<span className="w-1.5 h-1.5 rounded-full border border-[#8a8880]"></span>
</Link>
</li>
</ul>
</div>

<div className="p-3 bg-[#f6fbf9] border border-[#d2ebe3] rounded-xl text-xs text-tertiary leading-relaxed">
<div className="flex items-center gap-1 font-semibold mb-1">
<span className="material-symbols-outlined !text-[14px]">shield</span>
<span>DRM Hybrid Rule</span>
</div>
              Ebook bản quyền số không áp dụng tồn kho vật lý &amp; vận chuyển bưu phẩm.
            </div>
</aside>

<div className="col-span-12 lg:col-span-7 space-y-6">

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]" id="sec-basic">
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-5">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">1. Thông Tin Cơ Bản</h3>
<span className="px-2 py-0.5 rounded text-xs bg-[#f4f3ef] text-[#615f5a] font-medium">Dùng chung cả 2 định dạng</span>
</div>
<span className="text-xs text-[#9c988f]">* Bắt buộc điền</span>
</div>
<div className="space-y-4">

<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">
                    Tên sản phẩm <span className="text-primary">*</span>
</label>
<input className="w-full h-11 px-3.5 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all" type="text" value="Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ (Bản Bìa Cứng &amp; Ebook DRM)" />
<span className="text-xs text-[#8c887f] mt-1 block">Tên sách sẽ hiển thị nhất quán trên kệ sách giấy và thư viện số.</span>
</div>

<div>
<div className="flex justify-between items-center mb-1">
<label className="font-title-md text-body-sm font-semibold text-on-surface">Giới thiệu ngắn (Teaser)</label>
<span className="text-xs text-[#8c887f]">112/300 ký tự</span>
</div>
<textarea className="w-full px-3.5 py-2.5 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all" rows="2">Cuốn sách thực tiễn về cách xây dựng thói quen nhỏ để tạo ra những thay đổi lớn vượt bậc trong cuộc sống và sự nghiệp.</textarea>
</div>

<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">
                    Mô tả chi tiết <span className="text-primary">*</span>
</label>
<div className="border border-[#e8e5df] rounded-lg overflow-hidden focus-within:border-tertiary">

<div className="bg-[#faf8f5] border-b border-[#e8e5df] px-3 py-1.5 flex flex-wrap items-center gap-1">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] font-bold text-xs text-on-surface" type="button">B</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] italic text-xs text-on-surface" type="button">I</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] underline text-xs text-on-surface" type="button">U</button>
<div className="h-4 w-[1px] bg-[#dfdbd3] mx-1"></div>
<button className="px-2 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] text-xs font-semibold text-on-surface" type="button">H1</button>
<button className="px-2 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] text-xs font-semibold text-on-surface" type="button">H2</button>
<div className="h-4 w-[1px] bg-[#dfdbd3] mx-1"></div>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] text-on-surface" type="button">
<span className="material-symbols-outlined !text-[16px]">format_list_bulleted</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] text-on-surface" type="button">
<span className="material-symbols-outlined !text-[16px]">format_quote</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#eae6df] text-on-surface" type="button">
<span className="material-symbols-outlined !text-[16px]">link</span>
</button>
</div>

<div className="p-3.5 text-body-md font-body-md text-on-surface leading-relaxed min-h-[140px] bg-surface-container-lowest">
<p className="font-display-lg italic text-lg text-tertiary mb-2">"Thay đổi 1% mỗi ngày – Bạn sẽ ngạc nhiên với kết quả sau 1 năm."</p>
<p className="mb-2"><strong>Atomic Habits (Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ)</strong> của James Clear là một trong những cuốn sách phi hư cấu bán chạy nhất toàn cầu, giải mã khoa học thần kinh đằng sau những thói quen tự động của con người.</p>
<p className="text-[#55524c]">Bản Hybrid Bundle cho phép bạn sở hữu trọn vẹn cuốn sách bìa cứng cao cấp để thưởng thức trên kệ sách gia đình, đồng thời cấp ngay quyền đọc bản số DRM mã hóa độc quyền trên ứng dụng HUKI Ebook để tra cứu mọi lúc mọi nơi.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Ngôn ngữ</label>
<select className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary">
<option>Tiếng Việt</option>
<option>Tiếng Anh (English)</option>
<option>Song ngữ</option>
</select>
</div>
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Ngày xuất bản</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary" type="text" value="15/08/2020" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Mã ISBN</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary" type="text" value="978-604-58-9123-4" />
</div>
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Phiên bản</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary" type="text" value="Tái bản lần thứ 3 (Hiệu đính)" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Số trang <span className="text-primary">*</span></label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary" type="number" value="320" />
</div>
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Mã SKU gốc</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md font-mono text-sm focus:border-tertiary" type="text" value="ALPHA-AH-HYBRID" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]" id="sec-taxonomy">
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-5">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">2. Phân Loại Sách &amp; Tác Giả</h3>
<span className="material-symbols-outlined text-tertiary">verified</span>
</div>
<div className="space-y-4">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Danh mục chính <span className="text-primary">*</span></label>
<select className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary">
<option>Phát Triển Bản Thân</option>
<option>Kinh Doanh &amp; Khởi Nghiệp</option>
<option>Tâm Lý Học Ứng Dụng</option>
</select>
</div>
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Danh mục phụ</label>
<select className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-body-md focus:border-tertiary">
<option>Thói Quen &amp; Kỷ Luật</option>
<option>Quản Lý Thời Gian</option>
<option>Tư Duy &amp; Nhận Thức</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<div className="flex justify-between items-center mb-1">
<label className="font-title-md text-body-sm font-semibold text-on-surface">Tác giả <span className="text-primary">*</span></label>
<Link className="text-xs text-tertiary hover:underline font-medium" to="/">+ Đề xuất tác giả mới</Link>
</div>
<div className="flex items-center gap-2 p-1.5 border border-[#e8e5df] rounded-lg bg-[#faf8f5]">
<div className="w-7 h-7 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">JC</div>
<span className="font-title-md text-body-sm text-on-surface font-medium flex-1">James Clear</span>
<span className="material-symbols-outlined !text-[16px] text-tertiary">check_circle</span>
</div>
</div>
<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1">Nhà xuất bản đối tác</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-[#faf8f5] text-on-surface font-body-md focus:border-tertiary" type="text" value="NXB Thế Giới - Alpha Books Liên Kết" />
</div>
</div>

<div>
<label className="block font-title-md text-body-sm font-semibold text-on-surface mb-1.5">Từ khóa tìm kiếm (Tags)</label>
<div className="flex flex-wrap gap-2 p-2.5 rounded-lg border border-[#e8e5df] bg-surface-container-lowest">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f2efe9] text-on-surface text-xs font-medium">
                      Atomic Habits
                      <button className="hover:text-primary" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f2efe9] text-on-surface text-xs font-medium">
                      Thói quen
                      <button className="hover:text-primary" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f2efe9] text-on-surface text-xs font-medium">
                      Phát triển bản thân
                      <button className="hover:text-primary" type="button">×</button>
</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f2efe9] text-on-surface text-xs font-medium">
                      Năng suất
                      <button className="hover:text-primary" type="button">×</button>
</span>
<input className="border-0 p-0 text-xs focus:ring-0 text-[#8c887f] w-28 bg-transparent" placeholder="+ Nhập thêm tag..." type="text" />
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]" id="sec-media">
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-5">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">3. Ảnh Bìa &amp; Thư Viện Media</h3>
<p className="text-xs text-[#737a78]">Ảnh bìa chính sẽ áp dụng cho cả bản sách giấy và thumbnail thư viện Ebook.</p>
</div>
<span className="px-2 py-0.5 rounded text-xs bg-[#eef7f4] text-tertiary font-bold">Tỉ lệ chuẩn 3:4</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">

<div className="sm:col-span-1">
<div className="relative rounded-xl overflow-hidden border border-[#d6d2c8] shadow-md spine-crease aspect-[3/4] bg-[#222]">
<img className="w-full h-full object-cover" alt="Bìa sách chính Atomic Habits của tác giả James Clear, phong cách tối giản sang trọng, tông màu kem trang nhã với các hạt điểm xuyết vi mô, chữ typographic rõ ràng và sắc nét, tỉ lệ bìa 3:4 chân thực dưới ánh sáng studio nhẹ." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6v23W37-QjgxAXROK5Wc21QViDb-uUS0qem7HPQRGBQm8mMAsvqaiyHN9vygb4YDGygvmdIQFYJD5p7Aaa7MVh8MG9oW898Xxt6XzP5u5is7x3z3XsjcL6UGek4nLStITVtsjQbyCmo8GjxujEE7AbDcRdoD6THTymaBDcrhsPh-tsZImtPnYCVUaLO5VP136zhYkoOjyUMUBnuT6p5xm9okvHxCZMDVLZQ1NpnOpZuY6ixHRRyewoA" />
<div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-tertiary/90 text-on-tertiary text-[10px] font-bold tracking-wide backdrop-blur-sm">
                      BÌA CHÍNH
                    </div>
</div>
<div className="mt-2.5 flex items-center justify-between">
<button className="text-xs text-tertiary font-semibold hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined !text-[15px]">sync</span> Thay ảnh
                    </button>
<span className="text-[11px] text-tertiary font-medium">✓ Đã tối ưu WebP</span>
</div>
</div>

<div className="sm:col-span-2 space-y-3">
<div className="font-title-md text-body-sm font-semibold text-on-surface">Ảnh minh họa thực tế &amp; Trang mẫu Ebook</div>
<div className="grid grid-cols-4 gap-2.5">

<div className="aspect-square rounded-lg border border-[#e8e5df] overflow-hidden relative group bg-[#fbf9f6]">
<img className="w-full h-full object-cover" alt="Mặt sau cuốn sách Atomic Habits thể hiện lời giới thiệu của tác giả, mã vạch ISBN và các đoạn trích dẫn nổi bật từ báo New York Times, góc chụp phẳng chuyên nghiệp trong studio ánh sáng tự nhiên ấm áp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ObjFzX-qOeDSx11vlWD-3ZwGh01OAEiuJcAXcm3a08zXkVuei7P2YjZH7woDsurwMyPGpQvmxLuGDdn4tVMeNohnE8jeCKmpIf_dLoNw66f5jsDb1Sc85attvMaPRY6RMgj_7e_lBoI9ZlZBOasHLT04lPg3qjet_3swCfsmnz3cxcJJc4X2ORipgLtkkMaEYjDuYzHAROSzgnmOY35ebqhn90We9QPYGL41KU9pSsw_z1zR6i4aXw" />
<span className="absolute bottom-1 left-1 px-1 bg-black/60 text-white rounded text-[9px]">Mặt sau</span>
</div>

<div className="aspect-square rounded-lg border border-[#e8e5df] overflow-hidden relative group bg-[#fbf9f6]">
<img className="w-full h-full object-cover" alt="Chi tiết góc chụp cận cảnh gáy sách bìa cứng mạ chỉ vàng sang trọng, đường may gáy chắc chắn của ấn phẩm sách thật đặt trên bàn gỗ sồi phong cách phòng đọc sách cổ điển." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7eePQIEA_5rfnpK_54q3WoiNecNNZD5qh1L080VOjeSiykvuPh-mTykFhryP1a-a1R41QEFjhcyM_7E-Q_dsd14DA9EJz5f2NFCX07ud5R0XwBiydikV12YB5Wxq5VgFyFM6scfwmiOrsKzO_zUU2nY7nSHP4CYdEG54I-KIgdZACosVKfxkxN1AuaSurE5x4ZG_vgruH01iufhDw_tiC372Mh2sd8tdClxcsk3dMo94_d5KdQiIE4Q" />
<span className="absolute bottom-1 left-1 px-1 bg-black/60 text-white rounded text-[9px]">Gáy cứng</span>
</div>

<div className="aspect-square rounded-lg border border-[#e8e5df] overflow-hidden relative group bg-[#fbf9f6]">
<img className="w-full h-full object-cover" alt="Trang ruột sách Atomic Habits minh họa biểu đồ 4 định luật của sự thay đổi thói quen in trên giấy bãi bằng xốp kem cao cấp không gây mỏi mắt độc giả." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuvDhzM1w0zaO_fY7fEb6vL2cqNcOdMHvY1VjkKSWAmg-Eq-fxuDxRXYMAXDmrbtMykllAntDcR3N1W2BNGiHbZB_9Q1Li8KfKUE0nQz8tpRoVps-IMEesKym7B4P4x35gf6VLeePHdULRdwbS31MQn29nCw23cuJ7alckH4R4FZM_L6bTod0elwSFFZz4irYH1RaT-25Gvsp5iQfocKBOQmwTCpA-BQGKqWTcRH7uGSBcR1zBZXkEuw" />
<span className="absolute bottom-1 left-1 px-1 bg-black/60 text-white rounded text-[9px]">Ruột sách</span>
</div>

<label className="aspect-square rounded-lg border-2 border-dashed border-[#d2cec3] hover:border-tertiary flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#faf8f5] hover:bg-[#f3faf7]">
<span className="material-symbols-outlined text-[#8c887f]">add_photo_alternate</span>
<span className="text-[10px] text-[#737a78] mt-1 font-medium">+ Thêm ảnh</span>
</label>
</div>
<div className="text-xs text-[#8c887f] flex items-center gap-1.5 pt-1">
<span className="material-symbols-outlined !text-[15px]">drag_indicator</span>
<span>Kéo thả để sắp xếp thứ tự hiển thị tại trang chi tiết độc giả.</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border-2 border-[#d9e6e2] shadow-[0_6px_24px_-4px_rgba(0,107,79,0.06)] relative overflow-hidden" id="sec-pricing">

<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-tertiary to-primary"></div>
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-2 pt-1">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
                    4. Giá Bán Kép Riêng Biệt (Dual Pricing)
                    <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-xs font-bold">Hybrid Core</span>
</h3>
<p className="text-xs text-[#737a78] mt-0.5">Thiết lập giá độc lập cho từng định dạng. Thay đổi một định dạng không ảnh hưởng đến định dạng còn lại.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

<div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e5e1d7] flex flex-col justify-between relative">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-[#eeeae0] text-on-surface flex items-center justify-center">
<span className="material-symbols-outlined !text-[18px]">menu_book</span>
</div>
<span className="font-title-md text-body-sm font-bold text-on-surface uppercase">Sách Giấy Vật Lý</span>
</div>
<span className="text-[11px] font-semibold text-[#8c887f] bg-[#f0ebe0] px-2 py-0.5 rounded">Giao tận tay</span>
</div>

<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-[#737a78] mb-1">Giá bìa niêm yết</label>
<div className="relative">
<input className="w-full h-10 pl-3 pr-8 rounded-lg border border-[#dedad0] bg-surface-container-lowest text-on-surface font-semibold text-sm focus:border-tertiary" type="text" value="189.000" />
<span className="absolute right-3 top-2.5 text-xs text-[#8c887f]">₫</span>
</div>
</div>

<div>
<label className="block text-xs font-bold text-on-surface mb-1">
                          Giá bán HUKI <span className="text-primary">*</span>
</label>
<div className="relative">
<input className="w-full h-10 pl-3 pr-8 rounded-lg border border-primary text-primary font-bold text-base bg-surface-container-lowest focus:ring-1 focus:ring-primary" type="text" value="149.000" />
<span className="absolute right-3 top-2.5 text-xs font-bold text-primary">₫</span>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-[#ede8dd] text-xs">
<div className="flex items-center justify-between text-tertiary font-semibold">
<span>Tiết kiệm: 40.000 ₫</span>
<span className="bg-[#eaf4f0] px-1.5 py-0.5 rounded text-[10px]">Giảm 21%</span>
</div>
<div className="text-[11px] text-[#737a78] mt-1">Khách nhận bản in bìa cứng kèm mã định danh sách thật.</div>
</div>
</div>

<div className="p-4 rounded-xl bg-[#f0f8f5] border-2 border-tertiary/40 flex flex-col justify-between relative shadow-sm">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined !text-[18px]">tablet_mac</span>
</div>
<span className="font-title-md text-body-sm font-bold text-tertiary uppercase">Ebook DRM Số</span>
</div>
<span className="text-[11px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">Đọc tức thì</span>
</div>

<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-[#5c6e69] mb-1">Giá bìa tham chiếu</label>
<div className="relative">
<input className="w-full h-10 pl-3 pr-8 rounded-lg border border-[#c4ded6] bg-surface-container-lowest text-on-surface font-semibold text-sm focus:border-tertiary" type="text" value="149.000" />
<span className="absolute right-3 top-2.5 text-xs text-[#8c887f]">₫</span>
</div>
</div>

<div>
<label className="block text-xs font-bold text-tertiary mb-1">
                          Giá bán Ebook HUKI <span className="text-primary">*</span>
</label>
<div className="relative">
<input className="w-full h-10 pl-3 pr-8 rounded-lg border-2 border-tertiary text-tertiary font-bold text-base bg-surface-container-lowest focus:ring-1 focus:ring-tertiary" type="text" value="79.000" />
<span className="absolute right-3 top-2.5 text-xs font-bold text-tertiary">₫</span>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-[#d8ebe4] text-xs">
<div className="flex items-center justify-between text-tertiary font-semibold">
<span>Tiết kiệm: 70.000 ₫</span>
<span className="bg-tertiary text-on-tertiary px-1.5 py-0.5 rounded text-[10px] font-bold">Giảm 47%</span>
</div>
<div className="text-[11px] text-[#4f6760] mt-1">Cấp quyền đọc DRM tức thì sau khi cổng thanh toán xác thực.</div>
</div>
</div>
</div>

<div className="mt-4 p-3 rounded-xl bg-surface-container-low border border-[#d6ebe3] flex items-center gap-2.5 text-xs text-tertiary font-medium">
<span className="material-symbols-outlined !text-[18px]">lightbulb</span>
<span>Giá Sách Giấy và Ebook được thanh toán và phân chia đối soát doanh thu theo tỷ lệ sản phẩm riêng biệt vào ví gian hàng.</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]" id="sec-inventory">
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-5">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">5. Quản Lý Kho Sách Giấy</h3>
<span className="px-2 py-0.5 rounded text-xs bg-[#f4f2ee] text-on-surface font-bold">SÁCH GIẤY ONLY</span>
</div>
<span className="text-xs text-[#8c887f]">Ebook không dùng tồn kho</span>
</div>
<div className="space-y-4">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div>
<label className="block text-xs font-semibold text-on-surface mb-1">SKU Sách Giấy <span className="text-primary">*</span></label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest font-mono text-xs focus:border-tertiary" type="text" value="ATOMIC-HABITS-PHY" />
</div>
<div>
<label className="block text-xs font-semibold text-on-surface mb-1">Số lượng tồn kho thực <span className="text-primary">*</span></label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-on-surface font-semibold focus:border-tertiary" type="number" value="120" />
</div>
<div>
<label className="block text-xs font-semibold text-on-surface mb-1">Báo tồn kho thấp khi còn</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-[#737a78] focus:border-tertiary" type="number" value="10" />
</div>
</div>

<div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#faf9f6] border border-[#e8e5df] text-center">
<div>
<div className="text-[11px] text-[#8c887f]">Tổng tồn kho</div>
<div className="font-title-lg text-title-lg font-bold text-on-surface">120</div>
</div>
<div className="border-x border-[#dedad0]">
<div className="text-[11px] text-[#8c887f]">Đang trong giỏ hàng</div>
<div className="font-title-lg text-title-lg font-bold text-secondary">8</div>
</div>
<div>
<div className="text-[11px] text-[#8c887f]">Khả dụng mở bán</div>
<div className="font-title-lg text-title-lg font-bold text-tertiary">112</div>
</div>
</div>

<div className="pt-2">
<div className="font-title-md text-body-sm font-semibold text-on-surface mb-2">Thông Tin Kiện Hàng Đóng Gói (Tính cước vận chuyển)</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div>
<span className="text-[11px] text-[#8c887f] block mb-1">Khối lượng</span>
<div className="relative">
<input className="w-full h-9 px-2 text-xs rounded border border-[#e8e5df]" type="text" value="350" />
<span className="absolute right-2 top-2 text-[11px] text-[#8c887f]">gram</span>
</div>
</div>
<div>
<span className="text-[11px] text-[#8c887f] block mb-1">Chiều Dài</span>
<div className="relative">
<input className="w-full h-9 px-2 text-xs rounded border border-[#e8e5df]" type="text" value="20" />
<span className="absolute right-2 top-2 text-[11px] text-[#8c887f]">cm</span>
</div>
</div>
<div>
<span className="text-[11px] text-[#8c887f] block mb-1">Chiều Rộng</span>
<div className="relative">
<input className="w-full h-9 px-2 text-xs rounded border border-[#e8e5df]" type="text" value="14" />
<span className="absolute right-2 top-2 text-[11px] text-[#8c887f]">cm</span>
</div>
</div>
<div>
<span className="text-[11px] text-[#8c887f] block mb-1">Chiều Cao</span>
<div className="relative">
<input className="w-full h-9 px-2 text-xs rounded border border-[#e8e5df]" type="text" value="3" />
<span className="absolute right-2 top-2 text-[11px] text-[#8c887f]">cm</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]" id="sec-shipping">
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-4">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">6. Vận Chuyển Hàng Hóa</h3>
<span className="px-2 py-0.5 rounded text-xs bg-[#f4f2ee] text-on-surface font-bold">SÁCH GIẤY ONLY</span>
</div>
<span className="material-symbols-outlined text-tertiary">local_shipping</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] border border-[#e8e5df]">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest border border-[#dedad0] flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">package_2</span>
</div>
<div>
<div className="font-title-md text-body-sm font-semibold text-on-surface">Kích hoạt giao bưu phẩm sách giấy</div>
<div className="text-xs text-[#8c887f]">Tự động liên kết Viettel Post, GHTK, GHN từ Seller Center</div>
</div>
</div>

<button
  type="button"
  role="switch"
  aria-checked={shippingEnabled}
  onClick={() => setShippingEnabled(prev => !prev)}
  className={`w-11 h-6 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary/50 ${shippingEnabled ? 'bg-tertiary' : 'bg-[#d1d5db]'}`}
>
  <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${shippingEnabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
<div>
<label className="block text-xs font-semibold text-on-surface mb-1">Thời gian chuẩn bị đơn hàng</label>
<select className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-surface-container-lowest text-xs">
<option>1 ngày (Giao cho bưu tá trước 16:00)</option>
<option>Trong ngày (Hỏa tốc nội thành)</option>
<option>2 ngày (Chuẩn bị số lượng lớn)</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-on-surface mb-1">Kho xuất hàng mặc định</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#e8e5df] bg-[#f7f5f0] text-xs text-[#6e6b63]" readOnly type="text" value="Kho Tổng Alpha Books - Q. Hai Bà Trưng, Hà Nội" />
</div>
</div>
<p className="text-xs text-[#737a78] italic pt-1">
                  * Khách hàng khi mua kèm Ebook trong cùng đơn sẽ nhận Ebook vào thư viện ngay, sách giấy sẽ được đóng gói theo lịch trình trên mà không phát sinh thêm phụ phí cho phía bản số.
                </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border-2 border-tertiary/50 shadow-[0_6px_24px_-4px_rgba(0,107,79,0.08)] bg-[#fbfdfc]" id="sec-drm">
<div className="flex items-center justify-between border-b border-[#ddede7] pb-3 mb-4">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-tertiary font-bold">7. Nội Dung Ebook &amp; Bảo Mật DRM</h3>
<span className="px-2 py-0.5 rounded text-xs bg-tertiary text-on-tertiary font-bold">EBOOK ONLY</span>
</div>
<span className="material-symbols-outlined text-tertiary">lock</span>
</div>
<div className="space-y-4">

<div>
<label className="block text-xs font-bold text-on-surface mb-1.5">
                    Tệp Ebook gốc chính thức (Mã hóa DRM sau khi upload) <span className="text-primary">*</span>
</label>
<div className="p-3.5 rounded-xl border border-[#cbe4dc] bg-[#f0f8f5] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-xs shadow-sm">
                        PDF
                      </div>
<div>
<div className="font-title-md text-body-sm font-semibold text-on-surface">Atomic-Habits-Vietnamese-Edition.pdf</div>
<div className="text-xs text-tertiary font-medium flex items-center gap-2 mt-0.5">
<span>Dung lượng: 48.2 MB</span>
<span>•</span>
<span className="inline-flex items-center gap-0.5 font-bold text-[#006953]">
<span className="material-symbols-outlined !text-[14px]">check_circle</span> SẴN SÀNG
                          </span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-surface-container-lowest border border-[#bcdad0] text-tertiary rounded-lg text-xs font-semibold hover:bg-[#e4f3ee] transition-colors flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined !text-[15px]">menu_book</span> Xem Trước
                      </button>
<button className="px-3 py-1.5 bg-surface-container-lowest border border-[#e8e5df] text-[#737a78] rounded-lg text-xs font-medium hover:text-on-surface" type="button">
                        Thay Tệp Khác
                      </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
<div className="p-2.5 rounded-lg bg-[#f4f9f7] border border-[#dceee7] flex items-center gap-2 text-tertiary font-medium">
<span className="material-symbols-outlined !text-[16px] text-tertiary">task_alt</span>
<span>Tệp PDF Vector hợp lệ</span>
</div>
<div className="p-2.5 rounded-lg bg-[#f4f9f7] border border-[#dceee7] flex items-center gap-2 text-tertiary font-medium">
<span className="material-symbols-outlined !text-[16px] text-tertiary">task_alt</span>
<span>Mở đọc mẫu 30 trang</span>
</div>
<div className="p-2.5 rounded-lg bg-[#f4f9f7] border border-[#dceee7] flex items-center gap-2 text-tertiary font-medium">
<span className="material-symbols-outlined !text-[16px] text-tertiary">verified_user</span>
<span>DRM Watermark ID độc quyền</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest border border-[#e8e5df]">
<div>
<div className="font-title-md text-body-sm font-semibold text-on-surface">Bản đọc thử miễn phí (Sample Preview)</div>
<div className="text-xs text-[#8c887f]">Tự động tạo trích đoạn 30 trang đầu để tăng tỷ lệ chuyển đổi độc giả.</div>
</div>

<button
  type="button"
  role="switch"
  aria-checked={samplePreviewEnabled}
  onClick={() => setSamplePreviewEnabled(prev => !prev)}
  className={`w-11 h-6 rounded-full relative cursor-pointer flex items-center p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-tertiary/50 ${samplePreviewEnabled ? 'bg-tertiary' : 'bg-[#d1d5db]'}`}
>
  <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${samplePreviewEnabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
</button>
</div>

<div className="p-3.5 rounded-xl bg-[#fff8f5] border border-[#ffd2c7]">
<label className="flex items-start gap-2.5 cursor-pointer">
<input defaultChecked className="w-4 h-4 mt-0.5 rounded border-[#e88574] text-primary focus:ring-primary" type="checkbox" />
<span className="text-xs text-on-surface leading-relaxed">
<strong className="text-primary block font-semibold mb-0.5">Cam kết sở hữu bản quyền phát hành số (Bắt buộc)</strong>
                      Tôi xác nhận gian hàng <strong>Alpha Books</strong> sở hữu đầy đủ văn bản hợp đồng bản quyền phát hành ấn bản điện tử tiếng Việt này trên nền tảng số HUKI Ebook và chịu mọi trách nhiệm pháp lý theo Luật Xuất Bản.
                    </span>
</label>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-[#e8e5df] shadow-[0_4px_20px_-2px_rgba(23,32,31,0.04)]" id="sec-publish">
<div className="flex items-center justify-between border-b border-[#f0ece5] pb-3 mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">8. Kế Hoạch &amp; Tùy Chọn Xuất Bản</h3>
<span className="material-symbols-outlined text-[#8c887f]">schedule</span>
</div>
<div className="space-y-2.5">
<label className="flex items-start gap-3 p-3 rounded-xl border-2 border-tertiary bg-[#f2f9f6] cursor-pointer">
<input defaultChecked className="mt-1 text-tertiary focus:ring-tertiary" name="publish_plan" type="radio" />
<div>
<div className="font-title-md text-body-sm font-semibold text-tertiary">Tự động phát hành cả hai định dạng sau khi HUKI thẩm định hoàn tất</div>
<p className="text-xs text-on-surface-variant mt-0.5">Đơn hàng sách giấy có thể tiếp nhận ngay lập tức và Ebook kích hoạt trực tuyến trên ứng dụng độc giả.</p>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl border border-[#e8e5df] hover:bg-[#faf8f5] cursor-pointer">
<input className="mt-1 text-tertiary focus:ring-tertiary" name="publish_plan" type="radio" />
<div>
<div className="font-title-md text-body-sm font-medium text-on-surface">Chỉ phát hành Ebook trước, sách giấy giữ ẩn cho đến ngày mở kho</div>
<p className="text-xs text-[#8c887f] mt-0.5">Thích hợp cho chiến dịch mở bán sớm bản số trước ngày sách in cập bến kho bãi.</p>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl border border-[#e8e5df] hover:bg-[#faf8f5] cursor-pointer">
<input className="mt-1 text-tertiary focus:ring-tertiary" name="publish_plan" type="radio" />
<div>
<div className="font-title-md text-body-sm font-medium text-on-surface">Lưu kho chờ kích hoạt thủ công</div>
<p className="text-xs text-[#8c887f] mt-0.5">Duyệt hồ sơ xong nhưng chưa hiển thị ra ngoài gian hàng công khai.</p>
</div>
</label>
</div>
</div>
</div>

<aside className="col-span-12 lg:col-span-3 sticky top-[88px] space-y-4">

<div className="bg-surface-container-lowest rounded-xl p-4 border border-[#e8e5df] shadow-sm">
<div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f0ece5]">
<span className="font-label-sm text-[11px] font-bold uppercase text-[#8c887f]">Tóm Tắt Sản Phẩm</span>
<span className="px-1.5 py-0.5 rounded bg-[#f4f2ee] text-[#78756d] text-[10px] font-bold">BẢN NHÁP</span>
</div>
<div className="flex gap-3 items-center mb-3">
<div className="w-12 h-16 rounded-md overflow-hidden bg-black shrink-0 shadow-sm spine-crease">
<img className="w-full h-full object-cover" alt="Hình thu nhỏ bìa sách Atomic Habits nhỏ gọn hiển thị trong cột tóm tắt thông tin sản phẩm của giao diện quản trị người bán." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGKQHmcuWYUB5T_KGmNcirq8JXv3cbjkMPn-JvCuG1_NrglV8PDa2FW7KrLGrM7Qr-UQw719rRl7yQhiXfntpaJe0UVvjjEVBA7H2oLejTPdeIPCyJDIJQS0axErFuT06Tbwy-CG7Y9wJmtxs_-rIdFovbywmyAzsQmhTSL3C9-iMuU-9Roob5xa3pis3PwABNtowpOTZSCj0yRDvzRNdmck_n7EZl0Vfb2Busb3PUqccVLDwrtU1QJQ" />
</div>
<div className="min-w-0">
<h4 className="font-title-md text-xs font-bold text-on-surface truncate">Atomic Habits</h4>
<div className="text-[11px] text-[#737a78] truncate">Alpha Books Official</div>
<span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#e8f5f1] text-tertiary">
                    GIẤY + EBOOK
                  </span>
</div>
</div>
<div className="space-y-1.5 pt-2 border-t border-[#f0ece5] text-xs">
<div className="flex justify-between items-center">
<span className="text-[#8c887f]">Giá Sách Giấy:</span>
<span className="font-bold text-on-surface">149.000 ₫</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[#8c887f]">Giá Ebook DRM:</span>
<span className="font-bold text-tertiary">79.000 ₫</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 border border-[#e8e5df] shadow-sm">
<div className="flex justify-between items-center mb-2">
<span className="font-title-md text-xs font-bold text-on-surface">Tiến Độ Hoàn Thiện</span>
<span className="font-title-md text-xs font-bold text-tertiary">82%</span>
</div>

<div className="w-full h-2 bg-[#e8f1ee] rounded-full overflow-hidden mb-3">
<div className="h-full bg-tertiary rounded-full transition-all duration-500" style={{ width: '82%' }}></div>
</div>
<div className="space-y-1 text-xs text-[#5f5d57]">
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined !text-[14px]">check</span>
<span>01 Thông tin cơ bản</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined !text-[14px]">check</span>
<span>02 Phân loại &amp; Tác giả</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined !text-[14px]">check</span>
<span>03 Ảnh &amp; Media đầy đủ</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined !text-[14px]">check</span>
<span>04 Thiết lập giá bán kép</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined !text-[14px]">check</span>
<span>05 Quản lý tồn kho sách giấy</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined !text-[14px]">check</span>
<span>06 Cài đặt kích thước vận chuyển</span>
</div>
<div className="flex items-center gap-1.5 text-primary font-semibold">
<span className="material-symbols-outlined !text-[14px]">error</span>
<span>07 Xác nhận bản quyền Ebook</span>
</div>
<div className="flex items-center gap-1.5 text-[#9c988f]">
<span className="w-1.5 h-1.5 rounded-full bg-[#ccc8bf] ml-1 mr-1"></span>
<span>08 Tùy chọn xuất bản</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-4 border border-[#e8e5df] shadow-sm">
<div className="font-label-sm text-[11px] font-bold uppercase text-[#8c887f] mb-2.5">
                Xem Trước Trên Sàn HUKI
              </div>

<div className="p-3 bg-[#faf9f6] rounded-lg border border-[#e8e5df] space-y-2.5">
<div className="text-xs font-semibold text-on-surface truncate">Khách hàng sẽ thấy:</div>

<div className="grid grid-cols-2 gap-1 p-1 bg-white rounded-lg border border-[#e2ded5] text-[11px]">
<div className="py-1 px-1.5 text-center font-bold bg-[#faf8f5] rounded border border-[#dfdbd1]">
                    Sách Giấy<br /><span className="text-primary">149k</span>
</div>
<div className="py-1 px-1.5 text-center font-bold bg-[#eef7f4] text-tertiary rounded border border-tertiary/40">
                    Ebook DRM<br /><span>79k</span>
</div>
</div>
<div className="flex gap-1.5 pt-1">
<button className="flex-1 py-1.5 bg-surface-container-lowest border border-[#d6d2c7] text-xs font-semibold rounded text-on-surface" type="button">
                    Đọc Thử
                  </button>
<button className="flex-1 py-1.5 bg-primary text-white text-xs font-bold rounded shadow-sm" type="button">
                    Mua Ngay
                  </button>
</div>
</div>
</div>
</aside>
</div>
</div>

<footer className="fixed bottom-0 right-0 left-0 bg-surface-container-lowest/95 backdrop-blur-md border-t border-[#e8e5df] px-8 py-3.5 z-40 shadow-[0_-4px_16px_rgba(20,29,28,0.06)]">
<div className="max-w-[1160px] mx-auto flex items-center justify-between">

<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs text-[#737a78]">
<span className="material-symbols-outlined !text-[16px] text-tertiary">cloud_done</span>
              Đã tự động lưu nháp lúc 10:42
            </span>
<span className="text-[#d0ccc3]">•</span>
<span className="text-xs font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined !text-[15px]">info</span>
              Còn 1 mục cần hoàn tất trước khi duyệt
            </span>
</div>

<div className="flex items-center gap-3">
<button className="h-10 px-4 rounded-lg border border-[#dedad2] text-on-surface-variant hover:bg-background font-title-md text-body-sm font-medium transition-colors" type="button">
              Hủy / Thoát
            </button>
<button className="h-10 px-4 rounded-lg border border-[#dedad2] bg-surface-container-lowest text-on-surface hover:bg-background font-title-md text-body-sm font-semibold transition-colors shadow-sm" type="button">
              Lưu Bản Nháp
            </button>
<button className="h-10 px-4 rounded-lg border border-tertiary/40 bg-[#f2faf7] text-tertiary hover:bg-[#e6f5ef] font-title-md text-body-sm font-semibold transition-colors" type="button">
              Xem Trước Giao Diện
            </button>

<button className="h-[46px] px-6 rounded-lg bg-tertiary hover:bg-tertiary-dark text-on-tertiary font-title-md text-body-sm font-bold transition-all shadow-[0_4px_14px_rgba(0,107,79,0.28)] hover:shadow-[0_6px_20px_rgba(0,107,79,0.35)] flex items-center gap-2 -translate-y-0.5" type="button">
<span>GỬI DUYỆT SẢN PHẨM</span>
<span className="material-symbols-outlined !text-[18px]">send</span>
</button>
</div>
</div>
</footer>
</main>
    </div>
  );
}
