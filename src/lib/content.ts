import { getCollection } from 'astro:content';

export type CardItem = {
  type: 'blog' | 'project';
  title: string;
  description: string;
  category: string;
  url: string;
  cover?: string;
  date: Date;
  tags: string[];
  featured: boolean;
};

const isPublished = ({ data }: { data: { draft?: boolean } }) =>
  import.meta.env.DEV || !data.draft;

export async function getBlogCards(): Promise<CardItem[]> {
  const entries = await getCollection('blog', isPublished);
  return entries
    .map((e) => ({
      type: 'blog' as const,
      title: e.data.title,
      description: e.data.description,
      category: e.data.category,
      url: `/blog/${e.slug}/`,
      cover: e.data.cover,
      date: e.data.pubDate,
      tags: e.data.tags,
      featured: e.data.featured,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getProjectCards(): Promise<CardItem[]> {
  const entries = await getCollection('projects', isPublished);
  return entries
    .map((e) => ({
      type: 'project' as const,
      title: e.data.title,
      description: e.data.description,
      category: 'Project',
      url: `/projects/${e.slug}/`,
      cover: e.data.cover,
      date: e.data.pubDate,
      tags: e.data.stack,
      featured: e.data.featured,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getAllCards(): Promise<CardItem[]> {
  const [blog, projects] = await Promise.all([
    getBlogCards(),
    getProjectCards(),
  ]);
  return [...blog, ...projects].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Deterministic placeholder cover when a post has no image yet.
export function coverFor(item: { cover?: string; title: string }): string {
  if (item.cover) return item.cover;
  const palettes = ['0D1321', '1B263B', '1FA09A', '5FBF72'];
  const idx =
    item.title.split('').reduce((s, c) => s + c.charCodeAt(0), 0) %
    palettes.length;
  return `https://placehold.co/800x500/${palettes[idx]}/F7F8FA?text=Nikosnotes`;
}
