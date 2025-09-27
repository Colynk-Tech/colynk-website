import { Component, OnInit } from '@angular/core';
import { Loader } from '../../components/loader/loader';
import { Strapi } from '../../services/strapi';
import { renderBlock } from 'blocks-html-renderer';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-privacy',
  imports: [Loader, DatePipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy implements OnInit {
  constructor(private strapi: Strapi) {}

  public loading = false;
  public privacyContent = '';
  public version = '';

  ngOnInit() {
    this.loading = true;

    this.strapi.fetchPrivacyPolicy().subscribe((res) => {
      this.privacyContent = renderBlock(res.data.privacy);
      this.version = res.data.updatedAt;
      this.loading = false;
    });
  }
}
