import { Component, OnInit, ElementRef } from '@angular/core';
import { Customer } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './tabledemo.component.html',
    providers: [MessageService, ConfirmationService]
})
export class TableDemoComponent implements OnInit {    
    customers: Customer[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomers().then(customers => {
            // this.customers1 = customers;
            // this.loading = false;

            // @ts-ignore
            this.customers = customers;
            console.log(this.customers);
        });
        // this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
        // this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);

   

    }



   
}