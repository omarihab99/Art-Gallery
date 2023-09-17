import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;
  constructor(private router: Router, private loginService: LoginService) { }
  goToRegister(){
    this.router.navigate(['/register']);
  }
  login(){
    this.loginService.login({
      email: this.email,
      password: this.password
    })
    this.router.navigate(['/shop']);
  }
}
