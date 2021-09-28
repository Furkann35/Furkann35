// Table data
export interface Order {
    orderid: string;
    date: string;
    billingname: string;
    total: string;
    paymentstatus: string;
}

// Search Data
export interface SearchResult {
    orders: Order[];
    total: number;
}
