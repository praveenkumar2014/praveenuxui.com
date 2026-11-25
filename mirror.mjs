// Mirror the static assets of https://amaterasu.ai into ./site
// Usage: node mirror.mjs
import { promises as fs } from 'node:fs';
import path from 'node:path';

const BASE = 'https://amaterasu.ai';
const OUT = path.resolve('site');
const seen = new Set();
const queue = [];
const external = new Set();
const assetExt = /\.(?:js|mjs|css|json|woff2?|webp|png|jpe?g|gif|svg|mp3|mp4|ktx2|wasm|glb|gltf|hdr|bin|txt|ico)(?:\?|$)/i;

function add(raw) {
  if (!raw || typeof raw !== 'string') return;
  let u;
  try { u = new URL(raw, BASE); } catch { return; }
  if (u.protocol === 'data:' || u.protocol === 'blob:' || u.protocol === 'mailto:') return;
  if (u.pathname !== '/' && /[-/]$/.test(u.pathname)) return;
  if (u.origin === BASE && !['/', '/aleph'].includes(u.pathname) && !assetExt.test(u.pathname)) return;
  const key = u.origin + u.pathname;
  if (seen.has(key)) return;
  if (u.origin === BASE) {
    if (u.pathname.includes('..')) return;
    seen.add(key);
    queue.push({ url: u.href, path: decodeURIComponent(u.pathname) });
  } else if (u.host === 'a.storyblok.com' && assetExt.test(u.pathname)) {
    seen.add(key);
    external.add(u.href);
  }
}

async function download(url, file, retries = 3) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(res.status + ' ' + url);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(file, buf);
      return buf;
    } catch (e) {
      if (i === retries - 1) { console.error('FAIL', url, e.message); return null; }
    }
  }
}

function scan(text) {
  // Absolute paths on the site's own origin
  for (const m of text.matchAll(/["'`((\s](\/(?:_nuxt|_payload|img|webgl|js|favicon|fonts|assets)\/[A-Za-z0-9_./-]+(?:\?[A-Za-z0-9_.-]+)?)/g)) add(m[1]);
  // Full URLs (including JS-escaped slashes)
  const flat = text.replace(/\\\//g, '/');
  for (const m of flat.matchAll(/https:\/\/(?:amaterasu\.ai|a\.storyblok\.com)[A-Za-z0-9_./?=&%-]*/g)) add(m[0]);
  // Relative webgl / img strings inside bundles
  for (const m of flat.matchAll(/["'`]((?:webgl|img|js|favicon)\/[A-Za-z0-9_./-]+\.[A-Za-z0-9]+)/g)) add('/' + m[1]);
}

async function main() {
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });

  // HTML entry points
  for (const p of ['/', '/aleph']) add(p);
  // Everything seen in the browser network logs for both pages
  for (const f of ['net-home.txt', 'net-aleph.txt']) {
    try {
      const text = await fs.readFile(f, 'utf8');
      for (const m of text.matchAll(/https?:\/\/\S+/g)) add(m[0].replace(/[=>\s]+$/, ''));
    } catch {}
  }
  // Transition frame sequence + favicons + og image
  for (let i = 0; i <= 89; i++) add(`/img/transition/transition-${i}.webp`);
  for (const p of ['/img/og.png', '/favicon/favicon-16x16.png', '/favicon/favicon-32x32.png', '/favicon/apple-touch-icon.png']) add(p);

  let n = 0;
  while (queue.length || external.size) {
    const batch = queue.splice(0, 12);
    const extBatch = [...external].slice(0, 12);
    extBatch.forEach(u => external.delete(u));
    await Promise.all([
      ...batch.map(async ({ url, path: p }) => {
        // keep query strings only for payload requests; otherwise serve plain file
        const rel = p === '/' ? 'index.html' : p.replace(/^\//, '');
        const file = path.join(OUT, rel.endsWith('/') || !path.extname(rel) ? path.join(rel, 'index.html') : rel);
        const buf = await download(url, file);
        n++;
        if (!buf) return;
        const ext = path.extname(file).toLowerCase();
        if (['.js', '.mjs', '.css', '.html', '.json', '.txt'].includes(ext)) {
          const text = buf.toString('utf8');
          scan(text);
          let out = text
            .replace(/https:\/\/a\.storyblok\.com/g, '/_remote/a.storyblok.com')
            .replace(/https:\/\/amaterasu\.ai/g, '');
          if (out !== text) await fs.writeFile(file, out);
        }
      }),
      ...extBatch.map(u => {
        const p = new URL(u).pathname.replace(/^\//, '');
        return download(u, path.join(OUT, '_remote/a.storyblok.com', p));
      }),
    ]);
    if (n % 60 < 12) console.log(`fetched ${n}, queued ${queue.length + external.size}`);
  }

  console.log('TOTAL', n);
}

main();
