import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');
const SITE_URL = 'https://turkmuhendisi.com';

const normalizeRoutePath = (route) => {
  if (route === '/') {
    return '/';
  }

  return route.endsWith('/') ? route.slice(0, -1) : route;
};

const toIsoDate = (value) => {
  if (!value) {
    return new Date().toISOString();
  }

  const match = value.trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    return `${year}-${month}-${day}T00:00:00+03:00`;
  }

  const parsedDate = new Date(value);
  return Number.isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();
};

const stripHtml = (value) =>
  value
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const wrapCdata = (value) => value.replaceAll(']]>', ']]]]><![CDATA[>');

const normalizeAttributes = (attributes) => {
  if (!attributes) {
    return '';
  }

  const normalized = String(attributes).trim();
  return normalized ? ` ${normalized}` : '';
};

const buildHeadTags = (helmet) => {
  if (!helmet) {
    return '';
  }

  return [
    helmet.title?.toString?.() ?? '',
    helmet.priority?.toString?.() ?? '',
    helmet.meta?.toString?.() ?? '',
    helmet.link?.toString?.() ?? '',
    helmet.script?.toString?.() ?? '',
  ]
    .filter(Boolean)
    .join('\n');
};

const injectHtml = (template, rendered) => {
  const htmlAttributes = normalizeAttributes(rendered.helmet?.htmlAttributes?.toString?.());
  const bodyAttributes = normalizeAttributes(rendered.helmet?.bodyAttributes?.toString?.());
  const headTags = buildHeadTags(rendered.helmet);

  let html = template.replace(/<html[^>]*>/, `<html${htmlAttributes || ' lang="tr"'}>`);
  html = html.replace(/<body[^>]*>/, `<body${bodyAttributes}>`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, '');
  html = html.replace('<div id="root"></div>', `<div id="root">${rendered.appHtml}</div>`);
  html = html.replace('</head>', `${headTags}\n</head>`);

  return html;
};

const writeRouteHtml = (route, html) => {
  const normalizedRoute = normalizeRoutePath(route);
  const targetPath =
    normalizedRoute === '/'
      ? templatePath
      : path.join(distDir, normalizedRoute.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, html, 'utf8');
};

const generateSitemap = (pages) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ route, lastmod, priority }) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
};

const generateRss = (posts) => {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Turkmuhendisi Blog</title>
    <link>${SITE_URL}/yazilar</link>
    <description>Türkmühendisi yazılım, backend ve mühendislik yazıları</description>
    <language>tr-TR</language>
    ${posts
      .map((post) => {
        const postUrl = `${SITE_URL}/yazilar/${post.id}`;
        const content = wrapCdata(post.content);
        const summary = escapeXml(stripHtml(post.description));

        return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${new Date(toIsoDate(post.date)).toUTCString()}</pubDate>
      <description>${summary}</description>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>`;
      })
      .join('\n')}
  </channel>
</rss>`;

  fs.writeFileSync(path.join(distDir, 'rss.xml'), feed, 'utf8');
};

const main = async () => {
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html bulunamadı. Önce build alınmalı.');
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  const vite = await createServer({
    appType: 'custom',
    server: {
      middlewareMode: true,
      hmr: false,
    },
  });

  try {
    const [{ render }, { getPosts }] = await Promise.all([
      vite.ssrLoadModule('/src/entry-server.tsx'),
      vite.ssrLoadModule('/src/data/posts.ts'),
    ]);

    const posts = getPosts();
    const staticPages = [
      { route: '/', lastmod: new Date().toISOString(), priority: '1.0' },
      { route: '/yazilar', lastmod: new Date().toISOString(), priority: '0.9' },
      { route: '/projeler', lastmod: new Date().toISOString(), priority: '0.8' },
      { route: '/projeler/egitim-platformu', lastmod: new Date().toISOString(), priority: '0.7' },
      { route: '/hakkimda', lastmod: new Date().toISOString(), priority: '0.8' },
    ];

    const postPages = posts.map((post) => ({
      route: `/yazilar/${post.id}`,
      lastmod: toIsoDate(post.date),
      priority: '0.8',
    }));

    const routes = [...staticPages, ...postPages];

    for (const page of routes) {
      const rendered = render(page.route);
      const html = injectHtml(template, rendered);
      writeRouteHtml(page.route, html);
      console.log(`✅ prerendered ${page.route}`);
    }

    generateSitemap(routes);
    generateRss(posts);
    console.log('✅ sitemap.xml generated');
    console.log('✅ rss.xml generated');
  } finally {
    await vite.close();
  }
};

main().catch((error) => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
