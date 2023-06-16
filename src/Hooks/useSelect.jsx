import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxios';
import useAuth from './useAuth';

const useSelect = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: select = [] } = useQuery({
        queryKey: ['selects', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selects?email=${user?.email}`)
            return res.data;
        },
    })

    return [select, refetch]

}
export default useSelect;