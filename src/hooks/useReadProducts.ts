import { useQuery } from 'react-query';
import { fetchWithoutToken } from '../helpers/fetch';

const useReadProducts = (endpoint: string) => {
    return useQuery(['read-products', endpoint], () =>
        fetchWithoutToken(endpoint)
    );
};

export default useReadProducts;
