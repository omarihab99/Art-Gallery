import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:8080/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Object> {
    return this.http.get<Object>(this.url);
  }
  getProduct(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.url}/${id}`);
  }
}
