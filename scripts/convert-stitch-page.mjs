import fs from 'node:fs';
import path from 'node:path';

const [source, destination, componentName] = process.argv.slice(2);

if (!source || !destination || !componentName) {
  throw new Error('Usage: node scripts/convert-stitch-page.mjs <source> <destination> <component>');
}

const document = fs.readFileSync(source, 'utf8');
const body = document.match(/<body\b([^>]*)>([\s\S]*?)<\/body>/i);
const embeddedCss = [...document.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
  .map((match) => match[1].trim())
  .join('\n');

if (!body) throw new Error(`No body found in ${source}`);

const bodyClass = body[1].match(/class="([^"]*)"/i)?.[1] ?? 'min-h-screen';

let markup = body[2]
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<script\b[\s\S]*?<\/script>/gi, '')
  .replace(/\sclass=/g, ' className=')
  .replace(/\sfor=/g, ' htmlFor=')
  .replace(/\stabindex=/g, ' tabIndex=')
  .replace(/\smaxlength=/g, ' maxLength=')
  .replace(/\sminlength=/g, ' minLength=')
  .replace(/\sreadonly(?:="")?/g, ' readOnly')
  .replace(/\scolspan=/g, ' colSpan=')
  .replace(/\srowspan=/g, ' rowSpan=')
  .replace(/\sautocomplete=/g, ' autoComplete=')
  .replace(/\ssrcset=/g, ' srcSet=')
  .replace(/\scrossorigin=/g, ' crossOrigin=')
  .replace(/\sstyle="font-variation-settings:\s*'FILL'\s*1;?"/g, ` style={{ fontVariationSettings: "'FILL' 1" }}`)
  .replace(/<(img|input|br|hr)(\b[^>]*?)(?<!\/)\s*>/gi, '<$1$2 />');

const output = `import React from 'react';

export default function ${componentName}() {
  return (
    <div className=${JSON.stringify(`stitch-page ${bodyClass}`)}>
      ${embeddedCss ? `<style>{${JSON.stringify(embeddedCss)}}</style>` : ''}
${markup}
    </div>
  );
}
`;

fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, output);
