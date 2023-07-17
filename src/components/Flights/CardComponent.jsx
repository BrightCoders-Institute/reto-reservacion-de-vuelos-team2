import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/AppStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {FromContent} from './FromContent';
import {ToContent} from './ToContent';

export const CardComponent = ({navigation, data}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.topContainer, styles.underlineContainer]}>
        <View style={styles.ToFromContainer}>
          <FromContent abbr={data.fromAbbr} country={data.fromCountry} />
        </View>

        <Icon name="airplane" size={25} color="#899FFF" />

        <View style={styles.ToFromContainer}>
          <ToContent abbr={data.toAbbr} country={data.toCountry} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.infoText}>{data.date}</Text>
        <Text style={[styles.infoText, styles.textRight]}>{`${data.passengers} passengers`}</Text>
      </View>
    </View>
  );
};
