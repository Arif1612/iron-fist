import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {
    isLoading: loading,
    data: instructors = [],
    refetch,
  } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  return [instructors, loading, refetch];
};

export default useInstructor;
