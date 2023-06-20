import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { DataContext } from '../Context/Data'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';



export default function Sports() {
  const {gyms} = useContext(DataContext)


  return (
  <FlatList
  data={gyms}
  renderItem={({item})=><>
      <View style={styles.container}>
      <Image
        style = {styles.logo}
         source={{
          uri : `${item.logo}`
        }}></Image>
        
        <Text>
          {item.name}
        </Text>
        <Text>
          {item.address}
        </Text>
        <FontAwesome name="phone" size={24} color="black" ></FontAwesome>
        <Ionicons name="location-sharp" size={24} color="black" />
      </View>
  
  </>}
  keyExtractor={item=> item.id}
  >

  </FlatList>
  
  )
}

const styles = StyleSheet.create({
  container :{
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 8,

  },
   logo :{
    width: 50,
    height:50,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    backgroundColor: '#FFF',
   },
})