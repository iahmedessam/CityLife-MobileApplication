import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { View, Text, TouchableOpacity } from "react-native";
import Pharmacies from "./Pharmacies";
import Centers from "./Centers";
import { ScrollView } from "react-native-gesture-handler";

export default function Health() {
  const [showCenters, setShowCenters] = useState(true);
  const [showPharmacies, setShowPharmacies] = useState(false);
  const handleCentersPress = () => {
    setShowCenters(true);
    setShowPharmacies(false);


  };
  const handlePharmaciesPress = () => {
    setShowCenters(false);
    setShowPharmacies(true);
  };
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Health and Wellness in Rehab</Text>
      <Text style={styles.subheading}>
      Experience a comprehensive approach to health and wellness in Rehab City, Egypt. Our community is dedicated to providing top-notch healthcare services and facilities to residents. Whether you're in need of medical care, preventive services, or specialized treatments, you'll find a range of options to meet your healthcare needs.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
          ]}
          onPress={() => handleCentersPress()}
        >
          <Text style={styles.buttonText}>Centers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
          ]}
          onPress={() => handlePharmaciesPress()}
        >
          <Text style={styles.buttonText}>Pharmacies</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View>
    {showCenters && <Centers />}
        {showPharmacies && <Pharmacies />}
    </View>
  </View>
  </ScrollView>
);
}

const styles = {
container: {
  flex: 1,
},
headingContainer: {
  padding: 20,
  alignItems: "center",
},
heading: {
  fontWeight: "bold",
  fontSize: 20,
  marginBottom: 10,
},
subheading: {
  fontSize: 16,
  textAlign: "center",
  marginBottom: 20,
},
buttonContainer: {
  flexDirection: "row",
},
button: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  backgroundColor: "#112D4E",
  marginHorizontal: 5,
flex:1,

},
buttonText: {
  color: "#fff",
  fontWeight: "bold",
  textAlign:"center"
},
activeButton: {
  backgroundColor: "#112D4E",
},
};
