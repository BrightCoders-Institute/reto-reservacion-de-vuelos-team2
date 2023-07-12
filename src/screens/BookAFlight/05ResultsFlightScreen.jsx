import React from 'react'
import { View, Button, Text } from 'react-native';

export const ResultsFlightScreen5 = ({ navigation }) => {
  return (
    <View>
      <Text>Your request was received.</Text>
      <Button
        title='Finish'
        onPress={() => navigation.navigate('HomePageScreen')}
      />
    </View>
  )
};