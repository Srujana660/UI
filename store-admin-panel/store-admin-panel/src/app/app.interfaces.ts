export interface Product{
    name: string;
    price: number;
}

export interface Order {
    orderNumber: number;
    product: Product;
    quantity: number;
}