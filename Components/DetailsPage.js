import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/Data";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import styles from'../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function DetailsPage({ route }) {
  const { All,fontsLoaded } = useContext(DataContext);
  const { id,name } = route.params;


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

  for (let category of Object.values(All)) {
    for (let ele of category) {
      if (+ele.id === +id) {
        return (
          <>
            <ScrollView>
                <View style={styles.card} key={ele.id}>
                  {/* Image */}
                  <Image style={styles.img} source={{ uri: ele.img1 }}></Image>

                  {/* Body */}
                  <View style={styles.content}>
                    <Text style={[styles.title]}>{ele.name}</Text>
                    <Text
                      style={[
                        styles.overview,
                        { fontFamily: fontsLoaded ? "italic" : null },
                      ]}
                    >
                      {ele.overview}
                    </Text>
                  </View>

                  {/* Buttons Section */}
                  <View style={styles.buttonsSection}>
                    <View style={styles.buttons}>
                      <Text style={styles.buttonsText}>
                        {ele.Rating}{" "}
                        <Icon name="star" size={15} color="#C3801B" />
                      </Text>
                      <TouchableOpacity
                        onPress={() => handlePhonePress(ele.number)}
                      >
                        <Text style={styles.buttonsText}>
                          Phone <Icon name="phone" size={15} color="white" />
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(ele.website)}
                      >
                        <Text style={styles.buttonsText}>Website</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(ele.location)}
                      >
                        <Text style={styles.buttonsText}>
                          Location{" "}
                          <Icon name="map-marker" size={15} color="white" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* Feedback Button */}
                    <TouchableOpacity
                      style={styles.feedback}
                      onPress={handlePress}
                    >
                      <Text style={styles.feedbackText}>Feedback</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              
            </ScrollView>
          </>
        );
      }
    }
  }
}
