import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink],
  templateUrl: './about-page.html',
  host: { class: 'page-enter' },
})
export class AboutPage {
  private readonly router = inject(Router);

  protected readonly credlyUrl = 'https://www.credly.com/users/andreas-magalhaes';
  protected readonly contactEmail = 'andreascauecm@gmail.com';
  protected readonly emailPopoverOpen = signal(false);
  protected readonly emailCopied = signal(false);
  private copyResetHandle: ReturnType<typeof setTimeout> | null = null;

  toggleEmailPopover(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.emailPopoverOpen.update(v => !v);
    if (!this.emailPopoverOpen()) {
      this.emailCopied.set(false);
    }
  }

  async copyEmail(event: MouseEvent) {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(this.contactEmail);
      this.emailCopied.set(true);
      if (this.copyResetHandle) clearTimeout(this.copyResetHandle);
      this.copyResetHandle = setTimeout(() => this.emailCopied.set(false), 1800);
    } catch {
      // clipboard API can be blocked (older browsers, insecure context); ignore silently
    }
  }

  @HostListener('document:click')
  closeEmailPopover() {
    if (this.emailPopoverOpen()) {
      this.emailPopoverOpen.set(false);
      this.emailCopied.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeEmailPopover();
  }

  protected readonly formation = [
    { title: 'B.Sc. Computer Science', where: 'UniCEUB', yr: '2004 — 2009' },
  ];

  protected readonly credentials = [
    { title: 'Professional Scrum Master™ I (PSM I)', where: 'Scrum.org', yr: '2021' },
    { title: 'MCSA: Web Applications', where: 'Microsoft', yr: '2021' },
    { title: 'Microsoft Certified: Azure Developer Associate', where: 'Microsoft', yr: '2020' },
    { title: 'Microsoft Certified: Azure Data Fundamentals', where: 'Microsoft', yr: '2020' },
    { title: 'Microsoft Certified: Azure Fundamentals', where: 'Microsoft', yr: '2020' },
    { title: 'MCSA: SQL Server 2012/2014', where: 'Microsoft', yr: '2015' },
  ];

  protected readonly curiosities = [
    'Design Patterns',
    'Test Automation',
    'Optimization and Performance',
    'Observability',
    'CI/CD',
    'Domain-driven design',
    'Software architecture',
    'Mentorship',
  ];

  protected readonly stack = ['.NET / C#', 'Node.js', 'Python', 'Angular', 'React', 'SQL Server', 'Postgres', 'Azure', 'AWS', 'Docker'];

  goToArticles() {
    this.router.navigate(['/articles']);
  }
}
