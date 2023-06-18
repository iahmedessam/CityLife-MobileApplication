import axios from 'axios';
import useAxios from 'axios-hooks';
import React, { createContext, useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const DataContext = createContext();

export default function Data(props) {

  // Images About Slider
  const ImgsArr = useMemo(
    () => [
      "https://www.talaatmoustafa.com/Upload/75rehab%201.jpg",
      "https://www.talaatmoustafa.com/Upload/8rehab%202.jpg",
      "https://www.talaatmoustafa.com/Upload/72rehab%203.jpg",
      "https://www.talaatmoustafa.com/Upload/27rehab%208.jpg",
      "https://www.talaatmoustafa.com/Upload/4rehab%204.jpg",
      "https://www.talaatmoustafa.com/Upload/21rehab%205.jpg",
      "https://www.talaatmoustafa.com/Upload/16rehab%206.jpg",
      "https://www.talaatmoustafa.com/Upload/10rehab%209.jpg",
      "https://www.talaatmoustafa.com/Upload/80rehab%2010.jpg",
      "https://www.talaatmoustafa.com/Upload/14rehab%2011.jpg",
      "https://www.talaatmoustafa.com/Upload/23rehab%2015.jpg",
      // "https://www.talaatmoustafa.com/Upload/77rehab%2014.jpg",
      // "https://www.talaatmoustafa.com/Upload/54rehab%2013.jpg",
      // "https://www.talaatmoustafa.com/Upload/35rehab%2019.jpg",
      // "https://www.talaatmoustafa.com/Upload/15rehab%2017.jpg",
      // "https://www.talaatmoustafa.com/Upload/3rehab%2020.jpg",
      // "https://www.talaatmoustafa.com/Upload/85rehab%2018.jpg",
      // "https://www.talaatmoustafa.com/Upload/61rehab%2021.jpg",
      // "https://www.talaatmoustafa.com/Upload/41rehab%2023.jpg",
      // "https://www.talaatmoustafa.com/Upload/0rehab%2022.jpg",
    ],
    []
  );


  const [gyms, setGyms] = useState([]);




  // useEffect(() => {
  //   axios.get("http://localhost:3005/sports")
  //   .then((res) => {
  //     setGyms(res.data);
  //   });
  // }, []);
  // console.warn(gyms)

  const ExchangedData = { ImgsArr,gyms };

  return (
    <DataContext.Provider value={ExchangedData}>
      {props.children}
    </DataContext.Provider>
  );
}