import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';
import { Seo } from '../../services/seo';
import { createTimeline, svg } from 'animejs';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {
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
  ngAfterViewInit() {
    // animate('#paper-plane', {
    //   ease: 'linear',
    //   duration: 10000,
    //   loop: true,
    //   ...svg.createMotionPath('#orbit-path-1'),
    // });
    // animate('#circle-1', {
    //   ease: 'linear',
    //   duration: 10000,
    //   loop: true,
    //   ...svg.createMotionPath('#orbit-path-2'),
    // });

    const orbitPath1MotionPath = svg.createMotionPath('#orbit-path-1');
    const orbitPath2MotionPath = svg.createMotionPath('#orbit-path-2');
    const timeline = createTimeline({
      defaults: {
        ease: 'inOutSine',
        duration: 10000,
        loop: true,
      },
    });
    timeline.add('#paper-plane', orbitPath1MotionPath, 100);

    const timelinePath2 = createTimeline({
      defaults: {
        ease: 'inOutQuad',
        duration: 5000,
        loop: true,
      },
    });
    timelinePath2.add('#circle-1', orbitPath2MotionPath, 500);

    const timelinePath3 = createTimeline({
      defaults: {
        ease: 'inOutQuad',
        duration: 9000,
        loop: true,
      },
    });
    timelinePath2.add('#circle-2', orbitPath2MotionPath, 1500);
  }

  public navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
