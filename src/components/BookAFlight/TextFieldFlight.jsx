import React from 'react';
import {styles} from '../../styles/AppStyles';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export const TextFieldFlight = ({
  inputPlaceholder,
  inputValue,
  onChangeTextFn,
}) => {
  const clearInput = () => {
    onChangeTextFn('');
  };

  return (
    <View style={[styles.textFieldFlight, styles.inputFieldContainer]}>
      <TextInput
        placeholder={inputPlaceholder}
        value={inputValue}
        style={{paddingBottom: 5, fontSize: 14, color: 'black', paddingRight: 30}}
        onChangeText={onChangeTextFn}
      />
      {inputValue !== '' && (
        <TouchableOpacity onPress={clearInput} style={styles.iconContainer}>
          <Icon name="x-circle-fill" size={18} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};
