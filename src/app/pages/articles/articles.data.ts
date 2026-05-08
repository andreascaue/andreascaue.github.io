export type ArticleTag = 'engineering' | 'arch' | 'ai';

export interface Article {
  n: number;
  title: string;
  excerpt: string;
  tags: ArticleTag[];
  date: string;
  read: string;
}

export const TAG_LABELS: Record<ArticleTag, string> = {
  engineering: 'Engineering',
  arch: 'Architecture',
  ai: 'AI/Automation',
};

export const ARTICLES: Article[] = [
  { n: 10, title: 'Testing the System You Think You Built', excerpt: 'Tests are not paperwork for developers. They are a way to prove your assumptions, protect old behavior, and make changes without walking through the codebase holding a candle in a haunted basement.', tags: ['engineering', 'arch'], date: 'Apr 14, 2026', read: '18 min' },
  { n: 9, title: 'Scaling Is Not Only About More Servers', excerpt: 'Before adding infrastructure, you need to understand bottlenecks, database queries, caching, pagination, rate limits, and bad assumptions. Scaling starts with knowing where the system is actually hurting.', tags: ['engineering', 'arch'], date: 'Apr 02, 2026', read: '12 min' },
  { n: 8, title: 'Background Jobs: When Your API Should Not Do Everything Now', excerpt: 'Not every task belongs inside a request-response cycle. Background jobs help systems handle slow, scheduled, or retryable work without making the user wait for the machinery behind the curtain.', tags: ['engineering', 'arch', 'ai'], date: 'Mar 24, 2026', read: '22 min' },
  { n: 7, title: 'From “It Works on My Machine” to Production-Ready', excerpt: 'Production-ready software needs more than working code. It needs health checks, configuration, deployment discipline, monitoring, and the humility to assume something will eventually break.', tags: ['engineering', 'arch', 'ai'], date: 'Mar 11, 2026', read: '9 min' },
  { n: 6, title: 'Authentication, Authorization, and the Confusion Between Them', excerpt: 'Many developers treat login and permissions as the same thing, but they are different problems. This essay explains the difference between proving who someone is and deciding what they are allowed to do.', tags: ['engineering', 'arch'], date: 'Feb 27, 2026', read: '14 min' },
  { n: 5, title: 'Logging Is Not Noise: It Is Your System Talking Back', excerpt: 'Logs are not just technical leftovers. When designed well, they become the story of what happened, when it happened, who triggered it, and where the system started coughing smoke.', tags: ['engineering'], date: 'Feb 12, 2026', read: '16 min' },
  { n: 4, title: 'Error Handling: The Difference Between Broken and Understandable', excerpt: 'A system will fail eventually. The question is whether it fails like a locked black box or gives developers enough information to understand, fix, and prevent the issue next time.', tags: ['engineering'], date: 'Jan 30, 2026', read: '11 min' },
  { n: 3, title: 'Why Validation Is Not Just a Frontend Problem', excerpt: 'Validation belongs everywhere: UI, API, business rules, and database boundaries. Good validation protects the system from bad assumptions before they become production ghosts.', tags: ['engineering'], date: 'Jan 17, 2026', read: '13 min' },
  { n: 2, title: 'REST Is Simple Until You Build a Real System', excerpt: 'REST looks easy in tutorials, but real applications bring validation, errors, permissions, pagination, and versioning. This essay explains what changes when your API needs to survive outside the classroom.', tags: ['engineering', 'arch'], date: 'Jan 05, 2026', read: '7 min' },
  { n: 1, title: 'The First API: Where Backend Thinking Begins', excerpt: 'Building an API is not only about creating endpoints. It is where you start learning contracts, inputs, outputs, responsibility, and how one system talks to another without creating chaos.', tags: ['engineering'], date: 'Dec 22, 2025', read: '10 min' },
];
