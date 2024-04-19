import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(false);

  const Fetchdata = async () => {
    try {
      setisloading(true);
      await fetch("http://192.168.1.3:5000/data")
        .then((res) => {
          return res;
        })
        .then((res) => {
          setdata(res);
        });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } finally {
      setisloading(false);
    }
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  const refresh = () => {
    Fetchdata();
  };
  return { data, isloading, refresh };
};

export default useFetch;
