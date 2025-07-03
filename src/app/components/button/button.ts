import { Component, Input } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-button',
  imports: [
    Loader
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() size: 'extra small' | 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'black' | 'clear' = 'clear';
  @Input() label: string = 'Button';
  @Input() rounded: 'lg' | 'full' = 'lg';
  @Input() disabled?: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() loading: boolean = false;

  get fontSize() {
    switch (this.size) {
      case 'extra small':
        return 'lg:text-sm sm:text-xs text-xs px-[10px] py-[4.5px]';
      case 'small':
        return 'lg:text-xl sm:text-base text-xs px-[10px] py-[4.5px]';
      case 'medium':
        return 'text-xl px-[10px] py-[4.5px]';
      case 'large':
        return 'text-2xl px-[20px] py-[7px]';
    }
  }
  get buttonColor() {
    switch (this.color) {
      case 'black':
        return 'bg-black text-white';
      case 'clear':
        return 'bg-transparent border-[2px] border-solid border-black';
    }
  }
  get buttonRound() {
    switch (this.rounded) {
      case 'lg':
        return 'sm:rounded-lg rounded-md';
      case 'full':
        return 'rounded-full';
    }
  }
}
