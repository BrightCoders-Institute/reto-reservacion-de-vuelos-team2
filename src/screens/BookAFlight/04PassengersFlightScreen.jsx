import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {PassengersFlightPicker} from '../../components/BookAFlight/PassengersFlightPicker';

export const PassengersFlightScreen4 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);

  return (
    <View style={styles.fromFlightContainer}>
      <TitleFlightComponent title="How many passengers?" paddingTop={115} />

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 185,
        }}>
        <PassengersFlightPicker />
      </View>

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('ResultsScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
