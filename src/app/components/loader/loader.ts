import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | string = 'lg';
  @Input() color: '' | string = '#000000';
  @Input() fill: '' | string = '#ffffff';
  get dimesnsion() { return this.size === 'sm' ? '1em' : this.size === 'md' ? '2em' : this.size === 'lg' ? '3em' : this.size === 'xl' ? '4em' : this.size; }
}
