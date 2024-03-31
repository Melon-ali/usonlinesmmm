import { useQuery } from "react-query";

const useJobs = () => {
  const {data: jobs = [], isLoading: loading, refetch: refetch} = useQuery({
    queryKey: ['jobs'],
    queryFn: async() => {
      const res = await fetch('https://school-spsg.onrender.com/jobs')
      return res.json();
    }
  })

  return [jobs, loading, refetch]
}

export default useJobs;