import React from 'react';
import {styles} from '../../styles/AppStyles';
import { View, Text } from 'react-native';

export const TitleFlightComponent = ({ title, paddingTop = 0, }) => {
  return (
    <View>
      <Text style={[styles.titleFlight, { paddingTop: paddingTop }]}>{ title }</Text>
    </View>
  );
};
