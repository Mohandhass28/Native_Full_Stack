"use client";

import React, { useEffect, useState } from "react";

const UseFetch = () => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(false);

  const Fetchdata = async () => {
    try {
      setisloading(true);
      await fetch("http://localhost:5000/data")
        .then((res) => {
          return res.Response;
        })
        .then((res) => {
          setdata(res);
        });
    } catch (error) {
      console.log(error);
      // throw new Error(error);
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

export default UseFetch;
