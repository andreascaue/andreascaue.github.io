import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = 'https://andreascaue.github.io';

// Keep this aligned with src/app/data/notes.data.ts.
// This can be refactored later into a shared content source used by both Angular and the RSS generator.
const notes = [
  {
    slug: 'building-this-portal-as-an-architecture-artifact',
    title: 'Building This Portal as an Architecture Artifact',
    description:
      'Why I am building my personal portal with Angular, Tailwind CSS, GitHub Actions, typed content, and documented architectural decisions.',
    publishedAt: '2026-05-05',
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toRfc822Date(date) {
  return new Date(date).toUTCString();
}

const items = notes
  .map((note) => {
    const url = `${siteUrl}/notes/${note.slug}`;

    return `
    <item>
      <title>${escapeXml(note.title)}</title>
      <description>${escapeXml(note.description)}</description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRfc822Date(note.publishedAt)}</pubDate>
    </item>`;
  })
  .join('');

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Andreas Magalhaes - Software Architecture Notes</title>
    <description>Notes on software architecture, Angular, .NET, maintainability, enterprise application design, and personal technical growth.</description>
    <link>${siteUrl}</link>
    <language>en-ca</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

const outputDir = resolve('public');
const outputPath = resolve(outputDir, 'rss.xml');

mkdirSync(outputDir, { recursive: true });

// Replaces the file content. We never append.
writeFileSync(outputPath, rss.trim() + '\n', 'utf8');

// Self-check: re-read the file we just wrote and assert it's a clean RSS document.
// If anything ever concatenates CSS/HTML/JS after </rss>, fail the build loudly.
const written = readFileSync(outputPath, 'utf8');
const trimmed = written.trimEnd();
const errors = [];

if (!trimmed.endsWith('</rss>')) {
  errors.push(`File does not end with </rss>. Last 80 chars: ${JSON.stringify(trimmed.slice(-80))}`);
}

const forbidden = ['tailwindcss', '--tw-', 'box-sizing', '<style', '<script'];
for (const needle of forbidden) {
  if (written.includes(needle)) {
    errors.push(`Forbidden token found in rss.xml: "${needle}"`);
  }
}

if (errors.length > 0) {
  console.error('RSS validation failed:');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}

console.log(`RSS feed generated at ${outputPath} (${written.length} bytes, validated)`);
