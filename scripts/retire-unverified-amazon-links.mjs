import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const htmlFiles = readdirSync(root).filter((name) => name.endsWith('.html'));
const amazonSearchOpenTag = /<a\b[^>]*href="https:\/\/www\.amazon\.com\/s\?[^\"]*"[^>]*>/gi;

let changedFiles = 0;
let retiredLinks = 0;
let removedPrices = 0;

for (const name of htmlFiles) {
  const path = join(root, name);
  const original = readFileSync(path, 'utf8');
  let touched = false;
  let next = original.replace(amazonSearchOpenTag, (openTag) => {
    touched = true;
    retiredLinks += 1;
    return openTag
      .replace(/\s*href="[^"]*"/i, '')
      .replace(/\s*target="[^"]*"/i, '')
      .replace(/\s*rel="[^"]*"/i, '')
      .replace(/>$/, ' data-retired-affiliate="true" aria-disabled="true">');
  });

  if (touched) {
    next = next.replace(
      /(<span\b[^>]*class="[^"]*product-price[^"]*"[^>]*>)[\s\S]*?(<\/span>)/gi,
      (_match, open, close) => {
        removedPrices += 1;
        return `${open}Check current pricing${close}`;
      },
    );
  }
  if (!next.includes('affiliate-tracking.js')) {
    next = next.replace('</head>', '<script src="affiliate-tracking.js" defer></script>\n</head>');
  }

  if (next !== original) {
    writeFileSync(path, next, 'utf8');
    changedFiles += 1;
  }
}

console.log(JSON.stringify({ changedFiles, retiredLinks, removedPrices }));
