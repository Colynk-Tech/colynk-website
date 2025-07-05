import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { API_URL } from '../app.config';
import { AlertService } from './alert';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = inject(API_URL);
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
  ) {}

  private handleError<T>(err: any, res: T, action: string): Observable<T> {
    console.error(err);
    this.alertService.add({
      type: 'warning',
      message: err.error
        ? err.error.message
        : `Het is niet gelukt om '${action}' uit te voeren.`,
    });
    return of(res);
  }

  // Send contact form
  sendContactForm(
    name: string,
    email: string,
    message: string,
  ): Observable<any> {
    return this.http
      .post(this.apiUrl + '/email/contact', { name, email, message })
      .pipe(
        catchError((err) => this.handleError(err, null, 'bericht versturen')),
      );
  }
}
