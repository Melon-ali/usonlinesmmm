import { useQuery } from "react-query";

const useRutings = () => {
    const {data: rutings = [], isLoading: loading, refetch: refetch} = useQuery({
        queryKey: ['notices'],
        queryFn: async() => {
          const res = await fetch('https://school-spsg.onrender.com/notices')
          return res.json();
        }
    });
    return [rutings, loading, refetch]
}

export default useRutings