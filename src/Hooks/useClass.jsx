import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxios';
import useAuth from './useAuth';

const useClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: select = [] } = useQuery({
        queryKey: ['classes', user?.email],
        
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            return res.data;
        },
    })

    return [select, refetch]

}
export default useClass;