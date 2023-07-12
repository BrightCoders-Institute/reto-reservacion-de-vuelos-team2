import React from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';

export const ResultsFlightScreen5 = ({navigation}) => {
  return (
    <View style={styles.fromFlightContainer}>
      <TitleFlightComponent
        title="Your request was received."
        paddingTop={280}
      />

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('HomePageScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Finish</Text>
      </ButtonFlightComponent>
    </View>
  );
};
