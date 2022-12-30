import { useQuery } from 'react-query';
import { fetchWithoutToken } from '../helpers/fetch';

const readProduct = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return fetchWithoutToken(endpoint);
};

const useReadProduct = (endpoint: string) => {
    return useQuery(['read-product', endpoint], readProduct);
};

export default useReadProduct;
