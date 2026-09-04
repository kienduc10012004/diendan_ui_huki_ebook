/* ==========================================================================
   HUKI EBOOK MARKETPLACE & FACEBOOK SOCIAL + MESSENGER APP LOGIC
   ========================================================================== */

// --- DATA STORES ---

const BANNERS_DATA = [
  {
    id: 1,
    tag: "ĐẠI HỘI SÁCH VINTAGE 2026",
    title: "Sàn Thương Mại Điện Tử Sách Số<br><span class='text-amber-400 italic'>Bản Quyền & Gian Hàng Chính Hãng</span>",
    desc: "Trải nghiệm mua sắm Ebook trực tiếp từ các Nhà xuất bản hàng đầu (Nhã Nam, NXB Trẻ, Alpha Books, Kim Đồng) tích hợp mạng xã hội thảo luận sách độc đáo.",
    bg: "from-stone-900 via-vintage-900 to-amber-950",
    btnText: "Khám Phá Sàn",
    btnAction: "window.scrollTo({top: 800, behavior: 'smooth'})"
  },
  {
    id: 2,
    tag: "TUẦN LỄ EBOOK BẢN QUYỀN",
    title: "Đọc Thử Free 5 Trang Đầu<br><span class='text-amber-300 italic'>Tải Ngay Không Cần Chờ Đợi</span>",
    desc: "Tất cả sách Ebook trên sàn Huki đều hỗ trợ bản đọc thử chuẩn EPUB/PDF nét cao trên Mobile, Tablet và PC.",
    bg: "from-amber-950 via-stone-900 to-amber-900",
    btnText: "Đọc Thử Ngay",
    btnAction: "openEbookReader(1)"
  },
  {
    id: 3,
    tag: "GIAO LƯU TÁC GIẢ & MỞ GIAN HÀNG",
    title: "Kết Nối 100+ Tác Giả<br><span class='text-amber-400 italic'>Nhận Mã Ưu Đãi Gian Hàng NXB</span>",
    desc: "Đăng bài đánh giá sách, tương tác thả tim và nhận voucher giảm đến 50k từ các thương hiệu xuất bản uy tín.",
    bg: "from-vintage-900 via-amber-950 to-stone-900",
    btnText: "Đến Diễn Đàn",
    btnAction: "switchView('forum')"
  }
];

const BOOKS_DATA = [
  {
    id: 1,
    title: "Đại Dương Đen: Tâm Lý Học Về Nỗi Đau Trầm Cảm",
    author: "Đặng Hoàng Giang",
    category: "tam-ly",
    categoryName: "Tâm Lý Học",
    price: 119000,
    oldPrice: 150000,
    discountPercent: 21,
    rating: 4.9,
    soldCount: 1420,
    stockProgress: 85,
    format: "epub",
    badge: "Mall Bán Chạy",
    publisher: "Nhà Xuất Bản Trẻ",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    synopsis: "Cuốn sách mở ra thế giới của những người trầm cảm, giúp người đọc thấu hiểu nỗi đau tinh thần và tìm lại sự đồng cảm trong cuộc sống hiện đại.",
    samplePages: [
      "Trầm cảm không phải là sự yếu đuối hay muốn gây sự chú ý. Đó là một khoảng tối thăm thẳm nơi tâm trí người bệnh bị bóp nghẹt bởi những nỗi đau vô hình...",
      "Khi một người thốt lên rằng họ mệt mỏi, đôi khi đó không phải là sự mệt mỏi về thể xác sau một ngày làm việc, mà là sự kiệt sức của tâm hồn khi phải chống chọi với chính những suy nghĩ của mình từng giây từng phút...",
      "Sự đồng cảm không bắt đầu từ những lời khuyên dạy sáo rỗng. Nó bắt đầu khi ta lắng nghe một cách chân thành, không phán xét, và chấp nhận nỗi đau của người khác như nó vốn là...",
      "Hành trình chữa lành chưa bao giờ là một đường thẳng. Sẽ có những ngày bạn thấy mình hồi phục mạnh mẽ, nhưng cũng sẽ có những ngày bóng tối lại bao trùm. Hãy kiên nhẫn với chính mình...",
      "Cuối cùng, ánh sáng luôn tồn tại ở phía cuối con đường. Hãy giữ lấy niềm tin và sự sẻ chia từ những người xung quanh bạn."
    ]
  },
  {
    id: 2,
    title: "Tâm Lý Học Về Tiền (Psychology of Money)",
    author: "Morgan Housel",
    category: "kinh-te",
    categoryName: "Kinh Tế & Đầu Tư",
    price: 135000,
    oldPrice: 180000,
    discountPercent: 25,
    rating: 4.8,
    soldCount: 3850,
    stockProgress: 92,
    format: "epub",
    badge: "Flash Sale",
    publisher: "Alpha Books",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&q=80",
    synopsis: "19 câu chuyện ngắn khám phá những cách kỳ lạ mà mọi người suy nghĩ về tiền bạc và dạy bạn cách hiểu rõ hơn về tài chính cá nhân.",
    samplePages: [
      "Quản lý tiền bạc giỏi không nhất thiết liên quan đến việc bạn thông minh thế nào, mà liên quan đến cách bạn hành xử. Và hành xử thì rất khó dạy...",
      "Sự tự do tài chính thực sự là khả năng thức dậy mỗi sáng và nói: 'Tôi có thể làm bất cứ điều gì tôi muốn vào ngày hôm nay'...",
      "Tích lũy tài sản ít liên quan đến thu nhập hay lãi suất đầu tư của bạn, mà liên quan nhiều hơn đến tỷ lệ tiết kiệm của bạn...",
      "Nhiều người chi tiền họ chưa làm ra để mua những thứ họ không thực sự cần, nhằm gây ấn tượng với những người họ thậm chí không thích...",
      "Hãy nhớ rằng: mục tiêu cao nhất của tiền bạc là mua cho bạn sự tự do về thời gian."
    ]
  },
  {
    id: 3,
    title: "Clean Code: Mã Sạch Và Tư Duy Thiết Kế",
    author: "Robert C. Martin",
    category: "cong-nghe",
    categoryName: "Công Nghệ",
    price: 210000,
    oldPrice: 260000,
    discountPercent: 19,
    rating: 5.0,
    soldCount: 940,
    stockProgress: 60,
    format: "epub",
    badge: "Ebook Độc Quyền",
    publisher: "NXB Thống Kê",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    synopsis: "Cuốn sách gối đầu giường cho mọi lập trình viên. Hướng dẫn viết code rõ ràng, dễ bảo trì và tối ưu hiệu năng.",
    samplePages: [
      "Tỷ lệ giữa thời gian đọc code và thời gian viết code là hơn 10:1. Việc làm cho code dễ đọc sẽ giúp làm cho việc viết code trở nên dễ dàng hơn...",
      "Tên của biến, hàm hay lớp phải thể hiện rõ ý định. Nếu một cái tên đòi hỏi phải có comment giải thích, thì cái tên đó chưa đủ tốt...",
      "Hàm chỉ nên làm một việc. Chúng nên làm việc đó thật tốt. Và chúng chỉ nên làm duy nhất việc đó mà thôi...",
      "Comment không thể bù đắp cho code tồi. Thay vì viết comment để giải thích đoạn code rắc rối, hãy refactor để code tự giải thích...",
      "Quy tắc Boy Scout: Luôn để lại đoạn code sạch sẽ hơn lúc bạn mới tìm thấy nó."
    ]
  },
  {
    id: 4,
    title: "Cây Cam Ngọt Của Tôi",
    author: "José Mauro de Vasconcelos",
    category: "tieu-thuyet",
    categoryName: "Tiểu Thuyết",
    price: 88000,
    oldPrice: 110000,
    discountPercent: 20,
    rating: 4.9,
    soldCount: 5200,
    stockProgress: 78,
    format: "audio",
    badge: "Yêu Thích",
    publisher: "Nhã Nam Books",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    synopsis: "Một câu chuyện cảm động về tình yêu thương, ước mơ và sự trưởng thành của cậu bé Zezé 5 tuổi người Brazil.",
    samplePages: [
      "Vị chua chát của cuộc sống đôi khi đến quá sớm với những đứa trẻ mang trái tim nhạy cảm...",
      "Cây cam ngọt ở góc vườn nhỏ là nơi Zezé tâm sự những nỗi niềm giấu kín, nơi em tìm thấy một người bạn không bao giờ phán xét...",
      "Tình yêu thương dịu dàng của bác Bồ có thể sưởi ấm tâm hồn của một đứa trẻ bị tổn thương nặng nề...",
      "Có những nỗi đau làm người ta lớn lên trong cay đắng, nhưng cũng có những ký ức ngọt ngào nâng đỡ ta suốt cả cuộc đời...",
      "Trưởng thành là khi ta nhận ra có những tình yêu vĩnh viễn không bao giờ phai nhòa."
    ]
  },
  {
    id: 5,
    title: "Đổ Mồ Hôi Trên Thương Trường",
    author: "Nhã Nam Editor & CEO Talk",
    category: "kinh-te",
    categoryName: "Kinh Tế",
    price: 145000,
    oldPrice: 195000,
    discountPercent: 26,
    rating: 4.7,
    soldCount: 610,
    stockProgress: 45,
    format: "paper",
    badge: "Huki Mall",
    publisher: "Nhã Nam Books",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
    synopsis: "Tổng hợp chiến lược quản trị thực chiến từ các doanh nghiệp hàng đầu tại Việt Nam và khu vực Đông Nam Á.",
    samplePages: [
      "Thương trường không có chỗ cho sự ngây thơ. Mỗi quyết định kinh doanh đều phải trả giá bằng tiền mặt và uy tín...",
      "Quản trị nhân sự trong thời đại số đòi hỏi sự linh hoạt và khả năng thấu hiểu tâm lý nhân viên thế hệ trẻ...",
      "Dòng tiền là mạch máu của doanh nghiệp. Bạn có thể lỗ trên sổ sách nhưng không được phép mất thanh khoản...",
      "Khủng hoảng là cơ hội để loại bỏ những quy trình cồng kềnh và tái cấu trúc doanh nghiệp trở nên tinh gọn...",
      "Thành công bền vững đến từ sự kiên trì cải tiến mỗi ngày chứ không phải từ những cú bứt phá chớp nhoáng."
    ]
  },
  {
    id: 6,
    title: "Thói Quản Nguyên Tử (Atomic Habits)",
    author: "James Clear",
    category: "ky-nang",
    categoryName: "Kỹ Năng Sống",
    price: 129000,
    oldPrice: 169000,
    discountPercent: 24,
    rating: 4.9,
    soldCount: 8400,
    stockProgress: 98,
    format: "epub",
    badge: "Top 1 Bán Chạy",
    publisher: "First News",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    synopsis: "Thay đổi nhỏ, kết quả lớn. Phương pháp dễ dàng và đã được chứng minh để xây dựng thói quen tốt và loại bỏ thói quen xấu.",
    samplePages: [
      "Nếu bạn tốt hơn 1% mỗi ngày trong một năm, bạn sẽ trở nên tốt hơn gấp 37 lần khi kết thúc năm đó...",
      "Bạn không vươn tới mức độ của mục tiêu. Bạn rơi xuống mức độ của các hệ thống mà bạn thiết lập...",
      "Cách hiệu quả nhất để thay đổi thói quen là tập trung không phải vào những gì bạn muốn đạt được, mà vào người bạn muốn trở thành...",
      "Để tạo ra một thói quen mới, hãy làm cho nó trở nên: Rõ ràng, Hấp dẫn, Dễ dàng và Thỏa mãn...",
      "Môi trường là bàn tay ẩn thiết kế nên hành vi của con người. Hãy thiết kế môi trường sống của bạn cho sự thành công."
    ]
  }
];

let FORUM_POSTS = [
  {
    id: 101,
    authorName: "Nhà Xuất Bản Trẻ (NXB Trẻ)",
    authorAvatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
    authorType: "enterprise",
    badgeLabel: "Gian Hàng NXB Chính Hãng",
    timeAgo: "2 giờ trước",
    content: "📢 THÔNG BÁO PHÁT HÀNH EBOOK MỚI! \nGian hàng NXB Trẻ chính thức mở bản quyền Ebook độc quyền cuốn 'Đại Dương Đen' trên Sàn Huki Ebook. Tặng Voucher giảm thêm 25k cho 500 độc giả đầu tiên chốt đơn hôm nay!",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
    ],
    videoUrl: null,
    bookId: 1,
    reactions: { like: 142, love: 58, haha: 12, wow: 8, sad: 0, angry: 0 },
    userReaction: 'love',
    comments: [
      { 
        id: 1, 
        user: "Hoàng Nam", 
        text: "Đã mua trực tiếp trên gian hàng NXB Trẻ, nhận Ebook tức thì luôn!",
        replies: [
          { id: 11, user: "Nhà Xuất Bản Trẻ", text: "Cảm ơn bạn Hoàng Nam đã ủng hộ Ebook bản quyền của NXB Trẻ ạ!", timeAgo: "1 giờ trước" }
        ]
      },
      { 
        id: 2, 
        user: "Thanh Trúc", 
        text: "Shop có tặng kèm bookmark điện tử không ạ?",
        replies: []
      }
    ]
  },
  {
    id: 102,
    authorName: "Tác giả Nguyễn Nhật Ánh",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    authorType: "author",
    badgeLabel: "Tác Giả Xác Thực",
    timeAgo: "4 giờ trước",
    content: "Chào các bạn độc giả Huki Marketplace! Chiều nay mình sẽ có buổi livestream ký tặng và giao lưu trên Diễn đàn. Mọi người ghé qua xem video đọc sách dưới đây và nhắn tin cho mình nhé!",
    images: [],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-turning-pages-of-a-book-42930-large.mp4",
    bookId: 4,
    reactions: { like: 320, love: 180, haha: 25, wow: 40, sad: 0, angry: 0 },
    userReaction: 'like',
    comments: [
      { 
        id: 1, 
        user: "Minh Anh", 
        text: "Hóng chú livestream chiều nay quá chú ơi!",
        replies: []
      }
    ]
  },
  {
    id: 103,
    authorName: "Lê Minh Tuấn (Dev Lead)",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    authorType: "reader",
    badgeLabel: "Độc Giả VIP",
    timeAgo: "1 ngày trước",
    content: "Mới săn được voucher giảm 30k ở gian hàng Alpha Books mua cuốn Clean Code. Cảm ơn Sàn Huki Ebook có nhiều chương trình khuyến mãi cho sinh viên IT!",
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80"
    ],
    videoUrl: null,
    bookId: 3,
    reactions: { like: 85, love: 20, haha: 5, wow: 12, sad: 0, angry: 0 },
    userReaction: null,
    comments: []
  }
];

// CHAT MESSENGER DATA STORE (Facebook Messenger 1-1 & Groups)
let CHATS_DATA = {
  direct: [
    {
      id: "nxb-tre",
      name: "Nhà Xuất Bản Trẻ",
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
      online: true,
      badge: "NXB Verified",
      unread: 1,
      messages: [
        { id: 1, sender: "nxb-tre", text: "Xin chào bạn! NXB Trẻ có thể hỗ trợ gì cho bạn về các bản Ebook chính hãng ạ?", time: "10:15 AM" },
        { id: 2, sender: "me", text: "Chào NXB Trẻ, cuốn 'Đại Dương Đen' mua hôm nay có được tặng voucher 25k không ạ?", time: "10:16 AM" },
        { id: 3, sender: "nxb-tre", text: "Dạ có ạ! Bạn dùng mã NXBTRE25K khi thanh toán trên sàn Huki nhé!", time: "10:18 AM" }
      ]
    },
    {
      id: "nha-nam",
      name: "Nhã Nam Books",
      avatar: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=100&q=80",
      online: true,
      badge: "Gian Hàng Mall",
      unread: 0,
      messages: [
        { id: 1, sender: "nha-nam", text: "Cảm ơn bạn đã quan tâm đến tác phẩm 'Cây Cam Ngọt Của Tôi'. Chúc bạn đọc sách vui vẻ!", time: "Hôm qua" }
      ]
    },
    {
      id: "tac-gia-anh",
      name: "Tác giả Nguyễn Nhật Ánh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      online: false,
      badge: "Tác Giả",
      unread: 0,
      messages: [
        { id: 1, sender: "me", text: "Hâm mộ tác phẩm của chú từ lâu ạ!", time: "2 ngày trước" },
        { id: 2, sender: "tac-gia-anh", text: "Cảm ơn bạn nhiều nhé! Chiều nay ghé xem livestream nhé.", time: "2 ngày trước" }
      ]
    }
  ],
  group: [
    {
      id: "clb-kinh-te",
      name: "CLB Sách Kinh Tế & Khởi Nghiệp",
      avatar: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=100&q=80",
      membersCount: 1240,
      unread: 2,
      messages: [
        { id: 1, sender: "Hoàng Nam", text: "Cuốn 'Tâm Lý Học Về Tiền' chương 3 hay quá mọi người ơi!", time: "09:30 AM" },
        { id: 2, sender: "Minh Tuấn", text: "Đúng rồi bạn, bài học về tích lũy tài sản rất thực tế.", time: "09:32 AM" }
      ]
    },
    {
      id: "clb-manga",
      name: "Hội Mê Manga & Light Novel",
      avatar: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100&q=80",
      membersCount: 3450,
      unread: 0,
      messages: [
        { id: 1, sender: "Thanh Trúc", text: "Có ai vừa chốt đơn tập mới nhất trên sàn Huki chưa ạ?", time: "Hôm qua" }
      ]
    },
    {
      id: 1,
      id: "clb-vintage",
      name: "Cộng Đồng Đọc Sách Vintage",
      avatar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&q=80",
      membersCount: 890,
      unread: 0,
      messages: [
        { id: 1, sender: "Đặng Hoàng Giang", text: "Chào mừng các thành viên mới đến với không gian sách Vintage!", time: "3 ngày trước" }
      ]
    }
  ]
};

// App States
let cartState = [{ bookId: 1, quantity: 1 }];
let wishlistState = [2, 4];
let followedSellers = new Set(["Nhà Xuất Bản Trẻ"]);
let currentBannerIndex = 0;
let bannerAutoplayTimer = null;

// Messenger Drawer State
let isMessengerOpen = false;
let isMessengerMinimized = false;
let activeChatType = 'direct'; // 'direct' or 'group'
let activeChatId = 'nxb-tre';

// Facet Filters State
let facetFilters = { price: 'all', rating: 0, format: 'all' };

// Ebook Reader State
let currentReaderBook = null;
let currentEbookPage = 1;
let currentEbookFontSize = 16;

// Post Media Creation State
let postMediaFiles = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderBannerCarousel();
  startBannerAutoplay();
  renderFlashSaleGrid();
  renderRecommendBooks(BOOKS_DATA);
  renderForumFeed();
  updateCartBadge();
  updateWishlistBadge();
  renderMessengerWindow();
  setupEventListeners();
});

// --- MESSENGER CHAT LOGIC (1-1 & GROUPS) ---

function toggleMessenger() {
  const drawer = document.getElementById('messenger-drawer');
  if (!drawer) return;

  isMessengerOpen = !isMessengerOpen;
  if (isMessengerOpen) {
    drawer.classList.remove('hidden');
    renderMessengerWindow();
  } else {
    drawer.classList.add('hidden');
  }
}

function minimizeMessenger() {
  const drawer = document.getElementById('messenger-drawer');
  if (!drawer) return;

  isMessengerMinimized = !isMessengerMinimized;
  if (isMessengerMinimized) {
    drawer.classList.add('minimized');
  } else {
    drawer.classList.remove('minimized');
  }
}

function openChatWithUser(chatId, type = 'direct') {
  activeChatType = type;
  activeChatId = chatId;

  if (!isMessengerOpen) {
    toggleMessenger();
  } else if (isMessengerMinimized) {
    minimizeMessenger();
  }

  renderMessengerWindow();
}

function selectChatTab(type) {
  activeChatType = type;
  const list = CHATS_DATA[type];
  if (list && list.length > 0) {
    activeChatId = list[0].id;
  }
  renderMessengerWindow();
}

function selectChatThread(chatId) {
  activeChatId = chatId;
  
  // Clear unread
  const list = CHATS_DATA[activeChatType];
  const chat = list.find(c => c.id === chatId);
  if (chat) chat.unread = 0;

  renderMessengerWindow();
}

function renderMessengerWindow() {
  const threadListElem = document.getElementById('messenger-thread-list');
  const chatPaneElem = document.getElementById('messenger-chat-pane');
  const tabDirectBtn = document.getElementById('tab-chat-direct');
  const tabGroupBtn = document.getElementById('tab-chat-group');

  if (!threadListElem || !chatPaneElem) return;

  // Active Tab Styling
  if (activeChatType === 'direct') {
    tabDirectBtn.className = "flex-1 py-2 font-bold text-xs text-amber-800 border-b-2 border-amber-800 transition-colors";
    tabGroupBtn.className = "flex-1 py-2 font-bold text-xs text-stone-500 hover:text-amber-800 transition-colors border-b-2 border-transparent";
  } else {
    tabGroupBtn.className = "flex-1 py-2 font-bold text-xs text-amber-800 border-b-2 border-amber-800 transition-colors";
    tabDirectBtn.className = "flex-1 py-2 font-bold text-xs text-stone-500 hover:text-amber-800 transition-colors border-b-2 border-transparent";
  }

  // Render Thread List Sidebar
  const threads = CHATS_DATA[activeChatType] || [];
  threadListElem.innerHTML = threads.map(t => {
    const isActive = t.id === activeChatId;

    return `
      <div onclick="selectChatThread('${t.id}')" class="p-2.5 rounded-xl cursor-pointer transition-all flex items-center gap-3 ${isActive ? 'bg-amber-100/80 border border-amber-300' : 'hover:bg-stone-100'}">
        <div class="relative shrink-0">
          <img src="${t.avatar}" class="w-10 h-10 rounded-full object-cover border border-amber-200 shadow-xs">
          ${t.online !== undefined ? `<span class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${t.online ? 'bg-emerald-500' : 'bg-stone-300'}"></span>` : ''}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-center">
            <h5 class="font-bold text-xs text-stone-900 truncate">${t.name}</h5>
            ${t.unread > 0 ? `<span class="bg-amber-800 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">${t.unread}</span>` : ''}
          </div>
          <p class="text-[11px] text-stone-500 truncate">${t.badge ? t.badge : (t.membersCount + ' thành viên')}</p>
        </div>
      </div>
    `;
  }).join('');

  // Render Conversation Pane
  const activeThread = threads.find(t => t.id === activeChatId) || threads[0];
  if (!activeThread) {
    chatPaneElem.innerHTML = `<div class="p-6 text-center text-stone-400 text-xs">Chưa chọn cuộc trò chuyện nào</div>`;
    return;
  }

  chatPaneElem.innerHTML = `
    <!-- Pane Header -->
    <div class="p-3 border-b border-stone-200 bg-amber-50/60 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <img src="${activeThread.avatar}" class="w-9 h-9 rounded-full object-cover border border-amber-300">
        <div>
          <h4 class="font-bold text-xs text-stone-900 flex items-center gap-1">
            ${activeThread.name}
            ${activeThread.online ? '<i class="fa-solid fa-circle text-[8px] text-emerald-500"></i>' : ''}
          </h4>
          <span class="text-[10px] text-stone-500">${activeThread.badge ? activeThread.badge : (activeThread.membersCount + ' thành viên')}</span>
        </div>
      </div>
      
      <div class="flex items-center gap-2 text-stone-600">
        <button onclick="showToast('Đang gọi thoại mô phỏng...', 'info')" class="w-7 h-7 rounded-full hover:bg-amber-100 flex items-center justify-center text-xs" title="Gọi thoại">
          <i class="fa-solid fa-phone"></i>
        </button>
        <button onclick="showToast('Đang gọi Video mô phỏng...', 'info')" class="w-7 h-7 rounded-full hover:bg-amber-100 flex items-center justify-center text-xs" title="Gọi Video">
          <i class="fa-solid fa-video"></i>
        </button>
      </div>
    </div>

    <!-- Messages Container -->
    <div class="flex-1 p-3 overflow-y-auto space-y-2 bg-stone-50/50" id="messenger-messages-box">
      ${activeThread.messages.map(m => {
        const isMe = m.sender === 'me';
        return `
          <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
            ${!isMe && activeChatType === 'group' ? `<span class="text-[10px] font-bold text-stone-500 mb-0.5 ml-1">${m.sender}</span>` : ''}
            <div class="max-w-[75%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed shadow-xs ${isMe ? 'bg-amber-800 text-white rounded-br-none' : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'}">
              ${escapeHtml(m.text)}
            </div>
            <span class="text-[9px] text-stone-400 mt-0.5 px-1">${m.time}</span>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Message Input Bar -->
    <div class="p-2.5 border-t border-stone-200 bg-white flex items-center gap-2">
      <button onclick="showToast('Chọn ảnh đính kèm chat', 'info')" class="text-stone-400 hover:text-amber-800 p-1">
        <i class="fa-regular fa-image"></i>
      </button>
      <input type="text" id="messenger-input-field" onkeypress="handleMessengerKeyPress(event)" placeholder="Nhập tin nhắn..." class="flex-1 bg-stone-100 border border-stone-300 rounded-full px-3.5 py-1.5 text-xs text-stone-800 focus:outline-none focus:border-amber-700">
      <button onclick="sendChatMessage()" class="w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-900 text-white flex items-center justify-center text-xs shadow transition-colors">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  `;

  // Auto scroll bottom
  setTimeout(() => {
    const box = document.getElementById('messenger-messages-box');
    if (box) box.scrollTop = box.scrollHeight;
  }, 50);
}

function sendChatMessage() {
  const input = document.getElementById('messenger-input-field');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const threads = CHATS_DATA[activeChatType];
  const activeThread = threads.find(t => t.id === activeChatId);
  if (!activeThread) return;

  const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  activeThread.messages.push({
    id: Date.now(),
    sender: 'me',
    text: text,
    time: nowStr
  });

  input.value = '';
  renderMessengerWindow();

  // Simulated Auto-Reply for 1-1 Chat
  if (activeChatType === 'direct') {
    setTimeout(() => {
      let replyText = `Cảm ơn bạn đã nhắn tin cho ${activeThread.name}! Chúng tôi đã ghi nhận thắc mắc: "${text}" và sẽ phản hồi trong giây lát.`;
      if (activeThread.id === 'nxb-tre') {
        replyText = "Cảm ơn bạn! Bạn có thể xem danh sách Ebook ưu đãi mới nhất tại Gian hàng NXB Trẻ trên Sàn Huki nhé!";
      }

      activeThread.messages.push({
        id: Date.now() + 1,
        sender: activeThread.id,
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      renderMessengerWindow();
    }, 1200);
  }
}

function handleMessengerKeyPress(e) {
  if (e.key === 'Enter') sendChatMessage();
}

// --- FACEBOOK REACTION HANDLER ---

function setPostReaction(postId, reactionType) {
  const post = FORUM_POSTS.find(p => p.id === postId);
  if (!post) return;

  const oldReaction = post.userReaction;
  if (oldReaction === reactionType) {
    // Toggle off
    post.reactions[reactionType]--;
    post.userReaction = null;
  } else {
    if (oldReaction) post.reactions[oldReaction]--;
    if (!post.reactions[reactionType]) post.reactions[reactionType] = 0;
    post.reactions[reactionType]++;
    post.userReaction = reactionType;
    showToast(`Bạn đã bày tỏ cảm xúc ${reactionType.toUpperCase()}!`, 'success');
  }

  renderForumFeed();
}

// --- BANNER CAROUSEL LOGIC ---

function renderBannerCarousel() {
  const bannerBox = document.getElementById('main-banner-carousel');
  if (!bannerBox) return;

  const banner = BANNERS_DATA[currentBannerIndex];
  bannerBox.className = `lg:col-span-2 bg-gradient-to-r ${banner.bg} rounded-2xl p-6 text-white relative overflow-hidden shadow-xl flex flex-col justify-between min-h-[260px] border border-amber-900/50 transition-all duration-500`;

  bannerBox.innerHTML = `
    <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div>
      <span class="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
        <i class="fa-solid fa-sparkles"></i> ${banner.tag}
      </span>
      <h1 class="font-serif-vintage text-2xl md:text-3xl font-extrabold text-amber-100 leading-tight mb-2">
        ${banner.title}
      </h1>
      <p class="text-vintage-200 text-xs max-w-lg leading-relaxed">
        ${banner.desc}
      </p>
    </div>

    <div class="flex items-center justify-between mt-4">
      <div class="flex items-center gap-3">
        <button onclick="${banner.btnAction}" class="bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-cart-shopping"></i> ${banner.btnText}
        </button>
        <button onclick="switchView('forum')" class="bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/30 font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-users"></i> Tham Gia Diễn Đàn
        </button>
      </div>

      <!-- Carousel Pagination Dots -->
      <div class="flex items-center gap-1.5">
        ${BANNERS_DATA.map((_, idx) => `
          <button onclick="goToBanner(${idx})" class="w-2.5 h-2.5 rounded-full transition-all ${idx === currentBannerIndex ? 'bg-amber-400 w-6' : 'bg-white/40 hover:bg-white/70'}"></button>
        `).join('')}
      </div>
    </div>
  `;
}

function nextBanner() {
  currentBannerIndex = (currentBannerIndex + 1) % BANNERS_DATA.length;
  renderBannerCarousel();
}

function goToBanner(index) {
  currentBannerIndex = index;
  renderBannerCarousel();
}

function startBannerAutoplay() {
  if (bannerAutoplayTimer) clearInterval(bannerAutoplayTimer);
  bannerAutoplayTimer = setInterval(nextBanner, 5000);
}

// --- FACET FILTERING LOGIC ---

function updateFacetFilter(type, value) {
  facetFilters[type] = value;
  applyCombinedFilters();
}

function resetFacetFilters() {
  facetFilters = { price: 'all', rating: 0, format: 'all' };
  document.querySelectorAll('.facet-price-radio').forEach(r => r.checked = r.value === 'all');
  document.querySelectorAll('.facet-rating-radio').forEach(r => r.checked = r.value === '0');
  document.querySelectorAll('.facet-format-radio').forEach(r => r.checked = r.value === 'all');
  applyCombinedFilters();
  showToast('Đã xóa tất cả bộ lọc!', 'info');
}

function applyCombinedFilters() {
  let filtered = [...BOOKS_DATA];

  if (facetFilters.price === 'under100') {
    filtered = filtered.filter(b => b.price < 100000);
  } else if (facetFilters.price === '100to200') {
    filtered = filtered.filter(b => b.price >= 100000 && b.price <= 200000);
  } else if (facetFilters.price === 'over200') {
    filtered = filtered.filter(b => b.price > 200000);
  }

  if (facetFilters.rating > 0) {
    filtered = filtered.filter(b => b.rating >= facetFilters.rating);
  }

  if (facetFilters.format !== 'all') {
    filtered = filtered.filter(b => b.format === facetFilters.format);
  }

  renderRecommendBooks(filtered);
}

// --- RENDER FUNCTIONS ---

function renderFlashSaleGrid() {
  const container = document.getElementById('flash-sale-grid');
  if (!container) return;

  const flashBooks = BOOKS_DATA.slice(0, 4);
  container.innerHTML = flashBooks.map(book => {
    const isWishlisted = wishlistState.includes(book.id);

    return `
      <div class="bg-white border border-amber-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all relative group flex flex-col justify-between">
        <div class="absolute top-2 left-2 z-10 flex gap-1">
          <span class="bg-amber-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow">
            -${book.discountPercent}%
          </span>
        </div>
        <button onclick="toggleWishlist(${book.id})" class="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center text-xs ${isWishlisted ? 'text-red-600' : 'text-stone-400 hover:text-red-500'} transition-colors">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="relative overflow-hidden rounded-lg bg-amber-50 h-48 mb-2 flex items-center justify-center">
          <img class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="${book.cover}" alt="${book.title}">
          <div class="absolute inset-0 bg-amber-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-xs">
            <button onclick="openQuickViewModal(${book.id})" class="bg-white/90 hover:bg-white text-stone-800 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow transition-all">
              <i class="fa-regular fa-eye"></i> Xem
            </button>
            <button onclick="openEbookReader(${book.id})" class="bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg shadow transition-all">
              <i class="fa-solid fa-book-open"></i> Đọc thử
            </button>
          </div>
        </div>
        <div>
          <h4 class="font-bold text-sm text-stone-900 line-clamp-2 mb-1 group-hover:text-amber-800 transition-colors" title="${book.title}">${book.title}</h4>
          <div class="flex items-baseline gap-2 mb-2">
            <span class="text-base font-extrabold text-amber-700">${formatCurrency(book.price)}</span>
            <span class="text-xs text-stone-400 line-through">${formatCurrency(book.oldPrice)}</span>
          </div>
        </div>
        <div>
          <div class="w-full bg-amber-100 rounded-full h-4 relative overflow-hidden mb-2">
            <div class="bg-shimmer h-full rounded-full" style="width: ${book.stockProgress}%;"></div>
            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-stone-800 uppercase tracking-wider">
              🔥 ĐÃ BÁN ${book.soldCount}
            </span>
          </div>
          <button onclick="addToCart(${book.id})" class="w-full bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1 shadow">
            <i class="fa-solid fa-cart-plus"></i> Săn Deal Ngay
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderRecommendBooks(books) {
  const grid = document.getElementById('books-recommend-grid');
  if (!grid) return;

  if (books.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-12 text-stone-500">
      <i class="fa-solid fa-book-open text-4xl mb-3 text-amber-700"></i>
      <p class="font-medium">Không tìm thấy sách nào phù hợp với bộ lọc!</p>
      <button onclick="resetFacetFilters()" class="mt-3 bg-amber-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow hover:bg-amber-900">
        Xóa bộ lọc
      </button>
    </div>`;
    return;
  }

  grid.innerHTML = books.map(book => {
    const isWishlisted = wishlistState.includes(book.id);

    return `
      <div class="bg-white border border-stone-200/80 rounded-xl p-3.5 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between group relative">
        <button onclick="toggleWishlist(${book.id})" class="absolute top-5 right-5 z-10 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center text-xs ${isWishlisted ? 'text-red-600' : 'text-stone-400 hover:text-red-500'} transition-colors" title="Lưu vào sách yêu thích">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div>
          <div class="relative overflow-hidden rounded-lg bg-stone-100 h-52 mb-3">
            ${book.badge ? `<span class="absolute top-2 left-2 z-10 bg-amber-700 text-amber-50 text-[10px] font-bold px-2 py-0.5 rounded shadow">${book.badge}</span>` : ''}
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="${book.cover}" alt="${book.title}">
            <div class="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
              <button onclick="openQuickViewModal(${book.id})" class="bg-white/90 hover:bg-white text-stone-800 text-xs font-bold px-3 py-1.5 rounded-full shadow transition-all w-28 text-center">
                <i class="fa-regular fa-eye"></i> Xem nhanh
              </button>
              <button onclick="openEbookReader(${book.id})" class="bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow transition-all w-28 text-center">
                <i class="fa-solid fa-book-open"></i> Đọc thử
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-[11px] font-bold text-amber-700 uppercase tracking-wider">${book.categoryName}</span>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 uppercase">${book.format}</span>
          </div>
          <h3 class="font-bold text-stone-900 text-sm mb-1 line-clamp-2 group-hover:text-amber-800 transition-colors" title="${book.title}">${book.title}</h3>
          <div class="text-xs text-stone-500 mb-2 flex items-center gap-1">
            <i class="fa-solid fa-store text-amber-600 text-[10px]"></i> ${book.publisher}
          </div>
        </div>

        <div>
          <div class="flex items-center gap-1 text-xs text-amber-500 mb-2">
            <i class="fa-solid fa-star"></i>
            <span class="font-bold text-stone-800">${book.rating}</span>
            <span class="text-stone-400 text-[11px]">| Đã bán ${book.soldCount}</span>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-dashed border-stone-200">
            <div>
              <span class="font-extrabold text-amber-800 text-base">${formatCurrency(book.price)}</span>
            </div>
            <button onclick="addToCart(${book.id})" class="w-9 h-9 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-800 hover:text-white transition-colors flex items-center justify-center shadow-xs" title="Thêm vào giỏ hàng">
              <i class="fa-solid fa-cart-plus text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Forum Feed (with Photo Grid, Video Player, Reaction Popups & Nested Replies)
function renderForumFeed(filterTag = 'all') {
  const feedContainer = document.getElementById('forum-post-feed');
  if (!feedContainer) return;

  let postsToRender = FORUM_POSTS;
  if (filterTag !== 'all') {
    postsToRender = FORUM_POSTS.filter(post => post.authorType === filterTag || post.content.toLowerCase().includes(filterTag.toLowerCase()));
  }

  feedContainer.innerHTML = postsToRender.map(post => {
    const attachedBook = BOOKS_DATA.find(b => b.id === post.bookId);
    const isFollowing = followedSellers.has(post.authorName);
    
    // Total reaction counts
    const totalReactions = Object.values(post.reactions || {}).reduce((a, b) => a + b, 0);

    return `
      <div class="bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow" id="post-${post.id}">
        <!-- Author Header -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <img class="w-11 h-11 rounded-full object-cover border border-amber-200 shadow-xs" src="${post.authorAvatar}" alt="${post.authorName}">
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-bold text-stone-900 text-sm">${post.authorName}</h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${post.authorType === 'enterprise' ? 'bg-sky-100 text-sky-700' : post.authorType === 'author' ? 'bg-purple-100 text-purple-700' : 'bg-stone-100 text-stone-600'}">
                  ${post.authorType === 'enterprise' ? '<i class="fa-solid fa-circle-check text-sky-600 mr-0.5"></i>' : ''}${post.badgeLabel}
                </span>
              </div>
              <span class="text-xs text-stone-400">${post.timeAgo}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <button onclick="openChatWithUser('${post.authorName === 'Nhà Xuất Bản Trẻ (NXB Trẻ)' ? 'nxb-tre' : 'nha-nam'}', 'direct')" class="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors flex items-center gap-1">
              <i class="fa-regular fa-comment-dots"></i> Nhắn tin
            </button>
            <button onclick="toggleFollowSeller('${post.authorName}', this)" class="text-xs font-bold px-3 py-1 rounded-full border ${isFollowing ? 'bg-stone-100 border-stone-300 text-stone-600' : 'border-amber-700 text-amber-800 hover:bg-amber-50'} transition-colors">
              ${isFollowing ? '<i class="fa-solid fa-check"></i> Đã Theo Dõi' : '+ Theo Dõi'}
            </button>
          </div>
        </div>

        <!-- Post Content -->
        <p class="text-stone-800 text-sm leading-relaxed mb-3 whitespace-pre-line">${escapeHtml(post.content)}</p>

        <!-- Attached Photo Grid (Facebook Style) -->
        ${post.images && post.images.length > 0 ? `
          <div class="mb-3 ${post.images.length === 1 ? 'photo-grid-1' : post.images.length === 2 ? 'photo-grid-2' : post.images.length === 3 ? 'photo-grid-3' : 'photo-grid-4'}">
            ${post.images.map(img => `<img src="${img}" class="w-full h-full object-cover rounded-lg">`).join('')}
          </div>
        ` : ''}

        <!-- Attached Video Player -->
        ${post.videoUrl ? `
          <div class="mb-3 rounded-xl overflow-hidden bg-black aspect-video relative group">
            <video src="${post.videoUrl}" controls class="w-full h-full object-cover"></video>
          </div>
        ` : ''}

        <!-- Attached Book Card -->
        ${attachedBook ? `
          <div class="bg-amber-50/80 border border-amber-200/70 rounded-lg p-3 mb-3 flex items-center gap-3">
            <img class="w-12 h-16 object-cover rounded shadow-xs" src="${attachedBook.cover}" alt="${attachedBook.title}">
            <div class="flex-1 min-w-0">
              <h5 class="font-bold text-xs text-stone-900 truncate">${attachedBook.title}</h5>
              <div class="text-[11px] text-stone-500">Gian hàng: ${attachedBook.publisher}</div>
              <div class="font-bold text-amber-800 text-xs mt-0.5">${formatCurrency(attachedBook.price)}</div>
            </div>
            <div class="flex gap-2">
              <button onclick="openEbookReader(${attachedBook.id})" class="border border-amber-800 text-amber-800 text-xs font-bold px-2.5 py-1.5 rounded-lg hover:bg-amber-100 transition-colors">
                Đọc thử
              </button>
              <button onclick="addToCart(${attachedBook.id})" class="bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow transition-colors flex items-center gap-1 shrink-0">
                <i class="fa-solid fa-bag-shopping"></i> Mua ngay
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Post Reactions Stats -->
        <div class="flex items-center justify-between text-xs text-stone-500 pb-2 mb-2 border-b border-stone-100">
          <div class="flex items-center gap-1">
            <span class="flex -space-x-1">
              <span class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] border border-white">👍</span>
              <span class="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[9px] border border-white">❤️</span>
              <span class="w-4 h-4 rounded-full bg-amber-400 text-white flex items-center justify-center text-[9px] border border-white">😆</span>
            </span>
            <span class="font-semibold text-stone-700 ml-1">${totalReactions} cảm xúc</span>
          </div>
          <span>${post.comments.length} bình luận</span>
        </div>

        <!-- Actions Row with Facebook Reaction Popup -->
        <div class="flex items-center justify-around text-xs font-semibold text-stone-600 pt-1">
          <div class="relative flex-1 group\/reaction">
            <!-- Reaction Popup Bar -->
            <div class="reaction-popup-container">
              <span onclick="setPostReaction(${post.id}, 'like')" class="reaction-btn" title="Thích">👍</span>
              <span onclick="setPostReaction(${post.id}, 'love')" class="reaction-btn" title="Yêu thích">❤️</span>
              <span onclick="setPostReaction(${post.id}, 'haha')" class="reaction-btn" title="Haha">😆</span>
              <span onclick="setPostReaction(${post.id}, 'wow')" class="reaction-btn" title="Wow">😮</span>
              <span onclick="setPostReaction(${post.id}, 'sad')" class="reaction-btn" title="Buồn">😢</span>
              <span onclick="setPostReaction(${post.id}, 'angry')" class="reaction-btn" title="Phẫn nộ">😡</span>
            </div>

            <button onclick="setPostReaction(${post.id}, 'like')" class="w-full py-1.5 flex items-center justify-center gap-1.5 rounded-lg hover:bg-stone-50 transition-colors ${post.userReaction ? 'text-amber-800 font-bold' : ''}">
              <i class="${post.userReaction ? 'fa-solid animate-heart-bounce text-red-500' : 'fa-regular'} fa-thumbs-up text-sm"></i>
              <span>${post.userReaction ? post.userReaction.toUpperCase() : 'Thích'}</span>
            </button>
          </div>

          <button onclick="toggleCommentsDrawer(${post.id})" class="flex-1 py-1.5 flex items-center justify-center gap-1.5 rounded-lg hover:bg-stone-50 transition-colors">
            <i class="fa-regular fa-comment text-sm"></i>
            <span>Bình luận</span>
          </button>

          <button onclick="showToast('Đã sao chép liên kết bài viết Facebook style!', 'success')" class="flex-1 py-1.5 flex items-center justify-center gap-1.5 rounded-lg hover:bg-stone-50 transition-colors">
            <i class="fa-regular fa-share-from-square text-sm"></i>
            <span>Chia sẻ</span>
          </button>
        </div>

        <!-- Comments Drawer with Nested Replies -->
        <div class="mt-3 pt-3 border-t border-stone-100 hidden" id="comments-wrapper-${post.id}">
          <div class="flex items-center gap-2 mb-3">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" class="w-8 h-8 rounded-full object-cover" alt="User">
            <input type="text" id="comment-input-${post.id}" onkeypress="handleCommentSubmit(event, ${post.id})" class="flex-1 bg-stone-100 border border-stone-200 rounded-full px-3 py-1.5 text-xs text-stone-800 focus:outline-none focus:border-amber-600" placeholder="Viết bình luận của bạn...">
            <button onclick="submitComment(${post.id})" class="bg-amber-800 text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-amber-900 transition-colors">Gửi</button>
          </div>

          <div class="space-y-3">
            ${post.comments.map(c => `
              <div class="bg-stone-50 rounded-lg p-3 text-xs">
                <div class="font-bold text-stone-900 mb-0.5">${escapeHtml(c.user)}</div>
                <div class="text-stone-700 mb-2">${escapeHtml(c.text)}</div>
                
                <div class="flex items-center gap-3 text-[11px] text-stone-500 font-semibold mb-2">
                  <button onclick="toggleReplyInput(${post.id}, ${c.id})" class="hover:text-amber-800"><i class="fa-solid fa-reply"></i> Trả lời</button>
                </div>

                <!-- Nested Replies List -->
                ${c.replies && c.replies.length > 0 ? `
                  <div class="pl-4 border-l-2 border-amber-200 space-y-2 mt-2">
                    ${c.replies.map(r => `
                      <div class="bg-white p-2 rounded border border-stone-200">
                        <div class="font-bold text-stone-900 text-[11px] flex justify-between">
                          <span>${escapeHtml(r.user)}</span>
                          <span class="text-[10px] text-stone-400 font-normal">${r.timeAgo}</span>
                        </div>
                        <div class="text-stone-700 text-[11px] mt-0.5">${escapeHtml(r.text)}</div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}

                <!-- Hidden Reply Input Box -->
                <div class="hidden mt-2 pt-2 border-t border-stone-200 flex gap-2" id="reply-box-${post.id}-${c.id}">
                  <input type="text" id="reply-input-${post.id}-${c.id}" class="flex-1 bg-white border border-stone-300 rounded-full px-3 py-1 text-xs text-stone-800" placeholder="Viết câu trả lời...">
                  <button onclick="submitReply(${post.id}, ${c.id})" class="bg-amber-800 text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-amber-900">Trả lời</button>
                </div>

              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// --- EBOOK INTERACTIVE READER MODAL LOGIC ---

function openEbookReader(bookId) {
  const book = BOOKS_DATA.find(b => b.id === bookId);
  if (!book) return;

  currentReaderBook = book;
  currentEbookPage = 1;

  document.getElementById('reader-book-title').textContent = book.title;
  document.getElementById('reader-book-author').textContent = book.author;
  renderEbookPageContent();

  document.getElementById('ebook-reader-modal').classList.remove('hidden');
}

function closeEbookReader() {
  document.getElementById('ebook-reader-modal').classList.add('hidden');
}

function renderEbookPageContent() {
  if (!currentReaderBook) return;

  const contentArea = document.getElementById('ebook-reader-content');
  const pageNumElem = document.getElementById('reader-page-number');
  
  const pages = currentReaderBook.samplePages || ["Đang tải bản xem thử Ebook..."];
  contentArea.innerHTML = `<p class="leading-relaxed font-serif-reader text-stone-800" style="font-size: ${currentEbookFontSize}px;">${pages[currentEbookPage - 1]}</p>`;
  
  pageNumElem.textContent = `Trang ${currentEbookPage} / ${pages.length}`;
}

function nextEbookPage() {
  if (!currentReaderBook) return;
  const maxPages = currentReaderBook.samplePages ? currentReaderBook.samplePages.length : 1;
  if (currentEbookPage < maxPages) {
    currentEbookPage++;
    renderEbookPageContent();
  } else {
    showToast('Bạn đã đọc hết 5 trang dùng thử! Đặt mua để đọc toàn bộ Ebook.', 'info');
  }
}

function prevEbookPage() {
  if (currentEbookPage > 1) {
    currentEbookPage--;
    renderEbookPageContent();
  }
}

function changeEbookFontSize(delta) {
  currentEbookFontSize = Math.max(12, Math.min(24, currentEbookFontSize + delta));
  renderEbookPageContent();
}

// --- WISHLIST MANAGEMENT ---

function toggleWishlist(bookId) {
  const idx = wishlistState.indexOf(bookId);
  if (idx > -1) {
    wishlistState.splice(idx, 1);
    showToast('Đã xóa khỏi danh sách yêu thích!', 'info');
  } else {
    wishlistState.push(bookId);
    showToast('Đã lưu sách vào danh sách yêu thích!', 'success');
  }

  updateWishlistBadge();
  renderFlashSaleGrid();
  applyCombinedFilters();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-badge-count');
  if (badge) badge.textContent = wishlistState.length;
}

// --- FOLLOW SELLER / PUBLISHER ---

function toggleFollowSeller(sellerName, btnElem) {
  if (followedSellers.has(sellerName)) {
    followedSellers.delete(sellerName);
    showToast(`Đã bỏ theo dõi gian hàng ${sellerName}`, 'info');
  } else {
    followedSellers.add(sellerName);
    showToast(`Đã theo dõi gian hàng ${sellerName}!`, 'success');
  }

  renderForumFeed();
}

// --- NESTED REPLIES LOGIC ---

function toggleReplyInput(postId, commentId) {
  const box = document.getElementById(`reply-box-${postId}-${commentId}`);
  if (box) box.classList.toggle('hidden');
}

function submitReply(postId, commentId) {
  const input = document.getElementById(`reply-input-${postId}-${commentId}`);
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const post = FORUM_POSTS.find(p => p.id === postId);
  if (!post) return;

  const comment = post.comments.find(c => c.id === commentId);
  if (comment) {
    if (!comment.replies) comment.replies = [];
    comment.replies.push({
      id: Date.now(),
      user: "Bạn (Độc Giả)",
      text: text,
      timeAgo: "Vừa xong"
    });

    input.value = '';
    renderForumFeed();
    showToast('Đã trả lời bình luận!', 'success');

    setTimeout(() => {
      const wrapper = document.getElementById(`comments-wrapper-${postId}`);
      if (wrapper) wrapper.classList.remove('hidden');
    }, 50);
  }
}

// --- IMAGE & VIDEO UPLOAD SIMULATION FOR POST CREATION ---

function handleFakeImageUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function(e) {
      postMediaFiles.push(e.target.result);
      renderImagePreviewGrid();
    };
    reader.readAsDataURL(file);
  }
}

function renderImagePreviewGrid() {
  const grid = document.getElementById('post-image-preview-grid');
  if (!grid) return;

  if (postMediaFiles.length === 0) {
    grid.innerHTML = '';
    grid.classList.add('hidden');
    return;
  }

  grid.classList.remove('hidden');
  grid.innerHTML = postMediaFiles.map((imgUrl, idx) => `
    <div class="relative w-20 h-20 rounded-lg overflow-hidden border border-amber-300 shadow-xs">
      <img src="${imgUrl}" class="w-full h-full object-cover">
      <button onclick="removeUploadedImage(${idx})" type="button" class="absolute top-1 right-1 w-5 h-5 rounded-full bg-stone-900/80 text-white flex items-center justify-center text-[10px]">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

function removeUploadedImage(idx) {
  postMediaFiles.splice(idx, 1);
  renderImagePreviewGrid();
}

// --- DARK MODE TOGGLE ---

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  showToast(isDark ? 'Đã bật chế độ Đêm (Midnight Espresso)' : 'Đã bật chế độ Sáng (Vintage Paper)', 'info');
}

// --- VIEW SWITCHER & OTHER ACTIONS ---

function switchView(viewName) {
  const storeView = document.getElementById('store-view');
  const forumView = document.getElementById('forum-view');
  const storeBtn = document.getElementById('btn-view-store');
  const forumBtn = document.getElementById('btn-view-forum');

  if (viewName === 'store') {
    storeView.classList.remove('hidden');
    forumView.classList.add('hidden');
    storeBtn.className = "px-4 py-1.5 rounded-full font-bold text-xs bg-amber-800 text-white shadow-sm flex items-center gap-1.5 transition-all";
    forumBtn.className = "px-4 py-1.5 rounded-full font-bold text-xs text-stone-600 hover:text-amber-900 flex items-center gap-1.5 transition-all";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    forumView.classList.remove('hidden');
    storeView.classList.add('hidden');
    forumBtn.className = "px-4 py-1.5 rounded-full font-bold text-xs bg-amber-800 text-white shadow-sm flex items-center gap-1.5 transition-all";
    storeBtn.className = "px-4 py-1.5 rounded-full font-bold text-xs text-stone-600 hover:text-amber-900 flex items-center gap-1.5 transition-all";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function filterRecommendTab(category, btnElem) {
  document.querySelectorAll('.recommend-tab-btn').forEach(btn => {
    btn.className = "recommend-tab-btn pb-2 font-bold text-xs text-stone-500 hover:text-amber-800 transition-colors border-b-2 border-transparent";
  });
  btnElem.className = "recommend-tab-btn pb-2 font-bold text-xs text-amber-800 border-b-2 border-amber-800 transition-colors";

  if (category === 'all') {
    renderRecommendBooks(BOOKS_DATA);
  } else {
    const filtered = BOOKS_DATA.filter(b => b.category === category);
    renderRecommendBooks(filtered);
  }
}

function handleSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    renderRecommendBooks(BOOKS_DATA);
    return;
  }

  const filtered = BOOKS_DATA.filter(b => 
    b.title.toLowerCase().includes(q) || 
    b.author.toLowerCase().includes(q) ||
    b.publisher.toLowerCase().includes(q)
  );

  switchView('store');
  renderRecommendBooks(filtered);
}

// Quick View Modal
function openQuickViewModal(bookId) {
  const book = BOOKS_DATA.find(b => b.id === bookId);
  if (!book) return;

  const modalBody = document.getElementById('quick-view-modal-body');
  modalBody.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      <div class="md:col-span-1">
        <img src="${book.cover}" alt="${book.title}" class="w-full rounded-xl shadow-md border border-amber-200">
      </div>
      <div class="md:col-span-2">
        <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">${book.categoryName}</span>
        <h2 class="text-xl font-extrabold text-stone-900 mt-2 mb-1">${book.title}</h2>
        <div class="text-xs text-stone-600 mb-2">Tác giả: <strong>${book.author}</strong> | Gian hàng: <strong>${book.publisher}</strong></div>
        <div class="flex items-center gap-2 text-xs text-amber-500 mb-3">
          <i class="fa-solid fa-star"></i>
          <span class="font-bold text-stone-800">${book.rating}</span>
          <span class="text-stone-400">(${book.soldCount} đơn đã bán)</span>
        </div>
        <div class="text-2xl font-black text-amber-800 mb-3">
          ${formatCurrency(book.price)}
          <span class="text-xs text-stone-400 line-through font-normal ml-2">${formatCurrency(book.oldPrice)}</span>
        </div>
        <p class="text-xs text-stone-700 leading-relaxed mb-4 bg-amber-50 p-3 rounded-lg border border-amber-100">${book.synopsis}</p>
        
        <div class="flex gap-2">
          <button onclick="addToCart(${book.id}); closeQuickViewModal();" class="flex-1 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-2.5 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
          </button>
          <button onclick="openEbookReader(${book.id}); closeQuickViewModal();" class="bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-amber-200 transition-colors">
            <i class="fa-solid fa-book-open"></i> Đọc thử ngay
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('quick-view-modal').classList.remove('hidden');
}

function closeQuickViewModal() {
  document.getElementById('quick-view-modal').classList.add('hidden');
}

function toggleCommentsDrawer(postId) {
  const wrapper = document.getElementById(`comments-wrapper-${postId}`);
  if (wrapper) wrapper.classList.toggle('hidden');
}

function submitComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const post = FORUM_POSTS.find(p => p.id === postId);
  if (post) {
    post.comments.push({ id: Date.now(), user: "Bạn (Độc Giả)", text: text, replies: [] });
    input.value = '';
    renderForumFeed();
    showToast('Đã gửi bình luận!', 'success');
    setTimeout(() => {
      const wrapper = document.getElementById(`comments-wrapper-${postId}`);
      if (wrapper) wrapper.classList.remove('hidden');
    }, 50);
  }
}

function handleCommentSubmit(e, postId) {
  if (e.key === 'Enter') submitComment(postId);
}

// Create Post Modal
function openCreatePostModal() {
  const bookSelect = document.getElementById('create-post-book-select');
  if (bookSelect) {
    bookSelect.innerHTML = `<option value="">-- Không đính kèm sách --</option>` + 
      BOOKS_DATA.map(b => `<option value="${b.id}">${b.title} - Gian hàng: ${b.publisher}</option>`).join('');
  }
  document.getElementById('create-post-modal').classList.remove('hidden');
}

function closeCreatePostModal() {
  document.getElementById('create-post-modal').classList.add('hidden');
  postMediaFiles = [];
  renderImagePreviewGrid();
}

function handleCreatePostSubmit(e) {
  e.preventDefault();
  const content = document.getElementById('post-content-input').value.trim();
  const bookIdVal = document.getElementById('create-post-book-select').value;
  const authorTypeVal = document.getElementById('post-author-type').value;
  const videoInputVal = document.getElementById('post-video-url-input')?.value.trim();

  if (!content) {
    showToast('Vui lòng nhập nội dung bài viết!', 'danger');
    return;
  }

  let badgeText = "Độc Giả VIP";
  let authorNameStr = "Nguyễn Văn Anh (Bạn)";
  if (authorTypeVal === 'enterprise') {
    badgeText = "Gian Hàng NXB Chính Hãng";
    authorNameStr = "Gian Hàng Sách Alpha Books";
  } else if (authorTypeVal === 'author') {
    badgeText = "Tác Giả Xác Thực";
    authorNameStr = "Tác giả Nguyễn Nhật Ánh";
  }

  const newPost = {
    id: Date.now(),
    authorName: authorNameStr,
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    authorType: authorTypeVal,
    badgeLabel: badgeText,
    timeAgo: "Vừa xong",
    content: content,
    images: [...postMediaFiles],
    videoUrl: videoInputVal ? videoInputVal : null,
    bookId: bookIdVal ? parseInt(bookIdVal) : null,
    reactions: { like: 1, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
    userReaction: 'like',
    comments: []
  };

  FORUM_POSTS.unshift(newPost);
  renderForumFeed();
  closeCreatePostModal();
  document.getElementById('create-post-form').reset();
  postMediaFiles = [];
  renderImagePreviewGrid();
  showToast('Đã đăng bài viết mới lên Diễn đàn Facebook style!', 'success');
}

// CART MANAGEMENT
function addToCart(bookId) {
  const existing = cartState.find(i => i.bookId === bookId);
  if (existing) {
    existing.quantity++;
  } else {
    cartState.push({ bookId: bookId, quantity: 1 });
  }

  updateCartBadge();
  showToast('Đã thêm sản phẩm vào giỏ hàng Sàn!', 'success');
}

function updateCartBadge() {
  const totalCount = cartState.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge-count');
  if (badge) badge.textContent = totalCount;
}

function openCartDrawer() {
  renderCartDrawerItems();
  document.getElementById('cart-drawer-overlay').classList.remove('hidden');
  document.getElementById('cart-drawer').classList.remove('translate-x-full');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('hidden');
  document.getElementById('cart-drawer').classList.add('translate-x-full');
}

function renderCartDrawerItems() {
  const container = document.getElementById('cart-items-container');
  const totalPriceElem = document.getElementById('cart-total-price');

  if (!container) return;

  if (cartState.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-stone-400">
        <i class="fa-solid fa-cart-shopping text-4xl mb-3 opacity-60"></i>
        <p class="text-xs">Giỏ hàng của bạn đang trống!</p>
      </div>
    `;
    totalPriceElem.textContent = formatCurrency(0);
    return;
  }

  let totalAmount = 0;

  container.innerHTML = cartState.map(item => {
    const book = BOOKS_DATA.find(b => b.id === item.bookId);
    if (!book) return '';

    const subtotal = book.price * item.quantity;
    totalAmount += subtotal;

    return `
      <div class="flex gap-3 pb-3 border-b border-stone-200 items-center">
        <img class="w-14 h-20 object-cover rounded border border-amber-200" src="${book.cover}" alt="${book.title}">
        <div class="flex-1 min-w-0">
          <h5 class="font-bold text-xs text-stone-900 truncate">${book.title}</h5>
          <div class="text-[11px] text-stone-500 mb-1">${book.publisher}</div>
          <div class="font-bold text-amber-800 text-xs">${formatCurrency(book.price)}</div>
          <div class="flex items-center gap-2 mt-1">
            <div class="flex items-center border border-stone-300 rounded bg-stone-50">
              <button onclick="updateCartQty(${book.id}, -1)" class="w-5 h-5 text-xs font-bold text-stone-600 hover:bg-stone-200">-</button>
              <span class="px-2 text-xs font-bold text-stone-800">${item.quantity}</span>
              <button onclick="updateCartQty(${book.id}, 1)" class="w-5 h-5 text-xs font-bold text-stone-600 hover:bg-stone-200">+</button>
            </div>
            <button onclick="removeFromCart(${book.id})" class="ml-auto text-xs text-red-600 hover:text-red-800">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  totalPriceElem.textContent = formatCurrency(totalAmount);
}

function updateCartQty(bookId, delta) {
  const item = cartState.find(i => i.bookId === bookId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(bookId);
  } else {
    updateCartBadge();
    renderCartDrawerItems();
  }
}

function removeFromCart(bookId) {
  cartState = cartState.filter(i => i.bookId !== bookId);
  updateCartBadge();
  renderCartDrawerItems();
  showToast('Đã xóa khỏi giỏ hàng', 'info');
}

// TOAST SYSTEM
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `animate-toast pointer-events-auto bg-stone-900 text-amber-50 text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-amber-800/40`;

  let icon = 'fa-circle-info text-amber-400';
  if (type === 'success') icon = 'fa-circle-check text-emerald-400';
  if (type === 'danger') icon = 'fa-triangle-exclamation text-rose-400';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// UTILS
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function setupEventListeners() {
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
}
