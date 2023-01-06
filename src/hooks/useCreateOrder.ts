import { useMutation } from 'react-query';
import { fetchWithoutToken } from '../helpers/fetch';
import { IOrder } from '../types/order';

const createOrder = async (data: IOrder) => {
    const resp = await fetchWithoutToken(`orders`, data, 'POST');
    return resp;
};

const useCreateOrder = () => {
    return useMutation(createOrder);
};

export default useCreateOrder;
