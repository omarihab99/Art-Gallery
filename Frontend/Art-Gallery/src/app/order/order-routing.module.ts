import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
const routes: Routes = [
  {
    path: '',
    component: OrderCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
