import { useQuery } from 'react-query';
import { fetchWithoutToken } from '../helpers/fetch';

const readOrder = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return fetchWithoutToken(endpoint);
};

const useReadOrder = (endpoint: string) => {
    return useQuery(['read-order', endpoint], readOrder, {
        refetchInterval: 60000,
        refetchIntervalInBackground: true,
    });
};

export default useReadOrder;
