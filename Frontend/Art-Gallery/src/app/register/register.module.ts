import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    CheckboxModule,
    InputMaskModule,
    FormsModule,
    MessagesModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ]
})
export class RegisterModule { }
