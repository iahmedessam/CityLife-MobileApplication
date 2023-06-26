import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Schools from "./Schools";
import Kindergarten from "./Kindergarten";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Education() {
  // const [TopNav, setTopNav] = useState("Schools");
  const [showSchools, setShowSchools] = useState(true);
  const [showKindergartens, setShowKindergartens] = useState(false);
  const handleSchoolsPress = () => {
    setShowSchools(true);
    setShowKindergartens(false);

  };
  const handleKindergartensPress = () => {
    setShowSchools(false);
    setShowKindergartens(true);
  };

  return (
    <ScrollView >
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Education in Rehab</Text>
        <Text style={styles.subheading}>
          Discover the best schools in Rehab Egypt and give your child the gift of quality education. Our featured schools are dedicated to providing exceptional learning experiences. The campuses of the schools in Al Rehab City are well-designed and spacious, with modern facilities.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
            ]}
            onPress={() => handleSchoolsPress()}
          >
            <Text style={styles.buttonText}>Schools</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
            ]}
            onPress={() => handleKindergartensPress()}
          >
            <Text style={styles.buttonText}>Kindergartens</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
      {showSchools && <Schools />}
          {showKindergartens && <Kindergarten />}
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
    flex:1
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
