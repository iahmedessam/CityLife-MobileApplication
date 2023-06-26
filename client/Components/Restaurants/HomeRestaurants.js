import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Restaurants from './Restaurants';
import Fried from './fried';
import Pizza from './pizza';
import Shawarma from './shawarma';
import Seafood from './seafood';
import Orientalfood from './orientalfood';
import Fastfood from './fastfood';

export default function HomeRestaurants() {

    const [showAll, setShowAll] = useState(true);
    const [showShawarma, setShowShawarma] = useState(false);
    const [showSeafood, setShowSeafood] = useState(false);
    const [showFastfood, setShowFastfood] = useState(false);
    const [showOriental, setShowOriental] = useState(false);
    const [showFried, setShowFried] = useState(false);
    const [showPizza, setShowPizza] = useState(false);


    const handleAllPress = () => {
      setShowShawarma(false);
      setShowFastfood(false);
      setShowFried(false);
      setShowPizza(false);
      setShowOriental(false);
      setShowSeafood(false);
      setShowAll(true);
    };

    const handleShawarmaPress = () => {
      setShowShawarma(true);
      setShowFastfood(false);
      setShowFried(false);
      setShowPizza(false);
      setShowOriental(false);
      setShowSeafood(false);
      setShowAll(false);
    };
    
    const handleOrientalPress = () => {
        setShowShawarma(false);
        setShowFastfood(false);
        setShowFried(false);
        setShowPizza(false);
        setShowOriental(true);
        setShowSeafood(false);
        setShowAll(false);
      };
      const handleFriedPress = () => {
        setShowShawarma(false);
        setShowFastfood(false);
        setShowFried(true);
        setShowPizza(false);
        setShowOriental(false);
        setShowSeafood(false);
        setShowAll(false);
      };
      const handleFastfoodPress = () => {
        setShowShawarma(false);
        setShowFastfood(true);
        setShowFried(false);
        setShowPizza(false);
        setShowOriental(false);
        setShowSeafood(false);
        setShowAll(false);
      };
      const handlePizzaPress = () => {
        setShowShawarma(false);
        setShowFastfood(false);
        setShowFried(false);
        setShowPizza(true);
        setShowOriental(false);
        setShowSeafood(false);
        setShowAll(false);
      };
      const handleSeafoodPress = () => {
        setShowShawarma(false);
        setShowFastfood(false);
        setShowFried(false);
        setShowPizza(false);
        setShowOriental(false);
        setShowSeafood(true);
        setShowAll(false);
      };

  return (
    <>
     {/* <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 0 : 0, padding: 15 }}> */}
     {/* <View style={{ flex: 1, borderRadius:20}}> */}

      {/* tgrobt fixed navbar fashla */}
      {/* <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButton} onPress={() => setShowAll(true)}>
          <Text style={styles.navbarButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleOrientalPress}>
          <Text style={styles.navbarButtonText}>Oriental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleFriedPress}>
          <Text style={styles.navbarButtonText}>Fried</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handlePizzaPress}>
          <Text style={styles.navbarButtonText}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleSeafoodPress}>
          <Text style={styles.navbarButtonText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleShawarmaPress}>
          <Text style={styles.navbarButtonText}>Shawarma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarButton} onPress={handleFastfoodPress}>
          <Text style={styles.navbarButtonText}>Fastfood</Text>
        </TouchableOpacity>
      </View> */}

      <ScrollView horizontal={false}>
      <ScrollView contentContainerStyle={{  backgroundColor:"white"}}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        indicatorStyle="white" >
        <View style={[styles.imageContainer]}>

        <TouchableOpacity
            style={styles.container}
            onPress={handleAllPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/alldishes.png")} style={styles.image} />
              <Text style={styles.imageTitle}>All</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={handleOrientalPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/oriental.png")} style={styles.image} />
              <Text style={styles.imageTitle}>Oriental</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity            style={styles.container}
            onPress={handleFriedPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/fired.png")} style={styles.image} />
              <Text style={styles.imageTitle}>Fried</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={handlePizzaPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/pizza.png")} style={styles.image} />
              <Text style={styles.imageTitle}>Pizza</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={handleSeafoodPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/seafood.png")} style={styles.image} />
              <Text style={styles.imageTitle}>Seafood</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={handleShawarmaPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/shawarma.png")} style={styles.image} />
              <Text style={styles.imageTitle}>Shawarma</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={handleFastfoodPress} >
            <View style={styles.myViewStyle}>
              <Image source={require("../../assets/fastfood.png")} style={styles.image} />
              <Text style={styles.imageTitle}>Fastfood</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
      <View style={styles.hr}></View>

        {showAll && <Restaurants />}
        {showShawarma && <Shawarma />}
        {showSeafood && <Seafood />}
        {showFastfood && <Fastfood />}
        {showOriental && <Orientalfood />}
        {showFried && <Fried />}
        {showPizza && <Pizza />}

      {/* </View> */}
      {/* </SafeAreaView> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
//   navbarButton: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderBottomWidth: 2,
//     borderBottomColor: '#fff',
//     paddingHorizontal: 10,
//   },
//   navbarButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     paddingHorizontal: 15,
//   }

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  container: {
    
    // flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderRightWidth:0,
    borderRightColor:"#3F72AF",
  
  },
  hr:{
    borderBottomWidth:0.5,
    borderBottomColor:"#3F72AF"
  },
  myViewStyle: {
    // flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    padding:5,
    // marginHorizontal:5,
    width:95,
    // justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#3F72AF',
    shadowOffset: {
                  width: 0,
                  height: 2,
                  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
    marginTop:0,
    marginBottom:0
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 100,
    marginTop:10
  },
  imageTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
});