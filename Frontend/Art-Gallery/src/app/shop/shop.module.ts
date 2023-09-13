import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProductComponent } from './product/product.component';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    MessagesModule,
  ],

})
export class ShopModule { }
