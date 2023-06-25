import useAxios from "axios-hooks";
import React, { createContext, useCallback, useMemo } from "react";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import jwtDecode from 'jwt-decode';
import uuid from "react-native-uuid";


export const DataContext = createContext();

export default function Data(props) {
  const baseUrl = "https://application-mock-server.loca.lt";

    //Search Bar management
    const [All, setAll] = useState({})
    // const [categoryNames, setCategoryNames] = useState([])
    // const [AllName, setAllName] = useState([])
    // const [AllIDs, setAllIDs] = useState([])
    const [AllIDsNames, setAllIDsNames] = useState([])
  
    useEffect(() => {
      axios.get(`${baseUrl}/db`)
        .then( (res) => {
          setAll(res.data)
        })
    }, [])
  
    useEffect(() => {
      // let NamesArr = []
      // let IDsArr = []
      let NamesIDsArr = []
      // setCategoryNames([...Object.keys(All)])
      for (let category of Object.values(All)) {
        for (let ele of category) {
          // NamesArr.push(ele.name)
          // IDsArr.push(ele.id)
          NamesIDsArr.push({ id: ele.id, name: ele.name })
        }
      }
      // setAllName(NamesArr)
      // setAllIDs(IDsArr)
      setAllIDsNames(NamesIDsArr)
      // console.warn(AllIDsNames)
    }, [All])

  //Fonts
  const [fontsLoaded] = useFonts({
    regular: require("../assets/Fonts/Aleo-Regular.ttf"),
    bold: require("../assets/Fonts/Aleo-Bold.ttf"),
    boldItalic: require("../assets/Fonts/Aleo-BoldItalic.ttf"),
    italic: require("../assets/Fonts/Aleo-Italic.ttf"),
    light: require("../assets/Fonts/Aleo-Light.ttf"),
    lightItalic: require("../assets/Fonts/Aleo-LightItalic.ttf"),
  });

      // Set userdata Token
      const [userData, setUserData] = useState(null);
      const saveUserData = async () => {
        try {
          const encodedToken = await AsyncStorage.getItem('token');
          const decodedToken = jwtDecode(encodedToken);
          setUserData(decodedToken);
          return decodedToken;
        } catch (error) {
          console.error('Error saving user data:', error);
        }
      };

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

  const PayArr = useMemo(() => [
    { name: "City Maintenance Bills", fees: "10000" },
    { name: "El-Rehab club subscription", fees: "2000" },
    { name: "Water Bills", fees: "900" },
    { name: "Car Washing subscription", fees: "200" },
  ], []);

  //Getting useAxios data from json server
  const [{ data: transportation, loadingTrans, errorTrans }] = useAxios({
    url: `${baseUrl}/transportation`,
  });
  // Banks Data
  const [{ data: banks, loadingBanks, errorBanks }] = useAxios({
    url: `${baseUrl}/banks`,
  });
  // Sports Data
  const [{ data: sports, loadingSports, errorSports }] = useAxios({
    url: `${baseUrl}/sports`,
  });
  // Cinema Data
  const [{ data: cinema, loadingCinema, errorCinema }] = useAxios({
    url: `${baseUrl}/cinema`,
  });
  // Restaurants Data
  const [{ data: orientalfood, loadingOrientalfood, errorOrientalfood }] = useAxios({
    url: `${baseUrl}/orientalfood`,
  });

  const [{ data: fastfood, loadingFastfood, errorFastfood }] = useAxios({
    url: `${baseUrl}/fastfood`,
  });

  const [{ data: seafood, loadingSeafood, errorSeafood }] = useAxios({
    url: `${baseUrl}/seafood`,
  });

  const [{ data: pizza, loadingPizza, errorPizza }] = useAxios({
    url: `${baseUrl}/pizza`,
  });

  const [{ data: fried, loadingFried, errorFried }] = useAxios({
    url: `${baseUrl}/fried`,
  });

  const [{ data: shawarma, loadingShawarma, errorShawarma }] = useAxios({
    url: `${baseUrl}/shawarma`,
  });

  const allRestaurants = [
    orientalfood,
    fastfood,
    seafood,
    pizza,
    fried,
    shawarma,
  ].reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);
  
  // Education Data Fetching
  const [{ data: schools, loadingSchools, errorSchools }] = useAxios({
    url: `${baseUrl}/schools`,
  });
  
  const [{ data: kindergarten, loadingKindergarten, errorKindergarten }] = useAxios({
    url: `${baseUrl}/kindergarten`,
  });
  
  //Health Data Fetching
  const [{ data: pharmacies, loadingPharmacy, errorPharmacy }] = useAxios({
    url: `${baseUrl}/pharmacy`,
  });
  const [{ data: centers, loadingCenters, errorCenters }] = useAxios({
    url: `${baseUrl}/centers`,
  });
  // fashion Data
  const [{ data: fashion, loadingfashion, errorfashion }] = useAxios({
    url: `${baseUrl}/fashion`,
  });
  // maintenance Data
  const [{ data: maintenance, loadingmaintenance, errormaintenance }] = useAxios({
    url: `${baseUrl}/maintenance`,
  });
  // home services Data
  const [{ data: homeservices, loadinghomeservices, errorhomeservices }] = useAxios({
    url: `${baseUrl}/home_services`,
  });
  // shopping Data
  const [{ data: shopping, loadingshopping, errorshopping }] = useAxios({
    url: `${baseUrl}/shopping`,
  });
  // markets Data
  const [{ data: markets, loadingmarkets, errormarkets }] = useAxios({
    url: `${baseUrl}/markets`,
  });

 // Dashboard [ Feed Back , Complain ]


 const addFeedback = 
   async (AddedObj,message) => {
     let ID = uuid.v4().slice(0,4)
    await axios.post(`${baseUrl}/feedback`, {...AddedObj,id: ID ,place: message, type:"FeedBack"});
   }

 const addComplain = 
  async (AddedObj) => {
    let ID = uuid.v4().slice(0, 4);
      await axios.post(`${baseUrl}/feedback`, { ...AddedObj, id: ID, type: "Complain" });
   }

//  const addContact = useCallback(
//    (AddedObj) => {
//      let ID = uuid().slice(0,4)
//      axios.post("http://localhost:3005/feedback", {...AddedObj,id: ID ,type:"Contact us"});
//      setDashBoardFeedback([...dashBoardFeedback, {...AddedObj,id: ID, type:"Contact us"}]);
//    },
//    [dashBoardFeedback]
//  );





  const ExchangedData = {
    addFeedback,
    addComplain,
    All,
    // categoryNames,
    // AllName,
    // AllIDs,
    AllIDsNames,
    ImgsArr,
    fontsLoaded,
    transportation,
    loadingTrans,
    errorTrans,
    banks,
    loadingBanks,
    errorBanks,
    sports,
    loadingSports,
    errorSports,
    cinema,
    loadingCinema,
    errorCinema,
    orientalfood,
    loadingOrientalfood,
    errorOrientalfood,
    fastfood,
    loadingFastfood,
    errorFastfood,
    seafood,
    loadingSeafood,
    errorSeafood,
    pizza,
    loadingPizza,
    errorPizza,
    fried,
    loadingFried,
    errorFried,
    shawarma,
    loadingShawarma,
    errorShawarma,
    allRestaurants,
    schools,
    loadingSchools,
    errorSchools,
    kindergarten,
    loadingKindergarten,
    errorKindergarten,
    pharmacies,
    errorPharmacy,
    loadingPharmacy,
    centers,
    errorCenters,
    loadingCenters,
    fashion, loadingfashion, errorfashion,
    maintenance, loadingmaintenance, errormaintenance,
    homeservices, loadinghomeservices, errorhomeservices,
    shopping, loadingshopping, errorshopping,
    markets, loadingmarkets, errormarkets,
    PayArr,
    userData, setUserData, saveUserData
  };

  return (
    <DataContext.Provider value={ExchangedData}>
      {props.children}
    </DataContext.Provider>
  );
}
