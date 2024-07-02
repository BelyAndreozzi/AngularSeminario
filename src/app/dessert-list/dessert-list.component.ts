import { Component } from '@angular/core';
import { Dessert } from './Dessert';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.scss'
})
export class DessertListComponent {
//postres para agregar: cheesecake clasico, cheesecake de oreo, lemon pie y marquise
  desserts: Dessert[] = [
    {
      "name": "Tiramisu",
      "price": 4500,
      "stock": 4,
      "image": "assets/tiramisu.png",
      "onSale": false,
    },
    {
      "name": "Cheesecake",
      "price": 5000,
      "stock": 3,
      "image": "assets/cheesecake.png",
      "onSale": false,
    },
    {
      "name": "Cheesecake de oreo",
      "price": 3600,
      "stock": 7,
      "image": "assets/cheesecake-de-oreo.png",
      "onSale": true,
    },
    {
      "name": "Lemon pie",
      "price": 5000,
      "stock": 0,
      "image": "assets/lemon-pie.png",
      "onSale": false,
    },
    {
      "name": "Brownie",
      "price": 7000,
      "stock": 2,
      "image": "assets/brownie.png",
      "onSale": false,
    }
  ]
}
