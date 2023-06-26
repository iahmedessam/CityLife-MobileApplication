import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { DataContext } from '../Context/Data'

export default function Profile() {
  const [userData] = useContext(DataContext)
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}