import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Button
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router: Router) {
  }
  public navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
