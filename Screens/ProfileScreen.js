import React from 'react'
import { useContext } from 'react';
import { View, Button } from 'react-native'
import { DataContext } from '../Context/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {

  const { userData, setUserData } = useContext(DataContext)

  const handleSignout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setUserData(null)
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {userData ? <Button title="Sign out" onPress={handleSignout} />
        :
        <View>
          <Button title="Sign in" onPress={() => navigation.navigate('Sign in')} />
          <Button title="Sign up" onPress={() => navigation.navigate('Sign up')} />
        </View>}
    </View>
  );
}