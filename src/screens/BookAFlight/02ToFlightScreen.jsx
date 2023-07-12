import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import Icon from 'react-native-vector-icons/Ionicons';

export const ToFlightScreen2 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const {toField, onResetForm, onInputChange} = useForm({
    toField,
  });

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: 80}}>
        <View style={styles.topContainer}>
          <View style={[styles.ToFromContainer, styles.underlineContainer]}>
            <FromContent />
          </View>

          <Icon name="airplane" size={25} color="#899FFF" />

          <View style={styles.ToFromContainer}></View>
        </View>
      </View>

      <TitleFlightComponent
        title="Where will you be flying to?"
        paddingTop={115}
        marginTop={38}
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
