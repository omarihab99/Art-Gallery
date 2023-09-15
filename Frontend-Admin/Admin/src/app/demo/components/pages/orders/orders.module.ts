import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent } from './order/order.component';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TableModule,
    ToolbarModule,
  ]
})
export class OrdersModule { }
