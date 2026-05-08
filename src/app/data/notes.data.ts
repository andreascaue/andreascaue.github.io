import { Note } from '../models/note.model';

export const notes: readonly Note[] = [
  {
    slug: 'building-this-portal-as-an-architecture-artifact',
    title: 'Building This Portal as an Architecture Artifact',
    description:
      'Why I am building my personal portal with Angular, Tailwind CSS, GitHub Actions, typed content, and documented architectural decisions.',
    publishedAt: '2026-05-05',
    tags: ['Architecture', 'Angular', 'GitHub Pages', 'Personal Branding'],
  },
] as const;
