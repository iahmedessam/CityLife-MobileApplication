import useAxios from "axios-hooks";
import React, { createContext, useMemo } from "react";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function Data(props) {
  const baseUrl = "https://twenty-crabs-know.loca.lt/";

  //Fonts
  const [fontsLoaded] = useFonts({
    regular: require("../assets/Fonts/Aleo-Regular.ttf"),
    bold: require("../assets/Fonts/Aleo-Bold.ttf"),
    boldItalic: require("../assets/Fonts/Aleo-BoldItalic.ttf"),
    italic: require("../assets/Fonts/Aleo-Italic.ttf"),
    light: require("../assets/Fonts/Aleo-Light.ttf"),
    lightItalic: require("../assets/Fonts/Aleo-LightItalic.ttf"),
  });

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
      "https://www.talaatmoustafa.com/Upload/77rehab%2014.jpg",
      "https://www.talaatmoustafa.com/Upload/54rehab%2013.jpg",
      "https://www.talaatmoustafa.com/Upload/35rehab%2019.jpg",
      "https://www.talaatmoustafa.com/Upload/15rehab%2017.jpg",
      "https://www.talaatmoustafa.com/Upload/3rehab%2020.jpg",
      "https://www.talaatmoustafa.com/Upload/85rehab%2018.jpg",
      "https://www.talaatmoustafa.com/Upload/61rehab%2021.jpg",
      "https://www.talaatmoustafa.com/Upload/41rehab%2023.jpg",
      "https://www.talaatmoustafa.com/Upload/0rehab%2022.jpg",
    ],
    []
  );

  //Getting useAxios data from json server
  const [{ data: transportation, loadingTrans, errorTrans }] = useAxios({
    url: `${baseUrl}/transportation`,
  });

  const [{ data: banks, loadingBanks, errorBanks }] = useAxios({
    url: `${baseUrl}/banks`,
  });

  const [{ data: sports, loadingSports, errorSports }] = useAxios({
    url: `${baseUrl}/sports`,
  });

  const [{ data: cinema, loadingCinema, errorCinema }] = useAxios({
    url: `${baseUrl}/cinema`,
  });

  const [{ data: centers, loadingCenters, errorCenters }] = useAxios({
    url: `${baseUrl}/centers`,
  });

  const [{ data: fashion, loadingfashion, errorfashion }] = useAxios({
    url: `${baseUrl}/fashion`,
  });

  const [{ data: maintenance, loadingmaintenance, errormaintenance }] = useAxios({
    url: `${baseUrl}/maintenance`,
  });

  const [{ data: homeservices, loadinghomeservices, errorhomeservices }] = useAxios({
    url: `${baseUrl}/home_services`,
  });

  const [{ data: shopping, loadingshopping, errorshopping }] = useAxios({
    url: `${baseUrl}/shopping`,
  });

  const [{ data: markets, loadingmarkets, errormarkets }] = useAxios({
    url: `${baseUrl}/markets`,
  });

  //Search Bar management
  const [All, setAll] = useState({})
  const [categoryNames, setCategoryNames] = useState([])
  const [AllName, setAllName] = useState([])
  const [AllIDs, setAllIDs] = useState([])
  const [AllIDsNames, setAllIDsNames] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/db`)
      .then((res) => {
        setAll(res.data)
      })
  }, [])

  useEffect(() => {
    let NamesArr = []
    let IDsArr = []
    let NamesIDsArr = []
    setCategoryNames([...Object.keys(All)])
    for (let category of Object.values(All)) {
      for (let ele of category) {
        NamesArr.push(ele.name)
        IDsArr.push(ele.id)
        NamesIDsArr.push({ id: ele.id, name: ele.name })
      }
    }
    setAllName(NamesArr)
    setAllIDs(IDsArr)
    setAllIDsNames(NamesIDsArr)
  }, [All])


  const ExchangedData = {
    All,
    categoryNames,
    AllName,
    AllIDs,
    AllIDsNames,
    ImgsArr,
    fontsLoaded,
    transportation, loadingTrans, errorTrans,
    banks, loadingBanks, errorBanks,
    sports, loadingSports, errorSports,
    cinema, loadingCinema, errorCinema,
    centers, loadingCenters, errorCenters,
    fashion, loadingfashion, errorfashion,
    maintenance, loadingmaintenance, errormaintenance,
    homeservices, loadinghomeservices, errorhomeservices,
    shopping, loadingshopping, errorshopping,
    markets, loadingmarkets, errormarkets,
  };

  return (
    <DataContext.Provider value={ExchangedData}>
      {props.children}
    </DataContext.Provider>
  );
}
