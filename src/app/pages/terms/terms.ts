import { Component } from '@angular/core';
import { Strapi } from '../../services/strapi';
import { renderBlock } from 'blocks-html-renderer';
import { Loader } from '../../components/loader/loader';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-terms',
  imports: [Loader, DatePipe],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {
  constructor(private strapi: Strapi) {}

  public loading = false;
  public voorwaardenContent = '';
  public version = '';

  ngOnInit() {
    this.loading = true;

    this.strapi.fetchTermsAndConditions().subscribe((res) => {
      this.voorwaardenContent = renderBlock(res.data.voorwaarden);
      this.version = res.data.updatedAt;
      this.loading = false;
    });
  }
}
