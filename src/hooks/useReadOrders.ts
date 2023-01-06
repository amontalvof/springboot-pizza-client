import { useQuery } from 'react-query';
import { fetchWithoutToken } from '../helpers/fetch';

const useReadOrders = (endpoint: string) => {
    return useQuery(['read-orders', endpoint], () =>
        fetchWithoutToken(endpoint)
    );
};

export default useReadOrders;
