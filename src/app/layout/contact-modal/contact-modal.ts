import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { ContactModalService } from '../../services/contact-modal.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-modal.html',
})
export class ContactModalComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly doc = inject(DOCUMENT);
  protected readonly modal = inject(ContactModalService);

  protected readonly isSubmitting = signal(false);
  protected readonly successMessage = signal('');
  protected readonly errorMessage = signal('');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    subject: ['', [Validators.required, Validators.maxLength(150)]],
    message: ['', [Validators.required, Validators.maxLength(2000)]],
  });

  constructor() {
    effect(() => {
      if (this.modal.isOpen()) {
        this.doc.body.style.overflow = 'hidden';
      } else {
        this.doc.body.style.overflow = '';
        this.successMessage.set('');
        this.errorMessage.set('');
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.modal.isOpen() && !this.isSubmitting()) {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget && !this.isSubmitting()) {
      this.close();
    }
  }

  close() {
    this.modal.close();
  }

  async onSubmit() {
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    try {
      await firstValueFrom(this.contactService.sendMessage(this.form.getRawValue()));
      this.successMessage.set('Your message was sent. I will get back to you soon.');
      this.form.reset();
    } catch {
      this.errorMessage.set('Something went wrong. Please try again later.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
