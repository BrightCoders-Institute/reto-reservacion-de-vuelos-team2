import React from 'react';
import {styles} from '../../styles/AppStyles';
import {TouchableOpacity} from 'react-native';

export const ButtonFlightComponent = ({onPressFn, isDisabled, children}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPressFn}
      style={[styles.buttonSignUp, isDisabled ? null : styles.btnEnabled]}>
      {children}
    </TouchableOpacity>
  );
};
