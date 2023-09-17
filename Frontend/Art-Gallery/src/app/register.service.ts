import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = 'http://localhost:8080/users/register';
  failed = false;
  private token = '';
  constructor(private http: HttpClient) { }
  register(name: string, email: string, password: string, password_confirmation: string, phone: string, address: string) {
    this.http.post<any>(this.url, { name, email, password, password_confirmation, phone, address }, { observe: 'response' }).subscribe((res: HttpResponse<any>) => {
      if(res.status!=201){
        this.failed = true;
      }
      console.log(res);
      this.token = res.body.token;
    });
    
  }
}
