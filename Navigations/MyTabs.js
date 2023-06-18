import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import About from "../Components/About";
import ContactUs from "../Components/ContactUs";
import Banks from "../Components/Banks";
import Cinema from "../Components/Cinema";
import DashBoard from "../Components/DashBoard";
import Education from "../Components/Education";
import Fashion from "../Components/Fashion";
import Footer from "../Components/Footer";
import Health from "../Components/Health";
import HomeServices from "../Components/HomeServices";
import Hospitals from "../Components/Hospitals";
import Maintenance from "../Components/Maintenance";
import MaintenancePayment from "../Components/MaintenancePayment";
import Markets from "../Components/Markets";
import Restaurants from "../Components/Restaurants";
import Shopping from "../Components/Shopping";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Sports from "../Components/Sports";
import Stores from "../Components/Stores";
import Transportation from "../Components/Transportation";

export const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {() => (
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="banks" component={Banks} />
          <Stack.Screen name="cinema" component={Cinema} />
          <Stack.Screen name="education" component={Education} />
          <Stack.Screen name="fashion" component={Fashion} />
          <Stack.Screen name="health" component={Health} />
          <Stack.Screen name="homeServices" component={HomeServices} />
          <Stack.Screen name="hospitals" component={Hospitals} />
          <Stack.Screen name="maintenance" component={Maintenance} />
          <Stack.Screen name="markets" component={Markets} />
          <Stack.Screen name="restaurants" component={Restaurants} />
          <Stack.Screen name="shopping" component={Shopping} />
          <Stack.Screen name="sports" component={Sports} />
          <Stack.Screen name="stores" component={Stores} />
          <Stack.Screen name="transportation" component={Transportation} />
        </Stack.Navigator>
      )}
      <Tab.Screen name="settings" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="settings" component={SettingsScreen} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="contactus" component={ContactUs} />
            <Stack.Screen name="maintenancePayment" component={MaintenancePayment} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="profile" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="profile" component={ProfileScreen} />
            <Stack.Screen name="dashboard" component={DashBoard} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="signin" component={SignIn} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}