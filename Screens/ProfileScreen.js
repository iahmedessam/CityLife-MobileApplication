import React from "react";
import { useContext } from "react";
import { View, Button } from "react-native";
import { Text, StyleSheet } from "react-native";
import { DataContext } from "../Context/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const { userData, setUserData } = useContext(DataContext);

  const handleSignout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setUserData(null);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <>
      {userData ? (
        <View View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Sign out" onPress={handleSignout} color="#3F72AF" />
          </View>
        </View>
      ) : (
        <View View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign in"
              onPress={() => navigation.navigate("Sign in")}
              color="#3F72AF"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign up"
              onPress={() => navigation.navigate("Sign up")}
              color="#3F72AF"
            />
          </View>
        </View>
      )}
    </>
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
