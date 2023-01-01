import IExtraOption from './extraOptions';

interface IProduct {
    name?: string;
    image?: string;
    price: number;
    size: string;
    extras: IExtraOption[] | [];
    quantity: number;
}

export default IProduct;
