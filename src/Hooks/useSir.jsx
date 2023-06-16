import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useSir = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isSir, isLoading: isSirLoading} = useQuery({
        queryKey: ['isSir', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is sir response', res)
            return res.data.instructor;
        }
    })
    return [isSir, isSirLoading]
}
export default useSir;