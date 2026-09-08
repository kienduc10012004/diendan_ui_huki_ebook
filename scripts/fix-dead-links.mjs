// Fix dead href="#" links in all JSX files - v10
import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.join(process.cwd(), 'src');

function guessRoute(linkText, filePath, title) {
  const text = ((title || '') + ' ' + linkText).toLowerCase();
  if (filePath.includes('seller')) {
    if (/dashboard|tổng quan/.test(text)) return '/seller/dashboard';
    if (/đơn hàng|orders/.test(text)) return '/seller/orders';
    if (/sản phẩm|products/.test(text)) return '/seller/product/create-hybrid';
    if (/ebook/.test(text)) return '/seller/product/create-ebook';
    if (/physical|sách giấy/.test(text)) return '/seller/product/create-physical';
    if (/hybrid|combo/.test(text)) return '/seller/product/create-hybrid';
    if (/correction|sửa lỗi/.test(text)) return '/seller/product/correction';
    if (/edge.?cases/.test(text)) return '/seller/edge-cases';
    if (/register|đăng ký/.test(text)) return '/seller/register';
    if (/kênh người bán|seller/.test(text)) return '/seller';
    if (/cửa hàng|store/.test(text)) return '/seller/dashboard';
    if (/sàn|huki|trang chủ/.test(text)) return '/';
    if (/hỗ trợ|help/.test(text)) return '/seller';
    if (/cài đặt|settings/.test(text)) return '/seller';
    if (/khuyến mãi|promotion|voucher|marketing/.test(text)) return '/seller/dashboard';
    if (/phân tích|report|kho hàng|inventory|thông tin cửa hàng|thành viên|phân quyền/.test(text)) return '/seller/dashboard';
    if (/quay lại sàn/.test(text)) return '/';
  }
  if (/trang chủ|sàn sách|home/.test(text)) return '/';
  if (/danh mục|sách|khám phá|catalog|books/.test(text)) return '/books';
  if (/chi tiết|detail/.test(text)) return '/books';
  if (/giỏ hàng|cart/.test(text)) return '/cart';
  if (/thanh toán|checkout/.test(text)) return '/checkout';
  if (/thành công|success|hoàn tất/.test(text)) return '/order-success';
  if (/tủ sách|library/.test(text)) return '/library';
  if (/hồ sơ|profile/.test(text)) return '/profile';
  if (/cộng đồng|community/.test(text)) return '/community';
  if (/đọc|reader/.test(text)) return '/reader';
  if (/james clear|tác giả|author/.test(text)) return '/books';
  if (/thể loại|category/.test(text)) return '/books';
  if (/bảng xếp hạng|ranking/.test(text)) return '/books';
  if (/phát triển bản thân/.test(text)) return '/books';
  if (/forum|diễn đàn/.test(text)) return '/community';
  if (/club|câu lạc bộ/.test(text)) return '/community';
  if (/thử thách đọc/.test(text)) return '/community';
  if (/mô-đun|tiện ích/.test(text)) return '/';
  if (/thống kê/.test(text)) return '/';
  if (/kênh nhà xuất bản/.test(text)) return '/seller';
  if (/seller|kênh người bán/.test(text)) return '/seller';
  if (/facebook|zalo|youtube|instagram|twitter|social/.test(text)) return '#';
  if (/huki ebook|huki/.test(text)) return '/';
  return '/';
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = walkDir(SRC_DIR);
let totalLinksFixed = 0;
const report = [];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;

  // Add React Router import if needed
  const needsRouter = file.includes('store') || file.includes('seller') || file.includes('layout') || file.includes('common');
  if (!content.includes('react-router-dom') && needsRouter) {
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/^import\s+/)) lastImportIdx = i;
    }
    const importLine = "import { Link, NavLink } from 'react-router-dom';";
    if (lastImportIdx >= 0) {
      lines.splice(lastImportIdx + 1, 0, importLine);
    } else {
      lines.unshift(importLine);
    }
    content = lines.join('\n');
  }

  let linkCount = 0;

  // Process all href="#" links using replace with function
  content = content.replace(/<a\s+([^>]*?)href="#"\s+([^>]*?)>([^<]*)<\/a>/g, (match, attrs1, attrs2, linkText) => {
    linkCount++;
    const allAttrs = (attrs1 + ' ' + attrs2).trim();
    const titleMatch = allAttrs.match(/title="([^"]*)"/);
    const title = titleMatch ? titleMatch[1] : '';
    const classMatch = allAttrs.match(/className="([^"]*)"/);
    const classAttr = classMatch ? 'className="' + classMatch[1] + '"' : '';
    const route = guessRoute(linkText, file, title);
    return '<Link to="' + route + '" ' + classAttr + '>' + linkText + '</Link>';
  });

  // Fix window.location.href = '#'
  content = content.replace(
    /window\.location\.href\s*=\s*['"]#['"]/g,
    "'/'"
  );

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    totalLinksFixed += linkCount;
    report.push('OK ' + path.relative(process.cwd(), file) + ': ' + linkCount + ' links');
  }
}

console.log('\n=== DEAD LINKS FIX REPORT v10 ===');
report.forEach(line => console.log(line));
console.log('\nTotal files: ' + report.length);
console.log('Total links fixed: ' + totalLinksFixed);
