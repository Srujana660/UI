import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'dashboard', component: DashComponent },
  { path: 'orders', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
