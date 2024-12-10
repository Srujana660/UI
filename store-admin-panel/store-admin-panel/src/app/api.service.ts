import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Product } from './app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiEndPoint: string = "http://localhost:57181/api/products/"; 
  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.apiEndPoint + 'GetProducts');
  }

  getOrders(): Observable<Order[]> {
    return this._httpClient.get<Order[]>(this.apiEndPoint + 'GetOrders');
  }
  getMenuItems(): Observable<string[]> {
    return this._httpClient.get<string[]>(this.apiEndPoint + 'GetMenuItems');
}
}
