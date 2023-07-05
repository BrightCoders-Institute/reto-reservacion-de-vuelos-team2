import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/AppStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export const TextFieldForm = ({
  inputTitle,
  inputValue,
  onInputChange,
  extraData,
  invalidText,
  isInputValid = true,
  setInputValid = undefined
}) => {

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if(setInputValid) {
      setInputValid(true);
    }
  }, []);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const textInputContent = () => {

    let inputFieldContent = <></>;
    if (inputTitle === 'Password *') {
      inputFieldContent = (
        <View style={styles.inputFieldContainer}>

          <TextInput
            style={[styles.inputField, isFocus || (inputValue.trim() !== '') ? styles.focus : '']}
            value={inputValue}
            onChangeText={onInputChange}
            secureTextEntry={!extraData.showPassword}
            autoCapitalize="none"
            onBlur={handleBlur}
            onFocus={handleFocus}
            cursorColor='#5C65B1'
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
          style={[styles.inputField, isFocus || (inputValue.trim() !== '') ? styles.focus : '']}
          value={inputValue}
          onChangeText={onInputChange}
          autoCapitalize="none"
          onBlur={handleBlur}
          onFocus={handleFocus}
          cursorColor='#5C65B1'
        />
      );
    }

    return inputFieldContent;
  };

  return (
    <View style={styles.fieldContainer}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={styles.textInput}>{ inputTitle }</Text>
        { isInputValid === false ? <Text style={[styles.feedbackValidation]}>{ invalidText }</Text> : ''}
      </View>
      {textInputContent()}
    </View>
  );
};
