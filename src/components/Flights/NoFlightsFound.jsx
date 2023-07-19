import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {styles} from '../../styles/AppStyles';
import ImageNotFound from '../../assets/img/not-found2.webp';

export const NoFlightsFound = () => {
  const {height} = useWindowDimensions();
  return (
    <View>
      <Image
        source={ImageNotFound}
        style={[styles.logo, {height: height * 0.4, opacity: 0.5}]}
        resizeMode="contain"
      />
      <Text style={styles.textNotFound}>No flights for this user.</Text>
    </View>
  );
};
