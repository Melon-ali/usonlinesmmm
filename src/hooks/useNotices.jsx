import { useQuery } from "react-query";

const useNotices = () => {
  const {data: notices = [], isLoading: loading, refetch: refetch} = useQuery({
    queryKey: ['notices'],
    queryFn: async() => {
      const res = await fetch('https://school-spsg.onrender.com/applications')
      return res.json();
    }
  })

  return [notices, loading, refetch]
}

export default useNotices;