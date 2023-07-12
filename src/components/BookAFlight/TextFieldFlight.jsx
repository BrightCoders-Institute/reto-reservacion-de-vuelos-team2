import React from 'react';
import {styles} from '../../styles/AppStyles';
import { TextInput, View } from 'react-native';

export const TextFieldFlight = ({ inputPlaceholder, inputValue }) => {
  return (
    <View style={styles.textFieldFlight}>
      <TextInput
        placeholder={inputPlaceholder}
        value={inputValue}
        style={{paddingBottom: 5, fontSize: 14, color: 'black',}}
      />
    </View>
  );
};
