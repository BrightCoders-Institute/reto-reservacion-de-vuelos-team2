import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text, Dimensions} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {TextFieldFlight} from '../../components/BookAFlight/TextFieldFlight';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export const ToFlightScreen2 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);
  const {toField, onResetForm, onInputChange} = useForm({
    toField,
  });

  return (
    <View style={styles.fromFlightContainer}>

      <View style={{height: height * 0.13}}>
        <View style={styles.topContainer}>
          <View style={[styles.ToFromContainer, styles.underlineContainer]}>
            <FromContent />
          </View>

          <Icon name="airplane" size={25} color="#899FFF" />

          <View style={styles.ToFromContainer}></View>
        </View>
      </View>

      <View style={{height: height * 0.12, justifyContent: 'center'}}>
        <TitleFlightComponent title="Where will you be flying to?" />
      </View>

      <View style={(styles.textInputContainer, {height: height * 0.55})}>
        <TextFieldFlight
          inputPlaceholder="Select location"
          inputValue={toField}
        />
      </View>

      <View style={{height: height * 0.18}}>
        <ButtonFlightComponent
          onPressFn={() => navigation.navigate('DateScreen')}
          isDisabled={false}>
          <Text style={styles.buttonText}>Next</Text>
        </ButtonFlightComponent>
      </View>
    </View>
  );
};
