import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import React from "react";
import useAxios from "axios-hooks";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Styles";
import { useContext } from "react";
import { DataContext } from "../Context/Data";
import { FlatList } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cinema() {
  const { fontsLoaded,cinema, loadingCinema, errorCinema } = useContext(DataContext);


  if (loadingCinema) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>loading...</Text>
      </View>
    );
  }

  if (errorCinema) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          {" "}
          <Icon name="exclamation-triangle" size={40} color="red" />
        </Text>
      </View>
    );
  }

  //Phone Function
  function handlePhonePress(number) {
    const supported = Linking.canOpenURL(`tel:${number}`);
    if (supported) {
      Linking.openURL(`tel:${number}`);
    }
  }

  //Feedback Function
  function handlePress() {}
  return (
    <FlatList
      data={cinema}
      renderItem={({ item }) => (
        <View style={Styles.card} key={item.id}>
          {/* Image */}
          <Image style={Styles.img} source={{ uri: item.img }}></Image>

          {/* Body */}
          <View style={[Styles.content, { alignItems: "center" }]}>
            <Text style={[Styles.title]}>{item.name}</Text>
            <Text
              style={[
                Styles.overview,
                { fontFamily: fontsLoaded ? "boldItalic" : null },
              ]}
            >
              Type: {item.type}
            </Text>
            <Text
              style={[
                Styles.overview,
                { fontFamily: fontsLoaded ? "boldItalic" : null },
              ]}
            >
              Language: {item.language}
            </Text>
            <Text
              style={[
                Styles.overview,
                { fontFamily: fontsLoaded ? "boldItalic" : null },
              ]}
            >
              Country: {item.country}
            </Text>
            <Text
              style={[
                Styles.overview,
                { fontFamily: fontsLoaded ? "boldItalic" : null },
              ]}
            >
              Cast: {item.actors}
            </Text>
          </View>

          {/* Buttons Section */}
          <View style={Styles.buttonsSection}>
            <View style={Styles.buttons}>
              <Text style={Styles.buttonsText}>
                {item.Rating} <Icon name="star" size={15} color="#C3801B" />
              </Text>
            </View>
            {/* Feedback Button */}
            <TouchableOpacity style={Styles.feedback} onPress={handlePress}>
              <Text style={Styles.feedbackText}>Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
      // numColumns={2}
      ListHeaderComponent={
        <>
         <Text style={{fontSize:30,fontFamily:fontsLoaded ? "bold" : null}}>
            Mall 1 Cinema
          </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps/place/Al+Rehab+Cinema/@30.059036,31.4958799,15z/data=!4m6!3m5!1s0x14581888bcacb1bb:0x417640e69aeaea98!8m2!3d30.059036!4d31.4958799!16s%2Fg%2F1tdhvt25?entry=ttu"
            )
          }
        >
          <Text style={{fontSize:20}}>
            Location <Icon name="map-marker" size={15}  />
          </Text>
        </TouchableOpacity>
        </>
      }
      ListHeaderComponentStyle={Styles.header}

      // ListFooterComponent={<Text>kkkkk</Text>}

    ></FlatList>
  );
}

const Styles = StyleSheet.create({
  card: {
    width: "90%",
    marginLeft: "5%",
    marginVertical: 15,
    borderWidth: 0,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#112D4E",
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    flex: 1,
  },
  img: {
    flex: 1,
    width: "100%",
    height: 300,
    resizeMode: "stretch",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  content: {
    padding: 10,
  },
  overview: {
    lineHeight: 22,
    opacity: 0.6,
    padding: 3,
  },
  title: {
    color: "#3F72AF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  buttonsSection: {
    backgroundColor: "#112D4E",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
  buttonsText: {
    color: "white",
  },
  feedback: {
    backgroundColor: "white",
    width: "50%",
    borderRadius: 5,
    marginLeft: "25%",
    marginBottom: 10,
    marginTop: 5,
    padding: 8,
  },
  feedbackText: {
    color: "#3F72AF",
    fontSize: 16,
    textAlign: "center",
  },
  header:{
    flex:1,
    marginLeft:20,
  }
});
