import { useQuery } from "react-query";

const usePaddhosuchi = () => {
  const {data: paddhosuchi = [], isLoading: loading, refetch: refetch} = useQuery({
    queryKey: ['paddhosuchi'],
    queryFn: async() => {
      const res = await fetch('https://school-spsg.onrender.com/paddhosuchi')
      return res.json();
    }
  })

  return [paddhosuchi, loading, refetch]
}

export default usePaddhosuchi;