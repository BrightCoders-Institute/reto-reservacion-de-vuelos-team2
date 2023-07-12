import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/AppStyles';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {useForm} from '../../hooks/useForm';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';

export const FromFlightScreen1 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const {fromField, onResetForm, onInputChange} = useForm({
    fromField,
  });

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: 80}} />
      <TitleFlightComponent
        title="Where are you now?"
        paddingTop={115}
        marginTop={40}
      />

      <TextFieldFlight
        inputPlaceholder="Select location"
        inputValue={fromField}
      />

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('ToScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
