import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";


export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting</Text>
      <Button
        title="Contact us"
        onPress={() => navigation.navigate('contactus')}
      />
    </View>
  );
}

