import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Order } from '../app.interfaces';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  Orders: Order[]=[];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
   debugger
    this._apiService.getOrders().subscribe(result=>{
    debugger
      this.Orders=result;
    })
  }
} 
