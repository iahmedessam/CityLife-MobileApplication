import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import ServicesScreen from "../Screens/ServicesScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import About from "../Components/About";
import SignIn from "../Components/SignIn";
import Sports from "../Components/Sports";
import ContactUs from "../Components/ContactUs";

export const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="services" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Services" component={ServicesScreen} />
            <Stack.Screen name="sports" component={Sports} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="settings" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="contactus" component={ContactUs} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="profile" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="signin" component={SignIn} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}