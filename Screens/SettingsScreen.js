import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";


export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Contact us" onPress={() => navigation.navigate('contactus')}/>
      <Button title="About" onPress={() => navigation.navigate('about')}/>
      <Button title="Payment" onPress={() => navigation.navigate('MaintenancePayment')}/>
    </View>
  );
}

