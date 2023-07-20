import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../styles/AppStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const FloatButtonComponent = ({onPressFn}) => {
  return (
    <TouchableOpacity
      style={styles.flightButton}
      activeOpacity={0.7}
      onPress={onPressFn}>
      <Icon name="plus" size={35} color="#fff" />
    </TouchableOpacity>
  );
};
