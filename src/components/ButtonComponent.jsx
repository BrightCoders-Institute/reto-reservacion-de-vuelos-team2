import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../styles/AppStyles';

export const ButtonComponent = ({onPressFn, isDisabled, children}) => {
  return (
    <TouchableOpacity
      disabled={true}
      onPress={() => console.log('Sign Up')}
      style={styles.buttonSignUp}>
      {/* <Text style={styles.buttonText}>Sign Up</Text> */}
      {children}
    </TouchableOpacity>
  );
};
