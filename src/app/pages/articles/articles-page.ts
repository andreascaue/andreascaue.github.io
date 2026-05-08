import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLES, Article, ArticleTag, TAG_LABELS } from './articles.data';

type Filter = 'all' | ArticleTag;

interface FilterOption {
  id: Filter;
  label: string;
}

interface ExternalPost {
  meta: string[];
  title: string;
  desc: string;
  url: string;
}

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.html',
  host: { class: 'page-enter' },
})
export class ArticlesPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly tagLabels = TAG_LABELS;

  protected readonly filters: FilterOption[] = [
    { id: 'all', label: 'Everything' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'arch', label: 'Architecture' },
    { id: 'ai', label: 'AI/Automation' },
  ];

  protected readonly activeFilter = signal<Filter>(this.readFilterFromUrl());

  private readFilterFromUrl(): Filter {
    const param = this.route.snapshot.queryParamMap.get('filter');
    if (param && this.filters.some(f => f.id === param)) {
      return param as Filter;
    }
    return 'all';
  }

  protected readonly filteredArticles = computed<Article[]>(() => {
    const f = this.activeFilter();
    if (f === 'all') return ARTICLES;
    return ARTICLES.filter(a => a.tags.includes(f));
  });

  protected readonly substackProfileUrl = 'https://substack.com/@andreasmagalhaes';
  protected readonly substackPubUrl = 'https://andreasmagalhaes.substack.com';
  protected readonly mediumProfileUrl = 'https://medium.com/@andreascaue';

  protected readonly substackPosts: ExternalPost[] = [
    {
      meta: ['Essay', 'Aug 22, 2025'],
      title: 'JavaScript for Greenhorns.',
      desc: 'A JavaScript guide written for developers who want to learn the language in depth, not just enough to copy from Stack Overflow.',
      url: 'https://andreasmagalhaes.substack.com/p/javascript-for-greenhorns',
    },
  ];

  protected readonly mediumPosts: ExternalPost[] = [
    {
      meta: ['Snippet', 'Oct 24, 2022'],
      title: 'Arrow function expressions',
      desc: 'A short walk-through that turns a traditional anonymous function into an arrow function, one tidy step at a time.',
      url: 'https://andreascaue.medium.com/arrow-function-expressions-d373cdf16b16',
    },
  ];

  setFilter(f: Filter) {
    this.activeFilter.set(f);
  }

  formatNum(n: number): string {
    return `Nº ${String(n).padStart(3, '0')}`;
  }
}
