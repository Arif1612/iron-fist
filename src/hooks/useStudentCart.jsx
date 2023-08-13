import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useStudentCart = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: studentCarts = [] } = useQuery({
    queryKey: ["student-carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/student-carts?email=${user?.email}`);
      return res.data;
    },
    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://iron-fist-server-ten.vercel.app/student-carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
  });
  return [studentCarts, refetch];
};

export default useStudentCart;
