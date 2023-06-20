import { View, Text } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { DataContext } from '../Context/Data'
import { useState } from 'react'
import { useEffect } from 'react'
import useAxios from 'axios-hooks'

export default function Sports() {
  // const {gyms} = useContext(DataContext)
  const [gyms, setGyms] = useState([]);

  useEffect(()=>{
    const [{data,error,loading}] = useAxios({
      url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    })
    setGyms (data)
  },[])
  // useEffect(()=>{
  //  fetch(" http://localhost:3006/sports")
  //  .then((res)=>{
  //   return res.json()
  //  })
  //  .then((data)=>{
  //   setGyms (data)
  //  }) 
  // },[])


  console.warn(gyms)


  return (
  
  <View>
      <Text>Sports</Text>
    </View>
  
  )
}