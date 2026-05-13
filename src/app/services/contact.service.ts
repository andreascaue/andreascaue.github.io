import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://formspree.io/f/mwvywobk';

  sendMessage(payload: ContactMessage): Observable<unknown> {

    return this.http.post(
      this.endpoint,
      {
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        _replyto: payload.email,
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      },
    );
  }
}