import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReader } from '../../context/ReaderContext';

export default function ReaderPage() {
  const {
    theme, setTheme, fontSize, changeFontSize,
    currentChapter, setCurrentChapter,
    readingProgress, setReadingProgress
  } = useReader();

  const [showToc, setShowToc] = useState(false);

  const themeClasses = {
    warm: 'bg-[#f8f6f1] text-[#17201f]',
    sepia: 'bg-[#f4ecd8] text-[#3d2e1e]',
    dark: 'bg-[#141d1c] text-[#e0eae8]'
  };

  const cardThemeClasses = {
    warm: 'bg-white border-[#e8e5df]',
    sepia: 'bg-[#fcf7ed] border-[#e2d6be]',
    dark: 'bg-[#1c2726] border-[#2a3b38]'
  };

  const chapters = [
    { title: 'Sức Mạnh Bất Ngờ Của Thói Quen Tí Hon', pages: 22 },
    { title: 'Thói Quen Định Hình Danh Tính Của Bạn', pages: 24 },
    { title: 'Bốn Bước Đơn Giản Để Xây Thói Quen Tốt', pages: 26 },
    { title: 'Quy Luật 1: Làm Cho Nó Rõ Ràng', pages: 20 },
    { title: 'Cách Tốt Nhất Để Bắt Đầu Thói Quen Mới', pages: 22 },
    { title: 'Động Lực Được Đánh Giá Quá Cao', pages: 24 }
  ];

  const TOTAL_PAGES = chapters.reduce((sum, c) => sum + c.pages, 0);
  const pagesBeforeCurrent = chapters.slice(0, currentChapter - 1).reduce((sum, c) => sum + c.pages, 0);
  const currentPageInChapter = Math.round((readingProgress / 100) * (chapters[currentChapter - 1]?.pages || 1));
  const currentPage = pagesBeforeCurrent + Math.max(1, currentPageInChapter);

  const goToChapter = (idx) => {
    setCurrentChapter(idx + 1);
    setReadingProgress(0);
    setShowToc(false);
  };

  const goNextChapter = () => {
    if (currentChapter < chapters.length) {
      setCurrentChapter(currentChapter + 1);
      setReadingProgress(0);
    }
  };

  const addBookmark = () => {
    const bookmark = {
      chapter: currentChapter,
      chapterTitle: chapters[currentChapter - 1]?.title,
      page: currentPage,
      timestamp: new Date().toISOString()
    };
    try {
      const bookmarks = JSON.parse(localStorage.getItem('huki_bookmarks') || '[]');
      bookmarks.push(bookmark);
      localStorage.setItem('huki_bookmarks', JSON.stringify(bookmarks));
      // Show inline feedback (no toast needed since we use ReaderContext now)
      const btn = document.activeElement;
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined text-base text-[#006953]">check</span><span>Đã lưu!</span>';
        setTimeout(() => { btn.innerHTML = original; }, 1500);
      }
    } catch (e) {
      console.error('Bookmark failed:', e);
    }
  };

  return (
    <div className={`h-screen flex flex-col transition-colors duration-300 overflow-hidden ${themeClasses[theme]}`}>
      {/* Dynamic DRM Watermark Layer */}
      <div className="fixed inset-0 drm-watermark-grid pointer-events-none z-30 opacity-30 flex items-center justify-center">
        <span className="transform -rotate-12 text-xs font-mono text-[#ac2c19]/40 tracking-widest">
          HUKI CORE DRM PROTECTED • ID: #VN-88482 • kien***@gmail.com
        </span>
      </div>

      {/* Reader Top Bar */}
      <header className={`h-16 px-4 md:px-8 border-b flex items-center justify-between z-40 shrink-0 ${cardThemeClasses[theme]}`}>
        <div className="flex items-center gap-3">
          <Link
            to="/book/atomic-habits"
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-black/5"
            title="Quay lại Chi tiết Sách"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span className="hidden sm:inline">Chi tiết</span>
          </Link>
          <Link
            to="/library"
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg hover:bg-black/5"
            title="Mở Tủ Sách"
          >
            <span className="material-symbols-outlined text-lg">local_library</span>
            <span className="hidden md:inline">Tủ sách</span>
          </Link>
          <div className="h-4 w-px bg-[#e8e5df]" aria-hidden="true"></div>
          <div className="max-w-xs md:max-w-md truncate">
            <h1 className="font-bold text-xs md:text-sm truncate">Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ</h1>
            <p className="text-[10px] text-[#6b7280] truncate">James Clear • Bản quyền HUKI DRM</p>
          </div>
        </div>

        {/* Center: TOC Toggle */}
        <button
          onClick={() => setShowToc(!showToc)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#e8e5df] text-xs font-semibold hover:bg-black/5"
          aria-expanded={showToc}
          aria-label="Mở mục lục"
        >
          <span className="material-symbols-outlined text-base text-[#006953]">menu_book</span>
          <span className="hidden sm:inline">Mục Lục Chương</span>
        </button>

        {/* Right Controls: Theme & Font Size */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/5 p-1 rounded-lg" role="radiogroup" aria-label="Chọn theme">
            <button
              onClick={() => setTheme('warm')}
              className={`w-5 h-5 rounded-full bg-[#f8f6f1] border mr-1 ${theme === 'warm' ? 'ring-2 ring-[#ac2c19]' : ''}`}
              title="Nền ấm"
              aria-label="Nền ấm"
              aria-checked={theme === 'warm'}
              role="radio"
            />
            <button
              onClick={() => setTheme('sepia')}
              className={`w-5 h-5 rounded-full bg-[#f4ecd8] border mr-1 ${theme === 'sepia' ? 'ring-2 ring-[#ac2c19]' : ''}`}
              title="Nền Sepia"
              aria-label="Nền Sepia"
              aria-checked={theme === 'sepia'}
              role="radio"
            />
            <button
              onClick={() => setTheme('dark')}
              className={`w-5 h-5 rounded-full bg-[#141d1c] border ${theme === 'dark' ? 'ring-2 ring-[#94f5d6]' : ''}`}
              title="Nền Tối (Dark mode)"
              aria-label="Nền Tối"
              aria-checked={theme === 'dark'}
              role="radio"
            />
          </div>

          <div className="hidden sm:flex items-center border border-[#e8e5df] rounded-lg">
            <button
              onClick={() => changeFontSize(-1)}
              className="px-2 py-1 text-xs font-bold hover:bg-black/5"
              aria-label="Giảm cỡ chữ"
            >
              A-
            </button>
            <span className="px-2 text-xs font-mono" aria-live="polite">{fontSize}px</span>
            <button
              onClick={() => changeFontSize(1)}
              className="px-2 py-1 text-xs font-bold hover:bg-black/5"
              aria-label="Tăng cỡ chữ"
            >
              A+
            </button>
          </div>
        </div>
      </header>

      {/* Main Reading Canvas */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* TOC Drawer */}
        {showToc && (
          <aside className={`absolute inset-y-0 left-0 w-80 shadow-2xl z-50 border-r p-4 overflow-y-auto ${cardThemeClasses[theme]}`} aria-label="Mục lục tác phẩm">
            <div className="flex items-center justify-between pb-3 border-b mb-3">
              <h3 className="font-bold text-sm">Mục Lục Tác Phẩm</h3>
              <button
                onClick={() => setShowToc(false)}
                className="p-1 hover:bg-black/5 rounded"
                aria-label="Đóng mục lục"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="space-y-1 text-xs">
              {chapters.map((chapterData, idx) => (
                <button
                  key={idx}
                  onClick={() => goToChapter(idx)}
                  className={`w-full text-left p-2.5 rounded-lg transition-colors ${
                    currentChapter === idx + 1 ? 'bg-[#006953] text-white font-bold' : 'hover:bg-black/5'
                  }`}
                  aria-current={currentChapter === idx + 1 ? 'true' : 'false'}
                >
                  <span className="block">Chương {idx + 1}: {chapterData.title}</span>
                  <span className={`text-[10px] mt-1 block ${currentChapter === idx + 1 ? 'text-white/70' : 'text-[#6b7280]'}`}>
                    {chapterData.pages} trang
                  </span>
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* Reading Text */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-10 flex justify-center">
          <article className={`max-w-3xl w-full p-8 md:p-14 rounded-3xl shadow-sm border transition-all ${cardThemeClasses[theme]}`}>
            <div className="text-center pb-8 mb-8 border-b border-[#e8e5df]">
              <span className="text-xs uppercase tracking-widest text-[#ac2c19] font-bold">Chương {currentChapter}</span>
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold mt-2">
                {chapters[currentChapter - 1]?.title || `Nội Dung Chi Tiết Chương ${currentChapter}`}
              </h2>
              <p className="text-xs text-[#6b7280] mt-2">
                Thời gian đọc ước tính: {Math.round(chapters[currentChapter - 1]?.pages * 1.5 || 12)} phút • Trang {currentPage}/{TOTAL_PAGES}
              </p>
            </div>

            <div
              className="font-editorial space-y-6 leading-relaxed"
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
            >
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#ac2c19] first-letter:mr-2 first-letter:float-left">
                Vào năm 2003, số phận của Hiệp hội Đua xe đạp Chuyên nghiệp Anh Quốc (British Cycling) đã thay đổi mãi mãi. Tổ chức này vốn đã trải qua gần một thế kỷ với thành tích vô cùng mờ nhạt: kể từ năm 1908, các tay đua người Anh chỉ giành được đúng một huy chương vàng duy nhất tại Thế vận hội Olympic.
              </p>

              <p>
                Tình hình tồi tệ đến mức một trong những nhà sản xuất xe đạp hàng đầu châu Âu đã từ chối bán xe cho đội tuyển Anh vì họ lo sợ hình ảnh thương hiệu sẽ bị tổn hại nếu các vận động viên khác nhìn thấy người Anh dùng đồ của mình.
              </p>

              <blockquote className="my-6 p-6 bg-black/5 border-l-4 border-[#ac2c19] rounded-r-xl italic font-serif">
                "Bạn không vươn lên tới tầm của các mục tiêu bạn đặt ra. Bạn rơi xuống bằng đúng mức của các hệ thống bạn duy trì."
                <footer className="not-italic text-xs text-[#6b7280] mt-2 font-sans font-semibold">— James Clear, Trích Atomic Habits</footer>
              </blockquote>

              <p>
                Sau đó, Dave Brailsford được thuê về làm Giám đốc Hiệu suất. Khác với những huấn luyện viên trước đây, Brailsford có một triết lý cam kết sắt đá với chiến lược mà ông gọi là <em>"sự tích lũy của những lợi ích nhỏ li ti" (the aggregation of marginal gains)</em>.
              </p>

              <p>
                Thay vì tìm kiếm một bước đột phá to lớn, Brailsford và đội ngũ của ông đã dành hàng trăm giờ đồng hồ để săn lùng những cải tiến nhỏ nhất có thể — từ việc sơn lại đội xe để tiết kiệm 50 gram, đến việc thử nghiệm nhiều loại nệm khác nhau để các vận động viên có được giấc ngủ tốt nhất khi đi thi đấu.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#e8e5df] flex items-center justify-between text-xs">
              <button
                onClick={addBookmark}
                className="flex items-center gap-1 px-4 py-2 rounded-xl border hover:bg-black/5 font-semibold"
                aria-label={`Đánh dấu trang tại Chương ${currentChapter}, Trang ${currentPage}`}
              >
                <span className="material-symbols-outlined text-base text-[#f59e0b]">bookmark</span>
                <span>Đánh dấu trang</span>
              </button>
              <button
                onClick={goNextChapter}
                disabled={currentChapter >= chapters.length}
                className="bg-[#ac2c19] text-white px-5 py-2 rounded-xl font-bold hover:bg-[#8e1404] transition-colors shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Chương Tiếp Theo →
              </button>
            </div>
          </article>
        </main>
      </div>

      {/* Reader Bottom Progress Bar */}
      <footer className={`h-12 px-6 border-t flex items-center justify-between text-xs shrink-0 z-40 ${cardThemeClasses[theme]}`}>
        <span>
          Trang <strong>{currentPage}</strong> / {TOTAL_PAGES}
        </span>
        <div className="w-1/3 bg-black/10 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#006953] h-full rounded-full transition-all duration-300"
            style={{ width: `${Math.round(readingProgress)}%` }}
          ></div>
        </div>
        <span className="font-bold text-[#006953]" aria-live="polite">
          Tiến độ {Math.round(readingProgress)}%
        </span>
      </footer>
    </div>
  );
}
