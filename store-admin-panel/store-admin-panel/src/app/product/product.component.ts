import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: [`
  :host {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 10px;
    border: 1px solid blue;
    padding: 10px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class ProductComponent {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  @Output() productRemoved = new EventEmitter();

  addProductToCart(product) {
    this.productAdded.emit(product);
  }
  removeProductFromCart(product) {
    this.productRemoved.emit(product);
  }
}
