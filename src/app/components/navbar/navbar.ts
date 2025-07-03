import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    Button,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(private router: Router) {
  }
  public navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
