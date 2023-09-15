import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';

@Injectable()
export class ProductService {
    private url = 'http://0.0.0.0:8080/products/';
    constructor(private http: HttpClient) { }
    

    async getProducts() {
        const res = await this.http.get<any>(this.url)
            .toPromise();
        const data = res.data as Product[];
        return data;
    }
    //TODO: Implement Create Product
    //TODO: Implement remove product
    deleteProduct(id: number)  {
        console.log('delete');
        const _ = this.http.delete<any>(this.url + id ).toPromise();
        console.log(_);
    }
    async updateProduct(product: Product) {
        const res = await this.http.patch<any>(this.url + product.id, product)
            .toPromise();
        const data = res.data as Product;
        console.log(data)
        return data;
    }
    async createProduct(product: Product) {
        const res = await this.http.post<any>(this.url, product)
            .toPromise();
        if(res.message) console.log(res.message);
        console.log(res);
        const data = res.product as Product;
        console.log(data);
        return data;
    }
    //TODO: Implement update product
}
