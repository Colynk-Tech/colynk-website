import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { AlertComponent } from './components/alert/alert';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, AlertComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Colynk';
}
