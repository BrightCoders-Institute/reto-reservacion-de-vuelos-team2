import React from 'react';
import { TextInput, View } from 'react-native';

export const TextFieldFlight = ({ inputPlaceholder, inputValue }) => {
  return (
    <View>
      <TextInput
        placeholder={inputPlaceholder}
        value={inputValue}
      />
    </View>
  );
};
