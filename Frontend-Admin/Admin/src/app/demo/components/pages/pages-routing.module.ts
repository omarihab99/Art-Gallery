import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
        // { path: '**', redirectTo: '/notfound' },
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
