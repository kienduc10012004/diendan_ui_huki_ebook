// Batch fix common UI issues
// 1. Replace inline style fontVariationSettings with Tailwind fill-icon class
// 2. Replace data-alt with alt
// 3. Fix invalid Tailwind class "absolute 1.5"

import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.join(process.cwd(), 'src');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = walkDir(SRC_DIR);

let totalChanges = 0;
const report = [];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;
  let fileChanges = 0;

  // 1. Fix `data-alt="..."` -> `alt="..."`
  const before1 = content;
  content = content.replace(/\bdata-alt=/g, 'alt=');
  if (content !== before1) {
    const m = (before1.match(/\bdata-alt=/g) || []).length;
    fileChanges += m;
  }

  // 2. Fix invalid Tailwind class `absolute 1.5 top-X right-X` -> `absolute top-X right-X`
  // Pattern: `absolute 1\.5 (top-\S+) (right-\S+)` -> `absolute $1 $2`
  const before2 = content;
  content = content.replace(
    /\babsolute\s+1\.5\s+(top-\S+)\s+(right-\S+)/g,
    'absolute $1 $2'
  );
  if (content !== before2) {
    fileChanges += 1;
  }

  // 3. Replace inline style for material-symbols FILL=1 with Tailwind fill-icon class
  // Pattern: `style={{ fontVariationSettings: "'FILL' 1" }}` -> `className="fill-icon"` (added separately)
  // We'll handle this more carefully - we add className to the span element

  // Detect patterns where material-symbols-outlined has style={{fontVariationSettings:"'FILL' 1"}}
  // and add fill-icon class to existing className
  const before3 = content;
  // Find span material-symbols-outlined X ... style={{fontVariationSettings:"'FILL' 1"}} content
  // And add fill-icon to its className
  content = content.replace(
    /(<span\s+className=")(material-symbols-outlined[^"]*)("[^>]*style=\{\{[^}]*fontVariationSettings:[^}]*'FILL'\s*1[^}]*\}\})/g,
    (match, prefix, classes, suffix) => {
      // Don't double-add
      const newClasses = classes.includes('fill-icon')
        ? classes
        : `${classes} fill-icon`;
      return `${prefix}${newClasses}${suffix}`;
    }
  );
  // Then remove the style prop
  content = content.replace(
    /\s+style=\{\{[^}]*fontVariationSettings:[^}]*'FILL'\s*1[^}]*\}\}/g,
    ''
  );
  if (content !== before3) {
    const m = (before3.match(/\s+style=\{\{[^}]*fontVariationSettings:[^}]*'FILL'\s*1[^}]*\}\}/g) || []).length;
    fileChanges += m;
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    totalChanges += fileChanges;
    report.push(`✓ ${path.relative(process.cwd(), file)}: ${fileChanges} fixes`);
  }
}

console.log('\n=== BATCH FIX REPORT ===');
report.forEach(line => console.log(line));
console.log(`\nTotal files changed: ${report.length}`);
console.log(`Total fixes applied: ${totalChanges}`);
