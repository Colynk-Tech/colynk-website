import { Component, OnInit } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  constructor(private seo: Seo) {
  }
  ngOnInit() {
    this.seo.addTags({
      title: 'Technologie',
      description: 'Colynk heeft uitgebreide ervaring in cross-platform ontwikkeling, design, hosting en domeinregistratie.',
      keywords: 'Colynk, ervaring, cross-platform, ontwikkeling, design, hosting, domein',
    });
  }
}
