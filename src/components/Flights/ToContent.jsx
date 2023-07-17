import React from 'react';
import {styles} from '../../styles/AppStyles';
import {Text} from 'react-native';

export const ToContent = ({abbr = 'AMS', country = 'Netherlands'}) => {
  return (
    <>
      <Text style={[styles.airportText, styles.textRight]}>{abbr}</Text>
      <Text style={[styles.countryText, styles.textRight]}>{country}</Text>
    </>
  );
};
