import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dessert } from '../dessert-list/Dessert';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {

  /* @Input()
  dessert!: Dessert; */

  @Input() 
  quantity: number = 0;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  max: number = 0;

  
  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity)
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity)
    }
  }

  changeQuantity(event: KeyboardEvent): void {

    const allowedKey = 'Backspace'

    if (event.key && !event.key.match(/[0-9]/) && !event.key.includes(allowedKey)) {
      this.quantity = 0;
      /* event.preventDefault(); */
    }

    if (event.key) {
      if (this.quantity > this.max) {
        this.quantity = this.max
      } else if (this.quantity < 0) {
        this.quantity = 0
      }
      this.quantityChange.emit(this.quantity)
    }
  }

}
