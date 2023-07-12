import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {CalendarFlightComponent} from '../../components/BookAFlight/CalendarFlightComponent';

export const DateFlightScreen3 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);

  return (
    <View style={styles.fromFlightContainer}>
      <TitleFlightComponent title="Select date" paddingTop={115} />

      <CalendarFlightComponent />

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('PassengersScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
