import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'black' | 'clear' = 'clear';
  @Input() label: string = 'Button';
  @Input() rounded: 'lg' | 'full' = 'lg';

  get fontSize() {
    switch (this.size) {
      case 'small':
        return 'md';
      case 'medium':
        return 'xl';
      case 'large':
        return '2xl';
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
        return 'rounded-lg';
      case 'full':
        return 'rounded-full';
    }
  }
}
