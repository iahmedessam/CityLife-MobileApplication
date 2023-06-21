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

export default function Transportation() {
  const { fontsLoaded,transportation,loadingTrans,errorTrans } = useContext(DataContext);


  if (loadingTrans) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>loading...</Text>
      </View>
    );
  }

  if (errorTrans) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
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
      data={transportation}
      renderItem={({ item }) => (
        <>
          <View style={styles.card} key={item.id}>
            {/* Image */}
            <Image style={styles.img} source={{ uri: item.img1 }}></Image>

            {/* Body */}
            <View style={[styles.content, { alignItems: "center" }]}>
              <Text style={[styles.title]}>{item.name}</Text>
              <Text
                style={[
                  styles.overview,
                  { fontFamily: fontsLoaded ? "boldItalic" : null },
                ]}
              >
                {item.dur}
              </Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonsSection}>
              <View style={styles.buttons}>
                {/* <Text style={styles.buttonsText}>
                  {item.Rating} <Icon name="star" size={15} color="#C3801B" />
                </Text> */}
                <TouchableOpacity onPress={() => handlePhonePress(item.number)}>
                  <Text style={styles.buttonsText}>Phone <Icon name="phone" size={15} color="white" /></Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => Linking.openURL(item.website)}>
      <Text style={styles.buttonsText}>Website</Text>
    </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.location)}
                >
                  <Text style={styles.buttonsText}>
                    Location <Icon name="map-marker" size={15} color="white" />
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Feedback Button */}
              <TouchableOpacity style={styles.feedback} onPress={handlePress}>
                <Text style={styles.feedbackText}>Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      keyExtractor={(item) => item.id}
      // ListHeaderComponent={<Text>Buses inside and outside city</Text>}
      // ListFooterComponent={<Text>kkkkk</Text>}
    ></FlatList>
  );
}
