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
      url:"http://localhost:3005/sports"
    })
    setGyms (data)
  },[])

  console.warn(gyms)


  return (
  
  <View>
      <Text>Sports</Text>
    </View>
  
  )
}