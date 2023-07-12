import React from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';

export const TitleFlightComponent = ({
  title,
  paddingTop = 0,
  marginBottom = 0,
  marginTop = 0,
}) => {
  return (
    <View style={{marginBottom: marginBottom, marginTop: marginTop}}>
      <Text style={[styles.titleFlight, {paddingBottom: paddingTop}]}>
        {title}
      </Text>
    </View>
  );
};
