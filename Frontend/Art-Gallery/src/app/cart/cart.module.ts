import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { OverlayModule } from 'primeng/overlay';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductsCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    OverlayModule,
    DropdownModule,
    ButtonModule,
    InputNumberModule,
    FormsModule
  ]
})
export class CartModule { }
