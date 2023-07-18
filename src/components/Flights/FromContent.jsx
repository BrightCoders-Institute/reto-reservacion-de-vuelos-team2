import React from 'react';
import {Text} from 'react-native';
import {styles} from '../../styles/AppStyles';

export const FromContent = ({abbr = 'BEG', country = 'Serbia'}) => {
  return (
    <>
      <Text style={styles.airportText}>{abbr}</Text>
      <Text style={styles.countryText}>{country}</Text>
    </>
  );
};
