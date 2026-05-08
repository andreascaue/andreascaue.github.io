import { Component, computed, signal } from '@angular/core';

export type ProjectFilter = 'all' | 'angular' | 'ts' | 'cli' | 'web' | 'misc';

interface Project {
  name: string;
  owner: string;
  icon: string;
  blurb: string;
  note?: string;
  lang: string;
  langColor: string;
  stars: string;
  forks: string;
  topics: string[];
  license: string;
  updated: string;
  status: 'active' | 'archived' | 'wip' | 'draft';
  category: ProjectFilter;
  url: string;
}

interface FilterOption {
  id: ProjectFilter;
  label: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.html',
  host: { class: 'page-enter' },
})
export class ProjectsPage {
  protected readonly githubUrl = 'https://github.com/andreascaue';
  protected readonly activeFilter = signal<ProjectFilter>('all');

  protected readonly filters: FilterOption[] = [
    { id: 'all', label: 'Everything' },
    { id: 'angular', label: 'Angular' },
    { id: 'ts', label: 'TypeScript' },
    { id: 'cli', label: 'CLI tools' },
    { id: 'web', label: 'Web' },
    { id: 'misc', label: 'Experiments' },
  ];

  protected readonly projects: Project[] = [
    {
      name: 'andreascaue.github.io',
      owner: 'andreascaue',
      icon: '⟨/⟩',
      blurb: 'Personal portal — Angular, prerendered, deployed to GitHub Pages.',
      note: "This site. Angular, hand-written CSS, no design system. Source is open mostly so people who like the look can see exactly what's behind it. If you want to fork it, do — credit appreciated, not required.",
      lang: 'TypeScript',
      langColor: '#3178c6',
      stars: '1',
      forks: '0',
      topics: ['angular', 'portfolio', 'github-pages'],
      license: 'MIT',
      updated: 'Apr 28, 2026',
      status: 'active',
      category: 'angular',
      url: 'https://github.com/andreascaue/andreascaue.github.io',
    },
  ];

  protected readonly filteredProjects = computed<Project[]>(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.projects;
    return this.projects.filter(p => p.category === f);
  });

  setFilter(f: ProjectFilter) {
    this.activeFilter.set(f);
  }
}
