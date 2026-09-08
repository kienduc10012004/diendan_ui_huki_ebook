import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export default function MessengerPage() {
  const { showToast } = useToast();
  const { addItem } = useCart();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  const initialShop = searchParams.get('shop') || searchParams.get('contact') || 'alpha-books';

  const [activeChannel, setActiveChannel] = useState(initialShop);
  const [activeTabFilter, setActiveTabFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [messageInput, setMessageInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [savedVouchers, setSavedVouchers] = useState({});
  const [activeCallModal, setActiveCallModal] = useState(null); // 'voice' | 'video' | null
  const [callTimer, setCallTimer] = useState('00:24');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  // Channels Database with Verified Working Avatars
  const channels = [
    {
      id: 'alpha-books',
      name: 'Alpha Books Official',
      type: 'store',
      typeLabel: 'Mall',
      verified: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB66Vs3T1qKYDqHJH9T1YbF1U4F-iJmD5-ZtisJSZ_Rq5BWICkEw6cXnhsSYKwRtS5mj3YjqpAeCNSyzqeojzgLJKa1W2iElPm2MbYIdj1cEIRBaV1oxpeDtuwQmgQXIhneczrAaZmcIwDH-tVC2RSJfPrc1j_-WslD8Erf38EA2VLPQI5m8R_4MNUhqHLx3so4YhtcJvoRM2dLxgd7QNEXoq7X0AEMb2fldw1N2S9BH2BCpuGCf9-vLg',
      isOnline: true,
      lastMsg: 'Dạ đơn #HUKI-8892401 đã được gửi sáng nay kèm bookmark mạ vàng ạ.',
      lastTime: '09:36',
      unread: 1,
      rating: '4.9/5',
      reviewCount: '18.4k',
      responseTime: '< 5p',
      pinnedBook: {
        id: 'atomic-habits',
        title: 'Atomic Habits - Thay Đổi Tí Hon',
        author: 'James Clear',
        format: 'Combo Hybrid',
        price: 189000,
        originalPrice: 270000,
        discount: '-30%',
        cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBldhgYiC5r8pQXi4qeHSTCtWbbqbNG3on0MvhA1aDlNqhPWUc0vxDN66WP08gQOhujNyn9ioDRAdk0WMZ2kusBW1UaNz_drE-pr1z6kDX__xWCUYXEou-HgS4oTKLU_PdZUYQU71wmsMrkWVQ2QQQ9TpzYAwBodRXxIwHfqU3BdZALmt5R3bfLCpA0TV9C5YDY7LX8yfeFuJj3ZWernvxTjnpvNMG56GL6j2j-E-XC_WY454GWEaLicw'
      },
      orderInfo: {
        id: 'HUKI-8892401',
        status: 'Đang vận chuyển',
        carrier: 'GHN Express',
        total: '189.000 ₫'
      }
    },
    {
      id: 'nha-nam',
      name: 'Nhã Nam Books',
      type: 'store',
      typeLabel: 'NXB',
      verified: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpTUISg-tnfY2rrFojWmbuCx5z779iKnlLgbGz_GLAahWWB8eXP59pYu32VuchN8TAUY2t9FFU636fN99eX09aUYBV7b6QmulGn_6VlfW6R2AZMukgt2emUGXS1AtVlTbpptOBW26u9Jn8STRX4LVTj7ztimGDT-59XVaEH1_8M_qJYFji6Jbp9VnE5CS-fKcM02gS5paQmBxB6SqTKyBbyxLQiEGLIS50Z_MTn9u9Gj0HWMnrBpOetw',
      isOnline: true,
      lastMsg: 'Voucher giảm 20% bộ Văn học kinh điển đã sẵn sàng!',
      lastTime: '10:15',
      unread: 0,
      rating: '4.9/5',
      reviewCount: '24.1k',
      responseTime: '< 10p',
      pinnedBook: {
        id: 'nha-gia-kim',
        title: 'Nhà Giả Kim (The Alchemist)',
        author: 'Paulo Coelho',
        format: 'Sách In Bìa Cứng',
        price: 64000,
        originalPrice: 80000,
        discount: '-20%',
        cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNSJv8WbQTwJya636_FW0mYshlMn8ZpW5DfTmCp3q_pz4q9n5jP3hiiK3mafekUIWZ4se4a15jzeHs71mnK4Mviw5CtTeXeiMfOy_D7OQY08FMOEvWoMRV_yHkKNkWgtp3-9ssDhlPZWDF47EM35t0qWNVVwHzwqTo3ic5EjVPrw5a8l3rlNpdZ4cU3R2LgXrZCzqw-9l1_d2KZaINmahY_3bxKAudtwN7-VybtwPcyEU6QBBbn5z-Fw'
      }
    },
    {
      id: 'huki-support',
      name: 'HUKI Support 24/7',
      type: 'support',
      typeLabel: 'DRM Core',
      verified: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg_cN5aJIOUQ2qSbhdl2i4scTc1NloqDQjftD7FSLc9uyj1JfPDhD92m8FGhTRl4Ks7CLRukUa4A6PZqa0ZIvYHN6BUWuqDk4kc2i8XphW2bhjpJIv4LqaEBtRzFsV9JCJFnuCKG3AOIJQsN4pcbhMSswho7T8cncPvhdAlILvBdJfn9tqpsu3F-Ig_FjBMf2wbnh1erqUZQKHOBmk9e5YJJpXySN0E6-XuKbUSIkPljKRR0BsM1JGKg',
      isOnline: true,
      lastMsg: 'Yêu cầu đồng bộ thiết bị Web Reader DRM đã hoàn tất.',
      lastTime: '08:20',
      unread: 0,
      rating: '5.0/5',
      reviewCount: 'CSKH',
      responseTime: 'Tức thì'
    },
    {
      id: 'thu-trang',
      name: 'Lê Thu Trang',
      type: 'reader',
      typeLabel: 'Độc Giả',
      verified: false,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvuLfGBqC2eCGItcHyomrcsFnLsXIVIF0qADKLeXJE7UJ6PPQbFsoLKheDBJWWrbnoXxroA7jQwO5QNeHdHuTpr-lNiVvPR-_lEqG07T5EHhcj9UqGqJZ1gZDHp-PYZDkxfFEuwDysVNr6yyoDgJ705PbrwGp6m93iXnzUusjpbUOAqo_MjIvjyXU2jgasaYoEaDRuqcq9BIdraZLWdu7Au3hT-y1iYWnY14HNzKi7stkdmMcaAkkbyA',
      isOnline: true,
      lastMsg: 'Bạn có tham gia thử thách đọc 20 cuốn sách 2026 không?',
      lastTime: 'Hôm qua',
      unread: 0,
      rating: 'VIP Gold',
      reviewCount: 'CLB Đọc',
      responseTime: 'Đang đọc'
    },
    {
      id: 'james-clear',
      name: 'James Clear',
      type: 'author',
      typeLabel: 'Tác Giả',
      verified: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8CQmH-QjU5CJxzbNRKMzKbOkTZU2dYnnAEtOsDhF77nYohJnqNg5IdziFz4fChk4ExFkhYouQ-3xNmmTER7BWwcfFOVEixWtIIb_eQitcG9T_m7sCpJlZVIYbjhjFaoSy0U8NBdgP2D08B4Mw1OtzDfsjOi1r-c4lzUEoVHqwEK2YBuKMUxeN0N52Og9rfsZEndR_JD744nftu4_-tlKptEpiN55xTd8jCw2SM4-QoigRA9CE2XoOgA',
      isOnline: false,
      lastMsg: 'Weekly Newsletter: 3 Ideas on Habit Loops in 2026',
      lastTime: 'T2',
      unread: 0,
      rating: 'Bestseller',
      reviewCount: 'Alpha',
      responseTime: 'Tự động'
    }
  ];

  // Messages database for active channel
  const [messagesMap, setMessagesMap] = useState({
    'alpha-books': [
      {
        id: 1,
        sender: 'other',
        text: 'Chào bạn! Alpha Books hân hạnh được hỗ trợ bạn về ấn phẩm và đơn hàng.',
        time: '09:30',
        status: 'read'
      },
      {
        id: 2,
        sender: 'user',
        text: 'Shop ơi combo Hybrid cuốn Atomic Habits có còn kèm bookmark mạ vàng không ạ?',
        time: '09:32',
        status: 'read'
      },
      {
        id: 3,
        sender: 'other',
        text: 'Dạ chào bạn! Ấn bản 2026 vẫn có đính kèm bookmark mạ vàng và mã kích hoạt Ebook DRM đọc thử bạn nhé.',
        time: '09:34',
        status: 'read'
      },
      {
        id: 4,
        sender: 'other',
        type: 'voucher',
        voucherCode: 'ALPHA50K',
        discountText: 'GIẢM 50.000 ₫',
        minSpend: 'Đơn từ 180.000 ₫',
        expiry: 'HSD: 30/09/2026',
        time: '09:34',
        status: 'read'
      },
      {
        id: 5,
        sender: 'user',
        text: 'Tuyệt quá, mình vừa đặt combo trong đơn #HUKI-8892401 rồi, shop bọc chống sốc kỹ giúp mình nhé.',
        time: '09:35',
        status: 'read'
      },
      {
        id: 6,
        sender: 'other',
        type: 'order_status',
        orderId: 'HUKI-8892401',
        statusText: 'Đang vận chuyển (GHN Express)',
        productName: 'Atomic Habits (Combo In + DRM)',
        time: '09:36',
        status: 'delivered'
      }
    ],
    'nha-nam': [
      {
        id: 1,
        sender: 'other',
        text: 'Nhã Nam Books mến chào bạn! Hội sách mùa thu đang có ưu đãi 20% các tác phẩm kinh điển.',
        time: '10:00',
        status: 'read'
      },
      {
        id: 2,
        sender: 'other',
        type: 'book_card',
        book: {
          id: 'nha-gia-kim',
          title: 'Nhà Giả Kim (The Alchemist)',
          author: 'Paulo Coelho',
          price: '64.000 ₫',
          discount: '-20%',
          cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNSJv8WbQTwJya636_FW0mYshlMn8ZpW5DfTmCp3q_pz4q9n5jP3hiiK3mafekUIWZ4se4a15jzeHs71mnK4Mviw5CtTeXeiMfOy_D7OQY08FMOEvWoMRV_yHkKNkWgtp3-9ssDhlPZWDF47EM35t0qWNVVwHzwqTo3ic5EjVPrw5a8l3rlNpdZ4cU3R2LgXrZCzqw-9l1_d2KZaINmahY_3bxKAudtwN7-VybtwPcyEU6QBBbn5z-Fw'
        },
        time: '10:02',
        status: 'read'
      }
    ],
    'huki-support': [
      {
        id: 1,
        sender: 'other',
        text: 'Xin chào! Tôi là trợ lý kỹ thuật HUKI DRM. Tôi có thể hỗ trợ bạn kích hoạt Ebook hoặc quản lý 5 thiết bị đọc.',
        time: '08:15',
        status: 'read'
      },
      {
        id: 2,
        sender: 'user',
        text: 'Ebook DRM có đọc offline trên Web Reader được không?',
        time: '08:18',
        status: 'read'
      },
      {
        id: 3,
        sender: 'other',
        text: 'Dạ hoàn toàn được bạn nhé! Hệ thống HUKI DRM hỗ trợ tải về đọc offline 100% trên tối đa 5 thiết bị.',
        time: '08:20',
        status: 'read'
      }
    ],
    'thu-trang': [
      {
        id: 1,
        sender: 'other',
        text: 'Chào bạn! Mình rất thích bài review sách Sapiens của bạn trên diễn đàn.',
        time: 'Hôm qua',
        status: 'read'
      },
      {
        id: 2,
        sender: 'user',
        text: 'Cảm ơn Trang nhiều nhé! Cuốn đó thực sự rất đáng đọc.',
        time: 'Hôm qua',
        status: 'read'
      }
    ]
  });

  const currentChannel = channels.find(c => c.id === activeChannel) || channels[0];
  const currentMessages = messagesMap[activeChannel] || [];

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!messageInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessagesMap(prev => ({
      ...prev,
      [activeChannel]: [...(prev[activeChannel] || []), newMsg]
    }));
    setMessageInput('');
    setShowEmojiPicker(false);
    setShowAttachMenu(false);

    if (currentChannel.type === 'support' || currentChannel.type === 'store') {
      setTimeout(() => {
        const replyMsg = {
          id: Date.now() + 1,
          sender: 'other',
          text: currentChannel.type === 'support'
            ? 'Trợ lý HUKI đã ghi nhận và sẽ phản hồi chi tiết trong giây lát!'
            : 'Alpha Books đã nhận thông tin và đang soạn câu trả lời gửi bạn nhé!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'read'
        };
        setMessagesMap(prev => ({
          ...prev,
          [activeChannel]: [...(prev[activeChannel] || []), replyMsg]
        }));
      }, 1000);
    }
  };

  const handleSaveVoucher = (code) => {
    setSavedVouchers(prev => ({ ...prev, [code]: true }));
    showToast(`Đã lưu mã giảm giá "${code}" vào Ví HUKI!`, 'success');
  };

  const handleAddToCart = (book) => {
    addItem({
      id: book.id,
      title: book.title,
      price: book.price || 189000,
      cover: book.cover,
      author: book.author,
      format: 'hybrid'
    });
    showToast(`Đã thêm vào giỏ hàng!`, 'success');
  };

  const startCall = (type) => {
    setActiveCallModal(type);
    showToast(`Đang kết nối cuộc gọi ${type === 'video' ? 'Video' : 'Thoại'} tới ${currentChannel.name}...`, 'info');
  };

  const filteredChannels = channels.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.lastMsg.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeTabFilter === 'store') return c.type === 'store';
    if (activeTabFilter === 'reader') return c.type === 'reader' || c.type === 'author';
    if (activeTabFilter === 'support') return c.type === 'support';
    if (activeTabFilter === 'unread') return c.unread > 0;
    return true;
  });

  return (
    <div className="w-full h-full bg-[var(--theme-surface,#ffffff)] text-on-surface font-body-md flex flex-col overflow-hidden select-none">
      
      {/* 3-Column Messenger Grid */}
      <div className="flex-1 min-h-0 flex overflow-hidden h-full">

        {/* ========================================================================= */}
        {/* COLUMN 1: CONVERSATIONS LIST (Compact ~280px-300px) */}
        {/* ========================================================================= */}
        <div className="w-72 lg:w-[290px] border-r border-theme-border flex flex-col h-full bg-surface-container-lowest shrink-0 overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-3 border-b border-theme-border/70 space-y-2.5 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white shadow-2xs">
                  <span className="material-symbols-outlined text-sm">chat</span>
                </div>
                <h1 className="font-editorial text-sm font-bold text-on-surface">Messenger</h1>
              </div>

              <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Trực tuyến
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-sm">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm hội thoại, NXB, bạn đọc..."
                className="w-full pl-8 pr-2.5 py-1.5 bg-surface-container-low rounded-lg border border-theme-border/60 text-xs text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-on-surface-variant/60"
              />
            </div>

            {/* Compact Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto text-[10.5px] font-semibold scrollbar-none">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'store', label: 'NXB & Shop' },
                { id: 'reader', label: 'Bạn đọc' },
                { id: 'support', label: 'Hỗ trợ' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabFilter(tab.id)}
                  className={`px-2 py-0.5 rounded-md shrink-0 transition-all cursor-pointer ${
                    activeTabFilter === tab.id
                      ? 'bg-primary text-white shadow-2xs font-bold'
                      : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conversations Threads List */}
          <div className="flex-1 min-h-0 overflow-y-auto p-1.5 space-y-0.5 custom-scroll">
            {filteredChannels.map(chan => {
              const isSelected = activeChannel === chan.id;
              return (
                <div
                  key={chan.id}
                  onClick={() => setActiveChannel(chan.id)}
                  className={`p-2 rounded-xl flex items-start gap-2.5 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-primary/10 border border-primary/25 shadow-2xs'
                      : 'hover:bg-surface-container-low border border-transparent'
                  }`}
                >
                  <div className="relative shrink-0 mt-0.5">
                    <img className="w-8 h-8 rounded-full object-cover shadow-2xs border border-theme-border bg-white" src={chan.avatar} alt={chan.name} />
                    {chan.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 pr-0.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className={`font-bold text-xs truncate flex items-center gap-1 ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {chan.name}
                        {chan.verified && (
                          <span className="material-symbols-outlined text-[12px] text-amber-600 font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                          </span>
                        )}
                      </span>
                      <span className="text-[9.5px] text-on-surface-variant shrink-0">{chan.lastTime}</span>
                    </div>

                    <p className={`text-[11px] truncate leading-tight ${chan.unread > 0 ? 'font-bold text-on-surface' : 'text-on-surface-variant'}`}>
                      {chan.lastMsg}
                    </p>
                  </div>

                  {chan.unread > 0 && (
                    <span className="w-3.5 h-3.5 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center shrink-0 shadow-2xs mt-1">
                      {chan.unread}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Switch to Seller Shortcut */}
          <div className="p-2 border-t border-theme-border/60 flex items-center justify-between text-[10.5px] text-on-surface-variant bg-surface-container-low/40 shrink-0">
            <span>Kênh NXB &amp; Đối tác</span>
            <Link to="/seller/chat" className="font-bold text-primary hover:underline">
              Vào Kênh Bán &rarr;
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 2: ACTIVE CHAT STREAM & INPUT BAR (Flex-1) */}
        {/* ========================================================================= */}
        <div className="flex-1 flex flex-col h-full bg-surface-container-low/20 border-r border-theme-border overflow-hidden min-w-0">
          
          {/* Active Chat Header */}
          <div className="h-13 px-3 sm:px-4 bg-surface-container-lowest border-b border-theme-border/70 flex items-center justify-between shrink-0 shadow-2xs z-10">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative shrink-0">
                <img className="w-7 h-7 rounded-full object-cover border border-theme-border bg-white" src={currentChannel.avatar} alt={currentChannel.name} />
                <span className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ring-1 ring-white ${
                  currentChannel.isOnline ? 'bg-emerald-500' : 'bg-slate-300'
                }`}></span>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs text-on-surface flex items-center gap-1.5 truncate">
                  <span className="truncate">{currentChannel.name}</span>
                  {currentChannel.verified && (
                    <span className="material-symbols-outlined text-[13px] text-amber-600 font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                  )}
                  <span className="bg-primary/10 text-primary text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0">
                    {currentChannel.typeLabel}
                  </span>
                </div>
                <div className="text-[10px] text-on-surface-variant flex items-center gap-1">
                  <span className={currentChannel.isOnline ? 'text-emerald-600 font-semibold' : 'text-on-surface-variant'}>
                    {currentChannel.isOnline ? '● Trực tuyến' : 'Ngoại tuyến'}
                  </span>
                  <span>•</span>
                  <span>Phản hồi: {currentChannel.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Header Right Action Buttons */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => startCall('voice')}
                className="w-7 h-7 rounded-lg border border-theme-border bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all flex items-center justify-center cursor-pointer shadow-2xs"
                title="Gọi thoại"
              >
                <span className="material-symbols-outlined text-base">call</span>
              </button>
              <button
                type="button"
                onClick={() => startCall('video')}
                className="w-7 h-7 rounded-lg border border-theme-border bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all flex items-center justify-center cursor-pointer shadow-2xs"
                title="Gọi video"
              >
                <span className="material-symbols-outlined text-base">videocam</span>
              </button>
              <button
                type="button"
                onClick={() => setShowRightPanel(!showRightPanel)}
                className={`w-7 h-7 rounded-lg border border-theme-border transition-all flex items-center justify-center cursor-pointer shadow-2xs ${
                  showRightPanel ? 'bg-primary text-white' : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
                }`}
                title={showRightPanel ? "Thu gọn thông tin" : "Mở thông tin"}
              >
                <span className="material-symbols-outlined text-base">info</span>
              </button>
            </div>
          </div>

          {/* Compact Pinned Book Banner */}
          {currentChannel.pinnedBook && (
            <div className="bg-surface-container-lowest border-b border-theme-border/60 px-3 py-1.5 flex items-center justify-between gap-2.5 shrink-0 shadow-2xs">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 aspect-[3/4] rounded overflow-hidden border border-theme-border shrink-0 bg-surface-container">
                  <img className="w-full h-full object-cover" src={currentChannel.pinnedBook.cover} alt="Book" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-bold text-primary uppercase">Quan tâm: <span className="text-on-surface font-semibold truncate">{currentChannel.pinnedBook.title}</span></div>
                  <div className="text-[10px] font-bold text-primary flex items-center gap-1.5">
                    <span>{currentChannel.pinnedBook.price.toLocaleString('vi-VN')} ₫</span>
                    <span className="text-[9px] text-red-600 bg-red-50 px-1 rounded font-semibold">{currentChannel.pinnedBook.discount}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <Link
                  to={`/book/${currentChannel.pinnedBook.id}`}
                  className="px-2 py-0.5 rounded-md border border-theme-border hover:border-primary text-[10.5px] font-semibold text-on-surface transition-colors"
                >
                  Xem Sách
                </Link>
                <button
                  onClick={() => handleAddToCart(currentChannel.pinnedBook)}
                  className="px-2 py-0.5 rounded-md bg-primary text-white text-[10.5px] font-bold hover:opacity-90 shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px]">shopping_cart</span>
                  <span>+ Giỏ</span>
                </button>
              </div>
            </div>
          )}

          {/* Messages Stream */}
          <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 space-y-3 custom-scroll">
            
            {/* Timestamp Badge */}
            <div className="text-center my-1">
              <span className="text-[9.5px] bg-surface-container text-on-surface-variant px-2.5 py-0.5 rounded-full font-bold shadow-2xs border border-theme-border/50">
                Hôm nay, 08/09/2026
              </span>
            </div>

            {/* Chat Bubbles */}
            {currentMessages.map(msg => {
              const isUser = msg.sender === 'user';

              return (
                <div
                  key={msg.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end gap-1.5 group`}
                >
                  {!isUser && (
                    <img className="w-6 h-6 rounded-full object-cover shrink-0 border border-theme-border shadow-2xs mb-0.5 bg-white" src={currentChannel.avatar} alt="Avatar" />
                  )}

                  <div className="max-w-[80%] sm:max-w-[65%] space-y-1">
                    
                    {/* 1. Standard Text Message */}
                    {msg.text && (
                      <div className={`py-2 px-3 rounded-2xl text-xs leading-relaxed shadow-2xs ${
                        isUser
                          ? 'bg-primary text-white rounded-br-xs'
                          : 'bg-surface-container-lowest text-on-surface border border-theme-border/80 rounded-bl-xs'
                      }`}>
                        <p className="whitespace-pre-line">{msg.text}</p>
                        <div className={`flex items-center justify-end gap-1 text-[9px] mt-1 ${isUser ? 'text-white/80' : 'text-on-surface-variant'}`}>
                          <span>{msg.time}</span>
                          {isUser && (
                            <span className="material-symbols-outlined text-[11px]">
                              {msg.status === 'read' ? 'done_all' : 'done'}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 2. Interactive Voucher Card */}
                    {msg.type === 'voucher' && (
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 text-amber-950 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-1.5 py-0.2 rounded">VOUCHER ĐỘC QUYỀN</span>
                          <span className="text-[9px] text-amber-800">{msg.expiry}</span>
                        </div>
                        <div className="text-sm font-extrabold text-amber-900 leading-tight">{msg.discountText}</div>
                        <div className="text-[10.5px] text-amber-800 font-medium">{msg.minSpend}</div>
                        <button
                          onClick={() => handleSaveVoucher(msg.voucherCode)}
                          disabled={savedVouchers[msg.voucherCode]}
                          className={`w-full py-1 rounded-lg text-[10.5px] font-bold transition-all shadow-2xs flex items-center justify-center gap-1 ${
                            savedVouchers[msg.voucherCode]
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-500 hover:bg-amber-600 text-black cursor-pointer'
                          }`}
                        >
                          <span className="material-symbols-outlined text-xs">
                            {savedVouchers[msg.voucherCode] ? 'check_circle' : 'loyalty'}
                          </span>
                          <span>{savedVouchers[msg.voucherCode] ? 'ĐÃ LƯU VÀO VÍ' : `LƯU MÃ [${msg.voucherCode}]`}</span>
                        </button>
                      </div>
                    )}

                    {/* 3. Interactive Order Status Card */}
                    {msg.type === 'order_status' && (
                      <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-theme-border/90 shadow-2xs space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-primary uppercase">ĐƠN #{msg.orderId}</span>
                          <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">Đang giao</span>
                        </div>
                        <div className="p-1.5 bg-surface-container-low rounded-lg border border-theme-border/50 text-[10px] text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm text-emerald-600">local_shipping</span>
                          <span>{msg.statusText}</span>
                        </div>
                        <Link
                          to={`/orders/${msg.orderId}`}
                          className="block text-center py-1 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg text-[10px] transition-colors"
                        >
                          Tra cứu lộ trình đơn hàng
                        </Link>
                      </div>
                    )}

                    {/* 4. Book Card Message */}
                    {msg.type === 'book_card' && msg.book && (
                      <div className="p-2 rounded-xl bg-surface-container-lowest border border-theme-border shadow-2xs flex items-center gap-2">
                        <img className="w-8 aspect-[3/4] object-cover rounded border border-theme-border" src={msg.book.cover} alt="Cover" />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-[11px] text-on-surface truncate">{msg.book.title}</h5>
                          <div className="text-[10px] text-on-surface-variant">{msg.book.author}</div>
                          <div className="font-bold text-[10.5px] text-primary">{msg.book.price}</div>
                        </div>
                        <Link
                          to={`/book/${msg.book.id}`}
                          className="px-2 py-1 rounded bg-primary text-white text-[10px] font-bold hover:opacity-90 shadow-2xs"
                        >
                          Xem Sách
                        </Link>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Reply Suggestions Bar */}
          <div className="px-3 py-1.5 bg-surface-container-lowest border-t border-theme-border/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs shrink-0">
            <span className="text-on-surface-variant font-bold shrink-0 text-[10px] flex items-center gap-0.5">
              <span className="material-symbols-outlined text-xs text-primary">bolt</span> Gợi ý:
            </span>
            {[
              'Sách còn hàng không shop?',
              'Thời gian giao hàng về TP.HCM?',
              'Ebook DRM đọc offline như thế nào?',
              'Tư vấn combo tiết kiệm'
            ].map((chip, i) => (
              <button
                key={i}
                onClick={() => setMessageInput(chip)}
                className="px-2 py-0.5 bg-surface-container-low hover:bg-primary hover:text-white rounded-full text-[10px] font-medium text-on-surface whitespace-nowrap transition-all border border-theme-border/50 cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Message Input Bar */}
          <div className="p-2.5 bg-surface-container-lowest border-t border-theme-border/70 relative shrink-0">
            
            {/* Emoji Picker Popup */}
            {showEmojiPicker && (
              <div className="absolute bottom-13 left-2 bg-surface-container-lowest border border-theme-border rounded-xl p-2 shadow-lg z-20 flex gap-1.5 text-base animate-fade-in-up">
                {['👍', '❤️', '🔥', '📚', '👏', '😊', '⭐', '✨'].map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => {
                      setMessageInput(prev => prev + emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="hover:scale-125 transition-transform p-0.5 cursor-pointer"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            {/* Attachments Popup */}
            {showAttachMenu && (
              <div className="absolute bottom-13 left-2 bg-surface-container-lowest border border-theme-border rounded-xl p-1.5 shadow-lg z-20 space-y-0.5 text-[11px] font-semibold animate-fade-in-up w-48">
                <button
                  onClick={() => {
                    showToast('Đã chọn hình ảnh đính kèm', 'info');
                    setShowAttachMenu(false);
                  }}
                  className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container text-on-surface text-left"
                >
                  <span className="material-symbols-outlined text-base text-primary">image</span>
                  <span>Gửi hình ảnh</span>
                </button>
                <button
                  onClick={() => {
                    showToast('Đã đính kèm đơn hàng #HUKI-8892401', 'info');
                    setShowAttachMenu(false);
                  }}
                  className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container text-on-surface text-left"
                >
                  <span className="material-symbols-outlined text-base text-amber-600">receipt_long</span>
                  <span>Gửi đơn hàng cần hỏi</span>
                </button>
                <button
                  onClick={() => {
                    showToast('Đã chọn sách từ tủ sách', 'info');
                    setShowAttachMenu(false);
                  }}
                  className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container text-on-surface text-left"
                >
                  <span className="material-symbols-outlined text-base text-emerald-600">auto_stories</span>
                  <span>Đính kèm sách quan tâm</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowAttachMenu(!showAttachMenu);
                  setShowEmojiPicker(false);
                }}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                  showAttachMenu ? 'bg-primary text-white' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
                title="Đính kèm"
              >
                <span className="material-symbols-outlined text-lg">add_circle</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowEmojiPicker(!showEmojiPicker);
                  setShowAttachMenu(false);
                }}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                  showEmojiPicker ? 'bg-primary text-white' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
                title="Emoji"
              >
                <span className="material-symbols-outlined text-lg">sentiment_satisfied</span>
              </button>

              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Nhập nội dung tin nhắn... (Nhấn Enter để gửi)"
                className="flex-1 px-3 py-1.5 bg-surface-container-low rounded-lg border border-theme-border/70 text-xs text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-on-surface-variant/60"
              />

              <button
                type="submit"
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs transition-all shrink-0 cursor-pointer ${
                  messageInput.trim()
                    ? 'bg-primary text-white hover:opacity-95 shadow-xs'
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {messageInput.trim() ? (
                  <>
                    <span className="material-symbols-outlined text-sm">send</span>
                    <span>Gửi</span>
                  </>
                ) : (
                  <span className="text-sm" onClick={(e) => {
                    e.stopPropagation();
                    setMessageInput('👍');
                  }}>👍</span>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* COLUMN 3: COMPACT INFO DRAWER (~240px-260px) */}
        {/* ========================================================================= */}
        {showRightPanel && (
          <div className="w-60 lg:w-[250px] flex flex-col h-full bg-surface-container-lowest shrink-0 border-l border-theme-border/60 overflow-hidden">
            
            <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3 custom-scroll">
              
              {/* Profile Card */}
              <div className="text-center pb-2.5 border-b border-theme-border/70 space-y-1.5">
                <div className="relative inline-block mx-auto">
                  <img className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/10 shadow-2xs border border-theme-border bg-white" src={currentChannel.avatar} alt={currentChannel.name} />
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-1 ring-white ${
                    currentChannel.isOnline ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}></span>
                </div>
                <div>
                  <h3 className="font-bold text-xs text-on-surface flex items-center justify-center gap-1">
                    <span>{currentChannel.name}</span>
                    {currentChannel.verified && (
                      <span className="material-symbols-outlined text-[13px] text-amber-600 font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified
                      </span>
                    )}
                  </h3>
                  <span className="inline-block bg-primary/10 text-primary text-[9px] font-bold px-2 py-0.2 rounded-full mt-0.5">
                    {currentChannel.typeLabel}
                  </span>
                </div>
              </div>

              {/* Trust & Quality Metrics */}
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center p-2 bg-surface-container-low/70 rounded-lg border border-theme-border/60">
                  <span className="text-on-surface-variant">Đánh giá:</span>
                  <span className="font-bold text-amber-700 flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    {currentChannel.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-surface-container-low/70 rounded-lg border border-theme-border/60">
                  <span className="text-on-surface-variant">Phản hồi:</span>
                  <span className="font-bold text-emerald-700">99% (&lt; 5p)</span>
                </div>
              </div>

              {/* Order History with this Store */}
              {currentChannel.orderInfo && (
                <div className="p-2.5 bg-surface-container-low/50 rounded-xl border border-theme-border/80 space-y-1.5 text-xs shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-primary">ĐƠN GẦN NHẤT</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-900">
                      {currentChannel.orderInfo.status}
                    </span>
                  </div>
                  <div className="font-bold text-[11px] text-on-surface">#{currentChannel.orderInfo.id}</div>
                  <div className="text-[10.5px] text-on-surface-variant">Tổng: <strong className="text-primary">{currentChannel.orderInfo.total}</strong></div>
                  
                  <Link
                    to={`/orders/${currentChannel.orderInfo.id}`}
                    className="block text-center py-1 bg-surface-container-lowest hover:bg-surface-container border border-theme-border text-on-surface font-semibold rounded-lg text-[10px] transition-all"
                  >
                    Xem Đơn Hàng
                  </Link>
                </div>
              )}

              {/* Quick Store Navigation */}
              {currentChannel.type === 'store' && (
                <div className="space-y-1.5">
                  <Link
                    to="/shop/alpha-books"
                    className="w-full py-1.5 bg-primary text-white font-bold rounded-lg text-[11px] transition-all shadow-2xs flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">storefront</span>
                    <span>Ghé Gian Hàng</span>
                  </Link>
                  <Link
                    to="/books"
                    className="w-full py-1.5 bg-surface-container-lowest border border-theme-border hover:bg-surface-container text-on-surface font-semibold rounded-lg text-[10.5px] transition-all flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">menu_book</span>
                    <span>Xem 385 Đầu Sách</span>
                  </Link>
                </div>
              )}

              {/* Shared Media Preview */}
              <div className="pt-2 border-t border-theme-border/70 space-y-1.5">
                <span className="text-[10px] font-bold text-on-surface block">Ảnh &amp; File đã gửi</span>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBldhgYiC5r8pQXi4qeHSTCtWbbqbNG3on0MvhA1aDlNqhPWUc0vxDN66WP08gQOhujNyn9ioDRAdk0WMZ2kusBW1UaNz_drE-pr1z6kDX__xWCUYXEou-HgS4oTKLU_PdZUYQU71wmsMrkWVQ2QQQ9TpzYAwBodRXxIwHfqU3BdZALmt5R3bfLCpA0TV9C5YDY7LX8yfeFuJj3ZWernvxTjnpvNMG56GL6j2j-E-XC_WY454GWEaLicw',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDNSJv8WbQTwJya636_FW0mYshlMn8ZpW5DfTmCp3q_pz4q9n5jP3hiiK3mafekUIWZ4se4a15jzeHs71mnK4Mviw5CtTeXeiMfOy_D7OQY08FMOEvWoMRV_yHkKNkWgtp3-9ssDhlPZWDF47EM35t0qWNVVwHzwqTo3ic5EjVPrw5a8l3rlNpdZ4cU3R2LgXrZCzqw-9l1_d2KZaINmahY_3bxKAudtwN7-VybtwPcyEU6QBBbn5z-Fw',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7ouqQ7elIuGRHZ7rj7l5cYrPzWtVWXyk8F3s9fBkQf8lEZFMOCpZ1WNMWOVoN5Uy13M3ZCCtm0Kp6qODtQ3a5mAu81yactomECdD4kLkkrlCvqEPHOgvwES7pkRYwgFiAN7MHH3veqNbCNbdX5MfzYRgsIN5CRugb_eWd0jzg2YPAWJlzYTmoYx-QBxSmQa0tUxtsTK7oDOF1qSFqUnhLUn91MXUytXRomvOwDXqwzBlH_CfbqtBLxg'
                  ].map((img, i) => (
                    <div key={i} className="aspect-[3/4] rounded overflow-hidden border border-theme-border bg-surface-container">
                      <img className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer" src={img} alt="Shared" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Privacy & Settings Footer */}
            <div className="p-2.5 bg-surface-container-lowest border-t border-theme-border/70 shrink-0">
              <button
                onClick={() => showToast('Đã tắt thông báo cuộc trò chuyện này', 'info')}
                className="w-full py-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface text-[10.5px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-theme-border/60"
              >
                <span className="material-symbols-outlined text-sm">notifications_off</span>
                <span>Tắt thông báo</span>
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Simulated Call Modal */}
      {activeCallModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 text-white rounded-3xl border border-slate-700 w-full max-w-sm p-6 flex flex-col items-center text-center shadow-2xl space-y-4 relative overflow-hidden">
            
            <div className="space-y-0.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10.5px] font-bold animate-pulse">
                {activeCallModal === 'video' ? 'Cuộc gọi Video HD...' : 'Cuộc gọi Thoại'}
              </span>
              <div className="text-[11px] text-slate-400">{callTimer}</div>
            </div>

            <div className="relative my-2">
              <div className="w-18 h-18 rounded-full p-0.5 bg-gradient-to-tr from-primary to-emerald-400 animate-pulse">
                <img className="w-full h-full rounded-full object-cover bg-white" src={currentChannel.avatar} alt="Avatar" />
              </div>
            </div>

            <div className="space-y-0.5">
              <h3 className="text-base font-bold font-editorial">{currentChannel.name}</h3>
              <p className="text-[11px] text-slate-400">{currentChannel.typeLabel} • HUKI Messenger</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isMuted ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
                title={isMuted ? "Bật mic" : "Tắt mic"}
              >
                <span className="material-symbols-outlined text-lg">
                  {isMuted ? 'mic_off' : 'mic'}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveCallModal(null);
                  showToast('Đã kết thúc cuộc gọi', 'info');
                }}
                className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                title="Kết thúc"
              >
                <span className="material-symbols-outlined text-xl">call_end</span>
              </button>

              {activeCallModal === 'video' && (
                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isVideoOff ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                  title={isVideoOff ? "Bật camera" : "Tắt camera"}
                >
                  <span className="material-symbols-outlined text-lg">
                    {isVideoOff ? 'videocam_off' : 'videocam'}
                  </span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
