import IExtraOption from './extraOptions';

export default interface IPizza {
    id: number;
    title: string;
    description: string;
    img: string;
    prices: string;
    createdAt: string;
    updatedAt: string;
    extraOptions: IExtraOption[] | null;
}
