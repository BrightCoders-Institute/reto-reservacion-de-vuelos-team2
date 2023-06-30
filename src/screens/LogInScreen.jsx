import React from 'react';
import { Text, View, Button } from 'react-native';

export const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LogIn Screen</Text>
      <Button title='SignUp' onPress={ () => navigation.navigate('SignUpScreen') } />
    </View>
  )
}
