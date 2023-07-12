import React from 'react'
import { View, Button, Text } from 'react-native';

export const PassengersFlightScreen4 = ({ navigation }) => {
  return (
    <View>
      <Text>How any passengers?</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate('ResultsScreen')}
      />
    </View>
  )
};