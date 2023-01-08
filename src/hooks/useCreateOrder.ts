import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithoutToken } from '../helpers/fetch';
import { IOrder } from '../types/order';

const createOrder = async (data: IOrder) => {
    try {
        const resp = await fetchWithoutToken(`orders`, data, 'POST');
        if (resp.errorMessages) {
            toast.error('Sorry there was an error updating the order.', {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'dark',
            });
        }
        return resp;
    } catch (error) {
        toast.error('Sorry there was an error creating the order.', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'dark',
        });
    }
};

const useCreateOrder = () => {
    return useMutation(createOrder);
};

export default useCreateOrder;
