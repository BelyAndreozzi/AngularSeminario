import { Injectable } from '@angular/core';
import { Dessert } from './dessert-list/Dessert';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DessertCartService {

  constructor() { }

  private _cart: Dessert[] = [];
  cart: BehaviorSubject<Dessert[]> = new BehaviorSubject<Dessert[]>(this._cart);
  

  addToCart(dessert: Dessert){
    let item: Dessert = this._cart.find(d => d.name == dessert.name) as Dessert; 
    
    if(!item){
      this._cart.push({... dessert});
    }else{
      item.quantity += dessert.quantity;

    }
    console.log(this._cart.length);
    this.cart.next(this._cart);
  }

}
