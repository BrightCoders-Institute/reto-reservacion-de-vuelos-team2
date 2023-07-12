import React from 'react';
import { View, Button, Text } from 'react-native';

export const ToFlightScreen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Where will you be flying to?</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate('DateScreen')}
      />
    </View>
  )
};
