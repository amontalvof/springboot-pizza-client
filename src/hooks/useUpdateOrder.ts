import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';
import { IOrderExtended } from '../types/order';

const updateOrder = async ({
    orderId,
    order,
}: {
    orderId: number;
    order: IOrderExtended;
}) => {
    try {
        const resp = await fetchWithToken(`orders/${orderId}`, order, 'PUT');
        if (resp.errorMessages) {
            toast.error('Sorry there was an error updating the order.', {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'dark',
            });
        }
    } catch (error: any) {
        toast.error('Sorry there was an error updating the order.', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'dark',
        });
    }
};

const useUpdateOrder = () => {
    const queryClient = useQueryClient();
    return useMutation(updateOrder, {
        onSuccess: () => queryClient.invalidateQueries('read-orders'),
    });
};

export default useUpdateOrder;
