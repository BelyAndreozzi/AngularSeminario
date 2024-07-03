import { Component } from '@angular/core';
import { DessertCartService } from '../dessert-cart.service';
import { Dessert } from '../dessert-list/Dessert';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dessert-cart',
  templateUrl: './dessert-cart.component.html',
  styleUrl: './dessert-cart.component.scss'
})
export class DessertCartComponent {

  cartList$: Observable<Dessert[]> ;
  
  constructor(private cart: DessertCartService) { 
    this.cartList$ = cart.cart.asObservable();
  }
}
