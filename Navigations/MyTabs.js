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
import Banks from "../Components/Banks";


export const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTabs() {
    // const index = useNavigationState(state => state.index);
    // console.warn(index)


  return (
    <Tab.Navigator>
      <Tab.Screen name="home" options={{ headerShown: false }}>
      {() => (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="banks" component={Banks} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
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

// const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
// const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
// const imgPath = "https://image.tmdb.org/t/p/w500/";
// const path = "/discover/movie?sort_by=popularity.desc";
// const apiUrl = url + path + apiKey;