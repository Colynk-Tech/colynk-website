import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Strapi } from '../../../services/strapi';
import { ActivatedRoute } from '@angular/router';
import { STRAPI_URL } from '../../../app.config';

@Component({
  selector: 'app-blog-post',
  imports: [DatePipe],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost implements OnInit {
  constructor(
    private strapi: Strapi,
    private activatedRoute: ActivatedRoute,
  ) {}

  private strapiUrl = inject(STRAPI_URL);
  public post: {
    id: number;
    slug: string;
    imageUrl: string;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
    title: string;
    blurb: string;
    richText: string;
  };

  ngOnInit() {
    this.strapi
      .fetchBlogPostBySlug(this.activatedRoute.snapshot.params['id'])
      .subscribe((data: any) => {
        console.log(data);
        this.post.id = data.data[0].id;
        this.post.slug = data.data[0].slug;
        this.post.imageUrl = `${this.strapiUrl}${data.data[0].main_image.url}`;
        this.post.publishedAt = new Date(data.data[0].publishedAt);
        this.post.updatedAt = new Date(data.data[0].updatedAt);
        this.post.createdAt = new Date(data.data[0].createdAt);
        this.post.title = data.data[0].title;
        this.post.blurb = data.data[0].blurb;
        this.post.richText = data.data[0].body[0].children[0].text;

        console.log(this.post);
      });
  }
}
