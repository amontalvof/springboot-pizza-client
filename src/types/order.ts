import IProduct from './product';

export interface IOrder {
    total: number;
    products: IProduct[];
    customer: string;
    phone: string;
    address: string;
}

export interface IOrderExtended extends IOrder {
    status: string;
    id: number;
}
