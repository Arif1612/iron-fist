import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(data);
        setLoading(false);
      });
  }, []);
  return [classes, loading];
};

export default useClass;
