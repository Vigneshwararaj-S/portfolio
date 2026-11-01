import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET({ site }: APIContext) {
  const entries = (await getCollection('journal', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const items = entries.map((e) => {
    const url = new URL(`/journal/${e.id}/`, site).href;
    return `<item><title>${esc(e.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${e.data.date.toUTCString()}</pubDate><description>${esc(e.data.summary)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Vigneshwararaj Sathianarayanan — Journal</title><link>${site}</link><description>Build notes on my projects.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
