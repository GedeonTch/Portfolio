import type { MetadataRoute } from 'next';
import { content, plannedSkills } from '@/data/content';
export default function sitemap(): MetadataRoute.Sitemap {
 const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
 if (!site) return [];
 const paths = ['', '/projets', '/projets/sentinelx', '/labs', ...content.labs.filter(l => l.detail).map(l => `/labs/${l.slug}`), ...Object.keys(plannedSkills).map(s => `/competences/${s}`)];
 return paths.map(path => ({ url: `${site}${path}` }));
}
