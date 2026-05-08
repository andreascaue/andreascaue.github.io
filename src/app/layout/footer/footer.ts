import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  private readonly doc = inject(DOCUMENT);

  scrollToDonate(event: Event) {
    event.preventDefault();
    this.doc.getElementById('donate')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
