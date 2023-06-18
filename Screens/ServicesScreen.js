import { useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";


export default function SettingsScreen({ navigation }) {
    const navigate = useNavigation()
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Services</Text>
      <Button
        title="Go to Sports"
        onPress={() => navigation.navigate('sports')}
      />
            <Button
        title="Go to Sports"
        onPress={() => navigation.navigate('sports')}
      />
    </View>
  );
}