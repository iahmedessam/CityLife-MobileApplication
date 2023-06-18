import React from 'react'
import { View, Text,Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
        <Button
          title="Go to signin"
          onPress={() => navigation.navigate('signin')}
        />
      </View>
    );
}