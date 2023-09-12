import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }


    getProducts() {
        return this.http.get<any>('http://localhost:8080/products')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
    //TODO: Implement Create Product
    //TODO: Implement remove product
    deleteProduct(id: number) {
        return this.http.delete<any>('http://localhost:8080/products/' + id)
            .toPromise()
            .then(res => res.data as Product)
            .then(data => data);
    }
    updateProduct(product: Product) {
        return this.http.patch<any>('http://localhost:8080/products/' + product.id, product)
            .toPromise()
            .then(res => res.data as Product)
            .then(data => data);
    }
    //TODO: Implement update product
}
