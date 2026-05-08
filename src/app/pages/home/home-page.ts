import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  host: { class: 'page-enter' },
})
export class HomePage {
  protected readonly stats = [
    { value: '10', label: 'essays' },
    { value: '2', label: 'courses' },
    { value: '17+ yrs', label: 'in the industry' },
    { value: 'Weekly', label: 'dispatch' },
  ];

  protected readonly sideArticles = [
    { num: 'Nº 009', title: 'Scaling Is Not Only About More Servers', meta: 'Essay · Apr 02' },
    { num: 'Nº 008', title: 'Background Jobs: When Your API Should Not Do Everything Now', meta: 'Field notes · Mar 24' },
    { num: 'Nº 007', title: 'From “It Works on My Machine” to Production-Ready', meta: 'Essay · Mar 11' },
    { num: 'Nº 006', title: 'Authentication, Authorization, and the Confusion Between Them', meta: 'Essay · Feb 27' },
  ];

  protected readonly topics = [
    { tag: '001', title: 'Engineering — the daily craft of shipping code.', count: 10, filter: 'engineering' },
    { tag: '002', title: 'Architecture — boundaries, tradeoffs, the shape of systems.', count: 6, filter: 'arch' },
    { tag: '003', title: 'AI/Automation — when computers do the boring parts.', count: 2, filter: 'ai' },
  ];

  protected readonly miniModules = [
    { num: '01', title: 'Introduction to web development', dur: '1 wk' },
    { num: '02', title: 'HTML, the structural layer', dur: '1 wk' },
    { num: '03', title: 'CSS, fundamentals and layout', dur: '2 wk' },
    { num: '04', title: 'JavaScript, essentials', dur: '3 wk' },
    { num: '05', title: 'Working with Git & GitHub', dur: '1 wk' },
    { num: '06', title: 'Shipping a real project', dur: '5 wk' },
  ];
}
