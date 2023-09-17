import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    MessageService
  ]
})
export class RegisterComponent {
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  address!: string;
  passwordConfirm!: string;
  constructor(private messageService: MessageService, private registerService: RegisterService, private router: Router) { }
  validateInput(){
    if(this.name.trim().length == 0 || this.email.trim().length == 0 || this.password.trim().length == 0 || this.phone.trim().length == 0 || this.address.trim().length == 0){
      this.messageService.add({ severity: 'error', summary: 'danger', detail: 'All fields are required' });

    }
    this.registerService.register(this.name, this.email, this.password,this.passwordConfirm, this.phone, this.address);
    if(this.registerService.failed){
      this.messageService.add({ severity: 'error', summary: 'danger', detail: 'User already exists! Please login' });
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
