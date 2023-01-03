import IExtraOption from './extraOptions';

interface IProduct {
    id?: number;
    name?: string;
    image?: string;
    price: number;
    size: string;
    extras: IExtraOption[] | [];
    quantity: number;
}

export default IProduct;
