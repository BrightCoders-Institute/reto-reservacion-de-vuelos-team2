import React from 'react'
import { View, Button, Text } from 'react-native';

export const DateFlightScreen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Select Date</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate('PassengersScreen')}
      />
    </View>
  )
};