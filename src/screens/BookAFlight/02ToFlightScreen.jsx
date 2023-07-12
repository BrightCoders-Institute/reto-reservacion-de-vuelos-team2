import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';

export const ToFlightScreen2 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const {toField, onResetForm, onInputChange} = useForm({
    toField,
  });

  return (
    <View style={styles.fromFlightContainer}>
      <TitleFlightComponent
        title="Where will you be flying to?"
        paddingTop={115}
      />

      <TextFieldFlight
        inputPlaceholder="Select location"
        inputValue={toField}
      />

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('DateScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
