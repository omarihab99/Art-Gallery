import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../api/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://0.0.0.0:8080/orders/';
  constructor(private http: HttpClient) { }
  async getOrders() {
    const res = await this.http.get<any>(this.url).toPromise();
    const data = res.orders as Order[];
    return data; 
  }
  async updateOrder(order: Order) {
    const res = await this.http.patch<any>(this.url + order.id, order).toPromise();
    const data = res.order as Order;
    console.log(data);
    return data;
  }
}
