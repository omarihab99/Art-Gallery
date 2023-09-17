import { Injectable } from '@angular/core';
import { Product } from './product';
import { Order } from './order';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderedItem: Order = {} as Order;
  private url = 'http://localhost:8080/orders';
  failed: boolean = false;
  // private cartCountSubject = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient, private loginService: LoginService) { }
  createOrder(products: Product[], subTotal: number, tax: number, total: number) {
    this.orderedItem = {
      products: products,
      subtotal: subTotal,
      tax: tax,
      total: total
    };
    let order = {
      customer_name: this.loginService.getUserInfo.name,
      customer_email: this.loginService.getUserInfo.email,
      customer_phone: this.loginService.getUserInfo.phone,
      customer_address: this.loginService.getUserInfo.address,
      order_date: new Date(),
      order_status: 'pending',
      order_total: total,
      product_ids: products.map(product => product.id),
      quantities: products.map(product => product.addedToCartQuantity)
    }
     this.http.post<any>(this.url, order).subscribe((res: HttpResponse<any>) => {
       if(res.status===201){
         this.orderedItem = {} as Order;
         
       }
     })
  }
  get getOrder() : Order {
    return this.orderedItem;
  }
  
  removeFromCart(product: Product) {
   
  }
}
