import { View, Text,Button } from 'react-native'
import React from 'react'

export default function SignIn({navigation}) {
  return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}