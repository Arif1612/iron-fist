import { useQuery } from "@tanstack/react-query";

import React from "react";

const useInstructor = () => {
  const {
    isLoading: loading,
    isError,
    data: instructors = [],
    error,
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
