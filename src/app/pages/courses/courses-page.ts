import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Course {
  glyph: string;
  title: string;
  desc: string;
  facts: { value: string; label: string }[];
  status: 'available' | 'soon';
  badge: string;
}

interface Module {
  num: string;
  title: string;
  desc: string;
  dur: string;
}

interface JourneyStep {
  n: string;
  title: string;
  desc: string;
}

interface Highlight {
  n: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.html',
  host: { class: 'page-enter' },
})
export class CoursesPage {
  private readonly doc = inject(DOCUMENT);

  protected readonly courses: Course[] = [
    {
      glyph: '01',
      title: 'Web Development Course',
      desc: 'From HTML fundamentals to practical web projects you can understand, explain, and improve. Self-paced lessons, structured modules, and hands-on practice you can complete on your own schedule.',
      facts: [
        { value: 'Self-paced', label: 'access' },
        { value: '6', label: 'modules' },
        { value: 'On demand', label: 'course' },
      ],
      status: 'available',
      badge: 'SELF-PACED · FREE',
    },
    {
      glyph: '02',
      title: 'Advanced JavaScript',
      desc: 'Go beyond syntax and learn how JavaScript really works: scope, closures, async patterns, modules, error handling, performance, and the decisions behind production-ready code.',
      facts: [
        { value: 'Self-paced', label: 'access' },
        { value: '8', label: 'modules' },
        { value: 'On demand', label: 'course' },
      ],
      status: 'soon',
      badge: 'Coming soon',
    },
  ];

  protected readonly enrollFeatures = [
    'Self-paced learning',
    'Structured lessons',
    'Practical examples',
    'Hands-on exercises',
    'Build at your own pace',
  ];

  protected readonly highlights: Highlight[] = [
    { n: 'i.', title: 'Structured learning', desc: 'Follow a clear path through web development and software engineering fundamentals, with practical examples and exercises designed to build understanding step by step.' },
    { n: 'ii.', title: 'Real-world perspective', desc: 'The lessons are based on real software work: building systems from zero, improving existing code, debugging issues, handling bottlenecks, and thinking through technical trade-offs.' },
    { n: 'iii.', title: 'Practice that becomes portfolio', desc: 'Each project is designed to help you practice real concepts and create work you can explain, improve, and eventually show as part of your developer portfolio.' },
  ];

  protected readonly modules: Module[] = [
    { num: 'i.', title: 'Introduction to web development', desc: 'We start with a solid base — the essential concepts of how the web actually works, before we write a single tag.', dur: '1 week' },
    { num: 'ii.', title: 'HTML, the structural layer', desc: 'The fundamental structure of a web page. Links, images, tables, forms — and why semantics matter more than they sound.', dur: '1 week' },
    { num: 'iii.', title: 'CSS, fundamentals & layout', desc: 'Design on the web, from the box model through Flexbox and Grid. Styling elements, building layouts, handling the small screens.', dur: '2 weeks' },
    { num: 'iv.', title: 'JavaScript, essentials', desc: 'The language of the browser. Variables, control flow, functions, the DOM — building to the point where you can make pages respond.', dur: '3 weeks' },
    { num: 'v.', title: 'Working with Git & GitHub', desc: "Collaborating and versioning code — the tool you'll use every day for the rest of your career, taught calmly.", dur: '1 week' },
    {
  num: 'vi.',
  title: 'Building a Practical Project',
  desc: 'Apply the course concepts in a focused project designed to help you practice, connect ideas, and understand how the pieces fit together.',
  dur: '5 weeks'
},
  ];

  protected readonly journey: JourneyStep[] = [
    { n: 'i.', title: "Start when you're ready", desc: 'The course is available on demand, so you can begin whenever it fits your schedule. No cohort, no fixed calendar, no pressure to keep pace with a group.' },
    { n: 'ii.', title: 'Learn at your own pace', desc: 'Lessons are organized step by step, with clear explanations, practical examples, and exercises you can revisit whenever needed.' },
    { n: 'iii.', title: 'Build with understanding', desc: 'The goal is not just to copy code. You finish each section by understanding the decisions behind the implementation, the trade-offs, and the common mistakes to avoid.' },
  ];

  scrollToDetail() {
    this.doc.getElementById('course-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  enroll() {
    alert('Enroll (demo)');
  }
}
