import React from 'react';
import { Link } from 'react-router-dom';

export default function SellerCorrection() {
  return (
    <div className="w-full bg-[#f7f5f0] text-on-surface font-body-md text-body-md antialiased min-h-screen py-6 pb-28">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="px-8 py-3.5 border-b border-outline-variant/40 bg-surface-container-lowest/60 backdrop-blur-xs flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" to="/seller">Kênh Người Bán</Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" to="/seller/edge-cases">Sản Phẩm</Link>
            <span className="text-outline-variant">/</span>
            <span className="text-red-700 font-medium">Chỉnh Sửa Sản Phẩm (Bị Từ Chối)</span>
          </div>
          <div className="flex items-center gap-3">
            <Link className="inline-flex items-center gap-1.5 text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors" to="/seller/product/edit-hybrid">
              <span className="material-symbols-outlined text-[17px]">arrow_back</span>
              <span>Danh Sách Sản Phẩm</span>
            </Link>
          </div>
        </div>

        <div className="px-8 pt-6 pb-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-300">
                  TỪ CHỐI KIỂM DUYỆT
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-surface-container-low text-tertiary border border-tertiary/30">
                  SÁCH GIẤY + EBOOK
                </span>
                <span className="text-[12px] text-on-surface-variant font-mono">SKU: HB-ATM-978604</span>
              </div>
              <h1 className="font-headline-lg text-[30px] font-semibold text-on-surface tracking-tight leading-tight">
                Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ
              </h1>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-[12px] text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-on-surface-variant/80">upload_file</span>
                  Gửi duyệt: <strong className="text-on-surface font-medium">06/09/2026 · 14:32</strong>
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-red-600">rate_review</span>
                  Phản hồi kiểm duyệt: <strong className="text-red-700 font-medium">07/09/2026 · 08:15</strong>
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="text-tertiary font-medium">Đội ngũ kiểm duyệt HUKI (Thẩm định viên #08)</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 self-start lg:self-center">
              <button className="px-3.5 py-2 bg-white border border-outline-variant/70 hover:border-on-surface text-on-surface rounded-lg text-[13px] font-medium flex items-center gap-1.5 shadow-xs transition-colors">
                <span className="material-symbols-outlined text-[18px]">visibility</span>
                <span>Xem Trước Giao Diện Sàn</span>
              </button>
              <button className="w-9 h-9 flex items-center justify-center bg-white border border-outline-variant/70 text-on-surface rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_horiz</span>
              </button>
            </div>
          </div>

          <div className="mt-6 bg-red-50/90 border border-red-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center shrink-0 text-red-600 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">error</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h2 className="font-headline-sm text-[19px] font-semibold text-red-900 leading-snug">
                    Sản Phẩm Cần Được Chỉnh Sửa Trước Khi Phát Hành
                  </h2>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-200/70 text-red-800">
                      3 Vấn đề cần xử lý
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      1 Đã khắc phục
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                      2 Chưa xử lý
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-red-800/90 mt-1.5 leading-relaxed">
                  HUKI chưa thể phê duyệt xuất bản sản phẩm này do một số thông tin và tệp dữ liệu chưa đạt tiêu chuẩn kiểm duyệt nội dung số. Vui lòng khắc phục 3 vấn đề dưới đây theo hướng dẫn chi tiết của ban biên tập để được đưa lên sàn.
                </p>

                <div className="mt-3.5 p-3.5 bg-white/80 border-l-4 border-red-500 rounded-r-lg text-[13px] text-stone-800">
                  <div className="flex items-center gap-1.5 font-semibold text-red-900 text-[12px] uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[16px] text-red-600">record_voice_over</span>
                    Ghi chú tổng quan từ Biên tập viên HUKI:
                  </div>
                  <p className="italic text-stone-700 leading-relaxed">
                    "Ảnh bìa bị vỡ nét và viền trắng dày; phần giới thiệu sách còn quá sơ sài chưa đủ thông tin cho độc giả; tệp Ebook PDF có cài mật khẩu khiến hệ thống DRM không thể mã hóa đọc thử. Vui lòng cập nhật để HUKI tái thẩm định trong vòng 4-8 giờ làm việc."
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-red-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[12px] font-medium text-red-900">
                    <span>Tiến Độ Khắc Phục:</span>
                    <strong className="text-stone-900">1 / 3 vấn đề đã xử lý</strong>
                    <span className="text-stone-500">(33%)</span>
                  </div>
                  <div className="w-full sm:w-64 bg-red-200/60 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: '33.33%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white border border-outline-variant/60 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                <span className="material-symbols-outlined text-[19px]">lock</span>
              </span>
              <div>
                <div className="text-[13px] font-semibold text-on-surface flex items-center gap-2">
                  <span>Định Dạng Phát Hành:</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-low text-tertiary border border-tertiary/20 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">auto_stories</span>
                    SÁCH GIẤY + EBOOK (PHÁT HÀNH KÉP)
                  </span>
                </div>
                <p className="text-[12px] text-on-surface-variant mt-0.5">
                  Định dạng này đã được khóa và không thể thay đổi trong quá trình xử lý yêu cầu thẩm định lại từ ban biên tập.
                </p>
              </div>
            </div>
            <div className="text-[11px] text-on-surface-variant font-mono bg-[#f6f4ee] px-3 py-1.5 rounded border border-outline-variant/50 self-start md:self-auto">
              Khóa bởi: Quản Trị Hệ Thống HUKI
            </div>
          </div>
        </div>

        <div className="px-8 mt-2">
          <div className="grid grid-cols-12 gap-6 items-start">

            <nav className="hidden lg:block lg:col-span-2 sticky top-[84px] bg-white border border-outline-variant/60 rounded-xl p-3 shadow-xs space-y-1">
              <div className="text-[11px] font-bold text-on-surface-variant/70 uppercase tracking-wider px-2 py-1 mb-1">
                MỤC NỘI DUNG
              </div>
              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] text-on-surface hover:bg-[#f7f5f0] transition-colors" to="/seller/product/edit-hybrid">
                <span className="truncate">01 Thông Tin Cơ Bản</span>
                <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
              </Link>

              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] font-semibold bg-red-50 text-red-800 border border-red-200" to="/seller/edge-cases">
                <span className="truncate">02 Mô Tả Sách</span>
                <span className="material-symbols-outlined text-red-600 text-[16px] animate-bounce">priority_high</span>
              </Link>
              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] text-on-surface hover:bg-[#f7f5f0] transition-colors" to="/">
                <span className="truncate">03 Phân Loại &amp; Tác Giả</span>
                <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
              </Link>

              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] font-medium bg-emerald-50/70 text-emerald-800 border border-emerald-200/60" to="/">
                <span className="truncate">04 Ảnh Bìa &amp; Media</span>
                <span className="material-symbols-outlined text-emerald-600 text-[16px]">task_alt</span>
              </Link>
              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] text-on-surface hover:bg-[#f7f5f0] transition-colors" to="/">
                <span className="truncate">05 Giá Bán Kép</span>
                <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
              </Link>
              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] text-on-surface hover:bg-[#f7f5f0] transition-colors" to="/seller/product/create-physical">
                <span className="truncate">06 Kho Sách Giấy</span>
                <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
              </Link>
              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] text-on-surface hover:bg-[#f7f5f0] transition-colors" to="/seller/edge-cases">
                <span className="truncate">07 Vận Chuyển</span>
                <span className="material-symbols-outlined text-emerald-600 text-[16px]">check_circle</span>
              </Link>

              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] font-semibold bg-red-50 text-red-800 border border-red-200" to="/">
                <span className="truncate">08 Nội Dung Ebook</span>
                <span className="material-symbols-outlined text-red-600 text-[16px] animate-bounce">priority_high</span>
              </Link>
              <Link className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] text-on-surface-variant/70 hover:bg-[#f7f5f0] transition-colors" to="/seller/product/edit-hybrid">
                <span className="truncate">09 Xuất Bản</span>
                <span className="material-symbols-outlined text-stone-400 text-[16px]">radio_button_unchecked</span>
              </Link>
              <div className="pt-3 border-t border-outline-variant/40 mt-2 px-1">
                <div className="bg-amber-50 rounded-lg p-2 text-[11px] text-amber-900 border border-amber-200/70">
                  <span className="font-semibold block mb-0.5">Lưu ý biên tập:</span>
                  Vui lòng cập nhật lần lượt từng mục có dấu chấm than đỏ.
                </div>
              </div>
            </nav>

            <div className="col-span-12 lg:col-span-7 space-y-6">

              <section className="bg-white border border-outline-variant/60 rounded-xl p-6 shadow-xs" id="sec-basic">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center">01</span>
                    <h3 className="font-title-lg text-title-lg text-on-surface">Thông Tin Cơ Bản</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    Hợp lệ (Đã duyệt)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                  <div className="md:col-span-2">
                    <label className="block font-medium text-on-surface mb-1">Tên Tựa Sách Chính Thức</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-on-surface font-medium focus:ring-1 focus:ring-tertiary" type="text" value="Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ" />
                  </div>
                  <div>
                    <label className="block font-medium text-on-surface mb-1">Mã Chuẩn Quốc Tế (ISBN-13)</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-on-surface font-mono text-[12px]" type="text" value="978-604-58-9123-4" />
                  </div>
                  <div>
                    <label className="block font-medium text-on-surface mb-1">Ngôn Ngữ Phát Hành</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-on-surface" type="text" value="Tiếng Việt (Bản dịch có bản quyền)" />
                  </div>
                  <div>
                    <label className="block font-medium text-on-surface mb-1">Số Trang In</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-on-surface" type="text" value="320 trang" />
                  </div>
                  <div>
                    <label className="block font-medium text-on-surface mb-1">Số Lần Tái Bản</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-on-surface" type="text" value="Lần thứ 3 (Năm 2026)" />
                  </div>
                </div>
              </section>

              <section className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-sm relative" id="sec-description">

                <div className="flex items-center justify-between pb-4 border-b border-red-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-[11px] font-bold flex items-center justify-center">02</span>
                    <h3 className="font-title-lg text-title-lg text-red-950">Mô Tả Sản Phẩm</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-red-700 bg-red-100 px-2.5 py-0.5 rounded border border-red-300 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[15px]">error</span>
                    VẤN ĐỀ 1: CẦN CHỈNH SỬA
                  </span>
                </div>

                <div className="bg-red-50/90 border-l-4 border-red-600 p-4 rounded-r-lg mb-5">
                  <div className="flex items-center gap-2 text-red-900 font-semibold text-[13px] mb-1.5">
                    <span className="material-symbols-outlined text-red-600 text-[18px]">announcement</span>
                    <span>PHẢN HỒI TỪ BAN BIÊN TẬP HUKI (NGÀY 07/09/2026)</span>
                  </div>
                  <div className="space-y-1.5 text-[13px] text-red-950">
                    <p>
                      <strong className="font-semibold text-red-900">Lý do từ chối:</strong> Mô tả hiện tại quá ngắn (chỉ 1 câu sơ sài gồm 16 từ), chưa cung cấp đủ tóm tắt nội dung, bố cục cuốn sách, 4 định luật cốt lõi và đối tượng độc giả phù hợp theo quy định chuẩn SEO của sàn HUKI.
                    </p>
                    <p className="pt-1 text-[12px] text-red-800">
                      <strong className="font-semibold">Gợi ý khắc phục:</strong> Bổ sung tối thiểu 200 từ nêu bật phương pháp 4 bước thay đổi thói quen (Gợi ý, Thèm muốn, Phản hồi, Phần thưởng), bổ sung mục lục rút gọn và đánh giá từ chuyên gia quốc tế.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-medium text-stone-900 text-[13px] flex items-center gap-1.5">
                      <span>Nội Dung Giới Thiệu Cuốn Sách</span>
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <button className="text-tertiary hover:text-tertiary-container text-[12px] font-semibold flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[15px]">auto_fix_high</span>
                      Gợi ý mẫu mô tả chuẩn SEO HUKI
                    </button>
                  </div>

                  <div className="border border-red-300 rounded-t-lg bg-[#fbf9f5] px-3 py-2 flex items-center gap-2 border-b border-red-200">
                    <button className="p-1 hover:bg-white rounded text-stone-700 font-bold text-[12px]" type="button">B</button>
                    <button className="p-1 hover:bg-white rounded text-stone-700 italic text-[12px]" type="button">I</button>
                    <button className="p-1 hover:bg-white rounded text-stone-700 underline text-[12px]" type="button">U</button>
                    <span className="h-4 w-[1px] bg-stone-300 mx-1"></span>
                    <button className="p-1 hover:bg-white rounded text-stone-700 text-[12px] flex items-center" type="button"><span className="material-symbols-outlined text-[16px]">format_list_bulleted</span></button>
                    <button className="p-1 hover:bg-white rounded text-stone-700 text-[12px] flex items-center" type="button"><span className="material-symbols-outlined text-[16px]">format_list_numbered</span></button>
                    <button className="p-1 hover:bg-white rounded text-stone-700 text-[12px] flex items-center" type="button"><span className="material-symbols-outlined text-[16px]">format_quote</span></button>
                    <span className="h-4 w-[1px] bg-stone-300 mx-1"></span>
                    <span className="text-[11px] text-red-600 font-medium ml-auto">16 / 200 từ tối thiểu (Không đạt yêu cầu)</span>
                  </div>

                  <textarea className="w-full bg-red-50/30 border-x border-b border-red-300 rounded-b-lg p-3 text-[13px] text-stone-800 focus:ring-1 focus:ring-red-500 focus:outline-none leading-relaxed" rows="4">Atomic Habits là cuốn sách giúp người đọc xây dựng thói quen tốt và thay đổi cuộc sống.</textarea>
                  <div className="mt-2.5 flex items-start gap-2 text-[12px] text-red-700">
                    <span className="material-symbols-outlined text-[16px] text-red-600 mt-0.5">warning</span>
                    <span>Cảnh báo: Bạn cần viết thêm ít nhất 184 từ để hệ thống chấp nhận gửi thẩm định lại.</span>
                  </div>

                  <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-lg text-[12px] text-stone-600">
                    <div className="font-semibold text-stone-800 mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-stone-600">lightbulb</span>
                      Gợi ý dàn ý nhanh từ Alpha Books:
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 text-stone-600">
                      <li>Đoạn 1: Tổng quan tầm ảnh hưởng cuốn sách bán chạy hơn 15 triệu bản trên toàn cầu.</li>
                      <li>Đoạn 2: Giới thiệu hệ thống 4 bước: Khiến nó rõ ràng, hấp dẫn, dễ dàng và thỏa mãn.</li>
                      <li>Đoạn 3: Cuốn sách này dành cho ai (Sinh viên, lãnh đạo, người muốn tối ưu năng suất).</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-white border border-outline-variant/60 rounded-xl p-6 shadow-xs" id="sec-category">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center">03</span>
                    <h3 className="font-title-lg text-title-lg text-on-surface">Phân Loại &amp; Tác Giả</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    Hợp lệ
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <label className="block font-medium text-stone-800 mb-1">Danh Mục Cấp 1 &amp; 2</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-stone-800" type="text" value="Phát Triển Bản Thân &gt; Kỹ Năng &amp; Thói Quen" />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-800 mb-1">Tác Giả Chính</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-stone-800 font-medium" type="text" value="James Clear" />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-800 mb-1">Nhà Xuất Bản Cấp Phép</label>
                    <input className="w-full bg-[#faf9f6] border border-outline-variant/60 rounded-lg px-3 py-2 text-stone-800" type="text" value="NXB Thế Giới" />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-800 mb-1">Từ Khóa Tìm Kiếm (Tags)</label>
                    <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#faf9f6] border border-outline-variant/60 rounded-lg">
                      <span className="bg-white border border-stone-200 text-stone-700 text-[11px] px-2 py-0.5 rounded-full">#thói_quen</span>
                      <span className="bg-white border border-stone-200 text-stone-700 text-[11px] px-2 py-0.5 rounded-full">#năng_suất</span>
                      <span className="bg-white border border-stone-200 text-stone-700 text-[11px] px-2 py-0.5 rounded-full">#tự_lực</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border-2 border-emerald-300 rounded-xl p-6 shadow-xs relative" id="sec-media">
                <div className="flex items-center justify-between pb-4 border-b border-emerald-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center">04</span>
                    <h3 className="font-title-lg text-title-lg text-stone-900">Ảnh Bìa &amp; Media</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    VẤN ĐỀ 2: ĐÃ KHẮC PHỤC
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-3.5 mb-5 text-[12px] text-emerald-950 flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-emerald-700 text-[18px] shrink-0 mt-0.5">verified</span>
                    <div>
                      <div className="font-semibold text-emerald-900">Lý do ban đầu: "Ảnh bìa chính có độ phân giải thấp (&lt;600px) và chứa viền trắng dày xung quanh khung ảnh."</div>
                      <p className="text-emerald-800 mt-0.5">Bạn đã tải lên bản thay thế đạt chuẩn 1600x2400px (WebP). Trạng thái này sẽ được tự động kích hoạt duyệt lại.</p>
                    </div>
                  </div>
                  <button className="text-emerald-800 hover:text-emerald-950 font-semibold underline shrink-0 ml-2" type="button">Chi tiết</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="border border-red-200 rounded-xl p-3.5 bg-red-50/30 flex flex-col items-center text-center">
                    <div className="w-full flex items-center justify-between mb-2 text-[11px]">
                      <span className="font-semibold text-red-800">BẢN CŨ BỊ TỪ CHỐI</span>
                      <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">480 x 720 px</span>
                    </div>
                    <div className="w-32 h-48 relative rounded-md overflow-hidden shadow-xs border-2 border-dashed border-red-300 mb-2 p-1 bg-white">
                      <img className="w-full h-full object-cover filter blur-[1px] opacity-75" alt="A low resolution blurry book cover mockup of Atomic Habits with noticeable white borders and pixelation artifacts on an off-white paper desk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs28a7wMPvluZP76Tj1Jso3wM2-xTKot3G9q9kilzHKmRgGInC4pQveoBAYvX6st7KmAgd0ewYTYTqnslCMUIwRnWqoq6j7P7hw0F5rfYDeM7nBEUw14KbJ0MJgwkAzpi0LsgoTVsWeMisGYfAhFNcdmvQ-OYCDeZoI0ZTzPlwDKm4nScuYAwLNpmf8yRX9e4QIeSpb04KHZUQrhVW4pPxyQaKk-Levj2qub_dJ7otV-Rf8evdYfuN7Q" />
                      <div className="absolute inset-0 bg-red-900/20 flex items-center justify-center">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Vi phạm viền &amp; độ nét</span>
                      </div>
                    </div>
                    <span className="text-[11px] text-red-600">Đã lưu trữ lịch sử</span>
                  </div>

                  <div className="border-2 border-emerald-400 rounded-xl p-3.5 bg-emerald-50/30 flex flex-col items-center text-center relative">
                    <div className="w-full flex items-center justify-between mb-2 text-[11px]">
                      <span className="font-semibold text-emerald-900 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600">check</span>
                        BẢN MỚI TẢI LÊN
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">1600 x 2400 px (WebP)</span>
                    </div>
                    <div className="w-32 h-48 relative rounded-md overflow-hidden shadow-md border-2 border-emerald-500 mb-2 group">
                      <img className="w-full h-full object-cover" alt="A crisp ultra-high-definition book cover of Atomic Habits by James Clear, featuring elegant typography with gold foil accents on a pure white textured background, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJSpCaMa241N70ri7GtAwOxnpmmt2krLGB1tembt5DxlCeGY71lYXxZj0yN0VPTLBIAPSijMziI_BScEQo3Yx4oU9sPbCLjgN_HIn3KUaCFtZqDY8uLlMeNA0JjbjBihBzC0BaC16Pbb8JgK27ucP4hbE_qZxCjwanGES2XLr8J04nPMzYTNClYH_HjlkBHZGKSyHwtc5TvsUmME54iXQ1gTLoC5cxMqDHNQk8XsHOgfH5ER-r1pFTDw" />

                      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.02) 5%, transparent 10%)' }}></div>
                      <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">1.2 MB</div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <button className="px-2.5 py-1 text-[11px] font-medium bg-white border border-stone-300 rounded hover:bg-stone-50 text-stone-700" type="button">Xem Chi Tiết</button>
                      <button className="px-2.5 py-1 text-[11px] font-medium text-tertiary hover:underline" type="button">Thay Ảnh Khác</button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border border-outline-variant/60 rounded-xl p-6 shadow-xs" id="sec-pricing">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center">05</span>
                    <h3 className="font-title-lg text-title-lg text-stone-900">Thiết Lập Giá Bán Kép (Dual Pricing)</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    Hợp lệ
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="p-3.5 bg-[#fbf9f5] border border-stone-200 rounded-lg">
                    <div className="text-[12px] font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">menu_book</span>
                      Sách Giấy (Bìa Mềm)
                    </div>
                    <div className="space-y-2 text-[13px]">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Giá bìa niêm yết:</span>
                        <span className="font-mono text-stone-400 line-through">189.000 đ</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-stone-800">Giá bán trên sàn:</span>
                        <span className="font-mono font-bold text-primary text-[15px]">149.000 đ</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 bg-emerald-50 p-1.5 rounded font-medium text-center">
                        Chiết khấu 21% · Hoa hồng sàn: 10%
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#fbf9f5] border border-stone-200 rounded-lg">
                    <div className="text-[12px] font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">devices</span>
                      Ebook Bản Quyền DRM
                    </div>
                    <div className="space-y-2 text-[13px]">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Giá bìa niêm yết:</span>
                        <span className="font-mono text-stone-400 line-through">149.000 đ</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-stone-800">Giá bán Ebook:</span>
                        <span className="font-mono font-bold text-primary text-[15px]">79.000 đ</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 bg-emerald-50 p-1.5 rounded font-medium text-center">
                        Tiết kiệm 47% so với sách in · Tải đọc tức thì
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border border-outline-variant/60 rounded-xl p-6 shadow-xs" id="sec-inventory">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center">06</span>
                    <h3 className="font-title-lg text-title-lg text-stone-900">Kho Sách Giấy &amp; Vận Chuyển</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    Hợp lệ
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[13px]">
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="text-stone-500 text-[11px] block">Tồn Kho Khả Dụng</span>
                    <span className="text-[18px] font-bold text-stone-900 font-mono">112</span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">Tổng lưu kho: 120 cuốn (8 cuốn giữ đơn)</span>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="text-stone-500 text-[11px] block">Trọng Lượng &amp; Kích Thước</span>
                    <span className="text-[14px] font-semibold text-stone-900 font-mono">420g · 14x20.5 cm</span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">Chuẩn đóng gói hộp carton sách</span>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="text-stone-500 text-[11px] block">Kênh Vận Chuyển Bật</span>
                    <div className="flex items-center gap-1 mt-1 text-[12px] font-medium text-tertiary">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span>GHTK, Viettel Post, HUKI Now</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-sm relative" id="sec-drm">
                <div className="flex items-center justify-between pb-4 border-b border-red-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-[11px] font-bold flex items-center justify-center">08</span>
                    <h3 className="font-title-lg text-title-lg text-red-950">Nội Dung Ebook &amp; Quản Lý Bản Quyền DRM</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-red-700 bg-red-100 px-2.5 py-0.5 rounded border border-red-300 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[15px]">error</span>
                    VẤN ĐỀ 3: CẦN CHỈNH SỬA
                  </span>
                </div>

                <div className="bg-red-50/90 border-l-4 border-red-600 p-4 rounded-r-lg mb-5">
                  <div className="flex items-center gap-2 text-red-900 font-semibold text-[13px] mb-1.5">
                    <span className="material-symbols-outlined text-red-600 text-[18px]">lock_clock</span>
                    <span>PHẢN HỒI TỪ HỆ THỐNG KỸ THUẬT DRM HUKI</span>
                  </div>
                  <div className="space-y-1.5 text-[13px] text-red-950">
                    <p>
                      <strong className="font-semibold text-red-900">Lý do từ chối:</strong> Tệp PDF tải lên bị khóa mã hóa bảo vệ bằng mật khẩu (Password Protected). Máy chủ DRM tự động của HUKI không thể bóc tách nội dung, trích xuất 30 trang đọc thử và gắn Watermark động theo từng tài khoản người mua.
                    </p>
                    <p className="pt-1 text-[12px] text-red-800">
                      <strong className="font-semibold">Gợi ý khắc phục:</strong> Vui lòng xuất bản lại tệp PDF Master không đặt mật khẩu mở tệp (No Open Password). Hệ thống máy chủ HUKI sẽ tự động mã hóa bảo mật chuẩn AES-256 an toàn ngay sau khi được ban biên tập phê duyệt.
                    </p>
                  </div>
                </div>

                <div className="border border-red-300 bg-red-50/40 rounded-xl p-4 flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center text-red-700">
                      <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[13px] text-stone-900 font-mono">Atomic-Habits-Locked.pdf</span>
                        <span className="bg-red-200 text-red-900 text-[10px] font-bold px-2 py-0.5 rounded">KHÔNG THỂ XỬ LÝ (Có Mật Khẩu)</span>
                      </div>
                      <div className="text-[12px] text-stone-500 mt-0.5">
                        Dung lượng: 48.2 MB · Tải lên ngày: 06/09/2026 lúc 14:28
                      </div>
                    </div>
                  </div>
                  <button className="text-red-700 hover:text-red-900 p-1.5 rounded hover:bg-red-100" title="Xóa tệp hỏng" type="button">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>

                <div>
                  <label className="block font-medium text-stone-900 text-[13px] mb-2">Tải Lên Tệp Ebook Mới Thay Thế (Không Cài Mật Khẩu)</label>
                  <div className="border-2 border-dashed border-stone-300 hover:border-tertiary rounded-xl p-6 text-center bg-[#fcfbfa] transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-low text-tertiary mx-auto flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">upload_file</span>
                    </div>
                    <div className="text-[13px] font-medium text-stone-800">
                      <span className="text-tertiary underline font-semibold">Nhấn để tải lên tệp PDF Master</span> hoặc kéo thả tệp vào đây
                    </div>
                    <p className="text-[12px] text-stone-500 mt-1">
                      Hỗ trợ định dạng PDF, EPUB Master không khóa bảo vệ. Dung lượng tối đa: 100MB.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-100 text-stone-600 text-[11px]">
                      <span className="material-symbols-outlined text-[14px]">shield</span>
                      HUKI DRM sẽ tự động mã hóa chống sao chép và gắn bản quyền cho từng đơn hàng.
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="col-span-12 lg:col-span-3 space-y-4 sticky top-[84px]">

              <div className="bg-white border border-outline-variant/60 rounded-xl p-4 shadow-xs">
                <div className="flex gap-3">
                  <div className="w-16 h-24 rounded overflow-hidden shadow-xs border border-stone-200 shrink-0 relative bg-stone-100">
                    <img className="w-full h-full object-cover" alt="Small neat thumbnail representation of the book Atomic Habits with high contrast clean design on bookshelf background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Y9Vn76axezuVsPhdgrKfmkY_S1tXYkKWl44Ze5HlMt5XwyafObSRh8ir8SOtE2FiDlGBDj3srh5U1pQeNKWCtz368oBXtytKEKXTEDINDOY0vdKwy2P-neNd352QNwblxqcof_z9HzwSgyNMPNDLg8Ff29wgr4GrD4ojseqhYV0d9Rctjhk5JPlxpNNd7Ls0HljZY6IDcznh5EReUG5ujQoe8QFD2_Okg88DrykkZT8hqnjxfWM72Q" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 8%)' }}></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-200 uppercase inline-block mb-1">
                      TỪ CHỐI DUYỆT
                    </span>
                    <div className="font-title-md text-[13px] text-stone-900 leading-snug line-clamp-2">Atomic Habits – James Clear</div>
                    <div className="text-[11px] text-stone-500 mt-1">Gian hàng: <strong className="text-stone-700">Alpha Books</strong></div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-outline-variant/60 rounded-xl p-4 shadow-xs">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
                  <h4 className="font-title-md text-[13px] text-stone-900">Danh Sách Cần Khắc Phục</h4>
                  <span className="text-[11px] font-semibold text-red-700">1 / 3 hoàn tất</span>
                </div>
                <div className="space-y-2.5 text-[12px]">

                  <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-200 flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <div className="min-w-0">
                      <div className="font-semibold text-emerald-950">1. Ảnh bìa chính</div>
                      <div className="text-[11px] text-emerald-800">Đã cập nhật bản HD 1600x2400</div>
                    </div>
                  </div>

                  <Link className="p-2 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 hover:bg-red-100/70 transition-colors block" to="/seller/edge-cases">
                    <span className="material-symbols-outlined text-red-600 text-[18px] shrink-0 mt-0.5">cancel</span>
                    <div className="min-w-0">
                      <div className="font-semibold text-red-950 flex items-center justify-between">
                        <span>2. Mô tả sản phẩm</span>
                        <span className="text-[10px] text-red-700 underline font-normal">Sửa ngay</span>
                      </div>
                      <div className="text-[11px] text-red-800">Chưa đủ độ dài (còn thiếu 184 từ)</div>
                    </div>
                  </Link>

                  <Link className="p-2 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 hover:bg-red-100/70 transition-colors block" to="/seller/product/edit-hybrid">
                    <span className="material-symbols-outlined text-red-600 text-[18px] shrink-0 mt-0.5">cancel</span>
                    <div className="min-w-0">
                      <div className="font-semibold text-red-950 flex items-center justify-between">
                        <span>3. Tệp Ebook DRM</span>
                        <span className="text-[10px] text-red-700 underline font-normal">Sửa ngay</span>
                      </div>
                      <div className="text-[11px] text-red-800">Tệp PDF cũ đang cài mật khẩu</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-4 shadow-xs text-[12px]">
                <div className="flex items-center gap-2 text-stone-900 font-semibold mb-2">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">verified_user</span>
                  <span>Điều Kiện Gửi Thẩm Định Lại</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Sau khi khắc phục đủ cả 3 mục, nút <strong className="text-stone-900">"Gửi Duyệt Lại"</strong> ở góc dưới sẽ tự động kích hoạt. Ban biên tập HUKI sẽ tái thẩm định sản phẩm trong vòng <strong>4 - 8 giờ làm việc</strong>.
                </p>
                <div className="mt-3 pt-2.5 border-t border-outline-variant/40 flex items-center justify-between text-[11px] text-stone-600 font-medium">
                  <span>Trạng thái sẵn sàng:</span>
                  <span className="text-red-700 font-bold">Chưa đủ điều kiện (Thiếu 2)</span>
                </div>
              </div>

              <div className="bg-white border border-outline-variant/60 rounded-xl p-4 shadow-xs text-[12px]">
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2.5">
                  LỊCH SỬ XÉT DUYỆT
                </div>
                <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-stone-200">

                  <div className="flex items-start gap-2.5 relative">
                    <span className="w-4 h-4 rounded-full bg-red-100 border-2 border-red-500 shrink-0 mt-0.5 z-10"></span>
                    <div>
                      <div className="font-semibold text-stone-900">Từ chối duyệt (3 vấn đề)</div>
                      <div className="text-[11px] text-stone-500">07/09/2026 · 08:15 bởi Thẩm định viên #08</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 relative">
                    <span className="w-4 h-4 rounded-full bg-stone-200 border-2 border-stone-400 shrink-0 mt-0.5 z-10"></span>
                    <div>
                      <div className="font-medium text-stone-700">Gửi kiểm duyệt lần 1</div>
                      <div className="text-[11px] text-stone-500">06/09/2026 · 14:32 bởi Minh Trí</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 relative">
                    <span className="w-4 h-4 rounded-full bg-stone-100 border-2 border-stone-300 shrink-0 mt-0.5 z-10"></span>
                    <div>
                      <div className="font-medium text-stone-500">Tạo bản thảo sản phẩm</div>
                      <div className="text-[11px] text-stone-400">06/09/2026 · 10:11</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <aside aria-label="Thanh tác vụ kiểm duyệt" className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant/60 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-[13px] font-semibold text-stone-900">Tiến độ: 1/3 vấn đề đã xử lý</span>
            </div>
            <span className="text-stone-300 hidden sm:inline">|</span>
            <span className="text-[12px] text-stone-500 hidden sm:inline">
              Tự động lưu bản nháp tại chỗ lúc 09:15 hôm nay
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-3.5 py-2 text-[13px] font-medium text-stone-600 hover:text-stone-900 transition-colors" type="button">
              Hủy Bỏ Thay Đổi
            </button>
            <button className="px-4 py-2 text-[13px] font-medium bg-white border border-stone-300 hover:border-stone-400 rounded-lg text-stone-800 shadow-xs transition-colors" type="button">
              Xem Trước
            </button>
            <button className="px-4 py-2 text-[13px] font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg shadow-xs transition-colors" type="button">
              Lưu Bản Nháp
            </button>

            <div className="relative group">
              <button className="px-5 py-2 text-[13px] font-semibold bg-stone-300 text-stone-500 rounded-lg cursor-not-allowed flex items-center gap-1.5 shadow-none" disabled="" type="button">
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>GỬI DUYỆT LẠI (Còn 2 Vấn Đề)</span>
              </button>

              <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-72 p-2.5 bg-stone-900 text-white text-[11px] rounded-lg shadow-xl z-50 leading-relaxed">
                <div className="font-bold text-amber-300 mb-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">info</span>
                  Chưa thể gửi duyệt lại
                </div>
                Vui lòng bổ sung độ dài phần Mô tả Sách và tải lên tệp Ebook PDF không mật khẩu để mở khóa nút này.
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
