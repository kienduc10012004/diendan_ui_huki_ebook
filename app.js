/* ==========================================================================
   HUKI EBOOK - MODERN EDITORIAL MARKETPLACE & GOODREADS PRO APP LOGIC
   Theme: Deep Forest Green (#0C3227), Warm Parchment (#FAF7F0), Terracotta (#E35938)
   ========================================================================== */

// --- 1. DATA STORES ---

const BOOKS_DATA = [
  {
    id: 1,
    title: "Sức Mạnh Của Thói Quen (The Power of Habit)",
    subTitle: "The Power of Habit: Why We Do What We Do in Life and Business",
    author: "Charles Duhigg",
    translator: "Tiến Thi Thu Hà",
    category: "ky-nang",
    categoryName: "Phát Triển Bản Thân",
    price: 135200,
    oldPrice: 169000,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 1250,
    soldCount: 6589,
    stockProgress: 90,
    format: "epub",
    badge: "Bán Chạy",
    publisher: "NXB Lao Động",
    publisherCode: "nxb-lao-dong",
    totalPages: 371,
    fileSize: "5.4 MB (EPUB)",
    releaseYear: "2026 (Tái bản có bản quyền)",
    drmProtected: true,
    hukiCoins: 1350,
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
    synopsis: "Bạn có bao giờ tự hỏi vì sao chúng ta lại đánh răng mỗi sáng theo cùng một trình tự? Vì sao một chiến dịch quảng cáo bình thường của bột giặt Febreze lại tạo nên một cơn sốt hàng tỷ đô la? Hay làm cách nào kình ngư Michael Phelps có thể lập kỷ lục thế giới bởi vì ngay cả khi kính bơi bị rò nước và anh hoàn toàn không thấy gì suốt chặng đua? Tất cả những câu hỏi hóc búa đó được Charles Duhigg giải mã tường tận qua từng trang sách.",
    quoteCallout: "Quy luật vàng của sự thay đổi thói quen: 'Bạn không thể dập tắt hoàn toàn một thói quen xấu; bạn chỉ có thể thay đổi nó. Để tái lập trình một phản xạ, hãy giữ nguyên Gợi ý ban đầu và Phần thưởng cốt lõi, nhưng đưa vào một Hành động thay thế hoàn toàn mới.'",
    chapterOneTitle: "Chương 1: Vòng lặp thói quen",
    chapterOneContent: "Vào mùa thu năm 1993, một người đàn ông bí ẩn làm thay đổi toàn bộ những gì giới khoa học từng biết về bộ não con người. Tên ông là Eugene Pauly, một bệnh nhân 71 tuổi sống tại San Diego. Sau một cơn viêm não do virus, phần thùy thái dương giữa của Eugene bị phá hủy gần như hoàn toàn. Ông không thể nhớ nổi những việc vừa xảy ra 10 phút trước. Thế nhưng, điều kinh ngạc là ông vẫn có thể tự đi bộ vòng quanh khu phố và trở về nhà an toàn mỗi ngày mà không hề bị lạc...",
    tableOfContents: [
      "Lời giới thiệu: Phương pháp giải mã thói quen",
      "Phần 1: Những thói quen cá nhân (Vòng lặp thói quen, Não bộ thèm khát)",
      "Phần 2: Thói quen của các tổ chức thành công (Alcoa, Starbucks, Bệnh viện Rhode Island)",
      "Phần 3: Thói quen của cộng đồng (Phong trào dân quyền Montgomery, Nhà thờ Saddleback)",
      "Phụ lục: Cẩm nang hướng dẫn từng bước để thay đổi thói quen"
    ],
    reviewsList: [
      {
        id: 101,
        author: "Nguyễn Hoàng Nam",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "3 ngày trước",
        device: "Đọc trên Huki Reader",
        content: "Bản dịch của dịch giả Tiến Thi Thu Hà rất mượt mà, giữ đúng tính hàn lâm thuật ngữ nhưng văn phong vô cùng gần gũi. Định dạng EPUB trên HUKI làm rất chuẩn: mục lục đa cấp nhấp nhảy tức thì, chú thích popup không bị nhảy trang. Cuốn sách giúp mình hiểu rõ cơ chế thói quen để tự rèn luyện thói quen đọc sách 30 phút mỗi sáng.",
        likes: 47
      },
      {
        id: 102,
        author: "Lê Thảo My",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "1 tuần trước",
        device: "Đọc trên iPad App",
        content: "Mình kết hợp cả đọc EPUB và nghe bản tóm tắt Audio kèm lời nhạc nền ứng dụng. Phần phân tích về thói quen mấu chốt (Keystone Habits) thực sự thay đổi tư duy làm việc của mình tại văn phòng. Rất đáng mua!",
        likes: 19
      }
    ],
    samplePages: [
      "Trang 1: Hầu hết các lựa chọn chúng ta thực hiện mỗi ngày không phải là kết quả của quyết định có cân nhắc, mà là thói quen...",
      "Trang 2: Vòng lặp thói quen gồm 3 phần: Gợi ý (Cue), Hành động thường ngày (Routine), và Phần thưởng (Reward)...",
      "Trang 3: Bạn không thể dập tắt một thói quen xấu, bạn chỉ có thể thay thế nó bằng một thói quen khác tích cực hơn...",
      "Trang 4: Sức mạnh của thói quen nền tảng (Keystone Habit) có thể tạo ra hiệu ứng dây chuyền làm biến đổi toàn bộ tổ chức...",
      "Trang 5: Khi niềm tin vào sự thay đổi được củng cố trong cộng đồng, thói quen mới sẽ trở nên vĩnh viễn."
    ]
  },
  {
    id: 2,
    title: "Atomic Habits - Thay Đổi Tí Hon",
    subTitle: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    translator: "Nguyễn Lương Hải Khôi",
    category: "ky-nang",
    categoryName: "Phát Triển Bản Thân",
    price: 141750,
    oldPrice: 189000,
    discountPercent: 25,
    rating: 5.0,
    reviewsCount: 3400,
    soldCount: 12800,
    stockProgress: 98,
    format: "epub",
    badge: "Kỷ Lục Sàn",
    publisher: "First News - Trí Việt",
    publisherCode: "first-news",
    totalPages: 352,
    fileSize: "6.1 MB (EPUB)",
    releaseYear: "2026 (Bản quyền độc quyền)",
    drmProtected: true,
    hukiCoins: 1410,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    synopsis: "Dù mục tiêu của bạn là gì, cuốn sách Atomic Habits cũng sẽ cung cấp cho bạn một khuôn khổ đã được chứng minh để cải thiện mỗi ngày. James Clear, một trong những chuyên gia hàng đầu thế giới về hình thành thói quen, sẽ hướng dẫn bạn các chiến lược thực tế dạy bạn chính xác cách tạo ra thói quen tốt và từ bỏ thói quen xấu.",
    quoteCallout: "Thành công là sản phẩm của những thói quen hàng ngày — không phải những cuộc biến đổi một lần trong đời. Nếu bạn tốt hơn 1% mỗi ngày trong một năm, bạn sẽ tốt hơn gấp 37 lần.",
    chapterOneTitle: "Chương 1: Sức mạnh bất ngờ của thói quen nguyên tử",
    chapterOneContent: "Số phận của Đội tuyển Xe đạp Anh Quốc đã thay đổi chỉ trong một ngày vào năm 2003. Tổ chức này đã thuê Dave Brailsford làm giám đốc hiệu suất mới. Vào thời điểm đó, các tay đua xe đạp chuyên nghiệp ở Anh đã trải qua gần một trăm năm tầm thường...",
    tableOfContents: [
      "Các nguyên tắc nền tảng: Tại sao những thay đổi nhỏ tạo ra khác biệt lớn",
      "Quy luật thứ nhất: Khiến nó trở nên Rõ ràng (Make it Obvious)",
      "Quy luật thứ hai: Khiến nó trở nên Hấp dẫn (Make it Attractive)",
      "Quy luật thứ ba: Khiến nó trở nên Dễ dàng (Make it Easy)",
      "Quy luật thứ tư: Khiến nó trở nên Thỏa mãn (Make it Satisfying)",
      "Chiến thuật nâng cao: Làm thế nào để từ mức khá trở thành xuất sắc"
    ],
    reviewsList: [
      {
        id: 201,
        author: "Trần Minh Trí",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "Hôm qua",
        device: "Đọc trên Kindle Scribe",
        content: "Cuốn sách kỹ năng hay nhất mình từng đọc trong 5 năm qua. Cách viết trực diện, có bảng tóm tắt sau mỗi chương. Tính năng đồng bộ WhisperSync từ Huki sang Kindle chạy cực mượt.",
        likes: 56
      }
    ],
    samplePages: [
      "Trang 1: Nếu bạn tốt hơn 1% mỗi ngày trong một năm, bạn sẽ trở nên tốt hơn gấp 37 lần khi kết thúc năm đó...",
      "Trang 2: Bạn không vươn tới mức độ của mục tiêu. Bạn rơi xuống mức độ của hệ thống mà bạn thiết lập...",
      "Trang 3: Hãy tập trung vào việc bạn muốn trở thành người như thế nào, thay vì chỉ chăm chú vào kết quả...",
      "Trang 4: 4 Quy luật thay đổi hành vi: Làm cho nó Rõ ràng, Hấp dẫn, Dễ dàng và Thỏa mãn...",
      "Trang 5: Môi trường là bàn tay vô hình kiến tạo nên thói quen của bạn."
    ]
  },
  {
    id: 3,
    title: "Tâm Lý Học Về Tiền (The Psychology of Money)",
    subTitle: "Timeless lessons on wealth, greed, and happiness",
    author: "Morgan Housel",
    translator: "Lê Đình Triều",
    category: "kinh-te",
    categoryName: "Kinh Doanh & Khởi Nghiệp",
    price: 123250,
    oldPrice: 145000,
    discountPercent: 15,
    rating: 4.8,
    reviewsCount: 980,
    soldCount: 6100,
    stockProgress: 92,
    format: "epub",
    badge: "Flash Deal",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 328,
    fileSize: "4.8 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1230,
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&q=80",
    synopsis: "Làm tốt với tiền bạc không nhất thiết liên quan đến những gì bạn biết. Nó liên quan đến cách bạn cư xử. Và hành vi rất khó để dạy dỗ, ngay cả đối với những người thực sự thông minh. 19 câu chuyện ngắn khám phá những cách kỳ lạ mà mọi người nghĩ về tiền bạc.",
    quoteCallout: "Tiêu tiền để cho mọi người thấy bạn có bao nhiêu tiền là cách nhanh nhất để có ít tiền hơn. Sự giàu có thực sự là những gì bạn không nhìn thấy.",
    chapterOneTitle: "Chương 1: Không ai điên rồ cả",
    chapterOneContent: "Trải nghiệm cá nhân của bạn với tiền bạc chiếm khoảng 0,00000001% những gì đã xảy ra trên thế giới, nhưng có lẽ chiếm tới 80% cách bạn nghĩ thế giới hoạt động...",
    tableOfContents: [
      "Không ai điên rồ cả",
      "May mắn & Rủi ro",
      "Không bao giờ là đủ",
      "Sự kết hợp gây sửng sốt",
      "Làm giàu so với Giữ giàu",
      "Đuôi dài: Nơi phép màu xảy ra"
    ],
    reviewsList: [
      {
        id: 301,
        author: "Phạm Hải Đăng",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "5 ngày trước",
        device: "Đọc trên Web",
        content: "Cuốn sách thay đổi hoàn toàn cách mình nhìn nhận về đầu tư và chi tiêu. Không có công thức toán học khô khan, toàn là bài học về tâm lý con người.",
        likes: 31
      }
    ],
    samplePages: [
      "Trang 1: Quản lý tiền bạc giỏi không nhất thiết liên quan đến sự thông minh, mà liên quan đến hành vi của bạn...",
      "Trang 2: Sự tự do tài chính thực sự là khả năng thức dậy mỗi sáng và nói: Tôi có thể làm bất cứ điều gì tôi muốn hôm nay...",
      "Trang 3: Tích lũy tài sản liên quan nhiều hơn đến tỷ lệ tiết kiệm chứ không chỉ đơn thuần là thu nhập...",
      "Trang 4: Chi tiêu ít hơn số tiền kiếm được là quy tắc đơn giản nhưng có sức mạnh to lớn nhất...",
      "Trang 5: Mục tiêu cao nhất của tiền bạc là mua lại cho bạn sự tự do về thời gian."
    ]
  },
  {
    id: 4,
    title: "Dám Bị Ghét (The Courage to Be Disliked)",
    subTitle: "The Japanese Phenomenon That Shows You How to Free Yourself",
    author: "Koga Fumitake & Kishimi Ichiro",
    translator: "Khánh Loan",
    category: "tam-ly",
    categoryName: "Tâm Lý Học",
    price: 108000,
    oldPrice: 135000,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 2100,
    soldCount: 8900,
    stockProgress: 95,
    format: "epub",
    badge: "Bestseller Châu Á",
    publisher: "Nhã Nam",
    publisherCode: "nha-nam",
    totalPages: 336,
    fileSize: "5.1 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1080,
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    synopsis: "Dưới hình thức một cuộc đối thoại triết học giữa một Triết gia và một Chàng thanh niên, cuốn sách truyền tải tư tưởng của nhà tâm lý học lỗi lạc Alfred Adler về lòng dũng cảm để tự do và hạnh phúc thực sự.",
    quoteCallout: "Không phải thế giới phức tạp, mà là chính bạn làm cho thế giới trở nên phức tạp. Tự do là sự can đảm dám bị người khác ghét bỏ.",
    chapterOneTitle: "Đêm thứ nhất: Phủ nhận chấn thương tâm lý",
    chapterOneContent: "Chàng thanh niên: Thưa triết gia, thầy bảo con người có thể thay đổi bất cứ lúc nào? Tôi cho rằng điều đó hoàn toàn là lời nói dối viển vông...",
    tableOfContents: [
      "Đêm thứ nhất: Phủ nhận chấn thương tâm lý",
      "Đêm thứ hai: Mọi phiền muộn đều bắt nguồn từ quan hệ giữa người với người",
      "Đêm thứ ba: Vứt bỏ nhiệm vụ của người khác",
      "Đêm thứ tư: Trung tâm của thế giới ở đâu",
      "Đêm thứ năm: Sống hết mình trong khoảnh khắc 'ngay tại đây, vào lúc này'"
    ],
    reviewsList: [
      {
        id: 401,
        author: "Vũ Bảo Ngọc",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "2 tuần trước",
        device: "Đọc trên Huki Reader",
        content: "Cuốn sách giúp mình thoát khỏi hội chứng làm hài lòng người khác (people pleaser). Lối hành văn đối thoại rất lôi cuốn, đọc một mạch 2 buổi tối là xong.",
        likes: 62
      }
    ],
    samplePages: [
      "Trang 1: Cảm xúc không phải là kẻ thù cần phải kìm nén. Chúng là những tín hiệu dẫn đường cho tâm hồn...",
      "Trang 2: Hiểu được cảm xúc của chính mình là bước đầu tiên để xây dựng một nội lực vững vàng...",
      "Trang 3: Sự thấu cảm là cầu nối duy nhất có thể hàn gắn mọi hiểu lầm trong giao tiếp hàng ngày...",
      "Trang 4: Khi bạn kiểm soát được phản ứng của mình trước nghịch cảnh, bạn kiểm soát được cuộc đời mình...",
      "Trang 5: Bình yên thực sự bắt đầu từ khoảnh khắc bạn chấp nhận mọi cảm xúc của bản thân một cách không phán xét."
    ]
  },
  {
    id: 5,
    title: "Đột Phá Trong Kỷ Nguyên AI",
    subTitle: "AI Superpowers: China, Silicon Valley, and the New World Order",
    author: "Kai-Fu Lee",
    translator: "Trần Trọng Hải",
    category: "cong-nghe",
    categoryName: "Công Nghệ & AI",
    price: 154000,
    oldPrice: 220000,
    discountPercent: 30,
    rating: 4.7,
    reviewsCount: 640,
    soldCount: 3200,
    stockProgress: 84,
    format: "epub",
    badge: "Xu Hướng AI",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 388,
    fileSize: "6.8 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1540,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    synopsis: "Tiến sĩ Kai-Fu Lee - cựu chủ tịch Google Trung Quốc phân tích sâu sắc cuộc chạy đua trí tuệ nhân tạo toàn cầu và cách con người chuẩn bị cho kỷ nguyên việc làm được tự động hóa bởi AI.",
    quoteCallout: "AI sẽ giải phóng con người khỏi những công việc lặp lại vô nghĩa, nhưng chính tình yêu thương và sự thấu cảm mới là giá trị cốt lõi duy nhất mà máy móc không bao giờ thay thế được.",
    chapterOneTitle: "Chương 1: Khoảnh khắc Sputnik của AI",
    chapterOneContent: "Vào ngày AlphaGo đánh bại Lee Sedol năm 2016, hơn 280 triệu người Trung Quốc đã theo dõi trận đấu trực tiếp. Sự kiện đó đã châm ngòi cho một làn sóng cách mạng công nghệ chưa từng có...",
    tableOfContents: [
      "Khoảnh khắc Sputnik của AI",
      "Văn hóa giác đấu công nghệ",
      "Hai siêu cường AI thế giới",
      "Bốn làn sóng trí tuệ nhân tạo",
      "Bức tranh việc làm tương lai",
      "Bản kế hoạch chung sống cùng AI"
    ],
    reviewsList: [
      {
        id: 501,
        author: "Lê Quốc Trung (AI Engineer)",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "4 ngày trước",
        device: "Đọc trên iPad App",
        content: "Góc nhìn rất thực tế từ người trong cuộc. Sách phân tích rõ 4 làn sóng AI: Internet, Business, Perception, và Autonomous. Rất đáng đọc cho dân công nghệ.",
        likes: 28
      }
    ],
    samplePages: [
      "Trang 1: Trí tuệ nhân tạo đang định hình lại toàn bộ chuỗi cung ứng và phương thức vận hành doanh nghiệp...",
      "Trang 2: Dữ liệu lớn là nguồn dầu mỏ mới của nền kinh tế số thế kỷ 21...",
      "Trang 3: Thuật toán học sâu giải quyết các bài toán phức tạp mà lập trình truyền thống bó tay...",
      "Trang 4: Sự kết hợp giữa con người và AI tạo ra hiệu suất vượt trội gấp 10 lần...",
      "Trang 5: Đạo đức AI và bảo vệ quyền riêng tư là thách thức hàng đầu của các chính phủ."
    ]
  },
  {
    id: 6,
    title: "Nguyên Lý Chọn Lọc Tự Nhiên",
    subTitle: "On the Origin of Species by Means of Natural Selection",
    author: "Charles Darwin",
    translator: "Bùi Văn Nam Sơn Cố Vấn",
    category: "lich-su",
    categoryName: "Lịch Sử & Triết Học",
    price: 147600,
    oldPrice: 180000,
    discountPercent: 18,
    rating: 4.9,
    reviewsCount: 420,
    soldCount: 1800,
    stockProgress: 76,
    format: "epub",
    badge: "Kinh Điển Nhân Loại",
    publisher: "NXB Tri Thức",
    publisherCode: "nxb-tri-thuc",
    totalPages: 560,
    fileSize: "8.2 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1470,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
    synopsis: "Tác phẩm khoa học kinh điển làm rung chuyển thế giới của Charles Darwin, đặt nền móng cho sinh học tiến hóa hiện đại và làm thay đổi vĩnh viễn cách nhân loại nhìn nhận về nguồn gốc sự sống.",
    quoteCallout: "Không phải loài mạnh nhất hay thông minh nhất sẽ sống sót, mà là loài có khả năng thích nghi tốt nhất với sự thay đổi.",
    chapterOneTitle: "Chương 1: Biến dị dưới sự thuần dưỡng",
    chapterOneContent: "Khi quan sát các cá thể cùng một thứ hoặc phân loài thuộc các loài cây trồng và vật nuôi lâu đời nhất của chúng ta, một trong những điều đầu tiên làm ta kinh ngạc là mức độ biến dị to lớn...",
    tableOfContents: [
      "Biến dị dưới sự thuần dưỡng",
      "Biến dị trong tự nhiên",
      "Đấu tranh sinh tồn",
      "Chọn lọc tự nhiên hay sự tồn tại của cá thể thích nghi nhất",
      "Các quy luật biến dị",
      "Những khó khăn của thuyết tiến hóa",
      "Bản năng sinh tồn"
    ],
    reviewsList: [
      {
        id: 601,
        author: "TS. Đặng Minh Quân",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "3 tuần trước",
        device: "Đọc trên Kindle",
        content: "Bản số hóa chuẩn mực, sơ đồ cây tiến hóa rõ nét, chú giải thuật ngữ sinh học công phu. Một cuốn sách nền tảng bắt buộc phải có trong tủ sách số.",
        likes: 42
      }
    ],
    samplePages: [
      "Trang 1: Khi chúng ta nhìn vào thiên nhiên muôn màu, mọi loài sinh vật đều gắn kết trong một mạng lưới sự sống diệu kỳ...",
      "Trang 2: Đấu tranh sinh tồn diễn ra từng giây phút ở mọi ngóc ngách của địa cầu...",
      "Trang 3: Những biến dị nhỏ có lợi được tích lũy qua hàng triệu năm tạo nên loài mới...",
      "Trang 4: Hóa thạch là những trang sử đá ghi lại hành trình vĩ đại của sự sống...",
      "Trang 5: Có một sự hùng vĩ vô song trong cách nhìn nhận sự sống từ khởi nguồn đơn sơ nhất."
    ]
  },
  {
    id: 7,
    title: "Tư Duy Nhanh Và Chậm (Thinking, Fast and Slow)",
    subTitle: "Thinking, Fast and Slow: Two systems in the mind",
    author: "Daniel Kahneman (Nobel Kinh Tế)",
    translator: "Hương Lan",
    category: "tam-ly",
    categoryName: "Tâm Lý Học & Hành Vi",
    price: 156000,
    oldPrice: 200000,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 1800,
    soldCount: 7400,
    stockProgress: 94,
    format: "epub",
    badge: "Kinh Điển Kinh Tế Học",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 612,
    fileSize: "7.4 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1560,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    synopsis: "Hai hệ thống tư duy chi phối mọi quyết định: Hệ thống 1 (nhanh, tự động, cảm tính) và Hệ thống 2 (chậm, đòi hỏi nỗ lực, logic). Cuốn sách giải mã toàn bộ các bẫy thiên kiến nhận thức trong cuộc sống.",
    quoteCallout: "Sự tự tin của con người vào niềm tin của mình thường không phản ánh mức độ chính xác của bằng chứng, mà phản ánh mức độ mạch lạc của câu chuyện mà tâm trí đã dựng nên.",
    chapterOneTitle: "Phần 1: Hai hệ thống",
    chapterOneContent: "Để quan sát tâm trí của bạn đang hoạt động ở chế độ tự động, hãy nhìn vào khuôn mặt của một người đang tức giận. Bạn lập tức biết cảm xúc của họ mà không cần suy nghĩ một giây nào...",
    tableOfContents: [
      "Hai hệ thống tư duy",
      "Các kinh nghiệm suy nghiệm và thiên kiến",
      "Sự quá tự tin của trực giác",
      "Các lựa chọn và lý thuyết viễn cảnh",
      "Hai bản ngã: Bản ngã trải nghiệm và Bản ngã ghi nhớ"
    ],
    reviewsList: [
      {
        id: 701,
        author: "Ngô Kiến Đức",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "1 tuần trước",
        device: "Đọc trên Huki Reader",
        content: "Cuốn sách kinh tế học hành vi vĩ đại nhất thế kỷ. Đọc chậm và suy ngẫm từng chương sẽ giúp bạn tránh được vô số quyết định sai lầm trong đầu tư tài chính.",
        likes: 53
      }
    ],
    samplePages: [
      "Trang 1: Hệ thống 1 hoạt động tự động và nhanh chóng, ít hoặc không tốn nỗ lực...",
      "Trang 2: Hệ thống 2 tập trung sự chú ý vào các hoạt động trí óc phức tạp đòi hỏi nỗ lực...",
      "Trang 3: Con người thường quá tự tin vào những gì họ tưởng rằng họ biết...",
      "Trang 4: Định kiến sẵn có và hiệu ứng mỏ neo bóp méo các quyết định tài chính hàng ngày...",
      "Trang 5: Hiểu được các bẫy tâm lý là chìa khóa để đưa ra những quyết định sáng suốt hơn."
    ]
  },
  {
    id: 8,
    title: "Nghệ Thuật Tinh Tế Của Việc Đếch Quan Tâm",
    subTitle: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach",
    author: "Mark Manson",
    translator: "Kim Ngọc",
    category: "ky-nang",
    categoryName: "Phát Triển Bản Thân",
    price: 119000,
    oldPrice: 140000,
    discountPercent: 15,
    rating: 4.7,
    reviewsCount: 3100,
    soldCount: 11200,
    stockProgress: 97,
    format: "epub",
    badge: "Bestseller Toàn Cầu",
    publisher: "Nhà Xuất Bản Trẻ",
    publisherCode: "nxb-tre",
    totalPages: 288,
    fileSize: "4.2 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1190,
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
    synopsis: "Một hướng tiếp cận trái khoáy nhưng đầy sức mạnh: Hãy ngừng cố gắng để luôn tích cực trong mọi lúc, thay vào đó hãy học cách lựa chọn những điều thực sự quan trọng đáng để bạn bận tâm.",
    quoteCallout: "Bạn không thể có một cuộc sống không đau khổ. Vấn đề không phải là làm sao để hết khổ, mà là bạn chọn đau khổ vì điều gì thực sự có ý nghĩa.",
    chapterOneTitle: "Chương 1: Đừng cố gắng",
    chapterOneContent: "Charles Bukowski là một kẻ nghiện rượu, mê cờ bạc và có cuộc đời đầy thất bại. Nhưng ông không bao giờ cố gắng đóng giả một người thành công...",
    tableOfContents: [
      "Đừng cố gắng",
      "Hạnh phúc là một bài toán",
      "Bạn không đặc biệt đến thế đâu",
      "Giá trị của sự đau khổ",
      "Bạn luôn luôn lựa chọn",
      "Bạn sai về mọi thứ",
      "Thất bại là con đường tiến lên"
    ],
    reviewsList: [
      {
        id: 801,
        author: "Bùi Thị Mai Anh",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "3 ngày trước",
        device: "Đọc trên Android",
        content: "Giọng văn hài hước, châm biếm sâu cay nhưng bài học thì thấm thía. Sách giúp mình giảm bớt áp lực đồng trang lứa và sống thật với chính mình hơn.",
        likes: 38
      }
    ],
    samplePages: [
      "Trang 1: Việc học cách đếch quan tâm đến những điều phù phiếm là chìa khóa của bình an tâm trí...",
      "Trang 2: Mạng xã hội đang bán cho bạn sự bất an bằng những cuộc sống hoàn hảo ảo tưởng...",
      "Trang 3: Hãy chịu trách nhiệm 100% cho phản ứng của bạn trước mọi nghịch cảnh...",
      "Trang 4: Biết nói 'Không' là kỹ năng sống còn để bảo vệ sự tập trung của bạn...",
      "Trang 5: Nhận thức về cái chết nhắc nhở chúng ta sống một cuộc đời can đảm và chân thật."
    ]
  },
  {
    id: 9,
    title: "Dầu Và Máu (Mohammed Bin Salman)",
    subTitle: "Blood and Oil: Mohammed bin Salman's Ruthless Quest for Global Power",
    author: "Bradley Hope & Justin Scheck",
    translator: "Đỗ Tuấn Kiệt",
    category: "kinh-te",
    categoryName: "Kinh Doanh & Khởi Nghiệp",
    price: 199200,
    oldPrice: 249000,
    discountPercent: 20,
    rating: 5.0,
    reviewsCount: 890,
    soldCount: 8991,
    stockProgress: 96,
    format: "epub",
    badge: "Bán Chạy #1",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 448,
    fileSize: "6.5 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1990,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    synopsis: "Vén màn hậu trường quyền lực dầu mỏ, tài chính toàn cầu và ván cờ chính trị làm rung chuyển Trung Đông của vị thái tử trẻ tuổi quyền lực nhất thế giới Ả Rập.",
    quoteCallout: "Quyền lực không được đo bằng những lời hứa, mà được định hình bằng sự kiểm soát dòng tiền và công nghệ tối thượng.",
    chapterOneTitle: "Chương 1: Cung điện Riyadh và đêm thanh trừng",
    chapterOneContent: "Đêm ngày 4 tháng 11 năm 2017, hơn 300 hoàng tử, bộ trưởng và tỷ phú hàng đầu Ả Rập Xê Út đã bị triệu tập khẩn cấp vào khách sạn Ritz-Carlton...",
    tableOfContents: [
      "Cung điện Riyadh và đêm thanh trừng",
      "Ván cờ dầu mỏ thế kỷ",
      "Thung lũng Silicon và những dòng vốn tỷ USD",
      "Dự án siêu đô thị tương lai NEOM",
      "Trật tự địa chính trị mới"
    ],
    reviewsList: [
      {
        id: 901,
        author: "Vũ Tuấn Phong",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "Hôm qua",
        device: "Đọc trên Huki Reader",
        content: "Cuốn sách như một bộ phim bom tấn trinh thám chính trị và tài chính thực tế. Hai tác giả của Wall Street Journal điều tra cực kỳ chi tiết.",
        likes: 64
      }
    ],
    samplePages: [
      "Trang 1: Quyền lực ở Trung Đông không được xây dựng từ những lời hứa, nó được định hình bằng dầu mỏ và sự quyết đoán lạnh lùng...",
      "Trang 2: Đêm ngày 4 tháng 11 năm 2017, khách sạn Ritz-Carlton ở Riyadh trở thành nhà tù xa hoa nhất hành tinh...",
      "Trang 3: Tham vọng hiện đại hóa đất nước đi kèm với những toan tính chính trị tàn khốc bậc nhất...",
      "Trang 4: Thị trường tài chính toàn cầu rúng động trước từng bước đi táo bạo của vị thái tử trẻ tuổi...",
      "Trang 5: Dầu mỏ là quá khứ, công nghệ và tài chính tối thượng mới là tương lai mà ông hướng đến."
    ]
  },
  {
    id: 10,
    title: "Deep Work - Làm Ra Làm Chơi Ra Chơi",
    subTitle: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    translator: "Nguyễn Hoàng Thảo",
    category: "ky-nang",
    categoryName: "Phát Triển Bản Thân",
    price: 127200,
    oldPrice: 159000,
    discountPercent: 20,
    rating: 5.0,
    reviewsCount: 1450,
    soldCount: 7850,
    stockProgress: 94,
    format: "epub",
    badge: "Top Năng Suất",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 312,
    fileSize: "5.2 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1270,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    synopsis: "Kỹ năng làm việc sâu (Deep Work) - khả năng tập trung cao độ không xao nhãng vào một nhiệm vụ phức tạp - đang trở thành siêu năng lực hiếm hoi và giá trị nhất trong nền kinh tế số.",
    quoteCallout: "Nếu bạn không tạo ra những điều thực sự có giá trị và khó sao chép, bạn sẽ sớm bị thay thế bởi thuật toán và tự động hóa.",
    chapterOneTitle: "Phần 1: Ý niệm về Làm Việc Sâu",
    chapterOneContent: "Làm việc sâu là các hoạt động chuyên môn được thực hiện trong trạng thái tập trung cao độ, không bị xao nhãng, đẩy khả năng nhận thức của bạn đến giới hạn...",
    tableOfContents: [
      "Ý niệm: Deep Work có giá trị cao, hiếm có và ý nghĩa",
      "Quy tắc 1: Làm việc sâu sắc (Chọn triết lý làm việc phù hợp)",
      "Quy tắc 2: Tận dụng sự buồn chán",
      "Quy tắc 3: Từ bỏ mạng xã hội",
      "Quy tắc 4: Loại bỏ sự nông cạn (Shallow Work)"
    ],
    reviewsList: [
      {
        id: 1001,
        author: "Lê Minh Trí (Product Manager)",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "2 ngày trước",
        device: "Đọc trên iPad App",
        content: "Áp dụng phương pháp Time Blocking và Shut Down Ritual trong sách đã giúp mình giải quyết khối lượng công việc gấp đôi mà không bị kiệt sức.",
        likes: 41
      }
    ],
    samplePages: [
      "Trang 1: Khả năng làm việc sâu (Deep Work) ngày càng trở nên hiếm hoi trong khi giá trị của nó trong nền kinh tế lại ngày càng tăng...",
      "Trang 2: Làm việc nông (Shallow Work) khiến bạn cảm thấy bận rộn nhưng không tạo ra giá trị đột phá nào...",
      "Trang 3: Hãy đối xử với thời gian làm việc tập trung của bạn như một buổi hẹn quan trọng không thể hủy bỏ...",
      "Trang 4: Cai nghiện mạng xã hội và dọn dẹp các thông báo đẩy là bước đầu tiên để giành lại quyền kiểm soát não bộ...",
      "Trang 5: Cuộc sống làm việc sâu không chỉ mang lại hiệu suất vượt trội mà còn đem đến cảm giác thỏa mãn sâu sắc."
    ]
  },
  {
    id: 11,
    title: "Những Kẻ Xuất Chúng (Outliers)",
    subTitle: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    translator: "Trần Thị Thu Trang",
    category: "ky-nang",
    categoryName: "Phát Triển Bản Thân",
    price: 127200,
    oldPrice: 159000,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 1620,
    soldCount: 5430,
    stockProgress: 88,
    format: "epub",
    badge: "Kinh Điển",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 368,
    fileSize: "5.6 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1270,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
    synopsis: "Giải mã quy tắc 10.000 giờ và các yếu tố ẩn giấu đằng sau thành công của Bill Gates, Steve Jobs, The Beatles hay các thiên tài toán học thế giới.",
    quoteCallout: "Không ai tự thân xuất chúng. Thành công là kết quả của việc bạn sinh ra ở đâu, vào thời điểm nào và nhận được những cơ hội phi thường ra sao.",
    chapterOneTitle: "Chương 1: Hiệu ứng Matthew",
    chapterOneContent: "Tại sao hầu hết các cầu thủ khúc côn cầu xuất sắc nhất Canada đều sinh vào tháng Một, Hai hoặc Ba? Câu trả lời sẽ làm bạn bất ngờ về cách xã hội vô tình tạo ra các rào cản cơ hội...",
    tableOfContents: [
      "Hiệu ứng Matthew",
      "Quy tắc 10.000 giờ",
      "Rắc rối với các thiên tài (Phần 1 & 2)",
      "Ba bài học của Joe Flom",
      "Thái độ và di sản văn hóa"
    ],
    reviewsList: [
      {
        id: 1101,
        author: "Hoàng Văn Tuấn",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "6 ngày trước",
        device: "Đọc trên Kindle",
        content: "Gladwell luôn là bậc thầy kể chuyện phi hư cấu. Những dẫn chứng về The Beatles và Bill Gates được phân tích cực kỳ thuyết phục.",
        likes: 35
      }
    ],
    samplePages: [
      "Trang 1: Thành công không phải là chuyện tự thân của một cá nhân kiệt xuất, nó là sự kết hợp của cơ hội và di sản văn hóa...",
      "Trang 2: Quy tắc 10.000 giờ: Để đạt đến mức độ thuần thục của một chuyên gia thế giới, bạn cần luyện tập có chủ đích trong 10.000 giờ...",
      "Trang 3: Thời điểm bạn sinh ra quyết định việc bạn có thể đón đầu những làn sóng công nghệ vĩ đại hay không...",
      "Trang 4: Trí thông minh IQ trên 120 không còn tạo ra nhiều khác biệt bằng kỹ năng xã hội và tính kiên trì...",
      "Trang 5: Không ai tự mình thành công. Tất cả những kẻ xuất chúng đều nhận được những món quà cơ hội phi thường."
    ]
  },
  {
    id: 12,
    title: "Chính Sách Tiền Tệ Thế Kỷ 21",
    subTitle: "21st Century Monetary Policy: The Federal Reserve from the Great Inflation to COVID-19",
    author: "Ben S. Bernanke (Nobel Kinh Tế)",
    translator: "TS. Nguyễn Xuân Thành",
    category: "kinh-te",
    categoryName: "Kinh Doanh & Khởi Nghiệp",
    price: 260000,
    oldPrice: 325000,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 780,
    soldCount: 4120,
    stockProgress: 82,
    format: "epub",
    badge: "Nobel Kinh Tế",
    publisher: "Nhà Xuất Bản Trẻ",
    publisherCode: "nxb-tre",
    totalPages: 580,
    fileSize: "8.6 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 2600,
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&q=80",
    synopsis: "Tác phẩm lịch sử kinh tế tiền tệ xuất sắc của cựu Chủ tịch Cục Dự trữ Liên bang Mỹ (FED) giải mã toàn bộ công cụ nới lỏng định lượng (QE), kiểm soát lạm phát và tương lai đồng tiền kỹ thuật số.",
    quoteCallout: "Chính sách tiền tệ không thể giải quyết mọi căn bệnh của nền kinh tế, nhưng nó là tấm khiên phòng thủ vững chắc nhất ngăn chặn sự sụp đổ của hệ thống tài chính.",
    chapterOneTitle: "Chương 1: Đại lạm phát và sự trỗi dậy của Volcker",
    chapterOneContent: "Lạm phát những năm 1970 đã tàn phá nền kinh tế Mỹ như thế nào trước khi Paul Volcker đưa ra những quyết định lãi suất gây sốc lịch sử...",
    tableOfContents: [
      "Đại lạm phát và kỷ nguyên Volcker",
      "Kỷ nguyên Greenspan và sự ổn định giả tạo",
      "Khủng hoảng tài chính 2008 và công cụ QE",
      "Chính sách tiền tệ trong đại dịch",
      "Tương lai của tiền tệ số và ngân hàng trung ương"
    ],
    reviewsList: [
      {
        id: 1201,
        author: "Đoàn Minh Nhật (Chuyên viên Tài chính)",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "1 tuần trước",
        device: "Đọc trên Web",
        content: "Một cuốn sách gối đầu giường cho bất kỳ ai làm trong ngành tài chính ngân hàng hoặc đầu tư vĩ mô.",
        likes: 49
      }
    ],
    samplePages: [
      "Trang 1: Ngân hàng trung ương không chỉ kiểm soát lãi suất, họ đang định hình tương lai ổn định kinh tế của cả nhân loại...",
      "Trang 2: Khủng hoảng 2008 đã buộc FED phải sáng tạo ra các công cụ chưa từng có trong lịch sử như Nới lỏng định lượng (QE)...",
      "Trang 3: Tính minh bạch và truyền thông chính sách đóng vai trò quan trọng không kém gì công cụ lãi suất cơ bản...",
      "Trang 4: Đại dịch toàn cầu đã đặt ra thách thức chưa từng thấy đối với sự phối hợp giữa chính sách tài khóa và tiền tệ...",
      "Trang 5: Tương lai tiền tệ số và kỷ nguyên lạm phát mới đòi hỏi sự linh hoạt tuyệt đối từ các nhà hoạch định chính sách."
    ]
  },
  {
    id: 13,
    title: "Clean Code: Mã Sạch & Nghệ Thuật Lập Trình",
    subTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin (Uncle Bob)",
    translator: "Đội ngũ Kỹ sư Huki",
    category: "cong-nghe",
    categoryName: "Công Nghệ & AI",
    price: 215000,
    oldPrice: 270000,
    discountPercent: 20,
    rating: 5.0,
    reviewsCount: 1980,
    soldCount: 5200,
    stockProgress: 93,
    format: "epub",
    badge: "Kinh Điển IT",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 464,
    fileSize: "7.1 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 2150,
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
    synopsis: "Cuốn kinh thánh cho mọi lập trình viên phần mềm về cách viết mã nguồn sạch, thanh lịch, dễ bảo trì, dễ kiểm thử và trường tồn với thời gian.",
    quoteCallout: "Bất kỳ ai cũng có thể viết code máy tính hiểu được. Lập trình viên giỏi viết code con người hiểu được.",
    chapterOneTitle: "Chương 1: Mã sạch là gì?",
    chapterOneContent: "Có hai điều tạo nên một lập trình viên xuất sắc: kiến thức và kỹ năng thủ công. Kiến thức dạy bạn các nguyên tắc, còn kỹ năng thủ công giúp bạn rèn luyện sự tinh tế qua từng dòng code...",
    tableOfContents: [
      "Mã sạch là gì",
      "Ý nghĩa của việc đặt tên",
      "Hàm chỉ nên làm một việc",
      "Chú thích: Sự thất bại của việc diễn đạt bằng code",
      "Định dạng mã nguồn",
      "Đối tượng và cấu trúc dữ liệu",
      "Xử lý lỗi thanh lịch"
    ],
    reviewsList: [
      {
        id: 1301,
        author: "Nguyễn Văn Hùng (Senior Dev)",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "4 ngày trước",
        device: "Đọc trên Web",
        content: "Mọi dòng code ví dụ trong sách hiển thị rất đẹp trên trình đọc Huki Reader, có syntax highlighting rõ ràng. Cuốn sách gối đầu giường của mọi coder.",
        likes: 58
      }
    ],
    samplePages: [
      "Trang 1: Bất kỳ kẻ ngốc nào cũng có thể viết mã mà máy tính có thể hiểu. Những lập trình viên giỏi viết mã mà con người có thể hiểu...",
      "Trang 2: Quy tắc đặt tên có ý nghĩa: Tên biến, hàm và lớp phải thể hiện rõ ý định và mục đích tồn tại của chúng...",
      "Trang 3: Hàm chỉ nên làm một việc duy nhất và làm việc đó thật tốt...",
      "Trang 4: Đừng lặp lại chính mình (DRY - Don't Repeat Yourself) là nền tảng của một kiến trúc phần mềm thanh lịch...",
      "Trang 5: Quy tắc Boy Scout: Hãy luôn để lại bãi cắm trại sạch hơn lúc bạn mới đến."
    ]
  },
  {
    id: 14,
    title: "Khởi Nghiệp Tinh Gọn (The Lean Startup)",
    subTitle: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    author: "Eric Ries",
    translator: "Dương Ngọc Dũng",
    category: "kinh-te",
    categoryName: "Kinh Doanh & Khởi Nghiệp",
    price: 145000,
    oldPrice: 190000,
    discountPercent: 24,
    rating: 4.8,
    reviewsCount: 890,
    soldCount: 3760,
    stockProgress: 80,
    format: "epub",
    badge: "Top Khởi Nghiệp",
    publisher: "Alpha Books",
    publisherCode: "alpha-books",
    totalPages: 360,
    fileSize: "5.5 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1450,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    synopsis: "Mô hình sản phẩm khả dụng tối thiểu (MVP) và vòng lặp Xây dựng - Đo lường - Học hỏi giúp startup kiểm chứng ý tưởng kinh doanh nhanh nhất với chi phí thấp nhất.",
    quoteCallout: "Cách duy nhất để chiến thắng là học hỏi nhanh hơn bất kỳ ai khác.",
    chapterOneTitle: "Chương 1: Khởi đầu",
    chapterOneContent: "Hãy tưởng tượng bạn đã dành một năm ròng rã để xây dựng một sản phẩm hoàn hảo, chỉ để nhận ra rằng không một ai trên thế giới thực sự cần nó...",
    tableOfContents: [
      "Tầm nhìn: Khởi đầu, Định nghĩa, Học hỏi",
      "Chỉ đạo: Vòng lặp Xây dựng - Đo lường - Học hỏi, Nhảy vọt, Thử nghiệm",
      "Tăng tốc: Lô nhỏ, Thích ứng, Đổi mới",
      "Chuyển hướng (Pivot) hay Kiên trì"
    ],
    reviewsList: [
      {
        id: 1401,
        author: "Trần Anh Đức (Founder)",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "5 ngày trước",
        device: "Đọc trên iPad",
        content: "Cuốn sách đã cứu startup của mình khỏi việc đốt tiền vô ích. Khái niệm MVP và học hỏi có giá trị thay đổi hoàn toàn tư duy làm sản phẩm.",
        likes: 39
      }
    ],
    samplePages: [
      "Trang 1: Khởi nghiệp tinh gọn là phương pháp tiếp cận mới để tạo ra sản phẩm thành công trong môi trường không chắc chắn...",
      "Trang 2: Sản phẩm khả dụng tối thiểu (MVP) giúp kiểm chứng giả thuyết kinh doanh nhanh nhất...",
      "Trang 3: Vòng lặp Xây dựng - Đo lường - Học hỏi là trái tim của mọi tổ chức đổi mới...",
      "Trang 4: Chuyển hướng (Pivot) hay kiên trì: Nghệ thuật nhận diện tín hiệu thị trường...",
      "Trang 5: Học hỏi có giá trị là thước đo tiến độ thực sự của một dự án khởi nghiệp."
    ]
  },
  {
    id: 15,
    title: "Đại Dương Đen: Tâm Lý Học Trầm Cảm",
    subTitle: "Black Ocean: Stories of Depression and Modern Psychology",
    author: "Đặng Hoàng Giang",
    translator: "Tác giả Việt Nam",
    category: "tam-ly",
    categoryName: "Tâm Lý Học",
    price: 119000,
    oldPrice: 150000,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 1740,
    soldCount: 6120,
    stockProgress: 91,
    format: "epub",
    badge: "Mall Bán Chạy",
    publisher: "Nhà Xuất Bản Trẻ",
    publisherCode: "nxb-tre",
    totalPages: 344,
    fileSize: "5.3 MB (EPUB)",
    releaseYear: "2026",
    drmProtected: true,
    hukiCoins: 1190,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    synopsis: "Một cuộc thám hiểm dũng cảm vào thế giới u tối của những người trầm cảm, kêu gọi sự lắng nghe không phán xét và tình yêu thương chân thành giữa con người trong xã hội hiện đại.",
    quoteCallout: "Trầm cảm không phải là sự ủy mị. Đó là khi tâm trí bị giam cầm trong một đại dương đen sâu thẳm và ta cần một bàn tay lắng nghe không định kiến.",
    chapterOneTitle: "Lời mở đầu: Tiếng vọng từ đáy vực",
    chapterOneContent: "Tôi bắt đầu hành trình này không phải với tư cách một bác sĩ tâm thần, mà với tư cách một người muốn lắng nghe những tiếng thầm thì đau đớn chưa từng được cất lời...",
    tableOfContents: [
      "Lời mở đầu: Tiếng vọng từ đáy vực",
      "Những câu chuyện trong đại dương đen",
      "Gia đình: Chốn nương náu hay khởi nguồn thương tổn",
      "Phương pháp đồng hành và chữa lành",
      "Ánh sáng nơi cuối con đường"
    ],
    reviewsList: [
      {
        id: 1501,
        author: "Nguyễn Quỳnh Chi",
        badge: "Đã mua tại Huki",
        rating: 5,
        date: "1 tuần trước",
        device: "Đọc trên Huki Reader",
        content: "Cuốn sách khiến mình rơi nước mắt nhiều lần. Cảm ơn tác giả Đặng Hoàng Giang đã cất lên tiếng nói cho những nỗi đau vô hình.",
        likes: 54
      }
    ],
    samplePages: [
      "Trang 1: Trầm cảm không phải là sự yếu đuối. Đó là khoảng tối sâu thẳm nơi tâm trí bị bóp nghẹt...",
      "Trang 2: Sự đồng cảm bắt đầu khi ta lắng nghe chân thành, không phán xét...",
      "Trang 3: Hành trình chữa lành cần nhiều kiên nhẫn và tình yêu thương từ người thân...",
      "Trang 4: Đôi khi chỉ một cái ôm ấm áp cũng đủ sưởi ấm một tâm hồn đang lạnh giá...",
      "Trang 5: Ánh sáng luôn ở cuối con đường, hãy giữ lấy niềm tin vào ngày mai."
    ]
  }
];

const AUTHORS_DATA = [
  {
    id: 1,
    name: "Emma Walker",
    role: "Tác Giả Bestseller",
    booksCount: 345,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    publisherId: "nha-nam"
  },
  {
    id: 2,
    name: "James Clear",
    role: "Tác Giả & Diễn Giả",
    booksCount: 120,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    publisherId: "nxb-tre"
  },
  {
    id: 3,
    name: "Đặng Hoàng Giang",
    role: "Chuyên Gia Tâm Lý",
    booksCount: 215,
    rating: 5.0,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    publisherId: "nxb-tre"
  },
  {
    id: 4,
    name: "Morgan Housel",
    role: "Chuyên Gia Tài Chính",
    booksCount: 98,
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    publisherId: "tac-gia-anh"
  },
  {
    id: 5,
    name: "Robert Martin",
    role: "Kiến Trúc Sư Phần Mềm",
    booksCount: 165,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    publisherId: "tac-gia-anh"
  }
];

// --- GOODREADS PRO SOCIAL ACTIVITY FEED DATA STORE ---
let GOODREADS_ACTIVITIES = [
  {
    id: 201,
    user: "Sarah Nguyễn",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    userBadge: "Top Reviewer",
    timeAgo: "25 phút trước",
    type: "progress",
    actionText: "đã cập nhật tiến độ đọc sách",
    bookId: 5,
    bookTitle: "Tâm Lý Học Về Tiền (The Psychology of Money)",
    bookAuthor: "Morgan Housel",
    bookCover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&q=80",
    shelfStatus: "currently-reading",
    currentPage: 180,
    totalPages: 300,
    progressPercent: 60,
    userRating: 5,
    quoteOrNote: "Bài học chương 4 về việc 'Biết thế nào là đủ' rất sâu sắc. Nhiều người giàu có nhưng vẫn mất tất cả vì lòng tham không đáy.",
    likesCount: 28,
    userLiked: true,
    comments: [
      { id: 1, user: "Hoàng Nam", text: "Đoạn này mình cũng highlight lại 3 lần!", timeAgo: "10 phút trước" }
    ]
  },
  {
    id: 202,
    user: "Trần Mai Anh",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    userBadge: "Độc Giả VIP",
    timeAgo: "2 giờ trước",
    type: "review",
    actionText: "đã chấm 5★ và viết cảm nhận cho cuốn sách",
    bookId: 1,
    bookTitle: "Don't Make Me Think (Đừng Bắt Tôi Phải Nghĩ)",
    bookAuthor: "Steve Krug",
    bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    shelfStatus: "read",
    currentPage: 304,
    totalPages: 304,
    progressPercent: 100,
    userRating: 5,
    quoteOrNote: "Một cuốn sách bắt buộc phải đọc cho bất kỳ ai làm sản phẩm số. Tác giả giải thích các nguyên tắc UX cực kỳ hóm hỉnh và dễ nhớ. Đọc xong áp dụng được ngay vào việc tối ưu giao diện web của mình!",
    likesCount: 64,
    userLiked: false,
    comments: [
      { id: 1, user: "Lê Minh Tuấn", text: "Quy tắc scan trang web tác giả viết quá chuẩn luôn.", timeAgo: "1 giờ trước" },
      { id: 2, user: "Trần Mai Anh", text: "Chuẩn luôn Tuấn ơi, đọc thử trên app Huki lật trang rất mượt!", timeAgo: "45 phút trước" }
    ]
  },
  {
    id: 203,
    user: "Nhà Xuất Bản Trẻ",
    userAvatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&q=80",
    userBadge: "Gian Hàng NXB Chính Hãng",
    timeAgo: "4 giờ trước",
    type: "enterprise",
    actionText: "đã phát hành Ebook bản quyền & tặng Voucher",
    bookId: 7,
    bookTitle: "Đại Dương Đen: Tâm Lý Học Trầm Cảm",
    bookAuthor: "Đặng Hoàng Giang",
    bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    shelfStatus: "want-to-read",
    currentPage: 0,
    totalPages: 320,
    progressPercent: 0,
    userRating: 5,
    quoteOrNote: "📢 THÔNG BÁO PHÁT HÀNH EBOOK ĐỘC QUYỀN! Gian hàng NXB Trẻ chính thức mở bản quyền cuốn 'Đại Dương Đen'. Tặng ngay Voucher NXBTRE25K cho 500 độc giả lưu sách vào Kệ Muốn Đọc hôm nay!",
    likesCount: 142,
    userLiked: true,
    comments: []
  },
  {
    id: 204,
    user: "Hoàng Nam (VIP)",
    userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
    userBadge: "Thành Viên Tích Cực",
    timeAgo: "6 giờ trước",
    type: "shelf",
    actionText: "đã thêm sách vào Kệ Muốn Đọc (Want to Read)",
    bookId: 2,
    bookTitle: "Each of Us a Desert (Mỗi Người Một Sa Mạc)",
    bookAuthor: "Mark Oshiro",
    bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    shelfStatus: "want-to-read",
    currentPage: 0,
    totalPages: 280,
    progressPercent: 0,
    userRating: 4,
    quoteOrNote: "Được bạn bè trên CLB Sách giới thiệu cuốn này về sa mạc và sự chữa lành, hy vọng sẽ hoàn thành trong tuần này!",
    likesCount: 19,
    userLiked: false,
    comments: []
  }
];

// CHAT MESSENGER DATA STORE
let CHATS_DATA = {
  direct: [
    {
      id: "nxb-tre",
      name: "Nhà Xuất Bản Trẻ",
      avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&q=80",
      online: true,
      badge: "NXB Verified",
      unread: 1,
      messages: [
        { id: 1, sender: "nxb-tre", text: "Xin chào bạn! NXB Trẻ có thể hỗ trợ gì cho bạn về các bản Ebook chính hãng ạ?", time: "10:15" },
        { id: 2, sender: "me", text: "Chào NXB Trẻ, cuốn 'Đại Dương Đen' mua hôm nay có được tặng voucher 25k không ạ?", time: "10:16" },
        { id: 3, sender: "nxb-tre", text: "Dạ có ạ! Bạn dùng mã NXBTRE25K khi thanh toán trên sàn Huki nhé!", time: "10:18" }
      ]
    },
    {
      id: "nha-nam",
      name: "Nhã Nam Books",
      avatar: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=120&q=80",
      online: true,
      badge: "Gian Hàng Mall",
      unread: 0,
      messages: [
        { id: 1, sender: "nha-nam", text: "Cảm ơn bạn đã quan tâm đến tác phẩm tại Mall Nhã Nam. Chúc bạn đọc sách vui vẻ!", time: "Hôm qua" }
      ]
    },
    {
      id: "tac-gia-anh",
      name: "Tác giả Morgan Housel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
      online: false,
      badge: "Tác Giả Xác Thực",
      unread: 0,
      messages: [
        { id: 1, sender: "me", text: "Hello author, love your book The Psychology of Money!", time: "2 ngày trước" },
        { id: 2, sender: "tac-gia-anh", text: "Thank you so much! Enjoy reading on Huki Reader app.", time: "2 ngày trước" }
      ]
    }
  ],
  group: [
    {
      id: "clb-kinh-te",
      name: "CLB Sách Kinh Tế & Khởi Nghiệp",
      avatar: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=120&q=80",
      membersCount: 1240,
      unread: 2,
      messages: [
        { id: 1, sender: "Hoàng Nam", text: "Cuốn 'Tâm Lý Học Về Tiền' chương 3 hay quá mọi người ơi!", time: "09:30" },
        { id: 2, sender: "Minh Tuấn", text: "Đúng rồi bạn, bài học về tích lũy tài sản rất thực tế.", time: "09:32" }
      ]
    },
    {
      id: "clb-manga",
      name: "Hội Mê Manga & Light Novel",
      avatar: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&q=80",
      membersCount: 3450,
      unread: 0,
      messages: [
        { id: 1, sender: "Thanh Trúc", text: "Có ai vừa chốt đơn tập mới nhất trên sàn Huki chưa ạ?", time: "Hôm qua" }
      ]
    },
    {
      id: "clb-vintage",
      name: "Cộng Đồng Đọc Sách Vintage",
      avatar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80",
      membersCount: 890,
      unread: 0,
      messages: [
        { id: 1, sender: "Đặng Hoàng Giang", text: "Chào mừng các thành viên mới đến với không gian sách Vintage!", time: "3 ngày trước" }
      ]
    }
  ]
};

// --- 2. APPLICATION STATES ---

let cartState = [{ bookId: 1, quantity: 1 }];
let wishlistState = [2, 4];
let myReadingPage = 228;
let myTotalPages = 304;

// Messenger State
let isMessengerOpen = false;
let isMessengerMinimized = false;
let activeChatType = 'direct';
let activeChatId = 'nxb-tre';

// Ebook Reader State
let currentReaderBook = null;
let currentEbookPage = 1;
let currentEbookFontSize = 16;
let currentReaderTheme = 'ivory';

// Custom Color Labels State (Crisply SaaS Style)
let CUSTOM_LABELS = [
  { id: 'research', name: 'Tài liệu nghiên cứu luận văn', color: 'blue', count: 5, category: 'cong-nghe' },
  { id: 'healing', name: 'Sách chữa lành tâm hồn', color: 'red', count: 3, category: 'tam-ly' },
  { id: 'urgent', name: 'Đọc gấp trong tuần này', color: 'amber', count: 2, category: 'tieu-thuyet' },
  { id: 'it-code', name: 'Sách chuyên ngành IT & Code', color: 'purple', count: 7, category: 'cong-nghe' },
  { id: 'inspire', name: 'Sách truyền cảm hứng sống', color: 'emerald', count: 4, category: 'ky-nang' },
];

// --- OFFICIAL PUBLISHER MALL DATA STORE ---
const PUBLISHERS_DATA = [
  {
    id: 'nxb-tre',
    name: 'NXB Trẻ Official Store',
    tagline: 'Đồng hành cùng tri thức & thế hệ trẻ Việt Nam',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&q=80',
    ebookCount: 1240,
    rating: 4.9,
    voucher: 'GIẢM 25K ĐƠN 150K',
    badge: 'NXB Mall',
    color: 'emerald'
  },
  {
    id: 'nha-nam',
    name: 'Nhã Nam Books Mall',
    tagline: 'Bởi vì sách là thế giới diệu kỳ',
    logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    ebookCount: 980,
    rating: 5.0,
    voucher: 'VOUCHER 20% TOÀN GIAN',
    badge: 'NXB Mall',
    color: 'amber'
  },
  {
    id: 'alpha-books',
    name: 'Alpha Books Enterprise',
    tagline: 'Tiên phong tri thức kinh tế & quản trị',
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    ebookCount: 1560,
    rating: 4.9,
    voucher: 'FREESHIP EBOOK VIP',
    badge: 'NXB Mall',
    color: 'blue'
  },
  {
    id: 'first-news',
    name: 'First News - Trí Việt',
    tagline: 'Hạt giống tâm hồn & Khát vọng sống',
    logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    ebookCount: 890,
    rating: 4.9,
    voucher: 'GIẢM 30K CUỐN THỨ 2',
    badge: 'NXB Mall',
    color: 'rose'
  },
  {
    id: 'kim-dong',
    name: 'NXB Kim Đồng Digital',
    tagline: 'Nuôi dưỡng ước mơ tuổi thơ & truyện tranh',
    logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    ebookCount: 2100,
    rating: 4.8,
    voucher: 'MÃ GIẢM 15% TỦ SÁCH',
    badge: 'NXB Mall',
    color: 'purple'
  },
  {
    id: 'thai-ha',
    name: 'Thái Hà Books Store',
    tagline: 'Phụng sự xã hội bằng tri thức Phật học & Kinh doanh',
    logo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
    ebookCount: 750,
    rating: 4.9,
    voucher: 'QUÀ TẶNG EBOOK 0Đ',
    badge: 'NXB Mall',
    color: 'teal'
  }
];

// --- AUDIOBOOKS DATA STORE ---
const AUDIOBOOKS_DATA = [
  {
    id: 1,
    title: "Đắc Nhân Tâm (How to Win Friends)",
    author: "Dale Carnegie",
    narrator: "NSƯT Hà Phương",
    duration: "6 giờ 45 phút",
    sampleDuration: "2:30",
    rating: 4.9,
    listenedCount: "48.2k",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80",
    badge: "Nghe Nhiều Nhất",
    voiceRegion: "Giọng Bắc Chuẩn"
  },
  {
    id: 2,
    title: "Muôn Kiếp Nhân Sinh (Phần 1 & 2)",
    author: "Nguyên Phong",
    narrator: "MC Hoàng Phúc",
    duration: "8 giờ 12 phút",
    sampleDuration: "3:00",
    rating: 5.0,
    listenedCount: "62.5k",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80",
    badge: "Bestseller Audiobook",
    voiceRegion: "Giọng Nam Ấm Áp"
  },
  {
    id: 3,
    title: "Tư Duy Nhanh Và Chậm (Thinking Fast & Slow)",
    author: "Daniel Kahneman",
    narrator: "BTV Minh Khuê",
    duration: "9 giờ 30 phút",
    sampleDuration: "2:45",
    rating: 4.8,
    listenedCount: "29.4k",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80",
    badge: "Sách Tư Duy #1",
    voiceRegion: "Giọng Bắc Trầm"
  },
  {
    id: 4,
    title: "Nhà Giả Kim (The Alchemist)",
    author: "Paulo Coelho",
    narrator: "Nghệ Sĩ Thành Lộc",
    duration: "4 giờ 15 phút",
    sampleDuration: "2:15",
    rating: 4.9,
    listenedCount: "85.1k",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80",
  }
];

// --- VOUCHERS HUB DATA STORE (E:\Huki Specification) ---
let VOUCHERS_DATA = [
  {
    code: "HUKI20K",
    title: "Giảm 20.000₫",
    minOrder: "Đơn Ebook từ 120.000₫",
    scope: "Toàn bộ Sàn Ebook Huki",
    expiry: "HSD: 31/12/2026",
    usedPercent: 74,
    claimed: false,
    badge: "Hot Nhất",
    color: "terracotta"
  },
  {
    code: "FREESHIPGHTK",
    title: "Freeship 30K",
    minOrder: "Đơn sách giấy từ 200.000₫",
    scope: "Giao Hàng Tiết Kiệm Toàn Quốc",
    expiry: "HSD: 3 ngày",
    usedPercent: 88,
    claimed: false,
    badge: "Sắp Cháy Mã",
    color: "emerald"
  },
  {
    code: "VIPREADER15",
    title: "Giảm 15% Đơn",
    minOrder: "Tối đa 50.000₫ / đơn hàng",
    scope: "Độc quyền Hội Viên Huki VIP",
    expiry: "HSD: 30 ngày",
    usedPercent: 45,
    claimed: false,
    badge: "VIP Exclusive",
    color: "amber"
  },
  {
    code: "HUKIXU5K",
    title: "+5.000 Xu",
    minOrder: "Đổi thưởng đọc sách 2026",
    scope: "Tích lũy trừ tiền trực tiếp",
    expiry: "HSD: Không giới hạn",
    usedPercent: 62,
    claimed: false,
    badge: "Tặng Xu",
    color: "blue"
  }
];

// --- COMBOS & BOXSETS DATA STORE (E:\Huki Specification) ---
const COMBOS_DATA = [
  {
    id: "combo-habits",
    title: "Combo 3 Cuốn Xây Dựng Thói Quen & Hiệu Suất Đỉnh Cao",
    description: "Bộ ba kinh điển giúp tái lập trình tư duy, hình thành thói quen nguyên tử và tối ưu hóa năng suất làm việc sâu trong kỷ nguyên số.",
    bookIds: [1, 2, 10], // Sức Mạnh Của Thói Quen, Atomic Habits, Deep Work
    originalPrice: 517000,
    comboPrice: 361900,
    savingsPercent: 30,
    badge: "Combo Tiết Kiệm 30%"
  },
  {
    id: "combo-finance",
    title: "Combo 3 Cuốn Tư Duy Tài Chính & Bản Lĩnh Đầu Tư Thông Minh",
    description: "Giải mã tâm lý hành vi tài chính, vén màn hậu trường quyền lực dầu mỏ và rèn luyện tư duy kinh doanh nhạy bén.",
    bookIds: [3, 9, 6], // Tâm Lý Học Về Tiền, Dầu Và Máu, Tư Duy Nhanh & Chậm
    originalPrice: 593000,
    comboPrice: 415000,
    savingsPercent: 30,
    badge: "Bestseller Combo"
  }
];

// --- AWARDS WINNING DATA STORE (E:\Huki Specification) ---
const AWARDS_DATA = [
  {
    bookId: 1,
    awardName: "The New York Times Bestseller",
    year: "Top 1 Sách Khoa Học Hành Vi",
    quote: "Công trình kinh điển giải mã cấu trúc thói quen được trích dẫn nhiều nhất thế giới."
  },
  {
    bookId: 2,
    awardName: "Amazon #1 Best Book of the Year",
    year: "15 Triệu Bản Toàn Cầu",
    quote: "Khuôn khổ khoa học đã được chứng minh để cải thiện 1% mỗi ngày."
  },
  {
    bookId: 7,
    awardName: "Giải Sách Quốc Gia Việt Nam",
    year: "Hạng Mục Sách Chữa Lành",
    quote: "Công trình khảo cứu tâm lý học lâm sàng đầy thấu cảm và nhân văn sâu sắc."
  },
  {
    bookId: 3,
    awardName: "Wall Street Journal Best Business Book",
    year: "Dịch sang 46 ngôn ngữ",
    quote: "Những bài học vượt thời gian về sự thịnh vượng, lòng tham và tự do đích thực."
  }
];

// --- DAILY BOOK QUOTES DATA STORE ---
const QUOTES_DATA = [
  {
    id: 1,
    quote: "Đọc sách không chỉ là tiếp thu kiến thức, mà là mở ra một cuộc đối thoại không giới hạn với những tâm hồn vĩ đại nhất của nhân loại.",
    author: "Đặng Hoàng Giang",
    book: "Đại Dương Đen"
  },
  {
    id: 2,
    quote: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó.",
    author: "Paulo Coelho",
    book: "Nhà Giả Kim"
  },
  {
    id: 3,
    quote: "Bạn không thể thay đổi người khác bằng sự chỉ trích gay gắt, hãy khích lệ những ưu điểm nhỏ nhất của họ.",
    author: "Dale Carnegie",
    book: "Đắc Nhân Tâm"
  },
  {
    id: 4,
    quote: "Hạnh phúc không nằm ở việc sở hữu thật nhiều của cải, mà là sự tự do trong việc sử dụng thời gian của chính mình.",
    author: "Morgan Housel",
    book: "Tâm Lý Học Về Tiền"
  },
  {
    id: 5,
    quote: "Đừng bắt người dùng phải suy nghĩ. Mọi trải nghiệm tuyệt vời đều khởi nguồn từ sự đơn giản và thấu cảm.",
    author: "Steve Krug",
    book: "Don't Make Me Think"
  },
  {
    id: 6,
    quote: "Những thói quen tí hon nếu được lặp lại kiên trì mỗi ngày sẽ tạo nên sự chuyển hóa phi thường sau một năm.",
    author: "James Clear",
    book: "Atomic Habits"
  }
];

// --- TOP READERS LEADERBOARD DATA STORE ---
const TOP_READERS_DATA = [
  {
    id: 1,
    rank: 1,
    name: "Lê Minh Tuấn",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
    badge: "Huy Hiệu Vàng Tri Thức",
    streakDays: 68,
    pagesWeek: 1240,
    booksYear: 32
  },
  {
    id: 2,
    rank: 2,
    name: "Sarah Nguyễn",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    badge: "Độc Giả Kim Cương",
    streakDays: 45,
    pagesWeek: 980,
    booksYear: 28
  },
  {
    id: 3,
    rank: 3,
    name: "Trần Mai Anh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    badge: "Mọt Sách Xuất Sắc",
    streakDays: 39,
    pagesWeek: 850,
    booksYear: 25
  }
];

let currentQuoteIndex = 0;
let currentPlayingAudio = null;
let isAudioPlaying = false;
let audioPlaybackInterval = null;
let audioCurrentSeconds = 14;
let audioTotalSeconds = 150;
let audioPlaybackSpeed = 1.0;

let activeFilterLabelId = null;
let isTreeSidebarCollapsed = false;

// --- 3. INITIALIZATION (PURE STATIC HTML PRESERVATION) ---

document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem('huki_dark_mode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark');
    updateDarkModeUI(true);
  }

  // Keep all static pre-rendered HTML cards untouched on initial load
  startCountdownTimer();
  startFlashSaleTimer();
  updateCartBadge();
  updateWishlistBadge();

  const requestedView = new URLSearchParams(window.location.search).get('view');
  if (requestedView === 'forum' || window.location.hash === '#forum-view') {
    switchView('forum');
  }
  setupEventListeners();
  populateBookSelectOptions();
});

// --- 4. RENDER BOOK OF THE MONTH SECTION (PHOTO 1 STYLE - COMPACT) ---

function renderBookOfMonthGrid() {
  const container = document.getElementById('book-of-month-grid');
  if (!container) return;

  const top6Books = BOOKS_DATA.slice(0, 6);
  container.innerHTML = top6Books.map(book => renderRefinedBookCard(book)).join('');
}

// --- 4B. RENDER FLASH SALE SECTION ---
function renderFlashSaleSection() {
  const container = document.getElementById('flash-sale-grid');
  if (!container) return;

  const flashBooks = BOOKS_DATA.filter(b => b.discountPercent >= 20).slice(0, 6);
  container.innerHTML = flashBooks.map(book => renderRefinedBookCard(book, { showStockBar: true })).join('');
}

function startFlashSaleTimer() {
  let flashSeconds = 2 * 3600 + 45 * 60 + 18; // 02:45:18

  setInterval(() => {
    if (flashSeconds <= 0) {
      flashSeconds = 4 * 3600;
    } else {
      flashSeconds--;
    }

    const hours = Math.floor(flashSeconds / 3600);
    const minutes = Math.floor((flashSeconds % 3600) / 60);
    const seconds = flashSeconds % 60;

    const hoursEl = document.getElementById('flash-timer-hours');
    const minutesEl = document.getElementById('flash-timer-minutes');
    const secondsEl = document.getElementById('flash-timer-seconds');

    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

// --- 4C. RENDER KHO VOUCHER & MÃ GIẢM GIÁ SÀN ---
function renderVouchersHub() {
  const container = document.getElementById('vouchers-hub-grid');
  if (!container) return;

  container.innerHTML = VOUCHERS_DATA.map(v => `
    <div class="voucher-hub-card">
      <div class="voucher-notch-top"></div>
      <div class="voucher-notch-bottom"></div>
      
      <div class="voucher-hub-left">
        <span class="text-[10px] font-black uppercase tracking-wider text-stone-500">${v.badge}</span>
        <div class="font-headline font-black text-lg text-terracotta-500 mt-1">${v.title}</div>
        <div class="text-[10px] text-stone-400 font-mono mt-0.5">${v.code}</div>
      </div>

      <div class="voucher-hub-right">
        <div>
          <div class="font-headline font-bold text-xs text-stone-900 dark:text-stone-100">${v.scope}</div>
          <div class="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">${v.minOrder}</div>
        </div>

        <div class="mt-2.5 pt-2 border-t border-stone-100 dark:border-pine-800/80 flex items-center justify-between gap-2">
          <div class="flex-1 min-w-0">
            <div class="flex justify-between text-[10px] font-semibold text-stone-400 mb-1">
              <span>Đã dùng</span>
              <span class="text-terracotta-500 font-mono">${v.usedPercent}%</span>
            </div>
            <div class="w-full h-1.5 bg-stone-100 dark:bg-pine-900 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-amber-500 to-terracotta-500 rounded-full" style="width: ${v.usedPercent}%;"></div>
            </div>
          </div>

          <button onclick="claimVoucher('${v.code}', this)" class="btn-voucher-claim ${v.claimed ? 'claimed' : ''}">
            ${v.claimed ? '<i class="fa-solid fa-check mr-1"></i> Đã Lưu' : 'Lưu Mã'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function claimVoucher(code, btn) {
  const v = VOUCHERS_DATA.find(item => item.code === code);
  if (v) {
    v.claimed = true;
    if (btn) {
      btn.className = 'btn-voucher-claim claimed';
      btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i> Đã Lưu';
    }
    showToast(`🎉 Đã lưu mã "${code}" vào ví voucher của bạn!`, 'success');
  }
}

// --- 4D. RENDER COMBO SÁCH TIẾT KIỆM & BOXSETS ---
function renderCombosSection() {
  const container = document.getElementById('combos-bundle-grid');
  if (!container) return;

  container.innerHTML = COMBOS_DATA.map(combo => {
    const books = combo.bookIds.map(id => BOOKS_DATA.find(b => b.id === id)).filter(Boolean);

    return `
      <div class="combo-bundle-card">
        <span class="combo-savings-pill">${combo.badge}</span>
        
        <div class="flex flex-col lg:flex-row items-center gap-6">
          
          <!-- Overlapping 3 Books Stack with Plus signs -->
          <div class="flex items-center gap-2 shrink-0 my-2">
            ${books.map((b, idx) => `
              <div class="flex items-center gap-2">
                <div class="w-20 h-28 sm:w-24 sm:h-34 rounded-xl overflow-hidden shadow-lg border border-stone-200/80 dark:border-pine-800 transform hover:scale-105 transition-transform cursor-pointer" onclick="navigateToBookDetail(${b.id})" title="${b.title}">
                  <img src="${b.cover}" alt="${b.title}" class="w-full h-full object-cover">
                </div>
                ${idx < books.length - 1 ? '<span class="text-stone-300 dark:text-pine-700 font-black text-lg">+</span>' : ''}
              </div>
            `).join('')}
          </div>

          <!-- Combo Info & 1-Click Buy Button -->
          <div class="flex-1 space-y-3 text-left w-full">
            <div>
              <h3 class="font-headline font-extrabold text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-snug">
                ${combo.title}
              </h3>
              <p class="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed line-clamp-2">
                ${combo.description}
              </p>
            </div>

            <div class="flex flex-wrap items-baseline gap-3 pt-1">
              <span class="font-headline font-black text-xl sm:text-2xl text-red-600 dark:text-red-400">
                ${formatCurrency(combo.comboPrice)}
              </span>
              <span class="text-xs text-stone-400 line-through">
                ${formatCurrency(combo.originalPrice)}
              </span>
              <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-pine-900 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                Tiết kiệm ${formatCurrency(combo.originalPrice - combo.comboPrice)}
              </span>
            </div>

            <div class="pt-2 flex flex-wrap items-center gap-3">
              <button onclick="buyCombo('${combo.id}')" class="px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                <i class="fa-solid fa-cart-arrow-down"></i> Mua Trọn Bộ 3 Cuốn
              </button>
              <span class="text-[11px] text-stone-500 dark:text-stone-400">
                <i class="fa-solid fa-truck-fast text-emerald-500 mr-1"></i> Tặng kèm Ebook + Freeship
              </span>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

function buyCombo(comboId) {
  const combo = COMBOS_DATA.find(c => c.id === comboId);
  if (!combo) return;

  combo.bookIds.forEach(id => {
    const book = BOOKS_DATA.find(b => b.id === id);
    if (book) {
      const cart = getCart();
      const existing = cart.find(item => item.id === book.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        cart.push({
          id: book.id,
          title: book.title,
          author: book.author,
          price: Math.round(book.price * 0.7), // Combo 30% off discount
          oldPrice: book.price,
          cover: book.cover,
          format: book.format || 'epub',
          quantity: 1
        });
      }
      saveCart(cart);
    }
  });

  updateCartBadge();
  showToast(`🎉 Đã thêm trọn bộ "${combo.title}" vào giỏ hàng với giá ưu đãi!`, 'success');
  setTimeout(() => {
    window.location.href = 'checkout.html';
  }, 600);
}

// --- 4E. RENDER TOP SÁCH ĐOẠT GIẢI THƯỞNG QUỐC TẾ ---
function renderAwardsSection() {
  const container = document.getElementById('awards-winning-grid');
  if (!container) return;

  container.innerHTML = AWARDS_DATA.map(award => {
    const book = BOOKS_DATA.find(b => b.id === award.bookId) || BOOKS_DATA[0];

    return `
      <div class="award-book-card group">
        <div class="award-laurel-badge">
          <i class="fa-solid fa-award text-amber-500"></i> ${award.awardName}
        </div>
        
        <div class="flex gap-3.5 mt-2">
          <div class="w-16 h-24 rounded-lg overflow-hidden shadow-md flex-shrink-0 cursor-pointer" onclick="navigateToBookDetail(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
          </div>
          
          <div class="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <h4 class="font-headline font-bold text-xs text-stone-900 dark:text-stone-100 line-clamp-2 hover:text-terracotta-500 cursor-pointer" onclick="navigateToBookDetail(${book.id})" title="${book.title}">
                ${book.title}
              </h4>
              <div class="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 truncate">${book.author}</div>
              <p class="text-[10px] text-amber-700 dark:text-amber-300 italic mt-1 line-clamp-2 bg-amber-50/60 dark:bg-pine-900/40 p-1.5 rounded">
                "${award.quote}"
              </p>
            </div>

            <div class="flex items-center justify-between mt-2 pt-1 border-t border-stone-100 dark:border-pine-800/60">
              <span class="font-headline font-bold text-xs text-red-600 dark:text-red-400">${formatCurrency(book.price)}</span>
              <button onclick="addToCart(${book.id}, event)" class="btn-cart-square">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- 6. RENDER BEST SELLERS SECTION (PHOTO 3 STYLE - 15 PRODUCTS PAGINATION) ---

let currentCatalogPage = 1;
const CATALOG_ITEMS_PER_PAGE = 5;

function renderBestsellersGrid(page = 1) {
  const container = document.getElementById('bestsellers-grid');
  if (!container) return;

  const totalPages = Math.ceil(BOOKS_DATA.length / CATALOG_ITEMS_PER_PAGE);
  currentCatalogPage = Math.max(1, Math.min(page, totalPages));

  const startIndex = (currentCatalogPage - 1) * CATALOG_ITEMS_PER_PAGE;
  const pageBooks = BOOKS_DATA.slice(startIndex, startIndex + CATALOG_ITEMS_PER_PAGE);

  container.innerHTML = pageBooks.map(book => renderRefinedBookCard(book)).join('');

  renderCatalogPaginationUI(totalPages);
}

function renderCatalogPaginationUI(totalPages) {
  const paginationContainer = document.getElementById('catalog-pagination-container');
  if (!paginationContainer) return;

  let pagesHtml = '';
  for (let i = 1; i <= totalPages; i++) {
    pagesHtml += `
      <button onclick="goToCatalogPage(${i})" class="catalog-page-btn ${i === currentCatalogPage ? 'active' : ''}">
        ${i}
      </button>
    `;
  }

  paginationContainer.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-4 border-t border-stone-200/80 dark:border-pine-800/80">
      <div class="text-xs text-stone-500 dark:text-stone-400 font-medium">
        Hiển thị <strong class="text-pine-900 dark:text-stone-200">${((currentCatalogPage - 1) * CATALOG_ITEMS_PER_PAGE) + 1} - ${Math.min(currentCatalogPage * CATALOG_ITEMS_PER_PAGE, BOOKS_DATA.length)}</strong> trên tổng số <strong class="text-terracotta-500">${BOOKS_DATA.length}</strong> cuốn sách tuyển chọn
      </div>

      <div class="flex items-center gap-1.5">
        <button onclick="prevCatalogPage()" class="catalog-nav-arrow" ${currentCatalogPage === 1 ? 'disabled' : ''} title="Trang trước">
          <i class="fa-solid fa-chevron-left text-xs"></i>
        </button>

        ${pagesHtml}

        <button onclick="nextCatalogPage()" class="catalog-nav-arrow" ${currentCatalogPage === totalPages ? 'disabled' : ''} title="Trang tiếp theo">
          <i class="fa-solid fa-chevron-right text-xs"></i>
        </button>
      </div>
    </div>
  `;
}

function goToCatalogPage(page) {
  renderBestsellersGrid(page);
  const section = document.getElementById('section-bestsellers');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function nextCatalogPage() {
  const totalPages = Math.ceil(BOOKS_DATA.length / CATALOG_ITEMS_PER_PAGE);
  if (currentCatalogPage < totalPages) {
    goToCatalogPage(currentCatalogPage + 1);
  }
}

function prevCatalogPage() {
  if (currentCatalogPage > 1) {
    goToCatalogPage(currentCatalogPage - 1);
  }
}

// --- 7. RENDER AUTHORS SPOTLIGHT (PHOTO 4 STYLE: GOLDEN QUILLS) ---

function renderAuthorsSpotlightGrid() {
  const container = document.getElementById('authors-spotlight-grid');
  if (!container) return;

  container.innerHTML = AUTHORS_DATA.map(author => `
    <div class="author-card-item flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 dark:bg-pine-900/70 border border-stone-200/80 dark:border-pine-800/80 shadow-sm hover:border-amber-400 transition-all group">
      <div class="author-card-avatar cursor-pointer" onclick="openChatWithUser('${author.publisherId}', 'direct')">
        <img src="${author.avatar}" alt="${author.name}" class="author-avatar-img">
        <div class="author-quill-badge" title="Tác giả tiêu biểu">
          <i class="fa-solid fa-feather-pointed"></i>
        </div>
      </div>

      <div class="mt-3 space-y-1">
        <div class="flex items-center justify-center gap-1 text-amber-500 text-[10px]">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>

        <h4 class="font-headline font-bold text-sm text-pine-900 dark:text-stone-100 group-hover:text-terracotta-500 transition-colors">
          ${author.name}
        </h4>

        <div class="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
          ${author.booksCount} Tác Phẩm
        </div>

        <button onclick="openChatWithUser('${author.publisherId}', 'direct')" class="mt-2 text-[10px] font-bold px-3 py-1 rounded-full bg-pine-900 text-white hover:bg-terracotta-500 transition-colors flex items-center gap-1 mx-auto">
          <i class="fa-solid fa-comment-dots text-[9px]"></i> Nhắn tin
        </button>
      </div>
    </div>
  `).join('');
}

// --- 7B. RENDER OFFICIAL PUBLISHER MALL (SECTION A) ---

function renderPublishersMall() {
  const container = document.getElementById('publishers-mall-grid');
  if (!container) return;

  container.innerHTML = PUBLISHERS_DATA.map(pub => `
    <div class="publisher-mall-card group">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3">
          <img src="${pub.logo}" alt="${pub.name}" class="w-14 h-14 rounded-2xl object-cover border-2 border-stone-200 dark:border-pine-700 shadow group-hover:scale-105 transition-transform">
          <div>
            <div class="flex items-center gap-1.5">
              <h4 class="font-headline font-bold text-base text-pine-900 dark:text-stone-100 group-hover:text-terracotta-500 transition-colors">${pub.name}</h4>
            </div>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="verified-mall-badge"><i class="fa-solid fa-circle-check text-[9px]"></i> ${pub.badge}</span>
              <span class="text-[11px] text-amber-500 font-bold"><i class="fa-solid fa-star"></i> ${pub.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="text-xs text-stone-600 dark:text-stone-400 mt-3 leading-relaxed line-clamp-2">
        ${pub.tagline}
      </p>

      <div class="flex items-center justify-between mt-4 pt-3 border-t border-stone-100 dark:border-pine-800">
        <span class="nxb-voucher-tag"><i class="fa-solid fa-ticket text-[10px]"></i> ${pub.voucher}</span>
        <span class="text-[11px] font-bold text-stone-500 dark:text-stone-400">${pub.ebookCount} Ebook Bản Quyền</span>
      </div>

      <div class="grid grid-cols-2 gap-2 mt-4">
        <button onclick="openChatWithUser('${pub.id}', 'direct')" class="text-xs font-bold py-2 rounded-xl border border-stone-300 dark:border-pine-700 hover:bg-stone-50 dark:hover:bg-pine-800 text-stone-700 dark:text-stone-300 transition-all flex items-center justify-center gap-1">
          <i class="fa-solid fa-store text-[11px] text-emerald-600"></i> Gian Hàng
        </button>
        <button onclick="showToast('Đã theo dõi ${pub.name} và nhận Voucher 20k!', 'success')" class="text-xs font-bold py-2 rounded-xl bg-pine-900 hover:bg-pine-800 text-white shadow transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1">
          <i class="fa-solid fa-plus text-[10px]"></i> Theo Dõi
        </button>
      </div>
    </div>
  `).join('');
}

// --- 7C. RENDER AUDIOBOOKS SPOTLIGHT & INTERACTIVE PLAYER (SECTION B) ---

function renderAudiobooksSpotlight() {
  const container = document.getElementById('audiobooks-spotlight-grid');
  if (!container) return;

  container.innerHTML = AUDIOBOOKS_DATA.map(audio => `
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 hover:border-emerald-400 transition-all group flex flex-col justify-between">
      <div>
        <div class="relative overflow-hidden rounded-xl shadow-lg mb-3 cursor-pointer" onclick="playAudiobookSample(${audio.id})">
          <img src="${audio.cover}" alt="${audio.title}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-emerald-500 text-pine-950 flex items-center justify-center text-lg shadow-xl hover:scale-110 transition-transform">
              <i class="fa-solid fa-play ml-0.5"></i>
            </div>
          </div>
          <div class="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-emerald-300 text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-white/10">
            ${audio.duration}
          </div>
          <div class="absolute bottom-2 right-2 bg-emerald-500 text-pine-950 text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
            ${audio.voiceRegion}
          </div>
        </div>

        <div class="space-y-1">
          <div class="flex items-center justify-between text-[11px] text-stone-300">
            <span><i class="fa-solid fa-microphone-lines text-emerald-400 mr-1"></i> ${audio.narrator}</span>
            <span class="text-amber-400 font-bold"><i class="fa-solid fa-star text-[10px]"></i> ${audio.rating}</span>
          </div>
          <h4 class="font-headline font-bold text-sm text-white line-clamp-1 group-hover:text-emerald-300 transition-colors" title="${audio.title}">
            ${audio.title}
          </h4>
          <div class="text-[11px] text-stone-400 truncate">${audio.author}</div>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <span class="text-[11px] text-stone-300"><i class="fa-solid fa-headphones text-emerald-400 mr-1"></i> ${audio.listenedCount} lượt nghe</span>
        <button onclick="playAudiobookSample(${audio.id})" class="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-pine-950 shadow transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5">
          <i class="fa-solid fa-play text-[10px]"></i> Nghe Thử
        </button>
      </div>
    </div>
  `).join('');
}

function playAudiobookSample(audioId) {
  const audio = AUDIOBOOKS_DATA.find(a => a.id === audioId) || AUDIOBOOKS_DATA[0];
  currentPlayingAudio = audio;
  isAudioPlaying = true;
  audioCurrentSeconds = 14;

  const dock = document.getElementById('floating-audio-dock');
  const titleEl = document.getElementById('audio-dock-title');
  const authorEl = document.getElementById('audio-dock-author');
  const voiceEl = document.getElementById('audio-dock-voice');
  const coverEl = document.getElementById('audio-dock-cover');
  const playIcon = document.getElementById('audio-dock-play-icon');
  const soundwave = document.getElementById('audio-soundwave-bars');

  if (titleEl) titleEl.innerText = audio.title;
  if (authorEl) authorEl.innerText = audio.author;
  if (voiceEl) voiceEl.innerText = `Giọng đọc: ${audio.narrator} (${audio.voiceRegion})`;
  if (coverEl) coverEl.src = audio.cover;
  if (playIcon) playIcon.className = 'fa-solid fa-pause';
  if (soundwave) soundwave.classList.remove('paused');

  dock?.classList.add('active');

  // Start progress timer loop
  clearInterval(audioPlaybackInterval);
  audioPlaybackInterval = setInterval(() => {
    if (isAudioPlaying) {
      audioCurrentSeconds++;
      if (audioCurrentSeconds > audioTotalSeconds) {
        audioCurrentSeconds = 0;
      }
      const min = Math.floor(audioCurrentSeconds / 60);
      const sec = audioCurrentSeconds % 60;
      const timeEl = document.getElementById('audio-current-time');
      if (timeEl) timeEl.innerText = `${min}:${String(sec).padStart(2, '0')}`;
    }
  }, 1000 / audioPlaybackSpeed);

  showToast(`Đang phát đoạn nghe thử: ${audio.title} 🎧`, 'success');
}

function toggleAudioPlayback() {
  isAudioPlaying = !isAudioPlaying;
  const playIcon = document.getElementById('audio-dock-play-icon');
  const soundwave = document.getElementById('audio-soundwave-bars');

  if (isAudioPlaying) {
    if (playIcon) playIcon.className = 'fa-solid fa-pause';
    soundwave?.classList.remove('paused');
    showToast('Tiếp tục phát sách nói', 'info');
  } else {
    if (playIcon) playIcon.className = 'fa-solid fa-play ml-0.5';
    soundwave?.classList.add('paused');
    showToast('Đã tạm dừng sách nói', 'info');
  }
}

function setAudioSpeed(speed) {
  audioPlaybackSpeed = speed;
  document.querySelectorAll('#speed-10, #speed-125, #speed-15').forEach(btn => {
    btn.className = 'px-2 py-0.5 rounded-full text-stone-300 hover:text-white transition-colors';
  });

  if (speed === 1.0) document.getElementById('speed-10')?.classList.add('bg-emerald-500', 'text-pine-950');
  if (speed === 1.25) document.getElementById('speed-125')?.classList.add('bg-emerald-500', 'text-pine-950');
  if (speed === 1.5) document.getElementById('speed-15')?.classList.add('bg-emerald-500', 'text-pine-950');

  // Adjust timer frequency
  if (isAudioPlaying && currentPlayingAudio) {
    playAudiobookSample(currentPlayingAudio.id);
  }
  showToast(`Đã đổi tốc độ đọc sang ${speed}x!`, 'info');
}

function closeAudioDock() {
  isAudioPlaying = false;
  clearInterval(audioPlaybackInterval);
  document.getElementById('floating-audio-dock')?.classList.remove('active');
  showToast('Đã tắt trình phát sách nói', 'info');
}

// --- 7D. RENDER DAILY BOOK QUOTES (SECTION C) ---

function renderDailyQuote() {
  const quote = QUOTES_DATA[currentQuoteIndex];
  if (!quote) return;

  const textEl = document.getElementById('quote-text-display');
  const authorEl = document.getElementById('quote-author-display');
  const bookEl = document.getElementById('quote-book-display');

  if (textEl) textEl.innerText = `"${quote.quote}"`;
  if (authorEl) authorEl.innerText = quote.author;
  if (bookEl) bookEl.innerText = `Trích: ${quote.book}`;
}

function nextRandomQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % QUOTES_DATA.length;
  renderDailyQuote();
  showToast('Đã đổi trích dẫn truyền cảm hứng mới ✨', 'info');
}

function setQuoteTheme(themeName) {
  const card = document.getElementById('quote-display-card');
  if (!card) return;
  card.className = `quote-visual-card quote-theme-${themeName}`;
  showToast(`Đã áp dụng nền màu: ${themeName.toUpperCase()}`, 'info');
}

function copyQuoteToClipboard() {
  const quote = QUOTES_DATA[currentQuoteIndex];
  const text = `"${quote.quote}" — ${quote.author} (Trích từ: ${quote.book}) • Nguồn: Huki Ebook`;
  navigator.clipboard?.writeText(text);
  showToast('Đã sao chép câu trích dẫn vào bộ nhớ tạm!', 'success');
}

function shareQuoteToFeed() {
  const quote = QUOTES_DATA[currentQuoteIndex];
  openCreatePostModal();
  const input = document.getElementById('post-content-input');
  if (input) {
    input.value = `📖 [Trích dẫn tâm đắc]: "${quote.quote}"\n\n— Tác giả: ${quote.author} (${quote.book})\n\nMình thấy câu nói này quá sâu sắc và truyền nhiều cảm hứng đọc sách hôm nay!`;
  }
  showToast('Đã chèn trích dẫn vào bài đăng mới trên Diễn đàn!', 'success');
}

// --- 7E. RENDER LEADERBOARD & READING HEATMAP (SECTION D) ---

function renderLeaderboard() {
  const container = document.getElementById('reader-leaderboard-list');
  if (!container) return;

  container.innerHTML = TOP_READERS_DATA.map(r => `
    <div class="flex items-center justify-between p-2.5 rounded-2xl bg-stone-50/80 dark:bg-pine-900/60 border border-stone-200/60 dark:border-pine-800 transition-all hover:scale-[1.02]">
      <div class="flex items-center gap-3">
        <div class="leaderboard-rank-badge rank-${r.rank}">
          ${r.rank === 1 ? '👑' : '#' + r.rank}
        </div>
        <img src="${r.avatar}" alt="${r.name}" class="w-9 h-9 rounded-full object-cover border border-amber-400">
        <div>
          <div class="font-headline font-bold text-xs text-pine-900 dark:text-stone-100">${r.name}</div>
          <div class="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">🔥 ${r.streakDays} ngày streak</div>
        </div>
      </div>
      <div class="text-right">
        <div class="text-xs font-black text-pine-900 dark:text-stone-100">${r.pagesWeek} trang</div>
        <div class="text-[10px] text-stone-400">${r.booksYear} cuốn/năm</div>
      </div>
    </div>
  `).join('');
}

function renderReadingHeatmap() {
  const container = document.getElementById('reading-heatmap-matrix');
  if (!container) return;

  let colsHtml = '';
  // 35 weeks for compact widget display
  for (let w = 0; w < 32; w++) {
    let cellsHtml = '';
    for (let d = 0; d < 7; d++) {
      // Random reading density level with high streak at the end
      let lvl = 0;
      const rand = Math.random();
      if (w > 26) {
        lvl = rand > 0.15 ? Math.floor(Math.random() * 3) + 2 : 1;
      } else {
        lvl = rand > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
      }
      cellsHtml += `<div class="heatmap-cell level-${lvl}" title="Tuần ${w + 1}, Ngày ${d + 1}: Đã đọc ${lvl * 25 + 5} trang"></div>`;
    }
    colsHtml += `<div class="heatmap-col">${cellsHtml}</div>`;
  }
  container.innerHTML = colsHtml;
}

// --- 7F. VIP SUBSCRIPTION ACTION (SECTION E) ---

function handleSubscribeVIP(tier) {
  const tierName = tier === 'personal' ? 'Hội Viên VIP Cá Nhân (49.000 ₫/tháng)' : 'Gói VIP Gia Đình & Team (99.000 ₫/tháng)';
  showToast(`Đang chuyển hướng đến cổng thanh toán cho ${tierName}! 🎉`, 'success');
}

// --- 8. REAL-TIME COUNTDOWN TIMER LOGIC ---

function startCountdownTimer() {
  let totalSeconds = 6 * 24 * 3600 + 14 * 3600 + 32 * 60 + 45;

  setInterval(() => {
    if (totalSeconds <= 0) {
      totalSeconds = 7 * 24 * 3600;
    } else {
      totalSeconds--;
    }

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');

    if (daysEl) daysEl.textContent = `${String(days).padStart(2, '0')}D`;
    if (hoursEl) hoursEl.textContent = `${String(hours).padStart(2, '0')}H`;
    if (minutesEl) minutesEl.textContent = `${String(minutes).padStart(2, '0')}M`;
    if (secondsEl) secondsEl.textContent = `${String(seconds).padStart(2, '0')}S`;
  }, 1000);
}

// --- 9. CATEGORY & SEARCH FILTER ACTIONS ---

function filterByCategory(categoryKey) {
  if (categoryKey === 'all') {
    renderBookOfMonthGrid();
    showToast('Đang hiển thị tất cả sách trên sàn!', 'info');
  } else {
    const filtered = BOOKS_DATA.filter(b => b.category === categoryKey);
    const container = document.getElementById('book-of-month-grid');
    if (container && filtered.length > 0) {
      container.innerHTML = filtered.map(book => `
        <div class="book-card-3d p-4 group">
          <div class="badge-discount-circle">-${book.discountPercent}%</div>
          <div class="book-mockup-wrapper cursor-pointer" onclick="openQuickView(${book.id})">
            <div class="book-mockup-cover w-36 h-52">
              <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="mt-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div class="flex items-center gap-1 text-amber-500 text-xs mb-1">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <span class="text-stone-500 text-[11px] font-bold ml-1">${book.rating}</span>
              </div>
              <h4 class="font-headline font-bold text-base text-pine-900 dark:text-stone-100 line-clamp-1">${book.title}</h4>
              <div class="text-xs text-stone-500 truncate">${book.author}</div>
            </div>
            <div class="pt-2 border-t border-stone-100 space-y-2">
              <div class="font-headline font-bold text-lg text-pine-900 dark:text-stone-100">${formatCurrency(book.price)}</div>
              <div class="grid grid-cols-2 gap-2">
                <button onclick="openEbookReader(${book.id})" class="text-xs font-bold py-2 rounded-xl bg-pine-50 text-pine-900">Đọc thử</button>
                <button onclick="addToCart(${book.id})" class="text-xs font-bold py-2 rounded-xl bg-terracotta-500 text-white">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
    showToast(`Đã lọc thể loại: ${categoryKey.toUpperCase()}`, 'success');
  }

  const section = document.getElementById('book-of-month-grid');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function handleHeroSearch() {
  const query = document.getElementById('hero-search-input')?.value.trim().toLowerCase();
  const category = document.getElementById('hero-category-select')?.value;

  if (!query && category === 'all') {
    showToast('Vui lòng nhập từ khóa tìm kiếm!', 'info');
    return;
  }

  let results = BOOKS_DATA;
  if (category && category !== 'all') {
    results = results.filter(b => b.category === category);
  }
  if (query) {
    results = results.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.publisher.toLowerCase().includes(query)
    );
  }

  if (results.length > 0) {
    const container = document.getElementById('book-of-month-grid');
    if (container) {
      container.innerHTML = results.map(book => `
        <div class="book-card-3d p-4 group">
          <div class="badge-discount-circle">-${book.discountPercent}%</div>
          <div class="book-mockup-wrapper cursor-pointer" onclick="openQuickView(${book.id})">
            <div class="book-mockup-cover w-36 h-52">
              <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="mt-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <h4 class="font-headline font-bold text-base text-pine-900 dark:text-stone-100 line-clamp-1">${book.title}</h4>
              <div class="text-xs text-stone-500 truncate">${book.author} • ${book.publisher}</div>
            </div>
            <div class="pt-2 border-t border-stone-100 space-y-2">
              <div class="font-headline font-bold text-lg text-pine-900 dark:text-stone-100">${formatCurrency(book.price)}</div>
              <div class="grid grid-cols-2 gap-2">
                <button onclick="openEbookReader(${book.id})" class="text-xs font-bold py-2 rounded-xl bg-pine-50 text-pine-900">Đọc thử</button>
                <button onclick="addToCart(${book.id})" class="text-xs font-bold py-2 rounded-xl bg-terracotta-500 text-white">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
    showToast(`Tìm thấy ${results.length} cuốn sách phù hợp!`, 'success');
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    showToast(`Không tìm thấy sách phù hợp với từ khóa "${query}"`, 'info');
  }
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email-input');
  if (emailInput && emailInput.value) {
    showToast(`🎉 Cảm ơn bạn! Mã giảm giá 20% đã được gửi đến: ${emailInput.value}`, 'success');
    emailInput.value = '';
  }
}

// --- 10. GOODREADS PRO READING DASHBOARD & SOCIAL FEED LOGIC ---

function renderGoodreadsFeed(filter = 'all', btnElement = null) {
  const feed = document.getElementById('goodreads-post-feed');
  if (!feed) return;

  if (btnElement) {
    document.querySelectorAll('.feed-tab-btn').forEach(btn => {
      btn.className = 'feed-tab-btn text-xs font-bold px-3.5 py-1.5 rounded-full bg-white dark:bg-pine-900 border border-stone-200 dark:border-pine-800 text-stone-700 dark:text-stone-300 hover:bg-parchment-100 transition-colors';
    });
    btnElement.className = 'feed-tab-btn text-xs font-bold px-3.5 py-1.5 rounded-full bg-pine-900 text-white shadow-sm';
  }

  let activities = GOODREADS_ACTIVITIES;
  if (filter === 'review') {
    activities = activities.filter(a => a.type === 'review');
  } else if (filter === 'progress') {
    activities = activities.filter(a => a.type === 'progress');
  } else if (filter === 'enterprise') {
    activities = activities.filter(a => a.type === 'enterprise');
  }

  feed.innerHTML = activities.map(act => `
    <div class="glass-card-static p-5 space-y-4">
      
      <!-- User Action Header -->
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <img src="${act.userAvatar}" alt="${act.user}" class="w-10 h-10 rounded-full object-cover border-2 border-amber-400 shrink-0">
          <div>
            <div class="text-xs text-stone-800 dark:text-stone-200">
              <strong class="text-pine-900 dark:text-stone-100 font-bold hover:text-terracotta-500 cursor-pointer">${act.user}</strong>
              <span class="text-stone-500 dark:text-stone-400"> ${act.actionText}</span>
            </div>
            <div class="text-[10px] text-stone-400 flex items-center gap-1.5 mt-0.5">
              <span>${act.timeAgo}</span>
              <span>•</span>
              <span class="text-emerald-700 dark:text-emerald-400 font-semibold">${act.userBadge}</span>
            </div>
          </div>
        </div>

        <!-- Shelf Status Dropdown -->
        <select onchange="updateBookShelf(${act.bookId}, this.value)" class="goodreads-shelf-select">
          <option value="want-to-read" ${act.shelfStatus === 'want-to-read' ? 'selected' : ''}>🔖 Muốn Đọc</option>
          <option value="currently-reading" ${act.shelfStatus === 'currently-reading' ? 'selected' : ''}>📖 Đang Đọc</option>
          <option value="read" ${act.shelfStatus === 'read' ? 'selected' : ''}>✅ Đã Đọc</option>
        </select>
      </div>

      <!-- Book Context Box (Goodreads Book Mini Card) -->
      <div class="p-3.5 rounded-2xl bg-parchment-50 dark:bg-pine-950/60 border border-stone-200/80 dark:border-pine-800 flex gap-3.5 items-start">
        <img src="${act.bookCover}" alt="${act.bookTitle}" class="w-16 h-24 rounded-lg object-cover shadow-sm shrink-0 cursor-pointer" onclick="openQuickView(${act.bookId})">
        
        <div class="flex-1 min-w-0 space-y-1.5">
          <div>
            <h4 class="font-headline font-bold text-sm text-pine-900 dark:text-stone-100 line-clamp-1 hover:text-terracotta-500 cursor-pointer" onclick="openQuickView(${act.bookId})">
              ${act.bookTitle}
            </h4>
            <div class="text-xs text-stone-500 truncate">${act.bookAuthor}</div>
          </div>

          <!-- Star Rating -->
          <div class="flex items-center gap-2">
            <span class="text-[11px] text-stone-500 font-bold">Đánh giá:</span>
            <div class="flex items-center text-amber-500 text-xs">
              ${Array.from({ length: 5 }, (_, i) => `<i class="fa-solid fa-star ${i < act.userRating ? 'text-amber-500' : 'text-stone-300'}"></i>`).join('')}
            </div>
          </div>

          <!-- Progress Bar if progress type -->
          ${act.type === 'progress' ? `
            <div class="space-y-1 pt-1">
              <div class="flex justify-between text-[10px] font-bold text-stone-600 dark:text-stone-300">
                <span>Đã đọc đến trang ${act.currentPage} / ${act.totalPages}</span>
                <span class="text-terracotta-500">${act.progressPercent}%</span>
              </div>
              <div class="progress-track-bar">
                <div class="progress-fill-bar" style="width: ${act.progressPercent}%;"></div>
              </div>
            </div>
          ` : ''}

          <!-- Fast Read Trial Action Button -->
          <div class="pt-1">
            <button onclick="openEbookReader(${act.bookId})" class="text-[10px] font-bold px-3 py-1 rounded-lg bg-pine-900 text-white hover:bg-pine-800 transition-colors flex items-center gap-1.5">
              <i class="fa-solid fa-book-open text-[9px]"></i> Đọc thử 5 trang
            </button>
          </div>
        </div>
      </div>

      <!-- Quote / Review Note Content -->
      ${act.quoteOrNote ? `
        <div class="text-xs text-stone-800 dark:text-stone-200 leading-relaxed pl-3 border-l-2 border-terracotta-500 italic bg-terracotta-50/40 dark:bg-pine-900/30 p-2.5 rounded-r-xl">
          "${act.quoteOrNote}"
        </div>
      ` : ''}

      <!-- Feed Actions & Likes -->
      <div class="pt-2 border-t border-stone-100 dark:border-pine-800 flex justify-between items-center text-xs text-stone-500">
        <button onclick="toggleGoodreadsLike(${act.id})" class="flex items-center gap-1.5 font-bold hover:text-rose-500 transition-colors">
          <i class="fa-solid fa-heart ${act.userLiked ? 'text-rose-500' : 'text-stone-400'}"></i>
          <span>${act.likesCount} Thích</span>
        </button>
        <div class="flex items-center gap-4 text-xs font-bold text-stone-500">
          <span><i class="fa-regular fa-comment mr-1"></i> ${act.comments.length} Bình luận</span>
          <button onclick="showToast('Đã sao chép liên kết hoạt động đọc sách!', 'info')" class="hover:text-pine-900"><i class="fa-solid fa-share-nodes"></i></button>
        </div>
      </div>

      <!-- Inline Comment Input Box (Goodreads Style) -->
      <form onsubmit="handleGoodreadsCommentSubmit(event, ${act.id})" class="flex items-center gap-2 pt-1">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80" alt="Me" class="w-7 h-7 rounded-full object-cover">
        <input type="text" placeholder="Viết bình luận hoặc trao đổi về cuốn sách..." class="flex-1 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-pine-900 border border-stone-200 dark:border-pine-800 text-xs focus:outline-none focus:border-terracotta-500">
        <button type="submit" class="text-xs font-bold text-terracotta-500 hover:text-terracotta-600 px-2 py-1">Gửi</button>
      </form>

      <!-- Comments List -->
      ${act.comments.length > 0 ? `
        <div class="space-y-1.5 pt-1 pl-9">
          ${act.comments.map(c => `
            <div class="p-2 rounded-xl bg-stone-50 dark:bg-pine-950/40 text-[11px] text-stone-700 dark:text-stone-300">
              <strong class="font-bold text-pine-900 dark:text-stone-100">${c.user}:</strong> ${c.text}
            </div>
          `).join('')}
        </div>
      ` : ''}

    </div>
  `).join('');
}

function toggleGoodreadsLike(activityId) {
  const act = GOODREADS_ACTIVITIES.find(a => a.id === activityId);
  if (act) {
    if (act.userLiked) {
      act.userLiked = false;
      act.likesCount--;
    } else {
      act.userLiked = true;
      act.likesCount++;
    }
    renderGoodreadsFeed();
  }
}

function handleGoodreadsCommentSubmit(e, activityId) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (!input || !input.value.trim()) return;

  const act = GOODREADS_ACTIVITIES.find(a => a.id === activityId);
  if (act) {
    act.comments.push({
      id: Date.now(),
      user: "Nguyễn Văn Anh (Bạn)",
      text: input.value.trim(),
      timeAgo: "Vừa xong"
    });
    input.value = '';
    renderGoodreadsFeed();
    showToast('Đã gửi bình luận thảo luận sách!', 'success');
  }
}

function updateBookShelf(bookId, status) {
  const statusNames = {
    'want-to-read': 'Kệ Muốn Đọc (Want to Read)',
    'currently-reading': 'Kệ Đang Đọc (Currently Reading)',
    'read': 'Kệ Đã Đọc (Read)'
  };
  showToast(`✅ Đã chuyển sách vào ${statusNames[status] || status}!`, 'success');
}

// --- 11. INTERACTIVE READING PROGRESS MODAL LOGIC ---

function openProgressModal() {
  const modal = document.getElementById('update-progress-modal');
  if (!modal) return;

  const pageInput = document.getElementById('modal-page-input');
  const pageSlider = document.getElementById('modal-page-slider');
  const percentBadge = document.getElementById('modal-progress-percent-badge');

  if (pageInput) pageInput.value = myReadingPage;
  if (pageSlider) pageSlider.value = myReadingPage;
  if (percentBadge) {
    const percent = Math.round((myReadingPage / myTotalPages) * 100);
    percentBadge.textContent = `${percent}%`;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProgressModal() {
  const modal = document.getElementById('update-progress-modal');
  modal?.classList.add('hidden');
  document.body.style.overflow = '';
}

function handlePageInputChange(val) {
  const page = Math.min(myTotalPages, Math.max(1, parseInt(val) || 1));
  const slider = document.getElementById('modal-page-slider');
  const percentBadge = document.getElementById('modal-progress-percent-badge');

  if (slider) slider.value = page;
  if (percentBadge) {
    const percent = Math.round((page / myTotalPages) * 100);
    percentBadge.textContent = `${percent}%`;
  }
}

function handlePageSliderChange(val) {
  const page = parseInt(val) || 1;
  const input = document.getElementById('modal-page-input');
  const percentBadge = document.getElementById('modal-progress-percent-badge');

  if (input) input.value = page;
  if (percentBadge) {
    const percent = Math.round((page / myTotalPages) * 100);
    percentBadge.textContent = `${percent}%`;
  }
}

function handleSaveReadingProgress(e) {
  e.preventDefault();
  const input = document.getElementById('modal-page-input');
  const note = document.getElementById('modal-progress-note')?.value;
  const shareCheckbox = document.getElementById('modal-share-feed-checkbox');

  const newPage = parseInt(input.value) || myReadingPage;
  myReadingPage = newPage;

  const percent = Math.round((myReadingPage / myTotalPages) * 100);
  const progressBar = document.getElementById('my-reading-progress-bar');
  if (progressBar) progressBar.style.width = `${percent}%`;

  if (shareCheckbox && shareCheckbox.checked) {
    const newActivity = {
      id: Date.now(),
      user: "Nguyễn Văn Anh (Bạn)",
      userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
      userBadge: "Độc Giả VIP",
      timeAgo: "Vừa xong",
      type: "progress",
      actionText: "đã cập nhật tiến độ đọc sách",
      bookId: 1,
      bookTitle: "Don't Make Me Think (Đừng Bắt Tôi Phải Nghĩ)",
      bookAuthor: "Steve Krug",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
      shelfStatus: percent >= 100 ? "read" : "currently-reading",
      currentPage: myReadingPage,
      totalPages: myTotalPages,
      progressPercent: percent,
      userRating: 5,
      quoteOrNote: note || "Vừa hoàn thành thêm một chương sách rất tâm đắc!",
      likesCount: 1,
      userLiked: true,
      comments: []
    };

    GOODREADS_ACTIVITIES.unshift(newActivity);
    renderGoodreadsFeed('all');
  }

  closeProgressModal();
  showToast(`🎉 Đã cập nhật tiến độ đọc lên ${percent}% (${myReadingPage}/${myTotalPages} trang)!`, 'success');
}

// --- 12. EBOOK 5-PAGE READER MODAL LOGIC ---

function openEbookReader(bookId) {
  const book = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];
  currentReaderBook = book;
  currentEbookPage = 1;

  const modal = document.getElementById('ebook-reader-modal');
  const titleEl = document.getElementById('reader-book-title');
  const authorEl = document.getElementById('reader-book-author');

  if (titleEl) titleEl.textContent = book.title;
  if (authorEl) authorEl.textContent = book.author;

  updateEbookPageContent();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeEbookReader() {
  const modal = document.getElementById('ebook-reader-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function updateEbookPageContent() {
  if (!currentReaderBook) return;

  const contentEl = document.getElementById('ebook-reader-content');
  const pageNumEl = document.getElementById('reader-page-number');

  const pageText = currentReaderBook.samplePages[currentEbookPage - 1] || "Nội dung đang được cập nhật.";

  if (contentEl) {
    contentEl.style.fontSize = `${currentEbookFontSize}px`;
    contentEl.innerHTML = `
      <div class="space-y-4">
        <div class="text-center font-bold text-xs uppercase tracking-widest text-terracotta-500 mb-6">
          — ${currentReaderBook.title} • Trang ${currentEbookPage} / 5 —
        </div>
        <p class="first-letter:text-4xl first-letter:font-bold first-letter:text-terracotta-500 first-letter:mr-2 first-letter:float-left leading-relaxed">
          ${pageText}
        </p>
      </div>
    `;
  }

  if (pageNumEl) {
    pageNumEl.textContent = `Trang ${currentEbookPage} / 5`;
  }
}

function nextEbookPage() {
  if (currentEbookPage < 5) {
    currentEbookPage++;
    updateEbookPageContent();
  } else {
    showToast('Bạn đã đọc hết 5 trang đọc thử! Mua Ebook bản đầy đủ để đọc tiếp nhé.', 'info');
  }
}

function prevEbookPage() {
  if (currentEbookPage > 1) {
    currentEbookPage--;
    updateEbookPageContent();
  }
}

function setReaderTheme(themeName) {
  currentReaderTheme = themeName;
  const container = document.getElementById('ebook-reader-container');
  if (!container) return;

  container.className = 'flex-1 p-8 md:p-12 overflow-y-auto flex flex-col justify-between transition-colors duration-200 ';

  if (themeName === 'ivory') {
    container.classList.add('bg-[#faf7f0]', 'text-[#1a1612]');
  } else if (themeName === 'sepia') {
    container.classList.add('bg-[#f4ecd8]', 'text-[#433422]');
  } else if (themeName === 'charcoal') {
    container.classList.add('bg-[#0c3227]', 'text-[#d5ece2]');
  } else if (themeName === 'purewhite') {
    container.classList.add('bg-[#ffffff]', 'text-[#111111]');
  }
}

function changeEbookFontSize(delta) {
  currentEbookFontSize = Math.min(26, Math.max(13, currentEbookFontSize + delta));
  updateEbookPageContent();
}

// --- 13. QUICK VIEW BOOK MODAL ---

function openQuickView(bookId) {
  const book = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];
  const modal = document.getElementById('quick-view-modal');
  const body = document.getElementById('quick-view-modal-body');

  if (!body) return;

  body.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex justify-center items-center">
        <div class="book-mockup-cover w-44 h-64 shadow-2xl">
          <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-terracotta-50 text-terracotta-600 border border-terracotta-200">${book.categoryName}</span>
          <h3 class="font-headline font-bold text-2xl text-pine-900 dark:text-stone-100 mt-1">${book.title}</h3>
          <p class="text-xs text-stone-500">Tác giả: <strong class="text-stone-800 dark:text-stone-200">${book.author}</strong> • NXB: ${book.publisher}</p>
        </div>

        <div class="flex items-center gap-1 text-amber-500 text-xs">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          <span class="font-bold text-stone-700 dark:text-stone-300 ml-1">4.9 / 5.0 (${book.soldCount} lượt mua)</span>
        </div>

        <div class="flex items-baseline gap-3">
          <span class="font-headline font-bold text-3xl text-terracotta-500">${formatCurrency(book.price)}</span>
          <span class="text-sm text-stone-400 line-through">${formatCurrency(book.oldPrice)}</span>
          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Tiết kiệm ${book.discountPercent}%</span>
        </div>

        <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">${book.synopsis}</p>

        <div class="pt-3 border-t border-stone-200 dark:border-pine-800 grid grid-cols-3 gap-3">
          <Link href="book-detail.html" class="text-xs font-bold py-3 rounded-xl border border-stone-200 dark:border-pine-700 text-pine-900 dark:text-stone-100 flex items-center justify-center gap-1.5 transition-all hover:border-terracotta-500">
            <i class="fa-solid fa-circle-info"></i> Chi Tiết
          </a>
          <button onclick="closeQuickViewModal(); openEbookReader(${book.id});" class="text-xs font-bold py-3 rounded-xl bg-pine-100 text-pine-900 hover:bg-pine-200 flex items-center justify-center gap-1.5 transition-all">
            <i class="fa-solid fa-book-open"></i> Đọc Thử 5 Trang
          </button>
          <button onclick="addToCart(${book.id}); closeQuickViewModal();" class="text-xs font-bold py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-md flex items-center justify-center gap-1.5 transition-all">
            <i class="fa-solid fa-bag-shopping"></i> Thêm Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
  const modal = document.getElementById('quick-view-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// --- 14. CART DRAWER & WISHLIST LOGIC ---

function addToCart(bookId) {
  const existing = cartState.find(item => item.bookId === bookId);
  if (existing) {
    existing.quantity++;
  } else {
    cartState.push({ bookId, quantity: 1 });
  }

  updateCartBadge();
  showToast('Đã thêm sách vào giỏ hàng thành công!', 'success');
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  renderCartItems();

  overlay.classList.remove('hidden');
  drawer.classList.remove('translate-x-full');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');

  drawer.classList.add('translate-x-full');
  overlay.classList.add('hidden');
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalEl = document.getElementById('cart-total-price');
  if (!container) return;

  if (cartState.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-stone-400">
        <i class="fa-solid fa-cart-shopping text-4xl mb-3 text-stone-300"></i>
        <p class="text-xs font-bold">Giỏ hàng của bạn đang trống</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = '0 ₫';
    return;
  }

  let total = 0;
  container.innerHTML = cartState.map(item => {
    const book = BOOKS_DATA.find(b => b.id === item.bookId) || BOOKS_DATA[0];
    const itemTotal = book.price * item.quantity;
    total += itemTotal;

    return `
      <div class="flex items-center gap-3 p-2.5 rounded-2xl bg-stone-50 dark:bg-pine-900/50 border border-stone-200 dark:border-pine-800">
        <img src="${book.cover}" alt="${book.title}" class="w-12 h-16 rounded object-cover shadow-sm">
        <div class="flex-1 min-w-0">
          <h5 class="font-bold text-xs text-pine-900 dark:text-stone-100 truncate">${book.title}</h5>
          <div class="text-[11px] text-terracotta-500 font-bold">${formatCurrency(book.price)}</div>
          <div class="flex items-center gap-2 mt-1">
            <button onclick="changeCartQty(${book.id}, -1)" class="w-5 h-5 rounded bg-white dark:bg-pine-800 border text-xs font-bold">-</button>
            <span class="text-xs font-bold">${item.quantity}</span>
            <button onclick="changeCartQty(${book.id}, 1)" class="w-5 h-5 rounded bg-white dark:bg-pine-800 border text-xs font-bold">+</button>
          </div>
        </div>
        <button onclick="removeFromCart(${book.id})" class="text-stone-400 hover:text-rose-500 p-1 text-xs">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = formatCurrency(total);
}

function changeCartQty(bookId, delta) {
  const item = cartState.find(i => i.bookId === bookId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cartState = cartState.filter(i => i.bookId !== bookId);
    }
  }
  updateCartBadge();
  renderCartItems();
}

function removeFromCart(bookId) {
  cartState = cartState.filter(i => i.bookId !== bookId);
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge-count');
  const count = cartState.reduce((acc, i) => acc + i.quantity, 0);
  if (badge) badge.textContent = count;
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-badge-count');
  if (badge) badge.textContent = wishlistState.length;
}

// --- 15. HUKI MESSENGER FLOATING WINDOW LOGIC ---

function toggleMessenger() {
  const drawer = document.getElementById('messenger-drawer');
  isMessengerOpen = !isMessengerOpen;

  if (isMessengerOpen) {
    drawer.classList.remove('hidden');
    isMessengerMinimized = false;
    drawer.classList.remove('minimized');
    renderMessengerWindow();
  } else {
    drawer.classList.add('hidden');
  }
}

function minimizeMessenger() {
  const drawer = document.getElementById('messenger-drawer');
  isMessengerMinimized = !isMessengerMinimized;
  drawer.classList.toggle('minimized', isMessengerMinimized);
}

function renderMessengerWindow() {
  renderChatThreads();
  renderActiveChatPane();
}

function selectChatTab(type) {
  activeChatType = type;
  const directBtn = document.getElementById('tab-chat-direct');
  const groupBtn = document.getElementById('tab-chat-group');

  if (type === 'direct') {
    directBtn.className = 'flex-1 py-2.5 font-bold text-xs text-pine-900 dark:text-emerald-400 border-b-2 border-pine-900 dark:border-emerald-400 transition-colors';
    groupBtn.className = 'flex-1 py-2.5 font-bold text-xs text-stone-500 hover:text-pine-900 transition-colors border-b-2 border-transparent';
    activeChatId = CHATS_DATA.direct[0].id;
  } else {
    groupBtn.className = 'flex-1 py-2.5 font-bold text-xs text-pine-900 dark:text-emerald-400 border-b-2 border-pine-900 dark:border-emerald-400 transition-colors';
    directBtn.className = 'flex-1 py-2.5 font-bold text-xs text-stone-500 hover:text-pine-900 transition-colors border-b-2 border-transparent';
    activeChatId = CHATS_DATA.group[0].id;
  }

  renderMessengerWindow();
}

function renderChatThreads() {
  const container = document.getElementById('messenger-thread-list');
  if (!container) return;

  const threads = CHATS_DATA[activeChatType] || [];
  container.innerHTML = threads.map(t => `
    <div onclick="selectThread('${t.id}')" class="flex items-center gap-2.5 p-2 rounded-xl cursor-pointer transition-all ${t.id === activeChatId ? 'bg-pine-100 dark:bg-pine-800' : 'hover:bg-stone-100 dark:hover:bg-pine-900'}">
      <div class="relative">
        <img src="${t.avatar}" alt="${t.name}" class="w-9 h-9 rounded-full object-cover">
        ${t.online ? '<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>' : ''}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-center">
          <h5 class="font-bold text-xs text-pine-900 dark:text-stone-100 truncate">${t.name}</h5>
        </div>
        <div class="text-[10px] text-stone-500 truncate">${t.messages[t.messages.length - 1]?.text || 'Bắt đầu cuộc trò chuyện...'}</div>
      </div>
    </div>
  `).join('');
}

function selectThread(id) {
  activeChatId = id;
  renderMessengerWindow();
}

function renderActiveChatPane() {
  const container = document.getElementById('messenger-chat-pane');
  if (!container) return;

  const thread = (CHATS_DATA[activeChatType] || []).find(t => t.id === activeChatId) || CHATS_DATA.direct[0];

  container.innerHTML = `
    <div class="p-3 border-b border-stone-200 dark:border-pine-800 flex items-center justify-between bg-stone-50 dark:bg-pine-950">
      <div class="flex items-center gap-2.5">
        <img src="${thread.avatar}" alt="${thread.name}" class="w-8 h-8 rounded-full object-cover">
        <div>
          <h5 class="font-bold text-xs text-pine-900 dark:text-stone-100">${thread.name}</h5>
          <div class="text-[10px] text-emerald-600 font-medium">${thread.online ? 'Đang hoạt động' : 'Ngoại tuyến'}</div>
        </div>
      </div>
      <button onclick="showToast('Đang kết nối cuộc gọi âm thanh...', 'info')" class="w-7 h-7 rounded-full bg-stone-200 dark:bg-pine-800 text-stone-700 dark:text-stone-300 flex items-center justify-center text-xs">
        <i class="fa-solid fa-phone"></i>
      </button>
    </div>

    <div class="flex-1 p-3 overflow-y-auto space-y-2.5" id="chat-messages-container">
      ${thread.messages.map(m => `
        <div class="flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}">
          <div class="max-w-[75%] p-2.5 rounded-2xl text-xs ${m.sender === 'me' ? 'bg-pine-900 text-white rounded-br-none' : 'bg-stone-100 dark:bg-pine-800 text-stone-800 dark:text-stone-200 rounded-bl-none'}">
            <p>${m.text}</p>
            <span class="text-[9px] opacity-70 block text-right mt-1">${m.time}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <form onsubmit="handleSendChatMessage(event)" class="p-2 border-t border-stone-200 dark:border-pine-800 flex items-center gap-2 bg-stone-50 dark:bg-pine-950">
      <input type="text" id="chat-text-input" placeholder="Nhập tin nhắn..." class="flex-1 px-3 py-1.5 rounded-full bg-white dark:bg-pine-900 border border-stone-200 dark:border-pine-800 text-xs focus:outline-none focus:border-terracotta-500" required>
      <button type="submit" class="w-8 h-8 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white flex items-center justify-center text-xs shadow-sm">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  `;
}

function handleSendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chat-text-input');
  if (!input || !input.value.trim()) return;

  const thread = (CHATS_DATA[activeChatType] || []).find(t => t.id === activeChatId);
  if (thread) {
    thread.messages.push({
      id: Date.now(),
      sender: 'me',
      text: input.value.trim(),
      time: 'Vừa xong'
    });

    renderActiveChatPane();
    const chatContainer = document.getElementById('chat-messages-container');
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
      thread.messages.push({
        id: Date.now() + 1,
        sender: thread.id,
        text: 'Cảm ơn bạn đã nhắn tin! Chúng tôi sẽ phản hồi trong giây lát.',
        time: 'Vừa xong'
      });
      renderActiveChatPane();
      if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1200);
  }
}

function openChatWithUser(userId, type) {
  isMessengerOpen = true;
  const drawer = document.getElementById('messenger-drawer');
  drawer.classList.remove('hidden');
  activeChatType = type || 'direct';
  activeChatId = userId;
  renderMessengerWindow();
}

// --- 16. VIEW SWITCHER (STORE VS FORUM) ---

function switchView(viewName) {
  const storeView = document.getElementById('store-view');
  const forumView = document.getElementById('forum-view');
  const btnStore = document.getElementById('btn-view-store');
  const btnForum = document.getElementById('btn-view-forum');
  const railBtnStore = document.getElementById('rail-btn-store');
  const railBtnForum = document.getElementById('rail-btn-forum');
  const sidebarNavStore = document.getElementById('sidebar-nav-store');
  const sidebarNavForum = document.getElementById('sidebar-nav-forum');

  if (viewName === 'forum') {
    storeView?.classList.add('hidden');
    forumView?.classList.remove('hidden');

    // Header buttons
    if (btnStore) {
      btnStore.className = 'px-3.5 py-1.5 rounded-full font-bold text-xs text-stone-600 dark:text-stone-300 hover:text-emerald-800 flex items-center gap-1.5 transition-all';
    }
    if (btnForum) {
      btnForum.className = 'px-3.5 py-1.5 rounded-full font-bold text-xs bg-emerald-800 text-white shadow-sm flex items-center gap-1.5 transition-all active';
    }

    // Sidebar rail buttons
    railBtnStore?.classList.remove('active');
    railBtnForum?.classList.add('active');

    // Sidebar Level 2 nav links
    sidebarNavStore?.classList.remove('crisply-nav-link-active-figma');
    sidebarNavForum?.classList.add('crisply-nav-link-active-figma');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Đang xem Mạng Xã Hội Độc Giả HUKI!', 'info');
  } else {
    forumView?.classList.add('hidden');
    storeView?.classList.remove('hidden');

    // Header buttons
    if (btnForum) {
      btnForum.className = 'px-3.5 py-1.5 rounded-full font-bold text-xs text-stone-600 dark:text-stone-300 hover:text-emerald-800 flex items-center gap-1.5 transition-all';
    }
    if (btnStore) {
      btnStore.className = 'px-3.5 py-1.5 rounded-full font-bold text-xs bg-emerald-800 text-white shadow-sm flex items-center gap-1.5 transition-all active';
    }

    // Sidebar rail buttons
    railBtnForum?.classList.remove('active');
    railBtnStore?.classList.add('active');

    // Sidebar Level 2 nav links
    sidebarNavForum?.classList.remove('crisply-nav-link-active-figma');
    sidebarNavStore?.classList.add('crisply-nav-link-active-figma');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Đang xem Sàn Thương Mại Sách Số & Ebook Bản Quyền!', 'info');
  }
}

// Interactive Community Poll Handler (Figma Screen 2)
let userHasVotedPoll = false;
function voteCommunityPoll(optionIdx) {
  if (userHasVotedPoll) {
    showToast('Bạn đã bỏ phiếu trong cuộc bình chọn này rồi!', 'info');
    return;
  }
  userHasVotedPoll = true;

  const opt1 = document.getElementById('poll-opt-1');
  const opt2 = document.getElementById('poll-opt-2');
  const opt3 = document.getElementById('poll-opt-3');

  if (optionIdx === 1) {
    opt1?.querySelector('.poll-progress-fill')?.classList.add('active-voted');
    showToast('Cảm ơn bạn đã bình chọn cho Team Sách Giấy truyền thống! 📖', 'success');
  } else if (optionIdx === 2) {
    opt2?.querySelector('.poll-progress-fill')?.classList.add('active-voted');
    showToast('Cảm ơn bạn đã bình chọn cho Team Ebook tiện lợi & ghi chú nhanh! 📱', 'success');
  } else if (optionIdx === 3) {
    opt3?.querySelector('.poll-progress-fill')?.classList.add('active-voted');
    showToast('Cảm ơn bạn đã bình chọn cho Linh hoạt cả hai tuỳ hoàn cảnh! ☕', 'success');
  }
}

// Forum Filter Tabs (Figma Screen 2)
function filterForumTab(tabKey, element) {
  document.querySelectorAll('#forum-filter-tabs .feed-tab-btn').forEach(btn => {
    btn.className = 'feed-tab-btn text-xs font-bold px-3.5 py-1.5 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-pine-800 transition-colors flex items-center gap-1.5';
  });

  if (element) {
    element.className = 'feed-tab-btn active text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5';
  }

  const titles = {
    'for-you': 'Bảng tin dành cho bạn',
    'following': 'Bài viết từ người bạn đang theo dõi',
    'review': 'Danh sách bài Review & Chấm sao',
    'discuss': 'Các chủ đề thảo luận sôi nổi',
    'clubs': 'Hoạt động các Câu Lạc Bộ Sách',
    'challenge': 'Tiến độ Thử Thách Đọc 2026'
  };

  showToast(`Đang lọc: ${titles[tabKey] || tabKey}`, 'info');
}

// Post Like Counter Toggle
function togglePostLike(btnEl, baseCount) {
  const icon = btnEl.querySelector('i');
  const isLiked = icon.classList.contains('fa-solid');

  if (isLiked) {
    icon.className = 'fa-regular fa-heart text-stone-400';
    btnEl.classList.remove('text-rose-600');
    showToast('Đã bỏ thích bài viết', 'info');
  } else {
    icon.className = 'fa-solid fa-heart text-rose-500';
    btnEl.classList.add('text-rose-600');
    showToast('Đã thích bài viết! ❤️', 'success');
  }
}

function focusCommentInput(inputId) {
  showToast('Hãy để lại bình luận chia sẻ cảm nghĩ của bạn!', 'info');
}

function handleQuickForumPost() {
  const input = document.getElementById('forum-quick-post-input');
  const text = input ? input.value.trim() : '';

  if (!text) {
    showToast('Vui lòng nhập nội dung bài viết trước khi đăng!', 'error');
    return;
  }

  if (input) input.value = '';
  showToast('Đã đăng bài viết thành công lên Mạng Xã Hội Độc Giả HUKI! 🎉', 'success');
}


// --- 17. CREATE POST MODAL & UTILS ---

function openCreatePostModal() {
  document.getElementById('create-post-modal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCreatePostModal() {
  document.getElementById('create-post-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function handleFakeImageUpload(e) {
  const files = e.target.files;
  const grid = document.getElementById('post-image-preview-grid');
  if (!grid) return;

  grid.classList.remove('hidden');
  grid.innerHTML = '';

  for (let i = 0; i < files.length; i++) {
    const url = URL.createObjectURL(files[i]);
    grid.innerHTML += `<img src="${url}" class="w-16 h-16 rounded-lg object-cover border">`;
  }
}

function handleCreatePostSubmit(e) {
  e.preventDefault();
  const content = document.getElementById('post-content-input')?.value;
  const bookSelect = document.getElementById('create-post-book-select');
  const bookId = parseInt(bookSelect?.value) || 1;
  const book = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];

  const newActivity = {
    id: Date.now(),
    user: "Nguyễn Văn Anh (Bạn)",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    userBadge: "Độc Giả VIP",
    timeAgo: "Vừa xong",
    type: "review",
    actionText: "đã đăng bài chia sẻ & review sách",
    bookId: book.id,
    bookTitle: book.title,
    bookAuthor: book.author,
    bookCover: book.cover,
    shelfStatus: "read",
    currentPage: 300,
    totalPages: 300,
    progressPercent: 100,
    userRating: 5,
    quoteOrNote: content,
    likesCount: 1,
    userLiked: true,
    comments: []
  };

  GOODREADS_ACTIVITIES.unshift(newActivity);
  closeCreatePostModal();
  renderGoodreadsFeed('all');
  showToast('🎉 Đăng bài viết lên Diễn Đàn thành công!', 'success');
}

function populateBookSelectOptions() {
  const select = document.getElementById('create-post-book-select');
  if (!select) return;

  select.innerHTML = '<option value="">-- Chọn sách bạn đang thảo luận --</option>' +
    BOOKS_DATA.map(b => `<option value="${b.id}">${b.title} (${b.author})</option>`).join('');
}

// --- 18. DARK MODE & TOAST UTILITIES ---

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('huki_dark_mode', isDark);
  updateDarkModeUI(isDark);
}

function updateDarkModeUI(isDark) {
  const icon = document.getElementById('dark-mode-icon');
  const text = document.getElementById('dark-mode-text');

  if (icon) icon.className = isDark ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-amber-400';
  if (text) text.textContent = isDark ? 'Chế Độ Sáng' : 'Chế Độ Đêm';
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-pine-900 text-white' : type === 'error' ? 'bg-rose-600 text-white' : 'bg-stone-900 text-white';

  toast.className = `toast-bubble pointer-events-auto px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-bold ${bgClass} border border-white/20`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-400' : type === 'error' ? 'fa-triangle-exclamation text-rose-300' : 'fa-circle-info text-amber-400'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function setupEventListeners() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('hero-search-input')?.focus();
    }
  });
}

// --- 19. CUSTOM COLOR LABELS & CONTEXTUAL FILTERING ---

function renderCustomLabels() {
  const storeBar = document.getElementById('store-custom-labels-bar');
  const forumList = document.getElementById('forum-custom-labels-list');

  // 1. Store Filter Pills
  if (storeBar) {
    const allActive = activeFilterLabelId === null ? 'active' : '';
    let html = `
      <button onclick="filterByCustomLabel(null)" class="label-filter-pill ${allActive}">
        <i class="fa-solid fa-layer-group text-[10px]"></i>
        <span>Tất Cả Sách</span>
      </button>
      <button onclick="filterByCategory('tam-ly')" class="label-filter-pill">
        <span>🧠 Tâm Lý & Kỹ Năng</span>
      </button>
      <button onclick="filterByCategory('kinh-te')" class="label-filter-pill">
        <span>💼 Kinh Tế</span>
      </button>
      <button onclick="filterByCategory('cong-nghe')" class="label-filter-pill">
        <span>💻 Công Nghệ & AI</span>
      </button>
      <button onclick="filterByCategory('tieu-thuyet')" class="label-filter-pill">
        <span>📚 Tiểu Thuyết</span>
      </button>
    `;

    html += CUSTOM_LABELS.map(lbl => `
      <button onclick="filterByCustomLabel('${lbl.id}')" class="label-filter-pill ${activeFilterLabelId === lbl.id ? 'active' : ''}" id="bar-label-${lbl.id}">
        <span class="color-dot dot-${lbl.color}"></span>
        <span>${lbl.name}</span>
        <span class="text-[10px] opacity-75">(${lbl.count})</span>
      </button>
    `).join('');

    storeBar.innerHTML = html;
  }

  // 2. Forum Left Column Labels List
  if (forumList) {
    forumList.innerHTML = CUSTOM_LABELS.map(lbl => `
      <div onclick="filterByCustomLabel('${lbl.id}')" class="tree-nav-item ${activeFilterLabelId === lbl.id ? 'active' : ''} cursor-pointer p-2 rounded-xl hover:bg-parchment-100 dark:hover:bg-pine-900 transition-colors flex items-center justify-between" id="forum-label-${lbl.id}">
        <span class="flex items-center gap-2 truncate text-xs font-semibold text-stone-800 dark:text-stone-200">
          <span class="color-dot dot-${lbl.color}"></span>
          <span class="truncate">${lbl.name}</span>
        </span>
        <span class="counter-badge">${lbl.count}</span>
      </div>
    `).join('');
  }
}

function filterByCustomLabel(labelId) {
  activeFilterLabelId = (activeFilterLabelId === labelId && labelId !== null) ? null : labelId;
  renderCustomLabels();

  if (activeFilterLabelId === null) {
    showToast('Hiển thị toàn bộ kho sách Huki!', 'info');
    renderBookOfMonthGrid();
    renderDealsOfWeekGrid();
    renderBestsellersGrid();
    renderGoodreadsFeed('all');
    return;
  }

  const selectedLabel = CUSTOM_LABELS.find(l => l.id === activeFilterLabelId);
  if (selectedLabel) {
    showToast(`Đang lọc theo nhãn màu: "${selectedLabel.name}"`, 'success');
    if (selectedLabel.category) {
      filterByCategory(selectedLabel.category);
    }
  }
}

function handleHeroSearch() {
  const globalInput = document.getElementById('global-search-input');
  const topInput = document.getElementById('top-search-input');
  const heroInput = document.getElementById('hero-search-input');
  const query = (globalInput?.value || topInput?.value || heroInput?.value || '').trim().toLowerCase();

  if (!query) {
    showToast('Vui lòng nhập từ khóa tìm kiếm!', 'info');
    return;
  }

  const matches = BOOKS_DATA.filter(b =>
    b.title.toLowerCase().includes(query) ||
    b.author.toLowerCase().includes(query) ||
    b.categoryName.toLowerCase().includes(query)
  );

  showToast(`Tìm thấy ${matches.length} kết quả cho "${query}"`, 'success');

  const container = document.getElementById('book-of-month-grid');
  if (container) {
    if (matches.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 space-y-3">
          <div class="text-3xl text-stone-300"><i class="fa-solid fa-magnifying-glass"></i></div>
          <p class="text-xs text-stone-500">Không tìm thấy sách phù hợp với từ khóa "${query}".</p>
          <button onclick="renderBookOfMonthGrid()" class="text-xs font-bold text-terracotta-500 hover:underline">Xem tất cả sách</button>
        </div>
      `;
    } else {
      container.innerHTML = matches.map(book => `
        <div class="book-card-3d p-4 group">
          <div class="badge-discount-circle">-${book.discountPercent}%</div>
          <div class="book-mockup-wrapper cursor-pointer" onclick="openQuickView(${book.id})">
            <div class="book-mockup-cover w-36 h-52">
              <img src="${book.cover}" alt="${book.title}" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="mt-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div class="flex items-center gap-1 text-amber-500 text-xs mb-1">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                <span class="text-stone-500 text-[11px] font-bold ml-1">${book.rating}</span>
              </div>
              <h4 class="font-headline font-bold text-base text-pine-900 dark:text-stone-100 line-clamp-1 group-hover:text-terracotta-500 transition-colors">${book.title}</h4>
              <div class="text-xs text-stone-500 truncate">${book.author}</div>
            </div>
            <div class="pt-2 border-t border-stone-100 dark:border-pine-800 space-y-2.5">
              <div class="flex items-baseline gap-2">
                <span class="font-headline font-bold text-lg text-pine-900 dark:text-stone-100">${formatCurrency(book.price)}</span>
                <span class="text-xs text-stone-400 line-through">${formatCurrency(book.oldPrice)}</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button onclick="openEbookReader(${book.id})" class="text-xs font-bold py-2 rounded-xl bg-pine-50 dark:bg-pine-900/80 text-pine-900 dark:text-emerald-300 hover:bg-pine-100 transition-all flex items-center justify-center gap-1">
                  <i class="fa-solid fa-book-open text-[11px]"></i> Đọc thử
                </button>
                <button onclick="addToCart(${book.id})" class="text-xs font-bold py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-sm transition-all flex items-center justify-center gap-1">
                  <i class="fa-solid fa-bag-shopping text-[11px]"></i> Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    container.scrollIntoView({ behavior: 'smooth' });
  }
}


function openAddLabelModal() {
  document.getElementById('add-label-modal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    document.getElementById('custom-label-name-input')?.focus();
  }, 100);
}

function closeAddLabelModal() {
  document.getElementById('add-label-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function handleCreateCustomLabel(e) {
  e.preventDefault();
  const nameInput = document.getElementById('custom-label-name-input');
  if (!nameInput || !nameInput.value.trim()) return;

  const colorRadios = document.getElementsByName('label-color-choice');
  let selectedColor = 'blue';
  for (const r of colorRadios) {
    if (r.checked) {
      selectedColor = r.value;
      break;
    }
  }

  const newLabel = {
    id: 'label-' + Date.now(),
    name: nameInput.value.trim(),
    color: selectedColor,
    count: 1,
    category: 'all'
  };

  CUSTOM_LABELS.push(newLabel);
  nameInput.value = '';
  closeAddLabelModal();
  renderCustomLabels();
  showToast(`🎉 Đã tạo nhãn màu "${newLabel.name}" thành công!`, 'success');
}

function openSellerModal() {
  document.getElementById('seller-modal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSellerModal() {
  document.getElementById('seller-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function scrollToReadingChallenge() {
  switchView('forum');
  setTimeout(() => {
    document.querySelector('.reading-challenge-box')?.scrollIntoView({ behavior: 'smooth' });
  }, 200);
}

function openEpubReader(bookId) {
  openEbookReader(bookId || 1);
}

// ==========================================================================
// 20. CRISPLY MULTI-TIER SIDEBAR LOGIC (PROGRESSIVE 2-STEP EXPANSION)
// ==========================================================================

let isCrisplySidebarCollapsed = false;
let isCrisplySubpanelCollapsed = true; // Subpanel is collapsed by default

/**
 * Nấc 1: Nút bên trái (trên Slim Rail)
 * - Khi Sidebar đang đóng -> Bấm nút này CHỈ mở Sidebar Level 2 (Nấc 1), Subpanel Level 3 vẫn đóng.
 * - Khi Sidebar đang mở -> Bấm nút này thu gọn cả Sidebar và Subpanel về lại Slim Rail.
 */
function toggleCrisplySidebar(forceState) {
  const sidebar = document.getElementById('crisply-sidebar');
  const subpanel = document.getElementById('crisply-subpanel');
  const railBtn = document.getElementById('crisply-rail-toggle-btn');
  const subpanelBtn = document.getElementById('crisply-subpanel-toggle-btn');

  if (typeof forceState === 'boolean') {
    isCrisplySidebarCollapsed = forceState;
  } else {
    isCrisplySidebarCollapsed = !isCrisplySidebarCollapsed;
  }

  if (isCrisplySidebarCollapsed) {
    sidebar?.classList.add('collapsed');
    subpanel?.classList.add('collapsed');
    isCrisplySubpanelCollapsed = true;
    railBtn?.classList.remove('active');
    subpanelBtn?.classList.remove('active');
    showToast('Đã thu gọn thanh điều hướng thành Slim Rail!', 'info');
  } else {
    sidebar?.classList.remove('collapsed');
    // Ensure subpanel stays collapsed on 1st step
    subpanel?.classList.add('collapsed');
    isCrisplySubpanelCollapsed = true;
    railBtn?.classList.add('active');
    subpanelBtn?.classList.remove('active');
    showToast('Đã mở Menu chính (Nấc 1)!', 'info');
  }
}

/**
 * Nấc 2: Nút thứ hai (cạnh Logo HukiEbook trên Sidebar)
 * - Bấm nút này mới mở tiếp Subpanel Level 3 (Bảng phân loại / Tủ sách chi tiết - "cái kia").
 * - Bấm lại nút này sẽ đóng Subpanel Level 3.
 */
function toggleCrisplySubpanel(forceState) {
  const sidebar = document.getElementById('crisply-sidebar');
  const subpanel = document.getElementById('crisply-subpanel');
  const subpanelBtn = document.getElementById('crisply-subpanel-toggle-btn');

  // If sidebar was collapsed, open sidebar first
  if (isCrisplySidebarCollapsed) {
    sidebar?.classList.remove('collapsed');
    isCrisplySidebarCollapsed = false;
    document.getElementById('crisply-rail-toggle-btn')?.classList.add('active');
  }

  if (typeof forceState === 'boolean') {
    isCrisplySubpanelCollapsed = forceState;
  } else {
    isCrisplySubpanelCollapsed = !isCrisplySubpanelCollapsed;
  }

  if (isCrisplySubpanelCollapsed) {
    subpanel?.classList.add('collapsed');
    subpanelBtn?.classList.remove('active');
    showToast('Đã thu gọn Bảng phân loại!', 'info');
  } else {
    subpanel?.classList.remove('collapsed');
    subpanelBtn?.classList.add('active');
    showToast('Đã mở rộng Bảng phân loại & Nhãn (Nấc 2)!', 'info');
  }
}

function toggleCrisplyAccordion(treeId) {
  const submenu = document.getElementById(treeId + '-submenu');
  const chevron = document.getElementById(treeId + '-chevron');
  if (submenu) {
    submenu.classList.toggle('hidden');
    if (chevron) {
      chevron.classList.toggle('rotate-180');
    }
  }
}

function switchCrisplyTab(tabName) {
  // If sidebar was collapsed and user clicks a rail button, expand Level 2 sidebar
  const sidebar = document.getElementById('crisply-sidebar');
  if (isCrisplySidebarCollapsed) {
    sidebar?.classList.remove('collapsed');
    isCrisplySidebarCollapsed = false;
    document.getElementById('crisply-rail-toggle-btn')?.classList.add('active');
  }

  // Update rail buttons active state
  document.querySelectorAll('.crisply-rail-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`rail-btn-${tabName}`)?.classList.add('active');

  // Update sidebar nav links active state
  document.querySelectorAll('.crisply-nav-link').forEach(link => link.classList.remove('active'));
  document.getElementById(`sidebar-nav-${tabName}`)?.classList.add('active');
  document.getElementById(`sidebar-nav-db-${tabName}`)?.classList.add('active');

  const titleEl = document.getElementById('subpanel-header-title');

  switch (tabName) {
    case 'store':
      switchView('store');
      if (titleEl) titleEl.innerText = 'Sàn Sách Số';
      showToast('Đang xem Sàn TMĐT Sách Số Huki!', 'info');
      break;
    case 'forum':
      switchView('forum');
      if (titleEl) titleEl.innerText = 'Diễn Đàn Đọc';
      showToast('Đang xem Mạng Xã Hội Độc Giả!', 'info');
      break;
    case 'library':
      switchView('forum');
      if (titleEl) titleEl.innerText = 'Tủ Sách Cá Nhân';
      // Automatically reveal subpanel for library overview
      toggleCrisplySubpanel(false);
      showToast('Tủ sách & Các kệ sách của bạn [48]', 'info');
      break;
    case 'reading':
      switchView('forum');
      setTimeout(() => {
        document.querySelector('.currently-reading-card')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      if (titleEl) titleEl.innerText = 'Tiến Độ Đang Đọc';
      showToast('Đang mở sách đang đọc dở!', 'success');
      break;
    case 'challenge':
      scrollToReadingChallenge();
      if (titleEl) titleEl.innerText = 'Thử Thách 2026';
      break;
    case 'analytics':
      switchView('forum');
      setTimeout(() => {
        document.getElementById('reading-heatmap-matrix')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
      if (titleEl) titleEl.innerText = 'Thống Kê Đọc';
      showToast('Thống kê & Biểu đồ thói quen đọc sách 52 tuần 🔥', 'info');
      break;
    case 'clubs':
      switchView('forum');
      openChatWithUser('clb-kinh-te', 'group');
      if (titleEl) titleEl.innerText = 'Câu Lạc Bộ';
      showToast('Đang mở 6 Câu Lạc Bộ Đọc Sách & Chat Nhóm!', 'info');
      break;
    case 'publishers':
      switchView('store');
      setTimeout(() => {
        document.getElementById('section-publishers-mall')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
      if (titleEl) titleEl.innerText = 'Nhà Xuất Bản';
      showToast('Đang xem Gian Hàng Nhà Xuất Bản Mall!', 'info');
      break;
  }
}

function switchCrisplySubmenu(subKey) {
  document.querySelectorAll('.crisply-tree-sublink').forEach(l => l.classList.remove('active'));
  document.getElementById(`sublink-${subKey}`)?.classList.add('active');
  if (subKey === 'reading') {
    switchCrisplyTab('reading');
  } else if (subKey === 'want-to-read') {
    selectSubpanelCategory('want-to-read');
  } else if (subKey === 'completed') {
    selectSubpanelCategory('completed');
  } else if (subKey === 'purchased') {
    selectSubpanelCategory('purchased');
  }
}

function selectSubpanelCategory(catKey, el) {
  // Ensure subpanel is open when a category item is selected
  const subpanel = document.getElementById('crisply-subpanel');
  if (isCrisplySubpanelCollapsed) {
    subpanel?.classList.remove('collapsed');
    isCrisplySubpanelCollapsed = false;
    document.getElementById('crisply-subpanel-toggle-btn')?.classList.add('active');
  }

  document.querySelectorAll('#subpanel-categories-list .crisply-subpanel-item').forEach(item => item.classList.remove('active'));
  if (el) {
    el.classList.add('active');
  } else {
    document.querySelector(`#subpanel-categories-list [onclick*="${catKey}"]`)?.classList.add('active');
  }

  switch (catKey) {
    case 'all':
      renderGoodreadsFeed('all');
      showToast('Hiển thị Tất cả sách [48]', 'info');
      break;
    case 'reading':
      switchCrisplyTab('reading');
      break;
    case 'favourites':
      renderGoodreadsFeed('review');
      showToast('Hiển thị Sách yêu thích [12]', 'info');
      break;
    case 'want-to-read':
      showToast('Kệ Muốn Đọc [18 cuốn]', 'info');
      break;
    case 'completed':
      showToast('Kệ Đã Đọc Xong [25 cuốn]', 'info');
      break;
    case 'purchased':
      showToast('Kho sách bản quyền đã mua [15 cuốn]', 'info');
      break;
  }
}

function filterSubpanelItems(query) {
  const q = (query || '').toLowerCase().trim();
  const items = document.querySelectorAll('#subpanel-categories-list .crisply-subpanel-item, #subpanel-labels-list .crisply-subpanel-item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (!q || text.includes(q)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// ==========================================================================
// 21. MOBILE NAVIGATION TOGGLE
// ==========================================================================

function toggleMobileNav() {
  const navContainer = document.getElementById('crisply-container');
  if (navContainer) {
    navContainer.classList.toggle('mobile-open');
  }
}

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
  const navContainer = document.getElementById('crisply-container');
  const navToggle = document.querySelector('.mobile-nav-toggle');

  if (navContainer && navContainer.classList.contains('mobile-open')) {
    if (!navContainer.contains(e.target) && (!navToggle || !navToggle.contains(e.target))) {
      navContainer.classList.remove('mobile-open');
    }
  }
});

// Handle touch swipe to close mobile nav
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  const navContainer = document.getElementById('crisply-container');
  if (!navContainer || !navContainer.classList.contains('mobile-open')) return;

  // Swipe right to close
  if (touchEndX - touchStartX > 100) {
    navContainer.classList.remove('mobile-open');
  }
}

// ==========================================================================
// 22. MULTI-PAGE ECOSYSTEM & SCREENSHOT 1 / 2 CARD & DETAIL ENGINE
// ==========================================================================

/**
 * Global Wishlist helper
 */
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('huki_wishlist') || '[]');
  } catch (e) {
    return [];
  }
}

function isInWishlist(bookId) {
  const list = getWishlist();
  return list.includes(Number(bookId));
}

function toggleWishlist(bookId, e) {
  if (e) e.stopPropagation();
  let list = getWishlist();
  const id = Number(bookId);
  const exists = list.includes(id);

  if (exists) {
    list = list.filter(item => item !== id);
    showToast('Đã xóa khỏi danh sách Yêu thích!', 'info');
  } else {
    list.push(id);
    showToast('❤️ Đã thêm vào danh sách Yêu thích!', 'success');
  }

  localStorage.setItem('huki_wishlist', JSON.stringify(list));

  // Update UI heart icons across page
  document.querySelectorAll(`.btn-wishlist-overlay[onclick*="${id}"]`).forEach(btn => {
    if (exists) {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    } else {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fa-solid fa-heart text-red-500"></i>';
    }
  });

  const detailHeartBtn = document.getElementById('btn-detail-wishlist');
  if (detailHeartBtn) {
    if (exists) {
      detailHeartBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Yêu thích';
    } else {
      detailHeartBtn.innerHTML = '<i class="fa-solid fa-heart text-red-500"></i> Đã thích';
    }
  }
}

/**
 * Global Cart Helpers
 */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('huki_cart') || '[]');
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('huki_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.innerText = totalItems;
    el.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

function addToCart(bookId, e, redirectToCheckout = false) {
  if (e) e.stopPropagation();
  const book = BOOKS_DATA.find(b => b.id === Number(bookId));
  if (!book) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === book.id);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      oldPrice: book.oldPrice,
      cover: book.cover,
      format: book.format || 'epub',
      quantity: 1
    });
  }

  saveCart(cart);

  if (redirectToCheckout) {
    window.location.href = 'checkout.html';
  } else {
    showToast(`🛒 Đã thêm "${book.title}" vào giỏ hàng!`, 'success');
  }
}

function navigateToBookDetail(bookId) {
  window.location.href = `book-detail.html?id=${bookId}`;
}

// Override legacy quickview popup to navigate directly to detail page
function openQuickView(bookId) {
  navigateToBookDetail(bookId);
}

function openEbookReader(bookId) {
  window.location.href = `reader.html?id=${bookId}`;
}

/**
 * SCREENSHOT 1: ULTRA-COMPACT REFINED BOOK CARD RENDERER
 */
function renderRefinedBookCard(book, options = {}) {
  const isWish = isInWishlist(book.id);
  const soldFormatted = book.soldCount >= 1000 ? (book.soldCount / 1000).toFixed(1) + 'k' : book.soldCount;
  const reviewsFormatted = book.reviewsCount >= 1000 ? (book.reviewsCount / 1000).toFixed(1) + 'k' : book.reviewsCount;

  return `
    <div class="book-card-refined group" data-id="${book.id}">
      <div class="book-poster-wrap" onclick="navigateToBookDetail(${book.id})">
        <span class="badge-discount-pill">-${book.discountPercent}%</span>
        <button class="btn-wishlist-overlay ${isWish ? 'active' : ''}" onclick="toggleWishlist(${book.id}, event)" title="Thêm vào yêu thích">
          <i class="${isWish ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}"></i>
        </button>
        <img src="${book.cover}" alt="${book.title}" class="book-poster-img" loading="lazy">
      </div>
      <div class="mt-2 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-[10px] text-stone-500 dark:text-stone-400 mb-0.5">
            <span class="text-amber-500 font-bold flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i> ${book.rating}</span>
            <span>(${reviewsFormatted})</span>
            <span class="text-stone-300 dark:text-pine-700">•</span>
            <span>Đã bán ${soldFormatted}</span>
          </div>
          <h4 class="font-headline font-bold text-xs text-stone-900 dark:text-stone-100 line-clamp-2 min-h-[32px] leading-snug hover:text-terracotta-500 transition-colors cursor-pointer" onclick="navigateToBookDetail(${book.id})" title="${book.title}">${book.title}</h4>
        </div>

        ${options.showStockBar ? `
          <div class="flash-sale-stock-wrap">
            <div class="flash-sale-stock-fill" style="width: ${book.stockProgress || 85}%;"></div>
            <div class="flash-sale-stock-text"><i class="fa-solid fa-fire-flame-curved text-yellow-300 text-[8px] mr-0.5"></i> ĐÃ BÁN ${book.stockProgress || 85}%</div>
          </div>
        ` : ''}

        <div class="mt-1.5 pt-1.5 border-t border-stone-100 dark:border-pine-800/80 flex items-center justify-between">
          <div>
            <div class="font-headline font-extrabold text-xs sm:text-sm text-red-600 dark:text-red-400">${formatCurrency(book.price)}</div>
            <div class="text-[10px] text-stone-400 line-through">${formatCurrency(book.oldPrice)}</div>
          </div>
          <button class="btn-cart-square" onclick="addToCart(${book.id}, event)" title="Thêm vào giỏ hàng">
            <i class="fa-solid fa-cart-shopping text-[11px]"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render all refined grids on Landing Page (index.html)
 */
function renderAllLandingRefinedGrids() {
  renderFlashSaleSection();
  renderVouchersHub();
  renderCombosSection();
  renderAwardsSection();
  renderBookOfMonthGrid();
  renderDealsOfWeekGrid();
  renderBestsellersGrid();
  renderAuthorsSpotlightGrid();
  renderPublishersMall();
  renderAudiobooksSpotlight();
}

// ==========================================================================
// 23. BOOKS CATALOG PAGE INITIALIZER (books.html)
// ==========================================================================

let catalogState = {
  category: 'all',
  priceRange: 'all',
  format: 'all',
  minRating: 0,
  sort: 'bestseller',
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 10
};

function initBooksCatalogPage() {
  updateCartBadge();
  initTheme();

  // Read URL params if any
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('cat')) catalogState.category = urlParams.get('cat');
  if (urlParams.get('q')) catalogState.searchQuery = urlParams.get('q');
  if (urlParams.get('sort')) catalogState.sort = urlParams.get('sort');

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput && catalogState.searchQuery) {
    searchInput.value = catalogState.searchQuery;
  }

  renderCatalog();
}

function filterCatalogByCategory(catKey, el) {
  catalogState.category = catKey;
  catalogState.currentPage = 1;

  document.querySelectorAll('.catalog-cat-pill').forEach(pill => pill.classList.remove('active'));
  if (el) el.classList.add('active');

  renderCatalog();
}

function handleCatalogSearch(e) {
  catalogState.searchQuery = e.target.value.trim().toLowerCase();
  catalogState.currentPage = 1;
  renderCatalog();
}

function handleCatalogSort(e) {
  catalogState.sort = e.target.value;
  catalogState.currentPage = 1;
  renderCatalog();
}

function handleCatalogPriceFilter(val) {
  catalogState.priceRange = val;
  catalogState.currentPage = 1;
  renderCatalog();
}

function handleCatalogFormatFilter(val) {
  catalogState.format = val;
  catalogState.currentPage = 1;
  renderCatalog();
}

function handleCatalogRatingFilter(val) {
  catalogState.minRating = Number(val);
  catalogState.currentPage = 1;
  renderCatalog();
}

function renderCatalog() {
  let filtered = [...BOOKS_DATA];

  // 1. Filter by category
  if (catalogState.category !== 'all') {
    filtered = filtered.filter(b => b.category === catalogState.category);
  }

  // 2. Filter by search
  if (catalogState.searchQuery) {
    filtered = filtered.filter(b =>
      b.title.toLowerCase().includes(catalogState.searchQuery) ||
      b.author.toLowerCase().includes(catalogState.searchQuery) ||
      b.categoryName.toLowerCase().includes(catalogState.searchQuery)
    );
  }

  // 3. Filter by price
  if (catalogState.priceRange === 'under-100') {
    filtered = filtered.filter(b => b.price < 100000);
  } else if (catalogState.priceRange === '100-150') {
    filtered = filtered.filter(b => b.price >= 100000 && b.price <= 150000);
  } else if (catalogState.priceRange === 'above-150') {
    filtered = filtered.filter(b => b.price > 150000);
  }

  // 4. Filter by format
  if (catalogState.format !== 'all') {
    filtered = filtered.filter(b => (b.format || 'epub') === catalogState.format);
  }

  // 5. Filter by rating
  if (catalogState.minRating > 0) {
    filtered = filtered.filter(b => b.rating >= catalogState.minRating);
  }

  // 6. Sort
  if (catalogState.sort === 'bestseller') {
    filtered.sort((a, b) => b.soldCount - a.soldCount);
  } else if (catalogState.sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (catalogState.sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (catalogState.sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (catalogState.sort === 'discount') {
    filtered.sort((a, b) => b.discountPercent - a.discountPercent);
  }

  // Pagination slice
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / catalogState.itemsPerPage) || 1;
  if (catalogState.currentPage > totalPages) catalogState.currentPage = 1;

  const startIdx = (catalogState.currentPage - 1) * catalogState.itemsPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + catalogState.itemsPerPage);

  const container = document.getElementById('catalog-books-grid');
  const countEl = document.getElementById('catalog-count-label');

  if (countEl) {
    countEl.innerText = `Hiển thị ${pageItems.length > 0 ? startIdx + 1 : 0}-${Math.min(startIdx + pageItems.length, totalItems)} trên ${totalItems} sách bản quyền`;
  }

  if (container) {
    if (pageItems.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center space-y-3 bg-white dark:bg-pine-900/40 rounded-3xl border border-stone-200/80 dark:border-pine-800">
          <div class="text-4xl text-stone-300 dark:text-pine-700"><i class="fa-solid fa-book-open"></i></div>
          <h3 class="font-headline font-bold text-lg text-pine-900 dark:text-stone-100">Không tìm thấy sách phù hợp bộ lọc</h3>
          <p class="text-xs text-stone-500 max-w-sm mx-auto">Vui lòng thử điều chỉnh mức giá, danh mục hoặc từ khóa tìm kiếm khác.</p>
          <button onclick="resetCatalogFilters()" class="px-5 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md transition-all">
            Xóa bộ lọc & Xem tất cả
          </button>
        </div>
      `;
    } else {
      container.innerHTML = pageItems.map(b => renderRefinedBookCard(b)).join('');
    }
  }

  renderCatalogPagination(totalPages);
}

function renderCatalogPagination(totalPages) {
  const paginContainer = document.getElementById('catalog-pagination');
  if (!paginContainer) return;

  if (totalPages <= 1) {
    paginContainer.innerHTML = '';
    return;
  }

  let html = `
    <button onclick="changeCatalogPage(${catalogState.currentPage - 1})" ${catalogState.currentPage === 1 ? 'disabled' : ''} class="w-9 h-9 rounded-xl border border-stone-200 dark:border-pine-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-pine-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === catalogState.currentPage;
    html += `
      <button onclick="changeCatalogPage(${i})" class="w-9 h-9 rounded-xl text-xs font-bold transition-all ${isActive ? 'bg-pine-950 dark:bg-emerald-600 text-white shadow-md' : 'border border-stone-200 dark:border-pine-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-pine-800'}">
        ${i}
      </button>
    `;
  }

  html += `
    <button onclick="changeCatalogPage(${catalogState.currentPage + 1})" ${catalogState.currentPage === totalPages ? 'disabled' : ''} class="w-9 h-9 rounded-xl border border-stone-200 dark:border-pine-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-pine-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  paginContainer.innerHTML = html;
}

function changeCatalogPage(pageNum) {
  catalogState.currentPage = pageNum;
  renderCatalog();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetCatalogFilters() {
  catalogState = {
    category: 'all',
    priceRange: 'all',
    format: 'all',
    minRating: 0,
    sort: 'bestseller',
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 10
  };

  document.querySelectorAll('.catalog-cat-pill').forEach((pill, idx) => {
    pill.classList.toggle('active', idx === 0);
  });

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'bestseller';

  renderCatalog();
}

// ==========================================================================
// 24. BOOK DETAIL PAGE INITIALIZER (SCREENSHOT 2: book-detail.html)
// ==========================================================================

let currentDetailBook = null;
let currentDetailFormat = 'epub';
let currentDetailTab = 'synopsis';

function initBookDetailPage() {
  updateCartBadge();
  initTheme();

  const urlParams = new URLSearchParams(window.location.search);
  const bookId = Number(urlParams.get('id') || '1');

  const book = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];
  currentDetailBook = book;

  // 1. Breadcrumbs
  const breadcrumbCategory = document.getElementById('detail-breadcrumb-category');
  if (breadcrumbCategory) {
    breadcrumbCategory.innerText = book.categoryName;
    breadcrumbCategory.href = `books.html?cat=${book.category}`;
  }
  const breadcrumbTitle = document.getElementById('detail-breadcrumb-title');
  if (breadcrumbTitle) breadcrumbTitle.innerText = book.title;

  // 2. Cover poster & Badges
  const coverImg = document.getElementById('detail-cover-img');
  if (coverImg) {
    coverImg.src = book.cover;
    coverImg.alt = book.title;
  }
  const badgeDiscount = document.getElementById('detail-badge-discount');
  if (badgeDiscount) badgeDiscount.innerText = `-${book.discountPercent}%`;

  // 3. Hero Titles & Metadata
  const titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.innerText = book.title;
  const subTitleEl = document.getElementById('detail-subtitle');
  if (subTitleEl) subTitleEl.innerText = book.subTitle || '';
  const authorEl = document.getElementById('detail-author-link');
  if (authorEl) authorEl.innerText = book.author;
  const translatorEl = document.getElementById('detail-translator');
  if (translatorEl) translatorEl.innerText = book.translator || 'Bản dịch chính hãng';
  const publisherEl = document.getElementById('detail-publisher');
  if (publisherEl) publisherEl.innerText = book.publisher || 'Huki Ebook Publishing';

  // 4. Rating & Stats
  const ratingEl = document.getElementById('detail-rating-score');
  if (ratingEl) ratingEl.innerText = book.rating;
  const reviewsCountEl = document.getElementById('detail-reviews-count');
  if (reviewsCountEl) reviewsCountEl.innerText = `${book.reviewsCount.toLocaleString()} nhận xét`;
  const soldCountEl = document.getElementById('detail-sold-count');
  if (soldCountEl) soldCountEl.innerText = `${book.soldCount.toLocaleString()} bản`;

  // 5. Pricing & Coins
  const priceEl = document.getElementById('detail-price');
  if (priceEl) priceEl.innerText = formatCurrency(book.price);
  const oldPriceEl = document.getElementById('detail-old-price');
  if (oldPriceEl) oldPriceEl.innerText = formatCurrency(book.oldPrice);
  const coinsEl = document.getElementById('detail-huki-coins');
  if (coinsEl) coinsEl.innerText = `+${book.hukiCoins || Math.round(book.price * 0.01)} Huki Xu`;

  // 6. 4-stat specs grid
  const statPages = document.getElementById('detail-spec-pages');
  if (statPages) statPages.innerText = `${book.totalPages || 350} trang`;
  const statLang = document.getElementById('detail-spec-lang');
  if (statLang) statLang.innerText = 'Tiếng Việt';
  const statSize = document.getElementById('detail-spec-size');
  if (statSize) statSize.innerText = book.fileSize || '5.4 MB';
  const statYear = document.getElementById('detail-spec-year');
  if (statYear) statYear.innerText = book.releaseYear || '2026';

  // 7. Tab 1 - Giới thiệu sách
  const synopsisEl = document.getElementById('detail-synopsis-text');
  if (synopsisEl) synopsisEl.innerText = book.synopsis;
  const quoteEl = document.getElementById('detail-quote-text');
  if (quoteEl) quoteEl.innerText = book.quoteCallout || 'Tri thức là chìa khóa mở ra sự tự do và thấu hiểu.';

  // 8. Tab 2 - Đọc thử miễn phí (Sample Flip Pages)
  renderDetailSamplePages(book);

  // 9. Tab 3 - Mục lục chi tiết (Table of Contents)
  renderDetailTOC(book);

  // 10. Tab 4 - Đánh giá độc giả (Reviews list & Form)
  renderDetailReviews(book);

  // 11. Related books recommendations
  renderDetailRelatedBooks(book);

  // 12. Wishlist button state
  const isWish = isInWishlist(book.id);
  const heartBtn = document.getElementById('btn-detail-wishlist');
  if (heartBtn) {
    if (isWish) {
      heartBtn.innerHTML = '<i class="fa-solid fa-heart text-red-500"></i> Đã thích';
    } else {
      heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Yêu thích';
    }
  }
}

function selectDetailFormat(formatKey, el) {
  currentDetailFormat = formatKey;
  document.querySelectorAll('.format-choice-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  showToast(`Đã chọn định dạng: ${formatKey.toUpperCase()}`, 'info');
}

function switchDetailTab(tabKey, el) {
  currentDetailTab = tabKey;
  document.querySelectorAll('.detail-tab-pill').forEach(pill => pill.classList.remove('active'));
  if (el) el.classList.add('active');

  const tabs = ['synopsis', 'sample', 'toc', 'reviews'];
  tabs.forEach(t => {
    const pane = document.getElementById(`detail-tab-pane-${t}`);
    if (pane) {
      pane.style.display = t === tabKey ? 'block' : 'none';
    }
  });
}

function renderDetailSamplePages(book) {
  const container = document.getElementById('detail-sample-pages-container');
  if (!container) return;

  const pages = book.samplePages || [
    `Đoạn trích chương 1 của "${book.title}"...`,
    "Trí tuệ nhân tạo và công nghệ đang định hình lại phương thức tiếp nhận tri thức của nhân loại...",
    "Đọc sách mỗi ngày giúp não bộ hình thành các khớp thần kinh mới và duy trì sự sắc bén..."
  ];

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 rounded-2xl bg-stone-50 dark:bg-pine-900/40 border border-stone-200/80 dark:border-pine-800 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-stone-200/60 dark:border-pine-800">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span class="text-xs font-bold text-stone-700 dark:text-stone-300">Bản Đọc Thử Miễn Phí (5 Trang Đầu)</span>
          </div>
          <button onclick="window.location.href='reader.html?id=${book.id}&sample=true'" class="text-xs font-bold text-terracotta-500 hover:underline flex items-center gap-1">
            <i class="fa-solid fa-expand"></i> Mở toàn màn hình
          </button>
        </div>
        <div class="prose prose-stone dark:prose-invert max-w-none text-sm leading-relaxed space-y-4 font-serif text-stone-800 dark:text-stone-200">
          <h4 class="font-headline font-bold text-lg text-pine-950 dark:text-stone-100">${book.chapterOneTitle || 'Chương 1'}</h4>
          <p class="first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-pine-900 dark:first-letter:text-emerald-400">
            ${book.chapterOneContent || 'Nội dung đang được cập nhật...'}
          </p>
          ${pages.map((p, idx) => `
            <div class="p-4 rounded-xl bg-white dark:bg-pine-950 border border-stone-100 dark:border-pine-800/80 shadow-sm">
              <div class="text-[11px] font-mono text-terracotta-500 font-bold mb-1">TRANG ${idx + 1}</div>
              <p class="text-xs text-stone-600 dark:text-stone-300">${p}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="p-4 rounded-2xl bg-amber-50 dark:bg-pine-900/60 border border-amber-200 dark:border-amber-800/40 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-lock-open"></i>
          </div>
          <div>
            <div class="text-xs font-bold text-stone-900 dark:text-stone-100">Bạn vừa đọc hết bản xem trước miễn phí!</div>
            <div class="text-[11px] text-stone-500 dark:text-stone-400">Mua bản quyền trọn đời chỉ với ${formatCurrency(book.price)} để đọc đầy đủ ${book.totalPages} trang.</div>
          </div>
        </div>
        <button onclick="handleDetailBuyNow()" class="px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md transition-all">
          Mua Trọn Cuốn
        </button>
      </div>
    </div>
  `;
}

function renderDetailTOC(book) {
  const container = document.getElementById('detail-toc-container');
  if (!container) return;

  const toc = book.tableOfContents || [
    'Lời tựa từ Nhà xuất bản',
    'Chương 1: Khởi nguồn của vấn đề',
    'Chương 2: Phân tích thực nghiệm',
    'Chương 3: Giải pháp hành động',
    'Lời bạt & Tài liệu tham khảo'
  ];

  container.innerHTML = `
    <div class="rounded-2xl border border-stone-200/80 dark:border-pine-800 overflow-hidden divide-y divide-stone-100 dark:divide-pine-800">
      ${toc.map((item, idx) => `
        <div class="p-3.5 flex items-center justify-between hover:bg-stone-50 dark:hover:bg-pine-900/40 transition-colors bg-white dark:bg-pine-950">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-lg bg-stone-100 dark:bg-pine-900 text-stone-500 dark:text-stone-400 text-xs font-bold flex items-center justify-center">${idx + 1}</span>
            <span class="text-xs font-bold text-stone-800 dark:text-stone-200">${item}</span>
          </div>
          <span class="text-[11px] font-mono text-stone-400">Trang ${(idx + 1) * 35}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDetailReviews(book) {
  const container = document.getElementById('detail-reviews-container');
  if (!container) return;

  const reviews = book.reviewsList || [];

  container.innerHTML = `
    <div class="space-y-6">
      <!-- 5-Star Summary Matrix -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-stone-50 dark:bg-pine-900/40 border border-stone-200/80 dark:border-pine-800 items-center">
        <div class="text-center md:border-r border-stone-200 dark:border-pine-800 md:pr-6">
          <div class="text-4xl font-headline font-black text-pine-950 dark:text-stone-100">${book.rating}</div>
          <div class="flex items-center justify-center gap-1 text-amber-500 my-1.5 text-sm">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <div class="text-xs text-stone-500">${book.reviewsCount.toLocaleString()} nhận xét từ độc giả đã xác thực</div>
        </div>
        <div class="md:col-span-2 space-y-2">
          <div class="flex items-center gap-3 text-xs">
            <span class="w-8 font-bold text-stone-600 dark:text-stone-400">5 sao</span>
            <div class="star-prog-bar-track"><div class="star-prog-bar-fill" style="width: 88%;"></div></div>
            <span class="w-10 text-right text-stone-400 font-mono">88%</span>
          </div>
          <div class="flex items-center gap-3 text-xs">
            <span class="w-8 font-bold text-stone-600 dark:text-stone-400">4 sao</span>
            <div class="star-prog-bar-track"><div class="star-prog-bar-fill" style="width: 9%;"></div></div>
            <span class="w-10 text-right text-stone-400 font-mono">9%</span>
          </div>
          <div class="flex items-center gap-3 text-xs">
            <span class="w-8 font-bold text-stone-600 dark:text-stone-400">3 sao</span>
            <div class="star-prog-bar-track"><div class="star-prog-bar-fill" style="width: 2%;"></div></div>
            <span class="w-10 text-right text-stone-400 font-mono">2%</span>
          </div>
          <div class="flex items-center gap-3 text-xs">
            <span class="w-8 font-bold text-stone-600 dark:text-stone-400">2 sao</span>
            <div class="star-prog-bar-track"><div class="star-prog-bar-fill" style="width: 1%;"></div></div>
            <span class="w-10 text-right text-stone-400 font-mono">1%</span>
          </div>
          <div class="flex items-center gap-3 text-xs">
            <span class="w-8 font-bold text-stone-600 dark:text-stone-400">1 sao</span>
            <div class="star-prog-bar-track"><div class="star-prog-bar-fill" style="width: 0%;"></div></div>
            <span class="w-10 text-right text-stone-400 font-mono">0%</span>
          </div>
        </div>
      </div>

      <!-- Verified Reviews List -->
      <div class="space-y-4">
        ${reviews.map(r => `
          <div class="p-5 rounded-2xl bg-white dark:bg-pine-950 border border-stone-200/80 dark:border-pine-800 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-emerald-100 dark:bg-pine-800 text-pine-900 dark:text-emerald-300 font-bold flex items-center justify-center text-xs">
                  ${r.author.charAt(0)}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-stone-900 dark:text-stone-100">${r.author}</span>
                    <span class="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-pine-900 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800/60">
                      <i class="fa-solid fa-circle-check"></i> ${r.badge}
                    </span>
                  </div>
                  <div class="text-[11px] text-stone-400 flex items-center gap-2 mt-0.5">
                    <span class="text-amber-500 font-bold">${'★'.repeat(r.rating)}</span>
                    <span>•</span>
                    <span>${r.date}</span>
                    <span>•</span>
                    <span>${r.device}</span>
                  </div>
                </div>
              </div>
              <button onclick="likeReview(${r.id}, this)" class="text-xs text-stone-400 hover:text-terracotta-500 flex items-center gap-1 transition-colors">
                <i class="fa-regular fa-thumbs-up"></i> <span>${r.likes}</span>
              </button>
            </div>
            <p class="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">${r.content}</p>
          </div>
        `).join('')}
      </div>

      <!-- Add Review Input Box -->
      <div class="p-5 rounded-2xl bg-stone-50 dark:bg-pine-900/40 border border-stone-200/80 dark:border-pine-800 space-y-3">
        <h4 class="font-headline font-bold text-xs text-pine-950 dark:text-stone-100">Viết nhận xét của bạn về cuốn sách này</h4>
        <div class="flex items-center gap-2 text-amber-400 text-lg cursor-pointer">
          <i class="fa-solid fa-star hover:scale-125 transition-transform" onclick="setStarRating(1)"></i>
          <i class="fa-solid fa-star hover:scale-125 transition-transform" onclick="setStarRating(2)"></i>
          <i class="fa-solid fa-star hover:scale-125 transition-transform" onclick="setStarRating(3)"></i>
          <i class="fa-solid fa-star hover:scale-125 transition-transform" onclick="setStarRating(4)"></i>
          <i class="fa-solid fa-star hover:scale-125 transition-transform" onclick="setStarRating(5)"></i>
          <span class="text-xs font-bold text-stone-500 ml-2">(Rất tuyệt vời)</span>
        </div>
        <textarea id="detail-review-input" rows="3" placeholder="Chia sẻ cảm nhận của bạn sau khi đọc cuốn sách này (bản dịch, chất lượng EPUB, bài học tâm đắc)..." class="w-full text-xs p-3.5 rounded-xl border border-stone-200 dark:border-pine-800 bg-white dark:bg-pine-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-terracotta-500 transition-all"></textarea>
        <div class="flex justify-end">
          <button onclick="submitDetailReview()" class="px-5 py-2.5 rounded-xl bg-pine-950 dark:bg-emerald-600 hover:bg-terracotta-500 text-white font-bold text-xs transition-all shadow-md">
            Gửi Nhận Xét Ngay
          </button>
        </div>
      </div>
    </div>
  `;
}

function submitDetailReview() {
  const input = document.getElementById('detail-review-input');
  if (!input || !input.value.trim()) {
    showToast('Vui lòng nhập nội dung nhận xét!', 'info');
    return;
  }

  showToast('🎉 Cảm ơn bạn! Nhận xét đã được gửi và gắn huy hiệu Độc Giả Xác Thực.', 'success');
  input.value = '';
}

function likeReview(reviewId, btn) {
  const span = btn.querySelector('span');
  if (span) {
    let count = parseInt(span.innerText, 10) || 0;
    span.innerText = count + 1;
    btn.classList.add('text-terracotta-500');
    showToast('Đã cảm ơn bài viết đánh giá hữu ích!', 'info');
  }
}

function renderDetailRelatedBooks(currentBook) {
  const container = document.getElementById('detail-related-books-grid');
  if (!container) return;

  const related = BOOKS_DATA.filter(b => b.id !== currentBook.id).slice(0, 5);
  container.innerHTML = related.map(b => renderRefinedBookCard(b)).join('');
}

function handleDetailBuyNow() {
  if (!currentDetailBook) return;
  addToCart(currentDetailBook.id, null, true);
}

function handleDetailAddToCart() {
  if (!currentDetailBook) return;
  addToCart(currentDetailBook.id, null, false);
}

function handleDetailReadSample() {
  if (!currentDetailBook) return;
  window.location.href = `reader.html?id=${currentDetailBook.id}&sample=true`;
}

// ==========================================================================
// 25. CHECKOUT PAGE INITIALIZER (checkout.html)
// ==========================================================================

let checkoutState = {
  appliedVoucher: null,
  useCoins: false,
  paymentMethod: 'momo'
};

function initCheckoutPage() {
  updateCartBadge();
  initTheme();
  renderCheckoutCart();
}

function renderCheckoutCart() {
  const cart = getCart();
  const container = document.getElementById('checkout-items-list');
  const emptyBox = document.getElementById('checkout-empty-cart');
  const contentBox = document.getElementById('checkout-content-grid');

  if (cart.length === 0) {
    if (emptyBox) emptyBox.style.display = 'block';
    if (contentBox) contentBox.style.display = 'none';
    return;
  }

  if (emptyBox) emptyBox.style.display = 'none';
  if (contentBox) contentBox.style.display = 'grid';

  if (container) {
    container.innerHTML = cart.map(item => `
      <div class="p-4 rounded-2xl bg-white dark:bg-pine-950 border border-stone-200/80 dark:border-pine-800 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3.5 flex-1 min-w-0">
          <img src="${item.cover}" alt="${item.title}" class="w-14 h-20 object-cover rounded-lg shadow-sm flex-shrink-0 cursor-pointer" onclick="navigateToBookDetail(${item.id})">
          <div class="min-w-0 flex-1">
            <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-pine-900 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase mb-1">
              ${item.format || 'EPUB'} • Bản quyền số
            </span>
            <h4 class="font-headline font-bold text-xs text-stone-900 dark:text-stone-100 truncate cursor-pointer hover:text-terracotta-500" onclick="navigateToBookDetail(${item.id})">${item.title}</h4>
            <div class="text-[11px] text-stone-500 truncate">${item.author}</div>
            <div class="font-bold text-xs text-red-600 dark:text-red-400 mt-1">${formatCurrency(item.price)}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center border border-stone-200 dark:border-pine-800 rounded-xl overflow-hidden">
            <button onclick="updateCartQuantity(${item.id}, -1)" class="w-7 h-7 flex items-center justify-center text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-pine-900">-</button>
            <span class="w-7 text-center text-xs font-bold text-stone-900 dark:text-stone-100">${item.quantity || 1}</span>
            <button onclick="updateCartQuantity(${item.id}, 1)" class="w-7 h-7 flex items-center justify-center text-xs text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-pine-900">+</button>
          </div>
          <button onclick="removeCartItem(${item.id})" class="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center text-xs" title="Xóa">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  calculateCheckoutTotals();
}

function updateCartQuantity(bookId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === bookId);
  if (item) {
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== bookId);
    }
    saveCart(cart);
    renderCheckoutCart();
  }
}

function removeCartItem(bookId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== bookId);
  saveCart(cart);
  renderCheckoutCart();
  showToast('Đã xóa sách khỏi giỏ hàng!', 'info');
}

function calculateCheckoutTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  let discount = 0;
  if (checkoutState.appliedVoucher === 'HUKI2026') {
    discount = 20000;
  } else if (checkoutState.appliedVoucher === 'VIPREADER') {
    discount = Math.round(subtotal * 0.15);
  }

  let coinDiscount = 0;
  if (checkoutState.useCoins) {
    coinDiscount = Math.min(5000, subtotal - discount);
  }

  const finalTotal = Math.max(0, subtotal - discount - coinDiscount);

  const subtotalEl = document.getElementById('checkout-subtotal');
  if (subtotalEl) subtotalEl.innerText = formatCurrency(subtotal);

  const discountRow = document.getElementById('checkout-discount-row');
  const discountEl = document.getElementById('checkout-discount-amount');
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.innerText = `-${formatCurrency(discount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  const coinRow = document.getElementById('checkout-coin-row');
  const coinEl = document.getElementById('checkout-coin-amount');
  if (coinRow && coinEl) {
    if (coinDiscount > 0) {
      coinRow.style.display = 'flex';
      coinEl.innerText = `-${formatCurrency(coinDiscount)}`;
    } else {
      coinRow.style.display = 'none';
    }
  }

  const finalEl = document.getElementById('checkout-final-total');
  if (finalEl) finalEl.innerText = formatCurrency(finalTotal);

  const finalBtnEl = document.getElementById('checkout-btn-total');
  if (finalBtnEl) finalBtnEl.innerText = formatCurrency(finalTotal);
}

function applyCouponCode() {
  const input = document.getElementById('checkout-coupon-input');
  if (!input || !input.value.trim()) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'HUKI2026') {
    checkoutState.appliedVoucher = code;
    showToast('🎉 Đã áp dụng mã giảm giá HUKI2026: Giảm 20.000đ!', 'success');
  } else if (code === 'VIPREADER') {
    checkoutState.appliedVoucher = code;
    showToast('🎉 Đã áp dụng mã VIPREADER: Giảm 15% tổng đơn!', 'success');
  } else {
    showToast('Mã giảm giá không hợp lệ hoặc đã hết hạn!', 'error');
  }

  calculateCheckoutTotals();
}

function toggleCheckoutCoins(checkbox) {
  checkoutState.useCoins = checkbox.checked;
  calculateCheckoutTotals();
  if (checkoutState.useCoins) {
    showToast('Đã áp dụng 5,000 Huki Xu (-5,000đ)!', 'success');
  }
}

function selectPaymentMethod(methodKey, el) {
  checkoutState.paymentMethod = methodKey;
  document.querySelectorAll('.payment-choice-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
}

function handleConfirmOrder() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Giỏ hàng đang trống!', 'error');
    return;
  }

  // Clear cart after checkout
  localStorage.setItem('huki_cart', '[]');
  updateCartBadge();

  // Show Success Receipt Modal
  const modal = document.getElementById('receipt-success-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeReceiptModalAndRead() {
  window.location.href = 'library.html';
}

// ==========================================================================
// 26. FULLSCREEN E-READER INITIALIZER (reader.html)
// ==========================================================================

let readerState = {
  fontSize: 16,
  fontFamily: 'serif',
  theme: 'light',
  isSample: false,
  book: null,
  progress: 25
};

function initReaderPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = Number(urlParams.get('id') || '1');
  readerState.isSample = urlParams.get('sample') === 'true';

  const book = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];
  readerState.book = book;

  const titleEl = document.getElementById('reader-top-book-title');
  if (titleEl) titleEl.innerText = book.title;

  const authorEl = document.getElementById('reader-top-book-author');
  if (authorEl) authorEl.innerText = book.author;

  const chapterTitleEl = document.getElementById('reader-chapter-title');
  if (chapterTitleEl) chapterTitleEl.innerText = book.chapterOneTitle || 'Chương 1: Mở đầu';

  const contentEl = document.getElementById('reader-main-text');
  if (contentEl) {
    contentEl.innerHTML = `
      <p class="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-pine-900 dark:first-letter:text-emerald-400">
        ${book.chapterOneContent || 'Nội dung đang được nạp...'}
      </p>
      <p>
        Trong suốt nhiều năm nghiên cứu tại Viện Công nghệ Massachusetts (MIT) và Đại học Stanford, các nhà khoa học thần kinh đã phát hiện ra rằng thói quen không chỉ đơn thuần là những chuỗi phản xạ lặp đi lặp lại. Chúng thực chất là cách bộ não của chúng ta tiết kiệm năng lượng. Một bộ não hiệu quả cho phép chúng ta ngưng suy nghĩ liên tục về những hành vi cơ bản như đi bộ, lựa chọn thức ăn hay thở, để dành năng lượng tinh thần cho việc phát minh ra máy móc mới, sáng tạo nghệ thuật hay đối phó với hiểm nguy.
      </p>
      <div class="my-8 quote-callout-box">
        "${book.quoteCallout || 'Tri thức là ánh sáng duy nhất dẫn đường qua bóng tối của sự bất định.'}"
      </div>
      <p>
        Khi một thói quen xuất hiện, não bộ sẽ tự động chuyển sang chế độ 'lái tự động'. Vùng hạch nền (basal ganglia) - một cấu trúc hình hạt đậu nhỏ nằm sâu bên trong thân não - sẽ nắm quyền kiểm soát toàn bộ chuỗi hành động trong khi vùng vỏ não trước trán (nơi thực hiện các quyết định phức tạp) có thể hoàn toàn 'nghỉ ngơi'. Đây là lý do vì sao bạn có thể lái xe về nhà từ công ty suốt 30 phút mà hầu như không hề nhớ mình đã sang số hay rẽ ở khúc quanh nào.
      </p>
      <p>
        Hiểu được cấu trúc ba phần của Vòng lặp thói quen: Gợi ý (Cue) -> Hành động thường ngày (Routine) -> Phần thưởng (Reward) chính là chiếc chìa khóa vàng giúp bạn làm chủ số phận của mình. Bạn không thể đơn giản xóa bỏ một thói quen tiêu cực; bạn chỉ có thể tái cấu trúc nó bằng cách đưa vào một phản xạ mới dưới cùng một tác nhân gợi ý và đáp ứng đúng phần thưởng cốt lõi mà não bộ khao khát.
      </p>
    `;
  }

  // Sample banner check
  const sampleBanner = document.getElementById('reader-sample-mode-banner');
  if (sampleBanner) {
    sampleBanner.style.display = readerState.isSample ? 'flex' : 'none';
  }

  applyReaderSettings();
}

function setReaderFontSize(delta) {
  readerState.fontSize = Math.min(26, Math.max(13, readerState.fontSize + delta));
  applyReaderSettings();
}

function setReaderFontFamily(family) {
  readerState.fontFamily = family;
  applyReaderSettings();
}

function setReaderTheme(themeName) {
  readerState.theme = themeName;
  applyReaderSettings();
}

function applyReaderSettings() {
  const viewport = document.getElementById('reader-content-body');
  if (!viewport) return;

  viewport.style.fontSize = `${readerState.fontSize}px`;

  viewport.classList.remove('reader-font-serif', 'reader-font-sans');
  viewport.classList.add(`reader-font-${readerState.fontFamily}`);

  document.body.classList.remove('reader-theme-light', 'reader-theme-sepia', 'reader-theme-dark');
  document.body.classList.add(`reader-theme-${readerState.theme}`);
}

function toggleReaderTOCModal() {
  const drawer = document.getElementById('reader-toc-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

// ==========================================================================
// 27. PERSONAL LIBRARY PAGE INITIALIZER (library.html)
// ==========================================================================

function initLibraryPage() {
  updateCartBadge();
  initTheme();
  renderLibraryShelf('all');
}

function renderLibraryShelf(filterTab = 'all') {
  document.querySelectorAll('.library-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`library-tab-${filterTab}`)?.classList.add('active');

  const cards = document.querySelectorAll('#library-books-grid > div');
  if (cards.length === 0) return;

  cards.forEach((card, idx) => {
    let isVisible = true;
    if (filterTab === 'reading') {
      isVisible = [0, 2, 3, 5, 6].includes(idx);
    } else if (filterTab === 'completed') {
      isVisible = [1, 4, 7].includes(idx);
    } else if (filterTab === 'favourites') {
      isVisible = [0, 1, 2].includes(idx);
    }
    card.style.display = isVisible ? 'flex' : 'none';
  });
}

function openEbookReader(id) {
  window.location.href = `reader.html?id=${id || 1}`;
}

// Global page initialization router (Static HTML Preservation)
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateCartBadge();
  updateWishlistBadge();
});


