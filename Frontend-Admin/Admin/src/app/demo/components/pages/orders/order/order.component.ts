import { Component } from '@angular/core';
import { OrderService } from 'src/app/demo/service/order.service';
import { Order } from 'src/app/demo/api/order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  orders: Order[] = [];
  orderStatusStyle: string = 'order-badge status-';
  order: Order = {};


  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().then(data => this.orders = data);

    this.cols = [
      { field: 'product', header: 'Product' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
      { field: 'status', header: 'Status' }
    ];

    this.statuses = [
      { label: 'AVAILABLE', value: 'available' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {
    this.order = {};
    this.submitted = false;
    this.productDialog = true;
  }



  editProduct(order: Order) {
    if (order.order_status === 'pending') {
      order.order_status = 'delivered';
    }
    else {
      order.order_status = 'pending';
    }
    this.orderService.updateOrder(order);
    this.order = { ...order };
    this.productDialog = true;
  }







  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    // @ts-ignore
    this.order.order_status = this.order.order_status.value ? this.order.order_status.value : this.order.order_status;
    this.orderService.updateOrder(this.order);

    this.orders = [...this.orders];
    this.productDialog = false;
    this.order = {};
  }

}


