import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Dessert } from './dessert-list/Dessert';

const URL = 'https://6689838e0ea28ca88b8835ca.mockapi.io/api/desserts/desserts'

@Injectable({
  providedIn: 'root'
})
export class DessertsDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Dessert[]> {
    return this.http.get<Dessert[]>(URL)
              .pipe(
                tap((desserts: Dessert[]) => desserts.forEach(dessert => dessert.quantity = 0))
                
              )
  }
}
