export interface Order {
    id?: number;
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
    customer_address?: string;
    order_date?: Date;
    order_status?: string;
    order_total?: number;
}
