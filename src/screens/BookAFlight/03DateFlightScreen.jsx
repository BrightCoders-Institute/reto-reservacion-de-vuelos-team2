import React, {useState} from 'react';
import {styles} from '../../styles/AppStyles';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleFlightComponent} from '../../components/BookAFlight/TitleFlightComponent';
import {ButtonFlightComponent} from '../../components/BookAFlight/ButtonFlightComponent';
import {CalendarFlightComponent} from '../../components/BookAFlight/CalendarFlightComponent';
import {FromContent} from '../../components/Flights/FromContent';
import {ToContent} from '../../components/Flights/ToContent';

export const DateFlightScreen3 = ({navigation}) => {
  const [isDesabledSignupBtn, setIsDesabledSignupBtn] = useState(true);

  return (
    <View style={styles.fromFlightContainer}>
      <View style={{height: 80}}>
        <View style={[styles.topContainer, styles.underlineContainer]}>
          <View style={styles.ToFromContainer}>
            <FromContent />
          </View>

          <Icon name="airplane" size={25} color="#899FFF" />

          <View style={styles.ToFromContainer}>
            <ToContent />
          </View>
        </View>
      </View>
      <TitleFlightComponent title="Select date" marginTop={45} />

      <CalendarFlightComponent />

      <ButtonFlightComponent
        onPressFn={() => navigation.navigate('PassengersScreen')}
        isDisabled={false}>
        <Text style={styles.buttonText}>Next</Text>
      </ButtonFlightComponent>
    </View>
  );
};
