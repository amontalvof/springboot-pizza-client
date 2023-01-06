import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithoutToken } from '../helpers/fetch';

const deleteProduct = async ({ productId }: { productId: number }) => {
    const resp = await fetchWithoutToken(`products/${productId}`, {}, 'DELETE');
    return resp;
};

const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteProduct, {
        onSuccess: (data: any) => {
            queryClient.invalidateQueries('read-products');
        },
        onError: (error: any) => {
            toast.error('An error occurred deleting the product.', {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'dark',
            });
        },
    });
};

export default useDeleteProduct;
