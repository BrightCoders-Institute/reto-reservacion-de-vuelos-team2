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
          <FromContent />
        </View>

        <Icon name="airplane" size={25} color="#899FFF" />

        <View style={styles.ToFromContainer}>
          <ToContent />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.infoText}>September 3, 2020</Text>
        <Text style={[styles.infoText, styles.textRight]}>2 passengers</Text>
      </View>
    </View>
  );
};
