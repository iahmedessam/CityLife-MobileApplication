
import React from 'react';
// import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
// import {MaterialCommunityIcons } from '@expo/vector-icons';
// import { SliderBox } from 'react-native-image-slider-box';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
// import { SliderBox } from "react-native-image-slider-box";
import AutocompleteInput from "react-native-autocomplete-input";
import { useContext } from "react";
import { DataContext } from "../Context/Data";
import { useState } from "react";
import { useEffect } from "react";
import { Video, ResizeMode } from 'expo-av';
import { useRef } from "react";
import { Dimensions } from "react-native";
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';


export default  function HomeScreen  ({ navigation }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const { AllIDsNames } =  useContext(DataContext);
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState([]);

  // console.warn(AllIDsNames)

  const images = [
    require("../assets/homeImages/slider/slider12.jpg"),
    require("../assets/homeImages/slider/slider1.jpg"),
    require("../assets/homeImages/slider/slider2.jpg"),
    require("../assets/homeImages/slider/slider3.jpg"),
    require("../assets/homeImages/slider/slider4.jpg"),
    require("../assets/homeImages/slider/slider5.jpg"),
    require("../assets/homeImages/slider/slider6.jpg"),
    require("../assets/homeImages/slider/slider1.jpg"),
  ]
  useEffect( () => {
    // console.warn(query)
    if (query.trim() === "") {
      setFilterData([]);
      return;
    }
      const selectedItem = (AllIDsNames && AllIDsNames.filter((ele) =>ele["name"]?.toLowerCase().includes(query.toLowerCase())));
    setFilterData(selectedItem);
    // console.warn(selectedItem)

  }, [query]);


  return (
    <>
      {/* Search bar */}
      <View style={styles.autocompleteContainer}>
       {/* <TextInput
         style={{
          paddingVertical: 10,
          paddingLeft: 5
        }}
        placeholder="search..."
        name="query"
        id="query"
        value={query}
        onChangeText={(val) =>
          setQuery(val)
        }
       />
      <FlatList
       data={filterData}
        // keyExtractor={({item}) => item.id}
        renderItem={ ({ item })=> (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", { id: item.id, name:item.name })
              setQuery("")
            }}
            style={{
              paddingVertical: 10,
              paddingLeft: 5
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
       >

       </FlatList> */}

        <AutocompleteInput
          style={{
          }}

          placeholder="Search..."
          data={filterData}
          value={query}
          onChangeText={(val) => setQuery(val)}
          flatListProps={{
            keyExtractor: (_, idx) => idx,
            renderItem: ({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Details", { id: item.id, name:item.name })
                  setQuery("")
                }}
                style={{
                  paddingVertical: 10,
                  paddingLeft: 5
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </View>
      <SafeAreaView
        style={{ marginTop: Platform.OS === "android" ? 0 : 0, padding: 15 }}
      >

        <ScrollView
          keyboardShouldPersistTaps='always'
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 50,
          }}
        >
          <Video
            ref={video}
            style={{
              alignSelf: 'center',
              width: Dimensions.get("window").width,
              height: 200,
            }}
            source={
              require("../assets/videos/video1.mp4")
            }

            resizeMode={ResizeMode.CONTAIN}
            isLooping
            isMuted
            shouldPlay
            useNativeControls={false}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />

          {/* services */}
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {/* Services Text */}
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 5,
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 16,
                opacity: 0.4,
              }}
            >
              Services
            </Text>

            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Banks")}
              >
                <View>
                  <Image
                    source={require("../assets/homeImages/bank2.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.text}>Banks</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Markets")}
              >
                <View>
                  <Image
                    source={require("../assets/homeImages/images.jpeg")}
                    style={styles.image}
                  />
                  <Text style={styles.text}>Markets</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Hospitals")}
              >
                <View>
                  <Image
                    source={require("../assets/homeImages/hos.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.text}>Hospital</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Education")}
              >
                <View>
                  <Image
                    source={require("../assets/homeImages/school5.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.text}>Education</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Cinema")}
              >
                <View>
                  <Image
                    source={require("../assets/homeImages/Cinema.png")}
                    style={styles.image}
                  />
                  <Text style={styles.text}>Cinema</Text>
                </View>
              </TouchableOpacity>

              {/* categories */}
              {/* categories Text*/}
              {/* <Text
                        style={{ textAlign: 'center', paddingBottom: 15, fontWeight: 'bold', fontSize: 24, marginTop: 16, opacity: 0.4 }}>
                        Categories
                    </Text> */}
              {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Maintenance Payment")}
              >
                <View>
                  <Image
                    source={require("../assets/homeImages/2.jpg")}
                    style={styles.image}
                  />
                  <Text style={styles.text}>Payment</Text>
                </View>
              </TouchableOpacity>
              {/* </View> */}
            </View>
          </View>

          {/* categories */}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* categories Text*/}
            <Text
              style={{ textAlign: 'center', paddingBottom: 15, fontWeight: 'bold', fontSize: 24, marginTop: 16, opacity: 0.4 }}>
              Categories
            </Text >

            <View style={styles.categoryContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Restaurants')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <FontAwesome5 style={{ textAlign: 'center' }} name="utensils" size={24} />
                  <Text style={{ textAlign: 'center' }}>Restaurants</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Shopping')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <MaterialCommunityIcons style={{ textAlign: 'center' }} name="cart" size={24} />
                  <Text style={{ textAlign: 'center' }}>Shopping</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Fashion')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <MaterialCommunityIcons style={{ textAlign: 'center' }} name="tshirt-crew" size={24} />
                  <Text style={{ textAlign: 'center' }}>Fashion</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Health')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <FontAwesome5 style={{ textAlign: 'center' }} name="heartbeat" size={24} />
                  <Text style={{ textAlign: 'center' }}>Health</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Sports')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <FontAwesome5 style={{ textAlign: 'center' }} name="table-tennis" size={24} />
                  <Text style={{ textAlign: 'center' }}>Sports</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Maintenance')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <FontAwesome5 style={{ textAlign: 'center' }} name="wrench" size={24} />
                  <Text style={{ textAlign: 'center' }}>Maintenance</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Home Services')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <MaterialCommunityIcons style={{ textAlign: 'center' }} name="home-variant" size={24} />
                  <Text style={{ textAlign: 'center' }}>Home Services</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Transportation')} style={styles.categoryItem}>
                <View style={styles.categoryItemContent}>
                  <MaterialCommunityIcons style={{ textAlign: 'center' }} name="truck-delivery" size={24} />
                  <Text style={{ textAlign: 'center' }}>Transportation</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryItem: {
    alignItems: "center",
    width: "50%",
    textAlign: "center",
  },
  categoryItemContent: {
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#FFF",
    borderRadius: 5,
    margin: 8,
    width: "75%",
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginRight: 18,
  },
  image: {
    width: "113%",
    aspectRatio: 1,
    marginHorizontal: 4,
    height: "100%",
    padding: 10,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    position: "relative",
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 80,
    width: "100%",
    zIndex: 1,
    marginLeft: 6
  },

  overlayContainer1: {
    position: "absolute",
    bottom: 70,
    left: 20,
    fontWeight: "bold",
    fontSize: 1000,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  overlayContainer2: {
    position: "absolute",
    bottom: 45,
    left: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  overlayContainer3: {
    position: "absolute",
    bottom: 20,
    left: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  overlayContainer4: {
    position: "absolute",
    bottom: 0,
    right: 170,
    fontWeight: "bold",
    alignSelf: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 55,
    width: 1,
    height: 30,
  },
  overlayText: {
    color: "white",
    fontSize: 16,
  },

  border: {
    color: "red",
    fontSize: 16,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: 80,
    width: '100%',
    zIndex: 1,
    left: 10,
  },
});
