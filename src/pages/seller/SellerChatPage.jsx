import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function SellerChatPage() {
  const { showToast } = useToast();

  const [activeCustomer, setActiveCustomer] = useState('cust-1');
  const [activeFilter, setActiveFilter] = useState('all');
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'customer',
      text: 'Shop ơi cuốn Atomic Habits bản in bìa mềm có còn ấn bản kèm bookmark chữ ký tác giả không ạ?',
      time: '09:32'
    },
    {
      id: 2,
      sender: 'seller',
      text: 'Dạ chào bạn Minh Trí! Ấn bản bìa mềm đợt xuất bản mới 2026 của Alpha Books bên em vẫn có đính kèm bookmark mạ vàng và mã kích hoạt Ebook DRM đọc thử bạn nhé.',
      time: '09:34'
    },
    {
      id: 3,
      sender: 'customer',
      text: 'Tuyệt quá, mình vừa đặt combo Hybrid trong đơn #HUKI-8892401 rồi, shop bọc chống sốc kỹ giúp mình nha.',
      time: '09:35'
    },
    {
      id: 4,
      sender: 'seller',
      text: 'Dạ NXB đã nhận đơn hàng #HUKI-8892401 và đang tiến hành đóng hộp carton 3 lớp kèm túi khí chống sốc chuyên dụng gửi bạn trong sáng nay ạ! Cảm ơn bạn đã luôn ủng hộ gian hàng Alpha Books!',
      time: '09:36'
    }
  ]);

  const customers = [
    {
      id: 'cust-1',
      name: 'Nguyễn Minh Trí',
      tier: 'VIP Gold 🔥',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB66Vs3T1qKYDqHJH9T1YbF1U4F-iJmD5-ZtisJSZ_Rq5BWICkEw6cXnhsSYKwRtS5mj3YjqpAeCNSyzqeojzgLJKa1W2iElPm2MbYIdj1cEIRBaV1oxpeDtuwQmgQXIhneczrAaZmcIwDH-tVC2RSJfPrc1j_-WslD8Erf38EA2VLPQI5m8R_4MNUhqHLx3so4YhtcJvoRM2dLxgd7QNEXoq7X0AEMb2fldw1N2S9BH2BCpuGCf9-vLg',
      isOnline: true,
      lastMsg: 'Tuyệt quá, mình vừa đặt combo...',
      lastTime: 'Vừa xong',
      product: 'Atomic Habits',
      unread: 0,
      hasOrder: true,
      isVip: true,
      orderCount: 6,
      totalSpent: '1.850.000đ'
    },
    {
      id: 'cust-2',
      name: 'Lê Thu Trang',
      tier: 'VIP Bạc',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvuLfGBqC2eCGItcHyomrcsFnLsXIVIF0qADKLeXJE7UJ6PPQbFsoLKheDBJWWrbnoXxroA7jQwO5QNeHdHuTpr-lNiVvPR-_lEqG07T5EHhcj9UqGqJZ1gZDHp-PYZDkxfFEuwDysVNr6yyoDgJ705PbrwGp6m93iXnzUusjpbUOAqo_MjIvjyXU2jgasaYoEaDRuqcq9BIdraZLWdu7Au3hT-y1iYWnY14HNzKi7stkdmMcaAkkbyA',
      isOnline: false,
      lastMsg: 'Em vừa nhận Ebook trên Web Reader rồi ạ...',
      lastTime: '10:15',
      product: 'Tâm Lý Học Về Tiền',
      unread: 1,
      hasOrder: true,
      isVip: false,
      orderCount: 3,
      totalSpent: '520.000đ'
    },
    {
      id: 'cust-3',
      name: 'Đức Kiên',
      tier: 'Khách hàng mới',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg_cN5aJIOUQ2qSbhdl2i4scTc1NloqDQjftD7FSLc9uyj1JfPDhD92m8FGhTRl4Ks7CLRukUa4A6PZqa0ZIvYHN6BUWuqDk4kc2i8XphW2bhjpJIv4LqaEBtRzFsV9JCJFnuCKG3AOIJQsN4pcbhMSswho7T8cncPvhdAlILvBdJfn9tqpsu3F-Ig_FjBMf2wbnh1erqUZQKHOBmk9e5YJJpXySN0E6-XuKbUSIkPljKRR0BsM1JGKg',
      isOnline: true,
      lastMsg: 'Shop nhớ bọc chống sốc giúp mình cuốn này nhé...',
      lastTime: '09:40',
      product: 'Sapiens: Lược Sử Loài Người',
      unread: 0,
      hasOrder: true,
      isVip: false,
      orderCount: 1,
      totalSpent: '215.000đ'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'seller',
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newMsg]);
    setMessageInput('');
  };

  const sendQuickReply = (text) => {
    const newMsg = {
      id: Date.now(),
      sender: 'seller',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages(prev => [...prev, newMsg]);
    showToast('Đã gửi câu trả lời nhanh!', 'success');
  };

  const filteredCustomers = customers.filter(c => {
    if (activeFilter === 'unread') return c.unread > 0;
    if (activeFilter === 'orders') return c.hasOrder;
    if (activeFilter === 'vip') return c.isVip;
    return true;
  });

  const currentCustomer = customers.find(c => c.id === activeCustomer) || customers[0];

  return (
    <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-12 font-body-md">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141D1C]">
            Trung Tâm Chat & Tư Vấn Khách Hàng (Seller Chat)
          </h1>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Hỗ trợ khách hàng thời gian thực, phản hồi thắc mắc đơn hàng và kích hoạt mã giảm giá tức thì.
          </p>
        </div>
        <span className="bg-emerald-50 text-[#006B4F] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
          Tỷ Lệ Phản Hồi: 99% (Dưới 3 phút)
        </span>
      </div>

      {/* 3-Column Chat Container */}
      <div className="bg-white rounded-3xl border border-[#E8E5DF] shadow-md grid grid-cols-12 overflow-hidden h-[750px]">
        {/* Left Column (3/12): Conversation List */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 border-r border-[#E8E5DF] flex flex-col h-full bg-[#FCFBF8]">
          <div className="p-4 border-b border-[#E8E5DF] space-y-3 shrink-0">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-sm text-[#141D1C]">Hộp Thư Khách Hàng ({customers.length})</h2>
              <button className="p-1 hover:bg-slate-200 rounded-lg text-slate-500">
                <span className="material-symbols-outlined text-base">tune</span>
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-bold scrollbar-none">
              {[
                { id: 'all', label: 'Tất Cả' },
                { id: 'unread', label: 'Chưa Đọc (1)' },
                { id: 'orders', label: 'Có Đơn Hàng' },
                { id: 'vip', label: 'VIP' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-2.5 py-1 rounded-lg shrink-0 transition-all ${
                    activeFilter === f.id
                      ? 'bg-[#006B4F] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Customer list */}
          <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
            {filteredCustomers.map(cust => (
              <div
                key={cust.id}
                onClick={() => setActiveCustomer(cust.id)}
                className={`p-3 rounded-2xl flex items-start gap-3 cursor-pointer transition-all ${
                  activeCustomer === cust.id
                    ? 'bg-emerald-50/80 border border-[#006B4F]/30 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border border-transparent'
                }`}
              >
                <div className="relative shrink-0">
                  <img className="w-11 h-11 rounded-full object-cover" src={cust.avatar} alt={cust.name} />
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white ${
                    cust.isOnline ? 'bg-[#16a34a]' : 'bg-slate-300'
                  }`}></span>
                </div>
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-xs text-[#141D1C] truncate">{cust.name}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">{cust.lastTime}</span>
                  </div>
                  <div className="text-[10px] font-semibold text-[#006B4F] truncate mb-1">
                    📖 {cust.product}
                  </div>
                  <p className="text-xs text-slate-600 truncate">{cust.lastMsg}</p>
                </div>
                {cust.unread > 0 && (
                  <span className="w-4 h-4 bg-[#ac2c19] text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">
                    {cust.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column (6/12): Active Chat Stream */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col h-full bg-[#F8F6F0]/40 border-r border-[#E8E5DF]">
          {/* Chat Header */}
          <div className="h-16 px-6 bg-white border-b border-[#E8E5DF] flex items-center justify-between shrink-0 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img className="w-10 h-10 rounded-full object-cover" src={currentCustomer.avatar} alt={currentCustomer.name} />
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-white ${
                  currentCustomer.isOnline ? 'bg-[#16a34a]' : 'bg-slate-300'
                }`}></span>
              </div>
              <div>
                <div className="font-bold text-sm text-[#141D1C] flex items-center gap-2">
                  <span>{currentCustomer.name}</span>
                  <span className="bg-[#fea619]/20 text-[#855300] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {currentCustomer.tier}
                  </span>
                </div>
                <div className="text-[11px] text-[#006B4F] font-semibold">
                  {currentCustomer.isOnline ? '● Đang trực tuyến' : 'Ngoại tuyến'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/orders/HUKI-8892401"
                className="text-xs text-[#006B4F] hover:underline font-semibold bg-emerald-50 px-3 py-1.5 rounded-xl flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">receipt_long</span>
                Đơn #HUKI-8892401
              </Link>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="text-center my-2">
              <span className="text-[10px] bg-slate-200/80 text-slate-600 px-3 py-1 rounded-full font-bold">
                Hôm nay, 08 tháng 09 năm 2026
              </span>
            </div>

            {chatMessages.map(msg => {
              const isSeller = msg.sender === 'seller';
              return (
                <div
                  key={msg.id}
                  className={`flex ${isSeller ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {!isSeller && (
                    <img className="w-7 h-7 rounded-full object-cover shrink-0" src={currentCustomer.avatar} alt="Avatar" />
                  )}
                  <div className={`max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    isSeller
                      ? 'bg-[#003B2B] text-white rounded-br-xs'
                      : 'bg-white text-[#141D1C] border border-[#E8E5DF] rounded-bl-xs'
                  }`}>
                    <p>{msg.text}</p>
                    <span className={`block text-[10px] text-right mt-1.5 ${isSeller ? 'text-emerald-200' : 'text-slate-400'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Reply Chips */}
          <div className="px-4 py-2 bg-white border-t border-[#E8E5DF] flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
            <span className="text-slate-400 font-bold shrink-0 text-[11px]">Trả lời nhanh:</span>
            {[
              'Dạ bên em còn ấn bản kèm bookmark chữ ký ạ!',
              'Dạ Ebook DRM đã được kích hoạt trên Web Reader rồi ạ!',
              'Gửi voucher giảm 15% cho khách VIP'
            ].map((chip, i) => (
              <button
                key={i}
                onClick={() => sendQuickReply(chip)}
                className="px-3 py-1 bg-slate-100 hover:bg-[#003B2B] hover:text-white rounded-full text-[11px] font-medium text-slate-700 whitespace-nowrap transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-[#E8E5DF] flex items-center gap-3">
            <button
              type="button"
              onClick={() => showToast('Mở bộ sưu tập ảnh đính kèm', 'info')}
              className="p-2 hover:bg-slate-100 rounded-xl text-slate-500"
              title="Đính kèm ảnh"
            >
              <span className="material-symbols-outlined text-lg">add_photo_alternate</span>
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Nhập nội dung tin nhắn tư vấn khách hàng..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-[#E8E5DF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#003B2B]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#006B4F] hover:bg-[#00523C] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-base">send</span>
              Gửi
            </button>
          </form>
        </div>

        {/* Right Column (3/12): Customer CRM Profile */}
        <div className="hidden lg:flex col-span-3 flex-col h-full bg-[#FCFBF8] p-5 space-y-5 overflow-y-auto">
          <div className="text-center pb-4 border-b border-[#E8E5DF] space-y-2">
            <img className="w-16 h-16 rounded-full object-cover mx-auto ring-4 ring-white shadow-md" src={currentCustomer.avatar} alt={currentCustomer.name} />
            <h3 className="font-bold text-sm text-[#141D1C]">{currentCustomer.name}</h3>
            <span className="inline-block bg-[#fea619]/20 text-[#855300] text-xs font-bold px-3 py-0.5 rounded-full">
              {currentCustomer.tier}
            </span>
          </div>

          {/* CRM Stats */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2.5 bg-white rounded-xl border border-[#E8E5DF]">
              <span className="text-slate-500">Đơn hàng thành công:</span>
              <span className="font-bold text-[#141D1C]">{currentCustomer.orderCount} đơn</span>
            </div>
            <div className="flex justify-between p-2.5 bg-white rounded-xl border border-[#E8E5DF]">
              <span className="text-slate-500">Tổng chi tiêu:</span>
              <span className="font-bold text-[#ac2c19]">{currentCustomer.totalSpent}</span>
            </div>
          </div>

          {/* Current Order Box */}
          <div className="p-4 bg-white rounded-2xl border border-[#E8E5DF] space-y-2 text-xs shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#006B4F]">Đơn Hàng Gần Nhất</span>
            <div className="font-bold text-sm text-[#141D1C]">#HUKI-8892401</div>
            <p className="text-slate-500">Combo 3 Sách in + 1 Ebook DRM</p>
            <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
              Đang vận chuyển (SPX Express)
            </span>
            <Link
              to="/orders/HUKI-8892401"
              className="block text-center py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs transition-colors mt-2"
            >
              Xem Chi Tiết Đơn
            </Link>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => showToast('Đã gửi tặng Voucher giảm 20.000đ tới khách hàng!', 'success')}
              className="w-full py-2.5 bg-[#fea619] hover:bg-[#ffb95f] text-[#2a1700] font-bold rounded-xl text-xs transition-colors shadow-2xs"
            >
              🎁 Tặng Voucher Độc Quyền
            </button>
            <button
              onClick={() => showToast('Chuyển cuộc trò chuyện sang Kỹ thuật viên DRM', 'info')}
              className="w-full py-2.5 bg-white border border-[#E8E5DF] hover:border-slate-400 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
            >
              Chuyển Kỹ Thuật DRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
