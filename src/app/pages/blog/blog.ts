import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Strapi } from '../../services/strapi';
import { STRAPI_URL } from '../../app.config';
import { Loader } from '../../components/loader/loader';

@Component({
  selector: 'app-blog',
  imports: [DatePipe, Loader],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  constructor(private strapi: Strapi) {}

  private strapiUrl = inject(STRAPI_URL);
  public blogPosts: {
    id: number;
    slug: string;
    imageUrl: string;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
    title: string;
    blurb: string;
    richText: string;
  }[] = [];
  public loading = false;

  ngOnInit() {
    this.loading = true;

    this.strapi.fetchBlogPosts().subscribe((data) => {
      console.log(data);
      this.blogPosts = data.data.map((item: any) => {
        return {
          id: item.id,
          slug: item.slug,
          imageUrl: `${this.strapiUrl}${item.main_image.url}`,
          publishedAt: new Date(item.publishedAt),
          updatedAt: new Date(item.updatedAt),
          createdAt: new Date(item.createdAt),
          title: item.title,
          blurb: item.short_summary,
          richText: item.body[0].children[0].text,
        };
      });

      this.loading = false;
    });
  }
}
