import { Component, OnInit } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(
    private router: Router,
    private seoService: Seo,
  ) {}
  ngOnInit() {
    this.seoService.addTags({
      description: 'Colynk—Code Smart. Design Sharp. Launch Strong.',
      keywords:
        'Colynk, tech, website, cross-platform, development, design, hosting, domain',
    });
  }
  public navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
