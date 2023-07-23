import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const {
    isLoading: loading,
    data: students = [],
    refetch,
  } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/students");
      return res.json();
    },
  });
  return [students, loading, refetch];
};

export default useStudent;
