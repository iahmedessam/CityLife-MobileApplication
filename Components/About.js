import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { DataContext } from "../Context/Data";
// import { SliderBox } from "react-native-image-slider-box";
// import Carousel from 'react-native-reanimated-carousel';
import uuid from "react-native-uuid";
import { Dimensions } from "react-native";

export default function About() {
  const { ImgsArr } = useContext(DataContext);
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={styles.textAbout}>About </Text>
        <Image
          style={styles.topImg}
          source={{
            uri: "https://www.talaatmoustafa.com/Upload/43alrehab%201%20850%20x%20350%20px.jpg",
          }}
        ></Image>
        <Text style={styles.textAbout}>A New Vision For Life In Egypt</Text>
        <Text style={styles.textP}>
          The first fully-fledged community, creating a comprehensive integrated
          residential scheme within the New Cairo plan. AL-Rehab is the hub of
          New Cairo, located only ten minutes away from Heliopolis and Nasr City
          and twenty minutes from Downtown Cairo.
        </Text>

        <Text style={styles.textP}>
          AL-Rehab City covers a total area of 10 million m2 planned to
          accommodate 200 thousand residents. The city comprises ten phases from
          which nine are established, offering different types of residential
          units that vary from apartment to villa accommodations, in addition to
          a wide variety of amenities.
        </Text>

        <Text style={styles.textP}>
          Al Rehab is designed to accommodate 32,385 Apartment and 3741 Villas.
          Moreover, Al Rehab enjoys a fully integrated services plan including
          but not limited to commercial markets, shopping Malls, Food courts,
          offering educational mix from International, National, and
          experimental Schools, A Sporting and Social Club, 4 Medical Centers,
          An Internal and external Transportation Network, Banks and Money
          Exchange Services.
        </Text>
        <Text style={styles.textAbout}>Al-Rehab Images Gallery: </Text>
        <View style={{ backgroundColor: "white", height: 25 }}></View>
        <ScrollView horizontal={true} style={{
          marginHorizontal:17,
          marginBottom:10
        }}>
          {ImgsArr.map((img) => (
            <Image
              key={uuid.v4()}
              source={{ uri: img }}
              style={styles.bottomImg}
            ></Image>
          ))}
        </ScrollView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  textAbout: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 18,
    color: "#09913C",
  },
  topImg: {
    width: "90%",
    height: 200,
    marginHorizontal: 17,
    borderRadius: 5,
    marginBottom: 10,
  },
  textP: {
    marginVertical: 5,
    marginHorizontal: 17,
  },
  bottomImg: {
    width: Dimensions.get("window").width,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

//   <SliderBox
// //   ImageComponent={FastImage}
//   images={ImgsArr}
//   sliderBoxHeight={200}
// //   onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
// //   dotColor="#FFEE58"
// //   inactiveDotColor="#90A4AE"
// //   paginationBoxVerticalPadding={20}
//   autoplay
//   circleLoop
//   resizeMethod={'resize'}
//   resizeMode={'cover'}
// //   paginationBoxStyle={{
// //     position: "absolute",
// //     bottom: 0,
// //     padding: 0,
// //     alignItems: "center",
// //     alignSelf: "center",
// //     justifyContent: "center",
// //     paddingVertical: 10
// //   }}
// //   dotStyle={{
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     marginHorizontal: 0,
// //     padding: 0,
// //     margin: 0,
// //     backgroundColor: "rgba(128, 128, 128, 0.92)"
// //   }}
//   ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
// //   imageLoadingColor="#2196F3"
// />
