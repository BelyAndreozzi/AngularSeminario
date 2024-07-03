import { Component } from '@angular/core';
import { Dessert } from './Dessert';
import { DessertCartService } from '../dessert-cart.service';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.scss'
})
export class DessertListComponent {

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

  constructor(private cart: DessertCartService) {
    
  }

  addToCart(dessert: Dessert) : void {
    this.cart.addToCart(dessert);
    dessert.stock -= dessert.quantity
    dessert.quantity = 0
  }

}
