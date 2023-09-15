import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../api/customer';

@Injectable()
export class CustomerService {
    private url = 'http://0.0.0.0:8080/users/';
    constructor(private http: HttpClient) { }

   async getCustomers(){
       const res = await this.http.get<any>(this.url)
            .toPromise();
        const data = res.users as Customer[];
        return data;
   }
}
