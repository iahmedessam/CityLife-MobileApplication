import React from 'react'
import { View, Button } from 'react-native'

export default function HomeScreen({ navigation }) {

  function handleSignout() {
    navigation.navigate('Home')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sign in" onPress={() => navigation.navigate('Sign in')} />
      <Button title="Sign up" onPress={() => navigation.navigate('Sign up')} />
      <Button title="Sign out" onPress={handleSignout} />
    </View>
  );
}