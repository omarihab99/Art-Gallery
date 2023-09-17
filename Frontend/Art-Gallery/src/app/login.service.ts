import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/users/login';
  private user!: User;
  
  constructor(private http: HttpClient) { }
  login(userData: Object){
    this.http.post<any>(this.url, userData, { observe: 'response' }).subscribe((res: HttpResponse<any>) => {
      this.user = res.body.user;
      localStorage.setItem('token', res.body.token);
    });
  }
  get getUserInfo(){
    return this.user;
  }
  
}
