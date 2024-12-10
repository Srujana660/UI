import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from '../api.service';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  // products: Product[]=[
  //   {Id: 1, Name: 'Iphone 8', Icon:'', Quantity: 4},
  //   {Id: 1, Name: 'Iphone 9', Icon:'', Quantity: 3},
  //   {Id: 1, Name: 'Iphone X', Icon:'', Quantity: 2},
  //   {Id: 1, Name: 'Samsung', Icon:'', Quantity: 1}
  // ];

  productList: Product[] = [];
  cartProductList = [];
  constructor(private breakpointObserver: BreakpointObserver, private _apiService: ApiService) {}

  ngOnInit() {
    this._apiService.getProducts().subscribe(result=>{
      console.log(result);
      this.productList=result;
    })
  }

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
  }
   removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
   }
}
