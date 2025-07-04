import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diensten',
  imports: [Button],
  templateUrl: './diensten.html',
  styleUrl: './diensten.scss',
})
export class Diensten {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
