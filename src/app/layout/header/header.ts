import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ContactModalService } from '../../services/contact-modal.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class HeaderComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly contactModal = inject(ContactModalService);

  scrollToDonate(event: Event) {
    event.preventDefault();
    this.doc.getElementById('donate')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  openContact() {
    this.contactModal.open();
  }
}
