import React from 'react'
import { View, Text,Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Sign in" onPress={() => navigation.navigate('Sign in')}/>
        <Button title="Sign up" onPress={() => navigation.navigate('Sign up')} />
        <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    );
}