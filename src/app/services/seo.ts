import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class Seo {
  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  public addTags(meta: {
    title?: string;
    description: string;
    keywords: string;
    image?: string;
  }) {
    meta.title = meta.title || 'Colynk';
    this.titleService.setTitle(meta.title);

    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: meta.description });
    this.meta.updateTag({ name: 'keywords', content: meta.keywords });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: meta.title });
    this.meta.updateTag({
      property: 'og:description',
      content: meta.description,
    });
    this.meta.updateTag({
      property: 'og:image',
      content:
        meta.image ||
        'https://wp.pepijncolenbrander.com/wp-content/uploads/2025/07/Logo-7.png',
    });
  }
}
