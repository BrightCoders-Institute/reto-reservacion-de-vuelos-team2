import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/AppStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export const TextFieldForm = ({
  inputTitle,
  inputValue,
  onInputChange,
  extraData,
}) => {
  const textInputContent = () => {
    let inputFieldContent = <></>;
    if (inputTitle === 'Password *') {
      inputFieldContent = (
        <View style={styles.inputFieldContainer}>
          <TextInput
            style={styles.inputField}
            value={inputValue}
            onChangeText={onInputChange}
            secureTextEntry={!extraData.showPassword}
          />
          <TouchableOpacity
            onPress={extraData.handleShowPassword}
            style={styles.iconContainer}>
            <Icon
              name={extraData.showPassword ? 'eye' : 'eye-off'}
              size={25}
              color="#888888"
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      inputFieldContent = (
        <TextInput
          style={styles.inputField}
          value={inputValue}
          onChangeText={onInputChange}
        />
      );
    }

    return inputFieldContent;
  };

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.textInput}>{inputTitle}</Text>
      {textInputContent()}
    </View>
  );
};
