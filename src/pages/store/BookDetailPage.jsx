import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

export default function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const [selectedFormat, setSelectedFormat] = useState('ebook'); // 'physical' | 'ebook' | 'hybrid'
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState('I');
  const [previewTheme, setPreviewTheme] = useState('cream'); // 'cream' | 'white' | 'dark'
  const [previewFontSize, setPreviewFontSize] = useState('normal'); // 'small' | 'normal' | 'large'
  const [activeTab, setActiveTab] = useState('intro');
  const [reviewFilter, setReviewFilter] = useState('all');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLJxGEmdyoWHJaML4r0fjhy-pwbtgp7K9qLyLsNNwNW286Ktk5gQ-3VewcqEla5ymD3ZNzwg7t1y-2PsIQb7yPIkcGwQuERA0Itq1qT5O14aEGSG876FleaCfm62Nj1OzUPgxPhlX-QKiAyyYKMfpj0ngsjKpXuJNURlFyrrOkB5mNkkWUW3yBSioWXpa0PnnvHWBhGsbkGPa8eMhu8Bv7eGGni1sRI3qinMFFmeNBDbZQfyyZB0ubsA",
      alt: "Bìa chính Atomic Habits bản tiếng Việt"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj7Uoz0Mb3_fcT5VLAoXU9AjGiYTdW6WZ7UlKYcnJDfCXakuSiZVEhCMWVG6mgJOdXRZLqbfeNhhiRnWBa2OmK4KicfukXJjsygPyeJaHZXbljzlMYsp91yR1VJkdjSr_5SRe0uUfdq59RctidVJtt91SEUVzgPhu9u9aZ9LWXRNqj4xH3QyD3emB4MWxbdYcQN5-wF0Lri4acw1RwWWpZ91idDGwfRU3T4HArg_SucXZHNtUzCzJ-YQ",
      alt: "Mặt trước sách chi tiết"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxTvTjXkDmEm9Utxrnrwu66hT6XyVudAI4hcF73tUhbcGdFBRBXmj48RZBk433GBrJQEp_5aSBdlUt3SzQ8GENVSHH5hXEgcqc-9kTjrV_C-_h1blVJJ6oHyxtUuFWyLqM1A_Voh9SpRWjL7JnEZ-yZc5a6kr9zO-va544ujVME3npmP6mD2xM_ZZlHk8ueYyQVOR2NF9sPUNKxfjC3wHt-HbxAWUVLCZq1k6CZOH4amEPzDc9RAopTA",
      alt: "Mặt sau sách và nhận xét chuyên gia"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBelU1aJDH4GJ2Ng31Gyjh_GFJUFeZDnCFYU9JPqMZ4S_olnH3Gtk2IfcC3Xmay-YTAksXlxMFL7cNsvIpAXrzTW1YXRmUBCB3zup7inbahLBvC1Qu4N42327by7TBjCw9gFZ8H2buHfthyd8PhJDnIjw4xvuNjXYM9P3mN_CPfJrmCjZVyv-aoSXlgyWcljdglSTL83As2SJeQ-lqJTopoJRaU7pxetd4g113SgIGmrFzK2g_Gc-F5qw",
      alt: "Trang đôi minh họa biểu đồ thói quen"
    }
  ];

  const formatData = {
    ebook: {
      name: 'EBOOK BẢN QUYỀN DRM',
      price: 79000,
      originalPrice: 119000,
      discount: '-34%',
      badge: 'ĐỌC NGAY',
      points: '790 HukiXu',
      delivery: 'Kích hoạt tức thì vào Tủ Sách HUKI',
      savings: 'Tiết kiệm 40.000đ (-34%)',
      features: [
        'Đọc ngay tức thì trên HUKI App & Web Reader',
        'Lưu trữ trọn đời trong Tủ Sách cá nhân',
        'Đồng bộ ghi chú, highlight trên 5 thiết bị',
        'Hỗ trợ chế độ đọc Dark Mode & tùy chỉnh font chữ'
      ]
    },
    physical: {
      name: 'SÁCH GIẤY (BÌA MỀM)',
      price: 129000,
      originalPrice: 189000,
      discount: '-32%',
      badge: 'GIAO TẬN TAY',
      points: '1.290 HukiXu',
      delivery: 'Giao trong 2-3 ngày làm việc',
      savings: 'Tiết kiệm 60.000đ (-32%)',
      features: [
        'Bìa mềm cán mờ, giấy xốp ivory chống lóa',
        'Tặng kèm bookmark độc quyền HUKI + Alpha Books',
        'Đóng gói hộp carton 3 lớp chống móp méo',
        'Bảo hành đổi trả miễn phí trong 7 ngày'
      ]
    },
    hybrid: {
      name: 'COMBO HYBRID (GIẤY + EBOOK)',
      price: 159000,
      originalPrice: 308000,
      discount: '-49%',
      badge: 'TIẾT KIỆM 49%',
      points: '1.590 HukiXu',
      delivery: 'Nhận Ebook ngay + Giao Sách Giấy tận nơi',
      savings: 'Tiết kiệm 149.000đ (-49%)',
      features: [
        'Sách giấy cao cấp gửi tận nhà qua đơn vị vận chuyển',
        'Kích hoạt ngay Ebook DRM trong Tủ Sách để đọc ngay',
        'Trọn bộ giải pháp đọc kép: sưu tầm & tiện lợi di động',
        'Nhận gấp đôi điểm thưởng HukiXu'
      ]
    }
  };

  const currentPriceInfo = formatData[selectedFormat];

  const handleAddToCart = () => {
    addItem({
      id: `atomic-habits-${selectedFormat}`,
      title: 'Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ',
      author: 'James Clear',
      price: currentPriceInfo.price,
      originalPrice: currentPriceInfo.originalPrice,
      format: selectedFormat === 'ebook' ? 'Ebook DRM' : selectedFormat === 'physical' ? 'Sách Giấy' : 'Combo Hybrid',
      image: images[0].src,
      quantity: quantity
    });
    showToast(`Đã thêm "Atomic Habits (${formatData[selectedFormat].name})" vào giỏ hàng!`, 'success');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-surface text-on-surface font-body-md min-h-screen">
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-1.5 text-xs text-on-surface-variant">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[15px]">home</span>
              Trang chủ
            </Link>
            <span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
            <Link className="hover:text-primary transition-colors" to="/books">Sách</Link>
            <span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
            <Link className="hover:text-primary transition-colors" to="/books?cat=self-help">Phát triển bản thân</Link>
            <span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
            <span className="text-on-surface font-medium truncate max-w-[280px]">Atomic Habits</span>
          </nav>
        </div>

        {/* Top Product Hero Section */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Left Column: Image Gallery & Previews */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <div className="relative bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30 shadow-sm flex flex-col items-center group">
                <div className="relative w-[260px] aspect-[2/3] rounded-lg overflow-hidden shadow-xl spine-crease transition-transform duration-300 group-hover:scale-[1.01]">
                  <img
                    className="w-full h-full object-cover transition-all duration-300"
                    alt={images[selectedImageIndex].alt}
                    src={images[selectedImageIndex].src}
                  />
                  <div className="absolute bottom-3 right-3 bg-inverse-surface/80 text-inverse-on-surface backdrop-blur-sm px-2.5 py-1 rounded-full text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                    Phóng to
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2 w-full mt-4 px-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden p-0.5 bg-surface-container-lowest transition-all focus:outline-none ${
                        selectedImageIndex === idx
                          ? 'border-2 border-primary shadow-xs'
                          : 'border border-outline-variant/50 hover:border-primary/60 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img className="w-full aspect-[2/3] object-cover rounded" alt={img.alt} src={img.src} />
                      {selectedImageIndex === idx && (
                        <span className="absolute inset-0 bg-primary/10 pointer-events-none"></span>
                      )}
                    </button>
                  ))}
                </div>

                <Link
                  to="/reader"
                  className="w-full mt-4 py-2.5 px-4 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 font-medium text-sm shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                  Đọc thử nội dung (20 trang mẫu)
                </Link>
              </div>

              <div className="flex items-center justify-between text-xs text-on-surface-variant px-1">
                <span className="flex items-center gap-1.5 font-medium text-primary">
                  <span className="material-symbols-outlined text-[16px]">security</span>
                  Bảo vệ tác quyền bởi HUKI DRM 2026
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      showToast('Đã sao chép liên kết sách vào bộ nhớ tạm!', 'info');
                    }}
                    className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant hover:text-on-surface"
                    title="Chia sẻ sách"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </button>
                  <button
                    onClick={() => showToast('Cảm ơn bạn! Báo cáo đã gửi tới ban kiểm duyệt.', 'info')}
                    className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant hover:text-on-surface"
                    title="Báo cáo sai sót"
                  >
                    <span className="material-symbols-outlined text-[18px]">flag</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Column: Metadata, Formats, Author */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center flex-wrap gap-2">
                <span className="bg-[#FEA619]/15 text-[#855300] dark:text-[#FEA619] text-xs px-2.5 py-0.5 rounded-full font-bold tracking-wide flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                  BÁN CHẠY #1 TỦ SÁCH KỸ NĂNG
                </span>
                <span className="bg-primary/10 text-primary text-xs px-2.5 py-0.5 rounded-full font-semibold tracking-wide flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">devices</span>
                  CÓ EBOOK &amp; SÁCH NÓI
                </span>
                <span className="bg-surface-container text-on-surface-variant text-xs px-2.5 py-0.5 rounded-full font-medium">
                  Tâm Lý - Phát Triển Bản Thân
                </span>
              </div>

              <div>
                <h1 className="font-editorial text-2xl lg:text-3xl font-bold text-on-surface tracking-tight leading-snug">
                  Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ
                </h1>
                <p className="text-sm text-on-surface-variant mt-1.5 flex items-center flex-wrap gap-1.5">
                  <span>Tác giả:</span>
                  <Link className="text-primary font-semibold hover:underline" to="/author/james-clear">
                    James Clear
                  </Link>
                  <span className="text-outline-variant/60">•</span>
                  <span>Dịch giả:</span>
                  <span className="text-on-surface font-medium">Đỗ Thủy</span>
                </p>
              </div>

              <div className="flex items-center flex-wrap gap-4 text-xs border-b border-outline-variant/30 pb-3">
                <div className="flex items-center gap-1">
                  <div className="flex text-[#FEA619]">
                    <span className="material-symbols-outlined text-[16px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-icon">star_half</span>
                  </div>
                  <span className="font-bold text-on-surface ml-0.5 text-sm">4.8</span>
                </div>
                <span className="text-outline-variant/60">|</span>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-on-surface-variant hover:text-primary transition-colors text-xs"
                >
                  <strong className="text-on-surface">1.248</strong> đánh giá
                </button>
                <span className="text-outline-variant/60">|</span>
                <span className="text-on-surface-variant text-xs">
                  Đã bán <strong className="text-on-surface">8.620+</strong> bản
                </span>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                Dù mục tiêu của bạn là gì, <em className="font-serif font-medium text-on-surface">Atomic Habits</em> cung cấp một khuôn khổ đã được kiểm chứng để cải thiện mỗi ngày 1%. Bạn sẽ học cách hệ thống hóa các thói quen tốt và loại bỏ các thói quen xấu với 4 quy luật hành vi nền tảng.
              </p>

              {/* Spec Attributes Box */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/30 text-xs">
                <div className="flex items-center justify-between pr-2">
                  <span className="text-on-surface-variant">Nhà xuất bản:</span>
                  <span className="font-medium text-on-surface">NXB Thế Giới</span>
                </div>
                <div className="flex items-center justify-between pl-2 border-l border-outline-variant/30">
                  <span className="text-on-surface-variant">Nhà phát hành:</span>
                  <Link to="/shop/alpha-books" className="font-medium text-primary hover:underline">Alpha Books Official</Link>
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

              {/* 3 Formats Selector */}
              <div className="mt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                  Chọn hình thức phát hành:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Option 1: Ebook */}
                  <div
                    onClick={() => setSelectedFormat('ebook')}
                    className={`rounded-xl p-3 relative cursor-pointer transition-all flex flex-col justify-between ${
                      selectedFormat === 'ebook'
                        ? 'border-2 border-primary bg-primary/5 shadow-xs'
                        : 'border border-outline-variant/60 bg-surface-container-lowest hover:border-outline'
                    }`}
                  >
                    {selectedFormat === 'ebook' && (
                      <div className="absolute -top-2.5 right-2 bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5 shadow-2xs">
                        <span className="material-symbols-outlined text-[10px]">check</span>
                        ĐANG CHỌN
                      </div>
                    )}
                    <div>
                      <span className={`text-xs font-bold block flex items-center gap-1 ${selectedFormat === 'ebook' ? 'text-primary' : 'text-on-surface'}`}>
                        EBOOK
                        <span className="material-symbols-outlined text-[13px] text-primary">bolt</span>
                      </span>
                      <span className="text-[10px] text-on-surface-variant line-clamp-1 mt-0.5">Đọc tức thì trên app & web</span>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-outline-variant/20 flex items-baseline justify-between">
                      <span className="text-sm font-bold text-primary">79.000đ</span>
                      <span className="text-[10px] text-outline line-through">119k</span>
                    </div>
                  </div>

                  {/* Option 2: Physical Book */}
                  <div
                    onClick={() => setSelectedFormat('physical')}
                    className={`rounded-xl p-3 relative cursor-pointer transition-all flex flex-col justify-between ${
                      selectedFormat === 'physical'
                        ? 'border-2 border-primary bg-primary/5 shadow-xs'
                        : 'border border-outline-variant/60 bg-surface-container-lowest hover:border-outline'
                    }`}
                  >
                    {selectedFormat === 'physical' && (
                      <div className="absolute -top-2.5 right-2 bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5 shadow-2xs">
                        <span className="material-symbols-outlined text-[10px]">check</span>
                        ĐANG CHỌN
                      </div>
                    )}
                    <div>
                      <span className={`text-xs font-bold block ${selectedFormat === 'physical' ? 'text-primary' : 'text-on-surface'}`}>
                        SÁCH GIẤY
                      </span>
                      <span className="text-[10px] text-on-surface-variant line-clamp-1 mt-0.5">Bìa mềm ivory 320 trang</span>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-outline-variant/20 flex items-baseline justify-between">
                      <span className="text-sm font-bold text-on-surface">129.000đ</span>
                      <span className="text-[10px] text-outline line-through">189k</span>
                    </div>
                  </div>

                  {/* Option 3: Hybrid Combo */}
                  <div
                    onClick={() => setSelectedFormat('hybrid')}
                    className={`rounded-xl p-3 relative cursor-pointer transition-all flex flex-col justify-between ${
                      selectedFormat === 'hybrid'
                        ? 'border-2 border-[#855300] bg-[#FEA619]/10 shadow-xs'
                        : 'border border-outline-variant/60 bg-surface-container-lowest hover:border-outline'
                    }`}
                  >
                    {selectedFormat === 'hybrid' && (
                      <div className="absolute -top-2.5 right-2 bg-[#855300] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5 shadow-2xs">
                        <span className="material-symbols-outlined text-[10px]">check</span>
                        ĐANG CHỌN
                      </div>
                    )}
                    <div>
                      <span className={`text-xs font-bold block flex items-center gap-1 ${selectedFormat === 'hybrid' ? 'text-[#855300]' : 'text-on-surface'}`}>
                        HYBRID
                        <span className="text-[9px] bg-[#FEA619] text-white px-1 rounded font-black">-49%</span>
                      </span>
                      <span className="text-[10px] text-on-surface-variant line-clamp-1 mt-0.5">Giấy + Ebook trọn đời</span>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-outline-variant/20 flex items-baseline justify-between">
                      <span className="text-sm font-bold text-[#855300]">159.000đ</span>
                      <span className="text-[10px] text-outline line-through">308k</span>
                    </div>
                  </div>
                </div>

                {/* Format Benefits List */}
                <div className="mt-3 bg-primary/5 border border-primary/20 rounded-xl p-3">
                  <span className="text-xs font-bold text-primary block mb-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                    Đặc quyền hình thức: {currentPriceInfo.name}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs text-on-surface">
                    {currentPriceInfo.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-primary flex-shrink-0">check_circle</span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Buy Box & Publisher Card */}
            <div className="col-span-12 lg:col-span-3">
              <div className="sticky top-20 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm flex flex-col gap-4">

                {/* Price Display */}
                <div className="border-b border-outline-variant/20 pb-3">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant mb-1">
                    <span>Đang chọn:</span>
                    <span className="font-bold text-primary uppercase">{selectedFormat}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {(currentPriceInfo.price * quantity).toLocaleString('vi-VN')}đ
                    </span>
                    <span className="text-xs text-outline line-through">
                      {(currentPriceInfo.originalPrice * quantity).toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="bg-primary/10 text-primary text-[11px] px-2 py-0.5 rounded font-semibold">
                      {currentPriceInfo.savings}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-medium">Tích {currentPriceInfo.points}</span>
                  </div>
                </div>

                {/* Quantity for Physical/Hybrid */}
                <div className="flex items-center justify-between text-xs text-on-surface">
                  <span className="font-medium text-on-surface-variant">Số lượng:</span>
                  <div className="flex items-center border border-outline-variant/50 rounded-lg overflow-hidden bg-surface-container-low">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="w-7 h-7 flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30"
                    >
                      <span className="material-symbols-outlined text-[14px]">remove</span>
                    </button>
                    <span className="w-8 text-center font-bold text-xs">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  </div>
                </div>

                {/* Delivery Note */}
                <div className="bg-surface-container-low p-2.5 rounded-xl flex items-center gap-2 text-xs text-on-surface">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px]">
                      {selectedFormat === 'ebook' ? 'bolt' : 'local_shipping'}
                    </span>
                  </div>
                  <div>
                    <strong className="block text-[12px] font-semibold">{currentPriceInfo.delivery}</strong>
                    <span className="text-on-surface-variant text-[11px]">Hỗ trợ kỹ thuật 24/7 từ HUKI</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleBuyNow}
                    className="w-full h-11 bg-theme-primary hover:bg-theme-primary-hover text-white rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_cart_checkout</span>
                    Mua Ngay
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleAddToCart}
                      className="h-9 rounded-xl border border-primary text-primary hover:bg-primary/5 transition-colors font-semibold text-xs flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                      Thêm Giỏ Hàng
                    </button>
                    <Link
                      to="/reader"
                      className="h-9 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium text-xs flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                      Đọc Thử
                    </Link>
                  </div>

                  <button
                    onClick={() => {
                      setIsWishlisted(!isWishlisted);
                      showToast(
                        !isWishlisted
                          ? 'Đã thêm Atomic Habits vào Danh sách yêu thích!'
                          : 'Đã xóa khỏi Danh sách yêu thích.',
                        'info'
                      );
                    }}
                    className={`w-full py-1.5 text-xs transition-colors flex items-center justify-center gap-1 font-medium ${
                      isWishlisted ? 'text-[#AC2C19]' : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isWishlisted ? 'favorite' : 'favorite_border'}
                    </span>
                    {isWishlisted ? 'Đã lưu vào danh sách yêu thích' : 'Thêm vào danh sách ước muốn'}
                  </button>
                </div>

                {/* Publisher Card */}
                <div className="border-t border-outline-variant/20 pt-3 bg-surface-container-low/50 -mx-4 -mb-4 p-4 rounded-b-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs">
                      α
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs text-on-surface">Alpha Books Official</span>
                        <span className="material-symbols-outlined text-[14px] text-primary" title="Cửa hàng chính hãng">verified</span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant block">Nhà phát hành chính thức</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-outline-variant/20">
                    <div className="text-[11px] text-on-surface-variant">
                      Đánh giá: <strong className="text-on-surface">4.9 / 5.0</strong>
                    </div>
                    <div className="text-[11px] text-on-surface-variant text-right">
                      Theo dõi: <strong className="text-on-surface">12,8K</strong>
                    </div>
                  </div>
                  <Link
                    to="/shop/alpha-books"
                    className="w-full mt-2 py-1.5 rounded-lg border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container transition-colors text-xs font-semibold text-on-surface flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[15px]">storefront</span>
                    Xem Gian Hàng Alpha Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky In-Page Navigation Bar */}
        <div className="sticky top-16 z-20 bg-surface-container-lowest border-y border-outline-variant/30 shadow-2xs">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 text-xs sm:text-sm font-semibold overflow-x-auto no-scrollbar">
            <button
              onClick={() => scrollToSection('intro')}
              className={`py-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'intro'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Giới Thiệu Sách
            </button>
            <button
              onClick={() => scrollToSection('toc')}
              className={`py-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'toc'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">format_list_bulleted</span>
              Mục Lục (20 Chương)
            </button>
            <button
              onClick={() => scrollToSection('preview')}
              className={`py-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'preview'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">chrome_reader_mode</span>
              Đọc Thử Mẫu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className={`py-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'reviews'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">rate_review</span>
              Đánh Giá Độc Giả (1.248)
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className={`py-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'community'
                  ? 'border-primary text-primary font-bold'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">forum</span>
              Cộng Đồng Thảo Luận
            </button>
          </div>
        </div>

        {/* Content Tabs & Sidebar */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">

            {/* Section 1: Intro */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-32" id="intro">
              <h2 className="font-editorial text-xl sm:text-2xl text-on-surface font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Giới Thiệu Sách
              </h2>
              <div className="prose max-w-none text-on-surface leading-relaxed flex flex-col gap-4 text-sm sm:text-base">
                <p>
                  Người ta thường tin rằng khi muốn thay đổi cuộc đời, bạn cần phải nghĩ những điều lớn lao. Nhưng chuyên gia thói quen lừng danh thế giới <strong>James Clear</strong> đã chứng minh một chân lý hoàn toàn trái ngược: <em>những thay đổi thực sự bắt nguồn từ hiệu ứng tích lũy của hàng trăm quyết định nhỏ nhặt</em> — từ việc chống đẩy hai cái mỗi ngày, thức dậy sớm hơn năm phút cho đến việc đọc một trang sách trước khi ngủ. Ông gọi chúng là những <strong>Thói Quen Nguyên Tử (Atomic Habits)</strong>.
                </p>
                <h3 className="font-editorial text-lg font-bold text-on-surface mt-2">
                  Thay đổi nhỏ, kết quả lớn – Sức mạnh của 1% mỗi ngày
                </h3>
                <p>
                  Nếu bạn có thể trở nên tốt hơn 1% mỗi ngày trong suốt một năm, cuối cùng bạn sẽ trở nên tốt hơn gấp <strong>37 lần</strong>. Ngược lại, nếu bạn tệ đi 1% mỗi ngày, bạn sẽ suy giảm gần như về con số 0. Những thói quen tí hon không tạo ra khác biệt rõ rệt trong những ngày đầu tiên, nhưng theo thời gian, chúng tạo ra bước ngoặt phi thường giữa việc bạn là ai và bạn có thể trở thành ai.
                </p>

                <div className="bg-surface-container-low border-l-4 border-primary p-4 rounded-r-xl my-2">
                  <p className="font-serif italic text-on-surface text-base sm:text-lg leading-snug">
                    "Bạn không vươn lên tới tầm của những mục tiêu bạn đặt ra. Bạn tụt xuống bằng đúng mức của những hệ thống bạn duy trì."
                  </p>
                  <span className="block mt-2 text-xs font-bold text-primary">— James Clear, Trích Atomic Habits</span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-on-surface mt-2">
                  Xây dựng hệ thống thay vì chỉ đặt mục tiêu
                </h3>
                <p>
                  Trong cuốn sách này, bạn sẽ không tìm thấy những lời khuyên động lực sáo rỗng. Thay vào đó, tác giả đưa ra một hệ thống thực hành 4 bước dựa trên khoa học thần kinh và tâm lý học nhận thức:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-on-surface text-sm">
                  <li><strong>Quy luật 1:</strong> Khiến nó trở nên rõ ràng (Make it obvious).</li>
                  <li><strong>Quy luật 2:</strong> Khiến nó trở nên hấp dẫn (Make it attractive).</li>
                  <li><strong>Quy luật 3:</strong> Khiến nó trở nên dễ dàng (Make it easy).</li>
                  <li><strong>Quy luật 4:</strong> Khiến nó đem lại cảm giác thỏa mãn (Make it satisfying).</li>
                </ul>

                <div className="bg-[#FEA619]/10 border border-[#FEA619]/30 rounded-xl p-4 mt-2">
                  <h4 className="text-sm font-bold text-[#855300] flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                    Cuốn sách này phù hợp với bạn nếu...
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-on-surface">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">done</span>
                      <span>Bạn đã thử nhiều lần xây dựng thói quen tốt nhưng thường bỏ cuộc sau vài tuần.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">done</span>
                      <span>Bạn muốn vượt qua trạng thái trì hoãn và thiết lập kỷ luật tự giác lâu dài.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">done</span>
                      <span>Bạn là nhà quản lý, lãnh đạo muốn xây dựng văn hóa đội ngũ năng suất vượt trội.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">done</span>
                      <span>Bạn muốn tìm lại sự cân bằng và định hình danh tính tích cực của bản thân.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: TOC */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-32" id="toc">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-editorial text-xl sm:text-2xl text-on-surface font-bold flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                  Mục Lục Sách
                </h2>
                <span className="text-xs text-on-surface-variant font-medium">Tổng số: 6 Phần • 20 Chương</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {/* Chapter Part 1 */}
                <div className="border border-outline-variant/40 rounded-xl p-3 hover:border-primary transition-colors">
                  <div
                    onClick={() => setExpandedSection(expandedSection === 'I' ? '' : 'I')}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">I</span>
                      <span className="text-sm font-bold text-on-surface">Các Nguyên Tắc Cơ Bản: Vì Sao Những Thay Đổi Nhỏ Tạo Khác Biệt Lớn</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline transition-transform">
                      {expandedSection === 'I' ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                  {expandedSection === 'I' && (
                    <div className="mt-2.5 pl-9 text-xs text-on-surface-variant space-y-1.5 border-t border-outline-variant/20 pt-2">
                      <p className="hover:text-primary cursor-pointer">• Chương 1: Sức mạnh bất ngờ của thói quen tí hon (1% mỗi ngày)</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 2: Thói quen định hình danh tính của bạn như thế nào</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 3: Bốn bước đơn giản để xây dựng thói quen tốt hơn</p>
                    </div>
                  )}
                </div>

                {/* Chapter Part 2 */}
                <div className="border border-outline-variant/40 rounded-xl p-3 hover:border-primary transition-colors">
                  <div
                    onClick={() => setExpandedSection(expandedSection === 'II' ? '' : 'II')}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">II</span>
                      <span className="text-sm font-bold text-on-surface">Quy Luật Thứ Nhất: Làm Cho Nó Rõ Ràng (Make it obvious)</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      {expandedSection === 'II' ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                  {expandedSection === 'II' && (
                    <div className="mt-2.5 pl-9 text-xs text-on-surface-variant space-y-1.5 border-t border-outline-variant/20 pt-2">
                      <p className="hover:text-primary cursor-pointer">• Chương 4: Người đàn ông nhìn thấu sự việc</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 5: Cách tốt nhất để bắt đầu một thói quen mới: Ý định thực thi</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 6: Động lực được đánh giá quá cao; môi trường mới quyết định</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 7: Bí mật của sự tự chủ và kỷ luật</p>
                    </div>
                  )}
                </div>

                {/* Chapter Part 3 */}
                <div className="border border-outline-variant/40 rounded-xl p-3 hover:border-primary transition-colors">
                  <div
                    onClick={() => setExpandedSection(expandedSection === 'III' ? '' : 'III')}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">III</span>
                      <span className="text-sm font-bold text-on-surface">Quy Luật Thứ Hai: Làm Cho Nó Hấp Dẫn (Make it attractive)</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      {expandedSection === 'III' ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                  {expandedSection === 'III' && (
                    <div className="mt-2.5 pl-9 text-xs text-on-surface-variant space-y-1.5 border-t border-outline-variant/20 pt-2">
                      <p className="hover:text-primary cursor-pointer">• Chương 8: Cách làm một thói quen trở nên không thể cưỡng lại</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 9: Vai trò của gia đình và bạn bè trong định hình thói quen</p>
                    </div>
                  )}
                </div>

                {/* Chapter Part 4 */}
                <div className="border border-outline-variant/40 rounded-xl p-3 hover:border-primary transition-colors">
                  <div
                    onClick={() => setExpandedSection(expandedSection === 'IV' ? '' : 'IV')}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">IV</span>
                      <span className="text-sm font-bold text-on-surface">Quy Luật Thứ Ba: Làm Cho Nó Dễ Dàng (Quy tắc 2 phút)</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      {expandedSection === 'IV' ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                  {expandedSection === 'IV' && (
                    <div className="mt-2.5 pl-9 text-xs text-on-surface-variant space-y-1.5 border-t border-outline-variant/20 pt-2">
                      <p className="hover:text-primary cursor-pointer">• Chương 11: Bước chậm nhưng không bao giờ lùi bước</p>
                      <p className="hover:text-primary cursor-pointer">• Chương 13: Quy tắc 2 phút để đánh bại sự trì hoãn</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Section 3: Preview */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-32" id="preview">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h2 className="font-editorial text-xl sm:text-2xl text-on-surface font-bold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    Đọc Thử Bản Mẫu Miễn Phí
                  </h2>
                  <span className="text-xs text-on-surface-variant">Bản đọc thử được cấp phép chính thức bởi Alpha Books</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-surface-container rounded-lg p-0.5 text-xs">
                    <button
                      onClick={() => setPreviewFontSize('small')}
                      className={`px-2 py-1 rounded font-medium ${previewFontSize === 'small' ? 'bg-surface text-primary shadow-xs font-bold' : 'text-on-surface-variant'}`}
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setPreviewFontSize('normal')}
                      className={`px-2 py-1 rounded font-medium ${previewFontSize === 'normal' ? 'bg-surface text-primary shadow-xs font-bold' : 'text-on-surface-variant'}`}
                    >
                      A
                    </button>
                    <button
                      onClick={() => setPreviewFontSize('large')}
                      className={`px-2 py-1 rounded font-medium ${previewFontSize === 'large' ? 'bg-surface text-primary shadow-xs font-bold' : 'text-on-surface-variant'}`}
                    >
                      A+
                    </button>
                  </div>
                  <div className="flex items-center bg-surface-container rounded-lg p-0.5 text-xs">
                    <button
                      onClick={() => setPreviewTheme('cream')}
                      className={`px-2.5 py-1 rounded font-medium ${previewTheme === 'cream' ? 'bg-[#FAF8F3] text-[#23211E] shadow-xs font-bold' : 'text-on-surface-variant'}`}
                    >
                      Ngà
                    </button>
                    <button
                      onClick={() => setPreviewTheme('white')}
                      className={`px-2.5 py-1 rounded font-medium ${previewTheme === 'white' ? 'bg-white text-black shadow-xs font-bold' : 'text-on-surface-variant'}`}
                    >
                      Trắng
                    </button>
                    <button
                      onClick={() => setPreviewTheme('dark')}
                      className={`px-2.5 py-1 rounded font-medium ${previewTheme === 'dark' ? 'bg-[#1E1E1E] text-white shadow-xs font-bold' : 'text-on-surface-variant'}`}
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`border border-outline-variant/40 rounded-xl p-6 shadow-inner relative overflow-hidden transition-colors ${
                  previewTheme === 'cream'
                    ? 'bg-[#FAF8F3] text-[#23211E]'
                    : previewTheme === 'white'
                    ? 'bg-white text-gray-900'
                    : 'bg-[#1a1c1b] text-gray-100'
                }`}
              >
                <div className="absolute right-6 bottom-4 text-5xl font-editorial font-bold opacity-5 pointer-events-none select-none">
                  HUKI PREVIEW
                </div>
                <div className="max-w-[620px] mx-auto">
                  <div className="text-center mb-6 pb-3 border-b border-current/10">
                    <span className="text-[11px] uppercase tracking-widest opacity-70 font-semibold">Chương 1</span>
                    <h3 className="font-editorial text-xl font-bold mt-1">Sức Mạnh Bất Ngờ Của Thói Quen Tí Hon</h3>
                    <span className="text-xs opacity-60 italic">Trích trang 18 / 320</span>
                  </div>
                  <div
                    className={`space-y-4 font-serif text-justify leading-relaxed ${
                      previewFontSize === 'small' ? 'text-sm leading-6' : previewFontSize === 'large' ? 'text-lg leading-8' : 'text-base leading-7'
                    }`}
                  >
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

                <div className="mt-8 pt-4 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs opacity-70">Xem tiếp 18 trang đọc thử khác trên giao diện Web Reader</span>
                  <Link
                    to="/reader"
                    className="px-5 py-2 rounded-xl bg-primary hover:bg-[#00523c] text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">auto_stories</span>
                    Mở Reader Toàn Màn Hình
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 4: Reviews */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-32" id="reviews">
              <h2 className="font-editorial text-xl sm:text-2xl text-on-surface font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Đánh Giá Từ Độc Giả (1.248)
              </h2>

              <div className="grid grid-cols-12 gap-6 p-5 bg-surface-container-low rounded-xl border border-outline-variant/30 items-center">
                <div className="col-span-12 sm:col-span-4 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-outline-variant/30 pb-4 sm:pb-0">
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-on-surface leading-none">4.8</span>
                  <div className="flex text-[#FEA619] my-1.5">
                    <span className="material-symbols-outlined text-[18px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-icon">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-icon">star_half</span>
                  </div>
                  <span className="text-xs text-on-surface-variant">Dựa trên 1.248 nhận xét đã xác thực</span>
                </div>

                <div className="col-span-12 sm:col-span-8 flex flex-col gap-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-on-surface-variant font-medium">5 sao</span>
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <span className="w-10 text-on-surface-variant text-[11px] font-semibold">82%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-on-surface-variant font-medium">4 sao</span>
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-primary/70 h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                    <span className="w-10 text-on-surface-variant text-[11px] font-semibold">12%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-on-surface-variant font-medium">3 sao</span>
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-[#FEA619] h-full rounded-full" style={{ width: '4%' }}></div>
                    </div>
                    <span className="w-10 text-on-surface-variant text-[11px] font-semibold">4%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-on-surface-variant font-medium">2 sao</span>
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-outline-variant h-full rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="w-10 text-on-surface-variant text-[11px] font-semibold">1%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-on-surface-variant font-medium">1 sao</span>
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-[#AC2C19] h-full rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="w-10 text-on-surface-variant text-[11px] font-semibold">1%</span>
                  </div>
                </div>
              </div>

              {/* Review Filters */}
              <div className="flex items-center justify-between mt-4 pt-1 border-b border-outline-variant/30 pb-3 flex-wrap gap-2">
                <div className="flex items-center flex-wrap gap-1.5">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      reviewFilter === 'all' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    Tất cả (1.248)
                  </button>
                  <button
                    onClick={() => setReviewFilter('5star')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      reviewFilter === '5star' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    5 sao (1.023)
                  </button>
                  <button
                    onClick={() => setReviewFilter('ebook')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      reviewFilter === 'ebook' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    Đã mua Ebook (610)
                  </button>
                </div>
                <button
                  onClick={() => showToast('Tính năng gửi đánh giá sẽ kích hoạt sau khi đăng nhập!', 'info')}
                  className="px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors text-xs font-semibold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Viết Đánh Giá
                </button>
              </div>

              {/* Reviews Thread */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="border-b border-outline-variant/20 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <img className="w-8 h-8 rounded-full object-cover border border-outline-variant/40" alt="Đặng Thu Hà" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4IWSr-YOjJIKmklH-13MY_5ZVpUUwHxGOyKuoUIlf_r52rph3mQzl-zm4HVQANNa1wRkFJ2Y0zDLoSiJXGyTdTiQZBHLQyGnlgc4HiY1COHbkAkJtQuO_AqtzzZzcOSLqyv2zQFpMwvvJuWConFlAAylOguJ-FDQOuWo2nt21gZ8GMx7cK6bKW743GdAabzWvJxdlC0UrKPuWA2EtrKwbKN0V52ElUh4buGED8QplFiLNQuY-eogP-Q" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-on-surface">Đặng Thu Hà</span>
                          <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[11px]">verified</span> Đã mua Ebook
                          </span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">Tiến độ đọc: <strong className="text-primary">Đã đọc 100%</strong> • 3 ngày trước</span>
                      </div>
                    </div>
                    <div className="flex text-[#FEA619]">
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface mt-2 leading-relaxed">
                    Cuốn sách thay đổi hoàn toàn tư duy của mình về thói quen. Trước đây mình hay đặt mục tiêu tập gym 1 tiếng/ngày rồi chỉ duy trì được 1 tuần. Nhờ "quy tắc 2 phút" trong sách, mình đã bắt đầu từ 5 cái hít đất và duy trì được liên tục 4 tháng nay! Bản ebook trên HUKI đọc rất mượt, tính năng highlight đồng bộ tốt.
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-[11px] text-on-surface-variant">
                    <button className="hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">thumb_up</span> Hữu ích (84)
                    </button>
                    <button className="hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span> Phản hồi (6)
                    </button>
                  </div>
                </div>

                <div className="border-b border-outline-variant/20 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <img className="w-8 h-8 rounded-full object-cover border border-outline-variant/40" alt="Nguyễn Hoàng Long" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU9KUUh8Aile-oiE8e08_ey61pTu1CXGCiawMe-9cvLxrqBig5lWHmeNrKwElVni0IwWXPh1QF8PQgyKp90cZ_ngWz7rLLvV-jQ86C0GNTeFEDjQdAtLQHYDqq-SqPU0PRcziAq3EFW4Ve8nutl47piC3UiY1ecNJHReWO8YOL8JHHD4UXmC8cPVOz6m7rcgUgVSIYzqHyGSAbhezX-2m5SytWvA4Eg3AM9M5oOcwfr3ezvlSgxp3UDA" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-on-surface">Nguyễn Hoàng Long</span>
                          <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[11px]">verified</span> Đã mua Combo Hybrid
                          </span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">Tiến độ đọc: <strong className="text-primary">Đã đọc 75%</strong> • 1 tuần trước</span>
                      </div>
                    </div>
                    <div className="flex text-[#FEA619]">
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                      <span className="material-symbols-outlined text-[15px] fill-icon">star</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface mt-2 leading-relaxed">
                    Bản dịch của NXB Thế Giới và Alpha Books rất mượt, dịch thoát ý các thuật ngữ khoa học não bộ. Điểm thích nhất là sách có các bảng biểu tóm tắt cuối mỗi chương giúp tổng hợp nhanh kiến thức. Mua combo hybrid vừa có sách giấy gối đầu giường vừa có ebook mang theo đi công tác cực kỳ tiện.
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-[11px] text-on-surface-variant">
                    <button className="hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">thumb_up</span> Hữu ích (39)
                    </button>
                    <button className="hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span> Phản hồi (2)
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Community */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm scroll-mt-32" id="community">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-editorial text-xl sm:text-2xl text-on-surface font-bold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    Cộng Đồng Đang Nói Gì Về Cuốn Sách Này?
                  </h2>
                  <span className="text-xs text-on-surface-variant">Trích thảo luận từ Mạng Xã Hội Đọc Sách HUKI Social</span>
                </div>
                <Link className="text-primary font-semibold text-xs hover:underline flex items-center gap-1" to="/community">
                  Xem diễn đàn sách
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold">CLB Dậy Sớm 5h Sáng</span>
                      <span className="text-[10px] text-on-surface-variant">• 42 thành viên tham gia</span>
                    </div>
                    <Link to="/community" className="text-xs sm:text-sm font-bold text-on-surface hover:text-primary transition-colors block">
                      Thử thách: Áp dụng quy tắc "Xếp chồng thói quen" trong 21 ngày
                    </Link>
                    <p className="text-xs text-on-surface-variant mt-1.5 line-clamp-3 leading-relaxed">
                      "Sau khi pha cà phê buổi sáng, tôi sẽ lập tức viết 3 điều biết ơn vào sổ". Chia sẻ công thức xếp chồng thói quen hiệu quả nhất của bạn tại đây nào mọi người...
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-outline-variant/20 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[15px] text-[#AC2C19]">favorite</span> 156 quan tâm</span>
                    <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[15px]">forum</span> 48 thảo luận</span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#FEA619]/20 text-[#855300] text-[10px] font-bold">Tranh Luận Sách</span>
                      <span className="text-[10px] text-on-surface-variant">• Bài viết được ghim</span>
                    </div>
                    <Link to="/community" className="text-xs sm:text-sm font-bold text-on-surface hover:text-primary transition-colors block">
                      Tại sao thay đổi danh tính (Identity-based habits) lại bền vững hơn thay đổi kết quả?
                    </Link>
                    <p className="text-xs text-on-surface-variant mt-1.5 line-clamp-3 leading-relaxed">
                      Phân tích sâu về Chương 2 của James Clear: Mục tiêu không phải là đọc một cuốn sách, mục tiêu là trở thành một NGƯỜI ĐỌC SÁCH...
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-outline-variant/20 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[15px] text-[#AC2C19]">favorite</span> 289 quan tâm</span>
                    <span className="flex items-center gap-1 text-[11px]"><span className="material-symbols-outlined text-[15px]">forum</span> 92 thảo luận</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Info Column */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Author Profile */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  alt="James Clear portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZyf2TvVbgJ9mk2BvFP0thF1r0s4mBG9sSVVZUpfP_0520ISUBvIbUni2WzbWM_pLhm5DZ4h-MGgUUfgXDD9Adoops_uJziUTiDeXSieCFCf14IWh4qWkBaDB8--i7uHjLXG0YJpa-T3u9Ii16p8nMLMLCLq3ANXzae9MKFSBeen9SJwLDCueBi7-TWVjN7MYTdyrZCuLojNKcFVW2TIPa9j_HUeGZ8HsTo-xmlwvZ7CKhMlUFDkY16w"
                />
                <div>
                  <h3 className="font-bold text-sm text-on-surface">James Clear</h3>
                  <span className="text-xs text-on-surface-variant">Tác giả &amp; Chuyên gia thói quen</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Diễn giả hàng đầu thế giới về sự hình thành thói quen. Bản tin hàng tuần "3-2-1" của ông có hơn 3 triệu người đăng ký trên toàn cầu.
              </p>
              <div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">3 tác phẩm trên HUKI</span>
                <Link className="text-primary font-semibold text-xs hover:underline" to="/author/james-clear">
                  Xem hồ sơ tác giả
                </Link>
              </div>
            </div>

            {/* Reading Challenge Badge */}
            <div className="bg-gradient-to-br from-[#003B2B] to-[#006B4F] text-white p-5 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <span className="bg-white/20 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Thử Thách Đọc Sách 2026
                </span>
                <h3 className="font-editorial text-base sm:text-lg font-bold mt-2 leading-snug">
                  Đọc Atomic Habits nhận ngay Huy Hiệu "Bậc Thầy Kỷ Luật"
                </h3>
                <p className="text-xs opacity-85 mt-1 leading-relaxed">
                  Gia nhập cùng 4.200 độc giả đang cùng đọc và ghi chép tiến độ trong tháng này.
                </p>
                <Link
                  to="/community/club"
                  className="mt-4 px-4 py-2 bg-white text-[#003B2B] rounded-xl font-bold text-xs shadow-xs hover:bg-surface-container transition-colors inline-block"
                >
                  Tham gia CLB Đọc Sách
                </Link>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[100px] text-white/10 pointer-events-none">military_tech</span>
            </div>

            {/* HUKI Marketplace Guarantee */}
            <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30">
              <h4 className="font-bold text-xs uppercase tracking-wider text-on-surface flex items-center gap-1.5 mb-3">
                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                Cam Kết Sàn HUKI Ebook Marketplace
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[15px] text-primary mt-0.5">check_circle</span>
                  <span>Bản quyền nội dung phân phối 100% hợp pháp từ Alpha Books.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[15px] text-primary mt-0.5">check_circle</span>
                  <span>Chính sách đổi trả trong 7 ngày nếu sách lỗi hoặc hỏng kỹ thuật.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[15px] text-primary mt-0.5">check_circle</span>
                  <span>Đồng bộ tiến độ đọc và ghi chú trên tối đa 5 thiết bị.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-outline-variant/30">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-editorial text-xl sm:text-2xl text-on-surface font-bold flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Có Thể Bạn Cũng Thích
              </h2>
              <p className="text-xs text-on-surface-variant mt-0.5">Các tựa sách phát triển bản thân và tư duy được độc giả mua cùng</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-xs bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Deep Work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTGRSexaK4Q2CvYCmb_-v97AQzmVWRY5A3JZG-DU08dEFgP54ksWMx39ZvjVtzGiQSqVX2cTxSEth9aG1QLNdvMujLYkRyQLW02IpgRg1cxu5u9_B6zMWUiFXTn9n2jAm-nTA6QtJvIYtYbBVfAlgORb1EsIdeorj3bv2kX2803hlMAluJDEQYICheIzazfK_YPUlXFyTNkC8cs6krKPflBk8UEnG09dVtwYBujZHQrB0QNY7tKYb5jA" />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[9px] font-bold px-1.5 py-0.2 rounded">EBOOK</span>
                </div>
                <h3 className="text-xs font-bold text-on-surface mt-2.5 group-hover:text-primary transition-colors line-clamp-2">
                  Deep Work – Làm Ra Làm, Chơi Ra Chơi
                </h3>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Cal Newport</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                <span className="text-xs font-bold text-primary">69.000đ</span>
                <span className="text-[10px] text-outline line-through">99.000đ</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-xs bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Tâm Lý Học Về Tiền" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8FEBMViv_qoFANLO5HNvpmeYocsRkM38Xeea1-39wCopHmVl0NjSVtYqxngqw_AVYLIPMev1huFwBqsgKAlcwu3_ahV29dkM1ri798h3ofl9dDICitCTAVZcqG8KbLegj5_Hbkv8kXatULPyWyCj6niYP36VX-61UzUaYSHm9Zu1ZPDGke7IuFZTrY6FzTb75hwV3dCPQKFOVRIka9KvyF1Y9TNYry_TAD1x7R5DKCpb2sCRUQnw3Pg" />
                  <span className="absolute top-2 left-2 bg-[#FEA619] text-white text-[9px] font-bold px-1.5 py-0.2 rounded">HOT</span>
                </div>
                <h3 className="text-xs font-bold text-on-surface mt-2.5 group-hover:text-primary transition-colors line-clamp-2">
                  Tâm Lý Học Về Tiền
                </h3>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Morgan Housel</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                <span className="text-xs font-bold text-primary">85.000đ</span>
                <span className="text-[10px] text-outline line-through">125.000đ</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-xs bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Tư Duy Nhanh Và Chậm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByEnyAQuH1OLgeOlGFCI7AkKiyiMMtdhSbUwK4ptiND9qFdFx0ent7765JWlhazoJKyzUYDmDoJkkpngPWypw0Use1i9N7nyPIV9d_fVWRElZ9xCRhV8nMnru3_CCRwDSfsk86n5TwP-0Dqkz9QIXCnwseIStidac3d3VeVZfNjoj54glurfWOPtp5Edrx4XT94pQTftjq2R2fztcdIF3d_vdX09PHHCNmQIJcvzQpdbxPjapca78lDA" />
                </div>
                <h3 className="text-xs font-bold text-on-surface mt-2.5 group-hover:text-primary transition-colors line-clamp-2">
                  Tư Duy Nhanh Và Chậm
                </h3>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Daniel Kahneman</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                <span className="text-xs font-bold text-primary">99.000đ</span>
                <span className="text-[10px] text-outline line-through">150.000đ</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-xs bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Dám Bị Ghét" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJW6ZgMbERKfra_haLu3-0-jd5ft4hv-GEYGUKwtCBYeCcZr1adSsk0TtEtLMjXwyV04TToiR07uF5NJ4ntDOv_ojzVz-2TfGXXUdO8-xaKJ3coowHkfuWbyeVc29h2rSyRCiRiGHNZVICneQpvzWvkWYFaKO8ZNcoWEZxIW8wg7f5VtnqHDze00LdZp3BMZ2iAVSl0n3wESoUncWuw645DjzYBbgnY_mvIw5P7z-2fkKLfQycMF8gvw" />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[9px] font-bold px-1.5 py-0.2 rounded">EBOOK</span>
                </div>
                <h3 className="text-xs font-bold text-on-surface mt-2.5 group-hover:text-primary transition-colors line-clamp-2">
                  Dám Bị Ghét
                </h3>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Kishimi Ichiro &amp; Koga Fumitake</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                <span className="text-xs font-bold text-primary">65.000đ</span>
                <span className="text-[10px] text-outline line-through">96.000đ</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-3.5 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden spine-crease shadow-xs bg-surface-container">
                  <img className="w-full h-full object-cover" alt="7 Thói Quen Hiệu Quả" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoh34LNDdhaYG15G_An7IHdAyGu-qTHGISFrda0RnBusnFPQrcZvYE9mnLMiKgzmBozdj21qk7S8YondELKJhKWjoQUtWkYTtDz6ksXYjGN7uf7x8gVZzEtczQBbb2YH2MRze9xCMQZzAWssKU8Q9z5uF2ffqNBVJkvRHFZ44-5kCilqSSkGwHktysmMBcBNbIHwZKsvfblFVoqnLfkWH9uHxZszqPca3hbNMHT56DbDvfc1hFwRGUAQ" />
                </div>
                <h3 className="text-xs font-bold text-on-surface mt-2.5 group-hover:text-primary transition-colors line-clamp-2">
                  7 Thói Quen Hiệu Quả
                </h3>
                <p className="text-[11px] text-on-surface-variant mt-0.5">Stephen R. Covey</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                <span className="text-xs font-bold text-primary">89.000đ</span>
                <span className="text-[10px] text-outline line-through">135.000đ</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
