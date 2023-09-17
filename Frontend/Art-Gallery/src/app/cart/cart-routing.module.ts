import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCartComponent } from './products-cart/products-cart.component';
const routes: Routes = [
  {
    path: '',
    component: ProductsCartComponent
  },
  {
    path: 'order',
    loadChildren: () => import('../order/order.module').then(m => m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
