import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const FloatButtonComponent = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('FlightStackNavigator')}>
      <Icon name="add" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    right: 170,
    backgroundColor: '#899FFF',
    borderColor: '#899FFF',
    borderRadius: 100,
    elevation: 8,
  },
});
