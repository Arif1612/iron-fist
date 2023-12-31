import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useSpecificInstructor = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading: loading,
    data: instructor = [],
    refetch,
  } = useQuery({
    queryKey: ["instructor", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://iron-fist-server-ten.vercel.app/instructors/${user?.email}`
      );
      return res.json();
    },
  });
  return [instructor, loading, refetch];
};

export default useSpecificInstructor;
