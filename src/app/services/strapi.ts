import { inject, Injectable } from '@angular/core';
import { STRAPI_URL } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Strapi {
  private strapiUrl = inject(STRAPI_URL);
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

  // Fetch blog posts
  fetchBlogPosts(): Observable<any> {
    return this.http
      .get(this.strapiUrl + '/api/blog-posts?populate=*')
      .pipe(
        catchError((err) => this.handleError(err, null, 'blog posts ophalen')),
      );
  }

  // Fetch single blog post by slug
  fetchBlogPostBySlug(slug: string): Observable<any> {
    return this.http
      .get(
        this.strapiUrl +
          `/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      )
      .pipe(
        catchError((err) => this.handleError(err, null, 'blog post ophalen')),
      );
  }

  // Fetch privacy policy
  fetchPrivacyPolicy(): Observable<any> {
    return this.http
      .get(this.strapiUrl + '/api/privacy?populate=*')
      .pipe(
        catchError((err) =>
          this.handleError(err, null, 'privacy policy ophalen'),
        ),
      );
  }

  // Fetch terms and conditions
  fetchTermsAndConditions(): Observable<any> {
    return this.http
      .get(this.strapiUrl + '/api/voorwaarden?populate=*')
      .pipe(
        catchError((err) =>
          this.handleError(err, null, 'terms and conditions ophalen'),
        ),
      );
  }
}
