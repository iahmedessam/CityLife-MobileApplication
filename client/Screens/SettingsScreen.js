import React from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Maintenance Payment" onPress={() => navigation.navigate('Maintenance Payment')} color="#3F72AF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="About" onPress={() => navigation.navigate('About')} color="#3F72AF" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Contact us" onPress={() => navigation.navigate('Contact us')} color="#3F72AF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBE2EF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3F72AF",
    overflow: "hidden",
  },
});