import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import React from 'react'
import useAxios from 'axios-hooks'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from'../Styles'
import { useContext } from 'react';
import { DataContext } from '../Context/Data';



export default function Sports() {
  const {fontsLoaded,sports, loadingSports, errorSports} = useContext(DataContext)

  if (loadingSports) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 18 }}>loading...</Text></View>;
  }

  if (errorSports) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text> <Icon name="exclamation-triangle" size={40} color="red" /></Text></View>;
  }

  //Phone Function
  function handlePhonePress(number) {
    const supported = Linking.canOpenURL(`tel:${number}`);
    if (supported) {
      Linking.openURL(`tel:${number}`);
    }
  }

  //Feedback Function
  function handlePress() {
  }

  return <>
    <ScrollView>
      {sports.map((ele) =>
        <View style={styles.card} key={ele.id}>

          {/* Image */}
          <Image style={styles.img} source={{ uri: ele.img1 }}></Image>

          {/* Body */}
          <View style={[styles.content,{alignItems:"center"}]}>
            <Text style={[styles.title]}>{ele.name}</Text>
            <Text style={[styles.overview,{fontFamily: fontsLoaded? 'boldItalic' : null}]}>Address: {ele.address}</Text>
          </View>

          {/* Buttons Section */}
          <View style={styles.buttonsSection}>
            <View style={styles.buttons}>
              <Text style={styles.buttonsText}>{ele.Rating} <Icon name="star" size={15} color="#C3801B" /></Text>
              <TouchableOpacity onPress={() => handlePhonePress(ele.number)}>
                <Text style={styles.buttonsText}>Phone <Icon name="phone" size={15} color="white" /></Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => Linking.openURL(ele.website)}>
                <Text style={styles.buttonsText}>Website</Text>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => Linking.openURL(ele.location)}>
                <Text style={styles.buttonsText}>Location <Icon name="map-marker" size={15} color="white" /></Text>
              </TouchableOpacity>
            </View>
            {/* Feedback Button */}
            <TouchableOpacity style={styles.feedback} onPress={handlePress}>
              <Text style={styles.feedbackText}>Feedback</Text>
            </TouchableOpacity>

          </View>
        </View>)}
    </ScrollView>
  </>
};


// import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
// import React from 'react'
// import { useContext } from 'react'
// import { FlatList } from 'react-native-gesture-handler'
// import { DataContext } from '../Context/Data'
// import { Ionicons,FontAwesome } from '@expo/vector-icons';
// import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';



// export default function Sports() {
//   const {gyms} = useContext(DataContext)


//   return (
//   <FlatList
//   data={gyms}
//   renderItem={({item})=><>
//       <View style={styles.container}>
//       <Image
//         style = {styles.logo}
//          source={{
//           uri : `${item.logo}`
//         }}></Image>
        
//         <Text>
//           {item.name}
//         </Text>
//         <Text>
//           {item.address}
//         </Text>
//         <FontAwesome name="phone" size={24} color="black" ></FontAwesome>
//         <Ionicons name="location-sharp" size={24} color="black" />
//       </View>
  
//   </>}
//   keyExtractor={item=> item.id}
//   >

//   </FlatList>
  
//   )
// }

// const styles = StyleSheet.create({
//   container :{
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3,
//     elevation: 5,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     margin: 8,

//   },
//    logo :{
//     width: 50,
//     height:50,
//     borderRadius: 50,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3,
//     backgroundColor: '#FFF',
//    },
// })