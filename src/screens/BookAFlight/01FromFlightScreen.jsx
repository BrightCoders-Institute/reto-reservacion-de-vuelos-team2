import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {styles} from '../../styles/AppStyles';
import { TitleFlightComponent } from '../../components/BookAFlight/TitleFlightComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { useForm } from '../../hooks/useForm';
import { TextFieldFlight } from '../../components/BookAFlight/TextFieldFlight';

export const FromFlightScreen1 = ({ navigation }) => {

  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const { fromField, onResetForm, onInputChange } = useForm({
    fromField,
  });

  return (
    <View>
      <TitleFlightComponent
        title="Where are you now?"
      />

      <TextFieldFlight
        inputPlaceholder="Select location"
        inputValue={fromField}
      />

      <ButtonComponent
        onPressFn={() => navigation.navigate('ToScreen')}
        isDisabled={false}
      >
        <Text style={styles.buttonText}>Next</Text>
      </ButtonComponent>
    </View>
  );
};
