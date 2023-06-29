import React from 'react';
import {styles} from '../styles/AppStyles';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const CheckBoxComponent = ({
  checkboxValue,
  onCheckboxChange,
  tintColors,
  children,
}) => {
  return (
    <View style={styles.checkboxItemContainer}>
      <CheckBox
        disabled={false}
        value={checkboxValue}
        tintColors={tintColors}
        onValueChange={onCheckboxChange}
      />
      {children}
    </View>
  );
};
