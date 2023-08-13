import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const {
    isLoading: loading,
    data: students = [],
    refetch,
  } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await fetch(
        "https://iron-fist-server-ten.vercel.app/students"
      );
      return res.json();
    },
  });
  return [students, loading, refetch];
};

export default useStudent;
