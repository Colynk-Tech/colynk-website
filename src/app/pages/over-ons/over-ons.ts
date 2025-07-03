import { Component, OnInit } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-over-ons',
  imports: [],
  templateUrl: './over-ons.html',
  styleUrl: './over-ons.scss'
})
export class OverOns implements OnInit {
  constructor(private seo: Seo) {
  }
  ngOnInit() {
    this.seo.addTags({
      title: 'Over Ons',
      description: 'Colynk is een digitaal bureau voor mkb\'s en startups. Wij bieden cross-platform ontwikkeling, design, hosting en domeinregistratie.',
      keywords: 'Colynk, over ons, team, cross-platform, ontwikkeling, design, hosting, domein',
    });
  }
}
