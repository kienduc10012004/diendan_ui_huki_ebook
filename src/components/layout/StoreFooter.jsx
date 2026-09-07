import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreFooter() {
  return (
    <footer className="bg-[#003b2b] text-white pt-12 pb-8 border-t border-[#005140] mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#13846a]/40 text-xs">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white text-[#003b2b] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">menu_book</span>
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight">HUKI EBOOK</span>
            </div>
            <p className="text-[#94f5d6] text-xs leading-relaxed max-w-sm">
              Hệ sinh thái đọc toàn diện kết hợp Sàn Thương Mại Sách chính hãng và Nền tảng Đọc Ebook bản quyền cao cấp. Nâng tầm tri thức và trải nghiệm văn hóa đọc của người Việt.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-sm">public</span>
              </Link>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-sm">smart_display</span>
              </Link>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-sm">mail</span>
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#94f5d6] uppercase tracking-wider">Về Huki Ebook</h4>
            <ul className="space-y-2 text-[#e0eae8]">
              <li><Link to="/" className="hover:text-white transition-colors">Giới thiệu nền tảng</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Mạng xã hội độc giả</Link></li>
              <li><Link to="/seller" className="hover:text-white transition-colors">Tác giả & Nhà xuất bản</Link></li>
              <li><Link to="/seller/register" className="hover:text-white transition-colors">Bản quyền số (DRM)</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#94f5d6] uppercase tracking-wider">Chính Sách & Hỗ Trợ</h4>
            <ul className="space-y-2 text-[#e0eae8]">
              <li><Link to="/" className="hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
              <li><Link to="/books" className="hover:text-white transition-colors">Chính sách bảo mật</Link></li>
              <li><Link to="/books" className="hover:text-white transition-colors">Chính sách đổi trả sách</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Liên hệ hỗ trợ 24/7</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#94f5d6] uppercase tracking-wider">Ứng Dụng HukiReader</h4>
            <p className="text-[#e0eae8] text-xs">Đọc sách mọi lúc mọi nơi trên iOS, Android và Web Reader.</p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 bg-white/10 p-2 rounded-xl border border-white/10 text-xs">
                <span className="material-symbols-outlined text-lg text-[#94f5d6]">phone_iphone</span>
                <div>
                  <p className="text-[10px] text-[#94f5d6]">Tải trên</p>
                  <p className="font-bold">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-2 rounded-xl border border-white/10 text-xs">
                <span className="material-symbols-outlined text-lg text-[#94f5d6]">android</span>
                <div>
                  <p className="text-[10px] text-[#94f5d6]">Tải trên</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#94f5d6]/70 gap-2">
          <p>© 2026 HUKI EBOOK. Bản quyền thuộc về Công ty TNHH Sách Điện Tử Huki.</p>
          <div className="flex items-center gap-4">
            <span>Máy chủ đám mây DRM: Trạng thái tối ưu</span>
            <span>•</span>
            <span>Phiên bản Web v3.4.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
