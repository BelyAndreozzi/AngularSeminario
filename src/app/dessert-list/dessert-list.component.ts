import { Component } from '@angular/core';
import { Dessert } from './Dessert';
import { DessertCartService } from '../dessert-cart.service';
import { DessertsDataService } from '../desserts-data.service';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.scss'
})
export class DessertListComponent {

  desserts: Dessert[] = [];

  constructor(
    private cart: DessertCartService,
    private dessertsDataService: DessertsDataService
  ) {}

  ngOnInit(): void{
    this.dessertsDataService.getAll()
    .subscribe(desserts => this.desserts = desserts)
  }

  addToCart(dessert: Dessert) : void {
    this.cart.addToCart(dessert);
    dessert.stock -= dessert.quantity
    dessert.quantity = 0
  }

}
