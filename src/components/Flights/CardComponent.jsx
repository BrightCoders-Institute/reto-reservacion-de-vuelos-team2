import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CardComponent = ({navigation, data}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <View style={styles.ToFromContainer}>
          <Text style={styles.airportText}>BEG</Text>
          <Text style={styles.countryText}>Serbia</Text>
        </View>
        <Icon name="airplane" size={25} color="#899FFF" />
        <View style={styles.ToFromContainer}>
          <Text style={[styles.airportText, styles.textRight]}>AMS</Text>
          <Text style={[styles.countryText, styles.textRight]}>
            Netherlands
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.infoText}>September 3, 2020</Text>
        <Text style={[styles.infoText, styles.textRight]}>2 passengers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#86898C',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  ToFromContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: 120,
  },
  airportText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  textRight: {
    textAlign: 'right',
  },
  countryText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#86898C',
  },
  infoText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  cardContainer: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
});
