import { useQuery } from "@tanstack/react-query";
const useClass = () => {
  const {
    isLoading: loading,
    data: classes = [],
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    },
  });
  return [classes, loading, refetch];
};

export default useClass;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const useClass = () => {
//   const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/classes")
//       .then((res) => res.json())
//       .then((data) => {
//         setClasses(data);
//         console.log(data);
//         setLoading(false);
//       });
//   }, []);
//   return [classes, loading];
// };

// export default useClass;
