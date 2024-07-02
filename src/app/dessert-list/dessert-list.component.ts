import { Component } from '@angular/core';
import { Dessert } from './Dessert';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.scss'
})
export class DessertListComponent {

  upQuantity(dessert: Dessert): void {
    if (dessert.quantity < dessert.stock) {
      dessert.quantity++;
    }
  }

  downQuantity(dessert: Dessert): void {
    if (dessert.quantity > 0) {
      dessert.quantity--;
    }
  }

  changeQuantity(event: KeyboardEvent, dessert: Dessert): void {

    const allowedKey = 'Backspace'

    if (event.key && !event.key.match(/[0-9]/) && !event.key.includes(allowedKey)) {
      dessert.quantity = 0;
      /* event.preventDefault(); */
    }

    if (event.key) {
      if (dessert.quantity > dessert.stock) {
        dessert.quantity = dessert.stock
      } else if (dessert.quantity < 0) {
        dessert.quantity = 0
      }
    }
  }

  desserts: Dessert[] = [
    {
      "name": "Tiramisu",
      "price": 4500,
      "stock": 4,
      "image": "assets/tiramisu.png",
      "onSale": false,
      "quantity": 0,
    },
    {
      "name": "Cheesecake",
      "price": 5000,
      "stock": 3,
      "image": "assets/cheesecake.png",
      "onSale": false,
      "quantity": 0,
    },
    {
      "name": "Cheesecake de oreo",
      "price": 3600,
      "stock": 7,
      "image": "assets/cheesecake-de-oreo.png",
      "onSale": true,
      "quantity": 0,
    },
    {
      "name": "Lemon pie",
      "price": 5000,
      "stock": 0,
      "image": "assets/lemon-pie.png",
      "onSale": false,
      "quantity": 0,
    },
    {
      "name": "Brownie",
      "price": 7000,
      "stock": 2,
      "image": "assets/brownie.png",
      "onSale": false,
      "quantity": 0,
    }
  ]
}
