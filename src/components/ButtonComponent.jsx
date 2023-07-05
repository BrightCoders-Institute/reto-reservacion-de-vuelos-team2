import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../styles/AppStyles';

export const ButtonComponent = ({onPressFn, isDisabled, children}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPressFn}
      style={[styles.buttonSignUp, isDisabled ? null : styles.btnEnabled]}
    >
      {children}
    </TouchableOpacity>
  );
};
