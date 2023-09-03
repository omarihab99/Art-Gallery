import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Shop',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/shop'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contact'
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        routerLink: '/login'
      },
    ];
  }
}
