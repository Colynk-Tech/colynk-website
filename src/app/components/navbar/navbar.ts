import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Router } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1rem)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '100ms ease-in',
          style({ opacity: 0, transform: 'translateY(-1rem)' }),
        ),
      ]),
    ]),
  ],
})
export class Navbar {
  menuOpen = false;

  constructor(private router: Router) {}

  public navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public closeMenu(): void {
    this.menuOpen = false;
  }
}
