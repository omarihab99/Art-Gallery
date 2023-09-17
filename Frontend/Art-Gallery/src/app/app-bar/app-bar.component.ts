import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  items: MenuItem[] = [];
  cartCount!: number;
  private cartCountSubscription!: Subscription;

  constructor(public cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    this.cartCountSubscription = this.cartService.getCartNumber$.subscribe(count => {
      this.cartCount = count;
    });
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
  ngOnDestroy() {
    this.cartCountSubscription.unsubscribe();
  }
  goToCart() {
    if(localStorage.getItem('token')){
      this.router.navigate(['/cart']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  goToShop() {
    if(localStorage.getItem('token')){
      this.router.navigate(['/shop']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
