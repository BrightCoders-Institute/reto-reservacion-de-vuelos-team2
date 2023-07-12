import React from 'react';
import {styles} from '../../styles/AppStyles';
import {Text} from 'react-native';

export const ToContent = () => {
  return (
    <>
      <Text style={[styles.airportText, styles.textRight]}>AMS</Text>
      <Text style={[styles.countryText, styles.textRight]}>Netherlands</Text>
    </>
  );
};
